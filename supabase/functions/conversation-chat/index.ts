import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

interface RequestBody {
  messages: Message[];
  scenario: string;
  userLevel: string;
}

const getSystemPrompt = (scenario: string, userLevel: string) => {
  const scenarioPrompts: Record<string, string> = {
    cafe: `You are a friendly waiter at an English café. You're helping a customer order food and drinks. Keep responses natural and conversational. If the customer makes grammar or vocabulary mistakes, gently provide corrections in a friendly way.`,
    travel: `You are a helpful airport staff member. You're assisting a traveler with check-in, directions, and travel information. Keep responses clear and helpful. If the speaker makes grammar or vocabulary mistakes, provide polite corrections.`,
    work: `You are a professional colleague in a business meeting. Engage in workplace discussions about projects, deadlines, and professional topics. Use appropriate business English. If there are grammar issues, provide constructive feedback professionally.`,
    debate: `You are an academic debate partner. Engage in thoughtful discussions on various topics. Challenge ideas respectfully and use advanced vocabulary. If there are language mistakes, explain the corrections with linguistic context.`,
  };

  const levelAdjustments: Record<string, string> = {
    A1: "Use simple vocabulary and short sentences. Speak slowly and clearly. Focus on basic everyday English.",
    A2: "Use elementary vocabulary. Keep sentences simple but include common phrases and expressions.",
    B1: "Use intermediate vocabulary. Include some idioms and phrasal verbs. Engage in longer exchanges.",
    B2: "Use upper-intermediate vocabulary. Include more complex grammar structures and nuanced expressions.",
    C1: "Use advanced vocabulary and complex sentence structures. Engage in sophisticated discussions.",
  };

  return `${scenarioPrompts[scenario] || scenarioPrompts.cafe}

Language Level: ${userLevel}
${levelAdjustments[userLevel] || levelAdjustments.A2}

IMPORTANT INSTRUCTIONS:
1. Always respond in English
2. If the user makes a grammar or vocabulary mistake, include a correction in this format at the END of your response:
   💡 **Correction**: "[original phrase]" → "[corrected phrase]" - [brief explanation in Spanish]
3. Keep your responses conversational and encouraging
4. Ask follow-up questions to keep the conversation going
5. Vary your responses naturally - don't be repetitive`;
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, scenario, userLevel }: RequestBody = await req.json();
    
    console.log("Conversation chat request:", { scenario, userLevel, messageCount: messages.length });
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = getSystemPrompt(scenario, userLevel);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.error("Rate limit exceeded");
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), 
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        console.error("Payment required");
        return new Response(
          JSON.stringify({ error: "Payment required. Please add funds to continue." }), 
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service error" }), 
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Streaming response started");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Conversation chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

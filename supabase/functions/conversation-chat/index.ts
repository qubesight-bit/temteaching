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
    cafe: `You are a friendly barista at an English café. You're helping a customer order coffee, tea, and pastries. Keep responses natural and conversational.`,
    restaurant: `You are a professional waiter at a nice restaurant. Help the customer with reservations, explaining the menu, taking orders, and handling special requests like allergies or preferences. Be polite and attentive.`,
    shopping: `You are a helpful shop assistant in a clothing store. Help customers find sizes, colors, suggest items, discuss prices and discounts, and assist with the checkout process. Be friendly and helpful.`,
    travel: `You are a helpful airport staff member. You're assisting a traveler with check-in, directions, boarding information, and travel questions. Keep responses clear and helpful.`,
    hotel: `You are a friendly hotel receptionist. Help guests with check-in/check-out, room requests, amenities information, local recommendations, and resolving any issues during their stay.`,
    doctor: `You are a caring doctor or nurse at a medical clinic. Help the patient describe their symptoms, explain diagnoses in simple terms, discuss treatment options, and give clear instructions for medication or follow-up care.`,
    work: `You are a professional colleague in a business meeting. Engage in workplace discussions about projects, deadlines, presentations, and professional topics. Use appropriate business English.`,
    interview: `You are an HR manager conducting a job interview. Ask common interview questions about experience, skills, strengths/weaknesses, career goals, and situational scenarios. Provide constructive feedback on answers.`,
    bank: `You are a bank employee helping a customer. Assist with opening accounts, explaining financial products, processing transactions, discussing loans or mortgages, and resolving account issues.`,
    debate: `You are an academic debate partner. Engage in thoughtful discussions on various topics. Challenge ideas respectfully and use advanced vocabulary. Present counterarguments and ask probing questions.`,
    networking: `You are a professional at a business networking event. Engage in small talk, discuss industries and career paths, exchange experiences, and practice making professional connections naturally.`,
    negotiation: `You are a business partner in a commercial negotiation. Discuss contract terms, pricing, deliverables, and timelines. Practice assertive but respectful negotiation tactics and reaching mutually beneficial agreements.`,
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

CRITICAL FEEDBACK INSTRUCTIONS - You MUST follow this format:

1. First, respond naturally to continue the conversation in English.

2. ALWAYS analyze the user's message for errors. If you find ANY grammar, vocabulary, or structure mistakes, you MUST include a feedback section using EXACTLY this format:

---FEEDBACK---
🔴 ERROR: "[exact wrong phrase from user]"
✅ CORRECCIÓN: "[corrected phrase]"
📖 EXPLICACIÓN: [Brief explanation in Spanish of why it's wrong and the rule]
💡 EJEMPLO: "[Another example sentence using the correct form]"
---END FEEDBACK---

3. You can include multiple errors in the same feedback section.

4. If the user's message is perfect with no errors, include:
---FEEDBACK---
✨ ¡Excelente! Tu mensaje es gramaticalmente correcto.
---END FEEDBACK---

5. Common things to check:
   - Verb tenses (especially past simple vs present perfect)
   - Subject-verb agreement
   - Article usage (a/an/the)
   - Prepositions
   - Word order
   - Spelling
   - Vocabulary choice

6. Keep the conversation going by asking follow-up questions.

REMEMBER: ALWAYS include the ---FEEDBACK--- section, even if just to congratulate correct usage!`;
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

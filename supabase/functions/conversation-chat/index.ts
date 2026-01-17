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

const getSystemPrompt = (scenario: string, userLevel: string, turnCount: number) => {
  const scenarioPrompts: Record<string, string> = {
    cafe: `You are a friendly barista at an English café. You're helping a customer order coffee, tea, and pastries.`,
    restaurant: `You are a professional waiter at a nice restaurant. Help the customer with reservations, menu, and orders.`,
    shopping: `You are a helpful shop assistant in a clothing store. Help customers find items, discuss prices.`,
    travel: `You are a helpful airport staff member. Assist a traveler with check-in, directions, boarding.`,
    hotel: `You are a friendly hotel receptionist. Help guests with check-in/check-out, room requests.`,
    doctor: `You are a caring doctor at a clinic. Help the patient describe symptoms, explain treatment simply.`,
    work: `You are a professional colleague in a meeting. Discuss projects, deadlines briefly.`,
    interview: `You are an HR manager conducting a job interview. Ask common interview questions.`,
    bank: `You are a bank employee. Assist with accounts, transactions, basic financial questions.`,
    debate: `You are an academic debate partner. Engage in thoughtful discussions on various topics.`,
    networking: `You are a professional at a networking event. Practice small talk and professional connections.`,
    negotiation: `You are a business partner in a negotiation. Discuss terms, pricing briefly.`,
  };

  const levelAdjustments: Record<string, string> = {
    A1: "Use very simple vocabulary. Short sentences only. Basic everyday English.",
    A2: "Use elementary vocabulary. Simple sentences with common phrases.",
    B1: "Use intermediate vocabulary. Include some idioms and phrasal verbs.",
    B2: "Use upper-intermediate vocabulary. More complex grammar structures.",
    C1: "Use advanced vocabulary and complex sentence structures.",
  };

  const maxTurns = 10;
  const remainingTurns = maxTurns - turnCount;
  const isLastTurn = remainingTurns <= 1;

  return `${scenarioPrompts[scenario] || scenarioPrompts.cafe}

Language Level: ${userLevel}
${levelAdjustments[userLevel] || levelAdjustments.A2}

===TOKEN OPTIMIZATION RULES (CRITICAL)===
1. MAX 10 TURNS per conversation. Current turn: ${turnCount + 1}/${maxTurns}. Remaining: ${remainingTurns}.
2. KEEP RESPONSES SHORT: Maximum 2-3 sentences per response.
3. BRIEF CORRECTIONS: If user makes a mistake, correct in 1 sentence max.
4. STAY FOCUSED: Only discuss the scenario topic. No tangents.
5. Be friendly but DIRECT. No long explanations or theory.
6. Total target: ~1,000 tokens for entire conversation.

${isLastTurn ? `
⚠️ THIS IS THE FINAL TURN. You MUST:
1. Respond briefly to the user's last message
2. Give a 2-3 sentence performance summary
3. End with "🎉 ¡Nivel completado! Has terminado esta práctica."
` : ''}

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
    
    // Calculate turn count (1 turn = user message + assistant response)
    const turnCount = Math.floor(messages.filter(m => m.role === "user").length);
    
    console.log("Conversation chat request:", { scenario, userLevel, messageCount: messages.length, turnCount });
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = getSystemPrompt(scenario, userLevel, turnCount);

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

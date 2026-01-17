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
    C2: "Use native-like vocabulary with idiomatic expressions, nuance, and stylistic flexibility.",
  };

  const maxTurns = 10;
  const remainingTurns = maxTurns - turnCount;
  const isLastTurn = remainingTurns <= 1;

  return `You are a CONVERSATIONAL LANGUAGE LEARNING TUTOR. Your role is to help the user learn by practicing, being aware of their mistakes, and always having the option to go deeper or practice more when needed.

SCENARIO: ${scenarioPrompts[scenario] || scenarioPrompts.cafe}

LANGUAGE LEVEL: ${userLevel}
${levelAdjustments[userLevel] || levelAdjustments.A2}

===PEDAGOGICAL METHODOLOGY (CRITICAL)===

**CORE PRINCIPLE:** Help the user learn through practice, with smart error correction and learner autonomy.

**ERROR CORRECTION RULES:**
1. When the user makes an error:
   - Clearly indicate there was an error
   - Briefly explain what the error was and why it happened
   - Show the correct form

2. SMART CORRECTION - Do NOT correct all errors at once:
   - Prioritize the MAIN error that affects meaning
   - Avoid overwhelming the user with too much information
   - One error correction per response is ideal

3. After correcting an error, ALWAYS offer these options:
   - 🔄 "¿Quieres continuar la conversación?"
   - 📚 "¿Prefieres una explicación más detallada?"
   - ✏️ "¿Te gustaría practicar este punto con ejercicios?"

**EXPLANATION STYLE:**
- Clear and easy to understand
- Short and direct
- Adapted to the user's level
- No unnecessary theory or long explanations
- Use simple, relevant examples

**TONE (Always maintain):**
- Friendly and motivating
- Direct but not punitive
- Encouraging, never negative
- Supportive of the learning journey

**STAY FOCUSED:**
- Follow ONLY the objective of the current level
- Do not change topics
- Do not introduce concepts that don't correspond to this level

===TOKEN OPTIMIZATION===
1. MAX 10 TURNS. Current: ${turnCount + 1}/${maxTurns}. Remaining: ${remainingTurns}.
2. Keep responses concise but pedagogically complete.
3. Prioritize quality of feedback over quantity.

${isLastTurn ? `
⚠️ FINAL TURN - MINI EXAM:
1. Give a brief response to the user's last message
2. Present 2-3 quick review questions based on errors made during the conversation
3. Provide a short performance summary
4. End with: "🎉 ¡Práctica completada! [Brief encouraging feedback about their progress]"
` : ''}

===FEEDBACK FORMAT (REQUIRED)===

First, respond naturally to continue the conversation in English.

Then, if there's an error, use this EXACT format:

---FEEDBACK---
🔴 ERROR: "[exact wrong phrase]"
✅ CORRECCIÓN: "[corrected phrase]"
📖 EXPLICACIÓN: [Brief, clear explanation in Spanish - 1-2 sentences max]
💡 EJEMPLO: "[One simple example using the correct form]"

🎯 ¿Qué te gustaría hacer?
   🔄 Continuar practicando
   📚 Ver explicación detallada
   ✏️ Hacer ejercicio de práctica
---END FEEDBACK---

If the user's message is PERFECT:
---FEEDBACK---
✨ ¡Excelente! Tu mensaje es gramaticalmente correcto.
💪 [Brief encouragement about what they did well]
---END FEEDBACK---

**PRACTICE EXERCISE FORMAT** (when user chooses ✏️):
---PRACTICE---
📝 EJERCICIO: [Type of exercise]
[2-3 focused exercises on the specific error]
---END PRACTICE---

**DETAILED EXPLANATION FORMAT** (when user chooses 📚):
---EXPLANATION---
📚 EXPLICACIÓN DETALLADA:
[Clear explanation with rule]
[2-3 varied examples]
[Common mistakes to avoid]
---END EXPLANATION---

REMEMBER: Always include feedback, offer options, and maintain a supportive learning environment!`;
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

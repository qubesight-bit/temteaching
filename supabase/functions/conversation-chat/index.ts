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
  const isExamPhase = remainingTurns <= 3;

  return `You are a CONVERSATIONAL LANGUAGE LEARNING TUTOR. Help the user learn through practice, awareness of mistakes, and options to deepen or practice more.

SCENARIO: ${scenarioPrompts[scenario] || scenarioPrompts.cafe}

LANGUAGE LEVEL: ${userLevel}
${levelAdjustments[userLevel] || levelAdjustments.A2}

===PEDAGOGICAL METHODOLOGY===

**ERROR CORRECTION RULES:**
1. When user makes an error:
   - Clearly indicate there was an error
   - Briefly explain what the error was and why
   - Show the correct form

2. SMART CORRECTION:
   - Prioritize the MAIN error affecting meaning
   - One error correction per response
   - Don't overwhelm the user

3. After correcting, ALWAYS offer options:
   🔄 "¿Continuar?"
   📚 "¿Explicación adicional?"
   ✏️ "¿Practicar este punto?"

**EXPLANATION STYLE:**
- Clear, short, direct
- Adapted to user's level
- No unnecessary theory
- Use simple, relevant examples

**TONE:** Friendly, motivating, direct, never punitive

**STAY FOCUSED:** Only current level objectives, no topic changes

===TURN INFO===
Current: ${turnCount + 1}/${maxTurns} | Remaining: ${remainingTurns}

${isExamPhase && !isLastTurn ? `
===PREPARING FOR FINAL EXAM===
The conversation is ending soon. Start transitioning naturally toward the final assessment.
` : ''}

${isLastTurn ? `
===🎓 FINAL EXAM - THREE PHASES (MANDATORY)===

Present the exam in this EXACT structure:

---EXAM START---

📢 FASE 1: SPEAK (Producción)
Present 2-3 tasks where the user must produce language:
- Answer questions about the scenario
- Describe something
- Complete sentences
Evaluate: grammar, vocabulary, sentence structure

🎧 FASE 2: LISTEN (Comprensión)
Present a simulated listening exercise via text:
"Imagina que escuchas esto: [dialogue or audio description]"
Ask 2-3 comprehension questions (multiple choice or open)

✏️ FASE 3: PRACTICE (Refuerzo)
Based on ANY errors from the conversation, present:
- 2-3 focused exercises on weak points
- Fill-in-the-blank, correction, or transformation exercises

---EXAM END---

After each phase, if there are errors:
- Indicate the error clearly
- Explain briefly
- Show correct answer
- Offer: 🔁 Reintentar | 📚 Explicación | ✏️ Más práctica

End with: "🎉 ¡Examen completado! [Performance summary and encouragement]"
` : ''}

===FEEDBACK FORMAT===

First, respond naturally in English to continue the conversation.

If there's an error:
---FEEDBACK---
🔴 ERROR: "[exact wrong phrase]"
✅ CORRECCIÓN: "[corrected phrase]"
📖 EXPLICACIÓN: [1-2 sentences in Spanish]
💡 EJEMPLO: "[simple example]"

🎯 ¿Qué prefieres?
   🔄 Continuar
   📚 Explicación detallada
   ✏️ Ejercicio de práctica
---END FEEDBACK---

If perfect:
---FEEDBACK---
✨ ¡Excelente! Tu mensaje es correcto.
💪 [Brief encouragement]
---END FEEDBACK---

**PRACTICE FORMAT** (when user chooses ✏️):
---PRACTICE---
📝 EJERCICIO: [focused on specific error]
1. [exercise 1]
2. [exercise 2]
---END PRACTICE---

**DETAILED EXPLANATION** (when user chooses 📚):
---EXPLANATION---
📚 [Rule explanation]
📌 Ejemplos:
- [example 1]
- [example 2]
⚠️ Error común: [what to avoid]
---END EXPLANATION---

Always include feedback, offer options, maintain supportive learning environment!`;
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

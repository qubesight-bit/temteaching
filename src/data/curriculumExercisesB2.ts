// B2 Level Comprehensive Curriculum Exercises
import { Exercise } from "./exercisesData";

// Vocabulary Exercises
const b2VocabExercises: Record<string, Exercise[]> = {
  "b2-vocab-1": [ // Vocabulario académico
    {
      id: "b2-v1-e1",
      type: "multiple-choice",
      question: "The research _____ that climate change is accelerating.",
      options: ["indicates", "indicative", "indication", "indicated"],
      correctAnswer: "indicates",
      explanation: "'Indicate' = to show or suggest (academic writing).",
      difficulty: 2,
      tags: ["academic", "b2"]
    },
    {
      id: "b2-v1-e2",
      type: "multiple-choice",
      question: "We need to _____ the data before drawing conclusions.",
      options: ["analyze", "analysis", "analytical", "analytically"],
      correctAnswer: "analyze",
      explanation: "'Analyze' = to examine in detail (verb form).",
      difficulty: 2,
      tags: ["academic", "b2"]
    },
    {
      id: "b2-v1-e3",
      type: "fill-blank",
      question: "The _____ of the study were published last month.",
      options: ["findings", "founds", "finders", "founded"],
      correctAnswer: "findings",
      explanation: "'Findings' = results discovered through research.",
      difficulty: 2,
      tags: ["academic", "b2"]
    },
    {
      id: "b2-v1-e4",
      type: "multiple-choice",
      question: "There is a strong _____ between smoking and lung cancer.",
      options: ["correlation", "correlated", "correlate", "correlating"],
      correctAnswer: "correlation",
      explanation: "'Correlation' = a relationship between two things.",
      difficulty: 2,
      tags: ["academic", "b2"]
    },
  ],
  "b2-vocab-2": [ // Expresiones idiomáticas
    {
      id: "b2-v2-e1",
      type: "multiple-choice",
      question: "'It's raining cats and dogs' means:",
      options: ["It's raining heavily", "Animals are falling", "It's a light rain", "It's cloudy"],
      correctAnswer: "It's raining heavily",
      explanation: "This idiom means very heavy rain.",
      difficulty: 2,
      tags: ["idioms", "b2"]
    },
    {
      id: "b2-v2-e2",
      type: "multiple-choice",
      question: "'Break the ice' means:",
      options: ["Start a conversation in a social situation", "Break something frozen", "Cool down", "Make someone angry"],
      correctAnswer: "Start a conversation in a social situation",
      explanation: "To break the ice = to initiate social interaction.",
      difficulty: 2,
      tags: ["idioms", "b2"]
    },
    {
      id: "b2-v2-e3",
      type: "fill-blank",
      question: "Learning a language requires a lot of practice. There are no _____.",
      options: ["shortcuts", "cutshorts", "short ways", "quick ways"],
      correctAnswer: "shortcuts",
      explanation: "'No shortcuts' = no easy way to do something.",
      difficulty: 2,
      tags: ["idioms", "b2"]
    },
  ],
  "b2-vocab-3": [ // Phrasal verbs avanzados
    {
      id: "b2-v3-e1",
      type: "multiple-choice",
      question: "I need to _____ this problem before the meeting.",
      options: ["figure out", "figure in", "figure up", "figure down"],
      correctAnswer: "figure out",
      explanation: "'Figure out' = to solve or understand something.",
      difficulty: 2,
      tags: ["phrasal-verbs", "b2"]
    },
    {
      id: "b2-v3-e2",
      type: "multiple-choice",
      question: "The company is _____ new ideas to increase sales.",
      options: ["coming up with", "coming down to", "coming around to", "coming in for"],
      correctAnswer: "coming up with",
      explanation: "'Come up with' = to produce or think of an idea.",
      difficulty: 2,
      tags: ["phrasal-verbs", "b2"]
    },
    {
      id: "b2-v3-e3",
      type: "fill-blank",
      question: "I can't _____ his rudeness any longer.",
      options: ["put up with", "put down to", "put off", "put on"],
      correctAnswer: "put up with",
      explanation: "'Put up with' = to tolerate something unpleasant.",
      difficulty: 2,
      tags: ["phrasal-verbs", "b2"]
    },
  ],
};

// Grammar Exercises
const b2GrammarExercises: Record<string, Exercise[]> = {
  "b2-gram-1": [ // Third Conditional
    {
      id: "b2-g1-e1",
      type: "multiple-choice",
      question: "If I _____ the alarm, I _____ been late.",
      options: ["had heard/wouldn't have", "heard/wouldn't have", "had heard/won't have", "hear/wouldn't have"],
      correctAnswer: "had heard/wouldn't have",
      explanation: "Third Conditional: If + Past Perfect, would have + past participle.",
      difficulty: 2,
      tags: ["conditionals", "b2"]
    },
    {
      id: "b2-g1-e2",
      type: "multiple-choice",
      question: "She _____ the job if she _____ better in the interview.",
      options: ["would have got/had done", "would get/had done", "would have got/did", "got/had done"],
      correctAnswer: "would have got/had done",
      explanation: "Unreal past condition = Third Conditional.",
      difficulty: 2,
      tags: ["conditionals", "b2"]
    },
    {
      id: "b2-g1-e3",
      type: "fill-blank",
      question: "If we _____ (leave) earlier, we _____ (not/miss) the flight.",
      options: ["had left/wouldn't have missed", "left/wouldn't miss", "had left/won't miss", "leave/wouldn't have missed"],
      correctAnswer: "had left/wouldn't have missed",
      explanation: "Regret about the past = Third Conditional.",
      difficulty: 2,
      tags: ["conditionals", "b2"]
    },
  ],
  "b2-gram-2": [ // Mixed Conditionals
    {
      id: "b2-g2-e1",
      type: "multiple-choice",
      question: "If I _____ Spanish (generally), I _____ for that job now.",
      options: ["spoke/would apply", "had spoken/would apply", "spoke/would have applied", "speak/will apply"],
      correctAnswer: "spoke/would apply",
      explanation: "Mixed: Past condition (unreal) + present result.",
      difficulty: 3,
      tags: ["conditionals", "b2"]
    },
    {
      id: "b2-g2-e2",
      type: "multiple-choice",
      question: "If he _____ the lottery last year, he _____ rich now.",
      options: ["had won/would be", "won/would be", "had won/would have been", "wins/would be"],
      correctAnswer: "had won/would be",
      explanation: "Past unreal condition → present unreal result.",
      difficulty: 3,
      tags: ["conditionals", "b2"]
    },
  ],
  "b2-gram-3": [ // Reported Speech
    {
      id: "b2-g3-e1",
      type: "multiple-choice",
      question: "'I am tired' → She said she _____ tired.",
      options: ["was", "is", "were", "had been"],
      correctAnswer: "was",
      explanation: "Present Simple → Past Simple in reported speech.",
      difficulty: 2,
      tags: ["reported-speech", "b2"]
    },
    {
      id: "b2-g3-e2",
      type: "multiple-choice",
      question: "'I will call you' → He said he _____ call me.",
      options: ["would", "will", "could", "should"],
      correctAnswer: "would",
      explanation: "Will → Would in reported speech.",
      difficulty: 2,
      tags: ["reported-speech", "b2"]
    },
    {
      id: "b2-g3-e3",
      type: "fill-blank",
      question: "'I have finished' → She said she _____ finished.",
      options: ["had", "has", "have", "was"],
      correctAnswer: "had",
      explanation: "Present Perfect → Past Perfect in reported speech.",
      difficulty: 2,
      tags: ["reported-speech", "b2"]
    },
  ],
  "b2-gram-4": [ // Passive Voice Advanced
    {
      id: "b2-g4-e1",
      type: "multiple-choice",
      question: "The new policy _____ next month.",
      options: ["will be implemented", "will implement", "is implementing", "implements"],
      correctAnswer: "will be implemented",
      explanation: "Future Passive: will be + past participle.",
      difficulty: 2,
      tags: ["passive", "b2"]
    },
    {
      id: "b2-g4-e2",
      type: "multiple-choice",
      question: "The report _____ by the time you arrive.",
      options: ["will have been completed", "will complete", "is completed", "has completed"],
      correctAnswer: "will have been completed",
      explanation: "Future Perfect Passive for completion before a future time.",
      difficulty: 3,
      tags: ["passive", "b2"]
    },
  ],
  "b2-gram-5": [ // Relative Clauses Advanced
    {
      id: "b2-g5-e1",
      type: "multiple-choice",
      question: "The manager, _____ office is on the 5th floor, wants to see you.",
      options: ["whose", "who", "which", "that"],
      correctAnswer: "whose",
      explanation: "'Whose' shows possession in relative clauses.",
      difficulty: 2,
      tags: ["relative-clauses", "b2"]
    },
    {
      id: "b2-g5-e2",
      type: "multiple-choice",
      question: "That's the reason _____ I left early.",
      options: ["why", "which", "that", "when"],
      correctAnswer: "why",
      explanation: "'Why' is used for reasons in relative clauses.",
      difficulty: 2,
      tags: ["relative-clauses", "b2"]
    },
  ],
  "b2-gram-6": [ // Wish & Regret
    {
      id: "b2-g6-e1",
      type: "multiple-choice",
      question: "I wish I _____ more time to travel.",
      options: ["had", "have", "would have", "having"],
      correctAnswer: "had",
      explanation: "Wish + Past Simple for present unreal situations.",
      difficulty: 2,
      tags: ["wish", "b2"]
    },
    {
      id: "b2-g6-e2",
      type: "multiple-choice",
      question: "I wish I _____ that email yesterday.",
      options: ["hadn't sent", "didn't send", "wouldn't send", "haven't sent"],
      correctAnswer: "hadn't sent",
      explanation: "Wish + Past Perfect for past regrets.",
      difficulty: 2,
      tags: ["wish", "b2"]
    },
  ],
};

// Speaking Exercises
const b2SpeakingExercises: Record<string, Exercise[]> = {
  "b2-speak-1": [ // Debatir y argumentar
    {
      id: "b2-s1-e1",
      type: "multiple-choice",
      question: "To introduce a counterargument: 'On the _____ hand,...'",
      options: ["other", "one", "same", "different"],
      correctAnswer: "other",
      explanation: "'On the other hand' introduces a contrasting view.",
      difficulty: 2,
      tags: ["debating", "b2"]
    },
    {
      id: "b2-s1-e2",
      type: "multiple-choice",
      question: "To concede a point: 'While it's true that..., I still believe...'",
      options: ["while", "because", "so", "and"],
      correctAnswer: "while",
      explanation: "'While' can acknowledge a point before disagreeing.",
      difficulty: 2,
      tags: ["debating", "b2"]
    },
  ],
  "b2-speak-2": [ // Expresar matices de opinión
    {
      id: "b2-s2-e1",
      type: "multiple-choice",
      question: "To express partial agreement: 'I _____ with you to some extent.'",
      options: ["agree", "agreeing", "agreed", "agrees"],
      correctAnswer: "agree",
      explanation: "'To some extent' = partially, not completely.",
      difficulty: 2,
      tags: ["opinions", "b2"]
    },
  ],
};

// Listening Exercises
const b2ListeningExercises: Record<string, Exercise[]> = {
  "b2-list-1": [ // Entrevistas y discusiones
    {
      id: "b2-l1-e1",
      type: "multiple-choice",
      question: "'That's a good point' in a discussion means:",
      options: ["The speaker agrees with what was said", "The speaker disagrees", "The speaker is confused", "The speaker wants to change topic"],
      correctAnswer: "The speaker agrees with what was said",
      explanation: "'Good point' = acknowledging a valid argument.",
      difficulty: 2,
      tags: ["listening", "discussions", "b2"]
    },
  ],
  "b2-list-2": [ // Diferentes acentos
    {
      id: "b2-l2-e1",
      type: "multiple-choice",
      question: "Which word sounds different in British vs American English?",
      options: ["schedule", "cat", "dog", "run"],
      correctAnswer: "schedule",
      explanation: "British: 'shed-yool', American: 'sked-yool'.",
      difficulty: 2,
      tags: ["listening", "accents", "b2"]
    },
  ],
};

// Reading Exercises
const b2ReadingExercises: Record<string, Exercise[]> = {
  "b2-read-1": [ // Textos argumentativos
    {
      id: "b2-r1-e1",
      type: "multiple-choice",
      question: "'Furthermore' is used to:",
      options: ["Add more information", "Contrast ideas", "Give examples", "Conclude"],
      correctAnswer: "Add more information",
      explanation: "'Furthermore' = in addition, moreover.",
      difficulty: 2,
      tags: ["reading", "argumentation", "b2"]
    },
  ],
  "b2-read-2": [ // Artículos de opinión
    {
      id: "b2-r2-e1",
      type: "multiple-choice",
      question: "'Arguably' suggests the writer:",
      options: ["Is presenting a debatable point", "Is stating a fact", "Is asking a question", "Is summarizing"],
      correctAnswer: "Is presenting a debatable point",
      explanation: "'Arguably' = it could be argued that...",
      difficulty: 2,
      tags: ["reading", "opinion", "b2"]
    },
  ],
};

// Writing Exercises
const b2WritingExercises: Record<string, Exercise[]> = {
  "b2-write-1": [ // Essays formales
    {
      id: "b2-w1-e1",
      type: "multiple-choice",
      question: "Essay introduction: 'This essay will _____ the advantages and disadvantages of...'",
      options: ["examine", "examining", "examined", "examines"],
      correctAnswer: "examine",
      explanation: "Will + base verb for essay structure.",
      difficulty: 2,
      tags: ["writing", "essays", "b2"]
    },
    {
      id: "b2-w1-e2",
      type: "multiple-choice",
      question: "To conclude an essay: 'In _____, it is clear that...'",
      options: ["conclusion", "conclude", "concluding", "conclusions"],
      correctAnswer: "conclusion",
      explanation: "'In conclusion' introduces the final paragraph.",
      difficulty: 2,
      tags: ["writing", "essays", "b2"]
    },
  ],
  "b2-write-2": [ // Reportes
    {
      id: "b2-w2-e1",
      type: "multiple-choice",
      question: "Report recommendation: 'It is _____ that the company invest more.'",
      options: ["recommended", "recommending", "recommend", "recommends"],
      correctAnswer: "recommended",
      explanation: "'It is recommended that...' for formal suggestions.",
      difficulty: 2,
      tags: ["writing", "reports", "b2"]
    },
  ],
};

// Export function
export function getB2CurriculumExercisesBySkillId(skillId: string): Exercise[] {
  const allExercises: Record<string, Exercise[]> = {
    ...b2VocabExercises,
    ...b2GrammarExercises,
    ...b2SpeakingExercises,
    ...b2ListeningExercises,
    ...b2ReadingExercises,
    ...b2WritingExercises,
  };
  
  return allExercises[skillId] || [];
}

export const allB2CurriculumExercises = {
  vocabulary: b2VocabExercises,
  grammar: b2GrammarExercises,
  speaking: b2SpeakingExercises,
  listening: b2ListeningExercises,
  reading: b2ReadingExercises,
  writing: b2WritingExercises,
};

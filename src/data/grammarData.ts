// Grammar Data - Aligned with 1,200+ exercises in grammarExercisesExpanded.ts
// Each topic maps directly to exercise categories for seamless practice

export interface GrammarCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics: GrammarTopic[];
}

export interface GrammarTopic {
  id: string;
  title: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  completed: boolean;
  exerciseCategory: string; // Maps to category in grammarExercisesExpanded.ts
  description: string;
}

export const grammarCategories: GrammarCategory[] = [
  // ==================== VERB TENSES ====================
  {
    id: "verb-tenses",
    title: "Verb Tenses",
    description: "Master all English verb tenses from simple to perfect",
    icon: "⏰",
    topics: [
      // A1 Level
      {
        id: "present-simple",
        title: "Present Simple",
        level: "A1",
        completed: false,
        exerciseCategory: "present-simple",
        description: "Daily routines, habits, and general facts"
      },
      {
        id: "present-continuous",
        title: "Present Continuous",
        level: "A1",
        completed: false,
        exerciseCategory: "present-continuous",
        description: "Actions happening now or around this time"
      },
      // A2 Level
      {
        id: "past-simple",
        title: "Past Simple",
        level: "A2",
        completed: false,
        exerciseCategory: "past-simple",
        description: "Completed actions in the past"
      },
      {
        id: "future-going-to",
        title: "Future with Going To",
        level: "A2",
        completed: false,
        exerciseCategory: "going-to",
        description: "Plans and predictions based on evidence"
      },
      {
        id: "future-will",
        title: "Future with Will",
        level: "A2",
        completed: false,
        exerciseCategory: "future-will",
        description: "Predictions, promises, and spontaneous decisions"
      },
      // B1 Level
      {
        id: "present-perfect",
        title: "Present Perfect",
        level: "B1",
        completed: false,
        exerciseCategory: "present-perfect",
        description: "Experiences, recent actions, and continuing situations"
      },
      {
        id: "past-continuous",
        title: "Past Continuous",
        level: "B1",
        completed: false,
        exerciseCategory: "past-continuous",
        description: "Actions in progress at a specific past moment"
      },
      // B2 Level
      {
        id: "past-perfect",
        title: "Past Perfect",
        level: "B2",
        completed: false,
        exerciseCategory: "past-perfect",
        description: "Actions completed before another past action"
      },
      {
        id: "future-perfect",
        title: "Future Perfect",
        level: "B2",
        completed: false,
        exerciseCategory: "future-perfect",
        description: "Actions that will be completed before a future time"
      },
      // C1 Level
      {
        id: "advanced-tenses",
        title: "Advanced Tense Combinations",
        level: "C1",
        completed: false,
        exerciseCategory: "advanced-tenses",
        description: "Complex tense usage and nuanced time expressions"
      }
    ]
  },

  // ==================== MODALS ====================
  {
    id: "modals",
    title: "Modal Verbs",
    description: "Express ability, permission, obligation, and possibility",
    icon: "🔧",
    topics: [
      {
        id: "modals-can",
        title: "Can & Could",
        level: "A1",
        completed: false,
        exerciseCategory: "modals-can",
        description: "Ability, permission, and polite requests"
      },
      {
        id: "modals-basic",
        title: "Must, Should & Have to",
        level: "A2",
        completed: false,
        exerciseCategory: "modals",
        description: "Obligation, advice, and necessity"
      },
      {
        id: "modals-intermediate",
        title: "Modal Verbs in Context",
        level: "B1",
        completed: false,
        exerciseCategory: "modals",
        description: "Using modals for deduction and speculation"
      },
      {
        id: "modals-advanced",
        title: "Advanced Modal Usage",
        level: "B2",
        completed: false,
        exerciseCategory: "advanced-modals",
        description: "Past modals, modal perfects, and formal usage"
      }
    ]
  },

  // ==================== CONDITIONALS ====================
  {
    id: "conditionals",
    title: "Conditional Sentences",
    description: "If clauses from zero to mixed conditionals",
    icon: "🔀",
    topics: [
      {
        id: "zero-conditional",
        title: "Zero Conditional",
        level: "A2",
        completed: false,
        exerciseCategory: "zero-conditional",
        description: "General truths and scientific facts"
      },
      {
        id: "first-conditional",
        title: "First Conditional",
        level: "A2",
        completed: false,
        exerciseCategory: "first-conditional",
        description: "Real and probable future situations"
      },
      {
        id: "second-conditional",
        title: "Second Conditional",
        level: "B1",
        completed: false,
        exerciseCategory: "second-conditional",
        description: "Hypothetical and unlikely situations"
      },
      {
        id: "third-conditional",
        title: "Third Conditional",
        level: "B2",
        completed: false,
        exerciseCategory: "third-conditional",
        description: "Imaginary past situations and regrets"
      },
      {
        id: "mixed-conditionals",
        title: "Mixed Conditionals",
        level: "C1",
        completed: false,
        exerciseCategory: "mixed-conditionals",
        description: "Combining past and present hypotheticals"
      }
    ]
  },

  // ==================== PASSIVE VOICE ====================
  {
    id: "passive",
    title: "Passive Voice",
    description: "Focus on actions rather than who performs them",
    icon: "🔄",
    topics: [
      {
        id: "passive-basic",
        title: "Passive Voice Basics",
        level: "B1",
        completed: false,
        exerciseCategory: "passive",
        description: "Present and past passive constructions"
      },
      {
        id: "passive-advanced",
        title: "Advanced Passive Structures",
        level: "B2",
        completed: false,
        exerciseCategory: "passive",
        description: "Perfect passive, modals in passive, and causative"
      }
    ]
  },

  // ==================== RELATIVE CLAUSES ====================
  {
    id: "relative-clauses",
    title: "Relative Clauses",
    description: "Connect and describe with who, which, that, and more",
    icon: "🔗",
    topics: [
      {
        id: "relative-basic",
        title: "Defining Relative Clauses",
        level: "B1",
        completed: false,
        exerciseCategory: "relative-clauses",
        description: "Essential information with who, which, that"
      },
      {
        id: "relative-advanced",
        title: "Non-Defining Relative Clauses",
        level: "B2",
        completed: false,
        exerciseCategory: "relative-clauses",
        description: "Extra information and reduced relatives"
      }
    ]
  },

  // ==================== REPORTED SPEECH ====================
  {
    id: "reported-speech",
    title: "Reported Speech",
    description: "Report what others have said",
    icon: "💬",
    topics: [
      {
        id: "reported-statements",
        title: "Reported Statements",
        level: "B1",
        completed: false,
        exerciseCategory: "reported-speech",
        description: "Reporting statements with tense changes"
      },
      {
        id: "reported-questions",
        title: "Reported Questions & Commands",
        level: "B2",
        completed: false,
        exerciseCategory: "reported-speech",
        description: "Reporting questions, requests, and orders"
      }
    ]
  },

  // ==================== COMPARATIVES & SUPERLATIVES ====================
  {
    id: "comparatives",
    title: "Comparatives & Superlatives",
    description: "Compare people, things, and ideas",
    icon: "📊",
    topics: [
      {
        id: "comparatives-basic",
        title: "Basic Comparatives",
        level: "A2",
        completed: false,
        exerciseCategory: "comparatives",
        description: "Comparing two things with -er and more"
      },
      {
        id: "superlatives",
        title: "Superlatives",
        level: "A2",
        completed: false,
        exerciseCategory: "comparatives",
        description: "The most, the best, the -est forms"
      }
    ]
  },

  // ==================== ARTICLES & DETERMINERS ====================
  {
    id: "articles",
    title: "Articles & Determiners",
    description: "A, an, the, and other determiners",
    icon: "📝",
    topics: [
      {
        id: "articles-basic",
        title: "A, An, and The",
        level: "A1",
        completed: false,
        exerciseCategory: "articles",
        description: "Basic article usage"
      },
      {
        id: "articles-advanced",
        title: "Advanced Article Usage",
        level: "B1",
        completed: false,
        exerciseCategory: "articles",
        description: "Zero article and special cases"
      }
    ]
  },

  // ==================== GERUNDS & INFINITIVES ====================
  {
    id: "gerunds-infinitives",
    title: "Gerunds & Infinitives",
    description: "Verb patterns with -ing and to + verb",
    icon: "🎯",
    topics: [
      {
        id: "gerunds-basic",
        title: "Gerunds After Verbs",
        level: "B1",
        completed: false,
        exerciseCategory: "gerunds-infinitives",
        description: "Verbs followed by -ing forms"
      },
      {
        id: "infinitives",
        title: "Infinitives After Verbs",
        level: "B1",
        completed: false,
        exerciseCategory: "gerunds-infinitives",
        description: "Verbs followed by to + infinitive"
      },
      {
        id: "gerunds-infinitives-advanced",
        title: "Gerunds vs Infinitives",
        level: "B2",
        completed: false,
        exerciseCategory: "gerunds-infinitives",
        description: "Verbs that change meaning with each form"
      }
    ]
  },

  // ==================== ADVANCED STRUCTURES (C1-C2) ====================
  {
    id: "advanced-structures",
    title: "Advanced Structures",
    description: "Complex grammar for fluent expression",
    icon: "🎓",
    topics: [
      {
        id: "inversion",
        title: "Inversion",
        level: "C1",
        completed: false,
        exerciseCategory: "inversion",
        description: "Fronting negative adverbials and conditionals"
      },
      {
        id: "cleft-sentences",
        title: "Cleft Sentences",
        level: "C1",
        completed: false,
        exerciseCategory: "cleft-sentences",
        description: "It-clefts and what-clefts for emphasis"
      },
      {
        id: "participle-clauses",
        title: "Participle Clauses",
        level: "C1",
        completed: false,
        exerciseCategory: "participle-clauses",
        description: "Present, past, and perfect participles"
      },
      {
        id: "subjunctive",
        title: "Subjunctive Mood",
        level: "C2",
        completed: false,
        exerciseCategory: "subjunctive",
        description: "Mandative subjunctive and formal expressions"
      },
      {
        id: "complex-inversions",
        title: "Complex Inversions",
        level: "C2",
        completed: false,
        exerciseCategory: "complex-inversions",
        description: "Literary and emphatic inversion patterns"
      },
      {
        id: "advanced-connectors",
        title: "Advanced Connectors",
        level: "C2",
        completed: false,
        exerciseCategory: "advanced-connectors",
        description: "Sophisticated linking expressions"
      },
      {
        id: "ellipsis-substitution",
        title: "Ellipsis & Substitution",
        level: "C2",
        completed: false,
        exerciseCategory: "ellipsis-substitution",
        description: "Advanced elliptical structures"
      }
    ]
  },

  // ==================== PREPOSITIONS ====================
  {
    id: "prepositions",
    title: "Prepositions",
    description: "Time, place, and other prepositional usage",
    icon: "📍",
    topics: [
      {
        id: "prepositions-time",
        title: "Prepositions of Time",
        level: "A1",
        completed: false,
        exerciseCategory: "prepositions-time",
        description: "At, in, on for time expressions"
      },
      {
        id: "prepositions-place",
        title: "Prepositions of Place",
        level: "A1",
        completed: false,
        exerciseCategory: "prepositions-place",
        description: "At, in, on for locations"
      },
      {
        id: "prepositions-advanced",
        title: "Complex Prepositions",
        level: "B1",
        completed: false,
        exerciseCategory: "prepositions",
        description: "Dependent prepositions and collocations"
      }
    ]
  }
];

// Helper function to get all topics for a level
export function getTopicsForLevel(level: string): GrammarTopic[] {
  return grammarCategories.flatMap(cat => 
    cat.topics.filter(topic => topic.level === level)
  );
}

// Helper function to get category by ID
export function getCategoryById(categoryId: string): GrammarCategory | undefined {
  return grammarCategories.find(cat => cat.id === categoryId);
}

// Helper function to get topic by ID
export function getTopicById(topicId: string): GrammarTopic | undefined {
  for (const category of grammarCategories) {
    const topic = category.topics.find(t => t.id === topicId);
    if (topic) return topic;
  }
  return undefined;
}

// Count topics per level
export function countTopicsPerLevel(): Record<string, number> {
  const counts: Record<string, number> = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
  grammarCategories.forEach(cat => {
    cat.topics.forEach(topic => {
      counts[topic.level]++;
    });
  });
  return counts;
}

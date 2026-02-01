// CEFR Curriculum Data - Built from 1,200+ Grammar Exercises
// This file defines the complete learning path organized by CEFR levels

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface Skill {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  subSkills: SubSkill[];
  exerciseCount?: number;
  category?: string; // Maps to exercise category for practice
}

export interface SubSkill {
  id: string;
  title: string;
  completed: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export interface LevelCurriculum {
  level: CEFRLevel;
  title: string;
  description: string;
  targetVocabulary: string;
  estimatedHours: number;
  categories: SkillCategory[];
}

// ==================== A1 LEVEL - BEGINNER ====================
const a1Categories: SkillCategory[] = [
  {
    id: "a1-grammar",
    title: "Grammar",
    icon: "🧩",
    description: "Essential grammar structures for beginners",
    skills: [
      {
        id: "a1-gram-1",
        title: "Present Simple",
        description: "Daily routines, habits, and general truths",
        completed: false,
        category: "present-simple",
        exerciseCount: 50,
        subSkills: [
          { id: "a1-g1-1", title: "Affirmative sentences (I/You/We/They)", completed: false },
          { id: "a1-g1-2", title: "Third person -s/-es (He/She/It)", completed: false },
          { id: "a1-g1-3", title: "Negative with don't/doesn't", completed: false },
          { id: "a1-g1-4", title: "Questions with Do/Does", completed: false },
        ]
      },
      {
        id: "a1-gram-2",
        title: "Present Continuous",
        description: "Actions happening now",
        completed: false,
        category: "present-continuous",
        exerciseCount: 50,
        subSkills: [
          { id: "a1-g2-1", title: "Forming -ing verbs", completed: false },
          { id: "a1-g2-2", title: "Am/Is/Are + verb-ing", completed: false },
          { id: "a1-g2-3", title: "Negative forms", completed: false },
          { id: "a1-g2-4", title: "Yes/No questions", completed: false },
        ]
      },
      {
        id: "a1-gram-3",
        title: "Verb To Be",
        description: "Describing people, places, and things",
        completed: false,
        category: "verb-to-be",
        exerciseCount: 50,
        subSkills: [
          { id: "a1-g3-1", title: "Am/Is/Are with nouns", completed: false },
          { id: "a1-g3-2", title: "Am/Is/Are with adjectives", completed: false },
          { id: "a1-g3-3", title: "Negative: am not/isn't/aren't", completed: false },
          { id: "a1-g3-4", title: "Questions: Am I? Is he? Are they?", completed: false },
        ]
      },
      {
        id: "a1-gram-4",
        title: "Articles & Pronouns",
        description: "A/An, The, and personal pronouns",
        completed: false,
        category: "articles-pronouns",
        exerciseCount: 50,
        subSkills: [
          { id: "a1-g4-1", title: "A vs An usage", completed: false },
          { id: "a1-g4-2", title: "The definite article", completed: false },
          { id: "a1-g4-3", title: "Subject pronouns (I, you, he, she, it, we, they)", completed: false },
          { id: "a1-g4-4", title: "Object pronouns (me, you, him, her, it, us, them)", completed: false },
        ]
      },
    ]
  },
  {
    id: "a1-vocabulary",
    title: "Vocabulary",
    icon: "📚",
    description: "Essential words for everyday communication",
    skills: [
      {
        id: "a1-vocab-1",
        title: "Numbers & Colors",
        description: "Counting 1-100 and basic colors",
        completed: false,
        subSkills: [
          { id: "a1-v1-1", title: "Numbers 1-20", completed: false },
          { id: "a1-v1-2", title: "Numbers 20-100", completed: false },
          { id: "a1-v1-3", title: "Primary colors", completed: false },
        ]
      },
      {
        id: "a1-vocab-2",
        title: "Family & People",
        description: "Family members and descriptions",
        completed: false,
        subSkills: [
          { id: "a1-v2-1", title: "Immediate family", completed: false },
          { id: "a1-v2-2", title: "Basic professions", completed: false },
        ]
      },
      {
        id: "a1-vocab-3",
        title: "Daily Objects",
        description: "Common items at home, school, office",
        completed: false,
        subSkills: [
          { id: "a1-v3-1", title: "Home objects", completed: false },
          { id: "a1-v3-2", title: "Classroom objects", completed: false },
        ]
      },
    ]
  },
  {
    id: "a1-communication",
    title: "Communication",
    icon: "🗣️",
    description: "Basic speaking and listening skills",
    skills: [
      {
        id: "a1-comm-1",
        title: "Introductions",
        description: "Introduce yourself and others",
        completed: false,
        subSkills: [
          { id: "a1-c1-1", title: "Say your name and nationality", completed: false },
          { id: "a1-c1-2", title: "Ask about others", completed: false },
        ]
      },
      {
        id: "a1-comm-2",
        title: "Greetings",
        description: "Hello, goodbye, and polite phrases",
        completed: false,
        subSkills: [
          { id: "a1-c2-1", title: "Formal greetings", completed: false },
          { id: "a1-c2-2", title: "Informal greetings", completed: false },
        ]
      },
    ]
  },
];

// ==================== A2 LEVEL - ELEMENTARY ====================
const a2Categories: SkillCategory[] = [
  {
    id: "a2-grammar",
    title: "Grammar",
    icon: "🧩",
    description: "Building on basics for everyday communication",
    skills: [
      {
        id: "a2-gram-1",
        title: "Past Simple",
        description: "Completed actions in the past",
        completed: false,
        category: "past-simple",
        exerciseCount: 50,
        subSkills: [
          { id: "a2-g1-1", title: "Regular verbs (-ed)", completed: false },
          { id: "a2-g1-2", title: "Common irregular verbs", completed: false },
          { id: "a2-g1-3", title: "Did in questions and negatives", completed: false },
          { id: "a2-g1-4", title: "Time expressions (yesterday, last week)", completed: false },
        ]
      },
      {
        id: "a2-gram-2",
        title: "Future with 'Going To'",
        description: "Plans and intentions",
        completed: false,
        category: "going-to-future",
        exerciseCount: 50,
        subSkills: [
          { id: "a2-g2-1", title: "Decided plans", completed: false },
          { id: "a2-g2-2", title: "Predictions with evidence", completed: false },
          { id: "a2-g2-3", title: "Questions about plans", completed: false },
        ]
      },
      {
        id: "a2-gram-3",
        title: "Comparatives & Superlatives",
        description: "Comparing things and people",
        completed: false,
        category: "comparatives-superlatives",
        exerciseCount: 50,
        subSkills: [
          { id: "a2-g3-1", title: "Short adjectives (-er/-est)", completed: false },
          { id: "a2-g3-2", title: "Long adjectives (more/most)", completed: false },
          { id: "a2-g3-3", title: "Irregular forms (good/better/best)", completed: false },
        ]
      },
      {
        id: "a2-gram-4",
        title: "Modal Verbs",
        description: "Can, must, should for ability and obligation",
        completed: false,
        category: "modal-verbs",
        exerciseCount: 50,
        subSkills: [
          { id: "a2-g4-1", title: "Can for ability/permission", completed: false },
          { id: "a2-g4-2", title: "Must for obligation", completed: false },
          { id: "a2-g4-3", title: "Should for advice", completed: false },
        ]
      },
    ]
  },
  {
    id: "a2-vocabulary",
    title: "Vocabulary",
    icon: "📚",
    description: "Vocabulary for everyday situations",
    skills: [
      {
        id: "a2-vocab-1",
        title: "Daily Routines",
        description: "Actions throughout the day",
        completed: false,
        subSkills: [
          { id: "a2-v1-1", title: "Morning activities", completed: false },
          { id: "a2-v1-2", title: "Evening activities", completed: false },
        ]
      },
      {
        id: "a2-vocab-2",
        title: "Travel & Transport",
        description: "Getting around and traveling",
        completed: false,
        subSkills: [
          { id: "a2-v2-1", title: "Means of transport", completed: false },
          { id: "a2-v2-2", title: "At the airport", completed: false },
        ]
      },
      {
        id: "a2-vocab-3",
        title: "Shopping",
        description: "Buying things and prices",
        completed: false,
        subSkills: [
          { id: "a2-v3-1", title: "Types of shops", completed: false },
          { id: "a2-v3-2", title: "Prices and payment", completed: false },
        ]
      },
    ]
  },
];

// ==================== B1 LEVEL - INTERMEDIATE ====================
const b1Categories: SkillCategory[] = [
  {
    id: "b1-grammar",
    title: "Grammar",
    icon: "🧩",
    description: "Intermediate structures for fluent communication",
    skills: [
      {
        id: "b1-gram-1",
        title: "Present Perfect",
        description: "Experiences and recent actions",
        completed: false,
        category: "present-perfect",
        exerciseCount: 50,
        subSkills: [
          { id: "b1-g1-1", title: "Have/Has + past participle", completed: false },
          { id: "b1-g1-2", title: "Ever/Never for experiences", completed: false },
          { id: "b1-g1-3", title: "Just/Already/Yet", completed: false },
          { id: "b1-g1-4", title: "For/Since with duration", completed: false },
        ]
      },
      {
        id: "b1-gram-2",
        title: "Past Continuous",
        description: "Actions in progress in the past",
        completed: false,
        category: "past-continuous",
        exerciseCount: 50,
        subSkills: [
          { id: "b1-g2-1", title: "Was/Were + verb-ing", completed: false },
          { id: "b1-g2-2", title: "Interrupted actions (when/while)", completed: false },
          { id: "b1-g2-3", title: "Parallel past actions", completed: false },
        ]
      },
      {
        id: "b1-gram-3",
        title: "First Conditional",
        description: "Real possibilities and consequences",
        completed: false,
        category: "first-conditional",
        exerciseCount: 50,
        subSkills: [
          { id: "b1-g3-1", title: "If + present, will + verb", completed: false },
          { id: "b1-g3-2", title: "Unless = if not", completed: false },
          { id: "b1-g3-3", title: "Conditional questions", completed: false },
        ]
      },
      {
        id: "b1-gram-4",
        title: "Second Conditional",
        description: "Unreal or hypothetical situations",
        completed: false,
        category: "second-conditional",
        exerciseCount: 50,
        subSkills: [
          { id: "b1-g4-1", title: "If + past, would + verb", completed: false },
          { id: "b1-g4-2", title: "Were instead of was", completed: false },
          { id: "b1-g4-3", title: "Imaginary situations", completed: false },
        ]
      },
      {
        id: "b1-gram-5",
        title: "Passive Voice",
        description: "Focus on the action, not the doer",
        completed: false,
        category: "passive-voice",
        exerciseCount: 50,
        subSkills: [
          { id: "b1-g5-1", title: "Present passive (is/are + pp)", completed: false },
          { id: "b1-g5-2", title: "Past passive (was/were + pp)", completed: false },
          { id: "b1-g5-3", title: "By + agent", completed: false },
        ]
      },
      {
        id: "b1-gram-6",
        title: "Relative Clauses",
        description: "Adding information with who, which, that",
        completed: false,
        category: "relative-clauses",
        exerciseCount: 50,
        subSkills: [
          { id: "b1-g6-1", title: "Who for people", completed: false },
          { id: "b1-g6-2", title: "Which for things", completed: false },
          { id: "b1-g6-3", title: "That for both", completed: false },
          { id: "b1-g6-4", title: "Where for places", completed: false },
        ]
      },
    ]
  },
  {
    id: "b1-vocabulary",
    title: "Vocabulary",
    icon: "📚",
    description: "Intermediate vocabulary for various topics",
    skills: [
      {
        id: "b1-vocab-1",
        title: "Work & Career",
        description: "Jobs, workplaces, and professional life",
        completed: false,
        subSkills: [
          { id: "b1-v1-1", title: "Job titles and roles", completed: false },
          { id: "b1-v1-2", title: "Office vocabulary", completed: false },
        ]
      },
      {
        id: "b1-vocab-2",
        title: "Health & Wellbeing",
        description: "Body, illness, and medical terms",
        completed: false,
        subSkills: [
          { id: "b1-v2-1", title: "Body parts", completed: false },
          { id: "b1-v2-2", title: "Common illnesses", completed: false },
        ]
      },
    ]
  },
];

// ==================== B2 LEVEL - UPPER INTERMEDIATE ====================
const b2Categories: SkillCategory[] = [
  {
    id: "b2-grammar",
    title: "Grammar",
    icon: "🧩",
    description: "Advanced structures for nuanced expression",
    skills: [
      {
        id: "b2-gram-1",
        title: "Third Conditional",
        description: "Imagining different past outcomes",
        completed: false,
        category: "third-conditional",
        exerciseCount: 50,
        subSkills: [
          { id: "b2-g1-1", title: "If + past perfect, would have + pp", completed: false },
          { id: "b2-g1-2", title: "Expressing regret", completed: false },
          { id: "b2-g1-3", title: "Criticism of past actions", completed: false },
        ]
      },
      {
        id: "b2-gram-2",
        title: "Reported Speech",
        description: "Reporting what others said",
        completed: false,
        category: "reported-speech",
        exerciseCount: 50,
        subSkills: [
          { id: "b2-g2-1", title: "Tense backshift", completed: false },
          { id: "b2-g2-2", title: "Pronoun and time changes", completed: false },
          { id: "b2-g2-3", title: "Reported questions", completed: false },
          { id: "b2-g2-4", title: "Reporting verbs", completed: false },
        ]
      },
      {
        id: "b2-gram-3",
        title: "Causative Structures",
        description: "Have/Get something done",
        completed: false,
        category: "causative",
        exerciseCount: 50,
        subSkills: [
          { id: "b2-g3-1", title: "Have + object + past participle", completed: false },
          { id: "b2-g3-2", title: "Get + object + past participle", completed: false },
          { id: "b2-g3-3", title: "Make/Let someone do", completed: false },
        ]
      },
      {
        id: "b2-gram-4",
        title: "Wish & If Only",
        description: "Expressing wishes and regrets",
        completed: false,
        category: "wish-if-only",
        exerciseCount: 50,
        subSkills: [
          { id: "b2-g4-1", title: "Wish + past (present wishes)", completed: false },
          { id: "b2-g4-2", title: "Wish + past perfect (past regrets)", completed: false },
          { id: "b2-g4-3", title: "Wish + would (complaints)", completed: false },
        ]
      },
      {
        id: "b2-gram-5",
        title: "Advanced Modals",
        description: "Modals for speculation and deduction",
        completed: false,
        category: "advanced-modals",
        exerciseCount: 50,
        subSkills: [
          { id: "b2-g5-1", title: "Must/Can't for certainty", completed: false },
          { id: "b2-g5-2", title: "Might/Could for possibility", completed: false },
          { id: "b2-g5-3", title: "Should have / Could have", completed: false },
        ]
      },
    ]
  },
  {
    id: "b2-vocabulary",
    title: "Vocabulary",
    icon: "📚",
    description: "Upper-intermediate vocabulary",
    skills: [
      {
        id: "b2-vocab-1",
        title: "Academic Language",
        description: "Formal and academic expressions",
        completed: false,
        subSkills: [
          { id: "b2-v1-1", title: "Essay vocabulary", completed: false },
          { id: "b2-v1-2", title: "Linking words", completed: false },
        ]
      },
      {
        id: "b2-vocab-2",
        title: "Idioms & Expressions",
        description: "Common English idioms",
        completed: false,
        subSkills: [
          { id: "b2-v2-1", title: "Body idioms", completed: false },
          { id: "b2-v2-2", title: "Weather idioms", completed: false },
        ]
      },
    ]
  },
];

// ==================== C1 LEVEL - ADVANCED ====================
const c1Categories: SkillCategory[] = [
  {
    id: "c1-grammar",
    title: "Grammar",
    icon: "🧩",
    description: "Sophisticated grammar for professional fluency",
    skills: [
      {
        id: "c1-gram-1",
        title: "Advanced Tenses",
        description: "Perfect and continuous combinations",
        completed: false,
        category: "advanced-tenses",
        exerciseCount: 50,
        subSkills: [
          { id: "c1-g1-1", title: "Future Perfect", completed: false },
          { id: "c1-g1-2", title: "Future Perfect Continuous", completed: false },
          { id: "c1-g1-3", title: "Past Perfect Continuous", completed: false },
        ]
      },
      {
        id: "c1-gram-2",
        title: "Inversion",
        description: "Inverted word order for emphasis",
        completed: false,
        category: "inversion",
        exerciseCount: 50,
        subSkills: [
          { id: "c1-g2-1", title: "Negative adverbs (Never, Rarely, Seldom)", completed: false },
          { id: "c1-g2-2", title: "Not only...but also", completed: false },
          { id: "c1-g2-3", title: "Hardly/Scarcely...when", completed: false },
          { id: "c1-g2-4", title: "Only after/when/if", completed: false },
        ]
      },
      {
        id: "c1-gram-3",
        title: "Cleft Sentences",
        description: "Emphasis structures with What/It",
        completed: false,
        category: "cleft-sentences",
        exerciseCount: 50,
        subSkills: [
          { id: "c1-g3-1", title: "It is/was...that/who", completed: false },
          { id: "c1-g3-2", title: "What I need is...", completed: false },
          { id: "c1-g3-3", title: "All I want is...", completed: false },
        ]
      },
      {
        id: "c1-gram-4",
        title: "Mixed Conditionals",
        description: "Combining past and present conditions",
        completed: false,
        category: "mixed-conditionals",
        exerciseCount: 50,
        subSkills: [
          { id: "c1-g4-1", title: "Past condition → Present result", completed: false },
          { id: "c1-g4-2", title: "Present condition → Past result", completed: false },
        ]
      },
      {
        id: "c1-gram-5",
        title: "Participle Clauses",
        description: "Using participles to combine sentences",
        completed: false,
        category: "participle-clauses",
        exerciseCount: 50,
        subSkills: [
          { id: "c1-g5-1", title: "Present participles (-ing)", completed: false },
          { id: "c1-g5-2", title: "Past participles (-ed)", completed: false },
          { id: "c1-g5-3", title: "Perfect participles (Having + pp)", completed: false },
        ]
      },
    ]
  },
  {
    id: "c1-vocabulary",
    title: "Vocabulary",
    icon: "📚",
    description: "Advanced vocabulary for nuanced expression",
    skills: [
      {
        id: "c1-vocab-1",
        title: "Collocations",
        description: "Natural word combinations",
        completed: false,
        subSkills: [
          { id: "c1-v1-1", title: "Verb + noun collocations", completed: false },
          { id: "c1-v1-2", title: "Adjective + noun collocations", completed: false },
        ]
      },
      {
        id: "c1-vocab-2",
        title: "Formal Register",
        description: "Professional and academic language",
        completed: false,
        subSkills: [
          { id: "c1-v2-1", title: "Formal synonyms", completed: false },
          { id: "c1-v2-2", title: "Hedging language", completed: false },
        ]
      },
    ]
  },
];

// ==================== C2 LEVEL - MASTERY ====================
const c2Categories: SkillCategory[] = [
  {
    id: "c2-grammar",
    title: "Grammar",
    icon: "🧩",
    description: "Mastery-level grammar for native-like fluency",
    skills: [
      {
        id: "c2-gram-1",
        title: "Advanced Connectors",
        description: "Sophisticated linking expressions",
        completed: false,
        category: "advanced-connectors",
        exerciseCount: 50,
        subSkills: [
          { id: "c2-g1-1", title: "Nonetheless, nevertheless", completed: false },
          { id: "c2-g1-2", title: "Albeit, notwithstanding", completed: false },
          { id: "c2-g1-3", title: "Paradoxically, conversely", completed: false },
        ]
      },
      {
        id: "c2-gram-2",
        title: "Advanced Subjunctive",
        description: "Formal subjunctive structures",
        completed: false,
        category: "subjunctive-advanced",
        exerciseCount: 50,
        subSkills: [
          { id: "c2-g2-1", title: "Mandative subjunctive", completed: false },
          { id: "c2-g2-2", title: "Formulaic subjunctive (Be that as it may)", completed: false },
          { id: "c2-g2-3", title: "Were to in formal conditionals", completed: false },
        ]
      },
      {
        id: "c2-gram-3",
        title: "Complex Inversions",
        description: "Literary and formal inversions",
        completed: false,
        category: "complex-inversions",
        exerciseCount: 50,
        subSkills: [
          { id: "c2-g3-1", title: "Directional inversions (Down came the rain)", completed: false },
          { id: "c2-g3-2", title: "Emphatic inversions", completed: false },
          { id: "c2-g3-3", title: "Literary style inversions", completed: false },
        ]
      },
      {
        id: "c2-gram-4",
        title: "Ellipsis & Substitution",
        description: "Omitting words for natural speech",
        completed: false,
        category: "ellipsis-substitution",
        exerciseCount: 50,
        subSkills: [
          { id: "c2-g4-1", title: "Auxiliary ellipsis", completed: false },
          { id: "c2-g4-2", title: "So/Not substitution", completed: false },
          { id: "c2-g4-3", title: "Response patterns (I hope so, I'm afraid not)", completed: false },
        ]
      },
    ]
  },
  {
    id: "c2-vocabulary",
    title: "Vocabulary",
    icon: "📚",
    description: "Native-level vocabulary and expressions",
    skills: [
      {
        id: "c2-vocab-1",
        title: "Literary Language",
        description: "Sophisticated literary expressions",
        completed: false,
        subSkills: [
          { id: "c2-v1-1", title: "Rhetorical devices", completed: false },
          { id: "c2-v1-2", title: "Archaic expressions", completed: false },
        ]
      },
      {
        id: "c2-vocab-2",
        title: "Nuanced Synonyms",
        description: "Subtle meaning differences",
        completed: false,
        subSkills: [
          { id: "c2-v2-1", title: "Connotation awareness", completed: false },
          { id: "c2-v2-2", title: "Register appropriateness", completed: false },
        ]
      },
    ]
  },
];

// ==================== COMPLETE CURRICULUM ====================
export const curriculumData: LevelCurriculum[] = [
  {
    level: "A1",
    title: "Beginner",
    description: "Basic communication for simple everyday situations",
    targetVocabulary: "500-700 words",
    estimatedHours: 80,
    categories: a1Categories,
  },
  {
    level: "A2",
    title: "Elementary",
    description: "Communication in everyday situations with confidence",
    targetVocabulary: "1,000-1,500 words",
    estimatedHours: 180,
    categories: a2Categories,
  },
  {
    level: "B1",
    title: "Intermediate",
    description: "Independent communication in most situations",
    targetVocabulary: "2,000-3,000 words",
    estimatedHours: 350,
    categories: b1Categories,
  },
  {
    level: "B2",
    title: "Upper Intermediate",
    description: "Fluent communication on complex topics",
    targetVocabulary: "4,000-5,000 words",
    estimatedHours: 500,
    categories: b2Categories,
  },
  {
    level: "C1",
    title: "Advanced",
    description: "Professional and academic communication",
    targetVocabulary: "6,000-8,000 words",
    estimatedHours: 700,
    categories: c1Categories,
  },
  {
    level: "C2",
    title: "Mastery",
    description: "Native-like fluency and precision",
    targetVocabulary: "10,000+ words",
    estimatedHours: 1000,
    categories: c2Categories,
  },
];

// ==================== HELPER FUNCTIONS ====================

// Get level progress based on completed subskills
export const getLevelProgress = (level: CEFRLevel, completedSkills: string[]): number => {
  const levelData = curriculumData.find(l => l.level === level);
  if (!levelData) return 0;
  
  let total = 0;
  let completed = 0;
  
  levelData.categories.forEach(category => {
    category.skills.forEach(skill => {
      skill.subSkills.forEach(subSkill => {
        total++;
        if (completedSkills.includes(subSkill.id)) {
          completed++;
        }
      });
    });
  });
  
  return total > 0 ? Math.round((completed / total) * 100) : 0;
};

// Get category progress
export const getCategoryProgress = (categoryId: string, completedSkills: string[], levelData: LevelCurriculum): number => {
  const category = levelData.categories.find(c => c.id === categoryId);
  if (!category) return 0;
  
  let total = 0;
  let completed = 0;
  
  category.skills.forEach(skill => {
    skill.subSkills.forEach(subSkill => {
      total++;
      if (completedSkills.includes(subSkill.id)) {
        completed++;
      }
    });
  });
  
  return total > 0 ? Math.round((completed / total) * 100) : 0;
};

// Get skill progress
export const getSkillProgress = (skillId: string, completedSkills: string[], levelData: LevelCurriculum): number => {
  for (const category of levelData.categories) {
    const skill = category.skills.find(s => s.id === skillId);
    if (skill) {
      const total = skill.subSkills.length;
      const completed = skill.subSkills.filter(ss => completedSkills.includes(ss.id)).length;
      return total > 0 ? Math.round((completed / total) * 100) : 0;
    }
  }
  return 0;
};

// Get exercise count for a level
export const getLevelExerciseCount = (level: CEFRLevel): number => {
  const levelData = curriculumData.find(l => l.level === level);
  if (!levelData) return 0;
  
  let count = 0;
  levelData.categories.forEach(category => {
    category.skills.forEach(skill => {
      count += skill.exerciseCount || 0;
    });
  });
  
  return count;
};

// Get total exercises across all levels
export const getTotalExerciseCount = (): number => {
  return curriculumData.reduce((total, level) => {
    return total + getLevelExerciseCount(level.level);
  }, 0);
};

// Map skill ID to exercise category
export const getExerciseCategoryForSkill = (skillId: string): string | null => {
  for (const level of curriculumData) {
    for (const category of level.categories) {
      const skill = category.skills.find(s => s.id === skillId);
      if (skill && skill.category) {
        return skill.category;
      }
    }
  }
  return null;
};

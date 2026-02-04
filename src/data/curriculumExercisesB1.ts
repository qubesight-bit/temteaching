// B1 Level Comprehensive Curriculum Exercises - All Categories
import { Exercise } from "./exercisesData";

// Vocabulary Exercises
const b1VocabExercises: Record<string, Exercise[]> = {
  "b1-vocab-1": [ // Trabajo y estudios
    {
      id: "b1-v1-e1",
      type: "multiple-choice",
      question: "I need to _____ for the job interview tomorrow.",
      options: ["prepare", "repair", "compare", "despair"],
      correctAnswer: "prepare",
      explanation: "To prepare = to get ready for something important.",
      difficulty: 2,
      tags: ["work", "b1"]
    },
    {
      id: "b1-v1-e2",
      type: "multiple-choice",
      question: "She got a _____ after working at the company for 5 years.",
      options: ["promotion", "emotion", "devotion", "motion"],
      correctAnswer: "promotion",
      explanation: "A promotion = moving to a higher position at work.",
      difficulty: 2,
      tags: ["work", "b1"]
    },
    {
      id: "b1-v1-e3",
      type: "fill-blank",
      question: "I have a _____ at 3pm with my manager.",
      options: ["meeting", "greeting", "seating", "eating"],
      correctAnswer: "meeting",
      explanation: "A meeting = a scheduled gathering to discuss something.",
      difficulty: 2,
      tags: ["work", "b1"]
    },
    {
      id: "b1-v1-e4",
      type: "multiple-choice",
      question: "The _____ for this job is very competitive.",
      options: ["salary", "celery", "gallery", "salary"],
      correctAnswer: "salary",
      explanation: "Salary = the money you earn from your job.",
      difficulty: 2,
      tags: ["work", "b1"]
    },
    {
      id: "b1-v1-e5",
      type: "multiple-choice",
      question: "I need to _____ my CV before applying for jobs.",
      options: ["update", "downdate", "predate", "postdate"],
      correctAnswer: "update",
      explanation: "To update = to make something current/modern.",
      difficulty: 2,
      tags: ["work", "b1"]
    },
  ],
  "b1-vocab-2": [ // Educación y aprendizaje
    {
      id: "b1-v2-e1",
      type: "multiple-choice",
      question: "I need to _____ for my exams next week.",
      options: ["revise", "advise", "devise", "surprise"],
      correctAnswer: "revise",
      explanation: "To revise = to study again before an exam.",
      difficulty: 2,
      tags: ["education", "b1"]
    },
    {
      id: "b1-v2-e2",
      type: "multiple-choice",
      question: "She got a _____ in Biology from Oxford University.",
      options: ["degree", "agree", "free", "tree"],
      correctAnswer: "degree",
      explanation: "A degree = a qualification from a university.",
      difficulty: 2,
      tags: ["education", "b1"]
    },
    {
      id: "b1-v2-e3",
      type: "fill-blank",
      question: "The _____ gave us a lot of homework today.",
      options: ["lecturer", "lecture", "lecturing", "lectured"],
      correctAnswer: "lecturer",
      explanation: "A lecturer = a teacher at a university.",
      difficulty: 2,
      tags: ["education", "b1"]
    },
    {
      id: "b1-v2-e4",
      type: "multiple-choice",
      question: "I'm writing a _____ on climate change for my course.",
      options: ["dissertation", "destination", "determination", "decoration"],
      correctAnswer: "dissertation",
      explanation: "A dissertation = a long essay/thesis for a degree.",
      difficulty: 2,
      tags: ["education", "b1"]
    },
  ],
  "b1-vocab-3": [ // Tecnología y medios
    {
      id: "b1-v3-e1",
      type: "multiple-choice",
      question: "I need to _____ the document before sending it.",
      options: ["download", "upload", "offload", "overload"],
      correctAnswer: "upload",
      explanation: "Upload = to send a file to the internet/server.",
      difficulty: 2,
      tags: ["technology", "b1"]
    },
    {
      id: "b1-v3-e2",
      type: "multiple-choice",
      question: "The website _____ while I was using it.",
      options: ["crashed", "smashed", "trashed", "dashed"],
      correctAnswer: "crashed",
      explanation: "Crashed = stopped working suddenly (technology).",
      difficulty: 2,
      tags: ["technology", "b1"]
    },
    {
      id: "b1-v3-e3",
      type: "fill-blank",
      question: "You need a strong _____ for your online accounts.",
      options: ["password", "passport", "passway", "passage"],
      correctAnswer: "password",
      explanation: "Password = secret word to access accounts.",
      difficulty: 2,
      tags: ["technology", "b1"]
    },
    {
      id: "b1-v3-e4",
      type: "multiple-choice",
      question: "I _____ all my photos to the cloud.",
      options: ["backed up", "backed down", "backed out", "backed away"],
      correctAnswer: "backed up",
      explanation: "Back up = make a copy of data for safety.",
      difficulty: 2,
      tags: ["technology", "b1"]
    },
  ],
  "b1-vocab-4": [ // Cultura y tradiciones
    {
      id: "b1-v4-e1",
      type: "multiple-choice",
      question: "In the UK, it's a _____ to have turkey at Christmas.",
      options: ["tradition", "transition", "transmission", "translation"],
      correctAnswer: "tradition",
      explanation: "Tradition = a custom passed down through generations.",
      difficulty: 2,
      tags: ["culture", "b1"]
    },
    {
      id: "b1-v4-e2",
      type: "multiple-choice",
      question: "The festival _____ the harvest season every year.",
      options: ["celebrates", "cerebrates", "separates", "generates"],
      correctAnswer: "celebrates",
      explanation: "Celebrate = to mark a special occasion with festivities.",
      difficulty: 2,
      tags: ["culture", "b1"]
    },
    {
      id: "b1-v4-e3",
      type: "fill-blank",
      question: "This museum has a great _____ of ancient artifacts.",
      options: ["collection", "correction", "protection", "direction"],
      correctAnswer: "collection",
      explanation: "Collection = a group of items gathered together.",
      difficulty: 2,
      tags: ["culture", "b1"]
    },
  ],
  "b1-vocab-5": [ // Salud y estilo de vida
    {
      id: "b1-v5-e1",
      type: "multiple-choice",
      question: "A balanced _____ is important for good health.",
      options: ["diet", "dye", "die", "dairy"],
      correctAnswer: "diet",
      explanation: "Diet = the food you regularly eat.",
      difficulty: 2,
      tags: ["health", "b1"]
    },
    {
      id: "b1-v5-e2",
      type: "multiple-choice",
      question: "Regular _____ helps reduce stress and improve mood.",
      options: ["exercise", "exorcise", "excess", "excise"],
      correctAnswer: "exercise",
      explanation: "Exercise = physical activity for health.",
      difficulty: 2,
      tags: ["health", "b1"]
    },
    {
      id: "b1-v5-e3",
      type: "fill-blank",
      question: "I try to get 8 hours of _____ every night.",
      options: ["sleep", "slip", "slap", "slop"],
      correctAnswer: "sleep",
      explanation: "Sleep is essential for physical and mental health.",
      difficulty: 2,
      tags: ["health", "b1"]
    },
  ],
  "b1-vocab-6": [ // Medio ambiente
    {
      id: "b1-v6-e1",
      type: "multiple-choice",
      question: "We should _____ plastic bottles instead of throwing them away.",
      options: ["recycle", "bicycle", "tricycle", "icicle"],
      correctAnswer: "recycle",
      explanation: "Recycle = to convert waste into reusable material.",
      difficulty: 2,
      tags: ["environment", "b1"]
    },
    {
      id: "b1-v6-e2",
      type: "multiple-choice",
      question: "Climate _____ is causing temperatures to rise globally.",
      options: ["change", "charge", "chance", "chase"],
      correctAnswer: "change",
      explanation: "Climate change = long-term shifts in temperatures.",
      difficulty: 2,
      tags: ["environment", "b1"]
    },
    {
      id: "b1-v6-e3",
      type: "fill-blank",
      question: "Renewable _____ sources like solar and wind are cleaner.",
      options: ["energy", "emerge", "emergency", "emerging"],
      correctAnswer: "energy",
      explanation: "Renewable energy = energy from sources that don't run out.",
      difficulty: 2,
      tags: ["environment", "b1"]
    },
  ],
};

// Grammar Exercises
const b1GrammarExercises: Record<string, Exercise[]> = {
  "b1-gram-1": [ // Present Simple vs Present Continuous
    {
      id: "b1-g1-e1",
      type: "multiple-choice",
      question: "She usually _____ coffee, but today she _____ tea.",
      options: ["drinks/is drinking", "is drinking/drinks", "drink/drinking", "drinking/drinks"],
      correctAnswer: "drinks/is drinking",
      explanation: "Habit = Present Simple; Now = Present Continuous.",
      difficulty: 2,
      tags: ["tenses", "b1"]
    },
    {
      id: "b1-g1-e2",
      type: "multiple-choice",
      question: "Water _____ at 100 degrees Celsius.",
      options: ["boils", "is boiling", "boil", "boiling"],
      correctAnswer: "boils",
      explanation: "Scientific facts use Present Simple.",
      difficulty: 2,
      tags: ["tenses", "b1"]
    },
    {
      id: "b1-g1-e3",
      type: "fill-blank",
      question: "I _____ (not/understand) what he _____ (say) right now.",
      options: ["don't understand/is saying", "am not understanding/says", "not understand/saying", "don't understanding/is say"],
      correctAnswer: "don't understand/is saying",
      explanation: "State verb (understand) = Simple; Action now = Continuous.",
      difficulty: 2,
      tags: ["tenses", "b1"]
    },
    {
      id: "b1-g1-e4",
      type: "multiple-choice",
      question: "The train _____ at 6:30 every morning.",
      options: ["leaves", "is leaving", "leave", "leaving"],
      correctAnswer: "leaves",
      explanation: "Timetables use Present Simple.",
      difficulty: 2,
      tags: ["tenses", "b1"]
    },
  ],
  "b1-gram-2": [ // Past Simple vs Present Perfect
    {
      id: "b1-g2-e1",
      type: "multiple-choice",
      question: "I _____ to Paris three times. (in my life)",
      options: ["have been", "went", "was", "had been"],
      correctAnswer: "have been",
      explanation: "Life experience (unspecified time) = Present Perfect.",
      difficulty: 2,
      tags: ["tenses", "b1"]
    },
    {
      id: "b1-g2-e2",
      type: "multiple-choice",
      question: "She _____ her job last month.",
      options: ["quit", "has quit", "quits", "had quit"],
      correctAnswer: "quit",
      explanation: "'Last month' = specific past time = Past Simple.",
      difficulty: 2,
      tags: ["tenses", "b1"]
    },
    {
      id: "b1-g2-e3",
      type: "fill-blank",
      question: "I _____ (already/finish) the report. You can read it now.",
      options: ["have already finished", "already finished", "finished already", "have finished already"],
      correctAnswer: "have already finished",
      explanation: "'Already' often goes with Present Perfect.",
      difficulty: 2,
      tags: ["tenses", "b1"]
    },
    {
      id: "b1-g2-e4",
      type: "multiple-choice",
      question: "_____ you ever _____ sushi?",
      options: ["Have/tried", "Did/try", "Have/try", "Did/tried"],
      correctAnswer: "Have/tried",
      explanation: "'Ever' = Present Perfect for life experiences.",
      difficulty: 2,
      tags: ["tenses", "b1"]
    },
  ],
  "b1-gram-3": [ // Future forms
    {
      id: "b1-g3-e1",
      type: "multiple-choice",
      question: "Look at those clouds! It _____ rain.",
      options: ["is going to", "will", "is", "shall"],
      correctAnswer: "is going to",
      explanation: "Prediction based on evidence = going to.",
      difficulty: 2,
      tags: ["future", "b1"]
    },
    {
      id: "b1-g3-e2",
      type: "multiple-choice",
      question: "I think she _____ pass the exam.",
      options: ["will", "is going to", "is", "does"],
      correctAnswer: "will",
      explanation: "Opinion/prediction without evidence = will.",
      difficulty: 2,
      tags: ["future", "b1"]
    },
    {
      id: "b1-g3-e3",
      type: "fill-blank",
      question: "We _____ dinner at Mario's tonight. I booked a table.",
      options: ["are having", "will have", "have", "going to have"],
      correctAnswer: "are having",
      explanation: "Fixed arrangement = Present Continuous for future.",
      difficulty: 2,
      tags: ["future", "b1"]
    },
  ],
  "b1-gram-4": [ // First Conditional
    {
      id: "b1-g4-e1",
      type: "multiple-choice",
      question: "If it _____ tomorrow, we _____ the picnic.",
      options: ["rains/will cancel", "will rain/cancel", "rains/cancel", "rain/will cancel"],
      correctAnswer: "rains/will cancel",
      explanation: "First Conditional: If + Present, will + base verb.",
      difficulty: 2,
      tags: ["conditionals", "b1"]
    },
    {
      id: "b1-g4-e2",
      type: "multiple-choice",
      question: "She _____ angry if you _____ late.",
      options: ["will be/are", "is/will be", "will be/will be", "is/are"],
      correctAnswer: "will be/are",
      explanation: "If clause = Present; Main clause = will.",
      difficulty: 2,
      tags: ["conditionals", "b1"]
    },
    {
      id: "b1-g4-e3",
      type: "fill-blank",
      question: "If you _____ (not/hurry), you _____ (miss) the train.",
      options: ["don't hurry/will miss", "won't hurry/miss", "don't hurry/miss", "hurry/will miss"],
      correctAnswer: "don't hurry/will miss",
      explanation: "Negative in if-clause: don't + base verb.",
      difficulty: 2,
      tags: ["conditionals", "b1"]
    },
  ],
  "b1-gram-5": [ // Second Conditional
    {
      id: "b1-g5-e1",
      type: "multiple-choice",
      question: "If I _____ rich, I _____ around the world.",
      options: ["were/would travel", "was/will travel", "am/would travel", "were/traveled"],
      correctAnswer: "were/would travel",
      explanation: "Second Conditional: If + Past, would + base verb.",
      difficulty: 2,
      tags: ["conditionals", "b1"]
    },
    {
      id: "b1-g5-e2",
      type: "multiple-choice",
      question: "She _____ the job if she _____ more experience.",
      options: ["would get/had", "will get/has", "would get/has", "got/would have"],
      correctAnswer: "would get/had",
      explanation: "Unreal/hypothetical situation = Second Conditional.",
      difficulty: 2,
      tags: ["conditionals", "b1"]
    },
  ],
  "b1-gram-6": [ // Passive Voice
    {
      id: "b1-g6-e1",
      type: "multiple-choice",
      question: "The report _____ yesterday.",
      options: ["was written", "wrote", "is written", "written"],
      correctAnswer: "was written",
      explanation: "Past Passive: was/were + past participle.",
      difficulty: 2,
      tags: ["passive", "b1"]
    },
    {
      id: "b1-g6-e2",
      type: "multiple-choice",
      question: "This wine _____ in France.",
      options: ["is made", "makes", "made", "making"],
      correctAnswer: "is made",
      explanation: "Present Passive: is/are + past participle.",
      difficulty: 2,
      tags: ["passive", "b1"]
    },
    {
      id: "b1-g6-e3",
      type: "fill-blank",
      question: "The bridge _____ (build) 100 years ago.",
      options: ["was built", "built", "is built", "has built"],
      correctAnswer: "was built",
      explanation: "'100 years ago' = Past Passive.",
      difficulty: 2,
      tags: ["passive", "b1"]
    },
  ],
  "b1-gram-7": [ // Relative Clauses
    {
      id: "b1-g7-e1",
      type: "multiple-choice",
      question: "The woman _____ called is my boss.",
      options: ["who", "which", "where", "when"],
      correctAnswer: "who",
      explanation: "'Who' is used for people.",
      difficulty: 2,
      tags: ["relative-clauses", "b1"]
    },
    {
      id: "b1-g7-e2",
      type: "multiple-choice",
      question: "The book _____ I'm reading is very interesting.",
      options: ["which", "who", "where", "when"],
      correctAnswer: "which",
      explanation: "'Which' is used for things.",
      difficulty: 2,
      tags: ["relative-clauses", "b1"]
    },
    {
      id: "b1-g7-e3",
      type: "fill-blank",
      question: "That's the restaurant _____ we had dinner last week.",
      options: ["where", "which", "who", "when"],
      correctAnswer: "where",
      explanation: "'Where' is used for places.",
      difficulty: 2,
      tags: ["relative-clauses", "b1"]
    },
  ],
  "b1-gram-8": [ // Modal Verbs
    {
      id: "b1-g8-e1",
      type: "multiple-choice",
      question: "You _____ be tired. You've been working all day.",
      options: ["must", "can't", "might not", "shouldn't"],
      correctAnswer: "must",
      explanation: "'Must' = strong deduction (certain).",
      difficulty: 2,
      tags: ["modals", "b1"]
    },
    {
      id: "b1-g8-e2",
      type: "multiple-choice",
      question: "She _____ be at home. Her car isn't there.",
      options: ["can't", "must", "might", "should"],
      correctAnswer: "can't",
      explanation: "'Can't' = deduction that something is impossible.",
      difficulty: 2,
      tags: ["modals", "b1"]
    },
    {
      id: "b1-g8-e3",
      type: "fill-blank",
      question: "You _____ wear a uniform at work. It's the rule.",
      options: ["have to", "don't have to", "mustn't", "can"],
      correctAnswer: "have to",
      explanation: "'Have to' = external obligation (rules).",
      difficulty: 2,
      tags: ["modals", "b1"]
    },
    {
      id: "b1-g8-e4",
      type: "multiple-choice",
      question: "You _____ smoke here. It's forbidden.",
      options: ["mustn't", "don't have to", "shouldn't", "can't"],
      correctAnswer: "mustn't",
      explanation: "'Mustn't' = prohibition (not allowed).",
      difficulty: 2,
      tags: ["modals", "b1"]
    },
  ],
};

// Speaking Exercises
const b1SpeakingExercises: Record<string, Exercise[]> = {
  "b1-speak-1": [ // Describir experiencias
    {
      id: "b1-s1-e1",
      type: "multiple-choice",
      question: "To describe a past experience, start with: 'When I was younger, I _____...'",
      options: ["used to", "use to", "am used to", "was use to"],
      correctAnswer: "used to",
      explanation: "'Used to' describes past habits/states.",
      difficulty: 2,
      tags: ["speaking", "experiences", "b1"]
    },
    {
      id: "b1-s1-e2",
      type: "multiple-choice",
      question: "To show sequence: 'First, I arrived. _____, I checked in.'",
      options: ["Then", "Because", "Although", "However"],
      correctAnswer: "Then",
      explanation: "'Then' shows the next step in a sequence.",
      difficulty: 2,
      tags: ["speaking", "sequence", "b1"]
    },
  ],
  "b1-speak-2": [ // Explicar opiniones
    {
      id: "b1-s2-e1",
      type: "multiple-choice",
      question: "To give your opinion: 'I think that... _____ I believe it's important.'",
      options: ["because", "but", "so", "or"],
      correctAnswer: "because",
      explanation: "Use 'because' to give reasons for opinions.",
      difficulty: 2,
      tags: ["speaking", "opinions", "b1"]
    },
    {
      id: "b1-s2-e2",
      type: "multiple-choice",
      question: "To disagree politely: 'I see your point, _____ I think...'",
      options: ["but", "and", "so", "because"],
      correctAnswer: "but",
      explanation: "'But' introduces a contrasting view politely.",
      difficulty: 2,
      tags: ["speaking", "opinions", "b1"]
    },
  ],
  "b1-speak-3": [ // Narrar historias
    {
      id: "b1-s3-e1",
      type: "multiple-choice",
      question: "Good story opening: 'This happened _____ I was on holiday.'",
      options: ["when", "if", "because", "although"],
      correctAnswer: "when",
      explanation: "'When' introduces the time of the story.",
      difficulty: 2,
      tags: ["speaking", "narratives", "b1"]
    },
  ],
};

// Listening Exercises - Import from new thematic file
import { b1ListeningExercisesNew } from "./b1ListeningExercises";

const b1ListeningExercises: Record<string, Exercise[]> = b1ListeningExercisesNew;

// Reading Exercises
const b1ReadingExercises: Record<string, Exercise[]> = {
  "b1-read-1": [ // Artículos y blogs
    {
      id: "b1-r1-e1",
      type: "multiple-choice",
      question: "'According to the article' means:",
      options: ["As stated in the text", "In my opinion", "Generally speaking", "For example"],
      correctAnswer: "As stated in the text",
      explanation: "'According to' refers to information from a source.",
      difficulty: 2,
      tags: ["reading", "articles", "b1"]
    },
  ],
  "b1-read-2": [ // Noticias simplificadas
    {
      id: "b1-r2-e1",
      type: "multiple-choice",
      question: "'Breaking news' means:",
      options: ["Very recent, important news", "Old news", "Fake news", "Local news"],
      correctAnswer: "Very recent, important news",
      explanation: "Breaking news = just happened, important.",
      difficulty: 2,
      tags: ["reading", "news", "b1"]
    },
  ],
};

// Writing Exercises
const b1WritingExercises: Record<string, Exercise[]> = {
  "b1-write-1": [ // Emails formales e informales
    {
      id: "b1-w1-e1",
      type: "multiple-choice",
      question: "Formal email ending: 'I look forward to _____ from you.'",
      options: ["hearing", "hear", "heard", "to hear"],
      correctAnswer: "hearing",
      explanation: "'Look forward to' + gerund (-ing).",
      difficulty: 2,
      tags: ["writing", "emails", "b1"]
    },
    {
      id: "b1-w1-e2",
      type: "multiple-choice",
      question: "Formal greeting when you don't know the name:",
      options: ["Dear Sir/Madam,", "Hi there,", "Hey,", "Hello friend,"],
      correctAnswer: "Dear Sir/Madam,",
      explanation: "Use 'Dear Sir/Madam' when the name is unknown.",
      difficulty: 2,
      tags: ["writing", "emails", "b1"]
    },
  ],
  "b1-write-2": [ // Párrafos de opinión
    {
      id: "b1-w2-e1",
      type: "multiple-choice",
      question: "To introduce your opinion: 'In my _____,...'",
      options: ["opinion", "idea", "think", "believe"],
      correctAnswer: "opinion",
      explanation: "'In my opinion' is a common phrase to state views.",
      difficulty: 2,
      tags: ["writing", "opinion", "b1"]
    },
  ],
};

// Communication Strategies
const b1StrategiesExercises: Record<string, Exercise[]> = {
  "b1-strat-1": [ // Parafrasear
    {
      id: "b1-st1-e1",
      type: "multiple-choice",
      question: "If you don't know 'umbrella', you can say: 'The thing you use when...'",
      options: ["it rains", "you eat", "you sleep", "you drive"],
      correctAnswer: "it rains",
      explanation: "Describe function when you don't know the word.",
      difficulty: 2,
      tags: ["strategies", "paraphrasing", "b1"]
    },
  ],
  "b1-strat-2": [ // Pedir clarificación
    {
      id: "b1-st2-e1",
      type: "multiple-choice",
      question: "Polite way to ask for repetition: 'Could you _____ that, please?'",
      options: ["repeat", "say again", "tell again", "speak again"],
      correctAnswer: "repeat",
      explanation: "'Could you repeat that?' is polite and clear.",
      difficulty: 2,
      tags: ["strategies", "clarification", "b1"]
    },
  ],
};

// Export function
export function getB1CurriculumExercisesBySkillId(skillId: string): Exercise[] {
  const allExercises: Record<string, Exercise[]> = {
    ...b1VocabExercises,
    ...b1GrammarExercises,
    ...b1SpeakingExercises,
    ...b1ListeningExercises,
    ...b1ReadingExercises,
    ...b1WritingExercises,
    ...b1StrategiesExercises,
  };
  
  return allExercises[skillId] || [];
}

export const allB1CurriculumExercises = {
  vocabulary: b1VocabExercises,
  grammar: b1GrammarExercises,
  speaking: b1SpeakingExercises,
  listening: b1ListeningExercises,
  reading: b1ReadingExercises,
  writing: b1WritingExercises,
  strategies: b1StrategiesExercises,
};

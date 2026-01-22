// A2 Level Comprehensive Curriculum Exercises
import { Exercise } from "./exercisesData";

// Vocabulary Exercises
const a2VocabExercises: Record<string, Exercise[]> = {
  "a2-vocab-1": [ // Viajes y transporte
    {
      id: "a2-v1-e1",
      type: "multiple-choice",
      question: "You need a _____ to fly to another country.",
      options: ["train", "bus", "plane", "bicycle"],
      correctAnswer: "plane",
      explanation: "Planes fly to other countries. They travel through the air.",
      difficulty: 1,
      tags: ["travel", "a2"]
    },
    {
      id: "a2-v1-e2",
      type: "multiple-choice",
      question: "At the airport, you must show your _____.",
      options: ["passport", "wallet", "phone", "umbrella"],
      correctAnswer: "passport",
      explanation: "A passport is an official document for international travel.",
      difficulty: 1,
      tags: ["travel", "a2"]
    },
    {
      id: "a2-v1-e3",
      type: "fill-blank",
      question: "The train leaves from _____ 5.",
      options: ["platform", "floor", "room", "door"],
      correctAnswer: "platform",
      explanation: "Trains leave from platforms at the station.",
      difficulty: 1,
      tags: ["transport", "a2"]
    },
    {
      id: "a2-v1-e4",
      type: "multiple-choice",
      question: "I need to buy a return _____ to London.",
      options: ["ticket", "card", "money", "passport"],
      correctAnswer: "ticket",
      explanation: "A return ticket takes you there and back.",
      difficulty: 1,
      tags: ["transport", "a2"]
    },
    {
      id: "a2-v1-e5",
      type: "multiple-choice",
      question: "The place where planes land and take off is called an _____.",
      options: ["airport", "station", "port", "terminal"],
      correctAnswer: "airport",
      explanation: "An airport is for planes. A station is for trains.",
      difficulty: 1,
      tags: ["travel", "a2"]
    },
  ],
  "a2-vocab-2": [ // Compras y dinero
    {
      id: "a2-v2-e1",
      type: "multiple-choice",
      question: "You can try on clothes in the _____.",
      options: ["changing room", "bathroom", "kitchen", "garden"],
      correctAnswer: "changing room",
      explanation: "A changing room (or fitting room) is for trying clothes.",
      difficulty: 1,
      tags: ["shopping", "a2"]
    },
    {
      id: "a2-v2-e2",
      type: "multiple-choice",
      question: "The _____ shows how much something costs.",
      options: ["receipt", "price tag", "bag", "box"],
      correctAnswer: "price tag",
      explanation: "A price tag shows the cost of an item.",
      difficulty: 1,
      tags: ["shopping", "a2"]
    },
    {
      id: "a2-v2-e3",
      type: "fill-blank",
      question: "I'd like to pay by credit _____.",
      options: ["card", "money", "cash", "check"],
      correctAnswer: "card",
      explanation: "We say 'pay by credit card' or 'pay in cash'.",
      difficulty: 1,
      tags: ["money", "a2"]
    },
    {
      id: "a2-v2-e4",
      type: "multiple-choice",
      question: "If something costs less than usual, it's on _____.",
      options: ["fire", "sale", "display", "order"],
      correctAnswer: "sale",
      explanation: "On sale = reduced price, discount.",
      difficulty: 1,
      tags: ["shopping", "a2"]
    },
  ],
  "a2-vocab-3": [ // Salud y cuerpo
    {
      id: "a2-v3-e1",
      type: "multiple-choice",
      question: "If you feel sick, you should see a _____.",
      options: ["teacher", "chef", "doctor", "driver"],
      correctAnswer: "doctor",
      explanation: "A doctor helps sick people.",
      difficulty: 1,
      tags: ["health", "a2"]
    },
    {
      id: "a2-v3-e2",
      type: "multiple-choice",
      question: "You use your _____ to hear.",
      options: ["eyes", "nose", "ears", "mouth"],
      correctAnswer: "ears",
      explanation: "Ears are for hearing sounds.",
      difficulty: 1,
      tags: ["body", "a2"]
    },
    {
      id: "a2-v3-e3",
      type: "fill-blank",
      question: "I have a terrible _____. I need some aspirin.",
      options: ["headache", "leg", "arm", "hand"],
      correctAnswer: "headache",
      explanation: "A headache is pain in your head.",
      difficulty: 1,
      tags: ["health", "a2"]
    },
    {
      id: "a2-v3-e4",
      type: "multiple-choice",
      question: "Medicine is sold at the _____.",
      options: ["bakery", "pharmacy", "library", "gym"],
      correctAnswer: "pharmacy",
      explanation: "A pharmacy (or chemist) sells medicine.",
      difficulty: 1,
      tags: ["health", "a2"]
    },
  ],
};

// Grammar Exercises
const a2GrammarExercises: Record<string, Exercise[]> = {
  "a2-gram-1": [ // Past Simple Regular
    {
      id: "a2-g1-e1",
      type: "multiple-choice",
      question: "I _____ (walk) to school yesterday.",
      options: ["walk", "walked", "walking", "walks"],
      correctAnswer: "walked",
      explanation: "Past Simple regular verbs: add -ed. Walk → walked.",
      difficulty: 1,
      tags: ["past-simple", "a2"]
    },
    {
      id: "a2-g1-e2",
      type: "multiple-choice",
      question: "She _____ (play) tennis last weekend.",
      options: ["play", "played", "playing", "plays"],
      correctAnswer: "played",
      explanation: "Past Simple: play → played.",
      difficulty: 1,
      tags: ["past-simple", "a2"]
    },
    {
      id: "a2-g1-e3",
      type: "multiple-choice",
      question: "They _____ (not/watch) TV last night.",
      options: ["didn't watch", "don't watch", "wasn't watch", "not watched"],
      correctAnswer: "didn't watch",
      explanation: "Negative Past Simple: didn't + base verb.",
      difficulty: 1,
      tags: ["past-simple", "a2"]
    },
    {
      id: "a2-g1-e4",
      type: "fill-blank",
      question: "_____ you _____ (visit) the museum yesterday?",
      options: ["Did/visit", "Do/visit", "Was/visit", "Were/visited"],
      correctAnswer: "Did/visit",
      explanation: "Questions in Past Simple: Did + subject + base verb.",
      difficulty: 1,
      tags: ["past-simple", "a2"]
    },
    {
      id: "a2-g1-e5",
      type: "multiple-choice",
      question: "The movie _____ (finish) at 10 PM.",
      options: ["finish", "finished", "finishing", "finishes"],
      correctAnswer: "finished",
      explanation: "Past Simple: finish → finished.",
      difficulty: 1,
      tags: ["past-simple", "a2"]
    },
  ],
  "a2-gram-2": [ // Past Simple Irregular
    {
      id: "a2-g2-e1",
      type: "multiple-choice",
      question: "I _____ (go) to Paris last summer.",
      options: ["go", "went", "gone", "going"],
      correctAnswer: "went",
      explanation: "Go is irregular: go → went → gone.",
      difficulty: 1,
      tags: ["past-simple", "irregular", "a2"]
    },
    {
      id: "a2-g2-e2",
      type: "multiple-choice",
      question: "She _____ (buy) a new car last month.",
      options: ["buy", "bought", "buyed", "buying"],
      correctAnswer: "bought",
      explanation: "Buy is irregular: buy → bought → bought.",
      difficulty: 1,
      tags: ["past-simple", "irregular", "a2"]
    },
    {
      id: "a2-g2-e3",
      type: "multiple-choice",
      question: "They _____ (eat) sushi for dinner.",
      options: ["eat", "ate", "eated", "eaten"],
      correctAnswer: "ate",
      explanation: "Eat is irregular: eat → ate → eaten.",
      difficulty: 1,
      tags: ["past-simple", "irregular", "a2"]
    },
    {
      id: "a2-g2-e4",
      type: "fill-blank",
      question: "He _____ (see) a great movie yesterday.",
      options: ["see", "saw", "seen", "seeing"],
      correctAnswer: "saw",
      explanation: "See is irregular: see → saw → seen.",
      difficulty: 1,
      tags: ["past-simple", "irregular", "a2"]
    },
    {
      id: "a2-g2-e5",
      type: "multiple-choice",
      question: "We _____ (have) a wonderful time.",
      options: ["have", "had", "haved", "having"],
      correctAnswer: "had",
      explanation: "Have is irregular: have → had → had.",
      difficulty: 1,
      tags: ["past-simple", "irregular", "a2"]
    },
  ],
  "a2-gram-3": [ // Future with Will
    {
      id: "a2-g3-e1",
      type: "multiple-choice",
      question: "I think it _____ rain tomorrow.",
      options: ["will", "is going to", "is", "does"],
      correctAnswer: "will",
      explanation: "Use 'will' for predictions (I think...).",
      difficulty: 1,
      tags: ["future", "will", "a2"]
    },
    {
      id: "a2-g3-e2",
      type: "multiple-choice",
      question: "Don't worry, I _____ help you.",
      options: ["will", "am going to", "am", "do"],
      correctAnswer: "will",
      explanation: "Use 'will' for spontaneous decisions/offers.",
      difficulty: 1,
      tags: ["future", "will", "a2"]
    },
    {
      id: "a2-g3-e3",
      type: "fill-blank",
      question: "She _____ NOT be at the party tonight.",
      options: ["will", "won't", "isn't", "doesn't"],
      correctAnswer: "won't",
      explanation: "Negative: will not = won't.",
      difficulty: 1,
      tags: ["future", "will", "a2"]
    },
    {
      id: "a2-g3-e4",
      type: "multiple-choice",
      question: "_____ you _____ me tomorrow?",
      options: ["Will/call", "Are/call", "Do/call", "Have/called"],
      correctAnswer: "Will/call",
      explanation: "Questions: Will + subject + base verb.",
      difficulty: 1,
      tags: ["future", "will", "a2"]
    },
  ],
  "a2-gram-4": [ // Going to
    {
      id: "a2-g4-e1",
      type: "multiple-choice",
      question: "Look at those clouds! It _____ rain.",
      options: ["will", "is going to", "is", "does"],
      correctAnswer: "is going to",
      explanation: "Use 'going to' for predictions based on evidence.",
      difficulty: 1,
      tags: ["future", "going-to", "a2"]
    },
    {
      id: "a2-g4-e2",
      type: "multiple-choice",
      question: "I _____ study medicine next year. I've already applied.",
      options: ["will", "am going to", "am", "do"],
      correctAnswer: "am going to",
      explanation: "Use 'going to' for planned future actions.",
      difficulty: 1,
      tags: ["future", "going-to", "a2"]
    },
    {
      id: "a2-g4-e3",
      type: "fill-blank",
      question: "They _____ _____ buy a new house.",
      options: ["are going to", "will to", "is going to", "going to"],
      correctAnswer: "are going to",
      explanation: "Form: am/is/are + going to + verb.",
      difficulty: 1,
      tags: ["future", "going-to", "a2"]
    },
    {
      id: "a2-g4-e4",
      type: "multiple-choice",
      question: "What _____ you _____ do this weekend?",
      options: ["are/going to", "will/going to", "do/going", "is/going to"],
      correctAnswer: "are/going to",
      explanation: "Questions: What are you going to do?",
      difficulty: 1,
      tags: ["future", "going-to", "a2"]
    },
  ],
  "a2-gram-5": [ // Comparatives
    {
      id: "a2-g5-e1",
      type: "multiple-choice",
      question: "An elephant is _____ than a mouse.",
      options: ["big", "bigger", "biggest", "more big"],
      correctAnswer: "bigger",
      explanation: "Comparative of 'big': bigger (short adjectives add -er).",
      difficulty: 1,
      tags: ["comparatives", "a2"]
    },
    {
      id: "a2-g5-e2",
      type: "multiple-choice",
      question: "This book is _____ than that one.",
      options: ["interesting", "more interesting", "interestinger", "most interesting"],
      correctAnswer: "more interesting",
      explanation: "Long adjectives use 'more + adjective'.",
      difficulty: 1,
      tags: ["comparatives", "a2"]
    },
    {
      id: "a2-g5-e3",
      type: "fill-blank",
      question: "My brother is _____ (tall) than me.",
      options: ["tall", "taller", "tallest", "more tall"],
      correctAnswer: "taller",
      explanation: "Tall → taller (short adjective + -er).",
      difficulty: 1,
      tags: ["comparatives", "a2"]
    },
    {
      id: "a2-g5-e4",
      type: "multiple-choice",
      question: "This exercise is _____ than the last one.",
      options: ["easy", "easier", "easiest", "more easy"],
      correctAnswer: "easier",
      explanation: "Easy → easier (y changes to i + er).",
      difficulty: 1,
      tags: ["comparatives", "a2"]
    },
  ],
  "a2-gram-6": [ // Superlatives
    {
      id: "a2-g6-e1",
      type: "multiple-choice",
      question: "This is the _____ movie I've ever seen!",
      options: ["good", "better", "best", "most good"],
      correctAnswer: "best",
      explanation: "Good → better → best (irregular).",
      difficulty: 1,
      tags: ["superlatives", "a2"]
    },
    {
      id: "a2-g6-e2",
      type: "multiple-choice",
      question: "Mount Everest is the _____ mountain in the world.",
      options: ["high", "higher", "highest", "most high"],
      correctAnswer: "highest",
      explanation: "High → higher → highest.",
      difficulty: 1,
      tags: ["superlatives", "a2"]
    },
    {
      id: "a2-g6-e3",
      type: "fill-blank",
      question: "She is the _____ (intelligent) student in the class.",
      options: ["intelligent", "more intelligent", "most intelligent", "intelligentest"],
      correctAnswer: "most intelligent",
      explanation: "Long adjectives: the most + adjective.",
      difficulty: 1,
      tags: ["superlatives", "a2"]
    },
  ],
};

// Speaking Exercises
const a2SpeakingExercises: Record<string, Exercise[]> = {
  "a2-speak-1": [ // Describir rutinas
    {
      id: "a2-s1-e1",
      type: "multiple-choice",
      question: "How do you describe your morning? 'I usually _____ at 7 AM.'",
      options: ["wake up", "waking up", "woke up", "waken up"],
      correctAnswer: "wake up",
      explanation: "For routines, use Present Simple: I wake up.",
      difficulty: 1,
      tags: ["routines", "a2"]
    },
    {
      id: "a2-s1-e2",
      type: "multiple-choice",
      question: "Which word shows frequency? 'I _____ go to the gym.'",
      options: ["yesterday", "sometimes", "tomorrow", "next"],
      correctAnswer: "sometimes",
      explanation: "Frequency adverbs: always, usually, often, sometimes, rarely, never.",
      difficulty: 1,
      tags: ["routines", "a2"]
    },
    {
      id: "a2-s1-e3",
      type: "fill-blank",
      question: "What do you do _____ the morning?",
      options: ["in", "on", "at", "by"],
      correctAnswer: "in",
      explanation: "Time expressions: in the morning/afternoon/evening.",
      difficulty: 1,
      tags: ["routines", "a2"]
    },
  ],
  "a2-speak-2": [ // Hablar del pasado
    {
      id: "a2-s2-e1",
      type: "multiple-choice",
      question: "Talking about vacation: 'Last summer, I _____ to Greece.'",
      options: ["go", "went", "going", "gone"],
      correctAnswer: "went",
      explanation: "Use Past Simple for completed past actions.",
      difficulty: 1,
      tags: ["past", "speaking", "a2"]
    },
    {
      id: "a2-s2-e2",
      type: "multiple-choice",
      question: "How do you ask about the weekend? '_____ did you do?'",
      options: ["How", "What", "Where", "When"],
      correctAnswer: "What",
      explanation: "What did you do? = asking about activities.",
      difficulty: 1,
      tags: ["past", "speaking", "a2"]
    },
  ],
};

// Listening Exercises
const a2ListeningExercises: Record<string, Exercise[]> = {
  "a2-list-1": [ // Conversaciones cotidianas
    {
      id: "a2-l1-e1",
      type: "multiple-choice",
      question: "You hear: 'Could you repeat that, please?' The person wants you to:",
      options: ["Be quiet", "Say it again", "Speak faster", "Leave"],
      correctAnswer: "Say it again",
      explanation: "'Repeat' means to say something again.",
      difficulty: 1,
      tags: ["listening", "conversations", "a2"]
    },
    {
      id: "a2-l1-e2",
      type: "multiple-choice",
      question: "You hear: 'The meeting is at half past two.' What time is it?",
      options: ["2:00", "2:15", "2:30", "2:45"],
      correctAnswer: "2:30",
      explanation: "Half past two = 2:30.",
      difficulty: 1,
      tags: ["listening", "time", "a2"]
    },
    {
      id: "a2-l1-e3",
      type: "fill-blank",
      question: "You hear: 'It's quarter to three.' What time is it?",
      options: ["2:45", "3:15", "2:15", "3:45"],
      correctAnswer: "2:45",
      explanation: "Quarter to three = 15 minutes before 3:00 = 2:45.",
      difficulty: 1,
      tags: ["listening", "time", "a2"]
    },
  ],
  "a2-list-2": [ // Anuncios
    {
      id: "a2-l2-e1",
      type: "multiple-choice",
      question: "At a station you hear: 'The train to London is delayed.' This means:",
      options: ["The train is on time", "The train is late", "The train is cancelled", "The train is early"],
      correctAnswer: "The train is late",
      explanation: "'Delayed' means late, not on time.",
      difficulty: 1,
      tags: ["listening", "announcements", "a2"]
    },
    {
      id: "a2-l2-e2",
      type: "multiple-choice",
      question: "You hear: 'Please proceed to gate 15.' You should:",
      options: ["Wait", "Go to gate 15", "Go home", "Take a taxi"],
      correctAnswer: "Go to gate 15",
      explanation: "'Proceed to' means 'go to'.",
      difficulty: 1,
      tags: ["listening", "announcements", "a2"]
    },
  ],
};

// Reading Exercises
const a2ReadingExercises: Record<string, Exercise[]> = {
  "a2-read-1": [ // Emails informales
    {
      id: "a2-r1-e1",
      type: "multiple-choice",
      question: "In an informal email, 'BTW' means:",
      options: ["By the way", "Before the week", "Best to wait", "Between"],
      correctAnswer: "By the way",
      explanation: "BTW is an abbreviation for 'by the way'.",
      difficulty: 1,
      tags: ["reading", "emails", "a2"]
    },
    {
      id: "a2-r1-e2",
      type: "multiple-choice",
      question: "An email says: 'RSVP by Friday.' This means:",
      options: ["Don't reply", "Reply by Friday", "Come on Friday", "Cancel by Friday"],
      correctAnswer: "Reply by Friday",
      explanation: "RSVP = please reply (répondez s'il vous plaît).",
      difficulty: 1,
      tags: ["reading", "emails", "a2"]
    },
  ],
  "a2-read-2": [ // Descripciones simples
    {
      id: "a2-r2-e1",
      type: "multiple-choice",
      question: "Read: 'The restaurant is open Monday to Saturday.' Is it open on Sunday?",
      options: ["Yes", "No", "Maybe", "Only in the morning"],
      correctAnswer: "No",
      explanation: "Monday to Saturday means it's closed on Sunday.",
      difficulty: 1,
      tags: ["reading", "descriptions", "a2"]
    },
  ],
};

// Writing Exercises
const a2WritingExercises: Record<string, Exercise[]> = {
  "a2-write-1": [ // Postales y mensajes cortos
    {
      id: "a2-w1-e1",
      type: "multiple-choice",
      question: "In a postcard, you write: 'Wish you were _____!'",
      options: ["here", "there", "where", "this"],
      correctAnswer: "here",
      explanation: "'Wish you were here' = I wish you were with me.",
      difficulty: 1,
      tags: ["writing", "postcards", "a2"]
    },
    {
      id: "a2-w1-e2",
      type: "multiple-choice",
      question: "How do you describe weather? 'The weather is _____.'",
      options: ["lovely", "very", "much", "many"],
      correctAnswer: "lovely",
      explanation: "Use adjectives: lovely, beautiful, sunny, rainy.",
      difficulty: 1,
      tags: ["writing", "descriptions", "a2"]
    },
  ],
  "a2-write-2": [ // Descripciones de lugares
    {
      id: "a2-w2-e1",
      type: "multiple-choice",
      question: "Describing location: 'The hotel is _____ the beach.'",
      options: ["next", "near", "close", "beside"],
      correctAnswer: "near",
      explanation: "'Near' = close to. We say 'near the beach'.",
      difficulty: 1,
      tags: ["writing", "places", "a2"]
    },
    {
      id: "a2-w2-e2",
      type: "fill-blank",
      question: "The museum is _____ the city center.",
      options: ["in", "on", "at", "by"],
      correctAnswer: "in",
      explanation: "We say 'in the center' of a place.",
      difficulty: 1,
      tags: ["writing", "places", "a2"]
    },
  ],
};

// Export function
export function getA2ExercisesBySkillId(skillId: string): Exercise[] {
  const allExercises: Record<string, Exercise[]> = {
    ...a2VocabExercises,
    ...a2GrammarExercises,
    ...a2SpeakingExercises,
    ...a2ListeningExercises,
    ...a2ReadingExercises,
    ...a2WritingExercises,
  };
  
  return allExercises[skillId] || [];
}

export const allA2CurriculumExercises = {
  vocabulary: a2VocabExercises,
  grammar: a2GrammarExercises,
  speaking: a2SpeakingExercises,
  listening: a2ListeningExercises,
  reading: a2ReadingExercises,
  writing: a2WritingExercises,
};

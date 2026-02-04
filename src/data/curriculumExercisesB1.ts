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

// Grammar Exercises - A2/B1 Module: Past Simple, Present Perfect, Present Perfect vs Past Simple, Future with Going to
const b1GrammarExercises: Record<string, Exercise[]> = {
  "b1-gram-1": [ // Past Simple (50 exercises)
    { id: "b1-g1-e1", type: "fill-blank", question: "I ______ (play) soccer yesterday.", options: ["played", "play", "plays", "playing"], correctAnswer: "played", explanation: "Regular verbs add -ed for Past Simple.", difficulty: 2, tags: ["past-simple", "regular-verbs", "b1"] },
    { id: "b1-g1-e2", type: "fill-blank", question: "She ______ (cook) dinner last night.", options: ["cooked", "cook", "cooks", "cooking"], correctAnswer: "cooked", explanation: "Regular verb: cook → cooked.", difficulty: 2, tags: ["past-simple", "regular-verbs", "b1"] },
    { id: "b1-g1-e3", type: "fill-blank", question: "We ______ (visit) my grandmother.", options: ["visited", "visit", "visits", "visiting"], correctAnswer: "visited", explanation: "Regular verb: visit → visited.", difficulty: 2, tags: ["past-simple", "regular-verbs", "b1"] },
    { id: "b1-g1-e4", type: "fill-blank", question: "He ______ (watch) a movie.", options: ["watched", "watch", "watches", "watching"], correctAnswer: "watched", explanation: "Regular verb: watch → watched.", difficulty: 2, tags: ["past-simple", "regular-verbs", "b1"] },
    { id: "b1-g1-e5", type: "fill-blank", question: "It ______ (rain) all day.", options: ["rained", "rain", "rains", "raining"], correctAnswer: "rained", explanation: "Regular verb: rain → rained.", difficulty: 2, tags: ["past-simple", "regular-verbs", "b1"] },
    { id: "b1-g1-e6", type: "fill-blank", question: "They ______ (clean) the house.", options: ["cleaned", "clean", "cleans", "cleaning"], correctAnswer: "cleaned", explanation: "Regular verb: clean → cleaned.", difficulty: 2, tags: ["past-simple", "regular-verbs", "b1"] },
    { id: "b1-g1-e7", type: "fill-blank", question: "I ______ (start) a new job.", options: ["started", "start", "starts", "starting"], correctAnswer: "started", explanation: "Regular verb: start → started.", difficulty: 2, tags: ["past-simple", "regular-verbs", "b1"] },
    { id: "b1-g1-e8", type: "fill-blank", question: "She ______ (listen) to music.", options: ["listened", "listen", "listens", "listening"], correctAnswer: "listened", explanation: "Regular verb: listen → listened.", difficulty: 2, tags: ["past-simple", "regular-verbs", "b1"] },
    { id: "b1-g1-e9", type: "fill-blank", question: "We ______ (walk) in the park.", options: ["walked", "walk", "walks", "walking"], correctAnswer: "walked", explanation: "Regular verb: walk → walked.", difficulty: 2, tags: ["past-simple", "regular-verbs", "b1"] },
    { id: "b1-g1-e10", type: "fill-blank", question: "He ______ (fix) the car.", options: ["fixed", "fix", "fixes", "fixing"], correctAnswer: "fixed", explanation: "Regular verb: fix → fixed.", difficulty: 2, tags: ["past-simple", "regular-verbs", "b1"] },
    { id: "b1-g1-e11", type: "fill-blank", question: "I ______ (go) to the beach.", options: ["went", "go", "goes", "going"], correctAnswer: "went", explanation: "Irregular: go → went.", difficulty: 2, tags: ["past-simple", "irregular-verbs", "b1"] },
    { id: "b1-g1-e12", type: "fill-blank", question: "She ______ (see) a bird.", options: ["saw", "see", "sees", "seen"], correctAnswer: "saw", explanation: "Irregular: see → saw.", difficulty: 2, tags: ["past-simple", "irregular-verbs", "b1"] },
    { id: "b1-g1-e13", type: "fill-blank", question: "We ______ (eat) pizza.", options: ["ate", "eat", "eats", "eaten"], correctAnswer: "ate", explanation: "Irregular: eat → ate.", difficulty: 2, tags: ["past-simple", "irregular-verbs", "b1"] },
    { id: "b1-g1-e14", type: "fill-blank", question: "He ______ (buy) a new phone.", options: ["bought", "buy", "buys", "buying"], correctAnswer: "bought", explanation: "Irregular: buy → bought.", difficulty: 2, tags: ["past-simple", "irregular-verbs", "b1"] },
    { id: "b1-g1-e15", type: "fill-blank", question: "They ______ (have) a party.", options: ["had", "have", "has", "having"], correctAnswer: "had", explanation: "Irregular: have → had.", difficulty: 2, tags: ["past-simple", "irregular-verbs", "b1"] },
    { id: "b1-g1-e16", type: "fill-blank", question: "I ______ (make) a cake.", options: ["made", "make", "makes", "making"], correctAnswer: "made", explanation: "Irregular: make → made.", difficulty: 2, tags: ["past-simple", "irregular-verbs", "b1"] },
    { id: "b1-g1-e17", type: "fill-blank", question: "She ______ (take) a photo.", options: ["took", "take", "takes", "taken"], correctAnswer: "took", explanation: "Irregular: take → took.", difficulty: 2, tags: ["past-simple", "irregular-verbs", "b1"] },
    { id: "b1-g1-e18", type: "fill-blank", question: "We ______ (drink) water.", options: ["drank", "drink", "drinks", "drunk"], correctAnswer: "drank", explanation: "Irregular: drink → drank.", difficulty: 2, tags: ["past-simple", "irregular-verbs", "b1"] },
    { id: "b1-g1-e19", type: "fill-blank", question: "He ______ (give) me a gift.", options: ["gave", "give", "gives", "given"], correctAnswer: "gave", explanation: "Irregular: give → gave.", difficulty: 2, tags: ["past-simple", "irregular-verbs", "b1"] },
    { id: "b1-g1-e20", type: "fill-blank", question: "It ______ (break) yesterday.", options: ["broke", "break", "breaks", "broken"], correctAnswer: "broke", explanation: "Irregular: break → broke.", difficulty: 2, tags: ["past-simple", "irregular-verbs", "b1"] },
    { id: "b1-g1-e21", type: "fill-blank", question: "I ______ (not/play) tennis.", options: ["didn't play", "don't play", "didn't played", "not play"], correctAnswer: "didn't play", explanation: "Negatives: didn't + base verb (not past form).", difficulty: 2, tags: ["past-simple", "negatives", "b1"] },
    { id: "b1-g1-e22", type: "fill-blank", question: "She ______ (not/go) to school.", options: ["didn't go", "doesn't go", "didn't went", "not go"], correctAnswer: "didn't go", explanation: "With didn't, use base verb: go not went.", difficulty: 2, tags: ["past-simple", "negatives", "b1"] },
    { id: "b1-g1-e23", type: "fill-blank", question: "We ______ (not/see) the movie.", options: ["didn't see", "don't see", "didn't saw", "not see"], correctAnswer: "didn't see", explanation: "Didn't + base verb: see not saw.", difficulty: 2, tags: ["past-simple", "negatives", "b1"] },
    { id: "b1-g1-e24", type: "fill-blank", question: "He ______ (not/eat) breakfast.", options: ["didn't eat", "doesn't eat", "didn't ate", "not eat"], correctAnswer: "didn't eat", explanation: "Didn't + base verb: eat not ate.", difficulty: 2, tags: ["past-simple", "negatives", "b1"] },
    { id: "b1-g1-e25", type: "fill-blank", question: "They ______ (not/buy) the car.", options: ["didn't buy", "don't buy", "didn't bought", "not buy"], correctAnswer: "didn't buy", explanation: "Didn't + base verb: buy not bought.", difficulty: 2, tags: ["past-simple", "negatives", "b1"] },
    { id: "b1-g1-e26", type: "multiple-choice", question: "Correct the sentence: 'I didn't went there.'", options: ["I didn't go there.", "I did not went there.", "I don't go there.", "I not went there."], correctAnswer: "I didn't go there.", explanation: "With didn't use base verb: go, not went.", difficulty: 2, tags: ["past-simple", "negatives", "b1"] },
    { id: "b1-g1-e27", type: "multiple-choice", question: "Correct the sentence: 'She no liked the food.'", options: ["She didn't like the food.", "She not liked the food.", "She don't like the food.", "She no like the food."], correctAnswer: "She didn't like the food.", explanation: "Use didn't + base verb for past negative.", difficulty: 2, tags: ["past-simple", "negatives", "b1"] },
    { id: "b1-g1-e28", type: "fill-blank", question: "He was tired, so he ______ (not/work).", options: ["didn't work", "don't work", "didn't worked", "not work"], correctAnswer: "didn't work", explanation: "Didn't + base verb for past negative.", difficulty: 2, tags: ["past-simple", "negatives", "b1"] },
    { id: "b1-g1-e29", type: "fill-blank", question: "I ______ (not/know) the answer.", options: ["didn't know", "don't know", "didn't knew", "not know"], correctAnswer: "didn't know", explanation: "Irregular: know → knew, but with didn't use base: know.", difficulty: 2, tags: ["past-simple", "negatives", "b1"] },
    { id: "b1-g1-e30", type: "fill-blank", question: "We ______ (not/have) time.", options: ["didn't have", "don't have", "didn't had", "not have"], correctAnswer: "didn't have", explanation: "Didn't + base verb: have not had.", difficulty: 2, tags: ["past-simple", "negatives", "b1"] },
    { id: "b1-g1-e31", type: "multiple-choice", question: "______ you (go) to the party?", options: ["Did you go", "Do you go", "Did you went", "You did go"], correctAnswer: "Did you go", explanation: "Questions: Did + subject + base verb.", difficulty: 2, tags: ["past-simple", "questions", "b1"] },
    { id: "b1-g1-e32", type: "multiple-choice", question: "______ she (like) the gift?", options: ["Did she like", "Does she like", "Did she liked", "She did like"], correctAnswer: "Did she like", explanation: "Did + subject + base verb.", difficulty: 2, tags: ["past-simple", "questions", "b1"] },
    { id: "b1-g1-e33", type: "multiple-choice", question: "______ they (arrive) on time?", options: ["Did they arrive", "Do they arrive", "Did they arrived", "They did arrive"], correctAnswer: "Did they arrive", explanation: "Did + subject + base verb.", difficulty: 2, tags: ["past-simple", "questions", "b1"] },
    { id: "b1-g1-e34", type: "multiple-choice", question: "______ he (call) you?", options: ["Did he call", "Does he call", "Did he called", "He did call"], correctAnswer: "Did he call", explanation: "Did + subject + base verb.", difficulty: 2, tags: ["past-simple", "questions", "b1"] },
    { id: "b1-g1-e35", type: "fill-blank", question: "What ______ you (eat) for lunch?", options: ["did you eat", "do you eat", "did you ate", "you did eat"], correctAnswer: "did you eat", explanation: "Wh-word + did + subject + base verb.", difficulty: 2, tags: ["past-simple", "questions", "b1"] },
    { id: "b1-g1-e36", type: "fill-blank", question: "Where ______ she (go) yesterday?", options: ["did she go", "does she go", "did she went", "she did go"], correctAnswer: "did she go", explanation: "Where + did + subject + base verb.", difficulty: 2, tags: ["past-simple", "questions", "b1"] },
    { id: "b1-g1-e37", type: "fill-blank", question: "When ______ they (finish)?", options: ["did they finish", "do they finish", "did they finished", "they did finish"], correctAnswer: "did they finish", explanation: "When + did + subject + base verb.", difficulty: 2, tags: ["past-simple", "questions", "b1"] },
    { id: "b1-g1-e38", type: "fill-blank", question: "Why ______ you (cry)?", options: ["did you cry", "do you cry", "did you cried", "you did cry"], correctAnswer: "did you cry", explanation: "Why + did + subject + base verb.", difficulty: 2, tags: ["past-simple", "questions", "b1"] },
    { id: "b1-g1-e39", type: "multiple-choice", question: "Did you work yesterday? (Yes, I did). Choose the correct short answer.", options: ["Yes, I did.", "Yes, I worked.", "Yes, I do.", "Yes, I work."], correctAnswer: "Yes, I did.", explanation: "Short answer: Yes/No + subject + did/didn't.", difficulty: 2, tags: ["past-simple", "questions", "b1"] },
    { id: "b1-g1-e40", type: "multiple-choice", question: "Did she study? (No, she didn't). Choose the correct short answer.", options: ["No, she didn't.", "No, she didn't studied.", "No, she don't.", "No, she not."], correctAnswer: "No, she didn't.", explanation: "Short answer: No + subject + didn't.", difficulty: 2, tags: ["past-simple", "questions", "b1"] },
    { id: "b1-g1-e41", type: "multiple-choice", question: "Transform to Past: 'I eat apple.'", options: ["I ate an apple.", "I eated an apple.", "I eat an apple.", "I eaten an apple."], correctAnswer: "I ate an apple.", explanation: "Eat → ate (irregular). Use article 'an' before apple.", difficulty: 2, tags: ["past-simple", "transformation", "b1"] },
    { id: "b1-g1-e42", type: "multiple-choice", question: "Transform to Past: 'She goes home.'", options: ["She went home.", "She goed home.", "She go home.", "She gone home."], correctAnswer: "She went home.", explanation: "Go → went (irregular).", difficulty: 2, tags: ["past-simple", "transformation", "b1"] },
    { id: "b1-g1-e43", type: "multiple-choice", question: "Transform to Question: 'He bought milk.'", options: ["Did he buy milk?", "Do he buy milk?", "Did he bought milk?", "He did buy milk?"], correctAnswer: "Did he buy milk?", explanation: "Did + subject + base verb.", difficulty: 2, tags: ["past-simple", "transformation", "b1"] },
    { id: "b1-g1-e44", type: "multiple-choice", question: "Transform to Negative: 'We played well.'", options: ["We didn't play well.", "We don't play well.", "We didn't played well.", "We not played well."], correctAnswer: "We didn't play well.", explanation: "Didn't + base verb.", difficulty: 2, tags: ["past-simple", "transformation", "b1"] },
    { id: "b1-g1-e45", type: "multiple-choice", question: "Unscramble: yesterday / I / saw / him / .", options: ["I saw him yesterday.", "Yesterday I saw him.", "I yesterday saw him.", "Saw I him yesterday."], correctAnswer: "I saw him yesterday.", explanation: "Subject + verb + object + time.", difficulty: 2, tags: ["past-simple", "ordering", "b1"] },
    { id: "b1-g1-e46", type: "fill-blank", question: "Last week I ______ (travel) to London. I ______ (visit) Big Ben and ______ (take) many photos.", options: ["travelled / visited / took", "travel / visit / take", "travelled / visit / took", "travel / visited / take"], correctAnswer: "travelled / visited / took", explanation: "Past Simple for completed actions in a narrative.", difficulty: 2, tags: ["past-simple", "narrative", "b1"] },
    { id: "b1-g1-e47", type: "fill-blank", question: "Yesterday she ______ (wake) up late. She ______ (miss) the bus and ______ (arrive) at work late.", options: ["woke / missed / arrived", "wake / miss / arrive", "woke / miss / arrived", "wake / missed / arrive"], correctAnswer: "woke / missed / arrived", explanation: "Past Simple for a sequence of past events.", difficulty: 2, tags: ["past-simple", "narrative", "b1"] },
    { id: "b1-g1-e48", type: "fill-blank", question: "When I was young, I ______ (live) in Madrid. I ______ (go) to school there and ______ (make) many friends.", options: ["lived / went / made", "live / go / make", "lived / go / made", "live / went / make"], correctAnswer: "lived / went / made", explanation: "Past Simple for past habits and situations.", difficulty: 2, tags: ["past-simple", "narrative", "b1"] },
    { id: "b1-g1-e49", type: "fill-blank", question: "He ______ (open) the door, ______ (walk) in, and ______ (sit) down.", options: ["opened / walked / sat", "open / walk / sit", "opened / walk / sat", "open / walked / sat"], correctAnswer: "opened / walked / sat", explanation: "Past Simple for a sequence of completed actions.", difficulty: 2, tags: ["past-simple", "narrative", "b1"] },
    { id: "b1-g1-e50", type: "fill-blank", question: "We ______ (have) a great time at the party. We ______ (dance) all night and ______ (meet) interesting people.", options: ["had / danced / met", "have / dance / meet", "had / dance / met", "have / danced / meet"], correctAnswer: "had / danced / met", explanation: "Past Simple for past experiences.", difficulty: 2, tags: ["past-simple", "narrative", "b1"] },
  ],
  "b1-gram-2": [ // Present Perfect (Basic) - 50 exercises
    { id: "b1-g2-e1", type: "fill-blank", question: "I ______ (finish) my homework.", options: ["have finished", "has finished", "finished", "finish"], correctAnswer: "have finished", explanation: "Have/Has + past participle. I/you/we/they = have.", difficulty: 2, tags: ["present-perfect", "form", "b1"] },
    { id: "b1-g2-e2", type: "fill-blank", question: "She ______ (clean) her room.", options: ["has cleaned", "have cleaned", "cleaned", "clean"], correctAnswer: "has cleaned", explanation: "He/she/it = has + past participle.", difficulty: 2, tags: ["present-perfect", "form", "b1"] },
    { id: "b1-g2-e3", type: "fill-blank", question: "We ______ (live) here for 10 years.", options: ["have lived", "has lived", "lived", "live"], correctAnswer: "have lived", explanation: "Duration from past to now = Present Perfect.", difficulty: 2, tags: ["present-perfect", "form", "b1"] },
    { id: "b1-g2-e4", type: "fill-blank", question: "He ______ (cook) dinner.", options: ["has cooked", "have cooked", "cooked", "cook"], correctAnswer: "has cooked", explanation: "Has + past participle for he/she/it.", difficulty: 2, tags: ["present-perfect", "form", "b1"] },
    { id: "b1-g2-e5", type: "fill-blank", question: "They ______ (visit) Paris.", options: ["have visited", "has visited", "visited", "visit"], correctAnswer: "have visited", explanation: "They = have + past participle.", difficulty: 2, tags: ["present-perfect", "form", "b1"] },
    { id: "b1-g2-e6", type: "multiple-choice", question: "The participle of 'Go' is:", options: ["gone", "went", "goed", "going"], correctAnswer: "gone", explanation: "Go → went (past) / gone (past participle).", difficulty: 2, tags: ["present-perfect", "participle", "b1"] },
    { id: "b1-g2-e7", type: "multiple-choice", question: "The participle of 'See' is:", options: ["seen", "saw", "seed", "seeing"], correctAnswer: "seen", explanation: "See → saw (past) / seen (past participle).", difficulty: 2, tags: ["present-perfect", "participle", "b1"] },
    { id: "b1-g2-e8", type: "multiple-choice", question: "The participle of 'Eat' is:", options: ["eaten", "ate", "eated", "eating"], correctAnswer: "eaten", explanation: "Eat → ate (past) / eaten (past participle).", difficulty: 2, tags: ["present-perfect", "participle", "b1"] },
    { id: "b1-g2-e9", type: "multiple-choice", question: "The participle of 'Do' is:", options: ["done", "did", "doed", "doing"], correctAnswer: "done", explanation: "Do → did (past) / done (past participle).", difficulty: 2, tags: ["present-perfect", "participle", "b1"] },
    { id: "b1-g2-e10", type: "multiple-choice", question: "The participle of 'Write' is:", options: ["written", "wrote", "writed", "writing"], correctAnswer: "written", explanation: "Write → wrote (past) / written (past participle).", difficulty: 2, tags: ["present-perfect", "participle", "b1"] },
    { id: "b1-g2-e11", type: "fill-blank", question: "Have you ever ______ (be) to Spain?", options: ["been", "was", "were", "be"], correctAnswer: "been", explanation: "Ever + Present Perfect for experiences. Be → been.", difficulty: 2, tags: ["present-perfect", "ever", "b1"] },
    { id: "b1-g2-e12", type: "fill-blank", question: "I have never ______ (eat) sushi.", options: ["eaten", "ate", "eat", "eated"], correctAnswer: "eaten", explanation: "Never + have + past participle.", difficulty: 2, tags: ["present-perfect", "never", "b1"] },
    { id: "b1-g2-e13", type: "fill-blank", question: "Has she ever ______ (meet) a famous person?", options: ["met", "meet", "meeted", "meets"], correctAnswer: "met", explanation: "Meet → met (past participle). Ever in questions.", difficulty: 2, tags: ["present-perfect", "ever", "b1"] },
    { id: "b1-g2-e14", type: "fill-blank", question: "He has never ______ (fly) in a helicopter.", options: ["flown", "flew", "fly", "flied"], correctAnswer: "flown", explanation: "Fly → flew / flown. Never = at no time.", difficulty: 2, tags: ["present-perfect", "never", "b1"] },
    { id: "b1-g2-e15", type: "fill-blank", question: "Have they ever ______ (see) a ghost?", options: ["seen", "saw", "see", "seed"], correctAnswer: "seen", explanation: "See → saw / seen. Ever in experience questions.", difficulty: 2, tags: ["present-perfect", "ever", "b1"] },
    { id: "b1-g2-e16", type: "true-false", question: "'Ever' is usually used in questions.", options: ["True", "False"], correctAnswer: "True", explanation: "Ever typically appears in questions about experiences.", difficulty: 2, tags: ["present-perfect", "ever", "b1"] },
    { id: "b1-g2-e17", type: "true-false", question: "'Never' means 'at no time.'", options: ["True", "False"], correctAnswer: "True", explanation: "Never = not ever = at no time.", difficulty: 2, tags: ["present-perfect", "never", "b1"] },
    { id: "b1-g2-e18", type: "multiple-choice", question: "Correct placement: I have ______ been there.", options: ["never", "ever", "already", "yet"], correctAnswer: "never", explanation: "Never goes between have/has and the past participle.", difficulty: 2, tags: ["present-perfect", "position", "b1"] },
    { id: "b1-g2-e19", type: "multiple-choice", question: "Correct placement: Have you ______ seen it?", options: ["ever", "never", "already", "yet"], correctAnswer: "ever", explanation: "Ever goes between have/has and the past participle in questions.", difficulty: 2, tags: ["present-perfect", "position", "b1"] },
    { id: "b1-g2-e20", type: "multiple-choice", question: "Correct this: 'I have ever eaten pizza.'", options: ["I have eaten pizza. / I have never eaten pizza.", "I ever have eaten pizza.", "I have eat pizza.", "I have eaten ever pizza."], correctAnswer: "I have eaten pizza. / I have never eaten pizza.", explanation: "Ever is for questions, not affirmatives. Use never for negative.", difficulty: 2, tags: ["present-perfect", "ever-never", "b1"] },
    { id: "b1-g2-e21", type: "fill-blank", question: "I have just ______ (finish). (I finished 1 minute ago)", options: ["finished", "finish", "finishes", "finishing"], correctAnswer: "finished", explanation: "Just = very recently. Have/has + just + past participle.", difficulty: 2, tags: ["present-perfect", "just", "b1"] },
    { id: "b1-g2-e22", type: "fill-blank", question: "She has just ______ (call) me.", options: ["called", "call", "calls", "calling"], correctAnswer: "called", explanation: "Just + past participle for recent actions.", difficulty: 2, tags: ["present-perfect", "just", "b1"] },
    { id: "b1-g2-e23", type: "fill-blank", question: "We have just ______ (arrive).", options: ["arrived", "arrive", "arrives", "arriving"], correctAnswer: "arrived", explanation: "Just indicates the action happened moments ago.", difficulty: 2, tags: ["present-perfect", "just", "b1"] },
    { id: "b1-g2-e24", type: "fill-blank", question: "He has just ______ (leave).", options: ["left", "leave", "leaves", "leaving"], correctAnswer: "left", explanation: "Leave → left (irregular participle).", difficulty: 2, tags: ["present-perfect", "just", "b1"] },
    { id: "b1-g2-e25", type: "fill-blank", question: "They have just ______ (wake) up.", options: ["woken", "wake", "woke", "waked"], correctAnswer: "woken", explanation: "Wake → woke / woken. Woken is the past participle.", difficulty: 2, tags: ["present-perfect", "just", "b1"] },
    { id: "b1-g2-e26", type: "fill-blank", question: "I ______ (not/see) that movie.", options: ["haven't seen", "hasn't seen", "didn't see", "don't see"], correctAnswer: "haven't seen", explanation: "Negative: haven't/hasn't + past participle.", difficulty: 2, tags: ["present-perfect", "negatives", "b1"] },
    { id: "b1-g2-e27", type: "fill-blank", question: "She ______ (not/do) her job.", options: ["hasn't done", "haven't done", "didn't do", "doesn't do"], correctAnswer: "hasn't done", explanation: "Do → done. Hasn't + past participle.", difficulty: 2, tags: ["present-perfect", "negatives", "b1"] },
    { id: "b1-g2-e28", type: "fill-blank", question: "______ you (finish)?", options: ["Have you finished", "Has you finished", "Did you finish", "Do you finish"], correctAnswer: "Have you finished", explanation: "Questions: Have/Has + subject + past participle?", difficulty: 2, tags: ["present-perfect", "questions", "b1"] },
    { id: "b1-g2-e29", type: "fill-blank", question: "______ he (eat)?", options: ["Has he eaten", "Have he eaten", "Did he eat", "Does he eat"], correctAnswer: "Has he eaten", explanation: "He/she/it = Has + subject + past participle?", difficulty: 2, tags: ["present-perfect", "questions", "b1"] },
    { id: "b1-g2-e30", type: "fill-blank", question: "We ______ (not/visit) the museum.", options: ["haven't visited", "hasn't visited", "didn't visit", "don't visit"], correctAnswer: "haven't visited", explanation: "We = haven't + past participle.", difficulty: 2, tags: ["present-perfect", "negatives", "b1"] },
    { id: "b1-g2-e31", type: "multiple-choice", question: "Unscramble: done / I / have / it / .", options: ["I have done it.", "Have I done it.", "I it have done.", "Done I have it."], correctAnswer: "I have done it.", explanation: "Subject + have/has + past participle.", difficulty: 2, tags: ["present-perfect", "sentence-building", "b1"] },
    { id: "b1-g2-e32", type: "multiple-choice", question: "Unscramble: never / She / has / been / here / .", options: ["She has never been here.", "Never she has been here.", "She never has been here.", "Has she never been here."], correctAnswer: "She has never been here.", explanation: "Subject + has + never + past participle + complement.", difficulty: 2, tags: ["present-perfect", "sentence-building", "b1"] },
    { id: "b1-g2-e33", type: "multiple-choice", question: "Unscramble: you / Have / seen / him / ?", options: ["Have you seen him?", "You have seen him?", "Have seen you him?", "Seen you have him?"], correctAnswer: "Have you seen him?", explanation: "Have + subject + past participle + object?", difficulty: 2, tags: ["present-perfect", "sentence-building", "b1"] },
    { id: "b1-g2-e34", type: "fill-blank", question: "I have ______ (travel) to many countries in my life.", options: ["travelled", "travel", "travelled/traveled", "travels"], correctAnswer: "travelled", explanation: "Life experiences use Present Perfect.", difficulty: 2, tags: ["present-perfect", "experiences", "b1"] },
    { id: "b1-g2-e35", type: "fill-blank", question: "She has ______ (read) that book three times.", options: ["read", "readed", "reads", "reading"], correctAnswer: "read", explanation: "Read → read (same form for past and participle).", difficulty: 2, tags: ["present-perfect", "experiences", "b1"] },
    { id: "b1-g2-e36", type: "fill-blank", question: "We have ______ (work) together since 2019.", options: ["worked", "work", "works", "working"], correctAnswer: "worked", explanation: "Since + point in time = Present Perfect.", difficulty: 2, tags: ["present-perfect", "since", "b1"] },
    { id: "b1-g2-e37", type: "fill-blank", question: "He has ______ (break) his arm twice.", options: ["broken", "break", "broke", "breaked"], correctAnswer: "broken", explanation: "Break → broke / broken. Experiences with number.", difficulty: 2, tags: ["present-perfect", "experiences", "b1"] },
    { id: "b1-g2-e38", type: "fill-blank", question: "I have ______ (study) English for 5 years.", options: ["studied", "study", "studies", "studying"], correctAnswer: "studied", explanation: "For + period = Present Perfect for duration.", difficulty: 2, tags: ["present-perfect", "for", "b1"] },
    { id: "b1-g2-e39", type: "fill-blank", question: "They have ______ (be) married for 10 years.", options: ["been", "be", "was", "were"], correctAnswer: "been", explanation: "Be → was/were / been. Duration with for.", difficulty: 2, tags: ["present-perfect", "experiences", "b1"] },
    { id: "b1-g2-e40", type: "fill-blank", question: "She has ______ (teach) at this school since last year.", options: ["taught", "teach", "teached", "teaches"], correctAnswer: "taught", explanation: "Teach → taught. Since = from a point to now.", difficulty: 2, tags: ["present-perfect", "since", "b1"] },
    { id: "b1-g2-e41", type: "fill-blank", question: "I ______ (have) many interesting experiences.", options: ["have had", "has had", "had", "have"], correctAnswer: "have had", explanation: "Have → had (participle). I have had = experience.", difficulty: 2, tags: ["present-perfect", "conjugation", "b1"] },
    { id: "b1-g2-e42", type: "fill-blank", question: "She ______ (have) a lot of success.", options: ["has had", "have had", "had", "has"], correctAnswer: "has had", explanation: "Has + had (participle of have).", difficulty: 2, tags: ["present-perfect", "conjugation", "b1"] },
    { id: "b1-g2-e43", type: "fill-blank", question: "We ______ (have) enough time to finish.", options: ["have had", "has had", "had", "have"], correctAnswer: "have had", explanation: "We have had = experience up to now.", difficulty: 2, tags: ["present-perfect", "conjugation", "b1"] },
    { id: "b1-g2-e44", type: "fill-blank", question: "He ______ (have) three jobs in his life.", options: ["has had", "have had", "had", "has"], correctAnswer: "has had", explanation: "Life experience: has had.", difficulty: 2, tags: ["present-perfect", "conjugation", "b1"] },
    { id: "b1-g2-e45", type: "fill-blank", question: "They ______ (have) many adventures together.", options: ["have had", "has had", "had", "have"], correctAnswer: "have had", explanation: "They have had = plural subject.", difficulty: 2, tags: ["present-perfect", "conjugation", "b1"] },
    { id: "b1-g2-e46", type: "fill-blank", question: "I ______ (never/forget) that day.", options: ["have never forgotten", "has never forgotten", "never forgot", "never forget"], correctAnswer: "have never forgotten", explanation: "Never + have + past participle. Forget → forgot/forgotten.", difficulty: 2, tags: ["present-perfect", "experiences", "b1"] },
    { id: "b1-g2-e47", type: "fill-blank", question: "She ______ (always/love) music.", options: ["has always loved", "have always loved", "always loved", "always love"], correctAnswer: "has always loved", explanation: "Always goes between have/has and participle.", difficulty: 2, tags: ["present-perfect", "experiences", "b1"] },
    { id: "b1-g2-e48", type: "fill-blank", question: "______ you ______ (try) Indian food?", options: ["Have you tried", "Has you tried", "Did you try", "Do you try"], correctAnswer: "Have you tried", explanation: "Experience question: Have you tried?", difficulty: 2, tags: ["present-perfect", "questions", "b1"] },
    { id: "b1-g2-e49", type: "fill-blank", question: "How long ______ you ______ (know) him?", options: ["have you known", "has you known", "did you know", "do you know"], correctAnswer: "have you known", explanation: "How long + Present Perfect for duration.", difficulty: 2, tags: ["present-perfect", "questions", "b1"] },
    { id: "b1-g2-e50", type: "fill-blank", question: "I ______ (just/hear) the news.", options: ["have just heard", "has just heard", "just heard", "just hear"], correctAnswer: "have just heard", explanation: "Just + hear → heard. Recent action.", difficulty: 2, tags: ["present-perfect", "just", "b1"] },
  ],
  "b1-gram-3": [ // Present Perfect vs Past Simple - 50 exercises
    { id: "b1-g3-e1", type: "multiple-choice", question: "'Yesterday' indicates:", options: ["Past Simple", "Present Perfect", "Future", "Present Continuous"], correctAnswer: "Past Simple", explanation: "Yesterday = finished time = Past Simple.", difficulty: 2, tags: ["tenses", "time-expressions", "b1"] },
    { id: "b1-g3-e2", type: "multiple-choice", question: "'Last week' indicates:", options: ["Past Simple", "Present Perfect", "Future", "Present Continuous"], correctAnswer: "Past Simple", explanation: "Last week = finished period = Past Simple.", difficulty: 2, tags: ["tenses", "time-expressions", "b1"] },
    { id: "b1-g3-e3", type: "multiple-choice", question: "'In 2010' indicates:", options: ["Past Simple", "Present Perfect", "Future", "Present Continuous"], correctAnswer: "Past Simple", explanation: "Specific past year = Past Simple.", difficulty: 2, tags: ["tenses", "time-expressions", "b1"] },
    { id: "b1-g3-e4", type: "multiple-choice", question: "'Ever' usually indicates:", options: ["Present Perfect", "Past Simple", "Future", "Present Continuous"], correctAnswer: "Present Perfect", explanation: "Ever = experiences/unspecified time = Present Perfect.", difficulty: 2, tags: ["tenses", "time-expressions", "b1"] },
    { id: "b1-g3-e5", type: "multiple-choice", question: "'Yet' usually indicates:", options: ["Present Perfect", "Past Simple", "Future", "Present Continuous"], correctAnswer: "Present Perfect", explanation: "Yet = up to now = Present Perfect.", difficulty: 2, tags: ["tenses", "time-expressions", "b1"] },
    { id: "b1-g3-e6", type: "multiple-choice", question: "'Just' usually indicates:", options: ["Present Perfect", "Past Simple", "Future", "Present Continuous"], correctAnswer: "Present Perfect", explanation: "Just = very recently = Present Perfect.", difficulty: 2, tags: ["tenses", "time-expressions", "b1"] },
    { id: "b1-g3-e7", type: "multiple-choice", question: "'Two days ago' indicates:", options: ["Past Simple", "Present Perfect", "Future", "Present Continuous"], correctAnswer: "Past Simple", explanation: "Ago = finished time = Past Simple.", difficulty: 2, tags: ["tenses", "time-expressions", "b1"] },
    { id: "b1-g3-e8", type: "multiple-choice", question: "'So far' indicates:", options: ["Present Perfect", "Past Simple", "Future", "Present Continuous"], correctAnswer: "Present Perfect", explanation: "So far = up to now = Present Perfect.", difficulty: 2, tags: ["tenses", "time-expressions", "b1"] },
    { id: "b1-g3-e9", type: "multiple-choice", question: "'When I was a child' indicates:", options: ["Past Simple", "Present Perfect", "Future", "Present Continuous"], correctAnswer: "Past Simple", explanation: "Finished period in the past = Past Simple.", difficulty: 2, tags: ["tenses", "time-expressions", "b1"] },
    { id: "b1-g3-e10", type: "multiple-choice", question: "'Lately' indicates:", options: ["Present Perfect", "Past Simple", "Future", "Present Continuous"], correctAnswer: "Present Perfect", explanation: "Lately = recent period up to now = Present Perfect.", difficulty: 2, tags: ["tenses", "time-expressions", "b1"] },
    { id: "b1-g3-e11", type: "multiple-choice", question: "I ______ him yesterday.", options: ["saw", "have seen", "see", "had seen"], correctAnswer: "saw", explanation: "Yesterday = Past Simple.", difficulty: 2, tags: ["tenses", "choose-verb", "b1"] },
    { id: "b1-g3-e12", type: "multiple-choice", question: "I ______ that movie already.", options: ["have seen", "saw", "see", "had seen"], correctAnswer: "have seen", explanation: "Already = connection to now = Present Perfect.", difficulty: 2, tags: ["tenses", "choose-verb", "b1"] },
    { id: "b1-g3-e13", type: "multiple-choice", question: "She ______ to Paris in 2015.", options: ["went", "has gone", "goes", "had gone"], correctAnswer: "went", explanation: "In 2015 = specific past = Past Simple.", difficulty: 2, tags: ["tenses", "choose-verb", "b1"] },
    { id: "b1-g3-e14", type: "multiple-choice", question: "She ______ to Paris three times.", options: ["has been", "went", "goes", "had been"], correctAnswer: "has been", explanation: "Life experience (no specific time) = Present Perfect.", difficulty: 2, tags: ["tenses", "choose-verb", "b1"] },
    { id: "b1-g3-e15", type: "multiple-choice", question: "We ______ here since 2020.", options: ["have lived", "lived", "live", "had lived"], correctAnswer: "have lived", explanation: "Since = from past to now = Present Perfect.", difficulty: 2, tags: ["tenses", "choose-verb", "b1"] },
    { id: "b1-g3-e16", type: "multiple-choice", question: "We ______ there for 5 years (and then moved).", options: ["lived", "have lived", "live", "had lived"], correctAnswer: "lived", explanation: "Finished period (we moved) = Past Simple.", difficulty: 2, tags: ["tenses", "choose-verb", "b1"] },
    { id: "b1-g3-e17", type: "multiple-choice", question: "Did you ______ breakfast this morning? (If morning is over)", options: ["eat", "have eaten", "ate", "eaten"], correctAnswer: "eat", explanation: "Did + base verb. Morning over = past question.", difficulty: 2, tags: ["tenses", "choose-verb", "b1"] },
    { id: "b1-g3-e18", type: "multiple-choice", question: "Have you ______ yet?", options: ["eaten", "ate", "eat", "eating"], correctAnswer: "eaten", explanation: "Have you + past participle. Yet = Present Perfect.", difficulty: 2, tags: ["tenses", "choose-verb", "b1"] },
    { id: "b1-g3-e19", type: "multiple-choice", question: "He ______ his keys. (He still can't find them)", options: ["has lost", "lost", "loses", "had lost"], correctAnswer: "has lost", explanation: "Result in present = Present Perfect.", difficulty: 2, tags: ["tenses", "choose-verb", "b1"] },
    { id: "b1-g3-e20", type: "multiple-choice", question: "He ______ his keys last night.", options: ["lost", "has lost", "loses", "had lost"], correctAnswer: "lost", explanation: "Last night = specific time = Past Simple.", difficulty: 2, tags: ["tenses", "choose-verb", "b1"] },
    { id: "b1-g3-e21", type: "fill-blank", question: "A: 'Where is John?' B: 'He ______ (go) home.'", options: ["has gone", "went", "goes", "had gone"], correctAnswer: "has gone", explanation: "Current result (he's not here) = Present Perfect.", difficulty: 2, tags: ["tenses", "dialogue", "b1"] },
    { id: "b1-g3-e22", type: "fill-blank", question: "A: 'When ______ (go) he home?' B: 'Ten minutes ago.'", options: ["did he go", "has he gone", "does he go", "had he gone"], correctAnswer: "did he go", explanation: "When + specific time = Past Simple.", difficulty: 2, tags: ["tenses", "dialogue", "b1"] },
    { id: "b1-g3-e23", type: "fill-blank", question: "A: '______ (you/see) Titanic?' B: 'Yes, many times.'", options: ["Have you seen", "Did you see", "Do you see", "Had you seen"], correctAnswer: "Have you seen", explanation: "Experience (many times) = Present Perfect.", difficulty: 2, tags: ["tenses", "dialogue", "b1"] },
    { id: "b1-g3-e24", type: "fill-blank", question: "A: '______ (you/see) Titanic?' B: 'Yes, I saw it last year.'", options: ["Did you see", "Have you seen", "Do you see", "Had you seen"], correctAnswer: "Did you see", explanation: "Specific time in answer = Past Simple question.", difficulty: 2, tags: ["tenses", "dialogue", "b1"] },
    { id: "b1-g3-e25", type: "fill-blank", question: "A: 'I ______ (break) my leg.' (It is broken now)", options: ["have broken", "broke", "break", "had broken"], correctAnswer: "have broken", explanation: "Result in present = Present Perfect.", difficulty: 2, tags: ["tenses", "dialogue", "b1"] },
    { id: "b1-g3-e26", type: "fill-blank", question: "A: 'I ______ (break) my leg.' (When I was 10)", options: ["broke", "have broken", "break", "had broken"], correctAnswer: "broke", explanation: "Past experience with implied finished time = Past Simple.", difficulty: 2, tags: ["tenses", "dialogue", "b1"] },
    { id: "b1-g3-e27", type: "multiple-choice", question: "Correct: 'I have seen him yesterday.'", options: ["I saw him yesterday.", "I have seen him yesterday.", "I see him yesterday.", "I had seen him yesterday."], correctAnswer: "I saw him yesterday.", explanation: "Yesterday = Past Simple, not Present Perfect.", difficulty: 2, tags: ["tenses", "error-correction", "b1"] },
    { id: "b1-g3-e28", type: "multiple-choice", question: "Correct: 'She has lived here since 2 years.'", options: ["She has lived here for 2 years.", "She has lived here since 2 years.", "She lived here for 2 years.", "She lives here since 2 years."], correctAnswer: "She has lived here for 2 years.", explanation: "For + period; Since + point in time.", difficulty: 2, tags: ["tenses", "error-correction", "b1"] },
    { id: "b1-g3-e29", type: "multiple-choice", question: "Correct: 'Did you ever go to USA?'", options: ["Have you ever been to the USA?", "Did you ever go to USA?", "Have you ever go to USA?", "Did you ever been to USA?"], correctAnswer: "Have you ever been to the USA?", explanation: "Ever + experience = Present Perfect. Go→been.", difficulty: 2, tags: ["tenses", "error-correction", "b1"] },
    { id: "b1-g3-e30", type: "multiple-choice", question: "Correct: 'I didn't finish yet.'", options: ["I haven't finished yet.", "I didn't finish yet.", "I don't finish yet.", "I hadn't finish yet."], correctAnswer: "I haven't finished yet.", explanation: "Yet = Present Perfect. Haven't + past participle.", difficulty: 2, tags: ["tenses", "error-correction", "b1"] },
    { id: "b1-g3-e31", type: "fill-blank", question: "She ______ (leave) an hour ago.", options: ["left", "has left", "leaves", "had left"], correctAnswer: "left", explanation: "Ago = Past Simple.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e32", type: "fill-blank", question: "I ______ (never/visit) Japan.", options: ["have never visited", "never visited", "never visit", "had never visited"], correctAnswer: "have never visited", explanation: "Never + experience = Present Perfect.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e33", type: "fill-blank", question: "______ you ______ (watch) the news last night?", options: ["Did you watch", "Have you watched", "Do you watch", "Had you watched"], correctAnswer: "Did you watch", explanation: "Last night = Past Simple.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e34", type: "fill-blank", question: "We ______ (know) each other for 10 years.", options: ["have known", "knew", "know", "had known"], correctAnswer: "have known", explanation: "For + period = Present Perfect.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e35", type: "fill-blank", question: "He ______ (buy) a new car last month.", options: ["bought", "has bought", "buys", "had bought"], correctAnswer: "bought", explanation: "Last month = Past Simple.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e36", type: "fill-blank", question: "______ she ______ (finish) her homework yet?", options: ["Has she finished", "Did she finish", "Does she finish", "Had she finished"], correctAnswer: "Has she finished", explanation: "Yet = Present Perfect.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e37", type: "fill-blank", question: "They ______ (move) to London in 2020.", options: ["moved", "have moved", "move", "had moved"], correctAnswer: "moved", explanation: "In 2020 = Past Simple.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e38", type: "fill-blank", question: "I ______ (just/speak) to her.", options: ["have just spoken", "just spoke", "just speak", "had just spoken"], correctAnswer: "have just spoken", explanation: "Just = Present Perfect.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e39", type: "fill-blank", question: "When ______ you ______ (graduate)?", options: ["did you graduate", "have you graduated", "do you graduate", "had you graduated"], correctAnswer: "did you graduate", explanation: "When + specific time = Past Simple.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e40", type: "fill-blank", question: "She ______ (be) to the USA three times.", options: ["has been", "was", "is", "had been"], correctAnswer: "has been", explanation: "Life experience = Present Perfect.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e41", type: "fill-blank", question: "The movie ______ (start) at 8pm.", options: ["started", "has started", "starts", "had started"], correctAnswer: "started", explanation: "Implied specific past time = Past Simple.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e42", type: "fill-blank", question: "I ______ (already/tell) you the answer.", options: ["have already told", "already told", "told already", "had already told"], correctAnswer: "have already told", explanation: "Already = Present Perfect.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e43", type: "fill-blank", question: "______ you ______ (see) that film? It's great.", options: ["Have you seen", "Did you see", "Do you see", "Had you seen"], correctAnswer: "Have you seen", explanation: "Experience question = Present Perfect.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e44", type: "fill-blank", question: "Shakespeare ______ (write) many plays.", options: ["wrote", "has written", "writes", "had written"], correctAnswer: "wrote", explanation: "Historical fact (finished life) = Past Simple.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e45", type: "fill-blank", question: "How long ______ you ______ (wait)?", options: ["have you waited", "did you wait", "do you wait", "had you waited"], correctAnswer: "have you waited", explanation: "How long + Present Perfect for duration up to now.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e46", type: "fill-blank", question: "I ______ (meet) him in 2019.", options: ["met", "have met", "meet", "had met"], correctAnswer: "met", explanation: "In 2019 = Past Simple.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e47", type: "fill-blank", question: "She ______ (never/fly) in a plane.", options: ["has never flown", "never flew", "never flies", "had never flown"], correctAnswer: "has never flown", explanation: "Never + experience = Present Perfect.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e48", type: "fill-blank", question: "We ______ (not/see) each other since June.", options: ["haven't seen", "didn't see", "don't see", "hadn't seen"], correctAnswer: "haven't seen", explanation: "Since = Present Perfect.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e49", type: "fill-blank", question: "______ they ______ (arrive) yet?", options: ["Have they arrived", "Did they arrive", "Do they arrive", "Had they arrived"], correctAnswer: "Have they arrived", explanation: "Yet = Present Perfect.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
    { id: "b1-g3-e50", type: "fill-blank", question: "My grandfather ______ (die) in 1995.", options: ["died", "has died", "dies", "had died"], correctAnswer: "died", explanation: "Specific year = Past Simple.", difficulty: 2, tags: ["tenses", "mixed", "b1"] },
  ],
  "b1-gram-4": [ // Future with 'Going to' - 50 exercises
    { id: "b1-g4-e1", type: "fill-blank", question: "I ______ (watch) TV tonight.", options: ["am going to watch", "will watch", "watch", "watching"], correctAnswer: "am going to watch", explanation: "Be + going to + verb. I = am.", difficulty: 2, tags: ["going-to", "form", "b1"] },
    { id: "b1-g4-e2", type: "fill-blank", question: "She ______ (buy) a car.", options: ["is going to buy", "will buy", "buys", "buying"], correctAnswer: "is going to buy", explanation: "She = is + going to + verb.", difficulty: 2, tags: ["going-to", "form", "b1"] },
    { id: "b1-g4-e3", type: "fill-blank", question: "We ______ (visit) Italy.", options: ["are going to visit", "will visit", "visit", "visiting"], correctAnswer: "are going to visit", explanation: "We = are + going to + verb.", difficulty: 2, tags: ["going-to", "form", "b1"] },
    { id: "b1-g4-e4", type: "fill-blank", question: "He ______ (cook) pasta.", options: ["is going to cook", "will cook", "cooks", "cooking"], correctAnswer: "is going to cook", explanation: "He = is + going to + verb.", difficulty: 2, tags: ["going-to", "form", "b1"] },
    { id: "b1-g4-e5", type: "fill-blank", question: "They ______ (play) soccer.", options: ["are going to play", "will play", "play", "playing"], correctAnswer: "are going to play", explanation: "They = are + going to + verb.", difficulty: 2, tags: ["going-to", "form", "b1"] },
    { id: "b1-g4-e6", type: "fill-blank", question: "It ______ (rain).", options: ["is going to rain", "will rain", "rains", "raining"], correctAnswer: "is going to rain", explanation: "It = is + going to + verb.", difficulty: 2, tags: ["going-to", "form", "b1"] },
    { id: "b1-g4-e7", type: "fill-blank", question: "I ______ (not/go).", options: ["am not going to go", "will not go", "don't go", "not going"], correctAnswer: "am not going to go", explanation: "Negative: am/is/are + not + going to.", difficulty: 2, tags: ["going-to", "form", "b1"] },
    { id: "b1-g4-e8", type: "fill-blank", question: "She ______ (not/stay).", options: ["isn't going to stay", "won't stay", "doesn't stay", "not staying"], correctAnswer: "isn't going to stay", explanation: "She = isn't + going to + verb.", difficulty: 2, tags: ["going-to", "form", "b1"] },
    { id: "b1-g4-e9", type: "fill-blank", question: "______ you (come)?", options: ["Are you going to come", "Will you come", "Do you come", "You going to come"], correctAnswer: "Are you going to come", explanation: "Question: Are + you + going to + verb?", difficulty: 2, tags: ["going-to", "form", "b1"] },
    { id: "b1-g4-e10", type: "fill-blank", question: "______ he (help)?", options: ["Is he going to help", "Will he help", "Does he help", "He going to help"], correctAnswer: "Is he going to help", explanation: "Question: Is + he + going to + verb?", difficulty: 2, tags: ["going-to", "form", "b1"] },
    { id: "b1-g4-e11", type: "multiple-choice", question: "'I bought tickets.' -> I ______ travel.", options: ["am going to", "will", "go to", "am"], correctAnswer: "am going to", explanation: "Pre-made plan (bought tickets) = going to.", difficulty: 2, tags: ["going-to", "plans", "b1"] },
    { id: "b1-g4-e12", type: "multiple-choice", question: "'My bag is heavy.' (Spontaneous offer) -> I ______ help you.", options: ["will", "am going to", "go to", "am"], correctAnswer: "will", explanation: "Spontaneous decision at moment of speaking = will.", difficulty: 2, tags: ["going-to", "will", "b1"] },
    { id: "b1-g4-e13", type: "multiple-choice", question: "'Look at those clouds!' (Evidence) -> It ______ rain.", options: ["is going to", "will", "goes to", "is"], correctAnswer: "is going to", explanation: "Prediction with evidence = going to.", difficulty: 2, tags: ["going-to", "predictions", "b1"] },
    { id: "b1-g4-e14", type: "multiple-choice", question: "'I made a reservation.' -> We ______ eat there.", options: ["are going to", "will", "go to", "are"], correctAnswer: "are going to", explanation: "Pre-arranged plan = going to.", difficulty: 2, tags: ["going-to", "plans", "b1"] },
    { id: "b1-g4-e15", type: "multiple-choice", question: "'Why did you buy paint?' -> I ______ paint my room.", options: ["am going to", "will", "go to", "am"], correctAnswer: "am going to", explanation: "Intention (bought paint as evidence) = going to.", difficulty: 2, tags: ["going-to", "intentions", "b1"] },
    { id: "b1-g4-e16", type: "fill-blank", question: "The car is driving very fast. It ______ (crash).", options: ["is going to crash", "will crash", "crashes", "crash"], correctAnswer: "is going to crash", explanation: "Prediction based on evidence = going to.", difficulty: 2, tags: ["going-to", "predictions", "b1"] },
    { id: "b1-g4-e17", type: "fill-blank", question: "He is holding a ring. He ______ (propose).", options: ["is going to propose", "will propose", "proposes", "propose"], correctAnswer: "is going to propose", explanation: "Evidence (ring) = going to.", difficulty: 2, tags: ["going-to", "predictions", "b1"] },
    { id: "b1-g4-e18", type: "fill-blank", question: "The sky is very dark. It ______ (storm).", options: ["is going to storm", "will storm", "storms", "storm"], correctAnswer: "is going to storm", explanation: "Evidence (dark sky) = going to.", difficulty: 2, tags: ["going-to", "predictions", "b1"] },
    { id: "b1-g4-e19", type: "fill-blank", question: "She studied very hard. She ______ (pass).", options: ["is going to pass", "will pass", "passes", "pass"], correctAnswer: "is going to pass", explanation: "Evidence (studied hard) = going to.", difficulty: 2, tags: ["going-to", "predictions", "b1"] },
    { id: "b1-g4-e20", type: "fill-blank", question: "The man is on the edge. He ______ (fall).", options: ["is going to fall", "will fall", "falls", "fall"], correctAnswer: "is going to fall", explanation: "Evidence (on the edge) = going to.", difficulty: 2, tags: ["going-to", "predictions", "b1"] },
    { id: "b1-g4-e21", type: "multiple-choice", question: "Unscramble: to / am / going / I / sleep / .", options: ["I am going to sleep.", "Am I going to sleep.", "I going to am sleep.", "To sleep I am going."], correctAnswer: "I am going to sleep.", explanation: "Subject + am/is/are + going to + verb.", difficulty: 2, tags: ["going-to", "scrambled", "b1"] },
    { id: "b1-g4-e22", type: "multiple-choice", question: "Unscramble: is / She / to / going / cry / .", options: ["She is going to cry.", "Is she going to cry.", "She going to is cry.", "To cry she is going."], correctAnswer: "She is going to cry.", explanation: "She + is + going to + verb.", difficulty: 2, tags: ["going-to", "scrambled", "b1"] },
    { id: "b1-g4-e23", type: "multiple-choice", question: "Unscramble: going / Are / you / leave / to / ?", options: ["Are you going to leave?", "You are going to leave?", "Going to leave are you?", "Leave you are going to?"], correctAnswer: "Are you going to leave?", explanation: "Are + subject + going to + verb?", difficulty: 2, tags: ["going-to", "scrambled", "b1"] },
    { id: "b1-g4-e24", type: "multiple-choice", question: "Unscramble: not / We / going / to / are / fight / .", options: ["We are not going to fight.", "We not are going to fight.", "Not we are going to fight.", "We are going not to fight."], correctAnswer: "We are not going to fight.", explanation: "Subject + are + not + going to + verb.", difficulty: 2, tags: ["going-to", "scrambled", "b1"] },
    { id: "b1-g4-e25", type: "multiple-choice", question: "Unscramble: going / What / do / are / you / to / ?", options: ["What are you going to do?", "What do you are going to?", "You are going to do what?", "Are you going to what do?"], correctAnswer: "What are you going to do?", explanation: "What + are + subject + going to + verb?", difficulty: 2, tags: ["going-to", "scrambled", "b1"] },
    { id: "b1-g4-e26", type: "fill-blank", question: "What are you ______ (do) this weekend?", options: ["going to do", "do", "doing", "to do"], correctAnswer: "going to do", explanation: "Plans for the weekend = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e27", type: "fill-blank", question: "I'm ______ (study) harder next semester.", options: ["going to study", "study", "studying", "to study"], correctAnswer: "going to study", explanation: "Intention for future = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e28", type: "fill-blank", question: "She's ______ (visit) her family next month.", options: ["going to visit", "visit", "visiting", "to visit"], correctAnswer: "going to visit", explanation: "Plan = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e29", type: "fill-blank", question: "We're ______ (move) to a bigger house.", options: ["going to move", "move", "moving", "to move"], correctAnswer: "going to move", explanation: "Intention = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e30", type: "fill-blank", question: "They're ______ (get) married in June.", options: ["going to get", "get", "getting", "to get"], correctAnswer: "going to get", explanation: "Plan with specific time = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e31", type: "fill-blank", question: "Next summer I ______ (travel) to Japan.", options: ["am going to travel", "will travel", "travel", "am traveling"], correctAnswer: "am going to travel", explanation: "Plan for next summer = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e32", type: "fill-blank", question: "He ______ (start) a new job on Monday.", options: ["is going to start", "will start", "starts", "is starting"], correctAnswer: "is going to start", explanation: "Arranged plan = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e33", type: "fill-blank", question: "I ______ (learn) to drive this year.", options: ["am going to learn", "will learn", "learn", "am learning"], correctAnswer: "am going to learn", explanation: "Intention = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e34", type: "fill-blank", question: "We ______ (have) a party for her birthday.", options: ["are going to have", "will have", "have", "are having"], correctAnswer: "are going to have", explanation: "Plan = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e35", type: "fill-blank", question: "She ______ (not/work) tomorrow.", options: ["isn't going to work", "won't work", "doesn't work", "isn't working"], correctAnswer: "isn't going to work", explanation: "Plan not to = going to negative.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e36", type: "fill-blank", question: "______ you ______ (come) to the meeting?", options: ["Are you going to come", "Will you come", "Do you come", "You going to come"], correctAnswer: "Are you going to come", explanation: "Asking about plan = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e37", type: "fill-blank", question: "I ______ (save) money for a new phone.", options: ["am going to save", "will save", "save", "am saving"], correctAnswer: "am going to save", explanation: "Intention = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e38", type: "fill-blank", question: "They ______ (build) a house in the country.", options: ["are going to build", "will build", "build", "are building"], correctAnswer: "are going to build", explanation: "Plan = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e39", type: "fill-blank", question: "He ______ (take) a vacation next month.", options: ["is going to take", "will take", "takes", "is taking"], correctAnswer: "is going to take", explanation: "Plan = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e40", type: "fill-blank", question: "What ______ she ______ (study) at university?", options: ["is she going to study", "will she study", "does she study", "she going to study"], correctAnswer: "is she going to study", explanation: "Future plan = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e41", type: "fill-blank", question: "We ______ (not/miss) the flight.", options: ["aren't going to miss", "won't miss", "don't miss", "aren't missing"], correctAnswer: "aren't going to miss", explanation: "Intention (plan to be on time) = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e42", type: "fill-blank", question: "I ______ (call) you tonight.", options: ["am going to call", "will call", "call", "am calling"], correctAnswer: "am going to call", explanation: "Plan = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e43", type: "fill-blank", question: "She ______ (write) a book.", options: ["is going to write", "will write", "writes", "is writing"], correctAnswer: "is going to write", explanation: "Intention = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e44", type: "fill-blank", question: "They ______ (open) a restaurant.", options: ["are going to open", "will open", "open", "are opening"], correctAnswer: "are going to open", explanation: "Plan = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e45", type: "fill-blank", question: "______ he ______ (apply) for the job?", options: ["Is he going to apply", "Will he apply", "Does he apply", "He going to apply"], correctAnswer: "Is he going to apply", explanation: "Asking about intention = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e46", type: "fill-blank", question: "I ______ (exercise) more often.", options: ["am going to exercise", "will exercise", "exercise", "am exercising"], correctAnswer: "am going to exercise", explanation: "Resolution/intention = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e47", type: "fill-blank", question: "We ______ (watch) a movie tonight.", options: ["are going to watch", "will watch", "watch", "are watching"], correctAnswer: "are going to watch", explanation: "Plan for tonight = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e48", type: "fill-blank", question: "She ______ (change) her job next year.", options: ["is going to change", "will change", "changes", "is changing"], correctAnswer: "is going to change", explanation: "Plan = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e49", type: "fill-blank", question: "Where ______ you ______ (go) on holiday?", options: ["are you going to go", "will you go", "do you go", "you going to go"], correctAnswer: "are you going to go", explanation: "Asking about holiday plan = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
    { id: "b1-g4-e50", type: "fill-blank", question: "I ______ (try) to be more positive.", options: ["am going to try", "will try", "try", "am trying"], correctAnswer: "am going to try", explanation: "Intention/resolution = going to.", difficulty: 2, tags: ["going-to", "personal-plans", "b1"] },
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

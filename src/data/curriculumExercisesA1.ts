// A1 Level Comprehensive Curriculum Exercises - Fully aligned with skill IDs
import { Exercise } from "./exercisesData";

// ====================================
// VOCABULARY EXERCISES - A1 LEVEL
// ====================================
const a1VocabExercises: Record<string, Exercise[]> = {
  // a1-vocab-1: Numbers and colors
  "a1-vocab-1": [
    // === Numbers 1-20 (subSkill: a1-v1-1) ===
    {
      id: "a1-v1-e1",
      type: "multiple-choice",
      question: "What number comes after 'twelve'?",
      options: ["eleven", "thirteen", "fourteen", "ten"],
      correctAnswer: "thirteen",
      explanation: "After twelve (12) comes thirteen (13).",
      difficulty: 1,
      tags: ["numbers", "a1", "subskill:a1-v1-1"]
    },
    {
      id: "a1-v1-e2",
      type: "multiple-choice",
      question: "What is 5 + 7?",
      options: ["eleven", "twelve", "thirteen", "ten"],
      correctAnswer: "twelve",
      explanation: "5 + 7 = 12 (twelve).",
      difficulty: 1,
      tags: ["numbers", "a1", "subskill:a1-v1-1"]
    },
    {
      id: "a1-v1-e3",
      type: "fill-blank",
      question: "The number before fifteen is _____.",
      options: ["fourteen", "sixteen", "thirteen", "twelve"],
      correctAnswer: "fourteen",
      explanation: "Before 15 comes 14 (fourteen).",
      difficulty: 1,
      tags: ["numbers", "a1", "subskill:a1-v1-1"]
    },
    {
      id: "a1-v1-e4",
      type: "multiple-choice",
      question: "How do you write '17' in words?",
      options: ["sixteen", "seventeen", "eighteen", "fifteen"],
      correctAnswer: "seventeen",
      explanation: "17 is written as 'seventeen'.",
      difficulty: 1,
      tags: ["numbers", "a1", "subskill:a1-v1-1"]
    },
    {
      id: "a1-v1-e5",
      type: "multiple-choice",
      question: "What is 8 + 3?",
      options: ["ten", "eleven", "twelve", "nine"],
      correctAnswer: "eleven",
      explanation: "8 + 3 = 11 (eleven).",
      difficulty: 1,
      tags: ["numbers", "a1", "subskill:a1-v1-1"]
    },
    // === Numbers 20-100 (subSkill: a1-v1-2) ===
    {
      id: "a1-v1-e6",
      type: "fill-blank",
      question: "The number after nineteen is _____.",
      options: ["twenty", "eighteen", "thirty", "fifteen"],
      correctAnswer: "twenty",
      explanation: "After 19 comes 20 (twenty).",
      difficulty: 1,
      tags: ["numbers", "a1", "subskill:a1-v1-2"]
    },
    {
      id: "a1-v1-e7",
      type: "multiple-choice",
      question: "What is 30 + 20?",
      options: ["forty", "fifty", "sixty", "seventy"],
      correctAnswer: "fifty",
      explanation: "30 + 20 = 50 (fifty).",
      difficulty: 1,
      tags: ["numbers", "a1", "subskill:a1-v1-2"]
    },
    {
      id: "a1-v1-e8",
      type: "multiple-choice",
      question: "How do you write '75' in words?",
      options: ["sixty-five", "seventy-five", "eighty-five", "fifty-five"],
      correctAnswer: "seventy-five",
      explanation: "75 is written as 'seventy-five'.",
      difficulty: 1,
      tags: ["numbers", "a1", "subskill:a1-v1-2"]
    },
    {
      id: "a1-v1-e9",
      type: "fill-blank",
      question: "The number after ninety-nine is _____.",
      options: ["one hundred", "ninety-eight", "one thousand", "ninety"],
      correctAnswer: "one hundred",
      explanation: "After 99 comes 100 (one hundred).",
      difficulty: 1,
      tags: ["numbers", "a1", "subskill:a1-v1-2"]
    },
    {
      id: "a1-v1-e10",
      type: "multiple-choice",
      question: "What is 40 + 25?",
      options: ["fifty-five", "sixty-five", "seventy-five", "forty-five"],
      correctAnswer: "sixty-five",
      explanation: "40 + 25 = 65 (sixty-five).",
      difficulty: 1,
      tags: ["numbers", "a1", "subskill:a1-v1-2"]
    },
    // === Primary colors (subSkill: a1-v1-3) ===
    {
      id: "a1-v1-e11",
      type: "multiple-choice",
      question: "What color is the sky on a sunny day?",
      options: ["red", "green", "blue", "yellow"],
      correctAnswer: "blue",
      explanation: "The sky is blue on a sunny day.",
      difficulty: 1,
      tags: ["colors", "a1", "subskill:a1-v1-3"]
    },
    {
      id: "a1-v1-e12",
      type: "multiple-choice",
      question: "Bananas are _____.",
      options: ["blue", "red", "yellow", "green"],
      correctAnswer: "yellow",
      explanation: "Bananas are yellow when ripe.",
      difficulty: 1,
      tags: ["colors", "a1", "subskill:a1-v1-3"]
    },
    {
      id: "a1-v1-e13",
      type: "multiple-choice",
      question: "Grass is usually _____.",
      options: ["blue", "green", "red", "white"],
      correctAnswer: "green",
      explanation: "Grass is green.",
      difficulty: 1,
      tags: ["colors", "a1", "subskill:a1-v1-3"]
    },
    {
      id: "a1-v1-e14",
      type: "multiple-choice",
      question: "What color do you get when you mix red and yellow?",
      options: ["purple", "green", "orange", "pink"],
      correctAnswer: "orange",
      explanation: "Red + Yellow = Orange.",
      difficulty: 1,
      tags: ["colors", "a1", "subskill:a1-v1-3"]
    },
    {
      id: "a1-v1-e15",
      type: "fill-blank",
      question: "Snow is _____.",
      options: ["white", "black", "gray", "blue"],
      correctAnswer: "white",
      explanation: "Snow is white.",
      difficulty: 1,
      tags: ["colors", "a1", "subskill:a1-v1-3"]
    },
    {
      id: "a1-v1-e16",
      type: "multiple-choice",
      question: "What color is a fire truck?",
      options: ["blue", "green", "red", "yellow"],
      correctAnswer: "red",
      explanation: "Fire trucks are typically red.",
      difficulty: 1,
      tags: ["colors", "a1", "subskill:a1-v1-3"]
    },
  ],

  // a1-vocab-2: Family and people
  "a1-vocab-2": [
    {
      id: "a1-v2-e1",
      type: "multiple-choice",
      question: "Your mother's mother is your _____.",
      options: ["aunt", "sister", "grandmother", "cousin"],
      correctAnswer: "grandmother",
      explanation: "Your mother's mother is your grandmother.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v2-e2",
      type: "multiple-choice",
      question: "Your father's brother is your _____.",
      options: ["uncle", "cousin", "brother", "grandfather"],
      correctAnswer: "uncle",
      explanation: "Your father's brother is your uncle.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v2-e3",
      type: "multiple-choice",
      question: "A person who teaches at school is a _____.",
      options: ["doctor", "teacher", "driver", "singer"],
      correctAnswer: "teacher",
      explanation: "A teacher works at school and teaches students.",
      difficulty: 1,
      tags: ["professions", "a1"]
    },
    {
      id: "a1-v2-e4",
      type: "multiple-choice",
      question: "A person who helps sick people is a _____.",
      options: ["teacher", "chef", "doctor", "pilot"],
      correctAnswer: "doctor",
      explanation: "A doctor helps sick people get better.",
      difficulty: 1,
      tags: ["professions", "a1"]
    },
    {
      id: "a1-v2-e5",
      type: "fill-blank",
      question: "My mother and my father are my _____.",
      options: ["parents", "children", "siblings", "friends"],
      correctAnswer: "parents",
      explanation: "Mother and father together are called parents.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v2-e6",
      type: "multiple-choice",
      question: "Your sister's son is your _____.",
      options: ["cousin", "nephew", "son", "brother"],
      correctAnswer: "nephew",
      explanation: "Your sister's son is your nephew.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v2-e7",
      type: "multiple-choice",
      question: "A person who flies airplanes is a _____.",
      options: ["driver", "captain", "pilot", "mechanic"],
      correctAnswer: "pilot",
      explanation: "A pilot flies airplanes.",
      difficulty: 1,
      tags: ["professions", "a1"]
    },
    {
      id: "a1-v2-e8",
      type: "fill-blank",
      question: "My father's father is my _____.",
      options: ["grandfather", "grandmother", "uncle", "brother"],
      correctAnswer: "grandfather",
      explanation: "Your father's father is your grandfather.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
  ],

  // a1-vocab-3: Everyday objects
  "a1-vocab-3": [
    {
      id: "a1-v3-e1",
      type: "multiple-choice",
      question: "You sleep in a _____.",
      options: ["chair", "table", "bed", "desk"],
      correctAnswer: "bed",
      explanation: "A bed is for sleeping.",
      difficulty: 1,
      tags: ["objects", "a1"]
    },
    {
      id: "a1-v3-e2",
      type: "multiple-choice",
      question: "You write with a _____.",
      options: ["book", "pen", "ruler", "eraser"],
      correctAnswer: "pen",
      explanation: "We use a pen to write.",
      difficulty: 1,
      tags: ["objects", "a1"]
    },
    {
      id: "a1-v3-e3",
      type: "multiple-choice",
      question: "You sit on a _____.",
      options: ["table", "lamp", "chair", "window"],
      correctAnswer: "chair",
      explanation: "We sit on chairs.",
      difficulty: 1,
      tags: ["objects", "a1"]
    },
    {
      id: "a1-v3-e4",
      type: "fill-blank",
      question: "I read a _____ to learn new things.",
      options: ["book", "pencil", "chair", "clock"],
      correctAnswer: "book",
      explanation: "We read books to learn.",
      difficulty: 1,
      tags: ["objects", "a1"]
    },
    {
      id: "a1-v3-e5",
      type: "multiple-choice",
      question: "You look at the _____ to know the time.",
      options: ["door", "window", "clock", "floor"],
      correctAnswer: "clock",
      explanation: "A clock tells us the time.",
      difficulty: 1,
      tags: ["objects", "a1"]
    },
    {
      id: "a1-v3-e6",
      type: "multiple-choice",
      question: "You use a _____ to erase mistakes.",
      options: ["pen", "pencil", "eraser", "ruler"],
      correctAnswer: "eraser",
      explanation: "An eraser removes pencil marks.",
      difficulty: 1,
      tags: ["objects", "a1"]
    },
    {
      id: "a1-v3-e7",
      type: "fill-blank",
      question: "Students carry their books in a _____.",
      options: ["backpack", "hat", "shoe", "glove"],
      correctAnswer: "backpack",
      explanation: "A backpack is a bag for carrying books.",
      difficulty: 1,
      tags: ["objects", "a1"]
    },
    {
      id: "a1-v3-e8",
      type: "multiple-choice",
      question: "You open a _____ to enter a room.",
      options: ["window", "door", "table", "floor"],
      correctAnswer: "door",
      explanation: "A door is the entrance to a room.",
      difficulty: 1,
      tags: ["objects", "a1"]
    },
  ],

  // a1-vocab-4: Basic food and drink
  "a1-vocab-4": [
    {
      id: "a1-v4-e1",
      type: "multiple-choice",
      question: "An apple is a _____.",
      options: ["vegetable", "drink", "fruit", "meat"],
      correctAnswer: "fruit",
      explanation: "An apple is a fruit.",
      difficulty: 1,
      tags: ["food", "a1"]
    },
    {
      id: "a1-v4-e2",
      type: "multiple-choice",
      question: "We drink _____ in the morning with breakfast.",
      options: ["pizza", "coffee", "salad", "chicken"],
      correctAnswer: "coffee",
      explanation: "Many people drink coffee in the morning.",
      difficulty: 1,
      tags: ["drinks", "a1"]
    },
    {
      id: "a1-v4-e3",
      type: "multiple-choice",
      question: "A carrot is a _____.",
      options: ["fruit", "vegetable", "drink", "dessert"],
      correctAnswer: "vegetable",
      explanation: "A carrot is an orange vegetable.",
      difficulty: 1,
      tags: ["food", "a1"]
    },
    {
      id: "a1-v4-e4",
      type: "fill-blank",
      question: "I drink _____ when I'm thirsty.",
      options: ["water", "bread", "rice", "cheese"],
      correctAnswer: "water",
      explanation: "Water is the best drink when you're thirsty.",
      difficulty: 1,
      tags: ["drinks", "a1"]
    },
    {
      id: "a1-v4-e5",
      type: "multiple-choice",
      question: "Milk comes from _____.",
      options: ["trees", "cows", "fish", "birds"],
      correctAnswer: "cows",
      explanation: "Cows produce milk.",
      difficulty: 1,
      tags: ["drinks", "a1"]
    },
    {
      id: "a1-v4-e6",
      type: "multiple-choice",
      question: "A banana is _____.",
      options: ["red", "green", "yellow", "blue"],
      correctAnswer: "yellow",
      explanation: "Ripe bananas are yellow.",
      difficulty: 1,
      tags: ["food", "a1"]
    },
    {
      id: "a1-v4-e7",
      type: "fill-blank",
      question: "We make sandwiches with _____.",
      options: ["bread", "water", "juice", "milk"],
      correctAnswer: "bread",
      explanation: "Sandwiches are made with bread.",
      difficulty: 1,
      tags: ["food", "a1"]
    },
    {
      id: "a1-v4-e8",
      type: "multiple-choice",
      question: "Orange juice comes from _____.",
      options: ["apples", "oranges", "grapes", "lemons"],
      correctAnswer: "oranges",
      explanation: "Orange juice is made from oranges.",
      difficulty: 1,
      tags: ["drinks", "a1"]
    },
  ],
};

// ====================================
// GRAMMAR EXERCISES - A1 LEVEL
// ====================================
const a1GrammarExercises: Record<string, Exercise[]> = {
  // a1-gram-1: Verb To Be
  "a1-gram-1": [
    {
      id: "a1-g1-e1",
      type: "multiple-choice",
      question: "I _____ a student.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "am",
      explanation: "We use 'am' with 'I': I am a student.",
      difficulty: 1,
      tags: ["to-be", "a1", "affirmative"]
    },
    {
      id: "a1-g1-e2",
      type: "multiple-choice",
      question: "She _____ my sister.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "is",
      explanation: "We use 'is' with he/she/it: She is my sister.",
      difficulty: 1,
      tags: ["to-be", "a1", "affirmative"]
    },
    {
      id: "a1-g1-e3",
      type: "multiple-choice",
      question: "They _____ from Spain.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "are",
      explanation: "We use 'are' with they/we/you: They are from Spain.",
      difficulty: 1,
      tags: ["to-be", "a1", "affirmative"]
    },
    {
      id: "a1-g1-e4",
      type: "multiple-choice",
      question: "The cat _____ on the table.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "is",
      explanation: "We use 'is' with singular nouns: The cat is on the table.",
      difficulty: 1,
      tags: ["to-be", "a1", "affirmative"]
    },
    {
      id: "a1-g1-e5",
      type: "multiple-choice",
      question: "We _____ happy today.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "are",
      explanation: "We use 'are' with 'we': We are happy.",
      difficulty: 1,
      tags: ["to-be", "a1", "affirmative"]
    },
    {
      id: "a1-g1-e6",
      type: "fill-blank",
      question: "You _____ my best friend.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "are",
      explanation: "We use 'are' with 'you': You are my best friend.",
      difficulty: 1,
      tags: ["to-be", "a1", "affirmative"]
    },
    {
      id: "a1-g1-e7",
      type: "multiple-choice",
      question: "He _____ NOT a doctor. (negative)",
      options: ["am not", "is not", "are not", "be not"],
      correctAnswer: "is not",
      explanation: "Negative form with 'he': He is not (isn't) a doctor.",
      difficulty: 1,
      tags: ["to-be", "a1", "negative"]
    },
    {
      id: "a1-g1-e8",
      type: "multiple-choice",
      question: "_____ she your teacher?",
      options: ["Am", "Is", "Are", "Be"],
      correctAnswer: "Is",
      explanation: "Questions with 'she': Is she your teacher?",
      difficulty: 1,
      tags: ["to-be", "a1", "questions"]
    },
    {
      id: "a1-g1-e9",
      type: "multiple-choice",
      question: "I _____ NOT tired.",
      options: ["am not", "is not", "are not", "be not"],
      correctAnswer: "am not",
      explanation: "Negative with 'I': I am not (I'm not) tired.",
      difficulty: 1,
      tags: ["to-be", "a1", "negative"]
    },
    {
      id: "a1-g1-e10",
      type: "fill-blank",
      question: "_____ you from England?",
      options: ["Am", "Is", "Are", "Be"],
      correctAnswer: "Are",
      explanation: "Questions with 'you': Are you from England?",
      difficulty: 1,
      tags: ["to-be", "a1", "questions"]
    },
  ],

  // a1-gram-2: Present Simple
  "a1-gram-2": [
    {
      id: "a1-g2-e1",
      type: "multiple-choice",
      question: "She _____ coffee every morning.",
      options: ["drink", "drinks", "drinking", "drank"],
      correctAnswer: "drinks",
      explanation: "Third person singular (she/he/it) adds -s: She drinks.",
      difficulty: 1,
      tags: ["present-simple", "a1", "third-person"]
    },
    {
      id: "a1-g2-e2",
      type: "multiple-choice",
      question: "I _____ to school every day.",
      options: ["go", "goes", "going", "went"],
      correctAnswer: "go",
      explanation: "With 'I', we use the base form: I go.",
      difficulty: 1,
      tags: ["present-simple", "a1"]
    },
    {
      id: "a1-g2-e3",
      type: "multiple-choice",
      question: "He _____ English very well.",
      options: ["speak", "speaks", "speaking", "spoke"],
      correctAnswer: "speaks",
      explanation: "Third person singular adds -s: He speaks.",
      difficulty: 1,
      tags: ["present-simple", "a1", "third-person"]
    },
    {
      id: "a1-g2-e4",
      type: "multiple-choice",
      question: "They _____ football on Sundays.",
      options: ["play", "plays", "playing", "played"],
      correctAnswer: "play",
      explanation: "With 'they', we use the base form: They play.",
      difficulty: 1,
      tags: ["present-simple", "a1"]
    },
    {
      id: "a1-g2-e5",
      type: "multiple-choice",
      question: "_____ you like pizza?",
      options: ["Do", "Does", "Is", "Are"],
      correctAnswer: "Do",
      explanation: "Questions with you/I/we/they use 'Do': Do you like...?",
      difficulty: 1,
      tags: ["present-simple", "a1", "questions"]
    },
    {
      id: "a1-g2-e6",
      type: "multiple-choice",
      question: "_____ she live in London?",
      options: ["Do", "Does", "Is", "Are"],
      correctAnswer: "Does",
      explanation: "Questions with he/she/it use 'Does': Does she live...?",
      difficulty: 1,
      tags: ["present-simple", "a1", "questions"]
    },
    {
      id: "a1-g2-e7",
      type: "fill-blank",
      question: "My cat _____ all day.",
      options: ["sleep", "sleeps", "sleeping", "slept"],
      correctAnswer: "sleeps",
      explanation: "The cat (it) → sleeps with -s.",
      difficulty: 1,
      tags: ["present-simple", "a1", "third-person"]
    },
    {
      id: "a1-g2-e8",
      type: "multiple-choice",
      question: "We _____ NOT eat meat. (negative)",
      options: ["do", "does", "don't", "doesn't"],
      correctAnswer: "don't",
      explanation: "Negative with we/I/you/they: don't + base verb.",
      difficulty: 1,
      tags: ["present-simple", "a1", "negative"]
    },
    {
      id: "a1-g2-e9",
      type: "multiple-choice",
      question: "She _____ NOT work on Saturdays.",
      options: ["do", "does", "don't", "doesn't"],
      correctAnswer: "doesn't",
      explanation: "Negative with he/she/it: doesn't + base verb.",
      difficulty: 1,
      tags: ["present-simple", "a1", "negative"]
    },
    {
      id: "a1-g2-e10",
      type: "fill-blank",
      question: "The sun _____ in the east.",
      options: ["rise", "rises", "rising", "risen"],
      correctAnswer: "rises",
      explanation: "The sun (it) → rises with -s. General facts use present simple.",
      difficulty: 1,
      tags: ["present-simple", "a1", "third-person"]
    },
  ],

  // a1-gram-3: Present Continuous
  "a1-gram-3": [
    {
      id: "a1-g3-e1",
      type: "multiple-choice",
      question: "I _____ reading a book now.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "am",
      explanation: "Present Continuous: I am + verb-ing.",
      difficulty: 1,
      tags: ["present-continuous", "a1"]
    },
    {
      id: "a1-g3-e2",
      type: "multiple-choice",
      question: "She _____ cooking dinner.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "is",
      explanation: "Present Continuous: She is + verb-ing.",
      difficulty: 1,
      tags: ["present-continuous", "a1"]
    },
    {
      id: "a1-g3-e3",
      type: "multiple-choice",
      question: "They _____ playing in the park.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "are",
      explanation: "Present Continuous: They are + verb-ing.",
      difficulty: 1,
      tags: ["present-continuous", "a1"]
    },
    {
      id: "a1-g3-e4",
      type: "multiple-choice",
      question: "What _____ you doing?",
      options: ["am", "is", "are", "be"],
      correctAnswer: "are",
      explanation: "Questions: What are you doing?",
      difficulty: 1,
      tags: ["present-continuous", "a1"]
    },
    {
      id: "a1-g3-e5",
      type: "fill-blank",
      question: "He is _____ TV right now.",
      options: ["watch", "watches", "watching", "watched"],
      correctAnswer: "watching",
      explanation: "Present Continuous uses the -ing form: watching.",
      difficulty: 1,
      tags: ["present-continuous", "a1"]
    },
    {
      id: "a1-g3-e6",
      type: "multiple-choice",
      question: "We _____ NOT sleeping. We are awake!",
      options: ["am", "is", "are", "be"],
      correctAnswer: "are",
      explanation: "Negative: We are not (aren't) sleeping.",
      difficulty: 1,
      tags: ["present-continuous", "a1"]
    },
    {
      id: "a1-g3-e7",
      type: "fill-blank",
      question: "The children are _____.",
      options: ["play", "plays", "playing", "played"],
      correctAnswer: "playing",
      explanation: "Present Continuous: are + playing.",
      difficulty: 1,
      tags: ["present-continuous", "a1"]
    },
    {
      id: "a1-g3-e8",
      type: "multiple-choice",
      question: "Look! It _____ raining outside.",
      options: ["am", "is", "are", "be"],
      correctAnswer: "is",
      explanation: "Present Continuous with 'it': It is raining.",
      difficulty: 1,
      tags: ["present-continuous", "a1"]
    },
  ],

  // a1-gram-4: Articles and pronouns
  "a1-gram-4": [
    {
      id: "a1-g4-e1",
      type: "multiple-choice",
      question: "I have _____ apple.",
      options: ["a", "an", "the", "—"],
      correctAnswer: "an",
      explanation: "Use 'an' before vowel sounds: an apple.",
      difficulty: 1,
      tags: ["articles", "a1"]
    },
    {
      id: "a1-g4-e2",
      type: "multiple-choice",
      question: "She is _____ teacher.",
      options: ["a", "an", "the", "—"],
      correctAnswer: "a",
      explanation: "Use 'a' before consonant sounds: a teacher.",
      difficulty: 1,
      tags: ["articles", "a1"]
    },
    {
      id: "a1-g4-e3",
      type: "multiple-choice",
      question: "_____ sun is very bright today.",
      options: ["A", "An", "The", "—"],
      correctAnswer: "The",
      explanation: "Use 'the' for unique things: the sun, the moon.",
      difficulty: 1,
      tags: ["articles", "a1"]
    },
    {
      id: "a1-g4-e4",
      type: "multiple-choice",
      question: "Maria is my friend. _____ is very nice.",
      options: ["He", "She", "It", "They"],
      correctAnswer: "She",
      explanation: "Maria is female, so we use 'she'.",
      difficulty: 1,
      tags: ["pronouns", "a1"]
    },
    {
      id: "a1-g4-e5",
      type: "multiple-choice",
      question: "John and I are friends. _____ play together.",
      options: ["I", "He", "We", "They"],
      correctAnswer: "We",
      explanation: "John and I = We.",
      difficulty: 1,
      tags: ["pronouns", "a1"]
    },
    {
      id: "a1-g4-e6",
      type: "fill-blank",
      question: "The dog is hungry. _____ wants food.",
      options: ["He", "She", "It", "They"],
      correctAnswer: "It",
      explanation: "For animals (when gender is unknown), we use 'it'.",
      difficulty: 1,
      tags: ["pronouns", "a1"]
    },
    {
      id: "a1-g4-e7",
      type: "multiple-choice",
      question: "I need _____ umbrella. It's raining.",
      options: ["a", "an", "the", "—"],
      correctAnswer: "an",
      explanation: "Use 'an' before vowel sounds: an umbrella.",
      difficulty: 1,
      tags: ["articles", "a1"]
    },
    {
      id: "a1-g4-e8",
      type: "multiple-choice",
      question: "Tom and Sara are siblings. _____ live together.",
      options: ["He", "She", "We", "They"],
      correctAnswer: "They",
      explanation: "Tom and Sara = They.",
      difficulty: 1,
      tags: ["pronouns", "a1"]
    },
  ],
};

// ====================================
// SPEAKING EXERCISES - A1 LEVEL
// ====================================
const a1SpeakingExercises: Record<string, Exercise[]> = {
  // a1-speak-1: Introduce yourself
  "a1-speak-1": [
    {
      id: "a1-s1-e1",
      type: "multiple-choice",
      question: "How do you introduce yourself? 'Hello, _____ John.'",
      options: ["my name is", "I name", "me called", "name me"],
      correctAnswer: "my name is",
      explanation: "We say: 'My name is...' to introduce ourselves.",
      difficulty: 1,
      tags: ["introductions", "a1"]
    },
    {
      id: "a1-s1-e2",
      type: "multiple-choice",
      question: "Someone asks: 'Where are you from?' You answer:",
      options: ["I am from Spain.", "I from Spain.", "Me Spain.", "From I Spain."],
      correctAnswer: "I am from Spain.",
      explanation: "Correct form: I am from + country.",
      difficulty: 1,
      tags: ["introductions", "a1"]
    },
    {
      id: "a1-s1-e3",
      type: "multiple-choice",
      question: "How do you ask someone their name?",
      options: ["What is your name?", "Your name what?", "Name you what?", "How your name?"],
      correctAnswer: "What is your name?",
      explanation: "The correct question is: What is your name?",
      difficulty: 1,
      tags: ["introductions", "a1"]
    },
    {
      id: "a1-s1-e4",
      type: "fill-blank",
      question: "'How old are you?' 'I _____ 25 years old.'",
      options: ["am", "have", "is", "be"],
      correctAnswer: "am",
      explanation: "In English, we say: I am + age (not 'I have').",
      difficulty: 1,
      tags: ["introductions", "a1"]
    },
    {
      id: "a1-s1-e5",
      type: "multiple-choice",
      question: "What do you say after someone introduces themselves?",
      options: ["Nice to meet you!", "Hello name!", "You welcome!", "Thanks hello!"],
      correctAnswer: "Nice to meet you!",
      explanation: "After meeting someone new, say: Nice to meet you!",
      difficulty: 1,
      tags: ["introductions", "a1"]
    },
    {
      id: "a1-s1-e6",
      type: "multiple-choice",
      question: "How do you ask someone about their job?",
      options: ["What do you do?", "What you work?", "How is job?", "Work what?"],
      correctAnswer: "What do you do?",
      explanation: "'What do you do?' means 'What is your job?'",
      difficulty: 1,
      tags: ["introductions", "a1"]
    },
  ],

  // a1-speak-2: Greetings and farewells
  "a1-speak-2": [
    {
      id: "a1-s2-e1",
      type: "multiple-choice",
      question: "It's 9 AM. What do you say?",
      options: ["Good evening!", "Good morning!", "Good night!", "Good afternoon!"],
      correctAnswer: "Good morning!",
      explanation: "In the morning (before 12 PM), we say: Good morning!",
      difficulty: 1,
      tags: ["greetings", "a1"]
    },
    {
      id: "a1-s2-e2",
      type: "multiple-choice",
      question: "You're leaving. What do you say?",
      options: ["Hello!", "See you later!", "Welcome!", "Nice to meet you!"],
      correctAnswer: "See you later!",
      explanation: "When leaving, we say: Goodbye! or See you later!",
      difficulty: 1,
      tags: ["greetings", "a1"]
    },
    {
      id: "a1-s2-e3",
      type: "multiple-choice",
      question: "It's 8 PM. What do you say?",
      options: ["Good morning!", "Good afternoon!", "Good evening!", "Good day!"],
      correctAnswer: "Good evening!",
      explanation: "After 6 PM, we say: Good evening!",
      difficulty: 1,
      tags: ["greetings", "a1"]
    },
    {
      id: "a1-s2-e4",
      type: "fill-blank",
      question: "Someone says 'How are you?' You reply: 'I'm _____, thanks!'",
      options: ["fine", "have", "do", "be"],
      correctAnswer: "fine",
      explanation: "Common response: I'm fine, thanks! or I'm good, thanks!",
      difficulty: 1,
      tags: ["greetings", "a1"]
    },
    {
      id: "a1-s2-e5",
      type: "multiple-choice",
      question: "It's 3 PM. What do you say?",
      options: ["Good morning!", "Good afternoon!", "Good evening!", "Good night!"],
      correctAnswer: "Good afternoon!",
      explanation: "From 12 PM to 6 PM, we say: Good afternoon!",
      difficulty: 1,
      tags: ["greetings", "a1"]
    },
    {
      id: "a1-s2-e6",
      type: "multiple-choice",
      question: "You're going to bed. What do you say?",
      options: ["Good morning!", "Good evening!", "Good night!", "Goodbye!"],
      correctAnswer: "Good night!",
      explanation: "Before sleeping, we say: Good night!",
      difficulty: 1,
      tags: ["greetings", "a1"]
    },
  ],

  // a1-speak-3: Ask for basic things
  "a1-speak-3": [
    {
      id: "a1-s3-e1",
      type: "multiple-choice",
      question: "In a restaurant, you say: 'Can I _____ a coffee, please?'",
      options: ["have", "take", "do", "make"],
      correctAnswer: "have",
      explanation: "To order: Can I have...? or Could I have...?",
      difficulty: 1,
      tags: ["requests", "a1"]
    },
    {
      id: "a1-s3-e2",
      type: "multiple-choice",
      question: "You're lost. You ask: 'Excuse me, _____ is the station?'",
      options: ["what", "when", "where", "who"],
      correctAnswer: "where",
      explanation: "To ask about location: Where is...?",
      difficulty: 1,
      tags: ["requests", "a1"]
    },
    {
      id: "a1-s3-e3",
      type: "multiple-choice",
      question: "You want the bill. You say: 'Can I have the _____, please?'",
      options: ["bill", "money", "pay", "cost"],
      correctAnswer: "bill",
      explanation: "At a restaurant, ask for the bill (UK) or check (US).",
      difficulty: 1,
      tags: ["requests", "a1"]
    },
    {
      id: "a1-s3-e4",
      type: "fill-blank",
      question: "You want help. You say: '_____ me, can you help?'",
      options: ["Excuse", "Sorry", "Please", "Hello"],
      correctAnswer: "Excuse",
      explanation: "To get attention politely: Excuse me...",
      difficulty: 1,
      tags: ["requests", "a1"]
    },
    {
      id: "a1-s3-e5",
      type: "multiple-choice",
      question: "You don't understand. You say:",
      options: ["Can you repeat that, please?", "What you say?", "Again!", "No understand!"],
      correctAnswer: "Can you repeat that, please?",
      explanation: "Politely ask: Can you repeat that, please?",
      difficulty: 1,
      tags: ["requests", "a1"]
    },
    {
      id: "a1-s3-e6",
      type: "multiple-choice",
      question: "You want to buy something. You ask: 'How much _____ this?'",
      options: ["is", "are", "do", "have"],
      correctAnswer: "is",
      explanation: "To ask the price: How much is this?",
      difficulty: 1,
      tags: ["requests", "a1"]
    },
  ],
};

// ====================================
// LISTENING EXERCISES - A1 LEVEL
// ====================================
const a1ListeningExercises: Record<string, Exercise[]> = {
  // a1-list-1: Individual words
  "a1-list-1": [
    {
      id: "a1-l1-e1",
      type: "multiple-choice",
      question: "You hear: 'FIFTEEN'. Which number is it?",
      options: ["50", "15", "5", "14"],
      correctAnswer: "15",
      explanation: "Fifteen = 15. Be careful: fifty = 50.",
      difficulty: 1,
      tags: ["listening", "numbers", "a1"]
    },
    {
      id: "a1-l1-e2",
      type: "multiple-choice",
      question: "You hear: 'My name is PETER'. What's the name?",
      options: ["Patrick", "Peter", "Paul", "Philip"],
      correctAnswer: "Peter",
      explanation: "The name mentioned is Peter.",
      difficulty: 1,
      tags: ["listening", "names", "a1"]
    },
    {
      id: "a1-l1-e3",
      type: "multiple-choice",
      question: "You hear: 'THIRTY'. Which number is it?",
      options: ["13", "30", "3", "33"],
      correctAnswer: "30",
      explanation: "Thirty = 30. Thirteen = 13.",
      difficulty: 1,
      tags: ["listening", "numbers", "a1"]
    },
    {
      id: "a1-l1-e4",
      type: "fill-blank",
      question: "You hear: 'I live in LONDON'. Where does the person live?",
      options: ["London", "Paris", "Madrid", "Rome"],
      correctAnswer: "London",
      explanation: "The city mentioned is London.",
      difficulty: 1,
      tags: ["listening", "places", "a1"]
    },
    {
      id: "a1-l1-e5",
      type: "multiple-choice",
      question: "You hear: 'FORTY'. Which number is it?",
      options: ["14", "40", "44", "4"],
      correctAnswer: "40",
      explanation: "Forty = 40. Fourteen = 14.",
      difficulty: 1,
      tags: ["listening", "numbers", "a1"]
    },
    {
      id: "a1-l1-e6",
      type: "multiple-choice",
      question: "You hear: 'My sister is ANNA'. What is the sister's name?",
      options: ["Ana", "Anne", "Anna", "Annie"],
      correctAnswer: "Anna",
      explanation: "The sister's name is Anna.",
      difficulty: 1,
      tags: ["listening", "names", "a1"]
    },
  ],

  // a1-list-2: Simple instructions
  "a1-list-2": [
    {
      id: "a1-l2-e1",
      type: "multiple-choice",
      question: "Teacher says: 'Open your books'. What should you do?",
      options: ["Close your book", "Open your book", "Write in your book", "Read your book"],
      correctAnswer: "Open your book",
      explanation: "'Open' means to make something not closed.",
      difficulty: 1,
      tags: ["listening", "instructions", "a1"]
    },
    {
      id: "a1-l2-e2",
      type: "multiple-choice",
      question: "Teacher says: 'Stand up'. What should you do?",
      options: ["Sit down", "Stand up", "Lie down", "Walk"],
      correctAnswer: "Stand up",
      explanation: "'Stand up' = get on your feet (opposite of sit down).",
      difficulty: 1,
      tags: ["listening", "instructions", "a1"]
    },
    {
      id: "a1-l2-e3",
      type: "multiple-choice",
      question: "Teacher says: 'Be quiet, please'. What should you do?",
      options: ["Talk louder", "Stop talking", "Ask a question", "Leave the room"],
      correctAnswer: "Stop talking",
      explanation: "'Be quiet' = don't make noise, stop talking.",
      difficulty: 1,
      tags: ["listening", "instructions", "a1"]
    },
    {
      id: "a1-l2-e4",
      type: "multiple-choice",
      question: "Teacher says: 'Listen carefully'. What should you do?",
      options: ["Talk more", "Pay attention", "Close your eyes", "Write quickly"],
      correctAnswer: "Pay attention",
      explanation: "'Listen carefully' means focus and pay attention.",
      difficulty: 1,
      tags: ["listening", "instructions", "a1"]
    },
    {
      id: "a1-l2-e5",
      type: "fill-blank",
      question: "Teacher says: 'Please _____ your hand'. What word fits?",
      options: ["raise", "put", "take", "give"],
      correctAnswer: "raise",
      explanation: "'Raise your hand' means lift your hand up.",
      difficulty: 1,
      tags: ["listening", "instructions", "a1"]
    },
  ],
};

// ====================================
// READING EXERCISES - A1 LEVEL
// ====================================
const a1ReadingExercises: Record<string, Exercise[]> = {
  // a1-read-1: Signs and notices
  "a1-read-1": [
    {
      id: "a1-r1-e1",
      type: "multiple-choice",
      question: "You see a sign: 'EXIT'. What does it mean?",
      options: ["Entrance", "Way out", "Toilet", "Stairs"],
      correctAnswer: "Way out",
      explanation: "EXIT means the way out of a building.",
      difficulty: 1,
      tags: ["reading", "signs", "a1"]
    },
    {
      id: "a1-r1-e2",
      type: "multiple-choice",
      question: "You see: 'NO SMOKING'. What can't you do?",
      options: ["Eat", "Drink", "Smoke", "Talk"],
      correctAnswer: "Smoke",
      explanation: "'No smoking' = smoking is not allowed.",
      difficulty: 1,
      tags: ["reading", "signs", "a1"]
    },
    {
      id: "a1-r1-e3",
      type: "multiple-choice",
      question: "You see: 'PUSH'. What do you do to the door?",
      options: ["Pull it", "Push it", "Lift it", "Close it"],
      correctAnswer: "Push it",
      explanation: "PUSH means push the door to open it.",
      difficulty: 1,
      tags: ["reading", "signs", "a1"]
    },
    {
      id: "a1-r1-e4",
      type: "multiple-choice",
      question: "You see: 'ENTRANCE'. What is it?",
      options: ["Way out", "Way in", "Elevator", "Stairs"],
      correctAnswer: "Way in",
      explanation: "ENTRANCE is where you enter a building.",
      difficulty: 1,
      tags: ["reading", "signs", "a1"]
    },
    {
      id: "a1-r1-e5",
      type: "multiple-choice",
      question: "You see: 'CLOSED'. What does it mean?",
      options: ["The place is open", "The place is not open", "Free entry", "Welcome"],
      correctAnswer: "The place is not open",
      explanation: "CLOSED means the place is not open.",
      difficulty: 1,
      tags: ["reading", "signs", "a1"]
    },
    {
      id: "a1-r1-e6",
      type: "fill-blank",
      question: "You see: 'OUT OF _____'. The elevator doesn't work.",
      options: ["ORDER", "TIME", "DATE", "PLACE"],
      correctAnswer: "ORDER",
      explanation: "'Out of order' means something is broken.",
      difficulty: 1,
      tags: ["reading", "signs", "a1"]
    },
  ],

  // a1-read-2: Simple forms
  "a1-read-2": [
    {
      id: "a1-r2-e1",
      type: "multiple-choice",
      question: "Read: 'The shop is open from 9AM to 5PM.' When does it close?",
      options: ["9 AM", "5 PM", "12 PM", "8 PM"],
      correctAnswer: "5 PM",
      explanation: "The shop closes at 5 PM (17:00).",
      difficulty: 1,
      tags: ["reading", "short-texts", "a1"]
    },
    {
      id: "a1-r2-e2",
      type: "multiple-choice",
      question: "Read: 'My name is Anna. I am from Italy.' Where is Anna from?",
      options: ["Spain", "France", "Italy", "Germany"],
      correctAnswer: "Italy",
      explanation: "The text says Anna is from Italy.",
      difficulty: 1,
      tags: ["reading", "short-texts", "a1"]
    },
    {
      id: "a1-r2-e3",
      type: "multiple-choice",
      question: "On a form, 'First name' means your _____.",
      options: ["family name", "given name", "nickname", "middle name"],
      correctAnswer: "given name",
      explanation: "First name = your given/personal name (e.g., John, Maria).",
      difficulty: 1,
      tags: ["reading", "forms", "a1"]
    },
    {
      id: "a1-r2-e4",
      type: "multiple-choice",
      question: "On a form, 'Surname' means your _____.",
      options: ["first name", "family name", "nickname", "title"],
      correctAnswer: "family name",
      explanation: "Surname = family name/last name.",
      difficulty: 1,
      tags: ["reading", "forms", "a1"]
    },
    {
      id: "a1-r2-e5",
      type: "fill-blank",
      question: "On a form, 'DOB' means Date of _____.",
      options: ["Birth", "Booking", "Business", "Billing"],
      correctAnswer: "Birth",
      explanation: "DOB = Date of Birth (your birthday).",
      difficulty: 1,
      tags: ["reading", "forms", "a1"]
    },
  ],
};

// ====================================
// WRITING EXERCISES - A1 LEVEL
// ====================================
const a1WritingExercises: Record<string, Exercise[]> = {
  // a1-write-1: Personal data
  "a1-write-1": [
    {
      id: "a1-w1-e1",
      type: "multiple-choice",
      question: "How do you write your email correctly?",
      options: ["john@example.com", "john.example.com", "john example com", "@john.example"],
      correctAnswer: "john@example.com",
      explanation: "Email format: name@domain.com",
      difficulty: 1,
      tags: ["writing", "forms", "a1"]
    },
    {
      id: "a1-w1-e2",
      type: "multiple-choice",
      question: "What goes in the 'Address' field on a form?",
      options: ["Your phone number", "Where you live", "Your email", "Your birthday"],
      correctAnswer: "Where you live",
      explanation: "Address = where you live (street, city, country).",
      difficulty: 1,
      tags: ["writing", "forms", "a1"]
    },
    {
      id: "a1-w1-e3",
      type: "fill-blank",
      question: "To write the date '15/06/2024', in words: June _____, 2024.",
      options: ["15th", "fifteen", "15", "fifteenth"],
      correctAnswer: "15th",
      explanation: "In dates, we use ordinal numbers: 15th (fifteenth).",
      difficulty: 1,
      tags: ["writing", "forms", "a1"]
    },
    {
      id: "a1-w1-e4",
      type: "multiple-choice",
      question: "What is 'Nationality' on a form?",
      options: ["Your age", "Your country", "Your job", "Your language"],
      correctAnswer: "Your country",
      explanation: "Nationality = your country (e.g., Spanish, American).",
      difficulty: 1,
      tags: ["writing", "forms", "a1"]
    },
    {
      id: "a1-w1-e5",
      type: "multiple-choice",
      question: "What does 'Occupation' mean on a form?",
      options: ["Your hobby", "Your job", "Your age", "Your address"],
      correctAnswer: "Your job",
      explanation: "Occupation = your job or profession.",
      difficulty: 1,
      tags: ["writing", "forms", "a1"]
    },
  ],

  // a1-write-2: Short sentences
  "a1-write-2": [
    {
      id: "a1-w2-e1",
      type: "multiple-choice",
      question: "How do you start an informal message to a friend?",
      options: ["Dear Sir,", "Hi John,", "To Whom It May Concern,", "Respected Sir,"],
      correctAnswer: "Hi John,",
      explanation: "Informal messages start with 'Hi' or 'Hey' + name.",
      difficulty: 1,
      tags: ["writing", "messages", "a1"]
    },
    {
      id: "a1-w2-e2",
      type: "multiple-choice",
      question: "How do you end an informal message?",
      options: ["Yours faithfully,", "Best regards,", "See you soon!", "Respectfully yours,"],
      correctAnswer: "See you soon!",
      explanation: "Informal endings: See you! / Take care! / Bye!",
      difficulty: 1,
      tags: ["writing", "messages", "a1"]
    },
    {
      id: "a1-w2-e3",
      type: "fill-blank",
      question: "Complete the sentence: 'I _____ a student.'",
      options: ["am", "is", "are", "be"],
      correctAnswer: "am",
      explanation: "With 'I', we always use 'am'.",
      difficulty: 1,
      tags: ["writing", "sentences", "a1"]
    },
    {
      id: "a1-w2-e4",
      type: "multiple-choice",
      question: "Which sentence is correct?",
      options: ["She is teacher.", "She is a teacher.", "She a is teacher.", "Is she teacher."],
      correctAnswer: "She is a teacher.",
      explanation: "We need the article 'a' before the profession.",
      difficulty: 1,
      tags: ["writing", "sentences", "a1"]
    },
    {
      id: "a1-w2-e5",
      type: "multiple-choice",
      question: "Which sentence has correct word order?",
      options: ["Like I pizza.", "I pizza like.", "I like pizza.", "Pizza I like."],
      correctAnswer: "I like pizza.",
      explanation: "English word order: Subject + Verb + Object.",
      difficulty: 1,
      tags: ["writing", "sentences", "a1"]
    },
  ],
};

// ====================================
// EXPORT FUNCTIONS
// ====================================

/**
 * Get exercises by skill ID for A1 level
 */
export function getA1ExercisesBySkillId(skillId: string): Exercise[] {
  // Combine all exercise categories
  const allExercises: Record<string, Exercise[]> = {
    ...a1VocabExercises,
    ...a1GrammarExercises,
    ...a1SpeakingExercises,
    ...a1ListeningExercises,
    ...a1ReadingExercises,
    ...a1WritingExercises,
  };
  
  return allExercises[skillId] || [];
}

/**
 * Get all A1 exercises for a specific category
 */
export function getA1ExercisesByCategory(category: 'vocabulary' | 'grammar' | 'speaking' | 'listening' | 'reading' | 'writing'): Exercise[] {
  const categoryMap = {
    vocabulary: a1VocabExercises,
    grammar: a1GrammarExercises,
    speaking: a1SpeakingExercises,
    listening: a1ListeningExercises,
    reading: a1ReadingExercises,
    writing: a1WritingExercises,
  };
  
  return Object.values(categoryMap[category]).flat();
}

/**
 * Get random A1 exercises
 */
export function getRandomA1Exercises(count: number = 10): Exercise[] {
  const allExercises = [
    ...Object.values(a1VocabExercises).flat(),
    ...Object.values(a1GrammarExercises).flat(),
    ...Object.values(a1SpeakingExercises).flat(),
    ...Object.values(a1ListeningExercises).flat(),
    ...Object.values(a1ReadingExercises).flat(),
    ...Object.values(a1WritingExercises).flat(),
  ];
  
  // Shuffle and return the requested count
  const shuffled = allExercises.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Export all exercises for the level
export const allA1CurriculumExercises = {
  vocabulary: a1VocabExercises,
  grammar: a1GrammarExercises,
  speaking: a1SpeakingExercises,
  listening: a1ListeningExercises,
  reading: a1ReadingExercises,
  writing: a1WritingExercises,
};

// Count total exercises
export const a1ExerciseCount = Object.values(a1VocabExercises).flat().length +
  Object.values(a1GrammarExercises).flat().length +
  Object.values(a1SpeakingExercises).flat().length +
  Object.values(a1ListeningExercises).flat().length +
  Object.values(a1ReadingExercises).flat().length +
  Object.values(a1WritingExercises).flat().length;

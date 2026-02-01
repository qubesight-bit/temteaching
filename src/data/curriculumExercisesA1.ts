// A1 Level Comprehensive Curriculum Exercises - Fully aligned with skill IDs
import { Exercise } from "./exercisesData";

// ====================================
// VOCABULARY EXERCISES - A1 LEVEL (20 themes)
// ====================================
const a1VocabExercises: Record<string, Exercise[]> = {
  // a1-vocab-1: Numbers & Counting
  "a1-vocab-1": [
    {
      id: "a1-v1-e1",
      type: "multiple-choice",
      question: "What number comes after 'twelve'?",
      options: ["eleven", "thirteen", "fourteen", "ten"],
      correctAnswer: "thirteen",
      explanation: "After twelve (12) comes thirteen (13).",
      difficulty: 1,
      tags: ["numbers", "a1"]
    },
    {
      id: "a1-v1-e2",
      type: "multiple-choice",
      question: "What is 5 + 7?",
      options: ["eleven", "twelve", "thirteen", "ten"],
      correctAnswer: "twelve",
      explanation: "5 + 7 = 12 (twelve).",
      difficulty: 1,
      tags: ["numbers", "a1"]
    },
    {
      id: "a1-v1-e3",
      type: "fill-blank",
      question: "The number before fifteen is _____.",
      options: ["fourteen", "sixteen", "thirteen", "twelve"],
      correctAnswer: "fourteen",
      explanation: "Before 15 comes 14 (fourteen).",
      difficulty: 1,
      tags: ["numbers", "a1"]
    },
    {
      id: "a1-v1-e4",
      type: "multiple-choice",
      question: "How do you write '17' in words?",
      options: ["sixteen", "seventeen", "eighteen", "fifteen"],
      correctAnswer: "seventeen",
      explanation: "17 is written as 'seventeen'.",
      difficulty: 1,
      tags: ["numbers", "a1"]
    },
    {
      id: "a1-v1-e5",
      type: "multiple-choice",
      question: "What is 30 + 20?",
      options: ["forty", "fifty", "sixty", "seventy"],
      correctAnswer: "fifty",
      explanation: "30 + 20 = 50 (fifty).",
      difficulty: 1,
      tags: ["numbers", "a1"]
    },
    {
      id: "a1-v1-e6",
      type: "fill-blank",
      question: "The number after ninety-nine is _____.",
      options: ["one hundred", "ninety-eight", "one thousand", "ninety"],
      correctAnswer: "one hundred",
      explanation: "After 99 comes 100 (one hundred).",
      difficulty: 1,
      tags: ["numbers", "a1"]
    },
  ],

  // a1-vocab-2: Colors
  "a1-vocab-2": [
    {
      id: "a1-v2-e1",
      type: "multiple-choice",
      question: "What color is the sky on a sunny day?",
      options: ["red", "green", "blue", "yellow"],
      correctAnswer: "blue",
      explanation: "The sky is blue on a sunny day.",
      difficulty: 1,
      tags: ["colors", "a1"]
    },
    {
      id: "a1-v2-e2",
      type: "multiple-choice",
      question: "Bananas are _____.",
      options: ["blue", "red", "yellow", "green"],
      correctAnswer: "yellow",
      explanation: "Bananas are yellow when ripe.",
      difficulty: 1,
      tags: ["colors", "a1"]
    },
    {
      id: "a1-v2-e3",
      type: "multiple-choice",
      question: "Grass is usually _____.",
      options: ["blue", "green", "red", "white"],
      correctAnswer: "green",
      explanation: "Grass is green.",
      difficulty: 1,
      tags: ["colors", "a1"]
    },
    {
      id: "a1-v2-e4",
      type: "multiple-choice",
      question: "What color do you get when you mix red and yellow?",
      options: ["purple", "green", "orange", "pink"],
      correctAnswer: "orange",
      explanation: "Red + Yellow = Orange.",
      difficulty: 1,
      tags: ["colors", "a1"]
    },
    {
      id: "a1-v2-e5",
      type: "fill-blank",
      question: "Snow is _____.",
      options: ["white", "black", "gray", "blue"],
      correctAnswer: "white",
      explanation: "Snow is white.",
      difficulty: 1,
      tags: ["colors", "a1"]
    },
    {
      id: "a1-v2-e6",
      type: "multiple-choice",
      question: "What color is a fire truck?",
      options: ["blue", "green", "red", "yellow"],
      correctAnswer: "red",
      explanation: "Fire trucks are typically red.",
      difficulty: 1,
      tags: ["colors", "a1"]
    },
  ],

  // a1-vocab-3: Family Members
  "a1-vocab-3": [
    {
      id: "a1-v3-e1",
      type: "multiple-choice",
      question: "Your mother's mother is your _____.",
      options: ["aunt", "sister", "grandmother", "cousin"],
      correctAnswer: "grandmother",
      explanation: "Your mother's mother is your grandmother.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-e2",
      type: "multiple-choice",
      question: "Your father's brother is your _____.",
      options: ["uncle", "cousin", "brother", "grandfather"],
      correctAnswer: "uncle",
      explanation: "Your father's brother is your uncle.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-e3",
      type: "fill-blank",
      question: "My mother and my father are my _____.",
      options: ["parents", "children", "siblings", "friends"],
      correctAnswer: "parents",
      explanation: "Mother and father together are called parents.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-e4",
      type: "multiple-choice",
      question: "Your sister's son is your _____.",
      options: ["cousin", "nephew", "son", "brother"],
      correctAnswer: "nephew",
      explanation: "Your sister's son is your nephew.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-e5",
      type: "fill-blank",
      question: "My father's father is my _____.",
      options: ["grandfather", "grandmother", "uncle", "brother"],
      correctAnswer: "grandfather",
      explanation: "Your father's father is your grandfather.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
    {
      id: "a1-v3-e6",
      type: "multiple-choice",
      question: "Your mother's sister is your _____.",
      options: ["aunt", "grandmother", "sister", "cousin"],
      correctAnswer: "aunt",
      explanation: "Your mother's sister is your aunt.",
      difficulty: 1,
      tags: ["family", "a1"]
    },
  ],

  // a1-vocab-4: Basic Food
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
      question: "A carrot is a _____.",
      options: ["fruit", "vegetable", "drink", "dessert"],
      correctAnswer: "vegetable",
      explanation: "A carrot is an orange vegetable.",
      difficulty: 1,
      tags: ["food", "a1"]
    },
    {
      id: "a1-v4-e3",
      type: "fill-blank",
      question: "We make sandwiches with _____.",
      options: ["bread", "water", "juice", "milk"],
      correctAnswer: "bread",
      explanation: "Sandwiches are made with bread.",
      difficulty: 1,
      tags: ["food", "a1"]
    },
    {
      id: "a1-v4-e4",
      type: "multiple-choice",
      question: "Eggs come from _____.",
      options: ["cows", "pigs", "chickens", "dogs"],
      correctAnswer: "chickens",
      explanation: "Chickens lay eggs.",
      difficulty: 1,
      tags: ["food", "a1"]
    },
    {
      id: "a1-v4-e5",
      type: "multiple-choice",
      question: "Rice is a popular food in _____.",
      options: ["Asia", "only Japan", "only China", "Antarctica"],
      correctAnswer: "Asia",
      explanation: "Rice is popular in many Asian countries.",
      difficulty: 1,
      tags: ["food", "a1"]
    },
    {
      id: "a1-v4-e6",
      type: "fill-blank",
      question: "For breakfast, many people eat _____ with milk.",
      options: ["cereal", "pizza", "steak", "soup"],
      correctAnswer: "cereal",
      explanation: "Cereal with milk is a common breakfast.",
      difficulty: 1,
      tags: ["food", "a1"]
    },
  ],

  // a1-vocab-5: Beverages
  "a1-vocab-5": [
    {
      id: "a1-v5-e1",
      type: "multiple-choice",
      question: "We drink _____ in the morning with breakfast.",
      options: ["pizza", "coffee", "salad", "chicken"],
      correctAnswer: "coffee",
      explanation: "Many people drink coffee in the morning.",
      difficulty: 1,
      tags: ["drinks", "a1"]
    },
    {
      id: "a1-v5-e2",
      type: "fill-blank",
      question: "I drink _____ when I'm thirsty.",
      options: ["water", "bread", "rice", "cheese"],
      correctAnswer: "water",
      explanation: "Water is the best drink when you're thirsty.",
      difficulty: 1,
      tags: ["drinks", "a1"]
    },
    {
      id: "a1-v5-e3",
      type: "multiple-choice",
      question: "Milk comes from _____.",
      options: ["trees", "cows", "fish", "birds"],
      correctAnswer: "cows",
      explanation: "Cows produce milk.",
      difficulty: 1,
      tags: ["drinks", "a1"]
    },
    {
      id: "a1-v5-e4",
      type: "multiple-choice",
      question: "Orange juice comes from _____.",
      options: ["apples", "oranges", "grapes", "lemons"],
      correctAnswer: "oranges",
      explanation: "Orange juice is made from oranges.",
      difficulty: 1,
      tags: ["drinks", "a1"]
    },
    {
      id: "a1-v5-e5",
      type: "fill-blank",
      question: "_____ is a hot drink made from leaves.",
      options: ["Tea", "Soda", "Juice", "Milk"],
      correctAnswer: "Tea",
      explanation: "Tea is made by steeping tea leaves in hot water.",
      difficulty: 1,
      tags: ["drinks", "a1"]
    },
    {
      id: "a1-v5-e6",
      type: "multiple-choice",
      question: "A fizzy, sweet drink is called _____.",
      options: ["water", "milk", "soda", "tea"],
      correctAnswer: "soda",
      explanation: "Soda (or soft drink) is sweet and fizzy.",
      difficulty: 1,
      tags: ["drinks", "a1"]
    },
  ],

  // a1-vocab-6: Common Animals
  "a1-vocab-6": [
    {
      id: "a1-v6-e1",
      type: "multiple-choice",
      question: "A _____ barks.",
      options: ["cat", "bird", "dog", "fish"],
      correctAnswer: "dog",
      explanation: "Dogs bark. Cats meow, birds chirp.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-e2",
      type: "multiple-choice",
      question: "A _____ meows.",
      options: ["dog", "cat", "cow", "horse"],
      correctAnswer: "cat",
      explanation: "Cats meow.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-e3",
      type: "fill-blank",
      question: "_____ can fly.",
      options: ["Birds", "Dogs", "Cats", "Fish"],
      correctAnswer: "Birds",
      explanation: "Birds have wings and can fly.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-e4",
      type: "multiple-choice",
      question: "_____ live in water.",
      options: ["Dogs", "Cats", "Fish", "Birds"],
      correctAnswer: "Fish",
      explanation: "Fish live in water and breathe through gills.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-e5",
      type: "multiple-choice",
      question: "Cows give us _____.",
      options: ["eggs", "milk", "wool", "honey"],
      correctAnswer: "milk",
      explanation: "Cows produce milk.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
    {
      id: "a1-v6-e6",
      type: "fill-blank",
      question: "You can ride a _____.",
      options: ["horse", "cat", "fish", "bird"],
      correctAnswer: "horse",
      explanation: "Horses are large animals you can ride.",
      difficulty: 1,
      tags: ["animals", "a1"]
    },
  ],

  // a1-vocab-7: Body Parts
  "a1-vocab-7": [
    {
      id: "a1-v7-e1",
      type: "multiple-choice",
      question: "You see with your _____.",
      options: ["ears", "nose", "eyes", "mouth"],
      correctAnswer: "eyes",
      explanation: "We use our eyes to see.",
      difficulty: 1,
      tags: ["body", "a1"]
    },
    {
      id: "a1-v7-e2",
      type: "multiple-choice",
      question: "You hear with your _____.",
      options: ["eyes", "ears", "nose", "hands"],
      correctAnswer: "ears",
      explanation: "We use our ears to hear.",
      difficulty: 1,
      tags: ["body", "a1"]
    },
    {
      id: "a1-v7-e3",
      type: "fill-blank",
      question: "You smell with your _____.",
      options: ["nose", "ear", "hand", "foot"],
      correctAnswer: "nose",
      explanation: "We use our nose to smell.",
      difficulty: 1,
      tags: ["body", "a1"]
    },
    {
      id: "a1-v7-e4",
      type: "multiple-choice",
      question: "You walk with your _____.",
      options: ["hands", "head", "feet", "eyes"],
      correctAnswer: "feet",
      explanation: "We use our feet to walk.",
      difficulty: 1,
      tags: ["body", "a1"]
    },
    {
      id: "a1-v7-e5",
      type: "multiple-choice",
      question: "The _____ is the top part of your body.",
      options: ["foot", "hand", "head", "arm"],
      correctAnswer: "head",
      explanation: "The head is at the top of your body.",
      difficulty: 1,
      tags: ["body", "a1"]
    },
    {
      id: "a1-v7-e6",
      type: "fill-blank",
      question: "Wash your _____ before eating.",
      options: ["hands", "feet", "ears", "eyes"],
      correctAnswer: "hands",
      explanation: "We should wash our hands before eating.",
      difficulty: 1,
      tags: ["body", "a1"]
    },
  ],

  // a1-vocab-8: Basic Clothing
  "a1-vocab-8": [
    {
      id: "a1-v8-e1",
      type: "multiple-choice",
      question: "You wear a _____ on your head.",
      options: ["shirt", "pants", "hat", "shoes"],
      correctAnswer: "hat",
      explanation: "A hat is worn on your head.",
      difficulty: 1,
      tags: ["clothing", "a1"]
    },
    {
      id: "a1-v8-e2",
      type: "multiple-choice",
      question: "You wear _____ on your feet.",
      options: ["gloves", "hats", "shirts", "shoes"],
      correctAnswer: "shoes",
      explanation: "Shoes are worn on your feet.",
      difficulty: 1,
      tags: ["clothing", "a1"]
    },
    {
      id: "a1-v8-e3",
      type: "fill-blank",
      question: "A _____ is clothing for your legs.",
      options: ["pants", "hat", "shirt", "scarf"],
      correctAnswer: "pants",
      explanation: "Pants (or trousers) cover your legs.",
      difficulty: 1,
      tags: ["clothing", "a1"]
    },
    {
      id: "a1-v8-e4",
      type: "multiple-choice",
      question: "When it's cold, you wear a _____.",
      options: ["swimsuit", "jacket", "shorts", "sandals"],
      correctAnswer: "jacket",
      explanation: "A jacket keeps you warm in cold weather.",
      difficulty: 1,
      tags: ["clothing", "a1"]
    },
    {
      id: "a1-v8-e5",
      type: "multiple-choice",
      question: "A _____ is a one-piece garment for women.",
      options: ["shirt", "pants", "dress", "hat"],
      correctAnswer: "dress",
      explanation: "A dress is a one-piece garment typically worn by women.",
      difficulty: 1,
      tags: ["clothing", "a1"]
    },
    {
      id: "a1-v8-e6",
      type: "fill-blank",
      question: "Put on _____ to keep your hands warm.",
      options: ["gloves", "shoes", "hat", "shirt"],
      correctAnswer: "gloves",
      explanation: "Gloves keep your hands warm.",
      difficulty: 1,
      tags: ["clothing", "a1"]
    },
  ],

  // a1-vocab-9: Rooms & Home
  "a1-vocab-9": [
    {
      id: "a1-v9-e1",
      type: "multiple-choice",
      question: "You sleep in the _____.",
      options: ["kitchen", "bedroom", "bathroom", "garage"],
      correctAnswer: "bedroom",
      explanation: "The bedroom is for sleeping.",
      difficulty: 1,
      tags: ["home", "a1"]
    },
    {
      id: "a1-v9-e2",
      type: "multiple-choice",
      question: "You cook food in the _____.",
      options: ["bedroom", "bathroom", "kitchen", "living room"],
      correctAnswer: "kitchen",
      explanation: "The kitchen is for cooking.",
      difficulty: 1,
      tags: ["home", "a1"]
    },
    {
      id: "a1-v9-e3",
      type: "fill-blank",
      question: "You take a shower in the _____.",
      options: ["bathroom", "kitchen", "bedroom", "garden"],
      correctAnswer: "bathroom",
      explanation: "The bathroom has a shower and toilet.",
      difficulty: 1,
      tags: ["home", "a1"]
    },
    {
      id: "a1-v9-e4",
      type: "multiple-choice",
      question: "The _____ is where you watch TV and relax.",
      options: ["bathroom", "kitchen", "living room", "garage"],
      correctAnswer: "living room",
      explanation: "The living room is for relaxing.",
      difficulty: 1,
      tags: ["home", "a1"]
    },
    {
      id: "a1-v9-e5",
      type: "multiple-choice",
      question: "You open a _____ to enter a room.",
      options: ["window", "door", "table", "floor"],
      correctAnswer: "door",
      explanation: "A door is the entrance to a room.",
      difficulty: 1,
      tags: ["home", "a1"]
    },
    {
      id: "a1-v9-e6",
      type: "fill-blank",
      question: "Open the _____ to let in fresh air.",
      options: ["window", "door", "floor", "wall"],
      correctAnswer: "window",
      explanation: "Windows let in light and air.",
      difficulty: 1,
      tags: ["home", "a1"]
    },
  ],

  // a1-vocab-10: Basic Furniture
  "a1-vocab-10": [
    {
      id: "a1-v10-e1",
      type: "multiple-choice",
      question: "You sleep on a _____.",
      options: ["chair", "table", "bed", "desk"],
      correctAnswer: "bed",
      explanation: "A bed is for sleeping.",
      difficulty: 1,
      tags: ["furniture", "a1"]
    },
    {
      id: "a1-v10-e2",
      type: "multiple-choice",
      question: "You sit on a _____.",
      options: ["table", "lamp", "chair", "window"],
      correctAnswer: "chair",
      explanation: "We sit on chairs.",
      difficulty: 1,
      tags: ["furniture", "a1"]
    },
    {
      id: "a1-v10-e3",
      type: "fill-blank",
      question: "Put your books on the _____.",
      options: ["table", "floor", "window", "door"],
      correctAnswer: "table",
      explanation: "A table has a flat top for putting things on.",
      difficulty: 1,
      tags: ["furniture", "a1"]
    },
    {
      id: "a1-v10-e4",
      type: "multiple-choice",
      question: "A _____ gives light in a room.",
      options: ["chair", "table", "lamp", "bed"],
      correctAnswer: "lamp",
      explanation: "A lamp provides light.",
      difficulty: 1,
      tags: ["furniture", "a1"]
    },
    {
      id: "a1-v10-e5",
      type: "multiple-choice",
      question: "A long comfortable seat for two or more people is a _____.",
      options: ["chair", "sofa", "stool", "desk"],
      correctAnswer: "sofa",
      explanation: "A sofa (or couch) seats multiple people.",
      difficulty: 1,
      tags: ["furniture", "a1"]
    },
    {
      id: "a1-v10-e6",
      type: "fill-blank",
      question: "Students sit at a _____ in school.",
      options: ["desk", "bed", "sofa", "lamp"],
      correctAnswer: "desk",
      explanation: "A desk is a table for working or studying.",
      difficulty: 1,
      tags: ["furniture", "a1"]
    },
  ],

  // a1-vocab-11: Days of the Week
  "a1-vocab-11": [
    {
      id: "a1-v11-e1",
      type: "multiple-choice",
      question: "The first day of the work week is _____.",
      options: ["Sunday", "Monday", "Friday", "Saturday"],
      correctAnswer: "Monday",
      explanation: "Monday is the first day of the work week.",
      difficulty: 1,
      tags: ["days", "a1"]
    },
    {
      id: "a1-v11-e2",
      type: "multiple-choice",
      question: "The day after Thursday is _____.",
      options: ["Wednesday", "Friday", "Saturday", "Sunday"],
      correctAnswer: "Friday",
      explanation: "Friday comes after Thursday.",
      difficulty: 1,
      tags: ["days", "a1"]
    },
    {
      id: "a1-v11-e3",
      type: "fill-blank",
      question: "The weekend days are Saturday and _____.",
      options: ["Sunday", "Monday", "Friday", "Tuesday"],
      correctAnswer: "Sunday",
      explanation: "Saturday and Sunday are the weekend.",
      difficulty: 1,
      tags: ["days", "a1"]
    },
    {
      id: "a1-v11-e4",
      type: "multiple-choice",
      question: "The day before Friday is _____.",
      options: ["Saturday", "Thursday", "Wednesday", "Sunday"],
      correctAnswer: "Thursday",
      explanation: "Thursday comes before Friday.",
      difficulty: 1,
      tags: ["days", "a1"]
    },
    {
      id: "a1-v11-e5",
      type: "multiple-choice",
      question: "_____ is in the middle of the work week.",
      options: ["Monday", "Wednesday", "Friday", "Sunday"],
      correctAnswer: "Wednesday",
      explanation: "Wednesday is the middle of the work week.",
      difficulty: 1,
      tags: ["days", "a1"]
    },
    {
      id: "a1-v11-e6",
      type: "fill-blank",
      question: "Today is Monday. Tomorrow is _____.",
      options: ["Tuesday", "Sunday", "Wednesday", "Saturday"],
      correctAnswer: "Tuesday",
      explanation: "Tuesday comes after Monday.",
      difficulty: 1,
      tags: ["days", "a1"]
    },
  ],

  // a1-vocab-12: Months of the Year
  "a1-vocab-12": [
    {
      id: "a1-v12-e1",
      type: "multiple-choice",
      question: "The first month of the year is _____.",
      options: ["December", "January", "February", "March"],
      correctAnswer: "January",
      explanation: "January is the first month.",
      difficulty: 1,
      tags: ["months", "a1"]
    },
    {
      id: "a1-v12-e2",
      type: "multiple-choice",
      question: "The last month of the year is _____.",
      options: ["November", "October", "December", "January"],
      correctAnswer: "December",
      explanation: "December is the last month.",
      difficulty: 1,
      tags: ["months", "a1"]
    },
    {
      id: "a1-v12-e3",
      type: "fill-blank",
      question: "February has _____ days in most years.",
      options: ["28", "30", "31", "29"],
      correctAnswer: "28",
      explanation: "February has 28 days (29 in leap years).",
      difficulty: 1,
      tags: ["months", "a1"]
    },
    {
      id: "a1-v12-e4",
      type: "multiple-choice",
      question: "Christmas is in _____.",
      options: ["January", "July", "December", "April"],
      correctAnswer: "December",
      explanation: "Christmas is celebrated in December.",
      difficulty: 1,
      tags: ["months", "a1"]
    },
    {
      id: "a1-v12-e5",
      type: "multiple-choice",
      question: "Spring begins in _____.",
      options: ["December", "March", "August", "November"],
      correctAnswer: "March",
      explanation: "Spring typically starts in March.",
      difficulty: 1,
      tags: ["months", "a1"]
    },
    {
      id: "a1-v12-e6",
      type: "fill-blank",
      question: "The month after May is _____.",
      options: ["June", "April", "July", "August"],
      correctAnswer: "June",
      explanation: "June comes after May.",
      difficulty: 1,
      tags: ["months", "a1"]
    },
  ],

  // a1-vocab-13: Basic Weather
  "a1-vocab-13": [
    {
      id: "a1-v13-e1",
      type: "multiple-choice",
      question: "When the sun is shining, it is _____.",
      options: ["rainy", "cloudy", "sunny", "windy"],
      correctAnswer: "sunny",
      explanation: "Sunny means the sun is shining.",
      difficulty: 1,
      tags: ["weather", "a1"]
    },
    {
      id: "a1-v13-e2",
      type: "multiple-choice",
      question: "Take an umbrella when it is _____.",
      options: ["sunny", "rainy", "hot", "cold"],
      correctAnswer: "rainy",
      explanation: "An umbrella protects you from rain.",
      difficulty: 1,
      tags: ["weather", "a1"]
    },
    {
      id: "a1-v13-e3",
      type: "fill-blank",
      question: "When it's _____, wear a jacket.",
      options: ["cold", "hot", "sunny", "warm"],
      correctAnswer: "cold",
      explanation: "A jacket keeps you warm when it's cold.",
      difficulty: 1,
      tags: ["weather", "a1"]
    },
    {
      id: "a1-v13-e4",
      type: "multiple-choice",
      question: "In summer, the weather is usually _____.",
      options: ["cold", "hot", "snowy", "freezing"],
      correctAnswer: "hot",
      explanation: "Summer is typically hot.",
      difficulty: 1,
      tags: ["weather", "a1"]
    },
    {
      id: "a1-v13-e5",
      type: "multiple-choice",
      question: "When the sky is gray with clouds, it is _____.",
      options: ["sunny", "cloudy", "clear", "bright"],
      correctAnswer: "cloudy",
      explanation: "Cloudy means lots of clouds in the sky.",
      difficulty: 1,
      tags: ["weather", "a1"]
    },
    {
      id: "a1-v13-e6",
      type: "fill-blank",
      question: "It's very _____ today - hold onto your hat!",
      options: ["windy", "calm", "quiet", "still"],
      correctAnswer: "windy",
      explanation: "Windy means there is strong wind.",
      difficulty: 1,
      tags: ["weather", "a1"]
    },
  ],

  // a1-vocab-14: School & Classroom
  "a1-vocab-14": [
    {
      id: "a1-v14-e1",
      type: "multiple-choice",
      question: "A _____ teaches students at school.",
      options: ["doctor", "teacher", "driver", "chef"],
      correctAnswer: "teacher",
      explanation: "A teacher teaches students.",
      difficulty: 1,
      tags: ["school", "a1"]
    },
    {
      id: "a1-v14-e2",
      type: "multiple-choice",
      question: "A person who learns at school is a _____.",
      options: ["teacher", "student", "doctor", "driver"],
      correctAnswer: "student",
      explanation: "Students learn at school.",
      difficulty: 1,
      tags: ["school", "a1"]
    },
    {
      id: "a1-v14-e3",
      type: "fill-blank",
      question: "You write with a _____.",
      options: ["pencil", "book", "chair", "window"],
      correctAnswer: "pencil",
      explanation: "A pencil is used for writing.",
      difficulty: 1,
      tags: ["school", "a1"]
    },
    {
      id: "a1-v14-e4",
      type: "multiple-choice",
      question: "You read a _____ to learn new things.",
      options: ["pencil", "eraser", "book", "ruler"],
      correctAnswer: "book",
      explanation: "Books contain information for learning.",
      difficulty: 1,
      tags: ["school", "a1"]
    },
    {
      id: "a1-v14-e5",
      type: "multiple-choice",
      question: "Students have lessons in a _____.",
      options: ["bathroom", "kitchen", "classroom", "bedroom"],
      correctAnswer: "classroom",
      explanation: "A classroom is where lessons take place.",
      difficulty: 1,
      tags: ["school", "a1"]
    },
    {
      id: "a1-v14-e6",
      type: "fill-blank",
      question: "Use an _____ to remove pencil mistakes.",
      options: ["eraser", "pen", "book", "ruler"],
      correctAnswer: "eraser",
      explanation: "An eraser removes pencil marks.",
      difficulty: 1,
      tags: ["school", "a1"]
    },
  ],

  // a1-vocab-15: Basic Jobs
  "a1-vocab-15": [
    {
      id: "a1-v15-e1",
      type: "multiple-choice",
      question: "A _____ helps sick people get better.",
      options: ["teacher", "chef", "doctor", "pilot"],
      correctAnswer: "doctor",
      explanation: "Doctors treat sick people.",
      difficulty: 1,
      tags: ["jobs", "a1"]
    },
    {
      id: "a1-v15-e2",
      type: "multiple-choice",
      question: "A _____ cooks food in a restaurant.",
      options: ["doctor", "driver", "chef", "teacher"],
      correctAnswer: "chef",
      explanation: "A chef prepares food.",
      difficulty: 1,
      tags: ["jobs", "a1"]
    },
    {
      id: "a1-v15-e3",
      type: "fill-blank",
      question: "A _____ flies airplanes.",
      options: ["pilot", "driver", "captain", "doctor"],
      correctAnswer: "pilot",
      explanation: "Pilots fly airplanes.",
      difficulty: 1,
      tags: ["jobs", "a1"]
    },
    {
      id: "a1-v15-e4",
      type: "multiple-choice",
      question: "A _____ keeps order and helps people in emergencies.",
      options: ["chef", "police officer", "teacher", "pilot"],
      correctAnswer: "police officer",
      explanation: "Police officers protect people and maintain order.",
      difficulty: 1,
      tags: ["jobs", "a1"]
    },
    {
      id: "a1-v15-e5",
      type: "multiple-choice",
      question: "A _____ cares for patients in a hospital.",
      options: ["teacher", "nurse", "chef", "driver"],
      correctAnswer: "nurse",
      explanation: "Nurses care for sick patients.",
      difficulty: 1,
      tags: ["jobs", "a1"]
    },
    {
      id: "a1-v15-e6",
      type: "fill-blank",
      question: "A taxi _____ takes passengers to their destination.",
      options: ["driver", "pilot", "chef", "nurse"],
      correctAnswer: "driver",
      explanation: "Taxi drivers transport passengers.",
      difficulty: 1,
      tags: ["jobs", "a1"]
    },
  ],

  // a1-vocab-16: Basic Transportation
  "a1-vocab-16": [
    {
      id: "a1-v16-e1",
      type: "multiple-choice",
      question: "A _____ has four wheels and you drive it.",
      options: ["bicycle", "train", "car", "airplane"],
      correctAnswer: "car",
      explanation: "A car is a four-wheeled vehicle.",
      difficulty: 1,
      tags: ["transport", "a1"]
    },
    {
      id: "a1-v16-e2",
      type: "multiple-choice",
      question: "A _____ runs on rails.",
      options: ["car", "bus", "bicycle", "train"],
      correctAnswer: "train",
      explanation: "Trains travel on railway tracks.",
      difficulty: 1,
      tags: ["transport", "a1"]
    },
    {
      id: "a1-v16-e3",
      type: "fill-blank",
      question: "A _____ has two wheels and you pedal it.",
      options: ["bicycle", "car", "bus", "airplane"],
      correctAnswer: "bicycle",
      explanation: "A bicycle (bike) has two wheels.",
      difficulty: 1,
      tags: ["transport", "a1"]
    },
    {
      id: "a1-v16-e4",
      type: "multiple-choice",
      question: "An _____ flies in the sky.",
      options: ["train", "bus", "airplane", "car"],
      correctAnswer: "airplane",
      explanation: "Airplanes fly through the air.",
      difficulty: 1,
      tags: ["transport", "a1"]
    },
    {
      id: "a1-v16-e5",
      type: "multiple-choice",
      question: "A _____ is a large vehicle that carries many passengers.",
      options: ["car", "bicycle", "bus", "motorcycle"],
      correctAnswer: "bus",
      explanation: "Buses carry many people.",
      difficulty: 1,
      tags: ["transport", "a1"]
    },
    {
      id: "a1-v16-e6",
      type: "fill-blank",
      question: "Ships and boats travel on _____.",
      options: ["water", "rails", "roads", "air"],
      correctAnswer: "water",
      explanation: "Boats and ships travel on water.",
      difficulty: 1,
      tags: ["transport", "a1"]
    },
  ],

  // a1-vocab-17: Greetings & Phrases
  "a1-vocab-17": [
    {
      id: "a1-v17-e1",
      type: "multiple-choice",
      question: "When you meet someone, you say _____.",
      options: ["Goodbye", "Hello", "Sorry", "Thanks"],
      correctAnswer: "Hello",
      explanation: "Hello is a greeting when meeting someone.",
      difficulty: 1,
      tags: ["greetings", "a1"]
    },
    {
      id: "a1-v17-e2",
      type: "multiple-choice",
      question: "When you leave, you say _____.",
      options: ["Hello", "Goodbye", "Please", "Welcome"],
      correctAnswer: "Goodbye",
      explanation: "Goodbye is used when leaving.",
      difficulty: 1,
      tags: ["greetings", "a1"]
    },
    {
      id: "a1-v17-e3",
      type: "fill-blank",
      question: "_____ can you help me, please?",
      options: ["Excuse me", "Goodbye", "Thanks", "Hello"],
      correctAnswer: "Excuse me",
      explanation: "'Excuse me' is polite when asking for help.",
      difficulty: 1,
      tags: ["greetings", "a1"]
    },
    {
      id: "a1-v17-e4",
      type: "multiple-choice",
      question: "When someone helps you, you say _____.",
      options: ["Sorry", "Please", "Thank you", "Hello"],
      correctAnswer: "Thank you",
      explanation: "Thank you expresses gratitude.",
      difficulty: 1,
      tags: ["greetings", "a1"]
    },
    {
      id: "a1-v17-e5",
      type: "multiple-choice",
      question: "When you make a mistake, you say _____.",
      options: ["Thanks", "Please", "Hello", "Sorry"],
      correctAnswer: "Sorry",
      explanation: "Sorry expresses regret or apology.",
      difficulty: 1,
      tags: ["greetings", "a1"]
    },
    {
      id: "a1-v17-e6",
      type: "fill-blank",
      question: "Can I have some water, _____?",
      options: ["please", "sorry", "hello", "goodbye"],
      correctAnswer: "please",
      explanation: "'Please' makes requests polite.",
      difficulty: 1,
      tags: ["greetings", "a1"]
    },
  ],

  // a1-vocab-18: Basic Places
  "a1-vocab-18": [
    {
      id: "a1-v18-e1",
      type: "multiple-choice",
      question: "Children learn at _____.",
      options: ["hospital", "school", "restaurant", "hotel"],
      correctAnswer: "school",
      explanation: "School is where children learn.",
      difficulty: 1,
      tags: ["places", "a1"]
    },
    {
      id: "a1-v18-e2",
      type: "multiple-choice",
      question: "You buy food at a _____.",
      options: ["hospital", "park", "store", "library"],
      correctAnswer: "store",
      explanation: "Stores sell food and other items.",
      difficulty: 1,
      tags: ["places", "a1"]
    },
    {
      id: "a1-v18-e3",
      type: "fill-blank",
      question: "Sick people go to the _____.",
      options: ["hospital", "school", "restaurant", "park"],
      correctAnswer: "hospital",
      explanation: "Hospitals treat sick people.",
      difficulty: 1,
      tags: ["places", "a1"]
    },
    {
      id: "a1-v18-e4",
      type: "multiple-choice",
      question: "You eat food at a _____.",
      options: ["library", "hospital", "restaurant", "school"],
      correctAnswer: "restaurant",
      explanation: "Restaurants serve food.",
      difficulty: 1,
      tags: ["places", "a1"]
    },
    {
      id: "a1-v18-e5",
      type: "multiple-choice",
      question: "Children play outside in the _____.",
      options: ["hospital", "library", "park", "store"],
      correctAnswer: "park",
      explanation: "Parks are outdoor areas for recreation.",
      difficulty: 1,
      tags: ["places", "a1"]
    },
    {
      id: "a1-v18-e6",
      type: "fill-blank",
      question: "You borrow books from the _____.",
      options: ["library", "restaurant", "hospital", "store"],
      correctAnswer: "library",
      explanation: "Libraries lend books to people.",
      difficulty: 1,
      tags: ["places", "a1"]
    },
  ],

  // a1-vocab-19: Basic Action Verbs
  "a1-vocab-19": [
    {
      id: "a1-v19-e1",
      type: "multiple-choice",
      question: "I _____ breakfast every morning.",
      options: ["eat", "sleep", "run", "read"],
      correctAnswer: "eat",
      explanation: "We eat food like breakfast.",
      difficulty: 1,
      tags: ["verbs", "a1"]
    },
    {
      id: "a1-v19-e2",
      type: "multiple-choice",
      question: "We _____ at night.",
      options: ["run", "eat", "sleep", "walk"],
      correctAnswer: "sleep",
      explanation: "People sleep at night.",
      difficulty: 1,
      tags: ["verbs", "a1"]
    },
    {
      id: "a1-v19-e3",
      type: "fill-blank",
      question: "I _____ to school every day.",
      options: ["walk", "sleep", "eat", "drink"],
      correctAnswer: "walk",
      explanation: "Walk means to move on foot.",
      difficulty: 1,
      tags: ["verbs", "a1"]
    },
    {
      id: "a1-v19-e4",
      type: "multiple-choice",
      question: "Athletes _____ very fast.",
      options: ["sleep", "eat", "run", "sit"],
      correctAnswer: "run",
      explanation: "Athletes run quickly.",
      difficulty: 1,
      tags: ["verbs", "a1"]
    },
    {
      id: "a1-v19-e5",
      type: "multiple-choice",
      question: "I _____ books to learn new things.",
      options: ["eat", "drink", "read", "sleep"],
      correctAnswer: "read",
      explanation: "We read books to learn.",
      difficulty: 1,
      tags: ["verbs", "a1"]
    },
    {
      id: "a1-v19-e6",
      type: "fill-blank",
      question: "I _____ water when I'm thirsty.",
      options: ["drink", "eat", "read", "write"],
      correctAnswer: "drink",
      explanation: "We drink liquids like water.",
      difficulty: 1,
      tags: ["verbs", "a1"]
    },
  ],

  // a1-vocab-20: Basic Adjectives
  "a1-vocab-20": [
    {
      id: "a1-v20-e1",
      type: "multiple-choice",
      question: "An elephant is _____.",
      options: ["small", "tiny", "big", "short"],
      correctAnswer: "big",
      explanation: "Elephants are very big animals.",
      difficulty: 1,
      tags: ["adjectives", "a1"]
    },
    {
      id: "a1-v20-e2",
      type: "multiple-choice",
      question: "A mouse is _____.",
      options: ["big", "large", "small", "huge"],
      correctAnswer: "small",
      explanation: "Mice are very small animals.",
      difficulty: 1,
      tags: ["adjectives", "a1"]
    },
    {
      id: "a1-v20-e3",
      type: "fill-blank",
      question: "When I smile, I am _____.",
      options: ["happy", "sad", "angry", "tired"],
      correctAnswer: "happy",
      explanation: "We smile when we're happy.",
      difficulty: 1,
      tags: ["adjectives", "a1"]
    },
    {
      id: "a1-v20-e4",
      type: "multiple-choice",
      question: "When I cry, I am _____.",
      options: ["happy", "sad", "excited", "glad"],
      correctAnswer: "sad",
      explanation: "We often cry when we're sad.",
      difficulty: 1,
      tags: ["adjectives", "a1"]
    },
    {
      id: "a1-v20-e5",
      type: "multiple-choice",
      question: "The opposite of 'good' is _____.",
      options: ["great", "nice", "bad", "fine"],
      correctAnswer: "bad",
      explanation: "Bad is the opposite of good.",
      difficulty: 1,
      tags: ["adjectives", "a1"]
    },
    {
      id: "a1-v20-e6",
      type: "fill-blank",
      question: "Ice cream on a sunny day is _____!",
      options: ["cold", "hot", "warm", "cool"],
      correctAnswer: "cold",
      explanation: "Ice cream is cold.",
      difficulty: 1,
      tags: ["adjectives", "a1"]
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
      question: "She _____ NOT work on Saturdays.",
      options: ["do", "does", "don't", "doesn't"],
      correctAnswer: "doesn't",
      explanation: "Negative with he/she/it: doesn't + base verb.",
      difficulty: 1,
      tags: ["present-simple", "a1", "negative"]
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

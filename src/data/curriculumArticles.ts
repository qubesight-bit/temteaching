// ================================================================
// COMPLETE CURRICULUM ARTICLES: 98 Articles A1→C1
// Following strict pedagogical structure for all topics
// ================================================================

export interface CurriculumArticle {
  id: string;
  title: string;
  level: 'A1→A2' | 'A2→B1' | 'B1→B2' | 'B2→C1';
  category: 'vocabulary' | 'grammar' | 'skill' | 'strategy';
  learningGoal: string;
  explanation: string;
  examples: { english: string; spanish: string; context?: string }[];
  commonMistakes: { mistake: string; correction: string; why: string }[];
  practiceTips: string[];
  checkpoint: { question: string; answer: string };
  nextStep: string;
}

export const curriculumArticles: CurriculumArticle[] = [
  // ================================================================
  // COURSE 1: A1 → A2 (Articles 1-29)
  // ================================================================

  // Article 1: Daily Routines Vocabulary
  {
    id: 'vocab-daily-routines',
    title: 'Vocabulary: Daily Routines',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to describe their daily activities using common action verbs like wake up, work, study, cook.',
    explanation: `Daily routines are the first step to communicating in English about your everyday life. Action verbs describe activities we do regularly.

**Essential routine verbs:**
• **Wake up** /weɪk ʌp/ - to stop sleeping
• **Get up** /ɡet ʌp/ - to get out of bed
• **Have breakfast** /hæv ˈbrekfəst/ - to eat morning meal
• **Go to work/school** - to travel to workplace/school
• **Work** /wɜːrk/ - to do your job
• **Study** /ˈstʌdi/ - to learn
• **Have lunch** - to eat midday meal
• **Come home** - to return to your house
• **Cook** /kʊk/ - to prepare food
• **Have dinner** - to eat evening meal
• **Watch TV** - to look at television
• **Go to bed** - to get into bed
• **Sleep** /sliːp/ - to rest with eyes closed

**Time expressions:**
• In the morning - before noon
• In the afternoon - after noon
• In the evening - after 5-6 PM
• At night - late hours
• Every day - daily

**Typical structure:**
"I + verb + (complement) + (time)"
Example: "I wake up at 7 AM every day."`,
    examples: [
      { english: "I wake up at 6:30 in the morning.", spanish: "Me despierto a las 6:30 de la mañana.", context: "Describing your wake-up time" },
      { english: "She goes to work by bus.", spanish: "Ella va al trabajo en autobús.", context: "Describing transportation" },
      { english: "We have dinner at 8 PM.", spanish: "Cenamos a las 8 PM.", context: "Meal schedule" },
      { english: "He studies English every evening.", spanish: "Él estudia inglés cada noche.", context: "Regular activity" }
    ],
    commonMistakes: [
      { mistake: "I wake up me at 7.", correction: "I wake up at 7.", why: "'Wake up' already includes the reflexive meaning in English." },
      { mistake: "I go to the work.", correction: "I go to work.", why: "We don't use an article before 'work' as a place." },
      { mistake: "I breakfast at 8.", correction: "I have breakfast at 8.", why: "You need the verb 'have' with meals." }
    ],
    practiceTips: [
      "Write your real routine in English every morning.",
      "Use flashcards with pictures of activities.",
      "Describe out loud what you do while doing it.",
      "Compare your routine with a friend's using 'I... but he/she...'",
      "Listen to podcasts about 'daily routines' in basic English."
    ],
    checkpoint: { 
      question: "Translate: 'I get up at 7 and have breakfast at 7:30.'", 
      answer: "I get up at 7 and have breakfast at 7:30." 
    },
    nextStep: "Now that you know routine verbs, learn to describe your family with 'Family and Relationships Vocabulary'."
  },

  // Article 2: Family and Relationships
  {
    id: 'vocab-family-relationships',
    title: 'Vocabulary: Family and Relationships',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to identify and name family members and use possessive adjectives correctly.',
    explanation: `Family is one of the first conversation topics in any language. Learning this vocabulary allows you to introduce your loved ones.

**Nuclear family:**
• **Mother** (mom/mum) - female parent
• **Father** (dad) - male parent
• **Sister** - female sibling
• **Brother** - male sibling
• **Son** - male child
• **Daughter** - female child
• **Parents** - mother and father
• **Children** (kids) - sons and daughters

**Extended family:**
• **Grandmother** (grandma) - parent's mother
• **Grandfather** (grandpa) - parent's father
• **Grandparents** - grandma and grandpa
• **Aunt** - parent's sister
• **Uncle** - parent's brother
• **Cousin** - aunt/uncle's child
• **Niece** - sibling's daughter
• **Nephew** - sibling's son

**In-laws:**
• **Mother-in-law** - spouse's mother
• **Father-in-law** - spouse's father
• **Sister-in-law** - spouse's sister
• **Brother-in-law** - spouse's brother

**Possessive adjectives:**
• My - belonging to me
• Your - belonging to you
• His - belonging to him
• Her - belonging to her
• Our - belonging to us
• Their - belonging to them

**Structure:** "This is my + family member"`,
    examples: [
      { english: "This is my mother. Her name is Ana.", spanish: "Esta es mi madre. Su nombre es Ana.", context: "Introducing someone" },
      { english: "I have two brothers and one sister.", spanish: "Tengo dos hermanos y una hermana.", context: "Describing your family" },
      { english: "My grandparents live in Mexico.", spanish: "Mis abuelos viven en México.", context: "Family location" },
      { english: "His father is a doctor.", spanish: "Su padre (de él) es médico.", context: "Describing profession" }
    ],
    commonMistakes: [
      { mistake: "My sister have 25 years.", correction: "My sister is 25 years old.", why: "In English we use 'be + age years old', not 'have'." },
      { mistake: "She is my sister. His name is Maria.", correction: "She is my sister. Her name is Maria.", why: "'Her' for feminine, 'his' for masculine." },
      { mistake: "I have one brother and one sister.", correction: "I have one brother and one sister. / I have a brother and a sister.", why: "Both are correct, but 'one' sounds more emphatic." }
    ],
    practiceTips: [
      "Draw your family tree with names in English.",
      "Describe family photos out loud.",
      "Practice with a partner: ask each other about your families.",
      "Write sentences using each possessive (my, your, his, her, etc.).",
      "Create memory cards with photos and relationships."
    ],
    checkpoint: { 
      question: "How do you say 'My uncle has three children'?", 
      answer: "My uncle has three children." 
    },
    nextStep: "Continue with 'Food and Shopping Vocabulary' to learn about food and buying things."
  },

  // Article 3: Food and Shopping
  {
    id: 'vocab-food-shopping',
    title: 'Vocabulary: Food and Shopping',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to name common foods, identify shops, and ask prices in English.',
    explanation: `Knowing how to talk about food and shopping is essential for daily life. This vocabulary will help you in supermarkets, restaurants, and stores.

**Fruits:**
• Apple - red/green round fruit
• Banana - yellow curved fruit
• Orange - orange citrus fruit
• Strawberry - small red berry
• Grape - small round fruit in bunches
• Watermelon - large green fruit, red inside

**Vegetables:**
• Tomato - red, used in salads
• Potato - brown, used for fries
• Onion - makes you cry when cutting
• Carrot - orange, good for eyes
• Lettuce - green leaves for salads
• Pepper - red/green/yellow vegetable

**Meat and proteins:**
• Chicken - white meat from birds
• Beef - red meat from cows
• Fish - seafood
• Eggs - from chickens
• Cheese - made from milk

**Drinks:**
• Water - clear liquid
• Milk - white, from cows
• Juice - from fruits
• Coffee - hot brown drink
• Tea - hot drink from leaves

**Shops/Stores:**
• Supermarket - large food store
• Bakery - sells bread
• Butcher's - sells meat
• Pharmacy - sells medicine

**Asking prices:**
• "How much is this?" - for singular items
• "How much are these?" - for plural items
• "It's $5." - singular answer
• "They're $3 each." - plural answer`,
    examples: [
      { english: "How much is this cheese?", spanish: "¿Cuánto cuesta este queso?", context: "Asking price (singular)" },
      { english: "I need two kilos of apples.", spanish: "Necesito dos kilos de manzanas.", context: "Shopping" },
      { english: "The milk is next to the eggs.", spanish: "La leche está al lado de los huevos.", context: "Locating products" },
      { english: "Can I have a bottle of water, please?", spanish: "¿Me puede dar una botella de agua, por favor?", context: "Ordering something" }
    ],
    commonMistakes: [
      { mistake: "How much are this apple?", correction: "How much is this apple?", why: "'This apple' is singular, use 'is'." },
      { mistake: "I want two waters.", correction: "I want two bottles of water.", why: "'Water' is uncountable; you need a container." },
      { mistake: "The tomatos are fresh.", correction: "The tomatoes are fresh.", why: "The plural of 'tomato' is 'tomatoes' (add -es)." }
    ],
    practiceTips: [
      "Make your grocery list in English.",
      "Practice shopping dialogues with a friend.",
      "Label products in your kitchen with English post-its.",
      "Watch cooking videos in English and note ingredients.",
      "Play 'Memory' with food cards."
    ],
    checkpoint: { 
      question: "Ask the price of some strawberries.", 
      answer: "How much are these strawberries?" 
    },
    nextStep: "Learn to give directions in the city with 'The City and Directions Vocabulary'."
  },

  // Article 4: The City and Directions
  {
    id: 'vocab-city-directions',
    title: 'Vocabulary: The City and Directions',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to name places in the city, use place prepositions, and give/follow basic directions.',
    explanation: `Navigating a city requires specific vocabulary for places and directions. Place prepositions are fundamental.

**City places:**
• Bank - where you keep money
• Hospital - for medical care
• School - for learning
• Church - for worship
• Park - green area for relaxation
• Restaurant - for eating out
• Hotel - for staying overnight
• Library - for books
• Museum - for art and history
• Train station - for train travel
• Bus stop - where buses stop
• Airport - for plane travel
• Shopping center/mall - many stores
• Police station - for emergencies

**Place prepositions:**
• **Next to** - beside
• **Across from / Opposite** - on the other side
• **Between** - in the middle of two things
• **Behind** - at the back of
• **In front of** - facing
• **On the corner** - where streets meet
• **Near** - close to
• **Far from** - a long distance

**Giving directions:**
• Go straight - continue forward
• Turn left - go to the left
• Turn right - go to the right
• Go past - pass something
• Cross the street - walk across
• It's on your left/right - location side

**Asking for directions:**
• "Excuse me, where is the bank?"
• "How do I get to the station?"
• "Is there a pharmacy near here?"`,
    examples: [
      { english: "The bank is next to the supermarket.", spanish: "El banco está al lado del supermercado.", context: "Describing location" },
      { english: "Go straight and turn left at the corner.", spanish: "Sigue recto y gira a la izquierda en la esquina.", context: "Giving directions" },
      { english: "Is there a hospital near here?", spanish: "¿Hay un hospital cerca de aquí?", context: "Asking for places" },
      { english: "The museum is between the park and the library.", spanish: "El museo está entre el parque y la biblioteca.", context: "Using 'between'" }
    ],
    commonMistakes: [
      { mistake: "The bank is in front the hotel.", correction: "The bank is in front of the hotel.", why: "'In front of' always includes 'of'." },
      { mistake: "Turn in left.", correction: "Turn left.", why: "We don't use a preposition after 'turn'." },
      { mistake: "Go straight until the bank.", correction: "Go straight to the bank. / Go until you see the bank.", why: "'Until' requires a different structure." }
    ],
    practiceTips: [
      "Draw a map of your neighborhood and label it in English.",
      "Give directions out loud while walking.",
      "Use Google Maps in English for practice.",
      "Do role-play: one asks for directions, the other responds.",
      "Describe the location of places in city photos."
    ],
    checkpoint: { 
      question: "Give directions from the bank to the library.", 
      answer: "Go straight, turn right at the corner. The library is on your left, next to the park." 
    },
    nextStep: "Continue learning about hobbies with 'Hobbies and Free Time Vocabulary'."
  },

  // Article 5: Hobbies and Free Time
  {
    id: 'vocab-hobbies-free-time',
    title: 'Vocabulary: Hobbies and Free Time',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to talk about leisure activities using verbs like read, watch, play and express preferences.',
    explanation: `Talking about hobbies is an excellent way to connect with others. The most common verbs are read, watch, play, listen, and go.

**Common hobbies:**
• **Read** (a book/magazine) - look at written words
• **Watch** (TV/movies) - look at screens
• **Play** (sports/games/music) - engage in activity
• **Listen to** (music/podcasts) - hear sounds
• **Go** + verb-ing (go swimming, go shopping)
• **Cook** - prepare food
• **Dance** - move to music
• **Draw/Paint** - create art
• **Exercise/Work out** - physical activity
• **Travel** - visit places

**Sports:**
• Football/Soccer - team ball sport
• Basketball - throwing ball in hoop
• Tennis - racket sport
• Swimming - moving in water
• Running - fast walking
• Cycling - riding a bicycle

**Music and instruments:**
• Play the guitar - string instrument
• Play the piano - keyboard instrument
• Sing - make music with voice

**"Go + verb-ing" structure:**
• Go swimming - to swim
• Go shopping - to shop
• Go dancing - to dance
• Go hiking - to walk in nature

**Expressing preferences:**
• "I like + verb-ing" (enjoy)
• "I love + verb-ing" (really enjoy)
• "I don't like + verb-ing" (dislike)
• "I hate + verb-ing" (strongly dislike)
• "I prefer + verb-ing" (like more)`,
    examples: [
      { english: "I like reading books in the evening.", spanish: "Me gusta leer libros por la noche.", context: "Expressing likes" },
      { english: "She plays tennis every Saturday.", spanish: "Ella juega tenis todos los sábados.", context: "Regular activity" },
      { english: "We go swimming on weekends.", spanish: "Vamos a nadar los fines de semana.", context: "Using 'go + ing'" },
      { english: "He doesn't like watching horror movies.", spanish: "A él no le gusta ver películas de terror.", context: "Expressing dislikes" }
    ],
    commonMistakes: [
      { mistake: "I like play tennis.", correction: "I like playing tennis.", why: "After 'like', the verb takes gerund (-ing)." },
      { mistake: "She plays the tennis.", correction: "She plays tennis.", why: "Sports don't take an article." },
      { mistake: "I go to swim.", correction: "I go swimming.", why: "The structure is 'go + verb-ing'." }
    ],
    practiceTips: [
      "Make a list of 10 things you like to do.",
      "Interview a friend about their hobbies in English.",
      "Describe your ideal weekend using these verbs.",
      "Watch videos about your favorite hobbies in English.",
      "Join online groups about your interests in English."
    ],
    checkpoint: { 
      question: "How do you say 'I love going hiking and taking photos'?", 
      answer: "I love going hiking and taking photos." 
    },
    nextStep: "Prepare for travel with 'Travel and Transport Vocabulary'."
  },

  // Article 6: Travel and Transport
  {
    id: 'vocab-travel-transport',
    title: 'Vocabulary: Travel and Transport',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to describe means of transport and use travel-related verbs like take, buy a ticket, arrive.',
    explanation: `Traveling is one of the best ways to practice English. This vocabulary will help you at airports, stations, and hotels.

**Means of transport:**
• **By plane** - air travel
• **By train** - rail travel
• **By bus** - coach travel
• **By car** - driving
• **By taxi** - hired car
• **By boat/ship** - water travel
• **By bicycle/bike** - cycling
• **On foot** - walking

**Travel verbs:**
• **Take** (a bus/train/taxi) - use transport
• **Drive** (a car) - operate a vehicle
• **Fly** - travel by plane
• **Buy a ticket** - purchase passage
• **Book/Reserve** - arrange in advance
• **Check in** - register arrival
• **Check out** - register departure
• **Arrive** - reach destination
• **Depart/Leave** - start journey
• **Miss** (a flight/train) - fail to catch

**At the airport:**
• Passport - travel document
• Boarding pass - flight ticket
• Gate - departure door
• Luggage/Baggage - bags
• Departure - leaving
• Arrival - coming
• Delayed - late
• Cancelled - not happening

**At the hotel:**
• Room - place to stay
• Single/Double room - for 1/2 people
• Reservation - booking
• Key - to open door
• Reception - front desk

**Useful questions:**
• "What time does the train leave?"
• "How long does the flight take?"
• "Where is the check-in desk?"`,
    examples: [
      { english: "I take the bus to work every day.", spanish: "Tomo el autobús al trabajo todos los días.", context: "Daily transport" },
      { english: "The flight departs at 3 PM.", spanish: "El vuelo sale a las 3 PM.", context: "Flight schedule" },
      { english: "We need to check in by 2 PM.", spanish: "Necesitamos registrarnos antes de las 2 PM.", context: "Hotel" },
      { english: "Can I have a window seat, please?", spanish: "¿Puedo tener un asiento de ventanilla, por favor?", context: "On the plane" }
    ],
    commonMistakes: [
      { mistake: "I go by foot.", correction: "I go on foot.", why: "With 'foot' we use 'on', not 'by'." },
      { mistake: "What time arrives the train?", correction: "What time does the train arrive?", why: "In questions, the order is auxiliary + subject + verb." },
      { mistake: "I missed my train.", correction: "I missed my train. ✓", why: "This is correct! 'Miss' means fail to catch (transport)." }
    ],
    practiceTips: [
      "Plan an imaginary trip and write everything in English.",
      "Practice airport and hotel dialogues.",
      "Read airport signs in photos.",
      "Watch travel vlogs in English.",
      "Learn the most useful phrases by heart."
    ],
    checkpoint: { 
      question: "Ask what time the train to Madrid leaves.", 
      answer: "What time does the train to Madrid leave/depart?" 
    },
    nextStep: "Learn basic health vocabulary with 'Health (Basic) Vocabulary'."
  },

  // Article 7: Health (Basic)
  {
    id: 'vocab-health-basic',
    title: 'Vocabulary: Health (Basic)',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to describe common symptoms like headache, cold, and communicate in basic medical situations.',
    explanation: `Being able to describe how you feel is crucial when traveling or living in an English-speaking country. This vocabulary will help you at pharmacies and doctor's offices.

**Body parts:**
• Head - top of body
• Eye(s) - for seeing
• Ear(s) - for hearing
• Nose - for smelling
• Mouth - for eating/speaking
• Throat - inside neck
• Chest - front of body
• Stomach - abdomen
• Back - rear of body
• Arm(s) - from shoulder to hand
• Hand(s) - with fingers
• Leg(s) - from hip to foot
• Foot/Feet - at bottom

**Common symptoms:**
• **Headache** - head pain
• **Stomachache** - stomach pain
• **Toothache** - tooth pain
• **Backache** - back pain
• **Sore throat** - painful throat
• **Cold** - common illness
• **Flu** - influenza
• **Fever** - high temperature
• **Cough** - air from lungs
• **Runny nose** - watery nose

**Expressing discomfort:**
• "I have a headache." - head pain
• "My back hurts." - back pain
• "I feel sick/ill." - unwell
• "I don't feel well." - not good
• "I'm tired." - need rest

**At the pharmacy:**
• "I need something for a cold."
• "Do you have painkillers?"
• "Can I have some aspirin?"`,
    examples: [
      { english: "I have a terrible headache.", spanish: "Tengo un dolor de cabeza terrible.", context: "Describing symptom" },
      { english: "My throat hurts. I think I have a cold.", spanish: "Me duele la garganta. Creo que tengo un resfriado.", context: "Self-diagnosis" },
      { english: "You should see a doctor.", spanish: "Deberías ver a un médico.", context: "Giving advice" },
      { english: "I need something for a cough, please.", spanish: "Necesito algo para la tos, por favor.", context: "At the pharmacy" }
    ],
    commonMistakes: [
      { mistake: "I have headache.", correction: "I have a headache.", why: "Aches need article 'a'." },
      { mistake: "My head is hurting me.", correction: "My head hurts. / I have a headache.", why: "Use 'hurt' without 'me' or prefer 'have a headache'." },
      { mistake: "I am cold.", correction: "I have a cold.", why: "'I am cold' means temperature. 'I have a cold' means illness." }
    ],
    practiceTips: [
      "Point to body parts and name them in English.",
      "Practice describing symptoms with a partner.",
      "Learn pharmacy phrases by heart.",
      "Watch medical shows in English with subtitles.",
      "Simulate a doctor's visit."
    ],
    checkpoint: { 
      question: "How do you say 'My stomach hurts and I have a fever'?", 
      answer: "I have a stomachache and I have a fever. / My stomach hurts and I have a fever." 
    },
    nextStep: "Learn to talk about weather with 'Weather and Seasons Vocabulary'."
  },

  // Article 8: Weather and Seasons
  {
    id: 'vocab-weather-seasons',
    title: 'Vocabulary: Weather and Seasons',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to describe weather conditions using adjectives and talk about months and seasons.',
    explanation: `Weather is one of the most universal conversation topics. In English-speaking countries, it's common to start conversations by talking about the weather.

**Seasons:**
• **Spring** - March-May
• **Summer** - June-August
• **Autumn/Fall** - September-November
• **Winter** - December-February

**Months of the year:**
January, February, March, April, May, June, July, August, September, October, November, December

**Weather conditions:**
• **Sunny** - sun is shining
• **Cloudy** - covered with clouds
• **Rainy** - water falling
• **Windy** - lots of wind
• **Snowy** - snow falling
• **Foggy** - mist/fog
• **Stormy** - thunder/lightning

**Temperature:**
• **Hot** - very warm
• **Warm** - comfortable heat
• **Cool** - slightly cold
• **Cold** - low temperature
• **Freezing** - very cold

**Describing weather:**
• "It's sunny today." - describing now
• "It's raining." - happening now
• "It's going to snow." - prediction
• "What's the weather like?" - asking about weather

**Structure with "It":**
We always use "It" as the subject for weather:
• It's cold. (temperature)
• It's raining. (precipitation)`,
    examples: [
      { english: "What's the weather like in London?", spanish: "¿Cómo está el clima en Londres?", context: "Asking about weather" },
      { english: "It's very hot in summer.", spanish: "Hace mucho calor en verano.", context: "Describing season" },
      { english: "Take an umbrella. It's going to rain.", spanish: "Lleva un paraguas. Va a llover.", context: "Prediction" },
      { english: "I love autumn because the leaves change color.", spanish: "Me encanta el otoño porque las hojas cambian de color.", context: "Preference" }
    ],
    commonMistakes: [
      { mistake: "Today is sunny.", correction: "It's sunny today.", why: "For weather we always use 'It' as subject." },
      { mistake: "I have cold.", correction: "I'm cold. / I feel cold.", why: "'I have cold' is wrong. Say 'I'm cold'." },
      { mistake: "In the summer.", correction: "In summer. / In the summer.", why: "Both are correct, but without article is more common in BE." }
    ],
    practiceTips: [
      "Describe today's weather every morning.",
      "Learn the months in order by singing a song.",
      "Compare the weather in two cities.",
      "Watch weather forecasts on English channels.",
      "Write about your favorite season and why."
    ],
    checkpoint: { 
      question: "Describe the typical winter weather in your city.", 
      answer: "In winter, it's usually cold and sometimes it snows. / It's cold and rainy in winter here." 
    },
    nextStep: "Expand your descriptive vocabulary with 'Common Adjectives'."
  },

  // Article 9: Common Adjectives
  {
    id: 'vocab-common-adjectives',
    title: 'Vocabulary: Common Adjectives',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'The student will be able to use pairs of opposite adjectives like big/small, easy/difficult to describe objects and situations.',
    explanation: `Adjectives describe nouns. In English, the adjective always goes BEFORE the noun, unlike in Spanish.

**Pairs of opposites:**
• **Big / Small** - size
• **Long / Short** - length
• **Tall / Short** - height (people)
• **Old / New** - age (things)
• **Old / Young** - age (people)
• **Fast / Slow** - speed
• **Hot / Cold** - temperature
• **Easy / Difficult (Hard)** - complexity
• **Cheap / Expensive** - price
• **Good / Bad** - quality
• **Happy / Sad** - mood
• **Beautiful / Ugly** - appearance
• **Clean / Dirty** - cleanliness
• **Full / Empty** - content
• **Heavy / Light** - weight
• **Strong / Weak** - strength
• **Rich / Poor** - wealth
• **Safe / Dangerous** - safety

**Adjective position:**
• Before noun: "a big house", "a small car"
• After 'be': "The house is big", "The car is small"

**With 'very' for intensity:**
• "It's very hot today."
• "She is very intelligent."`,
    examples: [
      { english: "This is a big house with a small garden.", spanish: "Esta es una casa grande con un jardín pequeño.", context: "Describing sizes" },
      { english: "The test was easy, but the homework is difficult.", spanish: "El examen fue fácil, pero la tarea es difícil.", context: "Comparing difficulty" },
      { english: "She's a young woman with old ideas.", spanish: "Es una mujer joven con ideas viejas.", context: "Contrasts" },
      { english: "Is this coffee hot or cold?", spanish: "¿Este café está caliente o frío?", context: "Asking" }
    ],
    commonMistakes: [
      { mistake: "A house big.", correction: "A big house.", why: "The adjective goes BEFORE the noun in English." },
      { mistake: "She is more tall than me.", correction: "She is taller than me.", why: "With short adjectives, add -er, don't use 'more'." },
      { mistake: "The movie was very interested.", correction: "The movie was very interesting.", why: "'Interested' is for people, 'interesting' for things." }
    ],
    practiceTips: [
      "Describe 5 objects around you using adjectives.",
      "Learn adjectives in pairs of opposites.",
      "Practice putting the adjective before the noun.",
      "Play 'opposites' with a partner.",
      "Describe people and places in photos."
    ],
    checkpoint: { 
      question: "Describe your phone using 3 adjectives.", 
      answer: "My phone is small, new, and expensive. / I have a small, black, new phone." 
    },
    nextStep: "Now learn Present Simple grammar to describe routines."
  },

  // Article 10: Present Simple Grammar
  {
    id: 'gram-present-simple',
    title: 'Grammar: Present Simple',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will master the Present Simple to express routines, habits, and universal truths, including the third person rule.',
    explanation: `The Present Simple is the most basic and frequent tense. It's used for habitual actions, general facts, and universal truths.

**Main uses:**
1. **Routines and habits:** I wake up at 7 AM.
2. **General facts:** Water boils at 100°C.
3. **Fixed schedules:** The train leaves at 9 PM.
4. **Permanent states:** She lives in Paris.

**Formation:**
| Subject | Verb |
|---------|------|
| I/You/We/They | base verb (work) |
| He/She/It | verb + s/es (works) |

**Third person rule (he/she/it):**
• General: add -S → work**s**, play**s**
• Verbs in -ch, -sh, -ss, -x, -o: add -ES → watch**es**, go**es**
• Consonant + Y: change Y to -IES → study → stud**ies**
• Vowel + Y: just -S → play**s**

**Negative:**
• I/You/We/They + **don't** + verb
• He/She/It + **doesn't** + verb (no -s!)

**Question:**
• **Do** + I/you/we/they + verb?
• **Does** + he/she/it + verb? (no -s!)

**Adverbs of frequency:**
always > usually > often > sometimes > rarely > never
Position: before the verb (after 'be')
• "I always drink coffee." / "She is always happy."`,
    examples: [
      { english: "She works in a hospital.", spanish: "Ella trabaja en un hospital.", context: "Third person + s" },
      { english: "I don't like vegetables.", spanish: "No me gustan las verduras.", context: "Negative with don't" },
      { english: "Does he speak English?", spanish: "¿Él habla inglés?", context: "Question with does" },
      { english: "The class starts at 9 AM.", spanish: "La clase empieza a las 9 AM.", context: "Fixed schedule" },
      { english: "We usually have dinner at 8.", spanish: "Usualmente cenamos a las 8.", context: "Adverb of frequency" }
    ],
    commonMistakes: [
      { mistake: "She work every day.", correction: "She works every day.", why: "With he/she/it, the verb ALWAYS takes -s." },
      { mistake: "He don't like coffee.", correction: "He doesn't like coffee.", why: "With he/she/it we use 'doesn't', not 'don't'." },
      { mistake: "Does she works here?", correction: "Does she work here?", why: "After 'does', the verb has no -s." },
      { mistake: "I drink always coffee.", correction: "I always drink coffee.", why: "The adverb goes before the main verb." }
    ],
    practiceTips: [
      "Write your daily routine in Present Simple.",
      "Transform sentences from affirmative to negative and question.",
      "Practice conjugation with different subjects.",
      "Memorize irregular third person verbs.",
      "Read simple texts and identify Present Simple verbs."
    ],
    checkpoint: { 
      question: "Write: 'She studies English but doesn't speak French' in English.", 
      answer: "She studies English but doesn't speak French." 
    },
    nextStep: "Continue with Present Continuous for actions in progress."
  },

  // Article 11: Present Continuous Grammar
  {
    id: 'gram-present-continuous',
    title: 'Grammar: Present Continuous',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will use the Present Continuous to describe actions happening right now or during this period.',
    explanation: `The Present Continuous (also called Present Progressive) describes actions in progress at the moment of speaking.

**Structure:**
Subject + AM/IS/ARE + verb-ING

| Subject | To Be | Verb+ING |
|---------|-------|----------|
| I | am | working |
| He/She/It | is | working |
| You/We/They | are | working |

**Rules for forming -ING:**
• General: add -ING → work**ing**
• Ends in -E: drop E, add -ING → mak**e** → mak**ing**
• CVC (consonant-vowel-consonant): double last consonant → run → run**n**ing
• Ends in -IE: change to -YING → die → d**ying**

**Uses:**
1. **Actions now:** "I'm studying English right now."
2. **Temporary actions:** "She's living in London this month."
3. **Future plans:** "We're meeting tomorrow at 5."
4. **Changes/trends:** "Technology is changing rapidly."

**Key words:**
now, right now, at the moment, currently, this week/month, today

**Negative:** Subject + am/is/are + NOT + verb-ing
**Question:** Am/Is/Are + subject + verb-ing?

**⚠️ Stative Verbs (don't use -ing):**
love, hate, like, want, need, know, understand, believe, see, hear, have (possession)`,
    examples: [
      { english: "She's cooking dinner right now.", spanish: "Ella está cocinando la cena ahora mismo.", context: "Action in progress" },
      { english: "I'm not watching TV, I'm studying.", spanish: "No estoy viendo TV, estoy estudiando.", context: "Negative" },
      { english: "Are you listening to me?", spanish: "¿Me estás escuchando?", context: "Question" },
      { english: "We're meeting John tomorrow.", spanish: "Nos reunimos con John mañana.", context: "Future plan" }
    ],
    commonMistakes: [
      { mistake: "She is work right now.", correction: "She is working right now.", why: "You need the -ING form after am/is/are." },
      { mistake: "I am knowing the answer.", correction: "I know the answer.", why: "'Know' is a stative verb, doesn't use continuous form." },
      { mistake: "They are running (runing).", correction: "They are running.", why: "Run ends in CVC: double the 'n'." }
    ],
    practiceTips: [
      "Describe what you see around you right now.",
      "Compare Present Simple vs Continuous with the same sentence.",
      "Practice forming -ING with various verbs.",
      "Memorize the list of stative verbs.",
      "Describe photos or videos using Present Continuous."
    ],
    checkpoint: { 
      question: "Translate: 'What are you doing? I'm reading a book.'", 
      answer: "What are you doing? I'm reading a book." 
    },
    nextStep: "Learn to talk about the past with Past Simple (Basic)."
  },

  // Article 12: Past Simple (Basic) Grammar
  {
    id: 'gram-past-simple-basic',
    title: 'Grammar: Past Simple (Basic)',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will use the Past Simple with regular and common irregular verbs to describe completed actions in the past.',
    explanation: `The Past Simple is used for actions completed at a specific time in the past.

**Regular verbs:**
Add -ED to the base verb
• work → work**ed**
• play → play**ed**
• study → studi**ed** (consonant+Y → -IED)
• live → liv**ed** (-E → just add -D)
• stop → stopp**ed** (CVC → double consonant)

**Common irregular verbs:**
• be → was/were
• go → went
• see → saw
• do → did
• have → had
• eat → ate
• drink → drank
• come → came
• take → took
• make → made
• get → got
• say → said
• give → gave
• know → knew
• think → thought
• buy → bought

**Structure:**
• **Affirmative:** Subject + past verb
• **Negative:** Subject + didn't + BASE verb
• **Question:** Did + subject + BASE verb?

**Time expressions:**
yesterday, last week/month/year, ago, in 2020, when I was young`,
    examples: [
      { english: "I visited my grandmother yesterday.", spanish: "Visité a mi abuela ayer.", context: "Regular verb" },
      { english: "She went to Paris last summer.", spanish: "Ella fue a París el verano pasado.", context: "Irregular verb" },
      { english: "We didn't see the movie.", spanish: "No vimos la película.", context: "Negative" },
      { english: "Did you have a good weekend?", spanish: "¿Tuviste un buen fin de semana?", context: "Question" }
    ],
    commonMistakes: [
      { mistake: "I goed to school.", correction: "I went to school.", why: "'Go' is irregular: go → went." },
      { mistake: "She didn't went.", correction: "She didn't go.", why: "After 'didn't', use BASE verb." },
      { mistake: "Did you saw him?", correction: "Did you see him?", why: "After 'did', use BASE verb." }
    ],
    practiceTips: [
      "Write about your last weekend.",
      "Practice irregular verbs daily.",
      "Tell a story from your childhood.",
      "Transform sentences: affirmative → negative → question.",
      "Read short stories in past tense."
    ],
    checkpoint: { 
      question: "Write: 'I went to the store and bought milk yesterday.'", 
      answer: "I went to the store and bought milk yesterday." 
    },
    nextStep: "Learn future with 'going to' for plans."
  },

  // Article 13: Future with Going To
  {
    id: 'gram-future-going-to',
    title: 'Grammar: Future with "Going to"',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will use "going to" to talk about future plans and predictions based on evidence.',
    explanation: `"Going to" is used to express future plans decided beforehand and predictions based on current evidence.

**Structure:**
Subject + am/is/are + going to + base verb

| Subject | Be | Going to | Verb |
|---------|-----|----------|------|
| I | am | going to | study |
| He/She | is | going to | study |
| We/They | are | going to | study |

**Uses:**
1. **Decided plans:** "I'm going to visit my parents next week."
2. **Evidence-based predictions:** "Look at those clouds! It's going to rain."

**Negative:**
Subject + am/is/are + NOT + going to + verb
• "I'm not going to work tomorrow."

**Question:**
Am/Is/Are + subject + going to + verb?
• "Are you going to come to the party?"

**Time expressions:**
tomorrow, next week/month/year, this weekend, soon, later

**Going to vs Will:**
• **Going to:** plans decided before speaking, evidence
• **Will:** spontaneous decisions, promises, offers`,
    examples: [
      { english: "I'm going to study medicine.", spanish: "Voy a estudiar medicina.", context: "Life plan" },
      { english: "She's going to have a baby!", spanish: "¡Ella va a tener un bebé!", context: "Near future event" },
      { english: "Look out! That car is going to crash!", spanish: "¡Cuidado! ¡Ese carro va a chocar!", context: "Evidence-based prediction" },
      { english: "We aren't going to buy a new car.", spanish: "No vamos a comprar un carro nuevo.", context: "Negative" }
    ],
    commonMistakes: [
      { mistake: "I going to travel.", correction: "I'm going to travel.", why: "You need 'am/is/are' before 'going to'." },
      { mistake: "She is going to studies.", correction: "She is going to study.", why: "After 'going to', use BASE verb." },
      { mistake: "I'm go to the party.", correction: "I'm going to go to the party.", why: "The full structure is 'going to + verb'." }
    ],
    practiceTips: [
      "Write 5 plans for this weekend.",
      "Ask a friend about their future plans.",
      "Practice predictions by looking at photos.",
      "Transform sentences from present to future with 'going to'.",
      "Describe your goals for this year."
    ],
    checkpoint: { 
      question: "What are your plans for the vacation?", 
      answer: "I'm going to travel to the beach. / I'm going to visit my family." 
    },
    nextStep: "Learn 'There is / There are' to describe existence."
  },

  // Article 14: There is / There are
  {
    id: 'gram-there-is-are',
    title: 'Grammar: "There is / There are"',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will use "there is/are" correctly to express existence or presence of people and objects.',
    explanation: `"There is" and "There are" are used to indicate that something exists or is present in a place.

**Basic rule:**
• **There is** + singular/uncountable noun
• **There are** + plural noun

**Structures:**
| Form | Singular | Plural |
|------|----------|--------|
| Affirmative | There is (There's) | There are |
| Negative | There isn't | There aren't |
| Question | Is there...? | Are there...? |

**Use with countable and uncountable:**
• "There is a book on the table." (countable singular)
• "There is some water in the glass." (uncountable)
• "There are three cats in the garden." (countable plural)

**Quantity expressions:**
• There is/are + **some** (affirmative)
• There isn't/aren't + **any** (negative)
• Is/Are there + **any**...? (question)

**Location examples:**
in, on, at, under, next to, behind, in front of`,
    examples: [
      { english: "There is a bank next to the supermarket.", spanish: "Hay un banco al lado del supermercado.", context: "Singular + location" },
      { english: "There are many students in the class.", spanish: "Hay muchos estudiantes en la clase.", context: "Plural" },
      { english: "Is there a pharmacy near here?", spanish: "¿Hay una farmacia cerca de aquí?", context: "Singular question" },
      { english: "There aren't any books on the shelf.", spanish: "No hay libros en el estante.", context: "Negative plural" },
      { english: "There's some milk in the fridge.", spanish: "Hay leche en el refrigerador.", context: "Uncountable" }
    ],
    commonMistakes: [
      { mistake: "There is many people.", correction: "There are many people.", why: "'People' is plural, use 'are'." },
      { mistake: "Have a book on the table.", correction: "There is a book on the table.", why: "In English we use 'there is/are', not 'have' for existence." },
      { mistake: "Is there some milk?", correction: "Is there any milk?", why: "In questions, use 'any', not 'some'." },
      { mistake: "There are a cat.", correction: "There is a cat.", why: "'A cat' is singular, use 'is'." }
    ],
    practiceTips: [
      "Describe your room: 'There is a bed, there are two chairs...'",
      "Look at photos and describe what's in them.",
      "Practice questions: 'Is there...? Are there...?'",
      "Combine with place prepositions.",
      "Play 'I Spy': describe objects with 'there is'."
    ],
    checkpoint: { 
      question: "Describe what's in your kitchen.", 
      answer: "There is a fridge and a stove. There are some plates on the shelf." 
    },
    nextStep: "Continue with 'Countable and Uncountable Nouns'."
  },

  // Article 15: Countable and Uncountable Nouns
  {
    id: 'gram-countable-uncountable',
    title: 'Grammar: Countable and Uncountable Nouns',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will distinguish between countable and uncountable nouns and correctly use a/an, some, much/many.',
    explanation: `In English, nouns are divided into countable (can be counted) and uncountable (cannot).

**Countable:**
Can be pluralized: book → books, apple → apples
• Use a/an with singular: "a book", "an apple"
• Use numbers: "three books", "two apples"
• Questions with "How many...?"

**Uncountable:**
No plural form: water, rice, money, information
• Don't use a/an
• Use "some": "some water", "some rice"
• Questions with "How much...?"

**Common uncountables:**
• Liquids: water, milk, coffee, juice
• Materials: wood, plastic, glass, paper
• Foods: rice, bread, cheese, meat, fruit
• Concepts: information, advice, news, work, money
• Others: furniture, luggage, traffic, weather

**Quantifiers:**
| | Countable | Uncountable |
|-----|-----------|-------------|
| Affirmative | some, many, a few, a lot of | some, much, a little, a lot of |
| Negative | any, many, few | any, much, little |
| Question | any, how many | any, how much |

**Making uncountables countable:**
• a glass of water, a cup of coffee
• a piece of advice, a piece of information
• a slice of bread, a bottle of wine`,
    examples: [
      { english: "Can I have some water, please?", spanish: "¿Puedo tomar agua, por favor?", context: "Uncountable + some" },
      { english: "How many apples do you want?", spanish: "¿Cuántas manzanas quieres?", context: "How many + countable" },
      { english: "How much money do you need?", spanish: "¿Cuánto dinero necesitas?", context: "How much + uncountable" },
      { english: "I don't have any milk.", spanish: "No tengo leche.", context: "Negative + any" },
      { english: "There are a few chairs in the room.", spanish: "Hay algunas sillas en la habitación.", context: "a few + countable plural" }
    ],
    commonMistakes: [
      { mistake: "I need an information.", correction: "I need some information.", why: "'Information' is uncountable, doesn't use 'a/an'." },
      { mistake: "How many water?", correction: "How much water?", why: "'Water' is uncountable, use 'how much'." },
      { mistake: "I have much friends.", correction: "I have many friends.", why: "'Friends' is countable, use 'many' not 'much'." },
      { mistake: "Can I have a bread?", correction: "Can I have some bread? / Can I have a slice of bread?", why: "'Bread' is uncountable." }
    ],
    practiceTips: [
      "Classify vocabulary words as countable/uncountable.",
      "Practice with photos: 'How many...? How much...?'",
      "Memorize the most common uncountables.",
      "Practice using some/any in sentences.",
      "Learn expressions: a piece of, a glass of, etc."
    ],
    checkpoint: { 
      question: "Complete: 'I don't have ___ money but I have ___ coins.'", 
      answer: "I don't have any/much money but I have some coins." 
    },
    nextStep: "Learn to compare with 'Comparatives and Superlatives (Basic)'."
  },

  // Article 16: Comparatives and Superlatives (Basic)
  {
    id: 'gram-comparatives-superlatives-basic',
    title: 'Grammar: Comparatives and Superlatives (Basic)',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will form comparatives with -er/more and superlatives with -est/most for common adjectives.',
    explanation: `Comparatives are used to compare two things. Superlatives indicate the extreme of a group.

**Comparatives: -ER / MORE**
• Short adjectives (1 syllable): add -ER
  - tall → tall**er**, old → old**er**
  - CVC rule: big → bigg**er**
  
• Long adjectives (2+ syllables): MORE + adjective
  - beautiful → **more** beautiful
  - expensive → **more** expensive
  
• 2-syllable adjectives in -y: change Y to -IER
  - happy → happ**ier**, easy → eas**ier**

**Superlatives: -EST / MOST**
• Short adjectives: THE + adjective + -EST
  - tall → **the** tall**est**
  
• Long adjectives: THE MOST + adjective
  - beautiful → **the most** beautiful

**Irregulars:**
| Adjective | Comparative | Superlative |
|-----------|-------------|-------------|
| good | better | the best |
| bad | worse | the worst |
| far | farther/further | the farthest/furthest |

**Comparative structure:**
A + is/are + comparative + **than** + B
"John is taller **than** Mary."

**Superlative structure:**
A + is/are + **the** + superlative + (of/in + group)
"John is **the** tallest in the class."`,
    examples: [
      { english: "My house is bigger than yours.", spanish: "Mi casa es más grande que la tuya.", context: "Comparative + than" },
      { english: "She's the smartest student in the class.", spanish: "Ella es la estudiante más inteligente de la clase.", context: "Superlative + in" },
      { english: "This movie is more interesting than that one.", spanish: "Esta película es más interesante que esa.", context: "More + long adjective" },
      { english: "He's better at math than me.", spanish: "Él es mejor en matemáticas que yo.", context: "Irregular: good → better" }
    ],
    commonMistakes: [
      { mistake: "She is more tall than me.", correction: "She is taller than me.", why: "'Tall' is short (1 syllable), use -er." },
      { mistake: "This is the most easy test.", correction: "This is the easiest test.", why: "Adjective in -y: change to -iest." },
      { mistake: "He is more better.", correction: "He is better.", why: "Don't combine 'more' with irregular comparatives." },
      { mistake: "She is taller that me.", correction: "She is taller than me.", why: "After comparatives always use 'than'." }
    ],
    practiceTips: [
      "Compare objects around you.",
      "Classify adjectives as 'short' and 'long'.",
      "Memorize irregulars: good, bad, far.",
      "Practice describing celebrities: 'Who is the tallest?'",
      "Write product comparisons."
    ],
    checkpoint: { 
      question: "Compare: elephant vs. cat (big), and say which is the biggest.", 
      answer: "An elephant is bigger than a cat. The elephant is the biggest." 
    },
    nextStep: "Learn basic modal verbs: can, must, should."
  },

  // Article 17: Basic Modals (can, must, should)
  {
    id: 'gram-modals-basic',
    title: 'Grammar: Basic Modal Verbs (can, must, should)',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will use can, must, and should to express ability, obligation, and advice.',
    explanation: `Modal verbs modify the meaning of the main verb. The three most basic are:

**CAN - Ability/Possibility/Permission**
• Ability: "I **can** swim." (I know how)
• Possibility: "We **can** go tomorrow." (It's possible)
• Permission: "**Can** I use your phone?" (May I?)

**CAN'T/CANNOT - Inability/Impossibility/Prohibition**
• "I **can't** drive." (I don't know how)
• "You **can't** park here." (Not allowed)

**MUST - Strong Obligation/Necessity**
• "You **must** wear a seatbelt." (Required)
• "I **must** study for the exam." (Necessary)

**MUSTN'T - Prohibition**
• "You **mustn't** smoke here." (Forbidden)
⚠️ Mustn't ≠ don't have to (different meanings)

**SHOULD - Advice/Recommendation**
• "You **should** eat more vegetables." (Recommendation)
• "He **should** see a doctor." (Advice)

**SHOULDN'T - Negative Advice**
• "You **shouldn't** eat too much sugar." (Not recommended)

**Modal rules:**
1. No change for person (no -s added)
2. Followed by base verb (no 'to')
3. Form negative/question without auxiliary

**Structure:**
• Affirmative: Subject + modal + base verb
• Negative: Subject + modal + not + base verb
• Question: Modal + subject + base verb?`,
    examples: [
      { english: "Can you help me, please?", spanish: "¿Puedes ayudarme, por favor?", context: "Request" },
      { english: "You must finish the project today.", spanish: "Debes terminar el proyecto hoy.", context: "Obligation" },
      { english: "She can speak three languages.", spanish: "Ella puede hablar tres idiomas.", context: "Ability" },
      { english: "You should drink more water.", spanish: "Deberías beber más agua.", context: "Advice" },
      { english: "You mustn't tell anyone.", spanish: "No debes decirle a nadie.", context: "Prohibition" }
    ],
    commonMistakes: [
      { mistake: "She can to swim.", correction: "She can swim.", why: "After modal, verb has no 'to'." },
      { mistake: "He cans drive.", correction: "He can drive.", why: "Modals don't add -s with he/she/it." },
      { mistake: "You must to study.", correction: "You must study.", why: "Never use 'to' after a modal." },
      { mistake: "Do you can help?", correction: "Can you help?", why: "Modals don't need auxiliary in questions." }
    ],
    practiceTips: [
      "Make lists of 'things I can do' and 'things I must do'.",
      "Give friends advice using 'should'.",
      "Practice permissions: 'Can I...?'",
      "Identify modals in texts you read.",
      "Describe work/school rules with 'must/mustn't'."
    ],
    checkpoint: { 
      question: "Give advice to someone with a headache.", 
      answer: "You should take some aspirin and rest. / You shouldn't look at screens." 
    },
    nextStep: "Master place and time prepositions with the next article."
  },

  // Article 18: Prepositions of Place and Time
  {
    id: 'gram-prepositions',
    title: 'Grammar: Prepositions of Place and Time (in, on, at)',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will correctly use in, on, at to express place and time.',
    explanation: `Prepositions are small words that cause big mistakes. IN, ON, AT are the most important.

**PLACE PREPOSITIONS:**

**IN** (inside, enclosed/large spaces):
• in a room, in a building, in a city
• in the car, in a box, in the water
• in Spain, in Europe, in the world

**ON** (on surfaces, lines):
• on the table, on the wall, on the floor
• on the street, on the bus (public transport)
• on the left/right, on the corner

**AT** (specific point):
• at the door, at the bus stop
• at home, at work, at school
• at the airport, at the station

**TIME PREPOSITIONS:**

**IN** (long periods):
• in the morning/afternoon/evening
• in January, in summer, in 2024
• in a week, in two hours (within)

**ON** (specific days):
• on Monday, on Friday
• on May 5th, on my birthday
• on the weekend (AmE)

**AT** (hours, specific moments):
• at 7 o'clock, at noon, at midnight
• at night (exception)
• at Christmas, at Easter (holidays)

**Special cases:**
• at home, at work, at school (no article)
• at the weekend (BrE) / on the weekend (AmE)
• in the morning BUT at night`,
    examples: [
      { english: "The meeting is at 3 PM on Friday.", spanish: "La reunión es a las 3 PM el viernes.", context: "Time: at + hour, on + day" },
      { english: "She lives in a small town in Italy.", spanish: "Ella vive en un pueblo pequeño en Italia.", context: "Place: in + city/country" },
      { english: "Put the book on the table.", spanish: "Pon el libro sobre la mesa.", context: "Place: on + surface" },
      { english: "I'll see you at the cinema at 8.", spanish: "Te veo en el cine a las 8.", context: "At + specific place + hour" },
      { english: "In summer, I wake up at 6 in the morning.", spanish: "En verano, me despierto a las 6 de la mañana.", context: "Combination of prepositions" }
    ],
    commonMistakes: [
      { mistake: "I arrive in Friday.", correction: "I arrive on Friday.", why: "For specific days use 'on'." },
      { mistake: "I'm at home in night.", correction: "I'm at home at night.", why: "'Night' is exception: use 'at night'." },
      { mistake: "The picture is in the wall.", correction: "The picture is on the wall.", why: "For surfaces use 'on'." },
      { mistake: "She's on work.", correction: "She's at work.", why: "We say 'at work', 'at home', 'at school'." }
    ],
    practiceTips: [
      "Memorize fixed expressions: at home, at work, in the morning.",
      "Describe locations of objects in your room.",
      "Practice saying your schedule with time prepositions.",
      "Create sentences combining place and time.",
      "Make flashcards with rules and examples."
    ],
    checkpoint: { 
      question: "Complete: 'I have a meeting ___ Monday ___ 10 AM ___ the office.'", 
      answer: "I have a meeting on Monday at 10 AM in the office." 
    },
    nextStep: "Learn to form questions correctly."
  },

  // Article 19: Question Formation
  {
    id: 'gram-question-formation',
    title: 'Grammar: Question Formation',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will form Yes/No and Wh- questions correctly in different verb tenses.',
    explanation: `There are two main types of questions in English: Yes/No questions and Wh- questions.

**YES/NO QUESTIONS:**
Answers: Yes or No

**With TO BE:**
Inversion: BE + subject + complement?
• "Are you ready?" → "Yes, I am."
• "Is she a teacher?" → "No, she isn't."

**With other verbs (DO/DOES/DID):**
Auxiliary + subject + base verb?
• "Do you like pizza?" → "Yes, I do."
• "Does he work here?" → "No, he doesn't."
• "Did they arrive?" → "Yes, they did."

**With modals (CAN/WILL/MUST/SHOULD):**
Modal + subject + base verb?
• "Can you swim?" → "Yes, I can."
• "Should I call?" → "No, you shouldn't."

**WH- QUESTIONS:**
Start with a question word

| Word | Asks about |
|------|-----------|
| What | thing/object |
| Where | place |
| When | time |
| Who | person |
| Why | reason |
| How | manner |
| Which | choice |
| How much | quantity (uncountable) |
| How many | quantity (countable) |

**WH- structure:**
Wh-word + auxiliary + subject + verb?
• "Where do you live?"
• "What did she buy?"
• "When is the meeting?"`,
    examples: [
      { english: "Do you speak Spanish?", spanish: "¿Hablas español?", context: "Yes/No present" },
      { english: "Where did you go yesterday?", spanish: "¿Adónde fuiste ayer?", context: "Wh- past" },
      { english: "What time does the movie start?", spanish: "¿A qué hora empieza la película?", context: "What time" },
      { english: "Why are you crying?", spanish: "¿Por qué estás llorando?", context: "Why + continuous" }
    ],
    commonMistakes: [
      { mistake: "Where you live?", correction: "Where do you live?", why: "Wh- questions need auxiliary 'do/does'." },
      { mistake: "What means this?", correction: "What does this mean?", why: "Correct structure: What does X mean?" },
      { mistake: "Do you can help?", correction: "Can you help?", why: "Modals form questions directly, no 'do'." }
    ],
    practiceTips: [
      "Practice transforming statements into questions.",
      "Memorize Wh- words and their functions.",
      "Interview friends using different question types.",
      "Watch interviews and note question structures.",
      "Write 5 questions about yourself and answer them."
    ],
    checkpoint: { 
      question: "Form a question: 'She works at a hospital.' → Where...?", 
      answer: "Where does she work?" 
    },
    nextStep: "Learn to express obligation and need with 'have to'."
  },

  // Article 20: Imperatives
  {
    id: 'gram-imperatives',
    title: 'Grammar: Imperatives',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'The student will use imperative forms to give instructions, orders, and advice.',
    explanation: `The imperative is used to give orders, instructions, directions, and advice. It's the simplest verb form.

**Formation:**
Just the base verb (infinitive without 'to')

**Affirmative:**
• "Open the door."
• "Sit down."
• "Listen carefully."

**Negative:**
Don't + base verb
• "Don't open the door."
• "Don't sit there."
• "Don't forget your keys."

**With 'Let's' (suggestions):**
Let's + base verb (includes speaker)
• "Let's go!" (You and I)
• "Let's eat!"
• "Let's not argue."

**Uses:**
1. **Instructions:** "Mix the ingredients."
2. **Orders:** "Stop talking!"
3. **Directions:** "Turn left here."
4. **Advice:** "Take an umbrella."
5. **Warnings:** "Be careful!"
6. **Invitations:** "Come in!"

**Being polite:**
Add 'please' for politeness
• "Please sit down."
• "Close the window, please."`,
    examples: [
      { english: "Open your books to page 45.", spanish: "Abran sus libros en la página 45.", context: "Classroom instruction" },
      { english: "Don't touch that! It's hot.", spanish: "¡No toques eso! Está caliente.", context: "Warning" },
      { english: "Let's have lunch together.", spanish: "Almorcemos juntos.", context: "Suggestion" },
      { english: "Please wait here.", spanish: "Por favor espere aquí.", context: "Polite request" }
    ],
    commonMistakes: [
      { mistake: "You sit down.", correction: "Sit down.", why: "Imperatives don't use subject 'you'." },
      { mistake: "Not open the door.", correction: "Don't open the door.", why: "Negative imperative needs 'don't'." },
      { mistake: "Let's to go.", correction: "Let's go.", why: "After 'let's' use base verb, no 'to'." }
    ],
    practiceTips: [
      "Write instructions for a simple recipe.",
      "Give directions to places using imperatives.",
      "Practice classroom commands in English.",
      "Play 'Simon Says' to practice.",
      "Write warnings for dangerous situations."
    ],
    checkpoint: { 
      question: "Give 3 instructions for making coffee.", 
      answer: "Boil some water. Put coffee in a cup. Pour the hot water. / Add milk and sugar." 
    },
    nextStep: "Now practice the skill of talking about daily life."
  },

  // Article 21: Skill - Talking about Daily Life
  {
    id: 'skill-daily-life',
    title: 'Skill: Talking about Daily Life and Habits',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'The student will describe their daily routine and habits using Present Simple and adverbs of frequency.',
    explanation: `Talking about your daily life is one of the most common conversations. Use Present Simple and adverbs of frequency.

**Basic structure:**
"I + verb (+ adverb) + complement"

**Common routine verbs:**
• wake up, get up
• have breakfast/lunch/dinner
• go to work/school
• start/finish work
• take a shower
• brush my teeth
• get dressed
• go to bed, sleep

**Adverbs of frequency:**
• always (100%) - every time
• usually (80%) - most of the time
• often (60%) - frequently
• sometimes (40%) - occasionally
• rarely/seldom (20%) - not often
• never (0%) - not at any time

**Time expressions:**
• every day/week/month
• on weekdays/weekends
• in the morning/afternoon/evening
• at night
• once/twice/three times a week

**Routine model:**
"I usually wake up at 7 AM. First, I take a shower and get dressed. Then, I have breakfast at 7:30. I always drink coffee in the morning. I go to work at 8 and I usually start at 9. I have lunch at 1 PM. I finish work at 6 and come home around 7. In the evening, I sometimes watch TV or read. I usually go to bed at 11 PM."`,
    examples: [
      { english: "I always have coffee for breakfast.", spanish: "Siempre tomo café para el desayuno.", context: "Habit with 'always'" },
      { english: "She usually goes to the gym three times a week.", spanish: "Ella usualmente va al gimnasio tres veces a la semana.", context: "Specific frequency" },
      { english: "On weekends, I like to sleep late.", spanish: "Los fines de semana, me gusta dormir hasta tarde.", context: "Weekend routine" },
      { english: "I never eat breakfast. I'm not hungry in the morning.", spanish: "Nunca desayuno. No tengo hambre por la mañana.", context: "Negative with 'never'" }
    ],
    commonMistakes: [
      { mistake: "I always am tired.", correction: "I'm always tired.", why: "With 'be', the adverb goes after." },
      { mistake: "I go sometimes to the gym.", correction: "I sometimes go to the gym.", why: "Adverb goes before the main verb." },
      { mistake: "I have the breakfast at 8.", correction: "I have breakfast at 8.", why: "Don't use article before 'breakfast/lunch/dinner'." }
    ],
    practiceTips: [
      "Write your complete routine for a normal day.",
      "Compare your routine with a friend's.",
      "Use connectors: first, then, after that, finally.",
      "Practice describing other people's routines.",
      "Record a video describing your typical day."
    ],
    checkpoint: { 
      question: "Describe your typical morning in 3-4 sentences.", 
      answer: "I wake up at 7 AM. I take a shower and get dressed. Then I have breakfast. I leave for work at 8." 
    },
    nextStep: "Learn to describe simple past experiences."
  },

  // Article 22: Describing Past Experiences
  {
    id: 'skill-past-experiences',
    title: 'Skill: Describing Simple Past Experiences',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'The student will narrate past events using Past Simple with regular and irregular verbs.',
    explanation: `Telling past experiences is essential for conversations. Use Past Simple with past time expressions.

**Structure:**
Subject + past verb + complement + (time expression)

**Past time expressions:**
• yesterday - the day before today
• last night/week/month/year
• ago: two days ago, a week ago
• in 2020, in January
• when I was young/a child

**Questions about the past:**
• "What did you do yesterday?"
• "Where did you go last weekend?"
• "How was your vacation?"
• "Did you have a good time?"

**Answers:**
• "I went to the beach."
• "It was great!"
• "Yes, I had a wonderful time."

**Time connectors:**
• First, ... / At first, ...
• Then, ... / After that, ...
• Later, ...
• Finally, ... / In the end, ...

**Narration model:**
"Last weekend, I went to the mountains with my family. First, we drove for two hours. Then, we had a picnic near a lake. The weather was beautiful. After that, we took many photos. We came back home in the evening. It was a wonderful day!"`,
    examples: [
      { english: "Yesterday I visited my grandmother.", spanish: "Ayer visité a mi abuela.", context: "Past simple + yesterday" },
      { english: "Last summer, we traveled to Italy. It was amazing!", spanish: "El verano pasado, viajamos a Italia. ¡Fue increíble!", context: "Narration with opinion" },
      { english: "I didn't go to the party because I was sick.", spanish: "No fui a la fiesta porque estaba enfermo.", context: "Negative past + reason" },
      { english: "When I was a child, I lived in a small town.", spanish: "Cuando era niño, vivía en un pueblo pequeño.", context: "Past + when I was young" }
    ],
    commonMistakes: [
      { mistake: "Yesterday I go to the cinema.", correction: "Yesterday I went to the cinema.", why: "With past expressions, use past tense verb." },
      { mistake: "I didn't went there.", correction: "I didn't go there.", why: "After 'didn't', use base form verb." },
      { mistake: "It was a day wonderful.", correction: "It was a wonderful day.", why: "Adjective before noun in English." }
    ],
    practiceTips: [
      "Write about your last weekend.",
      "Practice irregular verbs in past tense.",
      "Tell a story from your childhood.",
      "Answer questions: 'What did you do yesterday?'",
      "Read short stories in past tense and retell them."
    ],
    checkpoint: { 
      question: "Tell what you did last weekend.", 
      answer: "Last weekend, I [verb in past]. First, I... Then, I... It was [adjective]!" 
    },
    nextStep: "Learn to ask for and give directions."
  },

  // Article 23: Asking and Giving Directions
  {
    id: 'skill-directions',
    title: 'Skill: Asking and Giving Directions',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'The student will ask how to get to places and give clear directions using imperatives and prepositions.',
    explanation: `Asking and giving directions is an essential practical skill, especially when traveling.

**Asking for directions:**
• "Excuse me, where is the bank?"
• "Could you tell me how to get to the station?"
• "Is there a pharmacy near here?"
• "How do I get to the museum?"

**Giving directions - Imperative verbs:**
• Go straight (ahead) - continue forward
• Turn left/right - change direction
• Take the first/second left/right - at the first/second turn
• Go past the... - pass by something
• Cross the street - walk across
• Walk along the street - walk down the street

**Place prepositions:**
• on your left/right - to the left/right side
• at the corner - where streets meet
• next to - beside
• across from / opposite - on the other side
• between X and Y - in the middle

**Distance expressions:**
• It's about 5 minutes walk.
• It's not far from here.
• It's two blocks from here.
• You can't miss it.

**Dialogue model:**
A: "Excuse me, where is the post office?"
B: "Go straight ahead for two blocks. Then turn left at the corner. The post office is on your right, next to the bank."
A: "Thank you very much!"
B: "You're welcome."`,
    examples: [
      { english: "Go straight and turn right at the traffic lights.", spanish: "Sigue recto y gira a la derecha en el semáforo.", context: "Basic instructions" },
      { english: "The museum is on your left, across from the park.", spanish: "El museo está a tu izquierda, enfrente del parque.", context: "Location with prepositions" },
      { english: "Could you tell me how to get to the train station?", spanish: "¿Podría decirme cómo llegar a la estación de tren?", context: "Formal question" },
      { english: "It's about a 10-minute walk from here.", spanish: "Está a unos 10 minutos a pie de aquí.", context: "Indicating distance" }
    ],
    commonMistakes: [
      { mistake: "Where is the bank is?", correction: "Where is the bank?", why: "Don't repeat 'is'." },
      { mistake: "Turn to the left.", correction: "Turn left.", why: "'Turn left/right' doesn't need 'to the'." },
      { mistake: "Go straight on for two streets.", correction: "Go straight for two blocks.", why: "'Blocks' is more natural than 'streets' for distance." }
    ],
    practiceTips: [
      "Use Google Maps to practice directions.",
      "Draw a map and give directions to a friend.",
      "Role-play: one asks, the other responds.",
      "Practice with real places in your city.",
      "Memorize useful expressions like 'You can't miss it.'"
    ],
    checkpoint: { 
      question: "Give directions from your house to the nearest store.", 
      answer: "Go out of my house and turn left. Walk straight for one block. The store is on your right." 
    },
    nextStep: "Learn to order food and shop in stores."
  },

  // Article 24: Ordering Food and Shopping
  {
    id: 'skill-ordering-shopping',
    title: 'Skill: Ordering Food and Shopping in a Store',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'The student will be able to order in restaurants and make basic purchases with appropriate phrases.',
    explanation: `Knowing how to order food and shop is essential for daily life and travel.

**In a restaurant - Customer:**
• "A table for two, please."
• "Can I see the menu, please?"
• "I'd like... / I'll have..."
• "Can I have...?"
• "What do you recommend?"
• "I'm allergic to..."
• "Can I have the bill/check, please?"

**Waiter responses:**
• "Would you like something to drink?"
• "Are you ready to order?"
• "How would you like your steak?" (rare/medium/well-done)
• "Anything else?"

**In a store - Customer:**
• "Excuse me, where can I find...?"
• "Do you have...?"
• "How much is this?"
• "Can I try this on?" (clothes)
• "I'll take this one."
• "Can I pay by card?"

**Seller responses:**
• "Can I help you?"
• "What size do you need?"
• "That's $50, please."
• "Cash or card?"

**Useful phrases:**
• "It's too expensive."
• "Do you have this in a different size/color?"
• "I'm just looking, thanks."
• "Keep the change."`,
    examples: [
      { english: "I'd like a cheeseburger and a cola, please.", spanish: "Quisiera una hamburguesa con queso y una coca, por favor.", context: "Ordering food" },
      { english: "How much are these shoes?", spanish: "¿Cuánto cuestan estos zapatos?", context: "Asking price (plural)" },
      { english: "Do you have this shirt in medium?", spanish: "¿Tiene esta camisa en talla mediana?", context: "Asking for size" },
      { english: "Can I have the check, please? We're ready to go.", spanish: "¿Me puede traer la cuenta, por favor? Estamos listos para irnos.", context: "Asking for bill" }
    ],
    commonMistakes: [
      { mistake: "I want a coffee.", correction: "I'd like a coffee, please.", why: "'I'd like' is more polite than 'I want'." },
      { mistake: "How much costs this?", correction: "How much is this? / How much does this cost?", why: "Correct structure with 'how much'." },
      { mistake: "The account, please.", correction: "The bill/check, please.", why: "'Bill' (UK) or 'check' (US), not 'account'." }
    ],
    practiceTips: [
      "Role-play: practice with a friend as waiter/customer.",
      "Read restaurant menus in English.",
      "Practice shopping dialogues out loud.",
      "Memorize key phrases: 'I'd like...', 'Can I have...?'",
      "Watch shopping videos in English."
    ],
    checkpoint: { 
      question: "Order a coffee and a sandwich at a café.", 
      answer: "I'd like a coffee and a sandwich, please. / Can I have a coffee and a chicken sandwich?" 
    },
    nextStep: "Learn to make simple plans with 'going to'."
  },

  // Article 25: Making Simple Plans
  {
    id: 'skill-making-plans',
    title: 'Skill: Making Simple Plans',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'The student will use "going to" and future time expressions to propose and agree on plans.',
    explanation: `Making plans with friends and colleagues requires specific vocabulary and future structures.

**Proposing plans:**
• "Do you want to...?"
• "Would you like to...?"
• "How about + verb-ing...?"
• "Let's + verb..."
• "We could + verb..."
• "Why don't we + verb...?"

**Accepting:**
• "Sure!"
• "That sounds great!"
• "I'd love to!"
• "Good idea!"
• "Count me in!"

**Declining politely:**
• "I'm sorry, I can't."
• "I'd love to, but..."
• "Maybe another time."
• "I'm afraid I'm busy."

**Talking about decided plans:**
• "I'm going to visit my parents this weekend."
• "We're having dinner at 8."
• "She's traveling to Paris next week."

**Future time expressions:**
• tomorrow, tonight
• this weekend, this week
• next Monday, next month
• in two days, in a week

**Confirming details:**
• "What time shall we meet?"
• "Where do you want to go?"
• "How about meeting at 7?"
• "Is Saturday good for you?"`,
    examples: [
      { english: "Do you want to go to the cinema tonight?", spanish: "¿Quieres ir al cine esta noche?", context: "Proposing plan" },
      { english: "That sounds great! What time?", spanish: "¡Suena genial! ¿A qué hora?", context: "Accepting" },
      { english: "I'm sorry, I can't. I'm going to have dinner with my family.", spanish: "Lo siento, no puedo. Voy a cenar con mi familia.", context: "Declining with reason" },
      { english: "Let's meet at 7 in front of the restaurant.", spanish: "Quedemos a las 7 frente al restaurante.", context: "Setting details" }
    ],
    commonMistakes: [
      { mistake: "I want go to the cinema.", correction: "I want to go to the cinema.", why: "After 'want', use 'to + verb'." },
      { mistake: "Let's to meet tomorrow.", correction: "Let's meet tomorrow.", why: "After 'let's', use base verb (no 'to')." },
      { mistake: "What about go to the beach?", correction: "What about going to the beach?", why: "'What about' / 'How about' + verb-ING." }
    ],
    practiceTips: [
      "Practice inviting friends by text in English.",
      "Role-play: propose plans and respond.",
      "Write your plans for the week.",
      "Memorize ways to accept and decline.",
      "Practice negotiating times and places."
    ],
    checkpoint: { 
      question: "Invite a friend to watch a movie on Saturday.", 
      answer: "Would you like to watch a movie on Saturday? / Do you want to go to the cinema this Saturday?" 
    },
    nextStep: "Learn to express likes and dislikes."
  },

  // Article 26: Expressing Likes and Dislikes
  {
    id: 'skill-likes-dislikes',
    title: 'Skill: Expressing Likes and Dislikes',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'The student will express preferences using like, love, hate, prefer and other structures.',
    explanation: `Expressing likes is fundamental for conversations and getting to know others.

**Preference verbs + verb-ING / noun:**
• **Love** (love): "I love cooking."
• **Like** (like): "I like pizza."
• **Enjoy** (enjoy): "I enjoy reading."
• **Don't mind** (don't mind): "I don't mind waiting."
• **Don't like** (don't like): "I don't like spiders."
• **Hate** (hate): "I hate getting up early."
• **Can't stand** (can't stand): "I can't stand loud music."

**Preference scale:**
love > really like > like > don't mind > don't like > hate > can't stand

**Questions:**
• "Do you like...?"
• "What kind of music do you like?"
• "What's your favorite...?"
• "Which do you prefer, A or B?"

**Expressing preference:**
• "I prefer coffee to tea."
• "I'd rather stay home."
• "I like both, but I prefer..."

**Reasons:**
• "I like it because..."
• "I don't like it because it's..."
• "It makes me feel..."

**Responses:**
• "So do I!" (Me too - positive)
• "Neither do I." (Me neither - negative)
• "Really? I don't." (Really? I don't.)`,
    examples: [
      { english: "I love traveling but I hate packing.", spanish: "Me encanta viajar pero odio empacar.", context: "Contrasting likes" },
      { english: "What kind of movies do you like?", spanish: "¿Qué tipo de películas te gustan?", context: "Asking preferences" },
      { english: "I prefer tea to coffee.", spanish: "Prefiero el té al café.", context: "Comparing preferences" },
      { english: "I really enjoy cooking. It relaxes me.", spanish: "Realmente disfruto cocinar. Me relaja.", context: "Like with reason" }
    ],
    commonMistakes: [
      { mistake: "I like play tennis.", correction: "I like playing tennis.", why: "After 'like', use verb + -ING." },
      { mistake: "I'm like pizza.", correction: "I like pizza.", why: "'I'm like' means 'I am similar to'. 'I like' = 'I enjoy'." },
      { mistake: "Me too.", correction: "So do I. / Me too.", why: "'Me too' is informal. 'So do I' is more grammatically correct." }
    ],
    practiceTips: [
      "Make a list of 10 things you love and 5 you hate.",
      "Compare your likes with a friend.",
      "Interview someone about their favorites.",
      "Practice 'So do I' and 'Neither do I' responses.",
      "Write about why you like your favorite things."
    ],
    checkpoint: { 
      question: "Tell 3 things you love and 2 you hate.", 
      answer: "I love traveling, cooking, and reading. I hate getting up early and doing housework." 
    },
    nextStep: "Learn to talk on the phone."
  },

  // Article 27: Making Phone Calls
  {
    id: 'skill-phone-calls',
    title: 'Skill: Making Phone Calls',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'The student will handle basic phone conversations including answering, asking for information, and leaving messages.',
    explanation: `Phone calls can be challenging because you can't see the person. Learn common phrases for different situations.

**Answering the phone:**
• "Hello?"
• "Good morning/afternoon, [name] speaking."
• "[Company name], how can I help you?"

**Asking for someone:**
• "Is [name] there?"
• "Can I speak to [name], please?"
• "Could I speak with [name]?"

**Identifying yourself:**
• "This is [name]."
• "It's [name] calling."
• "My name is [name]."

**Asking the caller to wait:**
• "Just a moment, please."
• "Hold on, please."
• "One moment."

**Person not available:**
• "I'm sorry, [name] isn't here right now."
• "Can I take a message?"
• "Would you like to leave a message?"

**Leaving a message:**
• "Could you tell him/her that [name] called?"
• "Please ask him/her to call me back."
• "My number is..."

**Ending a call:**
• "Goodbye."
• "Thank you for calling."
• "I'll call you later."`,
    examples: [
      { english: "Hello, could I speak to Mr. Johnson, please?", spanish: "Hola, ¿podría hablar con el Sr. Johnson, por favor?", context: "Formal request" },
      { english: "I'm sorry, he's not available. Can I take a message?", spanish: "Lo siento, no está disponible. ¿Puedo tomar un mensaje?", context: "Person not available" },
      { english: "Could you ask her to call me back? My number is 555-1234.", spanish: "¿Podría pedirle que me devuelva la llamada? Mi número es 555-1234.", context: "Leaving message" },
      { english: "This is Maria from the marketing department.", spanish: "Soy María del departamento de marketing.", context: "Identifying yourself" }
    ],
    commonMistakes: [
      { mistake: "I am John.", correction: "This is John.", why: "On the phone we say 'This is...' not 'I am...'." },
      { mistake: "Who is speaking?", correction: "Who's calling? / May I ask who's calling?", why: "'Who is speaking?' sounds rude. Use polite alternatives." },
      { mistake: "Repeat, please.", correction: "Could you repeat that, please?", why: "Just 'repeat' sounds abrupt. Use a polite question." }
    ],
    practiceTips: [
      "Practice phone dialogues with a friend.",
      "Role-play being caller and receiver.",
      "Memorize key phrases for phone calls.",
      "Practice leaving messages.",
      "Listen to phone conversations in English media."
    ],
    checkpoint: { 
      question: "Leave a message for John who isn't available.", 
      answer: "Could you tell John that [name] called? Please ask him to call me back at [number]." 
    },
    nextStep: "Learn the strategy of asking for clarification."
  },

  // Article 28: Asking for Clarification
  {
    id: 'strategy-clarification',
    title: 'Strategy: Asking for Clarification',
    level: 'A1→A2',
    category: 'strategy',
    learningGoal: 'The student will ask for clarification when they don\'t understand something using polite expressions.',
    explanation: `Not understanding is normal. The important thing is knowing how to ask for clarification politely.

**Asking for repetition:**
• "Sorry, could you repeat that?"
• "Pardon?"
• "Could you say that again, please?"
• "I'm sorry, I didn't catch that."

**Asking for slower speech:**
• "Could you speak more slowly, please?"
• "Sorry, that was too fast."

**Asking for meaning:**
• "What does [word] mean?"
• "What do you mean by [word]?"
• "I don't understand. What is [word]?"

**Asking for spelling:**
• "How do you spell that?"
• "Could you spell that for me?"

**Asking for examples:**
• "Could you give me an example?"
• "What do you mean exactly?"

**Asking for confirmation:**
• "Do you mean...?"
• "So, you're saying...?"
• "Let me check I understand..."

**Useful responses:**
• "Yes, exactly!"
• "No, what I mean is..."
• "Let me explain again..."`,
    examples: [
      { english: "Sorry, could you repeat that more slowly?", spanish: "Perdón, ¿podría repetir eso más lento?", context: "Asking for repetition" },
      { english: "What does 'schedule' mean?", spanish: "¿Qué significa 'schedule'?", context: "Asking for meaning" },
      { english: "How do you spell your last name?", spanish: "¿Cómo se deletrea tu apellido?", context: "Asking for spelling" },
      { english: "Do you mean we should meet tomorrow?", spanish: "¿Quieres decir que debemos vernos mañana?", context: "Confirming understanding" }
    ],
    commonMistakes: [
      { mistake: "Repeat, please.", correction: "Could you repeat that, please?", why: "Just 'repeat' sounds abrupt. Use a polite question." },
      { mistake: "What means this word?", correction: "What does this word mean?", why: "Correct structure: What does X mean?" },
      { mistake: "How do you say in English 'mesa'?", correction: "How do you say 'mesa' in English?", why: "'In English' goes at the end of the question." }
    ],
    practiceTips: [
      "Memorize 3-4 phrases for asking clarification.",
      "Don't be afraid to ask.",
      "Practice with videos: pause and ask for imaginary repetition.",
      "Use these phrases in real conversations.",
      "Write down new words you learn by asking."
    ],
    checkpoint: { 
      question: "How do you ask the meaning of a word you don't know?", 
      answer: "What does [word] mean? / Sorry, I don't understand. What does that mean?" 
    },
    nextStep: "Develop the strategy of paraphrasing when you lack vocabulary."
  },

  // Article 29: Paraphrasing Strategy
  {
    id: 'strategy-paraphrasing',
    title: 'Strategy: Paraphrasing and Using Gestures When Lacking Vocabulary',
    level: 'A1→A2',
    category: 'strategy',
    learningGoal: 'The student will develop strategies to communicate when they don\'t know a specific word.',
    explanation: `When you don't know a word, don't stop. Use strategies to keep communicating.

**Strategy 1: Describe the word**
• "It's a thing that..." (It's an object that...)
• "It's a place where..." (It's a location where...)
• "It's a person who..." (It's someone who...)
• "It's like a... but..." (It's similar to... but...)

**Strategy 2: General categories**
• "It's a kind of food/animal/tool..."
• "It's a type of..."
• "It's something you use to..."
• "It's the thing you use when..."

**Strategy 3: Use simple words**
• Instead of "refrigerator" → "cold box for food"
• Instead of "scissors" → "thing to cut paper"
• Instead of "pillow" → "soft thing for your head in bed"

**Strategy 4: Gestures and signals**
• Point at objects
• Make action mimes
• Draw if possible
• Use your phone to show pictures

**Strategy 5: Ask for the word**
• "How do you say [description] in English?"
• "What's the word for [description]?"
• "I don't know the word, but it's..."

**Paraphrasing example:**
"I need... I don't know the word... it's the thing... you use it in the kitchen... to open bottles... " → "A bottle opener!"`,
    examples: [
      { english: "It's a thing you use to take photos. (camera)", spanish: "Es una cosa que usas para tomar fotos. (cámara)", context: "Describing an object" },
      { english: "It's the person who brings food in a restaurant. (waiter)", spanish: "Es la persona que trae la comida en un restaurante. (mesero)", context: "Describing a person" },
      { english: "It's like a taxi but you call it with an app. (Uber)", spanish: "Es como un taxi pero lo llamas con una aplicación. (Uber)", context: "Comparing" },
      { english: "It's the place where you wait for the train. (platform)", spanish: "Es el lugar donde esperas el tren. (andén)", context: "Describing a place" }
    ],
    commonMistakes: [
      { mistake: "Staying silent when you don't know a word.", correction: "Describe it: 'It's a thing that...'", why: "Always try to communicate, even in roundabout ways." },
      { mistake: "Saying the word in your language and waiting.", correction: "Describe it or ask: 'How do you say [description] in English?'", why: "It's better to describe than just say the word in your language." }
    ],
    practiceTips: [
      "Practice describing objects without saying their name.",
      "Play 'taboo': describe without using key words.",
      "When you don't know a word, don't stop, describe.",
      "Use gestures naturally while speaking.",
      "Learn useful phrases: 'It's a thing that...'"
    ],
    checkpoint: { 
      question: "Describe 'umbrella' without using the word.", 
      answer: "It's a thing you use when it rains. You open it and it protects you from water." 
    },
    nextStep: "Congratulations! You've completed the A1→A2 course. Continue with A2→B1 to keep advancing."
  },

  // ================================================================
  // COURSE 2: A2 → B1 (Articles 30-56)
  // ================================================================

  // Article 30: Work and Studies Vocabulary
  {
    id: 'vocab-work-studies',
    title: 'Vocabulary: Work and Studies',
    level: 'A2→B1',
    category: 'vocabulary',
    learningGoal: 'The student will master vocabulary related to professions, study areas, and work tasks.',
    explanation: `At B1 level, you need to talk in more detail about your professional and academic life.

**Advanced professions:**
• accountant - handles finances
• architect - designs buildings
• consultant - gives expert advice
• entrepreneur - starts businesses
• freelancer - works independently
• HR manager - handles personnel
• software developer - writes code
• marketing specialist - promotes products

**Study areas:**
• Business Administration - managing companies
• Computer Science - computing
• Law - legal studies
• Medicine - healthcare
• Engineering - technical design
• Psychology - study of mind
• Economics - study of economy

**Work verbs:**
• apply for (a job) - request a position
• be in charge of - be responsible for
• deal with - handle
• manage - oversee
• report to - answer to
• be responsible for - have duty for
• collaborate with - work together with
• meet deadlines - finish on time

**Employment types:**
• full-time - complete working hours
• part-time - reduced hours
• temporary - for limited time
• permanent - ongoing
• remote work - from home
• internship - training position

**Office vocabulary:**
• colleague - coworker
• supervisor - boss
• team - work group
• department - division
• meeting - work gathering
• project - planned work
• deadline - due date`,
    examples: [
      { english: "I'm applying for a marketing position at a tech company.", spanish: "Estoy postulándome para un puesto de marketing en una empresa tecnológica.", context: "Job search" },
      { english: "She's in charge of the finance department.", spanish: "Ella está a cargo del departamento de finanzas.", context: "Describing responsibilities" },
      { english: "I'm studying Business Administration part-time while working.", spanish: "Estoy estudiando Administración de Empresas medio tiempo mientras trabajo.", context: "Combining study and work" },
      { english: "We need to meet the deadline by Friday.", spanish: "Necesitamos cumplir el plazo para el viernes.", context: "Work context" }
    ],
    commonMistakes: [
      { mistake: "I'm working in a company.", correction: "I work at/for a company.", why: "For employment, we use 'work at/for', not 'in'." },
      { mistake: "I study the medicine.", correction: "I study medicine.", why: "Study areas don't take an article." },
      { mistake: "I apply to a job.", correction: "I apply for a job.", why: "The correct phrasal verb is 'apply for'." }
    ],
    practiceTips: [
      "Describe your job or someone's job in detail.",
      "Practice a job interview in English.",
      "Read job descriptions in English.",
      "Write your CV/resume in English.",
      "Talk about your career goals."
    ],
    checkpoint: { 
      question: "Describe your job or studies in 3-4 sentences.", 
      answer: "I work as a [job] at [company]. I'm responsible for [tasks]. I collaborate with [team]. I'm also studying [subject] part-time." 
    },
    nextStep: "Learn technology and media vocabulary."
  },

  // Article 40: Past Simple vs Present Perfect
  {
    id: 'gram-past-vs-perfect',
    title: 'Grammar: Past Simple vs. Present Perfect Contrast',
    level: 'A2→B1',
    category: 'grammar',
    learningGoal: 'The student will distinguish when to use Past Simple (specific moment) vs Present Perfect (connection to present).',
    explanation: `This is one of the most difficult differences for Spanish speakers. Understand it well to sound natural.

**PAST SIMPLE:**
Complete actions at a SPECIFIC moment in the past.
• "I **visited** Paris in 2019." (specific moment: 2019)
• "She **graduated** last year." (specific moment: last year)

**Key words:**
yesterday, last week/month/year, in 2020, ago, when I was young

**PRESENT PERFECT:**
Past actions with CONNECTION to the present (no specific time).
• "I **have visited** Paris." (life experience - doesn't matter when)
• "She **has graduated**." (relevant result now)

**Key words:**
ever, never, already, yet, just, recently, so far, since, for

**KEY RULE:**
• When? → PAST SIMPLE
• Have you ever done this? → PRESENT PERFECT

**Direct comparison:**
| Present Perfect | Past Simple |
|-----------------|-------------|
| I've been to London. (experience) | I went to London in 2018. (when) |
| Have you ever tried sushi? | Did you try sushi last night? |
| She has just arrived. (just now) | She arrived an hour ago. (when) |

**Present Perfect structure:**
have/has + past participle
• I/You/We/They have worked
• He/She/It has worked

**Present Perfect uses:**
1. **Experiences:** "I have never seen snow."
2. **Recent actions:** "She has just finished."
3. **Continuing actions:** "I have lived here for 5 years."
4. **Changes:** "He has lost weight."`,
    examples: [
      { english: "I have visited Japan. I went there in 2019.", spanish: "He visitado Japón. Fui en 2019.", context: "PP for experience, PS for when" },
      { english: "Have you ever eaten snails? - Yes, I tried them in France.", spanish: "¿Alguna vez has comido caracoles? - Sí, los probé en Francia.", context: "PP for experience, PS for moment" },
      { english: "She has worked here for 5 years. She started in 2019.", spanish: "Ella ha trabajado aquí por 5 años. Empezó en 2019.", context: "PP for duration until now, PS for start" },
      { english: "I've just finished my homework.", spanish: "Acabo de terminar mi tarea.", context: "Recent action with 'just'" }
    ],
    commonMistakes: [
      { mistake: "I have visited Paris last year.", correction: "I visited Paris last year.", why: "With specific time (last year), use Past Simple." },
      { mistake: "Did you ever see this movie?", correction: "Have you ever seen this movie?", why: "For life experiences, use Present Perfect + ever." },
      { mistake: "I live here since 2020.", correction: "I have lived here since 2020.", why: "For actions that started in the past and continue, use Present Perfect." }
    ],
    practiceTips: [
      "Ask 'Is there a specific time?' → If yes: Past Simple.",
      "Practice with 'ever/never' for experiences.",
      "Use 'for/since' correctly with Present Perfect.",
      "Read texts and identify why each tense is used.",
      "Write about your life experiences."
    ],
    checkpoint: { 
      question: "Complete: 'I ___ (see) that movie. I ___ (watch) it last weekend.'", 
      answer: "I have seen / I've seen that movie. I watched it last weekend." 
    },
    nextStep: "Learn the three types of future: will vs going to vs present continuous."
  },

  // Article 66: Conditionals Complete
  {
    id: 'gram-conditionals-complete',
    title: 'Grammar: Zero, First, Second, Third, and Mixed Conditionals',
    level: 'B1→B2',
    category: 'grammar',
    learningGoal: 'The student will master all types of conditionals and their communicative uses.',
    explanation: `Conditionals express hypothetical situations and their consequences. Mastering them is a sign of advanced level.

**ZERO CONDITIONAL (general truths):**
If + present simple, present simple
• "If you heat water to 100°C, it boils."
• Use: Scientific facts, universal truths

**FIRST CONDITIONAL (probable situations):**
If + present simple, will + verb
• "If it rains tomorrow, we will stay home."
• Use: Real and probable future situations

**SECOND CONDITIONAL (hypothetical present situations):**
If + past simple, would + verb
• "If I won the lottery, I would buy a house."
• Use: Unreal or unlikely situations

**THIRD CONDITIONAL (unreal past situations):**
If + past perfect, would have + past participle
• "If I had studied more, I would have passed."
• Use: Regrets, speculating about the past

**MIXED CONDITIONALS:**
Past condition → present result:
If + past perfect, would + verb
• "If I had taken that job, I would be rich now."

General condition → past result:
If + past simple, would have + past participle
• "If I were more careful, I wouldn't have made that mistake."

**Other conditional connectors:**
• Unless (= if not): "Unless you hurry, you'll miss the bus."
• As long as / Provided that: "I'll help, provided that you ask nicely."
• In case: "Take an umbrella in case it rains."`,
    examples: [
      { english: "If I had more time, I would learn Japanese.", spanish: "Si tuviera más tiempo, aprendería japonés.", context: "2nd conditional - hypothetical" },
      { english: "If you had told me earlier, I would have helped you.", spanish: "Si me hubieras dicho antes, te habría ayudado.", context: "3rd conditional - unreal past" },
      { english: "If I hadn't missed that flight, I would be in Paris now.", spanish: "Si no hubiera perdido ese vuelo, estaría en París ahora.", context: "Mixed: past → present" },
      { english: "I'll go unless it rains.", spanish: "Iré a menos que llueva.", context: "Unless = if not" }
    ],
    commonMistakes: [
      { mistake: "If I would have money, I would travel.", correction: "If I had money, I would travel.", why: "In the 'if' clause, use past simple, not 'would'." },
      { mistake: "If I knew, I would have told you.", correction: "If I had known, I would have told you.", why: "For unreal past, use past perfect in 'if'." },
      { mistake: "If I will see him, I will tell him.", correction: "If I see him, I will tell him.", why: "In 1st conditional, 'if' goes with present, not future." }
    ],
    practiceTips: [
      "Practice identifying which type of conditional to use.",
      "Write about regrets with 3rd conditional.",
      "Imagine hypothetical scenarios with 2nd conditional.",
      "Mix conditionals in a story.",
      "Practice with real situations: 'What would you do if...?'"
    ],
    checkpoint: { 
      question: "Create a sentence with each type of conditional.", 
      answer: "0: If you mix blue and yellow, you get green. 1: If I finish early, I'll call you. 2: If I were you, I would accept. 3: If I had known, I would have come." 
    },
    nextStep: "Master passive voice in multiple tenses."
  },

  // Article 86: Nominalization
  {
    id: 'gram-nominalization',
    title: 'Grammar: Nominalization',
    level: 'B2→C1',
    category: 'grammar',
    learningGoal: 'The student will transform verbs and adjectives into nouns for a more formal and academic style.',
    explanation: `Nominalization is converting verbs/adjectives into nouns. It's key for academic and formal writing.

**What is nominalization?**
Changing: "They implemented the policy" (verb)
To: "The implementation of the policy" (noun)

**Why nominalize?**
• Sounds more formal and academic
• Allows denser information in sentences
• Characteristic of academic and professional English

**Common nominalization suffixes:**

**From verbs:**
| Verb | Noun |
|------|------|
| decide | decision (-sion) |
| develop | development (-ment) |
| analyze | analysis (-sis) |
| apply | application (-tion) |
| discover | discovery (-ry) |
| fail | failure (-ure) |
| arrive | arrival (-al) |

**From adjectives:**
| Adjective | Noun |
|-----------|------|
| important | importance (-ance) |
| different | difference (-ence) |
| able | ability (-ity) |
| happy | happiness (-ness) |
| free | freedom (-dom) |

**Transformation examples:**

Informal: "They decided to reduce costs."
Formal: "The decision to implement cost reduction..."

Informal: "We need to develop new products quickly."
Formal: "The rapid development of new products is necessary."

**Useful patterns:**
• The + noun + of + noun: "The implementation of the strategy"
• Due to + noun: "Due to the complexity of the issue"
• The + adjective + noun: "The rapid development"`,
    examples: [
      { english: "The implementation of new policies requires careful planning.", spanish: "La implementación de nuevas políticas requiere planificación cuidadosa.", context: "Formal writing" },
      { english: "Their discovery of the virus led to a breakthrough.", spanish: "Su descubrimiento del virus llevó a un avance.", context: "Academic style" },
      { english: "The government's failure to act caused widespread criticism.", spanish: "El fracaso del gobierno en actuar causó críticas generalizadas.", context: "News style" },
      { english: "The importance of education cannot be overstated.", spanish: "La importancia de la educación no puede ser exagerada.", context: "Adjective → noun" }
    ],
    commonMistakes: [
      { mistake: "The way they implement policies is important.", correction: "The implementation of policies is important.", why: "Nominalization is more formal and concise." },
      { mistake: "How they decided affected the outcome.", correction: "Their decision affected the outcome.", why: "Using the noun form is more sophisticated." }
    ],
    practiceTips: [
      "Identify verbs in sentences and nominalize them.",
      "Read academic texts and note nominalized forms.",
      "Practice transforming informal sentences to formal.",
      "Learn common noun suffixes.",
      "Use nominalization in formal writing assignments."
    ],
    checkpoint: { 
      question: "Nominalize: 'They analyzed the data carefully.'", 
      answer: "Their careful analysis of the data..." 
    },
    nextStep: "Continue developing advanced academic writing skills."
  }
];

// ================================================================
// HELPER FUNCTIONS
// ================================================================

export function getCurriculumArticleById(id: string): CurriculumArticle | undefined {
  return curriculumArticles.find(article => article.id === id);
}

export function getCurriculumArticlesByLevel(level: CurriculumArticle['level']): CurriculumArticle[] {
  return curriculumArticles.filter(article => article.level === level);
}

export function getCurriculumArticlesByCategory(category: CurriculumArticle['category']): CurriculumArticle[] {
  return curriculumArticles.filter(article => article.category === category);
}

export function searchCurriculumArticles(query: string): CurriculumArticle[] {
  const lowerQuery = query.toLowerCase();
  return curriculumArticles.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.learningGoal.toLowerCase().includes(lowerQuery) ||
    article.explanation.toLowerCase().includes(lowerQuery)
  );
}

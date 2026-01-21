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
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  completed: boolean;
  explanation: string;
  examples: { english: string; spanish: string }[];
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'reorder';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export const grammarCategories: GrammarCategory[] = [
  {
    id: "tenses",
    title: "Verb Tenses",
    description: "Master all English verb tenses",
    icon: "⏰",
    topics: [
      {
        id: "present-simple",
        title: "Present Simple",
        level: "A1",
        completed: false,
        explanation: "The Present Simple is used to describe routines, habits, general facts, and universal truths. It's formed with the base verb (without 'to'), and in third person singular (he/she/it) we add -s or -es.",
        examples: [
          { english: "I work every day.", spanish: "Trabajo todos los días." },
          { english: "She speaks English fluently.", spanish: "Ella habla inglés con fluidez." },
          { english: "The sun rises in the east.", spanish: "El sol sale por el este." },
          { english: "Do you like coffee?", spanish: "¿Te gusta el café?" },
        ],
        exercises: [
          {
            id: "ps-1",
            type: "multiple-choice",
            question: "She ___ to school every morning.",
            options: ["go", "goes", "going", "went"],
            correctAnswer: "goes",
            explanation: "With 'she' (third person singular) we use 'goes' in Present Simple."
          },
          {
            id: "ps-2",
            type: "fill-blank",
            question: "My father ___ (read) the newspaper every morning.",
            correctAnswer: "reads",
            explanation: "In third person singular we add -s to the verb."
          },
          {
            id: "ps-3",
            type: "multiple-choice",
            question: "_____ your brother work in a bank?",
            options: ["Do", "Does", "Is", "Are"],
            correctAnswer: "Does",
            explanation: "We use 'Does' for questions with third person singular."
          },
        ]
      },
      {
        id: "present-continuous",
        title: "Present Continuous",
        level: "A1",
        completed: false,
        explanation: "The Present Continuous describes actions happening right now or around this time. It's formed with 'to be' + verb with -ing.",
        examples: [
          { english: "I am studying right now.", spanish: "Estoy estudiando ahora mismo." },
          { english: "They are playing football.", spanish: "Están jugando al fútbol." },
          { english: "Is she working today?", spanish: "¿Está ella trabajando hoy?" },
        ],
        exercises: [
          {
            id: "pc-1",
            type: "multiple-choice",
            question: "Look! The children ___ in the garden.",
            options: ["play", "plays", "are playing", "played"],
            correctAnswer: "are playing",
            explanation: "'Look!' indicates an action in progress, so we use Present Continuous."
          },
        ]
      },
      {
        id: "past-simple",
        title: "Past Simple",
        level: "A2",
        completed: false,
        explanation: "The Past Simple is used for completed actions in the past. Regular verbs add -ed, while irregular verbs have special forms.",
        examples: [
          { english: "I visited Paris last year.", spanish: "Visité París el año pasado." },
          { english: "She went to the cinema yesterday.", spanish: "Ella fue al cine ayer." },
          { english: "Did you see the movie?", spanish: "¿Viste la película?" },
        ],
        exercises: [
          {
            id: "pst-1",
            type: "multiple-choice",
            question: "Yesterday I ___ my grandmother.",
            options: ["visit", "visited", "visiting", "visits"],
            correctAnswer: "visited",
            explanation: "'Yesterday' indicates past, we use Past Simple: visited."
          },
        ]
      },
      {
        id: "present-perfect",
        title: "Present Perfect",
        level: "A2",
        completed: false,
        explanation: "The Present Perfect connects the past with the present. It's used for life experiences, recent actions with 'just', and situations that started in the past and continue. It's formed with have/has + past participle.",
        examples: [
          { english: "I have visited London three times.", spanish: "He visitado Londres tres veces." },
          { english: "She has just finished her homework.", spanish: "Ella acaba de terminar su tarea." },
          { english: "We have known each other since 2010.", spanish: "Nos conocemos desde 2010." },
          { english: "Have you ever been to Japan?", spanish: "¿Alguna vez has estado en Japón?" },
        ],
        exercises: [
          {
            id: "pp-1",
            type: "multiple-choice",
            question: "I ___ never ___ sushi before.",
            options: ["have / eaten", "has / eaten", "have / eat", "did / eat"],
            correctAnswer: "have / eaten",
            explanation: "With 'I' we use 'have' and the participle 'eaten' to express experiences."
          },
          {
            id: "pp-2",
            type: "multiple-choice",
            question: "She ___ in this company for 5 years.",
            options: ["worked", "has worked", "is working", "works"],
            correctAnswer: "has worked",
            explanation: "'For 5 years' indicates a situation that started in the past and continues."
          },
        ]
      },
      {
        id: "past-continuous",
        title: "Past Continuous",
        level: "B1",
        completed: false,
        explanation: "The Past Continuous describes actions in progress at a specific moment in the past. It's formed with was/were + verb-ing.",
        examples: [
          { english: "I was sleeping when you called.", spanish: "Estaba durmiendo cuando llamaste." },
          { english: "They were watching TV at 8 PM.", spanish: "Estaban viendo la tele a las 8 PM." },
        ],
        exercises: [
          {
            id: "pcon-1",
            type: "multiple-choice",
            question: "What ___ you ___ at 9 o'clock last night?",
            options: ["were / doing", "was / doing", "did / do", "are / doing"],
            correctAnswer: "were / doing",
            explanation: "To ask about an action in progress in the past we use were + doing."
          },
        ]
      },
      {
        id: "future-will",
        title: "Future with Will",
        level: "A2",
        completed: false,
        explanation: "We use 'will' for predictions, spontaneous decisions, promises, and offers. It's formed with will + infinitive without 'to'.",
        examples: [
          { english: "I will help you with that.", spanish: "Te ayudaré con eso." },
          { english: "It will rain tomorrow.", spanish: "Lloverá mañana." },
        ],
        exercises: [
          {
            id: "fw-1",
            type: "multiple-choice",
            question: "Don't worry, I ___ you later.",
            options: ["call", "will call", "calling", "called"],
            correctAnswer: "will call",
            explanation: "We use 'will' for promises about the future."
          },
        ]
      },
      {
        id: "future-going-to",
        title: "Future with Going to",
        level: "A2",
        completed: false,
        explanation: "We use 'going to' for previously decided plans and predictions based on evidence. It's formed with am/is/are + going to + infinitive.",
        examples: [
          { english: "I am going to visit my parents next week.", spanish: "Voy a visitar a mis padres la próxima semana." },
          { english: "Look at those clouds! It's going to rain.", spanish: "¡Mira esas nubes! Va a llover." },
        ],
        exercises: [
          {
            id: "fgt-1",
            type: "multiple-choice",
            question: "She ___ a new car next month. (planned)",
            options: ["buys", "will buy", "is going to buy", "bought"],
            correctAnswer: "is going to buy",
            explanation: "For previously decided plans we use 'going to'."
          },
        ]
      },
    ]
  },
  {
    id: "modals",
    title: "Modal Verbs",
    description: "Can, could, must, should, would and more",
    icon: "🔧",
    topics: [
      {
        id: "can-could",
        title: "Can & Could",
        level: "A1",
        completed: false,
        explanation: "'Can' expresses ability, permission, and possibility in the present. 'Could' is its past form or more formal/polite version.",
        examples: [
          { english: "I can swim very well.", spanish: "Puedo nadar muy bien." },
          { english: "Could you help me, please?", spanish: "¿Podrías ayudarme, por favor?" },
        ],
        exercises: [
          {
            id: "cc-1",
            type: "multiple-choice",
            question: "___ you speak French when you were a child?",
            options: ["Can", "Could", "Must", "Should"],
            correctAnswer: "Could",
            explanation: "We use 'could' for abilities in the past."
          },
        ]
      },
      {
        id: "must-have-to",
        title: "Must & Have to",
        level: "A2",
        completed: false,
        explanation: "'Must' expresses strong obligation or deduction. 'Have to' expresses external obligation. In the negative they differ: 'mustn't' = prohibition, 'don't have to' = no necessity.",
        examples: [
          { english: "You must wear a seatbelt.", spanish: "Debes usar el cinturón de seguridad." },
          { english: "I have to work tomorrow.", spanish: "Tengo que trabajar mañana." },
          { english: "You mustn't smoke here.", spanish: "No debes fumar aquí. (prohibido)" },
          { english: "You don't have to come.", spanish: "No tienes que venir. (no es necesario)" },
        ],
        exercises: [
          {
            id: "mh-1",
            type: "multiple-choice",
            question: "You ___ touch that! It's dangerous!",
            options: ["mustn't", "don't have to", "shouldn't", "can't"],
            correctAnswer: "mustn't",
            explanation: "We use 'mustn't' for strong prohibitions."
          },
        ]
      },
      {
        id: "should-ought-to",
        title: "Should & Ought to",
        level: "A2",
        completed: false,
        explanation: "'Should' and 'ought to' express advice, recommendations, and expectations. They are interchangeable, though 'should' is more common.",
        examples: [
          { english: "You should see a doctor.", spanish: "Deberías ver a un médico." },
          { english: "He ought to apologize.", spanish: "Él debería disculparse." },
        ],
        exercises: [
          {
            id: "so-1",
            type: "multiple-choice",
            question: "You look tired. You ___ get some rest.",
            options: ["must", "should", "can", "would"],
            correctAnswer: "should",
            explanation: "We use 'should' to give advice."
          },
        ]
      },
    ]
  },
  {
    id: "conditionals",
    title: "Conditional Sentences",
    description: "If clauses: Zero, First, Second, Third",
    icon: "🔀",
    topics: [
      {
        id: "zero-conditional",
        title: "Zero Conditional",
        level: "A2",
        completed: false,
        explanation: "The Zero Conditional expresses general truths, scientific facts, and predictable results. Structure: If + present simple, present simple.",
        examples: [
          { english: "If you heat water to 100°C, it boils.", spanish: "Si calientas agua a 100°C, hierve." },
          { english: "If I drink coffee at night, I can't sleep.", spanish: "Si bebo café por la noche, no puedo dormir." },
        ],
        exercises: [
          {
            id: "zc-1",
            type: "multiple-choice",
            question: "If you ___ ice in the sun, it ___.",
            options: ["put / melts", "put / will melt", "will put / melts", "putting / melting"],
            correctAnswer: "put / melts",
            explanation: "Zero Conditional uses present simple in both parts."
          },
        ]
      },
      {
        id: "first-conditional",
        title: "First Conditional",
        level: "A2",
        completed: false,
        explanation: "The First Conditional expresses probable or possible situations in the future. Structure: If + present simple, will + infinitive.",
        examples: [
          { english: "If it rains tomorrow, I will stay home.", spanish: "Si llueve mañana, me quedaré en casa." },
          { english: "If you study hard, you will pass the exam.", spanish: "Si estudias duro, aprobarás el examen." },
        ],
        exercises: [
          {
            id: "fc-1",
            type: "multiple-choice",
            question: "If she ___ harder, she ___ the exam.",
            options: ["studies / will pass", "will study / passes", "studied / would pass", "studies / passes"],
            correctAnswer: "studies / will pass",
            explanation: "First Conditional: If + present, will + infinitive."
          },
        ]
      },
      {
        id: "second-conditional",
        title: "Second Conditional",
        level: "B1",
        completed: false,
        explanation: "The Second Conditional expresses hypothetical or improbable situations in the present/future. Structure: If + past simple, would + infinitive.",
        examples: [
          { english: "If I won the lottery, I would travel the world.", spanish: "Si ganara la lotería, viajaría por el mundo." },
          { english: "If I were you, I would apologize.", spanish: "Si yo fuera tú, me disculparía." },
        ],
        exercises: [
          {
            id: "sc-1",
            type: "multiple-choice",
            question: "If I ___ rich, I ___ a mansion.",
            options: ["am / will buy", "was / would buy", "were / would buy", "be / would buy"],
            correctAnswer: "were / would buy",
            explanation: "In Second Conditional we use 'were' for all persons with 'if'."
          },
        ]
      },
      {
        id: "third-conditional",
        title: "Third Conditional",
        level: "B2",
        completed: false,
        explanation: "The Third Conditional expresses hypothetical past situations (impossible to change). Structure: If + past perfect, would have + past participle.",
        examples: [
          { english: "If I had studied, I would have passed.", spanish: "Si hubiera estudiado, habría aprobado." },
          { english: "If she had arrived earlier, she would have seen him.", spanish: "Si ella hubiera llegado antes, lo habría visto." },
        ],
        exercises: [
          {
            id: "tc-1",
            type: "multiple-choice",
            question: "If I ___ the email, I ___ you sooner.",
            options: ["had seen / would have called", "saw / would call", "have seen / would call", "seen / would have called"],
            correctAnswer: "had seen / would have called",
            explanation: "Third Conditional: If + had + participle, would have + participle."
          },
        ]
      },
    ]
  },
  {
    id: "passive",
    title: "Passive Voice",
    description: "Active to passive transformation in all tenses",
    icon: "🔄",
    topics: [
      {
        id: "passive-present",
        title: "Passive Voice - Present",
        level: "B1",
        completed: false,
        explanation: "The passive voice emphasizes the action or the receiver of the action rather than the agent. In present: am/is/are + past participle.",
        examples: [
          { english: "English is spoken worldwide.", spanish: "El inglés se habla en todo el mundo." },
          { english: "The letters are sent every day.", spanish: "Las cartas se envían todos los días." },
        ],
        exercises: [
          {
            id: "pp-1",
            type: "multiple-choice",
            question: "Spanish ___ in many countries.",
            options: ["speaks", "is spoken", "is speaking", "spoke"],
            correctAnswer: "is spoken",
            explanation: "Passive voice in present: is/are + past participle."
          },
        ]
      },
      {
        id: "passive-past",
        title: "Passive Voice - Past",
        level: "B1",
        completed: false,
        explanation: "Passive voice in past: was/were + past participle.",
        examples: [
          { english: "The book was written by Hemingway.", spanish: "El libro fue escrito por Hemingway." },
          { english: "The pyramids were built thousands of years ago.", spanish: "Las pirámides fueron construidas hace miles de años." },
        ],
        exercises: [
          {
            id: "ppa-1",
            type: "multiple-choice",
            question: "The Mona Lisa ___ by Leonardo da Vinci.",
            options: ["painted", "was painted", "is painted", "paints"],
            correctAnswer: "was painted",
            explanation: "Past completed action, we use was + participle."
          },
        ]
      },
    ]
  },
  {
    id: "phrasal-verbs",
    title: "Phrasal Verbs",
    description: "The most used compound verbs in English",
    icon: "🧩",
    topics: [
      {
        id: "phrasal-verbs-basic",
        title: "Basic Phrasal Verbs",
        level: "A2",
        completed: false,
        explanation: "Phrasal verbs are verbs combined with prepositions or adverbs that change their meaning. They are essential for natural English.",
        examples: [
          { english: "Wake up at 7 AM.", spanish: "Despiértate a las 7 AM." },
          { english: "Turn on the lights.", spanish: "Enciende las luces." },
          { english: "Look for my keys.", spanish: "Busca mis llaves." },
          { english: "Give up smoking.", spanish: "Deja de fumar." },
        ],
        exercises: [
          {
            id: "pvb-1",
            type: "multiple-choice",
            question: "Please ___ the TV. I want to watch the news.",
            options: ["turn on", "turn off", "turn up", "turn down"],
            correctAnswer: "turn on",
            explanation: "'Turn on' means to switch on."
          },
        ]
      },
      {
        id: "phrasal-verbs-intermediate",
        title: "Intermediate Phrasal Verbs",
        level: "B1",
        completed: false,
        explanation: "More complex phrasal verbs used in everyday conversations and work situations.",
        examples: [
          { english: "I need to figure out this problem.", spanish: "Necesito resolver este problema." },
          { english: "Don't put off your homework.", spanish: "No pospongas tu tarea." },
          { english: "We ran out of milk.", spanish: "Se nos acabó la leche." },
        ],
        exercises: [
          {
            id: "pvi-1",
            type: "multiple-choice",
            question: "The meeting was ___ until next week.",
            options: ["put off", "put on", "put up", "put down"],
            correctAnswer: "put off",
            explanation: "'Put off' means to postpone."
          },
        ]
      },
    ]
  },
  {
    id: "articles",
    title: "Articles",
    description: "A, an, the - when to use them and when not to",
    icon: "📝",
    topics: [
      {
        id: "articles-basic",
        title: "A, An, The - Basics",
        level: "A1",
        completed: false,
        explanation: "'A' is used before consonants, 'an' before vowels (by sound). 'The' is used for specific or unique things.",
        examples: [
          { english: "I have a cat and an apple.", spanish: "Tengo un gato y una manzana." },
          { english: "The sun is shining.", spanish: "El sol está brillando." },
          { english: "She is a teacher.", spanish: "Ella es profesora." },
        ],
        exercises: [
          {
            id: "ab-1",
            type: "multiple-choice",
            question: "I bought ___ umbrella because it was raining.",
            options: ["a", "an", "the", "-"],
            correctAnswer: "an",
            explanation: "'Umbrella' starts with a vowel sound, so we use 'an'."
          },
        ]
      },
    ]
  },
  {
    id: "prepositions",
    title: "Prepositions",
    description: "In, on, at, by, for, with and more",
    icon: "📍",
    topics: [
      {
        id: "prepositions-time",
        title: "Prepositions of Time",
        level: "A1",
        completed: false,
        explanation: "'At' for specific times and moments. 'On' for days and dates. 'In' for months, years, centuries, and long periods.",
        examples: [
          { english: "I wake up at 7 o'clock.", spanish: "Me despierto a las 7." },
          { english: "The meeting is on Monday.", spanish: "La reunión es el lunes." },
          { english: "I was born in 1990.", spanish: "Nací en 1990." },
        ],
        exercises: [
          {
            id: "pt-1",
            type: "multiple-choice",
            question: "I have a meeting ___ 3 PM ___ Friday.",
            options: ["at / on", "on / at", "in / on", "at / in"],
            correctAnswer: "at / on",
            explanation: "'At' for times, 'on' for days."
          },
        ]
      },
      {
        id: "prepositions-place",
        title: "Prepositions of Place",
        level: "A1",
        completed: false,
        explanation: "'At' for specific points. 'On' for surfaces. 'In' for enclosed spaces or areas.",
        examples: [
          { english: "She is at the bus stop.", spanish: "Ella está en la parada de autobús." },
          { english: "The book is on the table.", spanish: "El libro está sobre la mesa." },
          { english: "He lives in London.", spanish: "Él vive en Londres." },
        ],
        exercises: [
          {
            id: "pl-1",
            type: "multiple-choice",
            question: "The cat is ___ the box.",
            options: ["in", "on", "at", "by"],
            correctAnswer: "in",
            explanation: "'In' for inside spaces."
          },
        ]
      },
    ]
  },
  {
    id: "pronouns",
    title: "Pronouns",
    description: "Personal, possessive, reflexive, and relative",
    icon: "👤",
    topics: [
      {
        id: "personal-pronouns",
        title: "Personal Pronouns",
        level: "A1",
        completed: false,
        explanation: "Subject pronouns (I, you, he, she, it, we, they) replace the subject. Object pronouns (me, you, him, her, it, us, them) receive the action.",
        examples: [
          { english: "I love her. She loves me.", spanish: "Yo la amo. Ella me ama." },
          { english: "They gave us a gift.", spanish: "Ellos nos dieron un regalo." },
        ],
        exercises: [
          {
            id: "prp-1",
            type: "multiple-choice",
            question: "Can you help ___? I need ___.",
            options: ["me / them", "I / they", "me / they", "I / them"],
            correctAnswer: "me / them",
            explanation: "After verbs we use object pronouns: me, them."
          },
        ]
      },
    ]
  },
  {
    id: "reported-speech",
    title: "Reported Speech",
    description: "How to report what others said",
    icon: "💬",
    topics: [
      {
        id: "reported-speech-statements",
        title: "Reported Speech - Statements",
        level: "B1",
        completed: false,
        explanation: "When reporting what someone said, verb tenses shift back: present → past, past → past perfect, will → would.",
        examples: [
          { english: "'I am tired' → She said she was tired.", spanish: "'Estoy cansada' → Dijo que estaba cansada." },
          { english: "'I will help' → He said he would help.", spanish: "'Ayudaré' → Dijo que ayudaría." },
        ],
        exercises: [
          {
            id: "rss-1",
            type: "multiple-choice",
            question: "'I love pizza.' → He said he ___ pizza.",
            options: ["loves", "loved", "love", "loving"],
            correctAnswer: "loved",
            explanation: "Present simple → Past simple in reported speech."
          },
        ]
      },
    ]
  },
  {
    id: "gerunds-infinitives",
    title: "Gerunds and Infinitives",
    description: "When to use -ing vs to + verb",
    icon: "🔤",
    topics: [
      {
        id: "gerund-after-verbs",
        title: "Gerund After Verbs",
        level: "B1",
        completed: false,
        explanation: "Some verbs are followed by gerund (-ing): enjoy, avoid, finish, mind, suggest, consider, etc.",
        examples: [
          { english: "I enjoy reading books.", spanish: "Disfruto leer libros." },
          { english: "She avoids eating fast food.", spanish: "Ella evita comer comida rápida." },
        ],
        exercises: [
          {
            id: "gav-1",
            type: "multiple-choice",
            question: "I enjoy ___ to music while working.",
            options: ["listen", "to listen", "listening", "listened"],
            correctAnswer: "listening",
            explanation: "'Enjoy' is followed by gerund."
          },
        ]
      },
      {
        id: "infinitive-after-verbs",
        title: "Infinitive After Verbs",
        level: "B1",
        completed: false,
        explanation: "Some verbs are followed by infinitive (to + verb): want, need, decide, hope, expect, plan, etc.",
        examples: [
          { english: "I want to learn Spanish.", spanish: "Quiero aprender español." },
          { english: "She decided to move to Paris.", spanish: "Decidió mudarse a París." },
        ],
        exercises: [
          {
            id: "iav-1",
            type: "multiple-choice",
            question: "I decided ___ a new car.",
            options: ["buy", "to buy", "buying", "bought"],
            correctAnswer: "to buy",
            explanation: "'Decide' is followed by infinitive."
          },
        ]
      },
    ]
  },
];

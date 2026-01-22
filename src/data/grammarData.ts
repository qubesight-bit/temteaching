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
  {
    id: "advanced-structures",
    title: "Advanced Structures",
    description: "C1 level grammar for sophisticated communication",
    icon: "🎯",
    topics: [
      {
        id: "inversions",
        title: "Inversions",
        level: "C1",
        completed: false,
        explanation: "Inversion occurs when the subject and auxiliary verb are reversed for emphasis. Common with negative adverbs: never, rarely, seldom, hardly, not only, little.",
        examples: [
          { english: "Never have I seen such beauty.", spanish: "Nunca he visto tanta belleza." },
          { english: "Rarely does she make mistakes.", spanish: "Raramente comete errores." },
          { english: "Not only did he win, but he also set a record.", spanish: "No solo ganó, sino que también batió un récord." },
        ],
        exercises: [
          {
            id: "inv-1",
            type: "multiple-choice",
            question: "Hardly ___ arrived when the phone rang.",
            options: ["had I", "I had", "have I", "I have"],
            correctAnswer: "had I",
            explanation: "'Hardly' triggers inversion: Hardly had I arrived..."
          },
        ]
      },
      {
        id: "cleft-sentences",
        title: "Cleft Sentences",
        level: "C1",
        completed: false,
        explanation: "Cleft sentences emphasize specific information. It-clefts use 'It was/is... that/who'. What-clefts use 'What... is/was'.",
        examples: [
          { english: "It was John who broke the window.", spanish: "Fue John quien rompió la ventana." },
          { english: "What I need is a vacation.", spanish: "Lo que necesito es unas vacaciones." },
          { english: "It's the price that concerns me.", spanish: "Es el precio lo que me preocupa." },
        ],
        exercises: [
          {
            id: "cleft-1",
            type: "multiple-choice",
            question: "___ the manager who made the final decision.",
            options: ["It was", "There was", "That was", "What was"],
            correctAnswer: "It was",
            explanation: "It-cleft for emphasis: It was X who/that..."
          },
        ]
      },
      {
        id: "participle-clauses",
        title: "Participle Clauses",
        level: "C1",
        completed: false,
        explanation: "Participle clauses replace relative clauses or adverbial clauses. Present participle (-ing) for active, past participle (-ed) for passive meanings.",
        examples: [
          { english: "Having finished work, she went home.", spanish: "Habiendo terminado el trabajo, se fue a casa." },
          { english: "Encouraged by success, he continued.", spanish: "Animado por el éxito, continuó." },
          { english: "Not knowing what to do, I waited.", spanish: "Sin saber qué hacer, esperé." },
        ],
        exercises: [
          {
            id: "part-1",
            type: "multiple-choice",
            question: "___ the instructions, he began the test.",
            options: ["Having read", "Have read", "Reading", "To read"],
            correctAnswer: "Having read",
            explanation: "Perfect participle for action completed before main verb."
          },
        ]
      },
      {
        id: "modal-perfects",
        title: "Modal Perfects",
        level: "C1",
        completed: false,
        explanation: "Modal + have + past participle expresses deductions, criticism, and regret about the past. Must have (certain), can't have (impossible), should have (criticism).",
        examples: [
          { english: "She must have left early.", spanish: "Debe haberse ido temprano." },
          { english: "He can't have forgotten.", spanish: "No puede haberlo olvidado." },
          { english: "You should have told me.", spanish: "Deberías habérmelo dicho." },
        ],
        exercises: [
          {
            id: "modp-1",
            type: "multiple-choice",
            question: "She ___ the train; her car is still here.",
            options: ["must have taken", "can't have taken", "might take", "should take"],
            correctAnswer: "must have taken",
            explanation: "'Must have' = certain deduction about the past."
          },
        ]
      },
      {
        id: "subjunctive",
        title: "Subjunctive Mood",
        level: "C1",
        completed: false,
        explanation: "The subjunctive uses base form after verbs of demand/suggestion (demand, insist, suggest, recommend) and in 'It is essential/important that...'.",
        examples: [
          { english: "I suggest he leave now.", spanish: "Sugiero que se vaya ahora." },
          { english: "It is essential that she be informed.", spanish: "Es esencial que se le informe." },
          { english: "They insisted he apologize.", spanish: "Insistieron en que se disculpara." },
        ],
        exercises: [
          {
            id: "subj-1",
            type: "multiple-choice",
            question: "The doctor recommended that she ___ more rest.",
            options: ["get", "gets", "got", "getting"],
            correctAnswer: "get",
            explanation: "Subjunctive after 'recommend': base form without -s."
          },
        ]
      },
      {
        id: "advanced-passive",
        title: "Advanced Passive Forms",
        level: "C1",
        completed: false,
        explanation: "Complex passive structures include causative have/get, passive infinitives, and impersonal passives (It is said that...).",
        examples: [
          { english: "It is believed that he escaped.", spanish: "Se cree que escapó." },
          { english: "She is known to be brilliant.", spanish: "Se sabe que es brillante." },
          { english: "The report is being written.", spanish: "El informe está siendo escrito." },
        ],
        exercises: [
          {
            id: "advp-1",
            type: "multiple-choice",
            question: "It ___ that the economy will improve.",
            options: ["is expected", "expects", "is expecting", "expected"],
            correctAnswer: "is expected",
            explanation: "Impersonal passive: It is expected/believed/thought that..."
          },
        ]
      },
      {
        id: "mixed-conditionals",
        title: "Mixed Conditionals",
        level: "C1",
        completed: false,
        explanation: "Mixed conditionals combine different time references: past condition with present result (If + past perfect, would + base) or present condition with past result.",
        examples: [
          { english: "If I had studied law, I would be a lawyer now.", spanish: "Si hubiera estudiado derecho, ahora sería abogado." },
          { english: "If she were taller, she would have been a model.", spanish: "Si fuera más alta, habría sido modelo." },
        ],
        exercises: [
          {
            id: "mixc-1",
            type: "multiple-choice",
            question: "If I ___ harder at school, I ___ a better job now.",
            options: ["had worked / would have", "worked / would have", "had worked / would", "work / would have"],
            correctAnswer: "had worked / would have",
            explanation: "Past unreal condition → present unreal result."
          },
        ]
      },
      {
        id: "discourse-markers",
        title: "Advanced Discourse Markers",
        level: "C1",
        completed: false,
        explanation: "Sophisticated linking words for academic and formal writing: nonetheless, furthermore, consequently, notwithstanding, whereby.",
        examples: [
          { english: "The evidence is limited; nonetheless, we can draw conclusions.", spanish: "La evidencia es limitada; no obstante, podemos sacar conclusiones." },
          { english: "Furthermore, the results confirm our hypothesis.", spanish: "Además, los resultados confirman nuestra hipótesis." },
        ],
        exercises: [
          {
            id: "disc-1",
            type: "multiple-choice",
            question: "The data was inconclusive. ___, we proceeded with the study.",
            options: ["Nonetheless", "Therefore", "Because", "Although"],
            correctAnswer: "Nonetheless",
            explanation: "'Nonetheless' = despite that, nevertheless."
          },
        ]
      },
    ]
  },
  {
    id: "mastery",
    title: "C2 Mastery",
    description: "Near-native precision and stylistic excellence",
    icon: "👑",
    topics: [
      {
        id: "advanced-inversions-c2",
        title: "Advanced Inversions",
        level: "C2",
        completed: false,
        explanation: "Sophisticated inversions for emphasis using negative adverbs (Never, Rarely, Seldom), 'Not only...but also', and formal conditionals (Had I known, Were she to...).",
        examples: [
          { english: "Never have I seen such beauty.", spanish: "Nunca he visto tanta belleza." },
          { english: "Had I known, I would have helped.", spanish: "Si lo hubiera sabido, habría ayudado." },
          { english: "Not only did she win, but she broke the record.", spanish: "No solo ganó, sino que batió el récord." },
        ],
        exercises: [
          {
            id: "inv-c2-1",
            type: "multiple-choice",
            question: "Rarely ___ such talent in a beginner.",
            options: ["do we see", "we see", "we do see", "seeing"],
            correctAnswer: "do we see",
            explanation: "Negative adverb 'Rarely' triggers inversion."
          },
        ]
      },
      {
        id: "subjunctive-c2",
        title: "Subjunctive Mastery",
        level: "C2",
        completed: false,
        explanation: "Full command of subjunctive in formal contexts, fixed expressions (Be that as it may, Come what may, Lest), and literary usage.",
        examples: [
          { english: "Be that as it may, we must proceed.", spanish: "Sea como sea, debemos proceder." },
          { english: "Lest we forget the sacrifices made.", spanish: "Para que no olvidemos los sacrificios hechos." },
          { english: "Come what may, I'll support you.", spanish: "Pase lo que pase, te apoyaré." },
        ],
        exercises: [
          {
            id: "subj-c2-1",
            type: "multiple-choice",
            question: "The committee insists that he ___ present.",
            options: ["be", "is", "was", "being"],
            correctAnswer: "be",
            explanation: "Formal subjunctive after 'insist': base form 'be'."
          },
        ]
      },
      {
        id: "ellipsis-c2",
        title: "Ellipsis & Substitution",
        level: "C2",
        completed: false,
        explanation: "Elegant omission and substitution to avoid repetition: auxiliary ellipsis, 'so/not' substitution, 'one/ones' for nouns, and 'to' for infinitive phrases.",
        examples: [
          { english: "A: Will it rain? B: I hope not.", spanish: "A: ¿Lloverá? B: Espero que no." },
          { english: "She can speak French and so can I.", spanish: "Ella sabe francés y yo también." },
          { english: "I'd like to help, but I'm not able to.", spanish: "Me gustaría ayudar, pero no puedo." },
        ],
        exercises: [
          {
            id: "ellip-c2-1",
            type: "multiple-choice",
            question: "A: Is she coming? B: I believe ___.",
            options: ["so", "it", "yes", "that"],
            correctAnswer: "so",
            explanation: "'So' substitutes the entire clause."
          },
        ]
      },
      {
        id: "cleft-sentences-c2",
        title: "Cleft Sentence Mastery",
        level: "C2",
        completed: false,
        explanation: "All cleft structures for precise emphasis: It-clefts, What-clefts, All-clefts, The thing/reason/place clefts for sophisticated focus.",
        examples: [
          { english: "What concerns me is the lack of funding.", spanish: "Lo que me preocupa es la falta de financiación." },
          { english: "All I want is some peace and quiet.", spanish: "Todo lo que quiero es paz y tranquilidad." },
          { english: "The reason I called is to discuss the project.", spanish: "La razón por la que llamé es para discutir el proyecto." },
        ],
        exercises: [
          {
            id: "cleft-c2-1",
            type: "multiple-choice",
            question: "___ I need is more time.",
            options: ["What", "That", "It", "Which"],
            correctAnswer: "What",
            explanation: "What-cleft for emphasis on 'more time'."
          },
        ]
      },
      {
        id: "idioms-c2",
        title: "Idioms & Collocations",
        level: "C2",
        completed: false,
        explanation: "Native-like command of idiomatic expressions, fixed collocations, and metaphorical language for natural, fluent communication.",
        examples: [
          { english: "The project is still up in the air.", spanish: "El proyecto aún está en el aire." },
          { english: "She really went the extra mile.", spanish: "Realmente hizo un esfuerzo extra." },
          { english: "Let's not beat around the bush.", spanish: "No nos andemos con rodeos." },
        ],
        exercises: [
          {
            id: "idiom-c2-1",
            type: "multiple-choice",
            question: "Don't put all your eggs in one ___.",
            options: ["basket", "bag", "box", "bowl"],
            correctAnswer: "basket",
            explanation: "Idiom: Don't put all eggs in one basket = diversify risk."
          },
        ]
      },
      {
        id: "register-style-c2",
        title: "Register & Academic Style",
        level: "C2",
        completed: false,
        explanation: "Mastery of formal/informal register shifts, academic hedging, nominalization, and impersonal structures for professional and scholarly writing.",
        examples: [
          { english: "The analysis of the data yielded significant results.", spanish: "El análisis de los datos arrojó resultados significativos." },
          { english: "It could be argued that this approach is flawed.", spanish: "Podría argumentarse que este enfoque es defectuoso." },
          { english: "This may be attributed to environmental factors.", spanish: "Esto puede atribuirse a factores ambientales." },
        ],
        exercises: [
          {
            id: "reg-c2-1",
            type: "multiple-choice",
            question: "Academic hedging: 'The results ___ that the hypothesis is correct.'",
            options: ["suggest", "prove", "show definitely", "make clear"],
            correctAnswer: "suggest",
            explanation: "'Suggest' is appropriately cautious for academic writing."
          },
        ]
      },
      {
        id: "nuanced-modality-c2",
        title: "Nuanced Modality",
        level: "C2",
        completed: false,
        explanation: "Subtle modal meanings: 'will' for habits/annoyance, 'would' for past habits, 'might' for criticism, and fine distinctions in deduction and expectation.",
        examples: [
          { english: "She will insist on doing everything herself.", spanish: "Ella insiste en hacerlo todo sola." },
          { english: "You might have told me earlier!", spanish: "¡Podrías habérmelo dicho antes!" },
          { english: "That'll be the postman.", spanish: "Ese debe ser el cartero." },
        ],
        exercises: [
          {
            id: "mod-c2-1",
            type: "multiple-choice",
            question: "She ___ keep interrupting me! (annoying habit)",
            options: ["will", "would", "should", "might"],
            correctAnswer: "will",
            explanation: "'Will' for characteristic/annoying present habits."
          },
        ]
      },
      {
        id: "participle-clauses-c2",
        title: "Participle Clause Mastery",
        level: "C2",
        completed: false,
        explanation: "Advanced reduction using present, past, and perfect participles. With-clauses for circumstances. Dangling participle avoidance.",
        examples: [
          { english: "Having completed the report, she left.", spanish: "Habiendo completado el informe, se fue." },
          { english: "Built in 1900, the house is now protected.", spanish: "Construida en 1900, la casa ahora está protegida." },
          { english: "With the deadline approaching, we worked faster.", spanish: "Con la fecha límite acercándose, trabajamos más rápido." },
        ],
        exercises: [
          {
            id: "part-c2-1",
            type: "multiple-choice",
            question: "___ the instructions, he began the experiment.",
            options: ["Having read", "Have read", "Reading", "To read"],
            correctAnswer: "Having read",
            explanation: "Perfect participle for completed prior action."
          },
        ]
      },
      {
        id: "discourse-markers-c2",
        title: "Discourse Marker Mastery",
        level: "C2",
        completed: false,
        explanation: "Full command of cohesive devices: 'That said', 'Be that as it may', 'Notwithstanding', 'As such', 'Hence', and concessive inversions.",
        examples: [
          { english: "The project succeeded. That said, it was over budget.", spanish: "El proyecto tuvo éxito. Dicho esto, excedió el presupuesto." },
          { english: "Notwithstanding the risks, they proceeded.", spanish: "A pesar de los riesgos, procedieron." },
          { english: "Complex though it may seem, the solution is simple.", spanish: "Por complejo que parezca, la solución es simple." },
        ],
        exercises: [
          {
            id: "disc-c2-1",
            type: "multiple-choice",
            question: "The evidence was weak. ___, the case was dismissed.",
            options: ["As such", "Moreover", "Besides", "Likewise"],
            correctAnswer: "As such",
            explanation: "'As such' = Therefore/Consequently (formal)."
          },
        ]
      },
    ]
  },
  {
    id: "b2-advanced",
    title: "B2 Upper-Intermediate",
    description: "Clear, detailed communication on a wide range of subjects",
    icon: "🎯",
    topics: [
      {
        id: "mixed-conditionals-b2",
        title: "Mixed Conditionals",
        level: "B2",
        completed: false,
        explanation: "Mixed conditionals combine elements from different conditional types. Type 3+2: If + past perfect, would + infinitive (past cause, present result). Type 2+3: If + past simple, would have + past participle (present cause, past result).",
        examples: [
          { english: "If I had studied medicine, I would be a doctor now.", spanish: "Si hubiera estudiado medicina, ahora sería médico." },
          { english: "If she weren't so shy, she would have spoken up.", spanish: "Si ella no fuera tan tímida, habría hablado." },
          { english: "If we had left earlier, we wouldn't be stuck in traffic.", spanish: "Si hubiéramos salido antes, no estaríamos atascados." },
        ],
        exercises: [
          {
            id: "mixc-b2-1",
            type: "multiple-choice",
            question: "If I ___ harder at university, I ___ a better job now.",
            options: ["had studied / would have", "studied / would have", "had studied / would", "have studied / would have"],
            correctAnswer: "had studied / would",
            explanation: "Mixed conditional: past perfect (past cause) + would + infinitive (present result)."
          },
        ]
      },
      {
        id: "third-conditional-b2",
        title: "Third Conditional Mastery",
        level: "B2",
        completed: false,
        explanation: "The third conditional expresses hypothetical past situations with their imagined results. Structure: If + past perfect, would/could/might have + past participle. Used for regrets, speculation about the past, and analyzing past decisions.",
        examples: [
          { english: "If I had known about the meeting, I would have attended.", spanish: "Si hubiera sabido de la reunión, habría asistido." },
          { english: "If they had invested earlier, they might have become rich.", spanish: "Si hubieran invertido antes, podrían haberse hecho ricos." },
          { english: "She could have passed if she had studied more.", spanish: "Podría haber aprobado si hubiera estudiado más." },
        ],
        exercises: [
          {
            id: "3cond-b2-1",
            type: "multiple-choice",
            question: "If the weather ___ better, we ___ the picnic.",
            options: ["had been / would have enjoyed", "was / would enjoy", "were / would have enjoyed", "had been / enjoyed"],
            correctAnswer: "had been / would have enjoyed",
            explanation: "Third conditional for hypothetical past: If + past perfect, would have + past participle."
          },
        ]
      },
      {
        id: "past-perfect-b2",
        title: "Past Perfect Advanced",
        level: "B2",
        completed: false,
        explanation: "The past perfect (had + past participle) establishes the 'earlier past' in narratives, explains cause-effect in past situations, and is essential in reported speech and third conditionals.",
        examples: [
          { english: "By the time she arrived, the meeting had already finished.", spanish: "Para cuando ella llegó, la reunión ya había terminado." },
          { english: "I realized I had left my wallet at home.", spanish: "Me di cuenta de que había dejado mi cartera en casa." },
          { english: "They had never seen such a beautiful sunset.", spanish: "Nunca habían visto una puesta de sol tan hermosa." },
        ],
        exercises: [
          {
            id: "pp-b2-1",
            type: "multiple-choice",
            question: "When I got to the station, the train ___.",
            options: ["had already left", "already left", "has already left", "was already leaving"],
            correctAnswer: "had already left",
            explanation: "Past perfect for an action completed before another past action."
          },
        ]
      },
      {
        id: "modals-past-b2",
        title: "Modals in the Past",
        level: "B2",
        completed: false,
        explanation: "Modal verbs + have + past participle express speculation, criticism, and missed opportunities about the past. Must have (deduction), might/may have (possibility), could have (possibility/criticism), should have (advice/regret), would have (hypothetical).",
        examples: [
          { english: "She must have forgotten about the appointment.", spanish: "Ella debe haberse olvidado de la cita." },
          { english: "You should have told me earlier!", spanish: "¡Deberías habérmelo dicho antes!" },
          { english: "They might have taken the wrong train.", spanish: "Podrían haber tomado el tren equivocado." },
          { english: "He could have been more careful.", spanish: "Podría haber tenido más cuidado." },
        ],
        exercises: [
          {
            id: "modp-b2-1",
            type: "multiple-choice",
            question: "The lights are off. They ___ to bed. (logical deduction)",
            options: ["must have gone", "might go", "should have gone", "could go"],
            correctAnswer: "must have gone",
            explanation: "'Must have + past participle' for strong deduction about the past."
          },
        ]
      },
      {
        id: "complex-passive-b2",
        title: "Complex Passive Forms",
        level: "B2",
        completed: false,
        explanation: "Advanced passive structures including passive with modals, passive with reporting verbs (It is said that..., He is believed to...), passive causatives (have/get something done), and double object passives.",
        examples: [
          { english: "It is believed that the company will expand.", spanish: "Se cree que la empresa se expandirá." },
          { english: "He is said to be the best in his field.", spanish: "Se dice que es el mejor en su campo." },
          { english: "I need to have my car serviced.", spanish: "Necesito que me revisen el coche." },
          { english: "The report should have been submitted yesterday.", spanish: "El informe debería haberse entregado ayer." },
        ],
        exercises: [
          {
            id: "cpass-b2-1",
            type: "multiple-choice",
            question: "It ___ that the CEO will resign.",
            options: ["is rumoured", "rumours", "is rumouring", "has rumoured"],
            correctAnswer: "is rumoured",
            explanation: "Passive with reporting verbs: It is rumoured/believed/said that..."
          },
        ]
      },
      {
        id: "reported-speech-b2",
        title: "Reported Speech Advanced",
        level: "B2",
        completed: false,
        explanation: "Transforming direct speech to indirect speech with tense backshift, pronoun changes, and time/place references. Includes reporting questions, commands, and complex tense sequences.",
        examples: [
          { english: "He said he had been waiting for hours.", spanish: "Dijo que había estado esperando durante horas." },
          { english: "She asked if I could help her.", spanish: "Me preguntó si podía ayudarla." },
          { english: "The teacher told us not to forget our homework.", spanish: "El profesor nos dijo que no olvidáramos los deberes." },
        ],
        exercises: [
          {
            id: "repsp-b2-1",
            type: "multiple-choice",
            question: "'I will call you tomorrow' → She said she ___ me the next day.",
            options: ["would call", "will call", "called", "had called"],
            correctAnswer: "would call",
            explanation: "Reported speech: 'will' becomes 'would' with tense backshift."
          },
        ]
      },
      {
        id: "wish-regret-b2",
        title: "Wish & Regret Structures",
        level: "B2",
        completed: false,
        explanation: "Expressing wishes about present, past, and future situations. Wish + past simple (present unreal), wish + past perfect (past regret), wish + would (complaints/future desires). Also: If only, It's time, Would rather.",
        examples: [
          { english: "I wish I had more free time.", spanish: "Ojalá tuviera más tiempo libre." },
          { english: "If only I had listened to your advice!", spanish: "¡Si tan solo hubiera escuchado tu consejo!" },
          { english: "I wish you wouldn't make so much noise.", spanish: "Ojalá no hicieras tanto ruido." },
          { english: "It's high time we left.", spanish: "Ya es hora de que nos vayamos." },
        ],
        exercises: [
          {
            id: "wish-b2-1",
            type: "multiple-choice",
            question: "I wish I ___ to the party last night. (regret)",
            options: ["had gone", "went", "have gone", "would go"],
            correctAnswer: "had gone",
            explanation: "Wish + past perfect for past regrets."
          },
        ]
      },
      {
        id: "abstract-vocabulary-b2",
        title: "Abstract Topic Expression",
        level: "B2",
        completed: false,
        explanation: "Structures for discussing abstract topics like society, technology, and opinions: Defining/non-defining relative clauses, nominalization, hedging language, and complex sentence structures for nuanced arguments.",
        examples: [
          { english: "The impact of technology on society is undeniable.", spanish: "El impacto de la tecnología en la sociedad es innegable." },
          { english: "It could be argued that social media has more disadvantages.", spanish: "Podría argumentarse que las redes sociales tienen más desventajas." },
          { english: "This phenomenon, which affects millions, requires attention.", spanish: "Este fenómeno, que afecta a millones, requiere atención." },
        ],
        exercises: [
          {
            id: "abs-b2-1",
            type: "multiple-choice",
            question: "It ___ that technology has transformed communication.",
            options: ["could be argued", "argues", "is arguing", "has argued"],
            correctAnswer: "could be argued",
            explanation: "Hedging structure for presenting opinions in academic/formal contexts."
          },
        ]
      },
    ]
  },
  {
    id: "a2-elementary",
    title: "A2 Elementary",
    description: "Routine matters and simple exchanges in familiar contexts",
    icon: "📗",
    topics: [
      {
        id: "past-simple-regular-a2",
        title: "Past Simple - Regular Verbs",
        level: "A2",
        completed: false,
        explanation: "Regular verbs in past simple add -ed to the base form. Used for completed actions in the past with time expressions like yesterday, last week, ago.",
        examples: [
          { english: "I worked yesterday.", spanish: "Trabajé ayer." },
          { english: "She visited her grandmother last week.", spanish: "Visitó a su abuela la semana pasada." },
          { english: "They played football two days ago.", spanish: "Jugaron al fútbol hace dos días." },
          { english: "Did you watch the movie?", spanish: "¿Viste la película?" },
        ],
        exercises: [
          {
            id: "psr-a2-1",
            type: "multiple-choice",
            question: "Yesterday, I ___ to school by bus.",
            options: ["travel", "travelled", "travelling", "travels"],
            correctAnswer: "travelled",
            explanation: "Past simple of regular verbs: add -ed. 'Yesterday' indicates past."
          },
        ]
      },
      {
        id: "past-simple-irregular-a2",
        title: "Past Simple - Irregular Verbs",
        level: "A2",
        completed: false,
        explanation: "Irregular verbs have special past forms that must be memorized (go→went, eat→ate, see→saw, buy→bought, etc.).",
        examples: [
          { english: "I went to the cinema last night.", spanish: "Fui al cine anoche." },
          { english: "She ate pizza for dinner.", spanish: "Ella comió pizza para cenar." },
          { english: "We saw a beautiful sunset.", spanish: "Vimos una puesta de sol hermosa." },
          { english: "He bought a new phone.", spanish: "Él compró un teléfono nuevo." },
        ],
        exercises: [
          {
            id: "psi-a2-1",
            type: "multiple-choice",
            question: "Last weekend, we ___ to the beach.",
            options: ["go", "went", "going", "goes"],
            correctAnswer: "went",
            explanation: "'Go' is irregular: go → went → gone."
          },
        ]
      },
      {
        id: "past-simple-negative-a2",
        title: "Past Simple - Negatives & Questions",
        level: "A2",
        completed: false,
        explanation: "Negatives use didn't + base verb. Questions use Did + subject + base verb. The main verb stays in base form.",
        examples: [
          { english: "I didn't go to work yesterday.", spanish: "No fui a trabajar ayer." },
          { english: "She didn't eat breakfast.", spanish: "Ella no desayunó." },
          { english: "Did you see the news?", spanish: "¿Viste las noticias?" },
          { english: "Where did they go?", spanish: "¿Adónde fueron?" },
        ],
        exercises: [
          {
            id: "psn-a2-1",
            type: "multiple-choice",
            question: "I ___ to the party last night. I was tired.",
            options: ["didn't go", "didn't went", "don't go", "not go"],
            correctAnswer: "didn't go",
            explanation: "Negative past: didn't + base verb (go, not went)."
          },
        ]
      },
      {
        id: "comparatives-a2",
        title: "Comparatives",
        level: "A2",
        completed: false,
        explanation: "Compare two things: short adjectives add -er (taller, bigger), long adjectives use 'more' (more expensive, more beautiful). Irregular: good→better, bad→worse.",
        examples: [
          { english: "She is taller than her brother.", spanish: "Ella es más alta que su hermano." },
          { english: "This book is more interesting than that one.", spanish: "Este libro es más interesante que ese." },
          { english: "My car is faster than yours.", spanish: "Mi coche es más rápido que el tuyo." },
          { english: "English is easier than Chinese.", spanish: "El inglés es más fácil que el chino." },
        ],
        exercises: [
          {
            id: "comp-a2-1",
            type: "multiple-choice",
            question: "This restaurant is ___ than the other one.",
            options: ["cheaper", "more cheap", "cheapest", "most cheap"],
            correctAnswer: "cheaper",
            explanation: "Short adjectives (cheap) add -er for comparatives."
          },
        ]
      },
      {
        id: "superlatives-a2",
        title: "Superlatives",
        level: "A2",
        completed: false,
        explanation: "Compare three or more things: short adjectives add -est (the tallest), long adjectives use 'the most' (the most expensive). Always use 'the' before superlatives.",
        examples: [
          { english: "She is the tallest in the class.", spanish: "Ella es la más alta de la clase." },
          { english: "This is the most beautiful place I've seen.", spanish: "Este es el lugar más hermoso que he visto." },
          { english: "He is the best player on the team.", spanish: "Él es el mejor jugador del equipo." },
          { english: "It was the worst day of my life.", spanish: "Fue el peor día de mi vida." },
        ],
        exercises: [
          {
            id: "super-a2-1",
            type: "multiple-choice",
            question: "Mount Everest is ___ mountain in the world.",
            options: ["the highest", "the higher", "highest", "more high"],
            correctAnswer: "the highest",
            explanation: "Superlatives: the + adjective-est for short adjectives."
          },
        ]
      },
      {
        id: "going-to-future-a2",
        title: "Going to - Future Plans",
        level: "A2",
        completed: false,
        explanation: "Use 'going to' for planned intentions and predictions based on evidence. Structure: am/is/are + going to + verb.",
        examples: [
          { english: "I'm going to visit my parents this weekend.", spanish: "Voy a visitar a mis padres este fin de semana." },
          { english: "They're going to buy a new house.", spanish: "Van a comprar una casa nueva." },
          { english: "Look at those clouds! It's going to rain.", spanish: "¡Mira esas nubes! Va a llover." },
          { english: "What are you going to do tomorrow?", spanish: "¿Qué vas a hacer mañana?" },
        ],
        exercises: [
          {
            id: "gtf-a2-1",
            type: "multiple-choice",
            question: "We ___ a party next Saturday.",
            options: ["are going to have", "going to have", "are going have", "is going to have"],
            correctAnswer: "are going to have",
            explanation: "Going to future: subject + am/is/are + going to + verb."
          },
        ]
      },
      {
        id: "could-should-a2",
        title: "Could & Should",
        level: "A2",
        completed: false,
        explanation: "'Could' expresses past ability and polite requests/suggestions. 'Should' gives advice and recommendations.",
        examples: [
          { english: "Could you help me, please?", spanish: "¿Podrías ayudarme, por favor?" },
          { english: "When I was young, I could run very fast.", spanish: "Cuando era joven, podía correr muy rápido." },
          { english: "You should see a doctor.", spanish: "Deberías ver a un médico." },
          { english: "We should leave now.", spanish: "Deberíamos irnos ahora." },
        ],
        exercises: [
          {
            id: "cs-a2-1",
            type: "multiple-choice",
            question: "You look tired. You ___ get some rest.",
            options: ["should", "could", "would", "must"],
            correctAnswer: "should",
            explanation: "'Should' is used for giving advice."
          },
        ]
      },
      {
        id: "first-conditional-a2",
        title: "First Conditional",
        level: "A2",
        completed: false,
        explanation: "Express real/possible future situations. Structure: If + present simple, will + infinitive. Used for likely situations and their results.",
        examples: [
          { english: "If it rains, I will stay home.", spanish: "Si llueve, me quedaré en casa." },
          { english: "If you study, you will pass the exam.", spanish: "Si estudias, aprobarás el examen." },
          { english: "If she calls, tell her I'm busy.", spanish: "Si ella llama, dile que estoy ocupado." },
          { english: "I'll help you if you need me.", spanish: "Te ayudaré si me necesitas." },
        ],
        exercises: [
          {
            id: "fc-a2-1",
            type: "multiple-choice",
            question: "If you ___ hard, you ___ the test.",
            options: ["study / will pass", "will study / pass", "studied / would pass", "study / pass"],
            correctAnswer: "study / will pass",
            explanation: "First conditional: If + present simple, will + infinitive."
          },
        ]
      },
      {
        id: "daily-routines-a2",
        title: "Daily Routines & Habits",
        level: "A2",
        completed: false,
        explanation: "Describe regular activities using present simple with frequency adverbs (always, usually, often, sometimes, never) and time expressions.",
        examples: [
          { english: "I usually wake up at 7 AM.", spanish: "Normalmente me despierto a las 7." },
          { english: "She always has coffee for breakfast.", spanish: "Ella siempre toma café para desayunar." },
          { english: "They often go to the gym after work.", spanish: "A menudo van al gimnasio después del trabajo." },
          { english: "He never eats meat.", spanish: "Él nunca come carne." },
        ],
        exercises: [
          {
            id: "dr-a2-1",
            type: "multiple-choice",
            question: "She ___ gets up early. She loves sleeping late.",
            options: ["never", "always", "usually", "often"],
            correctAnswer: "never",
            explanation: "'Never' indicates zero frequency - she doesn't get up early."
          },
        ]
      },
      {
        id: "describing-people-a2",
        title: "Describing People & Places",
        level: "A2",
        completed: false,
        explanation: "Use adjectives to describe appearance, personality, and places. Word order: opinion + size + age + shape + color + origin + material + noun.",
        examples: [
          { english: "She has long brown hair and blue eyes.", spanish: "Ella tiene el pelo largo castaño y ojos azules." },
          { english: "He's a tall, friendly man.", spanish: "Es un hombre alto y amable." },
          { english: "It's a beautiful old Italian restaurant.", spanish: "Es un hermoso restaurante italiano antiguo." },
          { english: "The city is modern and exciting.", spanish: "La ciudad es moderna y emocionante." },
        ],
        exercises: [
          {
            id: "dp-a2-1",
            type: "multiple-choice",
            question: "My grandmother is very ___. She always helps everyone.",
            options: ["kind", "tall", "young", "fast"],
            correctAnswer: "kind",
            explanation: "'Kind' describes personality - being helpful and caring."
          },
        ]
      },
      {
        id: "shopping-language-a2",
        title: "Shopping & Transactions",
        level: "A2",
        completed: false,
        explanation: "Essential language for shopping: asking prices, sizes, making requests, and completing purchases.",
        examples: [
          { english: "How much does this cost?", spanish: "¿Cuánto cuesta esto?" },
          { english: "Do you have this in a larger size?", spanish: "¿Tiene esto en una talla más grande?" },
          { english: "I'd like to try this on, please.", spanish: "Me gustaría probarme esto, por favor." },
          { english: "Can I pay by card?", spanish: "¿Puedo pagar con tarjeta?" },
        ],
        exercises: [
          {
            id: "shop-a2-1",
            type: "multiple-choice",
            question: "Customer: How much ___ these shoes? Shop assistant: They're €50.",
            options: ["are", "is", "do", "does"],
            correctAnswer: "are",
            explanation: "'Shoes' is plural, so we use 'are' with 'How much'."
          },
        ]
      },
      {
        id: "jobs-work-a2",
        title: "Jobs & Work",
        level: "A2",
        completed: false,
        explanation: "Vocabulary and structures for talking about jobs, workplaces, and professional activities.",
        examples: [
          { english: "What do you do for a living?", spanish: "¿A qué te dedicas?" },
          { english: "I work as a teacher.", spanish: "Trabajo como profesor." },
          { english: "She works in an office downtown.", spanish: "Ella trabaja en una oficina en el centro." },
          { english: "He's responsible for customer service.", spanish: "Él es responsable del servicio al cliente." },
        ],
        exercises: [
          {
            id: "job-a2-1",
            type: "multiple-choice",
            question: "A: What do you do? B: I ___ a nurse.",
            options: ["am", "work", "do", "have"],
            correctAnswer: "am",
            explanation: "To state your profession: I am + job title."
          },
        ]
      },
    ]
  },
];

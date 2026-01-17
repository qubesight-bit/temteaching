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
    title: "Tiempos Verbales",
    description: "Domina todos los tiempos verbales del inglés",
    icon: "⏰",
    topics: [
      {
        id: "present-simple",
        title: "Present Simple",
        level: "A1",
        completed: true,
        explanation: "El Present Simple se usa para describir rutinas, hábitos, hechos generales y verdades universales. Se forma con el verbo en infinitivo (sin 'to'), y en tercera persona singular (he/she/it) se añade -s o -es.",
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
            explanation: "Con 'she' (tercera persona singular) usamos 'goes' en Present Simple."
          },
          {
            id: "ps-2",
            type: "fill-blank",
            question: "My father ___ (read) the newspaper every morning.",
            correctAnswer: "reads",
            explanation: "En tercera persona singular añadimos -s al verbo."
          },
          {
            id: "ps-3",
            type: "multiple-choice",
            question: "_____ your brother work in a bank?",
            options: ["Do", "Does", "Is", "Are"],
            correctAnswer: "Does",
            explanation: "Usamos 'Does' para preguntas con tercera persona singular."
          },
        ]
      },
      {
        id: "present-continuous",
        title: "Present Continuous",
        level: "A1",
        completed: true,
        explanation: "El Present Continuous describe acciones que están ocurriendo en este momento o alrededor de este período. Se forma con el verbo 'to be' + verbo con -ing.",
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
            explanation: "'Look!' indica una acción en progreso, así que usamos Present Continuous."
          },
        ]
      },
      {
        id: "past-simple",
        title: "Past Simple",
        level: "A2",
        completed: true,
        explanation: "El Past Simple se usa para acciones completadas en el pasado. Los verbos regulares añaden -ed, mientras que los irregulares tienen formas especiales.",
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
            explanation: "'Yesterday' indica pasado, usamos Past Simple: visited."
          },
        ]
      },
      {
        id: "present-perfect",
        title: "Present Perfect",
        level: "A2",
        completed: false,
        explanation: "El Present Perfect conecta el pasado con el presente. Se usa para experiencias de vida, acciones recientes con 'just', y situaciones que empezaron en el pasado y continúan. Se forma con have/has + participio pasado.",
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
            explanation: "Con 'I' usamos 'have' y el participio 'eaten' para expresar experiencias."
          },
          {
            id: "pp-2",
            type: "multiple-choice",
            question: "She ___ in this company for 5 years.",
            options: ["worked", "has worked", "is working", "works"],
            correctAnswer: "has worked",
            explanation: "'For 5 years' indica una situación que empezó en el pasado y continúa."
          },
        ]
      },
      {
        id: "past-continuous",
        title: "Past Continuous",
        level: "B1",
        completed: false,
        explanation: "El Past Continuous describe acciones en progreso en un momento específico del pasado. Se forma con was/were + verbo-ing.",
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
            explanation: "Para preguntar sobre una acción en progreso en el pasado usamos were + doing."
          },
        ]
      },
      {
        id: "future-will",
        title: "Future with Will",
        level: "A2",
        completed: false,
        explanation: "Usamos 'will' para predicciones, decisiones espontáneas, promesas y ofrecimientos. Se forma con will + infinitivo sin 'to'.",
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
            explanation: "Usamos 'will' para promesas sobre el futuro."
          },
        ]
      },
      {
        id: "future-going-to",
        title: "Future with Going to",
        level: "A2",
        completed: false,
        explanation: "Usamos 'going to' para planes decididos previamente y predicciones basadas en evidencia. Se forma con am/is/are + going to + infinitivo.",
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
            explanation: "Para planes decididos previamente usamos 'going to'."
          },
        ]
      },
    ]
  },
  {
    id: "modals",
    title: "Verbos Modales",
    description: "Can, could, must, should, would y más",
    icon: "🔧",
    topics: [
      {
        id: "can-could",
        title: "Can & Could",
        level: "A1",
        completed: true,
        explanation: "'Can' expresa habilidad, permiso y posibilidad en presente. 'Could' es su forma pasada o más formal/cortés.",
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
            explanation: "Usamos 'could' para habilidades en el pasado."
          },
        ]
      },
      {
        id: "must-have-to",
        title: "Must & Have to",
        level: "A2",
        completed: false,
        explanation: "'Must' expresa obligación fuerte o deducción. 'Have to' expresa obligación externa. En negativo son diferentes: 'mustn't' = prohibición, 'don't have to' = no necesidad.",
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
            explanation: "Usamos 'mustn't' para prohibiciones fuertes."
          },
        ]
      },
      {
        id: "should-ought-to",
        title: "Should & Ought to",
        level: "A2",
        completed: false,
        explanation: "'Should' y 'ought to' expresan consejos, recomendaciones y expectativas. Son intercambiables, aunque 'should' es más común.",
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
            explanation: "Usamos 'should' para dar consejos."
          },
        ]
      },
    ]
  },
  {
    id: "conditionals",
    title: "Oraciones Condicionales",
    description: "If clauses: Zero, First, Second, Third",
    icon: "🔀",
    topics: [
      {
        id: "zero-conditional",
        title: "Zero Conditional",
        level: "A2",
        completed: false,
        explanation: "El Zero Conditional expresa verdades generales, hechos científicos y resultados predecibles. Estructura: If + present simple, present simple.",
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
            explanation: "Zero Conditional usa presente simple en ambas partes."
          },
        ]
      },
      {
        id: "first-conditional",
        title: "First Conditional",
        level: "A2",
        completed: false,
        explanation: "El First Conditional expresa situaciones probables o posibles en el futuro. Estructura: If + present simple, will + infinitivo.",
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
            explanation: "First Conditional: If + presente, will + infinitivo."
          },
        ]
      },
      {
        id: "second-conditional",
        title: "Second Conditional",
        level: "B1",
        completed: false,
        explanation: "El Second Conditional expresa situaciones hipotéticas o improbables en el presente/futuro. Estructura: If + past simple, would + infinitivo.",
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
            explanation: "En Second Conditional usamos 'were' para todas las personas con 'if'."
          },
        ]
      },
      {
        id: "third-conditional",
        title: "Third Conditional",
        level: "B2",
        completed: false,
        explanation: "El Third Conditional expresa situaciones hipotéticas del pasado (imposibles de cambiar). Estructura: If + past perfect, would have + participio pasado.",
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
            explanation: "Third Conditional: If + had + participio, would have + participio."
          },
        ]
      },
    ]
  },
  {
    id: "passive",
    title: "Voz Pasiva",
    description: "Transformación activa a pasiva en todos los tiempos",
    icon: "🔄",
    topics: [
      {
        id: "passive-present",
        title: "Passive Voice - Present",
        level: "B1",
        completed: false,
        explanation: "La voz pasiva enfatiza la acción o el receptor de la acción en lugar del agente. En presente: am/is/are + participio pasado.",
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
            explanation: "Voz pasiva en presente: is/are + participio pasado."
          },
        ]
      },
      {
        id: "passive-past",
        title: "Passive Voice - Past",
        level: "B1",
        completed: false,
        explanation: "Voz pasiva en pasado: was/were + participio pasado.",
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
            explanation: "Acción pasada completada, usamos was + participio."
          },
        ]
      },
    ]
  },
  {
    id: "phrasal-verbs",
    title: "Phrasal Verbs",
    description: "Los verbos compuestos más usados en inglés",
    icon: "🧩",
    topics: [
      {
        id: "phrasal-verbs-basic",
        title: "Phrasal Verbs Básicos",
        level: "A2",
        completed: false,
        explanation: "Los phrasal verbs son verbos combinados con preposiciones o adverbios que cambian su significado. Son esenciales para el inglés natural.",
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
            explanation: "'Turn on' significa encender."
          },
        ]
      },
      {
        id: "phrasal-verbs-intermediate",
        title: "Phrasal Verbs Intermedios",
        level: "B1",
        completed: false,
        explanation: "Phrasal verbs más complejos utilizados en conversaciones cotidianas y situaciones laborales.",
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
            explanation: "'Put off' significa posponer."
          },
        ]
      },
    ]
  },
  {
    id: "articles",
    title: "Artículos",
    description: "A, an, the - cuándo usarlos y cuándo no",
    icon: "📝",
    topics: [
      {
        id: "articles-basic",
        title: "A, An, The - Básico",
        level: "A1",
        completed: true,
        explanation: "'A' se usa antes de consonantes, 'an' antes de vocales (por sonido). 'The' se usa para cosas específicas o únicas.",
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
            explanation: "'Umbrella' empieza con sonido de vocal, usamos 'an'."
          },
        ]
      },
    ]
  },
  {
    id: "prepositions",
    title: "Preposiciones",
    description: "In, on, at, by, for, with y más",
    icon: "📍",
    topics: [
      {
        id: "prepositions-time",
        title: "Preposiciones de Tiempo",
        level: "A1",
        completed: true,
        explanation: "'At' para horas específicas y momentos. 'On' para días y fechas. 'In' para meses, años, siglos y períodos largos.",
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
            explanation: "'At' para horas, 'on' para días."
          },
        ]
      },
      {
        id: "prepositions-place",
        title: "Preposiciones de Lugar",
        level: "A1",
        completed: true,
        explanation: "'At' para puntos específicos. 'On' para superficies. 'In' para espacios cerrados o áreas.",
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
            explanation: "'In' para dentro de espacios."
          },
        ]
      },
    ]
  },
  {
    id: "pronouns",
    title: "Pronombres",
    description: "Personales, posesivos, reflexivos y relativos",
    icon: "👤",
    topics: [
      {
        id: "personal-pronouns",
        title: "Pronombres Personales",
        level: "A1",
        completed: true,
        explanation: "Los pronombres sujeto (I, you, he, she, it, we, they) reemplazan al sujeto. Los pronombres objeto (me, you, him, her, it, us, them) reciben la acción.",
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
            explanation: "Después de verbos usamos pronombres objeto: me, them."
          },
        ]
      },
    ]
  },
  {
    id: "reported-speech",
    title: "Estilo Indirecto",
    description: "Cómo reportar lo que otros dijeron",
    icon: "💬",
    topics: [
      {
        id: "reported-speech-statements",
        title: "Reported Speech - Afirmaciones",
        level: "B1",
        completed: false,
        explanation: "Al reportar lo que alguien dijo, los tiempos verbales retroceden: present → past, past → past perfect, will → would.",
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
            explanation: "Present simple → Past simple en reported speech."
          },
        ]
      },
    ]
  },
  {
    id: "gerunds-infinitives",
    title: "Gerundio e Infinitivo",
    description: "Cuándo usar -ing vs to + verbo",
    icon: "🔤",
    topics: [
      {
        id: "gerund-after-verbs",
        title: "Gerundio después de Verbos",
        level: "B1",
        completed: false,
        explanation: "Algunos verbos van seguidos de gerundio (-ing): enjoy, avoid, finish, mind, suggest, consider, etc.",
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
            explanation: "'Enjoy' va seguido de gerundio."
          },
        ]
      },
      {
        id: "infinitive-after-verbs",
        title: "Infinitivo después de Verbos",
        level: "B1",
        completed: false,
        explanation: "Algunos verbos van seguidos de infinitivo (to + verbo): want, need, decide, hope, expect, plan, etc.",
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
            explanation: "'Decide' va seguido de infinitivo."
          },
        ]
      },
    ]
  },
];

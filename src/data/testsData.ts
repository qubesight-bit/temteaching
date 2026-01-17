// Tests data with specific questions for vocabulary and grammar by level

export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface TestDefinition {
  id: string;
  title: string;
  description: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  type: "grammar" | "vocabulary" | "placement";
  questionsCount: number;
  duration: number;
  questions: TestQuestion[];
}

// A1 Grammar Questions - Present Simple, Pronouns, Articles
const a1GrammarQuestions: TestQuestion[] = [
  { id: "a1g1", question: "She ___ to school every day.", options: ["go", "goes", "going", "gone"], correctAnswer: "goes", explanation: "Con tercera persona singular (she) usamos 'goes'." },
  { id: "a1g2", question: "I ___ a student.", options: ["am", "is", "are", "be"], correctAnswer: "am", explanation: "Con 'I' siempre usamos 'am'." },
  { id: "a1g3", question: "They ___ from Spain.", options: ["is", "am", "are", "be"], correctAnswer: "are", explanation: "Con 'they' usamos 'are'." },
  { id: "a1g4", question: "___ he like pizza?", options: ["Do", "Does", "Is", "Are"], correctAnswer: "Does", explanation: "Para preguntas en Present Simple con 'he' usamos 'Does'." },
  { id: "a1g5", question: "I have ___ apple.", options: ["a", "an", "the", "-"], correctAnswer: "an", explanation: "'Apple' empieza con vocal, usamos 'an'." },
  { id: "a1g6", question: "This is ___ book.", options: ["a", "an", "the", "-"], correctAnswer: "a", explanation: "'Book' empieza con consonante, usamos 'a'." },
  { id: "a1g7", question: "___ is my brother.", options: ["He", "Him", "His", "Her"], correctAnswer: "He", explanation: "'He' es pronombre sujeto para masculino." },
  { id: "a1g8", question: "I like ___ very much.", options: ["she", "her", "hers", "his"], correctAnswer: "her", explanation: "'Her' es pronombre objeto." },
  { id: "a1g9", question: "My cat ___ milk.", options: ["drink", "drinks", "drinking", "drank"], correctAnswer: "drinks", explanation: "Tercera persona singular añade -s." },
  { id: "a1g10", question: "We ___ English.", options: ["speaks", "speak", "speaking", "spoke"], correctAnswer: "speak", explanation: "Con 'we' el verbo va sin -s." },
  { id: "a1g11", question: "___ you from Mexico?", options: ["Is", "Am", "Are", "Be"], correctAnswer: "Are", explanation: "Con 'you' usamos 'are'." },
  { id: "a1g12", question: "She ___ not like coffee.", options: ["do", "does", "is", "are"], correctAnswer: "does", explanation: "Negación en Present Simple con 'she' usa 'does not'." },
  { id: "a1g13", question: "This is ___ pen.", options: ["my", "I", "me", "mine"], correctAnswer: "my", explanation: "'My' es adjetivo posesivo." },
  { id: "a1g14", question: "The children ___ in the park.", options: ["plays", "play", "playing", "played"], correctAnswer: "play", explanation: "'Children' es plural, el verbo va sin -s." },
  { id: "a1g15", question: "I ___ breakfast at 8 o'clock.", options: ["has", "have", "having", "had"], correctAnswer: "have", explanation: "Con 'I' usamos 'have', no 'has'." },
];

// A1 Vocabulary Questions - Family, Food, Colors, Numbers
const a1VocabularyQuestions: TestQuestion[] = [
  { id: "a1v1", question: "My father's mother is my ___.", options: ["aunt", "grandmother", "sister", "mother"], correctAnswer: "grandmother", explanation: "La madre de tu padre es tu abuela (grandmother)." },
  { id: "a1v2", question: "The color of the sky is ___.", options: ["red", "green", "blue", "yellow"], correctAnswer: "blue", explanation: "El cielo es azul (blue)." },
  { id: "a1v3", question: "1 + 2 = ___", options: ["two", "three", "four", "five"], correctAnswer: "three", explanation: "Uno más dos es tres (three)." },
  { id: "a1v4", question: "I eat ___ for breakfast.", options: ["bread", "dinner", "lunch", "supper"], correctAnswer: "bread", explanation: "El pan (bread) es comida típica del desayuno." },
  { id: "a1v5", question: "My mother's sister is my ___.", options: ["grandmother", "cousin", "aunt", "niece"], correctAnswer: "aunt", explanation: "La hermana de tu madre es tu tía (aunt)." },
  { id: "a1v6", question: "A tomato is ___.", options: ["blue", "green", "red", "white"], correctAnswer: "red", explanation: "Los tomates son rojos (red)." },
  { id: "a1v7", question: "The day after Monday is ___.", options: ["Sunday", "Tuesday", "Wednesday", "Friday"], correctAnswer: "Tuesday", explanation: "Después del lunes viene el martes (Tuesday)." },
  { id: "a1v8", question: "I drink ___ when I'm thirsty.", options: ["bread", "water", "meat", "rice"], correctAnswer: "water", explanation: "Bebemos agua (water) cuando tenemos sed." },
  { id: "a1v9", question: "My brother's daughter is my ___.", options: ["niece", "nephew", "cousin", "aunt"], correctAnswer: "niece", explanation: "La hija de tu hermano es tu sobrina (niece)." },
  { id: "a1v10", question: "Grass is ___.", options: ["blue", "red", "green", "yellow"], correctAnswer: "green", explanation: "La hierba es verde (green)." },
  { id: "a1v11", question: "10 + 10 = ___", options: ["ten", "fifteen", "twenty", "thirty"], correctAnswer: "twenty", explanation: "Diez más diez es veinte (twenty)." },
  { id: "a1v12", question: "We eat ___ with rice.", options: ["juice", "chicken", "milk", "water"], correctAnswer: "chicken", explanation: "El pollo (chicken) se come con arroz." },
  { id: "a1v13", question: "The first month of the year is ___.", options: ["March", "February", "January", "December"], correctAnswer: "January", explanation: "El primer mes del año es enero (January)." },
  { id: "a1v14", question: "My parents' son is my ___.", options: ["uncle", "cousin", "brother", "nephew"], correctAnswer: "brother", explanation: "El hijo de tus padres es tu hermano (brother)." },
  { id: "a1v15", question: "A banana is ___.", options: ["red", "blue", "yellow", "green"], correctAnswer: "yellow", explanation: "Los plátanos son amarillos (yellow)." },
  { id: "a1v16", question: "I have ___ in the morning.", options: ["dinner", "lunch", "breakfast", "supper"], correctAnswer: "breakfast", explanation: "Por la mañana tomamos el desayuno (breakfast)." },
  { id: "a1v17", question: "The weekend includes Saturday and ___.", options: ["Monday", "Friday", "Sunday", "Tuesday"], correctAnswer: "Sunday", explanation: "El fin de semana es sábado y domingo (Sunday)." },
  { id: "a1v18", question: "100 = ___", options: ["ten", "hundred", "thousand", "million"], correctAnswer: "hundred", explanation: "100 es cien (hundred)." },
  { id: "a1v19", question: "I drink ___ in the morning.", options: ["soup", "coffee", "salad", "bread"], correctAnswer: "coffee", explanation: "Por la mañana bebemos café (coffee)." },
  { id: "a1v20", question: "My father's brother is my ___.", options: ["grandfather", "uncle", "nephew", "cousin"], correctAnswer: "uncle", explanation: "El hermano de tu padre es tu tío (uncle)." },
];

// A2 Grammar Questions - Past Simple, Future, Comparatives
const a2GrammarQuestions: TestQuestion[] = [
  { id: "a2g1", question: "Yesterday I ___ to the cinema.", options: ["go", "went", "going", "gone"], correctAnswer: "went", explanation: "'Yesterday' indica pasado, usamos 'went'." },
  { id: "a2g2", question: "She ___ her homework last night.", options: ["do", "did", "does", "done"], correctAnswer: "did", explanation: "En pasado simple usamos 'did'." },
  { id: "a2g3", question: "I ___ visit my grandparents next week.", options: ["will", "am", "was", "did"], correctAnswer: "will", explanation: "'Next week' indica futuro, usamos 'will'." },
  { id: "a2g4", question: "My house is ___ than yours.", options: ["big", "bigger", "biggest", "more big"], correctAnswer: "bigger", explanation: "Comparativo de 'big' es 'bigger'." },
  { id: "a2g5", question: "She is the ___ student in the class.", options: ["intelligent", "more intelligent", "most intelligent", "intelligenter"], correctAnswer: "most intelligent", explanation: "Superlativo de adjetivos largos usa 'most'." },
  { id: "a2g6", question: "They ___ not come to the party yesterday.", options: ["do", "did", "does", "are"], correctAnswer: "did", explanation: "Negación en pasado simple usa 'did not'." },
  { id: "a2g7", question: "What ___ you do last weekend?", options: ["do", "did", "does", "are"], correctAnswer: "did", explanation: "Pregunta en pasado simple con 'what' usa 'did'." },
  { id: "a2g8", question: "He is ___ than his brother.", options: ["tall", "taller", "tallest", "more tall"], correctAnswer: "taller", explanation: "Comparativo de 'tall' es 'taller'." },
  { id: "a2g9", question: "I'm going ___ study medicine.", options: ["for", "to", "-", "at"], correctAnswer: "to", explanation: "'Going to' expresa planes futuros." },
  { id: "a2g10", question: "___ you see the movie last night?", options: ["Do", "Did", "Does", "Are"], correctAnswer: "Did", explanation: "Pregunta en pasado simple usa 'Did'." },
  { id: "a2g11", question: "This book is ___ expensive than that one.", options: ["more", "most", "much", "many"], correctAnswer: "more", explanation: "Comparativo de adjetivos largos usa 'more'." },
  { id: "a2g12", question: "She ___ to Paris last summer.", options: ["travel", "travels", "traveled", "traveling"], correctAnswer: "traveled", explanation: "'Last summer' indica pasado, usamos 'traveled'." },
  { id: "a2g13", question: "It ___ rain tomorrow.", options: ["will", "is", "was", "does"], correctAnswer: "will", explanation: "Para predicciones futuras usamos 'will'." },
  { id: "a2g14", question: "Mount Everest is the ___ mountain.", options: ["high", "higher", "highest", "more high"], correctAnswer: "highest", explanation: "Superlativo de 'high' es 'highest'." },
  { id: "a2g15", question: "I ___ born in 1990.", options: ["am", "is", "was", "were"], correctAnswer: "was", explanation: "Para el nacimiento usamos 'was born'." },
  { id: "a2g16", question: "They ___ working when I arrived.", options: ["was", "were", "are", "is"], correctAnswer: "were", explanation: "Con 'they' en pasado continuo usamos 'were'." },
  { id: "a2g17", question: "Coffee is ___ than tea.", options: ["strong", "stronger", "strongest", "more strong"], correctAnswer: "stronger", explanation: "Comparativo de 'strong' es 'stronger'." },
  { id: "a2g18", question: "I ___ never seen that movie.", options: ["has", "have", "had", "having"], correctAnswer: "have", explanation: "Con 'I' en present perfect usamos 'have'." },
  { id: "a2g19", question: "She is the ___ girl in our school.", options: ["pretty", "prettier", "prettiest", "more pretty"], correctAnswer: "prettiest", explanation: "Superlativo de 'pretty' es 'prettiest'." },
  { id: "a2g20", question: "We ___ going to have a party next Saturday.", options: ["am", "is", "are", "be"], correctAnswer: "are", explanation: "Con 'we' usamos 'are going to'." },
];

// A2 Vocabulary Questions - Travel, Work, Health
const a2VocabularyQuestions: TestQuestion[] = [
  { id: "a2v1", question: "You need a ___ to travel to another country.", options: ["ticket", "passport", "luggage", "platform"], correctAnswer: "passport", explanation: "El pasaporte (passport) es necesario para viajar al extranjero." },
  { id: "a2v2", question: "The plane takes off from the ___.", options: ["station", "airport", "port", "platform"], correctAnswer: "airport", explanation: "Los aviones despegan del aeropuerto (airport)." },
  { id: "a2v3", question: "I have a ___ with my boss at 3 PM.", options: ["meeting", "deadline", "salary", "promotion"], correctAnswer: "meeting", explanation: "Una reunión (meeting) es un encuentro de trabajo." },
  { id: "a2v4", question: "I have a ___. I need some aspirin.", options: ["stomachache", "headache", "toothache", "backache"], correctAnswer: "headache", explanation: "El dolor de cabeza (headache) se alivia con aspirina." },
  { id: "a2v5", question: "The train leaves from ___ 5.", options: ["door", "platform", "floor", "gate"], correctAnswer: "platform", explanation: "Los trenes salen de andenes (platforms)." },
  { id: "a2v6", question: "I need to see a ___ because I'm sick.", options: ["lawyer", "teacher", "doctor", "engineer"], correctAnswer: "doctor", explanation: "Cuando estás enfermo ves a un doctor (doctor)." },
  { id: "a2v7", question: "My ___ helped me with the project at work.", options: ["colleague", "cousin", "neighbor", "classmate"], correctAnswer: "colleague", explanation: "Un colega (colleague) es un compañero de trabajo." },
  { id: "a2v8", question: "I forgot to pack my ___ for the trip.", options: ["luggage", "passport", "ticket", "flight"], correctAnswer: "luggage", explanation: "El equipaje (luggage) contiene tu ropa y pertenencias." },
  { id: "a2v9", question: "The doctor gave me a ___ for my medicine.", options: ["symptom", "appointment", "prescription", "treatment"], correctAnswer: "prescription", explanation: "Una receta (prescription) te permite comprar medicina." },
  { id: "a2v10", question: "She got a ___ and now she's the manager.", options: ["salary", "deadline", "promotion", "meeting"], correctAnswer: "promotion", explanation: "Un ascenso (promotion) te da un mejor puesto." },
  { id: "a2v11", question: "What ___ is your flight?", options: ["hour", "time", "moment", "schedule"], correctAnswer: "time", explanation: "Preguntamos 'What time?' para saber la hora." },
  { id: "a2v12", question: "I need to take this ___ three times a day.", options: ["symptom", "medicine", "doctor", "appointment"], correctAnswer: "medicine", explanation: "La medicina (medicine) se toma según indicaciones." },
  { id: "a2v13", question: "The project ___ is next Friday.", options: ["meeting", "salary", "deadline", "colleague"], correctAnswer: "deadline", explanation: "La fecha límite (deadline) es cuando debe entregarse algo." },
  { id: "a2v14", question: "Where can I buy a ___ for the bus?", options: ["passport", "luggage", "ticket", "platform"], correctAnswer: "ticket", explanation: "Necesitas un boleto (ticket) para viajar en bus." },
  { id: "a2v15", question: "I feel ___. I think I have a fever.", options: ["healthy", "sick", "happy", "tired"], correctAnswer: "sick", explanation: "Cuando tienes fiebre te sientes enfermo (sick)." },
  { id: "a2v16", question: "My ___ this month was higher than usual.", options: ["meeting", "deadline", "promotion", "salary"], correctAnswer: "salary", explanation: "El salario (salary) es tu pago mensual." },
  { id: "a2v17", question: "The ___ to Paris is 2 hours.", options: ["flight", "airport", "luggage", "passport"], correctAnswer: "flight", explanation: "El vuelo (flight) es el viaje en avión." },
  { id: "a2v18", question: "What are your ___ for this illness?", options: ["symptoms", "prescriptions", "medicines", "doctors"], correctAnswer: "symptoms", explanation: "Los síntomas (symptoms) son señales de enfermedad." },
  { id: "a2v19", question: "I work in an ___ downtown.", options: ["airport", "office", "hospital", "airport"], correctAnswer: "office", explanation: "Una oficina (office) es un lugar de trabajo." },
  { id: "a2v20", question: "I have a doctor's ___ tomorrow at 10 AM.", options: ["meeting", "appointment", "deadline", "prescription"], correctAnswer: "appointment", explanation: "Una cita (appointment) es una reunión programada." },
  { id: "a2v21", question: "The ___ is in terminal 3.", options: ["flight", "platform", "gate", "ticket"], correctAnswer: "gate", explanation: "La puerta de embarque (gate) está en la terminal." },
  { id: "a2v22", question: "I need to check in my ___ at the counter.", options: ["passport", "ticket", "luggage", "boarding pass"], correctAnswer: "luggage", explanation: "Registras el equipaje (luggage) en el mostrador." },
  { id: "a2v23", question: "My ___ is very kind and helpful.", options: ["boss", "flight", "ticket", "luggage"], correctAnswer: "boss", explanation: "El jefe (boss) es quien dirige en el trabajo." },
  { id: "a2v24", question: "The pharmacy is where you buy ___.", options: ["tickets", "medicine", "luggage", "flights"], correctAnswer: "medicine", explanation: "En la farmacia compras medicinas (medicine)." },
  { id: "a2v25", question: "Our ___ is located on the 5th floor.", options: ["flight", "office", "platform", "terminal"], correctAnswer: "office", explanation: "La oficina (office) es el lugar de trabajo." },
];

// B1 Grammar Questions - Present Perfect, Conditionals, Passive
const b1GrammarQuestions: TestQuestion[] = [
  { id: "b1g1", question: "I have ___ to London three times.", options: ["be", "been", "being", "was"], correctAnswer: "been", explanation: "Present perfect: have + participio pasado (been)." },
  { id: "b1g2", question: "If it ___, we will stay home.", options: ["rain", "rains", "rained", "raining"], correctAnswer: "rains", explanation: "First conditional: If + present simple, will + infinitive." },
  { id: "b1g3", question: "The letter ___ sent yesterday.", options: ["is", "was", "were", "be"], correctAnswer: "was", explanation: "Voz pasiva en pasado: was + participio." },
  { id: "b1g4", question: "She has ___ finished her homework.", options: ["yet", "already", "still", "ago"], correctAnswer: "already", explanation: "'Already' se usa en oraciones afirmativas de present perfect." },
  { id: "b1g5", question: "If I ___ you, I would study more.", options: ["am", "was", "were", "be"], correctAnswer: "were", explanation: "Second conditional: If + past simple (were para todas las personas)." },
  { id: "b1g6", question: "English ___ spoken in many countries.", options: ["is", "are", "was", "were"], correctAnswer: "is", explanation: "Voz pasiva en presente: is + participio." },
  { id: "b1g7", question: "Have you ___ tried sushi?", options: ["never", "ever", "already", "yet"], correctAnswer: "ever", explanation: "'Ever' se usa en preguntas de present perfect para experiencias." },
  { id: "b1g8", question: "If I had money, I ___ a new car.", options: ["buy", "will buy", "would buy", "bought"], correctAnswer: "would buy", explanation: "Second conditional: would + infinitive." },
  { id: "b1g9", question: "The movie ___ by millions of people.", options: ["watched", "was watched", "is watching", "watches"], correctAnswer: "was watched", explanation: "Voz pasiva en pasado para acciones completadas." },
  { id: "b1g10", question: "I have known her ___ 2010.", options: ["for", "since", "from", "during"], correctAnswer: "since", explanation: "'Since' + punto en el tiempo específico." },
  { id: "b1g11", question: "If you ___ me, what would you do?", options: ["are", "was", "were", "be"], correctAnswer: "were", explanation: "Second conditional hipotético: 'If I were you'." },
  { id: "b1g12", question: "The book ___ by a famous author.", options: ["write", "wrote", "written", "was written"], correctAnswer: "was written", explanation: "Voz pasiva: was + participio pasado." },
  { id: "b1g13", question: "She ___ worked here for five years.", options: ["have", "has", "had", "having"], correctAnswer: "has", explanation: "Con 'she' en present perfect usamos 'has'." },
  { id: "b1g14", question: "If it rains tomorrow, we ___ the picnic.", options: ["cancel", "will cancel", "would cancel", "canceled"], correctAnswer: "will cancel", explanation: "First conditional: will + infinitive." },
  { id: "b1g15", question: "The report ___ finished by Monday.", options: ["will be", "will", "is", "was"], correctAnswer: "will be", explanation: "Voz pasiva en futuro: will be + participio." },
  { id: "b1g16", question: "I have lived here ___ three years.", options: ["for", "since", "from", "during"], correctAnswer: "for", explanation: "'For' + período de tiempo." },
  { id: "b1g17", question: "___ you ever been to Japan?", options: ["Have", "Has", "Did", "Do"], correctAnswer: "Have", explanation: "Pregunta en present perfect con 'you' usa 'Have'." },
  { id: "b1g18", question: "The homework must ___ done by Friday.", options: ["is", "be", "was", "been"], correctAnswer: "be", explanation: "Modal + be + participio para voz pasiva." },
  { id: "b1g19", question: "If she ___ harder, she would pass.", options: ["study", "studies", "studied", "studying"], correctAnswer: "studied", explanation: "Second conditional: If + past simple." },
  { id: "b1g20", question: "I haven't seen him ___ last month.", options: ["for", "since", "from", "during"], correctAnswer: "since", explanation: "'Since' indica un punto en el pasado." },
  { id: "b1g21", question: "Spanish ___ in many countries.", options: ["speak", "speaks", "is spoken", "speaking"], correctAnswer: "is spoken", explanation: "Voz pasiva: is + participio pasado." },
  { id: "b1g22", question: "She ___ just arrived at the office.", options: ["have", "has", "had", "is"], correctAnswer: "has", explanation: "'Just' con present perfect indica acción reciente." },
  { id: "b1g23", question: "If I won the lottery, I ___ around the world.", options: ["travel", "will travel", "would travel", "traveled"], correctAnswer: "would travel", explanation: "Second conditional para situaciones hipotéticas." },
  { id: "b1g24", question: "The new bridge ___ opened next year.", options: ["is", "will be", "was", "has been"], correctAnswer: "will be", explanation: "Voz pasiva futura: will be + participio." },
  { id: "b1g25", question: "They have ___ here since 2015.", options: ["live", "lived", "living", "lives"], correctAnswer: "lived", explanation: "Present perfect: have + participio pasado." },
];

// B1 Vocabulary Questions - Emotions, Technology, Business
const b1VocabularyQuestions: TestQuestion[] = [
  { id: "b1v1", question: "I feel ___ about my exam results.", options: ["anxious", "hungry", "thirsty", "sleepy"], correctAnswer: "anxious", explanation: "Ansioso (anxious) describe nerviosismo por resultados." },
  { id: "b1v2", question: "You need to ___ the app to get new features.", options: ["delete", "update", "download", "install"], correctAnswer: "update", explanation: "Actualizar (update) trae nuevas funciones." },
  { id: "b1v3", question: "I'm so ___ she didn't call me back.", options: ["excited", "grateful", "disappointed", "anxious"], correctAnswer: "disappointed", explanation: "Decepcionado (disappointed) por expectativas no cumplidas." },
  { id: "b1v4", question: "I forgot my ___ and can't log in.", options: ["software", "password", "download", "upload"], correctAnswer: "password", explanation: "La contraseña (password) permite acceder a cuentas." },
  { id: "b1v5", question: "Our company is launching a new ___.", options: ["software", "bandwidth", "wireless", "upload"], correctAnswer: "software", explanation: "Software es un programa o aplicación." },
  { id: "b1v6", question: "I'm ___ for all your help.", options: ["disappointed", "grateful", "overwhelmed", "anxious"], correctAnswer: "grateful", explanation: "Agradecido (grateful) por la ayuda recibida." },
  { id: "b1v7", question: "Please ___ the document to the server.", options: ["download", "upload", "delete", "password"], correctAnswer: "upload", explanation: "Subir (upload) archivos al servidor." },
  { id: "b1v8", question: "I'm so ___ about my promotion!", options: ["disappointed", "anxious", "excited", "overwhelmed"], correctAnswer: "excited", explanation: "Emocionado (excited) por buenas noticias." },
  { id: "b1v9", question: "Do you have ___ internet here?", options: ["wireless", "bandwidth", "software", "password"], correctAnswer: "wireless", explanation: "Internet inalámbrico (wireless) sin cables." },
  { id: "b1v10", question: "I feel ___ with all this work.", options: ["excited", "grateful", "disappointed", "overwhelmed"], correctAnswer: "overwhelmed", explanation: "Abrumado (overwhelmed) por exceso de trabajo." },
  { id: "b1v11", question: "The documentary was very ___.", options: ["boring", "interesting", "disappointed", "anxious"], correctAnswer: "interesting", explanation: "Interesante (interesting) describe contenido atractivo." },
  { id: "b1v12", question: "Her ___ in the play was amazing.", options: ["performance", "exhibition", "documentary", "audience"], correctAnswer: "performance", explanation: "Actuación (performance) en una obra teatral." },
  { id: "b1v13", question: "We need more ___ for faster internet.", options: ["password", "software", "bandwidth", "upload"], correctAnswer: "bandwidth", explanation: "Ancho de banda (bandwidth) para velocidad de internet." },
  { id: "b1v14", question: "I watched an interesting ___ about nature.", options: ["performance", "documentary", "exhibition", "concert"], correctAnswer: "documentary", explanation: "Un documental (documentary) sobre naturaleza." },
  { id: "b1v15", question: "Click here to ___ the file.", options: ["upload", "download", "password", "software"], correctAnswer: "download", explanation: "Descargar (download) archivos a tu dispositivo." },
  { id: "b1v16", question: "The art ___ opens tomorrow.", options: ["performance", "documentary", "exhibition", "concert"], correctAnswer: "exhibition", explanation: "Exposición de arte (exhibition)." },
  { id: "b1v17", question: "She looked ___ before the interview.", options: ["anxious", "grateful", "excited", "disappointed"], correctAnswer: "anxious", explanation: "Ansioso (anxious) por nervios antes de entrevistas." },
  { id: "b1v18", question: "The ___ really enjoyed the concert.", options: ["performance", "exhibition", "audience", "documentary"], correctAnswer: "audience", explanation: "El público (audience) disfrutó el concierto." },
  { id: "b1v19", question: "I need to install new ___ on my computer.", options: ["wireless", "password", "bandwidth", "software"], correctAnswer: "software", explanation: "Instalar software (programas) en la computadora." },
  { id: "b1v20", question: "She felt ___ after receiving the award.", options: ["disappointed", "anxious", "grateful", "overwhelmed"], correctAnswer: "grateful", explanation: "Agradecida (grateful) por el reconocimiento." },
  { id: "b1v21", question: "The budget for this project is very ___.", options: ["tight", "loose", "open", "free"], correctAnswer: "tight", explanation: "Presupuesto ajustado (tight budget)." },
  { id: "b1v22", question: "We need to ___ a new strategy.", options: ["develop", "delete", "download", "upload"], correctAnswer: "develop", explanation: "Desarrollar (develop) una nueva estrategia." },
  { id: "b1v23", question: "The ___ approved the new project.", options: ["software", "committee", "bandwidth", "password"], correctAnswer: "committee", explanation: "El comité (committee) aprueba proyectos." },
  { id: "b1v24", question: "I'm ___ about meeting new colleagues.", options: ["excited", "disappointed", "overwhelmed", "grateful"], correctAnswer: "excited", explanation: "Emocionado (excited) por conocer gente nueva." },
  { id: "b1v25", question: "The internet connection is too ___.", options: ["slow", "fast", "high", "low"], correctAnswer: "slow", explanation: "Conexión lenta (slow) de internet." },
  { id: "b1v26", question: "We need to improve our customer ___.", options: ["service", "software", "password", "exhibition"], correctAnswer: "service", explanation: "Servicio al cliente (customer service)." },
  { id: "b1v27", question: "The ___ of the presentation was excellent.", options: ["quality", "wireless", "bandwidth", "download"], correctAnswer: "quality", explanation: "Calidad (quality) de la presentación." },
  { id: "b1v28", question: "She is very ___ about learning new things.", options: ["enthusiastic", "disappointed", "anxious", "overwhelmed"], correctAnswer: "enthusiastic", explanation: "Entusiasta (enthusiastic) por aprender." },
  { id: "b1v29", question: "The company's ___ has grown significantly.", options: ["revenue", "password", "software", "wireless"], correctAnswer: "revenue", explanation: "Ingresos (revenue) de la empresa." },
  { id: "b1v30", question: "We need to ___ the report by Friday.", options: ["submit", "download", "upload", "delete"], correctAnswer: "submit", explanation: "Entregar (submit) el informe." },
];

// B2 Grammar Questions - Advanced Conditionals, Reported Speech
const b2GrammarQuestions: TestQuestion[] = [
  { id: "b2g1", question: "If I ___ known, I would have called you.", options: ["have", "had", "has", "having"], correctAnswer: "had", explanation: "Third conditional: If + had + participio pasado." },
  { id: "b2g2", question: "She said she ___ working on the project.", options: ["is", "was", "were", "be"], correctAnswer: "was", explanation: "Reported speech: tiempo verbal retrocede." },
  { id: "b2g3", question: "Had I known, I ___ have come earlier.", options: ["will", "would", "should", "could"], correctAnswer: "would", explanation: "Third conditional con inversión." },
  { id: "b2g4", question: "He asked me where I ___.", options: ["live", "lived", "living", "lives"], correctAnswer: "lived", explanation: "Reported speech en pasado." },
  { id: "b2g5", question: "If she ___ arrived earlier, she would have seen him.", options: ["have", "has", "had", "having"], correctAnswer: "had", explanation: "Third conditional: situación pasada hipotética." },
  { id: "b2g6", question: "She told me that she ___ been to Paris.", options: ["has", "had", "have", "having"], correctAnswer: "had", explanation: "Reported speech: present perfect → past perfect." },
  { id: "b2g7", question: "___ I to know, I would have warned you.", options: ["Were", "Was", "Had", "Have"], correctAnswer: "Were", explanation: "Inversión formal en condicional." },
  { id: "b2g8", question: "He asked me ___ I could help him.", options: ["that", "if", "what", "which"], correctAnswer: "if", explanation: "Reported speech: preguntas yes/no usan 'if'." },
  { id: "b2g9", question: "If I hadn't been so busy, I ___ you.", options: ["helped", "would help", "would have helped", "will help"], correctAnswer: "would have helped", explanation: "Third conditional: would have + participio." },
  { id: "b2g10", question: "She said she ___ come the next day.", options: ["will", "would", "can", "may"], correctAnswer: "would", explanation: "Reported speech: will → would." },
  { id: "b2g11", question: "By the time he arrived, the meeting ___.", options: ["started", "has started", "had started", "starts"], correctAnswer: "had started", explanation: "Past perfect para acción anterior a otra pasada." },
  { id: "b2g12", question: "He wondered why she ___ called.", options: ["hasn't", "hadn't", "didn't", "doesn't"], correctAnswer: "hadn't", explanation: "Reported speech con why mantiene estructura." },
  { id: "b2g13", question: "If only I ___ listened to your advice!", options: ["have", "had", "has", "having"], correctAnswer: "had", explanation: "'If only' + past perfect para arrepentimiento." },
  { id: "b2g14", question: "She asked me ___ time the train left.", options: ["which", "what", "when", "where"], correctAnswer: "what", explanation: "Reported speech: 'What time...?' usa 'what'." },
  { id: "b2g15", question: "Provided that you ___ hard, you will succeed.", options: ["work", "worked", "working", "works"], correctAnswer: "work", explanation: "'Provided that' + present simple para condiciones." },
  { id: "b2g16", question: "He told me ___ to wait for him.", options: ["that", "to", "-", "for"], correctAnswer: "to", explanation: "Reported speech: 'Wait!' → told me to wait." },
  { id: "b2g17", question: "I wish I ___ more time to travel.", options: ["have", "had", "has", "having"], correctAnswer: "had", explanation: "'Wish' + past simple para deseos presentes." },
  { id: "b2g18", question: "She asked whether I ___ available.", options: ["am", "was", "is", "be"], correctAnswer: "was", explanation: "Reported speech en pasado." },
  { id: "b2g19", question: "Unless you ___, you won't learn.", options: ["practice", "practiced", "practicing", "practices"], correctAnswer: "practice", explanation: "'Unless' = 'if not', toma present simple." },
  { id: "b2g20", question: "He denied ___ the money.", options: ["steal", "stealing", "to steal", "stole"], correctAnswer: "stealing", explanation: "'Deny' + gerund (-ing form)." },
  { id: "b2g21", question: "I'd rather you ___ that again.", options: ["don't do", "didn't do", "won't do", "haven't done"], correctAnswer: "didn't do", explanation: "'I'd rather you' + past simple." },
  { id: "b2g22", question: "She suggested ___ to the museum.", options: ["go", "going", "to go", "went"], correctAnswer: "going", explanation: "'Suggest' + gerund." },
  { id: "b2g23", question: "If you ___ to see him, say hello from me.", options: ["happen", "happened", "happening", "happens"], correctAnswer: "happen", explanation: "Condicional con 'happen to'." },
  { id: "b2g24", question: "He regretted ___ her the truth.", options: ["tell", "telling", "to tell", "told"], correctAnswer: "telling", explanation: "'Regret' + gerund para acciones pasadas." },
  { id: "b2g25", question: "Suppose you ___ the lottery, what would you do?", options: ["win", "won", "winning", "wins"], correctAnswer: "won", explanation: "'Suppose' + past simple para hipótesis." },
  { id: "b2g26", question: "She accused him ___ lying.", options: ["of", "for", "to", "about"], correctAnswer: "of", explanation: "'Accuse someone of' + gerund." },
  { id: "b2g27", question: "I wish I ___ more careful yesterday.", options: ["am", "was", "had been", "were"], correctAnswer: "had been", explanation: "'Wish' + past perfect para arrepentimiento pasado." },
  { id: "b2g28", question: "He reminded me ___ my passport.", options: ["bring", "to bring", "bringing", "brought"], correctAnswer: "to bring", explanation: "'Remind' + object + to infinitive." },
  { id: "b2g29", question: "Were she ___, she would understand.", options: ["here", "there", "been", "being"], correctAnswer: "here", explanation: "Inversión en second conditional." },
  { id: "b2g30", question: "She warned me ___ touch the painting.", options: ["not", "not to", "don't", "to not"], correctAnswer: "not to", explanation: "'Warn' + object + not to infinitive." },
];

// All test definitions
export const testDefinitions: TestDefinition[] = [
  {
    id: "a1-grammar",
    title: "Test de Gramática A1",
    description: "Presente simple, pronombres, artículos",
    level: "A1",
    type: "grammar",
    questionsCount: 15,
    duration: 10,
    questions: a1GrammarQuestions,
  },
  {
    id: "a1-vocab",
    title: "Test de Vocabulario A1",
    description: "Familia, comida, colores, números",
    level: "A1",
    type: "vocabulary",
    questionsCount: 20,
    duration: 12,
    questions: a1VocabularyQuestions,
  },
  {
    id: "a2-grammar",
    title: "Test de Gramática A2",
    description: "Pasado simple, futuro, comparativos",
    level: "A2",
    type: "grammar",
    questionsCount: 20,
    duration: 15,
    questions: a2GrammarQuestions,
  },
  {
    id: "a2-vocab",
    title: "Test de Vocabulario A2",
    description: "Viajes, trabajo, salud, compras",
    level: "A2",
    type: "vocabulary",
    questionsCount: 25,
    duration: 15,
    questions: a2VocabularyQuestions,
  },
  {
    id: "b1-grammar",
    title: "Test de Gramática B1",
    description: "Present perfect, condicionales, pasiva",
    level: "B1",
    type: "grammar",
    questionsCount: 25,
    duration: 20,
    questions: b1GrammarQuestions,
  },
  {
    id: "b1-vocab",
    title: "Test de Vocabulario B1",
    description: "Emociones, tecnología, negocios",
    level: "B1",
    type: "vocabulary",
    questionsCount: 30,
    duration: 20,
    questions: b1VocabularyQuestions,
  },
  {
    id: "b2-grammar",
    title: "Test de Gramática B2",
    description: "Condicionales avanzados, reported speech",
    level: "B2",
    type: "grammar",
    questionsCount: 30,
    duration: 25,
    questions: b2GrammarQuestions,
  },
];

// Helper function to get test by ID
export function getTestById(testId: string): TestDefinition | undefined {
  return testDefinitions.find(test => test.id === testId);
}

// Helper function to get tests by level
export function getTestsByLevel(level: TestDefinition['level']): TestDefinition[] {
  return testDefinitions.filter(test => test.level === level);
}

// Helper function to get tests by type
export function getTestsByType(type: TestDefinition['type']): TestDefinition[] {
  return testDefinitions.filter(test => test.type === type);
}

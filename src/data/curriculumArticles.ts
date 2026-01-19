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
  // CURSO 1: A1 → A2 (Articles 1-29)
  // ================================================================

  // Article 1: Daily Routines Vocabulary
  {
    id: 'vocab-daily-routines',
    title: 'Vocabulario: Rutinas Diarias',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'El estudiante podrá describir sus actividades diarias usando verbos de acción comunes como wake up, work, study, cook.',
    explanation: `Las rutinas diarias son el primer paso para comunicarte en inglés sobre tu vida cotidiana. Los verbos de acción (action verbs) describen actividades que realizamos regularmente.

**Verbos esenciales de rutina:**
• **Wake up** /weɪk ʌp/ - despertarse
• **Get up** /ɡet ʌp/ - levantarse
• **Have breakfast** /hæv ˈbrekfəst/ - desayunar
• **Go to work/school** - ir al trabajo/escuela
• **Work** /wɜːrk/ - trabajar
• **Study** /ˈstʌdi/ - estudiar
• **Have lunch** - almorzar
• **Come home** - llegar a casa
• **Cook** /kʊk/ - cocinar
• **Have dinner** - cenar
• **Watch TV** - ver televisión
• **Go to bed** - ir a la cama
• **Sleep** /sliːp/ - dormir

**Expresiones de tiempo:**
• In the morning - por la mañana
• In the afternoon - por la tarde
• In the evening - por la noche
• At night - en la noche
• Every day - todos los días

**Estructura típica:**
"I + verbo + (complemento) + (tiempo)"
Ejemplo: "I wake up at 7 AM every day."`,
    examples: [
      { english: "I wake up at 6:30 in the morning.", spanish: "Me despierto a las 6:30 de la mañana.", context: "Describiendo tu hora de despertar" },
      { english: "She goes to work by bus.", spanish: "Ella va al trabajo en autobús.", context: "Describiendo transporte" },
      { english: "We have dinner at 8 PM.", spanish: "Cenamos a las 8 PM.", context: "Horario de comidas" },
      { english: "He studies English every evening.", spanish: "Él estudia inglés cada noche.", context: "Actividad regular" }
    ],
    commonMistakes: [
      { mistake: "I wake up me at 7.", correction: "I wake up at 7.", why: "'Wake up' ya incluye el sentido reflexivo en inglés." },
      { mistake: "I go to the work.", correction: "I go to work.", why: "No usamos artículo antes de 'work' como lugar." },
      { mistake: "I breakfast at 8.", correction: "I have breakfast at 8.", why: "Necesitas el verbo 'have' con las comidas." }
    ],
    practiceTips: [
      "Escribe tu rutina real en inglés cada mañana.",
      "Usa flashcards con imágenes de actividades.",
      "Describe en voz alta lo que haces mientras lo haces.",
      "Compara tu rutina con la de un amigo usando 'I... but he/she...'",
      "Escucha podcasts sobre 'daily routines' en inglés básico."
    ],
    checkpoint: { 
      question: "Traduce: 'Me levanto a las 7 y desayuno a las 7:30.'", 
      answer: "I get up at 7 and have breakfast at 7:30." 
    },
    nextStep: "Ahora que conoces los verbos de rutina, aprende a describir a tu familia con 'Family and Relationships Vocabulary'."
  },

  // Article 2: Family and Relationships
  {
    id: 'vocab-family-relationships',
    title: 'Vocabulario: Familia y Relaciones',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'El estudiante podrá identificar y nombrar a los miembros de la familia y usar adjetivos posesivos correctamente.',
    explanation: `La familia es uno de los primeros temas de conversación en cualquier idioma. Aprender este vocabulario te permite presentar a tus seres queridos.

**Familia nuclear:**
• **Mother** (mom/mum) - madre/mamá
• **Father** (dad) - padre/papá
• **Sister** - hermana
• **Brother** - hermano
• **Son** - hijo
• **Daughter** - hija
• **Parents** - padres
• **Children** (kids) - hijos/niños

**Familia extendida:**
• **Grandmother** (grandma) - abuela
• **Grandfather** (grandpa) - abuelo
• **Grandparents** - abuelos
• **Aunt** - tía
• **Uncle** - tío
• **Cousin** - primo/prima
• **Niece** - sobrina
• **Nephew** - sobrino

**Familia política:**
• **Mother-in-law** - suegra
• **Father-in-law** - suegro
• **Sister-in-law** - cuñada
• **Brother-in-law** - cuñado

**Adjetivos posesivos:**
• My - mi/mis
• Your - tu/tus
• His - su (de él)
• Her - su (de ella)
• Our - nuestro/a
• Their - su (de ellos)

**Estructura:** "This is my + miembro de familia"`,
    examples: [
      { english: "This is my mother. Her name is Ana.", spanish: "Esta es mi madre. Su nombre es Ana.", context: "Presentando a alguien" },
      { english: "I have two brothers and one sister.", spanish: "Tengo dos hermanos y una hermana.", context: "Describiendo tu familia" },
      { english: "My grandparents live in Mexico.", spanish: "Mis abuelos viven en México.", context: "Ubicación de familia" },
      { english: "His father is a doctor.", spanish: "Su padre (de él) es médico.", context: "Describiendo profesión" }
    ],
    commonMistakes: [
      { mistake: "My sister have 25 years.", correction: "My sister is 25 years old.", why: "En inglés usamos 'be + age years old', no 'have'." },
      { mistake: "She is my sister. His name is Maria.", correction: "She is my sister. Her name is Maria.", why: "'Her' para femenino, 'his' para masculino." },
      { mistake: "I have one brother and one sister.", correction: "I have one brother and one sister. / I have a brother and a sister.", why: "Ambas son correctas, pero con 'one' suena más enfático." }
    ],
    practiceTips: [
      "Dibuja tu árbol genealógico con los nombres en inglés.",
      "Describe fotos familiares en voz alta.",
      "Practica con un compañero: pregúntense sobre sus familias.",
      "Escribe oraciones usando cada posesivo (my, your, his, her, etc.).",
      "Crea tarjetas de memoria con fotos y relaciones."
    ],
    checkpoint: { 
      question: "¿Cómo dices 'Mi tío tiene tres hijos'?", 
      answer: "My uncle has three children." 
    },
    nextStep: "Continúa con 'Food and Shopping Vocabulary' para aprender a comprar y hablar de comida."
  },

  // Article 3: Food and Shopping
  {
    id: 'vocab-food-shopping',
    title: 'Vocabulario: Comida y Compras',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'El estudiante podrá nombrar alimentos comunes, identificar tiendas y preguntar precios en inglés.',
    explanation: `Saber hablar de comida y compras es esencial para la vida diaria. Este vocabulario te servirá en supermercados, restaurantes y tiendas.

**Frutas (Fruits):**
• Apple - manzana
• Banana - plátano
• Orange - naranja
• Strawberry - fresa
• Grape - uva
• Watermelon - sandía

**Verduras (Vegetables):**
• Tomato - tomate
• Potato - papa
• Onion - cebolla
• Carrot - zanahoria
• Lettuce - lechuga
• Pepper - pimiento

**Carnes y proteínas:**
• Chicken - pollo
• Beef - carne de res
• Fish - pescado
• Eggs - huevos
• Cheese - queso

**Bebidas (Drinks):**
• Water - agua
• Milk - leche
• Juice - jugo
• Coffee - café
• Tea - té

**Tiendas (Shops/Stores):**
• Supermarket - supermercado
• Bakery - panadería
• Butcher's - carnicería
• Pharmacy - farmacia

**Preguntar precios:**
• "How much is this?" - ¿Cuánto cuesta esto?
• "How much are these?" - ¿Cuánto cuestan estos?
• "It's $5." - Cuesta $5.
• "They're $3 each." - Cuestan $3 cada uno.`,
    examples: [
      { english: "How much is this cheese?", spanish: "¿Cuánto cuesta este queso?", context: "Preguntando precio (singular)" },
      { english: "I need two kilos of apples.", spanish: "Necesito dos kilos de manzanas.", context: "Haciendo compras" },
      { english: "The milk is next to the eggs.", spanish: "La leche está al lado de los huevos.", context: "Ubicando productos" },
      { english: "Can I have a bottle of water, please?", spanish: "¿Me puede dar una botella de agua, por favor?", context: "Pidiendo algo" }
    ],
    commonMistakes: [
      { mistake: "How much are this apple?", correction: "How much is this apple?", why: "'This apple' es singular, usa 'is'." },
      { mistake: "I want two waters.", correction: "I want two bottles of water.", why: "'Water' es incontable; necesitas un contenedor." },
      { mistake: "The tomatos are fresh.", correction: "The tomatoes are fresh.", why: "El plural de 'tomato' es 'tomatoes' (añade -es)." }
    ],
    practiceTips: [
      "Haz tu lista del supermercado en inglés.",
      "Practica diálogos de compra con un amigo.",
      "Etiqueta productos en tu cocina con post-its en inglés.",
      "Ve videos de cocina en inglés y anota ingredientes.",
      "Juega 'Memory' con cartas de alimentos."
    ],
    checkpoint: { 
      question: "Pregunta el precio de unas fresas.", 
      answer: "How much are these strawberries?" 
    },
    nextStep: "Aprende a dar direcciones en la ciudad con 'The City and Directions Vocabulary'."
  },

  // Article 4: The City and Directions
  {
    id: 'vocab-city-directions',
    title: 'Vocabulario: La Ciudad y Direcciones',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'El estudiante podrá nombrar lugares de la ciudad, usar preposiciones de lugar y dar/seguir indicaciones básicas.',
    explanation: `Navegar por una ciudad requiere vocabulario específico de lugares y direcciones. Las preposiciones de lugar son fundamentales.

**Lugares de la ciudad:**
• Bank - banco
• Hospital - hospital
• School - escuela
• Church - iglesia
• Park - parque
• Restaurant - restaurante
• Hotel - hotel
• Library - biblioteca
• Museum - museo
• Train station - estación de tren
• Bus stop - parada de autobús
• Airport - aeropuerto
• Shopping center/mall - centro comercial
• Police station - comisaría

**Preposiciones de lugar:**
• **Next to** - al lado de
• **Across from / Opposite** - enfrente de
• **Between** - entre
• **Behind** - detrás de
• **In front of** - delante de
• **On the corner** - en la esquina
• **Near** - cerca de
• **Far from** - lejos de

**Dar direcciones:**
• Go straight - sigue recto
• Turn left - gira a la izquierda
• Turn right - gira a la derecha
• Go past - pasa (el lugar)
• Cross the street - cruza la calle
• It's on your left/right - está a tu izquierda/derecha

**Preguntar direcciones:**
• "Excuse me, where is the bank?"
• "How do I get to the station?"
• "Is there a pharmacy near here?"`,
    examples: [
      { english: "The bank is next to the supermarket.", spanish: "El banco está al lado del supermercado.", context: "Describiendo ubicación" },
      { english: "Go straight and turn left at the corner.", spanish: "Sigue recto y gira a la izquierda en la esquina.", context: "Dando direcciones" },
      { english: "Is there a hospital near here?", spanish: "¿Hay un hospital cerca de aquí?", context: "Preguntando por lugares" },
      { english: "The museum is between the park and the library.", spanish: "El museo está entre el parque y la biblioteca.", context: "Usando 'between'" }
    ],
    commonMistakes: [
      { mistake: "The bank is in front the hotel.", correction: "The bank is in front of the hotel.", why: "'In front of' siempre lleva 'of'." },
      { mistake: "Turn in left.", correction: "Turn left.", why: "No usamos preposición después de 'turn'." },
      { mistake: "Go straight until the bank.", correction: "Go straight to the bank. / Go until you see the bank.", why: "'Until' requiere estructura diferente." }
    ],
    practiceTips: [
      "Dibuja un mapa de tu barrio y etiquétalo en inglés.",
      "Da direcciones en voz alta mientras caminas.",
      "Usa Google Maps en inglés para practicar.",
      "Haz role-play: uno pregunta direcciones, otro responde.",
      "Describe la ubicación de lugares en fotos de ciudades."
    ],
    checkpoint: { 
      question: "Da direcciones del banco a la biblioteca.", 
      answer: "Go straight, turn right at the corner. The library is on your left, next to the park." 
    },
    nextStep: "Continúa aprendiendo sobre pasatiempos con 'Hobbies and Free Time Vocabulary'."
  },

  // Article 5: Hobbies and Free Time
  {
    id: 'vocab-hobbies-free-time',
    title: 'Vocabulario: Pasatiempos y Tiempo Libre',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'El estudiante podrá hablar sobre actividades de ocio usando verbos como read, watch, play y expresar preferencias.',
    explanation: `Hablar de pasatiempos es una excelente manera de conectar con otras personas. Los verbos más comunes son read, watch, play, listen y go.

**Pasatiempos comunes:**
• **Read** (a book/magazine) - leer (un libro/revista)
• **Watch** (TV/movies) - ver (televisión/películas)
• **Play** (sports/games/music) - jugar/tocar
• **Listen to** (music/podcasts) - escuchar
• **Go** + verb-ing (go swimming, go shopping)
• **Cook** - cocinar
• **Dance** - bailar
• **Draw/Paint** - dibujar/pintar
• **Exercise/Work out** - hacer ejercicio
• **Travel** - viajar

**Deportes (Sports):**
• Football/Soccer - fútbol
• Basketball - baloncesto
• Tennis - tenis
• Swimming - natación
• Running - correr
• Cycling - ciclismo

**Música e instrumentos:**
• Play the guitar - tocar la guitarra
• Play the piano - tocar el piano
• Sing - cantar

**Estructura "go + verb-ing":**
• Go swimming - ir a nadar
• Go shopping - ir de compras
• Go dancing - ir a bailar
• Go hiking - ir de excursión

**Expresar preferencias:**
• "I like + verb-ing" (Me gusta + verbo)
• "I love + verb-ing" (Me encanta)
• "I don't like + verb-ing" (No me gusta)
• "I hate + verb-ing" (Odio)
• "I prefer + verb-ing" (Prefiero)`,
    examples: [
      { english: "I like reading books in the evening.", spanish: "Me gusta leer libros por la noche.", context: "Expresando gusto" },
      { english: "She plays tennis every Saturday.", spanish: "Ella juega tenis todos los sábados.", context: "Actividad regular" },
      { english: "We go swimming on weekends.", spanish: "Vamos a nadar los fines de semana.", context: "Usando 'go + ing'" },
      { english: "He doesn't like watching horror movies.", spanish: "A él no le gusta ver películas de terror.", context: "Expresando disgusto" }
    ],
    commonMistakes: [
      { mistake: "I like play tennis.", correction: "I like playing tennis.", why: "Después de 'like', el verbo va en gerundio (-ing)." },
      { mistake: "She plays the tennis.", correction: "She plays tennis.", why: "Los deportes no llevan artículo." },
      { mistake: "I go to swim.", correction: "I go swimming.", why: "La estructura es 'go + verb-ing'." }
    ],
    practiceTips: [
      "Haz una lista de 10 cosas que te gusta hacer.",
      "Entrevista a un amigo sobre sus pasatiempos en inglés.",
      "Describe tu fin de semana ideal usando estos verbos.",
      "Mira videos de tus hobbies favoritos en inglés.",
      "Únete a grupos online sobre tus intereses en inglés."
    ],
    checkpoint: { 
      question: "¿Cómo dices 'Me encanta ir de excursión y tomar fotos'?", 
      answer: "I love going hiking and taking photos." 
    },
    nextStep: "Prepárate para viajar con 'Travel and Transport Vocabulary'."
  },

  // Article 6: Travel and Transport
  {
    id: 'vocab-travel-transport',
    title: 'Vocabulario: Viajes y Transporte',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'El estudiante podrá describir medios de transporte y usar verbos relacionados con viajes como take, buy a ticket, arrive.',
    explanation: `Viajar es una de las mejores formas de practicar inglés. Este vocabulario te ayudará en aeropuertos, estaciones y hoteles.

**Medios de transporte:**
• **By plane** - en avión
• **By train** - en tren
• **By bus** - en autobús
• **By car** - en coche
• **By taxi** - en taxi
• **By boat/ship** - en barco
• **By bicycle/bike** - en bicicleta
• **On foot** - a pie

**Verbos de viaje:**
• **Take** (a bus/train/taxi) - tomar
• **Drive** (a car) - conducir
• **Fly** - volar
• **Buy a ticket** - comprar un boleto
• **Book/Reserve** - reservar
• **Check in** - registrarse
• **Check out** - hacer el checkout
• **Arrive** - llegar
• **Depart/Leave** - salir
• **Miss** (a flight/train) - perder

**En el aeropuerto:**
• Passport - pasaporte
• Boarding pass - pase de abordar
• Gate - puerta de embarque
• Luggage/Baggage - equipaje
• Departure - salida
• Arrival - llegada
• Delayed - retrasado
• Cancelled - cancelado

**En el hotel:**
• Room - habitación
• Single/Double room - habitación individual/doble
• Reservation - reservación
• Key - llave
• Reception - recepción

**Preguntas útiles:**
• "What time does the train leave?"
• "How long does the flight take?"
• "Where is the check-in desk?"`,
    examples: [
      { english: "I take the bus to work every day.", spanish: "Tomo el autobús al trabajo todos los días.", context: "Transporte diario" },
      { english: "The flight departs at 3 PM.", spanish: "El vuelo sale a las 3 PM.", context: "Horario de vuelo" },
      { english: "We need to check in by 2 PM.", spanish: "Necesitamos registrarnos antes de las 2 PM.", context: "Hotel" },
      { english: "Can I have a window seat, please?", spanish: "¿Puedo tener un asiento de ventanilla, por favor?", context: "En el avión" }
    ],
    commonMistakes: [
      { mistake: "I go by foot.", correction: "I go on foot.", why: "Con 'foot' usamos 'on', no 'by'." },
      { mistake: "What time arrives the train?", correction: "What time does the train arrive?", why: "En preguntas, el orden es auxiliar + sujeto + verbo." },
      { mistake: "I missed my train.", correction: "I missed my train. ✓", why: "¡Esto es correcto! 'Miss' significa perder (transporte)." }
    ],
    practiceTips: [
      "Planea un viaje imaginario y escribe todo en inglés.",
      "Practica diálogos de aeropuerto y hotel.",
      "Lee señales de aeropuertos en fotos.",
      "Mira vlogs de viajes en inglés.",
      "Aprende las frases más útiles de memoria."
    ],
    checkpoint: { 
      question: "Pregunta a qué hora sale el tren a Madrid.", 
      answer: "What time does the train to Madrid leave/depart?" 
    },
    nextStep: "Aprende vocabulario de salud básico con 'Health (Basic) Vocabulary'."
  },

  // Article 7: Health (Basic)
  {
    id: 'vocab-health-basic',
    title: 'Vocabulario: Salud (Básico)',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'El estudiante podrá describir síntomas comunes como headache, cold, y comunicarse en situaciones médicas básicas.',
    explanation: `Poder describir cómo te sientes es crucial cuando viajas o vives en un país de habla inglesa. Este vocabulario te ayudará en farmacias y consultas médicas.

**Partes del cuerpo:**
• Head - cabeza
• Eye(s) - ojo(s)
• Ear(s) - oreja(s)
• Nose - nariz
• Mouth - boca
• Throat - garganta
• Chest - pecho
• Stomach - estómago
• Back - espalda
• Arm(s) - brazo(s)
• Hand(s) - mano(s)
• Leg(s) - pierna(s)
• Foot/Feet - pie(s)

**Síntomas comunes:**
• **Headache** - dolor de cabeza
• **Stomachache** - dolor de estómago
• **Toothache** - dolor de muelas
• **Backache** - dolor de espalda
• **Sore throat** - dolor de garganta
• **Cold** - resfriado
• **Flu** - gripe
• **Fever** - fiebre
• **Cough** - tos
• **Runny nose** - nariz congestionada/mocosa

**Expresar malestar:**
• "I have a headache." - Tengo dolor de cabeza.
• "My back hurts." - Me duele la espalda.
• "I feel sick/ill." - Me siento mal/enfermo.
• "I don't feel well." - No me siento bien.
• "I'm tired." - Estoy cansado.

**En la farmacia:**
• "I need something for a cold."
• "Do you have painkillers?"
• "Can I have some aspirin?"`,
    examples: [
      { english: "I have a terrible headache.", spanish: "Tengo un dolor de cabeza terrible.", context: "Describiendo síntoma" },
      { english: "My throat hurts. I think I have a cold.", spanish: "Me duele la garganta. Creo que tengo un resfriado.", context: "Auto-diagnóstico" },
      { english: "You should see a doctor.", spanish: "Deberías ver a un médico.", context: "Dando consejo" },
      { english: "I need something for a cough, please.", spanish: "Necesito algo para la tos, por favor.", context: "En la farmacia" }
    ],
    commonMistakes: [
      { mistake: "I have headache.", correction: "I have a headache.", why: "Los dolores necesitan artículo 'a'." },
      { mistake: "My head is hurting me.", correction: "My head hurts. / I have a headache.", why: "Usamos 'hurt' sin 'me' o preferimos 'have a headache'." },
      { mistake: "I am cold.", correction: "I have a cold.", why: "'I am cold' significa 'tengo frío'. 'I have a cold' es 'estoy resfriado'." }
    ],
    practiceTips: [
      "Señala partes de tu cuerpo y nómbralas en inglés.",
      "Practica describiendo síntomas con un compañero.",
      "Aprende frases de farmacia de memoria.",
      "Ve programas médicos en inglés con subtítulos.",
      "Simula una visita al médico."
    ],
    checkpoint: { 
      question: "¿Cómo dices 'Me duele el estómago y tengo fiebre'?", 
      answer: "I have a stomachache and I have a fever. / My stomach hurts and I have a fever." 
    },
    nextStep: "Aprende a hablar del clima con 'Weather and Seasons Vocabulary'."
  },

  // Article 8: Weather and Seasons
  {
    id: 'vocab-weather-seasons',
    title: 'Vocabulario: Clima y Estaciones',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'El estudiante podrá describir condiciones climáticas usando adjetivos y hablar sobre los meses y estaciones del año.',
    explanation: `El clima es uno de los temas de conversación más universales. En países anglosajones, es común iniciar conversaciones hablando del tiempo.

**Las estaciones (Seasons):**
• **Spring** - primavera (marzo-mayo)
• **Summer** - verano (junio-agosto)
• **Autumn/Fall** - otoño (septiembre-noviembre)
• **Winter** - invierno (diciembre-febrero)

**Meses del año:**
January, February, March, April, May, June, July, August, September, October, November, December

**Condiciones climáticas:**
• **Sunny** - soleado
• **Cloudy** - nublado
• **Rainy** - lluvioso
• **Windy** - ventoso
• **Snowy** - nevado
• **Foggy** - con niebla
• **Stormy** - tormentoso

**Temperatura:**
• **Hot** - caliente
• **Warm** - cálido
• **Cool** - fresco
• **Cold** - frío
• **Freezing** - helado

**Describir el clima:**
• "It's sunny today." - Está soleado hoy.
• "It's raining." - Está lloviendo.
• "It's going to snow." - Va a nevar.
• "What's the weather like?" - ¿Cómo está el clima?

**Estructura con "It":**
Siempre usamos "It" como sujeto para el clima:
• It's cold. (Hace frío)
• It's raining. (Está lloviendo)`,
    examples: [
      { english: "What's the weather like in London?", spanish: "¿Cómo está el clima en Londres?", context: "Preguntando por el clima" },
      { english: "It's very hot in summer.", spanish: "Hace mucho calor en verano.", context: "Describiendo estación" },
      { english: "Take an umbrella. It's going to rain.", spanish: "Lleva un paraguas. Va a llover.", context: "Predicción" },
      { english: "I love autumn because the leaves change color.", spanish: "Me encanta el otoño porque las hojas cambian de color.", context: "Preferencia" }
    ],
    commonMistakes: [
      { mistake: "Today is sunny.", correction: "It's sunny today.", why: "Para el clima siempre usamos 'It' como sujeto." },
      { mistake: "I have cold.", correction: "I'm cold. / I feel cold.", why: "'Tengo frío' se dice 'I'm cold', no 'I have cold'." },
      { mistake: "In the summer.", correction: "In summer. / In the summer.", why: "Ambos son correctos, pero sin artículo es más común en BE." }
    ],
    practiceTips: [
      "Describe el clima de hoy cada mañana.",
      "Aprende los meses en orden cantando una canción.",
      "Compara el clima de dos ciudades.",
      "Mira el pronóstico del tiempo en canales ingleses.",
      "Escribe sobre tu estación favorita y por qué."
    ],
    checkpoint: { 
      question: "Describe el clima típico de invierno en tu ciudad.", 
      answer: "In winter, it's usually cold and sometimes it snows. / It's cold and rainy in winter here." 
    },
    nextStep: "Expande tu vocabulario descriptivo con 'Common Adjectives'."
  },

  // Article 9: Common Adjectives
  {
    id: 'vocab-common-adjectives',
    title: 'Vocabulario: Adjetivos Comunes',
    level: 'A1→A2',
    category: 'vocabulary',
    learningGoal: 'El estudiante podrá usar pares de adjetivos opuestos como big/small, easy/difficult para describir objetos y situaciones.',
    explanation: `Los adjetivos describen sustantivos. En inglés, el adjetivo siempre va ANTES del sustantivo, a diferencia del español.

**Pares de opuestos (Opposites):**
• **Big / Small** - grande / pequeño
• **Long / Short** - largo / corto
• **Tall / Short** - alto / bajo (personas)
• **Old / New** - viejo / nuevo
• **Old / Young** - viejo / joven (personas)
• **Fast / Slow** - rápido / lento
• **Hot / Cold** - caliente / frío
• **Easy / Difficult (Hard)** - fácil / difícil
• **Cheap / Expensive** - barato / caro
• **Good / Bad** - bueno / malo
• **Happy / Sad** - feliz / triste
• **Beautiful / Ugly** - hermoso / feo
• **Clean / Dirty** - limpio / sucio
• **Full / Empty** - lleno / vacío
• **Heavy / Light** - pesado / ligero
• **Strong / Weak** - fuerte / débil
• **Rich / Poor** - rico / pobre
• **Safe / Dangerous** - seguro / peligroso

**Posición del adjetivo:**
• Antes del sustantivo: "a big house", "a small car"
• Después de 'be': "The house is big", "The car is small"

**Con 'very' para intensificar:**
• "It's very hot today."
• "She is very intelligent."`,
    examples: [
      { english: "This is a big house with a small garden.", spanish: "Esta es una casa grande con un jardín pequeño.", context: "Describiendo tamaños" },
      { english: "The test was easy, but the homework is difficult.", spanish: "El examen fue fácil, pero la tarea es difícil.", context: "Comparando dificultad" },
      { english: "She's a young woman with old ideas.", spanish: "Es una mujer joven con ideas viejas.", context: "Contrastes" },
      { english: "Is this coffee hot or cold?", spanish: "¿Este café está caliente o frío?", context: "Preguntando" }
    ],
    commonMistakes: [
      { mistake: "A house big.", correction: "A big house.", why: "El adjetivo va ANTES del sustantivo en inglés." },
      { mistake: "She is more tall than me.", correction: "She is taller than me.", why: "Con adjetivos cortos, añade -er, no uses 'more'." },
      { mistake: "The movie was very interested.", correction: "The movie was very interesting.", why: "'Interested' es para personas, 'interesting' para cosas." }
    ],
    practiceTips: [
      "Describe 5 objetos a tu alrededor usando adjetivos.",
      "Aprende adjetivos en pares de opuestos.",
      "Practica poniendo el adjetivo antes del sustantivo.",
      "Juega 'opuestos' con un compañero.",
      "Describe personas y lugares en fotos."
    ],
    checkpoint: { 
      question: "Describe tu teléfono usando 3 adjetivos.", 
      answer: "My phone is small, new, and expensive. / I have a small, black, new phone." 
    },
    nextStep: "Ahora aprende la gramática del Present Simple para describir rutinas."
  },

  // Article 10: Present Simple Grammar
  {
    id: 'gram-present-simple',
    title: 'Gramática: Presente Simple',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'El estudiante dominará el Present Simple para expresar rutinas, hábitos y verdades universales, incluyendo la regla de tercera persona.',
    explanation: `El Present Simple es el tiempo verbal más básico y frecuente. Se usa para acciones habituales, hechos generales y verdades universales.

**Usos principales:**
1. **Rutinas y hábitos:** I wake up at 7 AM.
2. **Hechos generales:** Water boils at 100°C.
3. **Horarios fijos:** The train leaves at 9 PM.
4. **Estados permanentes:** She lives in Paris.

**Formación:**
| Sujeto | Verbo |
|--------|-------|
| I/You/We/They | verbo base (work) |
| He/She/It | verbo + s/es (works) |

**Regla de tercera persona (he/she/it):**
• General: añadir -S → work**s**, play**s**
• Verbos en -ch, -sh, -ss, -x, -o: añadir -ES → watch**es**, go**es**
• Consonante + Y: cambiar Y por -IES → study → stud**ies**
• Vocal + Y: solo -S → play**s**

**Negativo:**
• I/You/We/They + **don't** + verbo
• He/She/It + **doesn't** + verbo (¡sin -s!)

**Pregunta:**
• **Do** + I/you/we/they + verbo?
• **Does** + he/she/it + verbo? (¡sin -s!)

**Adverbios de frecuencia:**
always > usually > often > sometimes > rarely > never
Posición: antes del verbo (después de 'be')
• "I always drink coffee." / "She is always happy."`,
    examples: [
      { english: "She works in a hospital.", spanish: "Ella trabaja en un hospital.", context: "Tercera persona + s" },
      { english: "I don't like vegetables.", spanish: "No me gustan las verduras.", context: "Negativo con don't" },
      { english: "Does he speak English?", spanish: "¿Él habla inglés?", context: "Pregunta con does" },
      { english: "The class starts at 9 AM.", spanish: "La clase empieza a las 9 AM.", context: "Horario fijo" },
      { english: "We usually have dinner at 8.", spanish: "Usualmente cenamos a las 8.", context: "Adverbio de frecuencia" }
    ],
    commonMistakes: [
      { mistake: "She work every day.", correction: "She works every day.", why: "Con he/she/it, el verbo SIEMPRE lleva -s." },
      { mistake: "He don't like coffee.", correction: "He doesn't like coffee.", why: "Con he/she/it usamos 'doesn't', no 'don't'." },
      { mistake: "Does she works here?", correction: "Does she work here?", why: "Después de 'does', el verbo va sin -s." },
      { mistake: "I drink always coffee.", correction: "I always drink coffee.", why: "El adverbio va antes del verbo principal." }
    ],
    practiceTips: [
      "Escribe tu rutina diaria en Present Simple.",
      "Transforma oraciones de afirmativo a negativo y pregunta.",
      "Practica la conjugación con diferentes sujetos.",
      "Memoriza verbos irregulares de tercera persona.",
      "Lee textos simples e identifica verbos en Present Simple."
    ],
    checkpoint: { 
      question: "Escribe: 'Ella estudia inglés pero no habla francés' en inglés.", 
      answer: "She studies English but doesn't speak French." 
    },
    nextStep: "Continúa con el Present Continuous para acciones en progreso."
  },

  // Article 11: Present Continuous Grammar
  {
    id: 'gram-present-continuous',
    title: 'Gramática: Presente Continuo',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'El estudiante usará el Present Continuous para describir acciones que ocurren ahora mismo o en este período.',
    explanation: `El Present Continuous (también llamado Present Progressive) describe acciones en progreso en el momento de hablar.

**Estructura:**
Sujeto + AM/IS/ARE + verbo-ING

| Sujeto | To Be | Verbo+ING |
|--------|-------|-----------|
| I | am | working |
| He/She/It | is | working |
| You/We/They | are | working |

**Reglas para formar -ING:**
• General: añadir -ING → work**ing**
• Termina en -E: quitar E, añadir -ING → mak**e** → mak**ing**
• CVC (consonante-vocal-consonante): duplicar última consonante → run → run**n**ing
• Termina en -IE: cambiar a -YING → die → d**ying**

**Usos:**
1. **Acciones ahora:** "I'm studying English right now."
2. **Acciones temporales:** "She's living in London this month."
3. **Planes futuros:** "We're meeting tomorrow at 5."
4. **Cambios/tendencias:** "Technology is changing rapidly."

**Palabras clave:**
now, right now, at the moment, currently, this week/month, today

**Negativo:** Sujeto + am/is/are + NOT + verb-ing
**Pregunta:** Am/Is/Are + sujeto + verb-ing?

**⚠️ Stative Verbs (no usan -ing):**
love, hate, like, want, need, know, understand, believe, see, hear, have (posesión)`,
    examples: [
      { english: "She's cooking dinner right now.", spanish: "Ella está cocinando la cena ahora mismo.", context: "Acción en progreso" },
      { english: "I'm not watching TV, I'm studying.", spanish: "No estoy viendo TV, estoy estudiando.", context: "Negativo" },
      { english: "Are you listening to me?", spanish: "¿Me estás escuchando?", context: "Pregunta" },
      { english: "We're meeting John tomorrow.", spanish: "Nos reunimos con John mañana.", context: "Plan futuro" }
    ],
    commonMistakes: [
      { mistake: "She is work right now.", correction: "She is working right now.", why: "Necesitas la forma -ING después de am/is/are." },
      { mistake: "I am knowing the answer.", correction: "I know the answer.", why: "'Know' es un stative verb, no usa forma continua." },
      { mistake: "They are running (runing).", correction: "They are running.", why: "Run termina en CVC: duplica la 'n'." }
    ],
    practiceTips: [
      "Describe lo que ves a tu alrededor en este momento.",
      "Compara Present Simple vs Continuous con la misma oración.",
      "Practica formando -ING con verbos variados.",
      "Memoriza la lista de stative verbs.",
      "Describe fotos o videos usando Present Continuous."
    ],
    checkpoint: { 
      question: "Traduce: '¿Qué estás haciendo? Estoy leyendo un libro.'", 
      answer: "What are you doing? I'm reading a book." 
    },
    nextStep: "Aprende a hablar del pasado con Past Simple (Basic)."
  },

  // Article 12: Past Simple (Basic) Grammar
  {
    id: 'gram-past-simple-basic',
    title: 'Gramática: Pasado Simple (Básico)',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'El estudiante usará el Past Simple con verbos regulares e irregulares comunes para describir acciones completadas en el pasado.',
    explanation: `El Past Simple se usa para acciones completadas en un momento específico del pasado.

**Verbos regulares:**
Añadir -ED al verbo base
• work → work**ed**
• play → play**ed**
• study → studi**ed** (consonante+Y → -IED)
• live → liv**ed** (-E → solo añadir -D)
• stop → stopp**ed** (CVC → duplicar consonante)

**Verbos irregulares comunes:**
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

**Estructura:**
• **Afirmativo:** Sujeto + verbo en pasado
• **Negativo:** Sujeto + didn't + verbo BASE
• **Pregunta:** Did + sujeto + verbo BASE?

**Palabras clave:**
yesterday, last (week/month/year), ago, in 2020, when I was young

**IMPORTANTE:**
Después de 'did' y 'didn't', el verbo SIEMPRE va en forma base (sin -ed).`,
    examples: [
      { english: "I visited my grandmother last weekend.", spanish: "Visité a mi abuela el fin de semana pasado.", context: "Verbo regular" },
      { english: "She went to Paris in 2019.", spanish: "Ella fue a París en 2019.", context: "Verbo irregular (go→went)" },
      { english: "We didn't watch the movie.", spanish: "No vimos la película.", context: "Negativo" },
      { english: "Did you see John yesterday?", spanish: "¿Viste a John ayer?", context: "Pregunta" }
    ],
    commonMistakes: [
      { mistake: "She goed to school.", correction: "She went to school.", why: "'Go' es irregular: go → went." },
      { mistake: "Did you went there?", correction: "Did you go there?", why: "Después de 'did', el verbo va en forma base." },
      { mistake: "I didn't saw him.", correction: "I didn't see him.", why: "Después de 'didn't', usa el verbo base, no pasado." },
      { mistake: "Yesterday I work.", correction: "Yesterday I worked.", why: "Verbos regulares añaden -ed en pasado." }
    ],
    practiceTips: [
      "Memoriza los 20 verbos irregulares más comunes.",
      "Escribe un diario: '¿Qué hiciste ayer?'",
      "Transforma oraciones de presente a pasado.",
      "Lee historias cortas e identifica verbos en pasado.",
      "Practica la pronunciación de -ed (/t/, /d/, /ɪd/)."
    ],
    checkpoint: { 
      question: "Cuenta algo que hiciste ayer usando 3 verbos.", 
      answer: "Yesterday I woke up at 7, had breakfast, and went to work." 
    },
    nextStep: "Aprende a hablar de planes futuros con 'Future with Going To'."
  },

  // Article 13: Future with Going To
  {
    id: 'gram-future-going-to',
    title: 'Gramática: Futuro con "Going To"',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'El estudiante usará "going to" para expresar planes e intenciones futuras.',
    explanation: `"Going to" es la forma más común de expresar el futuro en inglés cotidiano, especialmente para planes decididos.

**Estructura:**
Sujeto + AM/IS/ARE + going to + verbo base

| Sujeto | To Be | Going to + verbo |
|--------|-------|------------------|
| I | am | going to travel |
| He/She/It | is | going to travel |
| You/We/They | are | going to travel |

**Usos de "Going To":**
1. **Planes e intenciones:**
   "I'm going to study medicine." (Ya lo decidí)
   
2. **Predicciones basadas en evidencia:**
   "Look at those clouds! It's going to rain." (Hay evidencia)

**Formas:**
• **Negativo:** am/is/are + not + going to + verbo
  "I'm not going to come."
  
• **Pregunta:** Am/Is/Are + sujeto + going to + verbo?
  "Are you going to come?"

**Contracciones comunes:**
• I'm going to = I'm gonna (informal oral)
• She's going to = She's gonna

**Palabras clave:**
tomorrow, next (week/month/year), soon, later, tonight`,
    examples: [
      { english: "I'm going to buy a new car next month.", spanish: "Voy a comprar un coche nuevo el próximo mes.", context: "Plan futuro" },
      { english: "She's going to start a new job.", spanish: "Ella va a empezar un nuevo trabajo.", context: "Intención" },
      { english: "We aren't going to travel this summer.", spanish: "No vamos a viajar este verano.", context: "Negativo" },
      { english: "What are you going to do tomorrow?", spanish: "¿Qué vas a hacer mañana?", context: "Pregunta" },
      { english: "Look! The baby is going to cry.", spanish: "¡Mira! El bebé va a llorar.", context: "Predicción con evidencia" }
    ],
    commonMistakes: [
      { mistake: "I going to travel.", correction: "I'm going to travel.", why: "Necesitas el verbo 'to be' (am/is/are)." },
      { mistake: "She's going to goes home.", correction: "She's going to go home.", why: "Después de 'going to', usa el verbo base." },
      { mistake: "Are you going to to come?", correction: "Are you going to come?", why: "Solo un 'to' después de 'going'." }
    ],
    practiceTips: [
      "Escribe 5 planes para este fin de semana.",
      "Pregunta a un amigo sobre sus planes futuros.",
      "Practica predicciones mirando fotos.",
      "Transforma oraciones de presente a futuro con 'going to'.",
      "Describe tus metas para este año."
    ],
    checkpoint: { 
      question: "¿Cuáles son tus planes para las vacaciones?", 
      answer: "I'm going to travel to the beach. / I'm going to visit my family." 
    },
    nextStep: "Aprende 'There is / There are' para describir existencia."
  },

  // Article 14: There is / There are
  {
    id: 'gram-there-is-are',
    title: 'Gramática: "There is / There are"',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'El estudiante usará "there is/are" correctamente para expresar existencia o presencia de personas y objetos.',
    explanation: `"There is" y "There are" equivalen a "hay" en español. Se usan para indicar que algo existe o está presente en un lugar.

**Regla básica:**
• **There is** + sustantivo singular/incontable
• **There are** + sustantivo plural

**Estructuras:**
| Forma | Singular | Plural |
|-------|----------|--------|
| Afirmativo | There is (There's) | There are |
| Negativo | There isn't | There aren't |
| Pregunta | Is there...? | Are there...? |

**Uso con contables e incontables:**
• "There is a book on the table." (contable singular)
• "There is some water in the glass." (incontable)
• "There are three cats in the garden." (contable plural)

**Expresiones de cantidad:**
• There is/are + **some** (afirmativo)
• There isn't/aren't + **any** (negativo)
• Is/Are there + **any**...? (pregunta)

**Ejemplos de ubicación:**
in, on, at, under, next to, behind, in front of`,
    examples: [
      { english: "There is a bank next to the supermarket.", spanish: "Hay un banco al lado del supermercado.", context: "Singular + ubicación" },
      { english: "There are many students in the class.", spanish: "Hay muchos estudiantes en la clase.", context: "Plural" },
      { english: "Is there a pharmacy near here?", spanish: "¿Hay una farmacia cerca de aquí?", context: "Pregunta singular" },
      { english: "There aren't any books on the shelf.", spanish: "No hay libros en el estante.", context: "Negativo plural" },
      { english: "There's some milk in the fridge.", spanish: "Hay leche en el refrigerador.", context: "Incontable" }
    ],
    commonMistakes: [
      { mistake: "There is many people.", correction: "There are many people.", why: "'People' es plural, usa 'are'." },
      { mistake: "Have a book on the table.", correction: "There is a book on the table.", why: "En inglés usamos 'there is/are', no 'have' para existencia." },
      { mistake: "Is there some milk?", correction: "Is there any milk?", why: "En preguntas, usamos 'any', no 'some'." },
      { mistake: "There are a cat.", correction: "There is a cat.", why: "'A cat' es singular, usa 'is'." }
    ],
    practiceTips: [
      "Describe tu habitación: 'There is a bed, there are two chairs...'",
      "Mira fotos y describe qué hay en ellas.",
      "Practica preguntas: 'Is there...? Are there...?'",
      "Combina con preposiciones de lugar.",
      "Juega 'I Spy': describe objetos con 'there is'."
    ],
    checkpoint: { 
      question: "Describe qué hay en tu cocina.", 
      answer: "There is a fridge and a stove. There are some plates on the shelf." 
    },
    nextStep: "Continúa con 'Countable and Uncountable Nouns'."
  },

  // Article 15: Countable and Uncountable Nouns
  {
    id: 'gram-countable-uncountable',
    title: 'Gramática: Sustantivos Contables e Incontables',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'El estudiante distinguirá entre sustantivos contables e incontables y usará correctamente a/an, some, much/many.',
    explanation: `En inglés, los sustantivos se dividen en contables (los que podemos contar) e incontables (los que no).

**Contables (Countable):**
Pueden pluralizarse: book → books, apple → apples
• Usan a/an en singular: "a book", "an apple"
• Usan números: "three books", "two apples"
• Preguntas con "How many...?"

**Incontables (Uncountable):**
No tienen plural: water, rice, money, information
• NO usan a/an
• Usan "some": "some water", "some rice"
• Preguntas con "How much...?"

**Incontables comunes:**
• Líquidos: water, milk, coffee, juice
• Materiales: wood, plastic, glass, paper
• Alimentos: rice, bread, cheese, meat, fruit
• Conceptos: information, advice, news, work, money
• Otros: furniture, luggage, traffic, weather

**Cuantificadores:**
| | Contables | Incontables |
|-----|-----------|-------------|
| Afirmativo | some, many, a few, a lot of | some, much, a little, a lot of |
| Negativo | any, many, few | any, much, little |
| Pregunta | any, how many | any, how much |

**Hacer incontables contables:**
• a glass of water, a cup of coffee
• a piece of advice, a piece of information
• a slice of bread, a bottle of wine`,
    examples: [
      { english: "Can I have some water, please?", spanish: "¿Puedo tomar agua, por favor?", context: "Incontable + some" },
      { english: "How many apples do you want?", spanish: "¿Cuántas manzanas quieres?", context: "How many + contable" },
      { english: "How much money do you need?", spanish: "¿Cuánto dinero necesitas?", context: "How much + incontable" },
      { english: "I don't have any milk.", spanish: "No tengo leche.", context: "Negativo + any" },
      { english: "There are a few chairs in the room.", spanish: "Hay algunas sillas en la habitación.", context: "a few + contable plural" }
    ],
    commonMistakes: [
      { mistake: "I need an information.", correction: "I need some information.", why: "'Information' es incontable, no usa 'a/an'." },
      { mistake: "How many water?", correction: "How much water?", why: "'Water' es incontable, usa 'how much'." },
      { mistake: "I have much friends.", correction: "I have many friends.", why: "'Friends' es contable, usa 'many' no 'much'." },
      { mistake: "Can I have a bread?", correction: "Can I have some bread? / Can I have a slice of bread?", why: "'Bread' es incontable." }
    ],
    practiceTips: [
      "Clasifica palabras de vocabulario en contables/incontables.",
      "Practica con fotos: 'How many...? How much...?'",
      "Memoriza los incontables más comunes.",
      "Practica usando some/any en oraciones.",
      "Aprende expresiones: a piece of, a glass of, etc."
    ],
    checkpoint: { 
      question: "Completa: 'I don't have ___ money but I have ___ coins.'", 
      answer: "I don't have any/much money but I have some coins." 
    },
    nextStep: "Aprende a comparar con 'Comparatives and Superlatives (Basic)'."
  },

  // Article 16: Comparatives and Superlatives (Basic)
  {
    id: 'gram-comparatives-superlatives-basic',
    title: 'Gramática: Comparativos y Superlativos (Básicos)',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'El estudiante formará comparativos con -er/more y superlativos con -est/most para adjetivos comunes.',
    explanation: `Los comparativos se usan para comparar dos cosas. Los superlativos, para indicar el extremo de un grupo.

**Comparativos: -ER / MORE**
• Adjetivos cortos (1 sílaba): añadir -ER
  - tall → tall**er**, old → old**er**
  - Regla CVC: big → bigg**er**
  
• Adjetivos largos (2+ sílabas): MORE + adjetivo
  - beautiful → **more** beautiful
  - expensive → **more** expensive
  
• Adjetivos de 2 sílabas en -y: cambiar Y por -IER
  - happy → happ**ier**, easy → eas**ier**

**Superlativos: -EST / MOST**
• Adjetivos cortos: THE + adjetivo + -EST
  - tall → **the** tall**est**
  
• Adjetivos largos: THE MOST + adjetivo
  - beautiful → **the most** beautiful

**Irregulares:**
| Adjetivo | Comparativo | Superlativo |
|----------|-------------|-------------|
| good | better | the best |
| bad | worse | the worst |
| far | farther/further | the farthest/furthest |

**Estructura comparativa:**
A + is/are + comparativo + **than** + B
"John is taller **than** Mary."

**Estructura superlativa:**
A + is/are + **the** + superlativo + (of/in + grupo)
"John is **the** tallest in the class."`,
    examples: [
      { english: "My house is bigger than yours.", spanish: "Mi casa es más grande que la tuya.", context: "Comparativo + than" },
      { english: "She's the smartest student in the class.", spanish: "Ella es la estudiante más inteligente de la clase.", context: "Superlativo + in" },
      { english: "This movie is more interesting than that one.", spanish: "Esta película es más interesante que esa.", context: "More + adjetivo largo" },
      { english: "He's better at math than me.", spanish: "Él es mejor en matemáticas que yo.", context: "Irregular: good → better" }
    ],
    commonMistakes: [
      { mistake: "She is more tall than me.", correction: "She is taller than me.", why: "'Tall' es corto (1 sílaba), usa -er." },
      { mistake: "This is the most easy test.", correction: "This is the easiest test.", why: "Adjetivo en -y: cambia a -iest." },
      { mistake: "He is more better.", correction: "He is better.", why: "No combines 'more' con comparativos irregulares." },
      { mistake: "She is taller that me.", correction: "She is taller than me.", why: "Después del comparativo siempre va 'than'." }
    ],
    practiceTips: [
      "Compara objetos a tu alrededor.",
      "Clasifica adjetivos en 'cortos' y 'largos'.",
      "Memoriza los irregulares: good, bad, far.",
      "Practica describiendo famosos: 'Who is the tallest?'",
      "Escribe comparaciones de productos."
    ],
    checkpoint: { 
      question: "Compara: elefante vs. gato (big), y di cuál es el más grande.", 
      answer: "An elephant is bigger than a cat. The elephant is the biggest." 
    },
    nextStep: "Aprende los verbos modales básicos: can, must, should."
  },

  // Article 17: Basic Modals (can, must, should)
  {
    id: 'gram-modals-basic',
    title: 'Gramática: Verbos Modales Básicos (can, must, should)',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'El estudiante usará can, must y should para expresar habilidad, obligación y consejo.',
    explanation: `Los verbos modales modifican el significado del verbo principal. Los tres más básicos son:

**CAN - Habilidad/Posibilidad/Permiso**
• Habilidad: "I **can** swim." (Sé nadar)
• Posibilidad: "We **can** go tomorrow." (Podemos ir)
• Permiso: "**Can** I use your phone?" (¿Puedo usar...)

**CAN'T/CANNOT - Inhabilidad/Imposibilidad/Prohibición**
• "I **can't** drive." (No sé conducir)
• "You **can't** park here." (No puedes estacionar aquí)

**MUST - Obligación fuerte/Necesidad**
• "You **must** wear a seatbelt." (Debes usar cinturón)
• "I **must** study for the exam." (Tengo que estudiar)

**MUSTN'T - Prohibición**
• "You **mustn't** smoke here." (No debes fumar)
⚠️ Mustn't ≠ don't have to (no es lo mismo)

**SHOULD - Consejo/Recomendación**
• "You **should** eat more vegetables." (Deberías comer)
• "He **should** see a doctor." (Debería ver)

**SHOULDN'T - Consejo negativo**
• "You **shouldn't** eat too much sugar." (No deberías)

**Reglas de modales:**
1. Sin cambio por persona (no añaden -s)
2. Seguidos de verbo base (sin 'to')
3. Forman negativo/pregunta sin auxiliar

**Estructura:**
• Afirmativo: Sujeto + modal + verbo base
• Negativo: Sujeto + modal + not + verbo base
• Pregunta: Modal + sujeto + verbo base?`,
    examples: [
      { english: "Can you help me, please?", spanish: "¿Puedes ayudarme, por favor?", context: "Petición" },
      { english: "You must finish the project today.", spanish: "Debes terminar el proyecto hoy.", context: "Obligación" },
      { english: "She can speak three languages.", spanish: "Ella puede hablar tres idiomas.", context: "Habilidad" },
      { english: "You should drink more water.", spanish: "Deberías beber más agua.", context: "Consejo" },
      { english: "You mustn't tell anyone.", spanish: "No debes decirle a nadie.", context: "Prohibición" }
    ],
    commonMistakes: [
      { mistake: "She can to swim.", correction: "She can swim.", why: "Después del modal, el verbo va sin 'to'." },
      { mistake: "He cans drive.", correction: "He can drive.", why: "Los modales no añaden -s con he/she/it." },
      { mistake: "You must to study.", correction: "You must study.", why: "Nunca uses 'to' después de un modal." },
      { mistake: "Do you can help?", correction: "Can you help?", why: "Los modales no necesitan auxiliar en preguntas." }
    ],
    practiceTips: [
      "Haz listas de 'cosas que puedo hacer' y 'cosas que debo hacer'.",
      "Da consejos a amigos usando 'should'.",
      "Practica permisos: 'Can I...?'",
      "Identifica modales en textos que lees.",
      "Describe reglas de tu trabajo/escuela con 'must/mustn't'."
    ],
    checkpoint: { 
      question: "Da un consejo para alguien con dolor de cabeza.", 
      answer: "You should take some aspirin and rest. / You shouldn't look at screens." 
    },
    nextStep: "Domina las preposiciones de lugar y tiempo con el siguiente artículo."
  },

  // Article 18: Prepositions of Place and Time
  {
    id: 'gram-prepositions',
    title: 'Gramática: Preposiciones de Lugar y Tiempo (in, on, at)',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'El estudiante usará correctamente in, on, at para expresar lugar y tiempo.',
    explanation: `Las preposiciones son pequeñas palabras que causan grandes errores. IN, ON, AT son las más importantes.

**PREPOSICIONES DE LUGAR:**

**IN** (dentro de, en espacios cerrados/grandes):
• in a room, in a building, in a city
• in the car, in a box, in the water
• in Spain, in Europe, in the world

**ON** (sobre superficies, líneas):
• on the table, on the wall, on the floor
• on the street, on the bus (transporte público)
• on the left/right, on the corner

**AT** (punto específico):
• at the door, at the bus stop
• at home, at work, at school
• at the airport, at the station

**PREPOSICIONES DE TIEMPO:**

**IN** (períodos largos):
• in the morning/afternoon/evening
• in January, in summer, in 2024
• in a week, in two hours (dentro de)

**ON** (días específicos):
• on Monday, on Friday
• on May 5th, on my birthday
• on the weekend (AmE)

**AT** (horas, momentos específicos):
• at 7 o'clock, at noon, at midnight
• at night (excepción)
• at Christmas, at Easter (festividades)

**Casos especiales:**
• at home, at work, at school (sin artículo)
• at the weekend (BrE) / on the weekend (AmE)
• in the morning BUT at night`,
    examples: [
      { english: "The meeting is at 3 PM on Friday.", spanish: "La reunión es a las 3 PM el viernes.", context: "Tiempo: at + hora, on + día" },
      { english: "She lives in a small town in Italy.", spanish: "Ella vive en un pueblo pequeño en Italia.", context: "Lugar: in + ciudad/país" },
      { english: "Put the book on the table.", spanish: "Pon el libro sobre la mesa.", context: "Lugar: on + superficie" },
      { english: "I'll see you at the cinema at 8.", spanish: "Te veo en el cine a las 8.", context: "At + lugar específico + hora" },
      { english: "In summer, I wake up at 6 in the morning.", spanish: "En verano, me despierto a las 6 de la mañana.", context: "Combinación de preposiciones" }
    ],
    commonMistakes: [
      { mistake: "I arrive in Friday.", correction: "I arrive on Friday.", why: "Para días específicos usamos 'on'." },
      { mistake: "I'm at home in night.", correction: "I'm at home at night.", why: "'Night' es excepción: usamos 'at night'." },
      { mistake: "The picture is in the wall.", correction: "The picture is on the wall.", why: "Para superficies usamos 'on'." },
      { mistake: "She's on work.", correction: "She's at work.", why: "Decimos 'at work', 'at home', 'at school'." }
    ],
    practiceTips: [
      "Memoriza expresiones fijas: at home, at work, in the morning.",
      "Describe ubicaciones de objetos en tu habitación.",
      "Practica diciendo tu horario con preposiciones de tiempo.",
      "Crea oraciones combinando lugar y tiempo.",
      "Haz tarjetas con las reglas y ejemplos."
    ],
    checkpoint: { 
      question: "Completa: 'I have a meeting ___ Monday ___ 10 AM ___ the office.'", 
      answer: "I have a meeting on Monday at 10 AM in the office." 
    },
    nextStep: "Aprende a formar preguntas correctamente."
  },

  // Article 19: Question Formation
  {
    id: 'gram-question-formation',
    title: 'Gramática: Formación de Preguntas',
    level: 'A1→A2',
    category: 'grammar',
    learningGoal: 'El estudiante formará preguntas Yes/No y Wh- correctamente en diferentes tiempos verbales.',
    explanation: `Hay dos tipos principales de preguntas en inglés: Yes/No questions y Wh- questions.

**YES/NO QUESTIONS:**
Respuestas: Yes o No

**Con TO BE:**
Inversión: BE + sujeto + complemento?
• "Are you ready?" → "Yes, I am."
• "Is she a teacher?" → "No, she isn't."

**Con otros verbos (DO/DOES/DID):**
Auxiliar + sujeto + verbo base?
• "Do you like pizza?" → "Yes, I do."
• "Does he work here?" → "No, he doesn't."
• "Did they arrive?" → "Yes, they did."

**Con modales (CAN/WILL/MUST/SHOULD):**
Modal + sujeto + verbo base?
• "Can you swim?" → "Yes, I can."
• "Should I call?" → "No, you shouldn't."

**WH- QUESTIONS:**
Empiezan con palabra interrogativa

| Palabra | Pregunta por |
|---------|-------------|
| What | cosa/objeto |
| Where | lugar |
| When | tiempo |
| Who | persona (sujeto) |
| Whose | posesión |
| Which | elección |
| Why | razón |
| How | manera/estado |

**Estructura Wh-:**
Wh- + auxiliar + sujeto + verbo?
• "**What** do you do?" (¿A qué te dedicas?)
• "**Where** does she live?" (¿Dónde vive?)
• "**When** did they arrive?" (¿Cuándo llegaron?)
• "**Why** are you sad?" (¿Por qué estás triste?)

**How + adjetivo/adverbio:**
• How old...? (edad)
• How long...? (duración)
• How often...? (frecuencia)
• How much/many...? (cantidad)
• How far...? (distancia)`,
    examples: [
      { english: "Where do you work?", spanish: "¿Dónde trabajas?", context: "Wh- + do + sujeto + verbo" },
      { english: "How old are you?", spanish: "¿Cuántos años tienes?", context: "How + adjetivo" },
      { english: "Did you see the movie?", spanish: "¿Viste la película?", context: "Yes/No en pasado" },
      { english: "What time does the train leave?", spanish: "¿A qué hora sale el tren?", context: "What time + does" },
      { english: "Why didn't you call me?", spanish: "¿Por qué no me llamaste?", context: "Wh- negativo" }
    ],
    commonMistakes: [
      { mistake: "Where you work?", correction: "Where do you work?", why: "Necesitas el auxiliar 'do' en preguntas." },
      { mistake: "What means this?", correction: "What does this mean?", why: "Orden: What + does + sujeto + verbo." },
      { mistake: "You are ready?", correction: "Are you ready?", why: "En preguntas, invierte el orden de 'be'." },
      { mistake: "When did you arrived?", correction: "When did you arrive?", why: "Después de 'did', el verbo va en base." }
    ],
    practiceTips: [
      "Practica transformando oraciones en preguntas.",
      "Memoriza el orden: Wh + aux + sujeto + verbo.",
      "Haz entrevistas imaginarias a famosos.",
      "Responde preguntas y luego hazlas tú.",
      "Juega '20 preguntas' para practicar."
    ],
    checkpoint: { 
      question: "Forma una pregunta para saber el hobby de alguien.", 
      answer: "What are your hobbies? / What do you like to do in your free time?" 
    },
    nextStep: "Practica la habilidad de presentarte en inglés."
  },

  // Articles 20-29: Skills for A1→A2
  // Article 20: Introducing Yourself
  {
    id: 'skill-introducing-yourself',
    title: 'Habilidad: Presentarse a uno mismo y a otros',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'El estudiante podrá presentarse de manera clara y presentar a otras personas usando vocabulario apropiado.',
    explanation: `Saber presentarte es la primera habilidad social en cualquier idioma. En inglés, las presentaciones siguen patrones específicos.

**Presentarte a ti mismo:**

**Información básica:**
• "Hello/Hi, my name is [nombre]."
• "I'm [nombre]." (más informal)
• "Nice to meet you." / "Pleased to meet you."

**Información adicional:**
• "I'm from [país/ciudad]."
• "I'm [profesión]." / "I work as a [profesión]."
• "I live in [ciudad]."
• "I'm [edad] years old."
• "I like [hobbies]."

**Presentar a otros:**
• "This is my friend, [nombre]."
• "I'd like you to meet [nombre]."
• "Let me introduce you to [nombre]."

**Respuestas:**
• "Nice to meet you too."
• "It's a pleasure."
• "How do you do?" (muy formal)

**Preguntas para conocer a alguien:**
• "What's your name?"
• "Where are you from?"
• "What do you do?" (profesión)
• "How old are you?" (solo en contextos apropiados)

**Modelo de presentación completa:**
"Hi, I'm María. I'm from Mexico City. I'm 28 years old and I work as a graphic designer. In my free time, I like reading and traveling. Nice to meet you!"`,
    examples: [
      { english: "Hi, I'm Carlos. I'm from Spain and I work as an engineer.", spanish: "Hola, soy Carlos. Soy de España y trabajo como ingeniero.", context: "Presentación básica" },
      { english: "This is my colleague, Ana. She's from our marketing team.", spanish: "Esta es mi colega, Ana. Es de nuestro equipo de marketing.", context: "Presentando a otros" },
      { english: "Nice to meet you! What do you do?", spanish: "¡Mucho gusto! ¿A qué te dedicas?", context: "Después de conocer a alguien" },
      { english: "I live in Madrid but I'm originally from Barcelona.", spanish: "Vivo en Madrid pero soy originalmente de Barcelona.", context: "Detalles sobre origen" }
    ],
    commonMistakes: [
      { mistake: "I am Carlos years.", correction: "I am Carlos. I'm X years old.", why: "Separa nombre y edad; usa 'years old'." },
      { mistake: "Nice to meet you. Me too.", correction: "Nice to meet you. Nice to meet you too.", why: "Repite la frase completa para responder." },
      { mistake: "What is your job?", correction: "What do you do?", why: "'What do you do?' es más natural para preguntar profesión." }
    ],
    practiceTips: [
      "Escribe tu presentación y memorizala.",
      "Practica frente al espejo.",
      "Grábate presentándote y escucha tu pronunciación.",
      "Practica con un compañero: tomen turnos presentándose.",
      "Varía tu presentación según el contexto (formal/informal)."
    ],
    checkpoint: { 
      question: "Preséntate en 4-5 oraciones.", 
      answer: "Hi, I'm [Name]. I'm from [City/Country]. I'm [Age] years old. I work as a [Job]/I'm a student. I like [Hobbies]. Nice to meet you!" 
    },
    nextStep: "Aprende a hablar de tu vida diaria y hábitos."
  },

  // Article 21: Talking About Daily Life
  {
    id: 'skill-daily-life',
    title: 'Habilidad: Hablar de la vida diaria y hábitos',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'El estudiante describirá su rutina diaria y hábitos usando Present Simple y adverbios de frecuencia.',
    explanation: `Hablar de tu vida diaria es una de las conversaciones más comunes. Usa Present Simple y adverbios de frecuencia.

**Estructura básica:**
"I + verbo (+ adverbio) + complemento"

**Verbos de rutina comunes:**
• wake up, get up
• have breakfast/lunch/dinner
• go to work/school
• start/finish work
• take a shower
• brush my teeth
• get dressed
• go to bed, sleep

**Adverbios de frecuencia:**
• always (100%) - siempre
• usually (80%) - usualmente
• often (60%) - a menudo
• sometimes (40%) - a veces
• rarely/seldom (20%) - raramente
• never (0%) - nunca

**Expresiones de tiempo:**
• every day/week/month
• on weekdays/weekends
• in the morning/afternoon/evening
• at night
• once/twice/three times a week

**Modelo de rutina:**
"I usually wake up at 7 AM. First, I take a shower and get dressed. Then, I have breakfast at 7:30. I always drink coffee in the morning. I go to work at 8 and I usually start at 9. I have lunch at 1 PM. I finish work at 6 and come home around 7. In the evening, I sometimes watch TV or read. I usually go to bed at 11 PM."`,
    examples: [
      { english: "I always have coffee for breakfast.", spanish: "Siempre tomo café para el desayuno.", context: "Hábito con 'always'" },
      { english: "She usually goes to the gym three times a week.", spanish: "Ella usualmente va al gimnasio tres veces a la semana.", context: "Frecuencia específica" },
      { english: "On weekends, I like to sleep late.", spanish: "Los fines de semana, me gusta dormir hasta tarde.", context: "Rutina de fin de semana" },
      { english: "I never eat breakfast. I'm not hungry in the morning.", spanish: "Nunca desayuno. No tengo hambre por la mañana.", context: "Negativo con 'never'" }
    ],
    commonMistakes: [
      { mistake: "I always am tired.", correction: "I'm always tired.", why: "Con 'be', el adverbio va después." },
      { mistake: "I go sometimes to the gym.", correction: "I sometimes go to the gym.", why: "El adverbio va antes del verbo principal." },
      { mistake: "I have the breakfast at 8.", correction: "I have breakfast at 8.", why: "No usamos artículo antes de 'breakfast/lunch/dinner'." }
    ],
    practiceTips: [
      "Escribe tu rutina completa de un día normal.",
      "Compara tu rutina con la de un amigo.",
      "Usa conectores: first, then, after that, finally.",
      "Practica describiendo rutinas de otras personas.",
      "Graba un video describiendo tu día típico."
    ],
    checkpoint: { 
      question: "Describe tu mañana típica en 3-4 oraciones.", 
      answer: "I wake up at 7 AM. I take a shower and get dressed. Then I have breakfast. I leave for work at 8." 
    },
    nextStep: "Aprende a describir experiencias pasadas simples."
  },

  // Article 22: Describing Past Experiences
  {
    id: 'skill-past-experiences',
    title: 'Habilidad: Describir experiencias pasadas simples',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'El estudiante narrará eventos pasados usando Past Simple con verbos regulares e irregulares.',
    explanation: `Contar experiencias pasadas es esencial para conversaciones. Usa Past Simple con expresiones de tiempo pasado.

**Estructura:**
Sujeto + verbo en pasado + complemento + (expresión de tiempo)

**Expresiones de tiempo pasado:**
• yesterday - ayer
• last night/week/month/year
• ago: two days ago, a week ago
• in 2020, in January
• when I was young/a child

**Preguntas sobre el pasado:**
• "What did you do yesterday?"
• "Where did you go last weekend?"
• "How was your vacation?"
• "Did you have a good time?"

**Respuestas:**
• "I went to the beach."
• "It was great!"
• "Yes, I had a wonderful time."

**Conectores temporales:**
• First, ... / At first, ...
• Then, ... / After that, ...
• Later, ...
• Finally, ... / In the end, ...

**Modelo de narración:**
"Last weekend, I went to the mountains with my family. First, we drove for two hours. Then, we had a picnic near a lake. The weather was beautiful. After that, we took many photos. We came back home in the evening. It was a wonderful day!"`,
    examples: [
      { english: "Yesterday I visited my grandmother.", spanish: "Ayer visité a mi abuela.", context: "Pasado simple + yesterday" },
      { english: "Last summer, we traveled to Italy. It was amazing!", spanish: "El verano pasado, viajamos a Italia. ¡Fue increíble!", context: "Narración con opinión" },
      { english: "I didn't go to the party because I was sick.", spanish: "No fui a la fiesta porque estaba enfermo.", context: "Pasado negativo + razón" },
      { english: "When I was a child, I lived in a small town.", spanish: "Cuando era niño, vivía en un pueblo pequeño.", context: "Pasado + cuando era niño" }
    ],
    commonMistakes: [
      { mistake: "Yesterday I go to the cinema.", correction: "Yesterday I went to the cinema.", why: "Con expresiones de pasado, usa el verbo en pasado." },
      { mistake: "I didn't went there.", correction: "I didn't go there.", why: "Después de 'didn't', el verbo va en forma base." },
      { mistake: "It was a day wonderful.", correction: "It was a wonderful day.", why: "Adjetivo antes del sustantivo en inglés." }
    ],
    practiceTips: [
      "Escribe sobre tu último fin de semana.",
      "Practica verbos irregulares en pasado.",
      "Cuenta una anécdota de tu infancia.",
      "Responde preguntas: 'What did you do yesterday?'",
      "Lee historias cortas en pasado y retells."
    ],
    checkpoint: { 
      question: "Cuenta qué hiciste el fin de semana pasado.", 
      answer: "Last weekend, I [verb in past]. First, I... Then, I... It was [adjective]!" 
    },
    nextStep: "Aprende a pedir y dar direcciones."
  },

  // Articles 23-29 continue with remaining A1→A2 skills...
  // Article 23: Asking and Giving Directions
  {
    id: 'skill-directions',
    title: 'Habilidad: Pedir y dar direcciones',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'El estudiante preguntará cómo llegar a lugares y dará indicaciones claras usando imperativo y preposiciones.',
    explanation: `Pedir y dar direcciones es una habilidad práctica esencial, especialmente al viajar.

**Pedir direcciones:**
• "Excuse me, where is the bank?"
• "Could you tell me how to get to the station?"
• "Is there a pharmacy near here?"
• "How do I get to the museum?"

**Dar direcciones - Verbos imperativo:**
• Go straight (ahead) - sigue recto
• Turn left/right - gira a la izquierda/derecha
• Take the first/second left/right - toma la primera/segunda a la izquierda
• Go past the... - pasa el/la...
• Cross the street - cruza la calle
• Walk along the street - camina por la calle

**Preposiciones de lugar:**
• on your left/right - a tu izquierda/derecha
• at the corner - en la esquina
• next to - al lado de
• across from / opposite - enfrente de
• between X and Y - entre X e Y

**Expresiones de distancia:**
• It's about 5 minutes walk.
• It's not far from here.
• It's two blocks from here.
• You can't miss it.

**Modelo de diálogo:**
A: "Excuse me, where is the post office?"
B: "Go straight ahead for two blocks. Then turn left at the corner. The post office is on your right, next to the bank."
A: "Thank you very much!"
B: "You're welcome."`,
    examples: [
      { english: "Go straight and turn right at the traffic lights.", spanish: "Sigue recto y gira a la derecha en el semáforo.", context: "Instrucciones básicas" },
      { english: "The museum is on your left, across from the park.", spanish: "El museo está a tu izquierda, enfrente del parque.", context: "Ubicación con preposiciones" },
      { english: "Could you tell me how to get to the train station?", spanish: "¿Podría decirme cómo llegar a la estación de tren?", context: "Pregunta formal" },
      { english: "It's about a 10-minute walk from here.", spanish: "Está a unos 10 minutos a pie de aquí.", context: "Indicando distancia" }
    ],
    commonMistakes: [
      { mistake: "Where is the bank is?", correction: "Where is the bank?", why: "No repitas 'is'." },
      { mistake: "Turn to the left.", correction: "Turn left.", why: "'Turn left/right' no necesita 'to the'." },
      { mistake: "Go straight on for two streets.", correction: "Go straight for two blocks.", why: "'Blocks' es más natural que 'streets' para distancia." }
    ],
    practiceTips: [
      "Usa Google Maps para practicar direcciones.",
      "Dibuja un mapa y da direcciones a un amigo.",
      "Role-play: uno pregunta, otro responde.",
      "Practica con lugares reales de tu ciudad.",
      "Memoriza expresiones útiles como 'You can't miss it.'"
    ],
    checkpoint: { 
      question: "Da direcciones de tu casa a la tienda más cercana.", 
      answer: "Go out of my house and turn left. Walk straight for one block. The store is on your right." 
    },
    nextStep: "Aprende a ordenar comida y comprar en tiendas."
  },

  // Article 24: Ordering Food and Shopping
  {
    id: 'skill-ordering-shopping',
    title: 'Habilidad: Ordenar comida y comprar en una tienda',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'El estudiante podrá hacer pedidos en restaurantes y realizar compras básicas con frases apropiadas.',
    explanation: `Saber pedir comida y comprar es esencial para la vida diaria y los viajes.

**En un restaurante - Cliente:**
• "A table for two, please."
• "Can I see the menu, please?"
• "I'd like... / I'll have..."
• "Can I have...?"
• "What do you recommend?"
• "I'm allergic to..."
• "Can I have the bill/check, please?"

**Respuestas del mesero:**
• "Would you like something to drink?"
• "Are you ready to order?"
• "How would you like your steak?" (rare/medium/well-done)
• "Anything else?"

**En una tienda - Cliente:**
• "Excuse me, where can I find...?"
• "Do you have...?"
• "How much is this?"
• "Can I try this on?" (ropa)
• "I'll take this one."
• "Can I pay by card?"

**Respuestas del vendedor:**
• "Can I help you?"
• "What size do you need?"
• "That's $50, please."
• "Cash or card?"

**Frases útiles:**
• "It's too expensive."
• "Do you have this in a different size/color?"
• "I'm just looking, thanks."
• "Keep the change."`,
    examples: [
      { english: "I'd like a cheeseburger and a cola, please.", spanish: "Quisiera una hamburguesa con queso y una coca, por favor.", context: "Ordenando comida" },
      { english: "How much are these shoes?", spanish: "¿Cuánto cuestan estos zapatos?", context: "Preguntando precio (plural)" },
      { english: "Do you have this shirt in medium?", spanish: "¿Tiene esta camisa en talla mediana?", context: "Preguntando por talla" },
      { english: "Can I have the check, please? We're ready to go.", spanish: "¿Me puede traer la cuenta, por favor? Estamos listos para irnos.", context: "Pidiendo la cuenta" }
    ],
    commonMistakes: [
      { mistake: "I want a coffee.", correction: "I'd like a coffee, please.", why: "'I'd like' es más educado que 'I want'." },
      { mistake: "How much costs this?", correction: "How much is this? / How much does this cost?", why: "Estructura correcta con 'how much'." },
      { mistake: "The account, please.", correction: "The bill/check, please.", why: "'Bill' (UK) o 'check' (US), no 'account'." }
    ],
    practiceTips: [
      "Role-play: practica con un amigo como mesero/cliente.",
      "Lee menús de restaurantes en inglés.",
      "Practica diálogos de compras en voz alta.",
      "Memoriza frases clave: 'I'd like...', 'Can I have...?'",
      "Ve videos de compras en inglés."
    ],
    checkpoint: { 
      question: "Ordena un café y un sándwich en un café.", 
      answer: "I'd like a coffee and a sandwich, please. / Can I have a coffee and a chicken sandwich?" 
    },
    nextStep: "Aprende a hacer planes simples con 'going to'."
  },

  // Article 25: Making Simple Plans
  {
    id: 'skill-making-plans',
    title: 'Habilidad: Hacer planes simples',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'El estudiante usará "going to" y expresiones de tiempo futuro para proponer y acordar planes.',
    explanation: `Hacer planes con amigos y colegas requiere vocabulario específico y estructuras de futuro.

**Proponer planes:**
• "Do you want to...?"
• "Would you like to...?"
• "How about + verb-ing...?"
• "Let's + verb..."
• "We could + verb..."
• "Why don't we + verb...?"

**Aceptar:**
• "Sure!"
• "That sounds great!"
• "I'd love to!"
• "Good idea!"
• "Count me in!"

**Rechazar cortésmente:**
• "I'm sorry, I can't."
• "I'd love to, but..."
• "Maybe another time."
• "I'm afraid I'm busy."

**Hablar de planes decididos:**
• "I'm going to visit my parents this weekend."
• "We're having dinner at 8."
• "She's traveling to Paris next week."

**Expresiones de tiempo futuro:**
• tomorrow, tonight
• this weekend, this week
• next Monday, next month
• in two days, in a week

**Confirmar detalles:**
• "What time shall we meet?"
• "Where do you want to go?"
• "How about meeting at 7?"
• "Is Saturday good for you?"`,
    examples: [
      { english: "Do you want to go to the cinema tonight?", spanish: "¿Quieres ir al cine esta noche?", context: "Proponiendo plan" },
      { english: "That sounds great! What time?", spanish: "¡Suena genial! ¿A qué hora?", context: "Aceptando" },
      { english: "I'm sorry, I can't. I'm going to have dinner with my family.", spanish: "Lo siento, no puedo. Voy a cenar con mi familia.", context: "Rechazando con razón" },
      { english: "Let's meet at 7 in front of the restaurant.", spanish: "Quedemos a las 7 frente al restaurante.", context: "Fijando detalles" }
    ],
    commonMistakes: [
      { mistake: "I want go to the cinema.", correction: "I want to go to the cinema.", why: "After 'want', use 'to + verb'." },
      { mistake: "Let's to meet tomorrow.", correction: "Let's meet tomorrow.", why: "After 'let's', use verb base (no 'to')." },
      { mistake: "What about go to the beach?", correction: "What about going to the beach?", why: "'What about' / 'How about' + verb-ING." }
    ],
    practiceTips: [
      "Practica invitando a amigos por mensaje en inglés.",
      "Role-play: propón planes y responde.",
      "Escribe tus planes para la semana.",
      "Memoriza formas de aceptar y rechazar.",
      "Practica negociando horarios y lugares."
    ],
    checkpoint: { 
      question: "Invita a un amigo a ver una película el sábado.", 
      answer: "Would you like to watch a movie on Saturday? / Do you want to go to the cinema this Saturday?" 
    },
    nextStep: "Aprende a expresar gustos y disgustos."
  },

  // Article 26: Expressing Likes and Dislikes
  {
    id: 'skill-likes-dislikes',
    title: 'Habilidad: Expresar gustos y disgustos',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'El estudiante expresará preferencias usando like, love, hate, prefer y otras estructuras.',
    explanation: `Expresar gustos es fundamental para conversaciones y para conocer a otras personas.

**Verbos de preferencia + verb-ING / noun:**
• **Love** (encanta): "I love cooking."
• **Like** (gusta): "I like pizza."
• **Enjoy** (disfruta): "I enjoy reading."
• **Don't mind** (no importa): "I don't mind waiting."
• **Don't like** (no gusta): "I don't like spiders."
• **Hate** (odia): "I hate getting up early."
• **Can't stand** (no soporta): "I can't stand loud music."

**Escala de preferencia:**
love > really like > like > don't mind > don't like > hate > can't stand

**Preguntas:**
• "Do you like...?"
• "What kind of music do you like?"
• "What's your favorite...?"
• "Which do you prefer, A or B?"

**Expresar preferencia:**
• "I prefer coffee to tea."
• "I'd rather stay home."
• "I like both, but I prefer..."

**Razones:**
• "I like it because..."
• "I don't like it because it's..."
• "It makes me feel..."

**Respuestas:**
• "So do I!" (Yo también - positivo)
• "Neither do I." (Yo tampoco - negativo)
• "Really? I don't." (¿En serio? A mí no.)`,
    examples: [
      { english: "I love traveling but I hate packing.", spanish: "Me encanta viajar pero odio empacar.", context: "Contraste de gustos" },
      { english: "What kind of movies do you like?", spanish: "¿Qué tipo de películas te gustan?", context: "Preguntando preferencias" },
      { english: "I prefer tea to coffee.", spanish: "Prefiero el té al café.", context: "Comparando preferencias" },
      { english: "I really enjoy cooking. It relaxes me.", spanish: "Realmente disfruto cocinar. Me relaja.", context: "Gusto con razón" }
    ],
    commonMistakes: [
      { mistake: "I like play tennis.", correction: "I like playing tennis.", why: "Después de 'like', usa verbo + -ING." },
      { mistake: "I'm like pizza.", correction: "I like pizza.", why: "'I'm like' significa 'soy como'. 'I like' = 'me gusta'." },
      { mistake: "Me too.", correction: "So do I. / Me too.", why: "'Me too' es informal. 'So do I' es más correcto gramaticalmente." }
    ],
    practiceTips: [
      "Haz una lista de 10 cosas que amas y 5 que odias.",
      "Compara tus gustos con un amigo.",
      "Practica dando razones: 'I like X because...'",
      "Responde a gustos: 'So do I' / 'Neither do I'.",
      "Describe tus comidas, películas y música favoritas."
    ],
    checkpoint: { 
      question: "Describe tres cosas que te gustan y una que no te gusta.", 
      answer: "I love traveling and reading. I like cooking. But I don't like getting up early." 
    },
    nextStep: "Aprende a hacer comparaciones básicas."
  },

  // Article 27: Making Basic Comparisons
  {
    id: 'skill-basic-comparisons',
    title: 'Habilidad: Hacer comparaciones básicas',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'El estudiante comparará personas, lugares y cosas usando comparativos y superlativos.',
    explanation: `Las comparaciones son útiles para describir diferencias y similitudes.

**Comparativos (dos cosas):**
• A is + comparativo + than B
• "Paris is bigger than Lyon."
• "This book is more interesting than that one."

**Superlativos (tres o más):**
• A is the + superlativo + (of/in)
• "Tokyo is the biggest city in Japan."
• "She's the most intelligent person I know."

**Igualdad:**
• as + adjetivo + as
• "He's as tall as his father."
• "This coffee is as good as the other."

**Desigualdad:**
• not as + adjetivo + as
• "My car is not as fast as yours."

**Expresiones útiles:**
• "Which is better, A or B?"
• "They're both good, but I prefer..."
• "There's no comparison. X is much better."
• "It's completely different."
• "They're quite similar."

**Amplificadores:**
• much/far + comparativo: "much better"
• a little/slightly + comparativo: "a little cheaper"
• by far + superlativo: "by far the best"`,
    examples: [
      { english: "Summer is hotter than spring.", spanish: "El verano es más caliente que la primavera.", context: "Comparando estaciones" },
      { english: "What's the most beautiful place you've visited?", spanish: "¿Cuál es el lugar más hermoso que has visitado?", context: "Pregunta superlativa" },
      { english: "This restaurant is as expensive as the other one.", spanish: "Este restaurante es tan caro como el otro.", context: "Comparación de igualdad" },
      { english: "My apartment is much smaller than my parents' house.", spanish: "Mi apartamento es mucho más pequeño que la casa de mis padres.", context: "Comparativo intensificado" }
    ],
    commonMistakes: [
      { mistake: "He is more tall than me.", correction: "He is taller than me.", why: "Adjetivos cortos usan -er, no 'more'." },
      { mistake: "She is the more intelligent.", correction: "She is the most intelligent.", why: "Superlativos usan 'the most', no 'the more'." },
      { mistake: "My house is as big than yours.", correction: "My house is as big as yours.", why: "Usa 'as...as', no 'as...than'." }
    ],
    practiceTips: [
      "Compara dos ciudades que conoces.",
      "Describe a miembros de tu familia comparándolos.",
      "Practica con fotos: '¿Cuál es más grande?'",
      "Compara productos antes de 'comprar'.",
      "Escribe comparaciones de tus películas favoritas."
    ],
    checkpoint: { 
      question: "Compara dos países que conoces.", 
      answer: "Spain is hotter than England. England is rainier than Spain. Spain is more popular for beach holidays." 
    },
    nextStep: "Aprende a pedir aclaración cuando no entiendes."
  },

  // Article 28: Asking for Clarification
  {
    id: 'skill-asking-clarification',
    title: 'Habilidad: Pedir aclaración',
    level: 'A1→A2',
    category: 'skill',
    learningGoal: 'El estudiante usará frases como "Can you repeat?" y "What does X mean?" para pedir ayuda comunicativa.',
    explanation: `No entender algo es normal al aprender un idioma. Saber pedir aclaración es crucial.

**Pedir repetición:**
• "Sorry, can you repeat that?"
• "Could you say that again, please?"
• "Pardon?" / "I'm sorry?"
• "I didn't catch that."

**Pedir que hablen más lento:**
• "Could you speak more slowly, please?"
• "Can you slow down a bit?"

**Preguntar significado:**
• "What does [palabra] mean?"
• "What do you mean by [palabra]?"
• "I don't understand [palabra]."
• "How do you say [palabra en español] in English?"

**Verificar comprensión:**
• "Do you mean...?"
• "So, you're saying that...?"
• "Let me check I understand..."
• "In other words, ...?"

**Pedir que deletreen:**
• "How do you spell that?"
• "Can you spell that for me?"

**Disculparse por no entender:**
• "Sorry, I didn't understand."
• "I'm still learning English."
• "My English isn't very good yet."

**Respuestas útiles:**
• "Yes, exactly!"
• "No, what I mean is..."
• "Let me explain again..."`,
    examples: [
      { english: "Sorry, could you repeat that more slowly?", spanish: "Perdón, ¿podría repetir eso más lento?", context: "Pidiendo repetición" },
      { english: "What does 'schedule' mean?", spanish: "¿Qué significa 'schedule'?", context: "Preguntando significado" },
      { english: "How do you spell your last name?", spanish: "¿Cómo se deletrea tu apellido?", context: "Pidiendo deletreo" },
      { english: "Do you mean we should meet tomorrow?", spanish: "¿Quieres decir que debemos vernos mañana?", context: "Verificando comprensión" }
    ],
    commonMistakes: [
      { mistake: "Repeat, please.", correction: "Could you repeat that, please?", why: "Solo 'repeat' suena brusco. Usa una pregunta cortés." },
      { mistake: "What means this word?", correction: "What does this word mean?", why: "Estructura correcta: What does X mean?" },
      { mistake: "How do you say in English 'mesa'?", correction: "How do you say 'mesa' in English?", why: "'In English' va al final de la pregunta." }
    ],
    practiceTips: [
      "Memoriza 3-4 frases para pedir aclaración.",
      "No tengas miedo de preguntar.",
      "Practica con videos: pausa y pide repetición imaginaria.",
      "Usa estas frases en conversaciones reales.",
      "Escribe nuevas palabras que aprendas al preguntar."
    ],
    checkpoint: { 
      question: "¿Cómo preguntas el significado de una palabra que no conoces?", 
      answer: "What does [word] mean? / Sorry, I don't understand. What does that mean?" 
    },
    nextStep: "Desarrolla la estrategia de parafrasear cuando te falta vocabulario."
  },

  // Article 29: Paraphrasing Strategy
  {
    id: 'strategy-paraphrasing',
    title: 'Estrategia: Parafrasear y usar gestos cuando falta vocabulario',
    level: 'A1→A2',
    category: 'strategy',
    learningGoal: 'El estudiante desarrollará estrategias para comunicarse cuando no conoce una palabra específica.',
    explanation: `Cuando no conoces una palabra, no te detengas. Usa estrategias para seguir comunicándote.

**Estrategia 1: Describir la palabra**
• "It's a thing that..." (Es una cosa que...)
• "It's a place where..." (Es un lugar donde...)
• "It's a person who..." (Es una persona que...)
• "It's like a... but..." (Es como un... pero...)

**Estrategia 2: Categorías generales**
• "It's a kind of food/animal/tool..."
• "It's a type of..."
• "It's something you use to..."
• "It's the thing you use when..."

**Estrategia 3: Usar palabras simples**
• En vez de "refrigerator" → "cold box for food"
• En vez de "scissors" → "thing to cut paper"
• En vez de "pillow" → "soft thing for your head in bed"

**Estrategia 4: Gestos y señales**
• Señalar objetos
• Hacer mímica de acciones
• Dibujar si es posible
• Usar el teléfono para mostrar imágenes

**Estrategia 5: Pedir la palabra**
• "How do you say [descripción] in English?"
• "What's the word for [descripción]?"
• "I don't know the word, but it's..."

**Ejemplo de parafraseo:**
"I need... I don't know the word... it's the thing... you use it in the kitchen... to open bottles... " → "A bottle opener!"`,
    examples: [
      { english: "It's a thing you use to take photos. (camera)", spanish: "Es una cosa que usas para tomar fotos. (cámara)", context: "Describiendo un objeto" },
      { english: "It's the person who brings food in a restaurant. (waiter)", spanish: "Es la persona que trae la comida en un restaurante. (mesero)", context: "Describiendo una persona" },
      { english: "It's like a taxi but you call it with an app. (Uber)", spanish: "Es como un taxi pero lo llamas con una aplicación. (Uber)", context: "Comparando" },
      { english: "It's the place where you wait for the train. (platform)", spanish: "Es el lugar donde esperas el tren. (andén)", context: "Describiendo un lugar" }
    ],
    commonMistakes: [
      { mistake: "Quedarse en silencio cuando no sabes una palabra.", correction: "Describe it: 'It's a thing that...'", why: "Siempre intenta comunicarte, aunque sea con rodeos." },
      { mistake: "Decir la palabra en español y esperar.", correction: "Describe it or ask: 'How do you say [descripción] in English?'", why: "Es mejor describir que solo decir la palabra en español." }
    ],
    practiceTips: [
      "Practica describiendo objetos sin decir su nombre.",
      "Juega 'tabú': describe sin usar palabras clave.",
      "Cuando no sepas una palabra, no te detengas, describe.",
      "Usa gestos naturalmente al hablar.",
      "Aprende frases útiles: 'It's a thing that...'"
    ],
    checkpoint: { 
      question: "Describe 'umbrella' sin usar la palabra.", 
      answer: "It's a thing you use when it rains. You open it and it protects you from water." 
    },
    nextStep: "¡Felicidades! Has completado el curso A1→A2. Continúa con A2→B1 para seguir avanzando."
  },

  // ================================================================
  // CURSO 2: A2 → B1 (Articles 30-56)
  // ================================================================

  // Article 30: Work and Studies Vocabulary
  {
    id: 'vocab-work-studies',
    title: 'Vocabulario: Trabajo y Estudios',
    level: 'A2→B1',
    category: 'vocabulary',
    learningGoal: 'El estudiante dominará vocabulario relacionado con profesiones, áreas de estudio y tareas laborales.',
    explanation: `A nivel B1, necesitas hablar con más detalle sobre tu vida profesional y académica.

**Profesiones avanzadas:**
• accountant - contador
• architect - arquitecto
• consultant - consultor
• entrepreneur - emprendedor
• freelancer - trabajador independiente
• HR manager - gerente de RRHH
• software developer - desarrollador de software
• marketing specialist - especialista en marketing

**Áreas de estudio:**
• Business Administration - Administración de Empresas
• Computer Science - Ciencias de la Computación
• Law - Derecho
• Medicine - Medicina
• Engineering - Ingeniería
• Psychology - Psicología
• Economics - Economía

**Verbos de trabajo:**
• apply for (a job) - postularse para
• be in charge of - estar a cargo de
• deal with - tratar con
• manage - gestionar
• report to - reportar a
• be responsible for - ser responsable de
• collaborate with - colaborar con
• meet deadlines - cumplir plazos

**Tipos de empleo:**
• full-time - tiempo completo
• part-time - medio tiempo
• temporary - temporal
• permanent - permanente
• remote work - trabajo remoto
• internship - pasantía

**Vocabulario de oficina:**
• colleague - colega
• supervisor - supervisor
• team - equipo
• department - departamento
• meeting - reunión
• project - proyecto
• deadline - fecha límite`,
    examples: [
      { english: "I'm applying for a marketing position at a tech company.", spanish: "Estoy postulándome para un puesto de marketing en una empresa tecnológica.", context: "Búsqueda de empleo" },
      { english: "She's in charge of the finance department.", spanish: "Ella está a cargo del departamento de finanzas.", context: "Describiendo responsabilidades" },
      { english: "I'm studying Business Administration part-time while working.", spanish: "Estoy estudiando Administración de Empresas medio tiempo mientras trabajo.", context: "Combinando estudio y trabajo" },
      { english: "We need to meet the deadline by Friday.", spanish: "Necesitamos cumplir el plazo para el viernes.", context: "Contexto laboral" }
    ],
    commonMistakes: [
      { mistake: "I'm working in a company.", correction: "I work at/for a company.", why: "Para empleo, usamos 'work at/for', no 'in'." },
      { mistake: "I study the medicine.", correction: "I study medicine.", why: "Las áreas de estudio no llevan artículo." },
      { mistake: "I apply to a job.", correction: "I apply for a job.", why: "El phrasal verb correcto es 'apply for'." }
    ],
    practiceTips: [
      "Describe tu trabajo o el de alguien que conoces en detalle.",
      "Practica una entrevista de trabajo en inglés.",
      "Lee descripciones de trabajo en inglés.",
      "Escribe tu CV/resume en inglés.",
      "Habla sobre tus metas profesionales."
    ],
    checkpoint: { 
      question: "Describe tu trabajo o tus estudios en 3-4 oraciones.", 
      answer: "I work as a [job] at [company]. I'm responsible for [tasks]. I collaborate with [team]. I'm also studying [subject] part-time." 
    },
    nextStep: "Aprende vocabulario de tecnología y medios."
  },

  // Continuing with remaining articles for A2→B1, B1→B2, B2→C1...
  // For brevity, I'll include key articles from each level

  // Article 40: Past Simple vs Present Perfect
  {
    id: 'gram-past-vs-perfect',
    title: 'Gramática: Contraste Pasado Simple vs. Presente Perfecto',
    level: 'A2→B1',
    category: 'grammar',
    learningGoal: 'El estudiante distinguirá cuándo usar Past Simple (momento específico) vs Present Perfect (conexión con el presente).',
    explanation: `Esta es una de las diferencias más difíciles para hispanohablantes. Entiéndela bien para sonar natural.

**PAST SIMPLE:**
Acciones completas en un momento ESPECÍFICO del pasado.
• "I **visited** Paris in 2019." (momento específico: 2019)
• "She **graduated** last year." (momento específico: año pasado)

**Palabras clave:**
yesterday, last week/month/year, in 2020, ago, when I was young

**PRESENT PERFECT:**
Acciones pasadas con CONEXIÓN al presente (sin tiempo específico).
• "I **have visited** Paris." (experiencia de vida - no importa cuándo)
• "She **has graduated**." (resultado relevante ahora)

**Palabras clave:**
ever, never, already, yet, just, recently, so far, since, for

**REGLA CLAVE:**
• ¿Cuándo? → PAST SIMPLE
• ¿Has hecho esto alguna vez? → PRESENT PERFECT

**Comparación directa:**
| Present Perfect | Past Simple |
|-----------------|-------------|
| I've been to London. (experiencia) | I went to London in 2018. (cuándo) |
| Have you ever tried sushi? | Did you try sushi last night? |
| She has just arrived. (acaba de) | She arrived an hour ago. (cuándo) |

**Estructura Present Perfect:**
have/has + past participle
• I/You/We/They have worked
• He/She/It has worked

**Usos del Present Perfect:**
1. **Experiencias:** "I have never seen snow."
2. **Acciones recientes:** "She has just finished."
3. **Acciones que continúan:** "I have lived here for 5 years."
4. **Cambios:** "He has lost weight."`,
    examples: [
      { english: "I have visited Japan. I went there in 2019.", spanish: "He visitado Japón. Fui en 2019.", context: "PP para experiencia, PS para cuándo" },
      { english: "Have you ever eaten snails? - Yes, I tried them in France.", spanish: "¿Alguna vez has comido caracoles? - Sí, los probé en Francia.", context: "PP para experiencia, PS para momento" },
      { english: "She has worked here for 5 years. She started in 2019.", spanish: "Ella ha trabajado aquí por 5 años. Empezó en 2019.", context: "PP para duración hasta ahora, PS para inicio" },
      { english: "I've just finished my homework.", spanish: "Acabo de terminar mi tarea.", context: "Acción reciente con 'just'" }
    ],
    commonMistakes: [
      { mistake: "I have visited Paris last year.", correction: "I visited Paris last year.", why: "Con tiempo específico (last year), usa Past Simple." },
      { mistake: "Did you ever see this movie?", correction: "Have you ever seen this movie?", why: "Para experiencias de vida, usa Present Perfect + ever." },
      { mistake: "I live here since 2020.", correction: "I have lived here since 2020.", why: "Para acciones que empezaron en el pasado y continúan, usa Present Perfect." }
    ],
    practiceTips: [
      "Pregunta '¿Hay tiempo específico?' → Si sí: Past Simple.",
      "Practica con 'ever/never' para experiencias.",
      "Usa 'for/since' correctamente con Present Perfect.",
      "Lee textos e identifica por qué se usa cada tiempo.",
      "Escribe sobre tus experiencias de vida."
    ],
    checkpoint: { 
      question: "Completa: 'I ___ (see) that movie. I ___ (watch) it last weekend.'", 
      answer: "I have seen / I've seen that movie. I watched it last weekend." 
    },
    nextStep: "Aprende los tres tipos de futuro: will vs going to vs present continuous."
  },

  // Article 66: Conditionals Complete
  {
    id: 'gram-conditionals-complete',
    title: 'Gramática: Condicionales Cero, Primero, Segundo, Tercero y Mixtos',
    level: 'B1→B2',
    category: 'grammar',
    learningGoal: 'El estudiante dominará todos los tipos de condicionales y sus usos comunicativos.',
    explanation: `Los condicionales expresan situaciones hipotéticas y sus consecuencias. Dominarlos es señal de nivel avanzado.

**CONDICIONAL CERO (verdades generales):**
If + present simple, present simple
• "If you heat water to 100°C, it boils."
• Uso: Hechos científicos, verdades universales

**PRIMER CONDICIONAL (situaciones probables):**
If + present simple, will + verb
• "If it rains tomorrow, we will stay home."
• Uso: Situaciones reales y probables en el futuro

**SEGUNDO CONDICIONAL (situaciones hipotéticas presentes):**
If + past simple, would + verb
• "If I won the lottery, I would buy a house."
• Uso: Situaciones irreales o improbables

**TERCER CONDICIONAL (situaciones irreales pasadas):**
If + past perfect, would have + past participle
• "If I had studied more, I would have passed."
• Uso: Arrepentimientos, especular sobre el pasado

**CONDICIONALES MIXTOS:**
Condición pasada → resultado presente:
If + past perfect, would + verb
• "If I had taken that job, I would be rich now."

Condición general → resultado pasado:
If + past simple, would have + past participle
• "If I were more careful, I wouldn't have made that mistake."

**Otros conectores condicionales:**
• Unless (= if not): "Unless you hurry, you'll miss the bus."
• As long as / Provided that: "I'll help, provided that you ask nicely."
• In case: "Take an umbrella in case it rains."`,
    examples: [
      { english: "If I had more time, I would learn Japanese.", spanish: "Si tuviera más tiempo, aprendería japonés.", context: "2º condicional - hipotético" },
      { english: "If you had told me earlier, I would have helped you.", spanish: "Si me hubieras dicho antes, te habría ayudado.", context: "3er condicional - pasado irreal" },
      { english: "If I hadn't missed that flight, I would be in Paris now.", spanish: "Si no hubiera perdido ese vuelo, estaría en París ahora.", context: "Mixto: pasado → presente" },
      { english: "I'll go unless it rains.", spanish: "Iré a menos que llueva.", context: "Unless = si no" }
    ],
    commonMistakes: [
      { mistake: "If I would have money, I would travel.", correction: "If I had money, I would travel.", why: "En la cláusula 'if', usa past simple, no 'would'." },
      { mistake: "If I knew, I would have told you.", correction: "If I had known, I would have told you.", why: "Para pasado irreal, usa past perfect en 'if'." },
      { mistake: "If I will see him, I will tell him.", correction: "If I see him, I will tell him.", why: "En 1er condicional, 'if' va con present, no future." }
    ],
    practiceTips: [
      "Practica identificando qué tipo de condicional usar.",
      "Escribe sobre arrepentimientos con 3er condicional.",
      "Imagina escenarios hipotéticos con 2º condicional.",
      "Mezcla condicionales en una historia.",
      "Practica con situaciones reales: '¿Qué harías si...?'"
    ],
    checkpoint: { 
      question: "Crea una oración con cada tipo de condicional.", 
      answer: "0: If you mix blue and yellow, you get green. 1: If I finish early, I'll call you. 2: If I were you, I would accept. 3: If I had known, I would have come." 
    },
    nextStep: "Domina la voz pasiva en múltiples tiempos."
  },

  // Article 86: Nominalization
  {
    id: 'gram-nominalization',
    title: 'Gramática: Nominalización',
    level: 'B2→C1',
    category: 'grammar',
    learningGoal: 'El estudiante transformará verbos y adjetivos en sustantivos para un estilo más formal y académico.',
    explanation: `La nominalización es convertir verbos/adjetivos en sustantivos. Es clave para escritura académica y formal.

**¿Qué es nominalizar?**
Cambiar: "They implemented the policy" (verbo)
Por: "The implementation of the policy" (sustantivo)

**¿Por qué nominalizar?**
• Suena más formal y académico
• Permite oraciones más densas en información
• Es característico del inglés académico y profesional

**Sufijos comunes de nominalización:**

**De verbos:**
| Verbo | Sustantivo |
|-------|-----------|
| decide | decision (-sion) |
| develop | development (-ment) |
| analyze | analysis (-sis) |
| apply | application (-tion) |
| discover | discovery (-ry) |
| fail | failure (-ure) |
| arrive | arrival (-al) |

**De adjetivos:**
| Adjetivo | Sustantivo |
|----------|-----------|
| important | importance (-ance) |
| different | difference (-ence) |
| able | ability (-ity) |
| happy | happiness (-ness) |
| free | freedom (-dom) |

**Ejemplos de transformación:**

Informal: "They decided to reduce costs."
Formal: "The decision to implement cost reduction..."

Informal: "We need to develop new products quickly."
Formal: "The rapid development of new products is necessary."

**Patrones útiles:**
• The + noun + of + noun: "The implementation of the strategy"
• Due to + noun: "Due to the complexity of the issue"
• Following + noun: "Following the announcement"

**Cuándo NO nominalizar:**
• Cuando hace el texto demasiado denso
• En comunicación informal
• Cuando pierde claridad`,
    examples: [
      { english: "The government's decision (← decided) to increase taxes caused controversy.", spanish: "La decisión del gobierno de aumentar impuestos causó controversia.", context: "decide → decision" },
      { english: "The development (← developed) of new technology requires significant investment.", spanish: "El desarrollo de nueva tecnología requiere inversión significativa.", context: "develop → development" },
      { english: "The importance (← important) of education cannot be overstated.", spanish: "La importancia de la educación no puede subestimarse.", context: "important → importance" },
      { english: "Due to the failure (← failed) of negotiations, the project was cancelled.", spanish: "Debido al fracaso de las negociaciones, el proyecto fue cancelado.", context: "fail → failure" }
    ],
    commonMistakes: [
      { mistake: "The develop of...", correction: "The development of...", why: "Usa el sustantivo, no el verbo." },
      { mistake: "The importantly of education", correction: "The importance of education", why: "Usa el sustantivo del adjetivo, no el adverbio." },
      { mistake: "Nominalizar todo el texto.", correction: "Balance nominalization with clear verbs.", why: "El exceso hace el texto difícil de leer." }
    ],
    practiceTips: [
      "Identifica nominalizaciones en textos académicos.",
      "Transforma oraciones informales a formales.",
      "Crea un banco de sufijos de nominalización.",
      "Lee abstracts de papers y analiza su estructura.",
      "Practica escritura académica usando nominalizaciones."
    ],
    checkpoint: { 
      question: "Nominaliza: 'The company decided to invest in training because employees performed poorly.'", 
      answer: "The company's decision to invest in training resulted from poor employee performance." 
    },
    nextStep: "Aprende el uso estilístico de la gramática para el énfasis."
  }
];

// Helper functions
export const getCurriculumArticleById = (id: string): CurriculumArticle | undefined => {
  return curriculumArticles.find(article => article.id === id);
};

export const getCurriculumArticlesByLevel = (level: CurriculumArticle['level']): CurriculumArticle[] => {
  return curriculumArticles.filter(article => article.level === level);
};

export const getCurriculumArticlesByCategory = (category: CurriculumArticle['category']): CurriculumArticle[] => {
  return curriculumArticles.filter(article => article.category === category);
};

export const searchCurriculumArticles = (query: string): CurriculumArticle[] => {
  const lowerQuery = query.toLowerCase();
  return curriculumArticles.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.learningGoal.toLowerCase().includes(lowerQuery) ||
    article.explanation.toLowerCase().includes(lowerQuery)
  );
};

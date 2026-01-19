// Comprehensive English Grammar and Vocabulary Articles Data
// Written in a formal, textbook-like style for thorough understanding
// Covers ALL CEFR levels from A1 to C2

export interface ArticleSection {
  title: string;
  content: string;
}

export interface ArticleExample {
  english: string;
  spanish: string;
  explanation?: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category: 'grammar' | 'vocabulary' | 'speaking' | 'listening' | 'reading' | 'writing';
  tags: string[];
  estimatedReadTime: number;
  introduction: string;
  sections: ArticleSection[];
  examples: ArticleExample[];
  commonMistakes: { mistake: string; correction: string; explanation: string }[];
  practiceExercises: { question: string; answer: string; hint: string }[];
  summary: string;
  relatedArticles: string[];
}

export const articles: Article[] = [
  // =====================================================================
  // LEVEL A1 - BEGINNER
  // =====================================================================

  // ==================== VERB TO BE ====================
  {
    id: 'verb-to-be',
    title: 'El Verbo TO BE: Ser y Estar en Inglés',
    subtitle: 'Fundamento esencial de la gramática inglesa',
    level: 'A1',
    category: 'grammar',
    tags: ['to-be', 'verbs', 'basic-grammar', 'affirmative', 'negative', 'questions'],
    estimatedReadTime: 12,
    introduction: `El verbo "to be" es, sin lugar a dudas, el verbo más importante del idioma inglés. A diferencia del español, donde tenemos dos verbos distintos —"ser" y "estar"—, el inglés utiliza un único verbo para expresar ambos conceptos. Dominar este verbo es el primer paso fundamental para construir oraciones correctas en inglés.

Este artículo te proporcionará una comprensión completa del verbo "to be": sus formas, usos, conjugaciones y las reglas que debes memorizar para utilizarlo correctamente en cualquier contexto.`,
    sections: [
      {
        title: '1. Las Formas del Verbo TO BE',
        content: `El verbo "to be" tiene tres formas principales en presente: AM, IS y ARE. La elección de una u otra depende exclusivamente del sujeto de la oración.

**Conjugación en Presente:**

| Sujeto | Verbo TO BE | Contracción |
|--------|-------------|-------------|
| I (yo) | am | I'm |
| You (tú/usted) | are | You're |
| He (él) | is | He's |
| She (ella) | is | She's |
| It (ello/cosa) | is | It's |
| We (nosotros) | are | We're |
| They (ellos/as) | are | They're |

**Regla fundamental:** Memoriza que I siempre va con AM, he/she/it siempre van con IS, y you/we/they siempre van con ARE. Esta regla no tiene excepciones.`
      },
      {
        title: '2. Usos del Verbo TO BE',
        content: `El verbo "to be" se utiliza en múltiples contextos:

**A) Identidad y Definición:**
- "I am a teacher" (Soy profesor)
- "This is a book" (Esto es un libro)

**B) Descripción de Características:**
- "She is tall" (Ella es alta) — característica permanente
- "He is tired" (Él está cansado) — estado temporal

**C) Nacionalidad y Origen:**
- "We are from Spain" (Somos de España)
- "They are American" (Son americanos)

**D) Profesiones y Ocupaciones:**
- "He is a doctor" (Él es médico)
- "She is an engineer" (Ella es ingeniera)

**E) Ubicación y Localización:**
- "The book is on the table" (El libro está sobre la mesa)
- "We are at home" (Estamos en casa)

**F) Estados Temporales:**
- "I am hungry" (Tengo hambre / Estoy hambriento)
- "She is happy" (Ella está feliz)

**G) Edad:**
- "I am 25 years old" (Tengo 25 años)`
      },
      {
        title: '3. Forma Negativa',
        content: `Para formar oraciones negativas con "to be", simplemente añadimos "not" después del verbo.

**Estructura:** Sujeto + TO BE + NOT + Complemento

**Formas completas y contracciones:**

| Forma Completa | Contracción 1 | Contracción 2 |
|----------------|---------------|---------------|
| I am not | I'm not | — |
| You are not | You're not | You aren't |
| He is not | He's not | He isn't |
| She is not | She's not | She isn't |
| It is not | It's not | It isn't |
| We are not | We're not | We aren't |
| They are not | They're not | They aren't |

**Nota importante:** Con "I am not", solo existe una contracción común: "I'm not".`
      },
      {
        title: '4. Forma Interrogativa',
        content: `Para formar preguntas con "to be", invertimos el orden del sujeto y el verbo.

**Estructura:** TO BE + Sujeto + Complemento + ?

**Ejemplos de inversión:**
- "She is a doctor" → "Is she a doctor?"
- "They are at home" → "Are they at home?"

**Preguntas con palabras interrogativas (WH-Questions):**
- **What** is your name? (¿Cuál es tu nombre?)
- **Where** are you from? (¿De dónde eres?)
- **Who** is that man? (¿Quién es ese hombre?)
- **Why** are you sad? (¿Por qué estás triste?)
- **How** are you? (¿Cómo estás?)

**Respuestas cortas:**
- "Are you a student?" — "Yes, I am." / "No, I'm not."
- "Is she from Mexico?" — "Yes, she is." / "No, she isn't."`
      },
      {
        title: '5. El Verbo TO BE en Pasado',
        content: `El verbo "to be" tiene dos formas en pasado: WAS y WERE.

**Conjugación en Pasado:**

| Sujeto | Verbo TO BE (Pasado) |
|--------|---------------------|
| I | was |
| You | were |
| He/She/It | was |
| We | were |
| They | were |

**Regla:** I/he/she/it usan WAS. You/we/they usan WERE.

**Negativo en pasado:**
- I was not (wasn't)
- You were not (weren't)

**Interrogativo en pasado:**
- Was I late?
- Were you at the party?`
      }
    ],
    examples: [
      { english: "I am a student.", spanish: "Soy estudiante.", explanation: "Uso de AM con el pronombre I para indicar profesión/ocupación." },
      { english: "She is very intelligent.", spanish: "Ella es muy inteligente.", explanation: "Uso de IS con she para describir una característica." },
      { english: "They are not at home.", spanish: "Ellos no están en casa.", explanation: "Forma negativa con ARE NOT para indicar ubicación." },
      { english: "Is he your brother?", spanish: "¿Es él tu hermano?", explanation: "Forma interrogativa invirtiendo IS y el sujeto." },
      { english: "We were tired yesterday.", spanish: "Estábamos cansados ayer.", explanation: "Uso de WERE en pasado con we." },
      { english: "The weather is beautiful today.", spanish: "El clima está hermoso hoy.", explanation: "Uso de IS con it (implícito) para describir el clima." }
    ],
    commonMistakes: [
      { mistake: "She are a teacher.", correction: "She is a teacher.", explanation: "Con she (tercera persona singular) siempre usamos IS, nunca ARE." },
      { mistake: "I is happy.", correction: "I am happy.", explanation: "Con I siempre usamos AM. Es la única forma correcta." },
      { mistake: "They is students.", correction: "They are students.", explanation: "Con they (tercera persona plural) siempre usamos ARE." },
      { mistake: "Is you ready?", correction: "Are you ready?", explanation: "Con you siempre usamos ARE, incluso en preguntas." },
      { mistake: "He am from Spain.", correction: "He is from Spain.", explanation: "AM solo se usa con I. He requiere IS." }
    ],
    practiceExercises: [
      { question: "Complete: My mother ___ a nurse.", answer: "is", hint: "Mother = she (tercera persona singular)" },
      { question: "Complete: ___ you from Italy?", answer: "Are", hint: "You siempre va con ARE" },
      { question: "Complete: We ___ not ready yet.", answer: "are", hint: "We siempre va con ARE" },
      { question: "Complete: I ___ 25 years old.", answer: "am", hint: "I siempre va con AM" }
    ],
    summary: `El verbo "to be" es la base del inglés. Recuerda: I→AM, He/She/It→IS, You/We/They→ARE. Para negar, añade NOT después del verbo. Para preguntar, invierte el orden. En pasado: I/He/She/It→WAS, You/We/They→WERE.`,
    relatedArticles: ['present-simple', 'articles-a-an-the', 'possessive-adjectives']
  },

  // ==================== PRESENT SIMPLE ====================
  {
    id: 'present-simple',
    title: 'Present Simple: El Tiempo Presente en Inglés',
    subtitle: 'Cómo expresar rutinas, hábitos y verdades universales',
    level: 'A1',
    category: 'grammar',
    tags: ['present-simple', 'tenses', 'verbs', 'third-person', 'negative', 'questions'],
    estimatedReadTime: 15,
    introduction: `El Present Simple es uno de los tiempos verbales más utilizados en inglés. Se emplea para describir acciones habituales, rutinas diarias, hechos generales y verdades universales. A diferencia del español, donde las conjugaciones verbales cambian significativamente según la persona, en inglés el Present Simple mantiene la misma forma para casi todos los sujetos, con la importante excepción de la tercera persona del singular.`,
    sections: [
      {
        title: '1. Formación del Present Simple',
        content: `El Present Simple se forma utilizando el verbo en su forma base.

**Regla de la Tercera Persona (He/She/It):**
Cuando el sujeto es he, she o it, el verbo añade -S o -ES.

**Conjugación básica con "work":**

| Sujeto | Verbo |
|--------|-------|
| I | work |
| You | work |
| He/She/It | works |
| We | work |
| They | work |

**Reglas para añadir -S/-ES:**

1. **Regla general:** Añadir -S
   - work → works, play → plays

2. **Verbos en -s, -ss, -sh, -ch, -x, -o:** Añadir -ES
   - pass → passes, wash → washes, watch → watches, go → goes

3. **Verbos en consonante + Y:** Cambiar Y por -IES
   - study → studies, carry → carries

4. **Verbos en vocal + Y:** Solo añadir -S
   - play → plays, stay → stays`
      },
      {
        title: '2. Usos del Present Simple',
        content: `**A) Rutinas y Hábitos:**
- "I wake up at 7 AM every day."
- "She goes to the gym three times a week."

**B) Hechos Generales y Verdades Universales:**
- "Water boils at 100 degrees Celsius."
- "The sun rises in the east."

**C) Estados Permanentes:**
- "She lives in London."
- "He works for a bank."

**D) Horarios y Programas:**
- "The train leaves at 9 PM."
- "The movie starts at 8 o'clock."

**Palabras clave:** always, usually, often, sometimes, rarely, never, every day/week/month`
      },
      {
        title: '3. Forma Negativa',
        content: `Utilizamos los auxiliares DO y DOES.

**Estructura:** Sujeto + DO/DOES + NOT + Verbo base

**Regla importante:** Con DOES, el verbo principal NO lleva -S.

| Sujeto | Negación |
|--------|----------|
| I/You/We/They | don't + verbo |
| He/She/It | doesn't + verbo |

**Ejemplos:**
- ✓ "She doesn't like coffee."
- ✗ "She doesn't likes coffee." ← INCORRECTO`
      },
      {
        title: '4. Forma Interrogativa',
        content: `**Estructura:** DO/DOES + Sujeto + Verbo base + ?

| Sujeto | Pregunta |
|--------|----------|
| I/You/We/They | Do + sujeto + verbo? |
| He/She/It | Does + sujeto + verbo? |

**Ejemplos:**
- "Does she speak French?"
- "Do you live near here?"

**Respuestas cortas:**
- "Do you like pizza?" — "Yes, I do." / "No, I don't."
- "Does he work here?" — "Yes, he does." / "No, he doesn't."

**Preguntas con WH-:**
- "Where do you work?"
- "What does she study?"`
      },
      {
        title: '5. Adverbios de Frecuencia',
        content: `**Orden de frecuencia:**
- always (siempre) — 100%
- usually (usualmente) — 80%
- often (a menudo) — 70%
- sometimes (a veces) — 50%
- rarely/seldom (raramente) — 20%
- never (nunca) — 0%

**Posición:** ANTES del verbo principal, DESPUÉS del verbo TO BE.

**Con verbos normales:**
- "I always drink coffee in the morning." ✓
- "She never eats breakfast." ✓

**Con TO BE:**
- "She is always happy." ✓
- "They are never late." ✓`
      }
    ],
    examples: [
      { english: "I study English every day.", spanish: "Estudio inglés todos los días.", explanation: "Verbo en forma base con I para expresar una rutina." },
      { english: "She works in a hospital.", spanish: "Ella trabaja en un hospital.", explanation: "Añadimos -S al verbo con she." },
      { english: "He doesn't like vegetables.", spanish: "A él no le gustan las verduras.", explanation: "Negativo con DOESN'T + verbo base." },
      { english: "Do you speak Spanish?", spanish: "¿Hablas español?", explanation: "Pregunta con DO + sujeto + verbo base." },
      { english: "The class starts at 9 AM.", spanish: "La clase empieza a las 9 AM.", explanation: "Horario fijo en Present Simple." },
      { english: "Water freezes at 0°C.", spanish: "El agua se congela a 0°C.", explanation: "Verdad universal/hecho científico." }
    ],
    commonMistakes: [
      { mistake: "She work in an office.", correction: "She works in an office.", explanation: "Con he/she/it, el verbo SIEMPRE lleva -S." },
      { mistake: "He don't like pizza.", correction: "He doesn't like pizza.", explanation: "Con he/she/it usamos DOESN'T, no DON'T." },
      { mistake: "Does she speaks English?", correction: "Does she speak English?", explanation: "Después de DOES, el verbo va sin -S." },
      { mistake: "She studys every night.", correction: "She studies every night.", explanation: "Consonante + Y: cambia Y por -IES." }
    ],
    practiceExercises: [
      { question: "Complete: My sister ___ (watch) TV every evening.", answer: "watches", hint: "Sister = she, verbo en -ch → añade -ES" },
      { question: "Complete: ___ they live in Madrid?", answer: "Do", hint: "They usa DO en preguntas" },
      { question: "Complete: He ___ (not/understand) French.", answer: "doesn't understand", hint: "He usa DOESN'T + verbo base" },
      { question: "Complete: The bank ___ (open) at 9 AM.", answer: "opens", hint: "The bank = it → añade -S" }
    ],
    summary: `El Present Simple expresa rutinas, hechos y verdades universales. Con he/she/it, añade -S/-ES al verbo. Para negar: don't/doesn't + verbo base. Para preguntar: Do/Does + sujeto + verbo base. Después de does/doesn't, el verbo NUNCA lleva -S.`,
    relatedArticles: ['verb-to-be', 'present-continuous', 'adverbs-of-frequency']
  },

  // ==================== PRESENT CONTINUOUS ====================
  {
    id: 'present-continuous',
    title: 'Present Continuous: Acciones en Progreso',
    subtitle: 'Cómo expresar lo que está sucediendo ahora mismo',
    level: 'A1',
    category: 'grammar',
    tags: ['present-continuous', 'tenses', 'verbs', 'progressive'],
    estimatedReadTime: 12,
    introduction: `El Present Continuous (también llamado Present Progressive) es el tiempo verbal que utilizamos para describir acciones que están ocurriendo en este preciso momento o durante un período temporal alrededor del presente. Es uno de los tiempos más útiles y frecuentes en el inglés cotidiano.`,
    sections: [
      {
        title: '1. Formación del Present Continuous',
        content: `**Estructura:** Sujeto + TO BE (am/is/are) + Verbo + -ING

| Sujeto | TO BE | Verbo + ING |
|--------|-------|-------------|
| I | am | working |
| You | are | working |
| He/She/It | is | working |
| We | are | working |
| They | are | working |

**Reglas para formar el -ING:**

1. **Regla general:** Añadir -ING
   - work → working, play → playing

2. **Verbos terminados en -E:** Quitar la E y añadir -ING
   - make → making, write → writing

3. **Verbos de una sílaba (CVC):** Duplicar la consonante final
   - run → running, sit → sitting, stop → stopping

4. **Verbos terminados en -IE:** Cambiar IE por Y + ING
   - lie → lying, die → dying`
      },
      {
        title: '2. Usos del Present Continuous',
        content: `**A) Acciones en Progreso Ahora Mismo:**
- "I am reading a book." (Estoy leyendo un libro.)
- "She is cooking dinner." (Ella está cocinando la cena.)

**B) Acciones Temporales:**
- "He is living with his parents this month." (Está viviendo con sus padres este mes.)
- "I am working on a special project." (Estoy trabajando en un proyecto especial.)

**C) Planes Futuros Confirmados:**
- "We are meeting tomorrow at 3 PM." (Nos reunimos mañana a las 3 PM.)
- "I am flying to Paris next week." (Vuelo a París la próxima semana.)

**D) Cambios y Tendencias:**
- "The weather is getting colder." (El clima se está poniendo más frío.)
- "Technology is changing rapidly." (La tecnología está cambiando rápidamente.)

**Palabras clave:** now, right now, at the moment, currently, this week/month`
      },
      {
        title: '3. Forma Negativa',
        content: `**Estructura:** Sujeto + TO BE + NOT + Verbo + -ING

**Ejemplos:**
- I am not working → I'm not working
- She is not sleeping → She isn't sleeping / She's not sleeping
- They are not listening → They aren't listening / They're not listening

**Contracciones comunes:**
- I'm not
- He isn't / He's not
- They aren't / They're not`
      },
      {
        title: '4. Forma Interrogativa',
        content: `**Estructura:** TO BE + Sujeto + Verbo + -ING + ?

**Ejemplos:**
- "Are you working?" (¿Estás trabajando?)
- "Is she coming to the party?" (¿Viene ella a la fiesta?)
- "What are they doing?" (¿Qué están haciendo?)

**Respuestas cortas:**
- "Are you studying?" — "Yes, I am." / "No, I'm not."
- "Is he sleeping?" — "Yes, he is." / "No, he isn't."`
      },
      {
        title: '5. Stative Verbs (Verbos que NO usan -ING)',
        content: `Algunos verbos NO se usan normalmente en forma continua porque expresan estados, no acciones:

**Verbos de pensamiento:**
- know, understand, believe, think (cuando significa "creer"), remember, forget

**Verbos de emoción:**
- love, hate, like, want, need, prefer

**Verbos de percepción:**
- see, hear, smell, taste (percepción involuntaria)

**Verbos de posesión:**
- have (posesión), own, belong, possess

**Ejemplos:**
- ✓ "I know the answer." (Sé la respuesta.)
- ✗ "I am knowing the answer." ← INCORRECTO

- ✓ "She loves chocolate." (A ella le encanta el chocolate.)
- ✗ "She is loving chocolate." ← INCORRECTO`
      }
    ],
    examples: [
      { english: "I am studying English now.", spanish: "Estoy estudiando inglés ahora.", explanation: "Acción en progreso en este momento." },
      { english: "She is talking on the phone.", spanish: "Ella está hablando por teléfono.", explanation: "Acción ocurriendo ahora mismo." },
      { english: "We are not watching TV.", spanish: "No estamos viendo la televisión.", explanation: "Forma negativa con are not + -ing." },
      { english: "Are they coming to dinner?", spanish: "¿Vienen ellos a cenar?", explanation: "Pregunta sobre un plan futuro confirmado." },
      { english: "The children are playing in the garden.", spanish: "Los niños están jugando en el jardín.", explanation: "Acción en progreso." },
      { english: "It is raining heavily.", spanish: "Está lloviendo fuertemente.", explanation: "Describiendo el clima actual." }
    ],
    commonMistakes: [
      { mistake: "She is work now.", correction: "She is working now.", explanation: "Después de TO BE, el verbo SIEMPRE lleva -ING en Present Continuous." },
      { mistake: "I am knowing the answer.", correction: "I know the answer.", explanation: "'Know' es un stative verb y no usa forma continua." },
      { mistake: "He is runing fast.", correction: "He is running fast.", explanation: "Verbos CVC de una sílaba duplican la consonante: run → running." },
      { mistake: "She is studing.", correction: "She is studying.", explanation: "Mantener la Y: study → studying (la Y NO cambia con -ING)." }
    ],
    practiceExercises: [
      { question: "Complete: They ___ (play) football now.", answer: "are playing", hint: "They + are + verbo-ing" },
      { question: "Complete: ___ she ___ (sleep)?", answer: "Is / sleeping", hint: "Is + sujeto + verbo-ing" },
      { question: "Complete: I ___ (not/watch) TV right now.", answer: "am not watching", hint: "I + am not + verbo-ing" },
      { question: "Complete: What ___ you ___ (do)?", answer: "are / doing", hint: "Are + you + verbo-ing" }
    ],
    summary: `El Present Continuous (am/is/are + verbo-ing) expresa acciones en progreso ahora o planes futuros confirmados. Recuerda las reglas para formar el -ING y que los stative verbs (know, love, want, etc.) NO usan forma continua.`,
    relatedArticles: ['present-simple', 'present-simple-vs-continuous', 'stative-verbs']
  },

  // ==================== ARTICLES A/AN/THE ====================
  {
    id: 'articles-a-an-the',
    title: 'Los Artículos en Inglés: A, AN y THE',
    subtitle: 'Cuándo usar cada artículo correctamente',
    level: 'A1',
    category: 'grammar',
    tags: ['articles', 'a', 'an', 'the', 'determiners'],
    estimatedReadTime: 10,
    introduction: `Los artículos en inglés son palabras pequeñas pero fundamentales que preceden a los sustantivos. Aunque parecen simples, su uso correcto requiere comprender reglas específicas. En inglés existen dos tipos de artículos: el artículo indefinido (a/an) y el artículo definido (the).`,
    sections: [
      {
        title: '1. El Artículo Indefinido: A vs AN',
        content: `**A** se usa antes de palabras que comienzan con SONIDO consonante.
**AN** se usa antes de palabras que comienzan con SONIDO vocal.

**Importante:** Lo que importa es el SONIDO, no la letra.

**Ejemplos con A (sonido consonante):**
- a book, a car, a dog, a house
- a university (suena /juː/, consonante)
- a European country (suena /juː/, consonante)
- a one-way street (suena /wʌn/, consonante)

**Ejemplos con AN (sonido vocal):**
- an apple, an elephant, an idea, an orange, an umbrella
- an hour (la H es muda, suena /aʊr/)
- an honest person (la H es muda)
- an MBA (suena /em/, vocal)`
      },
      {
        title: '2. Uso del Artículo Indefinido (A/AN)',
        content: `**A) Primera mención de algo:**
- "I saw a dog in the park." (Vi un perro en el parque.)

**B) Profesiones:**
- "She is a doctor." (Ella es médico.)
- "He is an engineer." (Él es ingeniero.)

**C) Con números y cantidades:**
- "a hundred, a thousand, a million"
- "once a week, twice a day"

**D) Con "what" en exclamaciones:**
- "What a beautiful day!" (¡Qué día tan hermoso!)
- "What an amazing idea!" (¡Qué idea tan increíble!)`
      },
      {
        title: '3. El Artículo Definido: THE',
        content: `**THE** se usa cuando hablamos de algo específico o ya conocido.

**A) Algo mencionado previamente:**
- "I saw a dog. The dog was very friendly."

**B) Algo único en su contexto:**
- "the sun, the moon, the Earth, the sky"
- "the President, the government"

**C) Superlativos:**
- "the best, the most beautiful, the tallest"

**D) Ordinales:**
- "the first, the second, the last"

**E) Instrumentos musicales:**
- "play the piano, the guitar, the violin"

**F) Lugares específicos:**
- "the Eiffel Tower, the Amazon, the United States"`
      },
      {
        title: '4. Cuándo NO usar artículo',
        content: `**A) Sustantivos plurales o incontables en general:**
- "Dogs are loyal." (Los perros son leales.) — en general
- "Water is essential." (El agua es esencial.) — en general

**B) Nombres propios:**
- "John lives in Paris." (John vive en París.)

**C) Comidas:**
- "I had breakfast at 8 AM." (Desayuné a las 8.)

**D) Deportes y juegos:**
- "I play tennis." (Juego al tenis.)

**E) Idiomas y materias:**
- "She speaks French." (Ella habla francés.)
- "I study mathematics." (Estudio matemáticas.)`
      }
    ],
    examples: [
      { english: "I need an umbrella.", spanish: "Necesito un paraguas.", explanation: "AN porque 'umbrella' empieza con sonido vocal /ʌ/." },
      { english: "She is a university student.", spanish: "Ella es estudiante universitaria.", explanation: "A porque 'university' empieza con sonido /juː/ (consonante)." },
      { english: "The book on the table is mine.", spanish: "El libro sobre la mesa es mío.", explanation: "THE porque es un libro específico (el que está en la mesa)." },
      { english: "He waited for an hour.", spanish: "Él esperó una hora.", explanation: "AN porque la H en 'hour' es muda, suena /aʊr/." },
      { english: "I love music.", spanish: "Me encanta la música.", explanation: "Sin artículo porque hablamos de música en general." }
    ],
    commonMistakes: [
      { mistake: "She is doctor.", correction: "She is a doctor.", explanation: "Las profesiones SIEMPRE llevan artículo indefinido en inglés." },
      { mistake: "I saw a elephant.", correction: "I saw an elephant.", explanation: "'Elephant' empieza con sonido vocal, requiere AN." },
      { mistake: "I bought a umbrella.", correction: "I bought an umbrella.", explanation: "'Umbrella' empieza con sonido vocal /ʌ/, requiere AN." },
      { mistake: "He plays the tennis.", correction: "He plays tennis.", explanation: "Los deportes NO llevan artículo." }
    ],
    practiceExercises: [
      { question: "Complete: She is ___ honest person.", answer: "an", hint: "La H en 'honest' es muda" },
      { question: "Complete: I need ___ new computer.", answer: "a", hint: "'New' empieza con sonido consonante" },
      { question: "Complete: ___ sun is very bright today.", answer: "The", hint: "El sol es único" },
      { question: "Complete: He is ___ European.", answer: "a", hint: "'European' empieza con sonido /juː/" }
    ],
    summary: `A se usa antes de sonido consonante, AN antes de sonido vocal. THE se usa para cosas específicas o únicas. Recuerda: lo importante es el SONIDO inicial, no la letra. Las profesiones siempre llevan A/AN.`,
    relatedArticles: ['nouns-countable-uncountable', 'demonstratives', 'possessive-adjectives']
  },

  // ==================== POSSESSIVE ADJECTIVES ====================
  {
    id: 'possessive-adjectives',
    title: 'Adjetivos Posesivos: My, Your, His, Her...',
    subtitle: 'Cómo indicar pertenencia en inglés',
    level: 'A1',
    category: 'grammar',
    tags: ['possessives', 'adjectives', 'pronouns', 'my', 'your', 'his', 'her'],
    estimatedReadTime: 8,
    introduction: `Los adjetivos posesivos en inglés indican a quién pertenece algo. A diferencia del español, donde los posesivos concuerdan en género y número con lo poseído, en inglés el posesivo concuerda con el poseedor.`,
    sections: [
      {
        title: '1. Los Adjetivos Posesivos',
        content: `| Pronombre Personal | Adjetivo Posesivo | Traducción |
|-------------------|-------------------|------------|
| I | my | mi/mis |
| You | your | tu/tus, su/sus |
| He | his | su/sus (de él) |
| She | her | su/sus (de ella) |
| It | its | su/sus (de ello) |
| We | our | nuestro/a/os/as |
| They | their | su/sus (de ellos) |

**Regla fundamental:** El posesivo depende del POSEEDOR, no de lo poseído.`
      },
      {
        title: '2. Uso Correcto',
        content: `**A) Siempre van ANTES del sustantivo:**
- "my book" (mi libro)
- "her car" (su carro — de ella)
- "their house" (su casa — de ellos)

**B) No cambian con el género ni número de lo poseído:**
- "his book" / "his books" (su libro / sus libros — de él)
- "her car" / "her cars" (su carro / sus carros — de ella)

**C) Diferencia entre HIS y HER:**
- "John loves his mother." (John ama a su madre — de él)
- "Mary loves her mother." (Mary ama a su madre — de ella)`
      },
      {
        title: '3. ITS vs IT\'S',
        content: `**ITS** = posesivo (su, de ello)
**IT'S** = contracción de "it is" o "it has"

**Ejemplos:**
- "The dog wagged its tail." (El perro movió su cola.)
- "It's raining outside." (Está lloviendo afuera.)

**Regla:** Los posesivos NUNCA llevan apóstrofo.`
      }
    ],
    examples: [
      { english: "This is my house.", spanish: "Esta es mi casa.", explanation: "MY para indicar que la casa es mía (de I)." },
      { english: "She loves her children.", spanish: "Ella ama a sus hijos.", explanation: "HER porque el poseedor es SHE (ella)." },
      { english: "They forgot their keys.", spanish: "Ellos olvidaron sus llaves.", explanation: "THEIR porque el poseedor es THEY (ellos)." },
      { english: "The cat licked its paw.", spanish: "El gato lamió su pata.", explanation: "ITS porque el poseedor es IT (el gato)." }
    ],
    commonMistakes: [
      { mistake: "She loves she children.", correction: "She loves her children.", explanation: "Se usa HER (posesivo), no SHE (pronombre sujeto)." },
      { mistake: "John forgot her keys.", correction: "John forgot his keys.", explanation: "John es hombre, usa HIS, no HER." },
      { mistake: "The dog wagged it's tail.", correction: "The dog wagged its tail.", explanation: "ITS (posesivo) no lleva apóstrofo." }
    ],
    practiceExercises: [
      { question: "Complete: Mary loves ___ brother.", answer: "her", hint: "Mary = she → her" },
      { question: "Complete: We need ___ passports.", answer: "our", hint: "We → our" },
      { question: "Complete: The bird built ___ nest.", answer: "its", hint: "The bird = it → its" },
      { question: "Complete: Tom and Lisa sold ___ car.", answer: "their", hint: "Tom and Lisa = they → their" }
    ],
    summary: `Los adjetivos posesivos (my, your, his, her, its, our, their) indican pertenencia y dependen del POSEEDOR, no de lo poseído. Recuerda: HIS para "de él", HER para "de ella", ITS sin apóstrofo.`,
    relatedArticles: ['verb-to-be', 'personal-pronouns', 'possessive-pronouns']
  },

  // ==================== NUMBERS AND COLORS ====================
  {
    id: 'numbers-and-colors',
    title: 'Números y Colores en Inglés',
    subtitle: 'Vocabulario esencial para principiantes',
    level: 'A1',
    category: 'vocabulary',
    tags: ['numbers', 'colors', 'basic-vocabulary', 'counting'],
    estimatedReadTime: 10,
    introduction: `Los números y colores son parte del vocabulario más básico y esencial en cualquier idioma. Dominarlos es fundamental para poder comunicarse en situaciones cotidianas como ir de compras, describir objetos o dar información personal.`,
    sections: [
      {
        title: '1. Números del 1 al 20',
        content: `| Número | Inglés | Pronunciación Aproximada |
|--------|--------|-------------------------|
| 1 | one | /wʌn/ |
| 2 | two | /tuː/ |
| 3 | three | /θriː/ |
| 4 | four | /fɔːr/ |
| 5 | five | /faɪv/ |
| 6 | six | /sɪks/ |
| 7 | seven | /ˈsevən/ |
| 8 | eight | /eɪt/ |
| 9 | nine | /naɪn/ |
| 10 | ten | /ten/ |
| 11 | eleven | /ɪˈlevən/ |
| 12 | twelve | /twelv/ |
| 13 | thirteen | /θɜːˈtiːn/ |
| 14 | fourteen | /fɔːˈtiːn/ |
| 15 | fifteen | /fɪfˈtiːn/ |
| 16 | sixteen | /sɪksˈtiːn/ |
| 17 | seventeen | /sevənˈtiːn/ |
| 18 | eighteen | /eɪˈtiːn/ |
| 19 | nineteen | /naɪnˈtiːn/ |
| 20 | twenty | /ˈtwenti/ |`
      },
      {
        title: '2. Números del 20 al 100',
        content: `**Decenas:**
| Número | Inglés |
|--------|--------|
| 20 | twenty |
| 30 | thirty |
| 40 | forty |
| 50 | fifty |
| 60 | sixty |
| 70 | seventy |
| 80 | eighty |
| 90 | ninety |
| 100 | one hundred |

**Formación de números compuestos:**
- 21 = twenty-one
- 35 = thirty-five
- 47 = forty-seven
- 99 = ninety-nine

**Nota:** Se usa guión (-) entre la decena y la unidad.`
      },
      {
        title: '3. Colores Básicos',
        content: `| Color | Inglés | Ejemplo de Uso |
|-------|--------|----------------|
| Rojo | red | a red car |
| Azul | blue | a blue sky |
| Verde | green | green grass |
| Amarillo | yellow | a yellow flower |
| Naranja | orange | an orange fruit |
| Morado/Púrpura | purple | purple grapes |
| Rosa/Rosado | pink | a pink dress |
| Negro | black | a black cat |
| Blanco | white | white snow |
| Gris | gray/grey | gray clouds |
| Marrón | brown | brown eyes |

**Nota:** "Gray" es la ortografía americana, "grey" es británica.`
      },
      {
        title: '4. Uso de Colores en Oraciones',
        content: `**Los colores van ANTES del sustantivo:**
- "a blue car" (un carro azul)
- "the red apple" (la manzana roja)
- "her green dress" (su vestido verde)

**Con el verbo TO BE:**
- "The sky is blue." (El cielo es azul.)
- "My favorite color is red." (Mi color favorito es el rojo.)
- "Her eyes are brown." (Sus ojos son marrones.)

**Preguntar por colores:**
- "What color is it?" (¿De qué color es?)
- "What's your favorite color?" (¿Cuál es tu color favorito?)`
      }
    ],
    examples: [
      { english: "I have two brothers.", spanish: "Tengo dos hermanos.", explanation: "Two = 2" },
      { english: "She is twenty-five years old.", spanish: "Ella tiene veinticinco años.", explanation: "Twenty-five = 25, con guión" },
      { english: "I want the blue one.", spanish: "Quiero el azul.", explanation: "Blue = azul" },
      { english: "There are fifteen students in the class.", spanish: "Hay quince estudiantes en la clase.", explanation: "Fifteen = 15" },
      { english: "My car is black and white.", spanish: "Mi carro es negro y blanco.", explanation: "Describiendo colores con 'and'" }
    ],
    commonMistakes: [
      { mistake: "fourty", correction: "forty", explanation: "Forty se escribe sin la U de four." },
      { mistake: "a car blue", correction: "a blue car", explanation: "El color va ANTES del sustantivo en inglés." },
      { mistake: "fiveteen", correction: "fifteen", explanation: "Fifteen, no fiveteen." }
    ],
    practiceExercises: [
      { question: "Write the number: 47", answer: "forty-seven", hint: "Forty + seven con guión" },
      { question: "Complete: The grass is ___.", answer: "green", hint: "Color de la hierba" },
      { question: "Write the number: 83", answer: "eighty-three", hint: "Eighty + three" },
      { question: "Complete: I want a ___ dress.", answer: "red/blue/green (any color)", hint: "Cualquier color" }
    ],
    summary: `Los números en inglés siguen patrones: del 1-12 son únicos, del 13-19 terminan en -teen, las decenas terminan en -ty. Los colores van ANTES del sustantivo. Recuerda: forty (sin U), fifteen (no fiveteen).`,
    relatedArticles: ['verb-to-be', 'articles-a-an-the', 'basic-adjectives']
  },

  // =====================================================================
  // LEVEL A2 - ELEMENTARY
  // =====================================================================

  // ==================== PAST SIMPLE ====================
  {
    id: 'past-simple',
    title: 'Past Simple: El Pasado Simple en Inglés',
    subtitle: 'Cómo hablar de acciones completadas en el pasado',
    level: 'A2',
    category: 'grammar',
    tags: ['past-simple', 'tenses', 'verbs', 'regular', 'irregular'],
    estimatedReadTime: 15,
    introduction: `El Past Simple es el tiempo verbal que utilizamos para hablar de acciones que ocurrieron y terminaron en un momento específico del pasado. Es uno de los tiempos más importantes para poder narrar experiencias, contar historias y hablar de eventos pasados.`,
    sections: [
      {
        title: '1. Verbos Regulares',
        content: `Los verbos regulares forman el pasado añadiendo **-ED** al verbo base.

**Reglas de ortografía:**

1. **Regla general:** Añadir -ED
   - work → worked, play → played, clean → cleaned

2. **Verbos terminados en -E:** Solo añadir -D
   - live → lived, love → loved, dance → danced

3. **Verbos terminados en consonante + Y:** Cambiar Y por -IED
   - study → studied, carry → carried, try → tried

4. **Verbos terminados en vocal + Y:** Solo añadir -ED
   - play → played, enjoy → enjoyed, stay → stayed

5. **Verbos CVC de una sílaba:** Duplicar la consonante final
   - stop → stopped, plan → planned, drop → dropped`
      },
      {
        title: '2. Verbos Irregulares Comunes',
        content: `Los verbos irregulares NO siguen un patrón fijo. Debes memorizarlos.

| Base Form | Past Simple | Traducción |
|-----------|-------------|------------|
| be | was/were | ser/estar |
| have | had | tener |
| do | did | hacer |
| go | went | ir |
| come | came | venir |
| see | saw | ver |
| take | took | tomar |
| get | got | obtener |
| make | made | hacer |
| know | knew | saber |
| think | thought | pensar |
| say | said | decir |
| give | gave | dar |
| find | found | encontrar |
| tell | told | contar |
| buy | bought | comprar |
| eat | ate | comer |
| drink | drank | beber |
| write | wrote | escribir |
| read | read | leer |`
      },
      {
        title: '3. Forma Negativa',
        content: `**Estructura:** Sujeto + DID NOT (DIDN'T) + Verbo base

**Importante:** Con DIDN'T, el verbo principal vuelve a su forma BASE.

**Ejemplos:**
- ✓ "I didn't go to the party."
- ✗ "I didn't went to the party." ← INCORRECTO

- ✓ "She didn't eat breakfast."
- ✗ "She didn't ate breakfast." ← INCORRECTO

**Nota:** El auxiliar DID lleva la marca de pasado, no el verbo principal.`
      },
      {
        title: '4. Forma Interrogativa',
        content: `**Estructura:** DID + Sujeto + Verbo base + ?

**Ejemplos:**
- "Did you see the movie?" (¿Viste la película?)
- "Did she call you?" (¿Te llamó ella?)
- "Where did they go?" (¿A dónde fueron?)

**Respuestas cortas:**
- "Did you like it?" — "Yes, I did." / "No, I didn't."
- "Did he come?" — "Yes, he did." / "No, he didn't."

**Con TO BE (was/were):**
- "Was she at home?" — "Yes, she was." / "No, she wasn't."
- "Were they happy?" — "Yes, they were." / "No, they weren't."`
      },
      {
        title: '5. Marcadores de Tiempo Pasado',
        content: `**Expresiones comunes:**
- yesterday (ayer)
- last night/week/month/year (anoche/la semana pasada/el mes pasado/el año pasado)
- ago (hace): two days ago, three years ago
- in + año pasado: in 2010, in 1999
- when I was young (cuando era joven)
- the other day (el otro día)

**Ejemplos:**
- "I visited Paris last summer."
- "She graduated two years ago."
- "We met in 2015."`
      }
    ],
    examples: [
      { english: "I worked yesterday.", spanish: "Trabajé ayer.", explanation: "Verbo regular: work → worked" },
      { english: "She went to the beach last week.", spanish: "Ella fue a la playa la semana pasada.", explanation: "Verbo irregular: go → went" },
      { english: "Did you see the news?", spanish: "¿Viste las noticias?", explanation: "Pregunta con did + verbo base" },
      { english: "They didn't come to the party.", spanish: "Ellos no vinieron a la fiesta.", explanation: "Negativo: didn't + verbo base (come, no came)" },
      { english: "We bought a new car.", spanish: "Compramos un carro nuevo.", explanation: "Verbo irregular: buy → bought" }
    ],
    commonMistakes: [
      { mistake: "She didn't went.", correction: "She didn't go.", explanation: "Después de DIDN'T, el verbo va en forma base, no en pasado." },
      { mistake: "Did you saw?", correction: "Did you see?", explanation: "Después de DID, el verbo va en forma base." },
      { mistake: "I readed the book.", correction: "I read the book.", explanation: "Read es irregular: read → read (pronunciación diferente: /riːd/ → /red/)." },
      { mistake: "He stoped working.", correction: "He stopped working.", explanation: "Stop (CVC) duplica la consonante: stopped." }
    ],
    practiceExercises: [
      { question: "Complete: She ___ (go) to the store yesterday.", answer: "went", hint: "Go es irregular: go → went" },
      { question: "Complete: ___ they ___ (enjoy) the concert?", answer: "Did / enjoy", hint: "Did + verbo base" },
      { question: "Complete: I ___ (not/see) him last night.", answer: "didn't see", hint: "Didn't + verbo base" },
      { question: "Complete: We ___ (study) for three hours.", answer: "studied", hint: "Consonante + y → -ied" }
    ],
    summary: `El Past Simple expresa acciones completadas en el pasado. Verbos regulares añaden -ED. Verbos irregulares deben memorizarse. Negativo e interrogativo: DIDN'T/DID + verbo BASE. El auxiliar DID lleva la marca de pasado.`,
    relatedArticles: ['present-perfect', 'past-continuous', 'irregular-verbs']
  },

  // ==================== PRESENT PERFECT BASIC ====================
  {
    id: 'present-perfect-basic',
    title: 'Present Perfect: Experiencias y Acciones Recientes',
    subtitle: 'Conectando el pasado con el presente',
    level: 'A2',
    category: 'grammar',
    tags: ['present-perfect', 'tenses', 'have-has', 'participle'],
    estimatedReadTime: 15,
    introduction: `El Present Perfect es uno de los tiempos verbales más desafiantes para hispanohablantes porque no existe un equivalente exacto en español. Se utiliza para hablar de experiencias de vida, acciones recientes con relevancia actual, y situaciones que comenzaron en el pasado y continúan hasta el presente.`,
    sections: [
      {
        title: '1. Formación del Present Perfect',
        content: `**Estructura:** Sujeto + HAVE/HAS + Participio Pasado

| Sujeto | Auxiliar | Participio |
|--------|----------|------------|
| I | have | worked/gone |
| You | have | worked/gone |
| He/She/It | has | worked/gone |
| We | have | worked/gone |
| They | have | worked/gone |

**Contracciones:**
- I have → I've
- You have → You've
- He has → He's
- She has → She's
- We have → We've
- They have → They've`
      },
      {
        title: '2. Participios Pasados',
        content: `**Verbos regulares:** añadir -ED (igual que Past Simple)
- work → worked, play → played, study → studied

**Verbos irregulares (memorizar):**

| Base | Past Simple | Participio |
|------|-------------|------------|
| be | was/were | been |
| have | had | had |
| do | did | done |
| go | went | gone |
| see | saw | seen |
| take | took | taken |
| eat | ate | eaten |
| write | wrote | written |
| give | gave | given |
| know | knew | known |
| buy | bought | bought |
| think | thought | thought |`
      },
      {
        title: '3. Usos del Present Perfect',
        content: `**A) Experiencias de vida (sin tiempo específico):**
- "I have visited Paris." (He visitado París. — alguna vez)
- "She has never tried sushi." (Ella nunca ha probado sushi.)

**B) Acciones recientes (just, already, yet):**
- "I've just finished my homework." (Acabo de terminar mi tarea.)
- "She has already left." (Ella ya se fue.)
- "Have you eaten yet?" (¿Ya has comido?)

**C) Situaciones que continúan (for, since):**
- "I have lived here for 5 years." (He vivido aquí por 5 años.)
- "She has worked here since 2018." (Ha trabajado aquí desde 2018.)

**D) Resultados presentes:**
- "I've lost my keys." (He perdido mis llaves. — por eso no puedo entrar)
- "He has broken his leg." (Se ha roto la pierna. — por eso no puede caminar)`
      },
      {
        title: '4. EVER, NEVER, JUST, ALREADY, YET',
        content: `**EVER (alguna vez):** En preguntas
- "Have you ever been to Japan?" (¿Has estado alguna vez en Japón?)

**NEVER (nunca):** En afirmaciones negativas
- "I have never seen snow." (Nunca he visto nieve.)

**JUST (acabar de):** Acción muy reciente
- "She has just arrived." (Ella acaba de llegar.)

**ALREADY (ya):** En afirmaciones, antes del participio
- "I have already eaten." (Ya he comido.)

**YET (todavía, ya):** En negativos y preguntas, al final
- "I haven't finished yet." (Todavía no he terminado.)
- "Have you called him yet?" (¿Ya lo has llamado?)

**Posición:**
- just, already, never → entre HAVE/HAS y el PARTICIPIO
- ever → entre sujeto y participio (en preguntas)
- yet → al FINAL de la oración`
      },
      {
        title: '5. FOR vs SINCE',
        content: `**FOR + período de tiempo (duración):**
- for 5 minutes, for 2 hours, for 3 days, for 6 months, for 10 years, for a long time

**SINCE + punto en el tiempo (inicio):**
- since Monday, since January, since 2010, since I was a child, since last week

**Ejemplos:**
- "I have studied English FOR 3 years." (desde hace 3 años — duración)
- "I have studied English SINCE 2021." (desde 2021 — punto de inicio)

- "She has been here FOR 2 hours." (durante 2 horas)
- "She has been here SINCE 10 AM." (desde las 10 AM)`
      }
    ],
    examples: [
      { english: "I have visited London twice.", spanish: "He visitado Londres dos veces.", explanation: "Experiencia de vida sin tiempo específico." },
      { english: "She has just finished the exam.", spanish: "Ella acaba de terminar el examen.", explanation: "Acción muy reciente con 'just'." },
      { english: "Have you ever eaten Thai food?", spanish: "¿Has comido alguna vez comida tailandesa?", explanation: "Pregunta sobre experiencias con 'ever'." },
      { english: "They haven't arrived yet.", spanish: "Ellos no han llegado todavía.", explanation: "Negativo con 'yet' al final." },
      { english: "I've known her for 10 years.", spanish: "La conozco desde hace 10 años.", explanation: "Situación continua con 'for' + duración." }
    ],
    commonMistakes: [
      { mistake: "I have went to Paris.", correction: "I have gone to Paris.", explanation: "Con have/has, usa el PARTICIPIO (gone), no el past simple (went)." },
      { mistake: "She has see the movie.", correction: "She has seen the movie.", explanation: "See → seen (participio), no 'see'." },
      { mistake: "I have visited Paris yesterday.", correction: "I visited Paris yesterday.", explanation: "Con tiempo específico (yesterday), usa Past Simple, no Present Perfect." },
      { mistake: "I know her since 2010.", correction: "I have known her since 2010.", explanation: "Con since/for para situaciones continuas, usa Present Perfect." }
    ],
    practiceExercises: [
      { question: "Complete: I ___ never ___ (be) to Japan.", answer: "have / been", hint: "Never va entre have y participio" },
      { question: "Complete: She ___ just ___ (arrive).", answer: "has / arrived", hint: "She → has, just entre has y participio" },
      { question: "Complete: ___ you ___ (see) this movie yet?", answer: "Have / seen", hint: "Yet va al final, Have al inicio" },
      { question: "Complete: We ___ (live) here ___ 5 years.", answer: "have lived / for", hint: "5 years = duración → for" }
    ],
    summary: `Present Perfect (have/has + participio) conecta pasado con presente. Usos: experiencias de vida, acciones recientes, situaciones continuas. Palabras clave: ever/never (experiencias), just/already/yet (reciente), for/since (duración). Con tiempo específico (yesterday, last week), usa Past Simple.`,
    relatedArticles: ['past-simple', 'present-perfect-vs-past-simple', 'for-vs-since']
  },

  // ==================== GOING TO FUTURE ====================
  {
    id: 'going-to-future',
    title: 'Futuro con GOING TO: Planes e Intenciones',
    subtitle: 'Cómo expresar planes futuros y predicciones',
    level: 'A2',
    category: 'grammar',
    tags: ['future', 'going-to', 'plans', 'predictions', 'intentions'],
    estimatedReadTime: 10,
    introduction: `"Going to" es una de las formas más comunes de expresar el futuro en inglés. Se utiliza principalmente para hablar de planes decididos, intenciones y predicciones basadas en evidencia presente.`,
    sections: [
      {
        title: '1. Formación de GOING TO',
        content: `**Estructura:** Sujeto + AM/IS/ARE + GOING TO + Verbo base

| Sujeto | Estructura Completa | Contracción |
|--------|--------------------| ------------|
| I | I am going to work | I'm going to work |
| You | You are going to work | You're going to work |
| He/She/It | He is going to work | He's going to work |
| We | We are going to work | We're going to work |
| They | They are going to work | They're going to work |

**Pronunciación informal:** "going to" → "gonna" (solo en habla informal, no en escritura formal)`
      },
      {
        title: '2. Usos de GOING TO',
        content: `**A) Planes e intenciones decididos:**
- "I'm going to study medicine." (Voy a estudiar medicina. — plan decidido)
- "We're going to buy a new house." (Vamos a comprar una casa nueva.)
- "She's going to start a new job next month." (Va a empezar un nuevo trabajo.)

**B) Predicciones basadas en evidencia presente:**
- "Look at those clouds! It's going to rain." (¡Mira esas nubes! Va a llover.)
- "She's going to have a baby." (Ella va a tener un bebé. — es evidente, está embarazada)
- "Be careful! You're going to fall!" (¡Cuidado! ¡Te vas a caer!)

**La diferencia clave:** 
Con GOING TO, hay una señal o evidencia presente que nos permite hacer la predicción o existe una intención previa.`
      },
      {
        title: '3. Forma Negativa',
        content: `**Estructura:** Sujeto + AM/IS/ARE + NOT + GOING TO + Verbo

**Ejemplos:**
- "I'm not going to go to the party." (No voy a ir a la fiesta.)
- "She isn't going to accept the offer." (Ella no va a aceptar la oferta.)
- "They aren't going to come." (Ellos no van a venir.)

**Contracciones:**
- I'm not going to
- He/She/It isn't going to / He's not going to
- We/They aren't going to / We're not going to`
      },
      {
        title: '4. Forma Interrogativa',
        content: `**Estructura:** AM/IS/ARE + Sujeto + GOING TO + Verbo + ?

**Ejemplos:**
- "Are you going to travel this summer?" (¿Vas a viajar este verano?)
- "Is she going to call him?" (¿Ella lo va a llamar?)
- "What are they going to do?" (¿Qué van a hacer?)

**Respuestas cortas:**
- "Are you going to come?" — "Yes, I am." / "No, I'm not."
- "Is he going to help?" — "Yes, he is." / "No, he isn't."`
      }
    ],
    examples: [
      { english: "I'm going to learn French next year.", spanish: "Voy a aprender francés el próximo año.", explanation: "Plan decidido para el futuro." },
      { english: "Look! The bus is going to leave!", spanish: "¡Mira! ¡El autobús va a salir!", explanation: "Predicción basada en evidencia (el bus está arrancando)." },
      { english: "They're not going to sell their house.", spanish: "No van a vender su casa.", explanation: "Negativo: decisión de no hacer algo." },
      { english: "What are you going to study?", spanish: "¿Qué vas a estudiar?", explanation: "Pregunta sobre planes futuros." }
    ],
    commonMistakes: [
      { mistake: "I'm going to go to school everyday.", correction: "I go to school every day.", explanation: "Para rutinas, usa Present Simple, no going to." },
      { mistake: "She going to travel.", correction: "She is going to travel.", explanation: "Necesitas el verbo TO BE (is) antes de going to." },
      { mistake: "Are you going to studying?", correction: "Are you going to study?", explanation: "Después de 'going to', el verbo va en forma BASE, sin -ing." }
    ],
    practiceExercises: [
      { question: "Complete: She ___ (go) to visit her parents.", answer: "is going to", hint: "She + is + going to" },
      { question: "Complete: ___ they ___ (move) to a new city?", answer: "Are / going to move", hint: "Are + sujeto + going to + verbo base" },
      { question: "Complete: I ___ (not/eat) at that restaurant.", answer: "am not going to eat", hint: "Am not + going to + verbo base" },
      { question: "Complete: Look! It ___ (rain)!", answer: "is going to rain", hint: "Predicción con evidencia" }
    ],
    summary: `GOING TO (am/is/are + going to + verbo) expresa planes decididos y predicciones con evidencia. Usa GOING TO cuando ya has decidido algo o cuando hay señales visibles de lo que va a pasar. Pronunciación informal: "gonna".`,
    relatedArticles: ['will-future', 'future-forms-comparison', 'present-continuous-future']
  },

  // ==================== COMPARATIVES AND SUPERLATIVES ====================
  {
    id: 'comparatives-superlatives',
    title: 'Comparativos y Superlativos',
    subtitle: 'Cómo comparar personas, lugares y cosas',
    level: 'A2',
    category: 'grammar',
    tags: ['comparatives', 'superlatives', 'adjectives', 'comparison'],
    estimatedReadTime: 12,
    introduction: `Los comparativos y superlativos nos permiten establecer comparaciones entre personas, objetos o situaciones. El comparativo compara dos elementos, mientras que el superlativo indica el grado máximo de una cualidad dentro de un grupo.`,
    sections: [
      {
        title: '1. Formación de Comparativos',
        content: `**Adjetivos cortos (1 sílaba):** + ER
- tall → taller (más alto)
- fast → faster (más rápido)
- old → older (más viejo)

**Adjetivos de 1 sílaba terminados en -E:** + R
- large → larger
- nice → nicer

**Adjetivos CVC:** Duplicar consonante + ER
- big → bigger
- hot → hotter
- thin → thinner

**Adjetivos de 2 sílabas terminados en -Y:** cambiar Y por IER
- happy → happier
- easy → easier
- funny → funnier

**Adjetivos largos (2+ sílabas):** MORE + adjetivo
- beautiful → more beautiful
- expensive → more expensive
- interesting → more interesting`
      },
      {
        title: '2. Formación de Superlativos',
        content: `**Adjetivos cortos (1 sílaba):** THE + adjetivo + EST
- tall → the tallest (el más alto)
- fast → the fastest (el más rápido)
- old → the oldest (el más viejo)

**Adjetivos de 1 sílaba terminados en -E:** THE + adjetivo + ST
- large → the largest
- nice → the nicest

**Adjetivos CVC:** THE + duplicar consonante + EST
- big → the biggest
- hot → the hottest

**Adjetivos de 2 sílabas terminados en -Y:** THE + cambiar Y por IEST
- happy → the happiest
- easy → the easiest

**Adjetivos largos:** THE MOST + adjetivo
- beautiful → the most beautiful
- expensive → the most expensive`
      },
      {
        title: '3. Irregulares',
        content: `Estos adjetivos no siguen las reglas normales:

| Adjetivo | Comparativo | Superlativo |
|----------|-------------|-------------|
| good (bueno) | better | the best |
| bad (malo) | worse | the worst |
| far (lejos) | farther/further | the farthest/furthest |
| little (poco) | less | the least |
| much/many (mucho) | more | the most |

**Ejemplos:**
- "This is better than that." (Esto es mejor que eso.)
- "She is the best student." (Ella es la mejor estudiante.)
- "Today was worse than yesterday." (Hoy fue peor que ayer.)`
      },
      {
        title: '4. Estructuras de Comparación',
        content: `**Comparativo + THAN:**
- "She is taller than her brother." (Ella es más alta que su hermano.)
- "This book is more interesting than that one." (Este libro es más interesante que ese.)

**THE + superlativo + IN/OF:**
- "He is the tallest in the class." (Él es el más alto de la clase.)
- "This is the best restaurant in the city." (Este es el mejor restaurante de la ciudad.)
- "She is the youngest of the three sisters." (Ella es la menor de las tres hermanas.)

**AS + adjetivo + AS (igual que):**
- "She is as tall as her mother." (Ella es tan alta como su madre.)
- "This isn't as expensive as I thought." (Esto no es tan caro como pensé.)`
      }
    ],
    examples: [
      { english: "My house is bigger than yours.", spanish: "Mi casa es más grande que la tuya.", explanation: "Big es CVC: bigger + than." },
      { english: "This is the most beautiful city I've ever seen.", spanish: "Esta es la ciudad más hermosa que he visto.", explanation: "Beautiful es largo: the most beautiful." },
      { english: "She is better at math than me.", spanish: "Ella es mejor en matemáticas que yo.", explanation: "Good → better (irregular)." },
      { english: "It's the cheapest option.", spanish: "Es la opción más barata.", explanation: "Cheap → the cheapest." },
      { english: "This test is easier than the last one.", spanish: "Este examen es más fácil que el anterior.", explanation: "Easy → easier (y → ier)." }
    ],
    commonMistakes: [
      { mistake: "She is more tall than him.", correction: "She is taller than him.", explanation: "Tall es corto (1 sílaba): taller, no more tall." },
      { mistake: "He is the most fastest.", correction: "He is the fastest.", explanation: "No combines most + -est. Usa solo uno." },
      { mistake: "This is gooder.", correction: "This is better.", explanation: "Good es irregular: good → better → the best." },
      { mistake: "She is taller that me.", correction: "She is taller than me.", explanation: "Después de comparativo, usa THAN, no THAT." }
    ],
    practiceExercises: [
      { question: "Complete: This car is ___ (fast) than that one.", answer: "faster", hint: "Fast es corto: + er" },
      { question: "Complete: She is ___ (intelligent) student in the class.", answer: "the most intelligent", hint: "Intelligent es largo: the most + adj" },
      { question: "Complete: Today was ___ (bad) than yesterday.", answer: "worse", hint: "Bad es irregular" },
      { question: "Complete: He is ___ (happy) person I know.", answer: "the happiest", hint: "Happy: y → iest" }
    ],
    summary: `Adjetivos cortos: -er (comparativo), the -est (superlativo). Adjetivos largos: more + adj (comparativo), the most + adj (superlativo). Irregulares: good-better-best, bad-worse-worst. Usa THAN después de comparativos.`,
    relatedArticles: ['adjectives-basic', 'as-as-comparison', 'modifiers-much-a-bit']
  },

  // ==================== COUNTABLE AND UNCOUNTABLE NOUNS ====================
  {
    id: 'countable-uncountable',
    title: 'Sustantivos Contables e Incontables',
    subtitle: 'A/An, Some, Any, Much, Many, How much/How many',
    level: 'A2',
    category: 'grammar',
    tags: ['nouns', 'countable', 'uncountable', 'quantifiers', 'some', 'any'],
    estimatedReadTime: 12,
    introduction: `En inglés, los sustantivos se dividen en contables (que se pueden contar: one apple, two apples) e incontables (que no se pueden contar directamente: water, rice, money). Esta distinción es crucial porque afecta qué palabras usamos con cada tipo de sustantivo.`,
    sections: [
      {
        title: '1. Sustantivos Contables',
        content: `**Características:**
- Se pueden contar: one, two, three...
- Tienen forma singular y plural
- Pueden usar a/an en singular

**Ejemplos:**
| Singular | Plural |
|----------|--------|
| a book | books |
| an apple | apples |
| a child | children |
| a person | people |

**Palabras que usamos:**
- a/an (singular)
- many (muchos)
- few / a few (pocos / algunos)
- several (varios)
- How many? (¿Cuántos?)`
      },
      {
        title: '2. Sustantivos Incontables',
        content: `**Características:**
- NO se pueden contar directamente
- NO tienen forma plural
- NO usan a/an

**Categorías comunes:**
- **Líquidos:** water, milk, coffee, tea, juice, oil
- **Alimentos sin forma definida:** rice, bread, cheese, meat, sugar, salt
- **Materiales:** wood, plastic, glass, paper, gold
- **Conceptos abstractos:** information, advice, news, work, homework, money
- **Otros:** furniture, luggage, weather, traffic

**Palabras que usamos:**
- much (mucho)
- little / a little (poco / un poco)
- How much? (¿Cuánto?)

**Para contar incontables, usa contenedores:**
- a glass of water (un vaso de agua)
- a piece of advice (un consejo)
- a slice of bread (una rebanada de pan)`
      },
      {
        title: '3. SOME y ANY',
        content: `**SOME:** Afirmativas y ofrecimientos/peticiones
- "I have some money." (Tengo algo de dinero.)
- "Would you like some coffee?" (¿Quieres café?)
- "Can I have some water?" (¿Puedo tener agua?)

**ANY:** Negativos y preguntas
- "I don't have any money." (No tengo nada de dinero.)
- "Do you have any questions?" (¿Tienes preguntas?)
- "Is there any milk?" (¿Hay leche?)

**ANY en afirmativas = "cualquier":**
- "You can call me any time." (Puedes llamarme en cualquier momento.)
- "Any color is fine." (Cualquier color está bien.)`
      },
      {
        title: '4. MUCH, MANY, A LOT OF',
        content: `**MANY + contables plurales:**
- "How many books do you have?" (¿Cuántos libros tienes?)
- "I don't have many friends." (No tengo muchos amigos.)

**MUCH + incontables:**
- "How much money do you need?" (¿Cuánto dinero necesitas?)
- "There isn't much time." (No hay mucho tiempo.)

**A LOT OF / LOTS OF + ambos tipos:**
- "I have a lot of books." (Tengo muchos libros.)
- "She has a lot of money." (Ella tiene mucho dinero.)

**Regla general:**
- MUCH/MANY: principalmente en negativos y preguntas
- A LOT OF: en afirmativas`
      },
      {
        title: '5. FEW/LITTLE vs A FEW/A LITTLE',
        content: `**FEW + contables (pocos, negativo):**
- "Few people came." (Poca gente vino. — insuficiente)

**A FEW + contables (algunos, positivo):**
- "A few people came." (Algunas personas vinieron. — suficiente)

**LITTLE + incontables (poco, negativo):**
- "There's little hope." (Hay poca esperanza. — insuficiente)

**A LITTLE + incontables (un poco, positivo):**
- "There's a little hope." (Hay un poco de esperanza. — suficiente)

**La diferencia:**
- Sin "a" = negativo, insuficiente
- Con "a" = positivo, suficiente`
      }
    ],
    examples: [
      { english: "How many chairs do we need?", spanish: "¿Cuántas sillas necesitamos?", explanation: "Chairs es contable: How many." },
      { english: "How much water did you drink?", spanish: "¿Cuánta agua bebiste?", explanation: "Water es incontable: How much." },
      { english: "I need some information.", spanish: "Necesito información.", explanation: "Information es incontable, no 'informations'." },
      { english: "There aren't many students today.", spanish: "No hay muchos estudiantes hoy.", explanation: "Many + contable plural en negativo." },
      { english: "Can I have a piece of cake?", spanish: "¿Puedo tener un pedazo de pastel?", explanation: "Usando 'a piece of' para contar incontables." }
    ],
    commonMistakes: [
      { mistake: "I need an advice.", correction: "I need some advice / a piece of advice.", explanation: "Advice es incontable, no usa a/an." },
      { mistake: "How much books?", correction: "How many books?", explanation: "Books es contable: How many." },
      { mistake: "I don't have some money.", correction: "I don't have any money.", explanation: "En negativos, usa ANY, no SOME." },
      { mistake: "I have much friends.", correction: "I have many friends.", explanation: "Friends es contable: many, no much." }
    ],
    practiceExercises: [
      { question: "Complete: How ___ milk do you want?", answer: "much", hint: "Milk es incontable" },
      { question: "Complete: There are ___ apples in the basket.", answer: "some/many/a few", hint: "Apples es contable plural" },
      { question: "Complete: I don't have ___ money.", answer: "any/much", hint: "Negativo + incontable" },
      { question: "Complete: ___ people speak English.", answer: "Many/A lot of", hint: "People es contable" }
    ],
    summary: `Contables: a/an, many, few, how many. Incontables: much, little, how much. Some en afirmativas/ofrecimientos, any en negativos/preguntas. A lot of funciona con ambos. Few/little (negativo) vs a few/a little (positivo).`,
    relatedArticles: ['articles-a-an-the', 'there-is-there-are', 'quantifiers']
  },

  // =====================================================================
  // LEVEL B1 - INTERMEDIATE
  // =====================================================================

  // ==================== PRESENT SIMPLE VS PRESENT CONTINUOUS ====================
  {
    id: 'present-simple-vs-continuous',
    title: 'Present Simple vs Present Continuous',
    subtitle: 'Cuándo usar cada tiempo presente',
    level: 'B1',
    category: 'grammar',
    tags: ['present-simple', 'present-continuous', 'tenses', 'comparison'],
    estimatedReadTime: 12,
    introduction: `Una de las dificultades más comunes para estudiantes de inglés es distinguir cuándo usar el Present Simple y cuándo usar el Present Continuous. Aunque ambos describen el presente, tienen usos muy diferentes.`,
    sections: [
      {
        title: '1. Present Simple: Situaciones Permanentes y Rutinas',
        content: `**Usa Present Simple para:**

**A) Rutinas y hábitos:**
- "I wake up at 7 AM every day."
- "She goes to the gym three times a week."

**B) Hechos y verdades universales:**
- "Water boils at 100°C."
- "The Earth revolves around the Sun."

**C) Estados permanentes:**
- "He works for Google."
- "They live in Madrid."

**D) Horarios fijos:**
- "The train leaves at 9 PM."
- "The movie starts at 8 o'clock."

**Palabras clave:** always, usually, often, sometimes, rarely, never, every day/week, on Mondays`
      },
      {
        title: '2. Present Continuous: Acciones Temporales',
        content: `**Usa Present Continuous para:**

**A) Acciones ocurriendo ahora mismo:**
- "I'm reading a book right now."
- "She's cooking dinner at the moment."

**B) Situaciones temporales:**
- "He's living with his parents this month." (temporal)
- "I'm working on a special project." (no permanente)

**C) Cambios y tendencias:**
- "The weather is getting warmer."
- "Prices are rising."

**D) Planes futuros confirmados:**
- "We're meeting tomorrow at 3 PM."
- "I'm flying to Paris next week."

**Palabras clave:** now, right now, at the moment, currently, this week/month, today`
      },
      {
        title: '3. Contraste Directo',
        content: `**Permanente vs Temporal:**
- "I live in London." (permanente)
- "I'm living in London this year." (temporal)

- "She works for a bank." (trabajo fijo)
- "She's working from home today." (situación temporal)

**Rutina vs Acción ahora:**
- "I drink coffee every morning." (rutina)
- "I'm drinking coffee right now." (ahora mismo)

**Característica vs Comportamiento temporal:**
- "He's very quiet." (personalidad)
- "He's being very quiet today." (comportamiento inusual hoy)`
      },
      {
        title: '4. Stative Verbs: Verbos que NO usan Continuous',
        content: `Algunos verbos expresan ESTADOS, no acciones, y generalmente NO se usan en forma continua:

**Verbos de pensamiento:**
- know, understand, believe, think (cuando = creer), remember, forget, realize

**Verbos de emoción:**
- love, hate, like, want, need, prefer, wish

**Verbos de percepción:**
- see, hear, smell, taste, feel (percepción involuntaria)

**Verbos de posesión:**
- have (posesión), own, belong, possess

**Otros:**
- be, seem, appear, contain, consist, depend, mean

**Ejemplos:**
- ✓ "I know the answer." 
- ✗ "I'm knowing the answer."

- ✓ "She loves chocolate."
- ✗ "She's loving chocolate."`
      },
      {
        title: '5. Casos Especiales',
        content: `**THINK:**
- "I think it's a good idea." (opinión — no continuo)
- "I'm thinking about the problem." (proceso mental — continuo)

**HAVE:**
- "I have a car." (posesión — no continuo)
- "I'm having dinner." (actividad — continuo)
- "I'm having a great time." (experiencia — continuo)

**SEE:**
- "I see the mountain." (percepción — no continuo)
- "I'm seeing the doctor tomorrow." (cita — continuo)
- "I'm seeing someone." (relación — continuo)

**ALWAYS + CONTINUOUS (queja/irritación):**
- "She's always complaining!" (queja, irritación)
- "He's always losing his keys!" (comportamiento molesto repetido)`
      }
    ],
    examples: [
      { english: "I work in an office. / I'm working from home today.", spanish: "Trabajo en una oficina. / Hoy estoy trabajando desde casa.", explanation: "Permanente vs temporal." },
      { english: "She speaks three languages.", spanish: "Ella habla tres idiomas.", explanation: "Habilidad permanente: Simple." },
      { english: "He's being rude today.", spanish: "Él está siendo grosero hoy.", explanation: "Comportamiento temporal inusual: Continuous." },
      { english: "I'm thinking about changing jobs.", spanish: "Estoy pensando en cambiar de trabajo.", explanation: "Proceso mental activo: Continuous." },
      { english: "The prices are increasing rapidly.", spanish: "Los precios están aumentando rápidamente.", explanation: "Tendencia/cambio: Continuous." }
    ],
    commonMistakes: [
      { mistake: "I'm knowing the answer.", correction: "I know the answer.", explanation: "Know es stative verb, no usa forma continua." },
      { mistake: "She is working here since 2010.", correction: "She has worked here since 2010. / She works here.", explanation: "Para situaciones permanentes o con since, no uses Continuous." },
      { mistake: "I'm loving this song!", correction: "I love this song!", explanation: "Love es stative verb. (Aunque 'I'm loving it' es famoso por McDonald's, es informal.)" }
    ],
    practiceExercises: [
      { question: "Complete: Water ___ (boil) at 100°C.", answer: "boils", hint: "Verdad universal: Simple" },
      { question: "Complete: She ___ (work) on a project this week.", answer: "is working", hint: "Situación temporal: Continuous" },
      { question: "Complete: I ___ (not/understand) this problem.", answer: "don't understand", hint: "Understand es stative verb: Simple" },
      { question: "Complete: Look! It ___ (rain).", answer: "is raining", hint: "Ahora mismo: Continuous" }
    ],
    summary: `Simple: rutinas, hechos, estados permanentes. Continuous: acciones ahora, situaciones temporales, cambios. Los stative verbs (know, love, want) generalmente no usan Continuous. Algunos verbos cambian significado según el tiempo.`,
    relatedArticles: ['present-simple', 'present-continuous', 'stative-verbs']
  },

  // ==================== PAST SIMPLE VS PRESENT PERFECT ====================
  {
    id: 'past-simple-vs-present-perfect',
    title: 'Past Simple vs Present Perfect',
    subtitle: 'La diferencia crucial entre ambos tiempos',
    level: 'B1',
    category: 'grammar',
    tags: ['past-simple', 'present-perfect', 'tenses', 'comparison'],
    estimatedReadTime: 15,
    introduction: `Una de las mayores dificultades para hispanohablantes es distinguir entre el Past Simple y el Present Perfect, ya que en español a menudo usamos el mismo tiempo verbal. La clave está en entender la conexión (o no) con el presente.`,
    sections: [
      {
        title: '1. La Regla de Oro',
        content: `**PAST SIMPLE:** El tiempo ha terminado. No hay conexión con el presente.
**PRESENT PERFECT:** Hay una conexión con el presente.

**Con tiempo específico → PAST SIMPLE:**
- yesterday, last week, in 2019, when I was young, at 3 PM, on Monday

**Sin tiempo específico o con conexión al presente → PRESENT PERFECT:**
- ever, never, already, yet, just, recently, so far, this week/month/year`
      },
      {
        title: '2. Past Simple: Cuándo Usarlo',
        content: `**A) Acciones en un momento específico del pasado:**
- "I visited Paris in 2019." (tiempo específico)
- "She called me yesterday." (ayer = tiempo terminado)

**B) Secuencias de acciones pasadas:**
- "I woke up, had breakfast, and went to work."

**C) Situaciones/estados que ya no existen:**
- "I lived in Madrid for 5 years." (ya no vivo allí)
- "He was a teacher." (ya no lo es)

**D) Preguntas con WHEN:**
- "When did you arrive?" (pregunta sobre momento específico)
- "When did you buy this car?"`
      },
      {
        title: '3. Present Perfect: Cuándo Usarlo',
        content: `**A) Experiencias de vida (sin tiempo específico):**
- "I have visited Paris." (alguna vez en mi vida)
- "Have you ever eaten sushi?" (experiencia general)

**B) Acciones recientes con relevancia presente:**
- "I've lost my keys." (por eso no puedo entrar ahora)
- "She has broken her leg." (por eso no puede caminar)

**C) Situaciones que continúan:**
- "I have lived in Madrid for 5 years." (todavía vivo allí)
- "She has been a teacher since 2010." (todavía lo es)

**D) Con this week/month/year (período no terminado):**
- "I have seen three movies this week." (la semana no ha terminado)
- "She has traveled a lot this year." (el año no ha terminado)`
      },
      {
        title: '4. Contraste Directo',
        content: `**Experiencia vs Evento específico:**
- "I have visited Paris." (experiencia de vida)
- "I visited Paris in 2019." (evento específico)

**Situación continua vs terminada:**
- "I have lived here for 10 years." (todavía vivo aquí)
- "I lived there for 10 years." (ya no vivo allí)

**Resultado presente vs pasado:**
- "I have lost my wallet." (todavía no lo encuentro)
- "I lost my wallet, but I found it later." (ya pasó)

**Período terminado vs no terminado:**
- "I saw two movies last week." (semana pasada = terminada)
- "I have seen two movies this week." (esta semana = no terminada)`
      },
      {
        title: '5. Errores Comunes de Hispanohablantes',
        content: `**Error: Usar Present Perfect con tiempo específico:**
- ✗ "I have seen him yesterday."
- ✓ "I saw him yesterday."

**Error: Usar Past Simple para experiencias generales:**
- ✗ "Did you ever visit Japan?"
- ✓ "Have you ever visited Japan?"

**Error: Usar Past Simple para situaciones que continúan:**
- ✗ "I know him for 5 years."
- ✓ "I have known him for 5 years."

**Error: Usar Present Perfect con WHEN:**
- ✗ "When have you arrived?"
- ✓ "When did you arrive?"`
      }
    ],
    examples: [
      { english: "I have never been to Japan. / I went to Japan in 2018.", spanish: "Nunca he estado en Japón. / Fui a Japón en 2018.", explanation: "Experiencia vs evento específico." },
      { english: "She has worked here for 5 years.", spanish: "Ella ha trabajado aquí por 5 años (y sigue).", explanation: "Situación continua: Present Perfect." },
      { english: "She worked here for 5 years.", spanish: "Ella trabajó aquí por 5 años (ya no).", explanation: "Situación terminada: Past Simple." },
      { english: "I have just finished.", spanish: "Acabo de terminar.", explanation: "Acción reciente con 'just': Present Perfect." },
      { english: "When did you finish?", spanish: "¿Cuándo terminaste?", explanation: "Pregunta con 'when': Past Simple." }
    ],
    commonMistakes: [
      { mistake: "I have seen him yesterday.", correction: "I saw him yesterday.", explanation: "Yesterday = tiempo específico pasado: usa Past Simple." },
      { mistake: "Did you ever try sushi?", correction: "Have you ever tried sushi?", explanation: "Ever (experiencia): usa Present Perfect." },
      { mistake: "I know her since 2010.", correction: "I have known her since 2010.", explanation: "Since + situación continua: usa Present Perfect." },
      { mistake: "When have you arrived?", correction: "When did you arrive?", explanation: "When pregunta por momento específico: usa Past Simple." }
    ],
    practiceExercises: [
      { question: "Complete: I ___ (visit) London last summer.", answer: "visited", hint: "Last summer = tiempo específico" },
      { question: "Complete: ___ you ever ___ (be) to Australia?", answer: "Have / been", hint: "Ever = experiencia" },
      { question: "Complete: She ___ (work) here since 2015.", answer: "has worked", hint: "Since + continúa" },
      { question: "Complete: When ___ you ___ (buy) this car?", answer: "did / buy", hint: "When = momento específico" }
    ],
    summary: `Past Simple: tiempo específico, período terminado, sin conexión presente. Present Perfect: experiencias, acciones recientes con resultado, situaciones continuas, período no terminado. Never uses Present Perfect con yesterday, last week, when, etc.`,
    relatedArticles: ['past-simple', 'present-perfect-basic', 'for-vs-since']
  },

  // ==================== FIRST CONDITIONAL ====================
  {
    id: 'first-conditional',
    title: 'First Conditional: Posibilidades Reales',
    subtitle: 'Cómo hablar de situaciones posibles y sus consecuencias',
    level: 'B1',
    category: 'grammar',
    tags: ['conditionals', 'first-conditional', 'if', 'future', 'will'],
    estimatedReadTime: 12,
    introduction: `El First Conditional se usa para hablar de situaciones reales y posibles en el futuro. Describe la consecuencia probable de una condición que puede cumplirse.`,
    sections: [
      {
        title: '1. Estructura del First Conditional',
        content: `**Fórmula:** IF + Present Simple, WILL + Verbo base

**Ejemplos:**
- "If it rains, I will stay home."
- "If you study hard, you will pass the exam."
- "If she calls, I will tell her."

**Importante:** 
- La cláusula IF usa Present Simple (aunque hablemos del futuro)
- La cláusula principal usa WILL + verbo base

**Orden flexible:**
- "If it rains, I will stay home." ✓
- "I will stay home if it rains." ✓

**Nota:** Cuando IF va primero, usamos coma. Cuando IF va segundo, no.`
      },
      {
        title: '2. Usos del First Conditional',
        content: `**A) Situaciones probables o posibles:**
- "If I see him, I'll give him your message."
- "If the weather is nice, we'll go to the beach."

**B) Promesas:**
- "If you help me, I'll pay you."
- "I'll call you if I'm late."

**C) Advertencias:**
- "If you don't hurry, you'll miss the bus."
- "You'll get sick if you don't wear a jacket."

**D) Ofertas:**
- "If you want, I'll help you with the homework."
- "I'll cook dinner if you're tired."`
      },
      {
        title: '3. Variaciones con Otros Modales',
        content: `No siempre usamos WILL. Podemos usar otros modales según el significado:

**CAN (poder):**
- "If you finish early, you can leave." (permiso/posibilidad)

**MIGHT/MAY (quizás):**
- "If I have time, I might visit you." (menos seguro)

**SHOULD (debería):**
- "If you feel sick, you should see a doctor." (consejo)

**MUST (debe):**
- "If you go to the party, you must tell me about it." (obligación)

**Imperative (orden):**
- "If you see John, tell him to call me." (instrucción)`
      },
      {
        title: '4. UNLESS, AS LONG AS, PROVIDED',
        content: `**UNLESS = If... not:**
- "Unless you study, you'll fail." = "If you don't study, you'll fail."
- "I won't go unless you come with me." = "I won't go if you don't come with me."

**AS LONG AS / PROVIDED (THAT) / PROVIDING (THAT):**
Todas significan "siempre que" o "con la condición de que":

- "You can borrow my car as long as you're careful."
- "I'll help you provided that you help me too."
- "You can go providing you finish your homework first."`
      },
      {
        title: '5. First vs Zero Conditional',
        content: `**Zero Conditional:** Para verdades generales y hechos científicos
- Estructura: IF + Present Simple, Present Simple
- "If you heat water to 100°C, it boils." (siempre ocurre)
- "If I drink coffee at night, I can't sleep." (resultado habitual)

**First Conditional:** Para situaciones específicas posibles
- Estructura: IF + Present Simple, WILL + verb
- "If I drink coffee tonight, I won't sleep." (situación específica)
- "If it rains tomorrow, we'll cancel the picnic." (posibilidad futura)

**La diferencia:**
- Zero: resultado siempre ocurre (verdad general)
- First: resultado puede ocurrir (situación específica futura)`
      }
    ],
    examples: [
      { english: "If you don't leave now, you'll be late.", spanish: "Si no te vas ahora, llegarás tarde.", explanation: "Advertencia sobre una posibilidad real." },
      { english: "I'll buy a new car if I get the promotion.", spanish: "Compraré un carro nuevo si obtengo el ascenso.", explanation: "Plan condicional." },
      { english: "Unless it stops raining, we won't go out.", spanish: "A menos que deje de llover, no saldremos.", explanation: "Unless = if not." },
      { english: "If you see Maria, can you give her this?", spanish: "Si ves a María, ¿puedes darle esto?", explanation: "Petición con can." },
      { english: "You can borrow it as long as you return it.", spanish: "Puedes tomarlo prestado siempre que lo devuelvas.", explanation: "As long as = con la condición de que." }
    ],
    commonMistakes: [
      { mistake: "If it will rain, I will stay home.", correction: "If it rains, I will stay home.", explanation: "Después de IF, usa Present Simple, no WILL." },
      { mistake: "If you will study, you will pass.", correction: "If you study, you will pass.", explanation: "Present Simple después de IF." },
      { mistake: "I'll go if it doesn't rains.", correction: "I'll go if it doesn't rain.", explanation: "Después de doesn't, verbo base (rain, no rains)." }
    ],
    practiceExercises: [
      { question: "Complete: If she ___ (call), I ___ (tell) her.", answer: "calls / will tell", hint: "IF + Present Simple, WILL + base" },
      { question: "Complete: You ___ (miss) the train if you ___ (not/hurry).", answer: "will miss / don't hurry", hint: "Advertencia: will + base, if + present" },
      { question: "Complete: ___ you arrive late, please call me.", answer: "If", hint: "Condición" },
      { question: "Rewrite: If you don't study, you'll fail. (using UNLESS)", answer: "Unless you study, you'll fail.", hint: "Unless = if not" }
    ],
    summary: `First Conditional: IF + Present Simple, WILL + verb base. Expresa posibilidades reales futuras. Variantes: can, might, should, must. Alternativas a IF: unless (= if not), as long as, provided that. Recuerda: nunca uses WILL después de IF.`,
    relatedArticles: ['zero-conditional', 'second-conditional', 'conditional-overview']
  },

  // ==================== SECOND CONDITIONAL ====================
  {
    id: 'second-conditional',
    title: 'Second Conditional: Situaciones Hipotéticas',
    subtitle: 'Cómo expresar situaciones imaginarias o poco probables',
    level: 'B1',
    category: 'grammar',
    tags: ['conditionals', 'second-conditional', 'if', 'would', 'hypothetical'],
    estimatedReadTime: 12,
    introduction: `El Second Conditional se usa para hablar de situaciones hipotéticas, imaginarias o poco probables. A diferencia del First Conditional (situaciones posibles), el Second Conditional describe situaciones contrarias a la realidad actual o con muy pocas probabilidades de ocurrir.`,
    sections: [
      {
        title: '1. Estructura del Second Conditional',
        content: `**Fórmula:** IF + Past Simple, WOULD + Verbo base

**Ejemplos:**
- "If I had more money, I would buy a house."
- "If she lived closer, she would visit more often."
- "If I knew the answer, I would tell you."

**Importante:**
- Usamos Past Simple después de IF, pero hablamos del PRESENTE/FUTURO hipotético
- WOULD + verbo base en la cláusula principal

**Contracciones:**
- I would → I'd
- He would → He'd
- They would → They'd`
      },
      {
        title: '2. Usos del Second Conditional',
        content: `**A) Situaciones contrarias a la realidad presente:**
- "If I were rich, I would travel the world." (No soy rico)
- "If I spoke Chinese, I would move to China." (No hablo chino)

**B) Situaciones poco probables:**
- "If I won the lottery, I would quit my job." (Poco probable)
- "If aliens landed on Earth, what would you do?" (Hipotético)

**C) Consejos (If I were you...):**
- "If I were you, I would apologize." (Consejo)
- "If I were in your position, I wouldn't accept." (Sugerencia)

**D) Imaginando alternativas:**
- "What would you do if you had more time?"
- "Where would you live if you could live anywhere?"`
      },
      {
        title: '3. IF I WERE vs IF I WAS',
        content: `**Formalmente correcta:** IF I WERE
**También aceptada:** IF I WAS

**Explicación:**
En el Second Conditional, tradicionalmente usamos "were" con todos los sujetos:
- "If I were rich..." (formal, recomendado)
- "If he were here..." (formal)
- "If she were taller..." (formal)

**En inglés informal, "was" es aceptable:**
- "If I was rich..." (informal, común)
- "If he was here..." (informal)

**Para consejos, "were" es muy común:**
- "If I were you, I would..." (expresión fija)`
      },
      {
        title: '4. Variaciones con Otros Modales',
        content: `Podemos usar otros modales en lugar de WOULD:

**COULD (podría):**
- "If I had more time, I could learn a new language."

**MIGHT (quizás):**
- "If you asked nicely, she might help you."

**SHOULD (debería):**
- "If he studied more, he should pass." (consecuencia lógica)

**Ejemplos adicionales:**
- "If I won the lottery, I could retire early."
- "If you tried harder, you might succeed."
- "If she practiced more, she could be a professional."`
      },
      {
        title: '5. First vs Second Conditional',
        content: `**First Conditional:** Situación REAL y POSIBLE
- "If it rains tomorrow, I'll take an umbrella."
- (Es posible que llueva mañana)

**Second Conditional:** Situación HIPOTÉTICA o IMPROBABLE
- "If it rained in the Sahara, farmers would be happy."
- (No llueve en el Sahara, es hipotético)

**Más ejemplos de contraste:**
- First: "If I see John, I'll tell him." (es posible que lo vea)
- Second: "If I saw a ghost, I would scream." (hipotético, no espero verlo)

- First: "If she applies for the job, she'll get it." (va a aplicar)
- Second: "If she applied for the job, she'd get it." (no va a aplicar, pero si lo hiciera...)`
      }
    ],
    examples: [
      { english: "If I had a million dollars, I would buy a yacht.", spanish: "Si tuviera un millón de dólares, compraría un yate.", explanation: "Situación hipotética: no tengo un millón de dólares." },
      { english: "If I were you, I would accept the offer.", spanish: "Si yo fuera tú, aceptaría la oferta.", explanation: "Consejo usando 'If I were you'." },
      { english: "What would you do if you won the lottery?", spanish: "¿Qué harías si ganaras la lotería?", explanation: "Pregunta hipotética." },
      { english: "If she spoke English, she could get a better job.", spanish: "Si ella hablara inglés, podría conseguir un mejor trabajo.", explanation: "Consecuencia hipotética con 'could'." },
      { english: "If we lived near the beach, we would swim every day.", spanish: "Si viviéramos cerca de la playa, nadaríamos todos los días.", explanation: "Situación contraria a la realidad." }
    ],
    commonMistakes: [
      { mistake: "If I would have more money, I would travel.", correction: "If I had more money, I would travel.", explanation: "Después de IF, usa Past Simple, no WOULD." },
      { mistake: "If I was you, I would go.", correction: "If I were you, I would go.", explanation: "'If I were you' es la forma tradicional para consejos." },
      { mistake: "If I won the lottery, I will buy a house.", correction: "If I won the lottery, I would buy a house.", explanation: "Second Conditional usa WOULD, no WILL." }
    ],
    practiceExercises: [
      { question: "Complete: If I ___ (be) taller, I ___ (play) basketball.", answer: "were / would play", hint: "Hipotético: Past Simple + would + base" },
      { question: "Complete: What ___ you ___ (do) if you had more time?", answer: "would / do", hint: "Would + sujeto + verbo base" },
      { question: "Complete: If I ___ (be) you, I ___ (not/accept) the offer.", answer: "were / wouldn't accept", hint: "If I were you + would(n't)" },
      { question: "Complete: If she ___ (live) closer, she ___ (visit) more often.", answer: "lived / would visit", hint: "Past Simple + would + base" }
    ],
    summary: `Second Conditional: IF + Past Simple, WOULD + verb base. Expresa situaciones hipotéticas o improbables. Usa "If I were..." para consejos. Variantes: could, might. Diferencia con First: posible vs hipotético. Nunca uses WOULD después de IF.`,
    relatedArticles: ['first-conditional', 'third-conditional', 'conditional-overview']
  },

  // ==================== PASSIVE VOICE BASIC ====================
  {
    id: 'passive-voice-basic',
    title: 'Voz Pasiva: Fundamentos',
    subtitle: 'Cómo cambiar el enfoque de una oración',
    level: 'B1',
    category: 'grammar',
    tags: ['passive-voice', 'active-voice', 'be', 'past-participle'],
    estimatedReadTime: 12,
    introduction: `La voz pasiva se usa cuando queremos enfocarnos en la acción o en quién/qué recibe la acción, en lugar de quién la realiza. Es muy común en inglés formal, científico y periodístico.`,
    sections: [
      {
        title: '1. Estructura de la Voz Pasiva',
        content: `**Fórmula:** Sujeto + TO BE + Participio Pasado (+ BY + agente)

**Transformación de Activa a Pasiva:**

**ACTIVA:** The chef cooks the food.
(Sujeto) + (Verbo) + (Objeto)

**PASIVA:** The food is cooked (by the chef).
(Nuevo sujeto) + (TO BE + Participio) + (BY + agente opcional)

**El objeto de la oración activa se convierte en sujeto de la pasiva.**`
      },
      {
        title: '2. Pasiva en Diferentes Tiempos',
        content: `| Tiempo | Activa | Pasiva |
|--------|--------|--------|
| Present Simple | She writes letters. | Letters are written. |
| Past Simple | She wrote letters. | Letters were written. |
| Present Continuous | She is writing letters. | Letters are being written. |
| Past Continuous | She was writing letters. | Letters were being written. |
| Present Perfect | She has written letters. | Letters have been written. |
| Future (will) | She will write letters. | Letters will be written. |
| Modal (can) | She can write letters. | Letters can be written. |`
      },
      {
        title: '3. Cuándo Usar la Pasiva',
        content: `**A) Cuando el agente es desconocido o no importante:**
- "My car was stolen." (No sé quién lo robó)
- "The window was broken." (No importa quién)

**B) Cuando el enfoque está en la acción o el resultado:**
- "The building was constructed in 1920."
- "The report has been finished."

**C) En escritura formal, científica o periodística:**
- "It is believed that..." (Se cree que...)
- "The experiment was conducted..."
- "The suspect was arrested yesterday."

**D) Para evitar mencionar al responsable:**
- "Mistakes were made." (evita decir quién cometió errores)`
      },
      {
        title: '4. BY + Agente',
        content: `Usamos BY cuando queremos mencionar quién realizó la acción:

- "The book was written by J.K. Rowling."
- "The painting was created by Picasso."
- "The song was performed by Beyoncé."

**¿Cuándo incluir BY + agente?**
- Incluir: cuando el agente es importante o interesante
- Omitir: cuando es obvio, desconocido o no importante

**Ejemplos de omisión:**
- "The criminal was arrested." (por la policía — obvio)
- "English is spoken worldwide." (por la gente — general)
- "The letter was sent yesterday." (no importa quién)`
      },
      {
        title: '5. Verbos con Dos Objetos',
        content: `Algunos verbos tienen dos objetos (directo e indirecto). Ambos pueden ser sujetos de la pasiva:

**ACTIVA:** They gave me a present.
(me = objeto indirecto, a present = objeto directo)

**PASIVA (objeto indirecto como sujeto):**
"I was given a present." (más común)

**PASIVA (objeto directo como sujeto):**
"A present was given to me." (menos común)

**Otros verbos similares:**
- offer, send, show, teach, tell, bring, write

**Ejemplos:**
- "She was offered a job." (más común)
- "A job was offered to her." (menos común)`
      }
    ],
    examples: [
      { english: "The cake was made by my mother.", spanish: "El pastel fue hecho por mi madre.", explanation: "Pasiva en Past Simple con agente." },
      { english: "English is spoken all over the world.", spanish: "El inglés se habla en todo el mundo.", explanation: "Pasiva sin agente (no importante)." },
      { english: "The project has been completed.", spanish: "El proyecto ha sido completado.", explanation: "Pasiva en Present Perfect." },
      { english: "The meeting will be held tomorrow.", spanish: "La reunión se llevará a cabo mañana.", explanation: "Pasiva con will." },
      { english: "She was given a promotion.", spanish: "Le dieron un ascenso.", explanation: "Pasiva con objeto indirecto como sujeto." }
    ],
    commonMistakes: [
      { mistake: "The book was wrote by him.", correction: "The book was written by him.", explanation: "Usa el PARTICIPIO (written), no el Past Simple (wrote)." },
      { mistake: "The window broken yesterday.", correction: "The window was broken yesterday.", explanation: "Necesitas TO BE (was) antes del participio." },
      { mistake: "The letter was send.", correction: "The letter was sent.", explanation: "Participio de send es SENT, no send." }
    ],
    practiceExercises: [
      { question: "Change to passive: They build houses.", answer: "Houses are built.", hint: "Present Simple: are + participio" },
      { question: "Change to passive: Someone stole my phone.", answer: "My phone was stolen.", hint: "Past Simple: was + participio" },
      { question: "Change to passive: They have painted the room.", answer: "The room has been painted.", hint: "Present Perfect: has been + participio" },
      { question: "Complete: The song ___ (write) by Ed Sheeran.", answer: "was written", hint: "Past Simple pasivo con agente" }
    ],
    summary: `Pasiva: Sujeto + TO BE + Participio (+ BY agente). Cambia el enfoque al objeto/acción. Usa BY cuando el agente es importante. Común en textos formales, científicos y noticias. Recuerda usar el participio (written, not wrote).`,
    relatedArticles: ['active-vs-passive', 'passive-advanced', 'past-participles']
  },

  // ==================== RELATIVE CLAUSES ====================
  {
    id: 'relative-clauses',
    title: 'Relative Clauses: Who, Which, That, Where, When',
    subtitle: 'Cómo añadir información sobre personas y cosas',
    level: 'B1',
    category: 'grammar',
    tags: ['relative-clauses', 'who', 'which', 'that', 'where', 'when', 'whose'],
    estimatedReadTime: 12,
    introduction: `Las relative clauses (cláusulas relativas) son oraciones subordinadas que dan información adicional sobre un sustantivo. Nos permiten combinar dos oraciones en una de forma más fluida y natural.`,
    sections: [
      {
        title: '1. Los Pronombres Relativos',
        content: `| Pronombre | Uso | Ejemplo |
|-----------|-----|---------|
| WHO | personas (sujeto) | The man who called is my friend. |
| WHICH | cosas/animales | The book which is on the table is mine. |
| THAT | personas y cosas | The woman that lives next door is a doctor. |
| WHERE | lugares | The restaurant where we met is closing. |
| WHEN | tiempo | The day when I graduated was special. |
| WHOSE | posesión | The man whose car was stolen called the police. |

**THAT puede reemplazar a WHO y WHICH en defining clauses.**`
      },
      {
        title: '2. Defining vs Non-defining Clauses',
        content: `**DEFINING (sin comas):** La información es ESENCIAL para identificar.
- "The woman who lives next door is a nurse."
- "Students who study hard get good grades."

Sin la cláusula, no sabemos de qué/quién hablamos.

**NON-DEFINING (con comas):** La información es ADICIONAL, no esencial.
- "My sister, who lives in London, is visiting next week."
- "Paris, which is the capital of France, is beautiful."

Sin la cláusula, aún sabemos de qué/quién hablamos.

**Nota importante:** NO uses THAT en non-defining clauses.
- ✓ "My car, which is red, needs repairs."
- ✗ "My car, that is red, needs repairs."`
      },
      {
        title: '3. Omitir el Pronombre Relativo',
        content: `Puedes omitir WHO/WHICH/THAT cuando es OBJETO de la cláusula:

**Como objeto (se puede omitir):**
- "The man (who/that) I met yesterday is nice."
- "The book (which/that) you recommended is excellent."

**Como sujeto (NO se puede omitir):**
- "The man who called is my friend." (who = sujeto)
- "The book which is on the table is mine." (which = sujeto)

**¿Cómo saber si es sujeto u objeto?**
Si hay OTRO sujeto después del pronombre, puedes omitirlo:
- "The man I met" (I es el sujeto → man es objeto → omitir OK)
- "The man who called" (no hay otro sujeto → who es sujeto → NO omitir)`
      },
      {
        title: '4. WHOSE (Posesión)',
        content: `WHOSE indica posesión y funciona como "cuyo/cuya/cuyos/cuyas":

**Estructura:** Sustantivo + WHOSE + sustantivo poseído + verbo

**Ejemplos:**
- "The woman whose daughter won the prize is very proud."
  (La mujer cuya hija ganó el premio está muy orgullosa.)
- "I know a man whose wife is a famous actress."
  (Conozco a un hombre cuya esposa es una actriz famosa.)
- "The company whose products we use is based in Germany."
  (La empresa cuyos productos usamos tiene sede en Alemania.)

**Nota:** WHOSE puede referirse a personas Y cosas.
- "The house whose roof was damaged..."
- "The car whose engine broke down..."`
      },
      {
        title: '5. WHERE, WHEN, WHY',
        content: `**WHERE (para lugares):**
- "The restaurant where we had dinner was excellent."
- "This is the town where I grew up."

**WHEN (para tiempo):**
- "I remember the day when we first met."
- "Summer is the time when I feel happiest."

**WHY (para razones):**
- "The reason why I left was personal."
- "That's the reason why she's upset."

**Alternativas con preposición:**
- "The restaurant where we had dinner" = "The restaurant at which we had dinner"
- "The day when we met" = "The day on which we met"
- "The reason why I left" = "The reason for which I left"`
      }
    ],
    examples: [
      { english: "The book that I bought is interesting.", spanish: "El libro que compré es interesante.", explanation: "That como objeto (se puede omitir)." },
      { english: "My brother, who lives in Canada, is visiting.", spanish: "Mi hermano, que vive en Canadá, viene de visita.", explanation: "Non-defining con comas: información adicional." },
      { english: "This is the house where I was born.", spanish: "Esta es la casa donde nací.", explanation: "Where para lugares." },
      { english: "The man whose car was stolen reported it to the police.", spanish: "El hombre cuyo carro fue robado lo reportó a la policía.", explanation: "Whose para posesión." },
      { english: "2020 was the year when everything changed.", spanish: "2020 fue el año en que todo cambió.", explanation: "When para tiempo." }
    ],
    commonMistakes: [
      { mistake: "The man which called is here.", correction: "The man who/that called is here.", explanation: "Para personas, usa WHO o THAT, no WHICH." },
      { mistake: "My sister who lives in Paris is a doctor.", correction: "My sister, who lives in Paris, is a doctor.", explanation: "Si solo tienes una hermana, necesitas comas (non-defining)." },
      { mistake: "The man who's car was stolen...", correction: "The man whose car was stolen...", explanation: "WHOSE (posesivo), no WHO'S (who is)." },
      { mistake: "This is the reason because I left.", correction: "This is the reason why I left.", explanation: "Usa WHY después de 'the reason', no BECAUSE." }
    ],
    practiceExercises: [
      { question: "Complete: The woman ___ works here is my aunt.", answer: "who/that", hint: "Persona como sujeto" },
      { question: "Complete: The book ___ you lent me was great.", answer: "which/that/(nothing)", hint: "Cosa como objeto (puede omitirse)" },
      { question: "Complete: I know a man ___ wife is a doctor.", answer: "whose", hint: "Posesión" },
      { question: "Complete: This is the place ___ we first met.", answer: "where", hint: "Lugar" }
    ],
    summary: `Who = personas, which = cosas, that = ambos. Where = lugares, when = tiempo, whose = posesión. Defining (esencial, sin comas) vs non-defining (adicional, con comas). Puedes omitir who/which/that cuando es objeto.`,
    relatedArticles: ['sentence-structure', 'subordinate-clauses', 'punctuation']
  },

  // =====================================================================
  // LEVEL B2 - UPPER INTERMEDIATE
  // =====================================================================

  // ==================== THIRD CONDITIONAL ====================
  {
    id: 'third-conditional',
    title: 'Third Conditional: El Pasado Hipotético',
    subtitle: 'Cómo hablar de situaciones pasadas que no ocurrieron',
    level: 'B2',
    category: 'grammar',
    tags: ['conditionals', 'third-conditional', 'past-perfect', 'would-have'],
    estimatedReadTime: 12,
    introduction: `El Third Conditional se usa para hablar de situaciones hipotéticas en el pasado: cosas que no ocurrieron y sus consecuencias imaginarias. Es útil para expresar arrepentimiento, crítica o especulación sobre el pasado.`,
    sections: [
      {
        title: '1. Estructura del Third Conditional',
        content: `**Fórmula:** IF + Past Perfect, WOULD HAVE + Participio

**Ejemplos:**
- "If I had studied harder, I would have passed the exam."
- "If she had called me, I would have helped her."
- "If we had left earlier, we wouldn't have missed the train."

**Componentes:**
- Cláusula IF: Past Perfect (had + participio)
- Cláusula principal: would have + participio

**Contracciones comunes:**
- would have → would've / 'd have
- had → 'd
- "If I'd known, I'd have called you."`
      },
      {
        title: '2. Usos del Third Conditional',
        content: `**A) Situaciones pasadas que no ocurrieron:**
- "If I had won the lottery, I would have bought a house."
  (No gané la lotería, no compré casa)

**B) Expresar arrepentimiento:**
- "If I had listened to my parents, I wouldn't have made that mistake."
- "If I'd known it would rain, I would've brought an umbrella."

**C) Criticar decisiones pasadas:**
- "If you had told me earlier, I could have helped."
- "If she had been more careful, this wouldn't have happened."

**D) Especular sobre alternativas pasadas:**
- "What would have happened if we hadn't met?"
- "How would history have changed if...?"`
      },
      {
        title: '3. Variaciones con Otros Modales',
        content: `**COULD HAVE (podría haber):**
- "If I had known, I could have helped."
- "If they had tried harder, they could have won."

**MIGHT HAVE (quizás habría):**
- "If you had asked nicely, she might have agreed."
- "If it had been sunny, we might have gone to the beach."

**SHOULD HAVE (debería haber):**
- "If I had known the truth, I should have acted differently."

**Ejemplos adicionales:**
- "If she had studied medicine, she could have become a doctor."
- "If they'd invested earlier, they might have been millionaires."`
      },
      {
        title: '4. Inversión (Formal)',
        content: `En inglés formal, podemos invertir la estructura sin usar IF:

**HAD + sujeto + participio, would have + participio**

**Ejemplos:**
- "Had I known, I would have called." = "If I had known..."
- "Had she arrived earlier, she would have seen him." = "If she had arrived..."
- "Had they been more careful, this wouldn't have happened." = "If they had been..."

**Esta estructura:**
- Es más formal y literaria
- Común en escritura formal y discursos
- Elimina la necesidad de IF`
      },
      {
        title: '5. Comparación: Second vs Third Conditional',
        content: `**Second Conditional:** Hipotético PRESENTE/FUTURO
- "If I had more money, I would travel." (No tengo dinero ahora)

**Third Conditional:** Hipotético PASADO
- "If I had had more money, I would have traveled." (No tuve dinero entonces)

**Ejemplos de contraste:**
- Second: "If I were taller, I would play basketball." (presente)
- Third: "If I had been taller, I would have played basketball." (pasado)

- Second: "If she studied, she would pass." (futura posibilidad hipotética)
- Third: "If she had studied, she would have passed." (pasado: no estudió)`
      }
    ],
    examples: [
      { english: "If I had seen him, I would have said hello.", spanish: "Si lo hubiera visto, le habría dicho hola.", explanation: "Situación pasada hipotética." },
      { english: "If we hadn't missed the flight, we would have arrived on time.", spanish: "Si no hubiéramos perdido el vuelo, habríamos llegado a tiempo.", explanation: "Negativo: hadn't + participio." },
      { english: "Had I known about the meeting, I would have attended.", spanish: "De haber sabido de la reunión, habría asistido.", explanation: "Inversión formal sin IF." },
      { english: "She might have survived if help had arrived sooner.", spanish: "Ella podría haber sobrevivido si la ayuda hubiera llegado antes.", explanation: "Con might have." },
      { english: "What would you have done if you had been in my situation?", spanish: "¿Qué habrías hecho si hubieras estado en mi situación?", explanation: "Pregunta hipotética sobre el pasado." }
    ],
    commonMistakes: [
      { mistake: "If I would have known, I would have called.", correction: "If I had known, I would have called.", explanation: "Después de IF, usa HAD, no WOULD HAVE." },
      { mistake: "If I had knew...", correction: "If I had known...", explanation: "Usa el participio (known), no el pasado simple (knew)." },
      { mistake: "If she studied harder, she would have passed.", correction: "If she had studied harder, she would have passed.", explanation: "Third Conditional necesita Past Perfect después de IF." }
    ],
    practiceExercises: [
      { question: "Complete: If I ___ (know), I ___ (tell) you.", answer: "had known / would have told", hint: "Had + participio, would have + participio" },
      { question: "Complete: She ___ (not/miss) the bus if she ___ (leave) earlier.", answer: "wouldn't have missed / had left", hint: "Negativo en la principal" },
      { question: "Complete: ___ I ___ (be) aware, I ___ (act) differently.", answer: "Had / been / would have acted", hint: "Inversión formal" },
      { question: "Complete: If they ___ (not/help) me, I ___ (fail).", answer: "hadn't helped / would have failed", hint: "Negativo en la condición" }
    ],
    summary: `Third Conditional: IF + Past Perfect (had + participio), WOULD HAVE + participio. Habla de pasados hipotéticos que no ocurrieron. Variantes: could have, might have. Inversión formal: Had I known... Nunca uses WOULD HAVE después de IF.`,
    relatedArticles: ['second-conditional', 'mixed-conditionals', 'past-perfect']
  },

  // ==================== REPORTED SPEECH ====================
  {
    id: 'reported-speech',
    title: 'Reported Speech: Estilo Indirecto',
    subtitle: 'Cómo reportar lo que otros dijeron',
    level: 'B2',
    category: 'grammar',
    tags: ['reported-speech', 'indirect-speech', 'say', 'tell', 'ask'],
    estimatedReadTime: 15,
    introduction: `El Reported Speech (estilo indirecto) se usa para reportar o contar lo que otra persona dijo, sin usar sus palabras exactas. Es esencial para narrar conversaciones, reportar noticias y transmitir información de segunda mano.`,
    sections: [
      {
        title: '1. Cambios de Tiempos Verbales',
        content: `Cuando el verbo introductorio está en pasado (said, told), los tiempos cambian:

| Direct Speech | Reported Speech |
|---------------|-----------------|
| Present Simple | Past Simple |
| "I work here." | He said he worked there. |
| Present Continuous | Past Continuous |
| "I'm working." | He said he was working. |
| Past Simple | Past Perfect |
| "I worked." | He said he had worked. |
| Present Perfect | Past Perfect |
| "I have worked." | He said he had worked. |
| Will | Would |
| "I will work." | He said he would work. |
| Can | Could |
| "I can work." | He said he could work. |`
      },
      {
        title: '2. Cambios de Pronombres y Referencias',
        content: `**Pronombres:**
- I → he/she
- you → I/he/she/they
- we → they
- my → his/her
- our → their

**Referencias de tiempo y lugar:**
| Direct | Reported |
|--------|----------|
| today | that day |
| tomorrow | the next day / the following day |
| yesterday | the day before / the previous day |
| now | then |
| here | there |
| this | that |
| these | those |
| ago | before |

**Ejemplo completo:**
- Direct: "I'll call you tomorrow."
- Reported: She said she would call me the next day.`
      },
      {
        title: '3. SAY vs TELL',
        content: `**SAY:** No menciona a quién
- "He said (that) he was tired."
- "She said she would come."

**TELL:** Siempre menciona a quién
- "He told me (that) he was tired."
- "She told us she would come."

**Regla:**
- SAY + (that) + cláusula
- TELL + persona + (that) + cláusula

**Otros verbos de reporte:**
- explain, mention, admit, deny, promise, warn, advise, suggest, remind

**Ejemplos:**
- "He admitted (that) he had made a mistake."
- "She promised (that) she would help."`
      },
      {
        title: '4. Reportando Preguntas',
        content: `**Yes/No Questions:**
Usar IF o WHETHER:
- Direct: "Are you coming?"
- Reported: She asked if/whether I was coming.

**Wh- Questions:**
Mantener la palabra Wh-, pero SIN inversión:
- Direct: "Where do you live?"
- Reported: He asked where I lived. (NO "where did I live")

**Importante:** En reported questions, el orden es SUJETO + VERBO (no inversión)

**Ejemplos:**
- "What time is it?" → He asked what time it was.
- "Did you see her?" → He asked if I had seen her.
- "Why are you late?" → She asked why I was late.`
      },
      {
        title: '5. Reportando Órdenes y Peticiones',
        content: `**Estructura:** TELL/ASK + persona + TO + infinitivo

**Órdenes (tell):**
- Direct: "Close the door!"
- Reported: She told me to close the door.

**Peticiones (ask):**
- Direct: "Could you help me?"
- Reported: He asked me to help him.

**Negativo:**
- Direct: "Don't be late!"
- Reported: She told me not to be late.

**Otros verbos:**
- order, command, warn, advise, encourage, remind, beg

**Ejemplos:**
- He warned me not to go there.
- She advised me to see a doctor.
- They begged us to help them.`
      }
    ],
    examples: [
      { english: "'I love you,' he said. → He said he loved her.", spanish: "Cambio de presente a pasado y de pronombre.", explanation: "Present Simple → Past Simple" },
      { english: "She asked me where I lived.", spanish: "Ella me preguntó dónde vivía.", explanation: "Reported question sin inversión." },
      { english: "He told me not to worry.", spanish: "Él me dijo que no me preocupara.", explanation: "Reported order negativa." },
      { english: "She said she would call me the next day.", spanish: "Ella dijo que me llamaría al día siguiente.", explanation: "Will → would, tomorrow → the next day." },
      { english: "He admitted that he had made a mistake.", spanish: "Él admitió que había cometido un error.", explanation: "Verbo de reporte 'admit' + Past Perfect." }
    ],
    commonMistakes: [
      { mistake: "He said me that...", correction: "He said that... / He told me that...", explanation: "SAY no lleva objeto personal directo, TELL sí." },
      { mistake: "She asked where did I live.", correction: "She asked where I lived.", explanation: "En reported questions, NO hay inversión." },
      { mistake: "He told to go away.", correction: "He told me to go away.", explanation: "TELL necesita un objeto (me, him, her, etc.)." }
    ],
    practiceExercises: [
      { question: "Report: 'I am happy.' (She said...)", answer: "She said (that) she was happy.", hint: "am → was, I → she" },
      { question: "Report: 'Where do you work?' (He asked...)", answer: "He asked where I worked.", hint: "Sin inversión, do you work → I worked" },
      { question: "Report: 'Don't touch that!' (She told me...)", answer: "She told me not to touch that.", hint: "tell + objeto + not to + infinitivo" },
      { question: "Report: 'I will help you tomorrow.' (He said...)", answer: "He said he would help me the next day.", hint: "will → would, tomorrow → the next day" }
    ],
    summary: `Reported Speech: cambia tiempos (present→past), pronombres y referencias de tiempo/lugar. SAY no lleva objeto, TELL sí. Preguntas: sin inversión (if/whether o wh-). Órdenes: tell + objeto + (not) to + infinitivo.`,
    relatedArticles: ['say-vs-tell', 'past-perfect', 'reporting-verbs']
  },

  // ==================== WISH AND IF ONLY ====================
  {
    id: 'wish-if-only',
    title: 'WISH e IF ONLY: Deseos y Arrepentimientos',
    subtitle: 'Cómo expresar deseos sobre presente, pasado y futuro',
    level: 'B2',
    category: 'grammar',
    tags: ['wish', 'if-only', 'subjunctive', 'regrets', 'desires'],
    estimatedReadTime: 12,
    introduction: `WISH e IF ONLY se usan para expresar deseos sobre situaciones que son contrarias a la realidad. Son estructuras importantes para hablar de arrepentimientos, frustraciones y deseos imposibles o difíciles de cumplir.`,
    sections: [
      {
        title: '1. WISH + Past Simple (Deseos sobre el Presente)',
        content: `**Estructura:** WISH + Past Simple

Para expresar que queremos que una situación PRESENTE sea diferente:

**Ejemplos:**
- "I wish I had more money." (No tengo suficiente dinero ahora)
- "She wishes she lived in Paris." (No vive en París)
- "I wish I knew the answer." (No sé la respuesta)

**Con TO BE, usamos WERE (formal) o WAS (informal):**
- "I wish I were taller." (formal, recomendado)
- "I wish I was taller." (informal, aceptable)
- "I wish she were here." (formal)

**IF ONLY es más enfático:**
- "If only I had more time!" (¡Si tan solo tuviera más tiempo!)
- "If only she were here!" (¡Si tan solo estuviera aquí!)`
      },
      {
        title: '2. WISH + Past Perfect (Arrepentimientos)',
        content: `**Estructura:** WISH + Past Perfect (had + participio)

Para expresar arrepentimiento sobre algo en el PASADO:

**Ejemplos:**
- "I wish I had studied harder." (No estudié lo suficiente)
- "She wishes she hadn't said that." (Dijo algo que no debió)
- "I wish I had known about the party." (No supe de la fiesta)

**IF ONLY + Past Perfect:**
- "If only I had listened to you!" (¡Si tan solo te hubiera escuchado!)
- "If only we hadn't left so early!" (¡Si tan solo no hubiéramos salido tan temprano!)

**Uso común:** Expresar que habrías hecho algo diferente si hubieras sabido.`
      },
      {
        title: '3. WISH + WOULD (Quejas y Deseos Futuros)',
        content: `**Estructura:** WISH + sujeto (diferente) + WOULD + verbo

Para expresar frustración o deseo de que alguien/algo cambie:

**Para quejas sobre comportamiento de otros:**
- "I wish you would stop making that noise!" (¡Deja de hacer ese ruido!)
- "I wish she would call me back." (Quiero que me devuelva la llamada)
- "I wish it would stop raining." (Quiero que deje de llover)

**Importante:** NO uses I WISH I WOULD. Usa "I wish I could":
- ✗ "I wish I would speak French."
- ✓ "I wish I could speak French."
- ✓ "I wish I spoke French."

**IF ONLY + WOULD:**
- "If only he would listen to me!"
- "If only it would stop snowing!"`
      },
      {
        title: '4. WISH + Could',
        content: `**WISH + COULD** expresa deseo de tener una habilidad o posibilidad:

**Ejemplos:**
- "I wish I could fly." (Desearía poder volar)
- "She wishes she could play the piano." (Desearía poder tocar el piano)
- "I wish I could help you." (Desearía poder ayudarte)

**WISH + COULD HAVE + participio** para el pasado:
- "I wish I could have been there." (Desearía haber podido estar ahí)
- "She wishes she could have seen him." (Desearía haber podido verlo)

**Diferencia con would:**
- COULD = capacidad/posibilidad que deseo tener
- WOULD = quiero que otra persona/cosa haga algo`
      },
      {
        title: '5. Resumen Comparativo',
        content: `| Estructura | Tiempo | Uso | Ejemplo |
|------------|--------|-----|---------|
| wish + Past Simple | Presente | Situación presente diferente | I wish I had more time. |
| wish + Past Perfect | Pasado | Arrepentimiento | I wish I had studied. |
| wish + would | Futuro | Queja/deseo de cambio | I wish you would listen. |
| wish + could | Presente | Deseo de capacidad | I wish I could help. |

**Nota sobre IF ONLY:**
IF ONLY = WISH, pero más enfático y emocional.
- "I wish I had money." (neutro)
- "If only I had money!" (más emocional)`
      }
    ],
    examples: [
      { english: "I wish I were younger.", spanish: "Desearía ser más joven.", explanation: "Deseo sobre el presente: wish + were (formal)." },
      { english: "If only I had listened to you!", spanish: "¡Si tan solo te hubiera escuchado!", explanation: "Arrepentimiento: if only + past perfect." },
      { english: "I wish you would stop complaining.", spanish: "Desearía que dejaras de quejarte.", explanation: "Queja: wish + would + infinitivo." },
      { english: "She wishes she could speak Japanese.", spanish: "Ella desearía poder hablar japonés.", explanation: "Deseo de capacidad: wish + could." },
      { english: "I wish I hadn't eaten so much.", spanish: "Desearía no haber comido tanto.", explanation: "Arrepentimiento: wish + past perfect negativo." }
    ],
    commonMistakes: [
      { mistake: "I wish I can fly.", correction: "I wish I could fly.", explanation: "Después de WISH, usa COULD, no CAN." },
      { mistake: "I wish I would be taller.", correction: "I wish I were taller.", explanation: "Para deseos propios del presente, usa Past Simple, no WOULD." },
      { mistake: "I wish I knew him yesterday.", correction: "I wish I had known him yesterday.", explanation: "Para el pasado, usa Past Perfect." }
    ],
    practiceExercises: [
      { question: "Complete: I wish I ___ (be) rich.", answer: "were/was", hint: "Deseo presente: Past Simple" },
      { question: "Complete: If only I ___ (study) harder!", answer: "had studied", hint: "Arrepentimiento: Past Perfect" },
      { question: "Complete: I wish you ___ (stop) making noise!", answer: "would stop", hint: "Queja: would + infinitivo" },
      { question: "Complete: She wishes she ___ (can) dance.", answer: "could", hint: "Deseo de capacidad: could" }
    ],
    summary: `WISH + Past Simple = deseo presente. WISH + Past Perfect = arrepentimiento pasado. WISH + WOULD = queja/deseo de cambio futuro (solo para otros). WISH + COULD = deseo de capacidad. IF ONLY = WISH más enfático.`,
    relatedArticles: ['second-conditional', 'third-conditional', 'subjunctive']
  },

  // =====================================================================
  // LEVEL C1 - ADVANCED
  // =====================================================================

  // ==================== MIXED CONDITIONALS ====================
  {
    id: 'mixed-conditionals',
    title: 'Mixed Conditionals: Condicionales Mixtos',
    subtitle: 'Combinando tiempos en situaciones hipotéticas',
    level: 'C1',
    category: 'grammar',
    tags: ['conditionals', 'mixed', 'hypothetical', 'advanced-grammar'],
    estimatedReadTime: 12,
    introduction: `Los Mixed Conditionals combinan elementos de diferentes tipos de condicionales para expresar relaciones hipotéticas entre tiempos diferentes. Son esenciales para expresar cómo una situación pasada afecta el presente, o cómo una situación presente habría afectado el pasado.`,
    sections: [
      {
        title: '1. Tipo 1: Pasado Irreal → Resultado Presente',
        content: `**Estructura:** IF + Past Perfect, WOULD + verbo base

Expresa cómo una acción pasada hipotética tendría un resultado PRESENTE:

**Ejemplos:**
- "If I had studied medicine, I would be a doctor now."
  (No estudié medicina → no soy doctor ahora)

- "If she hadn't moved abroad, she would live here."
  (Se mudó al extranjero → no vive aquí)

- "If I had saved money, I wouldn't be broke now."
  (No ahorré → estoy sin dinero ahora)

**Análisis:**
- Condición: Past Perfect (pasado hipotético)
- Resultado: Would + base (presente hipotético)`
      },
      {
        title: '2. Tipo 2: Presente Irreal → Resultado Pasado',
        content: `**Estructura:** IF + Past Simple, WOULD HAVE + participio

Expresa cómo una situación presente hipotética habría afectado el pasado:

**Ejemplos:**
- "If I were taller, I would have been selected for the team."
  (No soy alto → no me seleccionaron)

- "If she spoke French, she would have gotten the job."
  (No habla francés → no consiguió el trabajo)

- "If I weren't afraid of heights, I would have gone bungee jumping."
  (Tengo miedo a las alturas → no fui)

**Análisis:**
- Condición: Past Simple (presente irreal)
- Resultado: Would have + participio (pasado hipotético)`
      },
      {
        title: '3. Cuándo Usar Cada Tipo',
        content: `**Tipo 1 (Past → Present):**
Usa cuando una decisión o acción pasada tiene consecuencias que perduran:
- "If I had learned to code, I would have a better job."
- "If they had married, they would be together now."

**Tipo 2 (Present → Past):**
Usa cuando una característica o situación permanente habría afectado un evento pasado:
- "If I were braver, I would have asked her out."
- "If he weren't so stubborn, he would have listened."

**Preguntas clave:**
- ¿La condición es sobre el pasado o el presente?
- ¿El resultado es sobre el pasado o el presente?`
      },
      {
        title: '4. Variaciones con Modales',
        content: `**COULD, MIGHT, SHOULD en lugar de WOULD:**

**Tipo 1 (Past → Present):**
- "If I had worked harder, I could be CEO now." (posibilidad)
- "If she had saved, she might have a house now." (posibilidad menor)

**Tipo 2 (Present → Past):**
- "If I weren't so busy, I could have helped you." (capacidad)
- "If she were more confident, she might have won." (posibilidad)

**Ejemplos con Should:**
- "If I had known the rules, I should be able to answer now."
- "If he were smarter, he should have passed the test."`
      },
      {
        title: '5. Práctica Comparativa',
        content: `**Comparación de los cuatro tipos principales:**

| Tipo | Estructura | Ejemplo |
|------|-----------|---------|
| First | If + present, will + base | If it rains, I'll stay home. |
| Second | If + past, would + base | If I had money, I would travel. |
| Third | If + past perfect, would have + pp | If I had known, I would have called. |
| Mixed 1 | If + past perfect, would + base | If I had studied, I would be rich. |
| Mixed 2 | If + past, would have + pp | If I were brave, I would have tried. |

**Clave para identificar:**
- ¿La condición habla del pasado, presente o futuro?
- ¿El resultado habla del pasado, presente o futuro?`
      }
    ],
    examples: [
      { english: "If I had taken that job, I would be living in New York now.", spanish: "Si hubiera aceptado ese trabajo, estaría viviendo en Nueva York ahora.", explanation: "Tipo 1: decisión pasada → situación presente." },
      { english: "If she weren't so shy, she would have made more friends at the party.", spanish: "Si ella no fuera tan tímida, habría hecho más amigos en la fiesta.", explanation: "Tipo 2: característica presente → resultado pasado." },
      { english: "If I had listened to my mother, I wouldn't be in this mess.", spanish: "Si hubiera escuchado a mi madre, no estaría en este lío.", explanation: "Tipo 1: acción pasada → consecuencia presente." },
      { english: "If I were you, I would have accepted the offer.", spanish: "Si yo fuera tú, habría aceptado la oferta.", explanation: "Tipo 2: condición presente irreal → acción pasada." }
    ],
    commonMistakes: [
      { mistake: "If I would have studied, I would be rich.", correction: "If I had studied, I would be rich.", explanation: "Después de IF, usa Past Perfect, no would have." },
      { mistake: "If I was you, I would have gone.", correction: "If I were you, I would have gone.", explanation: "Usa 'were' en expresiones hipotéticas formales." }
    ],
    practiceExercises: [
      { question: "Complete: If I ___ (not/eat) so much, I ___ (not/feel) sick now.", answer: "hadn't eaten / wouldn't feel", hint: "Tipo 1: Past Perfect → would + base" },
      { question: "Complete: If she ___ (be) more patient, she ___ (wait) for us.", answer: "were / would have waited", hint: "Tipo 2: Past Simple → would have + pp" },
      { question: "Complete: If I ___ (take) that flight, I ___ (be) in Paris now.", answer: "had taken / would be", hint: "Tipo 1: acción pasada → resultado presente" },
      { question: "Complete: If I ___ (not/be) afraid of flying, I ___ (travel) more.", answer: "weren't / would have traveled", hint: "Tipo 2: condición presente → resultado pasado" }
    ],
    summary: `Mixed Conditional Tipo 1: IF + Past Perfect, WOULD + base (pasado → presente). Tipo 2: IF + Past Simple, WOULD HAVE + participio (presente → pasado). Identifica qué tiempo describe la condición y qué tiempo describe el resultado.`,
    relatedArticles: ['third-conditional', 'second-conditional', 'conditional-inversions']
  },

  // ==================== ADVANCED PASSIVE ====================
  {
    id: 'advanced-passive',
    title: 'Passive Voice Avanzada',
    subtitle: 'Estructuras pasivas complejas y formales',
    level: 'C1',
    category: 'grammar',
    tags: ['passive', 'advanced', 'formal', 'reporting'],
    estimatedReadTime: 15,
    introduction: `A nivel avanzado, la voz pasiva se utiliza en estructuras más complejas que son comunes en escritura académica, periodística y formal. Estas incluyen pasivas con verbos de reporte, construcciones causativas y pasivas con infinitivos.`,
    sections: [
      {
        title: '1. Pasiva con Verbos de Reporte',
        content: `**Estructura:** IT + IS/WAS + participio + THAT + cláusula
O: Sujeto + IS/WAS + participio + TO + infinitivo

**Verbos comunes:** believe, think, say, know, report, expect, consider, understand, allege, claim

**Ejemplos con IT:**
- "It is believed that the economy will improve."
  (Se cree que la economía mejorará.)
- "It was reported that the president had resigned."
  (Se reportó que el presidente había renunciado.)

**Ejemplos con sujeto personal:**
- "The economy is believed to be improving."
- "The president was reported to have resigned."
- "He is said to be the richest man in the country."

**Pasado:**
- "He is thought to have left the country." (Se cree que se fue)
- "She was believed to have stolen the money." (Se creía que había robado)`
      },
      {
        title: '2. Pasiva Causativa: HAVE/GET something DONE',
        content: `**Estructura:** HAVE/GET + objeto + participio pasado

Expresa que alguien hace algo por nosotros (servicio):

**HAVE + objeto + participio:**
- "I had my car repaired." (Hice que repararan mi carro.)
- "She's having her hair done." (Le están haciendo el cabello.)
- "We had the house painted last month."

**GET + objeto + participio:**
- "I need to get my phone fixed."
- "She got her passport stolen." (experiencia negativa)
- "We got the work finished on time."

**Diferencia:**
- HAVE: más neutro, servicio arreglado
- GET: más informal, o experiencia (a veces negativa)

**Tiempos:**
- "I'm having it done." (ahora)
- "I had it done." (pasado)
- "I'll have it done." (futuro)
- "I've had it done." (present perfect)`
      },
      {
        title: '3. Pasiva con Infinitivo',
        content: `**Estructura:** Sujeto + TO BE + participio + infinitivo

**Ejemplos:**
- "The report is to be submitted by Friday."
  (El informe debe ser entregado para el viernes.)
- "The building is to be demolished next month."
  (El edificio será demolido el próximo mes.)
- "This medication is not to be taken with alcohol."
  (Este medicamento no debe tomarse con alcohol.)

**Expresando obligación/instrucción:**
- "All forms are to be completed in black ink."
- "Visitors are to report to reception."

**Con need:**
- "The car needs to be washed." = "The car needs washing."`
      },
      {
        title: '4. Pasiva Impersonal',
        content: `**Estructuras formales para generalizar:**

**IT + pasiva + THAT:**
- "It is widely known that smoking is harmful."
- "It has been proven that exercise improves mood."
- "It cannot be denied that changes are needed."

**THERE + pasiva:**
- "There is said to be a treasure hidden here."
- "There are believed to be errors in the report."
- "There was thought to be no solution."

**Pasiva + infinitivo perfecto (para pasado):**
- "He is believed to have been a spy."
- "The artifact is thought to have been made 2000 years ago."`
      },
      {
        title: '5. Pasiva Doble y Estructuras Complejas',
        content: `**Objeto indirecto como sujeto:**
- "I was given a book." (Me dieron un libro.)
- "She was told the news." (Le dijeron las noticias.)
- "He was offered a job." (Le ofrecieron un trabajo.)

**Pasiva con verbos de percepción:**
- "He was seen to enter the building." (formal)
- "He was seen entering the building." (más común)
- "She was heard to say that..." (formal)

**Estructuras pasivas complejas:**
- "The project is expected to have been completed by now."
- "The suspect is thought to have been hiding for months."

**En contexto académico:**
- "It has been argued that..."
- "It should be noted that..."
- "As has been previously mentioned..."`
      }
    ],
    examples: [
      { english: "She is said to be the best candidate.", spanish: "Se dice que ella es la mejor candidata.", explanation: "Pasiva con verbo de reporte + infinitivo." },
      { english: "I had my house painted last week.", spanish: "Hice que pintaran mi casa la semana pasada.", explanation: "Causativa: servicio realizado por otros." },
      { english: "It is believed that the team will win.", spanish: "Se cree que el equipo ganará.", explanation: "It + pasiva con verbo de reporte." },
      { english: "The documents are to be signed immediately.", spanish: "Los documentos deben ser firmados inmediatamente.", explanation: "Pasiva con 'to be' para instrucciones." },
      { english: "He was reported to have fled the country.", spanish: "Se reportó que había huido del país.", explanation: "Pasiva + infinitivo perfecto para pasado." }
    ],
    commonMistakes: [
      { mistake: "I cut my hair yesterday.", correction: "I had my hair cut yesterday.", explanation: "Si alguien te cortó el pelo, usa causativa 'had... cut'." },
      { mistake: "It is believing that...", correction: "It is believed that...", explanation: "Usa el participio (believed), no -ing." },
      { mistake: "He is said to left the country.", correction: "He is said to have left the country.", explanation: "Para pasado, usa infinitivo perfecto (to have left)." }
    ],
    practiceExercises: [
      { question: "Rewrite: People believe he is a genius.", answer: "He is believed to be a genius. / It is believed that he is a genius.", hint: "Pasiva con verbo de reporte" },
      { question: "Complete: I need to ___ my car ___ (repair).", answer: "have/get my car repaired", hint: "Causativa" },
      { question: "Complete: The meeting is ___ (hold) tomorrow.", answer: "to be held", hint: "Pasiva con to be para planes" },
      { question: "Rewrite: They say she won the lottery.", answer: "She is said to have won the lottery.", hint: "Pasiva + infinitivo perfecto para pasado" }
    ],
    summary: `Pasivas avanzadas: IT + is believed/said + that, Sujeto + is believed + to infinitive. Causativa: have/get + objeto + participio. Pasiva con to be: instrucciones. Infinitivo perfecto (to have + pp) para acciones pasadas reportadas.`,
    relatedArticles: ['passive-voice-basic', 'academic-writing', 'formal-english']
  },

  // ==================== INVERSION ====================
  {
    id: 'inversion',
    title: 'Inversión para Énfasis',
    subtitle: 'Estructuras invertidas en inglés formal y literario',
    level: 'C1',
    category: 'grammar',
    tags: ['inversion', 'emphasis', 'formal', 'negative-adverbs'],
    estimatedReadTime: 12,
    introduction: `La inversión es una técnica que coloca el verbo auxiliar antes del sujeto para crear énfasis, dramatismo o formalidad. Es común en inglés literario, periodístico y oraciones que comienzan con expresiones negativas o restrictivas.`,
    sections: [
      {
        title: '1. Inversión con Adverbios Negativos',
        content: `Cuando una oración comienza con un adverbio negativo o restrictivo, se invierte el orden sujeto-verbo:

**NEVER / RARELY / SELDOM:**
- "Never have I seen such beauty." (Nunca he visto tanta belleza.)
- "Rarely do we get such opportunities." (Raramente tenemos tales oportunidades.)
- "Seldom does she complain." (Rara vez se queja.)

**HARDLY / SCARCELY / BARELY:**
- "Hardly had I arrived when it started raining."
- "Scarcely had she spoken when he interrupted."
- "Barely had we started when the power went out."

**AT NO TIME / IN NO WAY / UNDER NO CIRCUMSTANCES:**
- "At no time did he mention the problem."
- "In no way are we responsible."
- "Under no circumstances should you open this door."`
      },
      {
        title: '2. NOT ONLY... BUT ALSO',
        content: `**Estructura:** NOT ONLY + auxiliar + sujeto + verbo, BUT (ALSO)...

**Ejemplos:**
- "Not only did she win the race, but she also broke the record."
- "Not only is he intelligent, but he's also hardworking."
- "Not only have they finished, but they've also started the next project."

**Comparación:**
- Normal: "She not only won the race but also broke the record."
- Con inversión: "Not only did she win the race, but she also broke the record."

**La inversión solo ocurre en la primera cláusula (después de NOT ONLY).**`
      },
      {
        title: '3. Inversión Condicional (sin IF)',
        content: `Podemos omitir IF invirtiendo had/were/should:

**HAD + sujeto + participio:**
- "Had I known, I would have called." = "If I had known..."
- "Had she arrived earlier, she would have seen him."
- "Had it not rained, we would have gone out."

**WERE + sujeto + complemento:**
- "Were I you, I would accept." = "If I were you..."
- "Were she here, she would help."
- "Were it not for the rain, we'd be outside."

**SHOULD + sujeto + verbo:**
- "Should you need help, call me." = "If you should need..."
- "Should any problems arise, contact us immediately."

**Esta estructura es más formal y literaria.**`
      },
      {
        title: '4. Inversión con SO/SUCH',
        content: `**SO + adjetivo + auxiliar + sujeto + THAT:**
- "So beautiful was the sunset that we stopped to watch."
- "So quickly did he run that no one could catch him."
- "So tired was I that I fell asleep immediately."

**SUCH + auxiliar + sujeto + THAT:**
- "Such was his talent that everyone admired him."
- "Such was the impact that it changed everything."

**Comparación:**
- Normal: "The sunset was so beautiful that we stopped."
- Invertido: "So beautiful was the sunset that we stopped."

**Efecto: más dramático, literario, enfático.**`
      },
      {
        title: '5. Otras Inversiones Comunes',
        content: `**ONLY + expresión de tiempo/condición:**
- "Only then did I realize the truth."
- "Only after the meeting did we understand."
- "Only when she left did I see the note."
- "Only by working hard can you succeed."

**NO SOONER... THAN:**
- "No sooner had I arrived than the phone rang."
- "No sooner had we sat down than the show started."

**LITTLE:**
- "Little did he know what would happen."
- "Little do they realize how serious this is."

**HERE/THERE (solo con sustantivos, no pronombres):**
- "Here comes the bus!" (pero NO "Here comes it")
- "There goes my chance!"`
      }
    ],
    examples: [
      { english: "Never have I felt so happy.", spanish: "Nunca me he sentido tan feliz.", explanation: "Inversión con never: auxiliar antes del sujeto." },
      { english: "Not only did she apologize, but she also sent flowers.", spanish: "No solo se disculpó, sino que también envió flores.", explanation: "Not only + inversión en primera cláusula." },
      { english: "Had I known about the traffic, I would have left earlier.", spanish: "De haber sabido del tráfico, habría salido más temprano.", explanation: "Inversión condicional sin IF." },
      { english: "So impressed was the committee that they offered her the job immediately.", spanish: "Tan impresionado estaba el comité que le ofrecieron el trabajo inmediatamente.", explanation: "So + adjetivo + inversión." },
      { english: "Little did they know that their lives were about to change.", spanish: "Poco sabían que sus vidas estaban a punto de cambiar.", explanation: "Inversión con 'little' para énfasis dramático." }
    ],
    commonMistakes: [
      { mistake: "Never I have seen such beauty.", correction: "Never have I seen such beauty.", explanation: "Con adverbios negativos al inicio, invierte: auxiliar + sujeto." },
      { mistake: "Not only she won, but also she broke the record.", correction: "Not only did she win, but she also broke the record.", explanation: "Inversión necesaria después de Not only." },
      { mistake: "Had I knew...", correction: "Had I known...", explanation: "En inversión condicional, usa participio (known), no pasado simple (knew)." }
    ],
    practiceExercises: [
      { question: "Rewrite with inversion: I have never seen such a mess.", answer: "Never have I seen such a mess.", hint: "Never + have + sujeto + participio" },
      { question: "Rewrite without IF: If I had known, I would have helped.", answer: "Had I known, I would have helped.", hint: "Had + sujeto + participio" },
      { question: "Complete: Not only ___ he late, but he also forgot the documents.", answer: "was", hint: "Inversión: Not only + was + sujeto" },
      { question: "Rewrite with inversion: She was so tired that she fell asleep.", answer: "So tired was she that she fell asleep.", hint: "So + adj + was + sujeto + that" }
    ],
    summary: `Inversión para énfasis: con adverbios negativos (never, rarely), not only...but also, condicionales sin IF (had/were/should), so/such...that. Estructura: auxiliar + sujeto + verbo. Común en inglés formal, literario y periodístico.`,
    relatedArticles: ['emphasis-cleft-sentences', 'formal-english', 'conditionals-advanced']
  },

  // =====================================================================
  // LEVEL C2 - PROFICIENCY
  // =====================================================================

  // ==================== CLEFT SENTENCES ====================
  {
    id: 'cleft-sentences',
    title: 'Cleft Sentences: Énfasis Avanzado',
    subtitle: 'It was... that/who y What... is/was para destacar información',
    level: 'C2',
    category: 'grammar',
    tags: ['cleft', 'emphasis', 'it-cleft', 'wh-cleft', 'focus'],
    estimatedReadTime: 12,
    introduction: `Las cleft sentences ("oraciones hendidas") son estructuras que dividen una oración simple para dar énfasis a un elemento específico. Son herramientas sofisticadas para controlar el foco de información en el discurso.`,
    sections: [
      {
        title: '1. IT-Cleft: It is/was... that/who',
        content: `**Estructura:** IT + BE + elemento enfatizado + THAT/WHO + resto

**Para enfatizar el sujeto:**
- Normal: "John broke the window."
- Cleft: "It was John who broke the window." (Fue John quien...)

**Para enfatizar el objeto:**
- Normal: "She bought a car."
- Cleft: "It was a car that she bought." (Fue un carro lo que...)

**Para enfatizar complementos de tiempo/lugar:**
- Normal: "I met her in Paris."
- Cleft: "It was in Paris that I met her."
- Normal: "He called yesterday."
- Cleft: "It was yesterday that he called."

**Nota:** WHO para personas, THAT para todo lo demás.`
      },
      {
        title: '2. WH-Cleft: What... is/was',
        content: `**Estructura:** WHAT + sujeto + verbo + BE + elemento enfatizado

**Para enfatizar el objeto:**
- Normal: "I need a vacation."
- Cleft: "What I need is a vacation." (Lo que necesito es...)

**Para enfatizar la acción:**
- Normal: "She studied all night."
- Cleft: "What she did was study all night." (Lo que hizo fue...)

**Otros pronombres WH-:**
- "Where I want to go is Paris." (Adonde quiero ir es...)
- "When I realized the truth was after the meeting."
- "Why she left is still a mystery."
- "The person who helped me was my neighbor."
- "The thing that bothers me is the noise."`
      },
      {
        title: '3. All-Cleft y Other Variations',
        content: `**ALL... is/was:**
- "All I want is peace and quiet." (Todo lo que quiero es...)
- "All she did was cry." (Todo lo que hizo fue...)
- "All you need is love." (Todo lo que necesitas es...)

**THE REASON... is/was:**
- "The reason I called is to apologize."
- "The reason he left was that he was bored."

**THE THING... is/was:**
- "The thing is, I don't have enough money."
- "The thing that surprised me was his reaction."

**THE WAY... is/was:**
- "The way she spoke was impressive."
- "What I like is the way he explains things."`
      },
      {
        title: '4. Uso Pragmático de Clefts',
        content: `**Para contrastar información:**
- "It wasn't the heat that bothered me; it was the humidity."
- "It's not what you say that matters; it's how you say it."

**Para corregir suposiciones:**
- A: "So John told you?" 
- B: "No, it was Mary who told me."

**Para añadir énfasis emocional:**
- "What really annoys me is when people are late."
- "What I find incredible is that nobody helped."

**En narraciones para crear suspenso:**
- "It was then that I realized the truth."
- "It was at that moment that everything changed."`
      },
      {
        title: '5. Pseudo-Clefts y Reversed Clefts',
        content: `**Pseudo-cleft (WH-cleft):**
- "What I need is more time."
- "What happened was that the car broke down."

**Reversed pseudo-cleft:**
- "More time is what I need."
- "A complete disaster is what it was."

**IT-cleft vs WH-cleft:**
- IT-cleft: enfatiza un elemento específico, tono más neutro
- WH-cleft: prepara al oyente, crea expectativa

**Ejemplo comparativo:**
- "I need more time." (neutral)
- "It's more time that I need." (enfático, corrige)
- "What I need is more time." (introduce tema, prepara)
- "More time is what I need." (énfasis máximo al final)`
      }
    ],
    examples: [
      { english: "It was the noise that woke me up.", spanish: "Fue el ruido lo que me despertó.", explanation: "IT-cleft enfatizando el agente/causa." },
      { english: "What I really wanted was an apology.", spanish: "Lo que realmente quería era una disculpa.", explanation: "WH-cleft enfatizando el objeto deseado." },
      { english: "All I'm asking for is a little patience.", spanish: "Todo lo que pido es un poco de paciencia.", explanation: "ALL-cleft para limitar/simplificar." },
      { english: "It wasn't until I got home that I noticed the problem.", spanish: "No fue hasta que llegué a casa que noté el problema.", explanation: "IT-cleft con 'not until' para énfasis temporal." },
      { english: "What she did was resign without warning.", spanish: "Lo que hizo fue renunciar sin aviso.", explanation: "WH-cleft enfatizando la acción." }
    ],
    commonMistakes: [
      { mistake: "What I need more time.", correction: "What I need is more time.", explanation: "WH-cleft requiere el verbo BE antes del elemento enfatizado." },
      { mistake: "It was John which broke the window.", correction: "It was John who broke the window.", explanation: "Para personas, usa WHO, no WHICH." },
      { mistake: "What I did was worked all night.", correction: "What I did was work all night.", explanation: "Después de 'was', usa infinitivo sin 'to', no participio." }
    ],
    practiceExercises: [
      { question: "Rewrite emphasizing 'the manager': The manager made the decision.", answer: "It was the manager who made the decision.", hint: "It was + elemento + who/that" },
      { question: "Rewrite as WH-cleft: I need more practice.", answer: "What I need is more practice.", hint: "What + sujeto + verbo + is + elemento" },
      { question: "Complete: ___ I can't understand is why she left.", answer: "What", hint: "WH-cleft para objeto" },
      { question: "Rewrite emphasizing 'yesterday': She called yesterday.", answer: "It was yesterday that she called.", hint: "It was + tiempo + that" }
    ],
    summary: `IT-cleft: It is/was + elemento + that/who. WH-cleft: What/Where/etc. + cláusula + is/was + elemento. ALL-cleft: All + cláusula + is/was. Usos: énfasis, contraste, corrección, suspenso narrativo. El elemento después de is/was recibe el foco.`,
    relatedArticles: ['inversion', 'emphasis-techniques', 'discourse-markers']
  },

  // ==================== DISCOURSE MARKERS ====================
  {
    id: 'discourse-markers',
    title: 'Discourse Markers: Conectores del Discurso',
    subtitle: 'Cómo organizar y conectar ideas como un hablante nativo',
    level: 'C2',
    category: 'grammar',
    tags: ['discourse', 'connectors', 'cohesion', 'advanced-speaking'],
    estimatedReadTime: 15,
    introduction: `Los discourse markers (marcadores del discurso) son palabras y frases que organizan, conectan y dan matices al discurso. Dominarlos es esencial para sonar natural y fluido en inglés avanzado.`,
    sections: [
      {
        title: '1. Marcadores de Adición y Refuerzo',
        content: `**Adición:**
- furthermore, moreover, in addition, additionally
- besides, what's more, on top of that
- not only that, but also, as well as

**Refuerzo:**
- indeed, in fact, as a matter of fact
- actually, of course, certainly
- needless to say, obviously

**Ejemplos:**
- "The policy is expensive. Moreover, it's ineffective."
- "He's talented. In fact, he's one of the best."
- "She's qualified. Furthermore, she has experience."`
      },
      {
        title: '2. Marcadores de Contraste y Concesión',
        content: `**Contraste:**
- however, nevertheless, nonetheless
- on the other hand, in contrast, conversely
- whereas, while, whilst

**Concesión:**
- although, even though, despite, in spite of
- having said that, that said, be that as it may
- admittedly, granted

**Ejemplos:**
- "It's expensive. However, it's worth it."
- "Admittedly, the plan has flaws. Nevertheless, we should try."
- "The hotel was nice. Having said that, the service could improve."
- "That said, I see your point."`
      },
      {
        title: '3. Marcadores de Causa, Resultado y Propósito',
        content: `**Causa:**
- because, since, as, for
- due to, owing to, on account of
- given that, seeing that, in view of

**Resultado:**
- therefore, thus, hence, consequently
- as a result, as a consequence
- accordingly, for this reason

**Propósito:**
- in order to, so as to, so that
- with the aim of, for the purpose of
- with a view to

**Ejemplos:**
- "Given the circumstances, we should postpone."
- "Sales dropped; consequently, jobs were cut."
- "In view of recent events, we're reviewing policy."`
      },
      {
        title: '4. Marcadores de Tiempo y Secuencia',
        content: `**Secuencia:**
- first(ly), second(ly), third(ly)
- to begin with, next, then, finally
- subsequently, afterwards, eventually

**Tiempo:**
- meanwhile, in the meantime
- previously, formerly, beforehand
- simultaneously, at the same time

**Resumen/Conclusión:**
- in conclusion, to conclude, to sum up
- in summary, all in all, overall
- in short, in brief, to put it briefly

**Ejemplos:**
- "To begin with, let me explain the background."
- "Meanwhile, the situation was deteriorating."
- "All in all, it was a successful project."`
      },
      {
        title: '5. Marcadores Pragmáticos e Interactivos',
        content: `**Estructurar el discurso:**
- well, so, now, anyway
- right, OK, let me see
- as I was saying, to get back to my point

**Expresar opinión:**
- in my view, in my opinion, to my mind
- as far as I'm concerned, personally
- I would argue that, I tend to think

**Atenuar/Hedging:**
- sort of, kind of, more or less
- to some extent, in a way, so to speak
- I suppose, I guess, I imagine

**Enfatizar:**
- above all, in particular, especially
- indeed, definitely, absolutely
- what's important is that, the key point is

**Ejemplos:**
- "Well, that's an interesting question."
- "To some extent, I agree with you."
- "Above all, we need to focus on quality."`
      }
    ],
    examples: [
      { english: "The project was challenging. Having said that, we learned a lot.", spanish: "El proyecto fue desafiante. Dicho esto, aprendimos mucho.", explanation: "Concesión: reconoce lo anterior, añade perspectiva." },
      { english: "Given that resources are limited, we need to prioritize.", spanish: "Dado que los recursos son limitados, necesitamos priorizar.", explanation: "Marcador de causa formal." },
      { english: "In short, we need to act now.", spanish: "En resumen, necesitamos actuar ahora.", explanation: "Marcador de resumen." },
      { english: "As far as I'm concerned, the decision is final.", spanish: "En lo que a mí respecta, la decisión es final.", explanation: "Expresar opinión personal." },
      { english: "Be that as it may, we still have to try.", spanish: "Sea como sea, aún tenemos que intentarlo.", explanation: "Concesión formal: acepta pero continúa." }
    ],
    commonMistakes: [
      { mistake: "Although it was expensive, but we bought it.", correction: "Although it was expensive, we bought it.", explanation: "No combines ALTHOUGH con BUT." },
      { mistake: "Despite of the rain, we went out.", correction: "Despite the rain, we went out.", explanation: "DESPITE no lleva OF." },
      { mistake: "I will explain firstly the background.", correction: "Firstly, I will explain the background.", explanation: "Los marcadores de secuencia van al inicio." }
    ],
    practiceExercises: [
      { question: "Complete: The plan is risky. ___, I think we should try.", answer: "Nevertheless / However / That said", hint: "Contraste" },
      { question: "Complete: ___ the economic crisis, unemployment rose.", answer: "Due to / Owing to / On account of", hint: "Causa" },
      { question: "Complete: ___, let me summarize the key points.", answer: "To conclude / In conclusion / In summary", hint: "Conclusión" },
      { question: "Complete: She's talented. ___, she's also hardworking.", answer: "Moreover / Furthermore / What's more", hint: "Adición" }
    ],
    summary: `Discourse markers organizan el discurso: adición (moreover, furthermore), contraste (however, nevertheless), causa (due to, given that), resultado (therefore, consequently), secuencia (firstly, finally), opinión (in my view), atenuación (to some extent). Su uso correcto marca fluidez nativa.`,
    relatedArticles: ['academic-writing', 'formal-english', 'cohesion']
  }
];

// Helper function to get articles by level
export const getArticlesByLevel = (level: Article['level']): Article[] => {
  return articles.filter(article => article.level === level);
};

// Helper function to get articles by category
export const getArticlesByCategory = (category: Article['category']): Article[] => {
  return articles.filter(article => article.category === category);
};

// Helper function to search articles
export const searchArticles = (query: string): Article[] => {
  const lowerQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.subtitle.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    article.introduction.toLowerCase().includes(lowerQuery)
  );
};

// Helper function to get related articles
export const getRelatedArticles = (articleId: string): Article[] => {
  const article = articles.find(a => a.id === articleId);
  if (!article) return [];
  return articles.filter(a => article.relatedArticles.includes(a.id));
};

// Helper function to get article by ID
export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

// Helper function to get articles by tag
export const getArticlesByTag = (tag: string): Article[] => {
  return articles.filter(article => 
    article.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

// Helper function to get the most relevant article for an exercise based on its tags
export const getArticleForExercise = (exerciseTags: string[]): Article | null => {
  if (!exerciseTags || exerciseTags.length === 0) return null;
  
  // Tag mapping from exercise tags to article IDs/tags
  const tagToArticleMap: Record<string, string> = {
    'to-be': 'verb-to-be',
    'present-simple': 'present-simple',
    'present-continuous': 'present-continuous',
    'articles': 'articles-a-an-the',
    'possessive': 'possessive-adjectives',
    'past-simple': 'past-simple',
    'present-perfect': 'present-perfect-basic',
    'comparatives': 'comparatives-superlatives',
    'superlatives': 'comparatives-superlatives',
    'future': 'future-going-to',
    'going-to': 'future-going-to',
    'modals': 'modals-basic',
    'can': 'modals-basic',
    'must': 'modals-basic',
    'should': 'modals-basic',
    'prepositions': 'prepositions',
    'past-continuous': 'past-continuous',
    'first-conditional': 'first-conditional',
    'second-conditional': 'second-conditional',
    'passive': 'passive-voice',
    'reported-speech': 'reported-speech',
    'relative-clauses': 'relative-clauses',
    'mixed-conditionals': 'mixed-conditionals',
    'vocabulary': 'vocabulary',
    'food': 'vocabulary',
    'animals': 'vocabulary',
    'family': 'vocabulary',
    'clothes': 'vocabulary',
    'body': 'vocabulary',
    'colors': 'vocabulary',
    'numbers': 'vocabulary',
    'weather': 'vocabulary',
    'professions': 'vocabulary',
    'sports': 'vocabulary',
  };
  
  // Find matching article
  for (const tag of exerciseTags) {
    const articleId = tagToArticleMap[tag.toLowerCase()];
    if (articleId) {
      const article = getArticleById(articleId);
      if (article) return article;
    }
  }
  
  // Fallback: search by tag in articles
  for (const tag of exerciseTags) {
    const matchingArticles = getArticlesByTag(tag);
    if (matchingArticles.length > 0) {
      return matchingArticles[0];
    }
  }
  
  return null;
};

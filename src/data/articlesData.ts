// Comprehensive English Grammar and Vocabulary Articles Data
// Written in a formal, textbook-like style for thorough understanding

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
  estimatedReadTime: number; // in minutes
  introduction: string;
  sections: ArticleSection[];
  examples: ArticleExample[];
  commonMistakes: { mistake: string; correction: string; explanation: string }[];
  practiceExercises: { question: string; answer: string; hint: string }[];
  summary: string;
  relatedArticles: string[];
}

export const articles: Article[] = [
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
        content: `El verbo "to be" se utiliza en múltiples contextos. Comprender estos usos te ayudará a saber cuándo aplicarlo:

**A) Identidad y Definición:**
Se usa para identificar personas, cosas o conceptos.
- "I am a teacher" (Soy profesor)
- "This is a book" (Esto es un libro)

**B) Descripción de Características:**
Para describir cualidades permanentes o temporales.
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

**F) Edad:**
- "I am 25 years old" (Tengo 25 años)
- "She is 30" (Ella tiene 30 años)`
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

**Nota importante:** Con "I am not", solo existe una contracción común: "I'm not". La forma "I amn't" no se utiliza en inglés estándar.`
      },
      {
        title: '4. Forma Interrogativa',
        content: `Para formar preguntas con "to be", invertimos el orden del sujeto y el verbo.

**Estructura:** TO BE + Sujeto + Complemento + ?

**Ejemplos de inversión:**
- "She is a doctor" → "Is she a doctor?"
- "They are at home" → "Are they at home?"
- "You are ready" → "Are you ready?"

**Preguntas con palabras interrogativas (WH-Questions):**
Cuando usamos palabras como What, Where, Who, Why, How, estas van al principio:

- **What** is your name? (¿Cuál es tu nombre?)
- **Where** are you from? (¿De dónde eres?)
- **Who** is that man? (¿Quién es ese hombre?)
- **Why** are you sad? (¿Por qué estás triste?)
- **How** are you? (¿Cómo estás?)

**Respuestas cortas:**
En inglés, es común responder con respuestas cortas:
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
- She was not (wasn't)

**Interrogativo en pasado:**
- Was I late?
- Were you at the party?
- Was she happy?`
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
    summary: `El verbo "to be" es la base del inglés. Recuerda: I→AM, He/She/It→IS, You/We/They→ARE. Para negar, añade NOT después del verbo. Para preguntar, invierte el orden (verbo antes del sujeto). En pasado: I/He/She/It→WAS, You/We/They→WERE. Practica estas formas hasta que sean automáticas.`,
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
    introduction: `El Present Simple (Presente Simple) es uno de los tiempos verbales más utilizados en inglés. Se emplea para describir acciones habituales, rutinas diarias, hechos generales y verdades universales. A diferencia del español, donde las conjugaciones verbales cambian significativamente según la persona, en inglés el Present Simple mantiene la misma forma para casi todos los sujetos, con la importante excepción de la tercera persona del singular.

Este artículo te guiará paso a paso a través de todas las reglas, usos y excepciones del Present Simple.`,
    sections: [
      {
        title: '1. Formación del Present Simple',
        content: `El Present Simple se forma utilizando el verbo en su forma base (infinitivo sin "to"). Sin embargo, hay una regla crucial que debes memorizar:

**Regla de la Tercera Persona (He/She/It):**
Cuando el sujeto es he, she o it (o cualquier sustantivo singular), el verbo añade -S o -ES.

**Conjugación básica con el verbo "work":**

| Sujeto | Verbo |
|--------|-------|
| I | work |
| You | work |
| He | works |
| She | works |
| It | works |
| We | work |
| They | work |

**Reglas para añadir -S/-ES en tercera persona:**

1. **Regla general:** Añadir -S
   - work → works, play → plays, read → reads

2. **Verbos terminados en -s, -ss, -sh, -ch, -x, -o:** Añadir -ES
   - pass → passes, wash → washes, watch → watches
   - fix → fixes, go → goes, do → does

3. **Verbos terminados en consonante + Y:** Cambiar Y por -IES
   - study → studies, carry → carries, try → tries

4. **Verbos terminados en vocal + Y:** Solo añadir -S
   - play → plays, stay → stays, enjoy → enjoys`
      },
      {
        title: '2. Usos del Present Simple',
        content: `El Present Simple tiene varios usos específicos que debes conocer:

**A) Rutinas y Hábitos:**
Acciones que realizamos regularmente.
- "I wake up at 7 AM every day." (Me despierto a las 7 AM todos los días.)
- "She goes to the gym three times a week." (Ella va al gimnasio tres veces por semana.)

**B) Hechos Generales y Verdades Universales:**
Información que siempre es verdad.
- "Water boils at 100 degrees Celsius." (El agua hierve a 100 grados Celsius.)
- "The sun rises in the east." (El sol sale por el este.)

**C) Estados Permanentes:**
Situaciones que no cambian fácilmente.
- "She lives in London." (Ella vive en Londres.)
- "He works for a bank." (Él trabaja para un banco.)

**D) Horarios y Programas:**
Para eventos programados (incluso futuros).
- "The train leaves at 9 PM." (El tren sale a las 9 PM.)
- "The movie starts at 8 o'clock." (La película empieza a las 8.)

**E) Instrucciones y Direcciones:**
- "You turn left and then go straight." (Giras a la izquierda y luego sigues recto.)

**Palabras clave (adverbios de frecuencia):**
always, usually, often, sometimes, rarely, never, every day/week/month, once a week, twice a year`
      },
      {
        title: '3. Forma Negativa',
        content: `Para formar oraciones negativas en Present Simple, utilizamos los auxiliares DO y DOES.

**Estructura:** Sujeto + DO/DOES + NOT + Verbo base

**Regla importante:** Cuando usamos DOES (con he/she/it), el verbo principal vuelve a su forma base (sin -S).

| Sujeto | Auxiliar | Negación | Contracción |
|--------|----------|----------|-------------|
| I | do not | don't | |
| You | do not | don't | |
| He | does not | doesn't | |
| She | does not | doesn't | |
| It | does not | doesn't | |
| We | do not | don't | |
| They | do not | don't | |

**Ejemplos:**
- ✓ "She doesn't like coffee." (Ella no le gusta el café.)
- ✗ "She doesn't likes coffee." ← INCORRECTO (no añadir -S al verbo)

- ✓ "They don't understand Spanish." (Ellos no entienden español.)
- ✓ "I don't work on Sundays." (No trabajo los domingos.)`
      },
      {
        title: '4. Forma Interrogativa',
        content: `Para formar preguntas en Present Simple, también usamos DO y DOES, pero al principio de la oración.

**Estructura:** DO/DOES + Sujeto + Verbo base + ?

| Sujeto | Pregunta |
|--------|----------|
| I | Do I...? |
| You | Do you...? |
| He | Does he...? |
| She | Does she...? |
| It | Does it...? |
| We | Do we...? |
| They | Do they...? |

**Ejemplos:**
- "Does she speak French?" (¿Habla ella francés?)
- "Do you live near here?" (¿Vives cerca de aquí?)
- "Does the bus stop here?" (¿Para el autobús aquí?)

**Respuestas cortas:**
- "Do you like pizza?" — "Yes, I do." / "No, I don't."
- "Does he work here?" — "Yes, he does." / "No, he doesn't."

**Preguntas con WH-:**
- "Where do you work?" (¿Dónde trabajas?)
- "What does she study?" (¿Qué estudia ella?)
- "Why do they always arrive late?" (¿Por qué siempre llegan tarde?)
- "How often does he exercise?" (¿Con qué frecuencia hace ejercicio?)`
      },
      {
        title: '5. Posición de los Adverbios de Frecuencia',
        content: `Los adverbios de frecuencia indican con qué regularidad ocurre una acción. Su posición en la oración es importante.

**Adverbios comunes (de mayor a menor frecuencia):**
- always (siempre) — 100%
- usually (usualmente) — 80%
- often (a menudo) — 70%
- sometimes (a veces) — 50%
- rarely/seldom (raramente) — 20%
- never (nunca) — 0%

**Regla de posición:**
Los adverbios de frecuencia van ANTES del verbo principal, pero DESPUÉS del verbo TO BE.

**Con verbos normales:**
- "I always drink coffee in the morning." ✓
- "She never eats breakfast." ✓
- "They usually arrive on time." ✓

**Con el verbo TO BE:**
- "She is always happy." ✓
- "They are never late." ✓
- "He is usually busy." ✓

**Excepciones:**
Sometimes, usually, y often también pueden ir al principio o final de la oración:
- "Sometimes I work from home."
- "I work from home sometimes."`
      }
    ],
    examples: [
      { english: "I study English every day.", spanish: "Estudio inglés todos los días.", explanation: "Verbo en forma base con I para expresar una rutina." },
      { english: "She works in a hospital.", spanish: "Ella trabaja en un hospital.", explanation: "Añadimos -S al verbo porque el sujeto es she (tercera persona singular)." },
      { english: "He doesn't like vegetables.", spanish: "A él no le gustan las verduras.", explanation: "Negativo con DOESN'T + verbo base (sin -S)." },
      { english: "Do you speak Spanish?", spanish: "¿Hablas español?", explanation: "Pregunta con DO + sujeto + verbo base." },
      { english: "The class starts at 9 AM.", spanish: "La clase empieza a las 9 AM.", explanation: "Horario fijo expresado en Present Simple." },
      { english: "Water freezes at 0°C.", spanish: "El agua se congela a 0°C.", explanation: "Verdad universal/hecho científico." }
    ],
    commonMistakes: [
      { mistake: "She work in an office.", correction: "She works in an office.", explanation: "Con he/she/it, el verbo SIEMPRE lleva -S en presente simple afirmativo." },
      { mistake: "He don't like pizza.", correction: "He doesn't like pizza.", explanation: "Con he/she/it usamos DOESN'T, no DON'T." },
      { mistake: "Does she speaks English?", correction: "Does she speak English?", explanation: "Después de DOES, el verbo va en forma base (sin -S)." },
      { mistake: "I am always go to school.", correction: "I always go to school.", explanation: "No uses TO BE con otros verbos en Present Simple. Solo usa el verbo principal." },
      { mistake: "She studys every night.", correction: "She studies every night.", explanation: "Verbos terminados en consonante + Y: cambia Y por -IES." }
    ],
    practiceExercises: [
      { question: "Complete: My sister ___ (watch) TV every evening.", answer: "watches", hint: "Sister = she, verbo en -ch → añade -ES" },
      { question: "Complete: ___ they live in Madrid?", answer: "Do", hint: "They usa DO en preguntas" },
      { question: "Complete: He ___ (not/understand) French.", answer: "doesn't understand", hint: "He usa DOESN'T + verbo base" },
      { question: "Complete: The bank ___ (open) at 9 AM.", answer: "opens", hint: "The bank = it → añade -S" }
    ],
    summary: `El Present Simple expresa rutinas, hechos y verdades universales. Regla clave: con he/she/it, añade -S/-ES al verbo. Para negar: don't/doesn't + verbo base. Para preguntar: Do/Does + sujeto + verbo base. Recuerda: después de does/doesn't, el verbo NUNCA lleva -S. Los adverbios de frecuencia van antes del verbo principal pero después de TO BE.`,
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
    introduction: `El Present Continuous (también llamado Present Progressive) es el tiempo verbal que utilizamos para describir acciones que están ocurriendo en este preciso momento o durante un período temporal alrededor del presente. Es uno de los tiempos más útiles y frecuentes en el inglés cotidiano.

Este artículo te enseñará cómo formar y usar el Present Continuous correctamente, incluyendo sus diferencias con el Present Simple.`,
    sections: [
      {
        title: '1. Formación del Present Continuous',
        content: `El Present Continuous se forma combinando el verbo TO BE con el verbo principal en su forma -ING (gerundio).

**Estructura:** Sujeto + TO BE (am/is/are) + Verbo-ING

**Conjugación completa:**

| Sujeto | Verbo TO BE | Verbo-ING | Ejemplo |
|--------|-------------|-----------|---------|
| I | am | working | I am working |
| You | are | working | You are working |
| He/She/It | is | working | She is working |
| We | are | working | We are working |
| They | are | working | They are working |

**Reglas para formar el gerundio (-ING):**

1. **Regla general:** Añadir -ING al verbo base
   - work → working, play → playing, read → reading

2. **Verbos terminados en -E:** Eliminar la E y añadir -ING
   - write → writing, make → making, come → coming

3. **Verbos cortos (CVC) terminados en consonante-vocal-consonante:** Duplicar la última consonante
   - run → running, sit → sitting, stop → stopping
   - swim → swimming, get → getting

4. **Verbos terminados en -IE:** Cambiar IE por Y y añadir -ING
   - die → dying, lie → lying, tie → tying

5. **Verbos terminados en -Y:** Solo añadir -ING (no cambia)
   - study → studying, play → playing, enjoy → enjoying`
      },
      {
        title: '2. Usos del Present Continuous',
        content: `El Present Continuous tiene varios usos específicos:

**A) Acciones que ocurren AHORA MISMO:**
En este preciso momento, mientras hablamos.
- "I am reading a book right now." (Estoy leyendo un libro ahora mismo.)
- "Look! It is raining." (¡Mira! Está lloviendo.)

**B) Acciones temporales en progreso:**
Situaciones que están sucediendo alrededor de este período, aunque no exactamente en este segundo.
- "She is studying for her exams this week." (Ella está estudiando para sus exámenes esta semana.)
- "I am working on a new project." (Estoy trabajando en un nuevo proyecto.)

**C) Planes futuros confirmados:**
Para hablar de planes ya organizados para el futuro cercano.
- "I am meeting John tomorrow." (Voy a reunirme con John mañana.)
- "We are flying to Paris next week." (Vamos a volar a París la próxima semana.)

**D) Cambios y tendencias:**
Para describir situaciones que están cambiando.
- "The weather is getting warmer." (El clima se está volviendo más cálido.)
- "Prices are rising every year." (Los precios están subiendo cada año.)

**E) Acciones repetidas que causan molestia (con always):**
- "He is always forgetting his keys!" (¡Siempre está olvidando sus llaves!)
- "She is constantly talking in class!" (¡Constantemente está hablando en clase!)

**Palabras clave:**
now, right now, at the moment, currently, today, this week/month, Look!, Listen!`
      },
      {
        title: '3. Forma Negativa',
        content: `Para formar oraciones negativas, añadimos NOT después del verbo TO BE.

**Estructura:** Sujeto + TO BE + NOT + Verbo-ING

**Ejemplos:**
- "I am not working today." (No estoy trabajando hoy.)
- "She is not (isn't) sleeping." (Ella no está durmiendo.)
- "They are not (aren't) listening." (Ellos no están escuchando.)

**Contracciones comunes:**
- I'm not watching
- He's not / He isn't watching
- They're not / They aren't watching`
      },
      {
        title: '4. Forma Interrogativa',
        content: `Para formar preguntas, invertimos el orden del sujeto y el verbo TO BE.

**Estructura:** TO BE + Sujeto + Verbo-ING + ?

**Ejemplos:**
- "Are you working?" (¿Estás trabajando?)
- "Is she sleeping?" (¿Está ella durmiendo?)
- "What are they doing?" (¿Qué están haciendo?)

**Respuestas cortas:**
- "Are you studying?" — "Yes, I am." / "No, I'm not."
- "Is he coming?" — "Yes, he is." / "No, he isn't."

**Preguntas con WH-:**
- "What are you doing?" (¿Qué estás haciendo?)
- "Where are they going?" (¿Adónde van ellos?)
- "Why is she crying?" (¿Por qué está llorando ella?)`
      },
      {
        title: '5. Verbos que NO se usan en Continuous (Stative Verbs)',
        content: `Algunos verbos en inglés describen ESTADOS, no acciones, y generalmente NO se usan en tiempos continuos. Se llaman "stative verbs" o "verbos de estado".

**Verbos de percepción sensorial:**
- see, hear, smell, taste, feel

**Verbos de opinión/pensamiento:**
- think (cuando significa "creer"), believe, know, understand, remember, forget

**Verbos de emoción:**
- love, like, hate, prefer, want, need

**Verbos de posesión:**
- have (cuando significa "poseer"), own, belong, possess

**Otros:**
- be, seem, appear, mean, cost, contain

**INCORRECTO:** "I am loving this movie." ❌
**CORRECTO:** "I love this movie." ✓

**INCORRECTO:** "She is knowing the answer." ❌
**CORRECTO:** "She knows the answer." ✓

**Excepción:** Algunos verbos pueden ser de estado O de acción según el contexto:
- "I think it's great." (Creo que es genial — opinión) ✓
- "I am thinking about the problem." (Estoy pensando en el problema — proceso mental activo) ✓

- "I have a car." (Tengo un coche — posesión) ✓
- "I am having lunch." (Estoy almorzando — actividad) ✓`
      },
      {
        title: '6. Present Simple vs Present Continuous',
        content: `Es crucial entender cuándo usar cada tiempo:

| Present Simple | Present Continuous |
|----------------|-------------------|
| Rutinas y hábitos | Acciones en progreso ahora |
| Hechos permanentes | Situaciones temporales |
| Verdades universales | Cambios y tendencias |
| Horarios fijos | Planes futuros personales |

**Ejemplos comparativos:**

**Hábito vs Ahora:**
- "I drink coffee every morning." (Bebo café cada mañana — hábito)
- "I am drinking coffee right now." (Estoy bebiendo café ahora mismo — ahora)

**Permanente vs Temporal:**
- "She lives in Paris." (Ella vive en París — permanente)
- "She is living in Paris for a few months." (Está viviendo en París unos meses — temporal)

**General vs Específico:**
- "He works as a teacher." (Trabaja como profesor — general)
- "He is working on a special project today." (Está trabajando en un proyecto especial hoy — específico)`
      }
    ],
    examples: [
      { english: "I am studying English at the moment.", spanish: "Estoy estudiando inglés en este momento.", explanation: "Acción en progreso ahora mismo." },
      { english: "Look! The children are playing in the garden.", spanish: "¡Mira! Los niños están jugando en el jardín.", explanation: "'Look!' indica que la acción ocurre ahora." },
      { english: "She is not working today.", spanish: "Ella no está trabajando hoy.", explanation: "Forma negativa: am/is/are + not + verbo-ING." },
      { english: "Are you coming to the party tonight?", spanish: "¿Vienes a la fiesta esta noche?", explanation: "Pregunta sobre un plan futuro confirmado." },
      { english: "The weather is getting colder.", spanish: "El clima se está volviendo más frío.", explanation: "Describe un cambio en progreso." }
    ],
    commonMistakes: [
      { mistake: "She is work now.", correction: "She is working now.", explanation: "Después de am/is/are, el verbo SIEMPRE lleva -ING." },
      { mistake: "I am wanting a coffee.", correction: "I want a coffee.", explanation: "'Want' es un verbo de estado que no se usa en continuous." },
      { mistake: "He is runing fast.", correction: "He is running fast.", explanation: "Run es CVC → duplicamos la N: running." },
      { mistake: "They are studing.", correction: "They are studying.", explanation: "Study + ING = studying (la Y no cambia)." },
      { mistake: "I am have lunch.", correction: "I am having lunch.", explanation: "'Have' en este contexto (comer) SÍ puede usarse en continuous." }
    ],
    practiceExercises: [
      { question: "Complete: Look! It ___ (rain).", answer: "is raining", hint: "'Look!' indica acción ahora → Present Continuous" },
      { question: "Complete: She ___ (not/work) today.", answer: "is not working / isn't working", hint: "Negativo: is + not + verbo-ING" },
      { question: "Complete: What ___ you ___ (do)?", answer: "are... doing", hint: "Pregunta con ARE + sujeto + verbo-ING" },
      { question: "Complete: They ___ (sit) in the garden.", answer: "are sitting", hint: "Sit es CVC → duplica la T" }
    ],
    summary: `El Present Continuous se forma con AM/IS/ARE + verbo-ING. Se usa para acciones en progreso ahora, situaciones temporales, planes futuros confirmados y cambios. Para negar: am/is/are + not + verbo-ING. Para preguntar: invierte sujeto y verbo TO BE. Recuerda: los verbos de estado (love, know, want, etc.) normalmente NO se usan en continuous.`,
    relatedArticles: ['present-simple', 'verb-to-be', 'past-continuous']
  },

  // ==================== ARTICLES A/AN/THE ====================
  {
    id: 'articles-a-an-the',
    title: 'Los Artículos en Inglés: A, AN y THE',
    subtitle: 'Cuándo usar artículos indefinidos y definidos',
    level: 'A1',
    category: 'grammar',
    tags: ['articles', 'a-an', 'the', 'determiners'],
    estimatedReadTime: 10,
    introduction: `Los artículos son pequeñas palabras que acompañan a los sustantivos y que causan muchos problemas a los hispanohablantes. En español, usamos "un/una" y "el/la/los/las", pero el inglés tiene reglas diferentes que debes aprender para comunicarte correctamente.

Este artículo te enseñará las reglas fundamentales para usar A, AN y THE correctamente.`,
    sections: [
      {
        title: '1. Artículos Indefinidos: A y AN',
        content: `A y AN significan "un" o "una". Se usan con sustantivos singulares contables cuando hablamos de algo por primera vez o de manera general.

**¿Cuándo usar A y cuándo AN?**

La elección depende del SONIDO (no la letra) con el que empieza la siguiente palabra:

**A** → antes de sonido CONSONANTE
- a book, a car, a dog, a house, a university*, a European*

**AN** → antes de sonido VOCAL
- an apple, an egg, an idea, an orange, an hour*, an honest*

*Nota importante: university y European empiezan con sonido /ju/ (consonante), por eso usan A. Hour y honest tienen H muda, empiezan con sonido vocal, por eso usan AN.

**Usos de A/AN:**

1. **Primera mención:** "I saw a dog in the park." (Después: "The dog was very big.")

2. **Profesiones:** "She is a doctor." / "He is an engineer."

3. **Con adjetivos:** "He is a tall man." / "She is an intelligent woman."

4. **Expresiones de cantidad:** "a few, a little, a lot of, a hundred, a thousand"`
      },
      {
        title: '2. Artículo Definido: THE',
        content: `THE es el artículo definido. Se usa cuando hablamos de algo específico que tanto el hablante como el oyente conocen o pueden identificar.

**Usos principales de THE:**

1. **Segunda mención o ya conocido:**
   - "I bought a book. The book is very interesting."

2. **Único en su clase:**
   - "the sun, the moon, the sky, the Earth, the Internet"

3. **Superlatives:**
   - "the best, the biggest, the most important"

4. **Con ordinales:**
   - "the first, the second, the last"

5. **Lugares específicos conocidos:**
   - "the park (el parque que conocemos), the cinema, the bank"

6. **Grupos específicos:**
   - "the rich, the poor, the elderly, the young"

7. **Nombres geográficos específicos:**
   - "the United States, the United Kingdom, the Amazon, the Alps, the Pacific Ocean"

8. **Instrumentos musicales:**
   - "She plays the piano." / "He plays the guitar."`
      },
      {
        title: '3. Cuándo NO usar artículos',
        content: `En inglés, a veces NO usamos ningún artículo. Esto es muy diferente del español.

**NO usamos artículos con:**

1. **Plurales generales:**
   - "Dogs are friendly." (Los perros son amigables — en general)
   - "Books are expensive." (Los libros son caros — en general)

2. **Sustantivos incontables en general:**
   - "Water is essential." (El agua es esencial)
   - "Music makes me happy." (La música me hace feliz)
   - "Love is beautiful." (El amor es hermoso)

3. **Nombres de comidas (en general):**
   - "I had breakfast." / "Dinner is ready."

4. **Días, meses, estaciones:**
   - "on Monday, in January, in summer"

5. **Deportes y juegos:**
   - "I play tennis." / "She plays chess."

6. **Idiomas:**
   - "She speaks Spanish." / "English is important."

7. **La mayoría de países, ciudades, calles:**
   - "I live in Spain." / "Paris is beautiful." / "Oxford Street"

8. **Con possessives y demostrativos:**
   - "my book" (no "the my book")
   - "this car" (no "the this car")`
      },
      {
        title: '4. Casos Especiales y Excepciones',
        content: `Hay algunas situaciones que requieren atención especial:

**Lugares con/sin THE:**

| CON THE | SIN THE |
|---------|---------|
| the cinema | home |
| the hospital (visit) | school (student) |
| the bank | work |
| the airport | church (worship) |
| the station | university (student) |

**Ejemplo:** 
- "She is in hospital." (Está hospitalizada como paciente)
- "She is in the hospital." (Está en el edificio del hospital, visitando)

**Expresiones fijas:**
- "by bus/car/train" (no "by the bus")
- "at home, at work, at school"
- "go to bed, go to work, go to school"

**Títulos y nombres:**
- "President Biden" (sin the delante de título + nombre)
- "the President" (con the si no hay nombre)

**Comidas específicas vs generales:**
- "I like pizza." (en general — sin artículo)
- "The pizza we had yesterday was delicious." (específica — con THE)`
      }
    ],
    examples: [
      { english: "I need a pen.", spanish: "Necesito un bolígrafo.", explanation: "A + consonante, primera mención, no específico." },
      { english: "She is an actress.", spanish: "Ella es actriz.", explanation: "AN + vocal, profesión." },
      { english: "The moon is beautiful tonight.", spanish: "La luna está hermosa esta noche.", explanation: "THE porque solo hay una luna, es única." },
      { english: "I love music.", spanish: "Me encanta la música.", explanation: "Sin artículo porque hablamos de música en general." },
      { english: "Open the door, please.", spanish: "Abre la puerta, por favor.", explanation: "THE porque ambos saben qué puerta es." }
    ],
    commonMistakes: [
      { mistake: "She is teacher.", correction: "She is a teacher.", explanation: "Las profesiones SIEMPRE llevan A/AN en singular." },
      { mistake: "I have a honest friend.", correction: "I have an honest friend.", explanation: "Honest tiene H muda, empieza con sonido vocal → AN." },
      { mistake: "The life is beautiful.", correction: "Life is beautiful.", explanation: "Conceptos generales no llevan THE." },
      { mistake: "I play the tennis.", correction: "I play tennis.", explanation: "Deportes no llevan artículo." },
      { mistake: "The my book is here.", correction: "My book is here.", explanation: "Nunca uses THE + posesivo juntos." }
    ],
    practiceExercises: [
      { question: "Complete: She is ___ engineer.", answer: "an", hint: "Engineer empieza con sonido vocal" },
      { question: "Complete: ___ sun is very hot today.", answer: "The", hint: "Solo hay un sol, es único" },
      { question: "Complete: I love ___ music.", answer: "(nothing)", hint: "Música en general = sin artículo" },
      { question: "Complete: He bought ___ umbrella.", answer: "an", hint: "Umbrella empieza con sonido vocal" }
    ],
    summary: `A/AN son artículos indefinidos: A antes de sonido consonante, AN antes de sonido vocal. THE es el artículo definido para cosas específicas o únicas. No uses artículos con plurales generales, conceptos abstractos, deportes, idiomas o la mayoría de países. Recuerda: lo que importa es el SONIDO inicial, no la letra.`,
    relatedArticles: ['verb-to-be', 'countable-uncountable', 'possessive-adjectives']
  },

  // ==================== POSSESSIVE ADJECTIVES ====================
  {
    id: 'possessive-adjectives',
    title: 'Adjetivos Posesivos: My, Your, His, Her...',
    subtitle: 'Cómo expresar posesión y pertenencia',
    level: 'A1',
    category: 'grammar',
    tags: ['possessive', 'adjectives', 'pronouns', 'my-your-his-her'],
    estimatedReadTime: 8,
    introduction: `Los adjetivos posesivos son palabras que indican a quién pertenece algo. En inglés, estos adjetivos son más simples que en español porque no cambian según el género o número del objeto poseído.

Este artículo te enseñará todos los adjetivos posesivos y cómo usarlos correctamente.`,
    sections: [
      {
        title: '1. Los Adjetivos Posesivos',
        content: `Los adjetivos posesivos en inglés son:

| Pronombre Sujeto | Adjetivo Posesivo | Significado |
|------------------|-------------------|-------------|
| I | my | mi/mis |
| You | your | tu/tus, su/sus (formal) |
| He | his | su/sus (de él) |
| She | her | su/sus (de ella) |
| It | its | su/sus (de ello) |
| We | our | nuestro/a/os/as |
| They | their | su/sus (de ellos/as) |

**Regla fundamental:** El adjetivo posesivo NO cambia según lo que se posee. Solo depende de QUIÉN posee.

- "his book" (su libro — de él)
- "his books" (sus libros — de él)
- "her book" (su libro — de ella)
- "her books" (sus libros — de ella)

Observa: his y her no cambian aunque el objeto sea singular o plural.`
      },
      {
        title: '2. Uso Correcto',
        content: `Los adjetivos posesivos siempre van ANTES del sustantivo:

**Estructura:** Posesivo + Sustantivo

**Ejemplos correctos:**
- "my car" (mi coche)
- "your house" (tu casa)
- "his phone" (su teléfono — de él)
- "her name" (su nombre — de ella)
- "its color" (su color — de una cosa)
- "our family" (nuestra familia)
- "their children" (sus hijos — de ellos)

**IMPORTANTE: Nunca uses artículos con posesivos**
- ❌ "the my book"
- ✓ "my book"

**El español vs el inglés:**
En español decimos: "Me duele LA cabeza"
En inglés decimos: "My head hurts" (no "The my head")

En español: "Lavo LOS dientes"
En inglés: "I brush my teeth" (no "the teeth")`
      },
      {
        title: '3. His vs Her: Clarificando la Confusión',
        content: `Uno de los errores más comunes de hispanohablantes es confundir HIS y HER.

**Regla clave:** 
- **HIS** = el poseedor es MASCULINO (él)
- **HER** = el poseedor es FEMENINO (ella)

No importa si el objeto es masculino o femenino; lo que importa es QUIÉN posee.

**Ejemplos:**

Juan tiene un coche. → "His car is red." (Su coche es rojo — de Juan, masculino)
María tiene un coche. → "Her car is blue." (Su coche es azul — de María, femenino)

Juan tiene una casa. → "His house is big." (Su casa es grande — de Juan)
María tiene una casa. → "Her house is small." (Su casa es pequeña — de María)

**Pregunta clave:** ¿QUIÉN es el dueño?
- Si es HE (él) → HIS
- Si es SHE (ella) → HER`
      },
      {
        title: '4. Its vs It\'s',
        content: `Este es uno de los errores más comunes en inglés, incluso para hablantes nativos.

**ITS** (sin apóstrofe) = adjetivo posesivo (de ello/de la cosa)
- "The dog wagged its tail." (El perro movió su cola.)
- "The company changed its name." (La compañía cambió su nombre.)

**IT'S** (con apóstrofe) = contracción de "IT IS" o "IT HAS"
- "It's a beautiful day." = "It is a beautiful day."
- "It's been a long time." = "It has been a long time."

**Truco para recordar:**
Si puedes reemplazarlo por "it is", usa IT'S.
Si no, usa ITS.

- "The cat is licking ___ paws." → ¿"it is paws"? No tiene sentido → ITS
- "___ raining outside." → ¿"It is raining"? Sí → IT'S`
      },
      {
        title: '5. Your vs You\'re / Their vs They\'re',
        content: `Similar a its/it's, hay otras confusiones comunes:

**YOUR** = adjetivo posesivo (tu/tus)
- "Your book is on the table."

**YOU'RE** = contracción de "YOU ARE"
- "You're very kind." = "You are very kind."

---

**THEIR** = adjetivo posesivo (su/sus — de ellos)
- "Their house is beautiful."

**THEY'RE** = contracción de "THEY ARE"
- "They're coming to the party." = "They are coming."

**THERE** = adverbio de lugar (allí/ahí)
- "The book is over there."

**Truco:** Si puedes reemplazarlo por "you are" o "they are", usa la contracción con apóstrofe.`
      }
    ],
    examples: [
      { english: "This is my sister.", spanish: "Esta es mi hermana.", explanation: "MY porque el hablante (I) es el poseedor." },
      { english: "John loves his mother.", spanish: "John ama a su madre.", explanation: "HIS porque John (he) es el poseedor." },
      { english: "Maria forgot her keys.", spanish: "María olvidó sus llaves.", explanation: "HER porque Maria (she) es la poseedora." },
      { english: "The cat is eating its food.", spanish: "El gato está comiendo su comida.", explanation: "ITS porque el gato (it) es el poseedor." },
      { english: "We love our country.", spanish: "Amamos nuestro país.", explanation: "OUR porque nosotros (we) somos los poseedores." }
    ],
    commonMistakes: [
      { mistake: "Maria loves his mother.", correction: "Maria loves her mother.", explanation: "Maria es SHE, por lo tanto usamos HER, no HIS." },
      { mistake: "The dog wagged it's tail.", correction: "The dog wagged its tail.", explanation: "Posesivo = ITS (sin apóstrofe). IT'S = it is." },
      { mistake: "This is the my book.", correction: "This is my book.", explanation: "Nunca uses THE + posesivo juntos." },
      { mistake: "John and Mary love his car.", correction: "John and Mary love their car.", explanation: "John AND Mary = they, por lo tanto usamos THEIR." },
      { mistake: "Your coming with us?", correction: "You're coming with us?", explanation: "You're = you are. Your = tu/tus (posesivo)." }
    ],
    practiceExercises: [
      { question: "Complete: Peter loves ___ dog.", answer: "his", hint: "Peter = he → posesivo HIS" },
      { question: "Complete: Sarah is doing ___ homework.", answer: "her", hint: "Sarah = she → posesivo HER" },
      { question: "Complete: The bird is in ___ nest.", answer: "its", hint: "Bird = it → posesivo ITS (sin apóstrofe)" },
      { question: "Complete: ___ a nice day today. (it is)", answer: "It's", hint: "It is = IT'S (con apóstrofe)" }
    ],
    summary: `Los adjetivos posesivos (my, your, his, her, its, our, their) van antes del sustantivo y no cambian según el género o número del objeto. La clave es identificar QUIÉN es el poseedor: HIS (de él), HER (de ella). Recuerda: ITS (posesivo) vs IT'S (it is), YOUR vs YOU'RE, THEIR vs THEY'RE.`,
    relatedArticles: ['verb-to-be', 'articles-a-an-the', 'subject-pronouns']
  },

  // ==================== PAST SIMPLE ====================
  {
    id: 'past-simple',
    title: 'Past Simple: El Tiempo Pasado en Inglés',
    subtitle: 'Cómo hablar de acciones completadas en el pasado',
    level: 'A2',
    category: 'grammar',
    tags: ['past-simple', 'tenses', 'verbs', 'regular', 'irregular'],
    estimatedReadTime: 15,
    introduction: `El Past Simple (Pasado Simple) es el tiempo verbal que utilizamos para describir acciones que comenzaron y terminaron en un momento específico del pasado. Es uno de los tiempos más utilizados en inglés para narrar historias, describir experiencias pasadas y hablar de eventos históricos.

Este artículo te enseñará a dominar el Past Simple con verbos regulares e irregulares.`,
    sections: [
      {
        title: '1. Formación del Past Simple: Verbos Regulares',
        content: `Los verbos regulares forman el pasado añadiendo -ED al final del verbo base.

**Regla general:** Verbo base + ED

**Reglas de ortografía:**

1. **Regla general:** Añadir -ED
   - work → worked, play → played, watch → watched

2. **Verbos terminados en -E:** Solo añadir -D
   - live → lived, dance → danced, love → loved

3. **Verbos terminados en consonante + Y:** Cambiar Y por -IED
   - study → studied, carry → carried, try → tried

4. **Verbos terminados en vocal + Y:** Solo añadir -ED
   - play → played, stay → stayed, enjoy → enjoyed

5. **Verbos cortos (CVC) terminados en consonante-vocal-consonante:** Duplicar la última consonante + ED
   - stop → stopped, plan → planned, prefer → preferred

**Pronunciación de -ED:**
- /t/ después de sonidos sordos (k, p, s, sh, ch, f): worked, stopped
- /d/ después de sonidos sonoros y vocales: played, lived
- /ɪd/ después de t o d: wanted, needed`
      },
      {
        title: '2. Verbos Irregulares',
        content: `Muchos verbos comunes tienen formas pasadas irregulares que debes memorizar.

**Verbos irregulares más comunes:**

| Infinitivo | Pasado | Significado |
|------------|--------|-------------|
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
| read | read* | leer |
| speak | spoke | hablar |
| meet | met | conocer |
| leave | left | dejar/salir |
| begin | began | empezar |
| feel | felt | sentir |
| put | put* | poner |
| cut | cut* | cortar |

*Nota: Algunos verbos no cambian (put, cut, read). Read se pronuncia /red/ en pasado.`
      },
      {
        title: '3. Usos del Past Simple',
        content: `El Past Simple tiene varios usos específicos:

**A) Acciones completadas en el pasado:**
Con un tiempo específico.
- "I visited Paris last year." (Visité París el año pasado.)
- "She arrived at 8 o'clock." (Ella llegó a las 8.)

**B) Series de acciones pasadas:**
Acciones consecutivas.
- "I woke up, had breakfast, and went to work."
(Me desperté, desayuné y fui al trabajo.)

**C) Estados pasados:**
Situaciones que ya no son verdad.
- "I lived in London for 5 years." (Viví en Londres 5 años — ya no)
- "She was a teacher." (Ella era profesora — ya no lo es)

**D) Hábitos pasados:**
Acciones repetidas en el pasado.
- "When I was young, I played football every day."
(Cuando era joven, jugaba fútbol todos los días.)

**Palabras clave:**
yesterday, last night/week/month/year, ago (hace), in 2020, when I was..., that day, then`
      },
      {
        title: '4. Forma Negativa',
        content: `Para formar oraciones negativas usamos DID + NOT (DIDN'T).

**Estructura:** Sujeto + DID NOT (DIDN'T) + Verbo BASE

**Regla crucial:** Después de DID/DIDN'T, el verbo SIEMPRE va en forma base (infinitivo sin to).

**Ejemplos:**
- ✓ "She didn't go to the party." (Ella no fue a la fiesta.)
- ✗ "She didn't went to the party." ← INCORRECTO

- ✓ "I didn't see him yesterday." (No lo vi ayer.)
- ✗ "I didn't saw him yesterday." ← INCORRECTO

**Conjugación:**
| Sujeto | Negativo |
|--------|----------|
| I | didn't work |
| You | didn't work |
| He/She/It | didn't work |
| We | didn't work |
| They | didn't work |

Observa: DID es igual para todos los sujetos (no hay "dids" para he/she/it).`
      },
      {
        title: '5. Forma Interrogativa',
        content: `Para formar preguntas usamos DID al principio.

**Estructura:** DID + Sujeto + Verbo BASE + ?

**Ejemplos:**
- "Did you see the movie?" (¿Viste la película?)
- "Did she call you?" (¿Te llamó ella?)
- "Did they arrive on time?" (¿Llegaron a tiempo?)

**Respuestas cortas:**
- "Did you like it?" — "Yes, I did." / "No, I didn't."
- "Did he come?" — "Yes, he did." / "No, he didn't."

**Preguntas con WH-:**
- "What did you do yesterday?" (¿Qué hiciste ayer?)
- "Where did she go?" (¿Adónde fue ella?)
- "When did they arrive?" (¿Cuándo llegaron?)
- "Why did he leave?" (¿Por qué se fue él?)

**Excepción con WHO/WHAT como sujeto:**
Cuando WHO o WHAT son el sujeto, NO usamos DID:
- "Who called you?" (¿Quién te llamó?) — Who es sujeto
- "What happened?" (¿Qué pasó?) — What es sujeto`
      },
      {
        title: '6. El Verbo TO BE en Pasado',
        content: `El verbo TO BE tiene formas especiales en pasado: WAS y WERE.

**Conjugación:**
| Sujeto | Pasado de TO BE |
|--------|-----------------|
| I | was |
| You | were |
| He/She/It | was |
| We | were |
| They | were |

**Negativo:** was not (wasn't), were not (weren't)
- "I wasn't at home." (No estaba en casa.)
- "They weren't happy." (No estaban felices.)

**Interrogativo:** Invertir sujeto y verbo
- "Was she at the party?" (¿Estaba ella en la fiesta?)
- "Were you tired?" (¿Estabas cansado?)

**IMPORTANTE:** TO BE no usa DID en pasado:
- ✓ "Was he sick?" 
- ✗ "Did he was sick?" ← INCORRECTO`
      }
    ],
    examples: [
      { english: "I watched a movie last night.", spanish: "Vi una película anoche.", explanation: "Verbo regular: watch → watched. Acción pasada con tiempo específico." },
      { english: "She went to Paris in 2019.", spanish: "Ella fue a París en 2019.", explanation: "Verbo irregular: go → went." },
      { english: "They didn't come to the meeting.", spanish: "Ellos no vinieron a la reunión.", explanation: "Negativo: didn't + verbo base (come, no 'came')." },
      { english: "Did you enjoy the party?", spanish: "¿Disfrutaste la fiesta?", explanation: "Pregunta: Did + sujeto + verbo base." },
      { english: "I was very tired yesterday.", spanish: "Estaba muy cansado ayer.", explanation: "Verbo TO BE en pasado: was." }
    ],
    commonMistakes: [
      { mistake: "She didn't went home.", correction: "She didn't go home.", explanation: "Después de DIDN'T, el verbo siempre va en forma BASE." },
      { mistake: "Did he was at the party?", correction: "Was he at the party?", explanation: "TO BE no usa DID. Solo invertimos: Was he...?" },
      { mistake: "I goed to school yesterday.", correction: "I went to school yesterday.", explanation: "Go es irregular: go → went (no 'goed')." },
      { mistake: "He putted the book on the table.", correction: "He put the book on the table.", explanation: "Put es irregular y no cambia: put → put." },
      { mistake: "I readed the book.", correction: "I read the book.", explanation: "Read es irregular pero se escribe igual (se pronuncia /red/)." }
    ],
    practiceExercises: [
      { question: "Complete: She ___ (visit) her grandmother last week.", answer: "visited", hint: "Verbo regular: visit + ED" },
      { question: "Complete: They ___ (not/see) the accident.", answer: "didn't see", hint: "Negativo: didn't + verbo base" },
      { question: "Complete: ___ you ___ (buy) a new car?", answer: "Did... buy", hint: "Pregunta: Did + sujeto + verbo base" },
      { question: "Complete: He ___ (be) sick yesterday.", answer: "was", hint: "TO BE pasado con he = was" }
    ],
    summary: `El Past Simple describe acciones completadas en el pasado. Verbos regulares: +ED. Verbos irregulares: memorizar (go→went, have→had, etc.). Negativo: didn't + verbo base. Preguntas: Did + sujeto + verbo base. Recuerda: después de did/didn't, NUNCA uses el verbo en pasado. TO BE usa was/were y no necesita DID.`,
    relatedArticles: ['present-simple', 'present-perfect', 'past-continuous']
  },

  // ==================== MODAL VERBS: CAN/COULD ====================
  {
    id: 'modal-can-could',
    title: 'Verbos Modales: CAN y COULD',
    subtitle: 'Cómo expresar habilidad, permiso y posibilidad',
    level: 'A1',
    category: 'grammar',
    tags: ['modals', 'can', 'could', 'ability', 'permission'],
    estimatedReadTime: 10,
    introduction: `CAN y COULD son verbos modales fundamentales en inglés. Se utilizan para expresar habilidad (lo que puedes o podrías hacer), permiso (lo que está permitido) y posibilidad (lo que puede suceder). Son esenciales para la comunicación diaria.

Este artículo te enseñará a usar CAN y COULD correctamente en todas sus formas y contextos.`,
    sections: [
      {
        title: '1. Características de los Verbos Modales',
        content: `Los verbos modales tienen características especiales que los diferencian de otros verbos:

**Reglas fundamentales:**

1. **No cambian con el sujeto:** No añaden -S en tercera persona.
   - ✓ "She can swim." 
   - ✗ "She cans swim." ← INCORRECTO

2. **Siempre van seguidos de verbo base:** Sin "to".
   - ✓ "I can speak English."
   - ✗ "I can to speak English." ← INCORRECTO

3. **Forman negativo e interrogativo sin auxiliar:**
   - Negativo: can + not = cannot (can't)
   - Interrogativo: Can you...?

4. **No tienen infinitivo:** No existe "to can".
   - Para futuro usamos: "be able to"
   - "I will be able to help you." (Podré ayudarte.)`
      },
      {
        title: '2. Usos de CAN',
        content: `CAN se usa en presente para expresar:

**A) Habilidad/Capacidad:**
Lo que sabes o puedes hacer.
- "I can swim." (Puedo/Sé nadar.)
- "She can speak three languages." (Ella puede hablar tres idiomas.)

**B) Permiso (informal):**
Lo que está permitido.
- "You can use my computer." (Puedes usar mi computadora.)
- "Can I sit here?" (¿Puedo sentarme aquí?)

**C) Posibilidad:**
Lo que puede suceder.
- "It can rain in summer." (Puede llover en verano.)
- "Anyone can make mistakes." (Cualquiera puede cometer errores.)

**D) Peticiones (informal):**
- "Can you help me?" (¿Puedes ayudarme?)
- "Can you open the window?" (¿Puedes abrir la ventana?)

**E) Ofertas:**
- "Can I help you?" (¿Puedo ayudarte?)
- "Can I get you something to drink?" (¿Puedo traerte algo de beber?)`
      },
      {
        title: '3. Usos de COULD',
        content: `COULD es la forma pasada de CAN, pero también tiene otros usos:

**A) Habilidad pasada:**
Lo que podías hacer en el pasado.
- "I could swim when I was 5." (Podía nadar cuando tenía 5 años.)
- "She could play piano as a child." (Ella podía tocar piano de niña.)

**B) Permiso y peticiones (más formal/cortés que can):**
- "Could I use your phone?" (¿Podría usar tu teléfono?)
- "Could you repeat that, please?" (¿Podría repetir eso, por favor?)

**C) Posibilidad presente/futura:**
Posibilidad menos segura que con CAN.
- "It could rain tomorrow." (Podría llover mañana.)
- "She could be at home." (Ella podría estar en casa.)

**D) Sugerencias:**
- "We could go to the cinema." (Podríamos ir al cine.)
- "You could try calling him." (Podrías intentar llamarlo.)

**E) Crítica cortés:**
- "You could be more careful." (Podrías ser más cuidadoso.)`
      },
      {
        title: '4. Forma Negativa',
        content: `**CAN NOT / CANNOT / CAN'T:**

Las tres formas son correctas:
- "I cannot understand." (formal)
- "I can not understand." (menos común)
- "I can't understand." (coloquial)

**COULD NOT / COULDN'T:**
- "She couldn't come to the party." (No pudo venir a la fiesta.)
- "I couldn't find my keys." (No pude encontrar mis llaves.)

**Significados específicos en negativo:**

CAN'T = incapacidad o imposibilidad
- "I can't swim." (No sé nadar.)
- "You can't park here." (No puedes aparcar aquí — prohibido.)

COULDN'T = no fue posible en el pasado
- "I couldn't sleep last night." (No pude dormir anoche.)`
      },
      {
        title: '5. Forma Interrogativa',
        content: `Para preguntar, simplemente colocamos CAN/COULD al principio:

**Estructura:** CAN/COULD + Sujeto + Verbo base + ?

**Con CAN:**
- "Can you swim?" (¿Sabes nadar?)
- "Can she drive?" (¿Sabe ella conducir?)
- "Can I help you?" (¿Puedo ayudarte?)

**Con COULD (más formal/cortés):**
- "Could you help me, please?" (¿Podría ayudarme, por favor?)
- "Could I have some water?" (¿Podría tomar algo de agua?)

**Respuestas:**
- "Can you come?" — "Yes, I can." / "No, I can't."
- "Could you help?" — "Yes, I could." / "No, I couldn't." (o simplemente "Of course!" / "Sorry, I can't.")

**Diferencia de cortesía:**
- "Can you pass the salt?" (informal, entre amigos)
- "Could you pass the salt?" (más cortés, con desconocidos)`
      },
      {
        title: '6. BE ABLE TO: Alternativa a CAN',
        content: `Como CAN no tiene infinitivo ni participio, usamos "be able to" en ciertas situaciones:

**Después de otros modales:**
- ✓ "You will be able to speak English soon."
- ✗ "You will can speak English." ← INCORRECTO

**En infinitivo:**
- ✓ "I want to be able to help."
- ✗ "I want to can help." ← INCORRECTO

**En present perfect:**
- ✓ "I have been able to finish the project."
- ✗ "I have could finish." ← INCORRECTO

**En gerundio:**
- ✓ "Being able to travel is wonderful."

**Diferencia sutil:**
- CAN = habilidad general: "I can swim."
- BE ABLE TO = logro específico: "I was able to finish on time." (logré terminar)`
      }
    ],
    examples: [
      { english: "I can play the guitar.", spanish: "Puedo/Sé tocar la guitarra.", explanation: "CAN para habilidad en presente." },
      { english: "She could speak French when she was young.", spanish: "Ella podía hablar francés cuando era joven.", explanation: "COULD para habilidad en pasado." },
      { english: "Could you help me, please?", spanish: "¿Podría ayudarme, por favor?", explanation: "COULD para petición cortés." },
      { english: "I can't find my keys.", spanish: "No puedo encontrar mis llaves.", explanation: "CAN'T para incapacidad." },
      { english: "It could rain later.", spanish: "Podría llover más tarde.", explanation: "COULD para posibilidad." }
    ],
    commonMistakes: [
      { mistake: "She can speaks English.", correction: "She can speak English.", explanation: "Después de CAN nunca añadimos -S al verbo." },
      { mistake: "I can to swim.", correction: "I can swim.", explanation: "Después de CAN el verbo va en forma base, sin TO." },
      { mistake: "I will can help you.", correction: "I will be able to help you.", explanation: "CAN no tiene futuro. Usa 'will be able to'." },
      { mistake: "Can you to open the door?", correction: "Can you open the door?", explanation: "Después de CAN, verbo base sin TO." },
      { mistake: "I could not to understand.", correction: "I couldn't understand.", explanation: "Después de COULDN'T, verbo base sin TO." }
    ],
    practiceExercises: [
      { question: "Complete: ___ you swim?", answer: "Can", hint: "Pregunta sobre habilidad en presente" },
      { question: "Complete: She ___ ride a bike when she was 4.", answer: "could", hint: "Habilidad en pasado" },
      { question: "Complete: I ___ (not) find the restaurant.", answer: "couldn't / could not", hint: "Negativo de could" },
      { question: "Complete: He ___ (be able to) come tomorrow.", answer: "will be able to", hint: "CAN en futuro = will be able to" }
    ],
    summary: `CAN expresa habilidad, permiso y posibilidad en presente. COULD es su pasado y también se usa para peticiones corteses y posibilidades. Reglas clave: no añaden -S, van seguidos de verbo base (sin TO), no usan auxiliares para negativo/interrogativo. Para futuro, usa "will be able to".`,
    relatedArticles: ['modal-must-have-to', 'modal-should', 'verb-to-be']
  }
];

// Helper functions
export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getArticlesByLevel(level: Article['level']): Article[] {
  return articles.filter(article => article.level === level);
}

export function getArticlesByCategory(category: Article['category']): Article[] {
  return articles.filter(article => article.category === category);
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter(article => article.tags.includes(tag));
}

export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.subtitle.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// Get relevant article for an exercise based on tags
export function getArticleForExercise(exerciseTags: string[]): Article | undefined {
  // Try to find an article that matches one of the exercise tags
  for (const tag of exerciseTags) {
    const article = articles.find(a => a.tags.includes(tag));
    if (article) return article;
  }
  return undefined;
}

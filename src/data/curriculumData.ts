export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1";

export interface Skill {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  subSkills: SubSkill[];
}

export interface SubSkill {
  id: string;
  title: string;
  completed: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export interface LevelCurriculum {
  level: CEFRLevel;
  title: string;
  description: string;
  targetVocabulary: string;
  estimatedHours: number;
  categories: SkillCategory[];
}

export const curriculumData: LevelCurriculum[] = [
  {
    level: "A1",
    title: "Principiante",
    description: "Comunicación básica para situaciones cotidianas simples",
    targetVocabulary: "500-700 palabras",
    estimatedHours: 80,
    categories: [
      {
        id: "a1-vocabulary",
        title: "Vocabulario",
        icon: "📚",
        description: "Palabras esenciales para sobrevivir",
        skills: [
          {
            id: "a1-vocab-1",
            title: "Números y colores",
            description: "Números 1-100, colores básicos",
            completed: false,
            subSkills: [
              { id: "a1-v1-1", title: "Números 1-20", completed: false },
              { id: "a1-v1-2", title: "Números 20-100", completed: false },
              { id: "a1-v1-3", title: "Colores primarios", completed: false },
            ]
          },
          {
            id: "a1-vocab-2",
            title: "Familia y personas",
            description: "Miembros de la familia, descripciones básicas",
            completed: false,
            subSkills: [
              { id: "a1-v2-1", title: "Familia inmediata", completed: false },
              { id: "a1-v2-2", title: "Profesiones básicas", completed: false },
            ]
          },
          {
            id: "a1-vocab-3",
            title: "Objetos cotidianos",
            description: "Casa, escuela, oficina",
            completed: false,
            subSkills: [
              { id: "a1-v3-1", title: "Objetos de casa", completed: false },
              { id: "a1-v3-2", title: "Objetos de clase", completed: false },
            ]
          },
          {
            id: "a1-vocab-4",
            title: "Comida y bebida básica",
            description: "Alimentos esenciales, bebidas comunes",
            completed: false,
            subSkills: [
              { id: "a1-v4-1", title: "Frutas y verduras", completed: false },
              { id: "a1-v4-2", title: "Bebidas", completed: false },
            ]
          },
        ]
      },
      {
        id: "a1-grammar",
        title: "Gramática",
        icon: "🧩",
        description: "Estructuras básicas del inglés",
        skills: [
          {
            id: "a1-gram-1",
            title: "Verbo To Be",
            description: "Afirmativo, negativo, interrogativo",
            completed: false,
            subSkills: [
              { id: "a1-g1-1", title: "Formas afirmativas", completed: false },
              { id: "a1-g1-2", title: "Formas negativas", completed: false },
              { id: "a1-g1-3", title: "Preguntas con To Be", completed: false },
            ]
          },
          {
            id: "a1-gram-2",
            title: "Present Simple",
            description: "Rutinas y hábitos diarios",
            completed: false,
            subSkills: [
              { id: "a1-g2-1", title: "Verbos en presente", completed: false },
              { id: "a1-g2-2", title: "Tercera persona -s/-es", completed: false },
              { id: "a1-g2-3", title: "Do/Does en preguntas", completed: false },
            ]
          },
          {
            id: "a1-gram-3",
            title: "Present Continuous",
            description: "Acciones en progreso ahora",
            completed: false,
            subSkills: [
              { id: "a1-g3-1", title: "Formar -ing", completed: false },
              { id: "a1-g3-2", title: "Am/Is/Are + -ing", completed: false },
            ]
          },
          {
            id: "a1-gram-4",
            title: "Artículos y pronombres",
            description: "A/An, The, pronombres personales",
            completed: false,
            subSkills: [
              { id: "a1-g4-1", title: "A vs An", completed: false },
              { id: "a1-g4-2", title: "Uso de The", completed: false },
              { id: "a1-g4-3", title: "I, You, He, She, It, We, They", completed: false },
            ]
          },
        ]
      },
      {
        id: "a1-speaking",
        title: "Expresión Oral",
        icon: "🗣️",
        description: "Comunicarse en situaciones simples",
        skills: [
          {
            id: "a1-speak-1",
            title: "Presentarse",
            description: "Nombre, edad, nacionalidad, profesión",
            completed: false,
            subSkills: [
              { id: "a1-s1-1", title: "Decir tu nombre", completed: false },
              { id: "a1-s1-2", title: "Decir de dónde eres", completed: false },
            ]
          },
          {
            id: "a1-speak-2",
            title: "Saludos y despedidas",
            description: "Hello, goodbye, nice to meet you",
            completed: false,
            subSkills: [
              { id: "a1-s2-1", title: "Saludos formales", completed: false },
              { id: "a1-s2-2", title: "Saludos informales", completed: false },
            ]
          },
          {
            id: "a1-speak-3",
            title: "Pedir cosas básicas",
            description: "Can I have...? Where is...?",
            completed: false,
            subSkills: [
              { id: "a1-s3-1", title: "Pedir en restaurante", completed: false },
              { id: "a1-s3-2", title: "Preguntar ubicación", completed: false },
            ]
          },
        ]
      },
      {
        id: "a1-listening",
        title: "Comprensión Auditiva",
        icon: "👂",
        description: "Entender mensajes simples y claros",
        skills: [
          {
            id: "a1-list-1",
            title: "Palabras individuales",
            description: "Reconocer palabras comunes",
            completed: false,
            subSkills: [
              { id: "a1-l1-1", title: "Números hablados", completed: false },
              { id: "a1-l1-2", title: "Nombres y lugares", completed: false },
            ]
          },
          {
            id: "a1-list-2",
            title: "Instrucciones simples",
            description: "Open your book, sit down",
            completed: false,
            subSkills: [
              { id: "a1-l2-1", title: "Instrucciones de clase", completed: false },
            ]
          },
        ]
      },
      {
        id: "a1-reading",
        title: "Comprensión Lectora",
        icon: "📖",
        description: "Leer textos muy cortos y simples",
        skills: [
          {
            id: "a1-read-1",
            title: "Letreros y señales",
            description: "Exit, Open, Closed, No smoking",
            completed: false,
            subSkills: [
              { id: "a1-r1-1", title: "Señales de tráfico", completed: false },
              { id: "a1-r1-2", title: "Letreros de tiendas", completed: false },
            ]
          },
          {
            id: "a1-read-2",
            title: "Formularios simples",
            description: "Name, Age, Address, Phone",
            completed: false,
            subSkills: [
              { id: "a1-r2-1", title: "Rellenar formularios", completed: false },
            ]
          },
        ]
      },
      {
        id: "a1-writing",
        title: "Expresión Escrita",
        icon: "✍️",
        description: "Escribir frases y datos personales",
        skills: [
          {
            id: "a1-write-1",
            title: "Datos personales",
            description: "Escribir nombre, dirección, email",
            completed: false,
            subSkills: [
              { id: "a1-w1-1", title: "Completar formularios", completed: false },
            ]
          },
          {
            id: "a1-write-2",
            title: "Frases cortas",
            description: "Oraciones simples con sujeto y verbo",
            completed: false,
            subSkills: [
              { id: "a1-w2-1", title: "Descripciones de una línea", completed: false },
            ]
          },
        ]
      },
    ]
  },
  {
    level: "A2",
    title: "Elemental",
    description: "Comunicación en situaciones cotidianas con más confianza",
    targetVocabulary: "1,000-1,500 palabras",
    estimatedHours: 180,
    categories: [
      {
        id: "a2-vocabulary",
        title: "Vocabulario",
        icon: "📚",
        description: "Vocabulario para situaciones cotidianas",
        skills: [
          {
            id: "a2-vocab-1",
            title: "Rutinas diarias",
            description: "Wake up, work, study, cook, relax",
            completed: false,
            subSkills: [
              { id: "a2-v1-1", title: "Actividades de mañana", completed: false },
              { id: "a2-v1-2", title: "Actividades de tarde/noche", completed: false },
            ]
          },
          {
            id: "a2-vocab-2",
            title: "Compras y precios",
            description: "Shopping, prices, payment",
            completed: false,
            subSkills: [
              { id: "a2-v2-1", title: "Tipos de tiendas", completed: false },
              { id: "a2-v2-2", title: "Precios y descuentos", completed: false },
              { id: "a2-v2-3", title: "Métodos de pago", completed: false },
            ]
          },
          {
            id: "a2-vocab-3",
            title: "Lugares y direcciones",
            description: "Town places, giving directions",
            completed: false,
            subSkills: [
              { id: "a2-v3-1", title: "Edificios de la ciudad", completed: false },
              { id: "a2-v3-2", title: "Preposiciones de lugar", completed: false },
              { id: "a2-v3-3", title: "Dar direcciones", completed: false },
            ]
          },
          {
            id: "a2-vocab-4",
            title: "Viajes y transporte",
            description: "Travel, transport, booking",
            completed: false,
            subSkills: [
              { id: "a2-v4-1", title: "Medios de transporte", completed: false },
              { id: "a2-v4-2", title: "En el aeropuerto", completed: false },
              { id: "a2-v4-3", title: "En el hotel", completed: false },
            ]
          },
          {
            id: "a2-vocab-5",
            title: "Hobbies y tiempo libre",
            description: "Hobbies, sports, entertainment",
            completed: false,
            subSkills: [
              { id: "a2-v5-1", title: "Deportes", completed: false },
              { id: "a2-v5-2", title: "Actividades de ocio", completed: false },
            ]
          },
          {
            id: "a2-vocab-6",
            title: "Salud básica",
            description: "Basic symptoms, doctor visit",
            completed: false,
            subSkills: [
              { id: "a2-v6-1", title: "Partes del cuerpo", completed: false },
              { id: "a2-v6-2", title: "Síntomas comunes", completed: false },
            ]
          },
          {
            id: "a2-vocab-7",
            title: "Clima y estaciones",
            description: "Weather, seasons, clothes",
            completed: false,
            subSkills: [
              { id: "a2-v7-1", title: "Tipos de clima", completed: false },
              { id: "a2-v7-2", title: "Las estaciones", completed: false },
            ]
          },
          {
            id: "a2-vocab-8",
            title: "Adjetivos comunes",
            description: "Big/small, easy/difficult, fast/slow",
            completed: false,
            subSkills: [
              { id: "a2-v8-1", title: "Adjetivos de tamaño", completed: false },
              { id: "a2-v8-2", title: "Adjetivos de personalidad", completed: false },
              { id: "a2-v8-3", title: "Adjetivos opuestos", completed: false },
            ]
          },
        ]
      },
      {
        id: "a2-grammar",
        title: "Gramática",
        icon: "🧩",
        description: "De frases cortas a oraciones conectadas",
        skills: [
          {
            id: "a2-gram-1",
            title: "Past Simple",
            description: "Acciones completadas en el pasado",
            completed: false,
            subSkills: [
              { id: "a2-g1-1", title: "Verbos regulares (-ed)", completed: false },
              { id: "a2-g1-2", title: "Verbos irregulares comunes", completed: false },
              { id: "a2-g1-3", title: "Did en preguntas y negaciones", completed: false },
            ]
          },
          {
            id: "a2-gram-2",
            title: "Present Perfect (básico)",
            description: "Experiencias y acciones recientes",
            completed: false,
            subSkills: [
              { id: "a2-g2-1", title: "Have/Has + participio", completed: false },
              { id: "a2-g2-2", title: "Ever/Never/Just", completed: false },
            ]
          },
          {
            id: "a2-gram-3",
            title: "Future con 'going to'",
            description: "Planes e intenciones futuras",
            completed: false,
            subSkills: [
              { id: "a2-g3-1", title: "Planes decididos", completed: false },
              { id: "a2-g3-2", title: "Predicciones con evidencia", completed: false },
            ]
          },
          {
            id: "a2-gram-4",
            title: "There is / There are",
            description: "Describir existencia y ubicación",
            completed: false,
            subSkills: [
              { id: "a2-g4-1", title: "Singular vs plural", completed: false },
              { id: "a2-g4-2", title: "Some/Any/A lot of", completed: false },
            ]
          },
          {
            id: "a2-gram-5",
            title: "Contables e incontables",
            description: "A/An, Some, Any, Much, Many",
            completed: false,
            subSkills: [
              { id: "a2-g5-1", title: "Identificar contables", completed: false },
              { id: "a2-g5-2", title: "How much vs How many", completed: false },
            ]
          },
          {
            id: "a2-gram-6",
            title: "Comparativos y superlativos",
            description: "Bigger, the best, more interesting",
            completed: false,
            subSkills: [
              { id: "a2-g6-1", title: "Formar comparativos", completed: false },
              { id: "a2-g6-2", title: "Formar superlativos", completed: false },
              { id: "a2-g6-3", title: "Irregulares: good, bad, far", completed: false },
            ]
          },
          {
            id: "a2-gram-7",
            title: "Modales básicos",
            description: "Can, must, should para permisos y consejos",
            completed: false,
            subSkills: [
              { id: "a2-g7-1", title: "Can para habilidad/permiso", completed: false },
              { id: "a2-g7-2", title: "Must para obligación", completed: false },
              { id: "a2-g7-3", title: "Should para consejos", completed: false },
            ]
          },
          {
            id: "a2-gram-8",
            title: "Preposiciones",
            description: "In, on, at, under, next to, between",
            completed: false,
            subSkills: [
              { id: "a2-g8-1", title: "Preposiciones de tiempo", completed: false },
              { id: "a2-g8-2", title: "Preposiciones de lugar", completed: false },
            ]
          },
          {
            id: "a2-gram-9",
            title: "Formación de preguntas",
            description: "Do you like...? Where are you from?",
            completed: false,
            subSkills: [
              { id: "a2-g9-1", title: "Preguntas Wh-", completed: false },
              { id: "a2-g9-2", title: "Preguntas Yes/No", completed: false },
            ]
          },
        ]
      },
      {
        id: "a2-speaking",
        title: "Expresión Oral",
        icon: "🗣️",
        description: "De respuestas cortas a conversaciones breves",
        skills: [
          {
            id: "a2-speak-1",
            title: "Presentar a otros",
            description: "Introducing friends, family, colleagues",
            completed: false,
            subSkills: [
              { id: "a2-s1-1", title: "This is my friend...", completed: false },
              { id: "a2-s1-2", title: "Describir relaciones", completed: false },
            ]
          },
          {
            id: "a2-speak-2",
            title: "Hablar de rutinas",
            description: "Daily life, habits, schedules",
            completed: false,
            subSkills: [
              { id: "a2-s2-1", title: "Mi día típico", completed: false },
              { id: "a2-s2-2", title: "Fines de semana", completed: false },
            ]
          },
          {
            id: "a2-speak-3",
            title: "Describir experiencias pasadas",
            description: "Tell about vacations, events",
            completed: false,
            subSkills: [
              { id: "a2-s3-1", title: "Mis últimas vacaciones", completed: false },
              { id: "a2-s3-2", title: "Un día especial", completed: false },
            ]
          },
          {
            id: "a2-speak-4",
            title: "Pedir y dar direcciones",
            description: "How do I get to...? Turn left...",
            completed: false,
            subSkills: [
              { id: "a2-s4-1", title: "Preguntar cómo llegar", completed: false },
              { id: "a2-s4-2", title: "Explicar el camino", completed: false },
            ]
          },
          {
            id: "a2-speak-5",
            title: "Comprar y pedir comida",
            description: "Order food, shopping interaction",
            completed: false,
            subSkills: [
              { id: "a2-s5-1", title: "En el restaurante", completed: false },
              { id: "a2-s5-2", title: "En la tienda", completed: false },
            ]
          },
          {
            id: "a2-speak-6",
            title: "Hacer planes",
            description: "Making arrangements, invitations",
            completed: false,
            subSkills: [
              { id: "a2-s6-1", title: "Invitar a alguien", completed: false },
              { id: "a2-s6-2", title: "Acordar hora y lugar", completed: false },
            ]
          },
          {
            id: "a2-speak-7",
            title: "Expresar gustos",
            description: "I like, I don't like, I prefer",
            completed: false,
            subSkills: [
              { id: "a2-s7-1", title: "Me gusta / No me gusta", completed: false },
              { id: "a2-s7-2", title: "Comparar preferencias", completed: false },
            ]
          },
          {
            id: "a2-speak-8",
            title: "Pedir aclaración",
            description: "Can you repeat? What does... mean?",
            completed: false,
            subSkills: [
              { id: "a2-s8-1", title: "Pedir repetición", completed: false },
              { id: "a2-s8-2", title: "Verificar comprensión", completed: false },
            ]
          },
        ]
      },
      {
        id: "a2-listening",
        title: "Comprensión Auditiva",
        icon: "👂",
        description: "Entender mensajes simples en situaciones cotidianas",
        skills: [
          {
            id: "a2-list-1",
            title: "Conversaciones lentas y claras",
            description: "Understanding slow, clear speech",
            completed: false,
            subSkills: [
              { id: "a2-l1-1", title: "Diálogos de tienda", completed: false },
              { id: "a2-l1-2", title: "Diálogos de restaurante", completed: false },
            ]
          },
          {
            id: "a2-list-2",
            title: "Instrucciones simples",
            description: "Following simple directions",
            completed: false,
            subSkills: [
              { id: "a2-l2-1", title: "Direcciones en la calle", completed: false },
              { id: "a2-l2-2", title: "Instrucciones en clase", completed: false },
            ]
          },
          {
            id: "a2-list-3",
            title: "Anuncios básicos",
            description: "Time, place, prices announcements",
            completed: false,
            subSkills: [
              { id: "a2-l3-1", title: "Anuncios de aeropuerto", completed: false },
              { id: "a2-l3-2", title: "Anuncios de tienda", completed: false },
            ]
          },
        ]
      },
      {
        id: "a2-reading",
        title: "Comprensión Lectora",
        icon: "📖",
        description: "De oraciones a textos cortos",
        skills: [
          {
            id: "a2-read-1",
            title: "Emails y mensajes cortos",
            description: "Short emails, text messages",
            completed: false,
            subSkills: [
              { id: "a2-r1-1", title: "Emails informales", completed: false },
              { id: "a2-r1-2", title: "Mensajes de texto", completed: false },
            ]
          },
          {
            id: "a2-read-2",
            title: "Menús y horarios",
            description: "Menus, schedules, timetables",
            completed: false,
            subSkills: [
              { id: "a2-r2-1", title: "Menús de restaurante", completed: false },
              { id: "a2-r2-2", title: "Horarios de transporte", completed: false },
            ]
          },
          {
            id: "a2-read-3",
            title: "Historias simples",
            description: "Simple stories, graded readers",
            completed: false,
            subSkills: [
              { id: "a2-r3-1", title: "Historias cortas", completed: false },
              { id: "a2-r3-2", title: "Descripciones de personas", completed: false },
            ]
          },
          {
            id: "a2-read-4",
            title: "Anuncios y publicidad",
            description: "Ads, flyers, simple advertisements",
            completed: false,
            subSkills: [
              { id: "a2-r4-1", title: "Anuncios de trabajo", completed: false },
              { id: "a2-r4-2", title: "Publicidad de productos", completed: false },
            ]
          },
        ]
      },
      {
        id: "a2-writing",
        title: "Expresión Escrita",
        icon: "✍️",
        description: "De rellenar huecos a párrafos cortos",
        skills: [
          {
            id: "a2-write-1",
            title: "Emails y mensajes simples",
            description: "Simple emails, thank you notes",
            completed: false,
            subSkills: [
              { id: "a2-w1-1", title: "Email a un amigo", completed: false },
              { id: "a2-w1-2", title: "Mensaje de agradecimiento", completed: false },
            ]
          },
          {
            id: "a2-write-2",
            title: "Descripciones cortas",
            description: "Describing people, places",
            completed: false,
            subSkills: [
              { id: "a2-w2-1", title: "Describir una persona", completed: false },
              { id: "a2-w2-2", title: "Describir tu casa", completed: false },
            ]
          },
          {
            id: "a2-write-3",
            title: "Rutinas y hábitos",
            description: "Writing about daily life",
            completed: false,
            subSkills: [
              { id: "a2-w3-1", title: "Mi día típico", completed: false },
              { id: "a2-w3-2", title: "Mis hobbies", completed: false },
            ]
          },
          {
            id: "a2-write-4",
            title: "Eventos pasados",
            description: "Simple past narratives",
            completed: false,
            subSkills: [
              { id: "a2-w4-1", title: "Mi última vacación", completed: false },
              { id: "a2-w4-2", title: "Un día especial", completed: false },
            ]
          },
        ]
      },
      {
        id: "a2-strategies",
        title: "Estrategias de Aprendizaje",
        icon: "🧭",
        description: "Técnicas para mejorar tu aprendizaje",
        skills: [
          {
            id: "a2-strat-1",
            title: "Pedir ayuda",
            description: "Asking for repetition, help",
            completed: false,
            subSkills: [
              { id: "a2-st1-1", title: "Can you repeat?", completed: false },
              { id: "a2-st1-2", title: "What does X mean?", completed: false },
            ]
          },
          {
            id: "a2-strat-2",
            title: "Parafrasear",
            description: "Using simple words when you don't know a word",
            completed: false,
            subSkills: [
              { id: "a2-st2-1", title: "Describir objetos desconocidos", completed: false },
            ]
          },
          {
            id: "a2-strat-3",
            title: "Auto-corrección",
            description: "Fixing basic mistakes yourself",
            completed: false,
            subSkills: [
              { id: "a2-st3-1", title: "Reconocer errores comunes", completed: false },
            ]
          },
        ]
      },
    ]
  },
  {
    level: "B1",
    title: "Intermedio",
    description: "Comunicación independiente en situaciones variadas",
    targetVocabulary: "2,000-2,500 palabras",
    estimatedHours: 350,
    categories: [
      {
        id: "b1-vocabulary",
        title: "Vocabulario",
        icon: "📚",
        description: "Vocabulario para temas más abstractos",
        skills: [
          {
            id: "b1-vocab-1",
            title: "Trabajo y educación",
            description: "Jobs, education, career",
            completed: false,
            subSkills: [
              { id: "b1-v1-1", title: "Vocabulario de oficina", completed: false },
              { id: "b1-v1-2", title: "Sistema educativo", completed: false },
              { id: "b1-v1-3", title: "Entrevistas de trabajo", completed: false },
            ]
          },
          {
            id: "b1-vocab-2",
            title: "Sentimientos y emociones",
            description: "Feelings, emotions, moods",
            completed: false,
            subSkills: [
              { id: "b1-v2-1", title: "Emociones positivas", completed: false },
              { id: "b1-v2-2", title: "Emociones negativas", completed: false },
            ]
          },
          {
            id: "b1-vocab-3",
            title: "Tecnología y medios",
            description: "Technology, media, internet",
            completed: false,
            subSkills: [
              { id: "b1-v3-1", title: "Dispositivos tecnológicos", completed: false },
              { id: "b1-v3-2", title: "Redes sociales", completed: false },
            ]
          },
          {
            id: "b1-vocab-4",
            title: "Medio ambiente",
            description: "Environment, nature, climate",
            completed: false,
            subSkills: [
              { id: "b1-v4-1", title: "Problemas ambientales", completed: false },
              { id: "b1-v4-2", title: "Soluciones ecológicas", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-grammar",
        title: "Gramática",
        icon: "🧩",
        description: "Estructuras más complejas",
        skills: [
          {
            id: "b1-gram-1",
            title: "Past Continuous",
            description: "Actions in progress in the past",
            completed: false,
            subSkills: [
              { id: "b1-g1-1", title: "Was/Were + -ing", completed: false },
              { id: "b1-g1-2", title: "When + While", completed: false },
            ]
          },
          {
            id: "b1-gram-2",
            title: "Present Perfect Continuous",
            description: "Duration of recent actions",
            completed: false,
            subSkills: [
              { id: "b1-g2-1", title: "Have been + -ing", completed: false },
              { id: "b1-g2-2", title: "For/Since", completed: false },
            ]
          },
          {
            id: "b1-gram-3",
            title: "First y Second Conditional",
            description: "Real and hypothetical situations",
            completed: false,
            subSkills: [
              { id: "b1-g3-1", title: "If + presente, will", completed: false },
              { id: "b1-g3-2", title: "If + pasado, would", completed: false },
            ]
          },
          {
            id: "b1-gram-4",
            title: "Voz Pasiva",
            description: "Passive voice in present and past",
            completed: false,
            subSkills: [
              { id: "b1-g4-1", title: "Pasiva en presente", completed: false },
              { id: "b1-g4-2", title: "Pasiva en pasado", completed: false },
            ]
          },
          {
            id: "b1-gram-5",
            title: "Reported Speech (básico)",
            description: "Reporting what others said",
            completed: false,
            subSkills: [
              { id: "b1-g5-1", title: "Said/Told + cambios", completed: false },
              { id: "b1-g5-2", title: "Preguntas indirectas", completed: false },
            ]
          },
          {
            id: "b1-gram-6",
            title: "Relative Clauses",
            description: "Who, which, that, where",
            completed: false,
            subSkills: [
              { id: "b1-g6-1", title: "Defining relatives", completed: false },
              { id: "b1-g6-2", title: "Non-defining relatives", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-speaking",
        title: "Expresión Oral",
        icon: "🗣️",
        description: "Conversaciones más largas y fluidas",
        skills: [
          {
            id: "b1-speak-1",
            title: "Dar opiniones",
            description: "I think, in my opinion, I believe",
            completed: false,
            subSkills: [
              { id: "b1-s1-1", title: "Expresar opiniones", completed: false },
              { id: "b1-s1-2", title: "Estar de acuerdo/desacuerdo", completed: false },
            ]
          },
          {
            id: "b1-speak-2",
            title: "Narrar historias",
            description: "Telling stories, sequencing events",
            completed: false,
            subSkills: [
              { id: "b1-s2-1", title: "Conectores de secuencia", completed: false },
              { id: "b1-s2-2", title: "Descripciones detalladas", completed: false },
            ]
          },
          {
            id: "b1-speak-3",
            title: "Hablar de planes y sueños",
            description: "Future plans, hopes, ambitions",
            completed: false,
            subSkills: [
              { id: "b1-s3-1", title: "Planes futuros", completed: false },
              { id: "b1-s3-2", title: "Sueños y ambiciones", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-listening",
        title: "Comprensión Auditiva",
        icon: "👂",
        description: "Entender programas y conversaciones estándar",
        skills: [
          {
            id: "b1-list-1",
            title: "Conversaciones a velocidad normal",
            description: "Native speed with clear accent",
            completed: false,
            subSkills: [
              { id: "b1-l1-1", title: "Podcasts sencillos", completed: false },
              { id: "b1-l1-2", title: "Programas de radio", completed: false },
            ]
          },
          {
            id: "b1-list-2",
            title: "Noticias simplificadas",
            description: "News in clear, standard language",
            completed: false,
            subSkills: [
              { id: "b1-l2-1", title: "Noticias VOA", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-reading",
        title: "Comprensión Lectora",
        icon: "📖",
        description: "Textos más largos sobre temas familiares",
        skills: [
          {
            id: "b1-read-1",
            title: "Artículos de revista",
            description: "Magazine articles, blog posts",
            completed: false,
            subSkills: [
              { id: "b1-r1-1", title: "Artículos de interés", completed: false },
              { id: "b1-r1-2", title: "Blogs personales", completed: false },
            ]
          },
          {
            id: "b1-read-2",
            title: "Cartas y emails formales",
            description: "Formal correspondence",
            completed: false,
            subSkills: [
              { id: "b1-r2-1", title: "Emails de trabajo", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-writing",
        title: "Expresión Escrita",
        icon: "✍️",
        description: "Textos más elaborados y estructurados",
        skills: [
          {
            id: "b1-write-1",
            title: "Ensayos de opinión",
            description: "Opinion essays with arguments",
            completed: false,
            subSkills: [
              { id: "b1-w1-1", title: "Estructura de ensayo", completed: false },
              { id: "b1-w1-2", title: "Conectores de argumento", completed: false },
            ]
          },
          {
            id: "b1-write-2",
            title: "Emails formales",
            description: "Formal emails, complaints",
            completed: false,
            subSkills: [
              { id: "b1-w2-1", title: "Emails de trabajo", completed: false },
              { id: "b1-w2-2", title: "Cartas de queja", completed: false },
            ]
          },
        ]
      },
    ]
  },
  {
    level: "B2",
    title: "Intermedio Alto",
    description: "Comunicación fluida y espontánea en la mayoría de situaciones",
    targetVocabulary: "4,000-5,000 palabras",
    estimatedHours: 500,
    categories: [
      {
        id: "b2-vocabulary",
        title: "Vocabulario",
        icon: "📚",
        description: "Vocabulario especializado y matizado",
        skills: [
          {
            id: "b2-vocab-1",
            title: "Vocabulario académico",
            description: "Academic and formal vocabulary",
            completed: false,
            subSkills: [
              { id: "b2-v1-1", title: "Términos de investigación", completed: false },
              { id: "b2-v1-2", title: "Vocabulario de presentaciones", completed: false },
            ]
          },
          {
            id: "b2-vocab-2",
            title: "Expresiones idiomáticas",
            description: "Common idioms and phrases",
            completed: false,
            subSkills: [
              { id: "b2-v2-1", title: "Idioms de negocios", completed: false },
              { id: "b2-v2-2", title: "Expresiones coloquiales", completed: false },
            ]
          },
          {
            id: "b2-vocab-3",
            title: "Phrasal verbs avanzados",
            description: "Complex phrasal verbs",
            completed: false,
            subSkills: [
              { id: "b2-v3-1", title: "Phrasal verbs separables", completed: false },
              { id: "b2-v3-2", title: "Phrasal verbs inseparables", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-grammar",
        title: "Gramática",
        icon: "🧩",
        description: "Dominio de estructuras complejas",
        skills: [
          {
            id: "b2-gram-1",
            title: "Third Conditional",
            description: "Hypothetical past situations",
            completed: false,
            subSkills: [
              { id: "b2-g1-1", title: "If + had + participio", completed: false },
              { id: "b2-g1-2", title: "Mixed conditionals", completed: false },
            ]
          },
          {
            id: "b2-gram-2",
            title: "Reported Speech completo",
            description: "All forms of reported speech",
            completed: false,
            subSkills: [
              { id: "b2-g2-1", title: "Cambios de tiempo verbal", completed: false },
              { id: "b2-g2-2", title: "Reporting verbs variados", completed: false },
            ]
          },
          {
            id: "b2-gram-3",
            title: "Pasiva avanzada",
            description: "Passive in all tenses, impersonal passive",
            completed: false,
            subSkills: [
              { id: "b2-g3-1", title: "Pasiva con modales", completed: false },
              { id: "b2-g3-2", title: "It is said that...", completed: false },
            ]
          },
          {
            id: "b2-gram-4",
            title: "Inversiones",
            description: "Inverted structures for emphasis",
            completed: false,
            subSkills: [
              { id: "b2-g4-1", title: "Never have I...", completed: false },
              { id: "b2-g4-2", title: "Not only... but also", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-speaking",
        title: "Expresión Oral",
        icon: "🗣️",
        description: "Comunicación fluida y detallada",
        skills: [
          {
            id: "b2-speak-1",
            title: "Debates y argumentación",
            description: "Presenting and defending viewpoints",
            completed: false,
            subSkills: [
              { id: "b2-s1-1", title: "Estructurar argumentos", completed: false },
              { id: "b2-s1-2", title: "Refutar puntos de vista", completed: false },
            ]
          },
          {
            id: "b2-speak-2",
            title: "Presentaciones formales",
            description: "Giving structured presentations",
            completed: false,
            subSkills: [
              { id: "b2-s2-1", title: "Introducción y conclusión", completed: false },
              { id: "b2-s2-2", title: "Manejar preguntas", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-listening",
        title: "Comprensión Auditiva",
        icon: "👂",
        description: "Entender prácticamente todo el habla estándar",
        skills: [
          {
            id: "b2-list-1",
            title: "Series y películas",
            description: "Understanding films and TV shows",
            completed: false,
            subSkills: [
              { id: "b2-l1-1", title: "Sin subtítulos", completed: false },
              { id: "b2-l1-2", title: "Acentos variados", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-reading",
        title: "Comprensión Lectora",
        icon: "📖",
        description: "Textos complejos sobre temas variados",
        skills: [
          {
            id: "b2-read-1",
            title: "Literatura contemporánea",
            description: "Modern novels and short stories",
            completed: false,
            subSkills: [
              { id: "b2-r1-1", title: "Novelas adaptadas", completed: false },
              { id: "b2-r1-2", title: "Cuentos cortos", completed: false },
            ]
          },
          {
            id: "b2-read-2",
            title: "Artículos especializados",
            description: "In-depth articles on various topics",
            completed: false,
            subSkills: [
              { id: "b2-r2-1", title: "Artículos científicos", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-writing",
        title: "Expresión Escrita",
        icon: "✍️",
        description: "Escritura clara y detallada",
        skills: [
          {
            id: "b2-write-1",
            title: "Informes y propuestas",
            description: "Reports, proposals, reviews",
            completed: false,
            subSkills: [
              { id: "b2-w1-1", title: "Estructura de informe", completed: false },
              { id: "b2-w1-2", title: "Propuestas formales", completed: false },
            ]
          },
        ]
      },
    ]
  },
  {
    level: "C1",
    title: "Avanzado",
    description: "Comunicación eficaz y flexible en todos los contextos",
    targetVocabulary: "8,000-10,000 palabras",
    estimatedHours: 700,
    categories: [
      {
        id: "c1-vocabulary",
        title: "Vocabulario",
        icon: "📚",
        description: "Dominio del léxico y matices",
        skills: [
          {
            id: "c1-vocab-1",
            title: "Vocabulario sofisticado",
            description: "Nuanced and precise vocabulary",
            completed: false,
            subSkills: [
              { id: "c1-v1-1", title: "Sinónimos y matices", completed: false },
              { id: "c1-v1-2", title: "Registro formal/informal", completed: false },
            ]
          },
          {
            id: "c1-vocab-2",
            title: "Lenguaje figurativo",
            description: "Metaphors, similes, nuances",
            completed: false,
            subSkills: [
              { id: "c1-v2-1", title: "Metáforas comunes", completed: false },
              { id: "c1-v2-2", title: "Ironía y sarcasmo", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-grammar",
        title: "Gramática",
        icon: "🧩",
        description: "Control completo de estructuras complejas",
        skills: [
          {
            id: "c1-gram-1",
            title: "Estructuras avanzadas",
            description: "Complex sentence structures",
            completed: false,
            subSkills: [
              { id: "c1-g1-1", title: "Subjuntivo", completed: false },
              { id: "c1-g1-2", title: "Cleft sentences", completed: false },
            ]
          },
          {
            id: "c1-gram-2",
            title: "Modales perfectos",
            description: "Modal perfects for deduction and regret",
            completed: false,
            subSkills: [
              { id: "c1-g2-1", title: "Must have, could have", completed: false },
              { id: "c1-g2-2", title: "Should have, would have", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-speaking",
        title: "Expresión Oral",
        icon: "🗣️",
        description: "Fluidez y precisión en todos los contextos",
        skills: [
          {
            id: "c1-speak-1",
            title: "Comunicación profesional",
            description: "High-level professional communication",
            completed: false,
            subSkills: [
              { id: "c1-s1-1", title: "Negociaciones", completed: false },
              { id: "c1-s1-2", title: "Entrevistas avanzadas", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-listening",
        title: "Comprensión Auditiva",
        icon: "👂",
        description: "Comprensión casi completa en cualquier contexto",
        skills: [
          {
            id: "c1-list-1",
            title: "Todo tipo de contenido",
            description: "All types of spoken content",
            completed: false,
            subSkills: [
              { id: "c1-l1-1", title: "Conferencias académicas", completed: false },
              { id: "c1-l1-2", title: "Humor y sarcasmo", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-reading",
        title: "Comprensión Lectora",
        icon: "📖",
        description: "Textos largos y complejos sin dificultad",
        skills: [
          {
            id: "c1-read-1",
            title: "Literatura clásica",
            description: "Classic literature and academic texts",
            completed: false,
            subSkills: [
              { id: "c1-r1-1", title: "Novelas sin adaptar", completed: false },
              { id: "c1-r1-2", title: "Textos académicos", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-writing",
        title: "Expresión Escrita",
        icon: "✍️",
        description: "Escritura clara, bien estructurada y detallada",
        skills: [
          {
            id: "c1-write-1",
            title: "Textos académicos",
            description: "Essays, dissertations, articles",
            completed: false,
            subSkills: [
              { id: "c1-w1-1", title: "Ensayos argumentativos", completed: false },
              { id: "c1-w1-2", title: "Artículos de investigación", completed: false },
            ]
          },
        ]
      },
    ]
  },
];

export const getLevelProgress = (level: CEFRLevel, completedSkills: string[]): number => {
  const levelData = curriculumData.find(l => l.level === level);
  if (!levelData) return 0;

  let totalSubSkills = 0;
  let completedSubSkills = 0;

  levelData.categories.forEach(category => {
    category.skills.forEach(skill => {
      skill.subSkills.forEach(subSkill => {
        totalSubSkills++;
        if (completedSkills.includes(subSkill.id)) {
          completedSubSkills++;
        }
      });
    });
  });

  return totalSubSkills > 0 ? Math.round((completedSubSkills / totalSubSkills) * 100) : 0;
};

export const getSkillProgress = (skillId: string, completedSkills: string[], curriculumLevel: LevelCurriculum): number => {
  for (const category of curriculumLevel.categories) {
    const skill = category.skills.find(s => s.id === skillId);
    if (skill) {
      const completedCount = skill.subSkills.filter(sub => completedSkills.includes(sub.id)).length;
      return skill.subSkills.length > 0 ? Math.round((completedCount / skill.subSkills.length) * 100) : 0;
    }
  }
  return 0;
};

export const getCategoryProgress = (categoryId: string, completedSkills: string[], curriculumLevel: LevelCurriculum): number => {
  const category = curriculumLevel.categories.find(c => c.id === categoryId);
  if (!category) return 0;

  let totalSubSkills = 0;
  let completedSubSkillsCount = 0;

  category.skills.forEach(skill => {
    skill.subSkills.forEach(subSkill => {
      totalSubSkills++;
      if (completedSkills.includes(subSkill.id)) {
        completedSubSkillsCount++;
      }
    });
  });

  return totalSubSkills > 0 ? Math.round((completedSubSkillsCount / totalSubSkills) * 100) : 0;
};

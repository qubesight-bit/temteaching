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
    description: "Usuario independiente: piensas en inglés, explicas por qué, no solo qué",
    targetVocabulary: "2,500-3,000 palabras",
    estimatedHours: 400,
    categories: [
      {
        id: "b1-vocabulary",
        title: "Vocabulario",
        icon: "📚",
        description: "De palabras cotidianas a vocabulario abstracto y temático",
        skills: [
          {
            id: "b1-vocab-1",
            title: "Trabajo y estudios",
            description: "Work, studies, career vocabulary",
            completed: false,
            subSkills: [
              { id: "b1-v1-1", title: "Vocabulario de oficina", completed: false },
              { id: "b1-v1-2", title: "Sistema educativo", completed: false },
              { id: "b1-v1-3", title: "Entrevistas de trabajo", completed: false },
              { id: "b1-v1-4", title: "Profesiones y carreras", completed: false },
            ]
          },
          {
            id: "b1-vocab-2",
            title: "Educación y aprendizaje",
            description: "Education, learning, academic vocabulary",
            completed: false,
            subSkills: [
              { id: "b1-v2-1", title: "Materias y cursos", completed: false },
              { id: "b1-v2-2", title: "Exámenes y evaluaciones", completed: false },
              { id: "b1-v2-3", title: "Habilidades de estudio", completed: false },
            ]
          },
          {
            id: "b1-vocab-3",
            title: "Tecnología y medios",
            description: "Technology, media, internet vocabulary",
            completed: false,
            subSkills: [
              { id: "b1-v3-1", title: "Dispositivos tecnológicos", completed: false },
              { id: "b1-v3-2", title: "Redes sociales", completed: false },
              { id: "b1-v3-3", title: "Vocabulario de internet", completed: false },
            ]
          },
          {
            id: "b1-vocab-4",
            title: "Cultura y tradiciones",
            description: "Culture, traditions, customs",
            completed: false,
            subSkills: [
              { id: "b1-v4-1", title: "Festividades", completed: false },
              { id: "b1-v4-2", title: "Costumbres culturales", completed: false },
            ]
          },
          {
            id: "b1-vocab-5",
            title: "Salud y estilo de vida",
            description: "Health, lifestyle, wellbeing",
            completed: false,
            subSkills: [
              { id: "b1-v5-1", title: "Hábitos saludables", completed: false },
              { id: "b1-v5-2", title: "Ejercicio y dieta", completed: false },
              { id: "b1-v5-3", title: "Bienestar mental", completed: false },
            ]
          },
          {
            id: "b1-vocab-6",
            title: "Medio ambiente",
            description: "Environment, nature, climate",
            completed: false,
            subSkills: [
              { id: "b1-v6-1", title: "Problemas ambientales", completed: false },
              { id: "b1-v6-2", title: "Soluciones ecológicas", completed: false },
              { id: "b1-v6-3", title: "Reciclaje y sostenibilidad", completed: false },
            ]
          },
          {
            id: "b1-vocab-7",
            title: "Sentimientos y opiniones",
            description: "Feelings, opinions, reasons",
            completed: false,
            subSkills: [
              { id: "b1-v7-1", title: "Emociones complejas", completed: false },
              { id: "b1-v7-2", title: "Expresar razones", completed: false },
              { id: "b1-v7-3", title: "Matices de opinión", completed: false },
            ]
          },
          {
            id: "b1-vocab-8",
            title: "Phrasal verbs comunes",
            description: "Common phrasal verbs",
            completed: false,
            subSkills: [
              { id: "b1-v8-1", title: "Get up, turn on, look for", completed: false },
              { id: "b1-v8-2", title: "Put off, give up, take up", completed: false },
              { id: "b1-v8-3", title: "Find out, work out, figure out", completed: false },
            ]
          },
          {
            id: "b1-vocab-9",
            title: "Colocaciones",
            description: "Common collocations",
            completed: false,
            subSkills: [
              { id: "b1-v9-1", title: "Make a decision, take a break", completed: false },
              { id: "b1-v9-2", title: "Do homework, make progress", completed: false },
              { id: "b1-v9-3", title: "Have a meeting, give advice", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-grammar",
        title: "Gramática",
        icon: "🧩",
        description: "De precisión simple a flexibilidad y control de tiempos",
        skills: [
          {
            id: "b1-gram-1",
            title: "Present Simple vs Present Continuous",
            description: "Distinguishing habitual vs current actions",
            completed: false,
            subSkills: [
              { id: "b1-g1-1", title: "Hábitos vs acciones ahora", completed: false },
              { id: "b1-g1-2", title: "Stative verbs", completed: false },
              { id: "b1-g1-3", title: "Always + continuous (queja)", completed: false },
            ]
          },
          {
            id: "b1-gram-2",
            title: "Past Simple vs Present Perfect",
            description: "Finished past vs connection to present",
            completed: false,
            subSkills: [
              { id: "b1-g2-1", title: "Tiempo específico vs no específico", completed: false },
              { id: "b1-g2-2", title: "Just, already, yet", completed: false },
              { id: "b1-g2-3", title: "For y Since", completed: false },
              { id: "b1-g2-4", title: "Ever y Never", completed: false },
            ]
          },
          {
            id: "b1-gram-3",
            title: "Future forms",
            description: "Will, going to, present continuous for future",
            completed: false,
            subSkills: [
              { id: "b1-g3-1", title: "Will para decisiones espontáneas", completed: false },
              { id: "b1-g3-2", title: "Going to para planes", completed: false },
              { id: "b1-g3-3", title: "Present continuous para arreglos", completed: false },
              { id: "b1-g3-4", title: "Predicciones con will vs going to", completed: false },
            ]
          },
          {
            id: "b1-gram-4",
            title: "First Conditional",
            description: "Real future possibilities",
            completed: false,
            subSkills: [
              { id: "b1-g4-1", title: "If + presente, will + base", completed: false },
              { id: "b1-g4-2", title: "Unless, as long as, provided", completed: false },
              { id: "b1-g4-3", title: "Variaciones: might, can, should", completed: false },
            ]
          },
          {
            id: "b1-gram-5",
            title: "Second Conditional (básico)",
            description: "Hypothetical present/future",
            completed: false,
            subSkills: [
              { id: "b1-g5-1", title: "If + past simple, would + base", completed: false },
              { id: "b1-g5-2", title: "If I were you...", completed: false },
              { id: "b1-g5-3", title: "Situaciones imaginarias", completed: false },
            ]
          },
          {
            id: "b1-gram-6",
            title: "Voz Pasiva (básica)",
            description: "Passive voice in present and past",
            completed: false,
            subSkills: [
              { id: "b1-g6-1", title: "Pasiva en presente simple", completed: false },
              { id: "b1-g6-2", title: "Pasiva en pasado simple", completed: false },
              { id: "b1-g6-3", title: "By + agente", completed: false },
            ]
          },
          {
            id: "b1-gram-7",
            title: "Relative Clauses",
            description: "Who, which, that, where, when",
            completed: false,
            subSkills: [
              { id: "b1-g7-1", title: "Who para personas", completed: false },
              { id: "b1-g7-2", title: "Which para cosas", completed: false },
              { id: "b1-g7-3", title: "That (defining clauses)", completed: false },
              { id: "b1-g7-4", title: "Where, when, whose", completed: false },
            ]
          },
          {
            id: "b1-gram-8",
            title: "Comparativos y modificadores",
            description: "Advanced comparisons",
            completed: false,
            subSkills: [
              { id: "b1-g8-1", title: "Much better, a bit harder", completed: false },
              { id: "b1-g8-2", title: "As...as comparisons", completed: false },
              { id: "b1-g8-3", title: "The more...the more", completed: false },
            ]
          },
          {
            id: "b1-gram-9",
            title: "Modal Verbs",
            description: "Might, should, have to, must",
            completed: false,
            subSkills: [
              { id: "b1-g9-1", title: "Might para posibilidad", completed: false },
              { id: "b1-g9-2", title: "Should para consejos", completed: false },
              { id: "b1-g9-3", title: "Have to vs Must", completed: false },
              { id: "b1-g9-4", title: "Don't have to vs Mustn't", completed: false },
            ]
          },
          {
            id: "b1-gram-10",
            title: "Conectores",
            description: "Linking words and discourse markers",
            completed: false,
            subSkills: [
              { id: "b1-g10-1", title: "Because, although, however", completed: false },
              { id: "b1-g10-2", title: "So, therefore, as a result", completed: false },
              { id: "b1-g10-3", title: "On the other hand, nevertheless", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-speaking",
        title: "Expresión Oral",
        icon: "🗣️",
        description: "De intercambios cortos a discurso extendido e independiente",
        skills: [
          {
            id: "b1-speak-1",
            title: "Describir experiencias",
            description: "Describe experiences, events, goals",
            completed: false,
            subSkills: [
              { id: "b1-s1-1", title: "Narrar experiencias pasadas", completed: false },
              { id: "b1-s1-2", title: "Describir eventos en detalle", completed: false },
              { id: "b1-s1-3", title: "Hablar de metas y planes", completed: false },
            ]
          },
          {
            id: "b1-speak-2",
            title: "Explicar opiniones con razones",
            description: "I think... because...",
            completed: false,
            subSkills: [
              { id: "b1-s2-1", title: "Expresar opiniones", completed: false },
              { id: "b1-s2-2", title: "Dar razones y ejemplos", completed: false },
              { id: "b1-s2-3", title: "Estar de acuerdo/desacuerdo", completed: false },
            ]
          },
          {
            id: "b1-speak-3",
            title: "Narrar historias",
            description: "Tell a story with sequence",
            completed: false,
            subSkills: [
              { id: "b1-s3-1", title: "First, then, after that, finally", completed: false },
              { id: "b1-s3-2", title: "Mantener interés del oyente", completed: false },
              { id: "b1-s3-3", title: "Agregar detalles relevantes", completed: false },
            ]
          },
          {
            id: "b1-speak-4",
            title: "Comparar y elegir",
            description: "Compare options and make choices",
            completed: false,
            subSkills: [
              { id: "b1-s4-1", title: "Comparar dos opciones", completed: false },
              { id: "b1-s4-2", title: "Explicar preferencias", completed: false },
            ]
          },
          {
            id: "b1-speak-5",
            title: "Manejar situaciones inesperadas",
            description: "Handle unexpected situations while traveling",
            completed: false,
            subSkills: [
              { id: "b1-s5-1", title: "Problemas en viajes", completed: false },
              { id: "b1-s5-2", title: "Quejas y soluciones", completed: false },
            ]
          },
          {
            id: "b1-speak-6",
            title: "Participar en discusiones",
            description: "Participate in discussions (slow but clear)",
            completed: false,
            subSkills: [
              { id: "b1-s6-1", title: "Tomar turnos naturalmente", completed: false },
              { id: "b1-s6-2", title: "Hacer preguntas de seguimiento", completed: false },
              { id: "b1-s6-3", title: "Auto-corregirse cuando sea necesario", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-listening",
        title: "Comprensión Auditiva",
        icon: "👂",
        description: "De inglés de clase a inglés auténtico del mundo real",
        skills: [
          {
            id: "b1-list-1",
            title: "Ideas principales de conversaciones",
            description: "Understand main ideas of conversations",
            completed: false,
            subSkills: [
              { id: "b1-l1-1", title: "Captar el tema general", completed: false },
              { id: "b1-l1-2", title: "Identificar puntos clave", completed: false },
            ]
          },
          {
            id: "b1-list-2",
            title: "Radio y podcasts",
            description: "Radio programs and podcasts (slow, clear)",
            completed: false,
            subSkills: [
              { id: "b1-l2-1", title: "Podcasts para aprendices", completed: false },
              { id: "b1-l2-2", title: "Programas de radio claros", completed: false },
            ]
          },
          {
            id: "b1-list-3",
            title: "Programas de TV",
            description: "TV shows with familiar topics",
            completed: false,
            subSkills: [
              { id: "b1-l3-1", title: "Series con temas cotidianos", completed: false },
              { id: "b1-l3-2", title: "Documentales sencillos", completed: false },
            ]
          },
          {
            id: "b1-list-4",
            title: "Instrucciones y explicaciones",
            description: "Understand instructions and explanations",
            completed: false,
            subSkills: [
              { id: "b1-l4-1", title: "Instrucciones paso a paso", completed: false },
              { id: "b1-l4-2", title: "Explicaciones técnicas simples", completed: false },
            ]
          },
          {
            id: "b1-list-5",
            title: "Diferentes acentos",
            description: "Basic exposure to different accents",
            completed: false,
            subSkills: [
              { id: "b1-l5-1", title: "Americano vs Británico", completed: false },
              { id: "b1-l5-2", title: "Otros acentos (básico)", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-reading",
        title: "Comprensión Lectora",
        icon: "📖",
        description: "De textos cortos a textos multi-párrafo",
        skills: [
          {
            id: "b1-read-1",
            title: "Artículos y blogs",
            description: "Articles and blog posts",
            completed: false,
            subSkills: [
              { id: "b1-r1-1", title: "Artículos de revistas", completed: false },
              { id: "b1-r1-2", title: "Blogs personales", completed: false },
              { id: "b1-r1-3", title: "Artículos de noticias simples", completed: false },
            ]
          },
          {
            id: "b1-read-2",
            title: "Noticias simplificadas",
            description: "News stories (simplified)",
            completed: false,
            subSkills: [
              { id: "b1-r2-1", title: "VOA Learning English", completed: false },
              { id: "b1-r2-2", title: "News in Levels", completed: false },
            ]
          },
          {
            id: "b1-read-3",
            title: "Instrucciones y manuales",
            description: "Instructions and manuals",
            completed: false,
            subSkills: [
              { id: "b1-r3-1", title: "Manuales de usuario", completed: false },
              { id: "b1-r3-2", title: "Instrucciones de software", completed: false },
            ]
          },
          {
            id: "b1-read-4",
            title: "Emails personales y semi-formales",
            description: "Personal and semi-formal emails",
            completed: false,
            subSkills: [
              { id: "b1-r4-1", title: "Emails de amigos", completed: false },
              { id: "b1-r4-2", title: "Emails de trabajo básicos", completed: false },
            ]
          },
          {
            id: "b1-read-5",
            title: "Técnicas de lectura",
            description: "Skimming, scanning, inferring",
            completed: false,
            subSkills: [
              { id: "b1-r5-1", title: "Skimming (idea general)", completed: false },
              { id: "b1-r5-2", title: "Scanning (info específica)", completed: false },
              { id: "b1-r5-3", title: "Inferir significado del contexto", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-writing",
        title: "Expresión Escrita",
        icon: "✍️",
        description: "De párrafos cortos a textos conectados y estructurados",
        skills: [
          {
            id: "b1-write-1",
            title: "Emails formales e informales",
            description: "Formal and informal emails",
            completed: false,
            subSkills: [
              { id: "b1-w1-1", title: "Saludos y despedidas apropiados", completed: false },
              { id: "b1-w1-2", title: "Registro formal vs informal", completed: false },
              { id: "b1-w1-3", title: "Estructura clara", completed: false },
            ]
          },
          {
            id: "b1-write-2",
            title: "Párrafos de opinión",
            description: "Opinion paragraphs with reasons",
            completed: false,
            subSkills: [
              { id: "b1-w2-1", title: "Expresar opinión claramente", completed: false },
              { id: "b1-w2-2", title: "Apoyar con razones", completed: false },
              { id: "b1-w2-3", title: "Dar ejemplos", completed: false },
            ]
          },
          {
            id: "b1-write-3",
            title: "Descripciones de experiencias",
            description: "Descriptions of experiences",
            completed: false,
            subSkills: [
              { id: "b1-w3-1", title: "Describir eventos pasados", completed: false },
              { id: "b1-w3-2", title: "Incluir emociones y reacciones", completed: false },
            ]
          },
          {
            id: "b1-write-4",
            title: "Ensayos cortos",
            description: "Short essays (100-180 words)",
            completed: false,
            subSkills: [
              { id: "b1-w4-1", title: "Introducción clara", completed: false },
              { id: "b1-w4-2", title: "Desarrollo con argumentos", completed: false },
              { id: "b1-w4-3", title: "Conclusión coherente", completed: false },
            ]
          },
          {
            id: "b1-write-5",
            title: "Conectar ideas",
            description: "Using linking words effectively",
            completed: false,
            subSkills: [
              { id: "b1-w5-1", title: "Conectores de adición", completed: false },
              { id: "b1-w5-2", title: "Conectores de contraste", completed: false },
              { id: "b1-w5-3", title: "Conectores de causa/efecto", completed: false },
            ]
          },
        ]
      },
      {
        id: "b1-strategy",
        title: "Estrategias de Comunicación",
        icon: "🧭",
        description: "Competencia estratégica crítica para B1",
        skills: [
          {
            id: "b1-strat-1",
            title: "Parafrasear",
            description: "Paraphrasing when you don't know a word",
            completed: false,
            subSkills: [
              { id: "b1-st1-1", title: "Describir con otras palabras", completed: false },
              { id: "b1-st1-2", title: "Usar sinónimos simples", completed: false },
            ]
          },
          {
            id: "b1-strat-2",
            title: "Pedir clarificación educadamente",
            description: "Asking for clarification politely",
            completed: false,
            subSkills: [
              { id: "b1-st2-1", title: "Could you repeat that?", completed: false },
              { id: "b1-st2-2", title: "What do you mean by...?", completed: false },
              { id: "b1-st2-3", title: "Could you explain that?", completed: false },
            ]
          },
          {
            id: "b1-strat-3",
            title: "Manejar conversaciones",
            description: "Managing conversations (turn-taking)",
            completed: false,
            subSkills: [
              { id: "b1-st3-1", title: "Tomar turnos naturalmente", completed: false },
              { id: "b1-st3-2", title: "Interrumpir educadamente", completed: false },
              { id: "b1-st3-3", title: "Cambiar de tema", completed: false },
            ]
          },
          {
            id: "b1-strat-4",
            title: "Reparar malentendidos",
            description: "Repairing communication breakdowns",
            completed: false,
            subSkills: [
              { id: "b1-st4-1", title: "Reconocer malentendidos", completed: false },
              { id: "b1-st4-2", title: "Aclarar lo que quisiste decir", completed: false },
            ]
          },
          {
            id: "b1-strat-5",
            title: "Usar contexto",
            description: "Using context to guess meaning",
            completed: false,
            subSkills: [
              { id: "b1-st5-1", title: "Adivinar palabras nuevas", completed: false },
              { id: "b1-st5-2", title: "Usar pistas del contexto", completed: false },
            ]
          },
          {
            id: "b1-strat-6",
            title: "Auto-gestión del aprendizaje",
            description: "Self-management and self-correction",
            completed: false,
            subSkills: [
              { id: "b1-st6-1", title: "Auto-corregirse", completed: false },
              { id: "b1-st6-2", title: "Usar notas y esquemas al hablar", completed: false },
              { id: "b1-st6-3", title: "Identificar áreas de mejora", completed: false },
            ]
          },
        ]
      },
    ]
  },
  {
    level: "B2",
    title: "Intermedio Alto",
    description: "De usuario independiente a comunicador competente y seguro",
    targetVocabulary: "4,000-5,000 palabras",
    estimatedHours: 500,
    categories: [
      {
        id: "b2-vocabulary",
        title: "Vocabulario Avanzado",
        icon: "📚",
        description: "Expresión precisa y matizada",
        skills: [
          {
            id: "b2-vocab-1",
            title: "Conceptos abstractos",
            description: "Freedom, responsibility, impact, justice",
            completed: false,
            subSkills: [
              { id: "b2-v1-1", title: "Libertad y derechos", completed: false },
              { id: "b2-v1-2", title: "Responsabilidad y consecuencias", completed: false },
              { id: "b2-v1-3", title: "Impacto y efectos", completed: false },
            ]
          },
          {
            id: "b2-vocab-2",
            title: "Trabajo y negocios",
            description: "Business, corporate, professional vocabulary",
            completed: false,
            subSkills: [
              { id: "b2-v2-1", title: "Terminología corporativa", completed: false },
              { id: "b2-v2-2", title: "Reuniones y negociaciones", completed: false },
              { id: "b2-v2-3", title: "Recursos humanos", completed: false },
            ]
          },
          {
            id: "b2-vocab-3",
            title: "Temas académicos",
            description: "Academic vocabulary for study and research",
            completed: false,
            subSkills: [
              { id: "b2-v3-1", title: "Investigación y metodología", completed: false },
              { id: "b2-v3-2", title: "Análisis y evaluación", completed: false },
              { id: "b2-v3-3", title: "Hipótesis y teorías", completed: false },
            ]
          },
          {
            id: "b2-vocab-4",
            title: "Temas sociales y culturales",
            description: "Social issues, culture, media",
            completed: false,
            subSkills: [
              { id: "b2-v4-1", title: "Problemas sociales actuales", completed: false },
              { id: "b2-v4-2", title: "Diversidad cultural", completed: false },
              { id: "b2-v4-3", title: "Medios de comunicación", completed: false },
            ]
          },
          {
            id: "b2-vocab-5",
            title: "Emociones y actitudes",
            description: "Frustrated vs annoyed, nuanced emotions",
            completed: false,
            subSkills: [
              { id: "b2-v5-1", title: "Emociones sutiles (frustrated vs annoyed)", completed: false },
              { id: "b2-v5-2", title: "Actitudes y perspectivas", completed: false },
              { id: "b2-v5-3", title: "Estados de ánimo complejos", completed: false },
            ]
          },
          {
            id: "b2-vocab-6",
            title: "Lenguaje idiomático",
            description: "Common idioms and expressions",
            completed: false,
            subSkills: [
              { id: "b2-v6-1", title: "Idioms de negocios", completed: false },
              { id: "b2-v6-2", title: "Idioms de la vida diaria", completed: false },
              { id: "b2-v6-3", title: "Expresiones coloquiales", completed: false },
            ]
          },
          {
            id: "b2-vocab-7",
            title: "Phrasal verbs avanzados",
            description: "Carry out, put off, bring up, come across",
            completed: false,
            subSkills: [
              { id: "b2-v7-1", title: "Phrasal verbs de negocios", completed: false },
              { id: "b2-v7-2", title: "Phrasal verbs separables", completed: false },
              { id: "b2-v7-3", title: "Phrasal verbs inseparables", completed: false },
              { id: "b2-v7-4", title: "Phrasal verbs con múltiples significados", completed: false },
            ]
          },
          {
            id: "b2-vocab-8",
            title: "Colocaciones avanzadas",
            description: "Highly recommended, strong argument, make a decision",
            completed: false,
            subSkills: [
              { id: "b2-v8-1", title: "Colocaciones con adverbios", completed: false },
              { id: "b2-v8-2", title: "Colocaciones con adjetivos", completed: false },
              { id: "b2-v8-3", title: "Colocaciones verbo + sustantivo", completed: false },
            ]
          },
          {
            id: "b2-vocab-9",
            title: "Formación de palabras",
            description: "Word families: noun-verb-adjective",
            completed: false,
            subSkills: [
              { id: "b2-v9-1", title: "Prefijos comunes", completed: false },
              { id: "b2-v9-2", title: "Sufijos comunes", completed: false },
              { id: "b2-v9-3", title: "Familias de palabras", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-grammar",
        title: "Gramática",
        icon: "🧩",
        description: "Rango y control gramatical - flexibilidad natural",
        skills: [
          {
            id: "b2-gram-1",
            title: "Dominio de todos los tiempos",
            description: "All major tenses with accuracy",
            completed: false,
            subSkills: [
              { id: "b2-g1-1", title: "Tiempos presentes con precisión", completed: false },
              { id: "b2-g1-2", title: "Tiempos pasados con precisión", completed: false },
              { id: "b2-g1-3", title: "Tiempos futuros con precisión", completed: false },
            ]
          },
          {
            id: "b2-gram-2",
            title: "Present Perfect vs Past Simple",
            description: "Fully mastered distinction",
            completed: false,
            subSkills: [
              { id: "b2-g2-1", title: "Cuándo usar cada tiempo", completed: false },
              { id: "b2-g2-2", title: "Marcadores temporales", completed: false },
              { id: "b2-g2-3", title: "Casos ambiguos", completed: false },
            ]
          },
          {
            id: "b2-gram-3",
            title: "Formas de futuro",
            description: "Future for prediction and intention",
            completed: false,
            subSkills: [
              { id: "b2-g3-1", title: "Will vs Going to (dominio)", completed: false },
              { id: "b2-g3-2", title: "Future Continuous", completed: false },
              { id: "b2-g3-3", title: "Future Perfect", completed: false },
            ]
          },
          {
            id: "b2-gram-4",
            title: "Condicionales 0-3",
            description: "All conditional types mastered",
            completed: false,
            subSkills: [
              { id: "b2-g4-1", title: "Zero y First conditional", completed: false },
              { id: "b2-g4-2", title: "Second conditional", completed: false },
              { id: "b2-g4-3", title: "Third conditional", completed: false },
            ]
          },
          {
            id: "b2-gram-5",
            title: "Mixed Conditionals",
            description: "Basic mixed conditional structures",
            completed: false,
            subSkills: [
              { id: "b2-g5-1", title: "Pasado irreal → presente resultado", completed: false },
              { id: "b2-g5-2", title: "Presente irreal → pasado resultado", completed: false },
            ]
          },
          {
            id: "b2-gram-6",
            title: "Voz pasiva avanzada",
            description: "Passive voice in multiple tenses",
            completed: false,
            subSkills: [
              { id: "b2-g6-1", title: "Pasiva en todos los tiempos", completed: false },
              { id: "b2-g6-2", title: "Pasiva con modales", completed: false },
              { id: "b2-g6-3", title: "Pasiva impersonal (It is said...)", completed: false },
            ]
          },
          {
            id: "b2-gram-7",
            title: "Oraciones de relativo",
            description: "Defining and non-defining relative clauses",
            completed: false,
            subSkills: [
              { id: "b2-g7-1", title: "Who, which, that", completed: false },
              { id: "b2-g7-2", title: "Whose, where, when", completed: false },
              { id: "b2-g7-3", title: "Non-defining clauses (con comas)", completed: false },
            ]
          },
          {
            id: "b2-gram-8",
            title: "Reported Speech",
            description: "All forms of reported speech",
            completed: false,
            subSkills: [
              { id: "b2-g8-1", title: "Cambios de tiempo verbal", completed: false },
              { id: "b2-g8-2", title: "Cambios de pronombres y tiempo", completed: false },
              { id: "b2-g8-3", title: "Reporting verbs variados", completed: false },
            ]
          },
          {
            id: "b2-gram-9",
            title: "Modales para deducción",
            description: "Might have, must be, could have",
            completed: false,
            subSkills: [
              { id: "b2-g9-1", title: "Must/Can't para certeza", completed: false },
              { id: "b2-g9-2", title: "Might/Could para posibilidad", completed: false },
              { id: "b2-g9-3", title: "Modales perfectos (must have been)", completed: false },
            ]
          },
          {
            id: "b2-gram-10",
            title: "Estructuras complejas",
            description: "Complex sentence structures",
            completed: false,
            subSkills: [
              { id: "b2-g10-1", title: "Oraciones compuestas", completed: false },
              { id: "b2-g10-2", title: "Oraciones subordinadas múltiples", completed: false },
            ]
          },
          {
            id: "b2-gram-11",
            title: "Inversiones para énfasis",
            description: "Not only..., Had I known..., Never have I...",
            completed: false,
            subSkills: [
              { id: "b2-g11-1", title: "Not only... but also", completed: false },
              { id: "b2-g11-2", title: "Never/Rarely/Seldom + inversión", completed: false },
              { id: "b2-g11-3", title: "Had I known...", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-speaking",
        title: "Expresión Oral",
        icon: "🗣️",
        description: "Interacción fluida y segura - conversación natural",
        skills: [
          {
            id: "b2-speak-1",
            title: "Expresar y defender opiniones",
            description: "Clearly expressing and defending viewpoints",
            completed: false,
            subSkills: [
              { id: "b2-s1-1", title: "Presentar tu punto de vista", completed: false },
              { id: "b2-s1-2", title: "Dar razones y ejemplos", completed: false },
              { id: "b2-s1-3", title: "Defender tu posición", completed: false },
            ]
          },
          {
            id: "b2-speak-2",
            title: "Desarrollar argumentos",
            description: "Developing arguments with examples",
            completed: false,
            subSkills: [
              { id: "b2-s2-1", title: "Estructurar argumentos lógicamente", completed: false },
              { id: "b2-s2-2", title: "Usar ejemplos relevantes", completed: false },
              { id: "b2-s2-3", title: "Contraargumentar efectivamente", completed: false },
            ]
          },
          {
            id: "b2-speak-3",
            title: "Participar en debates",
            description: "Active participation in discussions and debates",
            completed: false,
            subSkills: [
              { id: "b2-s3-1", title: "Escuchar y responder a otros", completed: false },
              { id: "b2-s3-2", title: "Expresar acuerdo/desacuerdo educado", completed: false },
              { id: "b2-s3-3", title: "Moderar y facilitar discusiones", completed: false },
            ]
          },
          {
            id: "b2-speak-4",
            title: "Fluidez con mínima duda",
            description: "Speaking fluently with minimal hesitation",
            completed: false,
            subSkills: [
              { id: "b2-s4-1", title: "Hablar sin pausas largas", completed: false },
              { id: "b2-s4-2", title: "Usar fillers naturalmente", completed: false },
              { id: "b2-s4-3", title: "Mantener el ritmo de conversación", completed: false },
            ]
          },
          {
            id: "b2-speak-5",
            title: "Ajustar registro",
            description: "Adjusting register (formal vs informal)",
            completed: false,
            subSkills: [
              { id: "b2-s5-1", title: "Lenguaje formal para trabajo", completed: false },
              { id: "b2-s5-2", title: "Lenguaje informal con amigos", completed: false },
              { id: "b2-s5-3", title: "Cambiar registro según contexto", completed: false },
            ]
          },
          {
            id: "b2-speak-6",
            title: "Marcadores del discurso",
            description: "Using fillers and discourse markers naturally",
            completed: false,
            subSkills: [
              { id: "b2-s6-1", title: "Well, Actually, Basically", completed: false },
              { id: "b2-s6-2", title: "To be honest, In my opinion", completed: false },
              { id: "b2-s6-3", title: "Having said that, On the other hand", completed: false },
            ]
          },
          {
            id: "b2-speak-7",
            title: "Gestionar turnos e interrupciones",
            description: "Managing turn-taking and interruptions",
            completed: false,
            subSkills: [
              { id: "b2-s7-1", title: "Interrumpir educadamente", completed: false },
              { id: "b2-s7-2", title: "Ceder el turno naturalmente", completed: false },
              { id: "b2-s7-3", title: "Retomar el turno", completed: false },
            ]
          },
          {
            id: "b2-speak-8",
            title: "Clarificar y reformular",
            description: "Clarifying, reformulating, and emphasizing",
            completed: false,
            subSkills: [
              { id: "b2-s8-1", title: "What I mean is...", completed: false },
              { id: "b2-s8-2", title: "Let me put it another way", completed: false },
              { id: "b2-s8-3", title: "The point I'm trying to make is...", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-listening",
        title: "Comprensión Auditiva",
        icon: "👂",
        description: "Entender inglés natural a velocidad normal",
        skills: [
          {
            id: "b2-list-1",
            title: "Series y películas",
            description: "TV shows and films with limited subtitles",
            completed: false,
            subSkills: [
              { id: "b2-l1-1", title: "Películas sin subtítulos", completed: false },
              { id: "b2-l1-2", title: "Series de TV complejas", completed: false },
              { id: "b2-l1-3", title: "Documentales", completed: false },
            ]
          },
          {
            id: "b2-list-2",
            title: "Podcasts y entrevistas",
            description: "Podcasts and interviews on various topics",
            completed: false,
            subSkills: [
              { id: "b2-l2-1", title: "Podcasts de noticias", completed: false },
              { id: "b2-l2-2", title: "Entrevistas con nativos", completed: false },
              { id: "b2-l2-3", title: "Debates y discusiones", completed: false },
            ]
          },
          {
            id: "b2-list-3",
            title: "Discusiones grupales",
            description: "Understanding group discussions",
            completed: false,
            subSkills: [
              { id: "b2-l3-1", title: "Seguir múltiples hablantes", completed: false },
              { id: "b2-l3-2", title: "Identificar opiniones diferentes", completed: false },
            ]
          },
          {
            id: "b2-list-4",
            title: "Acentos variados",
            description: "Different accents (US, UK, Australian, etc.)",
            completed: false,
            subSkills: [
              { id: "b2-l4-1", title: "Acento americano", completed: false },
              { id: "b2-l4-2", title: "Acento británico", completed: false },
              { id: "b2-l4-3", title: "Otros acentos (australiano, irlandés)", completed: false },
            ]
          },
          {
            id: "b2-list-5",
            title: "Significado implícito",
            description: "Understanding implied meaning and attitude",
            completed: false,
            subSkills: [
              { id: "b2-l5-1", title: "Detectar sarcasmo e ironía", completed: false },
              { id: "b2-l5-2", title: "Entender actitudes del hablante", completed: false },
              { id: "b2-l5-3", title: "Inferir lo no dicho", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-reading",
        title: "Comprensión Lectora",
        icon: "📖",
        description: "Textos complejos y abstractos - argumentación y análisis",
        skills: [
          {
            id: "b2-read-1",
            title: "Artículos de opinión",
            description: "Opinion articles and editorials",
            completed: false,
            subSkills: [
              { id: "b2-r1-1", title: "Identificar la tesis principal", completed: false },
              { id: "b2-r1-2", title: "Reconocer argumentos y evidencia", completed: false },
              { id: "b2-r1-3", title: "Evaluar la posición del autor", completed: false },
            ]
          },
          {
            id: "b2-read-2",
            title: "Informes y ensayos",
            description: "Reports and essays",
            completed: false,
            subSkills: [
              { id: "b2-r2-1", title: "Estructura de informes", completed: false },
              { id: "b2-r2-2", title: "Análisis de datos presentados", completed: false },
              { id: "b2-r2-3", title: "Conclusiones y recomendaciones", completed: false },
            ]
          },
          {
            id: "b2-read-3",
            title: "Noticias y editoriales",
            description: "News stories and editorials",
            completed: false,
            subSkills: [
              { id: "b2-r3-1", title: "Diferenciar hechos de opiniones", completed: false },
              { id: "b2-r3-2", title: "Sesgo en medios", completed: false },
            ]
          },
          {
            id: "b2-read-4",
            title: "Textos académicos o semi-técnicos",
            description: "Academic or semi-technical texts",
            completed: false,
            subSkills: [
              { id: "b2-r4-1", title: "Vocabulario especializado", completed: false },
              { id: "b2-r4-2", title: "Estructura académica", completed: false },
              { id: "b2-r4-3", title: "Referencias y citas", completed: false },
            ]
          },
          {
            id: "b2-read-5",
            title: "Emails y documentos extensos",
            description: "Long emails and documents",
            completed: false,
            subSkills: [
              { id: "b2-r5-1", title: "Correspondencia formal extensa", completed: false },
              { id: "b2-r5-2", title: "Manuales y guías", completed: false },
            ]
          },
          {
            id: "b2-read-6",
            title: "Habilidades de lectura avanzada",
            description: "Advanced reading skills",
            completed: false,
            subSkills: [
              { id: "b2-r6-1", title: "Identificar estructura argumentativa", completed: false },
              { id: "b2-r6-2", title: "Entender significado implícito", completed: false },
              { id: "b2-r6-3", title: "Evaluar puntos de vista", completed: false },
              { id: "b2-r6-4", title: "Inferir del contexto", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-writing",
        title: "Expresión Escrita",
        icon: "✍️",
        description: "Escritura coherente y estructurada - argumentación clara",
        skills: [
          {
            id: "b2-write-1",
            title: "Ensayos con argumentos claros",
            description: "Essays with clear arguments",
            completed: false,
            subSkills: [
              { id: "b2-w1-1", title: "Introducción con tesis", completed: false },
              { id: "b2-w1-2", title: "Párrafos de desarrollo", completed: false },
              { id: "b2-w1-3", title: "Conclusión efectiva", completed: false },
            ]
          },
          {
            id: "b2-write-2",
            title: "Informes y propuestas",
            description: "Reports and proposals",
            completed: false,
            subSkills: [
              { id: "b2-w2-1", title: "Formato de informe formal", completed: false },
              { id: "b2-w2-2", title: "Recomendaciones claras", completed: false },
              { id: "b2-w2-3", title: "Propuestas de acción", completed: false },
            ]
          },
          {
            id: "b2-write-3",
            title: "Emails formales e informales",
            description: "Formal and informal emails",
            completed: false,
            subSkills: [
              { id: "b2-w3-1", title: "Registro apropiado", completed: false },
              { id: "b2-w3-2", title: "Fórmulas de cortesía", completed: false },
              { id: "b2-w3-3", title: "Estructura clara", completed: false },
            ]
          },
          {
            id: "b2-write-4",
            title: "Reseñas",
            description: "Reviews (films, books, places)",
            completed: false,
            subSkills: [
              { id: "b2-w4-1", title: "Reseñas de películas/libros", completed: false },
              { id: "b2-w4-2", title: "Reseñas de lugares/restaurantes", completed: false },
              { id: "b2-w4-3", title: "Opiniones equilibradas", completed: false },
            ]
          },
          {
            id: "b2-write-5",
            title: "Artículos de opinión",
            description: "Articles expressing opinions",
            completed: false,
            subSkills: [
              { id: "b2-w5-1", title: "Titular y enganche", completed: false },
              { id: "b2-w5-2", title: "Desarrollar argumentos", completed: false },
              { id: "b2-w5-3", title: "Conclusión impactante", completed: false },
            ]
          },
          {
            id: "b2-write-6",
            title: "Cohesión y coherencia",
            description: "Focus on cohesion and coherence",
            completed: false,
            subSkills: [
              { id: "b2-w6-1", title: "Conectores variados", completed: false },
              { id: "b2-w6-2", title: "Referencia y sustitución", completed: false },
              { id: "b2-w6-3", title: "Unidad de párrafo", completed: false },
            ]
          },
          {
            id: "b2-write-7",
            title: "Precisión gramatical",
            description: "Accurate grammar in writing",
            completed: false,
            subSkills: [
              { id: "b2-w7-1", title: "Gramática correcta", completed: false },
              { id: "b2-w7-2", title: "Puntuación apropiada", completed: false },
            ]
          },
          {
            id: "b2-write-8",
            title: "Tono y registro",
            description: "Appropriate tone and register",
            completed: false,
            subSkills: [
              { id: "b2-w8-1", title: "Adaptar el tono al lector", completed: false },
              { id: "b2-w8-2", title: "Mantener consistencia de registro", completed: false },
            ]
          },
        ]
      },
      {
        id: "b2-strategy",
        title: "Competencia Discursiva y Pragmática",
        icon: "🧭",
        description: "Control del discurso - esencial a nivel B2",
        skills: [
          {
            id: "b2-strat-1",
            title: "Parafrasear con precisión",
            description: "Paraphrasing precisely",
            completed: false,
            subSkills: [
              { id: "b2-st1-1", title: "Reformular ideas complejas", completed: false },
              { id: "b2-st1-2", title: "Usar sinónimos efectivamente", completed: false },
            ]
          },
          {
            id: "b2-strat-2",
            title: "Matizar opiniones",
            description: "Hedging opinions (It seems that..., I tend to think...)",
            completed: false,
            subSkills: [
              { id: "b2-st2-1", title: "It seems that, It appears", completed: false },
              { id: "b2-st2-2", title: "I tend to think, I would argue", completed: false },
              { id: "b2-st2-3", title: "To some extent, In a way", completed: false },
            ]
          },
          {
            id: "b2-strat-3",
            title: "Gestionar desacuerdos",
            description: "Managing disagreement politely",
            completed: false,
            subSkills: [
              { id: "b2-st3-1", title: "I see your point, but...", completed: false },
              { id: "b2-st3-2", title: "I'm not sure I agree entirely", completed: false },
              { id: "b2-st3-3", title: "That's a valid point, however...", completed: false },
            ]
          },
          {
            id: "b2-strat-4",
            title: "Reparar malentendidos",
            description: "Repairing misunderstandings smoothly",
            completed: false,
            subSkills: [
              { id: "b2-st4-1", title: "Reconocer el malentendido", completed: false },
              { id: "b2-st4-2", title: "Aclarar tu intención", completed: false },
              { id: "b2-st4-3", title: "Confirmar la comprensión", completed: false },
            ]
          },
          {
            id: "b2-strat-5",
            title: "Usar énfasis y matices",
            description: "Using emphasis and nuance",
            completed: false,
            subSkills: [
              { id: "b2-st5-1", title: "Palabras de énfasis (absolutely, definitely)", completed: false },
              { id: "b2-st5-2", title: "Estructuras enfáticas (What I want is...)", completed: false },
            ]
          },
          {
            id: "b2-strat-6",
            title: "Estructurar respuestas largas",
            description: "Structuring long spoken responses",
            completed: false,
            subSkills: [
              { id: "b2-st6-1", title: "Firstly, Secondly, Finally", completed: false },
              { id: "b2-st6-2", title: "To begin with, Moving on to", completed: false },
              { id: "b2-st6-3", title: "In conclusion, To sum up", completed: false },
            ]
          },
        ]
      },
    ]
  },
  {
    level: "C1",
    title: "Avanzado",
    description: "Usuario altamente autónomo, preciso y socialmente efectivo en contextos académicos, profesionales y sociales complejos",
    targetVocabulary: "6,000-8,000 palabras (uso activo)",
    estimatedHours: 600,
    categories: [
      {
        id: "c1-vocabulary",
        title: "Dominio Léxico",
        icon: "📚",
        description: "Profundidad, precisión y registro - control léxico casi nativo",
        skills: [
          {
            id: "c1-vocab-1",
            title: "Diferencias de significado precisas",
            description: "Fine-grained meaning differences",
            completed: false,
            subSkills: [
              { id: "c1-v1-1", title: "assume vs presume", completed: false },
              { id: "c1-v1-2", title: "affect vs effect", completed: false },
              { id: "c1-v1-3", title: "imply vs infer", completed: false },
              { id: "c1-v1-4", title: "comprise vs compose", completed: false },
              { id: "c1-v1-5", title: "continual vs continuous", completed: false },
            ]
          },
          {
            id: "c1-vocab-2",
            title: "Vocabulario abstracto y técnico",
            description: "Abstract & technical vocabulary",
            completed: false,
            subSkills: [
              { id: "c1-v2-1", title: "Política y gobierno (policy, legislation, reform)", completed: false },
              { id: "c1-v2-2", title: "Ética y filosofía (ethics, morality, principles)", completed: false },
              { id: "c1-v2-3", title: "Metodología (approach, framework, analysis)", completed: false },
              { id: "c1-v2-4", title: "Economía y finanzas (investment, inflation, revenue)", completed: false },
              { id: "c1-v2-5", title: "Ciencia y tecnología (hypothesis, variables, data)", completed: false },
            ]
          },
          {
            id: "c1-vocab-3",
            title: "Modismos y expresiones fijas",
            description: "Idioms, fixed expressions, and metaphor",
            completed: false,
            subSkills: [
              { id: "c1-v3-1", title: "Modismos de negocios (the bottom line, think outside the box)", completed: false },
              { id: "c1-v3-2", title: "Modismos académicos (food for thought, in the same vein)", completed: false },
              { id: "c1-v3-3", title: "Metáforas comunes (tip of the iceberg, light at the end)", completed: false },
              { id: "c1-v3-4", title: "Expresiones formales (by and large, for the most part)", completed: false },
            ]
          },
          {
            id: "c1-vocab-4",
            title: "Colocaciones avanzadas",
            description: "Advanced collocations",
            completed: false,
            subSkills: [
              { id: "c1-v4-1", title: "pose a threat / challenge / question", completed: false },
              { id: "c1-v4-2", title: "draw a conclusion / comparison / distinction", completed: false },
              { id: "c1-v4-3", title: "reach an agreement / consensus / decision", completed: false },
              { id: "c1-v4-4", title: "exert influence / pressure / control", completed: false },
              { id: "c1-v4-5", title: "bear in mind / responsibility / resemblance", completed: false },
            ]
          },
          {
            id: "c1-vocab-5",
            title: "Control de registro",
            description: "Register control (formal, neutral, informal, academic)",
            completed: false,
            subSkills: [
              { id: "c1-v5-1", title: "Registro formal (commence, enquire, therefore)", completed: false },
              { id: "c1-v5-2", title: "Registro neutro (start, ask, so)", completed: false },
              { id: "c1-v5-3", title: "Registro informal (kick off, check out, anyway)", completed: false },
              { id: "c1-v5-4", title: "Registro académico (furthermore, notwithstanding, hence)", completed: false },
            ]
          },
          {
            id: "c1-vocab-6",
            title: "Connotación y tono",
            description: "Connotation & tone (neutral vs critical vs ironic)",
            completed: false,
            subSkills: [
              { id: "c1-v6-1", title: "Vocabulario neutral vs crítico", completed: false },
              { id: "c1-v6-2", title: "Tono irónico y sarcástico", completed: false },
              { id: "c1-v6-3", title: "Eufemismos y lenguaje diplomático", completed: false },
              { id: "c1-v6-4", title: "Intensificadores y atenuadores", completed: false },
            ]
          },
          {
            id: "c1-vocab-7",
            title: "Formación de palabras",
            description: "Word formation and derivation fluency",
            completed: false,
            subSkills: [
              { id: "c1-v7-1", title: "Prefijos avanzados (counter-, ultra-, pseudo-)", completed: false },
              { id: "c1-v7-2", title: "Sufijos nominales (-ation, -ment, -ity)", completed: false },
              { id: "c1-v7-3", title: "Sufijos adjetivales (-ive, -ous, -al)", completed: false },
              { id: "c1-v7-4", title: "Familias de palabras completas", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-grammar",
        title: "Gramática y Sintaxis Avanzada",
        icon: "🧩",
        description: "Sofisticación estructural - de gramática flexible a control estilístico",
        skills: [
          {
            id: "c1-gram-1",
            title: "Estructuras de cláusulas complejas",
            description: "Complex clause structures",
            completed: false,
            subSkills: [
              { id: "c1-g1-1", title: "Cláusulas subordinadas múltiples", completed: false },
              { id: "c1-g1-2", title: "Cláusulas reducidas (participio)", completed: false },
              { id: "c1-g1-3", title: "Cláusulas nominales complejas", completed: false },
            ]
          },
          {
            id: "c1-gram-2",
            title: "Subordinación e incrustación",
            description: "Subordination & embedding",
            completed: false,
            subSkills: [
              { id: "c1-g2-1", title: "Cláusulas incrustadas profundas", completed: false },
              { id: "c1-g2-2", title: "Estructuras de relativo complejas", completed: false },
              { id: "c1-g2-3", title: "Complementos oracionales", completed: false },
            ]
          },
          {
            id: "c1-gram-3",
            title: "Todos los condicionales (incluyendo mixtos)",
            description: "All conditionals including mixed",
            completed: false,
            subSkills: [
              { id: "c1-g3-1", title: "Tercer condicional perfecto", completed: false },
              { id: "c1-g3-2", title: "Mixtos: pasado irreal → presente (If I had studied, I would know)", completed: false },
              { id: "c1-g3-3", title: "Mixtos: presente irreal → pasado (If I were taller, I would have been selected)", completed: false },
              { id: "c1-g3-4", title: "Condicionales con modales alternativos", completed: false },
            ]
          },
          {
            id: "c1-gram-4",
            title: "Construcciones pasivas avanzadas",
            description: "Advanced passive constructions",
            completed: false,
            subSkills: [
              { id: "c1-g4-1", title: "Pasiva con verbos de reporte (It is believed that...)", completed: false },
              { id: "c1-g4-2", title: "Pasiva causativa (have/get something done)", completed: false },
              { id: "c1-g4-3", title: "Pasiva con infinitivo (He is said to be...)", completed: false },
              { id: "c1-g4-4", title: "Pasiva impersonal", completed: false },
            ]
          },
          {
            id: "c1-gram-5",
            title: "Nominalización",
            description: "Nominalisation (The implementation of…)",
            completed: false,
            subSkills: [
              { id: "c1-g5-1", title: "Convertir verbos en sustantivos", completed: false },
              { id: "c1-g5-2", title: "Convertir adjetivos en sustantivos", completed: false },
              { id: "c1-g5-3", title: "Estructuras nominales complejas", completed: false },
              { id: "c1-g5-4", title: "Uso en escritura académica", completed: false },
            ]
          },
          {
            id: "c1-gram-6",
            title: "Inversión y énfasis",
            description: "Inversion & emphasis",
            completed: false,
            subSkills: [
              { id: "c1-g6-1", title: "Not only... but also (inversión)", completed: false },
              { id: "c1-g6-2", title: "Had I known... (inversión condicional)", completed: false },
              { id: "c1-g6-3", title: "Never have I seen... (inversión negativa)", completed: false },
              { id: "c1-g6-4", title: "Rarely does one find... (inversión con adverbios)", completed: false },
              { id: "c1-g6-5", title: "Cleft sentences (What I need is... / It was John who...)", completed: false },
            ]
          },
          {
            id: "c1-gram-7",
            title: "Elipsis y sustitución",
            description: "Ellipsis & substitution",
            completed: false,
            subSkills: [
              { id: "c1-g7-1", title: "Elipsis nominal (I'll have the red one)", completed: false },
              { id: "c1-g7-2", title: "Elipsis verbal (She can swim and so can I)", completed: false },
              { id: "c1-g7-3", title: "Sustitución con 'do', 'so', 'one'", completed: false },
              { id: "c1-g7-4", title: "Evitar repetición en textos formales", completed: false },
            ]
          },
          {
            id: "c1-gram-8",
            title: "Gramática a nivel de discurso",
            description: "Discourse-level grammar",
            completed: false,
            subSkills: [
              { id: "c1-g8-1", title: "Cohesión léxica y gramatical", completed: false },
              { id: "c1-g8-2", title: "Referencia anafórica y catafórica", completed: false },
              { id: "c1-g8-3", title: "Conectores de discurso avanzados", completed: false },
            ]
          },
          {
            id: "c1-gram-9",
            title: "Puntuación precisa para significado",
            description: "Accurate punctuation for meaning",
            completed: false,
            subSkills: [
              { id: "c1-g9-1", title: "Punto y coma vs coma", completed: false },
              { id: "c1-g9-2", title: "Dos puntos para énfasis", completed: false },
              { id: "c1-g9-3", title: "Guiones y paréntesis", completed: false },
              { id: "c1-g9-4", title: "Apóstrofos en casos complejos", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-speaking",
        title: "Expresión Oral: Control Retórico e Interactivo",
        icon: "🗣️",
        description: "Discurso hablado de alto nivel - de conversación fluida a habla articulada y persuasiva",
        skills: [
          {
            id: "c1-speak-1",
            title: "Expresar ideas espontánea y precisamente",
            description: "Express ideas spontaneously and precisely",
            completed: false,
            subSkills: [
              { id: "c1-s1-1", title: "Hablar sin preparación sobre temas complejos", completed: false },
              { id: "c1-s1-2", title: "Encontrar palabras precisas rápidamente", completed: false },
              { id: "c1-s1-3", title: "Auto-corregirse sin perder fluidez", completed: false },
            ]
          },
          {
            id: "c1-speak-2",
            title: "Desarrollar argumentos extendidos coherentemente",
            description: "Develop extended arguments coherently",
            completed: false,
            subSkills: [
              { id: "c1-s2-1", title: "Estructurar argumentos lógicamente", completed: false },
              { id: "c1-s2-2", title: "Proporcionar evidencia y ejemplos", completed: false },
              { id: "c1-s2-3", title: "Anticipar contraargumentos", completed: false },
              { id: "c1-s2-4", title: "Concluir efectivamente", completed: false },
            ]
          },
          {
            id: "c1-speak-3",
            title: "Persuadir, negociar e hipotetizar",
            description: "Persuade, negotiate, and hypothesise",
            completed: false,
            subSkills: [
              { id: "c1-s3-1", title: "Técnicas de persuasión", completed: false },
              { id: "c1-s3-2", title: "Negociación y compromiso", completed: false },
              { id: "c1-s3-3", title: "Especulación sobre escenarios", completed: false },
              { id: "c1-s3-4", title: "Proponer soluciones alternativas", completed: false },
            ]
          },
          {
            id: "c1-speak-4",
            title: "Adaptar el habla a audiencia y contexto",
            description: "Adapt speech to audience and context",
            completed: false,
            subSkills: [
              { id: "c1-s4-1", title: "Ajustar formalidad según situación", completed: false },
              { id: "c1-s4-2", title: "Modificar complejidad para la audiencia", completed: false },
              { id: "c1-s4-3", title: "Cambiar tono apropiadamente", completed: false },
            ]
          },
          {
            id: "c1-speak-5",
            title: "Gestionar turnos complejos",
            description: "Manage complex turn-taking",
            completed: false,
            subSkills: [
              { id: "c1-s5-1", title: "Interrumpir educadamente", completed: false },
              { id: "c1-s5-2", title: "Mantener el turno bajo presión", completed: false },
              { id: "c1-s5-3", title: "Ceder el turno elegantemente", completed: false },
              { id: "c1-s5-4", title: "Moderar discusiones grupales", completed: false },
            ]
          },
          {
            id: "c1-speak-6",
            title: "Usar atenuación, énfasis y matices",
            description: "Use hedging, emphasis, and nuance",
            completed: false,
            subSkills: [
              { id: "c1-s6-1", title: "Hedging (It seems that..., I tend to think...)", completed: false },
              { id: "c1-s6-2", title: "Énfasis retórico", completed: false },
              { id: "c1-s6-3", title: "Expresar certeza graduada", completed: false },
              { id: "c1-s6-4", title: "Matizar opiniones fuertes", completed: false },
            ]
          },
          {
            id: "c1-speak-7",
            title: "Transmitir postura y desacuerdo sutil",
            description: "Convey stance, attitude, and subtle disagreement",
            completed: false,
            subSkills: [
              { id: "c1-s7-1", title: "Expresar escepticismo diplomáticamente", completed: false },
              { id: "c1-s7-2", title: "Desacordar sin confrontar", completed: false },
              { id: "c1-s7-3", title: "Mostrar actitud mediante entonación", completed: false },
            ]
          },
          {
            id: "c1-speak-8",
            title: "Mantener coherencia en habla extendida",
            description: "Maintain coherence over long stretches of speech",
            completed: false,
            subSkills: [
              { id: "c1-s8-1", title: "Señalizar estructura del discurso", completed: false },
              { id: "c1-s8-2", title: "Resumir puntos anteriores", completed: false },
              { id: "c1-s8-3", title: "Conectar ideas a lo largo del tiempo", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-listening",
        title: "Comprensión Auditiva: Competencia Interpretativa",
        icon: "👂",
        description: "Entender significado implícito - de entender contenido a entender intención",
        skills: [
          {
            id: "c1-list-1",
            title: "Habla rápida y natural",
            description: "Fast, natural speech",
            completed: false,
            subSkills: [
              { id: "c1-l1-1", title: "Velocidad nativa sin adaptación", completed: false },
              { id: "c1-l1-2", title: "Habla conectada y reducciones", completed: false },
              { id: "c1-l1-3", title: "Múltiples hablantes simultáneos", completed: false },
            ]
          },
          {
            id: "c1-list-2",
            title: "Conferencias académicas",
            description: "Academic lectures",
            completed: false,
            subSkills: [
              { id: "c1-l2-1", title: "Seguir argumentos complejos", completed: false },
              { id: "c1-l2-2", title: "Identificar puntos principales y secundarios", completed: false },
              { id: "c1-l2-3", title: "Tomar notas efectivas", completed: false },
            ]
          },
          {
            id: "c1-list-3",
            title: "Reuniones profesionales",
            description: "Professional meetings",
            completed: false,
            subSkills: [
              { id: "c1-l3-1", title: "Discusiones de negocios", completed: false },
              { id: "c1-l3-2", title: "Negociaciones y debates", completed: false },
              { id: "c1-l3-3", title: "Presentaciones técnicas", completed: false },
            ]
          },
          {
            id: "c1-list-4",
            title: "Discusiones y debates en medios",
            description: "Media discussions & debates",
            completed: false,
            subSkills: [
              { id: "c1-l4-1", title: "Programas de noticias y análisis", completed: false },
              { id: "c1-l4-2", title: "Podcasts complejos", completed: false },
              { id: "c1-l4-3", title: "Documentales sin subtítulos", completed: false },
            ]
          },
          {
            id: "c1-list-5",
            title: "Lenguaje idiomático y figurativo",
            description: "Idiomatic and figurative language",
            completed: false,
            subSkills: [
              { id: "c1-l5-1", title: "Modismos en contexto", completed: false },
              { id: "c1-l5-2", title: "Metáforas y analogías", completed: false },
              { id: "c1-l5-3", title: "Referencias culturales", completed: false },
            ]
          },
          {
            id: "c1-list-6",
            title: "Ironía, humor y subestimación",
            description: "Irony, humour, understatement",
            completed: false,
            subSkills: [
              { id: "c1-l6-1", title: "Detectar ironía y sarcasmo", completed: false },
              { id: "c1-l6-2", title: "Entender humor británico vs americano", completed: false },
              { id: "c1-l6-3", title: "Reconocer subestimación (understatement)", completed: false },
            ]
          },
          {
            id: "c1-list-7",
            title: "Actitud y postura del hablante",
            description: "Attitude and speaker stance",
            completed: false,
            subSkills: [
              { id: "c1-l7-1", title: "Identificar opinión vs hecho", completed: false },
              { id: "c1-l7-2", title: "Detectar sesgo y perspectiva", completed: false },
              { id: "c1-l7-3", title: "Interpretar tono emocional", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-reading",
        title: "Lectura: Habilidades Analíticas y Críticas",
        icon: "📖",
        description: "Textos densos, abstractos y académicos - de comprensión a evaluación y síntesis",
        skills: [
          {
            id: "c1-read-1",
            title: "Artículos académicos",
            description: "Academic articles",
            completed: false,
            subSkills: [
              { id: "c1-r1-1", title: "Journals y revistas especializadas", completed: false },
              { id: "c1-r1-2", title: "Abstracts y conclusiones", completed: false },
              { id: "c1-r1-3", title: "Metodología y resultados", completed: false },
            ]
          },
          {
            id: "c1-read-2",
            title: "Papers de investigación",
            description: "Research papers",
            completed: false,
            subSkills: [
              { id: "c1-r2-1", title: "Estructura de papers académicos", completed: false },
              { id: "c1-r2-2", title: "Análisis de datos y estadísticas", completed: false },
              { id: "c1-r2-3", title: "Revisión de literatura", completed: false },
            ]
          },
          {
            id: "c1-read-3",
            title: "Editoriales y ensayos",
            description: "Editorials & essays",
            completed: false,
            subSkills: [
              { id: "c1-r3-1", title: "Opinión editorial en periódicos de calidad", completed: false },
              { id: "c1-r3-2", title: "Ensayos argumentativos", completed: false },
              { id: "c1-r3-3", title: "Críticas y reseñas extensas", completed: false },
            ]
          },
          {
            id: "c1-read-4",
            title: "Documentos de política",
            description: "Policy documents",
            completed: false,
            subSkills: [
              { id: "c1-r4-1", title: "Informes gubernamentales", completed: false },
              { id: "c1-r4-2", title: "White papers", completed: false },
              { id: "c1-r4-3", title: "Propuestas y recomendaciones", completed: false },
            ]
          },
          {
            id: "c1-read-5",
            title: "Periodismo de formato largo",
            description: "Long-form journalism",
            completed: false,
            subSkills: [
              { id: "c1-r5-1", title: "Artículos investigativos", completed: false },
              { id: "c1-r5-2", title: "Reportajes en profundidad", completed: false },
              { id: "c1-r5-3", title: "Perfiles y entrevistas extensas", completed: false },
            ]
          },
          {
            id: "c1-read-6",
            title: "Literatura (no simplificada)",
            description: "Literature (non-simplified)",
            completed: false,
            subSkills: [
              { id: "c1-r6-1", title: "Novelas contemporáneas", completed: false },
              { id: "c1-r6-2", title: "Clásicos de literatura inglesa", completed: false },
              { id: "c1-r6-3", title: "Poesía y drama", completed: false },
            ]
          },
          {
            id: "c1-read-7",
            title: "Identificar argumentos implícitos",
            description: "Identify implicit arguments",
            completed: false,
            subSkills: [
              { id: "c1-r7-1", title: "Leer entre líneas", completed: false },
              { id: "c1-r7-2", title: "Detectar suposiciones subyacentes", completed: false },
              { id: "c1-r7-3", title: "Inferir intención del autor", completed: false },
            ]
          },
          {
            id: "c1-read-8",
            title: "Evaluar afirmaciones críticamente",
            description: "Evaluate claims critically",
            completed: false,
            subSkills: [
              { id: "c1-r8-1", title: "Analizar evidencia y fuentes", completed: false },
              { id: "c1-r8-2", title: "Identificar falacias lógicas", completed: false },
              { id: "c1-r8-3", title: "Comparar perspectivas opuestas", completed: false },
            ]
          },
          {
            id: "c1-read-9",
            title: "Sintetizar información de múltiples fuentes",
            description: "Synthesize information from multiple sources",
            completed: false,
            subSkills: [
              { id: "c1-r9-1", title: "Combinar información de varios textos", completed: false },
              { id: "c1-r9-2", title: "Crear resúmenes integrados", completed: false },
              { id: "c1-r9-3", title: "Identificar consenso y desacuerdo", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-writing",
        title: "Escritura: Control Avanzado y Estilo",
        icon: "✍️",
        description: "Producción escrita sofisticada - de textos bien estructurados a escritura controlada y pulida",
        skills: [
          {
            id: "c1-write-1",
            title: "Ensayos académicos",
            description: "Academic essays",
            completed: false,
            subSkills: [
              { id: "c1-w1-1", title: "Tesis clara y argumentación", completed: false },
              { id: "c1-w1-2", title: "Estructura de párrafos académicos", completed: false },
              { id: "c1-w1-3", title: "Citación y referencias", completed: false },
              { id: "c1-w1-4", title: "Conclusiones efectivas", completed: false },
            ]
          },
          {
            id: "c1-write-2",
            title: "Informes y propuestas",
            description: "Reports & proposals",
            completed: false,
            subSkills: [
              { id: "c1-w2-1", title: "Estructura de informes profesionales", completed: false },
              { id: "c1-w2-2", title: "Executive summaries", completed: false },
              { id: "c1-w2-3", title: "Recomendaciones y acciones", completed: false },
            ]
          },
          {
            id: "c1-write-3",
            title: "Reseñas críticas",
            description: "Critical reviews",
            completed: false,
            subSkills: [
              { id: "c1-w3-1", title: "Reseñas de libros y artículos", completed: false },
              { id: "c1-w3-2", title: "Análisis crítico equilibrado", completed: false },
              { id: "c1-w3-3", title: "Evaluación de fortalezas y debilidades", completed: false },
            ]
          },
          {
            id: "c1-write-4",
            title: "Position papers",
            description: "Position papers",
            completed: false,
            subSkills: [
              { id: "c1-w4-1", title: "Argumentación de una postura", completed: false },
              { id: "c1-w4-2", title: "Contraargumentos y refutación", completed: false },
              { id: "c1-w4-3", title: "Evidencia y ejemplos persuasivos", completed: false },
            ]
          },
          {
            id: "c1-write-5",
            title: "Correspondencia formal",
            description: "Formal correspondence",
            completed: false,
            subSkills: [
              { id: "c1-w5-1", title: "Emails profesionales complejos", completed: false },
              { id: "c1-w5-2", title: "Cartas formales de negocio", completed: false },
              { id: "c1-w5-3", title: "Comunicación diplomática", completed: false },
            ]
          },
          {
            id: "c1-write-6",
            title: "Cohesión y coherencia avanzada",
            description: "Cohesion across paragraphs",
            completed: false,
            subSkills: [
              { id: "c1-w6-1", title: "Conectores de discurso avanzados", completed: false },
              { id: "c1-w6-2", title: "Transiciones entre secciones", completed: false },
              { id: "c1-w6-3", title: "Referencia y sustitución efectiva", completed: false },
            ]
          },
          {
            id: "c1-write-7",
            title: "Hedging y marcadores de postura",
            description: "Hedging and stance markers",
            completed: false,
            subSkills: [
              { id: "c1-w7-1", title: "Expresar certeza y duda", completed: false },
              { id: "c1-w7-2", title: "Lenguaje tentativo en academia", completed: false },
              { id: "c1-w7-3", title: "Posicionamiento del autor", completed: false },
            ]
          },
          {
            id: "c1-write-8",
            title: "Variación estilística",
            description: "Stylistic variation",
            completed: false,
            subSkills: [
              { id: "c1-w8-1", title: "Variar longitud de oraciones", completed: false },
              { id: "c1-w8-2", title: "Usar voz activa vs pasiva estratégicamente", completed: false },
              { id: "c1-w8-3", title: "Adaptar estilo al propósito", completed: false },
            ]
          },
        ]
      },
      {
        id: "c1-strategies",
        title: "Habilidades Pragmáticas y Metacognitivas",
        icon: "🧭",
        description: "Inteligencia comunicativa esencial en C1",
        skills: [
          {
            id: "c1-strat-1",
            title: "Parafrasear con precisión",
            description: "Strategic paraphrasing",
            completed: false,
            subSkills: [
              { id: "c1-st1-1", title: "Reformular ideas complejas", completed: false },
              { id: "c1-st1-2", title: "Simplificar para diferentes audiencias", completed: false },
              { id: "c1-st1-3", title: "Mantener significado con diferentes palabras", completed: false },
            ]
          },
          {
            id: "c1-strat-2",
            title: "Reparar malentendidos sutilmente",
            description: "Repairing misunderstandings subtly",
            completed: false,
            subSkills: [
              { id: "c1-st2-1", title: "Detectar malentendidos temprano", completed: false },
              { id: "c1-st2-2", title: "Clarificar sin ofender", completed: false },
              { id: "c1-st2-3", title: "Reformular de manera elegante", completed: false },
            ]
          },
          {
            id: "c1-strat-3",
            title: "Manejar actos amenazantes",
            description: "Managing face-threatening acts",
            completed: false,
            subSkills: [
              { id: "c1-st3-1", title: "Dar malas noticias diplomáticamente", completed: false },
              { id: "c1-st3-2", title: "Criticar constructivamente", completed: false },
              { id: "c1-st3-3", title: "Rechazar propuestas elegantemente", completed: false },
            ]
          },
          {
            id: "c1-strat-4",
            title: "Leer señales sociales",
            description: "Reading social cues",
            completed: false,
            subSkills: [
              { id: "c1-st4-1", title: "Interpretar lenguaje corporal", completed: false },
              { id: "c1-st4-2", title: "Detectar incomodidad o desacuerdo", completed: false },
              { id: "c1-st4-3", title: "Ajustar según reacciones", completed: false },
            ]
          },
          {
            id: "c1-strat-5",
            title: "Ajustar tono durante la interacción",
            description: "Adjusting tone mid-interaction",
            completed: false,
            subSkills: [
              { id: "c1-st5-1", title: "Escalar o desescalar tensión", completed: false },
              { id: "c1-st5-2", title: "Cambiar de formal a informal apropiadamente", completed: false },
              { id: "c1-st5-3", title: "Adaptar a cambios en la conversación", completed: false },
            ]
          },
          {
            id: "c1-strat-6",
            title: "Monitorear el propio output en tiempo real",
            description: "Monitoring own output in real time",
            completed: false,
            subSkills: [
              { id: "c1-st6-1", title: "Auto-evaluación durante el habla", completed: false },
              { id: "c1-st6-2", title: "Corrección inmediata de errores", completed: false },
              { id: "c1-st6-3", title: "Mantener coherencia general", completed: false },
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

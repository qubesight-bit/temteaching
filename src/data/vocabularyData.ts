export interface VocabularyCategory {
  id: string;
  title: string;
  icon: string;
  wordCount: number;
  learned: number;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  words: Word[];
}

export interface Word {
  id: string;
  english: string;
  spanish: string;
  pronunciation: string;
  example: string;
  exampleTranslation: string;
  mastered: boolean;
}

export const vocabularyCategories: VocabularyCategory[] = [
  {
    id: "greetings",
    title: "Saludos y Presentaciones",
    icon: "👋",
    wordCount: 25,
    learned: 22,
    level: "A1",
    words: [
      { id: "g1", english: "Hello", spanish: "Hola", pronunciation: "/həˈloʊ/", example: "Hello, how are you?", exampleTranslation: "Hola, ¿cómo estás?", mastered: true },
      { id: "g2", english: "Goodbye", spanish: "Adiós", pronunciation: "/ɡʊdˈbaɪ/", example: "Goodbye, see you tomorrow!", exampleTranslation: "Adiós, ¡nos vemos mañana!", mastered: true },
      { id: "g3", english: "Good morning", spanish: "Buenos días", pronunciation: "/ɡʊd ˈmɔːrnɪŋ/", example: "Good morning, everyone!", exampleTranslation: "¡Buenos días a todos!", mastered: true },
      { id: "g4", english: "Nice to meet you", spanish: "Encantado de conocerte", pronunciation: "/naɪs tuː miːt juː/", example: "Nice to meet you. I'm John.", exampleTranslation: "Encantado de conocerte. Soy John.", mastered: true },
      { id: "g5", english: "How are you?", spanish: "¿Cómo estás?", pronunciation: "/haʊ ɑːr juː/", example: "Hi! How are you doing today?", exampleTranslation: "¡Hola! ¿Cómo te va hoy?", mastered: false },
    ]
  },
  {
    id: "family",
    title: "Familia",
    icon: "👨‍👩‍👧‍👦",
    wordCount: 30,
    learned: 28,
    level: "A1",
    words: [
      { id: "f1", english: "Mother", spanish: "Madre", pronunciation: "/ˈmʌðər/", example: "My mother is a teacher.", exampleTranslation: "Mi madre es profesora.", mastered: true },
      { id: "f2", english: "Father", spanish: "Padre", pronunciation: "/ˈfɑːðər/", example: "My father works at a bank.", exampleTranslation: "Mi padre trabaja en un banco.", mastered: true },
      { id: "f3", english: "Brother", spanish: "Hermano", pronunciation: "/ˈbrʌðər/", example: "I have two brothers.", exampleTranslation: "Tengo dos hermanos.", mastered: true },
      { id: "f4", english: "Sister", spanish: "Hermana", pronunciation: "/ˈsɪstər/", example: "My sister lives in London.", exampleTranslation: "Mi hermana vive en Londres.", mastered: true },
      { id: "f5", english: "Grandfather", spanish: "Abuelo", pronunciation: "/ˈɡrænfɑːðər/", example: "My grandfather is 80 years old.", exampleTranslation: "Mi abuelo tiene 80 años.", mastered: false },
    ]
  },
  {
    id: "food",
    title: "Comida y Bebida",
    icon: "🍕",
    wordCount: 50,
    learned: 35,
    level: "A1",
    words: [
      { id: "fd1", english: "Water", spanish: "Agua", pronunciation: "/ˈwɔːtər/", example: "Can I have some water, please?", exampleTranslation: "¿Puedo tomar agua, por favor?", mastered: true },
      { id: "fd2", english: "Bread", spanish: "Pan", pronunciation: "/bred/", example: "I eat bread for breakfast.", exampleTranslation: "Como pan para desayunar.", mastered: true },
      { id: "fd3", english: "Coffee", spanish: "Café", pronunciation: "/ˈkɔːfi/", example: "I drink coffee every morning.", exampleTranslation: "Bebo café todas las mañanas.", mastered: true },
      { id: "fd4", english: "Delicious", spanish: "Delicioso", pronunciation: "/dɪˈlɪʃəs/", example: "This cake is delicious!", exampleTranslation: "¡Este pastel está delicioso!", mastered: false },
      { id: "fd5", english: "Restaurant", spanish: "Restaurante", pronunciation: "/ˈrestərɒnt/", example: "Let's go to that new restaurant.", exampleTranslation: "Vamos a ese nuevo restaurante.", mastered: true },
    ]
  },
  {
    id: "travel",
    title: "Viajes y Transporte",
    icon: "✈️",
    wordCount: 45,
    learned: 30,
    level: "A2",
    words: [
      { id: "t1", english: "Airport", spanish: "Aeropuerto", pronunciation: "/ˈeərpɔːrt/", example: "The airport is 30 minutes away.", exampleTranslation: "El aeropuerto está a 30 minutos.", mastered: true },
      { id: "t2", english: "Flight", spanish: "Vuelo", pronunciation: "/flaɪt/", example: "My flight leaves at 8 AM.", exampleTranslation: "Mi vuelo sale a las 8 AM.", mastered: true },
      { id: "t3", english: "Passport", spanish: "Pasaporte", pronunciation: "/ˈpæspɔːrt/", example: "Don't forget your passport!", exampleTranslation: "¡No olvides tu pasaporte!", mastered: false },
      { id: "t4", english: "Luggage", spanish: "Equipaje", pronunciation: "/ˈlʌɡɪdʒ/", example: "I need to pick up my luggage.", exampleTranslation: "Necesito recoger mi equipaje.", mastered: true },
      { id: "t5", english: "Reservation", spanish: "Reservación", pronunciation: "/ˌrezərˈveɪʃn/", example: "I have a reservation for tonight.", exampleTranslation: "Tengo una reservación para esta noche.", mastered: false },
    ]
  },
  {
    id: "work",
    title: "Trabajo y Oficina",
    icon: "💼",
    wordCount: 60,
    learned: 25,
    level: "A2",
    words: [
      { id: "w1", english: "Meeting", spanish: "Reunión", pronunciation: "/ˈmiːtɪŋ/", example: "We have a meeting at 2 PM.", exampleTranslation: "Tenemos una reunión a las 2 PM.", mastered: true },
      { id: "w2", english: "Deadline", spanish: "Fecha límite", pronunciation: "/ˈdedlaɪn/", example: "The deadline is next Monday.", exampleTranslation: "La fecha límite es el próximo lunes.", mastered: false },
      { id: "w3", english: "Colleague", spanish: "Colega", pronunciation: "/ˈkɒliːɡ/", example: "My colleague helped me with the project.", exampleTranslation: "Mi colega me ayudó con el proyecto.", mastered: true },
      { id: "w4", english: "Salary", spanish: "Salario", pronunciation: "/ˈsæləri/", example: "I received my salary today.", exampleTranslation: "Recibí mi salario hoy.", mastered: false },
      { id: "w5", english: "Interview", spanish: "Entrevista", pronunciation: "/ˈɪntərvjuː/", example: "I have a job interview tomorrow.", exampleTranslation: "Tengo una entrevista de trabajo mañana.", mastered: true },
    ]
  },
  {
    id: "health",
    title: "Salud y Cuerpo",
    icon: "🏥",
    wordCount: 40,
    learned: 20,
    level: "A2",
    words: [
      { id: "h1", english: "Headache", spanish: "Dolor de cabeza", pronunciation: "/ˈhedeɪk/", example: "I have a terrible headache.", exampleTranslation: "Tengo un terrible dolor de cabeza.", mastered: true },
      { id: "h2", english: "Medicine", spanish: "Medicina", pronunciation: "/ˈmedɪsɪn/", example: "Did you take your medicine?", exampleTranslation: "¿Tomaste tu medicina?", mastered: true },
      { id: "h3", english: "Appointment", spanish: "Cita", pronunciation: "/əˈpɔɪntmənt/", example: "I have a doctor's appointment.", exampleTranslation: "Tengo una cita con el doctor.", mastered: false },
      { id: "h4", english: "Symptom", spanish: "Síntoma", pronunciation: "/ˈsɪmptəm/", example: "What are your symptoms?", exampleTranslation: "¿Cuáles son tus síntomas?", mastered: false },
      { id: "h5", english: "Exercise", spanish: "Ejercicio", pronunciation: "/ˈeksərsaɪz/", example: "I exercise three times a week.", exampleTranslation: "Hago ejercicio tres veces por semana.", mastered: true },
    ]
  },
  {
    id: "shopping",
    title: "Compras",
    icon: "🛍️",
    wordCount: 35,
    learned: 18,
    level: "A2",
    words: [
      { id: "s1", english: "Price", spanish: "Precio", pronunciation: "/praɪs/", example: "What's the price of this shirt?", exampleTranslation: "¿Cuál es el precio de esta camisa?", mastered: true },
      { id: "s2", english: "Discount", spanish: "Descuento", pronunciation: "/ˈdɪskaʊnt/", example: "Is there a discount?", exampleTranslation: "¿Hay algún descuento?", mastered: true },
      { id: "s3", english: "Receipt", spanish: "Recibo", pronunciation: "/rɪˈsiːt/", example: "Can I have the receipt, please?", exampleTranslation: "¿Me puede dar el recibo, por favor?", mastered: false },
      { id: "s4", english: "Cash", spanish: "Efectivo", pronunciation: "/kæʃ/", example: "I'll pay in cash.", exampleTranslation: "Pagaré en efectivo.", mastered: true },
      { id: "s5", english: "Size", spanish: "Talla", pronunciation: "/saɪz/", example: "What size do you wear?", exampleTranslation: "¿Qué talla usas?", mastered: false },
    ]
  },
  {
    id: "emotions",
    title: "Emociones y Sentimientos",
    icon: "😊",
    wordCount: 40,
    learned: 22,
    level: "B1",
    words: [
      { id: "e1", english: "Excited", spanish: "Emocionado", pronunciation: "/ɪkˈsaɪtɪd/", example: "I'm so excited about the trip!", exampleTranslation: "¡Estoy tan emocionado por el viaje!", mastered: true },
      { id: "e2", english: "Disappointed", spanish: "Decepcionado", pronunciation: "/ˌdɪsəˈpɔɪntɪd/", example: "I was disappointed with the result.", exampleTranslation: "Estaba decepcionado con el resultado.", mastered: false },
      { id: "e3", english: "Anxious", spanish: "Ansioso", pronunciation: "/ˈæŋkʃəs/", example: "She feels anxious before exams.", exampleTranslation: "Ella se siente ansiosa antes de los exámenes.", mastered: false },
      { id: "e4", english: "Grateful", spanish: "Agradecido", pronunciation: "/ˈɡreɪtfl/", example: "I'm grateful for your help.", exampleTranslation: "Estoy agradecido por tu ayuda.", mastered: true },
      { id: "e5", english: "Frustrated", spanish: "Frustrado", pronunciation: "/frʌˈstreɪtɪd/", example: "He's frustrated with his job.", exampleTranslation: "Está frustrado con su trabajo.", mastered: false },
    ]
  },
  {
    id: "technology",
    title: "Tecnología",
    icon: "💻",
    wordCount: 50,
    learned: 30,
    level: "B1",
    words: [
      { id: "tech1", english: "Software", spanish: "Software", pronunciation: "/ˈsɒftweər/", example: "I need to update my software.", exampleTranslation: "Necesito actualizar mi software.", mastered: true },
      { id: "tech2", english: "Download", spanish: "Descargar", pronunciation: "/ˌdaʊnˈloʊd/", example: "You can download the app for free.", exampleTranslation: "Puedes descargar la aplicación gratis.", mastered: true },
      { id: "tech3", english: "Password", spanish: "Contraseña", pronunciation: "/ˈpæswɜːrd/", example: "I forgot my password.", exampleTranslation: "Olvidé mi contraseña.", mastered: true },
      { id: "tech4", english: "Browser", spanish: "Navegador", pronunciation: "/ˈbraʊzər/", example: "Which browser do you use?", exampleTranslation: "¿Qué navegador usas?", mastered: false },
      { id: "tech5", english: "Wireless", spanish: "Inalámbrico", pronunciation: "/ˈwaɪərləs/", example: "Do you have wireless internet?", exampleTranslation: "¿Tienes internet inalámbrico?", mastered: true },
    ]
  },
  {
    id: "environment",
    title: "Medio Ambiente",
    icon: "🌍",
    wordCount: 45,
    learned: 15,
    level: "B2",
    words: [
      { id: "env1", english: "Pollution", spanish: "Contaminación", pronunciation: "/pəˈluːʃn/", example: "Air pollution is a serious problem.", exampleTranslation: "La contaminación del aire es un problema serio.", mastered: true },
      { id: "env2", english: "Sustainable", spanish: "Sostenible", pronunciation: "/səˈsteɪnəbl/", example: "We need sustainable solutions.", exampleTranslation: "Necesitamos soluciones sostenibles.", mastered: false },
      { id: "env3", english: "Renewable", spanish: "Renovable", pronunciation: "/rɪˈnuːəbl/", example: "Solar power is a renewable energy.", exampleTranslation: "La energía solar es renovable.", mastered: false },
      { id: "env4", english: "Biodiversity", spanish: "Biodiversidad", pronunciation: "/ˌbaɪoʊdaɪˈvɜːrsəti/", example: "We must protect biodiversity.", exampleTranslation: "Debemos proteger la biodiversidad.", mastered: false },
      { id: "env5", english: "Ecosystem", spanish: "Ecosistema", pronunciation: "/ˈiːkoʊsɪstəm/", example: "The forest is a complex ecosystem.", exampleTranslation: "El bosque es un ecosistema complejo.", mastered: false },
    ]
  },
];

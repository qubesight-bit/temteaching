// B1 Listening Comprehension Exercises - New Thematic Content
import { Exercise } from "./exercisesData";

// Theme 1: Art & Culture (50 Exercises)
const artCultureExercises: Exercise[] = [
  // Part 1: Artistic Vocabulary
  {
    id: "b1-art-1",
    type: "fill-blank",
    question: "A public display of works of art: (______)",
    options: ["exhibition", "auction", "gallery", "museum"],
    correctAnswer: "exhibition",
    explanation: "An exhibition is a public display of works of art or items of interest.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-2",
    type: "fill-blank",
    question: "A work of art made by carving stone or wood: (______)",
    options: ["sculpture", "painting", "portrait", "sketch"],
    correctAnswer: "sculpture",
    explanation: "A sculpture is a three-dimensional art form made by carving or molding materials.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-3",
    type: "fill-blank",
    question: "A work of outstanding artistry or skill: (______)",
    options: ["masterpiece", "artwork", "creation", "piece"],
    correctAnswer: "masterpiece",
    explanation: "A masterpiece is a work of outstanding artistry, skill, or workmanship.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-4",
    type: "fill-blank",
    question: "A room or building for the display or sale of art: (______)",
    options: ["gallery", "studio", "workshop", "theater"],
    correctAnswer: "gallery",
    explanation: "A gallery is a room or building for the display or sale of works of art.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-5",
    type: "fill-blank",
    question: "Unscramble: M-A-S-T-E-R-P-I-E-C-E (______)",
    options: ["masterpiece", "masterpice", "masterpeice", "masterpease"],
    correctAnswer: "masterpiece",
    explanation: "MASTERPIECE - a work of outstanding artistry.",
    difficulty: 2,
    tags: ["listening", "art", "spelling", "b1"]
  },
  {
    id: "b1-art-6",
    type: "fill-blank",
    question: "Unscramble: E-X-H-I-B-I-T-I-O-N (______)",
    options: ["exhibition", "exibition", "exhibision", "exhebition"],
    correctAnswer: "exhibition",
    explanation: "EXHIBITION - a public display of art or items.",
    difficulty: 2,
    tags: ["listening", "art", "spelling", "b1"]
  },
  {
    id: "b1-art-7",
    type: "multiple-choice",
    question: "Art that does not attempt to represent external reality:",
    options: ["Abstract", "Realistic", "Classical", "Traditional"],
    correctAnswer: "Abstract",
    explanation: "Abstract art does not attempt to represent external reality accurately.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-8",
    type: "multiple-choice",
    question: "A painting of a person:",
    options: ["Portrait", "Landscape", "Still life", "Seascape"],
    correctAnswer: "Portrait",
    explanation: "A portrait is a painting, drawing, or photograph of a person.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-9",
    type: "multiple-choice",
    question: "A person who selects and organizes items in a museum:",
    options: ["Curator", "Artist", "Collector", "Critic"],
    correctAnswer: "Curator",
    explanation: "A curator selects and organizes items in a museum or art collection.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-10",
    type: "multiple-choice",
    question: "A 'still life' usually depicts:",
    options: ["Inanimate objects like fruit", "People running", "Mountain scenery", "Ocean waves"],
    correctAnswer: "Inanimate objects like fruit",
    explanation: "A still life painting depicts inanimate objects, typically commonplace objects.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  // Part 2: Cultural Heritage
  {
    id: "b1-art-11",
    type: "multiple-choice",
    question: "Heritage means:",
    options: ["Traditions passed down", "A new trend", "Modern style", "Future plans"],
    correctAnswer: "Traditions passed down",
    explanation: "Heritage refers to valued traditions and practices passed down through generations.",
    difficulty: 2,
    tags: ["listening", "culture", "b1"]
  },
  {
    id: "b1-art-12",
    type: "multiple-choice",
    question: "Contemporary means:",
    options: ["Living or occurring at the same time", "Ancient", "Medieval", "Prehistoric"],
    correctAnswer: "Living or occurring at the same time",
    explanation: "Contemporary means belonging to or occurring in the present time.",
    difficulty: 2,
    tags: ["listening", "culture", "b1"]
  },
  {
    id: "b1-art-13",
    type: "multiple-choice",
    question: "Auction is:",
    options: ["A public sale to the highest bidder", "A fixed price store", "A museum", "An exhibition"],
    correctAnswer: "A public sale to the highest bidder",
    explanation: "An auction is a public sale where goods are sold to the highest bidder.",
    difficulty: 2,
    tags: ["listening", "culture", "b1"]
  },
  {
    id: "b1-art-14",
    type: "multiple-choice",
    question: "Genre is:",
    options: ["A category of art", "A type of paint", "An artist's name", "A museum section"],
    correctAnswer: "A category of art",
    explanation: "A genre is a category of artistic composition characterized by a particular style.",
    difficulty: 2,
    tags: ["listening", "culture", "b1"]
  },
  {
    id: "b1-art-15",
    type: "multiple-choice",
    question: "Artifact is:",
    options: ["An object made by humans, of cultural interest", "A natural rock", "A type of painting", "A music piece"],
    correctAnswer: "An object made by humans, of cultural interest",
    explanation: "An artifact is an object made by a human being, typically of cultural or historical interest.",
    difficulty: 2,
    tags: ["listening", "culture", "b1"]
  },
  {
    id: "b1-art-16",
    type: "multiple-choice",
    question: "Match: Impressionism is known for:",
    options: ["Light and color effects", "Geometric shapes", "Dark themes", "Political messages"],
    correctAnswer: "Light and color effects",
    explanation: "Impressionism is characterized by small, visible brushstrokes emphasizing light and color.",
    difficulty: 2,
    tags: ["listening", "art-movements", "b1"]
  },
  {
    id: "b1-art-17",
    type: "multiple-choice",
    question: "Match: Cubism is known for:",
    options: ["Geometric shapes and fragmented forms", "Realistic portraits", "Nature scenes", "Religious themes"],
    correctAnswer: "Geometric shapes and fragmented forms",
    explanation: "Cubism presents objects from multiple viewpoints using geometric shapes.",
    difficulty: 2,
    tags: ["listening", "art-movements", "b1"]
  },
  {
    id: "b1-art-18",
    type: "multiple-choice",
    question: "Match: Surrealism features:",
    options: ["Dream-like imagery", "Historical accuracy", "Photographic realism", "Simple shapes"],
    correctAnswer: "Dream-like imagery",
    explanation: "Surrealism features unexpected juxtapositions and dream-like imagery.",
    difficulty: 2,
    tags: ["listening", "art-movements", "b1"]
  },
  {
    id: "b1-art-19",
    type: "multiple-choice",
    question: "Match: Pop Art uses:",
    options: ["Popular culture imagery", "Classical Greek themes", "Religious symbols", "Abstract lines"],
    correctAnswer: "Popular culture imagery",
    explanation: "Pop Art uses imagery from popular culture like advertising and comic books.",
    difficulty: 2,
    tags: ["listening", "art-movements", "b1"]
  },
  {
    id: "b1-art-20",
    type: "multiple-choice",
    question: "Match: Baroque is characterized by:",
    options: ["Drama and grandeur", "Minimalism", "Simple lines", "Modern themes"],
    correctAnswer: "Drama and grandeur",
    explanation: "Baroque art is known for its drama, rich color, and grandeur.",
    difficulty: 2,
    tags: ["listening", "art-movements", "b1"]
  },
  // Part 3: Describing Art (Adjectives)
  {
    id: "b1-art-21",
    type: "multiple-choice",
    question: "'This painting is very vivid.' Vivid means:",
    options: ["Bright", "Dull", "Dark", "Faded"],
    correctAnswer: "Bright",
    explanation: "Vivid means producing powerful feelings or strong, clear images; intensely bright.",
    difficulty: 2,
    tags: ["listening", "art-adjectives", "b1"]
  },
  {
    id: "b1-art-22",
    type: "multiple-choice",
    question: "'The sculpture is intricate.' Intricate means:",
    options: ["Detailed", "Simple", "Plain", "Basic"],
    correctAnswer: "Detailed",
    explanation: "Intricate means very complicated or detailed.",
    difficulty: 2,
    tags: ["listening", "art-adjectives", "b1"]
  },
  {
    id: "b1-art-23",
    type: "multiple-choice",
    question: "'The mood is somber.' Somber means:",
    options: ["Sad/Dark", "Happy", "Exciting", "Colorful"],
    correctAnswer: "Sad/Dark",
    explanation: "Somber means dark, gloomy, or suggestive of sadness.",
    difficulty: 2,
    tags: ["listening", "art-adjectives", "b1"]
  },
  {
    id: "b1-art-24",
    type: "multiple-choice",
    question: "'It is a controversial piece.' Controversial means:",
    options: ["Causing debate", "Everyone likes it", "Traditional", "Simple"],
    correctAnswer: "Causing debate",
    explanation: "Controversial means giving rise to public disagreement or debate.",
    difficulty: 2,
    tags: ["listening", "art-adjectives", "b1"]
  },
  {
    id: "b1-art-25",
    type: "multiple-choice",
    question: "'The texture is rough.' Rough means:",
    options: ["Not smooth", "Soft", "Shiny", "Flat"],
    correctAnswer: "Not smooth",
    explanation: "Rough means having an uneven or irregular surface; not smooth.",
    difficulty: 2,
    tags: ["listening", "art-adjectives", "b1"]
  },
  // Additional Art & Culture exercises (26-50)
  {
    id: "b1-art-26",
    type: "multiple-choice",
    question: "A person who creates works of art is called an:",
    options: ["Artist", "Architect", "Author", "Actor"],
    correctAnswer: "Artist",
    explanation: "An artist is a person who creates works of art.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-27",
    type: "multiple-choice",
    question: "Art made using a camera is called:",
    options: ["Photography", "Sculpture", "Pottery", "Weaving"],
    correctAnswer: "Photography",
    explanation: "Photography is the art of taking and processing photographs.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-28",
    type: "fill-blank",
    question: "The frame that holds a canvas for painting is called an ______.",
    options: ["easel", "palette", "brush", "canvas"],
    correctAnswer: "easel",
    explanation: "An easel is a wooden frame for holding an artist's canvas.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-29",
    type: "multiple-choice",
    question: "A person who writes reviews of art is a:",
    options: ["Critic", "Curator", "Collector", "Commissioner"],
    correctAnswer: "Critic",
    explanation: "A critic is a person who judges the merits of artistic works.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-30",
    type: "multiple-choice",
    question: "The study of art history is called:",
    options: ["Art history", "Archaeology", "Anthropology", "Architecture"],
    correctAnswer: "Art history",
    explanation: "Art history is the study of visual arts from ancient times to the present.",
    difficulty: 2,
    tags: ["listening", "culture", "b1"]
  },
  {
    id: "b1-art-31",
    type: "fill-blank",
    question: "A ______ is a board on which an artist mixes paints.",
    options: ["palette", "canvas", "brush", "easel"],
    correctAnswer: "palette",
    explanation: "A palette is a thin board on which an artist mixes colors.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-32",
    type: "multiple-choice",
    question: "Renaissance art originated in:",
    options: ["Italy", "France", "Spain", "Germany"],
    correctAnswer: "Italy",
    explanation: "The Renaissance began in Italy in the 14th century.",
    difficulty: 2,
    tags: ["listening", "art-history", "b1"]
  },
  {
    id: "b1-art-33",
    type: "multiple-choice",
    question: "A 'mural' is a painting made on:",
    options: ["A wall", "Paper", "Canvas", "Wood"],
    correctAnswer: "A wall",
    explanation: "A mural is a large painting executed directly on a wall.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-34",
    type: "multiple-choice",
    question: "'Avant-garde' describes art that is:",
    options: ["Experimental and innovative", "Traditional", "Classical", "Conventional"],
    correctAnswer: "Experimental and innovative",
    explanation: "Avant-garde art is new and experimental, pushing boundaries.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-35",
    type: "fill-blank",
    question: "The Mona Lisa is housed in the ______ museum in Paris.",
    options: ["Louvre", "British", "Metropolitan", "Prado"],
    correctAnswer: "Louvre",
    explanation: "The Mona Lisa is displayed at the Louvre Museum in Paris.",
    difficulty: 2,
    tags: ["listening", "culture", "b1"]
  },
  {
    id: "b1-art-36",
    type: "multiple-choice",
    question: "A 'retrospective' exhibition shows:",
    options: ["An artist's work over time", "Only new pieces", "One artwork", "Student work"],
    correctAnswer: "An artist's work over time",
    explanation: "A retrospective shows a representative selection of an artist's life work.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-37",
    type: "multiple-choice",
    question: "Art created for temporary display is called:",
    options: ["Installation art", "Portrait", "Landscape", "Still life"],
    correctAnswer: "Installation art",
    explanation: "Installation art is three-dimensional works designed to transform a space.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-38",
    type: "fill-blank",
    question: "A ______ is a preliminary drawing or painting made to test an idea.",
    options: ["sketch", "masterpiece", "portrait", "mural"],
    correctAnswer: "sketch",
    explanation: "A sketch is a rough drawing representing the main features of an object.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-39",
    type: "multiple-choice",
    question: "Street art painted on walls is often called:",
    options: ["Graffiti", "Portrait", "Landscape", "Sculpture"],
    correctAnswer: "Graffiti",
    explanation: "Graffiti is writing or drawings made on walls in public places.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-40",
    type: "multiple-choice",
    question: "A person who collects art is a:",
    options: ["Collector", "Curator", "Critic", "Conservator"],
    correctAnswer: "Collector",
    explanation: "A collector is a person who collects things of a specified type.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-41",
    type: "fill-blank",
    question: "The process of restoring old artworks is called ______.",
    options: ["conservation", "creation", "composition", "collection"],
    correctAnswer: "conservation",
    explanation: "Conservation is the preservation and restoration of art objects.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-42",
    type: "multiple-choice",
    question: "A 'commission' in art means:",
    options: ["An order for a specific artwork", "A free gift", "A copy", "A rejection"],
    correctAnswer: "An order for a specific artwork",
    explanation: "A commission is an order for a piece of work, especially for art.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-43",
    type: "multiple-choice",
    question: "The main subject in a painting is called the:",
    options: ["Focal point", "Background", "Frame", "Border"],
    correctAnswer: "Focal point",
    explanation: "The focal point is the center of interest or activity in a work.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-44",
    type: "fill-blank",
    question: "Art that represents real life accurately is called ______.",
    options: ["realism", "abstraction", "surrealism", "cubism"],
    correctAnswer: "realism",
    explanation: "Realism represents subject matter truthfully, without artificiality.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-45",
    type: "multiple-choice",
    question: "A 'patron' of the arts is someone who:",
    options: ["Supports artists financially", "Creates art", "Sells art", "Criticizes art"],
    correctAnswer: "Supports artists financially",
    explanation: "A patron provides financial support to artists and the arts.",
    difficulty: 2,
    tags: ["listening", "culture", "b1"]
  },
  {
    id: "b1-art-46",
    type: "multiple-choice",
    question: "The arrangement of elements in art is called:",
    options: ["Composition", "Collection", "Commission", "Conservation"],
    correctAnswer: "Composition",
    explanation: "Composition is the arrangement of elements within a work of art.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-47",
    type: "fill-blank",
    question: "A ______ is a work of art made by sticking materials like paper onto a surface.",
    options: ["collage", "portrait", "landscape", "sculpture"],
    correctAnswer: "collage",
    explanation: "A collage is an art form made by gluing various materials onto a surface.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-48",
    type: "multiple-choice",
    question: "Art made from recycled materials is often called:",
    options: ["Upcycled art", "Classical art", "Traditional art", "Academic art"],
    correctAnswer: "Upcycled art",
    explanation: "Upcycled art uses discarded materials to create new artwork.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
  {
    id: "b1-art-49",
    type: "multiple-choice",
    question: "A 'vernissage' is:",
    options: ["An opening reception for an exhibition", "A type of paint", "An art technique", "A museum wing"],
    correctAnswer: "An opening reception for an exhibition",
    explanation: "A vernissage is a private viewing of paintings before public exhibition.",
    difficulty: 2,
    tags: ["listening", "culture", "b1"]
  },
  {
    id: "b1-art-50",
    type: "fill-blank",
    question: "The sense of depth in a painting is achieved through ______.",
    options: ["perspective", "color", "texture", "size"],
    correctAnswer: "perspective",
    explanation: "Perspective creates the illusion of depth on a flat surface.",
    difficulty: 2,
    tags: ["listening", "art", "b1"]
  },
];

// Theme 2: Relationships & Social (50 Exercises)
const relationshipsSocialExercises: Exercise[] = [
  // Part 1: Types of Connections
  {
    id: "b1-rel-1",
    type: "fill-blank",
    question: "A person one knows slightly, but who is not a close friend: (______)",
    options: ["acquaintance", "friend", "colleague", "partner"],
    correctAnswer: "acquaintance",
    explanation: "An acquaintance is a person one knows but who is not a close friend.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-2",
    type: "fill-blank",
    question: "An agreement reached by each side making concessions: (______)",
    options: ["compromise", "conflict", "competition", "contract"],
    correctAnswer: "compromise",
    explanation: "A compromise is an agreement reached by each side making concessions.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-3",
    type: "fill-blank",
    question: "A serious disagreement or argument: (______)",
    options: ["conflict", "compromise", "connection", "conversation"],
    correctAnswer: "conflict",
    explanation: "A conflict is a serious disagreement or argument.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-4",
    type: "fill-blank",
    question: "Firm belief in the reliability or truth of someone: (______)",
    options: ["trust", "doubt", "fear", "hope"],
    correctAnswer: "trust",
    explanation: "Trust is firm belief in the reliability, truth, or ability of someone.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-5",
    type: "fill-blank",
    question: "Unscramble: A-C-Q-U-A-I-N-T-A-N-C-E (______)",
    options: ["acquaintance", "aquaintance", "acquantance", "acquiantance"],
    correctAnswer: "acquaintance",
    explanation: "ACQUAINTANCE - a person one knows slightly.",
    difficulty: 2,
    tags: ["listening", "relationships", "spelling", "b1"]
  },
  {
    id: "b1-rel-6",
    type: "fill-blank",
    question: "Unscramble: C-O-M-P-R-O-M-I-S-E (______)",
    options: ["compromise", "compramise", "compromize", "comprimise"],
    correctAnswer: "compromise",
    explanation: "COMPROMISE - an agreement through concessions.",
    difficulty: 2,
    tags: ["listening", "relationships", "spelling", "b1"]
  },
  {
    id: "b1-rel-7",
    type: "multiple-choice",
    question: "A person with whom one works:",
    options: ["Colleague", "Sibling", "Neighbor", "Stranger"],
    correctAnswer: "Colleague",
    explanation: "A colleague is a person with whom one works in a profession.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-8",
    type: "multiple-choice",
    question: "The way a child is raised:",
    options: ["Upbringing", "Education", "Training", "Discipline"],
    correctAnswer: "Upbringing",
    explanation: "Upbringing is the treatment and instruction received during childhood.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-9",
    type: "multiple-choice",
    question: "A close connection joining two or more people:",
    options: ["Bond", "Knot", "Rope", "Chain"],
    correctAnswer: "Bond",
    explanation: "A bond is a relationship or feeling of connectedness between people.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-10",
    type: "multiple-choice",
    question: "A 'peer' is someone who is:",
    options: ["Equal in age or status", "Your boss", "Much older", "A stranger"],
    correctAnswer: "Equal in age or status",
    explanation: "A peer is a person of the same age, status, or ability as another.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  // Part 2: Social Dynamics
  {
    id: "b1-rel-11",
    type: "multiple-choice",
    question: "To fall out with someone means:",
    options: ["To argue and stop being friends", "To go outside", "To travel together", "To meet someone"],
    correctAnswer: "To argue and stop being friends",
    explanation: "To fall out means to have a quarrel and stop being friendly.",
    difficulty: 2,
    tags: ["listening", "phrasal-verbs", "b1"]
  },
  {
    id: "b1-rel-12",
    type: "multiple-choice",
    question: "To get along means:",
    options: ["To have a friendly relationship", "To leave", "To arrive", "To disagree"],
    correctAnswer: "To have a friendly relationship",
    explanation: "To get along means to have a harmonious or friendly relationship.",
    difficulty: 2,
    tags: ["listening", "phrasal-verbs", "b1"]
  },
  {
    id: "b1-rel-13",
    type: "multiple-choice",
    question: "To look up to someone means:",
    options: ["To admire", "To be taller", "To search online", "To climb"],
    correctAnswer: "To admire",
    explanation: "To look up to someone means to admire and respect them.",
    difficulty: 2,
    tags: ["listening", "phrasal-verbs", "b1"]
  },
  {
    id: "b1-rel-14",
    type: "multiple-choice",
    question: "To drift apart means:",
    options: ["To slowly lose contact", "To swim away", "To drive away", "To sleep"],
    correctAnswer: "To slowly lose contact",
    explanation: "To drift apart means to gradually become less close to someone.",
    difficulty: 2,
    tags: ["listening", "phrasal-verbs", "b1"]
  },
  {
    id: "b1-rel-15",
    type: "multiple-choice",
    question: "To settle down means:",
    options: ["To live a quieter life/marry", "To sit on a chair", "To pay a bill", "To go to sleep"],
    correctAnswer: "To live a quieter life/marry",
    explanation: "To settle down means to adopt a more stable lifestyle, often by marrying.",
    difficulty: 2,
    tags: ["listening", "phrasal-verbs", "b1"]
  },
  {
    id: "b1-rel-16",
    type: "multiple-choice",
    question: "True or False: Empathy is the ability to understand another's feelings.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Empathy is indeed the ability to understand and share the feelings of another.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-17",
    type: "multiple-choice",
    question: "True or False: Extroverts prefer being alone.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "Extroverts are outgoing and thrive on social interaction, not solitude.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-18",
    type: "multiple-choice",
    question: "Synonym: 'Kin' means:",
    options: ["Relatives", "Strangers", "Enemies", "Neighbors"],
    correctAnswer: "Relatives",
    explanation: "Kin means one's family and relations.",
    difficulty: 2,
    tags: ["listening", "vocabulary", "b1"]
  },
  {
    id: "b1-rel-19",
    type: "multiple-choice",
    question: "The antonym of 'Hostile' is:",
    options: ["Friendly", "Angry", "Aggressive", "Cold"],
    correctAnswer: "Friendly",
    explanation: "Hostile means unfriendly, so the antonym is friendly.",
    difficulty: 2,
    tags: ["listening", "vocabulary", "b1"]
  },
  {
    id: "b1-rel-20",
    type: "multiple-choice",
    question: "Idiom: 'To break the ice' means:",
    options: ["To start a conversation", "To break a sculpture", "To feel cold", "To end a friendship"],
    correctAnswer: "To start a conversation",
    explanation: "To break the ice means to do something to relieve tension or get conversation going.",
    difficulty: 2,
    tags: ["listening", "idioms", "b1"]
  },
  // Additional Relationships exercises (21-50)
  {
    id: "b1-rel-21",
    type: "multiple-choice",
    question: "To make up with someone means:",
    options: ["To reconcile after an argument", "To apply cosmetics", "To create a story", "To wake up"],
    correctAnswer: "To reconcile after an argument",
    explanation: "To make up means to be reconciled after a quarrel.",
    difficulty: 2,
    tags: ["listening", "phrasal-verbs", "b1"]
  },
  {
    id: "b1-rel-22",
    type: "fill-blank",
    question: "A ______ is a person you share a room or apartment with.",
    options: ["roommate", "teammate", "classmate", "soulmate"],
    correctAnswer: "roommate",
    explanation: "A roommate is a person who shares a room or apartment with another.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-23",
    type: "multiple-choice",
    question: "'To hit it off' means:",
    options: ["To immediately like each other", "To fight", "To miss a target", "To leave quickly"],
    correctAnswer: "To immediately like each other",
    explanation: "To hit it off means to be friendly with each other immediately.",
    difficulty: 2,
    tags: ["listening", "idioms", "b1"]
  },
  {
    id: "b1-rel-24",
    type: "multiple-choice",
    question: "A 'soulmate' is:",
    options: ["A person ideally suited to another", "A business partner", "A gym buddy", "A teacher"],
    correctAnswer: "A person ideally suited to another",
    explanation: "A soulmate is a person ideally suited to another as a close friend or romantic partner.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-25",
    type: "fill-blank",
    question: "To be ______ with someone means to be honest and direct.",
    options: ["straightforward", "confusing", "indirect", "vague"],
    correctAnswer: "straightforward",
    explanation: "Being straightforward means being honest and direct in communication.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-26",
    type: "multiple-choice",
    question: "'Mutual' means:",
    options: ["Shared by two or more parties", "One-sided", "Individual", "Private"],
    correctAnswer: "Shared by two or more parties",
    explanation: "Mutual means felt or done by each toward the other.",
    difficulty: 2,
    tags: ["listening", "vocabulary", "b1"]
  },
  {
    id: "b1-rel-27",
    type: "multiple-choice",
    question: "To 'keep in touch' means:",
    options: ["To maintain contact", "To hold hands", "To stay still", "To be quiet"],
    correctAnswer: "To maintain contact",
    explanation: "To keep in touch means to remain in communication with someone.",
    difficulty: 2,
    tags: ["listening", "phrasal-verbs", "b1"]
  },
  {
    id: "b1-rel-28",
    type: "fill-blank",
    question: "A ______ is the quality of being loyal to someone.",
    options: ["loyalty", "honesty", "bravery", "kindness"],
    correctAnswer: "loyalty",
    explanation: "Loyalty is the quality of being loyal; faithfulness to commitments.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-29",
    type: "multiple-choice",
    question: "'To take someone for granted' means:",
    options: ["To not appreciate them properly", "To give them a gift", "To trust them completely", "To introduce them"],
    correctAnswer: "To not appreciate them properly",
    explanation: "To take for granted means to fail to properly appreciate someone.",
    difficulty: 2,
    tags: ["listening", "idioms", "b1"]
  },
  {
    id: "b1-rel-30",
    type: "multiple-choice",
    question: "A 'close-knit' family is:",
    options: ["Very close and supportive", "Spread out geographically", "Formal and distant", "Small in number"],
    correctAnswer: "Very close and supportive",
    explanation: "Close-knit describes a group of people who are very close and supportive.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-31",
    type: "fill-blank",
    question: "______ is showing understanding and care for others' problems.",
    options: ["Sympathy", "Jealousy", "Anger", "Pride"],
    correctAnswer: "Sympathy",
    explanation: "Sympathy is feelings of pity and sorrow for someone else's misfortune.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-32",
    type: "multiple-choice",
    question: "'To see eye to eye' means:",
    options: ["To agree with someone", "To stare at someone", "To be the same height", "To meet in person"],
    correctAnswer: "To agree with someone",
    explanation: "To see eye to eye means to have similar views or attitudes.",
    difficulty: 2,
    tags: ["listening", "idioms", "b1"]
  },
  {
    id: "b1-rel-33",
    type: "multiple-choice",
    question: "A 'mentor' is someone who:",
    options: ["Guides and advises a less experienced person", "Competes with you", "Criticizes you", "Ignores you"],
    correctAnswer: "Guides and advises a less experienced person",
    explanation: "A mentor is an experienced person who advises and helps someone younger.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-34",
    type: "fill-blank",
    question: "Being ______ means giving support and encouragement.",
    options: ["supportive", "critical", "distant", "jealous"],
    correctAnswer: "supportive",
    explanation: "Being supportive means providing encouragement and emotional help.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-35",
    type: "multiple-choice",
    question: "'To grow apart' means:",
    options: ["To become less close over time", "To physically grow", "To separate suddenly", "To argue loudly"],
    correctAnswer: "To become less close over time",
    explanation: "To grow apart means to gradually become less close to someone.",
    difficulty: 2,
    tags: ["listening", "phrasal-verbs", "b1"]
  },
  {
    id: "b1-rel-36",
    type: "multiple-choice",
    question: "A 'confidant' is someone you:",
    options: ["Trust with secrets", "Compete against", "Work with", "Avoid"],
    correctAnswer: "Trust with secrets",
    explanation: "A confidant is a person you trust with personal secrets.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-37",
    type: "fill-blank",
    question: "______ is the feeling of being jealous of someone's achievements.",
    options: ["Envy", "Pride", "Joy", "Love"],
    correctAnswer: "Envy",
    explanation: "Envy is a feeling of discontent toward someone's advantages.",
    difficulty: 2,
    tags: ["listening", "emotions", "b1"]
  },
  {
    id: "b1-rel-38",
    type: "multiple-choice",
    question: "'To open up to someone' means:",
    options: ["To share your feelings honestly", "To open a door", "To wake up", "To start a business"],
    correctAnswer: "To share your feelings honestly",
    explanation: "To open up means to become more communicative or confiding.",
    difficulty: 2,
    tags: ["listening", "phrasal-verbs", "b1"]
  },
  {
    id: "b1-rel-39",
    type: "multiple-choice",
    question: "A 'grudge' is:",
    options: ["A persistent feeling of resentment", "A type of bridge", "A friendly gesture", "A compliment"],
    correctAnswer: "A persistent feeling of resentment",
    explanation: "A grudge is a persistent feeling of ill will or resentment.",
    difficulty: 2,
    tags: ["listening", "emotions", "b1"]
  },
  {
    id: "b1-rel-40",
    type: "fill-blank",
    question: "To ______ means to say sorry and make amends.",
    options: ["apologize", "criticize", "argue", "ignore"],
    correctAnswer: "apologize",
    explanation: "To apologize means to express regret for something done wrong.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-41",
    type: "multiple-choice",
    question: "'Fair-weather friend' describes someone who:",
    options: ["Only helps when things are easy", "Loves sunny days", "Is always reliable", "Enjoys outdoor activities"],
    correctAnswer: "Only helps when things are easy",
    explanation: "A fair-weather friend is only a friend when circumstances are pleasant.",
    difficulty: 2,
    tags: ["listening", "idioms", "b1"]
  },
  {
    id: "b1-rel-42",
    type: "multiple-choice",
    question: "To 'stand by someone' means:",
    options: ["To support them in difficult times", "To stand next to them", "To wait for them", "To ignore them"],
    correctAnswer: "To support them in difficult times",
    explanation: "To stand by someone means to remain loyal and supportive.",
    difficulty: 2,
    tags: ["listening", "phrasal-verbs", "b1"]
  },
  {
    id: "b1-rel-43",
    type: "fill-blank",
    question: "______ is the act of forgiving someone for a mistake.",
    options: ["Forgiveness", "Punishment", "Revenge", "Criticism"],
    correctAnswer: "Forgiveness",
    explanation: "Forgiveness is the act of pardoning an offense or overlooking a mistake.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-44",
    type: "multiple-choice",
    question: "'To be on the same wavelength' means:",
    options: ["To think similarly", "To listen to the same radio", "To surf together", "To have the same job"],
    correctAnswer: "To think similarly",
    explanation: "To be on the same wavelength means to think in a similar way.",
    difficulty: 2,
    tags: ["listening", "idioms", "b1"]
  },
  {
    id: "b1-rel-45",
    type: "multiple-choice",
    question: "A 'best friend forever' is often abbreviated as:",
    options: ["BFF", "BBF", "FBF", "FFB"],
    correctAnswer: "BFF",
    explanation: "BFF stands for 'best friends forever.'",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-46",
    type: "fill-blank",
    question: "______ means treating someone badly or unfairly.",
    options: ["Mistreatment", "Kindness", "Support", "Friendship"],
    correctAnswer: "Mistreatment",
    explanation: "Mistreatment is the cruel or unfair treatment of someone.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-47",
    type: "multiple-choice",
    question: "'To clear the air' means:",
    options: ["To resolve a misunderstanding", "To open a window", "To clean a room", "To exercise"],
    correctAnswer: "To resolve a misunderstanding",
    explanation: "To clear the air means to remove tension by frank discussion.",
    difficulty: 2,
    tags: ["listening", "idioms", "b1"]
  },
  {
    id: "b1-rel-48",
    type: "multiple-choice",
    question: "An 'introvert' is someone who:",
    options: ["Prefers quiet, solitary activities", "Loves parties", "Talks a lot", "Is always social"],
    correctAnswer: "Prefers quiet, solitary activities",
    explanation: "An introvert is a person who prefers solitary to social activities.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-49",
    type: "fill-blank",
    question: "______ is the quality of being able to adjust to new conditions.",
    options: ["Adaptability", "Stubbornness", "Rigidity", "Resistance"],
    correctAnswer: "Adaptability",
    explanation: "Adaptability is the quality of being able to adjust to new conditions.",
    difficulty: 2,
    tags: ["listening", "relationships", "b1"]
  },
  {
    id: "b1-rel-50",
    type: "multiple-choice",
    question: "'To have someone's back' means:",
    options: ["To be ready to support and protect them", "To carry them", "To follow them", "To massage them"],
    correctAnswer: "To be ready to support and protect them",
    explanation: "To have someone's back means to be ready to support and defend them.",
    difficulty: 2,
    tags: ["listening", "idioms", "b1"]
  },
];

// Theme 3: Travel & Adventure (50 Exercises)
const travelAdventureExercises: Exercise[] = [
  // Part 1: Travel Logistics
  {
    id: "b1-travel-1",
    type: "fill-blank",
    question: "A planned route or journey: (______)",
    options: ["itinerary", "inventory", "initiative", "interview"],
    correctAnswer: "itinerary",
    explanation: "An itinerary is a planned route or journey.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-2",
    type: "fill-blank",
    question: "The place to which someone is going: (______)",
    options: ["destination", "departure", "delay", "detour"],
    correctAnswer: "destination",
    explanation: "A destination is the place to which someone or something is going.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-3",
    type: "fill-blank",
    question: "A room or building in which someone may stay: (______)",
    options: ["accommodation", "accumulation", "accusation", "acceleration"],
    correctAnswer: "accommodation",
    explanation: "Accommodation is a room or building in which someone may live or stay.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-4",
    type: "fill-blank",
    question: "A short journey or trip, especially for leisure: (______)",
    options: ["excursion", "exclusion", "execution", "exhibition"],
    correctAnswer: "excursion",
    explanation: "An excursion is a short journey or trip, especially for leisure.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-5",
    type: "fill-blank",
    question: "Unscramble: I-T-I-N-E-R-A-R-Y (______)",
    options: ["itinerary", "itinerey", "itinarary", "itenerery"],
    correctAnswer: "itinerary",
    explanation: "ITINERARY - a planned route or journey.",
    difficulty: 2,
    tags: ["listening", "travel", "spelling", "b1"]
  },
  {
    id: "b1-travel-6",
    type: "fill-blank",
    question: "Unscramble: A-C-C-O-M-M-O-D-A-T-I-O-N (______)",
    options: ["accommodation", "accomodation", "acommodation", "acomodation"],
    correctAnswer: "accommodation",
    explanation: "ACCOMMODATION - a place to stay.",
    difficulty: 2,
    tags: ["listening", "travel", "spelling", "b1"]
  },
  {
    id: "b1-travel-7",
    type: "multiple-choice",
    question: "Extreme tiredness felt after a long flight across time zones:",
    options: ["Jet lag", "Motion sickness", "Fatigue", "Insomnia"],
    correctAnswer: "Jet lag",
    explanation: "Jet lag is extreme tiredness after crossing time zones by air.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-8",
    type: "multiple-choice",
    question: "The official department that administers duties on imported goods:",
    options: ["Customs", "Police", "Immigration", "Security"],
    correctAnswer: "Customs",
    explanation: "Customs is the government department that collects duties on imports.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-9",
    type: "multiple-choice",
    question: "A stamp in your passport allowing you to enter a country:",
    options: ["Visa", "Ticket", "License", "Permit"],
    correctAnswer: "Visa",
    explanation: "A visa is an endorsement permitting entry into a country.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-10",
    type: "multiple-choice",
    question: "A 'layover' happens:",
    options: ["Between flights", "After the trip", "Before booking", "During check-in"],
    correctAnswer: "Between flights",
    explanation: "A layover is a period of waiting between connecting flights.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  // Part 2: Adventure Vocabulary
  {
    id: "b1-travel-11",
    type: "multiple-choice",
    question: "Remote means:",
    options: ["Far away from cities", "Close to home", "Crowded", "Urban"],
    correctAnswer: "Far away from cities",
    explanation: "Remote means situated far from the main centers of population.",
    difficulty: 2,
    tags: ["listening", "adventure", "b1"]
  },
  {
    id: "b1-travel-12",
    type: "multiple-choice",
    question: "Scenic means:",
    options: ["Having beautiful views", "Crowded", "Industrial", "Urban"],
    correctAnswer: "Having beautiful views",
    explanation: "Scenic means providing or relating to views of beautiful scenery.",
    difficulty: 2,
    tags: ["listening", "adventure", "b1"]
  },
  {
    id: "b1-travel-13",
    type: "multiple-choice",
    question: "Backpacking is:",
    options: ["Traveling cheaply with a pack", "Running in a park", "Shopping online", "Working from home"],
    correctAnswer: "Traveling cheaply with a pack",
    explanation: "Backpacking is traveling with minimal luggage and on a budget.",
    difficulty: 2,
    tags: ["listening", "adventure", "b1"]
  },
  {
    id: "b1-travel-14",
    type: "multiple-choice",
    question: "Souvenir is:",
    options: ["Something kept as a reminder", "A type of food", "A travel document", "A language"],
    correctAnswer: "Something kept as a reminder",
    explanation: "A souvenir is an item kept as a reminder of a place visited.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-15",
    type: "multiple-choice",
    question: "Resort is:",
    options: ["A place for relaxation", "A busy city", "An airport", "A museum"],
    correctAnswer: "A place for relaxation",
    explanation: "A resort is a place frequented for holidays or recreation.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  // Situational exercises (16-25)
  {
    id: "b1-travel-16",
    type: "multiple-choice",
    question: "Situation: Your luggage is lost. You should go to:",
    options: ["Lost and found / Baggage claim", "The restaurant", "The departure gate", "The parking lot"],
    correctAnswer: "Lost and found / Baggage claim",
    explanation: "When luggage is lost, you report to the baggage claim or lost and found.",
    difficulty: 2,
    tags: ["listening", "travel-situations", "b1"]
  },
  {
    id: "b1-travel-17",
    type: "fill-blank",
    question: "At the hotel: 'I'd like to ______ my reservation.'",
    options: ["confirm", "cancel", "confuse", "complete"],
    correctAnswer: "confirm",
    explanation: "To confirm a reservation means to verify it is still valid.",
    difficulty: 2,
    tags: ["listening", "travel-situations", "b1"]
  },
  {
    id: "b1-travel-18",
    type: "multiple-choice",
    question: "'All-inclusive' at a resort means:",
    options: ["Everything is included in the price", "Nothing is included", "Only breakfast", "Extra fees for everything"],
    correctAnswer: "Everything is included in the price",
    explanation: "All-inclusive means meals, drinks, and activities are included.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-19",
    type: "fill-blank",
    question: "Booking a tour: 'Is there a ______ for groups larger than 10?'",
    options: ["discount", "increase", "penalty", "fee"],
    correctAnswer: "discount",
    explanation: "Groups often receive discounts on tour bookings.",
    difficulty: 2,
    tags: ["listening", "travel-situations", "b1"]
  },
  {
    id: "b1-travel-20",
    type: "multiple-choice",
    question: "'Carry-on luggage' is baggage you:",
    options: ["Take into the cabin", "Check in", "Leave at home", "Ship separately"],
    correctAnswer: "Take into the cabin",
    explanation: "Carry-on luggage is small enough to take into the airplane cabin.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-21",
    type: "fill-blank",
    question: "At customs: 'Do you have anything to ______?'",
    options: ["declare", "deny", "describe", "deliver"],
    correctAnswer: "declare",
    explanation: "At customs, you declare items that may require duty payment.",
    difficulty: 2,
    tags: ["listening", "travel-situations", "b1"]
  },
  {
    id: "b1-travel-22",
    type: "multiple-choice",
    question: "A 'red-eye flight' is:",
    options: ["An overnight flight", "A morning flight", "A delayed flight", "A direct flight"],
    correctAnswer: "An overnight flight",
    explanation: "A red-eye flight departs late at night and arrives early morning.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-23",
    type: "fill-blank",
    question: "'The flight has been ______ due to bad weather.'",
    options: ["delayed", "deleted", "declined", "delivered"],
    correctAnswer: "delayed",
    explanation: "Flights are often delayed due to weather conditions.",
    difficulty: 2,
    tags: ["listening", "travel-situations", "b1"]
  },
  {
    id: "b1-travel-24",
    type: "multiple-choice",
    question: "'Boarding pass' is:",
    options: ["A document to enter the plane", "A hotel key", "A train ticket", "A visa"],
    correctAnswer: "A document to enter the plane",
    explanation: "A boarding pass is required to board an aircraft.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-25",
    type: "fill-blank",
    question: "'What time is ______?' (when we get off the plane)",
    options: ["landing", "taking off", "boarding", "checking in"],
    correctAnswer: "landing",
    explanation: "Landing is when the plane arrives and touches down.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  // Additional Travel exercises (26-50)
  {
    id: "b1-travel-26",
    type: "multiple-choice",
    question: "A 'travel agency' helps you:",
    options: ["Book trips and accommodations", "Repair luggage", "Learn languages", "Find jobs abroad"],
    correctAnswer: "Book trips and accommodations",
    explanation: "A travel agency arranges travel and accommodation for travelers.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-27",
    type: "fill-blank",
    question: "A ______ is a journey by sea for pleasure.",
    options: ["cruise", "flight", "hike", "drive"],
    correctAnswer: "cruise",
    explanation: "A cruise is a voyage on a ship taken for pleasure.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-28",
    type: "multiple-choice",
    question: "'Peak season' for travel means:",
    options: ["The busiest and most expensive time", "The cheapest time", "Off-season", "Winter only"],
    correctAnswer: "The busiest and most expensive time",
    explanation: "Peak season is when tourist destinations are busiest and prices highest.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-29",
    type: "fill-blank",
    question: "A ______ is a person who travels for pleasure.",
    options: ["tourist", "immigrant", "resident", "commuter"],
    correctAnswer: "tourist",
    explanation: "A tourist is a person who travels for pleasure or culture.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-30",
    type: "multiple-choice",
    question: "'Off the beaten track' means:",
    options: ["Not commonly visited", "Very popular", "Easy to reach", "Well-known"],
    correctAnswer: "Not commonly visited",
    explanation: "Off the beaten track means away from popular tourist destinations.",
    difficulty: 2,
    tags: ["listening", "travel-idioms", "b1"]
  },
  {
    id: "b1-travel-31",
    type: "fill-blank",
    question: "A ______ shows you around tourist sites and explains their history.",
    options: ["guide", "driver", "pilot", "waiter"],
    correctAnswer: "guide",
    explanation: "A tour guide leads tourists and provides information about attractions.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-32",
    type: "multiple-choice",
    question: "'Round trip' means:",
    options: ["A journey there and back", "A one-way trip", "A walking tour", "A boat ride"],
    correctAnswer: "A journey there and back",
    explanation: "A round trip includes travel to a destination and back.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-33",
    type: "fill-blank",
    question: "A ______ is a small, simple hotel or guesthouse.",
    options: ["hostel", "mansion", "palace", "castle"],
    correctAnswer: "hostel",
    explanation: "A hostel is an inexpensive lodging place for travelers.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-34",
    type: "multiple-choice",
    question: "'To check out' of a hotel means:",
    options: ["To leave and pay the bill", "To arrive", "To book a room", "To complain"],
    correctAnswer: "To leave and pay the bill",
    explanation: "Checking out is the process of leaving a hotel and settling the bill.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-35",
    type: "fill-blank",
    question: "A ______ is a document showing you have paid for a service.",
    options: ["receipt", "recipe", "report", "review"],
    correctAnswer: "receipt",
    explanation: "A receipt is a written acknowledgment of payment.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-36",
    type: "multiple-choice",
    question: "'Bumpy flight' describes a flight that is:",
    options: ["Turbulent and shaky", "Smooth and calm", "Very long", "Very short"],
    correctAnswer: "Turbulent and shaky",
    explanation: "A bumpy flight experiences turbulence, causing shaking.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-37",
    type: "fill-blank",
    question: "Currency ______ is the service of converting one currency to another.",
    options: ["exchange", "exchange", "expectation", "expedition"],
    correctAnswer: "exchange",
    explanation: "Currency exchange converts one nation's money to another's.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-38",
    type: "multiple-choice",
    question: "'To get away' means:",
    options: ["To take a vacation", "To run from danger", "To leave work", "To sleep late"],
    correctAnswer: "To take a vacation",
    explanation: "To get away means to take a break or vacation.",
    difficulty: 2,
    tags: ["listening", "travel-idioms", "b1"]
  },
  {
    id: "b1-travel-39",
    type: "fill-blank",
    question: "A ______ is a detailed map of a city for tourists.",
    options: ["map", "menu", "manual", "memo"],
    correctAnswer: "map",
    explanation: "A tourist map shows important locations and attractions.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-40",
    type: "multiple-choice",
    question: "'To travel light' means:",
    options: ["To bring minimal luggage", "To travel during the day", "To take a plane", "To use a flashlight"],
    correctAnswer: "To bring minimal luggage",
    explanation: "Traveling light means taking only essential items.",
    difficulty: 2,
    tags: ["listening", "travel-idioms", "b1"]
  },
  {
    id: "b1-travel-41",
    type: "fill-blank",
    question: "An ______ is a journey made by a group for pleasure.",
    options: ["outing", "outcome", "output", "outline"],
    correctAnswer: "outing",
    explanation: "An outing is a short trip taken for pleasure.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-42",
    type: "multiple-choice",
    question: "'Passport control' is where:",
    options: ["Officials check your passport", "You buy a passport", "You lose your passport", "You photograph your passport"],
    correctAnswer: "Officials check your passport",
    explanation: "Passport control is where travel documents are verified.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-43",
    type: "fill-blank",
    question: "A ______ is a holiday where you explore outdoor activities.",
    options: ["adventure holiday", "business trip", "staycation", "pilgrimage"],
    correctAnswer: "adventure holiday",
    explanation: "An adventure holiday focuses on outdoor and active experiences.",
    difficulty: 2,
    tags: ["listening", "adventure", "b1"]
  },
  {
    id: "b1-travel-44",
    type: "multiple-choice",
    question: "'Delayed' is the opposite of:",
    options: ["On time", "Cancelled", "Full", "Empty"],
    correctAnswer: "On time",
    explanation: "If a flight is delayed, it's not on time.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-45",
    type: "fill-blank",
    question: "A ______ provides directions to a destination.",
    options: ["GPS", "TV", "radio", "phone"],
    correctAnswer: "GPS",
    explanation: "GPS (Global Positioning System) provides navigation directions.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-46",
    type: "multiple-choice",
    question: "'To miss a flight' means:",
    options: ["To arrive too late to board", "To enjoy a flight", "To book a flight", "To upgrade a seat"],
    correctAnswer: "To arrive too late to board",
    explanation: "Missing a flight means arriving after the plane has departed.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-47",
    type: "fill-blank",
    question: "A ______ is needed to drive a car in another country.",
    options: ["license", "passport", "visa", "ticket"],
    correctAnswer: "license",
    explanation: "An international driving license allows you to drive abroad.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-48",
    type: "multiple-choice",
    question: "'Sightseeing' means:",
    options: ["Visiting places of interest", "Looking for lost items", "Window shopping", "Bird watching"],
    correctAnswer: "Visiting places of interest",
    explanation: "Sightseeing is the activity of visiting places of interest.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-49",
    type: "fill-blank",
    question: "A ______ takes you from the airport to your hotel.",
    options: ["shuttle", "submarine", "skateboard", "ship"],
    correctAnswer: "shuttle",
    explanation: "An airport shuttle transports passengers to and from airports.",
    difficulty: 2,
    tags: ["listening", "travel", "b1"]
  },
  {
    id: "b1-travel-50",
    type: "multiple-choice",
    question: "'To hit the road' means:",
    options: ["To start a journey", "To have an accident", "To repair a road", "To run away"],
    correctAnswer: "To start a journey",
    explanation: "To hit the road means to begin a journey or trip.",
    difficulty: 2,
    tags: ["listening", "travel-idioms", "b1"]
  },
];

// Theme 4: Digital Technology (50 Exercises)
const digitalTechnologyExercises: Exercise[] = [
  // Part 1: Tech Fundamentals
  {
    id: "b1-tech-1",
    type: "fill-blank",
    question: "The programs and other operating information used by a computer: (______)",
    options: ["software", "hardware", "firmware", "shareware"],
    correctAnswer: "software",
    explanation: "Software refers to the programs and operating information used by a computer.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-2",
    type: "fill-blank",
    question: "The physical parts of a computer: (______)",
    options: ["hardware", "software", "malware", "middleware"],
    correctAnswer: "hardware",
    explanation: "Hardware refers to the physical components of a computer.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-3",
    type: "fill-blank",
    question: "A process or set of rules to be followed in calculations: (______)",
    options: ["algorithm", "rhythm", "logarithm", "diagram"],
    correctAnswer: "algorithm",
    explanation: "An algorithm is a set of rules or steps used to solve problems.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-4",
    type: "fill-blank",
    question: "A structured set of data held in a computer: (______)",
    options: ["database", "dataset", "datasheet", "dateline"],
    correctAnswer: "database",
    explanation: "A database is an organized collection of structured data.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-5",
    type: "fill-blank",
    question: "Unscramble: A-L-G-O-R-I-T-H-M (______)",
    options: ["algorithm", "algorythm", "algorithim", "algorhithm"],
    correctAnswer: "algorithm",
    explanation: "ALGORITHM - a set of rules for calculations.",
    difficulty: 2,
    tags: ["listening", "technology", "spelling", "b1"]
  },
  {
    id: "b1-tech-6",
    type: "fill-blank",
    question: "Unscramble: H-A-R-D-W-A-R-E (______)",
    options: ["hardware", "harware", "hardwear", "hardwere"],
    correctAnswer: "hardware",
    explanation: "HARDWARE - physical computer components.",
    difficulty: 2,
    tags: ["listening", "technology", "spelling", "b1"]
  },
  {
    id: "b1-tech-7",
    type: "multiple-choice",
    question: "The process of converting information into a code:",
    options: ["Encryption", "Deletion", "Extraction", "Compression"],
    correctAnswer: "Encryption",
    explanation: "Encryption converts data into code to prevent unauthorized access.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-8",
    type: "multiple-choice",
    question: "A point where two systems, subjects, or organizations meet and interact:",
    options: ["Interface", "Screen", "Monitor", "Display"],
    correctAnswer: "Interface",
    explanation: "An interface is a point of interaction between systems.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-9",
    type: "multiple-choice",
    question: "Storing data on the internet rather than a local drive:",
    options: ["Cloud computing", "Hard drive", "USB storage", "CD-ROM"],
    correctAnswer: "Cloud computing",
    explanation: "Cloud computing stores and accesses data over the internet.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-10",
    type: "multiple-choice",
    question: "'Open source' means the code is:",
    options: ["Available to everyone", "Secret", "Expensive", "Illegal"],
    correctAnswer: "Available to everyone",
    explanation: "Open source code is publicly accessible for anyone to use or modify.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  // Part 2: Advanced Tech Concepts
  {
    id: "b1-tech-11",
    type: "multiple-choice",
    question: "AI stands for:",
    options: ["Artificial Intelligence", "Auto Internet", "Advanced Interface", "Automatic Input"],
    correctAnswer: "Artificial Intelligence",
    explanation: "AI stands for Artificial Intelligence - computer simulation of human intelligence.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-12",
    type: "multiple-choice",
    question: "Cybersecurity protects against:",
    options: ["Hackers", "Dust", "Weather", "Noise"],
    correctAnswer: "Hackers",
    explanation: "Cybersecurity protects systems from digital attacks and hackers.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-13",
    type: "multiple-choice",
    question: "Bandwidth is:",
    options: ["Data transfer capacity", "A musical group", "A rubber band", "A type of radio"],
    correctAnswer: "Data transfer capacity",
    explanation: "Bandwidth is the maximum rate of data transfer across a network.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-14",
    type: "multiple-choice",
    question: "Glitch is:",
    options: ["A sudden, usually temporary malfunction", "A feature", "An upgrade", "A benefit"],
    correctAnswer: "A sudden, usually temporary malfunction",
    explanation: "A glitch is a sudden, usually temporary malfunction or fault.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-15",
    type: "multiple-choice",
    question: "Browser is:",
    options: ["Software to access the internet", "A search engine", "A computer", "A phone"],
    correctAnswer: "Software to access the internet",
    explanation: "A browser is software used to access and navigate the internet.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-16",
    type: "multiple-choice",
    question: "True or False: A 'server' provides data to other computers.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "A server is a computer that provides data to other computers in a network.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-17",
    type: "multiple-choice",
    question: "True or False: 'Phishing' is a type of legal email marketing.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "Phishing is a fraudulent attempt to obtain sensitive information.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-18",
    type: "multiple-choice",
    question: "Synonym: 'Virtual' means:",
    options: ["Simulated", "Physical", "Real", "Tangible"],
    correctAnswer: "Simulated",
    explanation: "Virtual means simulated or existing in essence but not in physical form.",
    difficulty: 2,
    tags: ["listening", "vocabulary", "b1"]
  },
  {
    id: "b1-tech-19",
    type: "multiple-choice",
    question: "The antonym of 'Offline' is:",
    options: ["Online", "Upline", "Inline", "Outline"],
    correctAnswer: "Online",
    explanation: "Online is the opposite of offline; connected to the internet.",
    difficulty: 2,
    tags: ["listening", "vocabulary", "b1"]
  },
  {
    id: "b1-tech-20",
    type: "multiple-choice",
    question: "Collocation: You install:",
    options: ["an app", "a mouse", "a keyboard", "a screen"],
    correctAnswer: "an app",
    explanation: "We install apps, programs, and software on devices.",
    difficulty: 2,
    tags: ["listening", "collocations", "b1"]
  },
  // Additional Technology exercises (21-50)
  {
    id: "b1-tech-21",
    type: "fill-blank",
    question: "To ______ means to start a computer or program.",
    options: ["boot", "shoot", "root", "loot"],
    correctAnswer: "boot",
    explanation: "To boot means to start up a computer system.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-22",
    type: "multiple-choice",
    question: "A 'bug' in computing is:",
    options: ["An error in a program", "An insect", "A feature", "A virus"],
    correctAnswer: "An error in a program",
    explanation: "A bug is an error or flaw in software that causes incorrect results.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-23",
    type: "fill-blank",
    question: "To ______ is to copy files to a storage device for safety.",
    options: ["backup", "break", "boost", "block"],
    correctAnswer: "backup",
    explanation: "To backup means to make copies of data for protection.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-24",
    type: "multiple-choice",
    question: "'Download' means to:",
    options: ["Transfer data from the internet to your device", "Upload data", "Delete data", "Create data"],
    correctAnswer: "Transfer data from the internet to your device",
    explanation: "Downloading is receiving data from a remote system to your device.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-25",
    type: "fill-blank",
    question: "A ______ is a secret word or phrase for accessing a system.",
    options: ["password", "passport", "pathway", "pastime"],
    correctAnswer: "password",
    explanation: "A password is a secret string of characters used for authentication.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-26",
    type: "multiple-choice",
    question: "'To crash' in computing means:",
    options: ["To stop working suddenly", "To work faster", "To upgrade", "To connect"],
    correctAnswer: "To stop working suddenly",
    explanation: "A crash is when a computer or program stops working unexpectedly.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-27",
    type: "fill-blank",
    question: "A ______ is malicious software designed to damage computers.",
    options: ["virus", "vitamin", "video", "vision"],
    correctAnswer: "virus",
    explanation: "A computer virus is malware that replicates and spreads.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-28",
    type: "multiple-choice",
    question: "'Streaming' means:",
    options: ["Watching or listening to content in real-time", "Downloading", "Uploading", "Deleting"],
    correctAnswer: "Watching or listening to content in real-time",
    explanation: "Streaming is playing audio or video content in real-time.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-29",
    type: "fill-blank",
    question: "A ______ is a movable symbol on a computer screen.",
    options: ["cursor", "corner", "cutter", "center"],
    correctAnswer: "cursor",
    explanation: "The cursor is the movable indicator on a computer screen.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-30",
    type: "multiple-choice",
    question: "'To scroll' means:",
    options: ["To move up or down on a screen", "To type", "To click", "To delete"],
    correctAnswer: "To move up or down on a screen",
    explanation: "Scrolling is moving the displayed content up, down, or across.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-31",
    type: "fill-blank",
    question: "Wi-Fi allows devices to connect to the internet ______.",
    options: ["wirelessly", "wired", "slowly", "directly"],
    correctAnswer: "wirelessly",
    explanation: "Wi-Fi provides wireless internet connectivity.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-32",
    type: "multiple-choice",
    question: "A 'router' is:",
    options: ["A device that forwards data between networks", "A type of computer", "A printer", "A scanner"],
    correctAnswer: "A device that forwards data between networks",
    explanation: "A router directs network traffic between devices.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-33",
    type: "fill-blank",
    question: "To ______ a file means to reduce its size.",
    options: ["compress", "complete", "compare", "compose"],
    correctAnswer: "compress",
    explanation: "Compressing reduces file size for easier storage or transfer.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-34",
    type: "multiple-choice",
    question: "'Spam' refers to:",
    options: ["Unwanted electronic messages", "A type of food", "Important emails", "Computer games"],
    correctAnswer: "Unwanted electronic messages",
    explanation: "Spam is irrelevant or unsolicited electronic messages.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-35",
    type: "fill-blank",
    question: "A ______ is a website where a person writes regular entries.",
    options: ["blog", "blot", "blow", "blob"],
    correctAnswer: "blog",
    explanation: "A blog is a regularly updated website or web page.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-36",
    type: "multiple-choice",
    question: "'URL' stands for:",
    options: ["Uniform Resource Locator", "Universal Radio Link", "United Real Location", "Unique Reference Label"],
    correctAnswer: "Uniform Resource Locator",
    explanation: "URL is the address of a web page on the internet.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-37",
    type: "fill-blank",
    question: "To ______ means to restart a computer.",
    options: ["reboot", "rebuild", "reduce", "refuse"],
    correctAnswer: "reboot",
    explanation: "To reboot means to restart a computer system.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-38",
    type: "multiple-choice",
    question: "A 'hotspot' is:",
    options: ["A location with Wi-Fi access", "A very hot place", "A computer part", "A type of virus"],
    correctAnswer: "A location with Wi-Fi access",
    explanation: "A hotspot provides wireless internet access in a public place.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-39",
    type: "fill-blank",
    question: "To ______ a page means to update its content.",
    options: ["refresh", "remove", "replace", "reduce"],
    correctAnswer: "refresh",
    explanation: "Refreshing reloads the current web page with updated content.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-40",
    type: "multiple-choice",
    question: "'Bluetooth' is:",
    options: ["Wireless technology for short-range data exchange", "A dental condition", "A type of monitor", "A computer game"],
    correctAnswer: "Wireless technology for short-range data exchange",
    explanation: "Bluetooth enables wireless communication between devices.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-41",
    type: "fill-blank",
    question: "A ______ protects a computer from unauthorized access.",
    options: ["firewall", "fire alarm", "firework", "fireplace"],
    correctAnswer: "firewall",
    explanation: "A firewall monitors and controls incoming and outgoing network traffic.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-42",
    type: "multiple-choice",
    question: "'To log in' means:",
    options: ["To access a computer system", "To cut wood", "To keep records", "To exercise"],
    correctAnswer: "To access a computer system",
    explanation: "Logging in is the process of gaining access to a system.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-43",
    type: "fill-blank",
    question: "A ______ is a small program that enhances browser functionality.",
    options: ["plugin", "plugout", "playback", "platform"],
    correctAnswer: "plugin",
    explanation: "A plugin adds specific features to a software application.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-44",
    type: "multiple-choice",
    question: "'To sync' means:",
    options: ["To synchronize data between devices", "To sink in water", "To think deeply", "To link pages"],
    correctAnswer: "To synchronize data between devices",
    explanation: "Syncing keeps data consistent across multiple devices.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-45",
    type: "fill-blank",
    question: "RAM stands for Random Access ______.",
    options: ["Memory", "Machine", "Module", "Monitor"],
    correctAnswer: "Memory",
    explanation: "RAM (Random Access Memory) is a computer's working memory.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-46",
    type: "multiple-choice",
    question: "'Emoji' refers to:",
    options: ["Small digital images expressing emotions", "A type of font", "A programming language", "A computer virus"],
    correctAnswer: "Small digital images expressing emotions",
    explanation: "Emojis are pictographs used in electronic communication.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-47",
    type: "fill-blank",
    question: "To ______ means to remove unwanted software from a device.",
    options: ["uninstall", "install", "reinstall", "unstall"],
    correctAnswer: "uninstall",
    explanation: "Uninstalling removes software from a computer.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-48",
    type: "multiple-choice",
    question: "A 'tab' in a browser is:",
    options: ["A separate browsing session in the same window", "A keyboard key", "A restaurant bill", "A type of file"],
    correctAnswer: "A separate browsing session in the same window",
    explanation: "Browser tabs allow multiple pages open in one window.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-49",
    type: "fill-blank",
    question: "A ______ allows you to type on a computer.",
    options: ["keyboard", "keyhole", "keynote", "keystone"],
    correctAnswer: "keyboard",
    explanation: "A keyboard is the input device with keys for typing.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
  {
    id: "b1-tech-50",
    type: "multiple-choice",
    question: "'IoT' stands for:",
    options: ["Internet of Things", "Internet of Time", "Input of Text", "Integration of Technology"],
    correctAnswer: "Internet of Things",
    explanation: "IoT refers to the network of connected everyday devices.",
    difficulty: 2,
    tags: ["listening", "technology", "b1"]
  },
];

// Theme 5: Psychology & Mind (50 Exercises)
const psychologyMindExercises: Exercise[] = [
  // Part 1: Mental Processes
  {
    id: "b1-psych-1",
    type: "fill-blank",
    question: "The way in which one acts or conducts oneself: (______)",
    options: ["behavior", "behaviour", "behave", "behaving"],
    correctAnswer: "behavior",
    explanation: "Behavior is the way a person acts or conducts themselves.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-2",
    type: "fill-blank",
    question: "The reason or reasons one has for acting in a particular way: (______)",
    options: ["motivation", "motion", "motive", "motivate"],
    correctAnswer: "motivation",
    explanation: "Motivation is the reason for acting or behaving in a particular way.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-3",
    type: "fill-blank",
    question: "A feeling of worry, nervousness, or unease: (______)",
    options: ["anxiety", "anxious", "anger", "anguish"],
    correctAnswer: "anxiety",
    explanation: "Anxiety is a feeling of worry, nervousness, or unease.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-4",
    type: "fill-blank",
    question: "The ability to see, hear, or become aware of something through the senses: (______)",
    options: ["perception", "perspective", "perceive", "perceptive"],
    correctAnswer: "perception",
    explanation: "Perception is the ability to become aware of something through the senses.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-5",
    type: "fill-blank",
    question: "Unscramble: P-E-R-C-E-P-T-I-O-N (______)",
    options: ["perception", "perceptoin", "percepton", "percpetion"],
    correctAnswer: "perception",
    explanation: "PERCEPTION - the way you understand or interpret something.",
    difficulty: 2,
    tags: ["listening", "psychology", "spelling", "b1"]
  },
  {
    id: "b1-psych-6",
    type: "fill-blank",
    question: "Unscramble: B-E-H-A-V-I-O-R (______)",
    options: ["behavior", "behavoir", "behaviur", "behaviar"],
    correctAnswer: "behavior",
    explanation: "BEHAVIOR - the way a person conducts themselves.",
    difficulty: 2,
    tags: ["listening", "psychology", "spelling", "b1"]
  },
  {
    id: "b1-psych-7",
    type: "multiple-choice",
    question: "The part of the mind of which one is not fully aware but which influences actions:",
    options: ["Subconscious", "Conscious", "Conscience", "Consciousness"],
    correctAnswer: "Subconscious",
    explanation: "The subconscious is the part of the mind not fully aware but influencing behavior.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-8",
    type: "multiple-choice",
    question: "Treatment intended to relieve or heal a disorder:",
    options: ["Therapy", "Diagnosis", "Symptom", "Prognosis"],
    correctAnswer: "Therapy",
    explanation: "Therapy is treatment intended to relieve or heal a disorder.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-9",
    type: "multiple-choice",
    question: "Relating to the process of acquiring knowledge and understanding:",
    options: ["Cognitive", "Physical", "Emotional", "Spiritual"],
    correctAnswer: "Cognitive",
    explanation: "Cognitive relates to the mental processes of acquiring knowledge.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-10",
    type: "fill-blank",
    question: "A 'phobia' is an irrational ______ of something.",
    options: ["fear", "love", "interest", "curiosity"],
    correctAnswer: "fear",
    explanation: "A phobia is an extreme, irrational fear of something.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  // Part 2: Emotions vs. Traits
  {
    id: "b1-psych-11",
    type: "multiple-choice",
    question: "Optimistic means:",
    options: ["Hopeful about the future", "Sad about the past", "Worried about everything", "Angry at others"],
    correctAnswer: "Hopeful about the future",
    explanation: "Optimistic means having a positive outlook and hopeful about the future.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-12",
    type: "multiple-choice",
    question: "Introvert describes someone who:",
    options: ["Recharges alone", "Loves crowds", "Talks constantly", "Never thinks"],
    correctAnswer: "Recharges alone",
    explanation: "An introvert prefers solitude and recharges by being alone.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-13",
    type: "multiple-choice",
    question: "Resilience is:",
    options: ["Recovering quickly from difficulties", "Giving up easily", "Avoiding challenges", "Ignoring problems"],
    correctAnswer: "Recovering quickly from difficulties",
    explanation: "Resilience is the ability to recover quickly from difficulties.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-14",
    type: "multiple-choice",
    question: "Trauma is:",
    options: ["A deeply distressing experience", "A happy memory", "A small problem", "A physical injury only"],
    correctAnswer: "A deeply distressing experience",
    explanation: "Trauma is a deeply distressing or disturbing experience.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-15",
    type: "multiple-choice",
    question: "Narcissist describes someone who:",
    options: ["Has excessive interest in themselves", "Is very humble", "Helps everyone", "Never thinks about self"],
    correctAnswer: "Has excessive interest in themselves",
    explanation: "A narcissist has an excessive interest in themselves.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-16",
    type: "multiple-choice",
    question: "True or False: 'Body language' is a form of non-verbal communication.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Body language is indeed a form of non-verbal communication.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-17",
    type: "multiple-choice",
    question: "True or False: 'Insomnia' is the ability to sleep very well.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "Insomnia is the inability to sleep, not the ability to sleep well.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-18",
    type: "multiple-choice",
    question: "Synonym: 'Rational' means:",
    options: ["Logical", "Emotional", "Crazy", "Random"],
    correctAnswer: "Logical",
    explanation: "Rational means based on logic and reason.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-19",
    type: "multiple-choice",
    question: "Antonym: The opposite of 'Stable' is:",
    options: ["Unstable", "Stable", "Steady", "Balanced"],
    correctAnswer: "Unstable",
    explanation: "Unstable is the opposite of stable.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-20",
    type: "multiple-choice",
    question: "Collocation: To cope ______ stress.",
    options: ["with", "on", "at", "for"],
    correctAnswer: "with",
    explanation: "The correct collocation is 'cope with stress'.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  // Part 3: Applied Psychology
  {
    id: "b1-psych-21",
    type: "multiple-choice",
    question: "'She has a lot of empathy; she understands how I feel.' This statement is:",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Empathy is the ability to understand others' feelings.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-22",
    type: "multiple-choice",
    question: "'His ego is too big' means:",
    options: ["He is arrogant", "He is shy", "He is humble", "He is quiet"],
    correctAnswer: "He is arrogant",
    explanation: "Having a big ego means being arrogant or self-important.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-23",
    type: "multiple-choice",
    question: "'I had a panic attack' means:",
    options: ["Sudden intense fear", "A long sleep", "A good meal", "A happy moment"],
    correctAnswer: "Sudden intense fear",
    explanation: "A panic attack is a sudden episode of intense fear.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-24",
    type: "multiple-choice",
    question: "'He is in denial' means:",
    options: ["Refusing to accept the truth", "Agreeing with everyone", "Being very honest", "Accepting reality"],
    correctAnswer: "Refusing to accept the truth",
    explanation: "Being in denial means refusing to accept reality.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-25",
    type: "multiple-choice",
    question: "'Positive reinforcement helps learning' uses:",
    options: ["Rewards", "Punishments", "Ignoring", "Criticism"],
    correctAnswer: "Rewards",
    explanation: "Positive reinforcement uses rewards to encourage behavior.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-26",
    type: "fill-blank",
    question: "A ______ is a mental health professional who provides talk therapy.",
    options: ["therapist", "therapy", "therapeutic", "therapize"],
    correctAnswer: "therapist",
    explanation: "A therapist is a professional who provides therapy.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-27",
    type: "multiple-choice",
    question: "An extrovert typically:",
    options: ["Gains energy from social interaction", "Prefers solitude", "Avoids people", "Dislikes talking"],
    correctAnswer: "Gains energy from social interaction",
    explanation: "Extroverts gain energy from being around others.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-28",
    type: "multiple-choice",
    question: "Stress can be:",
    options: ["Both positive and negative", "Only negative", "Only positive", "Neither"],
    correctAnswer: "Both positive and negative",
    explanation: "Stress can be positive (eustress) or negative (distress).",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-29",
    type: "fill-blank",
    question: "Someone who studies the mind and behavior is a ______.",
    options: ["psychologist", "psychology", "psychological", "psycho"],
    correctAnswer: "psychologist",
    explanation: "A psychologist studies the mind and behavior.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-30",
    type: "multiple-choice",
    question: "A 'mood swing' refers to:",
    options: ["Rapid changes in emotional state", "A type of dance", "A swing set", "A musical instrument"],
    correctAnswer: "Rapid changes in emotional state",
    explanation: "A mood swing is a rapid change in mood.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-31",
    type: "multiple-choice",
    question: "Self-esteem refers to:",
    options: ["How you value yourself", "How others value you", "Your salary", "Your appearance"],
    correctAnswer: "How you value yourself",
    explanation: "Self-esteem is your overall sense of self-worth.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-32",
    type: "fill-blank",
    question: "Being ______ means having a deep awareness of yourself.",
    options: ["self-aware", "self-fish", "self-less", "self-made"],
    correctAnswer: "self-aware",
    explanation: "Self-aware means having conscious knowledge of your own character.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-33",
    type: "multiple-choice",
    question: "Depression is characterized by:",
    options: ["Persistent sadness and loss of interest", "Constant happiness", "High energy", "Increased appetite"],
    correctAnswer: "Persistent sadness and loss of interest",
    explanation: "Depression involves persistent feelings of sadness.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-34",
    type: "multiple-choice",
    question: "Mindfulness means:",
    options: ["Being fully present in the moment", "Thinking about the past", "Planning the future", "Ignoring everything"],
    correctAnswer: "Being fully present in the moment",
    explanation: "Mindfulness is focusing on the present moment.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-35",
    type: "fill-blank",
    question: "The ______ effect is when people remember beginnings and endings better.",
    options: ["serial position", "butterfly", "domino", "halo"],
    correctAnswer: "serial position",
    explanation: "The serial position effect describes better recall of first and last items.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-36",
    type: "multiple-choice",
    question: "IQ stands for:",
    options: ["Intelligence Quotient", "Internal Quality", "Immediate Question", "Individual Quest"],
    correctAnswer: "Intelligence Quotient",
    explanation: "IQ stands for Intelligence Quotient, a measure of intelligence.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-37",
    type: "multiple-choice",
    question: "Emotional intelligence (EQ) involves:",
    options: ["Understanding and managing emotions", "Being very smart academically", "Having a high IQ", "Ignoring feelings"],
    correctAnswer: "Understanding and managing emotions",
    explanation: "EQ is the ability to understand and manage emotions.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-38",
    type: "fill-blank",
    question: "______ memory stores information for immediate use.",
    options: ["Short-term", "Long-term", "Permanent", "Eternal"],
    correctAnswer: "Short-term",
    explanation: "Short-term memory holds information briefly.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-39",
    type: "multiple-choice",
    question: "A 'placebo' is:",
    options: ["An inactive treatment that can have real effects", "A real medicine", "A type of surgery", "A disease"],
    correctAnswer: "An inactive treatment that can have real effects",
    explanation: "A placebo is an inactive treatment that may produce real effects.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-40",
    type: "multiple-choice",
    question: "Procrastination means:",
    options: ["Delaying or postponing tasks", "Doing tasks immediately", "Working hard", "Being organized"],
    correctAnswer: "Delaying or postponing tasks",
    explanation: "Procrastination is the act of delaying tasks.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-41",
    type: "fill-blank",
    question: "A person who is easily influenced by others is described as ______.",
    options: ["impressionable", "impressive", "impressed", "impression"],
    correctAnswer: "impressionable",
    explanation: "Impressionable means easily influenced or affected.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-42",
    type: "multiple-choice",
    question: "An 'inferiority complex' means:",
    options: ["Feeling less worthy than others", "Feeling superior", "Feeling equal", "Feeling indifferent"],
    correctAnswer: "Feeling less worthy than others",
    explanation: "An inferiority complex involves feeling less worthy than others.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-43",
    type: "multiple-choice",
    question: "Peer pressure is:",
    options: ["Influence from people of similar age", "Pressure from parents", "Academic stress", "Work deadlines"],
    correctAnswer: "Influence from people of similar age",
    explanation: "Peer pressure is influence from one's social group.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-44",
    type: "fill-blank",
    question: "The fight-or-flight response is activated by ______.",
    options: ["stress", "sleep", "relaxation", "meditation"],
    correctAnswer: "stress",
    explanation: "The fight-or-flight response is triggered by stress or danger.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-45",
    type: "multiple-choice",
    question: "Attention span refers to:",
    options: ["How long you can focus", "How smart you are", "How fast you think", "How much you remember"],
    correctAnswer: "How long you can focus",
    explanation: "Attention span is the length of time you can concentrate.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-46",
    type: "multiple-choice",
    question: "An 'obsession' is:",
    options: ["An idea that dominates one's thoughts", "A casual interest", "A hobby", "A profession"],
    correctAnswer: "An idea that dominates one's thoughts",
    explanation: "An obsession is a preoccupying thought or idea.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-47",
    type: "fill-blank",
    question: "A person's overall outlook on life is called their ______.",
    options: ["attitude", "altitude", "aptitude", "attribute"],
    correctAnswer: "attitude",
    explanation: "Attitude is a settled way of thinking or feeling.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-48",
    type: "multiple-choice",
    question: "Being 'impulsive' means:",
    options: ["Acting without thinking", "Planning carefully", "Being patient", "Thinking deeply"],
    correctAnswer: "Acting without thinking",
    explanation: "Impulsive means acting without forethought.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-49",
    type: "multiple-choice",
    question: "Conditioning in psychology refers to:",
    options: ["Learning through association", "Hair treatment", "Exercise routine", "Air conditioning"],
    correctAnswer: "Learning through association",
    explanation: "Conditioning is a learning process through association.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
  {
    id: "b1-psych-50",
    type: "fill-blank",
    question: "______ is the study of how people think, feel, and behave.",
    options: ["Psychology", "Biology", "Sociology", "Philosophy"],
    correctAnswer: "Psychology",
    explanation: "Psychology is the scientific study of the mind and behavior.",
    difficulty: 2,
    tags: ["listening", "psychology", "b1"]
  },
];

// Theme 6: Economics & Finance (50 Exercises)
const economicsFinanceExercises: Exercise[] = [
  // Part 1: Economic Fundamentals
  {
    id: "b1-econ-1",
    type: "fill-blank",
    question: "A general increase in prices and fall in the purchasing value of money: (______)",
    options: ["inflation", "deflation", "recession", "depression"],
    correctAnswer: "inflation",
    explanation: "Inflation is a general increase in prices and fall in purchasing power.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-2",
    type: "fill-blank",
    question: "A period of temporary economic decline: (______)",
    options: ["recession", "progression", "succession", "regression"],
    correctAnswer: "recession",
    explanation: "A recession is a period of temporary economic decline.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-3",
    type: "fill-blank",
    question: "Money received, especially on a regular basis, for work or through investments: (______)",
    options: ["income", "outcome", "inflow", "outflow"],
    correctAnswer: "income",
    explanation: "Income is money received regularly for work or investments.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-4",
    type: "fill-blank",
    question: "An estimate of income and expenditure for a set period of time: (______)",
    options: ["budget", "balance", "account", "ledger"],
    correctAnswer: "budget",
    explanation: "A budget is an estimate of income and spending for a period.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-5",
    type: "fill-blank",
    question: "Unscramble: I-N-F-L-A-T-I-O-N (______)",
    options: ["inflation", "inflaton", "inflatoin", "infaltion"],
    correctAnswer: "inflation",
    explanation: "INFLATION - the rate at which prices rise.",
    difficulty: 2,
    tags: ["listening", "economics", "spelling", "b1"]
  },
  {
    id: "b1-econ-6",
    type: "fill-blank",
    question: "Unscramble: R-E-C-E-S-S-I-O-N (______)",
    options: ["recession", "reccesion", "recesion", "recessoin"],
    correctAnswer: "recession",
    explanation: "RECESSION - a period of economic decline.",
    difficulty: 2,
    tags: ["listening", "economics", "spelling", "b1"]
  },
  {
    id: "b1-econ-7",
    type: "multiple-choice",
    question: "A system of money in general use in a particular country:",
    options: ["Currency", "Coin", "Cash", "Credit"],
    correctAnswer: "Currency",
    explanation: "Currency is the system of money used in a country.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-8",
    type: "multiple-choice",
    question: "The amount of a good or service available for use:",
    options: ["Supply", "Demand", "Stock", "Reserve"],
    correctAnswer: "Supply",
    explanation: "Supply is the amount of something available.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-9",
    type: "multiple-choice",
    question: "The desire of purchasers for a good or service:",
    options: ["Demand", "Supply", "Need", "Want"],
    correctAnswer: "Demand",
    explanation: "Demand is the desire to purchase goods or services.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-10",
    type: "multiple-choice",
    question: "If supply is low and demand is high, prices usually:",
    options: ["Go up", "Go down", "Stay the same", "Disappear"],
    correctAnswer: "Go up",
    explanation: "When supply is low and demand is high, prices rise.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  // Part 2: Personal Finance
  {
    id: "b1-econ-11",
    type: "multiple-choice",
    question: "Debt is:",
    options: ["Money you owe", "Money you have", "Money you save", "Money you earn"],
    correctAnswer: "Money you owe",
    explanation: "Debt is money that you owe to someone else.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-12",
    type: "multiple-choice",
    question: "Asset is:",
    options: ["Something valuable you own", "Something you owe", "A type of tax", "A bank fee"],
    correctAnswer: "Something valuable you own",
    explanation: "An asset is something valuable that you own.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-13",
    type: "multiple-choice",
    question: "Mortgage is:",
    options: ["A loan to buy a house", "A loan for a car", "A credit card", "A savings account"],
    correctAnswer: "A loan to buy a house",
    explanation: "A mortgage is a loan used to buy property.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-14",
    type: "multiple-choice",
    question: "Interest is:",
    options: ["The cost of borrowing money", "A hobby", "Free money", "A type of bank"],
    correctAnswer: "The cost of borrowing money",
    explanation: "Interest is the cost paid for borrowing money.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-15",
    type: "multiple-choice",
    question: "Tax is:",
    options: ["Money paid to the government", "Money from the government", "Bank fees", "Loan payments"],
    correctAnswer: "Money paid to the government",
    explanation: "Tax is money paid to the government for public services.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-16",
    type: "multiple-choice",
    question: "True or False: 'Net income' is what you take home after taxes.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Net income is your income after all deductions including taxes.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-17",
    type: "multiple-choice",
    question: "True or False: A 'bull market' means the economy is doing badly.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "A bull market means the economy is doing well with rising prices.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-18",
    type: "multiple-choice",
    question: "Synonym: 'Wealth' means:",
    options: ["Riches", "Poverty", "Debt", "Loss"],
    correctAnswer: "Riches",
    explanation: "Wealth is synonymous with riches or affluence.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-19",
    type: "multiple-choice",
    question: "Antonym: The opposite of 'Liability' is:",
    options: ["Asset", "Debt", "Loss", "Expense"],
    correctAnswer: "Asset",
    explanation: "An asset is the opposite of a liability.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-20",
    type: "multiple-choice",
    question: "Idiom: 'To save for a rainy day' means:",
    options: ["To save money for emergencies", "To buy an umbrella", "To wait for rain", "To spend freely"],
    correctAnswer: "To save money for emergencies",
    explanation: "This idiom means saving money for future emergencies.",
    difficulty: 2,
    tags: ["listening", "finance", "idiom", "b1"]
  },
  // Part 3: Global Economics
  {
    id: "b1-econ-21",
    type: "multiple-choice",
    question: "GDP stands for:",
    options: ["Gross Domestic Product", "General Dollar Price", "Government Data Plan", "Global Development Program"],
    correctAnswer: "Gross Domestic Product",
    explanation: "GDP stands for Gross Domestic Product, a measure of economic output.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-22",
    type: "multiple-choice",
    question: "Trade means:",
    options: ["Buying and selling goods", "Keeping goods", "Destroying goods", "Hiding goods"],
    correctAnswer: "Buying and selling goods",
    explanation: "Trade is the buying and selling of goods and services.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-23",
    type: "multiple-choice",
    question: "Stock Market is:",
    options: ["Where shares of companies are bought/sold", "A grocery store", "A warehouse", "A factory"],
    correctAnswer: "Where shares of companies are bought/sold",
    explanation: "The stock market is where company shares are traded.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-24",
    type: "multiple-choice",
    question: "Bankruptcy is:",
    options: ["Legal status of being unable to pay debts", "Making a lot of profit", "Opening a bank", "Getting a loan"],
    correctAnswer: "Legal status of being unable to pay debts",
    explanation: "Bankruptcy is the legal status when unable to pay debts.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-25",
    type: "multiple-choice",
    question: "Capitalism is:",
    options: ["An economic system based on private ownership", "Government control of everything", "No ownership", "Sharing everything"],
    correctAnswer: "An economic system based on private ownership",
    explanation: "Capitalism is based on private ownership and free markets.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-26",
    type: "fill-blank",
    question: "A ______ market means prices are falling.",
    options: ["bear", "bull", "cow", "horse"],
    correctAnswer: "bear",
    explanation: "A bear market is characterized by falling prices.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-27",
    type: "multiple-choice",
    question: "'Dividend' is:",
    options: ["Payment to shareholders from company profits", "A type of debt", "A tax payment", "A bank fee"],
    correctAnswer: "Payment to shareholders from company profits",
    explanation: "A dividend is a payment to shareholders from profits.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-28",
    type: "fill-blank",
    question: "The rate at which one currency can be exchanged for another is the ______ rate.",
    options: ["exchange", "interest", "inflation", "unemployment"],
    correctAnswer: "exchange",
    explanation: "The exchange rate determines currency conversion values.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-29",
    type: "multiple-choice",
    question: "An 'entrepreneur' is:",
    options: ["Someone who starts a business", "A bank employee", "A government worker", "A factory worker"],
    correctAnswer: "Someone who starts a business",
    explanation: "An entrepreneur is someone who starts and runs a business.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-30",
    type: "multiple-choice",
    question: "'Monopoly' in economics means:",
    options: ["One company controls the entire market", "Many companies compete", "No companies exist", "A board game only"],
    correctAnswer: "One company controls the entire market",
    explanation: "A monopoly is when one company dominates a market.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-31",
    type: "fill-blank",
    question: "The total amount of money in circulation is called the money ______.",
    options: ["supply", "demand", "flow", "stream"],
    correctAnswer: "supply",
    explanation: "Money supply is the total amount of money in circulation.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-32",
    type: "multiple-choice",
    question: "A 'bond' is:",
    options: ["A loan to a government or company", "A type of glue", "A family connection", "A spy movie"],
    correctAnswer: "A loan to a government or company",
    explanation: "A bond is a debt instrument issued by governments or corporations.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-33",
    type: "multiple-choice",
    question: "'Subsidy' means:",
    options: ["Government financial support", "A tax increase", "A fine", "A penalty"],
    correctAnswer: "Government financial support",
    explanation: "A subsidy is financial assistance from the government.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-34",
    type: "fill-blank",
    question: "The percentage of people without jobs is called the ______ rate.",
    options: ["unemployment", "employment", "interest", "inflation"],
    correctAnswer: "unemployment",
    explanation: "The unemployment rate measures joblessness.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-35",
    type: "multiple-choice",
    question: "'Import' means:",
    options: ["Bring goods into a country", "Send goods out of a country", "Make goods locally", "Destroy goods"],
    correctAnswer: "Bring goods into a country",
    explanation: "Import means to bring goods into a country from abroad.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-36",
    type: "multiple-choice",
    question: "'Export' means:",
    options: ["Send goods out of a country", "Bring goods into a country", "Store goods", "Buy goods"],
    correctAnswer: "Send goods out of a country",
    explanation: "Export means to send goods to another country.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-37",
    type: "fill-blank",
    question: "A ______ is a fee charged on imported goods.",
    options: ["tariff", "tax", "toll", "tip"],
    correctAnswer: "tariff",
    explanation: "A tariff is a tax on imported goods.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-38",
    type: "multiple-choice",
    question: "'Profit' is:",
    options: ["Money gained after expenses", "Money spent", "Money borrowed", "Money lost"],
    correctAnswer: "Money gained after expenses",
    explanation: "Profit is the financial gain after subtracting expenses.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-39",
    type: "multiple-choice",
    question: "'Revenue' refers to:",
    options: ["Total income before expenses", "Total expenses", "Profit only", "Losses only"],
    correctAnswer: "Total income before expenses",
    explanation: "Revenue is total income before any deductions.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-40",
    type: "fill-blank",
    question: "The central bank of the US is called the Federal ______.",
    options: ["Reserve", "Bank", "Treasury", "Mint"],
    correctAnswer: "Reserve",
    explanation: "The Federal Reserve is the US central bank.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-41",
    type: "multiple-choice",
    question: "An 'investment' is:",
    options: ["Money put into something to earn a return", "Money spent on food", "Money given away", "Money wasted"],
    correctAnswer: "Money put into something to earn a return",
    explanation: "An investment is money allocated to earn future returns.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-42",
    type: "multiple-choice",
    question: "'Inflation rate' of 3% means:",
    options: ["Prices rose 3% on average", "Prices fell 3%", "3% of products disappeared", "3% more products were made"],
    correctAnswer: "Prices rose 3% on average",
    explanation: "A 3% inflation rate means average prices increased by 3%.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-43",
    type: "fill-blank",
    question: "The price of borrowing money is called the ______ rate.",
    options: ["interest", "exchange", "tax", "inflation"],
    correctAnswer: "interest",
    explanation: "The interest rate is the cost of borrowing money.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-44",
    type: "multiple-choice",
    question: "'Shares' represent:",
    options: ["Ownership in a company", "Company debts", "Employee wages", "Product prices"],
    correctAnswer: "Ownership in a company",
    explanation: "Shares represent partial ownership in a company.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-45",
    type: "multiple-choice",
    question: "A 'recession' typically lasts:",
    options: ["Two or more consecutive quarters of decline", "One day", "One week", "One hour"],
    correctAnswer: "Two or more consecutive quarters of decline",
    explanation: "A recession is typically defined as two consecutive quarters of economic decline.",
    difficulty: 2,
    tags: ["listening", "economics", "b1"]
  },
  {
    id: "b1-econ-46",
    type: "fill-blank",
    question: "A company's value on the stock market is called its market ______.",
    options: ["capitalization", "price", "rate", "value"],
    correctAnswer: "capitalization",
    explanation: "Market capitalization is the total market value of a company's shares.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-47",
    type: "multiple-choice",
    question: "'Credit score' affects your ability to:",
    options: ["Borrow money", "Vote", "Drive", "Travel"],
    correctAnswer: "Borrow money",
    explanation: "Credit score affects your ability to get loans.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-48",
    type: "multiple-choice",
    question: "A 'hedge fund' is:",
    options: ["An investment fund for wealthy investors", "A garden center", "A bank branch", "A savings account"],
    correctAnswer: "An investment fund for wealthy investors",
    explanation: "A hedge fund is a pooled investment fund for accredited investors.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-49",
    type: "fill-blank",
    question: "______ is the process of spreading investments to reduce risk.",
    options: ["Diversification", "Concentration", "Speculation", "Elimination"],
    correctAnswer: "Diversification",
    explanation: "Diversification spreads investments to minimize risk.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
  {
    id: "b1-econ-50",
    type: "multiple-choice",
    question: "'Liquidity' refers to:",
    options: ["How easily an asset can be converted to cash", "How wet something is", "How popular a product is", "How old a company is"],
    correctAnswer: "How easily an asset can be converted to cash",
    explanation: "Liquidity is how quickly an asset can become cash.",
    difficulty: 2,
    tags: ["listening", "finance", "b1"]
  },
];

// Theme 7: Health & Wellness (50 Exercises)
const healthWellnessExercises: Exercise[] = [
  // Part 1: Medical Basics
  {
    id: "b1-health-1",
    type: "fill-blank",
    question: "A physical or mental feature regarded as indicating a condition of disease: (______)",
    options: ["symptom", "syndrome", "system", "symbol"],
    correctAnswer: "symptom",
    explanation: "A symptom is a sign indicating a condition or disease.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-2",
    type: "fill-blank",
    question: "The identification of the nature of an illness: (______)",
    options: ["diagnosis", "prognosis", "dialysis", "analysis"],
    correctAnswer: "diagnosis",
    explanation: "Diagnosis is identifying the nature of an illness.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-3",
    type: "fill-blank",
    question: "Medical care given to a patient for an illness or injury: (______)",
    options: ["treatment", "treaty", "treat", "treating"],
    correctAnswer: "treatment",
    explanation: "Treatment is medical care for illness or injury.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-4",
    type: "fill-blank",
    question: "An instruction written by a doctor that authorizes medicine: (______)",
    options: ["prescription", "description", "inscription", "subscription"],
    correctAnswer: "prescription",
    explanation: "A prescription is a doctor's written order for medicine.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-5",
    type: "fill-blank",
    question: "Unscramble: D-I-A-G-N-O-S-I-S (______)",
    options: ["diagnosis", "diagnosos", "diagnosys", "diagnisis"],
    correctAnswer: "diagnosis",
    explanation: "DIAGNOSIS - identifying an illness.",
    difficulty: 2,
    tags: ["listening", "health", "spelling", "b1"]
  },
  {
    id: "b1-health-6",
    type: "fill-blank",
    question: "Unscramble: P-R-E-S-C-R-I-P-T-I-O-N (______)",
    options: ["prescription", "perscription", "prescripton", "presciption"],
    correctAnswer: "prescription",
    explanation: "PRESCRIPTION - a doctor's order for medicine.",
    difficulty: 2,
    tags: ["listening", "health", "spelling", "b1"]
  },
  {
    id: "b1-health-7",
    type: "multiple-choice",
    question: "Persisting for a long time or constantly recurring:",
    options: ["Chronic", "Acute", "Brief", "Temporary"],
    correctAnswer: "Chronic",
    explanation: "Chronic conditions persist for a long time.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-8",
    type: "multiple-choice",
    question: "Resistant to a particular infection or toxin:",
    options: ["Immune", "Sick", "Vulnerable", "Exposed"],
    correctAnswer: "Immune",
    explanation: "Being immune means resistant to infection.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-9",
    type: "multiple-choice",
    question: "The process of providing food necessary for health:",
    options: ["Nutrition", "Exercise", "Sleep", "Medication"],
    correctAnswer: "Nutrition",
    explanation: "Nutrition is providing the body with necessary food.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-10",
    type: "fill-blank",
    question: "A 'surgeon' performs ______ on patients.",
    options: ["operations", "interviews", "lectures", "meetings"],
    correctAnswer: "operations",
    explanation: "Surgeons perform surgical operations on patients.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  // Part 2: Healthy Living
  {
    id: "b1-health-11",
    type: "multiple-choice",
    question: "Sedentary means:",
    options: ["Spending much time seated/inactive", "Very active", "Athletic", "Energetic"],
    correctAnswer: "Spending much time seated/inactive",
    explanation: "Sedentary means spending a lot of time sitting.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-12",
    type: "multiple-choice",
    question: "Hydrated means:",
    options: ["Drinking enough water", "Being hungry", "Being tired", "Being cold"],
    correctAnswer: "Drinking enough water",
    explanation: "Being hydrated means having enough water in your body.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-13",
    type: "multiple-choice",
    question: "Obesity is:",
    options: ["Being significantly overweight", "Being fit", "Being underweight", "Being athletic"],
    correctAnswer: "Being significantly overweight",
    explanation: "Obesity is a condition of being very overweight.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-14",
    type: "multiple-choice",
    question: "Fatigue is:",
    options: ["Extreme tiredness", "Energy", "Excitement", "Strength"],
    correctAnswer: "Extreme tiredness",
    explanation: "Fatigue is a state of extreme tiredness.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-15",
    type: "multiple-choice",
    question: "Prevention is:",
    options: ["Stopping something from happening", "Curing it later", "Ignoring it", "Waiting for it"],
    correctAnswer: "Stopping something from happening",
    explanation: "Prevention means stopping something before it happens.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-16",
    type: "multiple-choice",
    question: "True or False: 'Mental health' is as important as physical health.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Mental health is equally important as physical health.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-17",
    type: "multiple-choice",
    question: "True or False: An 'epidemic' is a disease affecting many people at once.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "An epidemic is a widespread occurrence of disease.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-18",
    type: "multiple-choice",
    question: "Synonym: 'Ailment' means:",
    options: ["Minor illness", "Cure", "Medicine", "Treatment"],
    correctAnswer: "Minor illness",
    explanation: "An ailment is a minor illness.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-19",
    type: "multiple-choice",
    question: "Antonym: The opposite of 'Healthy' is:",
    options: ["Ill/Sick", "Strong", "Fit", "Athletic"],
    correctAnswer: "Ill/Sick",
    explanation: "Ill or sick is the opposite of healthy.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-20",
    type: "multiple-choice",
    question: "Collocation: To undergo ______.",
    options: ["surgery", "a pill", "a bandage", "rest"],
    correctAnswer: "surgery",
    explanation: "The correct collocation is 'undergo surgery'.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  // Part 3: At the Doctor's
  {
    id: "b1-health-21",
    type: "multiple-choice",
    question: "'I have a splitting headache' means:",
    options: ["My head hurts badly", "My foot hurts", "I'm happy", "I'm hungry"],
    correctAnswer: "My head hurts badly",
    explanation: "A splitting headache is a very painful headache.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-22",
    type: "multiple-choice",
    question: "'I feel nauseous' means:",
    options: ["I want to vomit", "I am hungry", "I am tired", "I am happy"],
    correctAnswer: "I want to vomit",
    explanation: "Feeling nauseous means feeling like you might vomit.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-23",
    type: "multiple-choice",
    question: "'My arm is swollen' means:",
    options: ["It is bigger than usual", "It is broken", "It is healthy", "It is small"],
    correctAnswer: "It is bigger than usual",
    explanation: "Swollen means enlarged, bigger than normal.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-24",
    type: "multiple-choice",
    question: "'Take this medicine on an empty stomach' means:",
    options: ["Before eating", "After eating", "With food", "Never"],
    correctAnswer: "Before eating",
    explanation: "On an empty stomach means before eating food.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-25",
    type: "multiple-choice",
    question: "'You need a vaccine' means you need:",
    options: ["A shot to prevent disease", "A bandage", "A surgery", "Rest"],
    correctAnswer: "A shot to prevent disease",
    explanation: "A vaccine is an injection to prevent disease.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-26",
    type: "fill-blank",
    question: "A medical professional who provides mental health support is a ______.",
    options: ["therapist", "surgeon", "dentist", "optician"],
    correctAnswer: "therapist",
    explanation: "A therapist provides mental health support.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-27",
    type: "multiple-choice",
    question: "An 'allergy' is:",
    options: ["A reaction to a substance", "A type of food", "A medicine", "An exercise"],
    correctAnswer: "A reaction to a substance",
    explanation: "An allergy is a damaging immune response to a substance.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-28",
    type: "fill-blank",
    question: "The organ that pumps blood through your body is the ______.",
    options: ["heart", "brain", "liver", "kidney"],
    correctAnswer: "heart",
    explanation: "The heart pumps blood throughout the body.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-29",
    type: "multiple-choice",
    question: "A 'pandemic' is:",
    options: ["A disease spread worldwide", "A local illness", "A mild cold", "A seasonal flu"],
    correctAnswer: "A disease spread worldwide",
    explanation: "A pandemic is a disease prevalent over a whole country or world.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-30",
    type: "multiple-choice",
    question: "'Contagious' means:",
    options: ["Able to spread from person to person", "Not spreadable", "Curable", "Harmless"],
    correctAnswer: "Able to spread from person to person",
    explanation: "Contagious means capable of being transmitted.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-31",
    type: "fill-blank",
    question: "A ______ is a medical professional who performs operations.",
    options: ["surgeon", "nurse", "receptionist", "pharmacist"],
    correctAnswer: "surgeon",
    explanation: "A surgeon performs surgical operations.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-32",
    type: "multiple-choice",
    question: "'Side effects' of medicine are:",
    options: ["Unintended reactions", "Main effects", "Benefits", "Flavors"],
    correctAnswer: "Unintended reactions",
    explanation: "Side effects are secondary, often unwanted effects of a medicine.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-33",
    type: "fill-blank",
    question: "A ______ checks your vision and prescribes glasses.",
    options: ["optician", "surgeon", "dentist", "cardiologist"],
    correctAnswer: "optician",
    explanation: "An optician specializes in eye care and glasses.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-34",
    type: "multiple-choice",
    question: "A 'dose' refers to:",
    options: ["Amount of medicine to take", "Type of illness", "Name of a doctor", "Hospital room"],
    correctAnswer: "Amount of medicine to take",
    explanation: "A dose is the quantity of medicine taken at one time.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-35",
    type: "multiple-choice",
    question: "'Recovery' means:",
    options: ["Getting better after illness", "Getting sick", "Staying ill", "Spreading disease"],
    correctAnswer: "Getting better after illness",
    explanation: "Recovery is the process of returning to health.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-36",
    type: "fill-blank",
    question: "A person who stays in a hospital is called a ______.",
    options: ["patient", "patient", "visitor", "doctor"],
    correctAnswer: "patient",
    explanation: "A patient is someone receiving medical treatment.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-37",
    type: "multiple-choice",
    question: "'Vital signs' include:",
    options: ["Heart rate, blood pressure, temperature", "Age, weight, height", "Name, address, phone", "Allergies, medications, history"],
    correctAnswer: "Heart rate, blood pressure, temperature",
    explanation: "Vital signs are measurements of basic body functions.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-38",
    type: "fill-blank",
    question: "An ______ is used to see inside the body using sound waves.",
    options: ["ultrasound", "X-ray", "MRI", "CT scan"],
    correctAnswer: "ultrasound",
    explanation: "Ultrasound uses sound waves to create images of the body.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-39",
    type: "multiple-choice",
    question: "A 'pharmacy' is where you:",
    options: ["Get prescribed medicines", "Have surgery", "See a dentist", "Get X-rays"],
    correctAnswer: "Get prescribed medicines",
    explanation: "A pharmacy dispenses prescribed medicines.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-40",
    type: "multiple-choice",
    question: "'Antibiotics' are used to:",
    options: ["Fight bacterial infections", "Cure viruses", "Treat pain", "Improve vision"],
    correctAnswer: "Fight bacterial infections",
    explanation: "Antibiotics treat bacterial infections.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-41",
    type: "fill-blank",
    question: "A ______ is a medical specialist who treats heart conditions.",
    options: ["cardiologist", "dermatologist", "neurologist", "pediatrician"],
    correctAnswer: "cardiologist",
    explanation: "A cardiologist specializes in heart conditions.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-42",
    type: "multiple-choice",
    question: "'Rehabilitation' is:",
    options: ["Treatment to restore abilities after injury", "Initial diagnosis", "Emergency care", "Preventive medicine"],
    correctAnswer: "Treatment to restore abilities after injury",
    explanation: "Rehabilitation helps restore function after illness or injury.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-43",
    type: "multiple-choice",
    question: "A 'checkup' is:",
    options: ["A routine medical examination", "Emergency surgery", "A serious diagnosis", "A hospital stay"],
    correctAnswer: "A routine medical examination",
    explanation: "A checkup is a routine health examination.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-44",
    type: "fill-blank",
    question: "______ is the medical term for high blood pressure.",
    options: ["Hypertension", "Hypotension", "Hyperglycemia", "Hypothermia"],
    correctAnswer: "Hypertension",
    explanation: "Hypertension is the medical term for high blood pressure.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-45",
    type: "multiple-choice",
    question: "A 'dietitian' helps with:",
    options: ["Nutrition and diet planning", "Surgery", "Mental health", "Eye care"],
    correctAnswer: "Nutrition and diet planning",
    explanation: "A dietitian is an expert in nutrition and diet.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-46",
    type: "multiple-choice",
    question: "'First aid' is:",
    options: ["Immediate care before professional help", "Surgery", "Long-term treatment", "Specialist care"],
    correctAnswer: "Immediate care before professional help",
    explanation: "First aid is emergency care given before medical help arrives.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-47",
    type: "fill-blank",
    question: "A ______ monitors your blood sugar levels if you have diabetes.",
    options: ["glucose monitor", "heart monitor", "blood pressure cuff", "thermometer"],
    correctAnswer: "glucose monitor",
    explanation: "A glucose monitor measures blood sugar levels.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-48",
    type: "multiple-choice",
    question: "'Wellness' encompasses:",
    options: ["Overall physical and mental health", "Just physical fitness", "Only diet", "Just sleep"],
    correctAnswer: "Overall physical and mental health",
    explanation: "Wellness is the state of overall good health.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-49",
    type: "multiple-choice",
    question: "An 'ER' or 'A&E' is:",
    options: ["Emergency department", "Pharmacy", "Doctor's office", "Waiting room"],
    correctAnswer: "Emergency department",
    explanation: "ER (Emergency Room) or A&E handles urgent cases.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
  {
    id: "b1-health-50",
    type: "fill-blank",
    question: "______ is the study of diseases and how they spread.",
    options: ["Epidemiology", "Cardiology", "Dermatology", "Radiology"],
    correctAnswer: "Epidemiology",
    explanation: "Epidemiology studies disease patterns and spread.",
    difficulty: 2,
    tags: ["listening", "health", "b1"]
  },
];

// Theme 8: Sports & Competition (50 Exercises)
const sportsCompetitionExercises: Exercise[] = [
  // Part 1: The Game
  {
    id: "b1-sport-1",
    type: "fill-blank",
    question: "A series of contests between competitors for an overall prize: (______)",
    options: ["tournament", "practice", "training", "warmup"],
    correctAnswer: "tournament",
    explanation: "A tournament is a series of competitive matches.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-2",
    type: "fill-blank",
    question: "A person who is proficient in sports and physical exercise: (______)",
    options: ["athlete", "spectator", "referee", "coach"],
    correctAnswer: "athlete",
    explanation: "An athlete is someone skilled in sports.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-3",
    type: "fill-blank",
    question: "An official who watches a game to ensure rules are followed: (______)",
    options: ["referee", "player", "coach", "manager"],
    correctAnswer: "referee",
    explanation: "A referee enforces the rules in a game.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-4",
    type: "fill-blank",
    question: "Someone who competes against another in a contest: (______)",
    options: ["opponent", "teammate", "partner", "coach"],
    correctAnswer: "opponent",
    explanation: "An opponent is someone you compete against.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-5",
    type: "fill-blank",
    question: "Unscramble: T-O-U-R-N-A-M-E-N-T (______)",
    options: ["tournament", "tornament", "tournamnt", "tournement"],
    correctAnswer: "tournament",
    explanation: "TOURNAMENT - a series of competitive games.",
    difficulty: 2,
    tags: ["listening", "sports", "spelling", "b1"]
  },
  {
    id: "b1-sport-6",
    type: "fill-blank",
    question: "Unscramble: A-T-H-L-E-T-E (______)",
    options: ["athlete", "athelete", "atlete", "athlette"],
    correctAnswer: "athlete",
    explanation: "ATHLETE - a person skilled in sports.",
    difficulty: 2,
    tags: ["listening", "sports", "spelling", "b1"]
  },
  {
    id: "b1-sport-7",
    type: "multiple-choice",
    question: "A plan of action designed to achieve a major aim:",
    options: ["Strategy", "Luck", "Chance", "Hope"],
    correctAnswer: "Strategy",
    explanation: "A strategy is a planned approach to achieve a goal.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-8",
    type: "multiple-choice",
    question: "The ability to sustain prolonged physical effort:",
    options: ["Stamina/Endurance", "Speed", "Strength", "Flexibility"],
    correctAnswer: "Stamina/Endurance",
    explanation: "Stamina is the ability to sustain prolonged effort.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-9",
    type: "multiple-choice",
    question: "A contest for the position of champion in a sport:",
    options: ["Championship", "Practice", "Tryout", "Rehearsal"],
    correctAnswer: "Championship",
    explanation: "A championship determines the champion.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-10",
    type: "fill-blank",
    question: "If the score is 2-2, it is a ______.",
    options: ["draw", "win", "loss", "forfeit"],
    correctAnswer: "draw",
    explanation: "A draw or tie means equal scores.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  // Part 2: Actions & Verbs
  {
    id: "b1-sport-11",
    type: "multiple-choice",
    question: "To score a goal means:",
    options: ["Get a point", "Lose a point", "Miss", "Fail"],
    correctAnswer: "Get a point",
    explanation: "Scoring a goal means getting a point.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-12",
    type: "multiple-choice",
    question: "To defeat an opponent means:",
    options: ["Win against them", "Help them", "Join them", "Avoid them"],
    correctAnswer: "Win against them",
    explanation: "To defeat means to win against someone.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-13",
    type: "multiple-choice",
    question: "To compete in a race means:",
    options: ["Take part", "Watch", "Leave", "Ignore"],
    correctAnswer: "Take part",
    explanation: "To compete means to participate.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-14",
    type: "multiple-choice",
    question: "To tackle a player means:",
    options: ["Stop them physically", "Talk to them", "Congratulate them", "Avoid them"],
    correctAnswer: "Stop them physically",
    explanation: "A tackle is a physical challenge to stop a player.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-15",
    type: "multiple-choice",
    question: "To qualify for the finals means:",
    options: ["Be allowed to enter", "Be rejected", "Be banned", "Be disqualified"],
    correctAnswer: "Be allowed to enter",
    explanation: "To qualify means to meet the requirements to enter.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-16",
    type: "multiple-choice",
    question: "True or False: An 'amateur' plays for money.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "An amateur plays without being paid, unlike a professional.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-17",
    type: "multiple-choice",
    question: "True or False: 'Doping' is using banned substances to improve performance.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Doping is the use of prohibited performance-enhancing drugs.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-18",
    type: "multiple-choice",
    question: "Synonym: 'Victor' means:",
    options: ["Winner", "Loser", "Referee", "Coach"],
    correctAnswer: "Winner",
    explanation: "Victor is another word for winner.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-19",
    type: "multiple-choice",
    question: "Antonym: The opposite of 'Defense' is:",
    options: ["Offense/Attack", "Goal", "Save", "Block"],
    correctAnswer: "Offense/Attack",
    explanation: "Offense or attack is the opposite of defense.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-20",
    type: "multiple-choice",
    question: "Idiom: 'To throw in the towel' means:",
    options: ["To give up", "To clean up", "To celebrate", "To warm up"],
    correctAnswer: "To give up",
    explanation: "Throwing in the towel means admitting defeat.",
    difficulty: 2,
    tags: ["listening", "sports", "idiom", "b1"]
  },
  // Part 3: Sportsmanship
  {
    id: "b1-sport-21",
    type: "multiple-choice",
    question: "Fair play means:",
    options: ["Respecting the rules", "Cheating", "Arguing", "Fighting"],
    correctAnswer: "Respecting the rules",
    explanation: "Fair play is about respecting rules and opponents.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-22",
    type: "multiple-choice",
    question: "Teamwork is:",
    options: ["Working together", "Working alone", "Competing", "Arguing"],
    correctAnswer: "Working together",
    explanation: "Teamwork is the combined effort of a team.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-23",
    type: "multiple-choice",
    question: "In sports, a 'coach' is:",
    options: ["The trainer", "The bus", "The stadium", "The ball"],
    correctAnswer: "The trainer",
    explanation: "A coach trains and instructs athletes.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-24",
    type: "multiple-choice",
    question: "A spectator is:",
    options: ["A person watching", "A person playing", "A referee", "A coach"],
    correctAnswer: "A person watching",
    explanation: "A spectator is someone who watches an event.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-25",
    type: "multiple-choice",
    question: "An underdog is:",
    options: ["The person expected to lose", "The favorite to win", "The referee", "The coach"],
    correctAnswer: "The person expected to lose",
    explanation: "An underdog is expected to lose against a stronger opponent.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-26",
    type: "fill-blank",
    question: "Football, basketball, and volleyball are examples of ______ sports.",
    options: ["team", "individual", "solo", "single"],
    correctAnswer: "team",
    explanation: "These are team sports requiring multiple players.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-27",
    type: "fill-blank",
    question: "Tennis and golf are examples of ______ sports.",
    options: ["individual", "team", "group", "collective"],
    correctAnswer: "individual",
    explanation: "These can be played individually.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-28",
    type: "multiple-choice",
    question: "Swimming and basketball are examples of:",
    options: ["Indoor sports", "Only outdoor sports", "Winter sports", "Extreme sports"],
    correctAnswer: "Indoor sports",
    explanation: "These sports can be played indoors.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-29",
    type: "multiple-choice",
    question: "Skiing and soccer are typically:",
    options: ["Outdoor sports", "Only indoor sports", "Table sports", "Board games"],
    correctAnswer: "Outdoor sports",
    explanation: "These are typically played outdoors.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-30",
    type: "fill-blank",
    question: "The ______ is where fans watch games in person.",
    options: ["stadium", "studio", "stage", "studio"],
    correctAnswer: "stadium",
    explanation: "A stadium is a venue for sports events.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-31",
    type: "multiple-choice",
    question: "A 'match' is:",
    options: ["A competitive game", "A practice session", "A warm-up", "An interview"],
    correctAnswer: "A competitive game",
    explanation: "A match is a competitive game or contest.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-32",
    type: "fill-blank",
    question: "A ______ is a period of time for rest during a game.",
    options: ["halftime", "fulltime", "overtime", "anytime"],
    correctAnswer: "halftime",
    explanation: "Halftime is the break between two halves of a game.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-33",
    type: "multiple-choice",
    question: "To 'warm up' before exercise means:",
    options: ["Prepare your body with light exercise", "Take a hot shower", "Sit in the sun", "Wear warm clothes"],
    correctAnswer: "Prepare your body with light exercise",
    explanation: "Warming up prepares muscles for intense activity.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-34",
    type: "multiple-choice",
    question: "A 'penalty' in sports is:",
    options: ["Punishment for breaking rules", "A reward", "A type of goal", "A celebration"],
    correctAnswer: "Punishment for breaking rules",
    explanation: "A penalty is a punishment for rule violations.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-35",
    type: "fill-blank",
    question: "The person who leads a team is called the ______.",
    options: ["captain", "prisoner", "soldier", "student"],
    correctAnswer: "captain",
    explanation: "A captain is the leader of a sports team.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-36",
    type: "multiple-choice",
    question: "'Extra time' or 'overtime' happens when:",
    options: ["The game is tied and needs more time", "Players are tired", "It's raining", "Fans leave early"],
    correctAnswer: "The game is tied and needs more time",
    explanation: "Extra time is added when a game ends in a tie.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-37",
    type: "fill-blank",
    question: "A ______ is a prize given to the winner.",
    options: ["trophy", "penalty", "foul", "bench"],
    correctAnswer: "trophy",
    explanation: "A trophy is an award for winning.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-38",
    type: "multiple-choice",
    question: "A 'foul' in sports is:",
    options: ["An action against the rules", "A type of goal", "A good play", "A celebration"],
    correctAnswer: "An action against the rules",
    explanation: "A foul is an unfair or invalid action in a game.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-39",
    type: "fill-blank",
    question: "Players who are not playing sit on the ______.",
    options: ["bench", "field", "court", "pool"],
    correctAnswer: "bench",
    explanation: "The bench is where substitute players sit.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-40",
    type: "multiple-choice",
    question: "To 'train' for a sport means:",
    options: ["Practice to improve skills", "Take a train ride", "Watch TV", "Sleep more"],
    correctAnswer: "Practice to improve skills",
    explanation: "Training is practicing to improve athletic performance.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-41",
    type: "multiple-choice",
    question: "The Olympic Games occur every:",
    options: ["Four years", "One year", "Two years", "Ten years"],
    correctAnswer: "Four years",
    explanation: "The Olympics are held every four years.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-42",
    type: "fill-blank",
    question: "A ______ medal is given for second place.",
    options: ["silver", "gold", "bronze", "platinum"],
    correctAnswer: "silver",
    explanation: "Silver medals are for second place finishes.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-43",
    type: "multiple-choice",
    question: "A 'record' in sports is:",
    options: ["The best achievement in a category", "A music album", "A type of ball", "A penalty"],
    correctAnswer: "The best achievement in a category",
    explanation: "A record is the best performance ever recorded.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-44",
    type: "multiple-choice",
    question: "To 'retire' from sports means:",
    options: ["Stop playing professionally", "Start a new sport", "Join a team", "Win a trophy"],
    correctAnswer: "Stop playing professionally",
    explanation: "Retiring means ending one's professional sports career.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-45",
    type: "fill-blank",
    question: "A ______ kick in football is taken from the edge of the box after a foul.",
    options: ["penalty", "corner", "free", "goal"],
    correctAnswer: "penalty",
    explanation: "A penalty kick is awarded for fouls in the penalty area.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-46",
    type: "multiple-choice",
    question: "A 'league' is:",
    options: ["A group of teams that compete regularly", "A single game", "A training session", "A type of ball"],
    correctAnswer: "A group of teams that compete regularly",
    explanation: "A league is an organized group of sports teams.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-47",
    type: "fill-blank",
    question: "The person who scores the most goals is called the top ______.",
    options: ["scorer", "keeper", "defender", "manager"],
    correctAnswer: "scorer",
    explanation: "The top scorer has the most goals.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-48",
    type: "multiple-choice",
    question: "A 'season' in sports refers to:",
    options: ["The period when games are played", "Winter only", "Summer only", "One day"],
    correctAnswer: "The period when games are played",
    explanation: "A season is the scheduled period for competitive games.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-49",
    type: "fill-blank",
    question: "An athlete who runs long distances is called a ______ runner.",
    options: ["marathon", "sprint", "relay", "hurdle"],
    correctAnswer: "marathon",
    explanation: "Marathon runners compete in long-distance races.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
  {
    id: "b1-sport-50",
    type: "multiple-choice",
    question: "Sportsmanship involves:",
    options: ["Respect, fairness, and grace in competition", "Only winning", "Cheating to win", "Fighting opponents"],
    correctAnswer: "Respect, fairness, and grace in competition",
    explanation: "Sportsmanship is ethical and respectful behavior in sports.",
    difficulty: 2,
    tags: ["listening", "sports", "b1"]
  },
];

// Theme 9: Cuisine & Gastronomy (50 Exercises)
const cuisineGastronomyExercises: Exercise[] = [
  // Part 1: Dining Vocabulary
  {
    id: "b1-cuisine-1",
    type: "fill-blank",
    question: "A style or method of cooking, especially as characteristic of a particular country: (______)",
    options: ["cuisine", "kitchen", "recipe", "menu"],
    correctAnswer: "cuisine",
    explanation: "Cuisine refers to a style or method of cooking characteristic of a particular country or region.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-2",
    type: "fill-blank",
    question: "A small dish of food or a drink taken before a meal to stimulate one's appetite: (______)",
    options: ["appetizer", "dessert", "main course", "snack"],
    correctAnswer: "appetizer",
    explanation: "An appetizer is a small dish served before the main course.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-3",
    type: "fill-blank",
    question: "A person who cultivates a discriminating palate for the enjoyment of good food and drink: (______)",
    options: ["gourmet", "chef", "waiter", "critic"],
    correctAnswer: "gourmet",
    explanation: "A gourmet is someone with refined taste in food and drink.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-4",
    type: "fill-blank",
    question: "A rare or expensive food item that is considered highly desirable: (______)",
    options: ["delicacy", "snack", "staple", "basic"],
    correctAnswer: "delicacy",
    explanation: "A delicacy is a rare or expensive food considered highly desirable.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-5",
    type: "fill-blank",
    question: "Unscramble: A-P-P-E-T-I-Z-E-R (______)",
    options: ["appetizer", "appitizer", "appetiser", "appetizor"],
    correctAnswer: "appetizer",
    explanation: "APPETIZER - a small dish before the main meal.",
    difficulty: 2,
    tags: ["listening", "cuisine", "spelling", "b1"]
  },
  {
    id: "b1-cuisine-6",
    type: "fill-blank",
    question: "Unscramble: G-O-U-R-M-E-T (______)",
    options: ["gourmet", "gormet", "gourmat", "gourmay"],
    correctAnswer: "gourmet",
    explanation: "GOURMET - a connoisseur of fine food.",
    difficulty: 2,
    tags: ["listening", "cuisine", "spelling", "b1"]
  },
  {
    id: "b1-cuisine-7",
    type: "multiple-choice",
    question: "Relating to diet or the kinds of food that a person, animal, or community eats:",
    options: ["Dietary", "Delicious", "Digestive", "Decorative"],
    correctAnswer: "Dietary",
    explanation: "Dietary relates to diet and the kinds of food consumed.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-8",
    type: "multiple-choice",
    question: "The feel, appearance, or consistency of a surface or a substance:",
    options: ["Texture", "Flavor", "Aroma", "Taste"],
    correctAnswer: "Texture",
    explanation: "Texture refers to the feel or consistency of food.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-9",
    type: "multiple-choice",
    question: "A set of instructions for preparing a particular dish:",
    options: ["Recipe", "Menu", "Order", "Bill"],
    correctAnswer: "Recipe",
    explanation: "A recipe is a set of instructions for preparing a dish.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-10",
    type: "multiple-choice",
    question: "A 'vegan' does not eat:",
    options: ["Meat or dairy", "Just meat", "Vegetables", "Grains"],
    correctAnswer: "Meat or dairy",
    explanation: "Vegans avoid all animal products including meat and dairy.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  // Part 2: Tastes & Textures
  {
    id: "b1-cuisine-11",
    type: "multiple-choice",
    question: "Savory means:",
    options: ["Salty or spicy, not sweet", "Very sweet", "Sour", "Bitter"],
    correctAnswer: "Salty or spicy, not sweet",
    explanation: "Savory describes food that is salty or spicy rather than sweet.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-12",
    type: "multiple-choice",
    question: "Bitter is like:",
    options: ["Coffee or dark chocolate", "Sugar", "Lemon", "Salt"],
    correctAnswer: "Coffee or dark chocolate",
    explanation: "Bitter taste is found in coffee and dark chocolate.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-13",
    type: "multiple-choice",
    question: "Sour is like:",
    options: ["Lemon", "Bread", "Honey", "Cheese"],
    correctAnswer: "Lemon",
    explanation: "Sour taste is like lemon or vinegar.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-14",
    type: "multiple-choice",
    question: "Crunchy means:",
    options: ["Making a loud noise when eaten", "Soft", "Chewy", "Smooth"],
    correctAnswer: "Making a loud noise when eaten",
    explanation: "Crunchy food makes a crisp sound when bitten.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-15",
    type: "multiple-choice",
    question: "Bland means:",
    options: ["Lacking strong flavor", "Very spicy", "Very sweet", "Very sour"],
    correctAnswer: "Lacking strong flavor",
    explanation: "Bland food has little or no distinctive taste.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-16",
    type: "multiple-choice",
    question: "True or False: 'Cuisine' refers to a kitchen appliance.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "Cuisine refers to a style of cooking, not an appliance.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-17",
    type: "multiple-choice",
    question: "True or False: To 'marinate' means to soak food in seasoned liquid before cooking.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Marinating involves soaking food in seasoned liquid to add flavor.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-18",
    type: "multiple-choice",
    question: "Synonym: 'Beverage' means:",
    options: ["Drink", "Snack", "Meal", "Dessert"],
    correctAnswer: "Drink",
    explanation: "A beverage is any type of drink.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-19",
    type: "multiple-choice",
    question: "Antonym: 'Raw' is the opposite of:",
    options: ["Cooked", "Fresh", "Cold", "Hot"],
    correctAnswer: "Cooked",
    explanation: "Raw means uncooked, so the opposite is cooked.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-20",
    type: "multiple-choice",
    question: "Collocation: A balanced ______",
    options: ["diet", "food", "eating", "cooking"],
    correctAnswer: "diet",
    explanation: "We say 'a balanced diet' to mean healthy eating habits.",
    difficulty: 2,
    tags: ["listening", "cuisine", "collocations", "b1"]
  },
  // Part 3: Cooking Methods
  {
    id: "b1-cuisine-21",
    type: "multiple-choice",
    question: "To roast a chicken means to:",
    options: ["Cook in an oven", "Cook in water", "Cook in a pan", "Eat raw"],
    correctAnswer: "Cook in an oven",
    explanation: "Roasting involves cooking food in an oven with dry heat.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-22",
    type: "multiple-choice",
    question: "To steam vegetables means to:",
    options: ["Cook with vapor", "Cook in oil", "Cook on fire", "Freeze them"],
    correctAnswer: "Cook with vapor",
    explanation: "Steaming uses the vapor from boiling water to cook food.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-23",
    type: "multiple-choice",
    question: "To fry an egg means to:",
    options: ["Cook in hot oil", "Cook in ice", "Boil in water", "Bake in oven"],
    correctAnswer: "Cook in hot oil",
    explanation: "Frying involves cooking in hot oil or fat.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-24",
    type: "multiple-choice",
    question: "To grill a steak means to:",
    options: ["Cook over an open fire", "Boil in a pot", "Steam it", "Freeze it"],
    correctAnswer: "Cook over an open fire",
    explanation: "Grilling involves cooking food over direct heat from a fire or grill.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-25",
    type: "multiple-choice",
    question: "To chop onions means to:",
    options: ["Cut into small pieces", "Mash them", "Blend them", "Peel them"],
    correctAnswer: "Cut into small pieces",
    explanation: "Chopping means cutting food into smaller pieces.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  // Additional exercises (26-50)
  {
    id: "b1-cuisine-26",
    type: "fill-blank",
    question: "A ______ is the list of dishes available at a restaurant.",
    options: ["menu", "recipe", "bill", "order"],
    correctAnswer: "menu",
    explanation: "A menu lists the dishes available at a restaurant.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-27",
    type: "multiple-choice",
    question: "An 'entrée' in American English refers to:",
    options: ["The main course", "The appetizer", "The dessert", "The drink"],
    correctAnswer: "The main course",
    explanation: "In American English, entrée refers to the main dish.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-28",
    type: "multiple-choice",
    question: "A 'sommelier' is an expert in:",
    options: ["Wine", "Cooking", "Baking", "Coffee"],
    correctAnswer: "Wine",
    explanation: "A sommelier is a trained wine professional.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-29",
    type: "multiple-choice",
    question: "To 'simmer' means to cook at:",
    options: ["Just below boiling point", "Very high heat", "Freezing temperature", "Room temperature"],
    correctAnswer: "Just below boiling point",
    explanation: "Simmering is cooking liquid just below boiling point.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-30",
    type: "fill-blank",
    question: "A person who prepares food professionally is called a ______.",
    options: ["chef", "waiter", "host", "guest"],
    correctAnswer: "chef",
    explanation: "A chef is a professional cook.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-31",
    type: "multiple-choice",
    question: "'Organic' food is:",
    options: ["Grown without synthetic chemicals", "Processed food", "Frozen food", "Fast food"],
    correctAnswer: "Grown without synthetic chemicals",
    explanation: "Organic food is produced without artificial chemicals.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-32",
    type: "multiple-choice",
    question: "A 'vegetarian' does not eat:",
    options: ["Meat", "Vegetables", "Dairy", "Grains"],
    correctAnswer: "Meat",
    explanation: "Vegetarians avoid meat but may eat dairy and eggs.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-33",
    type: "multiple-choice",
    question: "To 'garnish' a dish means to:",
    options: ["Decorate it before serving", "Cook it slowly", "Freeze it", "Blend it"],
    correctAnswer: "Decorate it before serving",
    explanation: "Garnishing adds decorative touches to a dish.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-34",
    type: "fill-blank",
    question: "The sweet course at the end of a meal is called ______.",
    options: ["dessert", "appetizer", "entrée", "salad"],
    correctAnswer: "dessert",
    explanation: "Dessert is the sweet course served at the end of a meal.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-35",
    type: "multiple-choice",
    question: "'Gluten-free' food is for people who:",
    options: ["Cannot digest gluten", "Are vegetarian", "Are vegan", "Like spicy food"],
    correctAnswer: "Cannot digest gluten",
    explanation: "Gluten-free food is for people with celiac disease or gluten sensitivity.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-36",
    type: "multiple-choice",
    question: "To 'season' food means to:",
    options: ["Add salt, pepper, or spices", "Freeze it", "Defrost it", "Wash it"],
    correctAnswer: "Add salt, pepper, or spices",
    explanation: "Seasoning means adding flavor with salt, pepper, or spices.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-37",
    type: "multiple-choice",
    question: "A 'cuisine' is characterized by:",
    options: ["Regional ingredients and cooking methods", "Kitchen equipment", "Restaurant size", "Chef's name"],
    correctAnswer: "Regional ingredients and cooking methods",
    explanation: "Cuisine is defined by the ingredients and methods of a region.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-38",
    type: "fill-blank",
    question: "Food that is not cooked is called ______.",
    options: ["raw", "fried", "baked", "boiled"],
    correctAnswer: "raw",
    explanation: "Raw food has not been cooked.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-39",
    type: "multiple-choice",
    question: "A 'portion' refers to:",
    options: ["The amount of food served", "The type of food", "The cooking method", "The restaurant"],
    correctAnswer: "The amount of food served",
    explanation: "A portion is the amount of food served to one person.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-40",
    type: "multiple-choice",
    question: "To 'dice' vegetables means to:",
    options: ["Cut into small cubes", "Slice thinly", "Mash them", "Blend them"],
    correctAnswer: "Cut into small cubes",
    explanation: "Dicing means cutting food into small cube-shaped pieces.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-41",
    type: "multiple-choice",
    question: "'Al dente' describes pasta that is:",
    options: ["Firm to the bite", "Very soft", "Overcooked", "Raw"],
    correctAnswer: "Firm to the bite",
    explanation: "Al dente pasta is cooked to be firm when bitten.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-42",
    type: "fill-blank",
    question: "The ______ is where food is prepared in a restaurant.",
    options: ["kitchen", "dining room", "patio", "lobby"],
    correctAnswer: "kitchen",
    explanation: "The kitchen is where food is prepared.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-43",
    type: "multiple-choice",
    question: "A 'foodie' is someone who:",
    options: ["Loves exploring different foods", "Works in a restaurant", "Grows vegetables", "Sells groceries"],
    correctAnswer: "Loves exploring different foods",
    explanation: "A foodie is an enthusiast of food and culinary experiences.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-44",
    type: "multiple-choice",
    question: "To 'whisk' means to:",
    options: ["Beat with a quick, light movement", "Chop finely", "Boil slowly", "Freeze quickly"],
    correctAnswer: "Beat with a quick, light movement",
    explanation: "Whisking involves beating ingredients quickly.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-45",
    type: "multiple-choice",
    question: "'Farm-to-table' means food that is:",
    options: ["Sourced directly from local farms", "Imported from far away", "Processed in factories", "Frozen for long periods"],
    correctAnswer: "Sourced directly from local farms",
    explanation: "Farm-to-table emphasizes locally sourced, fresh ingredients.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-46",
    type: "fill-blank",
    question: "A ______ allergy can be life-threatening and requires avoiding certain foods.",
    options: ["food", "skin", "dust", "plant"],
    correctAnswer: "food",
    explanation: "Food allergies can cause severe reactions.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-47",
    type: "multiple-choice",
    question: "The 'aroma' of food refers to its:",
    options: ["Smell", "Taste", "Color", "Texture"],
    correctAnswer: "Smell",
    explanation: "Aroma is the pleasant smell of food.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-48",
    type: "multiple-choice",
    question: "To 'sauté' means to:",
    options: ["Fry quickly in a little oil", "Boil for a long time", "Freeze overnight", "Eat raw"],
    correctAnswer: "Fry quickly in a little oil",
    explanation: "Sautéing is quick frying in a small amount of oil.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-49",
    type: "multiple-choice",
    question: "A 'staple food' is:",
    options: ["A food eaten regularly as a main part of the diet", "A rare delicacy", "An appetizer", "A dessert"],
    correctAnswer: "A food eaten regularly as a main part of the diet",
    explanation: "Staple foods form the basis of a traditional diet.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
  {
    id: "b1-cuisine-50",
    type: "multiple-choice",
    question: "'Fusion cuisine' combines:",
    options: ["Elements from different culinary traditions", "Only traditional recipes", "Only raw ingredients", "Only desserts"],
    correctAnswer: "Elements from different culinary traditions",
    explanation: "Fusion cuisine blends elements from different food cultures.",
    difficulty: 2,
    tags: ["listening", "cuisine", "b1"]
  },
];

// Theme 10: Architecture & Buildings (50 Exercises)
const architectureBuildingsExercises: Exercise[] = [
  // Part 1: Structural Terms
  {
    id: "b1-arch-1",
    type: "fill-blank",
    question: "A very tall building of many stories: (______)",
    options: ["skyscraper", "bungalow", "cottage", "warehouse"],
    correctAnswer: "skyscraper",
    explanation: "A skyscraper is a very tall building with many floors.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-2",
    type: "fill-blank",
    question: "A statue, building, or other structure erected to commemorate a famous person or event: (______)",
    options: ["monument", "apartment", "office", "factory"],
    correctAnswer: "monument",
    explanation: "A monument commemorates a person or event.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-3",
    type: "fill-blank",
    question: "The principal Christian church of a diocese: (______)",
    options: ["cathedral", "chapel", "mosque", "temple"],
    correctAnswer: "cathedral",
    explanation: "A cathedral is the main church of a diocese.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-4",
    type: "fill-blank",
    question: "The process of improving a broken, damaged, or outdated structure: (______)",
    options: ["renovation", "demolition", "construction", "inspection"],
    correctAnswer: "renovation",
    explanation: "Renovation involves improving or restoring a building.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-5",
    type: "fill-blank",
    question: "Unscramble: S-K-Y-S-C-R-A-P-E-R (______)",
    options: ["skyscraper", "skyscrapper", "skiscraper", "skyscaper"],
    correctAnswer: "skyscraper",
    explanation: "SKYSCRAPER - a very tall building.",
    difficulty: 2,
    tags: ["listening", "architecture", "spelling", "b1"]
  },
  {
    id: "b1-arch-6",
    type: "fill-blank",
    question: "Unscramble: M-O-N-U-M-E-N-T (______)",
    options: ["monument", "monumant", "monement", "monumentt"],
    correctAnswer: "monument",
    explanation: "MONUMENT - a structure commemorating a person or event.",
    difficulty: 2,
    tags: ["listening", "architecture", "spelling", "b1"]
  },
  {
    id: "b1-arch-7",
    type: "multiple-choice",
    question: "The face of a building, especially the principal front that looks onto a street:",
    options: ["Facade", "Roof", "Foundation", "Basement"],
    correctAnswer: "Facade",
    explanation: "The facade is the front face of a building.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-8",
    type: "multiple-choice",
    question: "Designed for people to live in:",
    options: ["Residential", "Commercial", "Industrial", "Agricultural"],
    correctAnswer: "Residential",
    explanation: "Residential buildings are designed for living.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-9",
    type: "multiple-choice",
    question: "The inside part of a building:",
    options: ["Interior", "Exterior", "Perimeter", "Foundation"],
    correctAnswer: "Interior",
    explanation: "The interior is the inside of a building.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-10",
    type: "fill-blank",
    question: "An 'architect' designs ______ while an 'engineer' ensures they stand up.",
    options: ["buildings", "gardens", "furniture", "clothes"],
    correctAnswer: "buildings",
    explanation: "Architects design buildings; engineers ensure structural integrity.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  // Part 2: Building Materials & Styles
  {
    id: "b1-arch-11",
    type: "multiple-choice",
    question: "Concrete is:",
    options: ["A hard building material", "A soft fabric", "A type of wood", "A metal"],
    correctAnswer: "A hard building material",
    explanation: "Concrete is a hard construction material made from cement.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-12",
    type: "multiple-choice",
    question: "Steel is:",
    options: ["A strong metal", "A type of wood", "A soft fabric", "A type of glass"],
    correctAnswer: "A strong metal",
    explanation: "Steel is a strong metal alloy used in construction.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-13",
    type: "multiple-choice",
    question: "Brick is:",
    options: ["A block of baked clay", "A piece of glass", "A metal bar", "A wooden plank"],
    correctAnswer: "A block of baked clay",
    explanation: "Bricks are rectangular blocks of baked clay.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-14",
    type: "multiple-choice",
    question: "Sustainable architecture uses:",
    options: ["Eco-friendly materials", "Plastic only", "Only wood", "Only steel"],
    correctAnswer: "Eco-friendly materials",
    explanation: "Sustainable architecture prioritizes environmentally friendly materials.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-15",
    type: "multiple-choice",
    question: "Gothic style is known for:",
    options: ["Pointed arches", "Round domes", "Flat roofs", "Glass walls"],
    correctAnswer: "Pointed arches",
    explanation: "Gothic architecture features pointed arches and flying buttresses.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-16",
    type: "multiple-choice",
    question: "True or False: A 'blueprint' is a technical drawing of a building.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "A blueprint is a detailed technical drawing of a building.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-17",
    type: "multiple-choice",
    question: "True or False: 'Demolition' is the act of building something new.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "Demolition is the act of destroying or tearing down a building.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-18",
    type: "multiple-choice",
    question: "Synonym: 'Construct' means:",
    options: ["Build", "Destroy", "Paint", "Clean"],
    correctAnswer: "Build",
    explanation: "Construct means to build or make something.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-19",
    type: "multiple-choice",
    question: "Antonym: 'Urban' is the opposite of:",
    options: ["Rural", "Modern", "Old", "Large"],
    correctAnswer: "Rural",
    explanation: "Urban (city) is the opposite of rural (countryside).",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-20",
    type: "multiple-choice",
    question: "Collocation: To lay the ______",
    options: ["foundation", "roof", "walls", "windows"],
    correctAnswer: "foundation",
    explanation: "We say 'lay the foundation' for a building.",
    difficulty: 2,
    tags: ["listening", "architecture", "collocations", "b1"]
  },
  // Part 3: Describing Spaces
  {
    id: "b1-arch-21",
    type: "multiple-choice",
    question: "'The room is very spacious.' Spacious means:",
    options: ["Big", "Small", "Dark", "Cold"],
    correctAnswer: "Big",
    explanation: "Spacious means having a lot of space or room.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-22",
    type: "multiple-choice",
    question: "'The ceiling is vaulted.' Vaulted means:",
    options: ["Arched", "Flat", "Low", "Square"],
    correctAnswer: "Arched",
    explanation: "A vaulted ceiling has an arched or domed shape.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-23",
    type: "multiple-choice",
    question: "'The building is dilapidated.' Dilapidated means:",
    options: ["Ruined/Old", "Brand new", "Modern", "Colorful"],
    correctAnswer: "Ruined/Old",
    explanation: "Dilapidated means in a state of disrepair or ruin.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-24",
    type: "multiple-choice",
    question: "'It has a panoramic view.' Panoramic means:",
    options: ["Wide view", "No view", "Blocked view", "Small view"],
    correctAnswer: "Wide view",
    explanation: "Panoramic means an unobstructed wide view.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-25",
    type: "multiple-choice",
    question: "'The structure is sound.' Sound means:",
    options: ["Safe/Strong", "Noisy", "Weak", "Old"],
    correctAnswer: "Safe/Strong",
    explanation: "A sound structure is safe and structurally stable.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  // Additional exercises (26-50) - Famous landmarks
  {
    id: "b1-arch-26",
    type: "multiple-choice",
    question: "The Eiffel Tower is located in:",
    options: ["Paris, France", "London, UK", "Rome, Italy", "Berlin, Germany"],
    correctAnswer: "Paris, France",
    explanation: "The Eiffel Tower is an iconic landmark in Paris.",
    difficulty: 2,
    tags: ["listening", "architecture", "landmarks", "b1"]
  },
  {
    id: "b1-arch-27",
    type: "multiple-choice",
    question: "The Taj Mahal is a:",
    options: ["Mausoleum", "Palace", "Temple", "Fort"],
    correctAnswer: "Mausoleum",
    explanation: "The Taj Mahal is a mausoleum in India.",
    difficulty: 2,
    tags: ["listening", "architecture", "landmarks", "b1"]
  },
  {
    id: "b1-arch-28",
    type: "multiple-choice",
    question: "The Colosseum in Rome was used for:",
    options: ["Gladiator fights", "Religious ceremonies", "Royal weddings", "Trading goods"],
    correctAnswer: "Gladiator fights",
    explanation: "The Colosseum hosted gladiator battles and public spectacles.",
    difficulty: 2,
    tags: ["listening", "architecture", "landmarks", "b1"]
  },
  {
    id: "b1-arch-29",
    type: "fill-blank",
    question: "The ______ of Liberty is a famous monument in New York.",
    options: ["Statue", "Tower", "Bridge", "Museum"],
    correctAnswer: "Statue",
    explanation: "The Statue of Liberty is an iconic New York landmark.",
    difficulty: 2,
    tags: ["listening", "architecture", "landmarks", "b1"]
  },
  {
    id: "b1-arch-30",
    type: "multiple-choice",
    question: "Big Ben is the name of:",
    options: ["A clock tower bell in London", "A bridge in Paris", "A palace in Rome", "A museum in Berlin"],
    correctAnswer: "A clock tower bell in London",
    explanation: "Big Ben is the nickname for the Great Bell of the clock tower in London.",
    difficulty: 2,
    tags: ["listening", "architecture", "landmarks", "b1"]
  },
  {
    id: "b1-arch-31",
    type: "fill-blank",
    question: "A ______ is a structure built over a river to allow crossing.",
    options: ["bridge", "tunnel", "tower", "pier"],
    correctAnswer: "bridge",
    explanation: "A bridge is built to cross over water or other obstacles.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-32",
    type: "multiple-choice",
    question: "An 'atrium' is:",
    options: ["An open central area in a building", "A basement", "A rooftop", "A garage"],
    correctAnswer: "An open central area in a building",
    explanation: "An atrium is a large open space, often with a glass roof.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-33",
    type: "multiple-choice",
    question: "'Art Deco' architecture is known for:",
    options: ["Geometric shapes and bold colors", "Gothic arches", "Simple wooden structures", "Underground design"],
    correctAnswer: "Geometric shapes and bold colors",
    explanation: "Art Deco features geometric patterns and vibrant colors.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-34",
    type: "fill-blank",
    question: "The lowest part of a building that supports it is called the ______.",
    options: ["foundation", "roof", "wall", "window"],
    correctAnswer: "foundation",
    explanation: "The foundation is the base that supports the building.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-35",
    type: "multiple-choice",
    question: "A 'penthouse' is located:",
    options: ["On the top floor", "In the basement", "On the ground floor", "Underground"],
    correctAnswer: "On the top floor",
    explanation: "A penthouse is a luxury apartment on the top floor.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-36",
    type: "multiple-choice",
    question: "'Prefabricated' buildings are:",
    options: ["Made from parts manufactured off-site", "Built from scratch on-site", "Made only of wood", "Always temporary"],
    correctAnswer: "Made from parts manufactured off-site",
    explanation: "Prefabricated buildings use pre-made components.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-37",
    type: "fill-blank",
    question: "A ______ is a tall tower attached to a mosque.",
    options: ["minaret", "steeple", "dome", "spire"],
    correctAnswer: "minaret",
    explanation: "A minaret is a tall tower of a mosque.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-38",
    type: "multiple-choice",
    question: "A 'balcony' is:",
    options: ["A platform projecting from a building", "A underground room", "A parking area", "A kitchen extension"],
    correctAnswer: "A platform projecting from a building",
    explanation: "A balcony is an outdoor platform attached to a building.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-39",
    type: "multiple-choice",
    question: "'Minimalist' architecture emphasizes:",
    options: ["Simplicity and clean lines", "Complex decorations", "Many colors", "Heavy ornamentation"],
    correctAnswer: "Simplicity and clean lines",
    explanation: "Minimalist design focuses on simplicity and functionality.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-40",
    type: "fill-blank",
    question: "An ______ is a professional who designs buildings.",
    options: ["architect", "engineer", "builder", "carpenter"],
    correctAnswer: "architect",
    explanation: "An architect designs buildings and structures.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-41",
    type: "multiple-choice",
    question: "A 'skylight' is:",
    options: ["A window in the roof", "A tall building", "A basement", "A garage door"],
    correctAnswer: "A window in the roof",
    explanation: "A skylight is a window installed in the roof.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-42",
    type: "multiple-choice",
    question: "'Load-bearing walls' are:",
    options: ["Walls that support the structure above", "Decorative walls", "Temporary walls", "Glass walls"],
    correctAnswer: "Walls that support the structure above",
    explanation: "Load-bearing walls carry the weight of the structure.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-43",
    type: "fill-blank",
    question: "The Sydney Opera House is famous for its sail-shaped ______.",
    options: ["roof", "windows", "doors", "walls"],
    correctAnswer: "roof",
    explanation: "The Sydney Opera House has distinctive sail-shaped roof shells.",
    difficulty: 2,
    tags: ["listening", "architecture", "landmarks", "b1"]
  },
  {
    id: "b1-arch-44",
    type: "multiple-choice",
    question: "'Heritage buildings' are:",
    options: ["Historic structures worth preserving", "New constructions", "Temporary buildings", "Underground structures"],
    correctAnswer: "Historic structures worth preserving",
    explanation: "Heritage buildings have historical or cultural significance.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-45",
    type: "multiple-choice",
    question: "A 'terrace' is:",
    options: ["An outdoor paved area", "An indoor bathroom", "A kitchen counter", "A bedroom closet"],
    correctAnswer: "An outdoor paved area",
    explanation: "A terrace is an outdoor area, often on a rooftop or garden.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-46",
    type: "fill-blank",
    question: "The Great Wall of ______ is one of the world's most famous structures.",
    options: ["China", "Japan", "Korea", "India"],
    correctAnswer: "China",
    explanation: "The Great Wall of China is an ancient fortification.",
    difficulty: 2,
    tags: ["listening", "architecture", "landmarks", "b1"]
  },
  {
    id: "b1-arch-47",
    type: "multiple-choice",
    question: "'Eco-friendly' buildings:",
    options: ["Minimize environmental impact", "Use only concrete", "Have no windows", "Are always small"],
    correctAnswer: "Minimize environmental impact",
    explanation: "Eco-friendly buildings are designed to be environmentally sustainable.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-48",
    type: "multiple-choice",
    question: "A 'corridor' is:",
    options: ["A long passage in a building", "A type of window", "A rooftop garden", "A basement storage"],
    correctAnswer: "A long passage in a building",
    explanation: "A corridor is a hallway or passage connecting rooms.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-49",
    type: "fill-blank",
    question: "The ______ is the part of a building below ground level.",
    options: ["basement", "attic", "balcony", "terrace"],
    correctAnswer: "basement",
    explanation: "The basement is the lowest floor, below ground level.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
  {
    id: "b1-arch-50",
    type: "multiple-choice",
    question: "'Zoning laws' determine:",
    options: ["How land in an area can be used", "Building colors", "Window sizes", "Furniture placement"],
    correctAnswer: "How land in an area can be used",
    explanation: "Zoning laws regulate land use in different areas.",
    difficulty: 2,
    tags: ["listening", "architecture", "b1"]
  },
];

// Theme 11: Literature & Writing (50 Exercises)
const literatureWritingExercises: Exercise[] = [
  // Part 1: Literary Elements
  {
    id: "b1-lit-1",
    type: "fill-blank",
    question: "A fictitious prose narrative of book length: (______)",
    options: ["novel", "poem", "essay", "article"],
    correctAnswer: "novel",
    explanation: "A novel is a long fictional story in prose form.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-2",
    type: "fill-blank",
    question: "Literary work in which special intensity is given to the expression of feelings and ideas: (______)",
    options: ["poetry", "prose", "drama", "essay"],
    correctAnswer: "poetry",
    explanation: "Poetry uses rhythm and imagery to express emotions.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-3",
    type: "fill-blank",
    question: "The main events of a play, novel, movie, or similar work: (______)",
    options: ["plot", "theme", "setting", "mood"],
    correctAnswer: "plot",
    explanation: "The plot is the sequence of events in a story.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-4",
    type: "fill-blank",
    question: "A person in a novel, play, or movie: (______)",
    options: ["character", "author", "reader", "editor"],
    correctAnswer: "character",
    explanation: "A character is a person or figure in a story.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-5",
    type: "fill-blank",
    question: "Unscramble: C-H-A-R-A-C-T-E-R (______)",
    options: ["character", "charater", "charactor", "caracter"],
    correctAnswer: "character",
    explanation: "CHARACTER - a person in a story.",
    difficulty: 2,
    tags: ["listening", "literature", "spelling", "b1"]
  },
  {
    id: "b1-lit-6",
    type: "fill-blank",
    question: "Unscramble: P-O-E-T-R-Y (______)",
    options: ["poetry", "poetrey", "poerty", "poetri"],
    correctAnswer: "poetry",
    explanation: "POETRY - literary work with rhythm and imagery.",
    difficulty: 2,
    tags: ["listening", "literature", "spelling", "b1"]
  },
  {
    id: "b1-lit-7",
    type: "multiple-choice",
    question: "A category of artistic composition, as in music or literature:",
    options: ["Genre", "Title", "Chapter", "Paragraph"],
    correctAnswer: "Genre",
    explanation: "A genre is a category or type of artistic work.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-8",
    type: "multiple-choice",
    question: "An account of someone's life written by someone else:",
    options: ["Biography", "Autobiography", "Memoir", "Diary"],
    correctAnswer: "Biography",
    explanation: "A biography is written about someone by another person.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-9",
    type: "multiple-choice",
    question: "A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable:",
    options: ["Metaphor", "Fact", "Definition", "Quote"],
    correctAnswer: "Metaphor",
    explanation: "A metaphor makes a comparison without using 'like' or 'as'.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-10",
    type: "multiple-choice",
    question: "'Non-fiction' is based on:",
    options: ["Real facts", "Imagination", "Fantasy", "Dreams"],
    correctAnswer: "Real facts",
    explanation: "Non-fiction is based on real events and facts.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  // Part 2: Genres & Types
  {
    id: "b1-lit-11",
    type: "multiple-choice",
    question: "Mystery novels involve:",
    options: ["Solving a crime", "Aliens", "Love stories", "Historical events"],
    correctAnswer: "Solving a crime",
    explanation: "Mystery novels focus on solving crimes or puzzles.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-12",
    type: "multiple-choice",
    question: "Sci-Fi involves:",
    options: ["Future technology", "Historical events", "Cooking", "Sports"],
    correctAnswer: "Future technology",
    explanation: "Science fiction explores futuristic technology and concepts.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-13",
    type: "multiple-choice",
    question: "Romance focuses on:",
    options: ["Love relationships", "War", "Technology", "Crime"],
    correctAnswer: "Love relationships",
    explanation: "Romance novels center on love and relationships.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-14",
    type: "multiple-choice",
    question: "Thriller is designed to:",
    options: ["Excite and scare", "Make you laugh", "Teach history", "Explain science"],
    correctAnswer: "Excite and scare",
    explanation: "Thrillers are meant to create suspense and excitement.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-15",
    type: "multiple-choice",
    question: "Fantasy involves:",
    options: ["Magic and dragons", "Real life", "Scientific facts", "News events"],
    correctAnswer: "Magic and dragons",
    explanation: "Fantasy includes magical elements and mythical creatures.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-16",
    type: "multiple-choice",
    question: "True or False: An 'author' is the person who reads the book.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "An author writes the book; a reader reads it.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-17",
    type: "multiple-choice",
    question: "True or False: A 'draft' is the final version of a book.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "A draft is an early version, not the final one.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-18",
    type: "multiple-choice",
    question: "Synonym: 'Narrator' means:",
    options: ["Storyteller", "Listener", "Reader", "Publisher"],
    correctAnswer: "Storyteller",
    explanation: "The narrator tells the story.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-19",
    type: "multiple-choice",
    question: "Antonym: 'Protagonist' (Hero) is the opposite of:",
    options: ["Antagonist/Villain", "Author", "Reader", "Editor"],
    correctAnswer: "Antagonist/Villain",
    explanation: "The antagonist opposes the protagonist (hero).",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-20",
    type: "multiple-choice",
    question: "Idiom: 'To read between the lines' means:",
    options: ["Find hidden meaning", "Read slowly", "Skip pages", "Read loudly"],
    correctAnswer: "Find hidden meaning",
    explanation: "Reading between the lines means understanding implied meaning.",
    difficulty: 2,
    tags: ["listening", "literature", "idioms", "b1"]
  },
  // Part 3: Publishing Terms
  {
    id: "b1-lit-21",
    type: "multiple-choice",
    question: "Best-seller means:",
    options: ["A very popular book", "A bad book", "A free book", "A short book"],
    correctAnswer: "A very popular book",
    explanation: "A best-seller is a book that sells many copies.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-22",
    type: "multiple-choice",
    question: "An editor:",
    options: ["Corrects the writing", "Prints the book", "Writes the book", "Sells the book"],
    correctAnswer: "Corrects the writing",
    explanation: "An editor reviews and corrects written content.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-23",
    type: "multiple-choice",
    question: "A publisher:",
    options: ["Produces and sells the book", "Writes the book", "Reads the book", "Translates the book"],
    correctAnswer: "Produces and sells the book",
    explanation: "A publisher produces and distributes books.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-24",
    type: "multiple-choice",
    question: "Manuscript is:",
    options: ["The author's original text", "The cover", "The index", "The glossary"],
    correctAnswer: "The author's original text",
    explanation: "A manuscript is the original handwritten or typed text.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-25",
    type: "multiple-choice",
    question: "Copyright is:",
    options: ["Legal right to the work", "Copying the work", "Selling the work", "Reading the work"],
    correctAnswer: "Legal right to the work",
    explanation: "Copyright protects the creator's legal rights to their work.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  // Additional exercises (26-50)
  {
    id: "b1-lit-26",
    type: "fill-blank",
    question: "The main idea or message of a story is called the ______.",
    options: ["theme", "plot", "character", "setting"],
    correctAnswer: "theme",
    explanation: "The theme is the central message of a literary work.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-27",
    type: "multiple-choice",
    question: "The 'setting' of a story refers to:",
    options: ["Time and place", "Main character", "Ending", "Author"],
    correctAnswer: "Time and place",
    explanation: "Setting is where and when the story takes place.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-28",
    type: "multiple-choice",
    question: "A 'sequel' is:",
    options: ["A continuation of a story", "A prequel", "An unrelated book", "A short story"],
    correctAnswer: "A continuation of a story",
    explanation: "A sequel continues a story after the original.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-29",
    type: "fill-blank",
    question: "A ______ is a comparison using 'like' or 'as'.",
    options: ["simile", "metaphor", "hyperbole", "irony"],
    correctAnswer: "simile",
    explanation: "A simile compares two things using 'like' or 'as'.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-30",
    type: "multiple-choice",
    question: "'Foreshadowing' is:",
    options: ["Hinting at future events", "Describing the past", "Analyzing characters", "Writing dialogue"],
    correctAnswer: "Hinting at future events",
    explanation: "Foreshadowing gives clues about what will happen later.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-31",
    type: "multiple-choice",
    question: "A 'memoir' is:",
    options: ["A personal account of one's life", "A fictional story", "A news article", "A recipe book"],
    correctAnswer: "A personal account of one's life",
    explanation: "A memoir is a personal account of the author's experiences.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-32",
    type: "fill-blank",
    question: "The ______ is the most exciting part of a story.",
    options: ["climax", "introduction", "conclusion", "preface"],
    correctAnswer: "climax",
    explanation: "The climax is the peak of tension in the story.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-33",
    type: "multiple-choice",
    question: "'First person' narration uses:",
    options: ["'I' and 'we'", "'He' and 'she'", "'You'", "No pronouns"],
    correctAnswer: "'I' and 'we'",
    explanation: "First person narration uses 'I' from the narrator's perspective.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-34",
    type: "multiple-choice",
    question: "An 'anthology' is:",
    options: ["A collection of works by various authors", "A single long novel", "A biography", "A dictionary"],
    correctAnswer: "A collection of works by various authors",
    explanation: "An anthology compiles works from multiple authors.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-35",
    type: "fill-blank",
    question: "The ______ is the ending part of a story that resolves the plot.",
    options: ["resolution", "climax", "conflict", "exposition"],
    correctAnswer: "resolution",
    explanation: "The resolution ties up loose ends in the story.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-36",
    type: "multiple-choice",
    question: "'Irony' is when:",
    options: ["The opposite of what's expected happens", "Everything goes as planned", "The hero wins", "The story ends happily"],
    correctAnswer: "The opposite of what's expected happens",
    explanation: "Irony involves a contrast between expectation and reality.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-37",
    type: "multiple-choice",
    question: "A 'prologue' comes:",
    options: ["Before the main story", "At the end", "In the middle", "After the epilogue"],
    correctAnswer: "Before the main story",
    explanation: "A prologue introduces the story before the first chapter.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-38",
    type: "fill-blank",
    question: "An ______ comes after the main story ends.",
    options: ["epilogue", "prologue", "chapter", "index"],
    correctAnswer: "epilogue",
    explanation: "An epilogue concludes or follows up on the main story.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-39",
    type: "multiple-choice",
    question: "'Suspense' makes readers feel:",
    options: ["Eager to know what happens next", "Bored", "Sleepy", "Confused"],
    correctAnswer: "Eager to know what happens next",
    explanation: "Suspense creates anticipation and tension.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-40",
    type: "multiple-choice",
    question: "A 'prequel' takes place:",
    options: ["Before the original story", "After the original story", "During the original story", "In a different world"],
    correctAnswer: "Before the original story",
    explanation: "A prequel tells events that happened before the original.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-41",
    type: "fill-blank",
    question: "The conversation between characters is called ______.",
    options: ["dialogue", "monologue", "narrative", "description"],
    correctAnswer: "dialogue",
    explanation: "Dialogue is the written conversation between characters.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-42",
    type: "multiple-choice",
    question: "A 'monologue' is:",
    options: ["A long speech by one person", "A conversation between two people", "A short poem", "A chapter heading"],
    correctAnswer: "A long speech by one person",
    explanation: "A monologue is an extended speech by one character.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-43",
    type: "multiple-choice",
    question: "'Imagery' in writing appeals to:",
    options: ["The five senses", "Logic only", "Numbers", "Dates"],
    correctAnswer: "The five senses",
    explanation: "Imagery uses descriptive language to create sensory experiences.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-44",
    type: "fill-blank",
    question: "A ______ is a short story teaching a moral lesson, often with animals.",
    options: ["fable", "novel", "essay", "biography"],
    correctAnswer: "fable",
    explanation: "A fable is a short tale with a moral, often featuring animals.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-45",
    type: "multiple-choice",
    question: "'Hyperbole' is:",
    options: ["Extreme exaggeration", "Understatement", "Literal description", "Factual writing"],
    correctAnswer: "Extreme exaggeration",
    explanation: "Hyperbole uses exaggeration for emphasis or effect.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-46",
    type: "multiple-choice",
    question: "A 'trilogy' consists of:",
    options: ["Three related works", "Two books", "Five books", "One book"],
    correctAnswer: "Three related works",
    explanation: "A trilogy is a series of three connected works.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-47",
    type: "fill-blank",
    question: "The ______ introduces the characters and setting at the start.",
    options: ["exposition", "climax", "resolution", "conflict"],
    correctAnswer: "exposition",
    explanation: "The exposition provides background information.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-48",
    type: "multiple-choice",
    question: "'Conflict' in a story is:",
    options: ["A struggle or problem", "The ending", "The setting", "The author"],
    correctAnswer: "A struggle or problem",
    explanation: "Conflict is the central struggle that drives the plot.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-49",
    type: "multiple-choice",
    question: "A 'cliffhanger' is:",
    options: ["An unresolved ending that creates suspense", "A happy ending", "A sad ending", "A predictable ending"],
    correctAnswer: "An unresolved ending that creates suspense",
    explanation: "A cliffhanger leaves the audience in suspense.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
  {
    id: "b1-lit-50",
    type: "multiple-choice",
    question: "'Symbolism' uses objects to represent:",
    options: ["Abstract ideas", "Literal meanings", "Numbers", "Dates"],
    correctAnswer: "Abstract ideas",
    explanation: "Symbolism uses concrete objects to represent abstract concepts.",
    difficulty: 2,
    tags: ["listening", "literature", "b1"]
  },
];

// Theme 12: Music & Performance (50 Exercises)
const musicPerformanceExercises: Exercise[] = [
  // Part 1: Musical Vocabulary
  {
    id: "b1-music-1",
    type: "fill-blank",
    question: "A sequence of single notes that is musically satisfying: (______)",
    options: ["melody", "rhythm", "harmony", "beat"],
    correctAnswer: "melody",
    explanation: "A melody is a sequence of notes forming a tune.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-2",
    type: "fill-blank",
    question: "A strong, regular, repeated pattern of movement or sound: (______)",
    options: ["rhythm", "melody", "harmony", "pitch"],
    correctAnswer: "rhythm",
    explanation: "Rhythm is the pattern of beats in music.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-3",
    type: "fill-blank",
    question: "A person who writes music: (______)",
    options: ["composer", "conductor", "performer", "producer"],
    correctAnswer: "composer",
    explanation: "A composer writes musical compositions.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-4",
    type: "fill-blank",
    question: "A large group of musicians playing together: (______)",
    options: ["orchestra", "choir", "band", "duo"],
    correctAnswer: "orchestra",
    explanation: "An orchestra is a large ensemble of musicians.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-5",
    type: "fill-blank",
    question: "Unscramble: R-H-Y-T-H-M (______)",
    options: ["rhythm", "rythm", "rhythem", "rhytm"],
    correctAnswer: "rhythm",
    explanation: "RHYTHM - the pattern of beats in music.",
    difficulty: 2,
    tags: ["listening", "music", "spelling", "b1"]
  },
  {
    id: "b1-music-6",
    type: "fill-blank",
    question: "Unscramble: O-R-C-H-E-S-T-R-A (______)",
    options: ["orchestra", "orchastra", "orkestra", "orchestar"],
    correctAnswer: "orchestra",
    explanation: "ORCHESTRA - a large group of musicians.",
    difficulty: 2,
    tags: ["listening", "music", "spelling", "b1"]
  },
  {
    id: "b1-music-7",
    type: "multiple-choice",
    question: "The words of a song:",
    options: ["Lyrics", "Script", "Dialogue", "Prose"],
    correctAnswer: "Lyrics",
    explanation: "Lyrics are the words to a song.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-8",
    type: "multiple-choice",
    question: "A practice or trial performance of a play or other work:",
    options: ["Rehearsal", "Concert", "Show", "Premiere"],
    correctAnswer: "Rehearsal",
    explanation: "A rehearsal is a practice session before a performance.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-9",
    type: "multiple-choice",
    question: "The assembled spectators or listeners at a public event:",
    options: ["Audience", "Performers", "Musicians", "Crew"],
    correctAnswer: "Audience",
    explanation: "The audience watches or listens to a performance.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-10",
    type: "fill-blank",
    question: "A 'conductor' directs the ______.",
    options: ["orchestra", "bus", "traffic", "movie"],
    correctAnswer: "orchestra",
    explanation: "A conductor leads and directs an orchestra.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  // Part 2: Instruments & Genres
  {
    id: "b1-music-11",
    type: "multiple-choice",
    question: "Jazz is known for:",
    options: ["Improvisation", "Computers", "Classical structure", "Silence"],
    correctAnswer: "Improvisation",
    explanation: "Jazz features spontaneous musical creativity.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-12",
    type: "multiple-choice",
    question: "Classical music often uses:",
    options: ["Violins and piano", "Electric guitars", "Drum machines", "Synthesizers only"],
    correctAnswer: "Violins and piano",
    explanation: "Classical music features traditional orchestral instruments.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-13",
    type: "multiple-choice",
    question: "Percussion instruments are:",
    options: ["Hit or shaken", "Blown", "Strummed", "Bowed"],
    correctAnswer: "Hit or shaken",
    explanation: "Percussion instruments produce sound by being struck or shaken.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-14",
    type: "multiple-choice",
    question: "Vocals refers to:",
    options: ["Singing", "Drumming", "Playing guitar", "Dancing"],
    correctAnswer: "Singing",
    explanation: "Vocals are the singing parts of music.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-15",
    type: "multiple-choice",
    question: "Acoustic means:",
    options: ["Non-electric", "Digital", "Electronic", "Synthetic"],
    correctAnswer: "Non-electric",
    explanation: "Acoustic instruments don't use electronic amplification.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-16",
    type: "multiple-choice",
    question: "True or False: A 'gig' is a slang term for a live performance.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Gig is informal slang for a musical performance.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-17",
    type: "multiple-choice",
    question: "True or False: 'Tempo' refers to the speed of the music.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Tempo is the speed or pace of the music.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-18",
    type: "multiple-choice",
    question: "Synonym: 'Tune' means:",
    options: ["Melody", "Noise", "Silence", "Speech"],
    correctAnswer: "Melody",
    explanation: "A tune is another word for melody.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-19",
    type: "multiple-choice",
    question: "Antonym: 'Sharp' (High pitch) is the opposite of:",
    options: ["Flat", "Loud", "Quiet", "Fast"],
    correctAnswer: "Flat",
    explanation: "In music, sharp (raised pitch) is opposite to flat (lowered pitch).",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-20",
    type: "multiple-choice",
    question: "Collocation: You play ______",
    options: ["an instrument", "a song loudly", "a CD player", "music download"],
    correctAnswer: "an instrument",
    explanation: "We say 'play an instrument' or 'play a song'.",
    difficulty: 2,
    tags: ["listening", "music", "collocations", "b1"]
  },
  // Part 3: The Music Industry
  {
    id: "b1-music-21",
    type: "multiple-choice",
    question: "Album means:",
    options: ["A collection of songs", "One song", "A music video", "A concert"],
    correctAnswer: "A collection of songs",
    explanation: "An album is a collection of songs released together.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-22",
    type: "multiple-choice",
    question: "Single means:",
    options: ["One song released alone", "A married singer", "An album", "A concert"],
    correctAnswer: "One song released alone",
    explanation: "A single is one song released separately.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-23",
    type: "multiple-choice",
    question: "Chart refers to:",
    options: ["List of most popular songs", "A map", "A recipe", "A schedule"],
    correctAnswer: "List of most popular songs",
    explanation: "Music charts rank the most popular songs.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-24",
    type: "multiple-choice",
    question: "Tour means:",
    options: ["Traveling to perform in many places", "A vacation", "A museum visit", "A bus ride"],
    correctAnswer: "Traveling to perform in many places",
    explanation: "A tour involves performing in multiple locations.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-25",
    type: "multiple-choice",
    question: "Record Label is:",
    options: ["A company that manages artists", "A sticker", "A type of vinyl", "A music store"],
    correctAnswer: "A company that manages artists",
    explanation: "A record label produces and markets music.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  // Additional exercises (26-50) - Instruments categorization
  {
    id: "b1-music-26",
    type: "multiple-choice",
    question: "A violin is a ______ instrument.",
    options: ["String", "Wind", "Brass", "Percussion"],
    correctAnswer: "String",
    explanation: "The violin is played by bowing or plucking strings.",
    difficulty: 2,
    tags: ["listening", "music", "instruments", "b1"]
  },
  {
    id: "b1-music-27",
    type: "multiple-choice",
    question: "A trumpet is a ______ instrument.",
    options: ["Brass", "String", "Wind", "Percussion"],
    correctAnswer: "Brass",
    explanation: "The trumpet is a brass instrument.",
    difficulty: 2,
    tags: ["listening", "music", "instruments", "b1"]
  },
  {
    id: "b1-music-28",
    type: "multiple-choice",
    question: "A flute is a ______ instrument.",
    options: ["Wind", "String", "Brass", "Percussion"],
    correctAnswer: "Wind",
    explanation: "The flute is a woodwind instrument.",
    difficulty: 2,
    tags: ["listening", "music", "instruments", "b1"]
  },
  {
    id: "b1-music-29",
    type: "multiple-choice",
    question: "Drums are ______ instruments.",
    options: ["Percussion", "String", "Wind", "Brass"],
    correctAnswer: "Percussion",
    explanation: "Drums are played by hitting them.",
    difficulty: 2,
    tags: ["listening", "music", "instruments", "b1"]
  },
  {
    id: "b1-music-30",
    type: "fill-blank",
    question: "A ______ is a keyboard instrument with strings inside.",
    options: ["piano", "guitar", "violin", "flute"],
    correctAnswer: "piano",
    explanation: "A piano has strings that are struck by hammers.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-31",
    type: "multiple-choice",
    question: "A saxophone is a ______ instrument.",
    options: ["Wind", "String", "Brass", "Percussion"],
    correctAnswer: "Wind",
    explanation: "The saxophone is a woodwind instrument, despite being made of brass.",
    difficulty: 2,
    tags: ["listening", "music", "instruments", "b1"]
  },
  {
    id: "b1-music-32",
    type: "fill-blank",
    question: "The ______ is often called the 'king of instruments'.",
    options: ["organ", "guitar", "drum", "flute"],
    correctAnswer: "organ",
    explanation: "The pipe organ is called the 'king of instruments' for its size and sound.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-33",
    type: "multiple-choice",
    question: "A 'duet' is performed by:",
    options: ["Two people", "One person", "Three people", "A group"],
    correctAnswer: "Two people",
    explanation: "A duet is a performance by two musicians.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-34",
    type: "multiple-choice",
    question: "A 'solo' is performed by:",
    options: ["One person", "Two people", "A group", "An orchestra"],
    correctAnswer: "One person",
    explanation: "A solo is a performance by one musician.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-35",
    type: "fill-blank",
    question: "A ______ is a group of singers.",
    options: ["choir", "band", "orchestra", "ensemble"],
    correctAnswer: "choir",
    explanation: "A choir is a group of singers performing together.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-36",
    type: "multiple-choice",
    question: "'A cappella' means singing:",
    options: ["Without instrumental accompaniment", "With a full orchestra", "Very quietly", "Very loudly"],
    correctAnswer: "Without instrumental accompaniment",
    explanation: "A cappella is vocal music without instruments.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-37",
    type: "multiple-choice",
    question: "An 'encore' is:",
    options: ["An extra performance after the main show", "The opening act", "The intermission", "The ticket price"],
    correctAnswer: "An extra performance after the main show",
    explanation: "An encore is an additional performance requested by the audience.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-38",
    type: "fill-blank",
    question: "The ______ is the background music in a song.",
    options: ["accompaniment", "lyrics", "title", "chorus"],
    correctAnswer: "accompaniment",
    explanation: "Accompaniment is the musical support for a main melody.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-39",
    type: "multiple-choice",
    question: "A 'verse' in a song is:",
    options: ["A section that tells the story", "The repeating part", "The ending", "The introduction"],
    correctAnswer: "A section that tells the story",
    explanation: "Verses are the storytelling sections of a song.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-40",
    type: "multiple-choice",
    question: "A 'chorus' in a song is:",
    options: ["The repeating part", "The verse", "The bridge", "The outro"],
    correctAnswer: "The repeating part",
    explanation: "The chorus is the section that repeats throughout a song.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-41",
    type: "fill-blank",
    question: "A ______ is a song that is very popular.",
    options: ["hit", "flop", "demo", "cover"],
    correctAnswer: "hit",
    explanation: "A hit is a very successful and popular song.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-42",
    type: "multiple-choice",
    question: "To 'lip-sync' means to:",
    options: ["Pretend to sing", "Sing live", "Write lyrics", "Compose music"],
    correctAnswer: "Pretend to sing",
    explanation: "Lip-syncing is mouthing words to pre-recorded music.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-43",
    type: "multiple-choice",
    question: "A 'cover' version is:",
    options: ["A new recording of someone else's song", "An original song", "An instrumental", "A remix"],
    correctAnswer: "A new recording of someone else's song",
    explanation: "A cover is a new performance of a previously recorded song.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-44",
    type: "fill-blank",
    question: "A ______ is music played between acts of a show.",
    options: ["intermission", "encore", "finale", "overture"],
    correctAnswer: "intermission",
    explanation: "Intermission is a break between parts of a performance.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-45",
    type: "multiple-choice",
    question: "The 'bridge' in a song:",
    options: ["Connects verses and provides contrast", "Is the first verse", "Is the chorus", "Is the ending"],
    correctAnswer: "Connects verses and provides contrast",
    explanation: "A bridge provides variety between song sections.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-46",
    type: "multiple-choice",
    question: "'Streaming' music means:",
    options: ["Listening online without downloading", "Buying CDs", "Recording live", "Playing instruments"],
    correctAnswer: "Listening online without downloading",
    explanation: "Streaming allows instant online music playback.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-47",
    type: "fill-blank",
    question: "A ______ is an introductory piece of music.",
    options: ["prelude", "finale", "chorus", "verse"],
    correctAnswer: "prelude",
    explanation: "A prelude is an introductory piece of music.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-48",
    type: "multiple-choice",
    question: "A 'symphony' is:",
    options: ["A long orchestral composition", "A short song", "A music video", "A dance"],
    correctAnswer: "A long orchestral composition",
    explanation: "A symphony is a complex orchestral work.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-49",
    type: "multiple-choice",
    question: "'Harmony' in music is:",
    options: ["Multiple notes played together", "One note", "Silence", "Rhythm only"],
    correctAnswer: "Multiple notes played together",
    explanation: "Harmony is the combination of different musical notes.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
  {
    id: "b1-music-50",
    type: "multiple-choice",
    question: "A 'soundtrack' is:",
    options: ["Music for a film or show", "A music video", "A live concert", "A radio station"],
    correctAnswer: "Music for a film or show",
    explanation: "A soundtrack is the music accompanying a movie or TV show.",
    difficulty: 2,
    tags: ["listening", "music", "b1"]
  },
];

// Theme 13: Fashion & Style (50 Exercises)
const fashionStyleExercises: Exercise[] = [
  // Part 1: Industry Terms
  {
    id: "b1-fashion-1",
    type: "fill-blank",
    question: "A person who plans the form, look, or workings of a garment: (______)",
    options: ["designer", "model", "tailor", "seamstress"],
    correctAnswer: "designer",
    explanation: "A designer creates the concept and look of clothing.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-2",
    type: "fill-blank",
    question: "A general direction in which something is developing or changing: (______)",
    options: ["trend", "style", "fashion", "look"],
    correctAnswer: "trend",
    explanation: "A trend is a general direction of change in fashion.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-3",
    type: "fill-blank",
    question: "A thing which can be added to something else in order to make it more useful, versatile, or attractive: (______)",
    options: ["accessory", "garment", "outfit", "ensemble"],
    correctAnswer: "accessory",
    explanation: "An accessory complements clothing, like bags or jewelry.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-4",
    type: "fill-blank",
    question: "A range of new clothes produced by a fashion house: (______)",
    options: ["collection", "wardrobe", "closet", "inventory"],
    correctAnswer: "collection",
    explanation: "A collection is a fashion house's seasonal clothing line.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-5",
    type: "fill-blank",
    question: "Unscramble: A-C-C-E-S-S-O-R-Y (______)",
    options: ["accessory", "accesory", "acessory", "accessery"],
    correctAnswer: "accessory",
    explanation: "ACCESSORY - an item that complements clothing.",
    difficulty: 2,
    tags: ["listening", "fashion", "spelling", "b1"]
  },
  {
    id: "b1-fashion-6",
    type: "fill-blank",
    question: "Unscramble: D-E-S-I-G-N-E-R (______)",
    options: ["designer", "desiner", "designor", "dezigner"],
    correctAnswer: "designer",
    explanation: "DESIGNER - a person who creates fashion.",
    difficulty: 2,
    tags: ["listening", "fashion", "spelling", "b1"]
  },
  {
    id: "b1-fashion-7",
    type: "multiple-choice",
    question: "Cloth or other material produced by weaving or knitting fibers:",
    options: ["Fabric", "Leather", "Plastic", "Metal"],
    correctAnswer: "Fabric",
    explanation: "Fabric is material made from woven or knitted fibers.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-8",
    type: "multiple-choice",
    question: "A person whose occupation is making fitted clothes:",
    options: ["Tailor", "Model", "Designer", "Photographer"],
    correctAnswer: "Tailor",
    explanation: "A tailor makes and alters fitted clothing.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-9",
    type: "multiple-choice",
    question: "Clothing representing a previous era or time period:",
    options: ["Vintage", "Modern", "Contemporary", "Futuristic"],
    correctAnswer: "Vintage",
    explanation: "Vintage clothing is from a previous era.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-10",
    type: "multiple-choice",
    question: "'Haute Couture' refers to:",
    options: ["High-end custom fashion", "Cheap fashion", "Sports wear", "Casual wear"],
    correctAnswer: "High-end custom fashion",
    explanation: "Haute couture is high fashion custom-made clothing.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  // Part 2: Clothing & Materials
  {
    id: "b1-fashion-11",
    type: "multiple-choice",
    question: "Denim is used for:",
    options: ["Jeans", "Suits", "Formal wear", "Swimwear"],
    correctAnswer: "Jeans",
    explanation: "Denim is the sturdy cotton fabric used for jeans.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-12",
    type: "multiple-choice",
    question: "Silk is:",
    options: ["Soft and expensive", "Rough and cheap", "Heavy", "Waterproof"],
    correctAnswer: "Soft and expensive",
    explanation: "Silk is a luxurious, soft fabric.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-13",
    type: "multiple-choice",
    question: "Cotton comes from:",
    options: ["A plant", "An animal", "A laboratory", "Oil"],
    correctAnswer: "A plant",
    explanation: "Cotton is a natural fiber from the cotton plant.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-14",
    type: "multiple-choice",
    question: "Wool comes from:",
    options: ["Sheep", "Trees", "Silkworms", "Plastic"],
    correctAnswer: "Sheep",
    explanation: "Wool is a natural fiber from sheep.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-15",
    type: "multiple-choice",
    question: "Leather comes from:",
    options: ["Animal skin", "Plastic", "Plants", "Minerals"],
    correctAnswer: "Animal skin",
    explanation: "Leather is made from treated animal hides.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-16",
    type: "multiple-choice",
    question: "True or False: A 'catwalk' or 'runway' is where models walk.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Models display fashion by walking the catwalk.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-17",
    type: "multiple-choice",
    question: "True or False: 'Casual' means very formal clothing.",
    options: ["False", "True"],
    correctAnswer: "False",
    explanation: "Casual means relaxed, informal clothing.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-18",
    type: "multiple-choice",
    question: "Synonym: 'Garment' means:",
    options: ["Piece of clothing", "Jewelry", "Shoe", "Bag"],
    correctAnswer: "Piece of clothing",
    explanation: "A garment is an item of clothing.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-19",
    type: "multiple-choice",
    question: "Antonym: 'Tight' is the opposite of:",
    options: ["Loose", "Short", "Long", "Dark"],
    correctAnswer: "Loose",
    explanation: "Tight clothing fits closely; loose clothing is relaxed.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-20",
    type: "multiple-choice",
    question: "Idiom: 'Dressed to kill' means:",
    options: ["Wearing very stylish clothes", "Wearing armor", "Dressed for work", "Wearing pajamas"],
    correctAnswer: "Wearing very stylish clothes",
    explanation: "Dressed to kill means wearing impressive, attractive clothing.",
    difficulty: 2,
    tags: ["listening", "fashion", "idioms", "b1"]
  },
  // Part 3: Describing Style
  {
    id: "b1-fashion-21",
    type: "multiple-choice",
    question: "'That dress is very chic.' Chic means:",
    options: ["Stylish", "Ugly", "Old", "Cheap"],
    correctAnswer: "Stylish",
    explanation: "Chic means elegantly and stylishly fashionable.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-22",
    type: "multiple-choice",
    question: "'His style is eccentric.' Eccentric means:",
    options: ["Unusual/Unique", "Boring", "Traditional", "Plain"],
    correctAnswer: "Unusual/Unique",
    explanation: "Eccentric style is unconventional and unique.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-23",
    type: "multiple-choice",
    question: "'I prefer classic clothes.' Classic means:",
    options: ["Timeless", "Trendy", "Cheap", "Colorful"],
    correctAnswer: "Timeless",
    explanation: "Classic style is enduring and elegant.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-24",
    type: "multiple-choice",
    question: "'That pattern is bold.' Bold means:",
    options: ["Strong/Bright", "Invisible", "Faded", "Small"],
    correctAnswer: "Strong/Bright",
    explanation: "Bold patterns are striking and eye-catching.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-25",
    type: "multiple-choice",
    question: "'Her look is sophisticated.' Sophisticated means:",
    options: ["Elegant", "Childish", "Simple", "Messy"],
    correctAnswer: "Elegant",
    explanation: "Sophisticated means refined and elegant.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  // Additional exercises (26-50) - Accessories matching
  {
    id: "b1-fashion-26",
    type: "multiple-choice",
    question: "A scarf is worn around the:",
    options: ["Neck", "Waist", "Ankle", "Wrist"],
    correctAnswer: "Neck",
    explanation: "Scarves are worn around the neck for warmth or style.",
    difficulty: 2,
    tags: ["listening", "fashion", "accessories", "b1"]
  },
  {
    id: "b1-fashion-27",
    type: "multiple-choice",
    question: "Gloves are worn on the:",
    options: ["Hands", "Feet", "Head", "Neck"],
    correctAnswer: "Hands",
    explanation: "Gloves protect and cover the hands.",
    difficulty: 2,
    tags: ["listening", "fashion", "accessories", "b1"]
  },
  {
    id: "b1-fashion-28",
    type: "multiple-choice",
    question: "A belt is worn around the:",
    options: ["Waist", "Neck", "Wrist", "Ankle"],
    correctAnswer: "Waist",
    explanation: "Belts are worn around the waist to hold up pants.",
    difficulty: 2,
    tags: ["listening", "fashion", "accessories", "b1"]
  },
  {
    id: "b1-fashion-29",
    type: "multiple-choice",
    question: "Earrings are worn on the:",
    options: ["Ears", "Nose", "Fingers", "Wrist"],
    correctAnswer: "Ears",
    explanation: "Earrings are jewelry worn on the ears.",
    difficulty: 2,
    tags: ["listening", "fashion", "accessories", "b1"]
  },
  {
    id: "b1-fashion-30",
    type: "multiple-choice",
    question: "A bracelet is worn on the:",
    options: ["Wrist", "Ankle", "Neck", "Finger"],
    correctAnswer: "Wrist",
    explanation: "Bracelets are worn around the wrist.",
    difficulty: 2,
    tags: ["listening", "fashion", "accessories", "b1"]
  },
  {
    id: "b1-fashion-31",
    type: "fill-blank",
    question: "A ______ is worn on the finger.",
    options: ["ring", "bracelet", "necklace", "earring"],
    correctAnswer: "ring",
    explanation: "Rings are jewelry worn on fingers.",
    difficulty: 2,
    tags: ["listening", "fashion", "accessories", "b1"]
  },
  {
    id: "b1-fashion-32",
    type: "multiple-choice",
    question: "A necklace is worn around the:",
    options: ["Neck", "Wrist", "Ankle", "Waist"],
    correctAnswer: "Neck",
    explanation: "Necklaces are worn around the neck.",
    difficulty: 2,
    tags: ["listening", "fashion", "accessories", "b1"]
  },
  {
    id: "b1-fashion-33",
    type: "multiple-choice",
    question: "A hat is worn on the:",
    options: ["Head", "Hands", "Feet", "Neck"],
    correctAnswer: "Head",
    explanation: "Hats are worn on the head.",
    difficulty: 2,
    tags: ["listening", "fashion", "accessories", "b1"]
  },
  {
    id: "b1-fashion-34",
    type: "fill-blank",
    question: "An ______ is worn on the ankle.",
    options: ["anklet", "bracelet", "necklace", "ring"],
    correctAnswer: "anklet",
    explanation: "An anklet is jewelry worn around the ankle.",
    difficulty: 2,
    tags: ["listening", "fashion", "accessories", "b1"]
  },
  {
    id: "b1-fashion-35",
    type: "multiple-choice",
    question: "A tie is worn around the:",
    options: ["Neck", "Waist", "Wrist", "Head"],
    correctAnswer: "Neck",
    explanation: "Ties are formal neckwear, usually for men.",
    difficulty: 2,
    tags: ["listening", "fashion", "accessories", "b1"]
  },
  {
    id: "b1-fashion-36",
    type: "multiple-choice",
    question: "'Off-the-rack' clothing is:",
    options: ["Ready-made", "Custom-made", "Handmade", "Vintage"],
    correctAnswer: "Ready-made",
    explanation: "Off-the-rack means ready to buy in standard sizes.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-37",
    type: "fill-blank",
    question: "A ______ is a sleeveless garment worn over a shirt.",
    options: ["vest", "coat", "jacket", "sweater"],
    correctAnswer: "vest",
    explanation: "A vest is a sleeveless garment.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-38",
    type: "multiple-choice",
    question: "'Sustainable fashion' prioritizes:",
    options: ["Environmental responsibility", "Low prices only", "Fast trends", "Synthetic materials"],
    correctAnswer: "Environmental responsibility",
    explanation: "Sustainable fashion considers environmental impact.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-39",
    type: "multiple-choice",
    question: "'Fast fashion' is characterized by:",
    options: ["Quick production of trendy, cheap clothes", "High quality", "Custom made", "Slow production"],
    correctAnswer: "Quick production of trendy, cheap clothes",
    explanation: "Fast fashion produces cheap, trendy clothing quickly.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-40",
    type: "fill-blank",
    question: "A ______ shows new fashion collections.",
    options: ["fashion show", "movie", "concert", "exhibition"],
    correctAnswer: "fashion show",
    explanation: "Fashion shows display new clothing collections.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-41",
    type: "multiple-choice",
    question: "A 'capsule wardrobe' contains:",
    options: ["A small collection of versatile pieces", "Many different items", "Only formal wear", "Only casual wear"],
    correctAnswer: "A small collection of versatile pieces",
    explanation: "A capsule wardrobe has essential, versatile items.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-42",
    type: "multiple-choice",
    question: "'Athleisure' combines:",
    options: ["Athletic and leisure wear", "Formal and casual", "Vintage and modern", "Work and party"],
    correctAnswer: "Athletic and leisure wear",
    explanation: "Athleisure is comfortable clothing for sports and casual wear.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-43",
    type: "fill-blank",
    question: "A ______ is a person who displays clothes in fashion shows.",
    options: ["model", "designer", "tailor", "stylist"],
    correctAnswer: "model",
    explanation: "Models showcase clothing on the runway.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-44",
    type: "multiple-choice",
    question: "'Monochrome' means wearing:",
    options: ["One color or shades of one color", "Many bright colors", "Patterns only", "No clothes"],
    correctAnswer: "One color or shades of one color",
    explanation: "Monochrome style uses variations of a single color.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-45",
    type: "multiple-choice",
    question: "A 'stylist' helps with:",
    options: ["Choosing outfits and looks", "Sewing clothes", "Selling clothes", "Designing clothes"],
    correctAnswer: "Choosing outfits and looks",
    explanation: "A stylist selects clothing and accessories for clients.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-46",
    type: "fill-blank",
    question: "A ______ is the hem at the bottom of a garment.",
    options: ["hemline", "neckline", "waistline", "headline"],
    correctAnswer: "hemline",
    explanation: "The hemline is the bottom edge of a garment.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-47",
    type: "multiple-choice",
    question: "'Wardrobe malfunction' means:",
    options: ["Clothing accidentally revealing too much", "A broken closet", "Buying wrong size", "Fashion mistake"],
    correctAnswer: "Clothing accidentally revealing too much",
    explanation: "A wardrobe malfunction is an accidental clothing failure.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-48",
    type: "multiple-choice",
    question: "'Bespoke' clothing is:",
    options: ["Custom-made for an individual", "Mass-produced", "Second-hand", "Rental only"],
    correctAnswer: "Custom-made for an individual",
    explanation: "Bespoke means made to order for a specific person.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-49",
    type: "fill-blank",
    question: "The ______ is the opening for the head on a garment.",
    options: ["neckline", "hemline", "waistline", "sleeve"],
    correctAnswer: "neckline",
    explanation: "The neckline is the edge around the neck opening.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
  {
    id: "b1-fashion-50",
    type: "multiple-choice",
    question: "'Upcycling' in fashion means:",
    options: ["Transforming old items into new pieces", "Throwing away clothes", "Buying new clothes", "Wearing the same outfit"],
    correctAnswer: "Transforming old items into new pieces",
    explanation: "Upcycling creates new items from old materials.",
    difficulty: 2,
    tags: ["listening", "fashion", "b1"]
  },
];

// Export all B1 Listening exercises organized by skill ID
export const b1ListeningExercisesNew: Record<string, Exercise[]> = {
  "b1-list-1": artCultureExercises,           // Art & Culture
  "b1-list-2": relationshipsSocialExercises,  // Relationships & Social
  "b1-list-3": travelAdventureExercises,      // Travel & Adventure
  "b1-list-4": digitalTechnologyExercises,    // Digital Technology
  "b1-list-5": psychologyMindExercises,       // Psychology & Mind
  "b1-list-6": economicsFinanceExercises,     // Economics & Finance
  "b1-list-7": healthWellnessExercises,       // Health & Wellness
  "b1-list-8": sportsCompetitionExercises,    // Sports & Competition
  "b1-list-9": cuisineGastronomyExercises,    // Cuisine & Gastronomy
  "b1-list-10": architectureBuildingsExercises, // Architecture & Buildings
  "b1-list-11": literatureWritingExercises,   // Literature & Writing
  "b1-list-12": musicPerformanceExercises,    // Music & Performance
  "b1-list-13": fashionStyleExercises,        // Fashion & Style
};

// Function to get exercises by skill ID
export function getB1ListeningExercises(skillId: string): Exercise[] {
  return b1ListeningExercisesNew[skillId] || [];
}

// Export all exercises as a flat array
export const allB1ListeningExercises: Exercise[] = [
  ...artCultureExercises,
  ...relationshipsSocialExercises,
  ...travelAdventureExercises,
  ...digitalTechnologyExercises,
  ...psychologyMindExercises,
  ...economicsFinanceExercises,
  ...healthWellnessExercises,
  ...sportsCompetitionExercises,
  ...cuisineGastronomyExercises,
  ...architectureBuildingsExercises,
  ...literatureWritingExercises,
  ...musicPerformanceExercises,
  ...fashionStyleExercises,
];

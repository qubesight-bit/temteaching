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

// Export all B1 Listening exercises organized by skill ID
export const b1ListeningExercisesNew: Record<string, Exercise[]> = {
  "b1-list-1": artCultureExercises,           // Art & Culture
  "b1-list-2": relationshipsSocialExercises,  // Relationships & Social
  "b1-list-3": travelAdventureExercises,      // Travel & Adventure
  "b1-list-4": digitalTechnologyExercises,    // Digital Technology
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
];

const PROFILE_STORAGE_KEY = "english_learning_profiles_v1";
const SESSION_PROFILE_KEY = "english_learning_active_profile";
const COOKIE_PROFILE_KEY = "english_learning_active_profile";
const LEGACY_STORAGE_KEY = "english_learning_adventure_v1";
const AI_TEACHER_SETTINGS_KEY = "english_learning_ai_teacher_settings_v1";
const AI_TEACHER_SERVER_CONFIG = {
    enabled: true,
    endpoint: "/api/teacher",
    model: "gpt-4.1-mini"
};
const DEFAULT_MODULE_ID = "spelling";
const QUESTIONS_PER_ROUND = 5;
const SPELLING_MAX_TRIES = 5;
const TARGET_TOTAL_QUESTIONS_PER_MODULE = 90;
const STAGES_PER_MODULE = 3;
const TARGET_QUESTIONS_PER_STAGE = TARGET_TOTAL_QUESTIONS_PER_MODULE / STAGES_PER_MODULE;

const moduleTutorials = {
    spelling: {
        title: "What Is Spelling Studio?",
        simple: "Spelling means writing words with letters in the right order. You will use clues and sound to guess the word.",
        tip: "Say the word slowly and listen for each sound."
    },
    parts: {
        title: "What Is Parts of Speech?",
        simple: "Words have jobs. A noun names, a verb does, an adjective describes, and an adverb explains how.",
        tip: "Ask: Is this a name, an action, a describing word, or a how word?"
    },
    sentences: {
        title: "What Is Sentence Builder?",
        simple: "A good sentence has words in the correct order and ends with the right punctuation mark.",
        tip: "Read the sentence out loud. If it sounds clear, it is likely correct."
    },
    tenses: {
        title: "What Is Tense Quest?",
        simple: "Tense tells time. Past is before now, present is now, and future is later.",
        tip: "Look for time clues like yesterday, now, tomorrow, next week."
    },
    punctuation: {
        title: "What Is Punctuation Lab?",
        simple: "Punctuation marks help readers pause, stop, and understand your writing.",
        tip: "Use capitals at the start and the correct mark at the end."
    },
    reading: {
        title: "What Is Reading Mini Quiz?",
        simple: "Read a short text, then find answers using clues from the passage.",
        tip: "Find key words in the question and scan the passage for matching ideas."
    }
};

const SUBJECTS = [
    { id: "english", title: "English" },
    { id: "mathematics", title: "Mathematics" },
    { id: "science", title: "Science" },
    { id: "social-studies", title: "Social Studies" },
    { id: "health", title: "Health Education" },
    { id: "world-knowledge", title: "US & Canada World Knowledge" }
];

const MODULES = [
    { id: "spelling", subject: "english", title: "Spelling Studio", description: "Spell words with UK/US variants and audio clues." },
    { id: "parts", subject: "english", title: "Parts of Speech", description: "Nouns, verbs, adjectives, and adverbs in context." },
    { id: "sentences", subject: "english", title: "Sentence Builder", description: "Choose the best sentence construction." },
    { id: "tenses", subject: "english", title: "Tense Quest", description: "Practice present, past, and future forms." },
    { id: "punctuation", subject: "english", title: "Punctuation Lab", description: "Capital letters, punctuation, and sentence accuracy." },
    { id: "reading", subject: "english", title: "Reading Mini Quiz", description: "Read short passages and answer questions." },

    { id: "mathArithmetic", subject: "mathematics", title: "Arithmetic", description: "Practice add, subtract, multiply, and divide with word problems." },
    { id: "mathFractions", subject: "mathematics", title: "Fractions", description: "Understand equivalent fractions and compare fractional values." },
    { id: "mathGeometry", subject: "mathematics", title: "Geometry", description: "Shapes, angles, perimeter, and area basics." },

    { id: "scienceLife", subject: "science", title: "Life Science", description: "Living things, habitats, and body systems." },
    { id: "sciencePhysical", subject: "science", title: "Physical Science", description: "Forces, energy, and states of matter." },
    { id: "scienceEarth", subject: "science", title: "Earth Science", description: "Weather, water cycle, rocks, and planets." },

    { id: "socialHistory", subject: "social-studies", title: "History", description: "Key events, timelines, and civic milestones." },
    { id: "socialGeography", subject: "social-studies", title: "Geography", description: "Maps, regions, landforms, and climate ideas." },
    { id: "socialCivics", subject: "social-studies", title: "Civics", description: "Citizenship, rules, and how government works." },

    { id: "healthNutrition", subject: "health", title: "Nutrition", description: "Balanced meals, food groups, and hydration." },
    { id: "healthHygiene", subject: "health", title: "Hygiene", description: "Healthy daily habits and germ prevention." },
    { id: "healthWellness", subject: "health", title: "Safety & Wellness", description: "Exercise, sleep, and safe choices." },

    { id: "worldUSCanada", subject: "world-knowledge", title: "US & Canada Basics", description: "Capitals, symbols, and key facts." },
    { id: "worldLandmarks", subject: "world-knowledge", title: "Places & Landmarks", description: "Major cities, regions, and famous places." },
    { id: "worldGovernment", subject: "world-knowledge", title: "Government & Society", description: "How communities, provinces, and states are organized." }
];

const moduleData = {
    spelling: {
        1: [
            {
                word: "color",
                accepted: ["color", "colour"],
                variantNote: "US: color, UK: colour",
                hint: "What you see with your eyes, like red or blue.",
                image: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=700"
            },
            {
                word: "center",
                accepted: ["center", "centre"],
                variantNote: "US: center, UK: centre",
                hint: "The middle point of something.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700"
            },
            {
                word: "garden",
                accepted: ["garden"],
                variantNote: "Shared spelling",
                hint: "A place where plants and flowers grow.",
                image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=700"
            },
            {
                word: "travel",
                accepted: ["travel", "travelling", "traveling"],
                variantNote: "Verb root accepted, including UK/US gerund forms",
                hint: "To go from one place to another.",
                image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=700"
            },
            {
                word: "theater",
                accepted: ["theater", "theatre"],
                variantNote: "US: theater, UK: theatre",
                hint: "A place where plays and shows are performed.",
                image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=700"
            },
            {
                word: "favorite",
                accepted: ["favorite", "favourite"],
                variantNote: "US: favorite, UK: favourite",
                hint: "The one you like best.",
                image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=700"
            }
        ],
        2: [
            {
                word: "organize",
                accepted: ["organize", "organise"],
                variantNote: "US: organize, UK: organise",
                hint: "To arrange things neatly.",
                image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=700"
            },
            {
                word: "analyze",
                accepted: ["analyze", "analyse"],
                variantNote: "US: analyze, UK: analyse",
                hint: "To examine carefully.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700"
            },
            {
                word: "journey",
                accepted: ["journey"],
                variantNote: "Shared spelling",
                hint: "A trip from one place to another.",
                image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=700"
            },
            {
                word: "calendar",
                accepted: ["calendar"],
                variantNote: "Shared spelling",
                hint: "It shows days, months, and dates.",
                image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=700"
            },
            {
                word: "defense",
                accepted: ["defense", "defence"],
                variantNote: "US: defense, UK: defence",
                hint: "Protection from danger.",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700"
            },
            {
                word: "check",
                accepted: ["check", "cheque"],
                variantNote: "US: check, UK banking term: cheque",
                hint: "A written order to pay money from a bank.",
                image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=700"
            }
        ],
        3: [
            {
                word: "recognize",
                accepted: ["recognize", "recognise"],
                variantNote: "US: recognize, UK: recognise",
                hint: "To identify someone or something you have seen before.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
            },
            {
                word: "apologize",
                accepted: ["apologize", "apologise"],
                variantNote: "US: apologize, UK: apologise",
                hint: "To say sorry.",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700"
            },
            {
                word: "adventure",
                accepted: ["adventure"],
                variantNote: "Shared spelling",
                hint: "An exciting and unusual experience.",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700"
            },
            {
                word: "parliament",
                accepted: ["parliament"],
                variantNote: "Shared spelling",
                hint: "A group of people who make laws.",
                image: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=700"
            },
            {
                word: "practice",
                accepted: ["practice", "practise"],
                variantNote: "Noun: practice. UK verb often: practise.",
                hint: "Regular training to improve a skill.",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700"
            },
            {
                word: "dialog",
                accepted: ["dialog", "dialogue"],
                variantNote: "US often: dialog, UK often: dialogue",
                hint: "A conversation between people.",
                image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=700"
            }
        ]
    },
    parts: {
        1: [
            {
                sentence: "The playful puppy chased the ball quickly.",
                target: "puppy",
                answer: "Noun",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                explanation: "Puppy names a person, place, or thing, so it is a noun."
            },
            {
                sentence: "Maya carefully painted a bright sunset.",
                target: "carefully",
                answer: "Adverb",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                explanation: "Carefully tells how Maya painted, so it is an adverb."
            },
            {
                sentence: "Those tall trees swayed in the wind.",
                target: "tall",
                answer: "Adjective",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                explanation: "Tall describes the trees, so it is an adjective."
            },
            {
                sentence: "The students write in their journals each morning.",
                target: "write",
                answer: "Verb",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                explanation: "Write is an action word, so it is a verb."
            }
        ],
        2: [
            {
                sentence: "Our science teacher explained the experiment clearly.",
                target: "clearly",
                answer: "Adverb",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                explanation: "Clearly tells how the teacher explained."
            },
            {
                sentence: "The ancient castle stood on the hill.",
                target: "ancient",
                answer: "Adjective",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                explanation: "Ancient describes the castle."
            },
            {
                sentence: "My cousin built a model airplane.",
                target: "cousin",
                answer: "Noun",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                explanation: "Cousin names a person."
            },
            {
                sentence: "The athletes trained after school.",
                target: "trained",
                answer: "Verb",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                explanation: "Trained is the action in the sentence."
            }
        ],
        3: [
            {
                sentence: "The audience applauded loudly after the concert.",
                target: "applauded",
                answer: "Verb",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                explanation: "Applauded is what the audience did."
            },
            {
                sentence: "Rina wore a traditional outfit at the festival.",
                target: "traditional",
                answer: "Adjective",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                explanation: "Traditional describes the outfit."
            },
            {
                sentence: "He solved the puzzle surprisingly fast.",
                target: "surprisingly",
                answer: "Adverb",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                explanation: "Surprisingly explains how he solved it."
            },
            {
                sentence: "The librarian recommended a mystery novel.",
                target: "librarian",
                answer: "Noun",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                explanation: "Librarian names a person."
            }
        ]
    },
    sentences: {
        1: [
            {
                prompt: "Pick the best sentence.",
                answer: "My sister and I went to the library after school.",
                options: [
                    "My sister and I went to the library after school.",
                    "My sister and me goes to library after school.",
                    "Library after school went my sister and I.",
                    "My sister and I going to the library after school"
                ],
                explanation: "The correct sentence has proper pronouns, verb form, and punctuation."
            },
            {
                prompt: "Pick the best sentence.",
                answer: "Because it was raining, we played board games indoors.",
                options: [
                    "Because it was raining, we played board games indoors.",
                    "Because raining was it we played board games indoors.",
                    "It was raining because we played board games indoors",
                    "Because it was raining we played board games indoors"
                ],
                explanation: "A comma is needed after the opening clause."
            },
            {
                prompt: "Pick the best sentence.",
                answer: "The dog barked, but the baby kept sleeping.",
                options: [
                    "The dog barked, but the baby kept sleeping.",
                    "The dog barked but, the baby kept sleeping.",
                    "The dog barked but the baby kept sleeping",
                    "The dog barked and but the baby kept sleeping."
                ],
                explanation: "Use a comma before conjunctions joining two full ideas."
            }
        ],
        2: [
            {
                prompt: "Pick the best sentence.",
                answer: "If you finish your homework, you can watch a movie.",
                options: [
                    "If you finish your homework, you can watch a movie.",
                    "If you finish your homework you can, watch a movie.",
                    "If finish your homework, you can watch a movie.",
                    "If you finish your homework you can watch a movie"
                ],
                explanation: "A comma separates the if-clause from the main clause."
            },
            {
                prompt: "Pick the best sentence.",
                answer: "Neither the coach nor the players were late.",
                options: [
                    "Neither the coach nor the players were late.",
                    "Neither the coach or the players were late.",
                    "Neither coach nor the players was late.",
                    "Neither the coach nor players were, late."
                ],
                explanation: "Use neither...nor and proper agreement with players."
            },
            {
                prompt: "Pick the best sentence.",
                answer: "During the trip, we visited museums, parks, and markets.",
                options: [
                    "During the trip, we visited museums, parks, and markets.",
                    "During the trip we visited museums parks and markets.",
                    "During, the trip we visited museums parks, and markets.",
                    "During the trip, we visited museums parks and, markets."
                ],
                explanation: "A list needs commas for clear separation."
            }
        ],
        3: [
            {
                prompt: "Pick the best sentence.",
                answer: "Although the task was difficult, Amara completed it calmly.",
                options: [
                    "Although the task was difficult, Amara completed it calmly.",
                    "Although the task was difficult Amara completed it calmly.",
                    "Although task was difficult, Amara completed it calmly.",
                    "Although the task was difficult, Amara completed calmly it."
                ],
                explanation: "The dependent clause requires a comma before the main clause."
            },
            {
                prompt: "Pick the best sentence.",
                answer: "The team practiced daily; therefore, they improved quickly.",
                options: [
                    "The team practiced daily; therefore, they improved quickly.",
                    "The team practiced daily therefore they improved quickly.",
                    "The team practiced daily, therefore; they improved quickly.",
                    "The team practiced daily therefore, they improved quickly"
                ],
                explanation: "A semicolon can join related full sentences with a transition."
            },
            {
                prompt: "Pick the best sentence.",
                answer: "My uncle, who lives in London, sends postcards every month.",
                options: [
                    "My uncle, who lives in London, sends postcards every month.",
                    "My uncle who lives in London sends postcards every month.",
                    "My uncle, who lives in London sends postcards every month.",
                    "My uncle who lives, in London, sends postcards every month."
                ],
                explanation: "Extra detail in the middle of a sentence should be set off by commas."
            }
        ]
    },
    tenses: {
        1: [
            {
                prompt: "Yesterday, I ____ to the music lesson.",
                answer: "walked",
                options: ["walk", "walked", "will walk", "walking"],
                explanation: "Yesterday signals past tense, so walked is correct."
            },
            {
                prompt: "Every morning, she ____ her bed.",
                answer: "makes",
                options: ["made", "makes", "will make", "making"],
                explanation: "Every morning is routine present tense."
            },
            {
                prompt: "Tomorrow, they ____ their science project.",
                answer: "will finish",
                options: ["finished", "finish", "will finish", "finishing"],
                explanation: "Tomorrow tells us future tense is needed."
            }
        ],
        2: [
            {
                prompt: "Last weekend, we ____ a model bridge.",
                answer: "built",
                options: ["build", "built", "will build", "building"],
                explanation: "Last weekend is in the past."
            },
            {
                prompt: "Right now, he ____ his spelling list.",
                answer: "is reading",
                options: ["read", "reads", "is reading", "will read"],
                explanation: "Right now shows present continuous tense."
            },
            {
                prompt: "Next month, our class ____ a museum.",
                answer: "will visit",
                options: ["visited", "visit", "will visit", "visits"],
                explanation: "Next month refers to the future."
            }
        ],
        3: [
            {
                prompt: "By noon, I ____ my chores and then relaxed.",
                answer: "had finished",
                options: ["finish", "had finished", "will finish", "am finishing"],
                explanation: "Had finished shows an action completed before another past action."
            },
            {
                prompt: "She usually ____ her notes before tests.",
                answer: "reviews",
                options: ["reviewed", "reviews", "will review", "review"],
                explanation: "Usually describes a present habit."
            },
            {
                prompt: "By this time next week, we ____ the chapter.",
                answer: "will have completed",
                options: ["completed", "complete", "will have completed", "are completing"],
                explanation: "By this time next week signals future perfect tense."
            }
        ]
    },
    punctuation: {
        1: [
            {
                prompt: "Choose the correctly punctuated sentence.",
                answer: "We packed sandwiches, apples, and juice.",
                options: [
                    "We packed sandwiches, apples, and juice.",
                    "We packed sandwiches apples, and juice.",
                    "we packed sandwiches, apples, and juice",
                    "We packed sandwiches, apples and juice"
                ],
                explanation: "This option has capitalization, commas, and end punctuation."
            },
            {
                prompt: "Choose the correctly punctuated sentence.",
                answer: "\"Can you help me with this puzzle?\" asked Leo.",
                options: [
                    "\"Can you help me with this puzzle?\" asked Leo.",
                    "\"Can you help me with this puzzle\" asked Leo?",
                    "\"can you help me with this puzzle?\" asked Leo.",
                    "\"Can you help me with this puzzle? asked Leo.\""
                ],
                explanation: "Question mark stays inside quotation marks and sentence starts with a capital letter."
            },
            {
                prompt: "Choose the correctly punctuated sentence.",
                answer: "After dinner, we cleaned the kitchen.",
                options: [
                    "After dinner, we cleaned the kitchen.",
                    "After dinner we cleaned, the kitchen.",
                    "after dinner, we cleaned the kitchen.",
                    "After dinner we cleaned the kitchen"
                ],
                explanation: "An opening phrase should be followed by a comma."
            }
        ],
        2: [
            {
                prompt: "Choose the correctly punctuated sentence.",
                answer: "I enjoy art, science, and history, but math is my favorite.",
                options: [
                    "I enjoy art, science, and history, but math is my favorite.",
                    "I enjoy art science and history, but math is my favorite.",
                    "I enjoy art, science, and history but math is my favorite",
                    "i enjoy art, science, and history, but math is my favorite."
                ],
                explanation: "Use commas in a list and before but joining two complete ideas."
            },
            {
                prompt: "Choose the correctly punctuated sentence.",
                answer: "My cousin's bike was parked near the gate.",
                options: [
                    "My cousin's bike was parked near the gate.",
                    "My cousins bike was parked near the gate.",
                    "My cousin,s bike was parked near the gate.",
                    "my cousin's bike was parked near the gate"
                ],
                explanation: "Apostrophe plus s shows possession and sentence starts with a capital letter."
            },
            {
                prompt: "Choose the correctly punctuated sentence.",
                answer: "\"Watch out!\" shouted the lifeguard.",
                options: [
                    "\"Watch out!\" shouted the lifeguard.",
                    "\"Watch out\"! shouted the lifeguard.",
                    "\"Watch out!\" Shouted the lifeguard.",
                    "\"watch out!\" shouted the lifeguard."
                ],
                explanation: "Exclamation point stays with quoted speech and shouted remains lowercase."
            }
        ],
        3: [
            {
                prompt: "Choose the correctly punctuated sentence.",
                answer: "If I finish early, I'll revise my notes and then read.",
                options: [
                    "If I finish early, I'll revise my notes and then read.",
                    "If I finish early I'll revise my notes and then read.",
                    "If I finish early, ill revise my notes and then read.",
                    "if I finish early, I'll revise my notes and then read"
                ],
                explanation: "Use comma after the opening clause and apostrophe in I'll."
            },
            {
                prompt: "Choose the correctly punctuated sentence.",
                answer: "The principal said, \"Be kind, be brave, and be ready to learn.\"",
                options: [
                    "The principal said, \"Be kind, be brave, and be ready to learn.\"",
                    "The principal said \"Be kind, be brave, and be ready to learn.\"",
                    "The principal said, \"be kind, be brave, and be ready to learn.\"",
                    "The principal said, \"Be kind be brave and be ready to learn\""
                ],
                explanation: "Quoted speech needs a comma before it, internal punctuation, and a capital letter."
            },
            {
                prompt: "Choose the correctly punctuated sentence.",
                answer: "During assembly, Ms. Patel introduced our new reading challenge.",
                options: [
                    "During assembly, Ms. Patel introduced our new reading challenge.",
                    "During assembly Ms Patel introduced our new reading challenge.",
                    "during assembly, Ms. Patel introduced our new reading challenge.",
                    "During assembly, Ms Patel introduced our new reading challenge"
                ],
                explanation: "Use comma after introductory phrase and proper punctuation for abbreviated title."
            }
        ]
    },
    reading: {
        1: [
            {
                passage: "Nia planted tomato seeds in her backyard. She watered them every evening. After a few weeks, tiny green plants appeared.",
                prompt: "What helped the plants appear?",
                answer: "Nia watered them every evening.",
                options: [
                    "Nia watered them every evening.",
                    "Nia forgot about the seeds.",
                    "It snowed every day.",
                    "The plants were already fully grown."
                ],
                explanation: "The passage directly states she watered them every evening."
            },
            {
                passage: "Sam borrowed two mystery books from the library. He read one book on Saturday and the other on Sunday.",
                prompt: "How many books did Sam borrow?",
                answer: "Two books.",
                options: ["One book.", "Two books.", "Three books.", "Four books."],
                explanation: "The first sentence says Sam borrowed two books."
            },
            {
                passage: "The school art club met after lunch. Students used watercolors to paint landscapes and shared their work at the end.",
                prompt: "When did the art club meet?",
                answer: "After lunch.",
                options: ["Before school.", "After lunch.", "At midnight.", "During breakfast."],
                explanation: "The passage says the club met after lunch."
            }
        ],
        2: [
            {
                passage: "Luca saved part of his allowance each week. By the end of two months, he had enough money to buy a football.",
                prompt: "Why did Luca save his allowance?",
                answer: "To buy a football.",
                options: [
                    "To buy a football.",
                    "To lend it to a friend.",
                    "To buy a bicycle.",
                    "To spend it on candy every day."
                ],
                explanation: "The passage says he saved until he had enough for a football."
            },
            {
                passage: "At the science fair, Priya explained how solar panels collect sunlight and turn it into electricity.",
                prompt: "What topic did Priya explain?",
                answer: "How solar panels make electricity.",
                options: [
                    "How rain forms clouds.",
                    "How solar panels make electricity.",
                    "How plants absorb water.",
                    "How magnets attract metal."
                ],
                explanation: "She explained how solar panels collect sunlight and turn it into electricity."
            },
            {
                passage: "The class planned a clean-up day for the park. They brought gloves and bags, then sorted trash into recycling and rubbish bins.",
                prompt: "What did the class do with the trash?",
                answer: "They sorted it into recycling and rubbish bins.",
                options: [
                    "They left it where it was.",
                    "They buried it in the ground.",
                    "They sorted it into recycling and rubbish bins.",
                    "They burned it."
                ],
                explanation: "The final part explains they sorted trash into two bins."
            }
        ],
        3: [
            {
                passage: "During a storm, the lights in Hana's house went out. Her family used flashlights and played word games until the electricity returned.",
                prompt: "What can we infer about Hana's family?",
                answer: "They stayed calm and found a safe activity.",
                options: [
                    "They stayed calm and found a safe activity.",
                    "They ignored the storm warning.",
                    "They left the house alone at night.",
                    "They slept through everything."
                ],
                explanation: "Playing word games with flashlights suggests calm and safe behavior."
            },
            {
                passage: "Mateo practiced violin for twenty minutes daily. At first, he made many mistakes, but soon his notes sounded smooth and confident.",
                prompt: "What is the main idea?",
                answer: "Regular practice helped Mateo improve.",
                options: [
                    "Violin is too difficult to learn.",
                    "Regular practice helped Mateo improve.",
                    "Mateo never made mistakes.",
                    "Shortcuts are better than practice."
                ],
                explanation: "The passage contrasts mistakes at first with improvement after daily practice."
            },
            {
                passage: "For homework, students compared two articles about whales. One focused on migration, while the other explained communication sounds.",
                prompt: "How were the two articles different?",
                answer: "They focused on different whale topics.",
                options: [
                    "They were both about whale food.",
                    "They were written in different languages.",
                    "They focused on different whale topics.",
                    "They had exactly the same information."
                ],
                explanation: "One article was on migration and the other on communication."
            }
        ]
    }
};

Object.assign(moduleTutorials, {
    mathArithmetic: {
        title: "What Is Arithmetic?",
        simple: "Arithmetic is using numbers to add, subtract, multiply, and divide.",
        tip: "Underline important numbers and words like total, left, each, and share."
    },
    mathFractions: {
        title: "What Are Fractions?",
        simple: "Fractions show parts of a whole. The top number is parts taken and the bottom number is total equal parts.",
        tip: "Compare fractions by checking if pieces are the same size first."
    },
    mathGeometry: {
        title: "What Is Geometry?",
        simple: "Geometry helps us understand shapes, angles, and space.",
        tip: "Draw a quick sketch before solving a geometry question."
    },
    scienceLife: {
        title: "What Is Life Science?",
        simple: "Life science studies living things like plants, animals, and humans.",
        tip: "Ask: How does this living thing survive, grow, and reproduce?"
    },
    sciencePhysical: {
        title: "What Is Physical Science?",
        simple: "Physical science studies matter, motion, force, and energy.",
        tip: "Think about pushes, pulls, and changes in energy."
    },
    scienceEarth: {
        title: "What Is Earth Science?",
        simple: "Earth science explores weather, rocks, oceans, and space around Earth.",
        tip: "Look for cycles and patterns like seasons or water cycle steps."
    },
    socialHistory: {
        title: "What Is History?",
        simple: "History helps us learn how people and events changed over time.",
        tip: "Pay attention to dates and put events in order."
    },
    socialGeography: {
        title: "What Is Geography?",
        simple: "Geography studies places, maps, landforms, climate, and how people live in regions.",
        tip: "Use direction words and map symbols carefully."
    },
    socialCivics: {
        title: "What Is Civics?",
        simple: "Civics teaches rights, responsibilities, and how communities are governed.",
        tip: "Ask what rule, role, or responsibility is being tested."
    },
    healthNutrition: {
        title: "What Is Nutrition?",
        simple: "Nutrition is choosing foods and drinks that keep your body healthy.",
        tip: "Build meals with balance: fruits, vegetables, protein, grains, and water."
    },
    healthHygiene: {
        title: "What Is Hygiene?",
        simple: "Hygiene means daily habits that keep your body clean and prevent illness.",
        tip: "Think of routine: wash, brush, clean, cover, and rest."
    },
    healthWellness: {
        title: "What Is Wellness?",
        simple: "Wellness includes physical activity, rest, safety, and healthy choices.",
        tip: "Healthy routines are small actions done every day."
    },
    worldUSCanada: {
        title: "What Is US & Canada Basics?",
        simple: "Learn key facts about the United States and Canada.",
        tip: "Connect each fact to a place, symbol, or government role."
    },
    worldLandmarks: {
        title: "What Are Landmarks & Places?",
        simple: "This topic covers famous places, regions, and physical landmarks in the US and Canada.",
        tip: "Use map knowledge and location clues."
    },
    worldGovernment: {
        title: "What Is Government & Society?",
        simple: "This topic explains how government systems and communities are organized in the US and Canada.",
        tip: "Match each role to what it is responsible for."
    }
});

function buildThreeStagesFromBank(bank) {
    return {
        1: bank.slice(0, 2),
        2: bank.slice(2, 4),
        3: bank.slice(4, 6)
    };
}

const supplementalModuleBanks = {
    mathArithmetic: [
        { prompt: "What is 48 + 27?", answer: "75", options: ["74", "75", "76", "77"], explanation: "Add tens and ones: 48 + 27 = 75." },
        { prompt: "A class has 36 pencils and gives away 9. How many are left?", answer: "27", options: ["25", "26", "27", "28"], explanation: "Subtract: 36 - 9 = 27." },
        { prompt: "What is 7 x 8?", answer: "56", options: ["54", "55", "56", "57"], explanation: "7 groups of 8 equals 56." },
        { prompt: "What is 81 / 9?", answer: "9", options: ["8", "9", "10", "11"], explanation: "81 split into 9 equal groups gives 9." },
        { prompt: "A pack has 6 markers. How many markers in 5 packs?", answer: "30", options: ["25", "28", "30", "36"], explanation: "Multiply 6 by 5 to get 30." },
        { prompt: "Round 467 to the nearest ten.", answer: "470", options: ["460", "465", "470", "500"], explanation: "The ones digit is 7, so round up to 470." }
    ],
    mathFractions: [
        { prompt: "Which fraction is equal to 1/2?", answer: "2/4", options: ["1/3", "2/4", "3/5", "4/5"], explanation: "2/4 simplifies to 1/2." },
        { prompt: "Which is greater?", answer: "3/4", options: ["2/3", "3/4", "4/6", "5/8"], explanation: "3/4 is 0.75, greater than the others listed." },
        { prompt: "What is 1/4 + 1/4?", answer: "1/2", options: ["1/4", "2/4", "1/2", "3/4"], explanation: "Two quarters make one half." },
        { prompt: "If a pizza is cut into 8 equal slices and you eat 3, what fraction is eaten?", answer: "3/8", options: ["3/6", "3/8", "5/8", "8/3"], explanation: "You ate 3 out of 8 equal slices." },
        { prompt: "Which fraction is the smallest?", answer: "1/6", options: ["1/2", "1/3", "1/4", "1/6"], explanation: "With the same numerator, larger denominator means smaller value." },
        { prompt: "What is 2/5 of 20?", answer: "8", options: ["6", "8", "10", "12"], explanation: "One-fifth of 20 is 4, so two-fifths is 8." }
    ],
    mathGeometry: [
        { prompt: "How many sides does a hexagon have?", answer: "6", options: ["5", "6", "7", "8"], explanation: "Hexagon means six sides." },
        { prompt: "A right angle measures:", answer: "90 degrees", options: ["45 degrees", "90 degrees", "120 degrees", "180 degrees"], explanation: "A right angle is exactly 90 degrees." },
        { prompt: "Perimeter of a rectangle with length 8 and width 3 is:", answer: "22", options: ["11", "16", "22", "24"], explanation: "Perimeter = 2 x (8 + 3) = 22." },
        { prompt: "Area of a rectangle with length 7 and width 4 is:", answer: "28", options: ["11", "18", "24", "28"], explanation: "Area = length x width = 28." },
        { prompt: "How many vertices does a triangle have?", answer: "3", options: ["2", "3", "4", "6"], explanation: "A triangle has three corners (vertices)." },
        { prompt: "A shape with all points the same distance from the center is a:", answer: "Circle", options: ["Square", "Rectangle", "Triangle", "Circle"], explanation: "That is the definition of a circle." }
    ],
    scienceLife: [
        { prompt: "Which process do plants use to make food using sunlight?", answer: "Photosynthesis", options: ["Respiration", "Digestion", "Photosynthesis", "Evaporation"], explanation: "Plants make food by photosynthesis." },
        { prompt: "Which organ pumps blood around the body?", answer: "Heart", options: ["Lungs", "Heart", "Brain", "Kidney"], explanation: "The heart pumps blood." },
        { prompt: "A habitat is:", answer: "The natural home of a living thing", options: ["A type of weather", "The natural home of a living thing", "A body part", "A rock layer"], explanation: "Habitat means where an organism lives." },
        { prompt: "Which is a producer in a food chain?", answer: "Grass", options: ["Fox", "Eagle", "Grass", "Mushroom"], explanation: "Plants are producers because they make their own food." },
        { prompt: "The stage when a caterpillar changes into a butterfly is called:", answer: "Metamorphosis", options: ["Migration", "Metamorphosis", "Hibernate", "Pollination"], explanation: "That life-cycle change is metamorphosis." },
        { prompt: "Which gas do humans need to breathe in?", answer: "Oxygen", options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Helium"], explanation: "Humans breathe in oxygen." }
    ],
    sciencePhysical: [
        { prompt: "A push or a pull is called:", answer: "Force", options: ["Mass", "Force", "Volume", "Density"], explanation: "Force means push or pull." },
        { prompt: "Which state of matter has a fixed shape and fixed volume?", answer: "Solid", options: ["Solid", "Liquid", "Gas", "Plasma"], explanation: "Solids keep both shape and volume." },
        { prompt: "What type of energy is stored in food?", answer: "Chemical energy", options: ["Sound energy", "Chemical energy", "Heat energy", "Light energy"], explanation: "Food stores chemical energy." },
        { prompt: "When ice melts, it changes from:", answer: "Solid to liquid", options: ["Liquid to gas", "Gas to liquid", "Solid to liquid", "Solid to gas"], explanation: "Melting turns a solid into a liquid." },
        { prompt: "Which material is a good conductor of electricity?", answer: "Copper", options: ["Plastic", "Rubber", "Wood", "Copper"], explanation: "Metals like copper conduct electricity well." },
        { prompt: "If an object speeds up, its motion has changed in:", answer: "Speed", options: ["Color", "Mass", "Speed", "Temperature"], explanation: "Speed is how fast motion happens." }
    ],
    scienceEarth: [
        { prompt: "What process changes water vapor into clouds?", answer: "Condensation", options: ["Evaporation", "Condensation", "Precipitation", "Collection"], explanation: "Water vapor cools and condenses into cloud droplets." },
        { prompt: "Which layer of Earth is the outer solid part?", answer: "Crust", options: ["Core", "Mantle", "Crust", "Inner sphere"], explanation: "The crust is Earth's outer rocky layer." },
        { prompt: "A tool that measures temperature is a:", answer: "Thermometer", options: ["Barometer", "Thermometer", "Compass", "Scale"], explanation: "Thermometers measure temperature." },
        { prompt: "Which planet is known as the Red Planet?", answer: "Mars", options: ["Venus", "Jupiter", "Mars", "Mercury"], explanation: "Mars appears reddish because of iron-rich dust." },
        { prompt: "Rocks formed from cooled lava are called:", answer: "Igneous rocks", options: ["Sedimentary rocks", "Metamorphic rocks", "Igneous rocks", "Fossil rocks"], explanation: "Igneous rocks form when magma or lava cools." },
        { prompt: "What causes day and night on Earth?", answer: "Earth's rotation", options: ["Earth's rotation", "Earth's orbit only", "The Moon's light", "Cloud movement"], explanation: "Earth rotating on its axis causes day and night." }
    ],
    socialHistory: [
        { prompt: "A timeline is used to show:", answer: "Events in time order", options: ["Map directions", "Events in time order", "Math equations", "Weather data"], explanation: "Timelines arrange events from earlier to later." },
        { prompt: "Who was the first President of the United States?", answer: "George Washington", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], explanation: "George Washington was the first U.S. president." },
        { prompt: "In history, primary sources are:", answer: "Original materials from the time", options: ["Movies made later", "Original materials from the time", "Only textbooks", "Only websites"], explanation: "Primary sources come directly from the event period." },
        { prompt: "What is remembered on Canada Day?", answer: "The formation of Canada as a country", options: ["First snowfall", "The formation of Canada as a country", "A world war ending", "A royal birthday"], explanation: "Canada Day marks Confederation on July 1, 1867." },
        { prompt: "A major reason to study history is to:", answer: "Understand how the past shapes today", options: ["Memorize random dates only", "Understand how the past shapes today", "Avoid reading", "Predict exact future events"], explanation: "History helps explain present systems and choices." },
        { prompt: "Which term means people moving from one place to another to live?", answer: "Migration", options: ["Revolution", "Migration", "Rotation", "Navigation"], explanation: "Migration is movement of people over time." }
    ],
    socialGeography: [
        { prompt: "Which direction is opposite of east?", answer: "West", options: ["North", "South", "West", "Up"], explanation: "West is opposite east." },
        { prompt: "Lines that run east-west on a globe are called:", answer: "Latitude lines", options: ["Longitude lines", "Latitude lines", "Border lines", "Compass lines"], explanation: "Latitude runs parallel to the equator." },
        { prompt: "A narrow body of land connecting two larger lands is an:", answer: "Isthmus", options: ["Island", "Isthmus", "Peninsula", "Valley"], explanation: "An isthmus connects land masses." },
        { prompt: "Which map helps show rainfall and temperature regions?", answer: "Climate map", options: ["Road map", "Political map", "Climate map", "Topographic map"], explanation: "Climate maps display weather pattern regions." },
        { prompt: "A peninsula is land that is:", answer: "Surrounded by water on three sides", options: ["Completely underwater", "Surrounded by water on all sides", "Surrounded by water on three sides", "Flat with no water nearby"], explanation: "Peninsulas connect to mainland but have water on three sides." },
        { prompt: "What does a map legend explain?", answer: "What symbols and colors mean", options: ["The age of the map", "What symbols and colors mean", "Who owns the map", "Only city populations"], explanation: "Legends decode symbols used on maps." }
    ],
    socialCivics: [
        { prompt: "A citizen's responsibility is to:", answer: "Follow laws and respect others", options: ["Ignore community rules", "Follow laws and respect others", "Vote many times", "Make all laws alone"], explanation: "Citizens should obey laws and respect others' rights." },
        { prompt: "Why do communities have rules?", answer: "To keep people safe and fair", options: ["To confuse people", "To keep people safe and fair", "To stop all fun", "To avoid teamwork"], explanation: "Rules help communities work safely and fairly." },
        { prompt: "In a democracy, leaders are often chosen by:", answer: "Voting", options: ["Random guessing", "Voting", "Coin tosses", "No one"], explanation: "Voting allows citizens to choose leaders." },
        { prompt: "Which branch in the U.S. government makes laws?", answer: "Legislative branch", options: ["Executive branch", "Judicial branch", "Legislative branch", "State branch"], explanation: "The legislative branch creates laws." },
        { prompt: "Municipal government mainly serves:", answer: "Local communities and cities", options: ["Only global issues", "Local communities and cities", "Only foreign countries", "Only schools"], explanation: "Municipal governments handle local services." },
        { prompt: "A good example of active citizenship is:", answer: "Helping improve your community", options: ["Littering in parks", "Ignoring safety signs", "Helping improve your community", "Damaging public property"], explanation: "Citizenship includes positive participation." }
    ],
    healthNutrition: [
        { prompt: "Which meal is most balanced?", answer: "Grilled chicken, rice, vegetables, and water", options: ["Soda and candy", "Only chips", "Grilled chicken, rice, vegetables, and water", "Only fries"], explanation: "Balanced meals include multiple food groups and water." },
        { prompt: "Why is drinking water important?", answer: "It helps body systems work properly", options: ["It replaces sleep", "It helps body systems work properly", "It weakens muscles", "It is not important"], explanation: "Hydration supports digestion, circulation, and temperature control." },
        { prompt: "Which food is a healthy protein source?", answer: "Beans", options: ["Beans", "Candy", "Soda", "Ice cream"], explanation: "Beans provide plant protein and fiber." },
        { prompt: "Whole grains usually provide more:", answer: "Fiber", options: ["Sugar", "Fiber", "Artificial color", "Salt only"], explanation: "Whole grains are rich in fiber." },
        { prompt: "Breakfast helps students by:", answer: "Providing energy and focus", options: ["Making them more tired", "Providing energy and focus", "Replacing all other meals", "Removing need for water"], explanation: "A healthy breakfast supports concentration and energy." },
        { prompt: "Which snack is healthiest?", answer: "Apple slices with yogurt", options: ["Apple slices with yogurt", "Candy bar and soda", "Only fries", "Sugary drink"], explanation: "Fruit with protein/dairy is a stronger snack choice." }
    ],
    healthHygiene: [
        { prompt: "How long should you wash your hands with soap?", answer: "About 20 seconds", options: ["3 seconds", "About 20 seconds", "1 minute only with water", "No need before meals"], explanation: "Around 20 seconds removes many germs effectively." },
        { prompt: "You should brush your teeth at least:", answer: "Twice a day", options: ["Once a week", "Twice a day", "Only after candy", "Never"], explanation: "Brushing twice daily helps prevent cavities." },
        { prompt: "Covering a cough or sneeze helps:", answer: "Reduce spread of germs", options: ["Increase germs", "Reduce spread of germs", "Stop weather change", "Improve eyesight"], explanation: "Covering coughs and sneezes protects others." },
        { prompt: "When should you wash hands?", answer: "Before eating and after restroom use", options: ["Only at night", "Before eating and after restroom use", "Only when told", "Never at school"], explanation: "These are key hygiene moments." },
        { prompt: "Clean clothes and bathing regularly help with:", answer: "Body cleanliness and health", options: ["Less sleep", "Body cleanliness and health", "More germs", "None"], explanation: "Regular hygiene supports health and confidence." },
        { prompt: "To avoid spreading illness, it is best to:", answer: "Stay home when very sick and rest", options: ["Share used tissues", "Stay home when very sick and rest", "Touch face often", "Skip handwashing"], explanation: "Rest and staying home when very sick can reduce spread." }
    ],
    healthWellness: [
        { prompt: "A healthy amount of daily physical activity for children is about:", answer: "60 minutes", options: ["5 minutes", "20 minutes", "60 minutes", "3 hours of only screen games"], explanation: "Children benefit from around 60 minutes of activity daily." },
        { prompt: "Why is sleep important for children?", answer: "It supports growth, mood, and learning", options: ["It is not important", "It supports growth, mood, and learning", "It replaces breakfast", "It makes memory weaker"], explanation: "Sleep supports brain and body development." },
        { prompt: "When crossing the street, you should:", answer: "Stop, look both ways, and cross safely", options: ["Run without looking", "Stop, look both ways, and cross safely", "Use phone while crossing", "Cross between cars"], explanation: "Street safety starts with careful checking." },
        { prompt: "Too much screen time without breaks can:", answer: "Cause eye strain and less movement", options: ["Always improve posture", "Cause eye strain and less movement", "Replace outdoor play", "Strengthen sleep quality"], explanation: "Long screen sessions can reduce movement and strain eyes." },
        { prompt: "A healthy routine includes:", answer: "Exercise, sleep, balanced meals, and hydration", options: ["Skip meals", "Only gaming", "Exercise, sleep, balanced meals, and hydration", "No outdoor time"], explanation: "Wellness is built from balanced daily habits." },
        { prompt: "If you feel unsafe, the best action is to:", answer: "Tell a trusted adult immediately", options: ["Keep it secret", "Tell a trusted adult immediately", "Ignore it", "Post online first"], explanation: "Trusted adults can help keep you safe quickly." }
    ],
    worldUSCanada: [
        { prompt: "What is the capital city of Canada?", answer: "Ottawa", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], explanation: "Ottawa is Canada's capital." },
        { prompt: "What is the capital city of the United States?", answer: "Washington, D.C.", options: ["New York", "Los Angeles", "Washington, D.C.", "Chicago"], explanation: "Washington, D.C. is the U.S. capital." },
        { prompt: "How many stars are on the U.S. flag?", answer: "50", options: ["13", "48", "50", "52"], explanation: "There are 50 stars, one for each state." },
        { prompt: "Which leaf is a national symbol on Canada's flag?", answer: "Maple leaf", options: ["Oak leaf", "Maple leaf", "Pine leaf", "Cedar leaf"], explanation: "Canada's flag features a red maple leaf." },
        { prompt: "Canada is made up of provinces and:", answer: "Territories", options: ["Counties", "Districts", "Territories", "Republics"], explanation: "Canada has provinces and territories." },
        { prompt: "The United States is made up of:", answer: "50 states", options: ["10 states", "25 states", "50 states", "60 states"], explanation: "The U.S. has 50 states." }
    ],
    worldLandmarks: [
        { prompt: "Which waterfall is on the border of the U.S. and Canada?", answer: "Niagara Falls", options: ["Angel Falls", "Victoria Falls", "Niagara Falls", "Yosemite Falls"], explanation: "Niagara Falls sits on the U.S.-Canada border region." },
        { prompt: "Which city is known as one of Canada's largest cities in Ontario?", answer: "Toronto", options: ["Calgary", "Toronto", "Halifax", "Quebec City"], explanation: "Toronto is a major city in Ontario." },
        { prompt: "The Rocky Mountains are found in western:", answer: "North America", options: ["Africa", "Europe", "North America", "Australia"], explanation: "The Rockies stretch through western North America." },
        { prompt: "Which U.S. statue is a symbol of freedom in New York Harbor?", answer: "Statue of Liberty", options: ["Lincoln Memorial", "Statue of Liberty", "Mount Rushmore", "Space Needle"], explanation: "The Statue of Liberty stands in New York Harbor." },
        { prompt: "Which Canadian province is mostly French-speaking?", answer: "Quebec", options: ["Alberta", "Ontario", "Quebec", "Manitoba"], explanation: "Quebec is primarily French-speaking." },
        { prompt: "Which ocean is on Canada's east coast?", answer: "Atlantic Ocean", options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean only"], explanation: "Canada's east coast borders the Atlantic Ocean." }
    ],
    worldGovernment: [
        { prompt: "In the U.S., the president leads the:", answer: "Executive branch", options: ["Legislative branch", "Judicial branch", "Executive branch", "Provincial branch"], explanation: "The U.S. president is head of the executive branch." },
        { prompt: "In Canada, the head of government is the:", answer: "Prime Minister", options: ["Governor", "Prime Minister", "Chief Justice", "Speaker only"], explanation: "Canada's head of government is the Prime Minister." },
        { prompt: "Voting is important because it lets people:", answer: "Choose representatives", options: ["Skip laws", "Choose representatives", "Control courts directly", "Ignore government"], explanation: "Voting allows citizens to choose leaders." },
        { prompt: "Laws are made by elected representatives in:", answer: "Legislatures or parliaments", options: ["Sports teams", "Libraries", "Legislatures or parliaments", "Weather stations"], explanation: "Law-making happens in legislatures/parliaments." },
        { prompt: "A constitution is:", answer: "A framework of important rules for government", options: ["A weather report", "A school timetable", "A framework of important rules for government", "A city map"], explanation: "Constitutions define key government principles." },
        { prompt: "A good citizen in both countries should:", answer: "Respect laws and community rights", options: ["Ignore all rules", "Respect laws and community rights", "Vote many times", "Only think of self"], explanation: "Citizenship includes respect and responsibility." }
    ]
};

Object.keys(supplementalModuleBanks).forEach((moduleId) => {
    moduleData[moduleId] = buildThreeStagesFromBank(supplementalModuleBanks[moduleId]);
});

const extraSpellingWords = {
    1: [
        { word: "meter", accepted: ["meter", "metre"], variantNote: "US: meter, UK: metre", hint: "A unit used to measure length.", image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=700" },
        { word: "gray", accepted: ["gray", "grey"], variantNote: "US: gray, UK: grey", hint: "A color between black and white.", image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=700" },
        { word: "jewelry", accepted: ["jewelry", "jewellery"], variantNote: "US: jewelry, UK: jewellery", hint: "Rings, necklaces, and bracelets.", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=700" },
        { word: "program", accepted: ["program", "programme"], variantNote: "US: program, UK: programme", hint: "A plan of events or a TV show.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700" }
    ],
    2: [
        { word: "catalog", accepted: ["catalog", "catalogue"], variantNote: "US: catalog, UK: catalogue", hint: "A list of items for sale.", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=700" },
        { word: "license", accepted: ["license", "licence"], variantNote: "US: license, UK noun: licence", hint: "An official paper giving permission.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700" },
        { word: "plow", accepted: ["plow", "plough"], variantNote: "US: plow, UK: plough", hint: "A farm tool used to turn soil.", image: "https://images.unsplash.com/photo-1592878940526-0214b0f374f6?w=700" },
        { word: "rumor", accepted: ["rumor", "rumour"], variantNote: "US: rumor, UK: rumour", hint: "A story people share that may not be true.", image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=700" }
    ],
    3: [
        { word: "traveler", accepted: ["traveler", "traveller"], variantNote: "US: traveler, UK: traveller", hint: "A person on a trip.", image: "https://images.unsplash.com/photo-1502920917128-1aa500764b5c?w=700" },
        { word: "enroll", accepted: ["enroll", "enrol"], variantNote: "US: enroll, UK: enrol", hint: "To officially sign up for a class.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700" },
        { word: "canceled", accepted: ["canceled", "cancelled"], variantNote: "US: canceled, UK: cancelled", hint: "Something planned but then stopped.", image: "https://images.unsplash.com/photo-1533560904424-a0c61dc30667?w=700" },
        { word: "modeling", accepted: ["modeling", "modelling"], variantNote: "US: modeling, UK: modelling", hint: "Making a model shape or design.", image: "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?w=700" }
    ]
};

const appState = {
    activeProfileName: "Guest",
    activeSubject: "english",
    activeModule: "spelling",
    currentQuestion: null,
    usedQuestionKeys: {},
    roundAnswered: 0,
    roundCorrect: 0,
    questionTriesLeft: SPELLING_MAX_TRIES,
    teacherChatHistory: [],
    progress: {},
    totalScore: 0,
    stars: 0
};

let savedProfiles = {};

const totalScoreEl = document.getElementById("total-score");
const totalStarsEl = document.getElementById("total-stars");
const currentModuleEl = document.getElementById("current-module");
const currentStageEl = document.getElementById("current-stage");
const subjectNavEl = document.getElementById("subject-nav");
const moduleNavEl = document.getElementById("module-nav");
const lessonHeaderEl = document.getElementById("lesson-header");
const lessonContentEl = document.getElementById("lesson-content");
const lessonFeedbackEl = document.getElementById("lesson-feedback");
const reportGridEl = document.getElementById("report-grid");
const mistakeListEl = document.getElementById("mistake-list");
const printReportBtn = document.getElementById("print-report");
const resetProgressBtn = document.getElementById("reset-progress");
const teacherQuestionEl = document.getElementById("teacher-question");
const askTeacherBtn = document.getElementById("ask-teacher");
const teacherAnswerEl = document.getElementById("teacher-answer");
const startListeningBtn = document.getElementById("start-listening");
const stopListeningBtn = document.getElementById("stop-listening");
const speakAnswerBtn = document.getElementById("speak-answer");
const teacherAutoSpeakEl = document.getElementById("teacher-auto-speak");
const teacherVoiceTypeEl = document.getElementById("teacher-voice-type");
const teacherVoiceNameEl = document.getElementById("teacher-voice-name");
const voiceStatusEl = document.getElementById("voice-status");
const aiStatusEl = document.getElementById("ai-status");
const childNameEl = document.getElementById("child-name");
const loadProfileBtn = document.getElementById("load-profile");
const guestProfileBtn = document.getElementById("guest-profile");
const profileStatusEl = document.getElementById("profile-status");
const knownNamesEl = document.getElementById("known-names");

const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
let teacherRecognition = null;
let teacherListening = false;
let lastTeacherAnswer = "";
let availableTeacherVoices = [];

initializeProgress();
appendExtraSpellingWords();
expandQuestionBanks();
loadProfilesStore();
initializeAiTeacherMode();
bindGlobalEvents();
setupTeacherVoice();
hydrateActiveProfile();
renderKnownProfileNames();
renderSubjectNav();
renderModuleNav();
switchModule(appState.activeModule);
updateDashboard();
renderReport();

function initializeProgress() {
    MODULES.forEach((module) => {
        appState.progress[module.id] = {
            attempted: 0,
            correct: 0,
            score: 0,
            stage: 1,
            mistakes: []
        };
    });
}

function loadProfilesStore() {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) {
        migrateLegacyProgressIfNeeded();
        return;
    }

    try {
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") {
            savedProfiles = {};
            return;
        }
        savedProfiles = parsed;
    } catch (error) {
        savedProfiles = {};
        console.warn("Failed to parse profile storage", error);
    }
}

function migrateLegacyProgressIfNeeded() {
    const raw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return;

    try {
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") return;

        const key = normalizeProfileKey("Guest");
        savedProfiles[key] = {
            name: "Guest",
            totalScore: Number(parsed.totalScore) || 0,
            stars: Number(parsed.stars) || 0,
            activeModule: parsed.activeModule || "spelling",
            progress: parsed.progress || {},
            updatedAt: new Date().toISOString()
        };
        persistProfilesStore();
    } catch (error) {
        console.warn("Failed to migrate legacy progress", error);
    }
}

function saveState() {
    const profileName = appState.activeProfileName || "Guest";
    const key = normalizeProfileKey(profileName);

    savedProfiles[key] = {
        name: profileName,
        activeSubject: appState.activeSubject,
        totalScore: appState.totalScore,
        stars: appState.stars,
        activeModule: appState.activeModule,
        progress: deepClone(appState.progress),
        updatedAt: new Date().toISOString()
    };

    persistProfilesStore();
    rememberActiveProfile(profileName);
    renderKnownProfileNames();
}

function persistProfilesStore() {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(savedProfiles));
}

function bindGlobalEvents() {
    printReportBtn.addEventListener("click", () => window.print());

    loadProfileBtn.addEventListener("click", () => {
        const entered = childNameEl.value.trim();
        if (!entered) {
            applyProfile("Guest");
            return;
        }
        applyProfile(entered);
    });

    guestProfileBtn.addEventListener("click", () => {
        applyProfile("Guest");
    });

    childNameEl.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            loadProfileBtn.click();
        }
    });

    askTeacherBtn.addEventListener("click", answerTeacherQuestionFromInput);
    teacherVoiceTypeEl.addEventListener("change", () => {
        chooseDefaultVoiceForType();
    });
    teacherVoiceNameEl.addEventListener("change", () => {
        if (teacherVoiceNameEl.value === "auto") {
            chooseDefaultVoiceForType();
            return;
        }
        updateVoiceStatus(`Teacher voice set to: ${teacherVoiceNameEl.value}`);
    });
    startListeningBtn.addEventListener("click", startTeacherListening);
    stopListeningBtn.addEventListener("click", stopTeacherListening);
    speakAnswerBtn.addEventListener("click", () => {
        if (!lastTeacherAnswer) {
            updateVoiceStatus("Ask a question first so teacher has a reply to read.", "error");
            return;
        }
        speakTeacherReply(lastTeacherAnswer);
    });

    teacherQuestionEl.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            answerTeacherQuestionFromInput();
        }
    });

    resetProgressBtn.addEventListener("click", () => {
        const confirmed = window.confirm(`Reset progress for ${appState.activeProfileName}? This cannot be undone.`);
        if (!confirmed) return;

        resetCurrentProfileProgress();
    });
}

function initializeAiTeacherMode() {
    clearLegacyAiTeacherSettings();
    updateAiStatusForMode();
}

function clearLegacyAiTeacherSettings() {
    try {
        localStorage.removeItem(AI_TEACHER_SETTINGS_KEY);
    } catch (error) {
        console.warn("Unable to clear legacy AI teacher settings", error);
    }
}

function getAiTeacherSettings() {
    return { ...AI_TEACHER_SERVER_CONFIG };
}

function updateAiStatusForMode() {
    const settings = getAiTeacherSettings();
    if (!settings.enabled) {
        updateAiStatus("AI Teacher is off. Local smart tutor is active.");
        return;
    }

    if (!settings.endpoint) {
        updateAiStatus("AI Teacher is on, but backend endpoint is missing. Local smart tutor is active.", "error");
        return;
    }

    updateAiStatus(`AI Teacher is automatic via server endpoint. Model: ${settings.model}`);
}

function updateAiStatus(message, mode = "") {
    if (!aiStatusEl) return;
    aiStatusEl.textContent = message;
    aiStatusEl.className = "voice-status";
    if (mode) {
        aiStatusEl.classList.add(mode);
    }
}

function setupTeacherVoice() {
    setupTeacherVoiceOutput();

    if (!SpeechRecognitionAPI) {
        startListeningBtn.disabled = true;
        stopListeningBtn.disabled = true;
        updateVoiceStatus("Mic input is not supported in this browser. You can still type questions or listen to replies.", "error");
        return;
    }

    teacherRecognition = new SpeechRecognitionAPI();
    teacherRecognition.lang = "en-US";
    teacherRecognition.interimResults = true;
    teacherRecognition.continuous = false;

    teacherRecognition.onstart = () => {
        teacherListening = true;
        updateVoiceStatus("Listening... ask your question now.", "listening");
    };

    teacherRecognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i += 1) {
            transcript += event.results[i][0].transcript;
        }
        teacherQuestionEl.value = transcript.trim();

        const latest = event.results[event.results.length - 1];
        if (latest && latest.isFinal) {
            answerTeacherQuestionFromInput();
        }
    };

    teacherRecognition.onerror = (event) => {
        teacherListening = false;
        updateVoiceStatus(`Mic error: ${event.error}. You can type your question instead.`, "error");
    };

    teacherRecognition.onend = () => {
        teacherListening = false;
        updateVoiceStatus("Mic stopped. Click Start Mic to ask another question.");
    };
}

function setupTeacherVoiceOutput() {
    if (!("speechSynthesis" in window)) {
        teacherAutoSpeakEl.checked = false;
        teacherAutoSpeakEl.disabled = true;
        speakAnswerBtn.disabled = true;
        teacherVoiceTypeEl.disabled = true;
        teacherVoiceNameEl.disabled = true;
        updateVoiceStatus("Voice output is not supported in this browser.", "error");
        return;
    }

    loadTeacherVoices();
    if (typeof speechSynthesis.onvoiceschanged !== "undefined") {
        speechSynthesis.onvoiceschanged = () => {
            loadTeacherVoices();
        };
    }
}

function loadTeacherVoices() {
    const voices = speechSynthesis.getVoices();
    availableTeacherVoices = voices.filter((voice) => /en-/i.test(voice.lang));

    const currentManual = teacherVoiceNameEl.value;
    const options = ['<option value="auto">Auto choose</option>'];
    availableTeacherVoices.forEach((voice) => {
        const label = `${escapeHtml(voice.name)} (${escapeHtml(voice.lang)})`;
        options.push(`<option value="${escapeHtml(voice.name)}">${label}</option>`);
    });
    teacherVoiceNameEl.innerHTML = options.join("");

    if (currentManual && currentManual !== "auto") {
        const exists = availableTeacherVoices.some((v) => v.name === currentManual);
        teacherVoiceNameEl.value = exists ? currentManual : "auto";
    }

    chooseDefaultVoiceForType(true);
}

function chooseDefaultVoiceForType(preserveManual = false) {
    if (!teacherVoiceNameEl || !teacherVoiceTypeEl) return;

    if (preserveManual && teacherVoiceNameEl.value && teacherVoiceNameEl.value !== "auto") {
        updateVoiceStatus(`Teacher voice set to: ${teacherVoiceNameEl.value}`);
        return;
    }

    const preferredType = teacherVoiceTypeEl.value;
    const preferred = pickTeacherVoice(availableTeacherVoices, preferredType, true);

    if (preferred) {
        teacherVoiceNameEl.value = preferred.name;
        updateVoiceStatus(`Teacher voice set to: ${preferred.name} (${preferredType})`);
        return;
    }

    teacherVoiceNameEl.value = "auto";
    updateVoiceStatus(`No clear ${preferredType} voice found. Using best available English voice.`);
}

function startTeacherListening() {
    if (!teacherRecognition) {
        updateVoiceStatus("Mic input is unavailable. Please type your question.", "error");
        return;
    }
    if (teacherListening) return;

    try {
        teacherQuestionEl.value = "";
        teacherRecognition.start();
    } catch (error) {
        updateVoiceStatus("Unable to start mic. Please allow microphone permission.", "error");
    }
}

function stopTeacherListening() {
    if (!teacherRecognition || !teacherListening) return;
    teacherRecognition.stop();
}

function updateVoiceStatus(message, mode = "") {
    voiceStatusEl.textContent = message;
    voiceStatusEl.className = "voice-status";
    if (mode) {
        voiceStatusEl.classList.add(mode);
    }
}

function hydrateActiveProfile() {
    const fromSession = sessionStorage.getItem(SESSION_PROFILE_KEY);
    const fromCookie = getCookie(COOKIE_PROFILE_KEY);
    const preferredName = (fromSession || fromCookie || "Guest").trim();
    applyProfile(preferredName, true);
}

function applyProfile(name, isStartup = false) {
    const cleanedName = sanitizeDisplayName(name);
    const key = normalizeProfileKey(cleanedName);
    const existing = savedProfiles[key];

    appState.activeProfileName = cleanedName;
    childNameEl.value = cleanedName;

    if (existing) {
        loadProfileIntoState(existing);
    } else {
        resetCurrentRuntimeProgress();
        appState.activeSubject = "english";
        appState.activeModule = DEFAULT_MODULE_ID;
    }

    rememberActiveProfile(cleanedName);
    updateProfileStatus(existing ? "Loaded saved progress." : "New profile created.");

    if (!isStartup) {
        renderModuleNav();
        switchModule(appState.activeModule);
        updateDashboard();
        renderReport();
        saveState();
    }
}

function loadProfileIntoState(profile) {
    appState.totalScore = Number(profile.totalScore) || 0;
    appState.stars = Number(profile.stars) || 0;
    appState.activeModule = MODULES.some((m) => m.id === profile.activeModule) ? profile.activeModule : DEFAULT_MODULE_ID;
    appState.activeSubject = SUBJECTS.some((s) => s.id === profile.activeSubject)
        ? profile.activeSubject
        : getSubjectByModule(appState.activeModule);

    resetCurrentRuntimeProgress();
    if (profile.progress && typeof profile.progress === "object") {
        MODULES.forEach((module) => {
            const source = profile.progress[module.id];
            if (!source) return;

            appState.progress[module.id] = {
                attempted: Number(source.attempted) || 0,
                correct: Number(source.correct) || 0,
                score: Number(source.score) || 0,
                stage: clampStage(Number(source.stage) || 1),
                mistakes: Array.isArray(source.mistakes) ? source.mistakes.slice(-30) : []
            };
        });
    }
}

function resetCurrentProfileProgress() {
    resetCurrentRuntimeProgress();
    appState.totalScore = 0;
    appState.stars = 0;
    appState.activeSubject = "english";
    appState.activeModule = DEFAULT_MODULE_ID;

    const key = normalizeProfileKey(appState.activeProfileName);
    savedProfiles[key] = {
        name: appState.activeProfileName,
        activeSubject: appState.activeSubject,
        totalScore: 0,
        stars: 0,
        activeModule: DEFAULT_MODULE_ID,
        progress: deepClone(appState.progress),
        updatedAt: new Date().toISOString()
    };

    persistProfilesStore();
    updateProfileStatus("Progress reset for this player.");
    renderSubjectNav();
    renderModuleNav();
    switchModule(DEFAULT_MODULE_ID);
    updateDashboard();
    renderReport();
}

function resetCurrentRuntimeProgress() {
    initializeProgress();
    appState.roundAnswered = 0;
    appState.roundCorrect = 0;
    appState.currentQuestion = null;
    appState.questionTriesLeft = SPELLING_MAX_TRIES;
    appState.teacherChatHistory = [];
    appState.usedQuestionKeys = {};
}

function renderKnownProfileNames() {
    const profiles = Object.values(savedProfiles);
    knownNamesEl.innerHTML = profiles.map((profile) => `<option value="${escapeHtml(profile.name)}"></option>`).join("");
}

function updateProfileStatus(message) {
    profileStatusEl.textContent = `Current player: ${appState.activeProfileName}. ${message}`;
}

function rememberActiveProfile(name) {
    sessionStorage.setItem(SESSION_PROFILE_KEY, name);
    setCookie(COOKIE_PROFILE_KEY, name, 45);
}

function sanitizeDisplayName(name) {
    const trimmed = String(name || "").trim().replace(/\s+/g, " ");
    if (!trimmed) return "Guest";
    return trimmed.slice(0, 24);
}

function normalizeProfileKey(name) {
    return sanitizeDisplayName(name).toLowerCase();
}

function deepClone(value) {
    return JSON.parse(JSON.stringify(value));
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
}

function getCookie(name) {
    const prefix = `${name}=`;
    const parts = document.cookie.split(";");
    for (let i = 0; i < parts.length; i += 1) {
        const c = parts[i].trim();
        if (c.startsWith(prefix)) {
            return decodeURIComponent(c.substring(prefix.length));
        }
    }
    return "";
}

function renderModuleNav() {
    moduleNavEl.innerHTML = "";

    const visibleModules = getModulesForSubject(appState.activeSubject);

    visibleModules.forEach((module) => {
        const progress = appState.progress[module.id];
        const btn = document.createElement("button");
        btn.className = `module-btn${appState.activeModule === module.id ? " active" : ""}`;
        btn.innerHTML = `<strong>${module.title}</strong><br><small>Stage ${progress.stage}</small>`;
        btn.addEventListener("click", () => switchModule(module.id));
        moduleNavEl.appendChild(btn);
    });
}

function renderSubjectNav() {
    if (!subjectNavEl) return;
    subjectNavEl.innerHTML = "";

    SUBJECTS.forEach((subject) => {
        const btn = document.createElement("button");
        btn.className = `subject-btn${appState.activeSubject === subject.id ? " active" : ""}`;
        btn.type = "button";
        btn.textContent = subject.title;
        btn.addEventListener("click", () => switchSubject(subject.id));
        subjectNavEl.appendChild(btn);
    });
}

function switchSubject(subjectId) {
    if (appState.activeSubject === subjectId && getSubjectByModule(appState.activeModule) === subjectId) {
        return;
    }

    const subjectModules = getModulesForSubject(subjectId);
    if (!subjectModules.length) return;

    appState.activeSubject = subjectId;
    switchModule(subjectModules[0].id);
}

function getModulesForSubject(subjectId) {
    return MODULES.filter((module) => module.subject === subjectId);
}

function getSubjectByModule(moduleId) {
    const module = MODULES.find((item) => item.id === moduleId);
    return module ? module.subject : "english";
}

function switchModule(moduleId) {
    appState.activeSubject = getSubjectByModule(moduleId);
    appState.activeModule = moduleId;
    appState.roundAnswered = 0;
    appState.roundCorrect = 0;
    appState.teacherChatHistory = [];
    appState.usedQuestionKeys[moduleId] = [];

    const module = MODULES.find((m) => m.id === moduleId);
    const tutorial = moduleTutorials[moduleId];
    lessonHeaderEl.innerHTML = `
        <h2>${module.title}</h2>
        <p class="lesson-meta">${module.description}</p>
        <p class="lesson-meta">Calm mode is active. No timer, just learning at your pace.</p>
        <div class="tutorial-card">
            <h3>${tutorial.title}</h3>
            <p>${tutorial.simple}</p>
            <p><strong>Easy tip:</strong> ${tutorial.tip}</p>
            <div class="tutorial-actions">
                <button id="replay-tutorial" class="small-btn" type="button">Replay Tutorial</button>
                <button id="hear-tutorial" class="small-btn" type="button">Hear Tutorial</button>
                <button id="restart-section" class="small-btn" type="button">Replay This Section</button>
            </div>
        </div>
    `;

    lessonFeedbackEl.className = "lesson-feedback";
    lessonFeedbackEl.textContent = "Select an answer and get instant feedback with explanation.";

    renderSubjectNav();
    renderModuleNav();
    updateDashboard();
    nextQuestion();

    const replayBtn = document.getElementById("replay-tutorial");
    const hearBtn = document.getElementById("hear-tutorial");
    const restartSectionBtn = document.getElementById("restart-section");

    replayBtn.addEventListener("click", () => {
        showTutorialReminder(moduleId);
    });

    hearBtn.addEventListener("click", () => {
        speakText(`${tutorial.simple} ${tutorial.tip}`);
    });

    restartSectionBtn.addEventListener("click", () => {
        appState.roundAnswered = 0;
        appState.roundCorrect = 0;
        appState.usedQuestionKeys[moduleId] = [];
        setFeedback(true, "Section restarted. Let's learn together from question 1.");
        nextQuestion();
    });

    teacherAnswerEl.textContent = "I am here to help. Ask me about the current lesson.";
    teacherQuestionEl.value = "";
    saveState();
}

function updateDashboard() {
    const module = MODULES.find((m) => m.id === appState.activeModule);
    const progress = appState.progress[appState.activeModule];

    totalScoreEl.textContent = String(appState.totalScore);
    totalStarsEl.textContent = String(appState.stars);
    currentModuleEl.textContent = module.title;
    currentStageEl.textContent = String(progress.stage);
}

function nextQuestion() {
    if (appState.roundAnswered >= QUESTIONS_PER_ROUND) {
        finishRound();
        return;
    }

    const moduleId = appState.activeModule;
    const stage = appState.progress[moduleId].stage;
    const question = getQuestion(moduleId, stage);

    appState.currentQuestion = question;
    renderQuestion(moduleId, question, stage);
}

function getQuestion(moduleId, stage) {
    const stageData = moduleData[moduleId][stage];
    const used = appState.usedQuestionKeys[moduleId] || [];

    const available = stageData.filter((item) => !used.includes(itemKey(moduleId, item)));
    const pool = available.length ? available : stageData;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const key = itemKey(moduleId, pick);

    appState.usedQuestionKeys[moduleId] = [...new Set([...used, key])];
    return pick;
}

function renderQuestion(moduleId, q, stage) {
    const roundNumber = appState.roundAnswered + 1;
    appState.questionTriesLeft = SPELLING_MAX_TRIES;

    let promptHTML = `<div class="prompt-card"><p><strong>Question ${roundNumber}/${QUESTIONS_PER_ROUND}</strong> | Stage ${stage}</p><p id="question-tries" class="tries-badge">Tries left: ${appState.questionTriesLeft}/${SPELLING_MAX_TRIES}</p>`;
    let answerHTML = "";

    if (moduleId === "spelling") {
        promptHTML += `
            <p><strong>Hint:</strong> ${q.hint}</p>
            <p><strong>Variant note:</strong> ${q.variantNote}</p>
            <button class="small-btn" id="speak-btn" type="button">Read Word Prompt</button>
            <img src="${q.image}" alt="Spelling clue image">
        </div>`;

        answerHTML = `
            <div class="answer-block">
                <label for="typed-answer">Type the word:</label>
                <input id="typed-answer" class="answer-input" autocomplete="off" />
                <button id="submit-answer" class="btn-primary" type="button">Check Answer</button>
                <div id="letter-comparison" class="letter-comparison"></div>
            </div>
        `;
    } else if (moduleId === "reading") {
        promptHTML += `
            <p>${q.passage}</p>
            <p><strong>${q.prompt}</strong></p>
        </div>`;
        answerHTML = renderOptionButtons(q.options);
    } else if (moduleId === "parts") {
        promptHTML += `
            <p>${q.sentence}</p>
            <p><strong>What part of speech is "${q.target}"?</strong></p>
        </div>`;
        answerHTML = renderOptionButtons(q.options);
    } else {
        promptHTML += `<p><strong>${q.prompt}</strong></p></div>`;
        answerHTML = renderOptionButtons(q.options);
    }

    lessonContentEl.innerHTML = `${promptHTML}${answerHTML}`;

    if (moduleId === "spelling") {
        const speakBtn = document.getElementById("speak-btn");
        const submitBtn = document.getElementById("submit-answer");
        const inputEl = document.getElementById("typed-answer");

        speakBtn.addEventListener("click", () => {
            speakText(`Spell this word. ${q.hint}. The answer may have UK or US spelling.`);
            setTimeout(() => speakText(q.word), 600);
        });

        submitBtn.addEventListener("click", () => {
            const value = inputEl.value.trim();
            handleTextAnswer(value);
        });

        inputEl.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                handleTextAnswer(inputEl.value.trim());
            }
        });

        inputEl.focus();
    } else {
        lessonContentEl.querySelectorAll(".option-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                handleOptionAnswer(btn.dataset.option);
            });
        });
    }
}

function renderOptionButtons(options) {
    const shuffled = shuffle(options.slice());
    const buttons = shuffled
        .map((option) => `<button class="option-btn" data-option="${escapeHtml(option)}" type="button">${escapeHtml(option)}</button>`)
        .join("");

    return `<div class="option-grid">${buttons}</div>`;
}

function handleOptionAnswer(selected) {
    const q = appState.currentQuestion;
    const isCorrect = selected === q.answer;

    if (isCorrect) {
        finalizeAnswer({
            isCorrect: true,
            userAnswer: selected,
            correctAnswer: q.answer,
            explanation: q.explanation,
            prompt: q.prompt || q.sentence
        });
        return;
    }

    appState.questionTriesLeft -= 1;
    updateQuestionTryBadge();

    if (appState.questionTriesLeft > 0) {
        setFeedback(false, `Not quite. Try again. Tries left: ${appState.questionTriesLeft}/${SPELLING_MAX_TRIES}.`);
        return;
    }

    finalizeAnswer({
        isCorrect: false,
        userAnswer: selected,
        correctAnswer: q.answer,
        explanation: `Good effort. You used all ${SPELLING_MAX_TRIES} tries.`,
        prompt: q.prompt || q.sentence
    });
}

function handleTextAnswer(value) {
    if (!value) {
        setFeedback(false, "Please type an answer first.");
        return;
    }

    const q = appState.currentQuestion;
    const typed = value.toLowerCase();
    const accepted = q.accepted.map((entry) => entry.toLowerCase());
    const isCorrect = accepted.includes(typed);

    if (isCorrect) {
        const variantType = typed === q.word.toLowerCase() ? "Primary answer" : "Accepted variant";
        finalizeAnswer({
            isCorrect: true,
            userAnswer: value,
            correctAnswer: q.accepted.join(" / "),
            explanation: `Correct! ${variantType}. ${q.variantNote}.`,
            prompt: q.hint
        });
        return;
    }

    appState.questionTriesLeft -= 1;
    updateQuestionTryBadge();

    const comparisonEl = document.getElementById("letter-comparison");
    if (comparisonEl) {
        comparisonEl.innerHTML = createLetterComparisonHTML(typed, q.word.toLowerCase());
    }

    if (appState.questionTriesLeft > 0) {
        setFeedback(false, `Not quite. Try again. Tries left: ${appState.questionTriesLeft}/${SPELLING_MAX_TRIES}.`);
        speakText(`Try again. ${q.hint}`);
        return;
    }

    finalizeAnswer({
        isCorrect: false,
        userAnswer: value,
        correctAnswer: q.accepted.join(" / "),
        explanation: `Good effort. You used all ${SPELLING_MAX_TRIES} tries.`,
        prompt: q.hint
    });
}

function finalizeAnswer({ isCorrect, userAnswer, correctAnswer, explanation, prompt }) {
    const moduleId = appState.activeModule;
    const progress = appState.progress[moduleId];

    progress.attempted += 1;
    appState.roundAnswered += 1;

    if (isCorrect) {
        progress.correct += 1;
        progress.score += 20;
        appState.totalScore += 20;
        appState.roundCorrect += 1;

        if (progress.correct % 5 === 0) {
            appState.stars += 1;
        }

        setFeedback(true, `${explanation} (+20 points)`);
    } else {
        recordMistake(moduleId, prompt, userAnswer, correctAnswer, explanation);
        setFeedback(false, `${explanation} Correct answer: ${correctAnswer}`);
    }

    updateDashboard();
    renderReport();
    saveState();

    const nextBtn = document.createElement("button");
    nextBtn.className = "btn-primary";
    nextBtn.type = "button";
    nextBtn.textContent = appState.roundAnswered >= QUESTIONS_PER_ROUND ? "Finish Round" : "Next Question";
    nextBtn.addEventListener("click", nextQuestion);

    lessonContentEl.appendChild(nextBtn);
    disableCurrentInputs();
}

function finishRound() {
    const moduleId = appState.activeModule;
    const progress = appState.progress[moduleId];
    const accuracy = Math.round((appState.roundCorrect / QUESTIONS_PER_ROUND) * 100);

    let summary = `Round complete. You got ${appState.roundCorrect}/${QUESTIONS_PER_ROUND} (${accuracy}%).`;

    if (accuracy >= 80 && progress.stage < 3) {
        progress.stage += 1;
        summary += ` Great work. Stage up to ${progress.stage}.`;
    } else if (accuracy < 60 && progress.stage > 1) {
        summary += " Keep practicing this stage for stronger mastery.";
    }

    lessonContentEl.innerHTML = `
        <div class="prompt-card">
            <h3>Round Summary</h3>
            <p>${summary}</p>
            <p>Tip: Review mistakes below and replay this module for mastery.</p>
        </div>
        <button class="btn-primary" id="play-round-again" type="button">Play Another Round</button>
    `;

    lessonFeedbackEl.className = "lesson-feedback";
    lessonFeedbackEl.textContent = "Feedback stays available after every answer so learning remains clear.";

    document.getElementById("play-round-again").addEventListener("click", () => {
        appState.roundAnswered = 0;
        appState.roundCorrect = 0;
        appState.usedQuestionKeys[moduleId] = [];
        nextQuestion();
    });

    renderModuleNav();
    updateDashboard();
    renderReport();
    saveState();
}

function renderReport() {
    reportGridEl.innerHTML = "";

    MODULES.forEach((module) => {
        const progress = appState.progress[module.id];
        const accuracy = progress.attempted ? Math.round((progress.correct / progress.attempted) * 100) : 0;

        const card = document.createElement("article");
        card.className = "report-card";
        card.innerHTML = `
            <h4>${module.title}</h4>
            <p>Stage: ${progress.stage}</p>
            <p>Score: ${progress.score}</p>
            <p>Accuracy: ${accuracy}%</p>
            <p>Attempts: ${progress.attempted}</p>
        `;

        reportGridEl.appendChild(card);
    });

    const allMistakes = MODULES.flatMap((module) =>
        appState.progress[module.id].mistakes.map((mistake) => ({
            module: module.title,
            ...mistake
        }))
    )
        .slice(-12)
        .reverse();

    if (!allMistakes.length) {
        mistakeListEl.innerHTML = "<li>No mistakes recorded yet. Keep going.</li>";
        return;
    }

    mistakeListEl.innerHTML = allMistakes
        .map(
            (m) =>
                `<li><strong>${m.module}:</strong> ${escapeHtml(m.prompt)} | Your answer: ${escapeHtml(
                    String(m.userAnswer)
                )} | Correct: ${escapeHtml(String(m.correctAnswer))}</li>`
        )
        .join("");
}

function recordMistake(moduleId, prompt, userAnswer, correctAnswer, explanation) {
    const progress = appState.progress[moduleId];
    progress.mistakes.push({
        prompt: String(prompt || "Question"),
        userAnswer: String(userAnswer || "(blank)"),
        correctAnswer: String(correctAnswer || ""),
        explanation: String(explanation || ""),
        time: new Date().toISOString()
    });

    if (progress.mistakes.length > 30) {
        progress.mistakes = progress.mistakes.slice(-30);
    }
}

function setFeedback(isCorrect, text) {
    lessonFeedbackEl.className = `lesson-feedback ${isCorrect ? "correct" : "incorrect"}`;
    lessonFeedbackEl.textContent = text;
}

function disableCurrentInputs() {
    lessonContentEl.querySelectorAll("button, input").forEach((el) => {
        if (el.textContent === "Next Question" || el.textContent === "Finish Round") return;
        el.disabled = true;
    });
}

function createLetterComparisonHTML(userWord, correctWord) {
    const userLetters = userWord.split("");
    const correctLetters = correctWord.split("");
    const maxLength = Math.max(userLetters.length, correctLetters.length);
    let html = "";

    for (let i = 0; i < maxLength; i += 1) {
        const userLetter = userLetters[i];
        const correctLetter = correctLetters[i];

        if (userLetter && correctLetter) {
            const className = userLetter === correctLetter ? "correct" : "incorrect";
            html += `<span class="letter-box ${className}">${escapeHtml(userLetter)}</span>`;
        } else if (!userLetter && correctLetter) {
            html += `<span class="letter-box missing">?</span>`;
        } else {
            html += `<span class="letter-box extra">${escapeHtml(userLetter)}</span>`;
        }
    }

    return html;
}

function speakText(text) {
    if (!("speechSynthesis" in window)) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.92;
    utterance.pitch = 1;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

function speakTeacherReply(text) {
    if (!("speechSynthesis" in window)) {
        updateVoiceStatus("Voice output is not supported in this browser.", "error");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.05;
    utterance.volume = 1;

    const voices = speechSynthesis.getVoices();
    const preferredType = teacherVoiceTypeEl ? teacherVoiceTypeEl.value : "female";
    const preferred = pickTeacherVoice(voices, preferredType, false);
    if (preferred) {
        utterance.voice = preferred;
        updateVoiceStatus(`Speaking with: ${preferred.name}`);
    }

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

function pickTeacherVoice(voices, preferredType, ignoreManual = false) {
    const manualChoice = teacherVoiceNameEl ? teacherVoiceNameEl.value : "auto";
    if (!ignoreManual && manualChoice && manualChoice !== "auto") {
        const manualVoice = voices.find((voice) => voice.name === manualChoice);
        if (manualVoice) return manualVoice;
    }

    const englishVoices = voices.filter((voice) => /en-GB|en-US|en-/i.test(voice.lang));
    if (!englishVoices.length) {
        return voices[0] || null;
    }

    const femaleHints = /female|woman|samantha|victoria|karen|zira|aria|libby|hazel|susan|serena|emma|google uk english female|google us english/i;
    const maleHints = /male|man|daniel|david|mark|alex|fred|george|thomas|ryan|google uk english male|google us english male/i;

    if (preferredType === "male") {
        return englishVoices.find((v) => maleHints.test(v.name)) || englishVoices[0];
    }

    return englishVoices.find((v) => femaleHints.test(v.name)) || englishVoices[0];
}

function updateQuestionTryBadge() {
    const badge = document.getElementById("question-tries");
    if (!badge) return;
    badge.textContent = `Tries left: ${appState.questionTriesLeft}/${SPELLING_MAX_TRIES}`;
}

function showTutorialReminder(moduleId) {
    const tutorial = moduleTutorials[moduleId];
    setFeedback(true, `${tutorial.simple} Easy tip: ${tutorial.tip}`);
}

async function answerTeacherQuestionFromInput() {
    const question = teacherQuestionEl.value.trim();
    if (!question) {
        teacherAnswerEl.textContent = "Type your question first, and I will help.";
        updateVoiceStatus("Type or speak a question to start.");
        return;
    }

    const answer = await getTeacherAnswerAdvanced(question, appState.activeModule);
    lastTeacherAnswer = answer;
    teacherAnswerEl.textContent = answer;
    teacherQuestionEl.value = "";
    updateVoiceStatus("Teacher answered. Press Hear Teacher Reply to listen again.");

    if (teacherAutoSpeakEl.checked) {
        speakTeacherReply(answer);
    }
}

async function getTeacherAnswerAdvanced(question, moduleId) {
    const settings = getAiTeacherSettings();
    const fallback = getTeacherAnswer(question, moduleId);

    if (!settings.enabled || !settings.endpoint || !settings.model) {
        return diversifyFallbackReply(fallback, moduleId);
    }

    try {
        const llmAnswer = await queryAiTeacher(question, moduleId, settings);
        if (!llmAnswer) {
            return diversifyFallbackReply(fallback, moduleId);
        }

        rememberTeacherExchange(question, llmAnswer);
        updateAiStatus(`AI Teacher answered with ${settings.model}`);
        return llmAnswer;
    } catch (error) {
        console.warn("AI Teacher fallback due to error", error);
        updateAiStatus(buildAiFailureMessage(error), "error");
        return diversifyFallbackReply(fallback, moduleId);
    }
}

async function queryAiTeacher(question, moduleId, settings) {
    const module = MODULES.find((m) => m.id === moduleId);
    const progress = appState.progress[moduleId];
    const currentQuestionContext = buildCurrentQuestionContext(moduleId, appState.currentQuestion);
    const recentMistakes = (progress.mistakes || []).slice(-3).map((m) => `${m.prompt} -> Correct: ${m.correctAnswer}`);
    const history = appState.teacherChatHistory.slice(-6);

    const payload = {
        model: settings.model,
        question,
        moduleId,
        moduleTitle: module ? module.title : moduleId,
        studentName: appState.activeProfileName,
        currentQuestionContext,
        recentMistakes,
        history
    };

    const response = await fetchAiTeacherWithRetry(settings.endpoint, payload);

    if (!response.ok) {
        let details = "";
        try {
            const errorBody = await response.json();
            details = errorBody && errorBody.error ? `: ${errorBody.error}` : "";
        } catch (_error) {
            details = "";
        }
        throw new Error(`LLM request failed with status ${response.status}${details}`);
    }

    const data = await response.json();
    const text = data?.answer?.trim() || "";
    return text;
}

async function fetchAiTeacherWithRetry(endpoint, payload) {
    const maxAttempts = 2;

    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 12000);

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            if (response.status === 429 || response.status >= 500) {
                if (attempt < maxAttempts) {
                    continue;
                }
            }

            return response;
        } catch (error) {
            if (attempt >= maxAttempts) {
                throw error;
            }
        } finally {
            clearTimeout(timeoutId);
        }
    }

    throw new Error("AI request did not complete");
}

function buildAiFailureMessage(error) {
    const message = String(error && error.message ? error.message : "").toLowerCase();

    if (message.includes("429")) {
        return "AI Teacher is busy right now (rate limit). Local smart tutor answered instead.";
    }
    if (message.includes("401") || message.includes("403")) {
        return "AI Teacher key or permission issue on server. Local smart tutor answered instead.";
    }
    if (message.includes("abort") || message.includes("timeout")) {
        return "AI Teacher timed out. Local smart tutor answered instead.";
    }

    return "AI Teacher request failed. Local smart tutor answered instead.";
}

function buildCurrentQuestionContext(moduleId, q) {
    if (!q) return "No active question.";
    if (moduleId === "spelling") return `Spelling hint: ${q.hint}`;
    if (moduleId === "parts") return `Sentence: ${q.sentence} | Target word: ${q.target}`;
    if (moduleId === "reading") return `Passage prompt: ${q.prompt}`;
    return q.prompt || "Practice question in progress.";
}

function rememberTeacherExchange(userText, teacherText) {
    appState.teacherChatHistory.push({ role: "user", text: userText });
    appState.teacherChatHistory.push({ role: "assistant", text: teacherText });
    if (appState.teacherChatHistory.length > 12) {
        appState.teacherChatHistory = appState.teacherChatHistory.slice(-12);
    }
}

function diversifyFallbackReply(text, moduleId) {
    const scaffolds = [
        "Let us solve it together.",
        "You are doing great. Try this.",
        "Here is a simple way to think about it."
    ];
    const index = (appState.progress[moduleId]?.attempted || 0) % scaffolds.length;
    return `${scaffolds[index]} ${text}`;
}

function getTeacherAnswer(question, moduleId) {
    const q = normalizeTeacherText(question);

    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
        return "Hello superstar. Ask me any English question and I will explain it in simple steps.";
    }

    if (q.includes("i do not understand") || q.includes("dont understand") || q.includes("confused") || q.includes("hard")) {
        const tutorial = moduleTutorials[moduleId];
        return `${tutorial.simple} Step 1: read the question slowly. Step 2: find clue words. Step 3: remove wrong choices. Step 4: choose the best answer.`;
    }

    const topic = detectTeacherTopic(q, moduleId);
    const wantsExample = hasAny(q, ["example", "examples", "sample"]);
    const wantsDifference = hasAny(q, ["difference", "compare", "vs", "versus"]);
    const wantsSteps = hasAny(q, ["how", "steps", "method", "strategy", "tip", "trick"]);
    const wantsQuiz = hasAny(q, ["quiz me", "test me", "practice", "question"]);

    if (!topic) {
        const tutorial = moduleTutorials[moduleId];
        return buildTeacherScopePrompt(moduleId, tutorial);
    }

    if (wantsDifference) {
        return buildDifferenceAnswer(topic, q);
    }

    if (wantsQuiz) {
        return buildMiniQuiz(topic);
    }

    if (wantsSteps) {
        return buildStepByStepAnswer(topic);
    }

    if (wantsExample) {
        return buildExampleAnswer(topic);
    }

    return buildCoreAnswer(topic);
}

function normalizeTeacherText(text) {
    return String(text || "")
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function hasAny(text, terms) {
    return terms.some((term) => containsTerm(text, term));
}

function containsTerm(text, term) {
    const safeTerm = escapeRegex(term.trim()).replace(/\s+/g, "\\s+");
    const pattern = new RegExp(`(^|\\s)${safeTerm}(?=\\s|$)`, "i");
    return pattern.test(text);
}

function escapeRegex(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function detectTeacherTopic(q, moduleId) {
    const topicMatchers = [
        { key: "noun", terms: ["noun", "naming word"] },
        { key: "verb", terms: ["verb", "action word", "doing word"] },
        { key: "adjective", terms: ["adjective", "describing word"] },
        { key: "adverb", terms: ["adverb", "how word"] },
        { key: "sentence", terms: ["sentence", "subject", "predicate", "word order"] },
        { key: "past", terms: ["past tense", "past"] },
        { key: "present", terms: ["present tense", "present"] },
        { key: "future", terms: ["future tense", "future"] },
        { key: "comma", terms: ["comma", "commas"] },
        { key: "capital", terms: ["capital", "uppercase"] },
        { key: "period", terms: ["period", "full stop"] },
        { key: "quotation", terms: ["quotation", "quote marks", "speech marks"] },
        { key: "main-idea", terms: ["main idea", "big idea"] },
        { key: "inference", terms: ["inference", "infer"] },
        { key: "retrieval", terms: ["retrieval", "find answer"] },
        { key: "spelling", terms: ["spelling", "spell", "uk", "us", "american", "british"] }
    ];

    for (let i = 0; i < topicMatchers.length; i += 1) {
        if (hasAny(q, topicMatchers[i].terms)) {
            return topicMatchers[i].key;
        }
    }

    if (moduleId === "parts") return "noun";
    if (moduleId === "sentences") return "sentence";
    if (moduleId === "tenses") return "past";
    if (moduleId === "punctuation") return "comma";
    if (moduleId === "reading") return "main-idea";
    if (moduleId === "spelling") return "spelling";
    return null;
}

function buildCoreAnswer(topic) {
    const bank = {
        noun: "A noun is a naming word. It names a person, place, thing, or idea. Example: teacher, park, pencil.",
        verb: "A verb is an action or being word. Example: run, write, is, are.",
        adjective: "An adjective describes a noun. Example: bright sun, tall tree, noisy class.",
        adverb: "An adverb tells how, when, or where. Example: quickly, yesterday, outside.",
        sentence: "A complete sentence has a subject, a verb, and a full idea. It starts with a capital and ends with punctuation.",
        past: "Past tense tells about actions that already happened. Example: walked, played, listened.",
        present: "Present tense tells what is happening now or happens often. Example: walks, is reading.",
        future: "Future tense tells what will happen later. Example: will walk, will study.",
        comma: "A comma gives your reader a short pause. Use it in lists and after an opening phrase.",
        capital: "Use a capital letter at the start of a sentence and for names of people, places, and days.",
        period: "A period or full stop ends a telling sentence.",
        quotation: "Use quotation marks around the exact words someone says.",
        "main-idea": "The main idea is the most important message of the whole passage.",
        inference: "Inference means using text clues plus your own thinking to find a smart answer.",
        retrieval: "Retrieval means finding an answer that is directly written in the text.",
        spelling: "For spelling, listen to sounds, break the word into chunks, and check UK or US variant notes."
    };

    return `${bank[topic]} Try one question now, and I will help if you get stuck.`;
}

function buildExampleAnswer(topic) {
    const bank = {
        noun: "Example: In 'The cat sleeps', cat is the noun because it names the animal.",
        verb: "Example: In 'The cat sleeps', sleeps is the verb because it tells the action.",
        adjective: "Example: In 'The red ball bounced', red is the adjective because it describes ball.",
        adverb: "Example: In 'She sang beautifully', beautifully is the adverb because it tells how she sang.",
        sentence: "Example: 'Maya finished her homework.' is complete. 'Finished homework' is not complete.",
        past: "Example: Yesterday I walked to school. Walked is past tense.",
        present: "Example: I read every night. Read is present tense for routine.",
        future: "Example: Tomorrow I will read a new chapter. Will read is future tense.",
        comma: "Example: After lunch, we played chess. The comma comes after the opening phrase.",
        capital: "Example: london is wrong. London is correct because place names use capitals.",
        period: "Example: 'The game is fun.' ends with a period.",
        quotation: "Example: Sam said, 'I am ready.' Quotation marks wrap the spoken words.",
        "main-idea": "Example: If a passage mentions planting, watering, and growth, the main idea is how plants grow.",
        inference: "Example: If a character grabs an umbrella, we infer it might rain.",
        retrieval: "Example: If the text says 'Luca saved for two months', copy that exact fact.",
        spelling: "Example: Colour and color can both be correct depending on UK or US spelling."
    };

    return `${bank[topic]} Want another example? Ask: 'give me one more example'.`;
}

function buildStepByStepAnswer(topic) {
    const bank = {
        noun: "Steps: 1) Find the word naming a person, place, or thing. 2) Check if the sentence still makes sense without it. 3) If yes, it is likely a noun.",
        verb: "Steps: 1) Ask what action is happening. 2) Find the doing or being word. 3) Check the tense clue like yesterday or tomorrow.",
        adjective: "Steps: 1) Find a noun. 2) Ask which one or what kind. 3) The describing word is the adjective.",
        adverb: "Steps: 1) Find the verb. 2) Ask how/when/where. 3) The helper word is often the adverb.",
        sentence: "Steps: 1) Find who or what (subject). 2) Find action (verb). 3) Check it gives a full idea. 4) Add correct punctuation.",
        past: "Steps: 1) Look for past clues: yesterday, last week. 2) Choose verb form like walked, played.",
        present: "Steps: 1) Look for now or routine clues: now, every day. 2) Pick present verb form.",
        future: "Steps: 1) Look for future clues: tomorrow, next week. 2) Use will + verb.",
        comma: "Steps: 1) Spot an opening phrase or list. 2) Add comma after opening phrase or between list items.",
        capital: "Steps: 1) Start sentence with capital. 2) Capitalize names and places.",
        period: "Steps: 1) Decide sentence type. 2) Use . for telling, ? for asking, ! for strong feeling.",
        quotation: "Steps: 1) Put spoken words inside quotes. 2) Keep punctuation in the correct place.",
        "main-idea": "Steps: 1) Read title and first lines. 2) Notice repeated idea. 3) Choose the big message, not tiny detail.",
        inference: "Steps: 1) Find clue in text. 2) Add your background knowledge. 3) Make best-fit conclusion.",
        retrieval: "Steps: 1) Underline key word in question. 2) Scan for same word in passage. 3) Copy exact detail.",
        spelling: "Steps: 1) Say the word slowly. 2) Split into parts. 3) Type one part at a time. 4) Check variant note for UK/US."
    };

    return bank[topic];
}

function buildMiniQuiz(topic) {
    const bank = {
        noun: "Mini quiz: In 'The puppy barked loudly', which word is the noun?",
        verb: "Mini quiz: In 'Rina painted a flower', which word is the verb?",
        adjective: "Mini quiz: In 'We saw a giant kite', which word is the adjective?",
        adverb: "Mini quiz: In 'He answered politely', which word is the adverb?",
        sentence: "Mini quiz: Which is complete? A) Running to school B) I ran to school.",
        past: "Mini quiz: Choose past tense: A) jump B) jumped",
        present: "Mini quiz: Choose present tense for routine: A) reads B) will read",
        future: "Mini quiz: Choose future tense: A) will travel B) traveled",
        comma: "Mini quiz: Add comma: After school we played football.",
        capital: "Mini quiz: Fix capitals: monday is fun in lagos.",
        period: "Mini quiz: End punctuation for this question: 'Where is my pen'",
        quotation: "Mini quiz: Add quotes: Sam said I am ready.",
        "main-idea": "Mini quiz: Is this a main idea or detail: 'Plants need water to grow.'",
        inference: "Mini quiz: If Mia wore boots and carried an umbrella, what can we infer?",
        retrieval: "Mini quiz: If text says 'Ali has two cats', how many cats does Ali have?",
        spelling: "Mini quiz: Which UK spelling matches US 'color'?"
    };

    return `${bank[topic]} Tell me your answer and I will check it.`;
}

function buildDifferenceAnswer(topic, q) {
    if (hasAny(q, ["adjective", "adverb"])) {
        return "Adjective vs Adverb: adjective describes a noun, adverb describes a verb/adjective/adverb. Example: 'quick runner' vs 'runs quickly'.";
    }
    if (hasAny(q, ["noun", "verb"])) {
        return "Noun vs Verb: a noun names something, but a verb shows action or state. Example: 'Birds fly' -> birds is noun, fly is verb.";
    }
    if (hasAny(q, ["past", "present", "future"])) {
        return "Tense difference: past already happened, present happens now or regularly, future happens later. Clues: yesterday, now, tomorrow.";
    }
    if (topic === "retrieval" || topic === "inference") {
        return "Retrieval vs Inference: retrieval is directly in the text, inference is figured out from clues.";
    }
    return `${buildCoreAnswer(topic)} If you want a comparison, ask: 'difference between X and Y'.`;
}

function buildTeacherScopePrompt(moduleId, tutorial) {
    const prompts = {
        english: "Ask me about noun, verb, tense, punctuation, reading clues, or spelling strategy.",
        mathematics: "Ask me about arithmetic steps, fractions, geometry, or word-problem strategies.",
        science: "Ask me about life science, physical science, earth systems, or key science terms.",
        "social-studies": "Ask me about history timelines, geography maps, or civics responsibilities.",
        health: "Ask me about nutrition, hygiene routines, safety, and healthy habits.",
        "world-knowledge": "Ask me about US/Canada capitals, landmarks, symbols, and government basics."
    };

    const subjectId = getSubjectByModule(moduleId);
    const scopedPrompt = prompts[subjectId] || "Ask me about this lesson and I will guide you step by step.";
    return `${tutorial.simple} ${scopedPrompt}`;
}

function appendExtraSpellingWords() {
    [1, 2, 3].forEach((stage) => {
        if (!moduleData.spelling[stage]) return;
        moduleData.spelling[stage] = moduleData.spelling[stage].concat(extraSpellingWords[stage]);
    });
}

function expandQuestionBanks() {
    const moduleIds = Object.keys(moduleData);
    moduleIds.forEach((moduleId) => {
        for (let stage = 1; stage <= STAGES_PER_MODULE; stage += 1) {
            const stageItems = moduleData[moduleId][stage];
            if (!Array.isArray(stageItems) || stageItems.length === 0) continue;
            moduleData[moduleId][stage] = expandStageToTarget(moduleId, stage, stageItems, TARGET_QUESTIONS_PER_STAGE);
        }
    });
}

function expandStageToTarget(moduleId, stage, baseItems, targetCount) {
    if (baseItems.length >= targetCount) {
        return baseItems.slice(0, targetCount);
    }

    const expanded = baseItems.map((item) => deepClone(item));
    const originals = baseItems.map((item) => deepClone(item));
    let variantIndex = 1;

    while (expanded.length < targetCount) {
        const template = originals[(expanded.length - baseItems.length) % originals.length];
        const clone = deepClone(template);
        applyVariantLabel(moduleId, stage, clone, variantIndex);
        expanded.push(clone);
        variantIndex += 1;
    }

    return expanded;
}

function applyVariantLabel(moduleId, stage, item, variantIndex) {
    const label = `(Stage ${stage} Practice ${variantIndex})`;

    if (moduleId === "spelling") {
        item.hint = `${item.hint} ${label}`;
        item.variantNote = `${item.variantNote} | ${label}`;
        return;
    }

    if (moduleId === "parts") {
        item.sentence = `${item.sentence} ${label}`;
        item.explanation = `${item.explanation} ${label}`;
        return;
    }

    if (moduleId === "reading") {
        item.prompt = `${label}: ${item.prompt}`;
        item.passage = `${item.passage} This is extra reading practice.`;
        return;
    }

    item.prompt = `${label}: ${item.prompt}`;
    item.explanation = `${item.explanation} ${label}`;
}

function itemKey(moduleId, item) {
    if (moduleId === "spelling") return `${item.word}-${item.hint}`;
    if (item.prompt) return `${item.prompt}-${item.answer}`;
    if (item.sentence) return `${item.sentence}-${item.target}`;
    return JSON.stringify(item).slice(0, 80);
}

function clampStage(stage) {
    return Math.max(1, Math.min(3, stage));
}

function shuffle(list) {
    const arr = list.slice();
    for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

// Word lists organized by length
const wordsByLength = {
    4: [
        { word: 'cake', hint: 'A sweet dessert for birthdays', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400' },
        { word: 'tree', hint: 'A tall plant with branches', image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400' },
        { word: 'book', hint: 'Something you read', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400' },
        { word: 'door', hint: 'You open this to enter a room', image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=400' },
        { word: 'fish', hint: 'An animal that swims in water', image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400' },
        { word: 'moon', hint: 'It shines at night in the sky', image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=400' },
        { word: 'star', hint: 'It twinkles in the sky', image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400' },
        { word: 'rain', hint: 'Water falling from clouds', image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400' },
        { word: 'bird', hint: 'An animal that can fly', image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400' },
        { word: 'snow', hint: 'White flakes that fall in winter', image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400' },
        { word: 'frog', hint: 'Green animal that jumps and croaks', image: 'https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?w=400' },
        { word: 'bear', hint: 'Large furry animal in forests', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=400' },
        { word: 'ball', hint: 'Round object used in games', image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400' },
        { word: 'boat', hint: 'Floats on water', image: 'https://images.unsplash.com/photo-1506886224019-f3e93826fd35?w=400' },
        { word: 'ring', hint: 'Jewelry worn on finger', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400' },
        { word: 'leaf', hint: 'Green part of a plant', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400' },
        { word: 'kite', hint: 'Flies in the wind on a string', image: 'https://images.unsplash.com/photo-1608620088953-4b9267c6c53b?w=400' },
        { word: 'duck', hint: 'Bird that swims and quacks', image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=400' },
        { word: 'coin', hint: 'Metal money', image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400' },
        { word: 'gift', hint: 'Present you give someone', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400' }
    ],
    5: [
        { word: 'apple', hint: 'A red or green fruit', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400' },
        { word: 'house', hint: 'A place where people live', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400' },
        { word: 'water', hint: 'You drink this when thirsty', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400' },
        { word: 'happy', hint: 'A feeling of joy', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400' },
        { word: 'chair', hint: 'You sit on this', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400' },
        { word: 'music', hint: 'Sounds arranged to be pleasant', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400' },
        { word: 'smile', hint: 'You do this when happy', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400' },
        { word: 'beach', hint: 'Sandy area by the ocean', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400' },
        { word: 'horse', hint: 'Animal you can ride', image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400' },
        { word: 'bread', hint: 'Food made from flour', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400' },
        { word: 'pizza', hint: 'Round food with cheese and toppings', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' },
        { word: 'heart', hint: 'Organ that pumps blood', image: 'https://images.unsplash.com/photo-1606815891768-e9f550a1163c?w=400' },
        { word: 'piano', hint: 'Musical instrument with keys', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400' },
        { word: 'mouse', hint: 'Small animal with a long tail', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400' },
        { word: 'plant', hint: 'Living thing that grows in soil', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400' },
        { word: 'cloud', hint: 'White fluffy thing in the sky', image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400' },
        { word: 'tiger', hint: 'Big striped wild cat', image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400' },
        { word: 'honey', hint: 'Sweet golden liquid made by bees', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784f4c?w=400' },
        { word: 'watch', hint: 'Worn on wrist to tell time', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400' },
        { word: 'robot', hint: 'Mechanical person or machine', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400' },
        { word: 'lemon', hint: 'Yellow sour citrus fruit', image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?w=400' },
        { word: 'crown', hint: 'Worn on head by kings and queens', image: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=400' }
    ],
    6: [
        { word: 'garden', hint: 'A place where flowers grow', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400' },
        { word: 'sunset', hint: 'When the sun goes down', image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400' },
        { word: 'pencil', hint: 'Used for writing and drawing', image: 'https://images.unsplash.com/photo-1587907236707-b4c13355f464?w=400' },
        { word: 'school', hint: 'Where students learn', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400' },
        { word: 'sister', hint: 'A female sibling', image: 'https://images.unsplash.com/photo-1483918793747-5adbf82956c4?w=400' },
        { word: 'winter', hint: 'The coldest season', image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400' },
        { word: 'summer', hint: 'The warmest season', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400' },
        { word: 'cookie', hint: 'A sweet baked snack', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400' },
        { word: 'coffee', hint: 'Hot brown drink many adults love', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400' },
        { word: 'rocket', hint: 'Flies to space', image: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=400' },
        { word: 'camera', hint: 'Takes photographs', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400' },
        { word: 'flower', hint: 'Pretty and colorful plant part', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400' },
        { word: 'turtle', hint: 'Slow animal with a shell', image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400' },
        { word: 'castle', hint: 'Large building where royalty lives', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400' },
        { word: 'spider', hint: 'Eight-legged creature that spins webs', image: 'https://images.unsplash.com/photo-1577255774906-39123a8f6f0b?w=400' },
        { word: 'planet', hint: 'Large body in space orbiting a star', image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400' },
        { word: 'pillow', hint: 'Soft thing you rest your head on', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400' },
        { word: 'bottle', hint: 'Container for liquids', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400' },
        { word: 'candle', hint: 'Wax stick that gives light when lit', image: 'https://images.unsplash.com/photo-1602874801006-e747660d4e3c?w=400' },
        { word: 'jungle', hint: 'Dense tropical forest', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400' }
    ],
    7: [
        { word: 'rainbow', hint: 'Colorful arc in the sky after rain', image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=400' },
        { word: 'dolphin', hint: 'A smart sea mammal', image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?w=400' },
        { word: 'chicken', hint: 'A farm bird that lays eggs', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400' },
        { word: 'balloon', hint: 'Filled with air, floats at parties', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400' },
        { word: 'kitchen', hint: 'Room where you cook food', image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=400' },
        { word: 'monster', hint: 'A scary creature in stories', image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=400' },
        { word: 'picture', hint: 'An image or photograph', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400' },
        { word: 'morning', hint: 'The early part of the day', image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400' },
        { word: 'giraffe', hint: 'Tall animal with a long neck', image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=400' },
        { word: 'penguin', hint: 'Black and white bird that cannot fly', image: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=400' },
        { word: 'volcano', hint: 'Mountain that erupts with lava', image: 'https://images.unsplash.com/photo-1603461550159-a2f0b6c13bc6?w=400' },
        { word: 'peacock', hint: 'Colorful bird with fancy tail feathers', image: 'https://images.unsplash.com/photo-1583126235053-df52abf7a5dd?w=400' },
        { word: 'blanket', hint: 'Keeps you warm in bed', image: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=400' },
        { word: 'bicycle', hint: 'Two-wheeled vehicle you pedal', image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400' },
        { word: 'diamond', hint: 'Precious sparkling gem', image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400' },
        { word: 'octopus', hint: 'Sea creature with eight arms', image: 'https://images.unsplash.com/photo-1535473895227-bdecb20fb157?w=400' },
        { word: 'popcorn', hint: 'Snack that pops when heated', image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400' },
        { word: 'teacher', hint: 'Person who helps students learn', image: 'https://images.unsplash.com/photo-1494883759339-0b042055a4ee?w=400' },
        { word: 'dessert', hint: 'Sweet food eaten after a meal', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' },
        { word: 'mailbox', hint: 'Where you receive letters', image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400' }
    ],
    8: [
        { word: 'birthday', hint: 'The day you were born, celebrated yearly', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400' },
        { word: 'umbrella', hint: 'Keeps you dry in the rain', image: 'https://images.unsplash.com/photo-1519541312807-d1c96e992628?w=400' },
        { word: 'elephant', hint: 'Largest land animal with a trunk', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400' },
        { word: 'computer', hint: 'Electronic device for work and games', image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400' },
        { word: 'mountain', hint: 'A very tall natural elevation', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
        { word: 'treasure', hint: 'Hidden valuable items or gold', image: 'https://images.unsplash.com/photo-1587850128850-4bcd2e15edfc?w=400' },
        { word: 'hospital', hint: 'Where doctors treat patients', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400' },
        { word: 'starfish', hint: 'A star-shaped sea creature', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
        { word: 'sandwich', hint: 'Food with fillings between bread', image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400' },
        { word: 'dinosaur', hint: 'Extinct giant reptile from ancient times', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400' },
        { word: 'bathroom', hint: 'Room with a shower or bathtub', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400' },
        { word: 'football', hint: 'Sport played with oval or round ball', image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400' },
        { word: 'calendar', hint: 'Shows days, weeks and months', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400' },
        { word: 'backpack', hint: 'Bag carried on your back', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400' },
        { word: 'firework', hint: 'Explodes with colorful lights in sky', image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=400' },
        { word: 'kangaroo', hint: 'Australian animal that hops', image: 'https://images.unsplash.com/photo-1549627748-7d196f731bc0?w=400' },
        { word: 'flamingo', hint: 'Pink bird that stands on one leg', image: 'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?w=400' },
        { word: 'necklace', hint: 'Jewelry worn around the neck', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400' },
        { word: 'notebook', hint: 'Book with blank pages for writing', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400' },
        { word: 'airplane', hint: 'Flying vehicle with wings', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400' }
    ],
    9: [
        { word: 'butterfly', hint: 'Colorful insect with wings', image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400' },
        { word: 'chocolate', hint: 'Sweet brown treat', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400' },
        { word: 'adventure', hint: 'An exciting journey or experience', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400' },
        { word: 'pineapple', hint: 'Tropical fruit with spiky skin', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400' },
        { word: 'crocodile', hint: 'Large reptile living in rivers', image: 'https://images.unsplash.com/photo-1562024229-b9c529a38d81?w=400' },
        { word: 'jellyfish', hint: 'Transparent sea creature that stings', image: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=400' },
        { word: 'trampoline', hint: 'You jump and bounce on this', image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400' },
        { word: 'celebrate', hint: 'To mark a special occasion with joy', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400' },
        { word: 'strawberry', hint: 'Red berry with tiny seeds on surface', image: 'https://images.unsplash.com/photo-1543528176-61b239494933?w=400' },
        { word: 'snowflake', hint: 'Unique ice crystal that falls from sky', image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400' },
        { word: 'submarine', hint: 'Underwater vessel that explores deep sea', image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?w=400' },
        { word: 'telescope', hint: 'Device for viewing distant stars', image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400' },
        { word: 'hamburger', hint: 'Meat patty in a bun', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
        { word: 'alligator', hint: 'Large reptile similar to crocodile', image: 'https://images.unsplash.com/photo-1562715006-32e829a2f811?w=400' },
        { word: 'sunflower', hint: 'Tall yellow flower that faces the sun', image: 'https://images.unsplash.com/photo-1597848212624-e530d1d183d6?w=400' },
        { word: 'spaghetti', hint: 'Long thin Italian pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400' },
        { word: 'snowboard', hint: 'Board used for sliding down snowy slopes', image: 'https://images.unsplash.com/photo-1498146831523-fbe41acdc5ad?w=400' },
        { word: 'porcupine', hint: 'Animal covered in sharp quills', image: 'https://images.unsplash.com/photo-1583509430350-23c261875fc8?w=400' },
        { word: 'popsicle', hint: 'Frozen treat on a stick', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400' },
        { word: 'microwave', hint: 'Appliance that heats food quickly', image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400' }
    ]
};

// Game state
let currentLevel = 1;
let currentWordLength = 4;
let score = 0;
let wordsCompleted = 0;
let wordsPerLevel = 4;
let currentWord = null;
let availableWords = [];
let attemptCount = 0;
const maxAttempts = 5;

// DOM elements
const levelEl = document.getElementById('level');
const scoreEl = document.getElementById('score');
const wordLengthEl = document.getElementById('word-length');
const playSoundBtn = document.getElementById('play-sound');
const hintEl = document.getElementById('hint');
const wordImageEl = document.getElementById('word-image');
const spellingInput = document.getElementById('spelling-input');
const letterComparisonEl = document.getElementById('letter-comparison');
const submitBtn = document.getElementById('submit-btn');
const feedbackEl = document.getElementById('feedback');
const progressFillEl = document.getElementById('progress-fill');
const wordsCompletedEl = document.getElementById('words-completed');
const wordsTotalEl = document.getElementById('words-total');
const gameArea = document.getElementById('game-area');
const gameOverEl = document.getElementById('game-over');
const finalScoreEl = document.getElementById('final-score');
const finalLevelEl = document.getElementById('final-level');
const restartBtn = document.getElementById('restart-btn');
const volumeControl = document.getElementById('volume-control');

// Track voice readiness
let voicesReady = false;
function loadVoices() {
    const voices = speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
        voicesReady = true;
    }
}
if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

// Initialize game
function initGame() {
    currentLevel = 1;
    currentWordLength = 4;
    score = 0;
    wordsCompleted = 0;
    updateDisplay();
    loadLevel();
    gameArea.classList.remove('hidden');
    gameOverEl.classList.add('hidden');
}

// Load a new level
function loadLevel() {
    availableWords = [...wordsByLength[currentWordLength]];
    wordsCompleted = 0;
    updateProgress();
    loadNewWord();
}

// Load a new word
function loadNewWord() {
    if (availableWords.length === 0 || wordsCompleted >= wordsPerLevel) {
        levelUp();
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length);
    currentWord = availableWords.splice(randomIndex, 1)[0];
    
    attemptCount = 0;
    wordImageEl.src = currentWord.image;
    wordImageEl.alt = currentWord.hint;
    hintEl.textContent = `Hint: ${currentWord.hint}`;
    spellingInput.value = '';
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';
    letterComparisonEl.innerHTML = '';
    letterComparisonEl.classList.add('hidden');
    spellingInput.focus();
}

// Speak the word using Web Speech API
function speakWord() {
    if (!currentWord) return;
    if (!('speechSynthesis' in window)) {
        alert(`The word has ${currentWord.word.length} letters`);
        return;
    }
    // Some Chrome OS devices block autoplay until user gesture; ensure call originates from a click
    if (!voicesReady) {
        // Queue a retry shortly to allow voices to populate
        setTimeout(() => speakWord(), 250);
        return;
    }
    const vol = volumeControl ? parseFloat(volumeControl.value) : 1;
    const utterance = new SpeechSynthesisUtterance(currentWord.word);
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = isNaN(vol) ? 1 : vol; // 0.0 - 1.0
    try {
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
    } catch (e) {
        console.warn('Speech synthesis failed, fallback alert.', e);
        alert(`Spell the word with ${currentWord.word.length} letters`);
    }
}

// Show letter-by-letter comparison
function showLetterComparison(userInput, correctWord) {
    letterComparisonEl.innerHTML = '';
    letterComparisonEl.classList.remove('hidden');
    
    const userLetters = userInput.toLowerCase().split('');
    const correctLetters = correctWord.toLowerCase().split('');
    const maxLength = Math.max(userLetters.length, correctLetters.length);
    
    for (let i = 0; i < maxLength; i++) {
        const letterBox = document.createElement('div');
        letterBox.className = 'letter-box';
        
        if (i < userLetters.length && i < correctLetters.length) {
            // Both words have a letter at this position
            letterBox.textContent = userLetters[i];
            if (userLetters[i] === correctLetters[i]) {
                letterBox.classList.add('correct');
                letterBox.title = 'Correct!';
            } else {
                letterBox.classList.add('incorrect');
                letterBox.title = `Should be: ${correctLetters[i]}`;
            }
        } else if (i >= userLetters.length) {
            // User's word is too short - missing letter
            letterBox.textContent = '?';
            letterBox.classList.add('missing');
            letterBox.title = `Missing letter: ${correctLetters[i]}`;
        } else {
            // User's word is too long - extra letter
            letterBox.textContent = userLetters[i];
            letterBox.classList.add('extra');
            letterBox.title = 'Extra letter - remove this';
        }
        
        letterComparisonEl.appendChild(letterBox);
    }
}

// Check the spelling
function checkSpelling() {
    const userInput = spellingInput.value.trim().toLowerCase();
    
    if (!userInput) {
        feedbackEl.textContent = 'Please type a word!';
        feedbackEl.className = 'feedback incorrect';
        return;
    }

    if (userInput === currentWord.word.toLowerCase()) {
        // Correct answer
        score += currentWordLength * 10;
        wordsCompleted++;
        feedbackEl.textContent = `✓ Correct! The word is "${currentWord.word}"`;
        feedbackEl.className = 'feedback correct';
        letterComparisonEl.innerHTML = '';
        letterComparisonEl.classList.add('hidden');
        updateDisplay();
        updateProgress();

        setTimeout(() => {
            loadNewWord();
        }, 1500);
    } else {
        // Incorrect answer
        attemptCount++;
        
        if (attemptCount >= maxAttempts) {
            // Show the correct answer after 5 failed attempts
            feedbackEl.textContent = `The correct spelling is "${currentWord.word}". Moving to next word...`;
            feedbackEl.className = 'feedback incorrect';
            showLetterComparison(currentWord.word, currentWord.word); // Show all correct letters
            wordsCompleted++;
            updateProgress();
            
            setTimeout(() => {
                loadNewWord();
            }, 3000);
        } else {
            feedbackEl.textContent = `✗ Incorrect! Try again. (Attempt ${attemptCount}/${maxAttempts})`;
            feedbackEl.className = 'feedback incorrect';
            showLetterComparison(userInput, currentWord.word);
            speakWord(); // Repeat the word
        }
    }
}

// Level up
function levelUp() {
    currentLevel++;
    currentWordLength++;

    // Check if we've completed all levels
    if (currentWordLength > 9) {
        endGame();
        return;
    }

    feedbackEl.textContent = `🎉 Level Complete! Moving to ${currentWordLength}-letter words!`;
    feedbackEl.className = 'feedback correct';
    
    setTimeout(() => {
        updateDisplay();
        loadLevel();
    }, 2000);
}

// Update display
function updateDisplay() {
    levelEl.textContent = currentLevel;
    scoreEl.textContent = score;
    wordLengthEl.textContent = currentWordLength;
}

// Update progress bar
function updateProgress() {
    const progressPercentage = (wordsCompleted / wordsPerLevel) * 100;
    progressFillEl.style.width = `${progressPercentage}%`;
    wordsCompletedEl.textContent = wordsCompleted;
    wordsTotalEl.textContent = wordsPerLevel;
}

// End game
function endGame() {
    gameArea.classList.add('hidden');
    gameOverEl.classList.remove('hidden');
    finalScoreEl.textContent = score;
    finalLevelEl.textContent = currentLevel;
}

// Event listeners
playSoundBtn.addEventListener('click', speakWord);

submitBtn.addEventListener('click', checkSpelling);

spellingInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkSpelling();
    }
});

restartBtn.addEventListener('click', initGame);

// Start the game
initGame();

// Removed auto-play to avoid blocked audio on Chrome OS; user must press Play.
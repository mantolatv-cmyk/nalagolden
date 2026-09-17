const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'js', 'data.js');
let data = fs.readFileSync(dataPath, 'utf8');

const sportsModule = `
  "sports": {
    "title": "Sports & Hobbies",
    "bgImage": "url('images/bg-sports.png')",
    "emoji": "⚽",
    "story": [
      { "text": "Hi! Do you want to play at the park today?" },
      { "text": "Yes, I love sports! What should we play?" },
      { "text": "Let's play soccer! I can kick the ball very far." },
      { "text": "Great! After that, we can go for a swim." },
      { "text": "Swimming is fun! Or we can ride our bikes." }
    ],
    "speaking": [
      { "question": "What is your favorite sport?", "translation": "Qual é o seu esporte favorito?", "starter": "My favorite sport is...", "nalaTip": "Soccer, basketball, swimming?" },
      { "question": "Can you ride a bike?", "translation": "Você sabe andar de bicicleta?", "starter": "Yes, I can ride a bike.", "nalaTip": "I love riding bikes!" }
    ],
    "matching": [
      { "word": "Soccer", "emoji": "⚽", "pt": "Futebol" },
      { "word": "Basketball", "emoji": "🏀", "pt": "Basquete" },
      { "word": "Swim", "emoji": "🏊", "pt": "Nadar" },
      { "word": "Dance", "emoji": "💃", "pt": "Dançar" },
      { "word": "Run", "emoji": "🏃", "pt": "Correr" }
    ],
    "sentence": [
      { "words": ["I", "love", "to", "play", "soccer", "with", "friends"], "translation": "Eu amo jogar futebol com os amigos" },
      { "words": ["She", "can", "swim", "very", "fast", "in", "water"], "translation": "Ela consegue nadar muito rápido na água" }
    ],
    "spelling": ["soccer", "swim", "dance", "run", "bike"],
    "garden": ["soccer", "swim", "run"],
    "quiz": [
      { "question": "What do you do with a soccer ball?", "options": ["Swim", "Kick", "Read", "Sleep"], "correct": 1, "explanation": "You kick a soccer ball!", "nalaMsg": "Goal!" }
    ],
    "truefalse": [
      { "statement": "You swim in a pool.", "translation": "Você nada em uma piscina.", "isTrue": true, "explanation": "Yes, swimming happens in water!" }
    ],
    "fetch": [
      { "id": "ball", "name": "Ball", "emoji": "⚽", "correct": true },
      { "id": "book", "name": "Book", "emoji": "📖", "correct": false }
    ]
  }`;

const weatherModule = `
  "weather": {
    "title": "Weather & Seasons",
    "bgImage": "url('images/bg-weather.png')",
    "emoji": "☀️",
    "story": [
      { "text": "Look outside! The sun is shining today." },
      { "text": "Yes, it is very sunny and hot!" },
      { "text": "I hope it doesn't rain later." },
      { "text": "I like rainy days too, we can jump in puddles." }
    ],
    "speaking": [
      { "question": "How is the weather today?", "translation": "Como está o tempo hoje?", "starter": "Today it is...", "nalaTip": "Sunny or rainy?" }
    ],
    "matching": [
      { "word": "Sunny", "emoji": "☀️", "pt": "Ensolarado" },
      { "word": "Rainy", "emoji": "🌧️", "pt": "Chuvoso" },
      { "word": "Hot", "emoji": "🔥", "pt": "Quente" },
      { "word": "Cold", "emoji": "❄️", "pt": "Frio" },
      { "word": "Winter", "emoji": "⛄", "pt": "Inverno" }
    ],
    "sentence": [
      { "words": ["The", "sun", "is", "very", "hot", "today"], "translation": "O sol está muito quente hoje" }
    ],
    "spelling": ["sunny", "rainy", "hot", "cold", "snow"],
    "garden": ["sunny", "hot", "cold"],
    "quiz": [
      { "question": "What do you use when it rains?", "options": ["Sunglasses", "Umbrella", "Hat", "Shorts"], "correct": 1, "explanation": "An umbrella keeps you dry!", "nalaMsg": "Stay dry!" }
    ],
    "truefalse": [
      { "statement": "Winter is very hot.", "translation": "O inverno é muito quente.", "isTrue": false, "explanation": "Winter is cold!" }
    ],
    "fetch": [
      { "id": "sun", "name": "Sun", "emoji": "☀️", "correct": true },
      { "id": "snow", "name": "Snow", "emoji": "❄️", "correct": true }
    ]
  }`;

const professionsModule = `
  "professions": {
    "title": "Professions",
    "bgImage": "url('images/bg-professions.png')",
    "emoji": "👩‍⚕️",
    "story": [
      { "text": "What do you want to be when you grow up?" },
      { "text": "I want to be a teacher!" },
      { "text": "That is wonderful. I want to be a police dog." }
    ],
    "speaking": [
      { "question": "What does a doctor do?", "translation": "O que um médico faz?", "starter": "A doctor helps...", "nalaTip": "Helps sick people!" }
    ],
    "matching": [
      { "word": "Doctor", "emoji": "👩‍⚕️", "pt": "Médico(a)" },
      { "word": "Teacher", "emoji": "👩‍🏫", "pt": "Professor(a)" },
      { "word": "Vet", "emoji": "🐕‍🦺", "pt": "Veterinário(a)" },
      { "word": "Police", "emoji": "👮", "pt": "Policial" },
      { "word": "Chef", "emoji": "👨‍🍳", "pt": "Cozinheiro(a)" }
    ],
    "sentence": [
      { "words": ["The", "teacher", "helps", "students", "learn", "English"], "translation": "A professora ajuda os alunos a aprenderem inglês" }
    ],
    "spelling": ["doctor", "teacher", "vet", "chef", "nurse"],
    "garden": ["doctor", "vet", "chef"],
    "quiz": [
      { "question": "Who cooks food in a restaurant?", "options": ["Doctor", "Chef", "Teacher", "Pilot"], "correct": 1, "explanation": "A chef makes delicious food!", "nalaMsg": "Yummy!" }
    ],
    "truefalse": [
      { "statement": "A vet helps sick animals.", "translation": "Um veterinário ajuda animais doentes.", "isTrue": true, "explanation": "Yes, vets are animal doctors!" }
    ],
    "fetch": [
      { "id": "stethoscope", "name": "Doctor", "emoji": "🩺", "correct": true },
      { "id": "apple", "name": "Apple", "emoji": "🍎", "correct": false }
    ]
  }`;

const cityModule = `
  "city": {
    "title": "City & Places",
    "bgImage": "url('images/bg-city.png')",
    "emoji": "🏙️",
    "story": [
      { "text": "Let's go to the city today!" },
      { "text": "Where should we go first?" },
      { "text": "Let's buy bread at the bakery." }
    ],
    "speaking": [
      { "question": "Where do you go to play?", "translation": "Onde você vai para brincar?", "starter": "I go to the...", "nalaTip": "Park!" }
    ],
    "matching": [
      { "word": "Park", "emoji": "🏞️", "pt": "Parque" },
      { "word": "Bakery", "emoji": "🥖", "pt": "Padaria" },
      { "word": "Hospital", "emoji": "🏥", "pt": "Hospital" },
      { "word": "School", "emoji": "🏫", "pt": "Escola" },
      { "word": "Museum", "emoji": "🏛️", "pt": "Museu" }
    ],
    "sentence": [
      { "words": ["We", "buy", "bread", "at", "the", "bakery"], "translation": "Nós compramos pão na padaria" }
    ],
    "spelling": ["park", "bakery", "museum", "bank", "store"],
    "garden": ["park", "bank", "store"],
    "quiz": [
      { "question": "Where do you see dinosaurs?", "options": ["Bakery", "Museum", "Park", "Bank"], "correct": 1, "explanation": "Museums have old things like dinosaurs!", "nalaMsg": "Roar!" }
    ],
    "truefalse": [
      { "statement": "You sleep at the park.", "translation": "Você dorme no parque.", "isTrue": false, "explanation": "You sleep at home!" }
    ],
    "fetch": [
      { "id": "bread", "name": "Bread", "emoji": "🥖", "correct": true },
      { "id": "car", "name": "Car", "emoji": "🚗", "correct": false }
    ]
  }`;

const spaceModule = `
  "space": {
    "title": "Space Adventure",
    "bgImage": "url('images/bg-space.png')",
    "emoji": "🚀",
    "story": [
      { "text": "Wow, look at all the stars in the sky." },
      { "text": "I want to fly in a rocket to the moon!" },
      { "text": "Maybe we will meet an alien dog there." }
    ],
    "speaking": [
      { "question": "Do you want to go to space?", "translation": "Você quer ir para o espaço?", "starter": "Yes, I want to...", "nalaTip": "Fly to the moon!" }
    ],
    "matching": [
      { "word": "Rocket", "emoji": "🚀", "pt": "Foguete" },
      { "word": "Star", "emoji": "⭐", "pt": "Estrela" },
      { "word": "Moon", "emoji": "🌙", "pt": "Lua" },
      { "word": "Alien", "emoji": "👽", "pt": "Alienígena" },
      { "word": "Planet", "emoji": "🪐", "pt": "Planeta" }
    ],
    "sentence": [
      { "words": ["The", "rocket", "flies", "to", "the", "moon"], "translation": "O foguete voa para a lua" }
    ],
    "spelling": ["rocket", "star", "moon", "alien", "space"],
    "garden": ["star", "moon", "alien"],
    "quiz": [
      { "question": "What shines at night?", "options": ["Sun", "Stars", "Cloud", "Rain"], "correct": 1, "explanation": "Stars shine brightly at night!", "nalaMsg": "Twinkle twinkle!" }
    ],
    "truefalse": [
      { "statement": "The moon is made of cheese.", "translation": "A lua é feita de queijo.", "isTrue": false, "explanation": "It's made of rock, but cheese is yummy!" }
    ],
    "fetch": [
      { "id": "rocket", "name": "Rocket", "emoji": "🚀", "correct": true },
      { "id": "tree", "name": "Tree", "emoji": "🌳", "correct": false }
    ]
  }`;

// Find the end of the object
const target = '\\n};\\n\\n// Auto-apply background';
if (data.includes(target)) {
  const replacement = \`,
\${sportsModule},
\${weatherModule},
\${professionsModule},
\${cityModule},
\${spaceModule}
};

// Auto-apply background\`;
  data = data.replace(target, replacement);
  fs.writeFileSync(dataPath, data, 'utf8');
  console.log('Successfully added 5 new modules!');
} else {
  console.log('Could not find the injection point in data.js. Looking for alternative...');
  // Fallback if \n\n isn't there
  const target2 = '\\n};\\n// Auto-apply background';
  if (data.includes(target2)) {
    const replacement2 = \`,
\${sportsModule},
\${weatherModule},
\${professionsModule},
\${cityModule},
\${spaceModule}
};
// Auto-apply background\`;
    data = data.replace(target2, replacement2);
    fs.writeFileSync(dataPath, data, 'utf8');
    console.log('Successfully added 5 new modules (fallback)!');
  } else {
    // just replace the last }; before // Auto-apply
    const regex = /\\};\\s*\\/\\/ Auto-apply background/;
    if (regex.test(data)) {
        data = data.replace(regex, \`,
\${sportsModule},
\${weatherModule},
\${professionsModule},
\${cityModule},
\${spaceModule}
};

// Auto-apply background\`);
        fs.writeFileSync(dataPath, data, 'utf8');
        console.log('Successfully added 5 new modules (Regex)!');
    } else {
        console.log('FAILED to find injection point.');
    }
  }
}

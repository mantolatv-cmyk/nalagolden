const gameData = {
  "colors": {
    "speaking": [
      {
        "question": "What is your favorite color?",
        "translation": "Qual é a sua cor favorita?",
        "starter": "My favorite color is...",
        "nalaTip": "Responda com sua cor favorita, ex: My favorite color is blue! 🎨"
      },
      {
        "question": "What color is your shirt today?",
        "translation": "De que cor é a sua camisa hoje?",
        "starter": "My shirt is...",
        "nalaTip": "Olhe para a sua camisa e diga a cor! 👕"
      },
      {
        "question": "What color is the sky on a sunny day?",
        "translation": "De que cor é o céu em um dia ensolarado?",
        "starter": "The sky is...",
        "nalaTip": "Lembre-se do sol e do dia bonito! ☀️"
      },
      {
        "question": "What color are apples usually?",
        "translation": "De que cor são as maçãs normalmente?",
        "starter": "Apples are usually...",
        "nalaTip": "Pense em maçãs vermelhas ou verdes! 🍎"
      },
      {
        "question": "What color do you get if you mix red and yellow?",
        "translation": "Que cor você ganha ao misturar vermelho e amarelo?",
        "starter": "You get...",
        "nalaTip": "É a cor de uma fruta deliciosa! 🍊"
      }
    ],
    "title": "Colors",
    "bgImage": "url('images/bg-colors.png')",
    "emoji": "🎨",
    "story": [
      {
        "text": "Hi Laís! Do you want to paint with me today?"
      },
      {
        "text": "Yes, Nala! I love painting. What color should we use first?"
      },
      {
        "text": "Let's start with Red! We can paint a big red apple."
      },
      {
        "text": "Good idea! And what about the sky?"
      },
      {
        "text": "We need Blue for the sky. A beautiful blue sky!"
      },
      {
        "text": "I want to paint a sun too. Do we have Yellow?"
      },
      {
        "text": "Yes! Yellow for the sun. It is shining bright."
      },
      {
        "text": "Look, Nala. I made Green leaves for the trees."
      },
      {
        "text": "Perfect! Now let's use Pink for some pretty flowers."
      },
      {
        "text": "And Orange for a little butterfly. Our painting is amazing!"
      }
    ],
    "matching": [
      {
        "word": "Red",
        "emoji": "🍎",
        "pt": "Vermelho"
      },
      {
        "word": "Blue",
        "emoji": "💧",
        "pt": "Azul"
      },
      {
        "word": "Yellow",
        "emoji": "☀️",
        "pt": "Amarelo"
      },
      {
        "word": "Green",
        "emoji": "🍃",
        "pt": "Verde"
      },
      {
        "word": "Pink",
        "emoji": "🌸",
        "pt": "Rosa"
      },
      {
        "word": "Orange",
        "emoji": "🍊",
        "pt": "Laranja"
      },
      {
        "word": "Purple",
        "emoji": "🍇",
        "pt": "Roxo"
      },
      {
        "word": "Black",
        "emoji": "🎱",
        "pt": "Preto"
      },
      {
        "word": "White",
        "emoji": "☁️",
        "pt": "Branco"
      },
      {
        "word": "Brown",
        "emoji": "🐻",
        "pt": "Marrom"
      }
    ],
    "sentence": [
      {
        "words": [
          "The",
          "apple",
          "is",
          "red"
        ],
        "translation": "A maçã é vermelha"
      },
      {
        "words": [
          "I",
          "see",
          "a",
          "blue",
          "sky"
        ],
        "translation": "Eu vejo um céu azul"
      },
      {
        "words": [
          "The",
          "sun",
          "is",
          "yellow"
        ],
        "translation": "O sol é amarelo"
      },
      {
        "words": [
          "Leaves",
          "are",
          "green"
        ],
        "translation": "Folhas são verdes"
      },
      {
        "words": [
          "I",
          "like",
          "pink",
          "flowers"
        ],
        "translation": "Eu gosto de flores rosas"
      }
    ],
    "spelling": [
      "red",
      "blue",
      "green",
      "yellow",
      "pink",
      "orange",
      "purple",
      "black",
      "white",
      "brown"
    ],
    "garden": [
      "red",
      "blue",
      "yellow",
      "green",
      "pink",
      "orange",
      "purple",
      "black",
      "white",
      "brown"
    ],
    "fetch": [
      {
        "id": "red_apple",
        "name": "Red Apple",
        "emoji": "🍎",
        "correct": true
      },
      {
        "id": "blue_berry",
        "name": "Blue Berry",
        "emoji": "🫐",
        "correct": true
      },
      {
        "id": "yellow_banana",
        "name": "Yellow Banana",
        "emoji": "🍌",
        "correct": true
      },
      {
        "id": "green_leaf",
        "name": "Green Leaf",
        "emoji": "🍃",
        "correct": true
      },
      {
        "id": "orange_fruit",
        "name": "Orange",
        "emoji": "🍊",
        "correct": true
      },
      {
        "id": "black_cat",
        "name": "Black Cat",
        "emoji": "🐈‍⬛",
        "correct": false
      },
      {
        "id": "white_cloud",
        "name": "White Cloud",
        "emoji": "☁️",
        "correct": false
      },
      {
        "id": "purple_grape",
        "name": "Purple Grape",
        "emoji": "🍇",
        "correct": true
      },
      {
        "id": "brown_bear",
        "name": "Brown Bear",
        "emoji": "🐻",
        "correct": true
      },
      {
        "id": "car",
        "name": "Car",
        "emoji": "🚗",
        "correct": false
      },
      {
        "id": "phone",
        "name": "Phone",
        "emoji": "📱",
        "correct": false
      }
    ],
    "quiz": [
      {
        "question": "Como se diz <span class=\"quiz-highlight\">\"Vermelho\"</span> em inglês?",
        "options": [
          "Blue",
          "Green",
          "Red",
          "Yellow"
        ],
        "correct": 2,
        "explanation": "Isso mesmo! \"Red\" significa vermelho! ❤️",
        "nalaMsg": "You're amazing! ⭐"
      },
      {
        "question": "Qual a cor <span class=\"quiz-highlight\">\"Azul\"</span> em inglês?",
        "options": [
          "Blue",
          "Pink",
          "Orange",
          "White"
        ],
        "correct": 0,
        "explanation": "Perfeito! \"Blue\" é azul em inglês! 💙",
        "nalaMsg": "You did it! 🏆"
      },
      {
        "question": "Como se diz <span class=\"quiz-highlight\">\"Amarelo\"</span> em inglês?",
        "options": [
          "Purple",
          "Yellow",
          "Black",
          "Brown"
        ],
        "correct": 1,
        "explanation": "Muito bem! \"Yellow\" é amarelo! 💛",
        "nalaMsg": "Fantastic! 🌟"
      },
      {
        "question": "Qual é a cor <span class=\"quiz-highlight\">\"Verde\"</span>?",
        "options": [
          "Red",
          "Orange",
          "Pink",
          "Green"
        ],
        "correct": 3,
        "explanation": "Correto! \"Green\" é verde! 💚",
        "nalaMsg": "Great job! 🐾"
      },
      {
        "question": "A cor <span class=\"quiz-highlight\">\"Rosa\"</span> se diz:",
        "options": [
          "Pink",
          "White",
          "Blue",
          "Brown"
        ],
        "correct": 0,
        "explanation": "Sim! \"Pink\" é rosa! 🩷",
        "nalaMsg": "Super! 🚀"
      }
    ],
    "truefalse": [
      {
        "question": "Red is the color of the sky.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! The sky is usually blue. 🔵",
        "nalaMsg": "Good try!"
      },
      {
        "question": "A banana is yellow.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! Bananas are yellow. 🍌",
        "nalaMsg": "Yummy!"
      },
      {
        "question": "Pink is a mixture of red and white.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! Red + White = Pink! 💖",
        "nalaMsg": "Great job!"
      },
      {
        "question": "Grass is blue.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! Grass is green. 🌿",
        "nalaMsg": "Keep going!"
      },
      {
        "question": "Snow is white.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! Snow is white. ❄️",
        "nalaMsg": "Perfect!"
      }
    ]
  },
  "animals": {
    "speaking": [
      {
        "question": "Do you have a pet at home?",
        "translation": "Você tem um animal de estimação em casa?",
        "starter": "Yes, I have a... / No, I don't have a pet.",
        "nalaTip": "Diga se tem um dog, cat ou outro bichinho! 🐕"
      },
      {
        "question": "What sound does a dog make?",
        "translation": "Que som o cachorro faz?",
        "starter": "A dog goes woof woof!",
        "nalaTip": "Faça o som da Nala! 🐾"
      },
      {
        "question": "Which wild animal do you think is the coolest?",
        "translation": "Qual animal selvagem você acha mais legal?",
        "starter": "I think the coolest animal is...",
        "nalaTip": "Pense em leões, tigres ou elefantes! 🦁"
      },
      {
        "question": "Can a fish swim fast in water?",
        "translation": "Um peixe pode nadar rápido na água?",
        "starter": "Yes, a fish can swim fast!",
        "nalaTip": "Responda com entusiasmo! 🐟"
      },
      {
        "question": "What is your favorite animal in the zoo?",
        "translation": "Qual é o seu animal favorito no zoológico?",
        "starter": "My favorite zoo animal is...",
        "nalaTip": "Pense no animal que você mais gosta de ver! 🐒"
      }
    ],
    "title": "Animals",
    "bgImage": "url('images/bg-animals.png')",
    "emoji": "🐾",
    "story": [
      {
        "text": "Laís, look at all the animals in the forest!"
      },
      {
        "text": "Wow! You are a very happy Dog today, Nala."
      },
      {
        "text": "I love playing here. Did you see the Cat over there?"
      },
      {
        "text": "Yes, the cat is sleeping. And look up in the tree!"
      },
      {
        "text": "Oh, it's a small blue Bird singing a beautiful song."
      },
      {
        "text": "Let's walk near the lake. Maybe we can see a Fish."
      },
      {
        "text": "I see a fish! It is swimming fast."
      },
      {
        "text": "Wait, what is that jumping in the grass?"
      },
      {
        "text": "It's a fast Rabbit! Hop, hop, hop!"
      },
      {
        "text": "And look down here... a slow green Turtle walking near the water."
      }
    ],
    "matching": [
      {
        "word": "Dog",
        "emoji": "🐕",
        "pt": "Cachorro"
      },
      {
        "word": "Cat",
        "emoji": "🐈",
        "pt": "Gato"
      },
      {
        "word": "Bird",
        "emoji": "🐦",
        "pt": "Pássaro"
      },
      {
        "word": "Fish",
        "emoji": "🐟",
        "pt": "Peixe"
      },
      {
        "word": "Rabbit",
        "emoji": "🐇",
        "pt": "Coelho"
      },
      {
        "word": "Turtle",
        "emoji": "🐢",
        "pt": "Tartaruga"
      },
      {
        "word": "Lion",
        "emoji": "🦁",
        "pt": "Leão"
      },
      {
        "word": "Elephant",
        "emoji": "🐘",
        "pt": "Elefante"
      },
      {
        "word": "Monkey",
        "emoji": "🐒",
        "pt": "Macaco"
      },
      {
        "word": "Tiger",
        "emoji": "🐅",
        "pt": "Tigre"
      }
    ],
    "sentence": [
      {
        "words": [
          "The",
          "dog",
          "is",
          "brown"
        ],
        "translation": "O cachorro é marrom"
      },
      {
        "words": [
          "I",
          "love",
          "my",
          "cat"
        ],
        "translation": "Eu amo meu gato"
      },
      {
        "words": [
          "The",
          "bird",
          "can",
          "fly"
        ],
        "translation": "O pássaro pode voar"
      },
      {
        "words": [
          "A",
          "fish",
          "swims",
          "fast"
        ],
        "translation": "Um peixe nada rápido"
      },
      {
        "words": [
          "Look",
          "at",
          "the",
          "lion"
        ],
        "translation": "Olhe para o leão"
      }
    ],
    "spelling": [
      "dog",
      "cat",
      "bird",
      "fish",
      "rabbit",
      "turtle",
      "lion",
      "tiger",
      "monkey",
      "elephant"
    ],
    "garden": [
      "dog",
      "cat",
      "bird",
      "fish",
      "rabbit",
      "turtle",
      "lion",
      "tiger"
    ],
    "fetch": [
      {
        "id": "bone",
        "name": "Bone (Dog)",
        "emoji": "🦴",
        "correct": true
      },
      {
        "id": "fish",
        "name": "Fish",
        "emoji": "🐟",
        "correct": true
      },
      {
        "id": "mouse",
        "name": "Mouse (Cat)",
        "emoji": "🐁",
        "correct": true
      },
      {
        "id": "carrot",
        "name": "Carrot (Rabbit)",
        "emoji": "🥕",
        "correct": true
      },
      {
        "id": "shoe",
        "name": "Shoe",
        "emoji": "👞",
        "correct": false
      },
      {
        "id": "pencil",
        "name": "Pencil",
        "emoji": "✏️",
        "correct": false
      },
      {
        "id": "tiger",
        "name": "Tiger",
        "emoji": "🐅",
        "correct": true
      },
      {
        "id": "monkey",
        "name": "Monkey",
        "emoji": "🐒",
        "correct": true
      },
      {
        "id": "penguin",
        "name": "Penguin",
        "emoji": "🐧",
        "correct": true
      },
      {
        "id": "computer",
        "name": "Computer",
        "emoji": "💻",
        "correct": false
      },
      {
        "id": "clock",
        "name": "Clock",
        "emoji": "🕰️",
        "correct": false
      }
    ],
    "quiz": [
      {
        "question": "Como se diz <span class=\"quiz-highlight\">\"Cachorro\"</span> em inglês?",
        "options": [
          "Cat",
          "Dog",
          "Bird",
          "Fish"
        ],
        "correct": 1,
        "explanation": "Parabéns! \"Dog\" é cachorro em inglês! 🐕",
        "nalaMsg": "Muito bem! 🎉"
      },
      {
        "question": "Como se diz <span class=\"quiz-highlight\">\"Gato\"</span> em inglês?",
        "options": [
          "Dog",
          "Mouse",
          "Cat",
          "Rabbit"
        ],
        "correct": 2,
        "explanation": "Certíssimo! \"Cat\" é gato em inglês! 🐱",
        "nalaMsg": "Awesome! 🌟"
      },
      {
        "question": "Qual é o nome do <span class=\"quiz-highlight\">\"Pássaro\"</span>?",
        "options": [
          "Turtle",
          "Lion",
          "Tiger",
          "Bird"
        ],
        "correct": 3,
        "explanation": "Isso! \"Bird\" é pássaro! 🐦",
        "nalaMsg": "Great! ✨"
      },
      {
        "question": "O <span class=\"quiz-highlight\">\"Leão\"</span>, rei da floresta, se chama:",
        "options": [
          "Lion",
          "Monkey",
          "Elephant",
          "Cat"
        ],
        "correct": 0,
        "explanation": "Incrível! \"Lion\" é leão! 🦁",
        "nalaMsg": "Roar! 🦁"
      },
      {
        "question": "E como falamos <span class=\"quiz-highlight\">\"Peixe\"</span>?",
        "options": [
          "Fish",
          "Dog",
          "Rabbit",
          "Tiger"
        ],
        "correct": 0,
        "explanation": "Exato! \"Fish\" é peixe! 🐟",
        "nalaMsg": "Glub glub! 💧"
      }
    ],
    "truefalse": [
      {
        "question": "A dog says \"Meow\".",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! A cat says meow. 🐱",
        "nalaMsg": "Woof woof!"
      },
      {
        "question": "A bird can fly.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! Birds have wings and can fly. 🐦",
        "nalaMsg": "So high!"
      },
      {
        "question": "Fish live in trees.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! Fish live in the water. 🐟",
        "nalaMsg": "Splash!"
      },
      {
        "question": "A turtle walks very fast.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! Turtles are known for walking slowly. 🐢",
        "nalaMsg": "Slow and steady!"
      },
      {
        "question": "A tiger has stripes.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! Tigers have beautiful orange and black stripes. 🐅",
        "nalaMsg": "Roar!"
      }
    ]
  },
  "numbers": {
    "speaking": [
      {
        "question": "How old are you?",
        "translation": "Quantos anos você tem?",
        "starter": "I am ... years old.",
        "nalaTip": "Diga a sua idade em inglês! 🎂"
      },
      {
        "question": "How many fingers do you have on one hand?",
        "translation": "Quantos dedos você tem em uma mão?",
        "starter": "I have five fingers on one hand.",
        "nalaTip": "Conte: 1, 2, 3, 4, 5! 🖐️"
      },
      {
        "question": "What number comes after seven?",
        "translation": "Qual número vem depois do sete?",
        "starter": "The number after seven is eight.",
        "nalaTip": "Contando: 7... 8! 8️⃣"
      },
      {
        "question": "How many days are there in a week?",
        "translation": "Quantos dias há em uma semana?",
        "starter": "There are seven days in a week.",
        "nalaTip": "Sete dias na semana! 📅"
      },
      {
        "question": "Can you count from one to five out loud?",
        "translation": "Você consegue contar de um a cinco em voz alta?",
        "starter": "One, two, three, four, five!",
        "nalaTip": "Conte bem alto e claro! 🔢"
      }
    ],
    "title": "Numbers",
    "bgImage": "url('images/bg-numbers.png')",
    "emoji": "🔢",
    "story": [
      {
        "text": "Let's count our toys, Laís! I have One big bone."
      },
      {
        "text": "That is great! I have Two red balls here."
      },
      {
        "text": "I found Three small rocks in the garden."
      },
      {
        "text": "Look, there are Four birds flying in the sky."
      },
      {
        "text": "Can you see the Five yellow flowers?"
      },
      {
        "text": "Yes! And there are Six green leaves falling from the tree."
      },
      {
        "text": "Let's walk Seven steps forward. One, two..."
      },
      {
        "text": "Eight, Nine, Ten! We walked ten steps together."
      },
      {
        "text": "Counting is so much fun, Laís!"
      },
      {
        "text": "You are the best dog ever, Nala. Let's count again later!"
      }
    ],
    "matching": [
      {
        "word": "One",
        "emoji": "1️⃣",
        "pt": "Um"
      },
      {
        "word": "Two",
        "emoji": "2️⃣",
        "pt": "Dois"
      },
      {
        "word": "Three",
        "emoji": "3️⃣",
        "pt": "Três"
      },
      {
        "word": "Four",
        "emoji": "4️⃣",
        "pt": "Quatro"
      },
      {
        "word": "Five",
        "emoji": "5️⃣",
        "pt": "Cinco"
      },
      {
        "word": "Six",
        "emoji": "6️⃣",
        "pt": "Seis"
      },
      {
        "word": "Seven",
        "emoji": "7️⃣",
        "pt": "Sete"
      },
      {
        "word": "Eight",
        "emoji": "8️⃣",
        "pt": "Oito"
      },
      {
        "word": "Nine",
        "emoji": "9️⃣",
        "pt": "Nove"
      },
      {
        "word": "Ten",
        "emoji": "🔟",
        "pt": "Dez"
      }
    ],
    "sentence": [
      {
        "words": [
          "I",
          "have",
          "one",
          "dog"
        ],
        "translation": "Eu tenho um cachorro"
      },
      {
        "words": [
          "She",
          "has",
          "two",
          "cats"
        ],
        "translation": "Ela tem dois gatos"
      },
      {
        "words": [
          "I",
          "see",
          "three",
          "birds"
        ],
        "translation": "Eu vejo três pássaros"
      },
      {
        "words": [
          "Count",
          "to",
          "four"
        ],
        "translation": "Conte até quatro"
      },
      {
        "words": [
          "We",
          "have",
          "five",
          "books"
        ],
        "translation": "Nós temos cinco livros"
      }
    ],
    "spelling": [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten"
    ],
    "garden": [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten"
    ],
    "fetch": [
      {
        "id": "one_apple",
        "name": "1 Apple",
        "emoji": "🍎",
        "correct": true
      },
      {
        "id": "two_dogs",
        "name": "2 Dogs",
        "emoji": "🐕🐕",
        "correct": true
      },
      {
        "id": "three_cats",
        "name": "3 Cats",
        "emoji": "🐈🐈🐈",
        "correct": true
      },
      {
        "id": "letter_A",
        "name": "Letter A",
        "emoji": "🅰️",
        "correct": false
      },
      {
        "id": "letter_B",
        "name": "Letter B",
        "emoji": "🅱️",
        "correct": false
      },
      {
        "id": "seven",
        "name": "Seven",
        "emoji": "7️⃣",
        "correct": true
      },
      {
        "id": "eight",
        "name": "Eight",
        "emoji": "8️⃣",
        "correct": true
      },
      {
        "id": "nine",
        "name": "Nine",
        "emoji": "9️⃣",
        "correct": true
      },
      {
        "id": "apple",
        "name": "Apple",
        "emoji": "🍎",
        "correct": false
      }
    ],
    "quiz": [
      {
        "question": "Como se diz o número <span class=\"quiz-highlight\">\"Um\"</span>?",
        "options": [
          "Two",
          "One",
          "Four",
          "Ten"
        ],
        "correct": 1,
        "explanation": "Isso mesmo! \"One\" é um! 1️⃣",
        "nalaMsg": "Awesome! 🌟"
      },
      {
        "question": "Qual é o número <span class=\"quiz-highlight\">\"Cinco\"</span> em inglês?",
        "options": [
          "Three",
          "Five",
          "Seven",
          "Four"
        ],
        "correct": 1,
        "explanation": "Correto! \"Five\" é o número cinco! 🖐️",
        "nalaMsg": "Keep going! 💪"
      },
      {
        "question": "O número <span class=\"quiz-highlight\">\"Dez\"</span> se diz:",
        "options": [
          "Ten",
          "Nine",
          "Two",
          "Eight"
        ],
        "correct": 0,
        "explanation": "Maravilha! \"Ten\" é dez! 🔟",
        "nalaMsg": "You did it! 🏆"
      },
      {
        "question": "Como se fala o número <span class=\"quiz-highlight\">\"Dois\"</span>?",
        "options": [
          "Four",
          "One",
          "Three",
          "Two"
        ],
        "correct": 3,
        "explanation": "Perfeito! \"Two\" é dois! ✌️",
        "nalaMsg": "Super! 🐾"
      },
      {
        "question": "Qual é o número <span class=\"quiz-highlight\">\"Sete\"</span>?",
        "options": [
          "Six",
          "Seven",
          "Nine",
          "Five"
        ],
        "correct": 1,
        "explanation": "Isso! \"Seven\" é sete! 7️⃣",
        "nalaMsg": "Amazing! ✨"
      }
    ],
    "truefalse": [
      {
        "question": "Two comes after one.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 1, then 2. 🔢",
        "nalaMsg": "Spot on!"
      },
      {
        "question": "Five is smaller than three.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! Five is bigger than three. 🖐️",
        "nalaMsg": "Count with me!"
      },
      {
        "question": "Ten is the last number on your fingers.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! We usually have 10 fingers. 👐",
        "nalaMsg": "High ten!"
      },
      {
        "question": "Three plus two is six.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! 3 + 2 = 5. 🧮",
        "nalaMsg": "Try again!"
      },
      {
        "question": "Seven is a lucky number for many people.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! Many people think 7 is lucky! 🍀",
        "nalaMsg": "Lucky you!"
      }
    ]
  },
  "family": {
    "speaking": [
      {
        "question": "How many people are in your family?",
        "translation": "Quantas pessoas há na sua família?",
        "starter": "There are ... people in my family.",
        "nalaTip": "Conte quem mora com você! 👨‍👩‍👧‍👦"
      },
      {
        "question": "Do you have any brothers or sisters?",
        "translation": "Você tem irmãos ou irmãs?",
        "starter": "Yes, I have... / No, I am an only child.",
        "nalaTip": "Fale sobre seus irmãos (brothers/sisters)! 👫"
      },
      {
        "question": "What is your mother's name?",
        "translation": "Qual é o nome da sua mãe?",
        "starter": "My mother's name is...",
        "nalaTip": "Diga o nome da sua mamãe! 👩"
      },
      {
        "question": "What do you like to do with your family?",
        "translation": "O que você gosta de fazer com sua família?",
        "starter": "We like to...",
        "nalaTip": "Pense em passear, comer pizza ou jogar! 🍕"
      },
      {
        "question": "Who is your favorite family member to play with?",
        "translation": "Com quem da família você mais gosta de brincar?",
        "starter": "I love to play with my...",
        "nalaTip": "Pense nos seus primos, irmãos ou pais! 🧸"
      }
    ],
    "title": "Family",
    "bgImage": "url('images/bg-family.png')",
    "emoji": "👨‍👩‍👧‍👦",
    "story": [
      {
        "text": "Laís, who is in your Family?"
      },
      {
        "text": "My family is big! I have a Mommy and a Daddy."
      },
      {
        "text": "That is nice. Do you have a Brother?"
      },
      {
        "text": "Yes! My brother likes to play with me."
      },
      {
        "text": "And do you have a Sister too?"
      },
      {
        "text": "Yes, I have a little sister. She is a cute baby."
      },
      {
        "text": "I love playing with babies! What about your Grandpa?"
      },
      {
        "text": "My grandpa tells the best stories."
      },
      {
        "text": "And your Grandma?"
      },
      {
        "text": "My grandma makes delicious cookies for all the family!"
      }
    ],
    "matching": [
      {
        "word": "Mommy",
        "emoji": "👩",
        "pt": "Mamãe"
      },
      {
        "word": "Daddy",
        "emoji": "👨",
        "pt": "Papai"
      },
      {
        "word": "Brother",
        "emoji": "👦",
        "pt": "Irmão"
      },
      {
        "word": "Sister",
        "emoji": "👧",
        "pt": "Irmã"
      },
      {
        "word": "Baby",
        "emoji": "👶",
        "pt": "Bebê"
      },
      {
        "word": "Grandpa",
        "emoji": "👴",
        "pt": "Vovô"
      },
      {
        "word": "Grandma",
        "emoji": "👵",
        "pt": "Vovó"
      },
      {
        "word": "Uncle",
        "emoji": "👨‍🦱",
        "pt": "Tio"
      },
      {
        "word": "Aunt",
        "emoji": "👩‍🦱",
        "pt": "Tia"
      },
      {
        "word": "Cousin",
        "emoji": "🧒",
        "pt": "Primo"
      }
    ],
    "sentence": [
      {
        "words": [
          "My",
          "mommy",
          "is",
          "nice"
        ],
        "translation": "Minha mamãe é legal"
      },
      {
        "words": [
          "I",
          "love",
          "my",
          "family"
        ],
        "translation": "Eu amo minha família"
      },
      {
        "words": [
          "This",
          "is",
          "my",
          "daddy"
        ],
        "translation": "Este é meu papai"
      },
      {
        "words": [
          "My",
          "brother",
          "is",
          "tall"
        ],
        "translation": "Meu irmão é alto"
      },
      {
        "words": [
          "I",
          "play",
          "with",
          "sister"
        ],
        "translation": "Eu brinco com a irmã"
      }
    ],
    "spelling": [
      "mommy",
      "daddy",
      "sister",
      "brother",
      "baby",
      "grandpa",
      "grandma",
      "family",
      "uncle",
      "aunt"
    ],
    "garden": [
      "mommy",
      "daddy",
      "brother",
      "sister",
      "baby",
      "family",
      "grandma",
      "grandpa"
    ],
    "fetch": [
      {
        "id": "mom_gift",
        "name": "Gift for Mommy",
        "emoji": "🎁",
        "correct": true
      },
      {
        "id": "dad_tie",
        "name": "Daddy's Tie",
        "emoji": "👔",
        "correct": true
      },
      {
        "id": "baby_bottle",
        "name": "Baby Bottle",
        "emoji": "🍼",
        "correct": true
      },
      {
        "id": "grandpa_glasses",
        "name": "Grandpa's Glasses",
        "emoji": "👓",
        "correct": true
      },
      {
        "id": "trash",
        "name": "Trash",
        "emoji": "🗑️",
        "correct": false
      },
      {
        "id": "spider",
        "name": "Spider",
        "emoji": "🕷️",
        "correct": false
      },
      {
        "id": "cousin",
        "name": "Cousin",
        "emoji": "👦",
        "correct": true
      },
      {
        "id": "aunt",
        "name": "Aunt",
        "emoji": "👩",
        "correct": true
      },
      {
        "id": "uncle",
        "name": "Uncle",
        "emoji": "👨",
        "correct": true
      },
      {
        "id": "tree",
        "name": "Tree",
        "emoji": "🌳",
        "correct": false
      }
    ],
    "quiz": [
      {
        "question": "Como se diz a <span class=\"quiz-highlight\">\"Mamãe\"</span> (Mother)?",
        "options": [
          "Sister",
          "Mommy",
          "Aunt",
          "Grandma"
        ],
        "correct": 1,
        "explanation": "Correto! \"Mommy\" é mamãe! 👩",
        "nalaMsg": "Muito bem! 🎉"
      },
      {
        "question": "E o <span class=\"quiz-highlight\">\"Papai\"</span> (Father)?",
        "options": [
          "Uncle",
          "Grandpa",
          "Daddy",
          "Cousin"
        ],
        "correct": 2,
        "explanation": "Isso aí! \"Daddy\" é papai! 👨",
        "nalaMsg": "Awesome! 🌟"
      },
      {
        "question": "Como se fala <span class=\"quiz-highlight\">\"Irmão\"</span> em inglês?",
        "options": [
          "Brother",
          "Sister",
          "Baby",
          "Uncle"
        ],
        "correct": 0,
        "explanation": "Excelente! \"Brother\" é irmão! 👦",
        "nalaMsg": "You rock! 🎸"
      },
      {
        "question": "Como se fala <span class=\"quiz-highlight\">\"Irmã\"</span> em inglês?",
        "options": [
          "Aunt",
          "Sister",
          "Grandma",
          "Brother"
        ],
        "correct": 1,
        "explanation": "Muito bom! \"Sister\" é irmã! 👧",
        "nalaMsg": "Great job! 🏆"
      },
      {
        "question": "O que significa a palavra <span class=\"quiz-highlight\">\"Grandpa\"</span>?",
        "options": [
          "Tio",
          "Papai",
          "Avô / Vovô",
          "Irmão"
        ],
        "correct": 2,
        "explanation": "Correto! \"Grandpa\" é vovô! 👴",
        "nalaMsg": "So smart! 💡"
      }
    ],
    "truefalse": [
      {
        "question": "A mother is a female parent.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 👩‍👧",
        "nalaMsg": "Family love!"
      },
      {
        "question": "A brother is your sister.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! A brother is a boy. 👦",
        "nalaMsg": "Nice!"
      },
      {
        "question": "Grandpa is your father's father.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! (Or your mother's father). 👴",
        "nalaMsg": "Wise choice!"
      },
      {
        "question": "An aunt is your brother.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! An aunt is your parent's sister. 👩",
        "nalaMsg": "Almost!"
      },
      {
        "question": "Cousins are part of the family.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! We love our cousins. 👦👧",
        "nalaMsg": "Yay!"
      }
    ]
  },
  "routine": {
    "speaking": [
      {
        "question": "What do you eat for breakfast in the morning?",
        "translation": "O que você come no café da manhã?",
        "starter": "For breakfast, I eat...",
        "nalaTip": "Pense em bread, fruit, milk ou cereal! 🥐"
      },
      {
        "question": "When do you usually do your homework?",
        "translation": "Quando você costuma fazer seu dever de casa?",
        "starter": "I do my homework in the afternoon / evening.",
        "nalaTip": "Diga o período do dia! ⏰"
      },
      {
        "question": "What time do you go to sleep at night?",
        "translation": "A que horas você vai dormir à noite?",
        "starter": "I go to sleep at nine o'clock.",
        "nalaTip": "Diga a hora em que você vai para a cama! 🌙"
      },
      {
        "question": "What is the first thing you do when you wake up?",
        "translation": "Qual a primeira coisa que você faz ao acordar?",
        "starter": "When I wake up, I brush my teeth / eat breakfast.",
        "nalaTip": "Pense na sua rotina matinal! 🌅"
      },
      {
        "question": "How do you unwind after a busy day at school?",
        "translation": "Como você relaxa após um dia cheio na escola?",
        "starter": "I unwind by playing games / watching TV.",
        "nalaTip": "Fale como você gosta de relaxar! 🧘"
      }
    ],
    "title": "Daily Routine",
    "bgImage": "url('images/bg-routine.png')",
    "emoji": "⏰",
    "flashcards": [
      {
        "en": "Work out",
        "pt": "Malhar",
        "emoji": "🏋️"
      },
      {
        "en": "Get dressed",
        "pt": "Vestir-se",
        "emoji": "👔"
      },
      {
        "en": "Commute",
        "pt": "Trajeto",
        "emoji": "🚌"
      },
      {
        "en": "Prepare",
        "pt": "Preparar",
        "emoji": "🍳"
      },
      {
        "en": "Schedule",
        "pt": "Agenda",
        "emoji": "📅"
      },
      {
        "en": "Organize",
        "pt": "Organizar",
        "emoji": "🗂️"
      },
      {
        "en": "Unwind",
        "pt": "Relaxar",
        "emoji": "🧘"
      },
      {
        "en": "Consistency",
        "pt": "Consistência",
        "emoji": "📈"
      },
      {
        "en": "Refresh",
        "pt": "Refrescar",
        "emoji": "🚿"
      },
      {
        "en": "Fall asleep",
        "pt": "Adormecer",
        "emoji": "😴"
      },
      {
        "en": "Wake up",
        "pt": "Acordar",
        "emoji": "🌅"
      },
      {
        "en": "Shower",
        "pt": "Banho",
        "emoji": "🛀"
      },
      {
        "en": "Breakfast",
        "pt": "Café da Manhã",
        "emoji": "🥐"
      },
      {
        "en": "Evening",
        "pt": "Noite",
        "emoji": "🌆"
      }
    ],
    "story": [
      {
        "text": "My daily routine is quite busy, Laís!"
      },
      {
        "text": "I usually wake up at 6 AM and work out immediately."
      },
      {
        "text": "After exercising, I take a refreshing shower and get dressed."
      },
      {
        "text": "I always prepare a healthy breakfast before leaving."
      },
      {
        "text": "My daily commute to work takes about thirty minutes."
      },
      {
        "text": "During the afternoon, I organize my schedule."
      },
      {
        "text": "I never skip my English studies in the evening."
      },
      {
        "text": "Consistency is crucial for language learning!"
      },
      {
        "text": "I prefer to unwind by reading a novel before bed."
      },
      {
        "text": "Finally, I turn off the lights and fall asleep."
      },
      {
        "text": "How is your schedule for tomorrow?"
      },
      {
        "text": "I hope you have time to work out too!"
      },
      {
        "text": "Don't forget to prepare a good breakfast."
      },
      {
        "text": "Let's organize our tasks and unwind later!"
      }
    ],
    "matching": [
      {
        "word": "Work out",
        "emoji": "🏋️",
        "pt": "Malhar"
      },
      {
        "word": "Get dressed",
        "emoji": "👔",
        "pt": "Vestir-se"
      },
      {
        "word": "Commute",
        "emoji": "🚌",
        "pt": "Ir para o trabalho"
      },
      {
        "word": "Prepare",
        "emoji": "🍳",
        "pt": "Preparar"
      },
      {
        "word": "Schedule",
        "emoji": "📅",
        "pt": "Agendar"
      },
      {
        "word": "Organize",
        "emoji": "🗂️",
        "pt": "Organizar"
      },
      {
        "word": "Unwind",
        "emoji": "🧘",
        "pt": "Relaxar"
      },
      {
        "word": "Consistency",
        "emoji": "📈",
        "pt": "Consistência"
      },
      {
        "word": "Refresh",
        "emoji": "🚿",
        "pt": "Atualizar"
      },
      {
        "word": "Fall asleep",
        "emoji": "😴",
        "pt": "Adormecer"
      },
      {
        "word": "Wake up",
        "emoji": "🌅",
        "pt": "Acordar"
      },
      {
        "word": "Shower",
        "emoji": "🛀",
        "pt": "Banho"
      },
      {
        "word": "Breakfast",
        "emoji": "🥐",
        "pt": "Café da manhã"
      },
      {
        "word": "Evening",
        "emoji": "🌆",
        "pt": "Noite"
      }
    ],
    "sentence": [
      {
        "words": [
          "I",
          "work",
          "out",
          "every",
          "morning"
        ],
        "translation": "Eu malho toda manhã"
      },
      {
        "words": [
          "She",
          "prepares",
          "a",
          "healthy",
          "breakfast"
        ],
        "translation": "Ela prepara um café da manhã saudável"
      },
      {
        "words": [
          "My",
          "commute",
          "is",
          "very",
          "fast"
        ],
        "translation": "Meu trajeto é muito rápido"
      },
      {
        "words": [
          "We",
          "organize",
          "our",
          "daily",
          "schedule"
        ],
        "translation": "Nós organizamos nossa rotina diária"
      },
      {
        "words": [
          "I",
          "need",
          "to",
          "unwind",
          "now"
        ],
        "translation": "Eu preciso relaxar agora"
      },
      {
        "words": [
          "Wake",
          "up",
          "early",
          "today"
        ],
        "translation": "Acorde cedo hoje"
      },
      {
        "words": [
          "Take",
          "a",
          "refreshing",
          "shower"
        ],
        "translation": "Tome um banho revigorante"
      },
      {
        "words": [
          "Get",
          "dressed",
          "for",
          "school"
        ],
        "translation": "Vista-se para a escola"
      },
      {
        "words": [
          "Consistency",
          "is",
          "very",
          "important"
        ],
        "translation": "A consistência é muito importante"
      },
      {
        "words": [
          "Fall",
          "asleep",
          "quickly",
          "tonight"
        ],
        "translation": "Adormeça rapidamente esta noite"
      },
      {
        "words": [
          "I",
          "study",
          "in",
          "the",
          "evening"
        ],
        "translation": "Eu estudo à noite"
      },
      {
        "words": [
          "Prepare",
          "your",
          "own",
          "breakfast"
        ],
        "translation": "Prepare seu próprio café da manhã"
      },
      {
        "words": [
          "Organize",
          "your",
          "desk",
          "now"
        ],
        "translation": "Organize sua mesa agora"
      },
      {
        "words": [
          "My",
          "schedule",
          "is",
          "full",
          "today"
        ],
        "translation": "Minha agenda está cheia hoje"
      }
    ],
    "spelling": [
      "workout",
      "commute",
      "prepare",
      "schedule",
      "organize",
      "unwind",
      "refresh",
      "dressed",
      "healthy",
      "always",
      "wakeup",
      "shower",
      "breakfast",
      "evening"
    ],
    "garden": [
      {
        "word": "Work out",
        "question": "What do you do at the gym to stay strong and healthy?"
      },
      {
        "word": "Get dressed",
        "question": "What do you do when you put on your clothes in the morning?"
      },
      {
        "word": "Commute",
        "question": "How do you call the journey between your home and work or school?"
      },
      {
        "word": "Prepare",
        "question": "What do you do when you get your backpack ready for the next day?"
      },
      {
        "word": "Schedule",
        "question": "Where do you write down your plans and appointments?"
      },
      {
        "word": "Organize",
        "question": "What do you do to keep your desk neat and tidy?"
      },
      {
        "word": "Unwind",
        "question": "What do you do to relax after a very busy day?"
      },
      {
        "word": "Consistency",
        "question": "What is it called when you practice English every single day?"
      },
      {
        "word": "Refresh",
        "question": "How do you feel after taking a nice cool shower?"
      },
      {
        "word": "Wake up",
        "question": "What is the very first thing you do in the morning when your alarm rings?"
      },
      {
        "word": "Shower",
        "question": "Where do you go to wash your body with water and soap?"
      },
      {
        "word": "Breakfast",
        "question": "What is the first and most important meal of the day?"
      },
      {
        "word": "Evening",
        "question": "What part of the day comes after the afternoon and before night?"
      },
      {
        "word": "Always",
        "question": "What word means 'every time' or 'all the time'?"
      }
    ],
    "fetch": [
      {
        "id": "dumbbell",
        "name": "Work out",
        "emoji": "🏋️",
        "correct": true
      },
      {
        "id": "calendar",
        "name": "Schedule",
        "emoji": "📅",
        "correct": true
      },
      {
        "id": "shirt",
        "name": "Get Dressed",
        "emoji": "👔",
        "correct": true
      },
      {
        "id": "bus",
        "name": "Commute",
        "emoji": "🚌",
        "correct": true
      },
      {
        "id": "shower",
        "name": "Shower",
        "emoji": "🚿",
        "correct": true
      },
      {
        "id": "bed",
        "name": "Fall Asleep",
        "emoji": "🛏️",
        "correct": true
      },
      {
        "id": "pan",
        "name": "Prepare",
        "emoji": "🍳",
        "correct": true
      },
      {
        "id": "files",
        "name": "Organize",
        "emoji": "🗂️",
        "correct": true
      },
      {
        "id": "meditate",
        "name": "Unwind",
        "emoji": "🧘",
        "correct": true
      },
      {
        "id": "chart",
        "name": "Consistency",
        "emoji": "📈",
        "correct": true
      },
      {
        "id": "sunrise",
        "name": "Wake up",
        "emoji": "🌅",
        "correct": true
      },
      {
        "id": "croissant",
        "name": "Breakfast",
        "emoji": "🥐",
        "correct": true
      },
      {
        "id": "city",
        "name": "Evening",
        "emoji": "🌆",
        "correct": true
      },
      {
        "id": "bath",
        "name": "Refresh",
        "emoji": "🛀",
        "correct": true
      },
      {
        "id": "car",
        "name": "Car",
        "emoji": "🚗",
        "correct": false
      },
      {
        "id": "flower",
        "name": "Flower",
        "emoji": "🌸",
        "correct": false
      },
      {
        "id": "moon",
        "name": "Moon",
        "emoji": "🌙",
        "correct": false
      },
      {
        "id": "soccer",
        "name": "Soccer",
        "emoji": "⚽",
        "correct": false
      }
    ],
    "quiz": [
      {
        "question": "O que o Phrasal Verb <span class=\"quiz-highlight\">\"Work out\"</span> significa?",
        "options": [
          "Trabalhar fora",
          "Malhar / Fazer exercício",
          "Dormir",
          "Comer"
        ],
        "correct": 1,
        "explanation": "Exato! \"Work out\" significa se exercitar ou malhar! 🏋️",
        "nalaMsg": "Let's move! 💪"
      },
      {
        "question": "O que fazemos quando vamos nos <span class=\"quiz-highlight\">\"Get dressed\"</span>?",
        "options": [
          "Escovar os dentes",
          "Tomar banho",
          "Nos vestir",
          "Ler um livro"
        ],
        "correct": 2,
        "explanation": "Isso! \"Get dressed\" é o ato de se vestir! 👔",
        "nalaMsg": "Muito bem! 🎉"
      },
      {
        "question": "A palavra <span class=\"quiz-highlight\">\"Commute\"</span> se refere a:",
        "options": [
          "O trajeto diário",
          "Um computador",
          "Uma conversa",
          "Uma refeição"
        ],
        "correct": 0,
        "explanation": "Perfeito! \"Commute\" é o deslocamento diário! 🚌",
        "nalaMsg": "Awesome! 🌟"
      },
      {
        "question": "O que significa <span class=\"quiz-highlight\">\"Unwind\"</span> no fim do dia?",
        "options": [
          "Correr",
          "Relaxar / Descontrair",
          "Estudar",
          "Limpar"
        ],
        "correct": 1,
        "explanation": "Isso mesmo! \"Unwind\" é relaxar! 🧘",
        "nalaMsg": "Time to chill! ☕"
      },
      {
        "question": "Como dizemos <span class=\"quiz-highlight\">\"Cronograma/Agenda\"</span> em inglês?",
        "options": [
          "Clock",
          "Calendar",
          "Schedule",
          "Time"
        ],
        "correct": 2,
        "explanation": "Correto! \"Schedule\" é a agenda! 📅",
        "nalaMsg": "Great job! 🏆"
      },
      {
        "question": "Traduzir: <span class=\"quiz-highlight\">\"Prepare a healthy breakfast\"</span>",
        "options": [
          "Coma um pão saudável",
          "Prepare um café da manhã saudável",
          "Compre um café",
          "Faça um almoço"
        ],
        "correct": 1,
        "explanation": "Exato! Breakfast é café da manhã! 🥐",
        "nalaMsg": "Delicious! 😋"
      },
      {
        "question": "O que significa a palavra <span class=\"quiz-highlight\">\"Organize\"</span>?",
        "options": [
          "Tocar música",
          "Dormir",
          "Brincar",
          "Organizar"
        ],
        "correct": 3,
        "explanation": "Acertou! Organize é organizar! 🗂️",
        "nalaMsg": "Perfect! ⭐"
      },
      {
        "question": "Quando dizemos <span class=\"quiz-highlight\">\"Fall asleep\"</span>, estamos prestes a:",
        "options": [
          "Cair",
          "Adormecer",
          "Acordar",
          "Levantar"
        ],
        "correct": 1,
        "explanation": "Isso! Fall asleep é pegar no sono! 😴",
        "nalaMsg": "Sweet dreams! 🌙"
      },
      {
        "question": "A palavra <span class=\"quiz-highlight\">\"Consistency\"</span> é importante para os estudos. Significa:",
        "options": [
          "Inteligência",
          "Consistência",
          "Sorte",
          "Tempo"
        ],
        "correct": 1,
        "explanation": "Correto! Consistência! 📈",
        "nalaMsg": "Keep going! 🚀"
      },
      {
        "question": "O oposto de \"Fall asleep\" é:",
        "options": [
          "Wake up",
          "Get dressed",
          "Unwind",
          "Commute"
        ],
        "correct": 0,
        "explanation": "Exatamente! Wake up é acordar! 🌅",
        "nalaMsg": "Good morning! ☀️"
      },
      {
        "question": "Para tomar banho, usamos o:",
        "options": [
          "Breakfast",
          "Shower",
          "Evening",
          "Schedule"
        ],
        "correct": 1,
        "explanation": "Shower é banho! 🚿",
        "nalaMsg": "So fresh! 💧"
      },
      {
        "question": "O período da <span class=\"quiz-highlight\">\"Noite\"</span> em inglês (antes de dormir) é:",
        "options": [
          "Morning",
          "Afternoon",
          "Evening",
          "Night"
        ],
        "correct": 2,
        "explanation": "Evening é o comecinho da noite ou fim de tarde! 🌆",
        "nalaMsg": "Nice! 🌇"
      },
      {
        "question": "O que significa <span class=\"quiz-highlight\">\"Refresh\"</span>?",
        "options": [
          "Refrescar/Renovar",
          "Cansar",
          "Correr",
          "Vestir"
        ],
        "correct": 0,
        "explanation": "Isso! Refresh é refrescar! 🛀",
        "nalaMsg": "Awesome! 🌊"
      },
      {
        "question": "O que fazemos no <span class=\"quiz-highlight\">\"Breakfast\"</span>?",
        "options": [
          "Dormimos",
          "Trabalhamos",
          "Tomamos café da manhã",
          "Tomamos banho"
        ],
        "correct": 2,
        "explanation": "Breakfast é o desjejum! 🥐",
        "nalaMsg": "Yummy! 🍳"
      }
    ],
    "truefalse": [
      {
        "question": "We usually eat breakfast at night.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! Breakfast is in the morning. 🥞",
        "nalaMsg": "Good morning!"
      },
      {
        "question": "You should brush your teeth every day.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! It keeps them clean and healthy. 🪥",
        "nalaMsg": "Shiny smile!"
      },
      {
        "question": "We go to sleep in the morning.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! We go to sleep at night. 🌙",
        "nalaMsg": "Sweet dreams!"
      },
      {
        "question": "Taking a shower makes you clean.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 🚿",
        "nalaMsg": "Splish splash!"
      },
      {
        "question": "Lunch is the meal we eat in the middle of the day.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 🍲",
        "nalaMsg": "Yummy!"
      }
    ]
  },
  "past": {
    "speaking": [
      {
        "question": "What time do you wake up on the weekend?",
        "translation": "A que horas você acorda no fim de semana?",
        "starter": "On the weekend, I wake up at...",
        "nalaTip": "No fim de semana a gente dorme um pouquinho mais! ⏰"
      },
      {
        "question": "What did you do last weekend?",
        "translation": "O que você fez no último fim de semana?",
        "starter": "Last weekend, I played games and visited my family.",
        "nalaTip": "Fale no passado: I played, I went, I ate! 📸"
      },
      {
        "question": "Where did you go last Saturday?",
        "translation": "Onde você foi no sábado passado?",
        "starter": "Last Saturday, I went to the park / to the mall.",
        "nalaTip": "Pense em um lugar legal que você visitou! 🏞️"
      },
      {
        "question": "Did you enjoy your last trip or vacation?",
        "translation": "Você gostou da sua última viagem ou férias?",
        "starter": "Yes, I enjoyed my vacation very much!",
        "nalaTip": "Fale sobre a sua viagem mais recente! ✈️"
      },
      {
        "question": "What delicious food did you eat yesterday?",
        "translation": "Que comida gostosa você comeu ontem?",
        "starter": "Yesterday, I ate pizza / chicken / ice cream.",
        "nalaTip": "Diga o que você comeu ontem! 🍕"
      }
    ],
    "title": "My Weekend",
    "bgImage": "url('images/bg-past.png')",
    "emoji": "📸",
    "story": [
      {
        "text": "My last weekend was absolutely incredible, Laís!"
      },
      {
        "text": "I traveled to the mountains and discovered a hidden waterfall."
      },
      {
        "text": "While I was hiking, I encountered a fascinating deer."
      },
      {
        "text": "We experienced beautiful weather throughout the entire journey."
      },
      {
        "text": "I bought some lovely souvenirs at a local market."
      },
      {
        "text": "In the evening, we enjoyed a delicious roasted marshmallow."
      },
      {
        "text": "I realized that nature brings me so much peace."
      },
      {
        "text": "I took many photographs to capture those precious memories."
      },
      {
        "text": "Eventually, I returned home feeling completely recharged."
      },
      {
        "text": "Have you experienced anything exciting recently?"
      }
    ],
    "matching": [
      {
        "word": "Traveled",
        "emoji": "✈️",
        "pt": "Viajou"
      },
      {
        "word": "Discovered",
        "emoji": "🔍",
        "pt": "Descobriu"
      },
      {
        "word": "Encountered",
        "emoji": "🦌",
        "pt": "Encontrou"
      },
      {
        "word": "Experienced",
        "emoji": "✨",
        "pt": "Experimentou"
      },
      {
        "word": "Bought",
        "emoji": "🛍️",
        "pt": "Comprou"
      },
      {
        "word": "Enjoyed",
        "emoji": "😌",
        "pt": "Aproveitou"
      },
      {
        "word": "Realized",
        "emoji": "💡",
        "pt": "Percebeu"
      },
      {
        "word": "Captured",
        "emoji": "📸",
        "pt": "Capturou"
      },
      {
        "word": "Returned",
        "emoji": "🏠",
        "pt": "Retornou"
      },
      {
        "word": "Fascinating",
        "emoji": "🤩",
        "pt": "Fascinante"
      }
    ],
    "sentence": [
      {
        "words": [
          "I",
          "traveled",
          "to",
          "the",
          "mountains"
        ],
        "translation": "Eu viajei para as montanhas"
      },
      {
        "words": [
          "She",
          "discovered",
          "a",
          "hidden",
          "waterfall"
        ],
        "translation": "Ela descobriu uma cachoeira escondida"
      },
      {
        "words": [
          "We",
          "enjoyed",
          "the",
          "beautiful",
          "weather"
        ],
        "translation": "Nós aproveitamos o clima lindo"
      },
      {
        "words": [
          "He",
          "bought",
          "many",
          "lovely",
          "souvenirs"
        ],
        "translation": "Ele comprou muitas lembrancinhas adoráveis"
      },
      {
        "words": [
          "I",
          "returned",
          "home",
          "completely",
          "recharged"
        ],
        "translation": "Eu retornei para casa completamente recarregado"
      }
    ],
    "spelling": [
      "traveled",
      "discovered",
      "encountered",
      "experienced",
      "bought",
      "enjoyed",
      "realized",
      "captured",
      "returned",
      "fascinating"
    ],
    "garden": [
      "traveled",
      "discovered",
      "experienced",
      "bought",
      "enjoyed",
      "realized",
      "captured",
      "returned"
    ],
    "fetch": [
      {
        "id": "mountain",
        "name": "Mountains",
        "emoji": "⛰️",
        "correct": true
      },
      {
        "id": "waterfall",
        "name": "Waterfall",
        "emoji": "🏞️",
        "correct": true
      },
      {
        "id": "deer",
        "name": "Deer",
        "emoji": "🦌",
        "correct": true
      },
      {
        "id": "shopping_bag",
        "name": "Bought Souvenirs",
        "emoji": "🛍️",
        "correct": true
      },
      {
        "id": "eraser",
        "name": "Eraser",
        "emoji": "🧽",
        "correct": false
      },
      {
        "id": "ruler",
        "name": "Ruler",
        "emoji": "📏",
        "correct": false
      },
      {
        "id": "camera",
        "name": "Captured Photos",
        "emoji": "📸",
        "correct": true
      },
      {
        "id": "house",
        "name": "Returned Home",
        "emoji": "🏠",
        "correct": true
      },
      {
        "id": "marshmallow",
        "name": "Enjoyed Food",
        "emoji": "🍢",
        "correct": true
      },
      {
        "id": "spoon",
        "name": "Spoon",
        "emoji": "🥄",
        "correct": false
      }
    ],
    "quiz": [
      {
        "question": "O verbo irregular <span class=\"quiz-highlight\">\"Bought\"</span> é o passado de qual verbo?",
        "options": [
          "Bring",
          "Buy",
          "Build",
          "Bake"
        ],
        "correct": 1,
        "explanation": "Exato! \"Bought\" é o passado de Buy (comprar)! 🛍️",
        "nalaMsg": "Good job! 🌟"
      },
      {
        "question": "O que a palavra <span class=\"quiz-highlight\">\"Encountered\"</span> expressa?",
        "options": [
          "Encontrei / Deparei-me",
          "Perdi",
          "Comprei",
          "Esqueci"
        ],
        "correct": 0,
        "explanation": "Isso! \"Encountered\" significa que se deparou com algo ou alguém! 🦌",
        "nalaMsg": "Muito bem! 🎉"
      },
      {
        "question": "O que quer dizer <span class=\"quiz-highlight\">\"I realized\"</span> em inglês?",
        "options": [
          "Eu realizei um sonho",
          "Eu percebi / me dei conta",
          "Eu viajei",
          "Eu perdi"
        ],
        "correct": 1,
        "explanation": "Perfeito! \"Realize\" é um falso cognato que significa perceber ou dar-se conta! 💡",
        "nalaMsg": "Awesome! 🌟"
      },
      {
        "question": "O adjetivo <span class=\"quiz-highlight\">\"Fascinating\"</span> é usado para descrever algo:",
        "options": [
          "Chato",
          "Fascinante / Muito interessante",
          "Rápido",
          "Assustador"
        ],
        "correct": 1,
        "explanation": "Isso mesmo! É algo que prende muito a atenção! 🤩",
        "nalaMsg": "You got it! 💡"
      },
      {
        "question": "Se você diz \"We <span class=\"quiz-highlight\">enjoyed</span>\", o que você fez?",
        "options": [
          "Nós choramos",
          "Nós voltamos",
          "Nós aproveitamos / curtimos",
          "Nós corremos"
        ],
        "correct": 2,
        "explanation": "Correto! \"Enjoy\" significa aproveitar ou curtir algo! 😌",
        "nalaMsg": "Great job! 🏆"
      }
    ],
    "truefalse": [
      {
        "question": "Yesterday means the day before today.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 📅",
        "nalaMsg": "Time traveler!"
      },
      {
        "question": "\"I played\" is something happening right now.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! It happened in the past. 🎮",
        "nalaMsg": "Look back!"
      },
      {
        "question": "Dinosaurs lived in the past.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! Millions of years ago. 🦖",
        "nalaMsg": "Roar!"
      },
      {
        "question": "Tomorrow is part of the past.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! Tomorrow is the future. 🔮",
        "nalaMsg": "Think ahead!"
      },
      {
        "question": "\"She went\" is the past of \"She goes\".",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 🚶‍♀️",
        "nalaMsg": "Good grammar!"
      }
    ]
  },
  "foods": {
    "speaking": [
      {
        "question": "What is your favorite food for lunch?",
        "translation": "Qual é a sua comida favorita no almoço?",
        "starter": "My favorite food for lunch is...",
        "nalaTip": "Pense em rice, beans, chicken ou pasta! 🍝"
      },
      {
        "question": "Do you prefer apples or bananas?",
        "translation": "Você prefere maçãs ou bananas?",
        "starter": "I prefer apples / I prefer bananas.",
        "nalaTip": "Escolha a sua fruta favorita! 🍎🍌"
      },
      {
        "question": "What do you like to drink on a hot summer day?",
        "translation": "O que você gosta de beber em um dia quente de verão?",
        "starter": "On a hot day, I like to drink cold water / juice.",
        "nalaTip": "Que tal um suco geladinho? 🥤"
      },
      {
        "question": "Can you name two sweet foods?",
        "translation": "Você consegue citar dois alimentos doces?",
        "starter": "Cake and ice cream are sweet foods!",
        "nalaTip": "Doces deliciosos! 🎂"
      },
      {
        "question": "Do you like pizza with lots of cheese?",
        "translation": "Você gosta de pizza com muito queijo?",
        "starter": "Yes, I love pizza with cheese!",
        "nalaTip": "Queijo derretido é muito bom! 🧀"
      }
    ],
    "title": "Foods",
    "bgImage": "url('images/bg-foods.png')",
    "emoji": "🍎",
    "story": [
      {
        "text": "Laís, I am hungry! Let's have a picnic."
      },
      {
        "text": "Yay! I love picnics. What do you Want to eat?"
      },
      {
        "text": "I Like Chicken and Bread."
      },
      {
        "text": "I brought some Cheese and an Apple for you."
      },
      {
        "text": "Delicious! Do you Want some Water?"
      },
      {
        "text": "Yes, please. And I want Milk too."
      },
      {
        "text": "Look, I have a Banana and a Cookie!"
      },
      {
        "text": "Can we eat Pizza for dinner?"
      },
      {
        "text": "Yes, and a big chocolate Cake!"
      },
      {
        "text": "You are the best! I love Foods."
      }
    ],
    "matching": [
      {
        "word": "Apple",
        "emoji": "🍎",
        "pt": "Maçã"
      },
      {
        "word": "Banana",
        "emoji": "🍌",
        "pt": "Banana"
      },
      {
        "word": "Bread",
        "emoji": "🍞",
        "pt": "Pão"
      },
      {
        "word": "Milk",
        "emoji": "🥛",
        "pt": "Leite"
      },
      {
        "word": "Water",
        "emoji": "💧",
        "pt": "Água"
      },
      {
        "word": "Cheese",
        "emoji": "🧀",
        "pt": "Queijo"
      },
      {
        "word": "Chicken",
        "emoji": "🍗",
        "pt": "Frango"
      },
      {
        "word": "Pizza",
        "emoji": "🍕",
        "pt": "Pizza"
      },
      {
        "word": "Cake",
        "emoji": "🎂",
        "pt": "Bolo"
      },
      {
        "word": "Cookie",
        "emoji": "🍪",
        "pt": "Biscoito"
      }
    ],
    "sentence": [
      {
        "words": [
          "I",
          "like",
          "to",
          "eat",
          "pizza"
        ],
        "translation": "Eu gosto de comer pizza"
      },
      {
        "words": [
          "Do",
          "you",
          "want",
          "some",
          "water"
        ],
        "translation": "Você quer um pouco de água"
      },
      {
        "words": [
          "She",
          "likes",
          "red",
          "apple"
        ],
        "translation": "Ela gosta de maçã vermelha"
      },
      {
        "words": [
          "I",
          "want",
          "milk",
          "now"
        ],
        "translation": "Eu quero leite agora"
      },
      {
        "words": [
          "He",
          "eats",
          "a",
          "big",
          "cake"
        ],
        "translation": "Ele come um bolo grande"
      }
    ],
    "spelling": [
      "apple",
      "banana",
      "bread",
      "milk",
      "water",
      "cheese",
      "chicken",
      "pizza",
      "cake",
      "cookie"
    ],
    "garden": [
      "apple",
      "bread",
      "milk",
      "water",
      "cheese",
      "pizza",
      "cake",
      "cookie"
    ],
    "fetch": [
      {
        "id": "apple",
        "name": "Apple",
        "emoji": "🍎",
        "correct": true
      },
      {
        "id": "pizza",
        "name": "Pizza",
        "emoji": "🍕",
        "correct": true
      },
      {
        "id": "cookie",
        "name": "Cookie",
        "emoji": "🍪",
        "correct": true
      },
      {
        "id": "bread",
        "name": "Bread",
        "emoji": "🍞",
        "correct": true
      },
      {
        "id": "ball",
        "name": "Ball",
        "emoji": "⚽",
        "correct": false
      },
      {
        "id": "book",
        "name": "Book",
        "emoji": "📚",
        "correct": false
      },
      {
        "id": "cheese",
        "name": "Cheese",
        "emoji": "🧀",
        "correct": true
      },
      {
        "id": "chicken",
        "name": "Chicken",
        "emoji": "🍗",
        "correct": true
      },
      {
        "id": "cake",
        "name": "Cake",
        "emoji": "🎂",
        "correct": true
      },
      {
        "id": "pencil",
        "name": "Pencil",
        "emoji": "✏️",
        "correct": false
      }
    ],
    "quiz": [
      {
        "question": "O que significa <span class=\"quiz-highlight\">\"I want\"</span>?",
        "options": [
          "Eu vejo",
          "Eu tenho",
          "Eu quero",
          "Eu gosto"
        ],
        "correct": 2,
        "explanation": "Exato! \"I want\" significa Eu quero! 🙋‍♀️",
        "nalaMsg": "Good job! 🌟"
      },
      {
        "question": "O que é <span class=\"quiz-highlight\">\"Bread\"</span>?",
        "options": [
          "Leite",
          "Pão",
          "Bolo",
          "Água"
        ],
        "correct": 1,
        "explanation": "Isso mesmo! \"Bread\" é pão! 🍞",
        "nalaMsg": "Muito bem! 🎉"
      },
      {
        "question": "O que a frase <span class=\"quiz-highlight\">\"I like apples\"</span> quer dizer?",
        "options": [
          "Eu odeio maçãs",
          "Eu quero maçãs",
          "Eu tenho maçãs",
          "Eu gosto de maçãs"
        ],
        "correct": 3,
        "explanation": "Perfeito! \"I like\" é Eu gosto! 🍎",
        "nalaMsg": "Yummy! 😋"
      },
      {
        "question": "Como dizemos <span class=\"quiz-highlight\">\"Água\"</span> em inglês?",
        "options": [
          "Milk",
          "Water",
          "Juice",
          "Cake"
        ],
        "correct": 1,
        "explanation": "Isso! \"Water\" é água! 💧",
        "nalaMsg": "Let's go! 🐕"
      },
      {
        "question": "Qual destas palavras significa <span class=\"quiz-highlight\">\"Queijo\"</span>?",
        "options": [
          "Cheese",
          "Chicken",
          "Cookie",
          "Bread"
        ],
        "correct": 0,
        "explanation": "Correto! \"Cheese\" é queijo! 🧀",
        "nalaMsg": "Awesome! 🌟"
      }
    ],
    "truefalse": [
      {
        "question": "An apple is a fruit.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 🍎",
        "nalaMsg": "Healthy choice!"
      },
      {
        "question": "Milk comes from chickens.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! Milk usually comes from cows. 🐄",
        "nalaMsg": "Moo!"
      },
      {
        "question": "Pizza is usually round.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 🍕",
        "nalaMsg": "Delicious!"
      },
      {
        "question": "Carrots are blue.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! Carrots are orange. 🥕",
        "nalaMsg": "Crunch!"
      },
      {
        "question": "Water is a drink.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 💧",
        "nalaMsg": "Stay hydrated!"
      }
    ]
  },
  "body": {
    "speaking": [
      {
        "question": "What color are your eyes?",
        "translation": "De que cor são os seus olhos?",
        "starter": "My eyes are brown / blue / green.",
        "nalaTip": "Olhe no espelho e diga a cor dos seus olhos! 👁️"
      },
      {
        "question": "How many hands do you have?",
        "translation": "Quantas mãos você tem?",
        "starter": "I have two hands!",
        "nalaTip": "Mostre suas duas mãos! ✋"
      },
      {
        "question": "What do you use your ears for?",
        "translation": "Para que você usa suas orelhas?",
        "starter": "I use my ears to listen to music and stories.",
        "nalaTip": "Para ouvir a Nala! 👂"
      },
      {
        "question": "What exercise makes your heart beat fast?",
        "translation": "Qual exercício faz seu coração bater rápido?",
        "starter": "Running and dancing make my heart beat fast.",
        "nalaTip": "Pense em correr ou pular! 🏃"
      },
      {
        "question": "Can you clap your hands five times?",
        "translation": "Você consegue bater palmas cinco vezes?",
        "starter": "Yes! 1, 2, 3, 4, 5!",
        "nalaTip": "Bata palmas bem forte! 👏"
      }
    ],
    "title": "Body Parts",
    "bgImage": "url('images/bg-body.png')",
    "emoji": "🧍",
    "story": [
      {
        "text": "Laís, let's do some exercise today!"
      },
      {
        "text": "Yes! Let's move our Body!"
      },
      {
        "text": "Touch your Head and your Shoulders."
      },
      {
        "text": "Like this? Now I touch my Knees and Toes."
      },
      {
        "text": "Good! Close your Eyes and open your Mouth."
      },
      {
        "text": "My Mouth is open. Can you touch your Nose?"
      },
      {
        "text": "Yes! And I have two cute Ears."
      },
      {
        "text": "Clap your Hands with me!"
      },
      {
        "text": "And stomp your Feet on the ground!"
      },
      {
        "text": "Exercise is fun. We are so strong!"
      }
    ],
    "matching": [
      {
        "word": "Head",
        "emoji": "🗣️",
        "pt": "Cabeça"
      },
      {
        "word": "Shoulders",
        "emoji": "🤷",
        "pt": "Ombros"
      },
      {
        "word": "Knees",
        "emoji": "🦵",
        "pt": "Joelhos"
      },
      {
        "word": "Toes",
        "emoji": "🦶",
        "pt": "Dedos do pé"
      },
      {
        "word": "Eyes",
        "emoji": "👁️",
        "pt": "Olhos"
      },
      {
        "word": "Ears",
        "emoji": "👂",
        "pt": "Orelhas"
      },
      {
        "word": "Mouth",
        "emoji": "👄",
        "pt": "Boca"
      },
      {
        "word": "Nose",
        "emoji": "👃",
        "pt": "Nariz"
      },
      {
        "word": "Hands",
        "emoji": "✋",
        "pt": "Mãos"
      },
      {
        "word": "Feet",
        "emoji": "👟",
        "pt": "Pés"
      }
    ],
    "sentence": [
      {
        "words": [
          "Touch",
          "your",
          "nose",
          "now"
        ],
        "translation": "Toque seu nariz agora"
      },
      {
        "words": [
          "I",
          "have",
          "two",
          "hands"
        ],
        "translation": "Eu tenho duas mãos"
      },
      {
        "words": [
          "She",
          "has",
          "blue",
          "eyes"
        ],
        "translation": "Ela tem olhos azuis"
      },
      {
        "words": [
          "Clap",
          "your",
          "hands",
          "fast"
        ],
        "translation": "Bata palmas rápido"
      },
      {
        "words": [
          "My",
          "head",
          "is",
          "big"
        ],
        "translation": "Minha cabeça é grande"
      }
    ],
    "spelling": [
      "head",
      "shoulders",
      "knees",
      "toes",
      "eyes",
      "ears",
      "mouth",
      "nose",
      "hands",
      "feet"
    ],
    "garden": [
      "head",
      "knees",
      "toes",
      "eyes",
      "ears",
      "mouth",
      "nose",
      "hands"
    ],
    "fetch": [
      {
        "id": "hands",
        "name": "Hands",
        "emoji": "✋",
        "correct": true
      },
      {
        "id": "nose",
        "name": "Nose",
        "emoji": "👃",
        "correct": true
      },
      {
        "id": "eyes",
        "name": "Eyes",
        "emoji": "👁️",
        "correct": true
      },
      {
        "id": "feet",
        "name": "Feet",
        "emoji": "🦶",
        "correct": true
      },
      {
        "id": "apple",
        "name": "Apple",
        "emoji": "🍎",
        "correct": false
      },
      {
        "id": "book",
        "name": "Book",
        "emoji": "📚",
        "correct": false
      },
      {
        "id": "mouth",
        "name": "Mouth",
        "emoji": "👄",
        "correct": true
      },
      {
        "id": "ears",
        "name": "Ears",
        "emoji": "👂",
        "correct": true
      },
      {
        "id": "teeth",
        "name": "Teeth",
        "emoji": "🦷",
        "correct": true
      },
      {
        "id": "door",
        "name": "Door",
        "emoji": "🚪",
        "correct": false
      }
    ],
    "quiz": [
      {
        "question": "Qual parte do corpo é a <span class=\"quiz-highlight\">\"Head\"</span>?",
        "options": [
          "Mão",
          "Cabeça",
          "Pé",
          "Nariz"
        ],
        "correct": 1,
        "explanation": "Exato! \"Head\" é cabeça! 🗣️",
        "nalaMsg": "Good job! 🌟"
      },
      {
        "question": "O que são <span class=\"quiz-highlight\">\"Eyes\"</span>?",
        "options": [
          "Orelhas",
          "Boca",
          "Olhos",
          "Pernas"
        ],
        "correct": 2,
        "explanation": "Isso mesmo! \"Eyes\" são os olhos! 👁️",
        "nalaMsg": "Muito bem! 🎉"
      },
      {
        "question": "O que o comando <span class=\"quiz-highlight\">\"Touch your nose\"</span> pede para você fazer?",
        "options": [
          "Tocar o pé",
          "Tocar a boca",
          "Tocar o nariz",
          "Tocar a orelha"
        ],
        "correct": 2,
        "explanation": "Perfeito! \"Touch your nose\" é toque seu nariz! 👃",
        "nalaMsg": "Awesome! 🌟"
      },
      {
        "question": "Como dizemos <span class=\"quiz-highlight\">\"Mãos\"</span> em inglês?",
        "options": [
          "Hands",
          "Feet",
          "Ears",
          "Shoulders"
        ],
        "correct": 0,
        "explanation": "Isso! \"Hands\" são as mãos! ✋",
        "nalaMsg": "You got it! 💡"
      },
      {
        "question": "O que é <span class=\"quiz-highlight\">\"Mouth\"</span>?",
        "options": [
          "Nariz",
          "Joelho",
          "Orelha",
          "Boca"
        ],
        "correct": 3,
        "explanation": "Correto! \"Mouth\" é boca! 👄",
        "nalaMsg": "Great job! 🏆"
      }
    ],
    "truefalse": [
      {
        "question": "We use our eyes to see.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 👀",
        "nalaMsg": "I see you!"
      },
      {
        "question": "We have four arms.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! We have two arms. 💪",
        "nalaMsg": "High five!"
      },
      {
        "question": "Your nose is used for smelling.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 👃",
        "nalaMsg": "Sniff sniff!"
      },
      {
        "question": "You have ten toes on one foot.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! You have five toes on one foot. 🦶",
        "nalaMsg": "Wiggle them!"
      },
      {
        "question": "Hair grows on your head.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 💇‍♀️",
        "nalaMsg": "Looking good!"
      }
    ]
  },
  "travel": {
    "speaking": [
      {
        "question": "Have you ever flown in an airplane?",
        "translation": "Você já voou de avião?",
        "starter": "Yes, I have flown in an airplane / No, I haven't yet.",
        "nalaTip": "Conte sobre voar lá no alto! ✈️"
      },
      {
        "question": "Where would you like to travel in the world?",
        "translation": "Para onde você gostaria de viajar no mundo?",
        "starter": "I would like to travel to Disney / London / Japan.",
        "nalaTip": "Pense no seu lugar dos sonhos! 🌍"
      },
      {
        "question": "What do you pack in your luggage for a trip?",
        "translation": "O que você arruma na mala para uma viagem?",
        "starter": "In my luggage, I pack clothes, shoes, and toys.",
        "nalaTip": "Arrumando as malas! 🧳"
      },
      {
        "question": "What is your favorite souvenir from a trip?",
        "translation": "Qual é a sua lembrancinha favorita de viagem?",
        "starter": "My favorite souvenir is a keychain / a magnet.",
        "nalaTip": "Lembrancinhas de viagem! 🎁"
      },
      {
        "question": "Do you like traveling by car, train, or plane?",
        "translation": "Você gosta de viajar de carro, trem ou avião?",
        "starter": "I like traveling by car / plane.",
        "nalaTip": "Escolha seu meio de transporte! 🚘"
      }
    ],
    "title": "Travel & World",
    "bgImage": "url('images/bg-travel.png')",
    "emoji": "✈️",
    "story": [
      {
        "text": "Hello Laís! Have you ever traveled abroad?"
      },
      {
        "text": "No, I haven't. But I have seen airplanes!"
      },
      {
        "text": "I have flown in an airplane before. It's amazing!"
      },
      {
        "text": "Wow! Have you visited many countries?"
      },
      {
        "text": "Yes, I have explored beautiful cities."
      },
      {
        "text": "Did you need a passport?"
      },
      {
        "text": "Yes, you must have a passport to travel."
      },
      {
        "text": "I want to pack my luggage and be a tourist!"
      },
      {
        "text": "We can buy a nice souvenir together."
      },
      {
        "text": "That sounds like a perfect adventure!"
      }
    ],
    "matching": [
      {
        "word": "Airport",
        "emoji": "🛫",
        "pt": "Aeroporto"
      },
      {
        "word": "Passport",
        "emoji": "🛂",
        "pt": "Passaporte"
      },
      {
        "word": "Luggage",
        "emoji": "🧳",
        "pt": "Bagagem"
      },
      {
        "word": "Tourist",
        "emoji": "📸",
        "pt": "Turista"
      },
      {
        "word": "Souvenir",
        "emoji": "🎁",
        "pt": "Lembrança"
      },
      {
        "word": "Abroad",
        "emoji": "🌍",
        "pt": "No exterior"
      },
      {
        "word": "Guide",
        "emoji": "🗺️",
        "pt": "Guia"
      },
      {
        "word": "Traveled",
        "emoji": "✈️",
        "pt": "Viajou"
      },
      {
        "word": "Explored",
        "emoji": "🧭",
        "pt": "Explorou"
      },
      {
        "word": "Flown",
        "emoji": "🦅",
        "pt": "Voou"
      }
    ],
    "sentence": [
      {
        "words": [
          "Have",
          "you",
          "ever",
          "flown",
          "abroad"
        ],
        "translation": "Você já voou para o exterior?"
      },
      {
        "words": [
          "I",
          "have",
          "visited",
          "many",
          "places"
        ],
        "translation": "Eu visitei muitos lugares"
      },
      {
        "words": [
          "She",
          "has",
          "lost",
          "her",
          "passport"
        ],
        "translation": "Ela perdeu seu passaporte"
      },
      {
        "words": [
          "We",
          "have",
          "traveled",
          "by",
          "train"
        ],
        "translation": "Nós viajamos de trem"
      },
      {
        "words": [
          "He",
          "has",
          "bought",
          "a",
          "souvenir"
        ],
        "translation": "Ele comprou uma lembrancinha"
      }
    ],
    "spelling": [
      "airport",
      "passport",
      "luggage",
      "tourist",
      "souvenir",
      "abroad",
      "guide",
      "travel",
      "explore",
      "flown"
    ],
    "garden": [
      "airport",
      "passport",
      "luggage",
      "tourist",
      "souvenir",
      "abroad",
      "travel",
      "flown"
    ],
    "fetch": [
      {
        "id": "passport",
        "name": "Passport",
        "emoji": "🛂",
        "correct": true
      },
      {
        "id": "luggage",
        "name": "Luggage",
        "emoji": "🧳",
        "correct": true
      },
      {
        "id": "plane",
        "name": "Airplane",
        "emoji": "✈️",
        "correct": true
      },
      {
        "id": "map",
        "name": "Guide Map",
        "emoji": "🗺️",
        "correct": true
      },
      {
        "id": "apple",
        "name": "Apple",
        "emoji": "🍎",
        "correct": false
      },
      {
        "id": "dog",
        "name": "Dog",
        "emoji": "🐕",
        "correct": false
      },
      {
        "id": "ticket_flight",
        "name": "Flight Ticket",
        "emoji": "🎟️",
        "correct": true
      },
      {
        "id": "train",
        "name": "Train",
        "emoji": "🚆",
        "correct": true
      },
      {
        "id": "hotel",
        "name": "Hotel",
        "emoji": "🏨",
        "correct": true
      },
      {
        "id": "banana",
        "name": "Banana",
        "emoji": "🍌",
        "correct": false
      }
    ],
    "quiz": [
      {
        "question": "Qual a estrutura correta do <span class=\"quiz-highlight\">Present Perfect</span> para \"Eu viajei\"?",
        "options": [
          "I traveled",
          "I have traveled",
          "I travel",
          "I traveling"
        ],
        "correct": 1,
        "explanation": "Exato! \"I have traveled\" é o Present Perfect! ✈️",
        "nalaMsg": "Good job! 🌟"
      },
      {
        "question": "O que significa <span class=\"quiz-highlight\">\"Abroad\"</span>?",
        "options": [
          "Aeroporto",
          "Lembrancinha",
          "Exterior (Outro país)",
          "Bagagem"
        ],
        "correct": 2,
        "explanation": "Isso! \"Abroad\" significa no exterior! 🌍",
        "nalaMsg": "Muito bem! 🎉"
      },
      {
        "question": "Se perguntamos \"Have you ever <span class=\"quiz-highlight\">flown</span>?\", o que é flown?",
        "options": [
          "Voado",
          "Comido",
          "Visto",
          "Andado"
        ],
        "correct": 0,
        "explanation": "Perfeito! \"Flown\" é o particípio de Fly (voar)! 🦅",
        "nalaMsg": "Awesome! 🌟"
      },
      {
        "question": "O que é <span class=\"quiz-highlight\">\"Luggage\"</span> em uma viagem?",
        "options": [
          "Guia",
          "Bagagem/Malas",
          "Passaporte",
          "Turista"
        ],
        "correct": 1,
        "explanation": "Correto! \"Luggage\" é a bagagem! 🧳",
        "nalaMsg": "Let's pack! 🎒"
      },
      {
        "question": "Como dizemos <span class=\"quiz-highlight\">\"Lembrancinha\"</span> de viagem?",
        "options": [
          "Souvenir",
          "Passport",
          "Guide",
          "Airport"
        ],
        "correct": 0,
        "explanation": "Isso mesmo! \"Souvenir\" é uma lembrancinha! 🎁",
        "nalaMsg": "Great job! 🏆"
      }
    ],
    "truefalse": [
      {
        "question": "An airplane flies in the sky.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! ✈️",
        "nalaMsg": "Up high!"
      },
      {
        "question": "A boat drives on the road.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! A boat floats on water. ⛵",
        "nalaMsg": "Ahoy!"
      },
      {
        "question": "A passport is needed to travel to some countries.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 🛂",
        "nalaMsg": "Stamp it!"
      },
      {
        "question": "A train uses wings to fly.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! A train travels on tracks. 🚂",
        "nalaMsg": "Choo choo!"
      },
      {
        "question": "Suitcases are used to pack clothes.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 🧳",
        "nalaMsg": "Ready to go!"
      }
    ]
  },
  "eco": {
    "speaking": [
      {
        "question": "Why is recycling important for our planet?",
        "translation": "Por que a reciclagem é importante para o nosso planeta?",
        "starter": "Recycling is important because it protects nature.",
        "nalaTip": "Ajudando o meio ambiente! ♻️"
      },
      {
        "question": "How can we save clean water at home?",
        "translation": "Como podemos economizar água limpa em casa?",
        "starter": "We can save water by taking short showers.",
        "nalaTip": "Economizando água ao escovar os dentes ou no banho! 💧"
      },
      {
        "question": "What can you do to help nature?",
        "translation": "O que você pode fazer para ajudar a natureza?",
        "starter": "I can plant trees and clean up trash.",
        "nalaTip": "Seja um herói ecológico! 🌱"
      },
      {
        "question": "Where does solar energy come from?",
        "translation": "De onde vem a energia solar?",
        "starter": "Solar energy comes from the sun!",
        "nalaTip": "Vem do astro rei! ☀️"
      },
      {
        "question": "Why should we plant more trees?",
        "translation": "Por que deveríamos plantar mais árvores?",
        "starter": "We should plant trees to keep the air clean.",
        "nalaTip": "Árvores dão sombra e ar puro! 🌳"
      }
    ],
    "title": "Save the Planet",
    "bgImage": "url('images/bg-eco.png')",
    "emoji": "🌍",
    "story": [
      {
        "text": "Laís, we must protect the Environment!"
      },
      {
        "text": "I agree. But what should we do?"
      },
      {
        "text": "If we recycle plastic, we will save animals."
      },
      {
        "text": "That is true. Pollution is very bad."
      },
      {
        "text": "We should use solar energy instead of waste."
      },
      {
        "text": "If we clean the Earth, nature will be happy."
      },
      {
        "text": "Yes! We must not waste clean water."
      },
      {
        "text": "Our climate is changing. We need to help."
      },
      {
        "text": "If everybody helps, the forest will grow."
      },
      {
        "text": "Let's be eco-friendly heroes, Nala!"
      }
    ],
    "matching": [
      {
        "word": "Recycle",
        "emoji": "♻️",
        "pt": "Reciclar"
      },
      {
        "word": "Environment",
        "emoji": "🏞️",
        "pt": "Meio ambiente"
      },
      {
        "word": "Pollution",
        "emoji": "🏭",
        "pt": "Poluição"
      },
      {
        "word": "Earth",
        "emoji": "🌍",
        "pt": "Terra"
      },
      {
        "word": "Plastic",
        "emoji": "🥤",
        "pt": "Plástico"
      },
      {
        "word": "Nature",
        "emoji": "🌿",
        "pt": "Natureza"
      },
      {
        "word": "Protect",
        "emoji": "🛡️",
        "pt": "Proteger"
      },
      {
        "word": "Solar",
        "emoji": "☀️",
        "pt": "Solar"
      },
      {
        "word": "Climate",
        "emoji": "☁️",
        "pt": "Clima"
      },
      {
        "word": "Waste",
        "emoji": "🗑️",
        "pt": "Lixo"
      }
    ],
    "sentence": [
      {
        "words": [
          "If",
          "we",
          "recycle",
          "nature",
          "wins"
        ],
        "translation": "Se nós reciclarmos, a natureza vence"
      },
      {
        "words": [
          "We",
          "must",
          "protect",
          "the",
          "earth"
        ],
        "translation": "Nós devemos proteger a terra"
      },
      {
        "words": [
          "You",
          "should",
          "save",
          "clean",
          "water"
        ],
        "translation": "Você deveria economizar água limpa"
      },
      {
        "words": [
          "Plastic",
          "pollution",
          "is",
          "very",
          "bad"
        ],
        "translation": "Poluição plástica é muito ruim"
      },
      {
        "words": [
          "If",
          "it",
          "rains",
          "plants",
          "grow"
        ],
        "translation": "Se chover, as plantas crescem"
      }
    ],
    "spelling": [
      "recycle",
      "nature",
      "pollution",
      "earth",
      "plastic",
      "protect",
      "solar",
      "climate",
      "waste",
      "clean"
    ],
    "garden": [
      "recycle",
      "nature",
      "earth",
      "plastic",
      "protect",
      "solar",
      "climate",
      "waste"
    ],
    "fetch": [
      {
        "id": "recycle",
        "name": "Recycle Bin",
        "emoji": "♻️",
        "correct": true
      },
      {
        "id": "plant",
        "name": "Plant",
        "emoji": "🌱",
        "correct": true
      },
      {
        "id": "solar",
        "name": "Solar Panel",
        "emoji": "☀️",
        "correct": true
      },
      {
        "id": "water",
        "name": "Clean Water",
        "emoji": "💧",
        "correct": true
      },
      {
        "id": "trash",
        "name": "Pollution",
        "emoji": "🏭",
        "correct": false
      },
      {
        "id": "plastic",
        "name": "Plastic Waste",
        "emoji": "🥤",
        "correct": false
      },
      {
        "id": "earth",
        "name": "Earth",
        "emoji": "🌍",
        "correct": true
      },
      {
        "id": "leaf",
        "name": "Leaf",
        "emoji": "🍃",
        "correct": true
      },
      {
        "id": "wind",
        "name": "Wind Energy",
        "emoji": "🌬️",
        "correct": true
      },
      {
        "id": "burger",
        "name": "Burger",
        "emoji": "🍔",
        "correct": false
      }
    ],
    "quiz": [
      {
        "question": "O que o condicional <span class=\"quiz-highlight\">\"If we recycle\"</span> significa?",
        "options": [
          "Nós reciclamos",
          "Se nós reciclarmos",
          "Nós devemos reciclar",
          "Nós reciclamos ontem"
        ],
        "correct": 1,
        "explanation": "Exato! \"If\" significa Se, criando uma condição! ♻️",
        "nalaMsg": "Good job! 🌟"
      },
      {
        "question": "O que o verbo modal <span class=\"quiz-highlight\">\"Must\"</span> expressa na frase \"We must protect\"?",
        "options": [
          "Opção",
          "Passado",
          "Obrigação (Devemos)",
          "Futuro"
        ],
        "correct": 2,
        "explanation": "Isso! \"Must\" indica uma forte obrigação (dever)! 🛡️",
        "nalaMsg": "Muito bem! 🎉"
      },
      {
        "question": "Qual palavra significa <span class=\"quiz-highlight\">\"Meio Ambiente\"</span>?",
        "options": [
          "Pollution",
          "Waste",
          "Plastic",
          "Environment"
        ],
        "correct": 3,
        "explanation": "Perfeito! \"Environment\" é o meio ambiente! 🏞️",
        "nalaMsg": "Awesome! 🌟"
      },
      {
        "question": "O que é <span class=\"quiz-highlight\">\"Pollution\"</span>?",
        "options": [
          "Poluição",
          "Natureza",
          "Terra",
          "Clima"
        ],
        "correct": 0,
        "explanation": "Isso mesmo! \"Pollution\" é poluição! 🏭",
        "nalaMsg": "Let's clean! 🧹"
      },
      {
        "question": "Na frase \"You <span class=\"quiz-highlight\">should</span> save water\", o que \"should\" indica?",
        "options": [
          "Uma proibição",
          "Um conselho (deveria)",
          "Uma certeza",
          "O passado"
        ],
        "correct": 1,
        "explanation": "Correto! \"Should\" é usado para dar conselhos (você deveria)! 💧",
        "nalaMsg": "Great job! 🏆"
      }
    ],
    "truefalse": [
      {
        "question": "Recycling helps the planet.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! ♻️",
        "nalaMsg": "Save the Earth!"
      },
      {
        "question": "Plastic bags are good for the ocean.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! Plastic hurts ocean animals. 🐢",
        "nalaMsg": "Keep it clean!"
      },
      {
        "question": "Trees give us oxygen to breathe.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 🌳",
        "nalaMsg": "Breathe deep!"
      },
      {
        "question": "Leaving the water running is good.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! We should save water. 💧",
        "nalaMsg": "Turn it off!"
      },
      {
        "question": "Planting a garden helps bees.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 🐝",
        "nalaMsg": "Buzz!"
      }
    ]
  },
  "school": {
    "title": "School",
    "bgImage": "url('images/bg-school.png')",
    "emoji": "🏫",
    "speaking": [
      {
        "question": "What school supplies do you keep in your backpack?",
        "translation": "Quais materiais escolares você guarda na mochila?",
        "starter": "In my backpack, I have pencils, books, and erasers.",
        "nalaTip": "Confira sua mochila! 🎒"
      },
      {
        "question": "What do you use to write in your notebook?",
        "translation": "O que você usa para escrever no seu caderno?",
        "starter": "I use a pencil / a pen to write.",
        "nalaTip": "Lápis ou caneta! ✏️"
      },
      {
        "question": "Who is your teacher and what do they teach?",
        "translation": "Quem é seu professor(a) e o que ele(a) ensina?",
        "starter": "My teacher is very nice and teaches English!",
        "nalaTip": "Fale com carinho do seu prof! 👩‍🏫"
      },
      {
        "question": "What do you like to do during recess at school?",
        "translation": "O que você gosta de fazer no recreio da escola?",
        "starter": "During recess, I like to play with my friends.",
        "nalaTip": "Hora do recreio! 🏃"
      },
      {
        "question": "What color is your school backpack?",
        "translation": "De que cor é a sua mochila escolar?",
        "starter": "My school backpack is blue / pink / black.",
        "nalaTip": "Fale a cor da sua mochila! 🎒"
      }
    ],
    "flashcards": [
      {
        "en": "Pencil",
        "pt": "Lápis",
        "emoji": "✏️"
      },
      {
        "en": "Book",
        "pt": "Livro",
        "emoji": "📖"
      },
      {
        "en": "Teacher",
        "pt": "Professor(a)",
        "emoji": "👩‍🏫"
      },
      {
        "en": "Desk",
        "pt": "Carteira",
        "emoji": "🪑"
      },
      {
        "en": "Backpack",
        "pt": "Mochila",
        "emoji": "🎒"
      },
      {
        "en": "School",
        "pt": "Escola",
        "emoji": "🏫"
      },
      {
        "en": "Eraser",
        "pt": "Borracha",
        "emoji": "🧼"
      },
      {
        "en": "Notebook",
        "pt": "Caderno",
        "emoji": "📓"
      },
      {
        "en": "Pen",
        "pt": "Caneta",
        "emoji": "🖊️"
      },
      {
        "en": "Ruler",
        "pt": "Régua",
        "emoji": "📏"
      },
      {
        "en": "Board",
        "pt": "Quadro",
        "emoji": "⬛"
      },
      {
        "en": "Student",
        "pt": "Aluno(a)",
        "emoji": "🧑‍🎓"
      },
      {
        "en": "Scissors",
        "pt": "Tesoura",
        "emoji": "✂️"
      },
      {
        "en": "Glue",
        "pt": "Cola",
        "emoji": "🧴"
      },
      {
        "en": "Paper",
        "pt": "Papel",
        "emoji": "📄"
      },
      {
        "en": "Calculator",
        "pt": "Calculadora",
        "emoji": "🧮"
      },
      {
        "en": "Crayon",
        "pt": "Giz de cera",
        "emoji": "🖍️"
      },
      {
        "en": "Classroom",
        "pt": "Sala de Aula",
        "emoji": "🚪"
      }
    ],
    "story": [
      {
        "text": "Hi Nala! Today is my first day of school!"
      },
      {
        "text": "Woof! That's so exciting! Did you pack your Backpack?"
      },
      {
        "text": "Yes! I have my Notebook and my Book."
      },
      {
        "text": "Don't forget your Pencil and Pen to write."
      },
      {
        "text": "Oh, right! And my Eraser too."
      },
      {
        "text": "What else do you need for the Classroom?"
      },
      {
        "text": "I need Scissors to cut Paper."
      },
      {
        "text": "And some Glue to stick things together!"
      },
      {
        "text": "Exactly! Oh, and my Crayon to draw beautiful pictures."
      },
      {
        "text": "Will you learn math? You might need a Calculator!"
      },
      {
        "text": "Yes, and a Ruler to measure things."
      },
      {
        "text": "Your Teacher will be so happy to see you!"
      },
      {
        "text": "I can't wait to sit at my Desk and meet every Student."
      },
      {
        "text": "Have a great day at School! Woof!"
      }
    ],
    "matching": [
      {
        "word": "Pencil",
        "emoji": "✏️",
        "pt": "Lápis"
      },
      {
        "word": "Book",
        "emoji": "📖",
        "pt": "Livro"
      },
      {
        "word": "Teacher",
        "emoji": "👩‍🏫",
        "pt": "Professor(a)"
      },
      {
        "word": "Desk",
        "emoji": "🪑",
        "pt": "Mesa"
      },
      {
        "word": "Backpack",
        "emoji": "🎒",
        "pt": "Mochila"
      },
      {
        "word": "School",
        "emoji": "🏫",
        "pt": "Escola"
      },
      {
        "word": "Eraser",
        "emoji": "🧼",
        "pt": "Borracha"
      },
      {
        "word": "Notebook",
        "emoji": "📓",
        "pt": "Caderno"
      },
      {
        "word": "Pen",
        "emoji": "🖊️",
        "pt": "Caneta"
      },
      {
        "word": "Ruler",
        "emoji": "📏",
        "pt": "Régua"
      },
      {
        "word": "Board",
        "emoji": "⬛",
        "pt": "Quadro"
      },
      {
        "word": "Student",
        "emoji": "🧑‍🎓",
        "pt": "Aluno(a)"
      },
      {
        "word": "Scissors",
        "emoji": "✂️",
        "pt": "Tesoura"
      },
      {
        "word": "Glue",
        "emoji": "🧴",
        "pt": "Cola"
      },
      {
        "word": "Paper",
        "emoji": "📄",
        "pt": "Papel"
      }
    ],
    "sentence": [
      {
        "words": [
          "I",
          "have",
          "a",
          "pencil"
        ],
        "translation": "Eu tenho um lápis"
      },
      {
        "words": [
          "The",
          "teacher",
          "is",
          "here"
        ],
        "translation": "O professor está aqui"
      },
      {
        "words": [
          "My",
          "backpack",
          "is",
          "blue"
        ],
        "translation": "Minha mochila é azul"
      },
      {
        "words": [
          "Open",
          "your",
          "book"
        ],
        "translation": "Abra seu livro"
      },
      {
        "words": [
          "I",
          "need",
          "an",
          "eraser"
        ],
        "translation": "Eu preciso de uma borracha"
      },
      {
        "words": [
          "The",
          "desk",
          "is",
          "clean"
        ],
        "translation": "A carteira está limpa"
      },
      {
        "words": [
          "Write",
          "in",
          "the",
          "notebook"
        ],
        "translation": "Escreva no caderno"
      },
      {
        "words": [
          "I",
          "use",
          "a",
          "pen"
        ],
        "translation": "Eu uso uma caneta"
      },
      {
        "words": [
          "Look",
          "at",
          "the",
          "board"
        ],
        "translation": "Olhe para o quadro"
      },
      {
        "words": [
          "She",
          "is",
          "a",
          "student"
        ],
        "translation": "Ela é uma aluna"
      },
      {
        "words": [
          "We",
          "go",
          "to",
          "school"
        ],
        "translation": "Nós vamos para a escola"
      },
      {
        "words": [
          "Cut",
          "with",
          "the",
          "scissors"
        ],
        "translation": "Corte com a tesoura"
      },
      {
        "words": [
          "I",
          "have",
          "some",
          "glue"
        ],
        "translation": "Eu tenho um pouco de cola"
      },
      {
        "words": [
          "Measure",
          "with",
          "a",
          "ruler"
        ],
        "translation": "Meça com a régua"
      }
    ],
    "spelling": [
      "pencil",
      "book",
      "teacher",
      "desk",
      "backpack",
      "school",
      "eraser",
      "notebook",
      "pen",
      "ruler",
      "board",
      "student",
      "scissors",
      "glue",
      "paper"
    ],
    "garden": [
      "pencil",
      "book",
      "teacher",
      "desk",
      "backpack",
      "school",
      "eraser",
      "notebook",
      "pen",
      "ruler",
      "board",
      "student",
      "scissors",
      "glue",
      "paper"
    ],
    "fetch": [
      {
        "id": "pencil",
        "name": "Pencil",
        "emoji": "✏️",
        "correct": true
      },
      {
        "id": "book",
        "name": "Book",
        "emoji": "📖",
        "correct": true
      },
      {
        "id": "teacher",
        "name": "Teacher",
        "emoji": "👩‍🏫",
        "correct": true
      },
      {
        "id": "desk",
        "name": "Desk",
        "emoji": "🪑",
        "correct": true
      },
      {
        "id": "backpack",
        "name": "Backpack",
        "emoji": "🎒",
        "correct": true
      },
      {
        "id": "school",
        "name": "School",
        "emoji": "🏫",
        "correct": true
      },
      {
        "id": "eraser",
        "name": "Eraser",
        "emoji": "🧼",
        "correct": true
      },
      {
        "id": "notebook",
        "name": "Notebook",
        "emoji": "📓",
        "correct": true
      },
      {
        "id": "pen",
        "name": "Pen",
        "emoji": "🖊️",
        "correct": true
      },
      {
        "id": "ruler",
        "name": "Ruler",
        "emoji": "📏",
        "correct": true
      },
      {
        "id": "board",
        "name": "Board",
        "emoji": "⬛",
        "correct": true
      },
      {
        "id": "student",
        "name": "Student",
        "emoji": "🧑‍🎓",
        "correct": true
      },
      {
        "id": "scissors",
        "name": "Scissors",
        "emoji": "✂️",
        "correct": true
      },
      {
        "id": "glue",
        "name": "Glue",
        "emoji": "🧴",
        "correct": true
      },
      {
        "id": "apple",
        "name": "Apple",
        "emoji": "🍎",
        "correct": false
      },
      {
        "id": "dog",
        "name": "Dog",
        "emoji": "🐕",
        "correct": false
      },
      {
        "id": "burger",
        "name": "Burger",
        "emoji": "🍔",
        "correct": false
      }
    ],
    "quiz": [
      {
        "question": "Como se diz <span class=\"quiz-highlight\">\"Livro\"</span> em inglês?",
        "options": [
          "Pencil",
          "Book",
          "Desk",
          "Eraser"
        ],
        "correct": 1,
        "explanation": "Exato! \"Book\" é livro! 📖",
        "nalaMsg": "Good job! 🌟"
      },
      {
        "question": "O que significa <span class=\"quiz-highlight\">\"Pencil\"</span>?",
        "options": [
          "Borracha",
          "Mochila",
          "Lápis",
          "Caneta"
        ],
        "correct": 2,
        "explanation": "Correto! \"Pencil\" é lápis! ✏️",
        "nalaMsg": "Awesome! 🎉"
      },
      {
        "question": "Como se diz <span class=\"quiz-highlight\">\"Professor(a)\"</span>?",
        "options": [
          "Student",
          "Teacher",
          "School",
          "Ruler"
        ],
        "correct": 1,
        "explanation": "Isso! \"Teacher\" é professor ou professora! 👩‍🏫",
        "nalaMsg": "You rock! 🐾"
      },
      {
        "question": "Traduza para o inglês: <span class=\"quiz-highlight\">\"Carteira\"</span>.",
        "options": [
          "Desk",
          "Board",
          "Chair",
          "Backpack"
        ],
        "correct": 0,
        "explanation": "Perfeito! \"Desk\" é a mesa escolar! 🪑",
        "nalaMsg": "Brilliant! ⭐"
      },
      {
        "question": "Qual destas opções significa <span class=\"quiz-highlight\">\"Mochila\"</span>?",
        "options": [
          "Notebook",
          "Paper",
          "Backpack",
          "Glue"
        ],
        "correct": 2,
        "explanation": "Acertou! \"Backpack\" é mochila! 🎒",
        "nalaMsg": "Great work! 🐶"
      },
      {
        "question": "O que é uma <span class=\"quiz-highlight\">\"Eraser\"</span>?",
        "options": [
          "Régua",
          "Tesoura",
          "Cola",
          "Borracha"
        ],
        "correct": 3,
        "explanation": "Isso aí! \"Eraser\" é para apagar! 🧼",
        "nalaMsg": "Fantastic! 🚀"
      },
      {
        "question": "Como se escreve <span class=\"quiz-highlight\">\"Caderno\"</span>?",
        "options": [
          "Notebook",
          "Book",
          "Paper",
          "Board"
        ],
        "correct": 0,
        "explanation": "Muito bem! \"Notebook\" é caderno! 📓",
        "nalaMsg": "Super! 🏆"
      },
      {
        "question": "Se você precisa escrever à tinta, você usa uma:",
        "options": [
          "Pencil",
          "Crayon",
          "Pen",
          "Scissors"
        ],
        "correct": 2,
        "explanation": "Isso mesmo! \"Pen\" é caneta! 🖊️",
        "nalaMsg": "Good! 🌟"
      },
      {
        "question": "Para medir algo, usamos uma <span class=\"quiz-highlight\">\"Régua\"</span>. Tradução:",
        "options": [
          "Glue",
          "Ruler",
          "Board",
          "Calculator"
        ],
        "correct": 1,
        "explanation": "Exato! \"Ruler\" é régua! 📏",
        "nalaMsg": "Awesome! 🎉"
      },
      {
        "question": "O professor escreve no <span class=\"quiz-highlight\">\"Quadro\"</span>. Palavra:",
        "options": [
          "Paper",
          "Desk",
          "Board",
          "Notebook"
        ],
        "correct": 2,
        "explanation": "Correto! \"Board\" é o quadro negro! ⬛",
        "nalaMsg": "You rock! 🐾"
      },
      {
        "question": "Qual palavra significa <span class=\"quiz-highlight\">\"Aluno(a)\"</span>?",
        "options": [
          "Teacher",
          "Student",
          "School",
          "Classroom"
        ],
        "correct": 1,
        "explanation": "Perfeito! \"Student\" é aluno! 🧑‍🎓",
        "nalaMsg": "Brilliant! ⭐"
      },
      {
        "question": "O que significa <span class=\"quiz-highlight\">\"Scissors\"</span>?",
        "options": [
          "Tesoura",
          "Cola",
          "Papel",
          "Lápis"
        ],
        "correct": 0,
        "explanation": "Acertou! \"Scissors\" significa tesoura! ✂️",
        "nalaMsg": "Great work! 🐶"
      },
      {
        "question": "Para colar algo, você precisa de:",
        "options": [
          "Crayon",
          "Eraser",
          "Glue",
          "Pen"
        ],
        "correct": 2,
        "explanation": "Isso! \"Glue\" é cola! 🧴",
        "nalaMsg": "Fantastic! 🚀"
      },
      {
        "question": "Como se diz <span class=\"quiz-highlight\">\"Escola\"</span> em inglês?",
        "options": [
          "Classroom",
          "School",
          "Teacher",
          "Student"
        ],
        "correct": 1,
        "explanation": "Muito bem! \"School\" é escola! 🏫",
        "nalaMsg": "Super! 🏆"
      }
    ],
    "truefalse": [
      {
        "question": "You use an eraser to write on the board.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! You use a pen or chalk to write, and an eraser to clean. 🧼",
        "nalaMsg": "Good one!"
      },
      {
        "question": "A backpack is used to carry books.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! We put our school supplies in it. 🎒",
        "nalaMsg": "Ready for school!"
      },
      {
        "question": "A teacher learns from the students.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! A teacher teaches the students. 👩‍🏫",
        "nalaMsg": "Smart!"
      },
      {
        "question": "You sit on a desk.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! You sit on a chair, and put your books on the desk. 🪑",
        "nalaMsg": "Careful!"
      },
      {
        "question": "A notebook has blank pages for writing.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 📓",
        "nalaMsg": "Write it down!"
      }
    ]
  },
  "cinema": {
    "title": "Cinema",
    "bgImage": "url('images/bg-cinema.png')",
    "emoji": "🍿",
    "speaking": [
      {
        "question": "Do you like to go to the cinema?",
        "translation": "Você gosta de ir ao cinema?",
        "starter": "Yes, I love going to the cinema!",
        "nalaTip": "Action! 🎬"
      },
      {
        "question": "What is your favorite movie?",
        "translation": "Qual é o seu filme favorito?",
        "starter": "My favorite movie is...",
        "nalaTip": "Popcorn time! 🍿"
      },
      {
        "question": "Do you prefer comedy or action movies?",
        "translation": "Você prefere filmes de comédia ou ação?",
        "starter": "I prefer comedy movies because they are funny.",
        "nalaTip": "Haha! 😂"
      },
      {
        "question": "Do you eat popcorn at the movies?",
        "translation": "Você come pipoca no cinema?",
        "starter": "Yes, I always eat sweet popcorn.",
        "nalaTip": "Yummy! 🍿"
      },
      {
        "question": "Who do you go to the movies with?",
        "translation": "Com quem você vai ao cinema?",
        "starter": "I go with my family and friends.",
        "nalaTip": "Fun together! 🐕"
      }
    ],
    "truefalse": [
      {
        "question": "You watch a movie on a big screen at the cinema.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! The screen is very big! 📽️",
        "nalaMsg": "Awesome!"
      },
      {
        "question": "You need a ticket to enter the cinema.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! Don't forget your ticket! 🎫",
        "nalaMsg": "Got it!"
      },
      {
        "question": "It is good to shout loudly during a movie.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! We must be quiet. 🤫",
        "nalaMsg": "Shh!"
      },
      {
        "question": "Popcorn is a popular snack at the movies.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! It is delicious! 🍿",
        "nalaMsg": "Crunch!"
      },
      {
        "question": "A comedy movie makes you cry a lot.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! Comedy makes you laugh! 😂",
        "nalaMsg": "Haha!"
      }
    ],
    "story": [
      {
        "text": "Nala is going to the cinema today!"
      },
      {
        "text": "She wants to watch a movie about brave dogs."
      },
      {
        "text": "First, she buys a ticket at the box office."
      },
      {
        "text": "Then, she gets a big bucket of popcorn."
      },
      {
        "text": "She enters the dark theater and finds her seat."
      },
      {
        "text": "The big screen lights up, the movie starts."
      },
      {
        "text": "It is an action movie with lots of running!"
      },
      {
        "text": "Nala laughs at the funny scenes."
      },
      {
        "text": "When the movie ends, she claps her paws."
      },
      {
        "text": "What a great day at the cinema!"
      }
    ],
    "matching": [
      {
        "word": "Movie",
        "emoji": "🎬",
        "pt": "Filme"
      },
      {
        "word": "Popcorn",
        "emoji": "🍿",
        "pt": "Pipoca"
      },
      {
        "word": "Ticket",
        "emoji": "🎫",
        "pt": "Ingresso"
      },
      {
        "word": "Screen",
        "emoji": "📽️",
        "pt": "Tela"
      },
      {
        "word": "Seat",
        "emoji": "💺",
        "pt": "Assento"
      },
      {
        "word": "Glasses",
        "emoji": "👓",
        "pt": "Óculos"
      },
      {
        "word": "Comedy",
        "emoji": "😂",
        "pt": "Comédia"
      },
      {
        "word": "Action",
        "emoji": "🏃",
        "pt": "Ação"
      },
      {
        "word": "Cartoon",
        "emoji": "🎨",
        "pt": "Desenho"
      },
      {
        "word": "Drink",
        "emoji": "🥤",
        "pt": "Bebida"
      }
    ],
    "sentence": [
      {
        "words": [
          "I",
          "watch",
          "a",
          "movie"
        ],
        "translation": "Eu assisto a um filme"
      },
      {
        "words": [
          "The",
          "popcorn",
          "is",
          "delicious"
        ],
        "translation": "A pipoca é deliciosa"
      },
      {
        "words": [
          "I",
          "have",
          "a",
          "ticket"
        ],
        "translation": "Eu tenho um ingresso"
      },
      {
        "words": [
          "The",
          "screen",
          "is",
          "big"
        ],
        "translation": "A tela é grande"
      },
      {
        "words": [
          "We",
          "sit",
          "in",
          "the",
          "seat"
        ],
        "translation": "Nós sentamos no assento"
      }
    ],
    "spelling": [
      "movie",
      "popcorn",
      "ticket",
      "screen",
      "seat",
      "glasses",
      "comedy",
      "action",
      "cartoon",
      "drink"
    ],
    "garden": [
      {
        "word": "Movie",
        "question": "A story shown on a big screen."
      },
      {
        "word": "Popcorn",
        "question": "A snack made from heated corn kernels."
      },
      {
        "word": "Ticket",
        "question": "A piece of paper you buy to enter the cinema."
      },
      {
        "word": "Screen",
        "question": "The large flat surface where the movie is shown."
      },
      {
        "word": "Seat",
        "question": "A place where you sit to watch the movie."
      },
      {
        "word": "Glasses",
        "question": "You wear these to watch a 3D movie."
      },
      {
        "word": "Comedy",
        "question": "A movie that makes you laugh."
      },
      {
        "word": "Action",
        "question": "A movie with lots of exciting events."
      },
      {
        "word": "Cartoon",
        "question": "An animated movie."
      },
      {
        "word": "Drink",
        "question": "A liquid you buy to quench your thirst."
      }
    ],
    "fetch": [
      {
        "id": "movie",
        "name": "Movie",
        "emoji": "🎬",
        "correct": true
      },
      {
        "id": "popcorn",
        "name": "Popcorn",
        "emoji": "🍿",
        "correct": true
      },
      {
        "id": "ticket",
        "name": "Ticket",
        "emoji": "🎫",
        "correct": true
      },
      {
        "id": "screen",
        "name": "Screen",
        "emoji": "📽️",
        "correct": true
      },
      {
        "id": "apple",
        "name": "Apple",
        "emoji": "🍎",
        "correct": false
      },
      {
        "id": "bone",
        "name": "Bone",
        "emoji": "🦴",
        "correct": false
      },
      {
        "id": "seat",
        "name": "Seat",
        "emoji": "💺",
        "correct": true
      },
      {
        "id": "shoes",
        "name": "Shoes",
        "emoji": "👟",
        "correct": false
      },
      {
        "id": "glasses",
        "name": "Glasses",
        "emoji": "👓",
        "correct": true
      },
      {
        "id": "drink",
        "name": "Drink",
        "emoji": "🥤",
        "correct": true
      }
    ],
    "quiz": [
      {
        "question": "What do you eat at the cinema?",
        "options": [
          "Apple",
          "Popcorn",
          "Soup",
          "Rice"
        ],
        "correct": 1,
        "explanation": "Popcorn! 🍿",
        "nalaMsg": "Yummy!"
      },
      {
        "question": "You need this to enter the movie.",
        "options": [
          "Ticket",
          "Book",
          "Pencil",
          "Hat"
        ],
        "correct": 0,
        "explanation": "Ticket! 🎫",
        "nalaMsg": "Don't forget it!"
      },
      {
        "question": "Where does the movie play?",
        "options": [
          "Wall",
          "Floor",
          "Screen",
          "Window"
        ],
        "correct": 2,
        "explanation": "Screen! 📽️",
        "nalaMsg": "Look up!"
      },
      {
        "question": "A funny movie is a...",
        "options": [
          "Horror",
          "Action",
          "Comedy",
          "Documentary"
        ],
        "correct": 2,
        "explanation": "Comedy! 😂",
        "nalaMsg": "Haha!"
      },
      {
        "question": "You drink this at the cinema.",
        "options": [
          "Soup",
          "Tea",
          "Drink",
          "Oil"
        ],
        "correct": 2,
        "explanation": "Drink! 🥤",
        "nalaMsg": "Slurp!"
      }
    ]
  },
  "amusement": {
    "title": "Amusement Park",
    "bgImage": "url('images/bg-amusement.png')",
    "emoji": "🎢",
    "speaking": [
      {
        "question": "Do you like amusement parks?",
        "translation": "Você gosta de parques de diversão?",
        "starter": "Yes, I think they are very fun!",
        "nalaTip": "So fun! 🎢"
      },
      {
        "question": "Are you afraid of the roller coaster?",
        "translation": "Você tem medo da montanha-russa?",
        "starter": "No, I love the roller coaster! / Yes, it is too fast.",
        "nalaTip": "Hold on tight! 🎢"
      },
      {
        "question": "Have you ever been on a Ferris wheel?",
        "translation": "Você já andou na roda-gigante?",
        "starter": "Yes, the view from the top is beautiful.",
        "nalaTip": "Up so high! 🎡"
      },
      {
        "question": "What is your favorite park food?",
        "translation": "Qual é a sua comida favorita de parque?",
        "starter": "My favorite is cotton candy.",
        "nalaTip": "Sweet! 🍭"
      },
      {
        "question": "Do you play games to win prizes?",
        "translation": "Você joga para ganhar prêmios?",
        "starter": "Yes, I won a giant teddy bear once!",
        "nalaTip": "Good luck! 🧸"
      }
    ],
    "truefalse": [
      {
        "question": "A roller coaster goes very fast.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! Hold on! 🎢",
        "nalaMsg": "Woohoo!"
      },
      {
        "question": "A Ferris wheel is flat on the ground.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! It goes high up in the air. 🎡",
        "nalaMsg": "Great view!"
      },
      {
        "question": "Cotton candy is sweet and fluffy.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! It looks like pink clouds. 🍭",
        "nalaMsg": "Yum!"
      },
      {
        "question": "You can win prizes at the games.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! Like a big teddy bear! 🧸",
        "nalaMsg": "Winner!"
      },
      {
        "question": "Amusement parks are very quiet places.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! They are noisy and full of fun. 🎪",
        "nalaMsg": "Laugh out loud!"
      }
    ],
    "story": [
      {
        "text": "Today, Nala is at the Amusement Park!"
      },
      {
        "text": "She sees a giant Ferris wheel spinning slowly."
      },
      {
        "text": "First, she wants to ride the roller coaster."
      },
      {
        "text": "It goes up, up, up... and then WHOOSH down!"
      },
      {
        "text": "Nala barks happily. That was so fast!"
      },
      {
        "text": "Next, she buys some pink cotton candy."
      },
      {
        "text": "It is sweet and melts in her mouth."
      },
      {
        "text": "She plays a game and wins a toy."
      },
      {
        "text": "The sun goes down and the lights turn on."
      },
      {
        "text": "It was a magical day at the park."
      }
    ],
    "matching": [
      {
        "word": "Roller Coaster",
        "emoji": "🎢",
        "pt": "Montanha-russa"
      },
      {
        "word": "Ferris Wheel",
        "emoji": "🎡",
        "pt": "Roda-gigante"
      },
      {
        "word": "Carousel",
        "emoji": "🎠",
        "pt": "Carrossel"
      },
      {
        "word": "Ticket",
        "emoji": "🎟️",
        "pt": "Ingresso"
      },
      {
        "word": "Cotton Candy",
        "emoji": "🍭",
        "pt": "Algodão doce"
      },
      {
        "word": "Balloon",
        "emoji": "🎈",
        "pt": "Balão"
      },
      {
        "word": "Prize",
        "emoji": "🧸",
        "pt": "Prêmio"
      },
      {
        "word": "Tent",
        "emoji": "🎪",
        "pt": "Tenda"
      },
      {
        "word": "Popcorn",
        "emoji": "🍿",
        "pt": "Pipoca"
      },
      {
        "word": "Game",
        "emoji": "🎯",
        "pt": "Jogo"
      }
    ],
    "sentence": [
      {
        "words": [
          "The",
          "roller",
          "coaster",
          "is",
          "fast"
        ],
        "translation": "A montanha-russa é rápida"
      },
      {
        "words": [
          "I",
          "see",
          "the",
          "Ferris",
          "wheel"
        ],
        "translation": "Eu vejo a roda-gigante"
      },
      {
        "words": [
          "I",
          "eat",
          "cotton",
          "candy"
        ],
        "translation": "Eu como algodão doce"
      },
      {
        "words": [
          "She",
          "wins",
          "a",
          "prize"
        ],
        "translation": "Ela ganha um prêmio"
      },
      {
        "words": [
          "We",
          "play",
          "a",
          "game"
        ],
        "translation": "Nós jogamos um jogo"
      }
    ],
    "spelling": [
      "coaster",
      "wheel",
      "carousel",
      "ticket",
      "candy",
      "balloon",
      "prize",
      "tent",
      "popcorn",
      "game"
    ],
    "garden": [
      {
        "word": "Roller Coaster",
        "question": "A fast ride with steep drops and loops."
      },
      {
        "word": "Ferris Wheel",
        "question": "A giant wheel with passenger cars."
      },
      {
        "word": "Carousel",
        "question": "A merry-go-round with horses."
      },
      {
        "word": "Ticket",
        "question": "A piece of paper needed to go on a ride."
      },
      {
        "word": "Cotton Candy",
        "question": "A fluffy, spun sugar treat."
      },
      {
        "word": "Balloon",
        "question": "A colorful inflatable bag."
      },
      {
        "word": "Prize",
        "question": "A reward you win at a game."
      },
      {
        "word": "Tent",
        "question": "A shelter made of fabric."
      },
      {
        "word": "Popcorn",
        "question": "A classic salty snack."
      },
      {
        "word": "Game",
        "question": "An activity you play to win something."
      }
    ],
    "fetch": [
      {
        "id": "coaster",
        "name": "Roller Coaster",
        "emoji": "🎢",
        "correct": true
      },
      {
        "id": "wheel",
        "name": "Ferris Wheel",
        "emoji": "🎡",
        "correct": true
      },
      {
        "id": "carousel",
        "name": "Carousel",
        "emoji": "🎠",
        "correct": true
      },
      {
        "id": "candy",
        "name": "Cotton Candy",
        "emoji": "🍭",
        "correct": true
      },
      {
        "id": "apple",
        "name": "Apple",
        "emoji": "🍎",
        "correct": false
      },
      {
        "id": "balloon",
        "name": "Balloon",
        "emoji": "🎈",
        "correct": true
      },
      {
        "id": "prize",
        "name": "Prize",
        "emoji": "🧸",
        "correct": true
      },
      {
        "id": "shoes",
        "name": "Shoes",
        "emoji": "👟",
        "correct": false
      },
      {
        "id": "tent",
        "name": "Tent",
        "emoji": "🎪",
        "correct": true
      },
      {
        "id": "game",
        "name": "Game",
        "emoji": "🎯",
        "correct": true
      }
    ],
    "quiz": [
      {
        "question": "This ride goes very fast on tracks.",
        "options": [
          "Ferris Wheel",
          "Roller Coaster",
          "Carousel",
          "Tent"
        ],
        "correct": 1,
        "explanation": "Roller Coaster! 🎢",
        "nalaMsg": "Hold on!"
      },
      {
        "question": "A sweet pink treat on a stick.",
        "options": [
          "Apple",
          "Popcorn",
          "Cotton Candy",
          "Burger"
        ],
        "correct": 2,
        "explanation": "Cotton Candy! 🍭",
        "nalaMsg": "Sweet!"
      },
      {
        "question": "A big wheel that goes round slowly.",
        "options": [
          "Ferris Wheel",
          "Carousel",
          "Car",
          "Bike"
        ],
        "correct": 0,
        "explanation": "Ferris Wheel! 🎡",
        "nalaMsg": "Look at the view!"
      },
      {
        "question": "A ride with wooden horses.",
        "options": [
          "Roller Coaster",
          "Carousel",
          "Train",
          "Boat"
        ],
        "correct": 1,
        "explanation": "Carousel! 🎠",
        "nalaMsg": "Round and round!"
      },
      {
        "question": "If you win a game, you get a...",
        "options": [
          "Prize",
          "Punishment",
          "Ticket",
          "Nap"
        ],
        "correct": 0,
        "explanation": "Prize! 🧸",
        "nalaMsg": "Yay!"
      }
    ]
  },
  "home": {
    "title": "Home & Chores",
    "bgImage": "url('images/bg-home.png')",
    "emoji": "🏠",
    "speaking": [
      {
        "question": "Where do you sleep in your house?",
        "translation": "Onde você dorme na sua casa?",
        "starter": "I sleep in my bedroom.",
        "nalaTip": "Cozy bed! 🛏️"
      },
      {
        "question": "Who cooks dinner at your home?",
        "translation": "Quem faz o jantar na sua casa?",
        "starter": "My mother / father cooks dinner in the kitchen.",
        "nalaTip": "Yummy food! 🍳"
      },
      {
        "question": "Do you help clean the house?",
        "translation": "Você ajuda a limpar a casa?",
        "starter": "Yes, I help sweep the floor.",
        "nalaTip": "Good helper! 🧹"
      },
      {
        "question": "Where do you watch TV?",
        "translation": "Onde você assiste TV?",
        "starter": "I watch TV in the living room.",
        "nalaTip": "Relax! 🛋️"
      },
      {
        "question": "What chore do you do?",
        "translation": "Qual tarefa doméstica você faz?",
        "starter": "I wash the dishes.",
        "nalaTip": "Clean plates! 🍽️"
      }
    ],
    "truefalse": [
      {
        "question": "You cook food in the bathroom.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! You cook in the kitchen. 🍳",
        "nalaMsg": "Silly!"
      },
      {
        "question": "A bed is for sleeping in the bedroom.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 🛏️",
        "nalaMsg": "Goodnight!"
      },
      {
        "question": "Washing dishes means cleaning plates and cups.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 🍽️",
        "nalaMsg": "All clean!"
      },
      {
        "question": "A broom is used to eat food.",
        "options": [
          "True",
          "False"
        ],
        "correct": 1,
        "explanation": "False! A broom is used to sweep the floor. 🧹",
        "nalaMsg": "Keep it tidy!"
      },
      {
        "question": "You watch TV in the living room.",
        "options": [
          "True",
          "False"
        ],
        "correct": 0,
        "explanation": "True! 📺",
        "nalaMsg": "Relax time!"
      }
    ],
    "story": [
      {
        "text": "It is Saturday morning at Nala's house."
      },
      {
        "text": "Everyone is helping to clean the home."
      },
      {
        "text": "Nala helps to pick up her dog toys."
      },
      {
        "text": "Mom is sweeping the floor with a broom."
      },
      {
        "text": "Dad is washing the dishes in the kitchen."
      },
      {
        "text": "The windows are open to let the sun in."
      },
      {
        "text": "After cleaning, the house looks beautiful!"
      },
      {
        "text": "Now they can relax in the living room."
      },
      {
        "text": "They sit on the sofa and watch TV."
      },
      {
        "text": "Helping at home is good for the family."
      }
    ],
    "matching": [
      {
        "word": "House",
        "emoji": "🏠",
        "pt": "Casa"
      },
      {
        "word": "Kitchen",
        "emoji": "🍳",
        "pt": "Cozinha"
      },
      {
        "word": "Bedroom",
        "emoji": "🛏️",
        "pt": "Quarto"
      },
      {
        "word": "Bathroom",
        "emoji": "🚿",
        "pt": "Banheiro"
      },
      {
        "word": "Living Room",
        "emoji": "🛋️",
        "pt": "Sala de estar"
      },
      {
        "word": "Broom",
        "emoji": "🧹",
        "pt": "Vassoura"
      },
      {
        "word": "Dishes",
        "emoji": "🍽️",
        "pt": "Louças"
      },
      {
        "word": "Trash",
        "emoji": "🗑️",
        "pt": "Lixo"
      },
      {
        "word": "Sofa",
        "emoji": "🛋️",
        "pt": "Sofá"
      },
      {
        "word": "Window",
        "emoji": "🪟",
        "pt": "Janela"
      }
    ],
    "sentence": [
      {
        "words": [
          "I",
          "clean",
          "my",
          "bedroom"
        ],
        "translation": "Eu limpo meu quarto"
      },
      {
        "words": [
          "She",
          "washes",
          "the",
          "dishes"
        ],
        "translation": "Ela lava as louças"
      },
      {
        "words": [
          "We",
          "sit",
          "on",
          "the",
          "sofa"
        ],
        "translation": "Nós sentamos no sofá"
      },
      {
        "words": [
          "The",
          "kitchen",
          "is",
          "clean"
        ],
        "translation": "A cozinha está limpa"
      },
      {
        "words": [
          "I",
          "use",
          "the",
          "broom"
        ],
        "translation": "Eu uso a vassoura"
      }
    ],
    "spelling": [
      "house",
      "kitchen",
      "bedroom",
      "bathroom",
      "living",
      "broom",
      "dishes",
      "trash",
      "sofa",
      "window"
    ],
    "garden": [
      {
        "word": "House",
        "question": "A building where people live."
      },
      {
        "word": "Kitchen",
        "question": "A room where food is cooked."
      },
      {
        "word": "Bedroom",
        "question": "A room for sleeping in."
      },
      {
        "word": "Bathroom",
        "question": "A room with a toilet and shower."
      },
      {
        "word": "Living Room",
        "question": "A room where people sit and relax."
      },
      {
        "word": "Broom",
        "question": "A tool used for sweeping."
      },
      {
        "word": "Dishes",
        "question": "Plates, bowls, and cups."
      },
      {
        "word": "Trash",
        "question": "Waste material to be thrown away."
      },
      {
        "word": "Sofa",
        "question": "A long, comfortable seat."
      },
      {
        "word": "Window",
        "question": "An opening in a wall to let light in."
      }
    ],
    "fetch": [
      {
        "id": "house",
        "name": "House",
        "emoji": "🏠",
        "correct": true
      },
      {
        "id": "kitchen",
        "name": "Kitchen",
        "emoji": "🍳",
        "correct": true
      },
      {
        "id": "bedroom",
        "name": "Bedroom",
        "emoji": "🛏️",
        "correct": true
      },
      {
        "id": "bathroom",
        "name": "Bathroom",
        "emoji": "🚿",
        "correct": true
      },
      {
        "id": "apple",
        "name": "Apple",
        "emoji": "🍎",
        "correct": false
      },
      {
        "id": "broom",
        "name": "Broom",
        "emoji": "🧹",
        "correct": true
      },
      {
        "id": "dishes",
        "name": "Dishes",
        "emoji": "🍽️",
        "correct": true
      },
      {
        "id": "shoes",
        "name": "Shoes",
        "emoji": "👟",
        "correct": false
      },
      {
        "id": "trash",
        "name": "Trash",
        "emoji": "🗑️",
        "correct": true
      },
      {
        "id": "sofa",
        "name": "Sofa",
        "emoji": "🛋️",
        "correct": true
      }
    ],
    "quiz": [
      {
        "question": "Where do you sleep?",
        "options": [
          "Kitchen",
          "Bathroom",
          "Bedroom",
          "Garden"
        ],
        "correct": 2,
        "explanation": "Bedroom! 🛏️",
        "nalaMsg": "Sweet dreams!"
      },
      {
        "question": "Where do you cook food?",
        "options": [
          "Living Room",
          "Kitchen",
          "Bedroom",
          "Garage"
        ],
        "correct": 1,
        "explanation": "Kitchen! 🍳",
        "nalaMsg": "Smells good!"
      },
      {
        "question": "You use this to sweep the floor.",
        "options": [
          "Broom",
          "Spoon",
          "Brush",
          "Towel"
        ],
        "correct": 0,
        "explanation": "Broom! 🧹",
        "nalaMsg": "Good job!"
      },
      {
        "question": "Where do you take a shower?",
        "options": [
          "Kitchen",
          "Bedroom",
          "Bathroom",
          "Living Room"
        ],
        "correct": 2,
        "explanation": "Bathroom! 🚿",
        "nalaMsg": "Splish splash!"
      },
      {
        "question": "After eating, we wash the...",
        "options": [
          "Clothes",
          "Dishes",
          "Car",
          "Dog"
        ],
        "correct": 1,
        "explanation": "Dishes! 🍽️",
        "nalaMsg": "Sparkling clean!"
      }
    ]
  }
};

// Auto-apply background image based on selected module
(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const selected = urlParams.get('module') || localStorage.getItem('selectedModule');
  if (selected && gameData[selected] && gameData[selected].bgImage) {
    document.addEventListener('DOMContentLoaded', () => {
      const bg = gameData[selected].bgImage;
      if (bg.includes('url')) {
        document.body.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.9)), ${bg}`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
      } else {
        document.body.style.background = bg;
      }
      
      // Inject dynamic background helper styles if the background is dark
      if (!bg.includes('url')) {
        document.body.classList.add('dark-bg');
        const style = document.createElement('style');
        style.innerHTML = `
          .dark-bg h1, .dark-bg .hub-title, .dark-bg .garden-prompt, .dark-bg .fetch-prompt {
            color: var(--white) !important;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          }
        `;
        document.head.appendChild(style);
      }
    });
  }
})();

const gameData = {
  colors: {
    title: "Colors",
    bgImage: "url('images/bg-colors.png')",
    emoji: "🎨",
    story: [
      { text: "Hi Laís! Do you want to paint with me today?" },
      { text: "Yes, Nala! I love painting. What color should we use first?" },
      { text: "Let's start with Red! We can paint a big red apple." },
      { text: "Good idea! And what about the sky?" },
      { text: "We need Blue for the sky. A beautiful blue sky!" },
      { text: "I want to paint a sun too. Do we have Yellow?" },
      { text: "Yes! Yellow for the sun. It is shining bright." },
      { text: "Look, Nala. I made Green leaves for the trees." },
      { text: "Perfect! Now let's use Pink for some pretty flowers." },
      { text: "And Orange for a little butterfly. Our painting is amazing!" }
    ],
    matching: [
      { word: "Red", emoji: "🍎" },
      { word: "Blue", emoji: "💧" },
      { word: "Yellow", emoji: "☀️" },
      { word: "Green", emoji: "🍃" },
      { word: "Pink", emoji: "🌸" },
      { word: "Orange", emoji: "🍊" },
      { word: "Purple", emoji: "🍇" },
      { word: "Black", emoji: "🎱" },
      { word: "White", emoji: "☁️" },
      { word: "Brown", emoji: "🐻" }
    ],
    sentence: [
      { words: ["The", "apple", "is", "red"], translation: "A maçã é vermelha" },
      { words: ["I", "see", "a", "blue", "sky"], translation: "Eu vejo um céu azul" },
      { words: ["The", "sun", "is", "yellow"], translation: "O sol é amarelo" },
      { words: ["Leaves", "are", "green"], translation: "Folhas são verdes" },
      { words: ["I", "like", "pink", "flowers"], translation: "Eu gosto de flores rosas" }
    ],
    spelling: ["red", "blue", "green", "yellow", "pink", "orange", "purple", "black", "white", "brown"],
    garden: ["red", "blue", "yellow", "green", "pink", "orange", "purple", "black", "white", "brown"],
    fetch: [
      { id: "red_apple", name: "Red Apple", emoji: "🍎", correct: true },
      { id: "blue_berry", name: "Blue Berry", emoji: "🫐", correct: true },
      { id: "yellow_banana", name: "Yellow Banana", emoji: "🍌", correct: true },
      { id: "green_leaf", name: "Green Leaf", emoji: "🍃", correct: true },
      { id: "orange_fruit", name: "Orange", emoji: "🍊", correct: true },
      { id: "black_cat", name: "Black Cat", emoji: "🐈‍⬛", correct: false },
      { id: "white_cloud", name: "White Cloud", emoji: "☁️", correct: false }
,
      { id: "purple_grape", name: "Purple Grape", emoji: "🍇", correct: true },
      { id: "brown_bear", name: "Brown Bear", emoji: "🐻", correct: true },
      { id: "car", name: "Car", emoji: "🚗", correct: false },
      { id: "phone", name: "Phone", emoji: "📱", correct: false }
    ],
    quiz: [
      {
        question: 'Como se diz <span class="quiz-highlight">"Vermelho"</span> em inglês?',
        options: ['Blue', 'Green', 'Red', 'Yellow'],
        correct: 2,
        explanation: 'Isso mesmo! "Red" significa vermelho! ❤️',
        nalaMsg: 'You\'re amazing! ⭐'
      },
      {
        question: 'Qual a cor <span class="quiz-highlight">"Azul"</span> em inglês?',
        options: ['Blue', 'Pink', 'Orange', 'White'],
        correct: 0,
        explanation: 'Perfeito! "Blue" é azul em inglês! 💙',
        nalaMsg: 'You did it! 🏆'
      },
      {
        question: 'Como se diz <span class="quiz-highlight">"Amarelo"</span> em inglês?',
        options: ['Purple', 'Yellow', 'Black', 'Brown'],
        correct: 1,
        explanation: 'Muito bem! "Yellow" é amarelo! 💛',
        nalaMsg: 'Fantastic! 🌟'
      },
      {
        question: 'Qual é a cor <span class="quiz-highlight">"Verde"</span>?',
        options: ['Red', 'Orange', 'Pink', 'Green'],
        correct: 3,
        explanation: 'Correto! "Green" é verde! 💚',
        nalaMsg: 'Great job! 🐾'
      },
      {
        question: 'A cor <span class="quiz-highlight">"Rosa"</span> se diz:',
        options: ['Pink', 'White', 'Blue', 'Brown'],
        correct: 0,
        explanation: 'Sim! "Pink" é rosa! 🩷',
        nalaMsg: 'Super! 🚀'
      }
    ]
  },
  animals: {
    title: "Animals",
    bgImage: "url('images/bg-animals.png')",
    emoji: "🐾",
    story: [
      { text: "Laís, look at all the animals in the forest!" },
      { text: "Wow! You are a very happy Dog today, Nala." },
      { text: "I love playing here. Did you see the Cat over there?" },
      { text: "Yes, the cat is sleeping. And look up in the tree!" },
      { text: "Oh, it's a small blue Bird singing a beautiful song." },
      { text: "Let's walk near the lake. Maybe we can see a Fish." },
      { text: "I see a fish! It is swimming fast." },
      { text: "Wait, what is that jumping in the grass?" },
      { text: "It's a fast Rabbit! Hop, hop, hop!" },
      { text: "And look down here... a slow green Turtle walking near the water." }
    ],
    matching: [
      { word: "Dog", emoji: "🐕" },
      { word: "Cat", emoji: "🐈" },
      { word: "Bird", emoji: "🐦" },
      { word: "Fish", emoji: "🐟" },
      { word: "Rabbit", emoji: "🐇" },
      { word: "Turtle", emoji: "🐢" },
      { word: "Lion", emoji: "🦁" },
      { word: "Elephant", emoji: "🐘" },
      { word: "Monkey", emoji: "🐒" },
      { word: "Tiger", emoji: "🐅" }
    ],
    sentence: [
      { words: ["The", "dog", "is", "brown"], translation: "O cachorro é marrom" },
      { words: ["I", "love", "my", "cat"], translation: "Eu amo meu gato" },
      { words: ["The", "bird", "can", "fly"], translation: "O pássaro pode voar" },
      { words: ["A", "fish", "swims", "fast"], translation: "Um peixe nada rápido" },
      { words: ["Look", "at", "the", "lion"], translation: "Olhe para o leão" }
    ],
    spelling: ["dog", "cat", "bird", "fish", "rabbit", "turtle", "lion", "tiger", "monkey", "elephant"],
    garden: ["dog", "cat", "bird", "fish", "rabbit", "turtle", "lion", "tiger"],
    fetch: [
      { id: "bone", name: "Bone (Dog)", emoji: "🦴", correct: true },
      { id: "fish", name: "Fish", emoji: "🐟", correct: true },
      { id: "mouse", name: "Mouse (Cat)", emoji: "🐁", correct: true },
      { id: "carrot", name: "Carrot (Rabbit)", emoji: "🥕", correct: true },
      { id: "shoe", name: "Shoe", emoji: "👞", correct: false },
      { id: "pencil", name: "Pencil", emoji: "✏️", correct: false }
,
      { id: "tiger", name: "Tiger", emoji: "🐅", correct: true },
      { id: "monkey", name: "Monkey", emoji: "🐒", correct: true },
      { id: "penguin", name: "Penguin", emoji: "🐧", correct: true },
      { id: "computer", name: "Computer", emoji: "💻", correct: false },
      { id: "clock", name: "Clock", emoji: "🕰️", correct: false }
    ],
    quiz: [
      {
        question: 'Como se diz <span class="quiz-highlight">"Cachorro"</span> em inglês?',
        options: ['Cat', 'Dog', 'Bird', 'Fish'],
        correct: 1,
        explanation: 'Parabéns! "Dog" é cachorro em inglês! 🐕',
        nalaMsg: 'Muito bem! 🎉'
      },
      {
        question: 'Como se diz <span class="quiz-highlight">"Gato"</span> em inglês?',
        options: ['Dog', 'Mouse', 'Cat', 'Rabbit'],
        correct: 2,
        explanation: 'Certíssimo! "Cat" é gato em inglês! 🐱',
        nalaMsg: 'Awesome! 🌟'
      },
      {
        question: 'Qual é o nome do <span class="quiz-highlight">"Pássaro"</span>?',
        options: ['Turtle', 'Lion', 'Tiger', 'Bird'],
        correct: 3,
        explanation: 'Isso! "Bird" é pássaro! 🐦',
        nalaMsg: 'Great! ✨'
      },
      {
        question: 'O <span class="quiz-highlight">"Leão"</span>, rei da floresta, se chama:',
        options: ['Lion', 'Monkey', 'Elephant', 'Cat'],
        correct: 0,
        explanation: 'Incrível! "Lion" é leão! 🦁',
        nalaMsg: 'Roar! 🦁'
      },
      {
        question: 'E como falamos <span class="quiz-highlight">"Peixe"</span>?',
        options: ['Fish', 'Dog', 'Rabbit', 'Tiger'],
        correct: 0,
        explanation: 'Exato! "Fish" é peixe! 🐟',
        nalaMsg: 'Glub glub! 💧'
      }
    ]
  },
  numbers: {
    title: "Numbers",
    bgImage: "url('images/bg-numbers.png')",
    emoji: "🔢",
    story: [
      { text: "Let's count our toys, Laís! I have One big bone." },
      { text: "That is great! I have Two red balls here." },
      { text: "I found Three small rocks in the garden." },
      { text: "Look, there are Four birds flying in the sky." },
      { text: "Can you see the Five yellow flowers?" },
      { text: "Yes! And there are Six green leaves falling from the tree." },
      { text: "Let's walk Seven steps forward. One, two..." },
      { text: "Eight, Nine, Ten! We walked ten steps together." },
      { text: "Counting is so much fun, Laís!" },
      { text: "You are the best dog ever, Nala. Let's count again later!" }
    ],
    matching: [
      { word: "One", emoji: "1️⃣" },
      { word: "Two", emoji: "2️⃣" },
      { word: "Three", emoji: "3️⃣" },
      { word: "Four", emoji: "4️⃣" },
      { word: "Five", emoji: "5️⃣" },
      { word: "Six", emoji: "6️⃣" },
      { word: "Seven", emoji: "7️⃣" },
      { word: "Eight", emoji: "8️⃣" },
      { word: "Nine", emoji: "9️⃣" },
      { word: "Ten", emoji: "🔟" }
    ],
    sentence: [
      { words: ["I", "have", "one", "dog"], translation: "Eu tenho um cachorro" },
      { words: ["She", "has", "two", "cats"], translation: "Ela tem dois gatos" },
      { words: ["I", "see", "three", "birds"], translation: "Eu vejo três pássaros" },
      { words: ["Count", "to", "four"], translation: "Conte até quatro" },
      { words: ["We", "have", "five", "books"], translation: "Nós temos cinco livros" }
    ],
    spelling: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
    garden: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
    fetch: [
      { id: "one_apple", name: "1 Apple", emoji: "🍎", correct: true },
      { id: "two_dogs", name: "2 Dogs", emoji: "🐕🐕", correct: true },
      { id: "three_cats", name: "3 Cats", emoji: "🐈🐈🐈", correct: true },
      { id: "letter_A", name: "Letter A", emoji: "🅰️", correct: false },
      { id: "letter_B", name: "Letter B", emoji: "🅱️", correct: false }
,
      { id: "seven", name: "Seven", emoji: "7️⃣", correct: true },
      { id: "eight", name: "Eight", emoji: "8️⃣", correct: true },
      { id: "nine", name: "Nine", emoji: "9️⃣", correct: true },
      { id: "apple", name: "Apple", emoji: "🍎", correct: false }
    ],
    quiz: [
      {
        question: 'Como se diz o número <span class="quiz-highlight">"Um"</span>?',
        options: ['Two', 'One', 'Four', 'Ten'],
        correct: 1,
        explanation: 'Isso mesmo! "One" é um! 1️⃣',
        nalaMsg: 'Awesome! 🌟'
      },
      {
        question: 'Qual é o número <span class="quiz-highlight">"Cinco"</span> em inglês?',
        options: ['Three', 'Five', 'Seven', 'Four'],
        correct: 1,
        explanation: 'Correto! "Five" é o número cinco! 🖐️',
        nalaMsg: 'Keep going! 💪'
      },
      {
        question: 'O número <span class="quiz-highlight">"Dez"</span> se diz:',
        options: ['Ten', 'Nine', 'Two', 'Eight'],
        correct: 0,
        explanation: 'Maravilha! "Ten" é dez! 🔟',
        nalaMsg: 'You did it! 🏆'
      },
      {
        question: 'Como se fala o número <span class="quiz-highlight">"Dois"</span>?',
        options: ['Four', 'One', 'Three', 'Two'],
        correct: 3,
        explanation: 'Perfeito! "Two" é dois! ✌️',
        nalaMsg: 'Super! 🐾'
      },
      {
        question: 'Qual é o número <span class="quiz-highlight">"Sete"</span>?',
        options: ['Six', 'Seven', 'Nine', 'Five'],
        correct: 1,
        explanation: 'Isso! "Seven" é sete! 7️⃣',
        nalaMsg: 'Amazing! ✨'
      }
    ]
  },
  family: {
    title: "Family",
    bgImage: "url('images/bg-family.png')",
    emoji: "👨‍👩‍👧‍👦",
    story: [
      { text: "Laís, who is in your Family?" },
      { text: "My family is big! I have a Mommy and a Daddy." },
      { text: "That is nice. Do you have a Brother?" },
      { text: "Yes! My brother likes to play with me." },
      { text: "And do you have a Sister too?" },
      { text: "Yes, I have a little sister. She is a cute baby." },
      { text: "I love playing with babies! What about your Grandpa?" },
      { text: "My grandpa tells the best stories." },
      { text: "And your Grandma?" },
      { text: "My grandma makes delicious cookies for all the family!" }
    ],
    matching: [
      { word: "Mommy", emoji: "👩" },
      { word: "Daddy", emoji: "👨" },
      { word: "Brother", emoji: "👦" },
      { word: "Sister", emoji: "👧" },
      { word: "Baby", emoji: "👶" },
      { word: "Grandpa", emoji: "👴" },
      { word: "Grandma", emoji: "👵" },
      { word: "Uncle", emoji: "👨‍🦱" },
      { word: "Aunt", emoji: "👩‍🦱" },
      { word: "Cousin", emoji: "🧒" }
    ],
    sentence: [
      { words: ["My", "mommy", "is", "nice"], translation: "Minha mamãe é legal" },
      { words: ["I", "love", "my", "family"], translation: "Eu amo minha família" },
      { words: ["This", "is", "my", "daddy"], translation: "Este é meu papai" },
      { words: ["My", "brother", "is", "tall"], translation: "Meu irmão é alto" },
      { words: ["I", "play", "with", "sister"], translation: "Eu brinco com a irmã" }
    ],
    spelling: ["mommy", "daddy", "sister", "brother", "baby", "grandpa", "grandma", "family", "uncle", "aunt"],
    garden: ["mommy", "daddy", "brother", "sister", "baby", "family", "grandma", "grandpa"],
    fetch: [
      { id: "mom_gift", name: "Gift for Mommy", emoji: "🎁", correct: true },
      { id: "dad_tie", name: "Daddy's Tie", emoji: "👔", correct: true },
      { id: "baby_bottle", name: "Baby Bottle", emoji: "🍼", correct: true },
      { id: "grandpa_glasses", name: "Grandpa's Glasses", emoji: "👓", correct: true },
      { id: "trash", name: "Trash", emoji: "🗑️", correct: false },
      { id: "spider", name: "Spider", emoji: "🕷️", correct: false }
,
      { id: "cousin", name: "Cousin", emoji: "👦", correct: true },
      { id: "aunt", name: "Aunt", emoji: "👩", correct: true },
      { id: "uncle", name: "Uncle", emoji: "👨", correct: true },
      { id: "tree", name: "Tree", emoji: "🌳", correct: false }
    ],
    quiz: [
      {
        question: 'Como se diz a <span class="quiz-highlight">"Mamãe"</span> (Mother)?',
        options: ['Sister', 'Mommy', 'Aunt', 'Grandma'],
        correct: 1,
        explanation: 'Correto! "Mommy" é mamãe! 👩',
        nalaMsg: 'Muito bem! 🎉'
      },
      {
        question: 'E o <span class="quiz-highlight">"Papai"</span> (Father)?',
        options: ['Uncle', 'Grandpa', 'Daddy', 'Cousin'],
        correct: 2,
        explanation: 'Isso aí! "Daddy" é papai! 👨',
        nalaMsg: 'Awesome! 🌟'
      },
      {
        question: 'Como se fala <span class="quiz-highlight">"Irmão"</span> em inglês?',
        options: ['Brother', 'Sister', 'Baby', 'Uncle'],
        correct: 0,
        explanation: 'Excelente! "Brother" é irmão! 👦',
        nalaMsg: 'You rock! 🎸'
      },
      {
        question: 'Como se fala <span class="quiz-highlight">"Irmã"</span> em inglês?',
        options: ['Aunt', 'Sister', 'Grandma', 'Brother'],
        correct: 1,
        explanation: 'Muito bom! "Sister" é irmã! 👧',
        nalaMsg: 'Great job! 🏆'
      },
      {
        question: 'O que significa a palavra <span class="quiz-highlight">"Grandpa"</span>?',
        options: ['Tio', 'Papai', 'Avô / Vovô', 'Irmão'],
        correct: 2,
        explanation: 'Correto! "Grandpa" é vovô! 👴',
        nalaMsg: 'So smart! 💡'
      }
    ]
  },
  school: {
    title: "School & Class",
    bgImage: "url('images/bg-school.png')",
    emoji: "🎒",
    story: [
      { text: "Good morning, Laís! Are you ready for your classes today?" },
      { text: "Yes, Nala! My first class is Advanced Mathematics." },
      { text: "Wow, that sounds challenging! Do you have your Calculator?" },
      { text: "I do. I also need to submit a Geography assignment." },
      { text: "Make sure your essays are well-written for Literature." },
      { text: "I have reviewed all the chapters in my Textbook." },
      { text: "What about Science? Are you going to the Laboratory?" },
      { text: "Yes, we will do some exciting Chemistry experiments!" },
      { text: "You must always wear your safety goggles, right?" },
      { text: "Exactly! Education is the key to a bright future." }
    ],
    matching: [
      { word: "Pencil", emoji: "✏️" },
      { word: "Eraser", emoji: "🧽" },
      { word: "Notebook", emoji: "📓" },
      { word: "Ruler", emoji: "📏" },
      { word: "Backpack", emoji: "🎒" },
      { word: "Desk", emoji: "🪑" },
      { word: "Board", emoji: "⬛" },
      { word: "Calculator", emoji: "🔢" },
      { word: "Textbook", emoji: "📖" },
      { word: "Pen", emoji: "🖊️" }
    ],
    sentence: [
      { words: ["I", "must", "submit", "my", "assignment"], translation: "Eu devo entregar meu trabalho" },
      { words: ["Geography", "is", "a", "fascinating", "subject"], translation: "Geografia é uma matéria fascinante" },
      { words: ["We", "do", "experiments", "in", "the", "laboratory"], translation: "Nós fazemos experimentos no laboratório" },
      { words: ["Literature", "improves", "our", "reading", "skills"], translation: "Literatura melhora nossas habilidades de leitura" },
      { words: ["She", "needs", "a", "calculator", "now"], translation: "Ela precisa de uma calculadora agora" }
    ],
    spelling: ["pencil", "eraser", "notebook", "ruler", "backpack", "desk", "board", "calculator", "textbook", "pen"],
    garden: ["pencil", "eraser", "notebook", "ruler", "backpack", "desk", "board", "calculator", "textbook", "pen"],
    fetch: [
      { id: "calculator", name: "Calculator", emoji: "🧮", correct: true },
      { id: "microscope", name: "Microscope", emoji: "🔬", correct: true },
      { id: "textbook", name: "Textbook", emoji: "📖", correct: true },
      { id: "globe", name: "Geography Globe", emoji: "🌍", correct: true },
      { id: "sandwich", name: "Sandwich", emoji: "🥪", correct: false },
      { id: "bone", name: "Bone", emoji: "🦴", correct: false },
      { id: "glue", name: "Glue", emoji: "🧴", correct: true },
      { id: "flask", name: "Chemistry Flask", emoji: "⚗️", correct: true },
      { id: "desk", name: "Desk", emoji: "🪑", correct: true },
      { id: "shoes", name: "Shoes", emoji: "👟", correct: false }
    ],
    quiz: [
      {
        question: 'O que significa <span class="quiz-highlight">"Assignment"</span> no contexto escolar?',
        options: ['Mochila', 'Trabalho / Tarefa', 'Lápis', 'Professor'],
        correct: 1,
        explanation: 'Exato! "Assignment" é um trabalho ou tarefa escolar! 📝',
        nalaMsg: 'Let\'s study! 📚'
      },
      {
        question: 'Em qual matéria estudamos <span class="quiz-highlight">"Chemistry"</span> e usamos um "Laboratory"?',
        options: ['História', 'Educação Física', 'Química', 'Matemática'],
        correct: 2,
        explanation: 'Isso! "Chemistry" é Química! ⚗️',
        nalaMsg: 'Muito bem! 🎉'
      },
      {
        question: 'Qual verbo indica <span class="quiz-highlight">"entregar"</span> um trabalho (ex: submit an assignment)?',
        options: ['Submit', 'Delete', 'Read', 'Forget'],
        correct: 0,
        explanation: 'Perfeito! "Submit" é enviar/entregar! 📥',
        nalaMsg: 'Awesome! 🌟'
      },
      {
        question: 'O que é <span class="quiz-highlight">"Literature"</span>?',
        options: ['Matemática', 'Geografia', 'Ciência', 'Literatura'],
        correct: 3,
        explanation: 'Isso mesmo! "Literature" é literatura! 📖',
        nalaMsg: 'You got it! 💡'
      },
      {
        question: 'Como falamos <span class="quiz-highlight">"Geografia"</span> em inglês?',
        options: ['Geometry', 'Geography', 'Geology', 'Geometry'],
        correct: 1,
        explanation: 'Correto! "Geography" é geografia! 🌍',
        nalaMsg: 'Great job! 🏆'
      }
    ]
  },
  routine: {
    title: "Daily Routine",
    bgImage: "url('images/bg-routine.png')",
    emoji: "⏰",
    story: [
      { text: "My daily routine is quite busy, Laís!" },
      { text: "I usually wake up at 6 AM and work out immediately." },
      { text: "After exercising, I take a refreshing shower and get dressed." },
      { text: "I always prepare a healthy breakfast before leaving." },
      { text: "My daily commute to work takes about thirty minutes." },
      { text: "During the afternoon, I organize my schedule." },
      { text: "I never skip my English studies in the evening." },
      { text: "Consistency is crucial for language learning!" },
      { text: "I prefer to unwind by reading a novel before bed." },
      { text: "Finally, I turn off the lights and fall asleep." }
    ],
    matching: [
      { word: "Work out", emoji: "🏋️" },
      { word: "Get dressed", emoji: "👔" },
      { word: "Commute", emoji: "🚌" },
      { word: "Prepare", emoji: "🍳" },
      { word: "Schedule", emoji: "📅" },
      { word: "Organize", emoji: "🗂️" },
      { word: "Unwind", emoji: "🧘" },
      { word: "Consistency", emoji: "📈" },
      { word: "Refresh", emoji: "🚿" },
      { word: "Fall asleep", emoji: "😴" }
    ],
    sentence: [
      { words: ["I", "work", "out", "every", "morning"], translation: "Eu malho toda manhã" },
      { words: ["She", "prepares", "a", "healthy", "breakfast"], translation: "Ela prepara um café da manhã saudável" },
      { words: ["My", "commute", "is", "very", "fast"], translation: "Meu trajeto é muito rápido" },
      { words: ["We", "organize", "our", "daily", "schedule"], translation: "Nós organizamos nossa rotina diária" },
      { words: ["I", "need", "to", "unwind", "now"], translation: "Eu preciso relaxar agora" }
    ],
    spelling: ["workout", "commute", "prepare", "schedule", "organize", "unwind", "refresh", "dressed", "healthy", "always"],
    garden: ["workout", "commute", "prepare", "schedule", "organize", "unwind", "refresh", "healthy"],
    fetch: [
      { id: "dumbbell", name: "Work out", emoji: "🏋️", correct: true },
      { id: "calendar", name: "Schedule", emoji: "📅", correct: true },
      { id: "shirt", name: "Get Dressed", emoji: "👔", correct: true },
      { id: "bus", name: "Commute", emoji: "🚌", correct: true },
      { id: "car", name: "Car", emoji: "🚗", correct: false },
      { id: "flower", name: "Flower", emoji: "🌸", correct: false },
      { id: "shower", name: "Shower", emoji: "🚿", correct: true },
      { id: "bed", name: "Fall Asleep", emoji: "🛏️", correct: true },
      { id: "pan", name: "Prepare Food", emoji: "🍳", correct: true },
      { id: "moon", name: "Moon", emoji: "🌙", correct: false }
    ],
    quiz: [
      {
        question: 'O que o Phrasal Verb <span class="quiz-highlight">"Work out"</span> significa?',
        options: ['Trabalhar fora', 'Malhar / Fazer exercício', 'Dormir', 'Comer'],
        correct: 1,
        explanation: 'Exato! "Work out" significa se exercitar ou malhar! 🏋️',
        nalaMsg: 'Let\'s move! 💪'
      },
      {
        question: 'O que fazemos quando vamos nos <span class="quiz-highlight">"Get dressed"</span>?',
        options: ['Escovar os dentes', 'Tomar banho', 'Nos vestir', 'Ler um livro'],
        correct: 2,
        explanation: 'Isso! "Get dressed" é o ato de se vestir! 👔',
        nalaMsg: 'Muito bem! 🎉'
      },
      {
        question: 'A palavra <span class="quiz-highlight">"Commute"</span> se refere a:',
        options: ['O trajeto diário (ex: casa-trabalho)', 'Um computador', 'Uma conversa', 'Uma refeição'],
        correct: 0,
        explanation: 'Perfeito! "Commute" é o deslocamento diário habitual! 🚌',
        nalaMsg: 'Awesome! 🌟'
      },
      {
        question: 'O que significa <span class="quiz-highlight">"Unwind"</span> no fim do dia?',
        options: ['Correr', 'Relaxar / Descontrair', 'Estudar', 'Limpar'],
        correct: 1,
        explanation: 'Isso mesmo! "Unwind" é relaxar após um dia cheio! 🧘',
        nalaMsg: 'Time to chill! ☕'
      },
      {
        question: 'Como dizemos <span class="quiz-highlight">"Cronograma/Agenda"</span> em inglês?',
        options: ['Clock', 'Calendar', 'Schedule', 'Time'],
        correct: 2,
        explanation: 'Correto! "Schedule" é a sua agenda ou cronograma! 📅',
        nalaMsg: 'Great job! 🏆'
      }
    ]
  },
  past: {
    title: "My Weekend",
    bgImage: "url('images/bg-past.png')",
    emoji: "📸",
    story: [
      { text: "My last weekend was absolutely incredible, Laís!" },
      { text: "I traveled to the mountains and discovered a hidden waterfall." },
      { text: "While I was hiking, I encountered a fascinating deer." },
      { text: "We experienced beautiful weather throughout the entire journey." },
      { text: "I bought some lovely souvenirs at a local market." },
      { text: "In the evening, we enjoyed a delicious roasted marshmallow." },
      { text: "I realized that nature brings me so much peace." },
      { text: "I took many photographs to capture those precious memories." },
      { text: "Eventually, I returned home feeling completely recharged." },
      { text: "Have you experienced anything exciting recently?" }
    ],
    matching: [
      { word: "Traveled", emoji: "✈️" },
      { word: "Discovered", emoji: "🔍" },
      { word: "Encountered", emoji: "🦌" },
      { word: "Experienced", emoji: "✨" },
      { word: "Bought", emoji: "🛍️" },
      { word: "Enjoyed", emoji: "😌" },
      { word: "Realized", emoji: "💡" },
      { word: "Captured", emoji: "📸" },
      { word: "Returned", emoji: "🏠" },
      { word: "Fascinating", emoji: "🤩" }
    ],
    sentence: [
      { words: ["I", "traveled", "to", "the", "mountains"], translation: "Eu viajei para as montanhas" },
      { words: ["She", "discovered", "a", "hidden", "waterfall"], translation: "Ela descobriu uma cachoeira escondida" },
      { words: ["We", "enjoyed", "the", "beautiful", "weather"], translation: "Nós aproveitamos o clima lindo" },
      { words: ["He", "bought", "many", "lovely", "souvenirs"], translation: "Ele comprou muitas lembrancinhas adoráveis" },
      { words: ["I", "returned", "home", "completely", "recharged"], translation: "Eu retornei para casa completamente recarregado" }
    ],
    spelling: ["traveled", "discovered", "encountered", "experienced", "bought", "enjoyed", "realized", "captured", "returned", "fascinating"],
    garden: ["traveled", "discovered", "experienced", "bought", "enjoyed", "realized", "captured", "returned"],
    fetch: [
      { id: "mountain", name: "Mountains", emoji: "⛰️", correct: true },
      { id: "waterfall", name: "Waterfall", emoji: "🏞️", correct: true },
      { id: "deer", name: "Deer", emoji: "🦌", correct: true },
      { id: "shopping_bag", name: "Bought Souvenirs", emoji: "🛍️", correct: true },
      { id: "eraser", name: "Eraser", emoji: "🧽", correct: false },
      { id: "ruler", name: "Ruler", emoji: "📏", correct: false },
      { id: "camera", name: "Captured Photos", emoji: "📸", correct: true },
      { id: "house", name: "Returned Home", emoji: "🏠", correct: true },
      { id: "marshmallow", name: "Enjoyed Food", emoji: "🍢", correct: true },
      { id: "spoon", name: "Spoon", emoji: "🥄", correct: false }
    ],
    quiz: [
      {
        question: 'O verbo irregular <span class="quiz-highlight">"Bought"</span> é o passado de qual verbo?',
        options: ['Bring', 'Buy', 'Build', 'Bake'],
        correct: 1,
        explanation: 'Exato! "Bought" é o passado de Buy (comprar)! 🛍️',
        nalaMsg: 'Good job! 🌟'
      },
      {
        question: 'O que a palavra <span class="quiz-highlight">"Encountered"</span> expressa?',
        options: ['Encontrei / Deparei-me', 'Perdi', 'Comprei', 'Esqueci'],
        correct: 0,
        explanation: 'Isso! "Encountered" significa que se deparou com algo ou alguém! 🦌',
        nalaMsg: 'Muito bem! 🎉'
      },
      {
        question: 'O que quer dizer <span class="quiz-highlight">"I realized"</span> em inglês?',
        options: ['Eu realizei um sonho', 'Eu percebi / me dei conta', 'Eu viajei', 'Eu perdi'],
        correct: 1,
        explanation: 'Perfeito! "Realize" é um falso cognato que significa perceber ou dar-se conta! 💡',
        nalaMsg: 'Awesome! 🌟'
      },
      {
        question: 'O adjetivo <span class="quiz-highlight">"Fascinating"</span> é usado para descrever algo:',
        options: ['Chato', 'Fascinante / Muito interessante', 'Rápido', 'Assustador'],
        correct: 1,
        explanation: 'Isso mesmo! É algo que prende muito a atenção! 🤩',
        nalaMsg: 'You got it! 💡'
      },
      {
        question: 'Se você diz "We <span class="quiz-highlight">enjoyed</span>", o que você fez?',
        options: ['Nós choramos', 'Nós voltamos', 'Nós aproveitamos / curtimos', 'Nós corremos'],
        correct: 2,
        explanation: 'Correto! "Enjoy" significa aproveitar ou curtir algo! 😌',
        nalaMsg: 'Great job! 🏆'
      }
    ]
  },
  foods: {
    title: "Foods",
    bgImage: "url('images/bg-foods.png')",
    emoji: "🍎",
    story: [
      { text: "Laís, I am hungry! Let's have a picnic." },
      { text: "Yay! I love picnics. What do you Want to eat?" },
      { text: "I Like Chicken and Bread." },
      { text: "I brought some Cheese and an Apple for you." },
      { text: "Delicious! Do you Want some Water?" },
      { text: "Yes, please. And I want Milk too." },
      { text: "Look, I have a Banana and a Cookie!" },
      { text: "Can we eat Pizza for dinner?" },
      { text: "Yes, and a big chocolate Cake!" },
      { text: "You are the best! I love Foods." }
    ],
    matching: [
      { word: "Apple", emoji: "🍎" },
      { word: "Banana", emoji: "🍌" },
      { word: "Bread", emoji: "🍞" },
      { word: "Milk", emoji: "🥛" },
      { word: "Water", emoji: "💧" },
      { word: "Cheese", emoji: "🧀" },
      { word: "Chicken", emoji: "🍗" },
      { word: "Pizza", emoji: "🍕" },
      { word: "Cake", emoji: "🎂" },
      { word: "Cookie", emoji: "🍪" }
    ],
    sentence: [
      { words: ["I", "like", "to", "eat", "pizza"], translation: "Eu gosto de comer pizza" },
      { words: ["Do", "you", "want", "some", "water"], translation: "Você quer um pouco de água" },
      { words: ["She", "likes", "red", "apple"], translation: "Ela gosta de maçã vermelha" },
      { words: ["I", "want", "milk", "now"], translation: "Eu quero leite agora" },
      { words: ["He", "eats", "a", "big", "cake"], translation: "Ele come um bolo grande" }
    ],
    spelling: ["apple", "banana", "bread", "milk", "water", "cheese", "chicken", "pizza", "cake", "cookie"],
    garden: ["apple", "bread", "milk", "water", "cheese", "pizza", "cake", "cookie"],
    fetch: [
      { id: "apple", name: "Apple", emoji: "🍎", correct: true },
      { id: "pizza", name: "Pizza", emoji: "🍕", correct: true },
      { id: "cookie", name: "Cookie", emoji: "🍪", correct: true },
      { id: "bread", name: "Bread", emoji: "🍞", correct: true },
      { id: "ball", name: "Ball", emoji: "⚽", correct: false },
      { id: "book", name: "Book", emoji: "📚", correct: false }
,
      { id: "cheese", name: "Cheese", emoji: "🧀", correct: true },
      { id: "chicken", name: "Chicken", emoji: "🍗", correct: true },
      { id: "cake", name: "Cake", emoji: "🎂", correct: true },
      { id: "pencil", name: "Pencil", emoji: "✏️", correct: false }
    ],
    quiz: [
      {
        question: 'O que significa <span class="quiz-highlight">"I want"</span>?',
        options: ['Eu vejo', 'Eu tenho', 'Eu quero', 'Eu gosto'],
        correct: 2,
        explanation: 'Exato! "I want" significa Eu quero! 🙋‍♀️',
        nalaMsg: 'Good job! 🌟'
      },
      {
        question: 'O que é <span class="quiz-highlight">"Bread"</span>?',
        options: ['Leite', 'Pão', 'Bolo', 'Água'],
        correct: 1,
        explanation: 'Isso mesmo! "Bread" é pão! 🍞',
        nalaMsg: 'Muito bem! 🎉'
      },
      {
        question: 'O que a frase <span class="quiz-highlight">"I like apples"</span> quer dizer?',
        options: ['Eu odeio maçãs', 'Eu quero maçãs', 'Eu tenho maçãs', 'Eu gosto de maçãs'],
        correct: 3,
        explanation: 'Perfeito! "I like" é Eu gosto! 🍎',
        nalaMsg: 'Yummy! 😋'
      },
      {
        question: 'Como dizemos <span class="quiz-highlight">"Água"</span> em inglês?',
        options: ['Milk', 'Water', 'Juice', 'Cake'],
        correct: 1,
        explanation: 'Isso! "Water" é água! 💧',
        nalaMsg: 'Let\'s go! 🐕'
      },
      {
        question: 'Qual destas palavras significa <span class="quiz-highlight">"Queijo"</span>?',
        options: ['Cheese', 'Chicken', 'Cookie', 'Bread'],
        correct: 0,
        explanation: 'Correto! "Cheese" é queijo! 🧀',
        nalaMsg: 'Awesome! 🌟'
      }
    ]
  },
  body: {
    title: "Body Parts",
    bgImage: "url('images/bg-body.png')",
    emoji: "🧍",
    story: [
      { text: "Laís, let's do some exercise today!" },
      { text: "Yes! Let's move our Body!" },
      { text: "Touch your Head and your Shoulders." },
      { text: "Like this? Now I touch my Knees and Toes." },
      { text: "Good! Close your Eyes and open your Mouth." },
      { text: "My Mouth is open. Can you touch your Nose?" },
      { text: "Yes! And I have two cute Ears." },
      { text: "Clap your Hands with me!" },
      { text: "And stomp your Feet on the ground!" },
      { text: "Exercise is fun. We are so strong!" }
    ],
    matching: [
      { word: "Head", emoji: "🗣️" },
      { word: "Shoulders", emoji: "🤷" },
      { word: "Knees", emoji: "🦵" },
      { word: "Toes", emoji: "🦶" },
      { word: "Eyes", emoji: "👁️" },
      { word: "Ears", emoji: "👂" },
      { word: "Mouth", emoji: "👄" },
      { word: "Nose", emoji: "👃" },
      { word: "Hands", emoji: "✋" },
      { word: "Feet", emoji: "👟" }
    ],
    sentence: [
      { words: ["Touch", "your", "nose", "now"], translation: "Toque seu nariz agora" },
      { words: ["I", "have", "two", "hands"], translation: "Eu tenho duas mãos" },
      { words: ["She", "has", "blue", "eyes"], translation: "Ela tem olhos azuis" },
      { words: ["Clap", "your", "hands", "fast"], translation: "Bata palmas rápido" },
      { words: ["My", "head", "is", "big"], translation: "Minha cabeça é grande" }
    ],
    spelling: ["head", "shoulders", "knees", "toes", "eyes", "ears", "mouth", "nose", "hands", "feet"],
    garden: ["head", "knees", "toes", "eyes", "ears", "mouth", "nose", "hands"],
    fetch: [
      { id: "hands", name: "Hands", emoji: "✋", correct: true },
      { id: "nose", name: "Nose", emoji: "👃", correct: true },
      { id: "eyes", name: "Eyes", emoji: "👁️", correct: true },
      { id: "feet", name: "Feet", emoji: "🦶", correct: true },
      { id: "apple", name: "Apple", emoji: "🍎", correct: false },
      { id: "book", name: "Book", emoji: "📚", correct: false }
,
      { id: "mouth", name: "Mouth", emoji: "👄", correct: true },
      { id: "ears", name: "Ears", emoji: "👂", correct: true },
      { id: "teeth", name: "Teeth", emoji: "🦷", correct: true },
      { id: "door", name: "Door", emoji: "🚪", correct: false }
    ],
    quiz: [
      {
        question: 'Qual parte do corpo é a <span class="quiz-highlight">"Head"</span>?',
        options: ['Mão', 'Cabeça', 'Pé', 'Nariz'],
        correct: 1,
        explanation: 'Exato! "Head" é cabeça! 🗣️',
        nalaMsg: 'Good job! 🌟'
      },
      {
        question: 'O que são <span class="quiz-highlight">"Eyes"</span>?',
        options: ['Orelhas', 'Boca', 'Olhos', 'Pernas'],
        correct: 2,
        explanation: 'Isso mesmo! "Eyes" são os olhos! 👁️',
        nalaMsg: 'Muito bem! 🎉'
      },
      {
        question: 'O que o comando <span class="quiz-highlight">"Touch your nose"</span> pede para você fazer?',
        options: ['Tocar o pé', 'Tocar a boca', 'Tocar o nariz', 'Tocar a orelha'],
        correct: 2,
        explanation: 'Perfeito! "Touch your nose" é toque seu nariz! 👃',
        nalaMsg: 'Awesome! 🌟'
      },
      {
        question: 'Como dizemos <span class="quiz-highlight">"Mãos"</span> em inglês?',
        options: ['Hands', 'Feet', 'Ears', 'Shoulders'],
        correct: 0,
        explanation: 'Isso! "Hands" são as mãos! ✋',
        nalaMsg: 'You got it! 💡'
      },
      {
        question: 'O que é <span class="quiz-highlight">"Mouth"</span>?',
        options: ['Nariz', 'Joelho', 'Orelha', 'Boca'],
        correct: 3,
        explanation: 'Correto! "Mouth" é boca! 👄',
        nalaMsg: 'Great job! 🏆'
      }
    ]
  },
  travel: {
    title: "Travel & World",
    bgImage: "url('images/bg-travel.png')",
    emoji: "✈️",
    story: [
      { text: "Hello Laís! Have you ever traveled abroad?" },
      { text: "No, I haven't. But I have seen airplanes!" },
      { text: "I have flown in an airplane before. It's amazing!" },
      { text: "Wow! Have you visited many countries?" },
      { text: "Yes, I have explored beautiful cities." },
      { text: "Did you need a passport?" },
      { text: "Yes, you must have a passport to travel." },
      { text: "I want to pack my luggage and be a tourist!" },
      { text: "We can buy a nice souvenir together." },
      { text: "That sounds like a perfect adventure!" }
    ],
    matching: [
      { word: "Airport", emoji: "🛫" },
      { word: "Passport", emoji: "🛂" },
      { word: "Luggage", emoji: "🧳" },
      { word: "Tourist", emoji: "📸" },
      { word: "Souvenir", emoji: "🎁" },
      { word: "Abroad", emoji: "🌍" },
      { word: "Guide", emoji: "🗺️" },
      { word: "Traveled", emoji: "✈️" },
      { word: "Explored", emoji: "🧭" },
      { word: "Flown", emoji: "🦅" }
    ],
    sentence: [
      { words: ["Have", "you", "ever", "flown", "abroad"], translation: "Você já voou para o exterior?" },
      { words: ["I", "have", "visited", "many", "places"], translation: "Eu visitei muitos lugares" },
      { words: ["She", "has", "lost", "her", "passport"], translation: "Ela perdeu seu passaporte" },
      { words: ["We", "have", "traveled", "by", "train"], translation: "Nós viajamos de trem" },
      { words: ["He", "has", "bought", "a", "souvenir"], translation: "Ele comprou uma lembrancinha" }
    ],
    spelling: ["airport", "passport", "luggage", "tourist", "souvenir", "abroad", "guide", "travel", "explore", "flown"],
    garden: ["airport", "passport", "luggage", "tourist", "souvenir", "abroad", "travel", "flown"],
    fetch: [
      { id: "passport", name: "Passport", emoji: "🛂", correct: true },
      { id: "luggage", name: "Luggage", emoji: "🧳", correct: true },
      { id: "plane", name: "Airplane", emoji: "✈️", correct: true },
      { id: "map", name: "Guide Map", emoji: "🗺️", correct: true },
      { id: "apple", name: "Apple", emoji: "🍎", correct: false },
      { id: "dog", name: "Dog", emoji: "🐕", correct: false }
,
      { id: "ticket_flight", name: "Flight Ticket", emoji: "🎟️", correct: true },
      { id: "train", name: "Train", emoji: "🚆", correct: true },
      { id: "hotel", name: "Hotel", emoji: "🏨", correct: true },
      { id: "banana", name: "Banana", emoji: "🍌", correct: false }
    ],
    quiz: [
      {
        question: 'Qual a estrutura correta do <span class="quiz-highlight">Present Perfect</span> para "Eu viajei"?',
        options: ['I traveled', 'I have traveled', 'I travel', 'I traveling'],
        correct: 1,
        explanation: 'Exato! "I have traveled" é o Present Perfect! ✈️',
        nalaMsg: 'Good job! 🌟'
      },
      {
        question: 'O que significa <span class="quiz-highlight">"Abroad"</span>?',
        options: ['Aeroporto', 'Lembrancinha', 'Exterior (Outro país)', 'Bagagem'],
        correct: 2,
        explanation: 'Isso! "Abroad" significa no exterior! 🌍',
        nalaMsg: 'Muito bem! 🎉'
      },
      {
        question: 'Se perguntamos "Have you ever <span class="quiz-highlight">flown</span>?", o que é flown?',
        options: ['Voado', 'Comido', 'Visto', 'Andado'],
        correct: 0,
        explanation: 'Perfeito! "Flown" é o particípio de Fly (voar)! 🦅',
        nalaMsg: 'Awesome! 🌟'
      },
      {
        question: 'O que é <span class="quiz-highlight">"Luggage"</span> em uma viagem?',
        options: ['Guia', 'Bagagem/Malas', 'Passaporte', 'Turista'],
        correct: 1,
        explanation: 'Correto! "Luggage" é a bagagem! 🧳',
        nalaMsg: 'Let\'s pack! 🎒'
      },
      {
        question: 'Como dizemos <span class="quiz-highlight">"Lembrancinha"</span> de viagem?',
        options: ['Souvenir', 'Passport', 'Guide', 'Airport'],
        correct: 0,
        explanation: 'Isso mesmo! "Souvenir" é uma lembrancinha! 🎁',
        nalaMsg: 'Great job! 🏆'
      }
    ]
  },
  eco: {
    title: "Save the Planet",
    bgImage: "url('images/bg-eco.png')",
    emoji: "🌍",
    story: [
      { text: "Laís, we must protect the Environment!" },
      { text: "I agree. But what should we do?" },
      { text: "If we recycle plastic, we will save animals." },
      { text: "That is true. Pollution is very bad." },
      { text: "We should use solar energy instead of waste." },
      { text: "If we clean the Earth, nature will be happy." },
      { text: "Yes! We must not waste clean water." },
      { text: "Our climate is changing. We need to help." },
      { text: "If everybody helps, the forest will grow." },
      { text: "Let's be eco-friendly heroes, Nala!" }
    ],
    matching: [
      { word: "Recycle", emoji: "♻️" },
      { word: "Environment", emoji: "🏞️" },
      { word: "Pollution", emoji: "🏭" },
      { word: "Earth", emoji: "🌍" },
      { word: "Plastic", emoji: "🥤" },
      { word: "Nature", emoji: "🌿" },
      { word: "Protect", emoji: "🛡️" },
      { word: "Solar", emoji: "☀️" },
      { word: "Climate", emoji: "☁️" },
      { word: "Waste", emoji: "🗑️" }
    ],
    sentence: [
      { words: ["If", "we", "recycle", "nature", "wins"], translation: "Se nós reciclarmos, a natureza vence" },
      { words: ["We", "must", "protect", "the", "earth"], translation: "Nós devemos proteger a terra" },
      { words: ["You", "should", "save", "clean", "water"], translation: "Você deveria economizar água limpa" },
      { words: ["Plastic", "pollution", "is", "very", "bad"], translation: "Poluição plástica é muito ruim" },
      { words: ["If", "it", "rains", "plants", "grow"], translation: "Se chover, as plantas crescem" }
    ],
    spelling: ["recycle", "nature", "pollution", "earth", "plastic", "protect", "solar", "climate", "waste", "clean"],
    garden: ["recycle", "nature", "earth", "plastic", "protect", "solar", "climate", "waste"],
    fetch: [
      { id: "recycle", name: "Recycle Bin", emoji: "♻️", correct: true },
      { id: "plant", name: "Plant", emoji: "🌱", correct: true },
      { id: "solar", name: "Solar Panel", emoji: "☀️", correct: true },
      { id: "water", name: "Clean Water", emoji: "💧", correct: true },
      { id: "trash", name: "Pollution", emoji: "🏭", correct: false },
      { id: "plastic", name: "Plastic Waste", emoji: "🥤", correct: false }
,
      { id: "earth", name: "Earth", emoji: "🌍", correct: true },
      { id: "leaf", name: "Leaf", emoji: "🍃", correct: true },
      { id: "wind", name: "Wind Energy", emoji: "🌬️", correct: true },
      { id: "burger", name: "Burger", emoji: "🍔", correct: false }
    ],
    quiz: [
      {
        question: 'O que o condicional <span class="quiz-highlight">"If we recycle"</span> significa?',
        options: ['Nós reciclamos', 'Se nós reciclarmos', 'Nós devemos reciclar', 'Nós reciclamos ontem'],
        correct: 1,
        explanation: 'Exato! "If" significa Se, criando uma condição! ♻️',
        nalaMsg: 'Good job! 🌟'
      },
      {
        question: 'O que o verbo modal <span class="quiz-highlight">"Must"</span> expressa na frase "We must protect"?',
        options: ['Opção', 'Passado', 'Obrigação (Devemos)', 'Futuro'],
        correct: 2,
        explanation: 'Isso! "Must" indica uma forte obrigação (dever)! 🛡️',
        nalaMsg: 'Muito bem! 🎉'
      },
      {
        question: 'Qual palavra significa <span class="quiz-highlight">"Meio Ambiente"</span>?',
        options: ['Pollution', 'Waste', 'Plastic', 'Environment'],
        correct: 3,
        explanation: 'Perfeito! "Environment" é o meio ambiente! 🏞️',
        nalaMsg: 'Awesome! 🌟'
      },
      {
        question: 'O que é <span class="quiz-highlight">"Pollution"</span>?',
        options: ['Poluição', 'Natureza', 'Terra', 'Clima'],
        correct: 0,
        explanation: 'Isso mesmo! "Pollution" é poluição! 🏭',
        nalaMsg: 'Let\'s clean! 🧹'
      },
      {
        question: 'Na frase "You <span class="quiz-highlight">should</span> save water", o que "should" indica?',
        options: ['Uma proibição', 'Um conselho (deveria)', 'Uma certeza', 'O passado'],
        correct: 1,
        explanation: 'Correto! "Should" é usado para dar conselhos (você deveria)! 💧',
        nalaMsg: 'Great job! 🏆'
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

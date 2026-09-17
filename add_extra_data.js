const fs = require('fs');

const extraData = {
  colors: {
    sentence: [
      { words: ["The", "sun", "is", "yellow"], translation: "O sol é amarelo" },
      { words: ["I", "have", "a", "red", "ball"], translation: "Eu tenho uma bola vermelha" },
      { words: ["Green", "is", "my", "favorite", "color"], translation: "Verde é minha cor favorita" },
      { words: ["She", "wears", "a", "blue", "dress"], translation: "Ela usa um vestido azul" },
      { words: ["The", "cat", "is", "black"], translation: "O gato é preto" }
    ],
    speaking: [
      { question: "Do you like the color purple?", translation: "Você gosta da cor roxa?", starter: "Yes, I like purple because...", nalaTip: "Beautiful color!" },
      { question: "What color is your shirt?", translation: "De que cor é a sua camisa?", starter: "My shirt is...", nalaTip: "Look down!" },
      { question: "What color is a banana?", translation: "Que cor é uma banana?", starter: "A banana is...", nalaTip: "Yummy yellow!" },
      { question: "Are there any pink animals?", translation: "Existem animais cor-de-rosa?", starter: "Yes, flamingos are pink.", nalaTip: "Stand on one leg!" },
      { question: "Is the sky green?", translation: "O céu é verde?", starter: "No, the sky is blue.", nalaTip: "Look up!" }
    ],
    truefalse: [
      { question: "Oranges are orange.", options: ["True", "False"], correct: 0, explanation: "True! 🍊", nalaMsg: "Good!" },
      { question: "Water is usually black.", options: ["True", "False"], correct: 1, explanation: "False! Water is clear or looks blue.", nalaMsg: "Nice try!" },
      { question: "A stop sign is red.", options: ["True", "False"], correct: 0, explanation: "True! 🛑", nalaMsg: "Stop!" },
      { question: "The moon is made of green cheese.", options: ["True", "False"], correct: 1, explanation: "False! It's made of rock.", nalaMsg: "Haha!" },
      { question: "Zebras are black and white.", options: ["True", "False"], correct: 0, explanation: "True! 🦓", nalaMsg: "Stripes!" }
    ]
  },
  animals: {
    sentence: [
      { words: ["The", "dog", "is", "barking"], translation: "O cachorro está latindo" },
      { words: ["I", "see", "a", "big", "elephant"], translation: "Eu vejo um elefante grande" },
      { words: ["Cats", "like", "to", "sleep"], translation: "Gatos gostam de dormir" },
      { words: ["The", "lion", "is", "the", "king"], translation: "O leão é o rei" },
      { words: ["Fish", "swim", "in", "the", "river"], translation: "Peixes nadam no rio" }
    ],
    speaking: [
      { question: "Do you have a pet?", translation: "Você tem um animal de estimação?", starter: "Yes, I have a...", nalaTip: "Like me?" },
      { question: "What is your favorite animal?", translation: "Qual é o seu animal favorito?", starter: "My favorite animal is a...", nalaTip: "Roar!" },
      { question: "Are you afraid of spiders?", translation: "Você tem medo de aranhas?", starter: "Yes, I am / No, I am not.", nalaTip: "Creepy crawly!" },
      { question: "Can a penguin fly?", translation: "Um pinguim pode voar?", starter: "No, a penguin cannot fly.", nalaTip: "Waddle waddle!" },
      { question: "What animal is very tall?", translation: "Qual animal é muito alto?", starter: "A giraffe is very tall.", nalaTip: "Long neck!" }
    ],
    truefalse: [
      { question: "A snake has four legs.", options: ["True", "False"], correct: 1, explanation: "False! Snakes have no legs. 🐍", nalaMsg: "Slither!" },
      { question: "Pigs like to roll in the mud.", options: ["True", "False"], correct: 0, explanation: "True! It keeps them cool. 🐷", nalaMsg: "Oink!" },
      { question: "A cow says 'Moo'.", options: ["True", "False"], correct: 0, explanation: "True! 🐄", nalaMsg: "Moo!" },
      { question: "Frogs live in the desert.", options: ["True", "False"], correct: 1, explanation: "False! They like wet places. 🐸", nalaMsg: "Ribbit!" },
      { question: "Bears sleep a lot in winter.", options: ["True", "False"], correct: 0, explanation: "True! It's called hibernation. 🐻", nalaMsg: "Sleepy!" }
    ]
  },
  numbers: {
    sentence: [
      { words: ["I", "have", "two", "books"], translation: "Eu tenho dois livros" },
      { words: ["He", "is", "five", "years", "old"], translation: "Ele tem cinco anos" },
      { words: ["We", "see", "three", "birds"], translation: "Nós vemos três pássaros" },
      { words: ["The", "spider", "has", "eight", "legs"], translation: "A aranha tem oito pernas" },
      { words: ["Give", "me", "one", "apple"], translation: "Me dê uma maçã" }
    ],
    speaking: [
      { question: "How old are you?", translation: "Quantos anos você tem?", starter: "I am... years old.", nalaTip: "Count the candles!" },
      { question: "How many fingers do you have?", translation: "Quantos dedos você tem?", starter: "I have ten fingers.", nalaTip: "Hold them up!" },
      { question: "What is your lucky number?", translation: "Qual é o seu número da sorte?", starter: "My lucky number is...", nalaTip: "Good luck!" },
      { question: "Count from one to five.", translation: "Conte de um a cinco.", starter: "One, two, three, four, five.", nalaTip: "Easy!" },
      { question: "How many days are in a week?", translation: "Quantos dias há em uma semana?", starter: "There are seven days in a week.", nalaTip: "Monday to Sunday!" }
    ],
    truefalse: [
      { question: "Ten is more than twenty.", options: ["True", "False"], correct: 1, explanation: "False! 20 > 10. 🔢", nalaMsg: "Math time!" },
      { question: "A triangle has three sides.", options: ["True", "False"], correct: 0, explanation: "True! 🔺", nalaMsg: "Geometry!" },
      { question: "Zero means nothing.", options: ["True", "False"], correct: 0, explanation: "True! 0️⃣", nalaMsg: "Empty!" },
      { question: "Fifty is a very small number.", options: ["True", "False"], correct: 1, explanation: "False! It's quite big.", nalaMsg: "Big numbers!" },
      { question: "A week has seven days.", options: ["True", "False"], correct: 0, explanation: "True! 📅", nalaMsg: "Seven!" }
    ]
  },
  family: {
    sentence: [
      { words: ["My", "mother", "is", "nice"], translation: "Minha mãe é legal" },
      { words: ["He", "is", "my", "brother"], translation: "Ele é meu irmão" },
      { words: ["We", "love", "our", "family"], translation: "Nós amamos nossa família" },
      { words: ["My", "sister", "is", "tall"], translation: "Minha irmã é alta" },
      { words: ["Grandpa", "is", "very", "wise"], translation: "Vovô é muito sábio" }
    ],
    speaking: [
      { question: "What is your mother's name?", translation: "Qual é o nome da sua mãe?", starter: "My mother's name is...", nalaTip: "Say her name!" },
      { question: "Do you have any siblings?", translation: "Você tem irmãos ou irmãs?", starter: "Yes, I have... / No, I don't.", nalaTip: "Brothers and sisters!" },
      { question: "Who is the oldest in your family?", translation: "Quem é o mais velho na sua família?", starter: "The oldest is my...", nalaTip: "Grandparents?" },
      { question: "Does your family have a pet?", translation: "Sua família tem um animal de estimação?", starter: "Yes, we have a...", nalaTip: "Like Nala!" },
      { question: "What do you do with your family on Sundays?", translation: "O que você faz com a sua família aos domingos?", starter: "We usually go to...", nalaTip: "Fun day!" }
    ],
    truefalse: [
      { question: "Your father is a man.", options: ["True", "False"], correct: 0, explanation: "True! 👨", nalaMsg: "Dad!" },
      { question: "A grandmother is a young girl.", options: ["True", "False"], correct: 1, explanation: "False! She is an older woman. 👵", nalaMsg: "Wise!" },
      { question: "Your parents are your mother and father.", options: ["True", "False"], correct: 0, explanation: "True! 👩‍❤️‍👨", nalaMsg: "Family!" },
      { question: "An uncle is your sister.", options: ["True", "False"], correct: 1, explanation: "False! An uncle is your parent's brother. 👨", nalaMsg: "Try again!" },
      { question: "A family lives together.", options: ["True", "False"], correct: 0, explanation: "True! Usually they do. 🏠", nalaMsg: "Cozy!" }
    ]
  },
  school: {
    sentence: [
      { words: ["I", "like", "my", "school"], translation: "Eu gosto da minha escola" },
      { words: ["The", "teacher", "is", "talking"], translation: "O professor está falando" },
      { words: ["I", "read", "a", "book"], translation: "Eu leio um livro" },
      { words: ["She", "has", "a", "blue", "pen"], translation: "Ela tem uma caneta azul" },
      { words: ["We", "sit", "at", "the", "desk"], translation: "Nós sentamos na mesa" }
    ],
    speaking: [
      { question: "What is your favorite subject?", translation: "Qual é a sua matéria favorita?", starter: "My favorite subject is...", nalaTip: "Math? English?" },
      { question: "Do you like doing homework?", translation: "Você gosta de fazer lição de casa?", starter: "Yes, I do / No, I don't.", nalaTip: "Be honest!" },
      { question: "What do you carry in your backpack?", translation: "O que você leva na sua mochila?", starter: "I carry my books and a pencil case.", nalaTip: "Heavy bag!" },
      { question: "Who is your English teacher?", translation: "Quem é seu professor de inglês?", starter: "My English teacher is...", nalaTip: "Say the name!" },
      { question: "Do you have friends at school?", translation: "Você tem amigos na escola?", starter: "Yes, I have many friends.", nalaTip: "Playing together!" }
    ],
    truefalse: [
      { question: "You read words in a book.", options: ["True", "False"], correct: 0, explanation: "True! 📖", nalaMsg: "Smart!" },
      { question: "You use a ruler to cut paper.", options: ["True", "False"], correct: 1, explanation: "False! You use scissors to cut. ✂️", nalaMsg: "Careful!" },
      { question: "A student learns new things.", options: ["True", "False"], correct: 0, explanation: "True! 🧑‍🎓", nalaMsg: "Learning!" },
      { question: "The board is always yellow.", options: ["True", "False"], correct: 1, explanation: "False! It's usually green or white. ⬛", nalaMsg: "Look at the front!" },
      { question: "A backpack goes on your back.", options: ["True", "False"], correct: 0, explanation: "True! 🎒", nalaMsg: "Ready to go!" }
    ]
  },
  routine: {
    sentence: [
      { words: ["I", "wake", "up", "early"], translation: "Eu acordo cedo" },
      { words: ["She", "takes", "a", "shower"], translation: "Ela toma banho" },
      { words: ["We", "eat", "breakfast", "together"], translation: "Nós tomamos café da manhã juntos" },
      { words: ["He", "goes", "to", "sleep"], translation: "Ele vai dormir" },
      { words: ["I", "brush", "my", "teeth"], translation: "Eu escovo meus dentes" }
    ],
    speaking: [
      { question: "What time do you usually wake up?", translation: "A que horas você costuma acordar?", starter: "I wake up at...", nalaTip: "Early bird?" },
      { question: "Do you make your bed in the morning?", translation: "Você arruma a sua cama de manhã?", starter: "Yes, I make my bed every day.", nalaTip: "Tidy room!" },
      { question: "What do you eat for breakfast?", translation: "O que você come no café da manhã?", starter: "I eat bread and drink milk.", nalaTip: "Yummy!" },
      { question: "Do you watch TV in the evening?", translation: "Você assiste TV à noite?", starter: "Yes, I watch some cartoons.", nalaTip: "Relaxing!" },
      { question: "What is the last thing you do before sleep?", translation: "Qual é a última coisa que você faz antes de dormir?", starter: "I brush my teeth.", nalaTip: "Clean teeth!" }
    ],
    truefalse: [
      { question: "You wear pajamas to school.", options: ["True", "False"], correct: 1, explanation: "False! You wear clothes or a uniform. 👕", nalaMsg: "No sleeping in class!" },
      { question: "Breakfast is the first meal of the day.", options: ["True", "False"], correct: 0, explanation: "True! 🥞", nalaMsg: "Morning!" },
      { question: "You wash your hands before eating.", options: ["True", "False"], correct: 0, explanation: "True! It's very important. 🧼", nalaMsg: "Clean hands!" },
      { question: "The sun goes down in the morning.", options: ["True", "False"], correct: 1, explanation: "False! It goes down in the evening. 🌇", nalaMsg: "Sunset!" },
      { question: "You brush your teeth to keep them clean.", options: ["True", "False"], correct: 0, explanation: "True! 🪥", nalaMsg: "Shiny!" }
    ]
  },
  past: {
    sentence: [
      { words: ["I", "went", "to", "the", "park"], translation: "Eu fui ao parque" },
      { words: ["She", "played", "with", "her", "dog"], translation: "Ela brincou com o cachorro dela" },
      { words: ["We", "saw", "a", "bird", "yesterday"], translation: "Nós vimos um pássaro ontem" },
      { words: ["He", "ate", "all", "the", "cake"], translation: "Ele comeu todo o bolo" },
      { words: ["They", "were", "very", "happy"], translation: "Eles estavam muito felizes" }
    ],
    speaking: [
      { question: "What did you do yesterday?", translation: "O que você fez ontem?", starter: "Yesterday, I...", nalaTip: "Think back!" },
      { question: "Did you watch a movie last week?", translation: "Você assistiu a um filme na semana passada?", starter: "Yes, I watched...", nalaTip: "Popcorn?" },
      { question: "Where did you go on your last vacation?", translation: "Para onde você foi nas suas últimas férias?", starter: "I went to...", nalaTip: "Beach or mountains?" },
      { question: "What did you eat for dinner yesterday?", translation: "O que você jantou ontem?", starter: "I ate...", nalaTip: "Was it good?" },
      { question: "Did you play games this morning?", translation: "Você jogou algum jogo hoje de manhã?", starter: "Yes, I played...", nalaTip: "Fun!" }
    ],
    truefalse: [
      { question: "Yesterday was the day before today.", options: ["True", "False"], correct: 0, explanation: "True! 🔙", nalaMsg: "Past tense!" },
      { question: "'I am playing' is in the past.", options: ["True", "False"], correct: 1, explanation: "False! It's happening right now. ⏳", nalaMsg: "Present!" },
      { question: "Dinosaurs are from the past.", options: ["True", "False"], correct: 0, explanation: "True! 🦖", nalaMsg: "Roar!" },
      { question: "Next year is part of the past.", options: ["True", "False"], correct: 1, explanation: "False! It is the future. 🔮", nalaMsg: "Wait for it!" },
      { question: "'Walked' is a past tense word.", options: ["True", "False"], correct: 0, explanation: "True! 🚶", nalaMsg: "-ed ending!" }
    ]
  },
  foods: {
    sentence: [
      { words: ["I", "like", "to", "eat", "pizza"], translation: "Eu gosto de comer pizza" },
      { words: ["The", "apple", "is", "very", "sweet"], translation: "A maçã é muito doce" },
      { words: ["She", "drinks", "water", "every", "day"], translation: "Ela bebe água todos os dias" },
      { words: ["We", "have", "chicken", "for", "dinner"], translation: "Nós temos frango para o jantar" },
      { words: ["Do", "you", "want", "some", "cake"], translation: "Você quer um pouco de bolo?" }
    ],
    speaking: [
      { question: "What is your favorite food?", translation: "Qual é a sua comida favorita?", starter: "My favorite food is...", nalaTip: "Delicious!" },
      { question: "Do you like to eat vegetables?", translation: "Você gosta de comer vegetais?", starter: "Yes, I like broccoli and carrots.", nalaTip: "Healthy!" },
      { question: "What is your favorite fruit?", translation: "Qual é a sua fruta favorita?", starter: "I really like...", nalaTip: "Apples? Bananas?" },
      { question: "Do you know how to cook?", translation: "Você sabe cozinhar?", starter: "I know how to make...", nalaTip: "Chef!" },
      { question: "What do you drink when you are thirsty?", translation: "O que você bebe quando está com sede?", starter: "I drink a lot of water.", nalaTip: "Hydrate!" }
    ],
    truefalse: [
      { question: "A lemon is very sweet.", options: ["True", "False"], correct: 1, explanation: "False! Lemons are sour. 🍋", nalaMsg: "Pucker up!" },
      { question: "Ice cream is cold.", options: ["True", "False"], correct: 0, explanation: "True! 🍦", nalaMsg: "Brrr!" },
      { question: "We eat soup with a fork.", options: ["True", "False"], correct: 1, explanation: "False! We eat soup with a spoon. 🥄", nalaMsg: "Silly!" },
      { question: "An apple can be red or green.", options: ["True", "False"], correct: 0, explanation: "True! 🍎🍏", nalaMsg: "Yum!" },
      { question: "Chocolate is a type of meat.", options: ["True", "False"], correct: 1, explanation: "False! It's a sweet treat. 🍫", nalaMsg: "Not meat!" }
    ]
  },
  body: {
    sentence: [
      { words: ["I", "have", "two", "eyes"], translation: "Eu tenho dois olhos" },
      { words: ["She", "touches", "her", "nose"], translation: "Ela toca o nariz" },
      { words: ["We", "walk", "with", "our", "feet"], translation: "Nós andamos com nossos pés" },
      { words: ["Raise", "your", "hands", "up"], translation: "Levante suas mãos" },
      { words: ["He", "listens", "with", "his", "ears"], translation: "Ele escuta com os ouvidos" }
    ],
    speaking: [
      { question: "What color are your eyes?", translation: "De que cor são seus olhos?", starter: "My eyes are...", nalaTip: "Look in the mirror!" },
      { question: "How many fingers are on one hand?", translation: "Quantos dedos há em uma mão?", starter: "There are five fingers.", nalaTip: "High five!" },
      { question: "What do you use your mouth for?", translation: "Para que você usa a boca?", starter: "I use my mouth to speak and eat.", nalaTip: "Smile!" },
      { question: "Can you touch your toes?", translation: "Você consegue tocar os dedos dos pés?", starter: "Yes, I can!", nalaTip: "Stretch!" },
      { question: "What do you use to hear music?", translation: "O que você usa para ouvir música?", starter: "I use my ears.", nalaTip: "Listen!" }
    ],
    truefalse: [
      { question: "You have ten heads.", options: ["True", "False"], correct: 1, explanation: "False! You have one head. 🗣️", nalaMsg: "Crazy!" },
      { question: "Your hair grows on your head.", options: ["True", "False"], correct: 0, explanation: "True! 💇", nalaMsg: "Style!" },
      { question: "We smell things with our ears.", options: ["True", "False"], correct: 1, explanation: "False! We smell with our nose. 👃", nalaMsg: "Sniff!" },
      { question: "A tooth is inside your mouth.", options: ["True", "False"], correct: 0, explanation: "True! 🦷", nalaMsg: "Bite!" },
      { question: "Your feet are at the end of your legs.", options: ["True", "False"], correct: 0, explanation: "True! 🦶", nalaMsg: "Step!" }
    ]
  },
  travel: {
    sentence: [
      { words: ["I", "pack", "my", "luggage"], translation: "Eu arrumo minha bagagem" },
      { words: ["We", "fly", "in", "an", "airplane"], translation: "Nós voamos em um avião" },
      { words: ["He", "has", "a", "blue", "passport"], translation: "Ele tem um passaporte azul" },
      { words: ["She", "buys", "a", "souvenir"], translation: "Ela compra uma lembrança" },
      { words: ["The", "tourist", "takes", "a", "photo"], translation: "O turista tira uma foto" }
    ],
    speaking: [
      { question: "Do you like to travel?", translation: "Você gosta de viajar?", starter: "Yes, I love exploring new places.", nalaTip: "Adventure!" },
      { question: "Have you ever been on an airplane?", translation: "Você já viajou de avião?", starter: "Yes, I have flown to...", nalaTip: "In the clouds!" },
      { question: "What do you pack in your luggage?", translation: "O que você leva na sua bagagem?", starter: "I pack my clothes and a toothbrush.", nalaTip: "Don't forget anything!" },
      { question: "Where do you want to travel next?", translation: "Para onde você quer viajar depois?", starter: "I want to go to...", nalaTip: "Dream destination!" },
      { question: "Do you like buying souvenirs?", translation: "Você gosta de comprar lembrancinhas?", starter: "Yes, I buy magnets for the fridge.", nalaTip: "Memories!" }
    ],
    truefalse: [
      { question: "You need a passport to travel to another country.", options: ["True", "False"], correct: 0, explanation: "True! 🛂", nalaMsg: "Important!" },
      { question: "An airport is where trains leave.", options: ["True", "False"], correct: 1, explanation: "False! Airplanes leave from airports. ✈️", nalaMsg: "Fly away!" },
      { question: "A tourist is someone visiting a place.", options: ["True", "False"], correct: 0, explanation: "True! 📷", nalaMsg: "Sightseeing!" },
      { question: "You carry your luggage on your head.", options: ["True", "False"], correct: 1, explanation: "False! You carry or pull it with your hands. 🧳", nalaMsg: "Heavy!" },
      { question: "A guide helps you learn about a place.", options: ["True", "False"], correct: 0, explanation: "True! 🗺️", nalaMsg: "Follow them!" }
    ]
  },
  eco: {
    sentence: [
      { words: ["We", "must", "protect", "nature"], translation: "Nós devemos proteger a natureza" },
      { words: ["I", "always", "recycle", "plastic"], translation: "Eu sempre reciclo plástico" },
      { words: ["The", "Earth", "is", "our", "home"], translation: "A Terra é o nosso lar" },
      { words: ["Don't", "throw", "trash", "on", "the", "floor"], translation: "Não jogue lixo no chão" },
      { words: ["Trees", "are", "very", "important"], translation: "As árvores são muito importantes" }
    ],
    speaking: [
      { question: "Do you recycle at home?", translation: "Você recicla em casa?", starter: "Yes, we separate plastic and paper.", nalaTip: "Save the Earth!" },
      { question: "Why are trees important?", translation: "Por que as árvores são importantes?", starter: "They give us oxygen and shade.", nalaTip: "Breathe!" },
      { question: "How can we save water?", translation: "Como podemos economizar água?", starter: "We can turn off the tap when brushing teeth.", nalaTip: "Every drop counts!" },
      { question: "What can we do with old plastic bottles?", translation: "O que podemos fazer com garrafas plásticas velhas?", starter: "We can make art or recycle them.", nalaTip: "Creative!" },
      { question: "Do you like spending time in nature?", translation: "Você gosta de passar tempo na natureza?", starter: "Yes, I love the park and the beach.", nalaTip: "Fresh air!" }
    ],
    truefalse: [
      { question: "Pollution is good for the environment.", options: ["True", "False"], correct: 1, explanation: "False! Pollution makes the Earth sick. 🏭", nalaMsg: "Oh no!" },
      { question: "Solar energy comes from the sun.", options: ["True", "False"], correct: 0, explanation: "True! ☀️", nalaMsg: "Bright!" },
      { question: "Plastic takes a long time to break down.", options: ["True", "False"], correct: 0, explanation: "True! That's why we must recycle. ♻️", nalaMsg: "Reduce!" },
      { question: "We should waste as much food as possible.", options: ["True", "False"], correct: 1, explanation: "False! Wasting food is bad. 🗑️", nalaMsg: "Eat it up!" },
      { question: "The Earth is the planet we live on.", options: ["True", "False"], correct: 0, explanation: "True! 🌍", nalaMsg: "Home!" }
    ]
  },
  cinema: {
    sentence: [
      { words: ["The", "movie", "is", "very", "funny"], translation: "O filme é muito engraçado" },
      { words: ["I", "buy", "a", "ticket", "first"], translation: "Eu compro um ingresso primeiro" },
      { words: ["We", "eat", "popcorn", "at", "the", "cinema"], translation: "Nós comemos pipoca no cinema" },
      { words: ["The", "screen", "is", "very", "big"], translation: "A tela é muito grande" },
      { words: ["She", "likes", "action", "movies"], translation: "Ela gosta de filmes de ação" }
    ],
    speaking: [
      { question: "Who is your favorite actor?", translation: "Quem é seu ator favorito?", starter: "My favorite actor is...", nalaTip: "Star!" },
      { question: "Do you prefer watching movies at home or at the cinema?", translation: "Você prefere assistir filmes em casa ou no cinema?", starter: "I prefer the cinema because the screen is bigger.", nalaTip: "Big screen!" },
      { question: "What was the last movie you saw?", translation: "Qual foi o último filme que você viu?", starter: "The last movie I saw was...", nalaTip: "Was it good?" },
      { question: "Do you like scary movies?", translation: "Você gosta de filmes assustadores?", starter: "No, I close my eyes!", nalaTip: "Boo!" },
      { question: "What do you drink with your popcorn?", translation: "O que você bebe com sua pipoca?", starter: "I usually drink soda.", nalaTip: "Fizzy!" }
    ],
    truefalse: [
      { question: "You can pause a movie at the cinema.", options: ["True", "False"], correct: 1, explanation: "False! Only at home. ⏸️", nalaMsg: "Don't miss it!" },
      { question: "A cartoon is animated.", options: ["True", "False"], correct: 0, explanation: "True! 🎨", nalaMsg: "Drawings!" },
      { question: "You wear 3D glasses to see a 3D movie.", options: ["True", "False"], correct: 0, explanation: "True! 🕶️", nalaMsg: "It jumps out!" },
      { question: "A comedy movie is supposed to be sad.", options: ["True", "False"], correct: 1, explanation: "False! It makes you laugh. 😂", nalaMsg: "Haha!" },
      { question: "You buy tickets at the box office.", options: ["True", "False"], correct: 0, explanation: "True! 🎟️", nalaMsg: "Two please!" }
    ]
  },
  amusement: {
    sentence: [
      { words: ["The", "roller", "coaster", "is", "scary"], translation: "A montanha-russa é assustadora" },
      { words: ["I", "want", "to", "eat", "cotton", "candy"], translation: "Eu quero comer algodão doce" },
      { words: ["We", "ride", "the", "Ferris", "wheel"], translation: "Nós andamos na roda-gigante" },
      { words: ["He", "won", "a", "big", "prize"], translation: "Ele ganhou um grande prêmio" },
      { words: ["She", "plays", "a", "fun", "game"], translation: "Ela joga um jogo divertido" }
    ],
    speaking: [
      { question: "Are you scared of heights?", translation: "Você tem medo de altura?", starter: "Yes, a little bit.", nalaTip: "Don't look down!" },
      { question: "What is the best ride at the park?", translation: "Qual é o melhor brinquedo do parque?", starter: "The best ride is the roller coaster.", nalaTip: "Fast!" },
      { question: "Have you ever eaten pink cotton candy?", translation: "Você já comeu algodão doce rosa?", starter: "Yes, it is very sweet.", nalaTip: "Sugar!" },
      { question: "Who do you go to the amusement park with?", translation: "Com quem você vai ao parque de diversões?", starter: "I go with my friends.", nalaTip: "Fun group!" },
      { question: "What game do you like to play there?", translation: "Qual jogo você gosta de jogar lá?", starter: "I like throwing rings to win a bear.", nalaTip: "Good aim!" }
    ],
    truefalse: [
      { question: "A roller coaster goes very slow.", options: ["True", "False"], correct: 1, explanation: "False! It goes super fast! 🎢", nalaMsg: "Whoosh!" },
      { question: "You can see the whole park from the top of the Ferris wheel.", options: ["True", "False"], correct: 0, explanation: "True! It goes very high. 🎡", nalaMsg: "Great view!" },
      { question: "Cotton candy is made of sugar.", options: ["True", "False"], correct: 0, explanation: "True! 🍭", nalaMsg: "Sweet!" },
      { question: "A carousel has wooden horses.", options: ["True", "False"], correct: 0, explanation: "True! 🎠", nalaMsg: "Giddy up!" },
      { question: "You sleep in a tent at the amusement park.", options: ["True", "False"], correct: 1, explanation: "False! Tents are for camping or circus shows. 🎪", nalaMsg: "No sleeping!" }
    ]
  },
  home: {
    sentence: [
      { words: ["I", "sleep", "in", "my", "bedroom"], translation: "Eu durmo no meu quarto" },
      { words: ["We", "cook", "food", "in", "the", "kitchen"], translation: "Nós cozinhamos comida na cozinha" },
      { words: ["She", "sits", "on", "the", "sofa"], translation: "Ela senta no sofá" },
      { words: ["I", "take", "out", "the", "trash"], translation: "Eu tiro o lixo" },
      { words: ["He", "washes", "the", "dishes"], translation: "Ele lava as louças" }
    ],
    speaking: [
      { question: "What is your favorite room in the house?", translation: "Qual é o seu cômodo favorito na casa?", starter: "My favorite room is my bedroom.", nalaTip: "Cozy!" },
      { question: "Do you like cooking?", translation: "Você gosta de cozinhar?", starter: "Yes, I like making cakes.", nalaTip: "Chef!" },
      { question: "Where does your family eat dinner?", translation: "Onde sua família janta?", starter: "We eat in the dining room.", nalaTip: "Together!" },
      { question: "What color is your house?", translation: "De que cor é a sua casa?", starter: "My house is white.", nalaTip: "Beautiful!" },
      { question: "Do you have a garden?", translation: "Você tem um jardim?", starter: "Yes, with many flowers.", nalaTip: "Sniff sniff!" }
    ],
    truefalse: [
      { question: "You bake a cake in the bathroom.", options: ["True", "False"], correct: 1, explanation: "False! You bake in the kitchen oven. 🎂", nalaMsg: "Silly!" },
      { question: "A sofa is for sitting.", options: ["True", "False"], correct: 0, explanation: "True! 🛋️", nalaMsg: "Relax!" },
      { question: "You use a broom to clean the floor.", options: ["True", "False"], correct: 0, explanation: "True! 🧹", nalaMsg: "Sweep!" },
      { question: "A window lets light into the room.", options: ["True", "False"], correct: 0, explanation: "True! 🪟", nalaMsg: "Sunny!" },
      { question: "We throw food on the floor.", options: ["True", "False"], correct: 1, explanation: "False! We throw garbage in the trash. 🗑️", nalaMsg: "Keep it clean!" }
    ]
  }
};

const dataFile = 'js/data.js';
const code = fs.readFileSync(dataFile, 'utf8');

const iifeStart = code.indexOf('// Auto-apply background image based on selected module');
const objStr = code.substring(0, iifeStart);
const iifeStr = code.substring(iifeStart);

let safeObjStr = objStr.replace('const gameData =', 'gameData =');
let gameData;
eval(safeObjStr);

// Append the extra data
for (const module in extraData) {
  if (gameData[module]) {
    ['sentence', 'speaking', 'truefalse'].forEach(gameType => {
      if (!gameData[module][gameType]) {
        gameData[module][gameType] = [];
      }
      gameData[module][gameType] = gameData[module][gameType].concat(extraData[module][gameType]);
    });
  }
}

const newContent = "const gameData = " + JSON.stringify(gameData, null, 2) + ";\n\n" + iifeStr;
fs.writeFileSync(dataFile, newContent);
console.log("Successfully added 5 new items to sentence, speaking, and truefalse for all modules!");

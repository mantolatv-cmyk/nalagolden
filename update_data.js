const fs = require('fs');

const dataFile = 'js/data.js';
let content = fs.readFileSync(dataFile, 'utf8');

// Separate the object from the IIFE.
const iifeStart = content.indexOf('// Auto-apply background image based on selected module');
const objStr = content.substring(0, iifeStart);
const iifeStr = content.substring(iifeStart);

// Let's parse gameData safely.
// Since it's a huge JS object (not JSON), we eval it.
let safeObjStr = objStr.replace('const gameData =', 'gameData =');
// Handle duplicate school key in original source before eval
safeObjStr = safeObjStr.replace('  school: {\n    speaking:', '  school_old: {\n    speaking:');

let gameData;
eval(safeObjStr);

// Clean up the duplicate school_old
if (gameData.school_old) {
    delete gameData.school_old;
}

// 2. Add truefalse to all existing modules
const truefalseData = {
    colors: [
        { question: 'Red is the color of the sky.', options: ['True', 'False'], correct: 1, explanation: 'False! The sky is usually blue. 🔵', nalaMsg: 'Good try!' },
        { question: 'A banana is yellow.', options: ['True', 'False'], correct: 0, explanation: 'True! Bananas are yellow. 🍌', nalaMsg: 'Yummy!' },
        { question: 'Pink is a mixture of red and white.', options: ['True', 'False'], correct: 0, explanation: 'True! Red + White = Pink! 💖', nalaMsg: 'Great job!' },
        { question: 'Grass is blue.', options: ['True', 'False'], correct: 1, explanation: 'False! Grass is green. 🌿', nalaMsg: 'Keep going!' },
        { question: 'Snow is white.', options: ['True', 'False'], correct: 0, explanation: 'True! Snow is white. ❄️', nalaMsg: 'Perfect!' }
    ],
    animals: [
        { question: 'A dog says "Meow".', options: ['True', 'False'], correct: 1, explanation: 'False! A cat says meow. 🐱', nalaMsg: 'Woof woof!' },
        { question: 'A bird can fly.', options: ['True', 'False'], correct: 0, explanation: 'True! Birds have wings and can fly. 🐦', nalaMsg: 'So high!' },
        { question: 'Fish live in trees.', options: ['True', 'False'], correct: 1, explanation: 'False! Fish live in the water. 🐟', nalaMsg: 'Splash!' },
        { question: 'A turtle walks very fast.', options: ['True', 'False'], correct: 1, explanation: 'False! Turtles are known for walking slowly. 🐢', nalaMsg: 'Slow and steady!' },
        { question: 'A tiger has stripes.', options: ['True', 'False'], correct: 0, explanation: 'True! Tigers have beautiful orange and black stripes. 🐅', nalaMsg: 'Roar!' }
    ],
    numbers: [
        { question: 'Two comes after one.', options: ['True', 'False'], correct: 0, explanation: 'True! 1, then 2. 🔢', nalaMsg: 'Spot on!' },
        { question: 'Five is smaller than three.', options: ['True', 'False'], correct: 1, explanation: 'False! Five is bigger than three. 🖐️', nalaMsg: 'Count with me!' },
        { question: 'Ten is the last number on your fingers.', options: ['True', 'False'], correct: 0, explanation: 'True! We usually have 10 fingers. 👐', nalaMsg: 'High ten!' },
        { question: 'Three plus two is six.', options: ['True', 'False'], correct: 1, explanation: 'False! 3 + 2 = 5. 🧮', nalaMsg: 'Try again!' },
        { question: 'Seven is a lucky number for many people.', options: ['True', 'False'], correct: 0, explanation: 'True! Many people think 7 is lucky! 🍀', nalaMsg: 'Lucky you!' }
    ],
    family: [
        { question: 'A mother is a female parent.', options: ['True', 'False'], correct: 0, explanation: 'True! 👩‍👧', nalaMsg: 'Family love!' },
        { question: 'A brother is your sister.', options: ['True', 'False'], correct: 1, explanation: 'False! A brother is a boy. 👦', nalaMsg: 'Nice!' },
        { question: 'Grandpa is your father\'s father.', options: ['True', 'False'], correct: 0, explanation: 'True! (Or your mother\'s father). 👴', nalaMsg: 'Wise choice!' },
        { question: 'An aunt is your brother.', options: ['True', 'False'], correct: 1, explanation: 'False! An aunt is your parent\'s sister. 👩', nalaMsg: 'Almost!' },
        { question: 'Cousins are part of the family.', options: ['True', 'False'], correct: 0, explanation: 'True! We love our cousins. 👦👧', nalaMsg: 'Yay!' }
    ],
    school: [
        { question: 'You use an eraser to write on the board.', options: ['True', 'False'], correct: 1, explanation: 'False! You use a pen or chalk to write, and an eraser to clean. 🧼', nalaMsg: 'Good one!' },
        { question: 'A backpack is used to carry books.', options: ['True', 'False'], correct: 0, explanation: 'True! We put our school supplies in it. 🎒', nalaMsg: 'Ready for school!' },
        { question: 'A teacher learns from the students.', options: ['True', 'False'], correct: 1, explanation: 'False! A teacher teaches the students. 👩‍🏫', nalaMsg: 'Smart!' },
        { question: 'You sit on a desk.', options: ['True', 'False'], correct: 1, explanation: 'False! You sit on a chair, and put your books on the desk. 🪑', nalaMsg: 'Careful!' },
        { question: 'A notebook has blank pages for writing.', options: ['True', 'False'], correct: 0, explanation: 'True! 📓', nalaMsg: 'Write it down!' }
    ],
    routine: [
        { question: 'We usually eat breakfast at night.', options: ['True', 'False'], correct: 1, explanation: 'False! Breakfast is in the morning. 🥞', nalaMsg: 'Good morning!' },
        { question: 'You should brush your teeth every day.', options: ['True', 'False'], correct: 0, explanation: 'True! It keeps them clean and healthy. 🪥', nalaMsg: 'Shiny smile!' },
        { question: 'We go to sleep in the morning.', options: ['True', 'False'], correct: 1, explanation: 'False! We go to sleep at night. 🌙', nalaMsg: 'Sweet dreams!' },
        { question: 'Taking a shower makes you clean.', options: ['True', 'False'], correct: 0, explanation: 'True! 🚿', nalaMsg: 'Splish splash!' },
        { question: 'Lunch is the meal we eat in the middle of the day.', options: ['True', 'False'], correct: 0, explanation: 'True! 🍲', nalaMsg: 'Yummy!' }
    ],
    past: [
        { question: 'Yesterday means the day before today.', options: ['True', 'False'], correct: 0, explanation: 'True! 📅', nalaMsg: 'Time traveler!' },
        { question: '"I played" is something happening right now.', options: ['True', 'False'], correct: 1, explanation: 'False! It happened in the past. 🎮', nalaMsg: 'Look back!' },
        { question: 'Dinosaurs lived in the past.', options: ['True', 'False'], correct: 0, explanation: 'True! Millions of years ago. 🦖', nalaMsg: 'Roar!' },
        { question: 'Tomorrow is part of the past.', options: ['True', 'False'], correct: 1, explanation: 'False! Tomorrow is the future. 🔮', nalaMsg: 'Think ahead!' },
        { question: '"She went" is the past of "She goes".', options: ['True', 'False'], correct: 0, explanation: 'True! 🚶‍♀️', nalaMsg: 'Good grammar!' }
    ],
    foods: [
        { question: 'An apple is a fruit.', options: ['True', 'False'], correct: 0, explanation: 'True! 🍎', nalaMsg: 'Healthy choice!' },
        { question: 'Milk comes from chickens.', options: ['True', 'False'], correct: 1, explanation: 'False! Milk usually comes from cows. 🐄', nalaMsg: 'Moo!' },
        { question: 'Pizza is usually round.', options: ['True', 'False'], correct: 0, explanation: 'True! 🍕', nalaMsg: 'Delicious!' },
        { question: 'Carrots are blue.', options: ['True', 'False'], correct: 1, explanation: 'False! Carrots are orange. 🥕', nalaMsg: 'Crunch!' },
        { question: 'Water is a drink.', options: ['True', 'False'], correct: 0, explanation: 'True! 💧', nalaMsg: 'Stay hydrated!' }
    ],
    body: [
        { question: 'We use our eyes to see.', options: ['True', 'False'], correct: 0, explanation: 'True! 👀', nalaMsg: 'I see you!' },
        { question: 'We have four arms.', options: ['True', 'False'], correct: 1, explanation: 'False! We have two arms. 💪', nalaMsg: 'High five!' },
        { question: 'Your nose is used for smelling.', options: ['True', 'False'], correct: 0, explanation: 'True! 👃', nalaMsg: 'Sniff sniff!' },
        { question: 'You have ten toes on one foot.', options: ['True', 'False'], correct: 1, explanation: 'False! You have five toes on one foot. 🦶', nalaMsg: 'Wiggle them!' },
        { question: 'Hair grows on your head.', options: ['True', 'False'], correct: 0, explanation: 'True! 💇‍♀️', nalaMsg: 'Looking good!' }
    ],
    travel: [
        { question: 'An airplane flies in the sky.', options: ['True', 'False'], correct: 0, explanation: 'True! ✈️', nalaMsg: 'Up high!' },
        { question: 'A boat drives on the road.', options: ['True', 'False'], correct: 1, explanation: 'False! A boat floats on water. ⛵', nalaMsg: 'Ahoy!' },
        { question: 'A passport is needed to travel to some countries.', options: ['True', 'False'], correct: 0, explanation: 'True! 🛂', nalaMsg: 'Stamp it!' },
        { question: 'A train uses wings to fly.', options: ['True', 'False'], correct: 1, explanation: 'False! A train travels on tracks. 🚂', nalaMsg: 'Choo choo!' },
        { question: 'Suitcases are used to pack clothes.', options: ['True', 'False'], correct: 0, explanation: 'True! 🧳', nalaMsg: 'Ready to go!' }
    ],
    eco: [
        { question: 'Recycling helps the planet.', options: ['True', 'False'], correct: 0, explanation: 'True! ♻️', nalaMsg: 'Save the Earth!' },
        { question: 'Plastic bags are good for the ocean.', options: ['True', 'False'], correct: 1, explanation: 'False! Plastic hurts ocean animals. 🐢', nalaMsg: 'Keep it clean!' },
        { question: 'Trees give us oxygen to breathe.', options: ['True', 'False'], correct: 0, explanation: 'True! 🌳', nalaMsg: 'Breathe deep!' },
        { question: 'Leaving the water running is good.', options: ['True', 'False'], correct: 1, explanation: 'False! We should save water. 💧', nalaMsg: 'Turn it off!' },
        { question: 'Planting a garden helps bees.', options: ['True', 'False'], correct: 0, explanation: 'True! 🐝', nalaMsg: 'Buzz!' }
    ]
};

// Add truefalse to all existing
for (const key in gameData) {
    if (truefalseData[key]) {
        gameData[key].truefalse = truefalseData[key];
    } else {
        // Fallback for modules like weekend or duplicate school
        gameData[key].truefalse = truefalseData['school'];
    }
}

// 3. Add the 3 new modules
gameData.cinema = {
    title: "Cinema",
    bgImage: "url('images/bg-cinema.png')",
    emoji: "🍿",
    speaking: [
        { question: "Do you like to go to the cinema?", translation: "Você gosta de ir ao cinema?", starter: "Yes, I love going to the cinema!", nalaTip: "Action! 🎬" },
        { question: "What is your favorite movie?", translation: "Qual é o seu filme favorito?", starter: "My favorite movie is...", nalaTip: "Popcorn time! 🍿" },
        { question: "Do you prefer comedy or action movies?", translation: "Você prefere filmes de comédia ou ação?", starter: "I prefer comedy movies because they are funny.", nalaTip: "Haha! 😂" },
        { question: "Do you eat popcorn at the movies?", translation: "Você come pipoca no cinema?", starter: "Yes, I always eat sweet popcorn.", nalaTip: "Yummy! 🍿" },
        { question: "Who do you go to the movies with?", translation: "Com quem você vai ao cinema?", starter: "I go with my family and friends.", nalaTip: "Fun together! 🐕" }
    ],
    truefalse: [
        { question: 'You watch a movie on a big screen at the cinema.', options: ['True', 'False'], correct: 0, explanation: 'True! The screen is very big! 📽️', nalaMsg: 'Awesome!' },
        { question: 'You need a ticket to enter the cinema.', options: ['True', 'False'], correct: 0, explanation: 'True! Don\'t forget your ticket! 🎫', nalaMsg: 'Got it!' },
        { question: 'It is good to shout loudly during a movie.', options: ['True', 'False'], correct: 1, explanation: 'False! We must be quiet. 🤫', nalaMsg: 'Shh!' },
        { question: 'Popcorn is a popular snack at the movies.', options: ['True', 'False'], correct: 0, explanation: 'True! It is delicious! 🍿', nalaMsg: 'Crunch!' },
        { question: 'A comedy movie makes you cry a lot.', options: ['True', 'False'], correct: 1, explanation: 'False! Comedy makes you laugh! 😂', nalaMsg: 'Haha!' }
    ],
    story: [
        { text: "Nala is going to the cinema today!" },
        { text: "She wants to watch a movie about brave dogs." },
        { text: "First, she buys a ticket at the box office." },
        { text: "Then, she gets a big bucket of popcorn." },
        { text: "She enters the dark theater and finds her seat." },
        { text: "The big screen lights up, the movie starts." },
        { text: "It is an action movie with lots of running!" },
        { text: "Nala laughs at the funny scenes." },
        { text: "When the movie ends, she claps her paws." },
        { text: "What a great day at the cinema!" }
    ],
    matching: [
        { word: "Movie", emoji: "🎬" },
        { word: "Popcorn", emoji: "🍿" },
        { word: "Ticket", emoji: "🎫" },
        { word: "Screen", emoji: "📽️" },
        { word: "Seat", emoji: "💺" },
        { word: "Glasses", emoji: "👓" },
        { word: "Comedy", emoji: "😂" },
        { word: "Action", emoji: "🏃" },
        { word: "Cartoon", emoji: "🎨" },
        { word: "Drink", emoji: "🥤" }
    ],
    sentence: [
        { words: ["I", "watch", "a", "movie"], translation: "Eu assisto a um filme" },
        { words: ["The", "popcorn", "is", "delicious"], translation: "A pipoca é deliciosa" },
        { words: ["I", "have", "a", "ticket"], translation: "Eu tenho um ingresso" },
        { words: ["The", "screen", "is", "big"], translation: "A tela é grande" },
        { words: ["We", "sit", "in", "the", "seat"], translation: "Nós sentamos no assento" }
    ],
    spelling: ["movie", "popcorn", "ticket", "screen", "seat", "glasses", "comedy", "action", "cartoon", "drink"],
    garden: [
        { word: "Movie", question: "A story shown on a big screen." },
        { word: "Popcorn", question: "A snack made from heated corn kernels." },
        { word: "Ticket", question: "A piece of paper you buy to enter the cinema." },
        { word: "Screen", question: "The large flat surface where the movie is shown." },
        { word: "Seat", question: "A place where you sit to watch the movie." },
        { word: "Glasses", question: "You wear these to watch a 3D movie." },
        { word: "Comedy", question: "A movie that makes you laugh." },
        { word: "Action", question: "A movie with lots of exciting events." },
        { word: "Cartoon", question: "An animated movie." },
        { word: "Drink", question: "A liquid you buy to quench your thirst." }
    ],
    fetch: [
        { id: "movie", name: "Movie", emoji: "🎬", correct: true },
        { id: "popcorn", name: "Popcorn", emoji: "🍿", correct: true },
        { id: "ticket", name: "Ticket", emoji: "🎫", correct: true },
        { id: "screen", name: "Screen", emoji: "📽️", correct: true },
        { id: "apple", name: "Apple", emoji: "🍎", correct: false },
        { id: "bone", name: "Bone", emoji: "🦴", correct: false },
        { id: "seat", name: "Seat", emoji: "💺", correct: true },
        { id: "shoes", name: "Shoes", emoji: "👟", correct: false },
        { id: "glasses", name: "Glasses", emoji: "👓", correct: true },
        { id: "drink", name: "Drink", emoji: "🥤", correct: true }
    ],
    quiz: [
        { question: 'What do you eat at the cinema?', options: ['Apple', 'Popcorn', 'Soup', 'Rice'], correct: 1, explanation: 'Popcorn! 🍿', nalaMsg: 'Yummy!' },
        { question: 'You need this to enter the movie.', options: ['Ticket', 'Book', 'Pencil', 'Hat'], correct: 0, explanation: 'Ticket! 🎫', nalaMsg: 'Don\'t forget it!' },
        { question: 'Where does the movie play?', options: ['Wall', 'Floor', 'Screen', 'Window'], correct: 2, explanation: 'Screen! 📽️', nalaMsg: 'Look up!' },
        { question: 'A funny movie is a...', options: ['Horror', 'Action', 'Comedy', 'Documentary'], correct: 2, explanation: 'Comedy! 😂', nalaMsg: 'Haha!' },
        { question: 'You drink this at the cinema.', options: ['Soup', 'Tea', 'Drink', 'Oil'], correct: 2, explanation: 'Drink! 🥤', nalaMsg: 'Slurp!' }
    ]
};

gameData.amusement = {
    title: "Amusement Park",
    bgImage: "url('images/bg-amusement.png')",
    emoji: "🎢",
    speaking: [
        { question: "Do you like amusement parks?", translation: "Você gosta de parques de diversão?", starter: "Yes, I think they are very fun!", nalaTip: "So fun! 🎢" },
        { question: "Are you afraid of the roller coaster?", translation: "Você tem medo da montanha-russa?", starter: "No, I love the roller coaster! / Yes, it is too fast.", nalaTip: "Hold on tight! 🎢" },
        { question: "Have you ever been on a Ferris wheel?", translation: "Você já andou na roda-gigante?", starter: "Yes, the view from the top is beautiful.", nalaTip: "Up so high! 🎡" },
        { question: "What is your favorite park food?", translation: "Qual é a sua comida favorita de parque?", starter: "My favorite is cotton candy.", nalaTip: "Sweet! 🍭" },
        { question: "Do you play games to win prizes?", translation: "Você joga para ganhar prêmios?", starter: "Yes, I won a giant teddy bear once!", nalaTip: "Good luck! 🧸" }
    ],
    truefalse: [
        { question: 'A roller coaster goes very fast.', options: ['True', 'False'], correct: 0, explanation: 'True! Hold on! 🎢', nalaMsg: 'Woohoo!' },
        { question: 'A Ferris wheel is flat on the ground.', options: ['True', 'False'], correct: 1, explanation: 'False! It goes high up in the air. 🎡', nalaMsg: 'Great view!' },
        { question: 'Cotton candy is sweet and fluffy.', options: ['True', 'False'], correct: 0, explanation: 'True! It looks like pink clouds. 🍭', nalaMsg: 'Yum!' },
        { question: 'You can win prizes at the games.', options: ['True', 'False'], correct: 0, explanation: 'True! Like a big teddy bear! 🧸', nalaMsg: 'Winner!' },
        { question: 'Amusement parks are very quiet places.', options: ['True', 'False'], correct: 1, explanation: 'False! They are noisy and full of fun. 🎪', nalaMsg: 'Laugh out loud!' }
    ],
    story: [
        { text: "Today, Nala is at the Amusement Park!" },
        { text: "She sees a giant Ferris wheel spinning slowly." },
        { text: "First, she wants to ride the roller coaster." },
        { text: "It goes up, up, up... and then WHOOSH down!" },
        { text: "Nala barks happily. That was so fast!" },
        { text: "Next, she buys some pink cotton candy." },
        { text: "It is sweet and melts in her mouth." },
        { text: "She plays a game and wins a toy." },
        { text: "The sun goes down and the lights turn on." },
        { text: "It was a magical day at the park." }
    ],
    matching: [
        { word: "Roller Coaster", emoji: "🎢" },
        { word: "Ferris Wheel", emoji: "🎡" },
        { word: "Carousel", emoji: "🎠" },
        { word: "Ticket", emoji: "🎟️" },
        { word: "Cotton Candy", emoji: "🍭" },
        { word: "Balloon", emoji: "🎈" },
        { word: "Prize", emoji: "🧸" },
        { word: "Tent", emoji: "🎪" },
        { word: "Popcorn", emoji: "🍿" },
        { word: "Game", emoji: "🎯" }
    ],
    sentence: [
        { words: ["The", "roller", "coaster", "is", "fast"], translation: "A montanha-russa é rápida" },
        { words: ["I", "see", "the", "Ferris", "wheel"], translation: "Eu vejo a roda-gigante" },
        { words: ["I", "eat", "cotton", "candy"], translation: "Eu como algodão doce" },
        { words: ["She", "wins", "a", "prize"], translation: "Ela ganha um prêmio" },
        { words: ["We", "play", "a", "game"], translation: "Nós jogamos um jogo" }
    ],
    spelling: ["coaster", "wheel", "carousel", "ticket", "candy", "balloon", "prize", "tent", "popcorn", "game"],
    garden: [
        { word: "Roller Coaster", question: "A fast ride with steep drops and loops." },
        { word: "Ferris Wheel", question: "A giant wheel with passenger cars." },
        { word: "Carousel", question: "A merry-go-round with horses." },
        { word: "Ticket", question: "A piece of paper needed to go on a ride." },
        { word: "Cotton Candy", question: "A fluffy, spun sugar treat." },
        { word: "Balloon", question: "A colorful inflatable bag." },
        { word: "Prize", question: "A reward you win at a game." },
        { word: "Tent", question: "A shelter made of fabric." },
        { word: "Popcorn", question: "A classic salty snack." },
        { word: "Game", question: "An activity you play to win something." }
    ],
    fetch: [
        { id: "coaster", name: "Roller Coaster", emoji: "🎢", correct: true },
        { id: "wheel", name: "Ferris Wheel", emoji: "🎡", correct: true },
        { id: "carousel", name: "Carousel", emoji: "🎠", correct: true },
        { id: "candy", name: "Cotton Candy", emoji: "🍭", correct: true },
        { id: "apple", name: "Apple", emoji: "🍎", correct: false },
        { id: "balloon", name: "Balloon", emoji: "🎈", correct: true },
        { id: "prize", name: "Prize", emoji: "🧸", correct: true },
        { id: "shoes", name: "Shoes", emoji: "👟", correct: false },
        { id: "tent", name: "Tent", emoji: "🎪", correct: true },
        { id: "game", name: "Game", emoji: "🎯", correct: true }
    ],
    quiz: [
        { question: 'This ride goes very fast on tracks.', options: ['Ferris Wheel', 'Roller Coaster', 'Carousel', 'Tent'], correct: 1, explanation: 'Roller Coaster! 🎢', nalaMsg: 'Hold on!' },
        { question: 'A sweet pink treat on a stick.', options: ['Apple', 'Popcorn', 'Cotton Candy', 'Burger'], correct: 2, explanation: 'Cotton Candy! 🍭', nalaMsg: 'Sweet!' },
        { question: 'A big wheel that goes round slowly.', options: ['Ferris Wheel', 'Carousel', 'Car', 'Bike'], correct: 0, explanation: 'Ferris Wheel! 🎡', nalaMsg: 'Look at the view!' },
        { question: 'A ride with wooden horses.', options: ['Roller Coaster', 'Carousel', 'Train', 'Boat'], correct: 1, explanation: 'Carousel! 🎠', nalaMsg: 'Round and round!' },
        { question: 'If you win a game, you get a...', options: ['Prize', 'Punishment', 'Ticket', 'Nap'], correct: 0, explanation: 'Prize! 🧸', nalaMsg: 'Yay!' }
    ]
};

gameData.home = {
    title: "Home & Chores",
    bgImage: "url('images/bg-home.png')",
    emoji: "🏠",
    speaking: [
        { question: "Where do you sleep in your house?", translation: "Onde você dorme na sua casa?", starter: "I sleep in my bedroom.", nalaTip: "Cozy bed! 🛏️" },
        { question: "Who cooks dinner at your home?", translation: "Quem faz o jantar na sua casa?", starter: "My mother / father cooks dinner in the kitchen.", nalaTip: "Yummy food! 🍳" },
        { question: "Do you help clean the house?", translation: "Você ajuda a limpar a casa?", starter: "Yes, I help sweep the floor.", nalaTip: "Good helper! 🧹" },
        { question: "Where do you watch TV?", translation: "Onde você assiste TV?", starter: "I watch TV in the living room.", nalaTip: "Relax! 🛋️" },
        { question: "What chore do you do?", translation: "Qual tarefa doméstica você faz?", starter: "I wash the dishes.", nalaTip: "Clean plates! 🍽️" }
    ],
    truefalse: [
        { question: 'You cook food in the bathroom.', options: ['True', 'False'], correct: 1, explanation: 'False! You cook in the kitchen. 🍳', nalaMsg: 'Silly!' },
        { question: 'A bed is for sleeping in the bedroom.', options: ['True', 'False'], correct: 0, explanation: 'True! 🛏️', nalaMsg: 'Goodnight!' },
        { question: 'Washing dishes means cleaning plates and cups.', options: ['True', 'False'], correct: 0, explanation: 'True! 🍽️', nalaMsg: 'All clean!' },
        { question: 'A broom is used to eat food.', options: ['True', 'False'], correct: 1, explanation: 'False! A broom is used to sweep the floor. 🧹', nalaMsg: 'Keep it tidy!' },
        { question: 'You watch TV in the living room.', options: ['True', 'False'], correct: 0, explanation: 'True! 📺', nalaMsg: 'Relax time!' }
    ],
    story: [
        { text: "It is Saturday morning at Nala's house." },
        { text: "Everyone is helping to clean the home." },
        { text: "Nala helps to pick up her dog toys." },
        { text: "Mom is sweeping the floor with a broom." },
        { text: "Dad is washing the dishes in the kitchen." },
        { text: "The windows are open to let the sun in." },
        { text: "After cleaning, the house looks beautiful!" },
        { text: "Now they can relax in the living room." },
        { text: "They sit on the sofa and watch TV." },
        { text: "Helping at home is good for the family." }
    ],
    matching: [
        { word: "House", emoji: "🏠" },
        { word: "Kitchen", emoji: "🍳" },
        { word: "Bedroom", emoji: "🛏️" },
        { word: "Bathroom", emoji: "🚿" },
        { word: "Living Room", emoji: "🛋️" },
        { word: "Broom", emoji: "🧹" },
        { word: "Dishes", emoji: "🍽️" },
        { word: "Trash", emoji: "🗑️" },
        { word: "Sofa", emoji: "🛋️" },
        { word: "Window", emoji: "🪟" }
    ],
    sentence: [
        { words: ["I", "clean", "my", "bedroom"], translation: "Eu limpo meu quarto" },
        { words: ["She", "washes", "the", "dishes"], translation: "Ela lava as louças" },
        { words: ["We", "sit", "on", "the", "sofa"], translation: "Nós sentamos no sofá" },
        { words: ["The", "kitchen", "is", "clean"], translation: "A cozinha está limpa" },
        { words: ["I", "use", "the", "broom"], translation: "Eu uso a vassoura" }
    ],
    spelling: ["house", "kitchen", "bedroom", "bathroom", "living", "broom", "dishes", "trash", "sofa", "window"],
    garden: [
        { word: "House", question: "A building where people live." },
        { word: "Kitchen", question: "A room where food is cooked." },
        { word: "Bedroom", question: "A room for sleeping in." },
        { word: "Bathroom", question: "A room with a toilet and shower." },
        { word: "Living Room", question: "A room where people sit and relax." },
        { word: "Broom", question: "A tool used for sweeping." },
        { word: "Dishes", question: "Plates, bowls, and cups." },
        { word: "Trash", question: "Waste material to be thrown away." },
        { word: "Sofa", question: "A long, comfortable seat." },
        { word: "Window", question: "An opening in a wall to let light in." }
    ],
    fetch: [
        { id: "house", name: "House", emoji: "🏠", correct: true },
        { id: "kitchen", name: "Kitchen", emoji: "🍳", correct: true },
        { id: "bedroom", name: "Bedroom", emoji: "🛏️", correct: true },
        { id: "bathroom", name: "Bathroom", emoji: "🚿", correct: true },
        { id: "apple", name: "Apple", emoji: "🍎", correct: false },
        { id: "broom", name: "Broom", emoji: "🧹", correct: true },
        { id: "dishes", name: "Dishes", emoji: "🍽️", correct: true },
        { id: "shoes", name: "Shoes", emoji: "👟", correct: false },
        { id: "trash", name: "Trash", emoji: "🗑️", correct: true },
        { id: "sofa", name: "Sofa", emoji: "🛋️", correct: true }
    ],
    quiz: [
        { question: 'Where do you sleep?', options: ['Kitchen', 'Bathroom', 'Bedroom', 'Garden'], correct: 2, explanation: 'Bedroom! 🛏️', nalaMsg: 'Sweet dreams!' },
        { question: 'Where do you cook food?', options: ['Living Room', 'Kitchen', 'Bedroom', 'Garage'], correct: 1, explanation: 'Kitchen! 🍳', nalaMsg: 'Smells good!' },
        { question: 'You use this to sweep the floor.', options: ['Broom', 'Spoon', 'Brush', 'Towel'], correct: 0, explanation: 'Broom! 🧹', nalaMsg: 'Good job!' },
        { question: 'Where do you take a shower?', options: ['Kitchen', 'Bedroom', 'Bathroom', 'Living Room'], correct: 2, explanation: 'Bathroom! 🚿', nalaMsg: 'Splish splash!' },
        { question: 'After eating, we wash the...', options: ['Clothes', 'Dishes', 'Car', 'Dog'], correct: 1, explanation: 'Dishes! 🍽️', nalaMsg: 'Sparkling clean!' }
    ]
};


// 4. Output back to file
const newContent = "const gameData = " + JSON.stringify(gameData, null, 2) + ";\n\n" + iifeStr;

fs.writeFileSync(dataFile, newContent);
console.log("data.js successfully updated with new modules and truefalse games.");

const fs = require('fs');
const path = 'c:\\\\Users\\\\martm\\\\Documents\\\\Arquivos do Antigravity\\\\NalaGolden\\\\js\\\\data.js';
let data = fs.readFileSync(path, 'utf8');

const replacements = {
  colors: `      ,{ id: "purple_grape", name: "Purple Grape", emoji: "🍇", correct: true },
      { id: "brown_bear", name: "Brown Bear", emoji: "🐻", correct: true },
      { id: "car", name: "Car", emoji: "🚗", correct: false },
      { id: "phone", name: "Phone", emoji: "📱", correct: false }`,
  animals: `      ,{ id: "tiger", name: "Tiger", emoji: "🐅", correct: true },
      { id: "monkey", name: "Monkey", emoji: "🐒", correct: true },
      { id: "penguin", name: "Penguin", emoji: "🐧", correct: true },
      { id: "computer", name: "Computer", emoji: "💻", correct: false },
      { id: "clock", name: "Clock", emoji: "🕰️", correct: false }`,
  numbers: `      ,{ id: "seven", name: "Seven", emoji: "7️⃣", correct: true },
      { id: "eight", name: "Eight", emoji: "8️⃣", correct: true },
      { id: "nine", name: "Nine", emoji: "9️⃣", correct: true },
      { id: "apple", name: "Apple", emoji: "🍎", correct: false }`,
  family: `      ,{ id: "cousin", name: "Cousin", emoji: "👦", correct: true },
      { id: "aunt", name: "Aunt", emoji: "👩", correct: true },
      { id: "uncle", name: "Uncle", emoji: "👨", correct: true },
      { id: "tree", name: "Tree", emoji: "🌳", correct: false }`,
  school: `      ,{ id: "glue", name: "Glue", emoji: "🧴", correct: true },
      { id: "scissors", name: "Scissors", emoji: "✂️", correct: true },
      { id: "desk", name: "Desk", emoji: "🪑", correct: true },
      { id: "shoes", name: "Shoes", emoji: "👟", correct: false }`,
  routine: `      ,{ id: "shower", name: "Shower", emoji: "🚿", correct: true },
      { id: "bed", name: "Bed", emoji: "🛏️", correct: true },
      { id: "comb", name: "Comb", emoji: "🪮", correct: true },
      { id: "moon", name: "Moon", emoji: "🌙", correct: false }`,
  past: `      ,{ id: "camera", name: "Camera", emoji: "📷", correct: true },
      { id: "ticket", name: "Ticket", emoji: "🎫", correct: true },
      { id: "guitar", name: "Guitar", emoji: "🎸", correct: true },
      { id: "spoon", name: "Spoon", emoji: "🥄", correct: false }`,
  foods: `      ,{ id: "cheese", name: "Cheese", emoji: "🧀", correct: true },
      { id: "chicken", name: "Chicken", emoji: "🍗", correct: true },
      { id: "cake", name: "Cake", emoji: "🎂", correct: true },
      { id: "pencil", name: "Pencil", emoji: "✏️", correct: false }`,
  body: `      ,{ id: "mouth", name: "Mouth", emoji: "👄", correct: true },
      { id: "ears", name: "Ears", emoji: "👂", correct: true },
      { id: "teeth", name: "Teeth", emoji: "🦷", correct: true },
      { id: "door", name: "Door", emoji: "🚪", correct: false }`,
  travel: `      ,{ id: "ticket_flight", name: "Flight Ticket", emoji: "🎟️", correct: true },
      { id: "train", name: "Train", emoji: "🚆", correct: true },
      { id: "hotel", name: "Hotel", emoji: "🏨", correct: true },
      { id: "banana", name: "Banana", emoji: "🍌", correct: false }`,
  eco: `      ,{ id: "earth", name: "Earth", emoji: "🌍", correct: true },
      { id: "leaf", name: "Leaf", emoji: "🍃", correct: true },
      { id: "wind", name: "Wind Energy", emoji: "🌬️", correct: true },
      { id: "burger", name: "Burger", emoji: "🍔", correct: false }`
};

for (const module in replacements) {
  const regex = new RegExp(\`(\${module}: \\{[\\\\s\\\\S]*?fetch: \\[[\\\\s\\\\S]*?)(\\n\\s*\\],\\n\\s*quiz:)\`);
  data = data.replace(regex, \`$1\\n\${replacements[module]}$2\`);
}

fs.writeFileSync(path, data, 'utf8');
console.log('Update complete');

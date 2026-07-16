const fs = require('fs');
const path = 'c:\\\\Users\\\\martm\\\\Documents\\\\Arquivos do Antigravity\\\\NalaGolden\\\\js\\\\data.js';
let data = fs.readFileSync(path, 'utf8');

const replacements = {
  colors: ',\n      { id: "purple_grape", name: "Purple Grape", emoji: "🍇", correct: true },\n      { id: "brown_bear", name: "Brown Bear", emoji: "🐻", correct: true },\n      { id: "car", name: "Car", emoji: "🚗", correct: false },\n      { id: "phone", name: "Phone", emoji: "📱", correct: false }',
  animals: ',\n      { id: "tiger", name: "Tiger", emoji: "🐅", correct: true },\n      { id: "monkey", name: "Monkey", emoji: "🐒", correct: true },\n      { id: "penguin", name: "Penguin", emoji: "🐧", correct: true },\n      { id: "computer", name: "Computer", emoji: "💻", correct: false },\n      { id: "clock", name: "Clock", emoji: "🕰️", correct: false }',
  numbers: ',\n      { id: "seven", name: "Seven", emoji: "7️⃣", correct: true },\n      { id: "eight", name: "Eight", emoji: "8️⃣", correct: true },\n      { id: "nine", name: "Nine", emoji: "9️⃣", correct: true },\n      { id: "apple", name: "Apple", emoji: "🍎", correct: false }',
  family: ',\n      { id: "cousin", name: "Cousin", emoji: "👦", correct: true },\n      { id: "aunt", name: "Aunt", emoji: "👩", correct: true },\n      { id: "uncle", name: "Uncle", emoji: "👨", correct: true },\n      { id: "tree", name: "Tree", emoji: "🌳", correct: false }',
  school: ',\n      { id: "glue", name: "Glue", emoji: "🧴", correct: true },\n      { id: "scissors", name: "Scissors", emoji: "✂️", correct: true },\n      { id: "desk", name: "Desk", emoji: "🪑", correct: true },\n      { id: "shoes", name: "Shoes", emoji: "👟", correct: false }',
  routine: ',\n      { id: "shower", name: "Shower", emoji: "🚿", correct: true },\n      { id: "bed", name: "Bed", emoji: "🛏️", correct: true },\n      { id: "comb", name: "Comb", emoji: "🪮", correct: true },\n      { id: "moon", name: "Moon", emoji: "🌙", correct: false }',
  past: ',\n      { id: "camera", name: "Camera", emoji: "📷", correct: true },\n      { id: "ticket", name: "Ticket", emoji: "🎫", correct: true },\n      { id: "guitar", name: "Guitar", emoji: "🎸", correct: true },\n      { id: "spoon", name: "Spoon", emoji: "🥄", correct: false }',
  foods: ',\n      { id: "cheese", name: "Cheese", emoji: "🧀", correct: true },\n      { id: "chicken", name: "Chicken", emoji: "🍗", correct: true },\n      { id: "cake", name: "Cake", emoji: "🎂", correct: true },\n      { id: "pencil", name: "Pencil", emoji: "✏️", correct: false }',
  body: ',\n      { id: "mouth", name: "Mouth", emoji: "👄", correct: true },\n      { id: "ears", name: "Ears", emoji: "👂", correct: true },\n      { id: "teeth", name: "Teeth", emoji: "🦷", correct: true },\n      { id: "door", name: "Door", emoji: "🚪", correct: false }',
  travel: ',\n      { id: "ticket_flight", name: "Flight Ticket", emoji: "🎟️", correct: true },\n      { id: "train", name: "Train", emoji: "🚆", correct: true },\n      { id: "hotel", name: "Hotel", emoji: "🏨", correct: true },\n      { id: "banana", name: "Banana", emoji: "🍌", correct: false }',
  eco: ',\n      { id: "earth", name: "Earth", emoji: "🌍", correct: true },\n      { id: "leaf", name: "Leaf", emoji: "🍃", correct: true },\n      { id: "wind", name: "Wind Energy", emoji: "🌬️", correct: true },\n      { id: "burger", name: "Burger", emoji: "🍔", correct: false }'
};

let sections = data.split('  },');
for (let i = 0; i < sections.length; i++) {
  for (const module in replacements) {
    if (sections[i].includes('  ' + module + ': {') || (i === 0 && sections[i].includes(module + ': {'))) {
       let fetchIndex = sections[i].indexOf('    fetch: [');
       if (fetchIndex > -1) {
          let endFetchIndex = sections[i].indexOf('    ],\n    quiz:', fetchIndex);
          if (endFetchIndex > -1) {
             sections[i] = sections[i].slice(0, endFetchIndex) + replacements[module] + '\\n' + sections[i].slice(endFetchIndex);
          }
       }
    }
  }
}
data = sections.join('  },');
fs.writeFileSync(path, data, 'utf8');
console.log('done');

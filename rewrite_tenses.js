const fs = require('fs');
let data = fs.readFileSync('js/data.js', 'utf8');

const replacements = [
  // Colors
  ["It is shining bright.", "It shines bright."],
  ["a little butterfly. Our painting is amazing!", "a little butterfly. Our painting is amazing!"], // fine

  // Animals
  ["Bird singing a beautiful song.", "Bird sings a beautiful song."],
  ["It is swimming fast.", "It swims fast."],
  ["what is that jumping in the grass?", "what jumps in the grass?"],
  ["Turtle walking near the water.", "Turtle walks near the water."],
  ["birds flying in the sky.", "birds fly in the sky."],
  ["leaves falling from the tree.", "leaves fall from the tree."],
  ["birds flying very high", "birds fly very high"],

  // Routine
  ["I unwind by playing games", "I play games to unwind"],
  ["After exercising, I take", "After I exercise, I take"],
  ["Taking a shower makes you clean.", "A shower makes you clean."],
  ["\"Taking\", \"a\", \"shower\"", "\"A\", \"shower\""], // if it's in a sentence array

  // Past
  ["While I was hiking, I encountered", "I hiked and encountered"],
  ["Have you experienced anything exciting recently?", "Did you experience anything exciting recently?"],
  ["is something happening right now.", "means right now."],

  // Travel
  ["Have you ever flown in an airplane?", "Did you fly in an airplane?"],
  ["Where would you like to travel in the world?", "Where do you want to travel in the world?"],
  ["I would like to travel to", "I want to travel to"],
  ["Have you ever been on an airplane?", "Did you go on an airplane?"],
  ["Have you ever traveled abroad?", "Did you travel abroad?"],
  ["Have you visited many countries?", "Did you visit many countries?"],
  ["Have you ever flown?", "Did you fly?"],
  ["Se perguntamos \\\"Have you ever <span class=\\\"quiz-highlight\\\">flown</span>?\\\", o que é flown?", "Qual é o passado de <span class=\\\"quiz-highlight\\\">fly</span> (voar)?"],
  ["\"flown\"", "\"flew\""],

  // Eco
  ["If we recycle plastic, we will save animals.", "We recycle plastic and save animals."],
  ["If we clean the Earth, nature will be happy.", "We clean the Earth and nature is happy."],
  ["If everybody helps, the forest will grow.", "Everybody helps and the forest grows."],
  ["O que o condicional <span class=\\\"quiz-highlight\\\">\\\"If we recycle\\\"</span> significa?", "O que <span class=\\\"quiz-highlight\\\">\\\"We recycle\\\"</span> significa?"],
  ["Leaving the water running is good.", "A running tap is good."],
  ["Planting a garden helps bees.", "A garden helps bees."],

  // Cinema
  ["Nala is going to the cinema today!", "Nala goes to the cinema today!"],
  ["A movie with lots of exciting events.", "A movie has lots of exciting events."], // if it's a statement

  // Amusement
  ["Have you ever been on a Ferris wheel?", "Did you go on a Ferris wheel?"],
  ["Have you ever eaten pink cotton candy?", "Did you eat pink cotton candy?"],
  ["I like throwing rings to win a bear.", "I throw rings to win a bear."],
  ["She sees a giant Ferris wheel spinning slowly.", "She sees a giant Ferris wheel spin slowly."],

  // Home
  ["Everyone is helping to clean the home.", "Everyone helps to clean the home."],
  ["Mom is sweeping the floor with a broom.", "Mom sweeps the floor with a broom."],
  ["Dad is washing the dishes in the kitchen.", "Dad washes the dishes in the kitchen."],
  ["Helping at home is good for the family.", "Help at home is good for the family."],

  // Camping
  ["Have you ever made a campfire?", "Did you make a campfire?"],
  ["Have you seen a bear?", "Did you see a bear?"],
  ["Have you ever slept in a tent?", "Did you sleep in a tent?"],

  // Tech
  ["what are you listening to on your headphones?", "what do you listen to on your headphones?"],
  ["I am listening to my favorite playlist, Nala!", "I listen to my favorite playlist, Nala!"],
  ["Have you ever been to a concert of this singer?", "Did you go to a concert of this singer?"],
  ["Have you ever broken a screen?", "Did you break a screen?"],
  ["Have you ever lost your phone charger?", "Did you lose your phone charger?"],
  
  // Sentence arrays with Present Continuous / Future
  ['"She",\n          "is",\n          "listening"', '"She",\n          "listens"'],
  ['"They",\n          "will",\n          "stay"', '"They",\n          "stayed"']
];

let modifiedData = data;
replacements.forEach(rep => {
  // Use a global replacement if the string appears multiple times (like in translation vs english)
  // or just replace all instances.
  modifiedData = modifiedData.split(rep[0]).join(rep[1]);
});

fs.writeFileSync('js/data.js', modifiedData);
console.log('Replaced sentences.');

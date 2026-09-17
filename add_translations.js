const fs = require('fs');

const ptTranslations = {
  "Red": "Vermelho", "Blue": "Azul", "Yellow": "Amarelo", "Green": "Verde", "Pink": "Rosa", 
  "Orange": "Laranja", "Purple": "Roxo", "Black": "Preto", "White": "Branco", "Brown": "Marrom",
  "Dog": "Cachorro", "Cat": "Gato", "Bird": "Pássaro", "Fish": "Peixe", "Rabbit": "Coelho", 
  "Turtle": "Tartaruga", "Lion": "Leão", "Elephant": "Elefante", "Monkey": "Macaco", "Tiger": "Tigre",
  "One": "Um", "Two": "Dois", "Three": "Três", "Four": "Quatro", "Five": "Cinco", 
  "Six": "Seis", "Seven": "Sete", "Eight": "Oito", "Nine": "Nove", "Ten": "Dez",
  "Mommy": "Mamãe", "Daddy": "Papai", "Brother": "Irmão", "Sister": "Irmã", "Baby": "Bebê", 
  "Grandpa": "Vovô", "Grandma": "Vovó", "Uncle": "Tio", "Aunt": "Tia", "Cousin": "Primo",
  "Work out": "Malhar", "Get dressed": "Vestir-se", "Commute": "Ir para o trabalho", "Prepare": "Preparar", "Schedule": "Agendar", 
  "Organize": "Organizar", "Unwind": "Relaxar", "Consistency": "Consistência", "Refresh": "Atualizar", "Fall asleep": "Adormecer", 
  "Wake up": "Acordar", "Shower": "Banho", "Breakfast": "Café da manhã", "Evening": "Noite",
  "Traveled": "Viajou", "Discovered": "Descobriu", "Encountered": "Encontrou", "Experienced": "Experimentou", "Bought": "Comprou", 
  "Enjoyed": "Aproveitou", "Realized": "Percebeu", "Captured": "Capturou", "Returned": "Retornou", "Fascinating": "Fascinante",
  "Apple": "Maçã", "Banana": "Banana", "Bread": "Pão", "Milk": "Leite", "Water": "Água", 
  "Cheese": "Queijo", "Chicken": "Frango", "Pizza": "Pizza", "Cake": "Bolo", "Cookie": "Biscoito",
  "Head": "Cabeça", "Shoulders": "Ombros", "Knees": "Joelhos", "Toes": "Dedos do pé", "Eyes": "Olhos", 
  "Ears": "Orelhas", "Mouth": "Boca", "Nose": "Nariz", "Hands": "Mãos", "Feet": "Pés",
  "Airport": "Aeroporto", "Passport": "Passaporte", "Luggage": "Bagagem", "Tourist": "Turista", "Souvenir": "Lembrança", 
  "Abroad": "No exterior", "Guide": "Guia", "Explored": "Explorou", "Flown": "Voou",
  "Recycle": "Reciclar", "Environment": "Meio ambiente", "Pollution": "Poluição", "Earth": "Terra", "Plastic": "Plástico", 
  "Nature": "Natureza", "Protect": "Proteger", "Solar": "Solar", "Climate": "Clima", "Waste": "Lixo",
  "Pencil": "Lápis", "Book": "Livro", "Teacher": "Professor(a)", "Desk": "Mesa", "Backpack": "Mochila", 
  "School": "Escola", "Eraser": "Borracha", "Notebook": "Caderno", "Pen": "Caneta", "Ruler": "Régua", 
  "Board": "Quadro", "Student": "Aluno(a)", "Scissors": "Tesoura", "Glue": "Cola", "Paper": "Papel",
  "Movie": "Filme", "Popcorn": "Pipoca", "Ticket": "Ingresso", "Screen": "Tela", "Seat": "Assento", 
  "Glasses": "Óculos", "Comedy": "Comédia", "Action": "Ação", "Cartoon": "Desenho", "Drink": "Bebida",
  "Roller Coaster": "Montanha-russa", "Ferris Wheel": "Roda-gigante", "Carousel": "Carrossel", "Cotton Candy": "Algodão doce", "Balloon": "Balão", 
  "Prize": "Prêmio", "Tent": "Tenda", "Game": "Jogo",
  "House": "Casa", "Kitchen": "Cozinha", "Bedroom": "Quarto", "Bathroom": "Banheiro", "Living Room": "Sala de estar", 
  "Broom": "Vassoura", "Dishes": "Louças", "Trash": "Lixo", "Sofa": "Sofá", "Window": "Janela"
};

const dataFile = 'js/data.js';
const code = fs.readFileSync(dataFile, 'utf8');

const iifeStart = code.indexOf('// Auto-apply background image based on selected module');
const objStr = code.substring(0, iifeStart);
const iifeStr = code.substring(iifeStart);

let safeObjStr = objStr.replace('const gameData =', 'gameData =');
let gameData;
eval(safeObjStr);

// Add pt property to all matching elements if they don't have it
for (const key in gameData) {
  if (gameData[key].matching) {
    gameData[key].matching.forEach(m => {
      if (ptTranslations[m.word]) {
        m.pt = ptTranslations[m.word];
      }
    });
  }
}

const newContent = "const gameData = " + JSON.stringify(gameData, null, 2) + ";\n\n" + iifeStr;
fs.writeFileSync(dataFile, newContent);
console.log("Updated data.js with Portuguese translations for matching array.");

const fs = require('fs');

const newSentences = {
  colors: [
    { words: ["The", "bright", "yellow", "sun", "shines", "in", "the", "sky"], translation: "O sol amarelo brilhante brilha no céu" },
    { words: ["My", "favorite", "color", "is", "a", "very", "dark", "blue"], translation: "Minha cor favorita é um azul muito escuro" },
    { words: ["She", "always", "wears", "a", "beautiful", "red", "summer", "dress"], translation: "Ela sempre usa um lindo vestido vermelho de verão" },
    { words: ["The", "tall", "trees", "have", "many", "fresh", "green", "leaves"], translation: "As árvores altas têm muitas folhas verdes frescas" },
    { words: ["I", "want", "to", "paint", "my", "bedroom", "walls", "pink"], translation: "Eu quero pintar as paredes do meu quarto de rosa" },
    { words: ["He", "drives", "a", "fast", "black", "car", "every", "day"], translation: "Ele dirige um carro preto rápido todos os dias" },
    { words: ["They", "found", "a", "small", "white", "cat", "outside", "today"], translation: "Eles encontraram um gatinho branco lá fora hoje" },
    { words: ["The", "sweet", "orange", "juice", "is", "on", "the", "table"], translation: "O suco de laranja doce está na mesa" },
    { words: ["Her", "new", "purple", "shoes", "are", "very", "comfortable", "now"], translation: "Os novos sapatos roxos dela são muito confortáveis agora" },
    { words: ["We", "saw", "a", "big", "brown", "dog", "running", "fast"], translation: "Nós vimos um cachorro marrom grande correndo rápido" }
  ],
  animals: [
    { words: ["The", "big", "brown", "bear", "sleeps", "in", "the", "winter"], translation: "O grande urso marrom dorme no inverno" },
    { words: ["Small", "birds", "sing", "beautiful", "songs", "in", "the", "morning"], translation: "Pássaros pequenos cantam canções bonitas de manhã" },
    { words: ["My", "lazy", "cat", "loves", "sleeping", "on", "the", "sofa"], translation: "Meu gato preguiçoso adora dormir no sofá" },
    { words: ["The", "strong", "lion", "runs", "very", "fast", "to", "hunt"], translation: "O leão forte corre muito rápido para caçar" },
    { words: ["Elephants", "use", "their", "long", "trunks", "to", "drink", "water"], translation: "Os elefantes usam suas longas trombas para beber água" },
    { words: ["Many", "colorful", "fish", "swim", "together", "in", "the", "river"], translation: "Muitos peixes coloridos nadam juntos no rio" },
    { words: ["The", "funny", "monkey", "jumps", "from", "tree", "to", "tree"], translation: "O macaco engraçado pula de árvore em árvore" },
    { words: ["We", "saw", "a", "slow", "turtle", "walking", "around", "yesterday"], translation: "Nós vimos uma tartaruga lenta andando por aí ontem" },
    { words: ["A", "dangerous", "tiger", "has", "beautiful", "black", "and", "orange", "stripes"], translation: "Um tigre perigoso tem belas listras pretas e laranjas" },
    { words: ["The", "small", "rabbit", "eats", "fresh", "carrots", "every", "day"], translation: "O coelhinho come cenouras frescas todos os dias" }
  ],
  numbers: [
    { words: ["I", "have", "exactly", "seven", "heavy", "books", "in", "my", "bag"], translation: "Eu tenho exatamente sete livros pesados na minha mochila" },
    { words: ["There", "are", "three", "apples", "and", "four", "sweet", "bananas"], translation: "Há três maçãs e quatro bananas doces" },
    { words: ["My", "little", "brother", "is", "only", "five", "years", "old"], translation: "Meu irmãozinho tem apenas cinco anos de idade" },
    { words: ["We", "need", "to", "buy", "ten", "eggs", "for", "the", "cake"], translation: "Nós precisamos comprar dez ovos para o bolo" },
    { words: ["She", "has", "two", "dogs", "and", "one", "black", "cat"], translation: "Ela tem dois cachorros e um gato preto" },
    { words: ["He", "drank", "eight", "glasses", "of", "water", "today", "morning"], translation: "Ele bebeu oito copos de água hoje de manhã" },
    { words: ["They", "will", "stay", "here", "for", "about", "nine", "days"], translation: "Eles vão ficar aqui por cerca de nove dias" },
    { words: ["I", "can", "see", "six", "birds", "flying", "very", "high"], translation: "Eu posso ver seis pássaros voando muito alto" },
    { words: ["We", "have", "zero", "apples", "left", "in", "the", "kitchen"], translation: "Nós não temos maçãs sobrando na cozinha" },
    { words: ["Please", "give", "me", "just", "one", "slice", "of", "pizza"], translation: "Por favor, me dê apenas uma fatia de pizza" }
  ],
  family: [
    { words: ["My", "young", "brother", "likes", "playing", "with", "his", "friends"], translation: "Meu irmão mais novo gosta de brincar com os amigos" },
    { words: ["We", "always", "visit", "our", "grandparents", "on", "the", "weekend"], translation: "Nós sempre visitamos nossos avós no fim de semana" },
    { words: ["Her", "mother", "cooks", "very", "delicious", "food", "for", "us"], translation: "A mãe dela cozinha uma comida muito deliciosa para nós" },
    { words: ["His", "father", "works", "hard", "in", "a", "big", "office"], translation: "O pai dele trabalha duro em um grande escritório" },
    { words: ["My", "older", "sister", "is", "studying", "at", "the", "university"], translation: "Minha irmã mais velha está estudando na universidade" },
    { words: ["Our", "uncle", "lives", "in", "a", "beautiful", "house", "nearby"], translation: "Nosso tio mora em uma casa bonita por perto" },
    { words: ["My", "aunt", "bought", "a", "nice", "gift", "for", "me"], translation: "Minha tia comprou um presente legal para mim" },
    { words: ["I", "love", "spending", "free", "time", "with", "my", "cousins"], translation: "Eu adoro passar o tempo livre com meus primos" },
    { words: ["The", "new", "baby", "sleeps", "a", "lot", "every", "day"], translation: "O bebê novo dorme muito todos os dias" },
    { words: ["My", "happy", "family", "enjoys", "eating", "dinner", "together", "always"], translation: "Minha família feliz gosta de jantar junta sempre" }
  ],
  school: [
    { words: ["The", "smart", "student", "reads", "a", "very", "interesting", "book"], translation: "O aluno inteligente lê um livro muito interessante" },
    { words: ["I", "always", "do", "my", "English", "homework", "after", "school"], translation: "Eu sempre faço minha lição de inglês depois da escola" },
    { words: ["Our", "kind", "teacher", "explains", "the", "math", "lessons", "well"], translation: "Nosso professor gentil explica bem as lições de matemática" },
    { words: ["She", "writes", "new", "words", "in", "her", "blue", "notebook"], translation: "Ela escreve novas palavras em seu caderno azul" },
    { words: ["We", "need", "to", "bring", "a", "pencil", "and", "eraser"], translation: "Nós precisamos trazer um lápis e uma borracha" },
    { words: ["The", "heavy", "backpack", "is", "full", "of", "school", "books"], translation: "A mochila pesada está cheia de livros escolares" },
    { words: ["Please", "look", "at", "the", "white", "board", "right", "now"], translation: "Por favor, olhe para o quadro branco agora mesmo" },
    { words: ["You", "can", "use", "these", "scissors", "to", "cut", "paper"], translation: "Você pode usar esta tesoura para cortar papel" },
    { words: ["I", "sit", "at", "my", "desk", "to", "study", "hard"], translation: "Eu sento na minha mesa para estudar muito" },
    { words: ["He", "uses", "a", "ruler", "to", "draw", "straight", "lines"], translation: "Ele usa uma régua para desenhar linhas retas" }
  ],
  routine: [
    { words: ["She", "always", "wakes", "up", "very", "early", "every", "morning"], translation: "Ela sempre acorda muito cedo todas as manhãs" },
    { words: ["I", "take", "a", "quick", "shower", "before", "my", "breakfast"], translation: "Eu tomo um banho rápido antes do meu café da manhã" },
    { words: ["He", "brushes", "his", "teeth", "after", "eating", "sweet", "food"], translation: "Ele escova os dentes depois de comer comida doce" },
    { words: ["We", "usually", "eat", "a", "big", "breakfast", "together", "daily"], translation: "Nós geralmente tomamos um grande café da manhã juntos diariamente" },
    { words: ["I", "get", "dressed", "quickly", "to", "go", "to", "work"], translation: "Eu me visto rapidamente para ir trabalhar" },
    { words: ["She", "reads", "a", "nice", "book", "before", "falling", "asleep"], translation: "Ela lê um livro legal antes de adormecer" },
    { words: ["They", "often", "watch", "television", "in", "the", "late", "evening"], translation: "Eles costumam assistir televisão no final da noite" },
    { words: ["I", "like", "to", "relax", "and", "unwind", "after", "school"], translation: "Eu gosto de relaxar e descansar depois da escola" },
    { words: ["He", "organizes", "his", "busy", "schedule", "for", "the", "week"], translation: "Ele organiza sua agenda lotada para a semana" },
    { words: ["We", "go", "to", "sleep", "around", "ten", "o'clock", "nightly"], translation: "Nós vamos dormir por volta das dez horas todas as noites" }
  ],
  past: [
    { words: ["We", "went", "to", "the", "big", "park", "yesterday", "afternoon"], translation: "Nós fomos ao parque grande ontem à tarde" },
    { words: ["He", "played", "football", "with", "his", "friends", "last", "weekend"], translation: "Ele jogou futebol com os amigos no fim de semana passado" },
    { words: ["I", "saw", "a", "very", "beautiful", "bird", "this", "morning"], translation: "Eu vi um pássaro muito bonito hoje de manhã" },
    { words: ["She", "ate", "a", "delicious", "chocolate", "cake", "last", "night"], translation: "Ela comeu um bolo de chocolate delicioso ontem à noite" },
    { words: ["They", "traveled", "to", "a", "fascinating", "new", "city", "recently"], translation: "Eles viajaram para uma cidade nova fascinante recentemente" },
    { words: ["We", "bought", "many", "cool", "souvenirs", "during", "our", "trip"], translation: "Nós compramos muitas lembranças legais durante a nossa viagem" },
    { words: ["He", "discovered", "an", "interesting", "old", "book", "at", "home"], translation: "Ele descobriu um livro antigo interessante em casa" },
    { words: ["I", "experienced", "something", "really", "amazing", "a", "few", "days", "ago"], translation: "Eu experimentei algo realmente incrível alguns dias atrás" },
    { words: ["She", "returned", "from", "her", "long", "journey", "very", "tired"], translation: "Ela retornou de sua longa jornada muito cansada" },
    { words: ["We", "enjoyed", "the", "warm", "sunny", "weather", "last", "summer"], translation: "Nós aproveitamos o clima quente e ensolarado no verão passado" }
  ],
  foods: [
    { words: ["I", "really", "love", "eating", "hot", "pizza", "for", "dinner"], translation: "Eu realmente amo comer pizza quente no jantar" },
    { words: ["She", "drinks", "cold", "water", "after", "running", "every", "morning"], translation: "Ela bebe água fria depois de correr todas as manhãs" },
    { words: ["We", "always", "buy", "fresh", "apples", "and", "sweet", "bananas"], translation: "Nós sempre compramos maçãs frescas e bananas doces" },
    { words: ["He", "wants", "to", "eat", "some", "cheese", "and", "bread"], translation: "Ele quer comer um pouco de queijo e pão" },
    { words: ["They", "had", "fried", "chicken", "for", "their", "tasty", "lunch"], translation: "Eles comeram frango frito no seu almoço saboroso" },
    { words: ["I", "usually", "drink", "a", "glass", "of", "warm", "milk"], translation: "Eu costumo beber um copo de leite morno" },
    { words: ["She", "baked", "a", "delicious", "chocolate", "cake", "for", "him"], translation: "Ela assou um delicioso bolo de chocolate para ele" },
    { words: ["We", "enjoy", "eating", "sweet", "cookies", "in", "the", "afternoon"], translation: "Nós gostamos de comer biscoitos doces à tarde" },
    { words: ["A", "yellow", "banana", "is", "a", "very", "healthy", "snack"], translation: "Uma banana amarela é um lanche muito saudável" },
    { words: ["I", "never", "eat", "heavy", "food", "late", "at", "night"], translation: "Eu nunca como comida pesada tarde da noite" }
  ],
  body: [
    { words: ["You", "have", "two", "small", "eyes", "and", "one", "nose"], translation: "Você tem dois olhos pequenos e um nariz" },
    { words: ["He", "washes", "his", "hands", "before", "eating", "his", "dinner"], translation: "Ele lava as mãos antes de comer seu jantar" },
    { words: ["She", "listens", "to", "loud", "music", "with", "her", "ears"], translation: "Ela escuta música alta com seus ouvidos" },
    { words: ["I", "use", "my", "mouth", "to", "speak", "and", "eat"], translation: "Eu uso minha boca para falar e comer" },
    { words: ["We", "walk", "and", "run", "using", "our", "strong", "feet"], translation: "Nós andamos e corremos usando nossos pés fortes" },
    { words: ["Please", "touch", "your", "head", "and", "then", "your", "shoulders"], translation: "Por favor, toque sua cabeça e depois seus ombros" },
    { words: ["He", "hurt", "his", "knees", "when", "he", "fell", "down"], translation: "Ele machucou os joelhos quando caiu" },
    { words: ["You", "have", "five", "toes", "on", "each", "left", "foot"], translation: "Você tem cinco dedos em cada pé esquerdo" },
    { words: ["She", "has", "very", "long", "and", "beautiful", "brown", "hair"], translation: "Ela tem cabelos castanhos muito longos e bonitos" },
    { words: ["I", "brush", "my", "white", "teeth", "twice", "a", "day"], translation: "Eu escovo meus dentes brancos duas vezes por dia" }
  ],
  travel: [
    { words: ["We", "will", "fly", "to", "a", "beautiful", "new", "country"], translation: "Nós voaremos para um lindo país novo" },
    { words: ["He", "forgot", "his", "blue", "passport", "at", "his", "house"], translation: "Ele esqueceu seu passaporte azul na casa dele" },
    { words: ["I", "need", "to", "pack", "my", "heavy", "luggage", "now"], translation: "Eu preciso arrumar minha bagagem pesada agora" },
    { words: ["The", "happy", "tourist", "takes", "many", "photos", "every", "day"], translation: "O turista feliz tira muitas fotos todos os dias" },
    { words: ["She", "bought", "a", "nice", "souvenir", "for", "her", "mother"], translation: "Ela comprou uma lembrança legal para sua mãe" },
    { words: ["We", "wait", "at", "the", "large", "airport", "for", "hours"], translation: "Nós esperamos no aeroporto grande por horas" },
    { words: ["The", "friendly", "guide", "showed", "us", "the", "old", "city"], translation: "O guia amigável nos mostrou a cidade velha" },
    { words: ["I", "want", "to", "travel", "abroad", "next", "summer", "vacation"], translation: "Eu quero viajar para o exterior nas próximas férias de verão" },
    { words: ["They", "explored", "the", "dark", "cave", "during", "their", "trip"], translation: "Eles exploraram a caverna escura durante a viagem deles" },
    { words: ["We", "have", "flown", "on", "a", "very", "big", "airplane"], translation: "Nós voamos em um avião muito grande" }
  ],
  eco: [
    { words: ["We", "should", "always", "recycle", "plastic", "bottles", "and", "paper"], translation: "Nós devemos sempre reciclar garrafas plásticas e papel" },
    { words: ["Planting", "small", "trees", "helps", "to", "protect", "our", "environment"], translation: "Plantar árvores pequenas ajuda a proteger nosso meio ambiente" },
    { words: ["Pollution", "is", "very", "bad", "for", "our", "beautiful", "Earth"], translation: "A poluição é muito ruim para a nossa bela Terra" },
    { words: ["We", "must", "save", "water", "and", "protect", "wild", "nature"], translation: "Nós devemos economizar água e proteger a natureza selvagem" },
    { words: ["Solar", "energy", "is", "a", "clean", "and", "safe", "power"], translation: "A energia solar é uma força limpa e segura" },
    { words: ["Do", "not", "throw", "your", "plastic", "waste", "away", "here"], translation: "Não jogue o seu lixo plástico fora aqui" },
    { words: ["Climate", "change", "is", "a", "big", "problem", "for", "us"], translation: "As mudanças climáticas são um grande problema para nós" },
    { words: ["We", "can", "use", "solar", "panels", "to", "get", "energy"], translation: "Nós podemos usar painéis solares para obter energia" },
    { words: ["Keeping", "the", "environment", "clean", "is", "our", "most", "important", "job"], translation: "Manter o meio ambiente limpo é o nosso trabalho mais importante" },
    { words: ["I", "always", "turn", "off", "the", "lights", "at", "night"], translation: "Eu sempre apago as luzes à noite" }
  ],
  cinema: [
    { words: ["We", "bought", "our", "tickets", "before", "watching", "the", "movie"], translation: "Nós compramos nossos ingressos antes de assistir ao filme" },
    { words: ["The", "new", "comedy", "movie", "was", "very", "funny", "yesterday"], translation: "O novo filme de comédia foi muito engraçado ontem" },
    { words: ["I", "love", "eating", "sweet", "popcorn", "at", "the", "cinema"], translation: "Eu adoro comer pipoca doce no cinema" },
    { words: ["The", "huge", "screen", "shows", "bright", "and", "clear", "pictures"], translation: "A tela enorme mostra imagens brilhantes e claras" },
    { words: ["He", "found", "a", "good", "seat", "near", "the", "front"], translation: "Ele encontrou um bom assento perto da frente" },
    { words: ["You", "must", "wear", "these", "glasses", "for", "3D", "movies"], translation: "Você deve usar estes óculos para filmes 3D" },
    { words: ["She", "really", "enjoys", "watching", "exciting", "action", "movies", "now"], translation: "Ela realmente gosta de assistir a filmes de ação emocionantes agora" },
    { words: ["My", "little", "brother", "likes", "to", "watch", "funny", "cartoons"], translation: "Meu irmãozinho gosta de assistir a desenhos engraçados" },
    { words: ["I", "drank", "a", "cold", "soda", "during", "the", "film"], translation: "Eu bebi um refrigerante gelado durante o filme" },
    { words: ["We", "stayed", "until", "the", "very", "end", "of", "it"], translation: "Nós ficamos até o finalzinho dele" }
  ],
  amusement: [
    { words: ["I", "love", "riding", "the", "fast", "roller", "coaster", "today"], translation: "Eu adoro andar na montanha-russa rápida hoje" },
    { words: ["She", "won", "a", "very", "big", "prize", "at", "the", "park"], translation: "Ela ganhou um prêmio muito grande no parque" },
    { words: ["We", "can", "see", "everything", "from", "the", "Ferris", "wheel"], translation: "Nós podemos ver tudo da roda-gigante" },
    { words: ["The", "beautiful", "carousel", "has", "many", "painted", "wooden", "horses"], translation: "O lindo carrossel tem muitos cavalos de madeira pintados" },
    { words: ["He", "bought", "pink", "cotton", "candy", "for", "his", "sister"], translation: "Ele comprou algodão doce rosa para a irmã dele" },
    { words: ["I", "got", "a", "red", "balloon", "at", "the", "fair"], translation: "Eu ganhei um balão vermelho na feira" },
    { words: ["They", "played", "a", "fun", "game", "inside", "the", "tent"], translation: "Eles jogaram um jogo divertido dentro da tenda" },
    { words: ["The", "amusement", "park", "is", "always", "noisy", "and", "crowded"], translation: "O parque de diversões é sempre barulhento e lotado" },
    { words: ["We", "spent", "all", "day", "riding", "the", "crazy", "attractions"], translation: "Nós passamos o dia todo andando nas atrações loucas" },
    { words: ["It", "was", "the", "best", "and", "most", "exciting", "afternoon"], translation: "Foi a tarde melhor e mais emocionante" }
  ],
  home: [
    { words: ["We", "usually", "watch", "television", "in", "the", "living", "room"], translation: "Nós geralmente assistimos televisão na sala de estar" },
    { words: ["He", "helps", "his", "mother", "to", "clean", "the", "kitchen"], translation: "Ele ajuda a mãe a limpar a cozinha" },
    { words: ["I", "always", "sleep", "well", "in", "my", "cozy", "bedroom"], translation: "Eu sempre durmo bem no meu quarto aconchegante" },
    { words: ["She", "is", "taking", "a", "hot", "shower", "in", "the", "bathroom"], translation: "Ela está tomando um banho quente no banheiro" },
    { words: ["We", "sit", "on", "the", "soft", "sofa", "every", "evening"], translation: "Nós sentamos no sofá macio todas as noites" },
    { words: ["You", "need", "to", "use", "a", "broom", "right", "now"], translation: "Você precisa usar uma vassoura agora mesmo" },
    { words: ["I", "will", "wash", "all", "the", "dirty", "dishes", "later"], translation: "Eu vou lavar todas as louças sujas mais tarde" },
    { words: ["Please", "take", "out", "the", "smelly", "trash", "for", "me"], translation: "Por favor, leve o lixo fedido para fora para mim" },
    { words: ["He", "opened", "the", "big", "window", "to", "get", "air"], translation: "Ele abriu a janela grande para pegar ar" },
    { words: ["Our", "new", "house", "has", "a", "beautiful", "green", "garden"], translation: "Nossa casa nova tem um lindo jardim verde" }
  ]
};

const dataFile = 'js/data.js';
const code = fs.readFileSync(dataFile, 'utf8');

const iifeStart = code.indexOf('// Auto-apply background image based on selected module');
const objStr = code.substring(0, iifeStart);
const iifeStr = code.substring(iifeStart);

let safeObjStr = objStr.replace('const gameData =', 'gameData =');
let gameData;
eval(safeObjStr);

// Replace sentence arrays
for (const module in newSentences) {
  if (gameData[module]) {
    // We completely replace the 'sentence' array to ensure all items are exactly 7-8 words, A2 level.
    gameData[module].sentence = newSentences[module];
  }
}

const newContent = "const gameData = " + JSON.stringify(gameData, null, 2) + ";\n\n" + iifeStr;
fs.writeFileSync(dataFile, newContent);
console.log("Successfully replaced sentence data for all modules with 7-8 word A2 sentences!");

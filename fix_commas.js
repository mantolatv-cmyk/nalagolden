const fs = require('fs');
let data = fs.readFileSync('js/data.js', 'utf8');

data = data.replace(/\]\s*"bgImage"/g, '],\n    "bgImage"');

fs.writeFileSync('js/data.js', data);
console.log('Fixed missing commas');

const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));
files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const regex = /<div class="score-display">[\s\S]*?<\/div>/g;
  
  const newContent = content.replace(regex, '');
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${file}`);
  }
});
console.log('done');

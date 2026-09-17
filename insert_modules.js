const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'js', 'data.js');
const newContentPath = path.join('C:\\Users\\martm\\.gemini\\antigravity-ide\\brain\\26a46dac-5757-4e42-9e30-78aa9a1b640b\\scratch', 'camping_tech_content.json');

const dataStr = fs.readFileSync(dataPath, 'utf8');
const newContentStr = fs.readFileSync(newContentPath, 'utf8');

const newContent = JSON.parse(newContentStr);

let injectedData = "";
for (const key in newContent) {
  injectedData += `,\n  "${key}": ` + JSON.stringify(newContent[key], null, 2).replace(/\n/g, '\n  ');
}

const regex = /};\s*\/\/\s*Auto-apply/m;
const match = dataStr.match(regex);
if (match) {
  const index = match.index;
  const before = dataStr.substring(0, index);
  const after = dataStr.substring(index);
  const updatedData = before + injectedData + "\n" + after;
  fs.writeFileSync(dataPath, updatedData, 'utf8');
  console.log("Modules added successfully via regex!");
} else {
  console.log("Could not find the injection point.");
}

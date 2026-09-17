const fs = require('fs');
const lines = fs.readFileSync('js/data.js', 'utf8').split('\n');
const results = [];
lines.forEach((l, i) => {
  const lower = l.toLowerCase();
  if (lower.includes('have you') || lower.includes('has ') || lower.includes(' will ') || lower.includes(' would ') || lower.includes('ing ') || lower.includes('ing"') || lower.includes('if ')) {
    results.push((i + 1) + ': ' + l.trim());
  }
});
fs.writeFileSync('advanced_tenses.txt', results.join('\n'));

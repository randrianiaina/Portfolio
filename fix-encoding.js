const fs = require('fs');
const files = process.argv.slice(2);
for (const file of files) {
  const original = fs.readFileSync(file, 'utf8');
  const repaired = Buffer.from(original, 'latin1').toString('utf8');
  fs.writeFileSync(file, repaired, { encoding: 'utf8' });
  console.log(`${file}: repaired ${original.includes('Ã') || original.includes('Â') || original.includes('â€')}`);
}

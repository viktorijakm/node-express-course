// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i++) {
//   writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
// }

const { writeFileSync } = require('fs');
const path = require('path');

// The path for the big.txt file
const filePath = path.join(__dirname, 'content', 'big.txt');

// Clear the file before starting (if it already exists)
writeFileSync(filePath, '', { flag: 'w' });

// Write 100 lines to the file
for (let i = 0; i < 90; i++) {
  writeFileSync(filePath, `hello beautiful world ${i}\n`, { flag: 'a' });
}

console.log('big.txt file created with 10,000 lines!');

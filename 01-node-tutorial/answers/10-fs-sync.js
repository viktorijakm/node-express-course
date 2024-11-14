// const { readFileSync, writeFileSync } = require('fs')
// const path = require ('path');

// const first = readFileSync(path.join(__dirname,'content/first.txt'),'utf8')
// const second = readFileSync(path.join(__dirname,'content/second.txt'),'utf8')

// console.log(first, second)

// writeFileSync(
//    path.join(__dirname, 'content/result-sync.txt'),
//     `Here is our example: ${first}, ${second}`
// ) ;

// console.log('Confusing');

const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

// the path for the temporary directory and file
const filePath = path.join(__dirname, 'temporary', 'fileA.txt');

// 3 lines to the file with append flag
writeFileSync(filePath, 'First line of text\n', { flag: 'a' });
writeFileSync(filePath, 'Second line of text\n', { flag: 'a' });
writeFileSync(filePath, 'Third line of text\n', { flag: 'a' });

// Read the file and log its contents
const content = readFileSync(filePath, 'utf8');
console.log(content);

console.log('Something new');

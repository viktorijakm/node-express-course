
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
// const stream = createReadStream('./content/big.txt')

// stream.on('data', (result) => {
//   console.log(result)
// })
// stream.on('error', (err) => console.log(err))


const path = require('path');
const { createReadStream } = require('fs');

const filePath = path.join(__dirname,'content', 'big.txt');

const stream = createReadStream( filePath ,{
    encoding: "utf-8",
    highWaterMark: 200
});

let counter = 0;

stream.on('data', (chunk) => {
    counter++;
    console.log(`Received for now chunk ${counter}: ${chunk}`);
  });

  stream.on('end', () => {
    console.log(`Stream finished. Total chunks received: ${counter}`);
  });

  stream.on('error', (err) => {
    console.log('An error occurred:', err);
  });
//   node 16-streams.js
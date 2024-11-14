console.log('Current directory:', __dirname);

const path = require('path');
const { writeFile, readFile } = require("fs").promises;

const filePath = path.join(__dirname, 'temp.txt');

writeFile(filePath, "\n Write the first line of this text\n", { flag: "a" })
  .then(() => {
    console.log("First line written");
    return writeFile(filePath, "Start the second line of this text\n", { flag: "a" });
  })
  .then(() => {
    console.log("Second line written");
    return writeFile(filePath, "Here is the third line of this text\n", { flag: "a" });
  })
  .then(() => {
    console.log("Third line written");
    return readFile(filePath, "utf8");
  })
  .then((data) => {
    console.log("File content:\n", data); 
  })
  .catch((error) => {
    console.log("An error occurred: ", error); 
  });


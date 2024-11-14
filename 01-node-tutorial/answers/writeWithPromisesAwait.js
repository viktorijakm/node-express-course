console.log('Current directory:', __dirname);

const path = require('path');
const { writeFile, readFile } = require("fs").promises;

const filePath = path.join(__dirname, 'temp.txt'); 

const writer = async () => {
  try {
    await writeFile(filePath, "First line of text\n", "utf-8");
    await writeFile(filePath, "Second line of this text\n", { flag: "a" });
    await writeFile(filePath, "Third line of text\n", { flag: "a" });
    console.log("File written successfully.");
  } catch (error) {
    console.log("An error occurred writing to file:", error);
  }
};

const reader = async () => {
  try {
    const data = await readFile(filePath, "utf-8");
    console.log("Data read:\n", data);
  } catch (err) {
    console.log("An error occurred while reading from the file:", err);
  }
};

const readWrite = async () => {
    await writer();
    await reader();
};

readWrite();
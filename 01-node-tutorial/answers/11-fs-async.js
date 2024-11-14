// const { readFile, writeFile } = require("fs");
// const path = require("path");

// readFile(path.join(__dirname, "content/first.txt"), "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const uno = result;
//   readFile(
//     path.join(__dirname, "content/second.txt"),
//     "utf8",
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       const secundo = result;
//       writeFile(
//         path.join(__dirname, "content/result-async.txt"),
//         `Here is our second example: ${uno}, ${secundo}`,
//         (err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("Congrats");
//           }
//         }
//       );
//     }
//   );
// });

const { readFile, writeFile } = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "temporary", "fileB.txt");

//  first line (without the append flag)
writeFile(filePath, "First line of text\n", (err) => {
  if (err) {
    console.log("Error writing first line:", err);
    return;
  }
  console.log("First line written");

  // second line (with the append flag)
  writeFile(filePath, "Second line of text\n", { flag: "a" }, (err) => {
    if (err) {
      console.log("Error writing second line:", err);
      return;
    }
    console.log("Second line written");

    //  third line (with the append flag)
    writeFile(filePath, "Third line of text\n", { flag: "a" }, (err) => {
      if (err) {
        console.log("Error writing third line:", err);
        return;
      }
      console.log("Third line written");

      //  read the file to verify
      readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.log("Error reading the file:", err);
          return;
        }
        console.log("File contents:\n", data);
      });
    });
  });
});


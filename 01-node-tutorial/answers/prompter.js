const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// Variables for the game
let targetNumber = Math.floor(Math.random() * 100) + 1;  // random number between 1 and 100
let message = "Please enter your number:";
let attempts = 0;

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <h1> Guess the number </h1>
  <p>${message}</p>
  <p>This is your ${attempts} guess</p>
  <form method="POST">
  <input name="guess" type='number' min='1' max='100' required />
  <button type="submit">Submit your Guess</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      // console.log("The body of the post is ", body);
      const guess = parseInt(body["guess"], 10); // Convert guess to number
      attempts++;

      // here, you can add your own logic
      if (guess < targetNumber) {
        message = `Too low! Try again.`;
      } else if (guess > targetNumber) {
        message = `Too high! Try again.`;
      } else {
        message = `Congratulations! You guessed the number ${targetNumber} correctly! It took you ${attempts} attempts.`;
        // Reset the game after correct guess
        targetNumber = Math.floor(Math.random() * 100) + 1;  // Generate a new random number
        attempts = 0;  // Reset attempts count
      }

      // if (body["item"]) {
      //   item = body["item"];
      // } else {
      //   item = "Nothing was entered.";
      // }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");

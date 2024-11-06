const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello my dear friends!");
  }
  if (req.url === "/about") {
    res.end("Dive deep in our story.");
    return;
  }

  res.end(`
  <h1>Wrong way!</h1>
  <p> This info is not in our history or not yet in our thoughts. </p>
 <a href='/'> Sweet way back home<a>
    `);
});

server.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000");
  });

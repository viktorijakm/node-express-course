////////  Comented is http logic
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// const http = require("http");
// const { readFileSync } = require("fs");

///////////////////////////////////////////////////////////////////
// // get all files
// const homePage = readFileSync("./public/index.html");
// const homeStyle = readFileSync("./public/style.css");
// const homeLogic = readFileSync("./public/browser-app.js");

// const server = http.createServer((req, res) => {
//     const url = req.url;

// home page
//   if (url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(homePage);
//     res.end();
//   }
//   // about page
//   else if (url === '/about') {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write('<h1>About page</h1>');
//     res.end();
//   }
//   // style page
//   else if (url === '/style.css') {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.write(homeStyle);
//     res.end();
//   }
//   // logic page
//   else if (url === '/browser-app.js') {
//     res.writeHead(200, { "content-type": "text/javascript" });
//     res.write(homeLogic);
//     res.end();
//   }
//   // 404 status
//   else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.write("<h1>Page not found</>");
//     res.end();
//   }
// });
// server.listen(3000);
//////////////////////////////////////////////////////////////////

const express = require("express");
const path = require("path");
const { products } = require('./data');
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// // Home page
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
// // About page
// app.get("/about", (req, res) => {
//   res.send("<h1>About page</h1>");
// });
// app.all("*", (req, res) => {
//   res.status(404).send("resource not found");
// });

app.get('/api/v1/test', (req,res)=> {
    res.json({message:'It worked!'});
});
// API to get all products
app.get("/api/v1/products", (req, res) => {
    res.json(products); // Return the products data in JSON format
  });

  /////////////////////////////////////////////////////////////////
  app.get("/api/v1/products/:productID", (req, res) => {
    const idToFind = parseInt(req.params.productID); // Convert the productID to an integer
    // Check if the productID is a valid number
    if (isNaN(idToFind)) {
      return res.status(404).json({ message: "That product was not found." }); // If not a number, return 404 with message
    }
    // Find the product by ID
    const product = products.find((p) => p.id === idToFind);
  
    if (product) {
      res.json(product); // If product is found, return it as JSON
    } else {
      res.status(404).json({ message: "This product does not exist." }); // If product is not found, return 404 with message
    }
  });
  //////////////////////////////////////////////////////////
  // Route to handle search and limit using query parameters
app.get("/api/v1/query", (req, res) => {
    const { search, limit, maxPrice } = req.query; // Get 'search' and 'limit' from the query string
  
    // Filter products based on the search term (if provided)
    let result = products;

    // Filter products based on the 'maxPrice' (if provided)
  if (maxPrice) {
    const priceLimit = parseFloat(maxPrice); // Convert maxPrice to a number
    result = result.filter(product => product.price < priceLimit); // Filter by price
  }

  // Limit the number of products returned (if 'limit' is provided)
  if (limit) {
    result = result.slice(0, parseInt(limit)); // Slice the array to the given limit
  }

  // Return the filtered and/or limited products
  res.json(result);
});
///////////////////////////////////////////////////////////////////
//  404 - Page not found
  app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
 });
// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});


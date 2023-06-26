// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

// our first Route:
app.get("/", (request, response, next) =>
  //   response.send("<h1>Welcome Ironhacker. :)</h1>")
  response.status(500)
);

// Server Started
app.listen(3000, () => console.log("My first app listening on port 3000! "));

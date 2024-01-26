const express = require("express");
const bodyParser = require("body-parser");
const books = require("./books");

const app = express();
app.use(bodyParser.json());

app.use("/api/books", books);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

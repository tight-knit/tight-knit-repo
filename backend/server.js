const express = require("express");
const db = require("./model/db");

const app = express();

const PORT = 3000;

// db.connect();

app.get("/", (req, res) => {
  res.status(200).send("hello");
});



app.listen(`${PORT}`, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;

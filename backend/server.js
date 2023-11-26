const express = require("express");
const db = require("./model/db");
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// db.connect();

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Hello from the server</h1>`);
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.message.err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(`${PORT}`, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;

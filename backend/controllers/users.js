const db = require("../model/db");

//get all users
const getAllUsers = async (req, res, next) => {
  try {
    // create query
    const sqlQuery = `SELECT * FROM "public"."users" LIMIT 100`;
    const response = await db.query(sqlQuery);

    console.log(`===== getAllUsers response: ${response.rows}`);
    res.locals.getAllUsers = response.rows;
    return next();
  } catch (error) {
    console.log("This is the error: ", error);
    next({
      log: "Express error handler caught unknown middleware error",
      message: {
        err: "An error occurred in userController.getAllUsers",
      },
    });
  }
};

//get specific user
const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(`==== id variable: ${id}`);
    // create query
    // SELECT DISTINCT ON (column_name) * FROM users WHERE column_name = $1;

    const sqlQuery = `SELECT DISTINCT ON (user_id) * FROM users WHERE user_id = $1`;
    const response = await db.query(sqlQuery, [id]);

    console.log(`===== getUser response: ${response.rows}`);
    res.locals.getUser = response.rows;
    return next();
  } catch (error) {
    console.log("This is the error: ", error);
    next({
      log: "Express error handler caught unknown middleware error",
      message: {
        err: "An error occurred in userController.getUser",
      },
    });
  }
};

// post user, creating a new record
const postUser = async (req, res, next) => {
  try {
    const { firstname, lastname, email, username, password } = req.body;
    // create query
    const sqlQuery = `INSERT INTO users (firstname, lastname, email, username, password) VALUES ('${firstname}', '${lastname}', '${email}', '${username}', '${password}')`;
    const response = await db.query(sqlQuery);

    // console.log(`===== postUser response: ${response.rows}`);
    // res.locals.postUser = response.rows;
    return next();
  } catch (error) {
    console.log("This is the error: ", error);
    next({
      log: "Express error handler caught unknown middleware error",
      message: {
        err: "An error occurred in userController.postUser",
      },
    });
  }
};

module.exports = { getAllUsers, getUser, postUser };

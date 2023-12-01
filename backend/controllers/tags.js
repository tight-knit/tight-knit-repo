const db = require("../model/db");

const getAllTags = async (req, res, next) => {
  try {
    // create query
    const sqlQuery = `SELECT * FROM "public"."tags" LIMIT 100`;
    const response = await db.query(sqlQuery);

    // console.log(response.rows);
    res.locals.getAllTags = response.rows;
    return next();
  } catch (error) {
    console.log("This is the error: ", error);
    next({
      log: "Express error handler caught unknown middleware error",
      message: {
        err: "An error occurred in tagsController.getAllTags",
      },
    });
  }
};

const postTag = async (req, res, next) => {
  try {
    const { tag } = req.body;

    // create query
    const sqlQuery = `INSERT INTO tags (tag) VALUES ('${tag}')`;
    const response = await db.query(sqlQuery);

    // console.log(response.rows);
    // add logic if tag already exists

    // res.locals.postAllTags = response.rows;
    return next();
  } catch (error) {
    console.log("This is the error: ", error);
    next({
      log: "Express error handler caught unknown middleware error",
      message: {
        err: "An error occurred in tagsController.postAllTags",
      },
    });
  }
};

module.exports = { getAllTags, postTag };

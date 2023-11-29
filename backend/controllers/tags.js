const db = require("../model/db");

const getAllTags = async (req, res, next) => {
  try {
    // create query
    const sqlQuery = `SELECT * FROM "public"."tags" LIMIT 100`;
    db.query(sqlQuery).then((response) => {
      console.log(response.rows);
      res.locals.getAllTags = response.rows;
      return next();
    });
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

module.exports = { getAllTags };

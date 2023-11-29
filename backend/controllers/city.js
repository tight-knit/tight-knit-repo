const db = require("../model/db");

const getAllCities = async (req, res, next) => {
  try {
    // create query
    const sqlQuery = `SELECT * FROM "public"."citystate" LIMIT 100`;
    db.query(sqlQuery).then((response) => {
      console.log(`===== getAllCities response: ${response.rows}`);
      res.locals.getAllCities = response.rows;
      return next();
    });
  } catch (error) {
    console.log("This is the error: ", error);
    next({
      log: "Express error handler caught unknown middleware error",
      message: {
        err: "An error occurred in cityController.getAllCities",
      },
    });
  }
};

module.exports = { getAllCities };

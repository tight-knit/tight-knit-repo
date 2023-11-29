const db = require("../model/db");

// getJobs
const getJobs = async (req, res, next) => {
  try {
    // create query
    const sqlQuery = `SELECT * FROM "public"."jobs" LIMIT 100`;
    db.query(sqlQuery).then((response) => {
      console.log(`===== getJobs response: ${response.rows}`);
      res.locals.getJobs = response.rows;
      return next();
    });
  } catch (error) {
    console.log("This is the error: ", error);
    next({
      log: "Express error handler caught unknown middleware error",
      message: {
        err: "An error occurred in jobsController.getJobs",
      },
    });
  }
};

module.exports = { getJobs };

const db = require("../model/db");

// getJobs
const getJobs = async (req, res, next) => {
  try {
    // create query
    const sqlQuery = `SELECT * FROM "public"."jobs" LIMIT 100`;
    const response = await db.query(sqlQuery);

    // console.log(`===== getJobs response: ${response.rows}`);
    res.locals.getJobs = response.rows;
    return next();
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

// post jobs
const postJob = async (req, res, next) => {
  try {
    console.log(req.body);
    const { title, description, link } = req.body;

    // create query
    const sqlQuery = `INSERT INTO jobs (title, description, link) VALUES ('${title}', '${description}', '${link}')`;
    const response = await db.query(sqlQuery);

    // console.log(`===== postJobs response: ${response.rows}`);
    // res.locals.postJobs = response.rows;
    return next();
  } catch (error) {
    console.log("This is the error: ", error);
    next({
      log: "Express error handler caught unknown middleware error",
      message: {
        err: "An error occurred in jobsController.postJobs",
      },
    });
  }
};

module.exports = { getJobs, postJob };

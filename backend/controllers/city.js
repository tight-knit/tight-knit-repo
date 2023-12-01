const db = require("../model/db");

const getAllCities = async (req, res, next) => {
  try {
    // create query
    const sqlQuery = `SELECT * FROM "public"."citystate" LIMIT 100`;
    const response = await db.query(sqlQuery);

    // console.log(`===== getAllCities response: ${response.rows}`);
    res.locals.getAllCities = response.rows;
    return next();
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

const postCity = async (req, res, next) => {
  try {
    // may need to change req.body.locaiton later
    const { citystate } = req.body;

    // create query
    const sqlQuery = `INSERT INTO citystate (citystate) VALUES ('${citystate}')`;
    const response = await db.query(sqlQuery);

    // console.log(`===== postAllCities response: ${response.rows}`);
    // check if city already exists; if so, don't add again

    // res.locals.postAllCities = response.rows;
    return next();
  } catch (error) {
    console.log("This is the error: ", error);
    next({
      log: "Express error handler caught unknown middleware error",
      message: {
        err: "An error occurred in cityController.postAllCities",
      },
    });
  }
};

module.exports = { getAllCities, postCity };

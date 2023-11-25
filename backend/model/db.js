const { Pool } = require("pg");

const PG_URI =
  "postgres://iuxhlljl:VW5jaCTpX-ll7hsxv-w0c2MQ3-jdc506@isilo.db.elephantsql.com/iuxhlljl";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

pool
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
    // You can perform additional queries or operations here
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL:", err);
  })
  .finally(() => {
    // Close the connection when done
    pool.end();
  });

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};

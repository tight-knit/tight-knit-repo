const { Pool } = require("pg");
require("dotenv").config({ path: "../.env" }); // Load environment variables from .env file

const PG_URI = process.env.PG_URI; 
// console.log("Connection String:", PG_URI);

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

  process.on("SIGINT", () => {
    // Close the connection pool on application shutdown
    //  ensures that the connection pool is gracefully closed when your application terminates.
    pool.end();
    process.exit();
  });

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
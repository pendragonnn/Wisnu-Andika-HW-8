const fs = require("fs");
const pool = require("./db_connect");

const seedQuery = fs.readFileSync("db/seeding.sql", { encoding: "utf-8" });

if (seedQuery.length === 0) {
  console.log("there is no query in seeding.sql file");
} else {
  pool.query(seedQuery, (err) => {
    if (err) throw err;
    console.log("Seeding Completed");
    pool.end();
  });
}

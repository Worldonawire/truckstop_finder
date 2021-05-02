const knex = require("knex");


const db = knex({
  client: "pg",
  connection: {
    connectionString:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}:${process.env.DATABASE_PW}@127.0.0.1:5432/truckstopapi`,
    // ssl: { rejectUnauthorized: false },
  },
  searchPath: "public",
  seeds: {
    directory: "../seeds/01_intial.js",
  },
});


module.exports = db;

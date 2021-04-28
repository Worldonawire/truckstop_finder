const knex = require("knex");
const parse = require("pg-connection-string").parse;

const pgconfig = parse(process.env.DATABASE_URL);

pgconfig.ssl = { rejectUnauthorized: false };

const db = knex({
  client: "pg",
  connection: pgconfig,
  searchPath: "public",
});

module.exports = db;

// process.env.DATABASE_URL || `postgres://${process.env.USER}@127.0.0.1:5432/truckstop`,

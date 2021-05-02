require("dotenv").config();
const app = require("./app");
const db = require("./knex.js");
const { seedDatabase } = require("../data/import");

const PORT = process.env.PORT || 9000;


(async () => {
  try {
    //await db.raw('CREATE DATABASE truckstopapi;');
    console.log("Running migrations");
    await db.migrate.latest();
    await console.log("Running seeds");
    await seedDatabase();

    console.log("Starting express");
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();

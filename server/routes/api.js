const express = require("express");
let router = express.Router();
const db = require("../knex.js");

router.use(function(req, res, next) {
  console.log(req.url, "@", Date.now());
  next();
});

router.route("/locations").get(async (req, res) => {
  try {
    const locations = await db.select().table("locations");
    res.json(locations);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

router.route("/type/:type").get(async (req, res) => {
  console.log("FUCK");
  const type = req.params.type;
  const query = await db
    .select()
    .from("locations")
    .where("type", type);

  try {
    console.log(query);
    res.status(200);
    res.send(query);
  } catch (error) {
    console.log("ERROR GET TYPE: ", error);
    res.status(404).end();
  }
});
// router
//     .route("/city/:city")
//     .get(async(req, res) => {

//     });

// router
//     .route("/state/:state")
//     .get(async(req, res) => {

//     });
// router
//     .route("/amenities/:amenities")
//     .get(async(req, res) => {

//     });
// router
//     .route("payments/:payments")
//     .get(async(req, res) => {

//     });
// router
//     .route("/restaurants/:restaurants")
//     .get(async(req, res) => {

//     });
module.exports = router;

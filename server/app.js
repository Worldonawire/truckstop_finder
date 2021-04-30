const express = require("express");
// const Knex = require("knex");
const path = require("path");
const db = require("./knex");

const app = express();

app.use(express.json());

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

// serves our map only on the root
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

app.get("/api", (req, res) => {
  const queryKey = Object.keys(req.query);
  const queryValue = req.query[queryKey];

  // allows to use a single endpoint for queries
  function redirect(queryKey, queryValue) {
    console.log(queryKey);
    switch (queryKey) {
      case "type":
        console.log("Routing to 'Type'...");
        type(queryValue);
        break;
      case "city":
        console.log("Routing to 'City'...");
        city(queryValue);
        break;
      case "state":
        console.log("Routing to 'State'...");
        state(queryValue);
        break;
      // case "amenities":
      //   console.log("Routing to 'Amenities'...");
      //   amenities(queryValue);
      //   break;
      // case "payments":
      //   console.log("Routing to 'Payments'...");
      //   payments(queryValue);
      //   break;
      // case "restaurants":
      //   console.log("Routing to 'Restaurants'...");
      //   restaurants(queryValue);
      //   break;
      default:
        console.log("Routing failed ");
        res.status(400).end();
        break;
    }
  }

  redirect(queryKey.toString(), queryValue);

  async function type(queryValue) {
    try {
      const allMatches = await db("locations").where("type", queryValue);
      res.status(200);
      res.send(allMatches);
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }

  async function state(queryValue) {
    try {
      const allMatches = await db("locations").where("state", queryValue);
      res.status(200);
      res.send(allMatches);
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }

  async function city(queryValue) {
    try {
      const allMatches = await db("locations").where("city", queryValue);
      res.status(200);
      res.send(allMatches);
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }

  // async function amenities(queryValue) {
  //   queryValue = Array.from(queryValue, (val) => val).join("");
  //   queryValue = queryValue.substring(1, queryValue.length - 1);
  //   queryArray = queryValue.split(",");

  //   console.log(queryArray);

  //   const numIterations = queryArray.length;

  //   // TODO handle this case better than with a switch
  //   // handle the different amenities cases
  //   // switch (numIterations) {
  //   //   case 1:
  //     try {
  //       const allMatches = await db("locations")
  //       .where("amenities", queryArray[0]);

  //       res.status(200);
  //       res.send(allMatches);
  //     } catch (e) {
  //       console.log(e);
  //       res.status(400).end();
  //     }
  //     break;
  //   case 2:
  //     try {
  //       const allMatches = await db("locations")
  //       .where("amenities", queryArray[0])
  //       .andWhere("amenities", queryArray[1]);

  //       res.status(200);
  //       res.send(allMatches);
  //   } catch (e) {
  //     console.log(e);
  //     res.status(400).end();
  //   }
  //     break;
  //   case 3:
  //     try {
  //       const allMatches = await db("locations")
  //       .where("amenities", queryArray[0])
  //       .andWhere("amenities", queryArray[1])
  //       .andWhere("amenities", queryArray[2]);
  //       res.status(200);
  //       res.send(allMatches);
  //   } catch (e) {
  //     console.log(e);
  //     res.status(400).end();
  //   }
  //     break;
  //   default:
  //     console.log("amentities query invalid");
  //     res.status(400).end();
  //     break;
  // }

  // try {
  //   const allMatches = await db("locations").where("city", queryValue);
  //   res.status(200);
  //   res.send(allMatches);
  // } catch (e) {
  //   console.log(e);
  //   res.status(400).end();
  // }

  // passed argument is a string
  // converts passed argument into an array of strings
  // queryValue = Array
  //             .from(queryValue, (val) => val)
  //             .join("")
  // queryValue = queryValue.substring(1, queryValue.length-1);
  // queryArray = queryValue.split(',');

  // console.log(queryArray);
  // const numIterations = queryArray.length;
  // let mutatedQuery =  `SELECT * FROM locations
  // WHERE \'${queryKey}\' = \'${queryArray[0]}\'`

  // for (let i=1; i<numIterations; i++) {
  //   mutatedQuery += ` AND \'${queryKey}\' = \'${queryArray[0]}\'`
  // }
  // mutatedQuery += ';';

  // console.log(mutatedQuery);

  //   // try {
  //   //   res.status(200);
  //   //   res.send(await db.raw(mutatedQuery));
  //   // } catch (e) {
  //   //   console.log(e);
  //   //   res.status(400).end();
  //   // }
  // }

  // async function payments(queryValue) {
  //   try {
  //     const allMatches = await db("locations").where("payments", queryValue);
  //     res.status(200);
  //     res.send(allMatches);
  //   } catch (e) {
  //     console.log(e);
  //     res.status(400).end();
  //   }
  // }

  // async function restaurants(queryValue) {
  //   try {
  //     const allMatches = await db("locations").where("restaurants", queryValue);
  //     res.status(200);
  //     res.send(allMatches);
  //   } catch (e) {
  //     console.log(e);
  //     res.status(400).end();
  //   }
  // }
});

module.exports = app;

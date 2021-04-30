const express = require("express");
const path = require("path");
const db = require("./knex");

const app = express();

app.use(express.json());

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

//Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
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
      case "amenities":
        console.log("Routing to 'Amenities'...");
        amenities(queryValue);
        break;
      case "payments":
        console.log("Routing to 'Payments'...");
        payments(queryValue);
        break;
      case "restaurants":
        console.log("Routing to 'Restaurants'...");
        restaurants(queryValue);
        break;
      default:
        console.log("Switch failed ");
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

  async function amenities(queryValue) {
    try {
      const allMatches = await db("locations").where("amenities", queryValue);
      res.status(200);
      res.send(allMatches);
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }

  async function payments(queryValue) {
    try {
      const allMatches = await db("locations").where("payments", queryValue);
      res.status(200);
      res.send(allMatches);
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }

  async function restaurants(queryValue) {
    try {
      const allMatches = await db("locations").where("restaurants", queryValue);
      res.status(200);
      res.send(allMatches);
    } catch (e) {
      console.log(e);
      res.status(400).end();
    }
  }
});

module.exports = app;

// we need to unbreak the root at some point

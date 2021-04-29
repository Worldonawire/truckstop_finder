const express = require("express");
const morgan = require("morgan");
const path = require("path");
// const db = require("knex");
const api = require("./routes/api");

const app = express();

// Setup Logger
app.use(express.json());
app.use("/api", api);
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// app.get("/", ((req, res) => {
// }));

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

// Always return the main index.html, since we are developing a single page application
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
// });

module.exports = app;

// /api/type/?type="Country Store"

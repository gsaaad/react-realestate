const express = require("express");
const dbConnection = require("./config/connection");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes"));

// for deployment
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// db Connection MongoDB
dbConnection.once("open", () => {
  console.log(
    "Connected to MongoDB Back-end.. Sweet Agrents are available to help your search for Sweet Homes!"
  );
});
app.listen(PORT, () =>
  console.log(`Connected Backend Server on localhost:${PORT}`)
);

module.exports = app;

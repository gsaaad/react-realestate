const express = require("express");
const dbConnection = require("./config/connection");
const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dbConnection.on("Error", console.error.bind(console, "Connection error!"));
dbConnection.once("open", () => {
  console.log(`Connectionn good! Server running on ${PORT}`);
});

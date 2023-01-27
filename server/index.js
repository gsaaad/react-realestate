const express = require("express");
const dbConnection = require("./config/connection");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes"));

// db Connection MongoDB
dbConnection.once("open", () => {
  console.log("DB Connected.. ");
});
app.listen(PORT, () =>
  console.log(`Connected Backend Server on localhost:${PORT}`)
);

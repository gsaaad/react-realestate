const express = require("express");
const dbConnection = require("./config/connection");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes"));

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3001");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

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

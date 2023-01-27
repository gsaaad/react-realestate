const HouseData = require("../houses.json");
const dbConnection = require("../config/connection");
const mongoose = require("mongoose");
require("dotenv").config();

var MONGODB_PASS = process.env.mongoDB;

const collection = "Single_Homes";

// dbConnection.once("open", () => {
//   console.log("Connection to DB..Inserting")
//   dbConnection
//     .useDb("properties")
//     .collection(collection)
//     .insertMany(HouseData.props);
// });
// dbConnection.close();

mongoose.set("strictQuery", true);

mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb+srv://gsaad:${MONGODB_PASS}@cluster0.h2arlfo.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("open", () => {
  console.log("Connection to DB..Inserting");
  //   dbConnection
  //     .useDb("properties")
  //     .collection(collection)
  //     .insertMany(HouseData.props);
  // });
  mongoose.connection
    .useDb("properties")
    .collection(collection)
    .insertMany(HouseData.props);
});

console.log("all Done seeding...");

// mongoose.connection.close();

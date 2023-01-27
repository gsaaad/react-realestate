const mongoose = require("mongoose");
require("dotenv").config();
var MONGODB_PASS = process.env.mongoDB;

mongoose.set("strictQuery", true);

mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb+srv://gsaad:${MONGODB_PASS}@cluster0.h2arlfo.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on(
  "error",
  console.error.bind(console, "Connection error!")
);
mongoose.connection.on("connecting", console.log.bind(console, "Connecting!"));
mongoose.connection.on(
  "connection",

  console.log.bind(console, "Connection Established!")
);

module.exports = mongoose.connection;

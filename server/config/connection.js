const mongoose = require("mongoose");
require("dotenv").config();

var MONGODB_PASS = process.env.mongoDB;

mongoose.set("strictQuery", true);

mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb+srv://gsaaad:${MONGODB_PASS}@cluster0.elk4qxz.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
module.exports = mongoose.connection;

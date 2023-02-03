const HouseData = require("../houses.json");
const dbConnection = require("../config/connection");
const { Property } = require("../models");
const isValidProperty = require("../utils/isValidHouse");

// delete all property, get random set of properies
dbConnection.on("open", async () => {
  await Property.deleteMany({});
  const getRandomHouses = () => {
    var listOfHouses = [];
    for (let i = 0; i < 60; i++) {
      var randomNum = Math.floor(Math.random() * HouseData.props.length - 1);
      var property = HouseData.props[randomNum];
      const isValid = isValidProperty(property);

      if (isValid) {
        listOfHouses.push(property);
      }
    }
    // console.log({ listOfHouses });
    return listOfHouses;
  };
  var ArrayHouses = getRandomHouses();
  console.log("Property Collection", Property.collection);

  await Property.insertMany(ArrayHouses);

  console.log("All Done Seeding.. Enjoy your search for a Home Sweet Home!");
  process.exit(0);
});

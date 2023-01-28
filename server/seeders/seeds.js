const HouseData = require("../houses.json");
const dbConnection = require("../config/connection");
const { Property } = require("../models");
dbConnection.on("open", async () => {
  await Property.deleteMany({});
  const getRandomHouses = () => {
    var listOfHouses = [];
    for (let i = 0; i < 3; i++) {
      var randomNum = Math.floor(Math.random() * HouseData.props.length - 1);
      var house = HouseData.props[randomNum];
      listOfHouses.push(house);
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

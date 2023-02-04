const HouseData = require("../houses.json");
const dbConnection = require("../config/connection");
const { Property } = require("../models");
const { Agent } = require("../models");
const isValidProperty = require("../utils/isValidHouse");
const isValidAgent = require("../utils/isValidAgent");
const agentsData = require("../agents.json");

dbConnection.on("open", async () => {
  // delete all properties and Agents
  // await Property.deleteMany({});
  await Agent.deleteMany({});
  // get random set of houses (60)
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
  const getRandomAgents = () => {
    var listOfAgents = [];
    for (let i = 0; i < 3; i++) {
      var randomNum = Math.floor(Math.random() * agentsData.props.length - 1);
      var agent = agentsData.props[randomNum];
      var isValid = isValidAgent(agent);
    }
  };
  getRandomAgents();
  var ArrayHouses = getRandomHouses();
  // console.log("Property Collection", Property.collection);
  // await Property.insertMany(ArrayHouses);

  console.log("All Done Seeding.. Enjoy your search for a Home Sweet Home!");
  process.exit(0);
});

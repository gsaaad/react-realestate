const HouseData = require("../houses.json");
const dbConnection = require("../config/connection");
const { Property } = require("../models");
const { Agent } = require("../models");
const isValidProperty = require("../utils/isValidHouse");
const isValidAgent = require("../utils/isValidAgent");
const agentsData = require("../agents.json");

dbConnection.on("open", async () => {
  // delete all properties and Agents
  await Property.deleteMany({});
  await Agent.deleteMany({});
  // get random set of houses (60)
  const getRandomHouses = () => {
    var listOfHouses = [];
    for (let i = 0; i < 60; i++) {
      var randomNum = Math.floor(Math.random() * HouseData.props.length - 1);
      var property = HouseData.props[randomNum];
      const isValid = isValidProperty(property);

      if (isValid) {
        console.log("this property is valid", property);
        var city = property.address.split(",")[1];
        var state = property.address.split(",")[2].split(" ")[1];
        var location = city + ", " + state;
        property.location = location;
        listOfHouses.push(property);
      }
    }
    // console.log({ listOfHouses });
    return listOfHouses;
  };
  const getRandomAgents = () => {
    var listOfAgents = [];
    for (let i = 0; i < 20; i++) {
      var randomNum = Math.floor(Math.random() * agentsData.props.length - 1);
      var agent = agentsData.props[randomNum];
      var validAgent = isValidAgent(agent);
      if (validAgent) {
        listOfAgents.push(validAgent);
      }
    }
    // console.log(listOfAgents);
    return listOfAgents;
  };
  getRandomAgents();
  var ArrayHouses = getRandomHouses();
  var ArrayAgents = getRandomAgents();
  console.log(ArrayAgents);
  // console.log("Property Collection", Property.collection);
  console.log("Seeding Data to mongoDB Collections: Property, Agent");
  await Property.insertMany(ArrayHouses);
  await Agent.insertMany(ArrayAgents);
  console.log("All Done Seeding.. Enjoy your search for a Home Sweet Home!");
  process.exit(0);
});

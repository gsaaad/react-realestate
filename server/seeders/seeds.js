const HouseData = require("../houses.json");
const dbConnection = require("../config/connection");
const { Property } = require("../models");
const { Agent } = require("../models");
const { User } = require("../models");
const isValidProperty = require("../utils/isValidHouse");
const isValidAgent = require("../utils/isValidAgent");
const validUser = require("../utils/isValidUser");
const agentsData = require("../agents.json");

dbConnection.on("open", async () => {
  // delete all properties and Agents
  // await Property.deleteMany({});
  // await Agent.deleteMany({});
  await User.deleteMany({});
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
        console.log(city.split(" "));
        city = city.split(" ").join("-");
        if (city.length <= 2) {
          console.log("1 worded city");
          city = city[1];
        } else {
          console.log("multi-word city");
          length_of_city = city.length;
          city = city.slice(1, length_of_city);
        }

        var location = city + "-" + state;
        console.log("city is", city, "location is", location);
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
  const getRandomUsers = async () => {
    var listOfUsers = [];
    for (let i = 0; i < 20; i++) {
      const user = await validUser();
      // console.log("user is", user);
      if (user) {
        listOfUsers.push(user);
      }
    }
    console.log("listOfUsers is", listOfUsers);
    return listOfUsers;
  };
  getRandomAgents();
  // var ArrayHouses = getRandomHouses();
  var ArrayAgents = getRandomAgents();
  var ArrayUsers = await getRandomUsers();

  // console.log("Seeding Data to mongoDB Collections: Property, Agent, Users");
  // await Property.insertMany(ArrayHouses);
  await Agent.insertMany(ArrayAgents);
  await User.insertMany(ArrayUsers);
  console.log("All Done Seeding.. Enjoy your search for a Home Sweet Home!");
  process.exit(0);
});

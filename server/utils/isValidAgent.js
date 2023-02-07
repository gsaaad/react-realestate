const { faker } = require("@faker-js/faker");
const dateFormat = require("./dateFormat");

const isValidAgent = (agent) => {
  var allStatements = [
    "Recently licensed real estate agent with in-depth knowledge of the area, looking to apply my new credentials and enthusiasm to a real estate firm",
    "Hardworking real estate professional with over 10 years of experience as an agent, looking to continue helping homebuyers find the right property",
    "Seeking a real estate agent role with Primer Realty where I can use my five years of experience and customer service abilities to assist business owners in buying, selling or renting commercial properties",
    "Experienced real estate agent with an investigative nature and excellent customer service skills, dedicated to finding the best properties for my clients as an agent.",
    "Looking to start my career as a licensed real estate agent at Frederick Realty, where I can uphold business standards and expand my knowledge of real estate practices.",
    "Technologically proficient individual with extensive knowledge of property listing resources and client management systems looking to apply my tech skills to a real estate agent position in the area.",
    "Out-going individual with a year of real estate experience, eager to use what I've learned about the real estate market in the area to ensure I find the best listings for real estate clientele.",
    "To uphold the mission statement of Edgewater Realty to assist clients in finding their forever home. Bringing with me eight years of real estate experience and a passion for helping others.",
    "Licensed real estate agent who helped over 20 clients buy properties within the last year, looking to apply my enthusiasm for real estate and my motivation to close deals to a competitive realty firm",
    "Innovative real estate professional, seeking to apply my sales knowledge to a role where I can help clients envision how they could transform a property into their own.",
    "Newly licensed real estate agent with a bachelor's degree in digital marketing, looking to use my understanding of local real estate and marketing techniques to advertise my services and enhance the visibility of online property listings.",
  ];

  var name = agent?.profileLink.text.split(" ").slice(0, 2).join(" ");
  var email =
    name?.split(" ").join("_") + "@" + faker.internet.email().split("@")[1];
  var imgSrc = agent?.contact.graphic.image.src;
  var profileStatement =
    allStatements[Math.floor(Math.random() * allStatements.length)];
  var representsRealtor = agent?.map.businessName
    .split(" ")
    .slice(0, 4)
    .join("-");
  var licenseId = Math.floor(Math.random() * 900000) + 100000;
  var agentCity = agent?.map.label.split(" ").slice(1, 3).join(" ");
  var agentSince = faker.date.past();
  // var agentSince = dateFormat(faker.date.past())
  //   .split(" ")
  //   .slice(0, 3)
  //   .join(" ");
  // console.log(
  //   name,
  //   email,
  //   imgSrc,
  //   profileStatement,
  //   representsRealtor,
  //   licenseId,
  //   agentSince
  // );
  var verifiedAgent = {};
  var isValidAgent =
    name &&
    email &&
    imgSrc &&
    profileStatement &&
    licenseId &&
    agentCity &&
    representsRealtor &&
    agentSince;
  if (isValidAgent) {
    verifiedAgent.name = name;
    verifiedAgent.email = email;
    verifiedAgent.imgSrc = imgSrc;
    verifiedAgent.profileStatement = profileStatement;
    verifiedAgent.licenseId = licenseId;
    verifiedAgent.agentSince = agentSince;
    verifiedAgent.representsRealtor = representsRealtor;
    verifiedAgent.city = agentCity;
    return verifiedAgent;
  }
  return isValidAgent;
};

module.exports = isValidAgent;

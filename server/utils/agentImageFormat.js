const axios = require("axios");
const agents = require("../agents.json");
require("dotenv").config();

console.log(process.env);
var mirrorToken = process.env.mirrorToken;
var mirrorHost = process.env.mirrorHost;
var mirrorKey = process.env.mirrorKey;

console.log("mirrorToken", mirrorToken, mirrorHost, mirrorKey);

function checkURL(url) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

const convertPicture = async (imageLink) => {
  const options = {
    method: "GET",
    url: "https://mirror-ai.p.rapidapi.com/get_all_parts",
    params: { style: "kenga" },
    headers: {
      "X-Token": mirrorToken,
      "X-RapidAPI-Key": mirrorKey,
      "X-RapidAPI-Host": mirrorHost,
    },
  };

  var isValid = checkURL(imageLink);
  if (!isValid) {
    console.log("Not a valid picture...Skipping");
  } else {
    console.log("Converting image to Kenga style...");
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
};
//   var listOfFormattedPictures = [];
//   agents.forEach((agent) => {
//     var result = convertPicture(agent.contact.graphic.image.src);
//     //   console.log(result);
//     listOfFormattedPictures.push(result);
//   });

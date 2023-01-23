import axios from "axios";

async function getHouses(location) {
  var city = location.split(",")[0];
  var province = location.split(" ")[1];
  console.log(city, province);
  // console.log(process.env.REACT_APP_SEARCH_HOST_ONE);
  // console.log(process.env.REACT_APP_SEARCH_URL_ONE);
  // console.log(process.env.REACT_APP_KEY_ONE);

  const options = {
    method: "GET",
    url: process.env.REACT_APP_SEARCH_URL,
    params: {
      location: `${city}, ${province}`,
      sort: "pricea",
      isSingleFamily: "true",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_SEARCH_HOST,
    },
  };

  try {
    await axios.request(options).then(function (response) {
      if (!response) {
        console.error("No Response", response);
        return;
      }
      response.status === 200
        ? console.log("Success Response!")
        : console.error("Response was not successful..");
      console.log("Response back", response);
      return response.data.results;
    });
  } catch (e) {
    console.error(e);
  }
}
export default getHouses;

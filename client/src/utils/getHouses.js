// import axios from "axios";
import queryHouses from "./queryHouses";

function getHouses(location) {
  //? first check Database for this location.
  return queryHouses.getHousesByLocation(location);

  //? if none, make an api call, filter and add to db if match requirements

  // const options = {
  //   method: "GET",
  //   url: process.env.REACT_APP_SEARCH_URL,
  //   params: {
  //     location: `${city}, ${province}`,
  //     sort: "pricea",
  //     isSingleFamily: "true",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": process.env.REACT_APP_KEY,
  //     "X-RapidAPI-Host": process.env.REACT_APP_SEARCH_HOST,
  //   },
  // };

  // try {
  //   await axios.request(options).then(function (response) {
  //     if (!response) {
  //       console.error("No Response", response);
  //       return;
  //     }
  //     response.status === 200
  //       ? console.log("Success Response!")
  //       : console.error("Response was not successful..");
  //     console.log("Response back", response);
  //     return response.data.results;
  //   });
  // } catch (e) {
  //   console.error(e);
  // }
}
export default getHouses;

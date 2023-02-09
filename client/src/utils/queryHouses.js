import axios from "axios";
import HousesArray from "../houses.json";

const queryHouses = {
  errorMessage:
    "There was an error while retrieving your request... We will Notify our team of this. Try again Later!",

  getallHousesDB: async () => {
    console.log("Searching for all houses in db..");
    try {
      await axios.get("//localhost:3001/api/property").then((propertyData) => {
        console.log("sending data", propertyData);
        return propertyData;
      });
    } catch (e) {
      console.error(e);
      // !error in request, send back temp saved data
      console.log("Sending back TEMP DATA in the meantime..");
      // console.log(HousesArray.props.slice(0, 20));
      // return HousesArray.props.slice(0, 20);
    }
  },
  getHousesByIdDB: async (propertyId) => {
    console.log(
      "Searching for home",
      `//localhost:3001/api/property/${propertyId}`
    );
    try {
      await axios
        .get(`//localhost:3001/api/property/${propertyId}`)
        .then((propertyData) => {
          console.log(propertyData);
          return propertyData;
        });
    } catch (e) {
      console.log(e);
    }
  },
  getHousesByLocation: async (location) => {
    console.log(
      "Searching for homes in..",
      location,
      `//localhost:3001/api/location/${location}`
    );
    try {
      await axios
        .get(`//localhost:3001/api/property/location/${location}`)
        .then((propertyData) => {
          console.log("we found these homes in DB", propertyData.data);
          return propertyData.data;
        });
    } catch (e) {
      console.error(e);
    }
  },
};

export default queryHouses;

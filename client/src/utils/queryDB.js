import axios from "axios";

const queryHouses = {
  errorMessage:
    "There was an error while retrieving your request... We will Notify our team of this. Try again Later!",

  getallHousesDB: async () => {
    console.log("Searching for all houses in db..");
    try {
      await axios.get("//localhost:3001/api/property").then((propertyData) => {
        console.log(propertyData);
      });
    } catch (e) {
      console.error(e);
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
        });
    } catch (e) {
      console.log(e);
    }
  },
};

export default queryHouses;

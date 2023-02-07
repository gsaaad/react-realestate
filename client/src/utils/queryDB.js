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
};

export default queryHouses;

import React, { useEffect, useState } from "react";
// import getHouses from "../../utils/getHouses";
import HousesForSale from "../../components/HousesForSale/HousesForSale";
import "./SearchHouses.css";
import axios from "axios";

function SearchHouses() {
  const [location, setLocation] = useState("Dallas-TX");
  const [houses, setHouses] = useState([]);
  console.log("location set to..", location);
  async function addHousesDB(house) {
    await axios.post("/api/property/", house).then((response) => {
      console.log("response is", response);
    });
  }

  async function fetchData() {
    // fetch Data from backend first, if not, then call API

    // Houses that are for sale, sorted lowest to highest, min living area = 2200, min lot = 3000
    console.log("fetching data from backend..");
    const houses = await axios.get(
      `http://localhost:3001/api/property/location/${location}`
    );
    console.log("this is the data from backend", houses.data);
    // const housesOptions = {
    //   method: "GET",
    //   url: process.env.REACT_APP_SEARCH_URL,
    //   params: {
    //     location: location,
    //     status_type: "ForSale",
    //     home_type: "Houses",
    //     sort: "Price_Low_High",
    //     sqftMin: "2200",
    //     lotSizeMin: "3,000 sqft",
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": process.env.REACT_APP_SEARCH_KEY,
    //     "X-RapidAPI-Host": process.env.REACT_APP_SEARCH_HOST,
    //   },
    // };
    // try {
    //   const backendURL = process.env.REACT_APP_BACK_END_URL;
    //   console.log("backendURL is", backendURL);
    //   console.log("The location is set to", location);
    //   const houses = await axios.get(
    //     `$http://localhost:3001/api/property/location/${location}`
    //   );
    //   console.log("this is the data from backend", houses.data);
    // } catch (e) {
    //   console.log("error fetching data from backend", e);
    // }
    // no houses in backend with that city? use API call

    // console.log("Making API request..");
    // const housesAPI = await axios.request(housesOptions);
    // console.log("this is the data from API", housesAPI.data);

    // var houses = housesAPI;

    // // set API call houses to display for customer!
    // setHouses(houses);

    // // Since these homes aren't in our database, we push the addresses that aren't included to the database!
    // // for each house, push house to backend server
    // Object.values(houses).forEach((house) => {
    //   // add property location
    //   house.location = location;
    //   console.log(house);
    //   // post to backend server
    //   addHousesDB(house);
    // });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleFormSubmit(e) {
    e.preventDefault();
    fetchData();
  }

  return (
    <div className="search-houses  p-2  m-4">
      {/* mx-auto or add news column / info box to the right */}
      <div className="search-container mx-auto">
        <h1 className="text-light p-2 bg-primary rounded-pill">
          Search Houses FOR SALE
        </h1>
        <div className="form-outline">
          <form onSubmit={handleFormSubmit}>
            <input
              type="search"
              id="searchByCity"
              placeholder="City-Province"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-search">
              Search
            </button>
          </form>
        </div>
        <HousesForSale houses={houses} />
      </div>
    </div>
  );
}
export default SearchHouses;

import React, { useEffect, useState } from "react";
import getHouses from "../../utils/getHouses";
import HousesForSale from "../../components/HousesForSale/HousesForSale";
import "./SearchHouses.css";
import axios from "axios";
function SearchHouses() {
  const [location, setLocation] = useState("Dallas-TX");
  const [houses, setHouses] = useState([]);

  async function fetchData() {
    await axios
      .get(`//localhost:3001/api/property/location/` + location)
      .then((propertyData) => {
        setHouses(propertyData.data);
      });
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
              placeholder="City, Province"
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

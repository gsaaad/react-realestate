import React, { useState } from "react";
import getHouses from "../../utils/getHouses";
import HousesForSale from "../../components/HousesForSale/HousesForSale";
import "./SearchHouses.css";

function SearchHouses() {
  const [location, setLocation] = useState("");
  const [houses, setHouses] = useState([]);

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(
      "submittin form... getting houses for sale with this location",
      location
    );

    getHouses(location);
  }

  function handleFormChange(e) {
    e.preventDefault();
    var userValue = e.target.value;
    setLocation(userValue);
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
              onChange={handleFormChange}
            />
            <button type="submit" className="btn btn-primary btn-search">
              Search
            </button>
          </form>
        </div>
        {/* <HousesForSale houses={houses} /> */}
      </div>
    </div>
  );
}
export default SearchHouses;

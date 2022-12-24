import axios from "axios";
import React, { useEffect, useState } from "react";
import "./SearchHouses.css";

function SearchHouses() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const req = {
      method: "GET",
      url: "https://zillow56.p.rapidapi.com/search",
      params: {
        location: "Toronto, ON",
        sort: "pricea",
        isSingleFamily: "true",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_API_SEARCH_URL,
      },
    };

    axios
      .request(req)
      .then(function (response) {
        console.log(response.data);
        setLocation(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <div className="search-houses">
      <div className="form-outline">
        <input
          type="search"
          id="searchByCity"
          placeholder="City, State/Province"
        />
      </div>
      <button type="button" className="btn btn-primary btn-search">
        <i class="fas fa-search">SEARCH</i>
      </button>
    </div>
  );
}

export default SearchHouses;

import React from "react";
import "./HousesForSale.css";
import House from "../House/House";
// import data from "../../houses.json";

function HousesForSale(housesArray) {
  var houses = housesArray.houses;
  // var houses = [];

  // grab 9 houses from random parts of data
  // var randomSliceOne = Math.floor(Math.random() * houses.length);

  // houses = houses.slice(randomSliceOne, randomSliceOne + 9);

  return (
    <div className="bg-primary">
      <h1 className="bg-gradient text-light text-center  rounded">
        Sweet Homes On The Market
        {/* Houses For Sale in{" "} */}
        {/* {houses.length > 0 && houses[5].address.split(" ").slice(3, 5)} */}
      </h1>
      <div className="container text-center">
        <div className="row">
          {houses.length > 0 &&
            houses.map((house) => {
              return <House house={house} key={house.address} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default HousesForSale;

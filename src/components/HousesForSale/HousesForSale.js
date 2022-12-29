import React from "react";
import data from "./data.json";
import "./HousesForSale.css";
import House from "../House/House";

function HousesForSale(housesArray) {
  const houses = data.props;
  // const houses = housesArray;
  console.log(houses);

  // console.log("houses", housesArray);
  // console.log(houses.slice(0, 18));
  return (
    <div className="bg-primary">
      <h1 className="bg-gradient text-light text-center  rounded">
        Houses For Sale in{" "}
        {houses.length > 0 && houses[5].address.split(" ").slice(3, 5)}
      </h1>
      <div className="container text-center">
        <div className="row">
          {houses.length > 0 &&
            houses.slice(0, 18).map((house) => {
              return <House house={house} key={house.address} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default HousesForSale;

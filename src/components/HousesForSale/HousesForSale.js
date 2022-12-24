import React from "react";
import data from "./data.json";
import House from "../House/House";

function HousesForSale() {
  const houses = data.props;
  console.log(houses.slice(0, 18));
  return (
    <div>
      <h1 className="bg-gradient text-light text-center">Houses For Sale</h1>
      <div className="container text-center">
        <div className="row">
          {houses.slice(0, 18).map((house) => {
            return <House house={house} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HousesForSale;

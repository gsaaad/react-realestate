import React from "react";
import "./House.css";
import HouseAvatar from "../HouseAvatar/HouseAvatar";
function House(props) {
  var house = props.house;
  return (
    <div className="row  bg-gradient house mt-4 rounded">
      <HouseAvatar house={house} />
      <div className="col mt-4">
        <div className="house-bb-rooms rounded-pill p-2 text-center text-light">
          <h2 className="house-rooms fs-fluid fw-bold p-2">
            Bathrooms: {house.bathrooms}
          </h2>
          <h2 className="house-rooms fs-fluid fw-bold p-2">
            Bedrooms: {house.bedrooms}
          </h2>
        </div>
        <h2 className="text-dark m-2 fs-fluid">
          <span className="text-warning fs-fluid">Address: </span>
          {house.address}
        </h2>
        <h3 className="text-dark m-2 fs-fluid">
          Living Area:
          {Math.floor(house.livingArea) === 0
            ? "N/A"
            : Math.floor(house.livingArea)}
          <span className="text-warning fs-fluid"> sqft</span>
        </h3>
      </div>
    </div>
  );
}

export default House;

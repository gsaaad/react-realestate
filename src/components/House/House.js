import React from "react";
import "./House.css";
function House(props) {
  var house = props.house;
  return (
    <div className="row  bg-gradient house mt-4">
      <div className="col text-right mt-4 text-light">
        <img
          src={house.imgSrc}
          alt={house.address}
          width={
            document.body.clientWidth > 600
              ? document.body.clientWidth * 0.24
              : document.body.clientWidth * 0.4
          }
        />
        <h2 className="house-property fs-5">
          <span className="text-warning">Status: </span>
          {house.listingStatus.split("_").join(" ")}
        </h2>
        <h3 className="house-price fs-5">
          <span className="text-warning">Price: $ </span>

          {house.price}
        </h3>
      </div>
      <div className="col mt-4">
        <div className="house-bb-rooms bg-secondary rounded-pill p-2 text-center text-light">
          <h2 className="house-rooms">Bathrooms: #{house.bathrooms}</h2>
          <h2 className="house-rooms">Bedrooms: #{house.bedrooms}</h2>
        </div>
        <h2 className="fs-6 text-light m-2">
          <span className="text-warning">Address: </span>
          {house.address}
        </h2>
        <h3 className="fs-6 text-light m-2">
          {Math.floor(house.lotAreaValue) === 0
            ? "N/A"
            : Math.floor(house.lotAreaValue)}
          <span className="text-warning"> sqft</span>
        </h3>
      </div>
    </div>
  );
}

export default House;

import React from "react";
import "./House.css";
function House(props) {
  var house = props.house;
  return (
    <div className="row  bg-gradient house mt-4 rounded">
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
        <h2 className="house-property">
          <span className="text-warning img-descp">Status: </span>
          <span className="img-descp">
            {house.listingStatus.split("_").join(" ")}
          </span>
        </h2>
        <h2 className="house-price">
          <span className="text-warning img-descp">Price: $ </span>

          <span className="img-descp">
            {house.price < 5 ? "Ask For Price" : house.price}
          </span>
        </h2>
      </div>
      <div className="col mt-4">
        <div className="house-bb-rooms bg-secondary rounded-pill p-2 text-center text-light">
          <h2 className="house-rooms fs-fluid">Bathrooms #{house.bathrooms}</h2>
          <h2 className="house-rooms fs-fluid">Bedrooms #{house.bedrooms}</h2>
        </div>
        <h2 className="text-light m-2 fs-fluid">
          <span className="text-warning fs-fluid">Address: </span>
          {house.address}
        </h2>
        <h3 className="text-light m-2 fs-fluid">
          {Math.floor(house.lotAreaValue) === 0
            ? "N/A"
            : Math.floor(house.lotAreaValue)}
          <span className="text-warning fs-fluid"> sqft</span>
        </h3>
      </div>
    </div>
  );
}

export default House;

import React from "react";
import "./HouseAvatar.css";

function HouseAvatar(props) {
  var house = props.house;

  var formatPrice = (price) => {
    // format price to thousands
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="text-dark mt-2">
      <img
        src={house.imgSrc}
        alt={house.address}
        width={
          document.body.clientWidth > 600
            ? document.body.clientWidth * 0.24
            : document.body.clientWidth * 0.85
        }
        className="border border-dark rounded shadow-sm"
      />
      {/* <h2 className="house-property ">
        <span className="text-warning img-descp border-bottom  border-dark">
          Status:{" "}
        </span>
        <span className="img-descp border-bottom border-dark shadow-md">
          {house.listingStatus.split("_").join(" ")}
        </span>
      </h2> */}
      <h2 className="house-price">
        <span className="text-warning img-descp">Price: $ </span>

        <span className="img-descp">
          {house.price < 5 ? "Ask For Price" : formatPrice(house.price)}
        </span>
      </h2>
      <h2 className="text-dark m-2 fs-fluid">
        <span className="text-warning fs-fluid">Address: </span>
        {house.address}
      </h2>
      <h3 className="text-dark m-2 fs-fluid">
        <span className="text-warning fs-fluid">SqFt:</span>
        {Math.floor(house.livingArea) === 0
          ? "N/A"
          : Math.floor(house.livingArea)}
        <span>sqft</span>
      </h3>
    </div>
  );
}
export default HouseAvatar;

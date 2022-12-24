import React from "react";
import "./HouseAvatar.css";

function HouseAvatar(props) {
  var house = props.house;

  return (
    <div className="col text-right mt-4 text-dark">
      <img
        src={house.imgSrc}
        alt={house.address}
        width={
          document.body.clientWidth > 600
            ? document.body.clientWidth * 0.24
            : document.body.clientWidth * 0.4
        }
        className="border border-dark rounded shadow-sm"
      />
      <h2 className="house-property mt-2 ">
        <span className="text-warning img-descp border-bottom  border-dark">
          Status:{" "}
        </span>
        <span className="img-descp border-bottom border-dark shadow-md">
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
  );
}
export default HouseAvatar;

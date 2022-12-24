import React from "react";
import "./House.css";
function House(props) {
  var house = props.house;
  return (
    <div className="row  bg-gradient house">
      <div className="col text-right">
        <img
          src={house.imgSrc}
          alt={house.address}
          width={document.body.clientWidth * 0.4}
        />
        <h2 className="house-property">
          Listing Status: {house.listingStatus}
        </h2>
        <h3 className="house-price">Price: ${house.price}</h3>
      </div>
      <div className="col">
        <div className="house-bb-rooms bg-secondary rounded-pill p-2 text-center text-light fw-bolder">
          <h2 className="house-rooms">Bathrooms:{house.bathrooms}</h2>
          <h2 className="house-rooms">Bedrooms:{house.bedrooms}</h2>
        </div>
        <h2>House Address: {house.address}</h2>
        <h3>Price: ${house.price}</h3>
      </div>
    </div>
  );
}

export default House;

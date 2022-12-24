import React from "react";

function House(props) {
  var house = props.house;
  return (
    <div className="col">
      <img src={house.imgSrc} alt={house.address} width="400px" />
      <h2>House Address: {house.address}</h2>
      <h3>Price: ${house.price}</h3>
    </div>
  );
}

export default House;

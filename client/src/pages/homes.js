import React from "react";
import Clock from "../components/Clock/Clock";
import HousesForSale from "../components/HousesForSale/HousesForSale";
import data from "../houses.json";

const Home = () => {
  var houses = data.props;
  var randomSliceOne = Math.floor(Math.random() * houses.length);

  houses = houses.slice(randomSliceOne, randomSliceOne + 9);
  return (
    <div className="container home-page">
      <Clock />
      <HousesForSale houses={houses} />
    </div>
  );
};

export default Home;

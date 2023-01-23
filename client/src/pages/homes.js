import React from "react";
import Clock from "../components/Clock/Clock";
import HousesForSale from "../components/HousesForSale/HousesForSale";
const Home = () => {
  return (
    <div className="container">
      <Clock />
      <HousesForSale />
    </div>
  );
};

export default Home;

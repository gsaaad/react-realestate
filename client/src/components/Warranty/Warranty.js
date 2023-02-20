import React from "react";

const Warranty = () => {
  return (
    <div>
      <div className="bg-dark rounded ">
        <img
          src="https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=400&h=750&dpr=1"
          alt="We got you covered"
        />
      </div>
      <div className="bg-light rounded m-2">
        <h2 className="text-primary fw-semibold">
          Protect your home with our Award-Winning, satisfaction guaranteed Home
          Sweet Home Warranty.
        </h2>
        <h3 className="bg-primary text-light">
          Get a customized, personal insurance quote and coverage for your home
          at a competitive price - and do it all online!
        </h3>
      </div>
      <button className="bg-primary p-3  rounded ">
        <a href="/sweetagents" className="text-light fw-semibold">
          Enroll Today
        </a>
      </button>
    </div>
  );
};

export default Warranty;

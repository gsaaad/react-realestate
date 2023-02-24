import React from "react";
import "./Warranty.css";

const Warranty = () => {
  var screen_width = window.innerWidth;
  var imgSize = screen_width > 700 ? screen_width / 2 : screen_width - 50;
  return (
    <div>
      <div className="bg-dark rounded warranty-img">
        <img
          src={`https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=${imgSize}&h=850&dpr=1`}
          alt="We got you covered"
          className="m-3"
        />
      </div>
      <div className="bg-light rounded ">
        <h2 className="text-primary fw-semibold">
          Protect your home with our Award-Winning, satisfaction guaranteed Home
          Sweet Home Warranty.
        </h2>
      </div>
      <button className="bg-primary  warranty-enroll  rounded ">
        <a href="/sweetagents" className="text-light fw-semibold">
          Enroll Today
        </a>
      </button>
      <h3 className="bg-primary text-light">
        Get a customized, personal insurance quote and coverage for your home at
        a competitive price - and do it all online!
      </h3>
    </div>
  );
};

export default Warranty;

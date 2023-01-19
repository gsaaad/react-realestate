import React from "react";
import "./MortgageCalculator.css";
const MortgageCalculator = () => {
  return (
    <div>
      <h1 className="text-light bg-secondary border-bottom border-3">
        Mortage Calculator
      </h1>
      <div>
        <h2 className="text-light">Payment Calculator</h2>
        <div className="calc-btn-container">
          <button className="calc-type-btn bg-light">Purchase</button>
          <button className="calc-type-btn bg-secondary">
            Renewal/Refinance
          </button>
        </div>
        <div className="bg-light form-calc-container">
          <form className="form-calc">
            <label className="fs-5">Asking Price:</label>
            <input
              type="text"
              name="askingPrice"
              id="askingPrice"
              placeholder="649999"
              className="asking-price-input"
            />
            <button className="calc-btn bg-primary text-light">Go</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;

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
            <label>Asking Price:</label>
            <input
              type="text"
              name="askingPrice"
              id="askingPrice"
              placeholder="649999"
              className="asking-price-input"
            />
            <button className="calc-btn bg-primary text-light">Go</button>
          </form>
          <div className="container mortgage-calc">
            <div className="row">
              <div className="col"></div>
              <div className="col">Scenario 1</div>
              <div className="col">Scenario 2</div>
              <div className="col">Scenario 3</div>
            </div>
            <div className="row border-bottom border-2">
              <div className="col">Down Payment</div>
              <div className="col">5%</div>
              <div className="col">10%</div>
              <div className="col">15%</div>
            </div>
            <div className="row border-bottom border-2">
              <div className="col">Amount:</div>
              <div className="col">50,000</div>
              <div className="col">100,000</div>
              <div className="col">150,000</div>
            </div>
            <div className="row border-bottom border-2">
              <div className="col">Insurance:</div>
              <div className="col">20,000</div>
              <div className="col">15,000</div>
              <div className="col">9,000</div>
            </div>
            <div className="row border-bottom border-2 bg-primary text-light">
              <div className="col">TOTAL Mortage Required</div>
              <div className="col">50,000</div>
              <div className="col">100,000</div>
              <div className="col">150,000</div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col">Scenario 1</div>
              <div className="col">Scenario 2</div>
              <div className="col">Scenario 3</div>
            </div>
            <div className="row border-bottom border-2">
              <div className="col">Amortization period</div>
              <div className="col">
                <span>5 Year </span>
              </div>
              <div className="col">
                <span>15 Year </span>
              </div>
              <div className="col">
                <span>25 Year </span>
              </div>
            </div>

            <div className="row border-bottom border-2">
              <div className="col">Mortgage Rate</div>
              <div className="col">50,000</div>
              <div className="col">100,000</div>
              <div className="col">150,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;

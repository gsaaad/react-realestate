import React, { useState } from "react";
import priceFormat from "../../utils/priceFormat";
import "./MortgageCalculator.css";
const MortgageCalculator = () => {
  const [housePrice, setHousePrice] = useState(649999);
  const [formattedPrice, setFormattedPrice] = useState(priceFormat(housePrice));
  const stringPrice = String(housePrice);
  const handleHousePriceForm = (e) => {
    e.preventDefault();
    var userHousePrice = priceFormat(housePrice);

    setFormattedPrice(userHousePrice);
  };
  const handleHousePrice = (e) => {
    e.preventDefault();
    var userInput = e.target.value;
    console.log(userInput);
    setHousePrice(userInput);
  };
  const calculateRate = (price, percent) => {
    return priceFormat(priceFormat(price) * percent);
  };
  const calculateLoan = (price, downpaymentRate) => {
    const tempPrice = priceFormat(price);

    if (downpaymentRate >= 20) {
      return priceFormat(tempPrice - (tempPrice * downpaymentRate) / 100);
    } else if (downpaymentRate > 5 && downpaymentRate < 10) {
      // downpayment is reduced, and PMI is applied at rate 2.8% in the loan total
      return priceFormat(
        tempPrice - ((tempPrice * downpaymentRate) / 100 + tempPrice * 0.028)
      );
    } else {
      // downpayment is reduced, and PMI is applied at rate 3.7% in the loan total

      return priceFormat(
        tempPrice - ((tempPrice * downpaymentRate) / 100 + tempPrice * 0.037)
      );
    }
  };
  const calculateMortgagePayment = (loanPrincipal, rate, years) => {
    var numOfMonths = years * 12;
    var monthlyRate = rate / 12;
    var topSection = monthlyRate * (1 + monthlyRate ** numOfMonths);
    var botSection = 1 + monthlyRate ** numOfMonths - 1;

    // console.log("MONTHLY MORTGAGE:", (price * topSection) / botSection);
    return ((loanPrincipal * topSection) / botSection).toFixed(2);
  };

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
          <h2>Standard Fixed-Rate Loan</h2>
          <form className="form-calc" onSubmit={handleHousePriceForm}>
            <label>Asking Price:</label>
            <input
              type="text"
              name="askingPrice"
              id="askingPrice"
              value={housePrice}
              onChange={handleHousePrice}
              className="asking-price-input"
            />
            <button className="calc-btn bg-primary text-light" type="submit">
              Go
            </button>
          </form>
          <div className="container mortgage-calc">
            <div className="row">
              <div className="col"></div>
              <div className="col">Scenario 1</div>
              <div className="col">Scenario 2</div>
              <div className="col">Scenario 3</div>
            </div>
            <div className="row border-bottom border-2">
              <div className="col">Down Payment Rate</div>
              <div className="col">5%</div>
              <div className="col">10%</div>
              <div className="col">20%</div>
            </div>
            <div className="row border-bottom border-2">
              <div className="col">Down-Payment:</div>
              <div className="col">-{calculateRate(formattedPrice, 0.05)}</div>
              <div className="col">-{calculateRate(formattedPrice, 0.1)}</div>
              <div className="col">-{calculateRate(formattedPrice, 0.2)}</div>
            </div>
            <div className="row border-bottom border-2">
              <div className="col">Insurance:</div>
              <div className="col">+{calculateRate(formattedPrice, 0.037)}</div>
              <div className="col">+{calculateRate(formattedPrice, 0.028)}</div>
              <div className="col">+{calculateRate(formattedPrice, 0)}</div>
            </div>
            <div className="row border-bottom border-2 bg-primary text-light total-mortgage-container rounded shadow">
              <div className="col ">TOTAL Mortage Required</div>
              <div className="col">{calculateLoan(formattedPrice, 5)}</div>
              <div className="col">{calculateLoan(formattedPrice, 10)}</div>
              <div className="col"> {calculateLoan(formattedPrice, 20)}</div>
            </div>
            <div className="row">
              <div className="col"></div>
              {/* ? abiltiy to show different rates for each amortization rate? combos */}
              <div className="col">Scenario 1</div>
              <div className="col">Scenario 2</div>
              <div className="col">Scenario 3</div>
            </div>
            <div className="row border-bottom border-3 ">
              <div className="col">Amortization period (Yrs)</div>

              <select
                className="amortization-period-options"
                id="scenario-1-amor-period"
              >
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
              </select>
              <select
                className="amortization-period-options"
                id="scenario-2-amor-period"
              >
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
              </select>
              <select
                className="amortization-period-options"
                id="scenario-3-amor-period"
              >
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
              </select>
            </div>

            <div className="row border-bottom border-2">
              <div className="col">Mortgage Rate (%)</div>
              <select
                className="col mortgage-rate"
                id="scenario-1-mortgage-rate"
              >
                <option>2.25</option>
                <option>3.00</option>
                <option>3.75</option>
                <option>4.50</option>
                <option>5.25</option>
                <option>6.00</option>
                <option>8.00</option>
                <option>10.00</option>
              </select>
              <select
                className="col mortgage-rate"
                id="scenario-2-mortgage-rate"
              >
                <option>2.25</option>
                <option>3.00</option>
                <option>3.75</option>
                <option>4.50</option>
                <option>5.25</option>
                <option>6.00</option>
                <option>8.00</option>
                <option>10.00</option>
              </select>
              <select
                className="col mortgage-rate"
                id="scenario-3-mortgage-rate"
              >
                <option>2.25</option>
                <option>3.00</option>
                <option>3.75</option>
                <option>4.50</option>
                <option>5.25</option>
                <option>6.00</option>
                <option>8.00</option>
                <option>10.00</option>
              </select>
            </div>
            <div className="bg-light">
              <h2 className="bg-primary rounded shadow text-light mt-4">
                Land Transfer Tax || Profile
              </h2>
              <div className="row ">
                <h5>Total Land Transfer Tax:</h5>
                <h5>+$15,000</h5>
              </div>
              <div className="row land-tax-container ">
                <div className="col">
                  <span>Location</span>
                  <div>
                    <span className="row">
                      <span className="col">Province</span>
                      <select className="col">
                        <option>Ontario</option>
                        <option>Manitoba</option>
                      </select>
                    </span>
                    <span className="row">
                      <span className="col">City</span>
                      <select className="col">
                        <option>Toronto</option>
                        <option>Oakville</option>
                      </select>
                    </span>
                    <div className="first-home-buyer">
                      <span>First Time Home Buyer</span>
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <span className="border-bottom border-1">
                    Land Transfer Tax:
                  </span>
                  <div>
                    <span className="row">
                      <span className="col">Provincial</span>
                      <span className="col">+ $10,000</span>
                    </span>
                    <span className="row">
                      <span className="col">Municipal</span>
                      <span className="col">+ $5,000</span>
                    </span>
                    <span className="row">
                      <span className="col">Rebate:</span>
                      <span className="col">- $0</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-bottom border-2 bg-primary text-light">
              <h4 className="col">TOTAL Mortgage Payment</h4>
              <select className="mortgage-frequency">
                <option>Monthly</option>
                <option>Bi-Weekly</option>
                <option>Accelerated Bi-Weekly</option>
              </select>
              <span className="col monthly-payment">
                {calculateMortgagePayment()}+ {priceFormat(15000 / 12)}{" "}
                (property tax) + Unique Lifestyle Bills
              </span>
              <span className="col monthly-payment">
                {priceFormat(
                  calculateMortgagePayment(
                    housePrice -
                      calculateRate(
                        Number(formattedPrice.replace(/[^0-9.]+/g, "")),
                        0.1
                      ) +
                      calculateRate(
                        Number(formattedPrice.replace(/[^0-9.]+/g, "")),
                        0.02
                      ),
                    0.025,
                    25
                  )
                )}
                + {priceFormat(15000 / 12)} (property tax) + Bills
              </span>
              <span className="col monthly-payment">
                {priceFormat(
                  calculateMortgagePayment(
                    housePrice -
                      calculateRate(
                        Number(formattedPrice.replace(/[^0-9.]+/g, "")),
                        0.15
                      ) +
                      calculateRate(
                        Number(formattedPrice.replace(/[^0-9.]+/g, "")),
                        0.015
                      ),
                    0.025,
                    30
                  )
                )}
                + {priceFormat(15000 / 12)} (property tax) + Bills
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;

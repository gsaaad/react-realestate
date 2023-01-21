import React, { useState } from "react";
import priceFormat from "../../utils/priceFormat";
import "./MortgageCalculator.css";
const MortgageCalculator = () => {
  const [housePrice, setHousePrice] = useState(649999);
  const [formattedPrice, setFormattedPrice] = useState(priceFormat(housePrice));

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
              <div className="col">Down Payment</div>
              <div className="col">5%</div>
              <div className="col">10%</div>
              <div className="col">15%</div>
            </div>
            <div className="row border-bottom border-2">
              <div className="col">Amount:</div>
              <div className="col">
                {priceFormat(
                  Number(formattedPrice.replace(/[^0-9.]+/g, "")) * 0.05
                )}
              </div>
              <div className="col">
                {priceFormat(
                  Number(formattedPrice.replace(/[^0-9.]+/g, "")) * 0.1
                )}
              </div>
              <div className="col">
                {priceFormat(
                  Number(formattedPrice.replace(/[^0-9.]+/g, "")) * 0.15
                )}
              </div>
            </div>
            <div className="row border-bottom border-2">
              <div className="col">Insurance:</div>
              <div className="col">
                {priceFormat(
                  Number(formattedPrice.replace(/[^0-9.]+/g, "")) * 0.03
                )}
              </div>
              <div className="col">
                {priceFormat(
                  Number(formattedPrice.replace(/[^0-9.]+/g, "")) * 0.02
                )}
              </div>
              <div className="col">
                {priceFormat(
                  Number(formattedPrice.replace(/[^0-9.]+/g, "")) * 0.015
                )}
              </div>
            </div>
            <div className="row border-bottom border-2 bg-primary text-light">
              <div className="col">TOTAL Mortage Required</div>
              <div className="col">
                {priceFormat(
                  Number(formattedPrice.replace(/[^0-9.]+/g, "")) * 0.05 +
                    Number(formattedPrice.replace(/[^0-9.]+/g, "")) * 0.03
                )}
              </div>
              <div className="col">
                {" "}
                {priceFormat(
                  Number(formattedPrice.replace(/[^0-9.]+/g, "")) * 0.1 +
                    Number(formattedPrice.replace(/[^0-9.]+/g, "")) * 0.02
                )}
              </div>
              <div className="col">
                {" "}
                {priceFormat(
                  Number(formattedPrice.replace(/[^0-9.]+/g, "")) * 0.15 +
                    Number(formattedPrice.replace(/[^0-9.]+/g, "")) * 0.015
                )}
              </div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col">Scenario 1</div>
              <div className="col">Scenario 2</div>
              <div className="col">Scenario 3</div>
            </div>
            <div className="row border-bottom border-3 ">
              <div className="col">Amortization period</div>
              {/* <input
                type="text"
                value="15"
                style={{
                  maxWidth: "17.5%",
                  margin: "0px 12.95px",
                  textAlign: "center",
                }}
              />
              <input
                type="text"
                value="25"
                style={{
                  maxWidth: "17.5%",
                  margin: "0px 12.95px",
                  textAlign: "center",
                }}
              />
              <input
                type="text"
                value="30"
                style={{
                  maxWidth: "17.5%",
                  margin: "0px 12.95px",
                  textAlign: "center",
                }}
              /> */}
            </div>

            <div className="row border-bottom border-2">
              <div className="col">Mortgage Rate</div>
              <input
                type="text"
                name="mortgage-rate-one"
                placeholder="1.5"
                className="col mortgage-rate"
              />
              <input
                type="text"
                name="mortgage-rate-two"
                placeholder="1.5"
                className="col mortgage-rate"
              />
              <input
                type="text"
                name="mortgage-rate-three"
                placeholder="1.5"
                className="col mortgage-rate"
              />
            </div>
            <div className="row border-bottom border-2 bg-primary text-light">
              <div className="col">TOTAL Mortage Payment</div>
              <select className="mortgage-frequency">
                <option>Monthly</option>
                <option>Bi-Weekly</option>
                <option>Accelerated Bi-Weekly</option>
              </select>
              <span className="col m-3">$-</span>
              <span className="col m-3">$-</span>
              <span className="col m-3">$-</span>
            </div>
            <div className="bg-light">
              <h2>Land Transfer Tax || Profile</h2>
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
                    Total Land Transfer Tax:{" "}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;

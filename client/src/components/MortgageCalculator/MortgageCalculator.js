import React, { useState } from "react";
import priceFormat from "../../utils/priceFormat";
import "./MortgageCalculator.css";
import propertyTaxRates from "../../propertyTax.json";
const MortgageCalculator = () => {
  const [housePrice, setHousePrice] = useState(649999);
  const [formattedPrice, setFormattedPrice] = useState(priceFormat(housePrice));
  const [s1MortgageRate, setS1MortgageRate] = useState(2.25);
  const [s2MortgageRate, setS2MortgageRate] = useState(2.25);
  const [s3MortgageRate, setS3MortgageRate] = useState(2.25);
  const [s1AmorPeriod, setS1AmorPeriod] = useState(5);
  const [s2AmorPeriod, setS2AmorPeriod] = useState(5);
  const [s3AmorPeriod, setS3AmorPeriod] = useState(5);
  const [propertyState, setPropertyState] = useState("ON");
  const [paymentFrequency, setPaymentFrequency] = useState(12);

  const handleHousePriceForm = (e) => {
    e.preventDefault();
    var userHousePrice = priceFormat(housePrice);

    setFormattedPrice(userHousePrice);
  };
  const handleHousePrice = (e) => {
    e.preventDefault();
    var userInput = e.target.value;
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
    var principal = loanPrincipal;
    principal = priceFormat(principal);
    var numOfMonths = years * 12;
    var monthlyRate = rate / 100 / 12;
    var topSection = principal * monthlyRate * (1 + monthlyRate ** numOfMonths);
    var botSection = (1 + monthlyRate) ** numOfMonths - 1;
    var mortgagePayment = priceFormat(
      (((topSection / botSection) * 12) / paymentFrequency).toFixed(2)
    );
    return mortgagePayment;
  };
  const getPropertyTaxRate = () => {
    const pronvinces = propertyTaxRates.provincePropertyTax;
    const result = pronvinces.filter(
      (province) => province.name === propertyState
    );
    const propertyRate = result[0].rate;
    return propertyRate;
  };
  const calculatePropertyTaxRate = () => {
    const result = getPropertyTaxRate() / 100;
    return priceFormat((result * housePrice).toFixed(2));
  };

  const handlePaymentFrequency = (e) => {
    e.preventDefault();
    const frequency = e.target.value;
    frequency === "Monthly"
      ? setPaymentFrequency(12)
      : frequency === "Bi-Weekly"
      ? setPaymentFrequency(24)
      : setPaymentFrequency(26);
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
                onChange={(e) => setS1AmorPeriod(e.target.value)}
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
                onChange={(e) => setS2AmorPeriod(e.target.value)}
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
                onChange={(e) => setS3AmorPeriod(e.target.value)}
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
                onChange={(e) => {
                  setS1MortgageRate(e.target.value);
                }}
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
                onChange={(e) => {
                  setS2MortgageRate(e.target.value);
                }}
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
                onChange={(e) => {
                  setS3MortgageRate(e.target.value);
                }}
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
                <h5>+{calculatePropertyTaxRate()}</h5>
              </div>
              <div className="row land-tax-container ">
                <div className="col">
                  <span>Location</span>
                  <div>
                    <span className="row">
                      <span className="col">Province</span>
                      <select
                        className="col"
                        id="state-property-tax"
                        onChange={(e) => setPropertyState(e.target.value)}
                      >
                        <option>ON</option>
                        <option>MN</option>
                        <option>BC</option>
                        <option>AB</option>
                        <option>NB</option>
                        <option>SK</option>
                        <option>NL</option>
                        <option>NS</option>
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
                      <span className="col">Provincial Rate(%)</span>
                      <span className="col">{getPropertyTaxRate()}</span>
                    </span>
                    <span className="row">
                      <span className="col">Rebate($):</span>
                      <span className="col">- $0</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-bottom border-2 bg-primary text-light">
              <h4 className="col">TOTAL Mortgage Payment</h4>
              <select
                className="mortgage-frequency"
                onChange={(e) => handlePaymentFrequency(e)}
              >
                <option>Monthly</option>
                <option>Bi-Weekly</option>
                <option>Accelerated Bi-Weekly</option>
              </select>
              <span className="col monthly-payment">
                {calculateMortgagePayment(
                  formattedPrice,
                  s1MortgageRate,
                  s1AmorPeriod
                )}{" "}
                +
                {priceFormat(
                  priceFormat(calculatePropertyTaxRate()) / paymentFrequency
                )}{" "}
                (property tax) + Unique Lifestyle
              </span>
              <span className="col monthly-payment">
                {calculateMortgagePayment(
                  formattedPrice,
                  s2MortgageRate,
                  s2AmorPeriod
                )}{" "}
                +
                {priceFormat(
                  priceFormat(calculatePropertyTaxRate()) / paymentFrequency
                )}{" "}
                (property tax) + Unique Lifestyle
              </span>
              <span className="col monthly-payment">
                {calculateMortgagePayment(
                  formattedPrice,
                  s3MortgageRate,
                  s3AmorPeriod
                )}{" "}
                +
                {priceFormat(
                  priceFormat(calculatePropertyTaxRate()) / paymentFrequency
                )}{" "}
                (property tax) + Unique Lifestyle
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;

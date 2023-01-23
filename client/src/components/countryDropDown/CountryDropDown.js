import { useState } from "react";
import canadaFlag from "../../assets/img/canada.png";
import usaFlag from "../../assets/img/usa.png";
// USA FLAG

function CountryDropDown() {
  const [country, setCountry] = useState({ name: "CAN", flag: canadaFlag });

  const handleChangeCountry = (e) => {
    e.preventDefault();
    var countryBtn = document.getElementById("country-btn");
    var toggleBtn = document.getElementById("toggle-btn");

    if (country.name === "CAN") {
      setCountry({ name: "USA", flag: usaFlag });
      countryBtn.className = "btn btn-primary ";
      toggleBtn.className =
        "btn btn-primary dropdown-toggle dropdown-toggle-split";
    } else {
      setCountry({ name: "CAN", flag: canadaFlag });
      countryBtn.className = "btn btn-danger ";
      toggleBtn.className =
        "btn btn-danger dropdown-toggle dropdown-toggle-split";
    }
  };

  return (
    <div className="btn-group">
      <button type="button" className="btn btn-danger" id="country-btn">
        <img
          src={country.flag}
          alt="Canada Country Flag"
          style={{ width: "30px" }}
        />
        {country.name}
      </button>
      <button
        type="button"
        id="toggle-btn"
        className="btn btn-danger dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={handleChangeCountry}
      >
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
    </div>
  );
}

export default CountryDropDown;

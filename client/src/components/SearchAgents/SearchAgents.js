import React from "react";

function SearchAgents() {
  const handleAgentCriteria = (e) => {
    e.preventDefault();

    // user has 3 criteria for agents.
    // if not selected, keep classname secondary, else change classname to bg-light
    var list_criteria = ["Name", "Location", "Realtor"];
    var userSelected = e.target.id;
    var not_selected = list_criteria.filter(
      (value) => !(value === userSelected)
    );
    var mainForm = `search-agent-${userSelected}-form`;
    not_selected.forEach((element) => {
      var formNames = `search-agent-${element}-form`;

      var buttonClassname = document.getElementById(element);
      buttonClassname.className = "agent-category-btn bg-secondary";

      document.getElementById(formNames).style = "display: none";
    });
    document.getElementById(userSelected).className =
      "agent-category-btn bg-light";
    document.getElementById(mainForm).style = "display: block";
  };
  return (
    <div>
      <h1 className="text-light my-3">
        Find Sweet Agents for your Real Estate needs
      </h1>
      <div className="calc-btn-container">
        <button
          className="agent-category-btn bg-light"
          id="Name"
          onClick={handleAgentCriteria}
        >
          Name
        </button>
        <button
          className="agent-category-btn bg-secondary"
          id="Location"
          onClick={handleAgentCriteria}
        >
          Location
        </button>
        <button
          className="agent-category-btn bg-secondary"
          id="Realtor"
          onClick={handleAgentCriteria}
        >
          Realtor
        </button>
      </div>
      <div className="bg-light form-calc-container">
        <form id="search-agent-Name-form">
          <h2>Search By Realtor Name</h2>
          <input type="text" name="firstName" placeholder="first name" />
          <input type="text" name="lastName" placeholder="last name" />
          <br />
          <button>Search By Name</button>
        </form>
        <form id="search-agent-Location-form" style={{ display: "none" }}>
          <h2>Search By Location</h2>

          <input type="text" name="Location" placeholder="Location" />
          <br />
          <button>Search By Location</button>
        </form>
        <form id="search-agent-Realtor-form" style={{ display: "none" }}>
          <h2>Search By Realtor</h2>

          <input type="text" name="realtor name" placeholder="realtor name" />
          <br />
          <button>Search By Realtor</button>
        </form>
      </div>
    </div>
  );
}

export default SearchAgents;

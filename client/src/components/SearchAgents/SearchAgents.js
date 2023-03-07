import React, { useState } from "react";
import axios from "axios";
import capitalizeName from "../../utils/capitalizeName";
import capitalizeRealtor from "../../utils/capitalizeRealtor";
import AgentsAvailable from "../AgentsAvailable/AgentsAvailable";
import data from "../../agents.json";
import capitalizeLocation from "../../utils/capitalizeLocation";

function SearchAgents() {
  const agentsData = data.props;
  var randomSliceOne = agentsData.slice(0, 7);

  // first name and last name form state
  const [nameData, setNameData] = useState({
    firstName: "",
    lastName: "",
  });

  const [locationData, setLocationData] = useState({ location: "Toronto" });
  const [realtorData, setRealtorData] = useState({
    realtor: "CB Realty",
  });

  const [sweetAgents, setSweetAgents] = useState(randomSliceOne);

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

  const handleAgentNameForm = (e) => {
    e.preventDefault();
    var agentFirstName = nameData.firstName;
    var agentLastName = nameData.lastName;
    // added hyphen between capitalized first and last name to match backend syntax
    var agentFullName = agentFirstName + "-" + agentLastName;
    console.log("LOOKING FOR AGENT WITH NAME: " + agentFullName);
    fetchAgentName(agentFullName);
  };
  const handleAgentLocationForm = (e) => {
    e.preventDefault();
    // todo fix backend syntax to match naturally
    // addition of semi colon to match backend syntax
    const agentLocation = locationData.location;
    console.log(agentLocation);
    fetchAgentLocation(agentLocation);
  };
  const handleAgentRealtorForm = (e) => {
    // turn realtor company to match syntax in backend
    var agentRealtor = capitalizeRealtor(realtorData.realtor);
    console.log("agent realtor: " + agentRealtor);
    fetchAgentRealtor(agentRealtor);
    e.preventDefault();
  };
  async function fetchAgentName(agentName) {
    // fetch agent data from backend with associated name

    const agents = await axios
      .get(`//localhost:3001/api/agent/name/` + agentName)
      .then((agentData) => {
        const listOfAgents = agentData.data;

        console.log("We found agents with the name", agentName);
        console.log(listOfAgents);
        if (listOfAgents.length > 0) {
          setSweetAgents(listOfAgents);
        }
      });
  }
  async function fetchAgentRealtor(agentRealtor) {
    // fetch agent data from backend with associated realtor
    const agents = await axios
      .get(`//localhost:3001/api/agent/realtor/` + agentRealtor)
      .then((agentData) => {
        const listOfAgents = agentData.data;

        console.log("We found agents with associated realtor", agentRealtor);
        console.log(listOfAgents);
        if (listOfAgents.length > 0) {
          setSweetAgents(listOfAgents);
        }
      });
  }
  async function fetchAgentLocation(agentLocation) {
    const agents = await axios
      .get("//localhost:3001/api/agent/city/" + agentLocation)
      .then((agentData) => {
        const listOfAgents = agentData.data;
        console.log("We found agents in this city", agentLocation);
        console.log(listOfAgents);
        if (listOfAgents.length > 0) {
          setSweetAgents(listOfAgents);
        }
      });
  }

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
        <form id="search-agent-Name-form" onSubmit={handleAgentNameForm}>
          <h2>Search By Realtor Name</h2>
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            value={FormData.firstName}
            minLength="4"
            onChange={(e) =>
              setNameData({
                ...nameData,
                firstName: capitalizeName(e.target.value),
              })
            }
          />
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            minLength="4"
            onChange={(e) =>
              setNameData({
                ...nameData,
                lastName: capitalizeName(e.target.value),
              })
            }
          />
          <br />
          <button>Search By Name</button>
        </form>
        <form
          id="search-agent-Location-form"
          style={{ display: "none" }}
          onSubmit={handleAgentLocationForm}
        >
          <h2>Search By Location</h2>

          <input
            type="text"
            name="Location"
            placeholder="Location"
            value={locationData.location}
            onChange={(e) => {
              setLocationData({
                location: capitalizeLocation(e.target.value),
              });
            }}
          />
          <br />
          <button>Search By Location</button>
        </form>
        <form
          id="search-agent-Realtor-form"
          style={{ display: "none" }}
          onSubmit={handleAgentRealtorForm}
        >
          <h2>Search By Realtor</h2>

          <input
            type="text"
            name="realtor name"
            placeholder="realtor name"
            value={realtorData.realtor}
            onChange={(e) => {
              setRealtorData({ realtor: e.target.value });
            }}
          />
          <br />
          <button>Search By Realtor</button>
        </form>
        <AgentsAvailable agents={sweetAgents} />
      </div>
    </div>
  );
}

export default SearchAgents;

import React from "react";
import "./AgentsAvailable.css";

// import Agent

function AgentsAvailable(agentsArray) {
  var agents = agentsArray.agents;

  console.log("Agents available are:", agents);

  return (
    <div className="bg-primary">
      <h1 className="agents-h1 bg-gradient text-light text-center rounded">
        Sweet Agents Available
      </h1>
    </div>
  );
}

export default AgentsAvailable;

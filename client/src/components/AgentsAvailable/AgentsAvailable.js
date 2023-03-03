import React from "react";
import Agent from "../Agents/Agents";
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
      <div className="container text-center">
        <div>
          {agents.length > 0 &&
            agents.map((agent) => {
              return <Agent agent={agent} key={agent.licenseId} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default AgentsAvailable;

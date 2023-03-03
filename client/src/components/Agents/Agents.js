import React from "react";
import AgentAvatar from "../AgentAvatar/AgentAvatar";

function Agent(props) {
  var agent = props.agent;

  return (
    <div className="row bg-gradient mt-4 rounded">
      <AgentAvatar agent={agent} />
      <div className="rounded-pill p-2 text-center text-light">
        <h2 className="m-2 text-warning">
          <span className=" border-dark text-light m-2">Located:</span>
          {agent.city}
        </h2>

        <h2 className="border-bottom border-dark text-light m-2">
          Professional Statement:
        </h2>
        <h2 className="m-2 text-warning">{agent.profileStatement}</h2>
      </div>
    </div>
  );
}

export default Agent;

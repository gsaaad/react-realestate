import React from "react";
import AgentAvatar from "../AgentAvatar/AgentAvatar";

function Agent(props) {
  var agent = props.agent;

  return (
    <div className="row bg-gradient mt-4 rounded">
      <AgentAvatar agent={agent} />
      <div className="rounded-pill p-2 text-center text-light"></div>
    </div>
  );
}

export default Agent;

import React from "react";

function AgentAvatar(props) {
  var agentAvatar = props.agent;

  return (
    <div className="col text-right mt-4 text-dark">
      <img
        src={agentAvatar.imgSrc}
        alt={agentAvatar.email}
        width={
          document.body.clientWidth > 600
            ? document.body.clientWidth * 0.24
            : document.body.clientWidth * 0.6
        }
        className="border border-dark rounded"
      />
      <div className="bg-gradient rounded border border-secondary m-2 p-2 shadow-lg">
        <h2 className="m-2 text-warning">
          <span className="border-bottom border-dark text-light m-2">
            Agent Name:
          </span>
          {agentAvatar.name}
        </h2>
        <h2 className="m-2 text-warning">
          <span className="border-bottom border-dark text-light m-2">
            Located:
          </span>
          {agentAvatar.city}
        </h2>
        <h2 className="m-2 text-warning">
          <span className="border-bottom border-dark text-light m-2">
            Professional Statement
          </span>
          {agentAvatar.profileStatement}
        </h2>
      </div>
    </div>
  );

  return;
}

export default AgentAvatar;

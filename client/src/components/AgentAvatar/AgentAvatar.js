import React from "react";

function AgentAvatar(props) {
  var agentAvatar = props.agent;

  return (
    <div className="col text-right mt-4 text-dark">
      <h4 className="text-light ">licenseId : {agentAvatar.licenseId}</h4>
      <h4 className="text-light ">
        Agent Since : {agentAvatar.agentSince.slice(0, 10)}
      </h4>
      <img
        src={agentAvatar.imgSrc}
        alt={agentAvatar.email}
        width={
          document.body.clientWidth > 600
            ? document.body.clientWidth * 0.25
            : document.body.clientWidth * 0.6
        }
        className="border border-dark rounded"
      />
      <div className="bg-gradient rounded border border-secondary m-2 p-2 shadow-lg">
        <h2 className="m-2 text-warning">
          <span className=" border-dark text-light m-2">Agent Name:</span>
          {agentAvatar.name}
        </h2>
        <h2 className="m-2 text-warning">
          <span className=" border-dark text-light m-2">Represents:</span>
          {agentAvatar.representsRealtor}
        </h2>
      </div>
    </div>
  );
}

export default AgentAvatar;

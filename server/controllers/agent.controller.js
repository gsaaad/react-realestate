const dbConnection = require("../config/connection");
const { Agent } = require("../models");

const agentController = {
  errorMessage:
    "There was an error while retrieving all agents... Try again Later",
  idMessage: "No Agent found with this id...",

  getAllAgents(req, res) {
    Agent.find({})
      .then((agentData) => {
        res.json(agentData);
      })
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400);
      });
  },
};

module.exports = agentController;

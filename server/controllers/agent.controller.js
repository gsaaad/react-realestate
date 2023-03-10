const { Agent } = require("../models");

const agentController = {
  errorMessage:
    "There was an error while managing your request... Try again Later",
  idMessage: "No Agent found with this id...",

  getAllAgents(req, res) {
    Agent.find({})
      .then((agentData) => {
        res.json(agentData);
      })
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400).json({ message: this.errorMessage });
      });
  },
  getAgentById({ params }, res) {
    Agent.findOne({ _id: [params.id] })
      .then((agentData) => {
        if (!agentData) {
          res.status(404).json({ message: this.idMessage });
          return false;
        }
        res.json(agentData);
      })
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400).json({ message: this.errorMessage });
      });
  },
  getAgentByName({ params }, res) {
    console.log(" params name for agent " + params.name);
    var agentName = params.name.split("-").join(" ");
    console.log("post name split", agentName);
    Agent.find({ name: agentName })
      .then((agentData) => {
        console.log("query for agent name in db result", agentData);

        if (!agentData) {
          res.status(404).json({ message: this.errorMessage });
          return false;
        }
        res.json(agentData);
      })
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400).json({ message: this.errorMessage });
      });
  },
  getAgentByRealtor({ params }, res) {
    console.log(" params realtor business " + params.representsRealtor);

    var agentBusiness = params.representsRealtor;
    console.log(" agentBusiness " + agentBusiness);
    Agent.find({ representsRealtor: agentBusiness })
      .then((agentData) => {
        console.log("query for agent Realtor in db result", agentData);

        if (!agentData) {
          res.status(404).json({ message: this.errorMessage });
          return false;
        }
        res.json(agentData);
      })
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400).json({ message: this.errorMessage });
      });
  },
  getAgentByCity({ params }, res) {
    console.log("agentCity:", params.city);
    var agentCity = String(params.city) + ":";
    console.log("agentCity:", agentCity);
    Agent.find({ city: agentCity })
      .then((agentData) => {
        console.log("query for agent's city in db result", agentData);

        if (!agentData) {
          res.status(404).json({ message: this.errorMessage });
          return false;
        }
        res.json(agentData);
      })
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400).json({ message: this.errorMessage });
      });
  },
  createAgent: ({ body }, res) => {
    console.log("AGENT BODY TO CREATE IS", body);
    Agent.create(body)
      .then((agentData) => {
        res.json(agentData);
      })
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.status(400).json({ message: this.errorMessage });
      });
  },
  updateAgent({ params, body }, res) {
    Agent.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((agentData) => {
        if (!agentData) {
          res.status(404).json({ message: this.idMessage });
          return false;
        }
        return res.json(agentData);
      })
      .catch((e) => {
        console.log(e, this.errorMessage);
      });
  },
  deleteAgent({ params }, res) {
    Agent.findOneAndDelete({ _id: params.id }).then((agentData) => {
      if (!agentData) {
        res.status(404).json({ message: this.idMessage });
        return false;
      }
      res.json(agentData);
    });
  },
};

module.exports = agentController;

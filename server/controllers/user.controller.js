const { User } = require("../models");

const userController = {
  errorMessage:
    "There was an error while managing your request for a User.. Try again Later",
  idMessage: "No User found with this id...",

  getAllUsers(req, res) {
    User.find({})
      .then((userData) => {
        res.json(userData);
      })
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400).json({ message: this.errorMessage });
      });
  },
  getUserById({ params }, res) {
    User.findOne({ _id: [params.id] })
      .then((userData) => {
        if (!userData) {
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
  getUserByFistName({ params }, res) {
    const firstName = params.firstName;
    console.log("Params first name for User" + firstName);
    User.find({ firstName: firstName })
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: this.errorMessage });
        }
        res.json(userData);
      })
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400).json({ message: this.errorMessage });
      });
  },
  getUserByLastName({ params }, res) {
    const lastName = params.lastName;
    console.log("Params last Name for User" + lastName);

    User.find({ lastName: lastName })
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: this.errorMessage });
        }
        res.json(userData);
      })
      .catch((e) => {
        console.error(e);
        res.sendStatus(400).json({ message: this.errorMessage });
      });
  },
};
module.exports = userController;

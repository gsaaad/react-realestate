const dbConnection = require("../config/connection");
const { Property } = require("../models");

const propertyController = {
  errorMessage:
    "There was an error while retrieving all properties... Try again Later",
  idMessage: "No Property found with this id..",
  getAllProperties(req, res) {
    Property.find({})
      .then((propertyData) => res.json(propertyData))
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400);
      });
  },
  getPropertyId({ params }, res) {
    Property.findOne({ _id: [params.id] })
      .then((propertyData) => res.json(propertyData))
      .catch((e) => {
        console.log(this.errorMessage);
        res.sendStatus(400);
      });
  },
  createProperty: ({ body }, res) => {
    Property.create(body)
      .then((propertData) => res.json(propertData))
      .catch((err) => res.json(err));
  },
  updateProperty: ({ params, body }, res) => {
    Property.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((propertyData) => {
        if (!propertyData) {
          res.status(404).json({ message: this.idMessage });
          return false;
        }
        res.json(propertyData);
      })
      .catch((e) => {
        res.status(400).json(e);
      });
  },
  deleteProperty: ({ params }, res) => {
    Property.findOneAndDelete({ _id: params.id }).then((propertyData) => {
      if (!propertyData) {
        res.status(404).json({ message: this.idMessage });
        return false;
      }
      res.json(propertyData);
    });
  },
};

module.exports = propertyController;

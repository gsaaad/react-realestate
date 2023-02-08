const { Property } = require("../models");

const propertyController = {
  errorMessage:
    "There was an error while managing your request... Try again Later",
  idMessage: "No Property found with this id..",
  getAllProperties(req, res) {
    Property.find({})
      .then((propertyData) => res.json(propertyData))
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400);
      });
  },
  getPropertyById({ params }, res) {
    Property.findOne({ _id: [params.id] })
      .then((propertyData) => {
        if (!propertyData) {
          res.status(404).json({ message: this.errorMessage });
          return false;
        }
        res.json(propertyData);
      })
      .catch((e) => {
        console.log(e, this.idMessage);
        res.sendStatus(400);
      });
  },
  getPropertyByCity: ({ params }, res) => {
    // location is "city, state"
    console.log("looking properties with location....", params.location);

    Property.find({ location: params.location })
      .then((propertyData) => {
        console.log(propertyData);
        if (!propertyData) {
          res.status(404).json({ message: this.errorMessage });
          return false;
        }
        res.json(propertyData);
      })
      .catch((e) => {
        console.error(e);
      });
  },
  createProperty: ({ body }, res) => {
    Property.create(body)
      .then((propertData) => res.json(propertData))
      .catch((e) => res.json(e));
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

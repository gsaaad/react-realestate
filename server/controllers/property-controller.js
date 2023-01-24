const { Property } = require("./models");

const propertyController = {
  message:
    "There was an error while retrieving all properties... Try again Later",
  getAllProperties(req, res) {
    Property.find({})
      .then((propertyData) => res.json(propertyData))
      .catch((e) => {
        console.error(e, this.message);
        res.sendStatus(400);
      });
  },
  getPropertyId({ params }, res) {
    Property.findOne({ _id: [params.id] })
      .then((propertyData) => res.json(propertyData))
      .catch((e) => {
        console.log(this.message);
      });
  },
};

module.exports = propertyController;

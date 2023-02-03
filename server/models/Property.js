const { Schema, model } = require("mongoose");

// Property requires parameters:
// propertyType,
// country,
// address,
// imgSrc(ideally 3+ pictures),
// status,
// price,
// ? sqft = 2200
// ? lotsize = 3000

const propertySchema = new Schema(
  {
    propertyType: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    propertyArea: {
      type: Number,
    },
    livingArea: {
      type: Number,
    },
    AreaType: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
    },
    bathrooms: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    latitude: {
      type: Number,
    },
    listingStatus: {
      type: String,
      required: true,
    },
  },
  // for getters, return in json format
  { toJSON: { getters: true } }
);

const property = model("Property", propertySchema);
module.exports = property;

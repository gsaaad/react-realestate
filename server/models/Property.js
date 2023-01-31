const { Schema, model } = require("mongoose");

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
    status: {
      type: String,
      required: true,
    },
  },
  // for getters, return in json format
  { toJSON: { getters: true } }
);

const property = model("Property", propertySchema);
module.exports = property;

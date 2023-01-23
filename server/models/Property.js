const { Schema, model } = require("mongoose");

const propertySchema = new Schema(
  {
    propertyType: {
      type: String,
    },
    country: {
      type: String,
    },
    imgSrc: { type: String },
    currency: {
      type: String,
    },
    price: { type: Number },
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
    lantitude: {
      type: Number,
    },
    status: {
      type: String,
    },
  },
  { toJSON: { getters: true } }
);

const property = model("Property", propertySchema);
module.exports = earthquake;

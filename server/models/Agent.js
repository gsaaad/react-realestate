const { Schema, model } = require("mongoose");

const agentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  profileLink: {
    type: String,
    required: true,
  },
  profileStatement: {
    type: String,
    required: true,
  },
  specialties: {
    type: [String],
  },
  agentSince: {
    type: Date,
    required: true,
  },
  reviewStars: {
    type: Number,
  },
  reviewsDescp: {
    type: String,
  },
  reviewsList: {
    type: [String],
  },
});

const agent = model("Agent", agentSchema);
module.exports = agent;

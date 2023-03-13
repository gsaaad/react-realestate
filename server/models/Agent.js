const { Schema, model } = require("mongoose");

// Agent requires parameters:
// name
// email
// imgSrc(ideally 3+ pictures)
// profileStatement
// representsRealtor
// city
// licenseId
// agentSince
const agentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
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
  },
  profileStatement: {
    type: String,
    required: true,
  },
  representsRealtor: {
    type: String,
    required: true,
  },
  licenseId: {
    type: Number,
    required: true,
  },
  specialties: {
    type: [String],
  },
  agentSince: {
    type: Date,
    required: true,
  },
  city: {
    type: String,
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

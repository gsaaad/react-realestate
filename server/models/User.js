const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
// User will have parameters:

// first name
// last name
// email
// password
// confirmed Password
// city / location -> city, state, country

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  confirmedPassword: {
    type: String,
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  // introduction of tokens for authentication
  tokens: [
    {
      refreshToken: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const user = model("User", userSchema);

module.exports = user;

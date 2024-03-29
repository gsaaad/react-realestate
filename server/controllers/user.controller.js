const bcrypt = require("bcrypt");
const { User } = require("../models");
const jwt = require("jsonwebtoken");

const token_secret = process.env.TOKEN_SECRET;

const userController = {
  errorMessage:
    "There was an error while managing your request for a User.. Try again Later",
  idMessage: "No User found with this id...",

  async generateRefreshToken(user) {
    const refreshToken = jwt.sign({ user: user.email }, token_secret, {
      expiresIn: "7d",
    });
    try {
      user.tokens.push({ refreshToken });
      await user.save();
      return refreshToken;
    } catch (err) {
      console.error("Error saving refresh token:", err);
      throw new Error("Error in generating refresh token");
    }
  },
  async hashPassword(password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      return hashedPassword;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getAllUsers(req, res) {
    await User.find({})
      .then((userData) => {
        res.json(userData);
      })
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400).json({ message: this.errorMessage });
      });
  },
  async getUserById({ params }, res) {
    console.log("Looking for user with this ID", params.id);
    await User.findOne({ _id: [params.id] })
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: this.idMessage });
          return false;
        }
        res.json(userData);
      })
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400).json({ message: this.errorMessage });
      });
  },
  async getUserByFirstName({ params }, res) {
    const firstName = params.firstname;
    console.log("Params first Name for User: " + firstName);

    await User.find({ firstName: firstName })
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
  async getUserByLastName({ params }, res) {
    const lastName = params.lastname;
    console.log("Params last Name for User: " + lastName);

    await User.find({ lastName: lastName })
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
  async getUserByEmail({ params }, res) {
    const userEmail = params.email;

    console.log("Params email for User", userEmail);

    await User.find({ email: userEmail })
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
  // getUserByLocation({ params }, res) {
  //   const userLocation = params.location;
  //   console.log("Params location for User", userLocation);

  //   User.find({ location: userLocation })
  //     .then((userData) => {
  //       if (!userData) {
  //         res.status(404).json({ message: this.errorMessage });
  //       }
  //       res.json(userData);
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //       res.sendStatus(404).json({ message: this.errorMessage });
  //     });
  // },
  async createUser({ body }, res) {
    try {
      const isAlreadyUser = await User.find({ email: body.email });

      if (isAlreadyUser.length > 0) {
        res.status(400).json({ message: "User already exists" });
        return false;
      }

      // Create the user object
      const user = new User(body);

      // Save the user object to the database
      const savedUser = await user.save();

      // Send response
      res.json({
        message: "User created successfully",
        user: savedUser,
      });
    } catch (e) {
      console.error(e, this.errorMessage);
      res.status(400).json({ message: this.errorMessage });
    }
  },
  // login user already returns token... include refresh token and in user model
  async loginUser({ body }, res) {
    const userInfo = body;
    console.log("User is logging in with", userInfo);

    // find user by email
    const user = await User.findOne({ email: userInfo.email });

    if (!user) {
      res.status(404).json({ message: this.errorMessage });
      return false;
    } else {
      console.log("backend password", user.password);
      console.log("userinfo password", userInfo.password);

      try {
        bcrypt.compare(
          userInfo.password,
          user.password,
          async function (err, result) {
            if (result) {
              console.log("Matched result", result);
              const accessToken = jwt.sign(
                { user: userInfo.email },
                token_secret,
                { expiresIn: "7d" }
              );
              const refreshToken = await userController.generateRefreshToken(
                user
              );
              res.json({ accessToken, refreshToken });
            } else {
              console.log(
                "Mismatched result... different password try again",
                result
              );
              res.status(404).json({ message: this.errorMessage });
            }
          }
        );
      } catch (e) {
        console.error(e, this.errorMessage);
      }
    }
  },

  async updateUser({ params, body }, res) {
    await User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: this.idMessage });
          return false;
        }
        return res.json(userData);
      })
      .catch((e) => {
        console.error(e);
        res.status(400).json({ message: this.idMessage });
      });
  },
  async deleteUser({ params }, res) {
    await User.findOneAndDelete({ _id: params.id }).then((userData) => {
      if (!userData) {
        res.status(404).json({ message: this.idMessage });
        return false;
      }
      res.json(userData);
    });
  },
};
module.exports = userController;

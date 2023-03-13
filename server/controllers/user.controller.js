const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const token_secret = process.env.TOKEN_SECRET;

const userController = {
  errorMessage:
    "There was an error while managing your request for a User.. Try again Later",
  idMessage: "No User found with this id...",

  getAllUsers(req, res) {
    User.find({})
      .then((userData) => {
        res.json(userData);
      })
      .catch((e) => {
        console.error(e, this.errorMessage);
        res.sendStatus(400).json({ message: this.errorMessage });
      });
  },
  getUserById({ params }, res) {
    console.log("Looking for user with this ID", params.id);
    User.findOne({ _id: [params.id] })
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
  getUserByFirstName({ params }, res) {
    const firstName = params.firstname;
    console.log("Params first Name for User: " + firstName);

    User.find({ firstName: firstName })
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
  getUserByLastName({ params }, res) {
    const lastName = params.lastname;
    console.log("Params last Name for User: " + lastName);

    User.find({ lastName: lastName })
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
  getUserByEmail({ params }, res) {
    const userEmail = params.email;

    console.log("Params email for User", userEmail);

    User.find({ email: userEmail })
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
    const numSaltRounds = 10;
    // when creating user, we want to bCrypt the password!
    var userInfo = body;
    console.log("User info before bCrpyt", userInfo);
    var userPassword = userInfo.password;
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(userPassword, numSaltRounds, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });
    console.log("Bcrypt password after bCrpyt", hashedPassword);
    userInfo.password = hashedPassword;
    userInfo.confirmedPassword = hashedPassword;

    User.create(userInfo)
      .then((userData) => {
        res.json(userData);
      })
      .catch((e) => {
        console.error(e);
        res.status(400).json({ message: this.errorMessage });
      });
  },
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
          function (err, result) {
            if (result) {
              console.log("Matched result", result);
              res.json({
                access_token: jwt.sign({ user: userInfo.email }, token_secret),
              });
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
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
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
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id }).then((userData) => {
      if (!userData) {
        res.status(404).json({ message: this.idMessage });
        return false;
      }
      res.json(userData);
    });
  },
};
module.exports = userController;

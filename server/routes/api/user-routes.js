const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  getUserByFirstName,
  getUserByLastName,
  getUserByEmail,
  getUserByLocation,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user.controller");

router.route("/").get(getAllUsers).post(createUser);

router.route("/firstName/:firstname").get(getUserByFirstName);
router.route("/lastName/:lastname").get(getUserByLastName);
router.route("/email/:email").get(getUserByEmail);
router.route("/login").post(loginUser);
// todo: should extract city/state from location, save that to its own definition for UserModel, then use
// todo: location (city-state) as params!
// router.route("/location/:location").get(getUserByLocation);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;

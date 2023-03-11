const router = require("express").Router();

const { createAgent } = require("../../controllers/agent.controller");
const {
  getAllUsers,
  getUserById,
  getUserByFirstName,
  getUserByLastName,
  getUserByEmail,
  getUserByLocation,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user.controller");

router.route("/").get(getAllUsers).post(createUser);

router.route("/name/:firstname").get(getUserByFirstName);
router.route("/name/:lastname").get(getUserByLastName);
router.route("/email/:email").get(getUserByEmail);
router.route("/location/:location").get(getUserByLocation);

router
  .route("/:id")
  .get(getUserById)
  .post(createAgent)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;

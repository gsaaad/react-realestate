const router = require("express").Router();

const {
  getAllAgents,
  getAgentById,
  getAgentByName,
  getAgentByRating,
  createAgent,
  updateAgent,
  deleteAgent,
  getAgentByRealtor,
} = require("../../controllers/agent.controller");

router.route("/").get(getAllAgents).post(createAgent);

router.route("/name/:name").get(getAgentByName);
// router.route("/rating/:rating").get(getAgentByRating);
router.route("/realtor/:representsRealtor").get(getAgentByRealtor);
router
  .route("/:id")
  .get(getAgentById)
  .post(createAgent)
  .put(updateAgent)
  .delete(deleteAgent);

module.exports = router;

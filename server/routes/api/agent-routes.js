const router = require("express").Router();

const {
  getAllAgents,
  getAgentById,
  getAgentByName,
  createAgent,
  updateAgent,
  getAgentByCity,
  deleteAgent,
  getAgentByRealtor,
} = require("../../controllers/agent.controller");

router.route("/").get(getAllAgents).post(createAgent);

router.route("/name/:name").get(getAgentByName);
router.route("/realtor/:representsRealtor").get(getAgentByRealtor);
router.route("/city/:city").get(getAgentByCity);
router
  .route("/:id")
  .get(getAgentById)
  .post(createAgent)
  .put(updateAgent)
  .delete(deleteAgent);

module.exports = router;

const router = require("express").Router();

const {
  getAllAgents,
  getAgentById,
  createAgent,
  updateAgent,
  deleteAgent,
} = require("../../controllers/agent.controller");

router.route("/").get(getAllAgents).post(createAgent);

router
  .route("/:id")
  .get(getAgentById)
  .post(createAgent)
  .put(updateAgent)
  .delete(deleteAgent);

module.exports = router;

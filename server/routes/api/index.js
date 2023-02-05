const router = require("express").Router();
const propertyRoutes = require("./property-routes");
const agentRoutes = require("./agent-routes");

router.use("/property", propertyRoutes);
router.use("/agent", agentRoutes);

module.exports = router;

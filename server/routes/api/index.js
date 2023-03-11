const router = require("express").Router();
const propertyRoutes = require("./property-routes");
const agentRoutes = require("./agent-routes");
const userRoutes = require("./user-routes");

router.use("/property", propertyRoutes);
router.use("/agent", agentRoutes);
router.use("/user", userRoutes);

module.exports = router;

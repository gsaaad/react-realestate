const router = require("express").Router();

const { getAllProperties } = require("../../controllers/property-controller");

router.route("/").get(getAllProperties);

module.exports = router;

const router = require("express").Router();

const {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
} = require("../../controllers/property-controller");

router.route("/").get(getAllProperties).post(createProperty);

router
  .route("/:id")
  .get(getPropertyById)
  .updateProperty(updateProperty)
  .deleteProperty(deleteProperty);

module.exports = router;

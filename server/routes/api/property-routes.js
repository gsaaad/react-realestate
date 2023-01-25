const router = require("express").Router();

const {
  getAllProperties,
  getPropertyId,
  createProperty,
  updateProperty,
  deleteProperty,
} = require("../../controllers/property-controller");

router.route("/").get(getAllProperties).post(createProperty);
router
  .route("/:id")
  .get(getPropertyId)
  .put(updateProperty)
  .delete(deleteProperty);

module.exports = router;

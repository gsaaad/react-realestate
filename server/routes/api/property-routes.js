const router = require("express").Router();

const {
  getAllProperties,
  getPropertyById,
  createProperty,
  getPropertyByCity,
  updateProperty,
  deleteProperty,
} = require("../../controllers/property-controller");

router.route("/").get(getAllProperties).post(createProperty);

router
  .route("/:id")
  .get(getPropertyById)
  .put(updateProperty)
  .delete(deleteProperty);

router.route("/location/:location").get(getPropertyByCity);
module.exports = router;

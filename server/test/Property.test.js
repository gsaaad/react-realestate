const { test } = require("mocha");
const { Property } = require("../models");

var expect = require("chai").expect;
test("Creates a Property Object", () => {
  const property = new Property({
    propertyType: "SINGLE_HOME",
    country: "CAN",
    imgSrc:
      "https://photos.zillowstatic.com/fp/019c5f0264378e71bd1807bd36374536-p_e.jpg",
    status: "FOR_SALE",
  });

  expect(property).to.be.an("Object", "Property input is not an Object");
});

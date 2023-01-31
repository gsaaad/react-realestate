process.env.NODE_ENV = "test";

const { test } = require("mocha");
const { Property } = require("../models");
let mongoose = require("mongoose");
let chaiHttp = require("chai-http");
let server = require("../server");
let chai = require("chai");
var assert = require("chai").assert;
var expect = require("chai").expect;
chai.use(chaiHttp);

var requester = chai.request(server);

// test object and values
describe("Creates a Property Object", () => {
  it("Should create a property object", () => {
    var propertyType = "SINGLE_HOME";
    var country = "CAN";
    var imgSrc =
      "https://photos.zillowstatic.com/fp/019c5f0264378e71bd1807bd36374536-p_e.jpg";
    var status = "FOR_SALE";

    const property = new Property({
      propertyType: propertyType,
      country: country,
      imgSrc: imgSrc,
      status: status,
    });

    assert.typeOf(property, "Object", "Property input is not an Object");
  });
  it("Should have valid country entry", () => {
    var propertyType = "SINGLE_HOME";
    var country = "CAN";
    var imgSrc =
      "https://photos.zillowstatic.com/fp/019c5f0264378e71bd1807bd36374536-p_e.jpg";
    var status = "FOR_SALE";

    const property = new Property({
      propertyType: propertyType,
      country: country,
      imgSrc: imgSrc,
      status: status,
    });

    assert.equal(
      property.country,
      "CAN",
      `Property country does not match ${country}`
    );
  });
  it("Should have valid property Type", () => {
    var propertyType = "SINGLE_HOME";
    var country = "CAN";
    var imgSrc =
      "https://photos.zillowstatic.com/fp/019c5f0264378e71bd1807bd36374536-p_e.jpg";
    var status = "FOR_SALE";

    const property = new Property({
      propertyType: propertyType,
      country: country,
      imgSrc: imgSrc,
      status: status,
    });

    assert.equal(
      property.propertyType,
      propertyType,
      `Property property does not match ${propertyType}`
    );
  });
  it("Should have a valid img Photo", () => {
    var propertyType = "SINGLE_HOME";
    var country = "CAN";
    var imgSrc =
      "https://photos.zillowstatic.com/fp/019c5f0264378e71bd1807bd36374536-p_e.jpg";
    var status = "FOR_SALE";

    const property = new Property({
      propertyType: propertyType,
      country: country,
      imgSrc: imgSrc,
      status: status,
    });

    assert.equal(
      property.imgSrc,
      imgSrc,
      `Property image does not match ${imgSrc}`
    );
  });
  it("Should have valid property status", () => {
    var propertyType = "SINGLE_HOME";
    var country = "CAN";
    var imgSrc =
      "https://photos.zillowstatic.com/fp/019c5f0264378e71bd1807bd36374536-p_e.jpg";
    var status = "FOR_SALE";

    const property = new Property({
      propertyType: propertyType,
      country: country,
      imgSrc: imgSrc,
      status: status,
    });

    assert.equal(
      property.status,
      status,
      `Property status does not match ${status}`
    );
  });
});

// Testing routes

describe("/GET Properties", () => {
  it("should get all properties", (done) => {
    requester.get("/api/property").end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an("array");
      expect(res.body.length).to.be.at.most(7);
      done();
    });
  });
});

describe("/GET Properties", () => {
  it("should get all properties", (done) => {
    requester.get("/api/property").end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an("array");
      expect(res.body.length).to.be.at.most(7);
      done();
    });
  });
});

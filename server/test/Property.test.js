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

describe("Properties", () => {
  beforeEach((done) => {
    Property.deleteMany({}, (err) => {
      console.error(err);
      done();
    });
  });
});

// test object and values
// describe("Creates a Property Object", () => {
//   it("Should create a property object", () => {
//     const property = new Property();
//     assert.typeOf(property, "Object", "Property input is not an Object");
//   });
// });

// Testing routes

// describe("GET All Properties", () => {
//   it("should get all properties", (done) => {
//     requester.get("/api/property").end((err, res) => {
//       console.log(res);
//       expect(res.status).to.equal(200);
//       expect(res.body).to.be.an("array");
//       expect(res.body.length).to.be.at.most(7);
//       done();
//     });
//   });
// });

describe("POST Properties", () => {
  // it("Should not POST a property without propertyType", (done) => {
  //   var propertyType = "SINGLE_HOME";
  //   var country = "US";
  //   var imgSrc =
  //     "https://photos.zillowstatic.com/fp/cff2f4ce6e867ddbb3bace82b3ebca87-p_e.jpg";
  //   var status = "FOR_SALE";
  //   const property = new Property({
  //     // propertyType: propertyType,
  //     country: country,
  //     imgSrc: imgSrc,
  //     status: status,
  //   });
  //   requester
  //     .post("/api/property")
  //     .send(property)
  //     .end((error, res) => {
  //       console.log(
  //         "Response Text Includes Errors: ",
  //         res.text.split('"').includes("errors")
  //       );
  //       expect(res.text.split('"').includes("errors")).to.equal(true);
  //       expect(res.status).to.equal(200);
  //       expect(res.body).to.be.an("object");
  //       expect(res.body).to.have.property("errors");
  //       done();
  //     });
  // });
  it("Should  POST a property with status, propertyType, imgSrc and country", (done) => {
    var propertyType = "SINGLE_HOME";
    var country = "US";
    var imgSrc =
      "https://photos.zillowstatic.com/fp/cff2f4ce6e867ddbb3bace82b3ebca87-p_e.jpg";
    var status = "FOR_SALE";
    const property = new Property({
      propertyType: propertyType,
      country: country,
      imgSrc: imgSrc,
      status: status,
    });
    requester
      .post("/api/property")
      .send(property)
      .end((error, res) => {
        console.log(
          "contains version variable",
          res.text.split('"').includes("__v")
        );
        console.log("contains document ID", res.text.split('"').includes("id"));
      });
    done();
  });
});

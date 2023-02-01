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
    Property.remove({}, (err) => {
      console.error(err);
      done();
    });
  });
});

// test object and values
describe("Creates a Property Object", () => {
  it("Should create a property object", () => {
    const property = new Property();
    assert.typeOf(property, "Object", "Property input is not an Object");
  });
});

// Testing routes

// describe("GET All Properties", () => {
//   it("should get all properties", (done) => {
//     requester.get("/api/property").end((err, res) => {
//       console.log(res);
//       expect(res.status).to.equal(200);
//       expect(res.body).to.be.an("array");
//       expect(res.body.length).to.be.at.least(7);
//       done();
//     });
//   });
// });

// describe("POST Properties", () => {
//   it("Should not POST a property without propertyType", (done) => {
//     var country = "US";
//     var imgSrc =
//       "https://photos.zillowstatic.com/fp/cff2f4ce6e867ddbb3bace82b3ebca87-p_e.jpg";
//     var status = "FOR_SALE";
//     const property = new Property({
//       // propertyType: propertyType,
//       country: country,
//       imgSrc: imgSrc,
//       status: status,
//     });
//     requester
//       .post("/api/property")
//       .send(property)
//       .then((res) => {
//         console.log("RES BODY", res.body);
//         console.log(
//           "Response Text Includes Errors: ",
//           res.text.split('"').includes("errors")
//         );
//         expect(res.status).to.equal(200);
//         expect(res.body).to.be.an("object");
//         expect(res.body).to.have.property("errors");
//         expect(res.body.errors).to.have.property("propertyType");
//         expect(res.body.errors.propertyType).to.have.property("name");
//         expect(res.body.errors.propertyType.name).to.equal("ValidatorError");
//         done();
//         // done();
//       })
//       .catch(done);
//   });

//   // it("Should  POST a property with status, propertyType, imgSrc and country", (done) => {
//   //   var propertyType = "SINGLE_HOME";
//   //   var country = "US";
//   //   var imgSrc =
//   //     "https://photos.zillowstatic.com/fp/cff2f4ce6e867ddbb3bace82b3ebca87-p_e.jpg";
//   //   var status = "FOR_SALE";
//   //   const property = new Property({
//   //     propertyType: propertyType,
//   //     country: country,
//   //     imgSrc: imgSrc,
//   //     status: status,
//   //   });
//   //   requester
//   //     .post("/api/property")
//   //     .send(property)
//   //     .end((error, res) => {
//   //       expect(res.status).to.equal(200);
//   //       expect(res.body).to.be.an("object");
//   //       expect(res.body).to.have.property("id");
//   //       expect(res.body).to.have.property("__v");
//   //       expect(res.body).to.have.property("propertyType");
//   //       expect(res.body).to.have.property("status");
//   //       expect(res.body).to.have.property("imgSrc");
//   //       expect(res.body).to.have.property("country");
//   //     });
//   //   done();
//   // });
// });

describe("Get Property By Id", () => {
  it("Should return Property with given ID", (done) => {
    // given id: 63da2cc6c00c6576010b3d7f
    var givenIdProperty = "63da2cc6c00c6576010b3d7f";
    requester
      .get("/api/property/" + givenIdProperty)
      .then((res) => {
        console.log("RES BODY", res.body);
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("_id");
        expect(res.body).to.have.property("propertyType");
        expect(res.body).to.have.property("status");
        expect(res.body).to.have.property("country");
        expect(res.body).to.have.property("imgSrc");
        expect(res.body.id).to.equal(givenIdProperty);
        done();
        // done();
      })
      .catch(done);
  });
});

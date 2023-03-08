const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const validUser = async () => {
  var firstName = faker.name.firstName();
  var lastName = faker.name.lastName();
  var email = faker.internet.email(firstName, lastName);

  // password hash 10 rounds
  const numSaltRounds = 10;

  var userFakerPassword = faker.internet.password(8);
  var password = await bcrypt.hash(userFakerPassword, numSaltRounds);
  var confirmedPassword = password;
  var location =
    faker.address.streetAddress() +
    ", " +
    faker.address.city() +
    ", " +
    faker.address.stateAbbr() +
    " " +
    faker.address.zipCode();

  var verifiedUser = {};
  var isValidUser =
    firstName && lastName && email && password && confirmedPassword && location;
  if (isValidUser) {
    verifiedUser.firstName = firstName;
    verifiedUser.lastName = lastName;
    verifiedUser.email = email;
    verifiedUser.password = password;
    verifiedUser.confirmedPassword = confirmedPassword;
    verifiedUser.location = location;
    return verifiedUser;
  }
  return isValidUser;
};
validUser();

module.exports = validUser;

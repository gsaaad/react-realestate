const worldMap = require("countries-list");

const getAllContinents = () => {
  const continents = Object.values(worldMap.continents);
  return continents;
};

const getAllCountries = () => {
  const countriesObj = Object.values(worldMap.countries);
  const countries = [];

  countriesObj.forEach((country) => {
    console.log(country.name);
    countries.push(country.name);
  });
  return countries;
};

console.log(getAllCountries());

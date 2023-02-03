const isValidProperty = (property) => {
  var propertyType = !!property.propertyType ? property.propertyType : false;
  var country = !!property.country ? property.country : false;
  var address = !!property.address ? property.address : false;
  var imgSrc = !!property.imgSrc ? property.imgSrc : false;
  var status = !!property.listingStatus ? property.listingStatus : false;
  var price = !!property.price ? property.price : false;
  const isValidProperty =
    propertyType && country && address && imgSrc && status && price;
  return isValidProperty;
};

module.exports = isValidProperty;

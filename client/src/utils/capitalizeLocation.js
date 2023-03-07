const capitalizeLocation = (location) => {
  if (location.length > 0) {
    var agentLocation =
      location.charAt(0).toUpperCase() + location.slice(1, location.length);
  }
  console.log("Capitalized agent location", agentLocation);
  return agentLocation;
};

export default capitalizeLocation;

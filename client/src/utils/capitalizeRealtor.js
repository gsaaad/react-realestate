const capitalizeRealtor = (realtor) => {
  if (realtor.length > 0) {
    var agentRealtor = realtor
      .split(" ")
      .map((i) => i.replace(i[0], i[0].toUpperCase()))
      .join("-");
    return agentRealtor;
  }
};
export default capitalizeRealtor;

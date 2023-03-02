const capitalizeName = (name) => {
  if (name.length > 0) {
    var agentName = name
      .split(" ")
      .map((i) => i.replace(i[0], i[0].toUpperCase()))
      .join(" ");
    return agentName;
  }
};

export default capitalizeName;

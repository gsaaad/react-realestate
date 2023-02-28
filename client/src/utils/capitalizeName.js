const capitalizeName = (name) => {
  var agentName = name
    .split(" ")
    .map((i) => i.replace(i[0], i[0].toUpperCase()))
    .join(" ");

  return agentName;
};

export default capitalizeName;

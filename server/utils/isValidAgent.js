const isValidAgent = (agent) => {
  var name = agent.profileLink.text.split(" ").slice(0, 2).join(" ");
  console.log(name);
};

module.exports = isValidAgent;

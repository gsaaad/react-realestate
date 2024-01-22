const bcrypt = require("bcrypt");

async function testHash() {
  const hash = await bcrypt.hash("testPassword", 10);
  console.log(hash);
}

testHash();

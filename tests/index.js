const { Client } = require("../src/index");
let config = require("./config.json");
let client = new Client();

client.on("ready", async () => {
  console.log("ready!");
  console.log(
    client.guilds
      .get("816845916576415805")
      .iconURL({ format: "png", size: "512" })
  );

  client.setPresence({
    status: "dnd",
    game: {
      name: "owo whats this?",
      type: 0,
    },
    client_status: "mobile",
  });
});

client.on("message", (m) => {
  console.log(m);
});

client.login(config.token);

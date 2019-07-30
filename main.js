const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "fuck yann") {
    msg.reply("Oui fuck yann vraiment");
  }
});

client.login("NjA1NzA3MDkzODk0MjM0MTQz.XUAjgg.syhkm4-vOcE8xE9oFenzf7rakBg");

// node main.js : pour lancer le bot
// git add .
// git commmit -m ""
// git push

const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Je suis prêt !!");
});

client.on("message", msg => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  var PREFIXE = "b!";
  if (cmd === `${PREFIXE}ping`) msg.channel.send("Pong!");
});

client.login(TOKEN);

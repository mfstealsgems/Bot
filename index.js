const { Client,Discord } = require('discord.js-selfbot-v13');
const client = new Client(); 
////
client.on('ready', () => {
  console.log(client.user.tag)
})
const {userAccount} = require("sphinx-run");
new userAccount(client, Discord).autoReaction({
    channel: '955777913997893632',
    user: '282859044593598464',
    customBotId: ['282859044593598464']
});
client.login(process.env.token);

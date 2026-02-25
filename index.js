const { Client,Discord } = require('discord.js-selfbot-v13');
const client = new Client(); 
////
client.on('ready', () => {
  console.log(client.user.tag)
})
const {userAccount} = require("sphinx-run");
new userAccount(client, Discord).autoReaction({
    channel: '1213975152145072128',
    user: '1344240724526235759',
    customBotId: ['1344240724526235759']
});
client.login(process.env.token);

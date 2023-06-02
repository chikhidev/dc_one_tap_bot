require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client(
    { intents: [Discord.Intents.FLAGS.GUILD_VOICE_STATES] }
);
const events = require('./events')

client.once('ready', () => {
  console.log('Bot started!');
});

client.on('voiceStateUpdate', events.createVoice);
  
client.login(process.env.TOKEN);

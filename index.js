const { Client, Events, GatewayIntentBits, ButtonStyle, ActivityType } = require('discord.js');
require('dotenv').config()

const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers] });

bot.once(Events.ClientReady, c => {
    console.log(`# logged in as ${c.user.tag}`);
    bot.user.setActivity('in hell', { type: ActivityType.Streaming, url: 'https://twitch.tv/rinsednreused' });
});

bot.login(process.env.TOKEN);
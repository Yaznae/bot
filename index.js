const { Client, Events, GatewayIntentBits, ButtonStyle, ActivityType } = require('discord.js');
require('dotenv').config()

const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers] });

const command = require('./command');

bot.once(Events.ClientReady, c => {
    console.log(`# logged in as ${c.user.tag}`);
    bot.user.setActivity('in hell', { type: ActivityType.Streaming, url: 'https://twitch.tv/rinsednreused' });

    command(bot, ['ping', 'test'], (msg) => {
        msg.channel.send(`latency is \`${Date.now() - msg.createdTimestamp}ms\`.`)
    });
});

bot.login(process.env.TOKEN);
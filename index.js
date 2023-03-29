const { Client, Events, GatewayIntentBits, ButtonStyle, ActivityType, PermissionFlagsBits } = require('discord.js');
require('dotenv').config()

const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers] });

const command = require('./command');

bot.once(Events.ClientReady, c => {
    console.log(`# logged in as ${c.user.tag}`);

    const stati = [`to ${c.guilds.cache.size} guilds`, `in hell`]
    const updDelay = 5;
    let currIndx = 0;

    setInterval(() => {
        const status = stati[currIndx];
        bot.user.setActivity(status, { type: ActivityType.Streaming, url: 'https://twitch.tv/rinsednreused' });

        currIndx = currIndx >= stati.length - 1 
            ? 0
            : currIndx++;
    }, 5000)

    command(bot, ['ping', 'test'], (msg) => {
        msg.channel.send(`latency is \`${Date.now() - msg.createdTimestamp}ms\`.`)
    });


});

bot.login(process.env.TOKEN);
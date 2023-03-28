const { Events } = require('discord.js')

require('dotenv').config()

module.exports = (bot, aliases, callback) => {
    if (typeof aliases === 'string') {
        aliases = [aliases]
    }

    bot.on(Events.MessageCreate, (msg) => {
        const { content } = msg;

        aliases.forEach((alias) => {
            const command = `${process.env.PREFIX}${alias}`

            if (content.startsWith(`${command}`) || content === command) {
                callback(msg)
            }
        });
    });
}
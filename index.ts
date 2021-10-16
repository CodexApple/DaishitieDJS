import DiscordJS from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        DiscordJS.Intents.FLAGS.GUILDS,
        DiscordJS.Intents.FLAGS.GUILD_MESSAGES,
        DiscordJS.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
})

client.on('ready', () => {
    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        featureDir: path.join(__dirname, 'features'),
        messagesPath: '',
        showWarns: true,
        delErrMsgCooldown: -1,
        defaultLanguage: 'english',
        ignoreBots: false,
        ephemeral: false,
        testServers: '881832341293641769',
        botOwners: ['266897885533175808', '742419682489008188'],
        disabledDefaultCommands: ['help', 'language', 'prefix', 'requiredrole'],
        mongoUri: process.env.MONGO_URI,
        debug: true,
    }).setDefaultPrefix('-')
})

client.login(process.env.TOKEN)
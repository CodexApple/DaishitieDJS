import DiscordJS from 'discord.js'
import { ICommand } from 'wokcommands'
import welcomeSchema from '../../models/welcome-schema'

export default {
    category: 'Admin',
    description: 'Sets the welcome channel and message.',
    permissions: ['ADMINISTRATOR'],
    minArgs: 2,
    expectedArgs: '<channel> <message>',
    slash: 'both',
    testOnly: true,
    options: [
        {
            name: 'channel',
            description: 'The target channel.',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.CHANNEL,
        },
        {
            name: 'text',
            description: 'The welcome message.',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
        },
    ],

    callback: async ({ guild, message, interaction, args }) => {
        if (!guild) return 'Please us this command within a server.'

        const target = message
            ? message.mentions.channels.first()
            : interaction.options.getChannel('channel')

        if (!target || target.type !== 'GUILD_TEXT') {
            return 'Please tag a text channel.'
        }

        let text = interaction?.options.getString('text')

        if (message) {
            args.shift()
            text = args.join(' ')
        }

        await welcomeSchema.findOneAndUpdate({
            _id: guild.id
        }, {
            _id: guild.id,
            channelId: target.id,
            text,
        }, {
            upsert: true,
        })

        return 'Welcome channel set!'
    },
} as ICommand
import { MessageEmbed } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
    category: 'Testing',
    description: 'Send an embed.',
    slash: 'both',
    testOnly: true,
    permissions: ['ADMINISTRATOR'],

    callback: ({ }) => {
        return 'Pong'
    },
} as ICommand
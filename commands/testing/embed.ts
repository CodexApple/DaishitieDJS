import { MessageEmbed } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
    category: 'Testing',
    description: 'Send an embed.',
    slash: true,
    testOnly: true,
    ownerOnly: true,

    callback: async ({ text }) => {
        const json = JSON.parse(text)
        const embed = new MessageEmbed(json)
        return embed
    },
} as ICommand
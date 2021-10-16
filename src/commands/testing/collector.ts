import { Message, MessageReaction, User } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
    category: 'Testing',
    description: 'Testing',
    slash: false,
    testOnly: true,
    ownerOnly: true,

    callback: async ({ message, channel }) => {
        await message.react('👍')
        let reply = await message.reply('Please confirm this action')

        // const filter = (m: Message) => {
        //     return m.author.id === message.author.id
        // }

        // const collector = channel.createMessageCollector({
        //     filter,
        //     max: 1,
        //     time: 1000 * 5,
        // })

        const filter = (reaction: MessageReaction, user: User) => {
            return user.id === message.author.id
        }

        const collector = message.createReactionCollector({
            filter,
            max: 1,
            time: 1000 * 5,
        })

        collector.on('collect', (reaction) => {
            console.log(reaction.emoji)
        })

        collector.on('end', async (collected) => {
            if (collected.size === 0) {
                await reply.edit('⛔ You did not react in time.')
                return
            }

            let text = 'Collected:\n\n'
            collected.forEach((reaction) => text += `${reaction.emoji.name}\n`)
            await reply.edit(text)
        })
    },
} as ICommand
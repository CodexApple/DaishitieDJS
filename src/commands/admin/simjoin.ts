import { ICommand } from 'wokcommands'

export default {
    category: 'Admin',
    description: 'Simulates a join.',
    permissions: ['ADMINISTRATOR'],
    slash: 'both',
    testOnly: false,
    guildOnly: true,

    callback: ({ member, client }) => {
        client.emit('guildMemberAdd', member)
        return 'Join simulated!'
    },
} as ICommand
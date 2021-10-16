"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Admin',
    description: 'Simulates a join.',
    permissions: ['ADMINISTRATOR'],
    slash: 'both',
    testOnly: false,
    guildOnly: true,
    callback: function (_a) {
        var member = _a.member, client = _a.client;
        client.emit('guildMemberAdd', member);
        return 'Join simulated!';
    },
};
//# sourceMappingURL=simjoin.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importDefault(require("discord.js"));
var wokcommands_1 = __importDefault(require("wokcommands"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.default.Intents.FLAGS.GUILDS,
        discord_js_1.default.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.default.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
});
client.on('ready', function () {
    new wokcommands_1.default(client, {
        commandDir: path_1.default.join(__dirname, 'commands'),
        featureDir: path_1.default.join(__dirname, 'features'),
        messagesPath: '',
        showWarns: true,
        delErrMsgCooldown: -1,
        defaultLanguage: 'english',
        ignoreBots: false,
        ephemeral: false,
        testServers: '881832341293641769',
        botOwners: ['266897885533175808', '742419682489008188'],
        disabledDefaultCommands: ['language', 'prefix', 'requiredrole'],
        mongoUri: process.env.MONGO_URI,
        debug: true,
    }).setDefaultPrefix('-');
});
client.login(process.env.TOKEN);
//# sourceMappingURL=server.js.map
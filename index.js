const Discord = require("discord.js")
const chalk = require('chalk');
const lags = console.log;

const log = async function(text) {
  x = text
  if (!x) {
    lags(chalk.red("Are you an idiot mate, it cant be blank"))
  } else {
    lags(x)
  }
}

const bot = async function(tokn, prefx, text){
  tok = tokn
  status = text || "some servers"
  prfx = prefx || "!"

  let process = require('process');
    process.on('uncaughtException', function(err) {
        console.log(`𝕖𝕣𝕣𝕠𝕣❕`);
        console.log(err);
    });
  let {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require("discord.js")
  require('events').EventEmitter.defaultMaxListeners = 50;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        fire: null,
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        player: null,
        manager: null,
        Inviter: null,
        message: null,
        notifer: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION", "CHANNEL"]
    });
    s4d.client.on('ready', () => {
      console.log(s4d.client.user.tag + " is alive!\n")
    })
    var prefix, arguments2, commandwithprefix, command;


    await s4d.client.login(tok).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
    });

    s4d.client.on('ready', async () => {
        prefix = prfx;
        s4d.client.user.setPresence({
            status: "online",
            activities: [{
                name: status,
                type: "LISTENING"
            }]
        });
        console.log((['Bot commands', '\n', prefix, 'say <message> - repeats the message'].join('')));
      console.log("\n");
    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (!((s4dmessage.author).bot)) {
            arguments2 = (s4dmessage.content).split(' ');
            commandwithprefix = arguments2.splice(0, 1)[0];
            if ((commandwithprefix || '').startsWith(prefix || '')) {
                command = commandwithprefix.slice(((prefix.length + 1) - 1), commandwithprefix.length);
                if (command == 'say') {
                    s4dmessage.channel.send({
                        content: String((arguments2.join(' ')))
                    });
                }
            }
        }

    });

    return s4d
}
 

module.exports = {
  log,
  bot
}
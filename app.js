const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config');
const fetch = require('node-fetch');
const cron = require('cron').CronJob;

const prefix = "!"

client.login(config.token).then(() => { console.log('안녕!') });

client.on('message', (message) => {
    console.log(message.author.username + ": " + message.content)


    if (message.content.startsWith(`${prefix}iu`)) {
        console.log(getIU());
        // message.channel.send()
    }
    else if (message.content.startsWith(`${prefix}doyouloveme`)) {
        message.channel.send('ya i luv u baby')
    }
    else if (message.content.startsWith(`${config.prefix}messages`)) {
        //message.channel will always refer to the current channel that this is invoked in
        message.channel.fetchMessages()
            .then(messages => messages.map(message => message.delete()))
            .catch(console.error);
    }
})

client.on('error', console.error);

const iuJob = new cron({
    cronTime: '* * * * * *',
    onTick: function () {
        const channel = client.channels.get(`666163948122537995`)
        channel.send("hi")
    },
    start: true,
    timeZone: 'America/Los_Angeles'
});
iuJob.start();

// function getIU() {
//     fetch('https://api.tumblr.com/v2/tagged?tag=iu')
//         .then(res => console.log(res.body))
//         // .then(response => response.json())
//         // .then(data => {
//         //     console.log(data)
//         // })
//         .catch(err => console.log(err))
// };
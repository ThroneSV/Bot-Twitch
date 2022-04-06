const tmi = require('tmi.js');

const client = new tmi.client({
    options: {
        debug: true
    },

    identity: {
        username: 'provatwitchbot',
        password:'' // password del bot 
    },

    channels: ['nucciovip96']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if (self) return;

    if (message.toLowerCase() === '!instagram') { //comando da digitare in chat
        client.say(channel, 'BOT TEXT');    //risposta bot
    }

    if (message.toLowerCase() === '!discord') { //comando da digitare in chat
        client.say(channel, 'BOT TEXT');    //risposta bot
    }

});

client.on("subscription", (channel, username, method, message, userstate) => {   //quando un utente fa una sub il bot scrive in chat 
    console.log("subscription", { channel, username, method, message, userstate });
    client.say(channel, `thx, ${username}` );     //risposta bot
});

client.on("resub", (channel, username, _months, message, userstate, methods) => {   //quando un utente si risubba il bot scrive in chat (mesi consecutivi o non)
    console.log("resub", { channel, username, _months, message, userstate, methods });
    let streakMonths = userstate["msg-param-streak-months"];
    let cumulativeMonths = userstate["msg-param-cumulative-months"];
    let sharedStreak = userstate["msg-param-should-share-streak"];
    if(sharedStreak) {
        client.say(channel, `Grazie per esserti risubbato per ${streakMonths} mesi consecutivi, ${username}!`); //risposta bot
    }
    else {
        client.say(channel, `Grazie per esserti subbato per ${cumulativeMonths} mesi, ${username}!`);  //risposta bot
    }
});

client.on("following", (channel, username, method, message, userstate) => { //se un utente si iscrive
    console.log("following", { channel, username, method, message, userstate });
    client.say(channel, `Grazie per il follow, ${username}` );  //risposta bot
});

client.on('connected', (address, port) => {
    setInterval(function(){ 
        console.log(client.action('channelqui', 'testo'));  //è il testo che ogni 720000 di millisecondi viene scritto in chat
 
    }, 720000); //720000

    setInterval(function(){ 
        console.log(client.action('channelqui', 'testo'));  //è il testo che ogni 480000 di millisecondi viene scritto in chat
 
    }, 480000); //480000

    setInterval(function(){ 
        console.log(client.action('channelqui', 'testo'));  //è il testo che ogni 1200000 di millisecondi viene scritto in chat
 
    }, 1200000); //1200000
});
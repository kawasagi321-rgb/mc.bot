const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'SerwerKlasowyJD.aternos.me', 
        port: 58081,                             
        username: 'Bot24_7',                     
        version: '26.1.2' // wpisz wersję swojego serwera
    });

    bot.on('spawn', () => {
        console.log('Bot wszedł na serwer!');
        setInterval(() => {
            bot.chat('.');
        }, 300000); 
    });

    bot.on('end', () => {
        console.log('Bot rozłączony. Reconnect za 10 sekund...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log(err));
}

createBot();

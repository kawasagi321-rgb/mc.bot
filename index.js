const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'TUTAJ_WPISZ_IP_SERWERA.aternos.me', 
        port: 25565,                             
        username: 'Bot24_7',                     
        version: '1.20.1' // wpisz wersję swojego serwera
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

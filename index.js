const mineflayer = require('mineflayer');
const http = require('http');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'SerwerKlasowyJD.aternos.me', 
        port: 58081,                             
        username: 'Bot24_7',                     
        version: '1.20.4'
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

    bot.on('error', (err) => {
        console.log('Blad bota: ', err);
    });
}

createBot();

http.createServer((req, res) => {
    res.write('Bot dziala');
    res.end();
}).listen(process.env.PORT || 3000);

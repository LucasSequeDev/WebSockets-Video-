import app from './config/server';
import sockets from './config/socket';

const main = async () => {
    const server = await app.listen(app.get('port'), () => {
        console.log(`[+] Servidor UP en el puerto ${app.get('port')}`);
    });
    
    sockets(server);
}

main();

module.exports = app;

import socket from 'socket.io';

const sockets = (server) => {
    const IO = socket(server);

    IO.on('connection',(socket) => {     
        socket.on('pauseClient', (currentTime) => {
            IO.sockets.emit('pause',currentTime)
        })
        
        socket.on('playClient', (currentTime) => {
            IO.sockets.emit('play',currentTime)
        })
    });
}

module.exports = sockets;


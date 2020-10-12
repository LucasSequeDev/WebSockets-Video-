const socket = io();
const video = document.getElementById('video');
const emitirEvento = true;



video.addEventListener('pause', () => {
    if (emitirEvento) {
        socket.emit('pauseClient',video.currentTime)
    }
    emitirEvento = true
})

video.addEventListener('play',() =>{
    if (emitirEvento) {
        socket.emit('playClient',video.currentTime)
    }
    emitirEvento = true
})

socket.on('pause', (currentTime) =>{
    if (!video.paused) {
        video.pause()
        video.currentTime = currentTime;
        emitirEvento = false
    }
})

socket.on('play', (currentTime) => {
    if (video.paused) {
        video.play()
        video.currentTime = currentTime;
        emitirEvento = false
    }
})


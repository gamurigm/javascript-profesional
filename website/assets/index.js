import MediaPlayer from './MediaPLayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video")
const player = new MediaPlayer({ el: video, plugins:
                                   [new AutoPlay()] });
//    const player = new MediaPlayer({el: video})
//    button.onclick = () => {
//    if(player.isPaused()) {
//        player.play()
//    }else {
//        player.pause()
//    }  
//  }
 const playButton = document.querySelector('#playButton')
 playButton.onclick = () => player.togglePlay();

 const muteButton = document.querySelector('#muteButton')
 if (player.media.muted) {
    muteButton.onclick = () => player.unmute();
 }else {
    player.mute();
 }
 

import MediaPlayer from './MediaPLayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector("video")
const player = new MediaPlayer({ 
   el: video,                
   plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});
//    const player = new MediaPlayer({el: video})
//    button.onclick = () => {
//    if(player.isPaused()) {
//        player.play()
//    }else {
//        player.pause()
//    }  
//  }
 const playButton: HTMLElement = document.querySelector('#playButton')
 playButton.onclick = () => player.togglePlay();

 const muteButton: HTMLElement = document.querySelector('#muteButton')
 muteButton.onclick = () => {
   if (player.media.muted) {
      player.unmute();
  }else {
     player.mute();
  }  
};
 
if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('./../sw.js').catch(error => {
      console.log(error.message);
   });
}
function AutoPlay() {}
    AutoPlay.prototype.run = function(player) {
        player.play();
        player.mute();
  
    };
    export default AutoPlay;

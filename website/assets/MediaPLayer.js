
function MediaPlayer(config) {
    this.media = config.el;         //instancia del elemento html video
    this.plugins = config.plugins || [];

    this._initPlugins();
  }

  MediaPlayer.prototype._initPlugins = function () {
      this.plugins.forEach(plugin => {
          plugin.run(this);
      })
  }
  
  MediaPlayer.prototype.play = function() {
    this.media.play();
  }
  
  MediaPlayer.prototype.pause = function() {  //.pause = funcion que pausa
    this.media.pause();
  }
  
  MediaPlayer.prototype.togglePlay = function() { // la propiedad .pause retorna un boolen dependiendo si está en pausa 
    if (this.media.paused) {
        this.play();
    }else {
        this.pause();
    }
  };

  MediaPlayer.prototype.mute = function () {
      this.media.muted = true;  //propiedad muted se le pasa un boolean
  }

  MediaPlayer.prototype.unmute = function () {
      this.media.muted = false;
  }

  export default MediaPlayer;
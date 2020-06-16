
class MediaPlayer {
  media: HTMLMediaElement
  plugins: Array<any>; 
  constructor(config) {
    this.media = config.el; //instancia del elemento html video
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

  private initPlugins() {
    

    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    }
    else {
      this.pause();
    }
  }
  mute() {
    this.media.muted = true; //propiedad muted se le pasa un boolean
  }
  unmute() {
    this.media.muted = false;
  }
}

  
  
  



  export default MediaPlayer;
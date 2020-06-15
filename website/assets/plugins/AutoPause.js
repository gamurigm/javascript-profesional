class AutoPause {
    constructor () {
        this.threshold = 0.27
        this.handleIntersection = this.handleIntersection.bind(this) 
          //hacemos el this permanete a la instancia de este objeto
    }
    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });
        observer.observe(player.media)
    }
    handleIntersection(entries) {
        const entry = entries[0];
        //console.log(entry);
        const isVisible = entry.isIntersecting

        if (isVisible) {
            this.player.play();  //siempre q se llame este this hará referenca a la instancia handleIntersectio 
        }else {
            this.player.pause();
        }
    }
}

export default AutoPause;
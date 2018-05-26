(function ($, root) {
    function audioControl() {
        this.audio = new Audio();
        this.status = 'pause';
    }
    audioControl.prototype = {
        play:function(){
            this.status = 'play';
            this.audio.play();
        },
        pause:function(){
            this.status = 'pause';
            this.audio.pause();
        },
        getAudio:function(src){
          
            this.audio.src = src;
            this.audio.load();
        }

    }
    root.audioControl = audioControl;
})(window.Zepto, window.player || (window.player = {}));
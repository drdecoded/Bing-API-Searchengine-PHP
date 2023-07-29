$(document).ready(function(){
var figure = $(".vid-thumb").hover( hoverVideo, hideVideo );

    function hoverVideo(e) {  
        var vid = $('video', this);
        $('img', this).hide();
        $('.vid-play-dur', this).hide();
        $('video', this).show();
        vid.get(0).play(); 
    }

    function hideVideo(e) {
        var vid = $('video', this);
        $('video', this).hide();
        $('.vid-play-dur', this).show();
        $('img', this).show();
        vid.get(0).pause();
        $('video', this).get(0).currentTime = 0;
    }
});



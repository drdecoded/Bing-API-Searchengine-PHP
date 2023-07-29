document.addEventListener('dblclick', function(event) {
    event.preventDefault();
}, { passive: false });
$(function(){
    $(document).on("click", '.img-name-link', function(){
        window.location.href = this.href;
      });
  });
$(document).on("click", '.img-btn-close', function(e) { 
    $('.img-p-w').css('display','none');
    $('.img-act').removeClass('img-act');
});
$(document).on("click", '.img-btn-next', function(e) { 
    var myVar = $("#img-w").find('.img-act').next();
    $('.img-act').removeClass('img-act');
        $('.img-cu-wr').remove(); 
        $('.img-cu-wr-deta').remove(); 
            myVar.addClass('img-act');
            if($("#img-w").find('.img-act').is(":first-child")){
                $('.img-btn-back').hide();
            } else {
                $('.img-btn-back').show();
            }
            if($("#img-w").find('.img-act').is(":last-child")){
                $('.img-btn-next').hide();
            } else {
                $('.img-btn-next').show();
            }
        var imgculink = myVar.children('.img-wr').children('.img-cu').children('.img-cu-url').text();
        var imgcures = myVar.children('.img-wr').children('.img-cu').children('.img-cu-res').text();
        var imgformat = myVar.children('.img-wr').children('.img-cu').children('.img-cu-format').text();
        var imgname = myVar.children('.img-wr').children('.img-cu').children('.img-cu-name').text();
        var imgpro = myVar.children('.img-wr').children('.img-cu').children('.img-cu-pro').text();
        var imgcturl = myVar.children('.img-wr').children('.img-cu').children('.img-cu-cturl').text();
        $( ".img-p-w" ).append( '<div class="img-cu-wr"><div class="img-cu-con"></div></div>' );
        $( ".img-p-w" ).append('<div class="img-cu-wr-deta"><div class="img-cu-con-url"></div><div class="img-cu-con-res"></div><div class="img-cu-con-format"></div><div class="img-cu-con-name"></div><div class="img-cu-con-pro"></div><div class="img-cu-con-cturl"></div></div>');
        $( ".img-cu-con" ).append('<a href="'+imgculink+'"><img loading="lazy" referrerpolicy="no-referrer" src="'+imgculink+'"></a>');
        $( ".img-cu-con-res" ).append('<span class="img-cu-con-doc">Auflösung: </span><span class="img-cu-con-data">'+imgcures+'</span>');
        $( ".img-cu-con-format" ).append('<span class="img-cu-con-doc">Format: </span><span class="img-cu-con-data">'+imgformat+'</span>');
        $( ".img-cu-con-name" ).append('<span class="img-cu-con-doc">Titel: </span><span class="img-cu-con-data">'+imgname+'</span>');
        $( ".img-cu-con-pro" ).append('<span class="img-cu-con-doc"></span><span class="img-cu-con-data">'+imgpro+'</span>');
        $( ".img-cu-con-cturl" ).append('<span class="img-cu-con-doc"></span><button class="img-cu-btn"><a href="'+imgcturl+'"><span class="img-cu-con-data">Visit</span></a></button>');
        $('.img-p-w').css('display','block');
  });
  $(document).on("click", '.img-btn-back', function(e) { 
    var myVar = $("#img-w").find('.img-act').prev();
    $('.img-act').removeClass('img-act');
        $('.img-cu-wr').remove(); 
        $('.img-cu-wr-deta').remove(); 
            myVar.addClass('img-act');
            if($("#img-w").find('.img-act').is(":first-child")){
                $('.img-btn-back').hide();
            } else {
                $('.img-btn-back').show();
            }
            if($("#img-w").find('.img-act').is(":last-child")){
                $('.img-btn-next').hide();
            } else {
                $('.img-btn-next').show();
            }
        var imgculink = myVar.children('.img-wr').children('.img-cu').children('.img-cu-url').text();
        var imgcures = myVar.children('.img-wr').children('.img-cu').children('.img-cu-res').text();
        var imgformat = myVar.children('.img-wr').children('.img-cu').children('.img-cu-format').text();
        var imgname = myVar.children('.img-wr').children('.img-cu').children('.img-cu-name').text();
        var imgpro = myVar.children('.img-wr').children('.img-cu').children('.img-cu-pro').text();
        var imgcturl = myVar.children('.img-wr').children('.img-cu').children('.img-cu-cturl').text();
        $( ".img-p-w" ).append( '<div class="img-cu-wr"><div class="img-cu-con"></div></div>' );
        $( ".img-p-w" ).append('<div class="img-cu-wr-deta"><div class="img-cu-con-url"></div><div class="img-cu-con-res"></div><div class="img-cu-con-format"></div><div class="img-cu-con-name"></div><div class="img-cu-con-pro"></div><div class="img-cu-con-cturl"></div></div>');
        $( ".img-cu-con" ).append('<a href="'+imgculink+'"><img loading="lazy" referrerpolicy="no-referrer" src="'+imgculink+'"></a>');
        $( ".img-cu-con-res" ).append('<span class="img-cu-con-doc">Auflösung: </span><span class="img-cu-con-data">'+imgcures+'</span>');
        $( ".img-cu-con-format" ).append('<span class="img-cu-con-doc">Format: </span><span class="img-cu-con-data">'+imgformat+'</span>');
        $( ".img-cu-con-name" ).append('<span class="img-cu-con-doc">Titel: </span><span class="img-cu-con-data">'+imgname+'</span>');
        $( ".img-cu-con-pro" ).append('<span class="img-cu-con-doc"></span><span class="img-cu-con-data">'+imgpro+'</span>');
        $( ".img-cu-con-cturl" ).append('<span class="img-cu-con-doc"></span><button class="img-cu-btn"><a href="'+imgcturl+'"><span class="img-cu-con-data">Visit</span></a></button>');
        $('.img-p-w').css('display','block');
  });
$(document).on("click", '.img-wr-wr', function(e) { 
    $('.img-act').removeClass('img-act');
    $(this).addClass("img-act");
    if($("#img-w").find('.img-act').is(":first-child")){
        $('.img-btn-back').hide();
    } else {
        $('.img-btn-back').show();
    }
    if($("#img-w").find('.img-act').is(":last-child")){
        $('.img-btn-next').hide();
    } else {
        $('.img-btn-next').show();
    }
    var $this = $(this);
        e.preventDefault();
        $('.img-cu-wr').remove(); 
        $('.img-cu-wr-deta').remove(); 
        xc = true;
        var imgculink = $(this).children('.img-wr').children('.img-cu').children('.img-cu-url').text();
        var imgcures = $(this).children('.img-wr').children('.img-cu').children('.img-cu-res').text();
        var imgformat = $(this).children('.img-wr').children('.img-cu').children('.img-cu-format').text();
        var imgname = $(this).children('.img-wr').children('.img-cu').children('.img-cu-name').text();
        var imgpro = $(this).children('.img-wr').children('.img-cu').children('.img-cu-pro').text();
        var imgcturl = $(this).children('.img-wr').children('.img-cu').children('.img-cu-cturl').text();
        $( ".img-p-w" ).append( '<div class="img-cu-wr"><div class="img-cu-con"></div></div>' );
        $( ".img-p-w" ).append('<div class="img-cu-wr-deta"><div class="img-cu-con-url"></div><div class="img-cu-con-res"></div><div class="img-cu-con-format"></div><div class="img-cu-con-name"></div><div class="img-cu-con-pro"></div><div class="img-cu-con-cturl"></div></div>');
        $( ".img-cu-con" ).append('<a href="'+imgculink+'"><img loading="lazy" referrerpolicy="no-referrer" src="'+imgculink+'"></a>');
        $( ".img-cu-con-res" ).append('<span class="img-cu-con-doc">Auflösung: </span><span class="img-cu-con-data">'+imgcures+'</span>');
        $( ".img-cu-con-format" ).append('<span class="img-cu-con-doc">Format: </span><span class="img-cu-con-data">'+imgformat+'</span>');
        $( ".img-cu-con-name" ).append('<span class="img-cu-con-doc">Titel: </span><span class="img-cu-con-data">'+imgname+'</span>');
        $( ".img-cu-con-pro" ).append('<span class="img-cu-con-doc"></span><span class="img-cu-con-data">'+imgpro+'</span>');
        $( ".img-cu-con-cturl" ).append('<span class="img-cu-con-doc"></span><button class="img-cu-btn"><a href="'+imgcturl+'"><span class="img-cu-con-data">Visit</span></a></button>');
        $('.img-p-w').css('display','block');
    });
var load = 0;
var cRfE = 0;
$(document).ready(function() {

        $(window).on('beforeunload', function(){
            $(window).scrollTop(0);
        });
        checkWindowSize();
        function checkWindowSize(){
                if($(window).height() >= $(document).height()){ 
                    setTimeout(function(){
                    fetchData();
                    cRfE = 1;
                }, 1500);
            }
        }
        function fetchData(){
                if (!$("#nos-cfi").length) {
                    $(document)
                    var query = 1;
                    if(load <= 15){
                            $.ajax({
                                type: "POST",
                                url: "imageapi.php",
                                data: {"query":query,"imgLoad":load,"cRfE":cRfE},
                                success: function(data){
                                    setTimeout(function(){
                                    $("#img-w").show();
                                    $("#img-w").append(data);
                                    $('.a-l').remove();
                                }, 500);
                                    load++;
                                },
                            });
                    }
                }
        }
        $(document).on('touchmove', onScroll);
        var aJR; 
        function onScroll(){
            if(aJR)
            {
              return;  // if a ajax call is running then return
            } 
            aJR = 1;  
            if($(window).scrollTop() > $(document).height() - $(window).height()-100) {
                setTimeout(function(){
                fetchData(); 
            }, 1500);
            }
        }
        $(window).scroll(function(){
            var position = $(window).scrollTop();
            var bottom = $(document).height() - $(window).height();
            if( position == bottom ){
                setTimeout(function(){
                fetchData(); 
            }, 1500);
            }
        });

});


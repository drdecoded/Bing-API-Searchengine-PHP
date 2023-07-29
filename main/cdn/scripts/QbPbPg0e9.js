'use strict';
if (readCookie('quby') == '1'){
    $("#quby-c").prop( "checked", true );
    $("callquby").show();
} else if (readCookie('quby') == '0'){
    $("#quby-c").prop( "checked", false );
    $("callquby").hide();
}
$('#quby-s').click(function () {
    if (readCookie('quby') == '1'){
        document.cookie = `quby=0; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        $("#quby-c").prop( "checked", true );
        $("callquby").hide();
    } else if (readCookie('quby') == '0'){
        document.cookie = `quby=1; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        $("#quby-c").prop( "checked", false );
        $("callquby").show();
    }
});
if($(location).attr('pathname').includes('search.php') || $(location).attr('pathname').includes('images') || $(location).attr('pathname').includes('videos') || $(location).attr('pathname').includes('news')){
    $('callquby').css({'bottom':'2%','right':'1%'});
}
if($(window).width() < 991){
    $('callquby').css({'right':'4%'});
}
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height() && $(window).width() > 991) {
        if($(location).attr('pathname').includes('search.php') || $(location).attr('pathname').includes('images') || $(location).attr('pathname').includes('videos') || $(location).attr('pathname').includes('news')){
            $('callquby').animate({'bottom':'8%'},500);
        }
    }
    if(!($(window).scrollTop() + $(window).height() == $(document).height() && $(window).width() > 991)){
        if($(location).attr('pathname').includes('search.php') || $(location).attr('pathname').includes('images') || $(location).attr('pathname').includes('videos') || $(location).attr('pathname').includes('news')){
            $('callquby').css({'bottom':'2%'});
        }
    }
});

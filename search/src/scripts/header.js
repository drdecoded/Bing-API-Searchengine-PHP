'use strict';
if (readCookie('language') == 'de'){
    translate('de', 'data-lang');
    $('.lg-in-e').attr("placeholder", "Gebe deine E-Mail Adresse ein...");
    $('#w-search').attr("placeholder", "Durchsuche das Web...");
    $('#mo-w-search').attr("placeholder", "Durchsuche das Web...");
    $('#b-email').attr("placeholder", "Gebe deine E-Mail Adresse ein...");
    $('#b-name').attr("placeholder", "Gebe deinen Namen ein...");
    $('#b-url').attr("placeholder", "Gebe die URL ein, unter der der Fehler angezeigt wird...");
    $('#b-error').attr("placeholder", "Gebe die Fehlermeldung ein (falls angezeigt)...");
    $('#b-mes').attr("placeholder", "Gebe alle Informationen zu dem gefundenen Fehler ein...");
    $('#f-email').attr("placeholder", "Gebe deine E-Mail Adresse ein...");
    $('#f-name').attr("placeholder", "Gebe deinen Namen ein...");
    $('#f-mes').attr("placeholder", "Gebe dein Feedback ein...");
    $('.lg-in-s').attr("value", "Senden");
    $('#b-sub').html("Senden");
    $('#f-sub').html("Senden");
} else if (readCookie('language') == 'fr'){
    translate('fr', 'data-lang');
    $('.lg-in-e').attr("placeholder", "Entrez votre adresse email...");
    $('#w-search').attr("placeholder", "Rechercher sur le Web...");
    $('#mo-w-search').attr("placeholder", "Rechercher sur le Web...");
    $('#b-email').attr("placeholder", "Entrez votre adresse email...");
    $('#b-name').attr("placeholder", "Entrez votre nom ici...");
    $('#b-url').attr("placeholder", "Entrez l'URL où l'erreur est affichée...");
    $('#b-error').attr("placeholder", "Entrez le message d'erreur (si affiché)...");
    $('#b-mes').attr("placeholder", "Entrez vos informations sur l'erreur que vous avez trouvée ici...");
    $('#f-email').attr("placeholder", "Entrez votre adresse email...");
    $('#f-name').attr("placeholder", "Entrez votre nom ici...");
    $('#f-mes').attr("placeholder", "Entrez vos commentaires ici...");
    $('.lg-in-s').attr("value", "Envoyer");
    $('#b-sub').html("Envoyer");
    $('#f-sub').html("Envoyer");
} else {
    translate('en', 'data-lang');
    $('.lg-in-e').attr("placeholder", "Enter your e-mail address...");
    $('#w-search').attr("placeholder", "Search the web...");
    $('#mo-w-search').attr("placeholder", "Search the web...");
    $('#b-email').attr("placeholder", "Enter your e-mail address...");
    $('#b-name').attr("placeholder", "Enter your name here...");
    $('#b-url').attr("placeholder", "Enter the URL where the error is displayed...");
    $('#b-error').attr("placeholder", "Enter the error message (if displayed)...");
    $('#b-mes').attr("placeholder", "Enter all informations about the bug you found here...");
    $('#f-email').attr("placeholder", "Enter your e-mail address...");
    $('#f-name').attr("placeholder", "Enter your name here...");
    $('#f-mes').attr("placeholder", "Enter your feedback here...");
    $('.lg-in-s').attr("value", "Send");
    $('#b-sub').html("Send");
    $('#f-sub').html("Send");
}
if (readCookie('theme') == 'light'){
    $('body').removeClass('dark');
} else if (readCookie('theme') == 'dark'){
    $('body').addClass('dark');
    $(".nl-se").attr("src","src/public/icon-sea-w.png");
    $(".h-btn").attr("src","src/public/icon-sea-w.png");
    $(".i-btn").attr("src","src/public/icon-img-w.png");
    $(".v-btn").attr("src","src/public/icon-play-w.png");
    $(".n-btn").attr("src","src/public/icon-news-w.png");
    $(".m-btn").attr("src","src/public/icon-maps-w.png");
    $(".mo-btn").attr("src","src/public/icon-men-w.png");
    $(".s-btn").attr("src","src/public/icon-set-w.png");
    $(".bl-d").attr("src","src/public/battery-loading-w.gif");
    $(".bl-o").attr("src","src/public/icon-battery-w-sl.png");
    $(".m-sl").attr("src","src/public/icon-menu-w.png");
    $(".sb-si").attr("src","src/public/icon-sea-w.png");
    $(".down").attr("src","src/public/icon-ar-down-w.png");
    $(".up").attr("src","src/public/icon-ar-up-w.png");
    $(".ft-tw").attr("src","src/public/icon-twitter-gr.png");
    $(".ft-yt").attr("src","src/public/icon-yt-gr.png");
    $(".ft-i").attr("src","src/public/icon-insta-gr.png");
    $(".ft-tk").attr("src","src/public/icon-tk-gr.png");
    $(".nw-mc").attr("src","src/public/icon-m-news-w.png");
    $(".vr-mc").attr("src","src/public/icon-m-play-w.png");
    $(".lo-log").attr("src","src/public/logo-sm-w.png");
    $(".lo-mg").attr("src","src/public/icon-magic-w.png");
    $(".m-m-qs").attr("src","src/public/icon-qs-w.png");
    $(".m-m-wk").attr("src","src/public/icon-wk-w.png");
    $(".m-m-bo").attr("src","src/public/icon-bo-w.png");
    $(".m-m-fl").attr("src","src/public/icon-fl-w.png");
    $(".m-m-fi").attr("src","src/public/icon-fi-w.png");
    $(".mo-b-ch").attr("src","src/public/icon-back-c-w.png");
    $(".fe-sm-sm").attr("src","src/public/icon-fe-sm-w.png");
    $(".fe-sm-sa").attr("src","src/public/icon-fe-sa-w.png");
}
$("img").on("error", function () {
    $(this).attr("src", "src/public/icon-nof-bl.png");
});
if(urlParam()["r"] == "0"){
    $('.r-ul li:contains("1")').addClass('ru-selc');
} else if(urlParam()["r"] == null){
    $('.r-ul li:contains("1")').addClass('ru-selc');
} else if(urlParam()["r"] == "1"){
    $('.r-ul li:contains("1")').addClass('ru-selc');
} else if(urlParam()["r"] == "2"){
    $('.r-ul li:contains("2")').addClass('ru-selc');
} else if(urlParam()["r"] == "3"){
    $('.r-ul li:contains("3")').addClass('ru-selc');
}else if(urlParam()["r"] == "4"){
    $('.r-ul li:contains("4")').addClass('ru-selc');
}else if(urlParam()["r"] == "5"){
    $('.r-ul li:contains("5")').addClass('ru-selc');
}else if(urlParam()["r"] == "6"){
    $('.r-ul li:contains("6")').addClass('ru-selc');
}else if(urlParam()["r"] == "7"){
    $('.r-ul li:contains("7")').addClass('ru-selc');
}else if(urlParam()["r"] == "8"){
    $('.r-ul li:contains("8")').addClass('ru-selc');
}else if(urlParam()["r"] == "9"){
    $('.r-ul li:contains("9")').addClass('ru-selc');
}else if(urlParam()["r"] == "10"){
    $('.r-ul li:contains("10")').addClass('ru-selc');
}else if(urlParam()["r"] == "11"){
    $('.r-ul li:contains("11")').addClass('ru-selc');
}
checkBrU();
$("#menubtnn").click(function () {
    if ($(window).width() > 767){
        if($(".nav-na-mo").css('display') == 'block'){
            $(".nav-na-mo").fadeOut(200);
        }else if($(".nav-na-mo").css('display') == 'none'){
            $(".nav-na-mo").fadeIn(100);
            $(".nav-nm-me").animate({right:0, opacity:"show"}, 600);
            $("body").css({overflow:"hidden"});
        }
    }
    else{
        if($(".nav-na-mo").css('display') == 'block'){
            $(".nav-na-mo").fadeOut(200);
        }else if($(".nav-na-mo").css('display') == 'none'){
            $(".nav-na-mo").fadeIn(200);
            $("body").css({overflow:"hidden"});
        }
    }
});
var container = $(".nav-menu-op"),
    container1 = $(".counter-menu"),
    container2 = $(".more-menu"),
    container3 = $(".set-menu"),
    con0 = $('.sel-lang'),
    con1 = $('.sel-reg'),
    con2 = $('.sel-safesearch'),
    con3 = $('.sel-theme'),
    con4 = $('.reg-sel-reg'),
    con5 = $('.time-sel'),
    con6 = $('.col-sel'),
    con7 = $('.dura-sel'),
    con8 = $('.lay-sel'),
    con9 = $('.lic-sel'),
    con10 = $('.res-sel'),
    con11 = $('.size-sel'),
    con12 = $('.typ-sel'),
    fCon = $('.feed-d-wr'),
    bCon = $('.bug-d-wr');
$(document).mouseup(function(e) 
{
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(container).fadeOut(200);
    }
    if (!container1.is(e.target) && container1.has(e.target).length === 0) 
    {
        $(container1).fadeOut(200);
    }
    if (!container2.is(e.target) && container2.has(e.target).length === 0) 
    {
        $(container2).fadeOut(200);
    }
    if (!container3.is(e.target) && container3.has(e.target).length === 0) 
    {
        $(container3).fadeOut(200);
        $(con0).fadeOut(200);
        $(con1).fadeOut(200);
        $(con2).fadeOut(200);
        $(con3).fadeOut(200);
    }
    if (!con4.is(e.target) && con4.has(e.target).length === 0) 
    {
        $(con4).fadeOut(200);
        $('.menu-btn-regiont').children("img.down").hide();
        $('.menu-btn-regiont').children("img.up").show();
    }
    if (!con5.is(e.target) && con5.has(e.target).length === 0) 
    {
        $(con5).fadeOut(200);
        $('.menu-btn-time').children("img.down").hide();
        $('.menu-btn-time').children("img.up").show();
    }
    if (!con6.is(e.target) && con6.has(e.target).length === 0) 
    {
        $(con6).fadeOut(200);
        $('.menu-btn-color').children("img.down").hide();
        $('.menu-btn-color').children("img.up").show();
    }
    if (!con7.is(e.target) && con7.has(e.target).length === 0) 
    {
        $(con7).fadeOut(200);
        $('.menu-btn-dura').children("img.down").hide();
        $('.menu-btn-dura').children("img.up").show();
    }
    if (!con8.is(e.target) && con8.has(e.target).length === 0) 
    {
        $(con8).fadeOut(200);
        $('.menu-btn-lay').children("img.down").hide();
        $('.menu-btn-lay').children("img.up").show();
    }
    if (!con9.is(e.target) && con9.has(e.target).length === 0) 
    {
        $(con9).fadeOut(200);
        $('.menu-btn-lic').children("img.down").hide();
        $('.menu-btn-lic').children("img.up").show();
    }
    if (!con10.is(e.target) && con10.has(e.target).length === 0) 
    {
        $(con10).fadeOut(200);
        $('.menu-btn-res').children("img.down").hide();
        $('.menu-btn-res').children("img.up").show();
    }
    if (!con11.is(e.target) && con11.has(e.target).length === 0) 
    {
        $(con11).fadeOut(200);
        $('.menu-btn-size').children("img.down").hide();
        $('.menu-btn-size').children("img.up").show();
    }
    if (!con12.is(e.target) && con12.has(e.target).length === 0) 
    {
        $(con12).fadeOut(200);
        $('.menu-btn-typ').children("img.down").hide();
        $('.menu-btn-typ').children("img.up").show();
    }
    if (!fCon.is(e.target) && fCon.has(e.target).length === 0) 
    {
        $(fCon).fadeOut(200);
        $('.fe-la').fadeOut(200);
    }
    if (!bCon.is(e.target) && bCon.has(e.target).length === 0) 
    {
        $(bCon).fadeOut(200);
        $('.bu-la').fadeOut(200);
    }
});
$("#menubtn").click(function () {
    if($(container).css('display') == 'block'){
        $(container).fadeOut(200);
    }else if($(container).css('display') == 'none'){
        $(container).fadeIn(200);
    }
    if($(container1).css('display') == 'block' || $(container2).css('display') == 'block' || $(container3).css('display') == 'block'){
        $(container1).fadeOut(200);
        $(container2).fadeOut(200);
        $(container3).fadeOut(200);
    }
});
$("#counter").click(function () {
    if($(container1).css('display') == 'block'){
        $(container1).fadeOut(200);
    }else if($(container1).css('display') == 'none'){
        $(container1).fadeIn(200);
    }
    if($(container).css('display') == 'block' || $(container2).css('display') == 'block' || $(container3).css('display') == 'block'){
        $(container).fadeOut(200);
        $(container2).fadeOut(200);
        $(container3).fadeOut(200);
    }
});
$("#morebtn").click(function () {
    if($(container2).css('display') == 'block'){
        $(container2).fadeOut(200);
    }else if($(container2).css('display') == 'none'){
        $(container2).fadeIn(200);
    }
    if($(container).css('display') == 'block' ||  $(container1).css('display') == 'block' || $(container3).css('display') == 'block'){
        $(container).fadeOut(200);
        $(container1).fadeOut(200);
        $(container3).fadeOut(200);
    }
});
$("#setbtn").click(function () {
    if($(container3).css('display') == 'block'){
        $(container3).fadeOut(200);
    }else if($(container3).css('display') == 'none'){
        $(container3).fadeIn(200);
    }
    if($(container).css('display') == 'block' ||  $(container1).css('display') == 'block' || $(container2).css('display') == 'block'){
        $(container).fadeOut(200);
        $(container1).fadeOut(200);
        $(container2).fadeOut(200);
    }
});
$("#mclose").click(function () {
    $(container).fadeOut(200);
    $(window).scrollTop(0);
});
$("#counterclose").click(function () {
    $(container1).fadeOut(200);
    $(window).scrollTop(0);
});
$("#moreclose").click(function () {
    $(container2).fadeOut(200);
});
$("#setclose").click(function () {
    $(window).scrollTop(0);
    $(container3).fadeOut(200);
});
setTimeout(function() { 
    $(".icon-sl-m-b-g").hide();
    $(".icon-sl-m-b").show();
}, 2500);
$('.set-menu').mouseup(function(e) 
{
    if (!con0.is(e.target) && con0.has(e.target).length === 0) 
    {
        $(con0).fadeOut(200);
        $('.menu-btn-lang').children("img.down").hide();
        $('.menu-btn-lang').children("img.up").show();
    }
    if (!con1.is(e.target) && con1.has(e.target).length === 0) 
    {
        $(con1).fadeOut(200);
        $('.menu-btn-region').children("img.down").hide();
        $('.menu-btn-region').children("img.up").show();
    }
    if (!con2.is(e.target) && con2.has(e.target).length === 0) 
    {
        $(con2).fadeOut(200);
        $('.menu-btn-safesearch').children("img.down").hide();
        $('.menu-btn-safesearch').children("img.up").show();
    }
    if (!con3.is(e.target) && con3.has(e.target).length === 0) 
    {
        $(con3).fadeOut(200);
        $('.menu-btn-theme').children("img.down").hide();
        $('.menu-btn-theme').children("img.up").show();
    }
});
$("#langbtn, .menu-btn-lang img").click(function () {
    if($('.sel-lang').css('display') == 'block'){
        $('.sel-lang').fadeOut(200);
        $('.menu-btn-lang').children("img.down").hide();
        $('.menu-btn-lang').children("img.up").show();
    }else if($('.sel-lang').css('display') == 'none'){
        $('.sel-lang').fadeIn(200);
        $('.menu-btn-lang').children("img.up").hide();
        $('.menu-btn-lang').children("img.down").show();
    }
});
$("#regbtn, .menu-btn-region img").click(function () {
    if($('.sel-reg').css('display') == 'block'){
        $('.sel-reg').fadeOut(200);
        $('.menu-btn-region').children("img.down").hide();
        $('.menu-btn-region').children("img.up").show();
    }else if($('.sel-reg').css('display') == 'none'){
        $('.sel-reg').fadeIn(200);
        $('.menu-btn-region').children("img.up").hide();
        $('.menu-btn-region').children("img.down").show();
    }
});
$("#safesearchbtn, .menu-btn-safesearch img").click(function () {
    if($('.sel-safesearch').css('display') == 'block'){
        $('.sel-safesearch').fadeOut(200);
        $('.menu-btn-safesearch').children("img.down").hide();
        $('.menu-btn-safesearch').children("img.up").show();
    }else if($('.sel-safesearch').css('display') == 'none'){
        $('.sel-safesearch').fadeIn(200);
        $('.menu-btn-safesearch').children("img.up").hide();
        $('.menu-btn-safesearch').children("img.down").show();
    }
});
$("#themebtn, .menu-btn-theme img").click(function () {
    if($('.sel-theme').css('display') == 'block'){
        $('.sel-theme').fadeOut(200);
        $('.menu-btn-theme').children("img.down").hide();
        $('.menu-btn-theme').children("img.up").show();
    }else if($('.sel-theme').css('display') == 'none'){
        $('.sel-theme').fadeIn(200);
        $('.menu-btn-theme').children("img.up").hide();
        $('.menu-btn-theme').children("img.down").show();
    }
});
$(".lang-li").click(function () {
    $('#langbtn').text($(this).text());
    $('#langbtn').val($(this).data('val'));
    $('.sel-lang').hide();
    $('.menu-btn-lang').children("img.down").hide();
    $('.menu-btn-lang').children("img.up").show();
});
$(".reg-li").click(function () {
    $('#regbtn').text($(this).text());
    $('#regbtn').val($(this).data('val'));
    $('.sel-reg').hide();
    $('.menu-btn-region').children("img.down").hide();
    $('.menu-btn-region').children("img.up").show();
});
$(".safe-li").click(function () {
    $('#safesearchbtn').text($(this).text());
    $('#safesearchbtn').val($(this).data('val'));
    $('.sel-safesearch').hide();
    $('.menu-btn-safesearch').children("img.down").hide();
    $('.menu-btn-safesearch').children("img.up").show();
});
$(".theme-li").click(function () {
    $('#themebtn').text($(this).text());
    $('#themebtn').val($(this).data('val'));
    $('.sel-theme').hide();
    $('.menu-btn-theme').children("img.down").hide();
    $('.menu-btn-theme').children("img.up").show();
});
$(".sel-col-li").click(function () {
    $('#col-sel-btn').text($(this).text());
    $('#col-sel-btn').val($(this).data('val'));
    $('.col-sel').hide();
    var b = $('#col-sel-btn').val();
    document.cookie = `col-set=${b}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    window.location.reload();
});
$(".sel-dura-li").click(function () {
    $('#dura-sel-btn').text($(this).text());
    $('#dura-sel-btn').val($(this).data('val'));
    $('.dura-sel').hide();
    var b = $('#dura-sel-btn').val();
    document.cookie = `dura-set=${b}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    window.location.reload();
});
$(".sel-lay-li").click(function () {
    $('#lay-sel-btn').text($(this).text());
    $('#lay-sel-btn').val($(this).data('val'));
    $('.lay-sel').hide();
    var b = $('#lay-sel-btn').val();
    document.cookie = `lay-set=${b}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    window.location.reload();
});
$(".sel-lic-li").click(function () {
    $('#lic-sel-btn').text($(this).text());
    $('#lic-sel-btn').val($(this).data('val'));
    $('.lic-sel').hide();
    var b = $('#lic-sel-btn').val();
    document.cookie = `lic-set=${b}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    window.location.reload();
});
$(".sel-res-li").click(function () {
    $('#res-sel-btn').text($(this).text());
    $('#res-sel-btn').val($(this).data('val'));
    $('.res-sel').hide();
    var b = $('#res-sel-btn').val();
    document.cookie = `res-set=${b}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    window.location.reload();
});
$(".sel-size-li").click(function () {
    $('#size-sel-btn').text($(this).text());
    $('#size-sel-btn').val($(this).data('val'));
    $('.size-sel').hide();
    var b = $('#size-sel-btn').val();
    document.cookie = `size-set=${b}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    window.location.reload();
});
$(".sel-time-li").click(function () {
    $('#time-sel-btn').text($(this).text());
    $('#time-sel-btn').val($(this).data('val'));
    $('.time-sel').hide();
    var b = $('#time-sel-btn').val();
    document.cookie = `time-set=${b}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    window.location.reload();
});
$(".sel-typ-li").click(function () {
    $('#typ-sel-btn').text($(this).text());
    $('#typ-sel-btn').val($(this).data('val'));
    $('.typ-sel').hide();
    var b = $('#typ-sel-btn').val();
    document.cookie = `typ-set=${b}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    window.location.reload();
});
$("#saveBtn").click(function () {
    var a = $('#langbtn').val();
    var b = $('#regbtn').val();
    var c = $('#safesearchbtn').val();
    var d = $('#themebtn').val();
    document.cookie = `language=${a}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    document.cookie = `region=${b}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    document.cookie = `safesearch=${c}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    document.cookie = `theme=${d}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    window.location.reload();
});
$("#resetBtn").click(function () {
    var getLang = navigator.language || navigator.userLanguage; 
    var userLang = getLang.slice(0, 2);
    if (userLang.includes("de") == true){
        document.cookie = `language=de; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        document.cookie = `region=de-DE; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        document.cookie = `safesearch=Moderate; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.cookie = `theme=dark; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        } else{
            document.cookie = `theme=light; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        }
        document.cookie = `visitor=1; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    } else if (userLang.includes("fr") == true){
        document.cookie = `language=fr; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        document.cookie = `region=fr-FR; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        document.cookie = `safesearch=Moderate; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.cookie = `theme=dark; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        } else{
            document.cookie = `theme=light; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        }
        document.cookie = `visitor=1; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    } else {
        document.cookie = `language=en; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        document.cookie = `region=en-GB; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        document.cookie = `safesearch=Moderate; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.cookie = `theme=dark; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        } else{
            document.cookie = `theme=light; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        }
        document.cookie = `visitor=1; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    }
    window.location.reload();
});
$(document).ready(function() {
    var cA = readCookie("language"),
    cB = readCookie("region"),
    cC = readCookie("safesearch"),
    cD = readCookie("theme"),
    cE = readCookie("time-set"),
    cF = readCookie("col-set"),
    cG = readCookie("dura-set"),
    cH = readCookie("lay-set"),
    cI = readCookie("lic-set"),
    cJ = readCookie("res-set"),
    cK = readCookie("size-set"),
    cL = readCookie("typ-set"),
    vA = $(".lang-ul").find(`[data-val='${cA}']`).text(),
    vB = $(".reg-ul").find(`[data-val='${cB}']`).text(),
    vC = $(".safe-ul").find(`[data-val='${cC}']`).text(),
    vD = $(".theme-ul").find(`[data-val='${cD}']`).text(),
    vE = $(".sel-time-ul").find(`[data-val='${cE}']`).text(),
    vF = $(".sel-col-ul").find(`[data-val='${cF}']`).text(),
    vG = $(".sel-dura-ul").find(`[data-val='${cG}']`).text(),
    vH = $(".sel-lay-ul").find(`[data-val='${cH}']`).text(),
    vI = $(".sel-lic-ul").find(`[data-val='${cI}']`).text(),
    vJ = $(".sel-res-ul").find(`[data-val='${cJ}']`).text(),
    vK = $(".sel-size-ul").find(`[data-val='${cK}']`).text(),
    vL = $(".sel-typ-ul").find(`[data-val='${cL}']`).text(),
    dA = $(".lang-ul").find(`[data-val='${cA}']`).data('val'),
    dB = $(".reg-ul").find(`[data-val='${cB}']`).data('val'),
    dC = $(".safe-ul").find(`[data-val='${cC}']`).data('val'),
    dD = $(".theme-ul").find(`[data-val='${cD}']`).data('val'),
    dE = $(".sel-time-ul").find(`[data-val='${cE}']`).data('val'),
    dF = $(".sel-col-ul").find(`[data-val='${cF}']`).data('val'),
    dG = $(".sel-dura-ul").find(`[data-val='${cG}']`).data('val'),
    dH = $(".sel-lay-ul").find(`[data-val='${cH}']`).data('val'),
    dI = $(".sel-lic-ul").find(`[data-val='${cI}']`).data('val'),
    dJ = $(".sel-res-ul").find(`[data-val='${cJ}']`).data('val'),
    dK = $(".sel-size-ul").find(`[data-val='${cK}']`).data('val'),
    dL = $(".sel-typ-ul").find(`[data-val='${cL}']`).data('val');
    $('#langbtn').val(dA);
    $('#regbtn').val(dB);
    $('#safesearchbtn').val(dC);
    $('#themebtn').val(dD);
    $("#time-sel-btn").val(dE);
    $("#col-sel-btn").val(dF);
    $("#dura-sel-btn").val(dG);
    $("#lay-sel-btn").val(dH);
    $("#lic-sel-btn").val(dI);
    $("#res-sel-btn").val(dJ);
    $("#size-sel-btn").val(dK);
    $("#typ-sel-btn").val(dL);

    if(!cA){
        if (readCookie('language') == 'de'){
            $('#langbtn').text('Sprache');
        } else if(readCookie('language') == 'en'){
            $('#langbtn').text('Language');
        } else if(readCookie('language') == 'fr'){
            $('#langbtn').text('Langue');
        }
    } else {
        $('#langbtn').text(vA);
    }
    if(!cB){
        if (readCookie('language') == 'de'){
            $('#regbtn').text('Alle Suchregionen');
            $('#reg-sel-btn').text('Alle Suchregionen');
        } else if(readCookie('language') == 'en'){
            $('#regbtn').text('All search regions');
            $('#reg-sel-btn').text('All search regions');
        } else if(readCookie('language') == 'fr'){
            $('#regbtn').text('Toutes les régions de recherche');
            $('#reg-sel-btn').text('Toutes les régions de recherche');
        }
    } else {
        $('#regbtn').text(vB);
        $('#reg-sel-btn').text(vB);
    }
    if(!cC){
        if (readCookie('language') == 'de'){
            $('#safesearchbtn').text('Sichere Suche');
        } else if(readCookie('language') == 'en'){
            $('#safesearchbtn').text('SafeSearch');
        } else if(readCookie('language') == 'fr'){
            $('#safesearchbtn').text('Recherche sécurisée');
        }
    } else {
        $('#safesearchbtn').text(vC);
    }
    if(!cD){
        if (readCookie('language') == 'de'){
            $('#themebtn').text('Design');
        } else if(readCookie('language') == 'en'){
            $('#themebtn').text('Theme');
        } else if(readCookie('language') == 'fr'){
            $('#themebtn').text('Thème');
        }
    } else {
        $('#themebtn').text(vD);
    }
    if(!cE){
        if (readCookie('language') == 'de'){
            $('#time-sel-btn').text('Zeit');
        } else if(readCookie('language') == 'en'){
            $('#time-sel-btn').text('Time');
        } else if(readCookie('language') == 'fr'){
            $('#time-sel-btn').text('Temps');
        }
    } else {
        $('#time-sel-btn').text(vE);
        $('#time-sel-btn').css({'font-weight':'bold'});
    }
    if(!cF){
        if (readCookie('language') == 'de'){
            $('#col-sel-btn').text('Alle Farben');
        } else if(readCookie('language') == 'en'){
            $('#col-sel-btn').text('All colors');
        } else if(readCookie('language') == 'fr'){
            $('#col-sel-btn').text('Toutes les couleurs');
        }
    } else {
        $('#col-sel-btn').text(vF);
        $('#col-sel-btn').css({'font-weight':'bold'});
    }
    if(!cG){
        if (readCookie('language') == 'de'){
            $('#dura-sel-btn').text('Länge');
        } else if(readCookie('language') == 'en'){
            $('#dura-sel-btn').text('Duration');
        } else if(readCookie('language') == 'fr'){
            $('#dura-sel-btn').text('Durée');
        }
    } else {
        $('#dura-sel-btn').text(vG);
        $('#dura-sel-btn').css({'font-weight':'bold'});
    }
    if(!cH){
        if (readCookie('language') == 'de'){
            $('#lay-sel-btn').text('Layout');
        } else if(readCookie('language') == 'en'){
            $('#lay-sel-btn').text('Layout');
        } else if(readCookie('language') == 'fr'){
            $('#lay-sel-btn').text('Motif');
        }
    } else {
        $('#lay-sel-btn').text(vH);
        $('#lay-sel-btn').css({'font-weight':'bold'});
    }
    if(!cI){
        if (readCookie('language') == 'de'){
            $('#lic-sel-btn').text('Lizenz');
        } else if(readCookie('language') == 'en'){
            $('#lic-sel-btn').text('License');
        } else if(readCookie('language') == 'fr'){
            $('#lic-sel-btn').text('Licence');
        }
    } else {
        $('#lic-sel-btn').text(vI);
        $('#lic-sel-btn').css({'font-weight':'bold'});
    }
    if(!cJ){
        if (readCookie('language') == 'de'){
            $('#res-sel-btn').text('Auflösung');
        } else if(readCookie('language') == 'en'){
            $('#res-sel-btn').text('Resolution');
        } else if(readCookie('language') == 'fr'){
            $('#res-sel-btn').text('Résolution');
        }
    } else {
        $('#res-sel-btn').text(vJ);
        $('#res-sel-btn').css({'font-weight':'bold'});
    }
    if(!cK){
        if (readCookie('language') == 'de'){
            $('#size-sel-btn').text('Größe');
        } else if(readCookie('language') == 'en'){
            $('#size-sel-btn').text('Size');
        } else if(readCookie('language') == 'fr'){
            $('#size-sel-btn').text('Taille');
        }
    } else {
        $('#size-sel-btn').text(vK);
        $('#size-sel-btn').css({'font-weight':'bold'});
    }
    if(!cL){
        if (readCookie('language') == 'de'){
            $('#typ-sel-btn').text('Typ');
        } else if(readCookie('language') == 'en'){
            $('#typ-sel-btn').text('Type');
        } else if(readCookie('language') == 'fr'){
            $('#typ-sel-btn').text('Types');
        }
    } else {
        $('#typ-sel-btn').text(vL);
        $('#typ-sel-btn').css({'font-weight':'bold'});
    }
});
$("#reg-sel-btn, .menu-btn-regiont img").click(function () {
    if($('.reg-sel-reg').css('display') == 'block'){
        $('.reg-sel-reg').fadeOut(200);
        $('.menu-btn-regiont').children("img.down").hide();
        $('.menu-btn-regiont').children("img.up").show();
    }else if($('.reg-sel-reg').css('display') == 'none'){
        $('.reg-sel-reg').fadeIn(200);
        $('.menu-btn-regiont').children("img.up").hide();
        $('.menu-btn-regiont').children("img.down").show();
    }
});
$("#time-sel-btn, .menu-btn-time img").click(function () {
    if($('.time-sel').css('display') == 'block'){
        $('.time-sel').fadeOut(200);
        $('.menu-btn-time').children("img.down").hide();
        $('.menu-btn-time').children("img.up").show();
    }else if($('.time-sel').css('display') == 'none'){
        $('.time-sel').fadeIn(200);
        $('.menu-btn-time').children("img.up").hide();
        $('.menu-btn-time').children("img.down").show();
    }
});
$("#col-sel-btn, .menu-btn-color img").click(function () {
    if($('.col-sel').css('display') == 'block'){
        $('.col-sel').fadeOut(200);
        $('.menu-btn-color').children("img.down").hide();
        $('.menu-btn-color').children("img.up").show();
    }else if($('.col-sel').css('display') == 'none'){
        $('.col-sel').fadeIn(200);
        $('.menu-btn-color').children("img.up").hide();
        $('.menu-btn-color').children("img.down").show();
    }
});
$("#dura-sel-btn, .menu-btn-dura img").click(function () {
    if($('.dura-sel').css('display') == 'block'){
        $('.dura-sel').fadeOut(200);
        $('.menu-btn-dura').children("img.down").hide();
        $('.menu-btn-dura').children("img.up").show();
    }else if($('.dura-sel').css('display') == 'none'){
        $('.dura-sel').fadeIn(200);
        $('.menu-btn-dura').children("img.up").hide();
        $('.menu-btn-dura').children("img.down").show();
    }
});
$("#lay-sel-btn, .menu-btn-lay img").click(function () {
    if($('.lay-sel').css('display') == 'block'){
        $('.lay-sel').fadeOut(200);
        $('.menu-btn-lay').children("img.down").hide();
        $('.menu-btn-lay').children("img.up").show();
    }else if($('.lay-sel').css('display') == 'none'){
        $('.lay-sel').fadeIn(200);
        $('.menu-btn-lay').children("img.up").hide();
        $('.menu-btn-lay').children("img.down").show();
    }
});
$("#lic-sel-btn, .menu-btn-lic img").click(function () {
    if($('.lic-sel').css('display') == 'block'){
        $('.lic-sel').fadeOut(200);
        $('.menu-btn-lic').children("img.down").hide();
        $('.menu-btn-lic').children("img.up").show();
    }else if($('.lic-sel').css('display') == 'none'){
        $('.lic-sel').fadeIn(200);
        $('.menu-btn-lic').children("img.up").hide();
        $('.menu-btn-lic').children("img.down").show();
    }
});
$("#res-sel-btn, .menu-btn-res img").click(function () {
    if($('.res-sel').css('display') == 'block'){
        $('.res-sel').fadeOut(200);
        $('.menu-btn-res').children("img.down").hide();
        $('.menu-btn-res').children("img.up").show();
    }else if($('.res-sel').css('display') == 'none'){
        $('.res-sel').fadeIn(200);
        $('.menu-btn-res').children("img.up").hide();
        $('.menu-btn-res').children("img.down").show();
    }
});
$("#size-sel-btn, .menu-btn-size img").click(function () {
    if($('.size-sel').css('display') == 'block'){
        $('.size-sel').fadeOut(200);
        $('.menu-btn-size').children("img.down").hide();
        $('.menu-btn-size').children("img.up").show();
    }else if($('.size-sel').css('display') == 'none'){
        $('.size-sel').fadeIn(200);
        $('.menu-btn-size').children("img.up").hide();
        $('.menu-btn-size').children("img.down").show();
    }
});
$("#typ-sel-btn, .menu-btn-typ img").click(function () {
    if($('.typ-sel').css('display') == 'block'){
        $('.typ-sel').fadeOut(200);
        $('.menu-btn-typ').children("img.down").hide();
        $('.menu-btn-typ').children("img.up").show();
    }else if($('.typ-sel').css('display') == 'none'){
        $('.typ-sel').fadeIn(200);
        $('.menu-btn-typ').children("img.up").hide();
        $('.menu-btn-typ').children("img.down").show();
    }
});
$("#fil-reset").click(function () {
    document.cookie =  "time-set=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;SameSite=Lax";
    document.cookie =  "size-set=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;SameSite=Lax";
    document.cookie =  "lay-set=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;SameSite=Lax";
    document.cookie =  "typ-set=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;SameSite=Lax";
    document.cookie =  "col-set=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;SameSite=Lax";
    document.cookie =  "lic-set=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;SameSite=Lax";
    document.cookie =  "dura-set=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;SameSite=Lax";
    document.cookie =  "res-set=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;SameSite=Lax";
    window.location.reload();
});

var timesetCookie = readCookie('time-set'),
    licensesetCookie = readCookie('lic-set'),
    colorsetCookie = readCookie('col-set'),
    typsetCookie = readCookie('typ-set'),
    laysetCookie = readCookie('lay-set'),
    sizesetCookie = readCookie('size-set'),
    ressetCookie = readCookie('res-set'),
    durasetCookie = readCookie('dura-set');

if (timesetCookie || licensesetCookie || colorsetCookie || typsetCookie || laysetCookie || sizesetCookie || ressetCookie || durasetCookie){
    $('.filter-reset').show();
}
else{
    $('.filter-reset').hide();
}
$(".sel-reg-li").click(function () {
    $('#reg-sel-btn').text($(this).text());
    $('#reg-sel-btn').val($(this).data('val'));
    $('.reg-sel-reg').hide();
    var b = $('#reg-sel-btn').val();
    document.cookie = `region=${b}; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    window.location.reload();
});
$("#log-btn").click(function () {
    location.href = 'login.php';
});
$("#logout-btn").click(function () {
    location.href = 'logout.php';
});
$("#bugre,#mo-bugre").click(function () {
    if($('.bug-d-wr').css('display') == 'block'){
        $('.bug-d-wr').fadeOut(200);
        $('.bu-la').fadeOut(200);
    }else if($('.bug-d-wr').css('display') == 'none'){
        $('.bug-d-wr').fadeIn(200);
        $('.bu-la').fadeIn(200);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
});
$("#feedb,#mo-feedb").click(function () {
    if($('.feed-d-wr').css('display') == 'block'){
        $('.feed-d-wr').fadeOut(200);
        $('.fe-la').fadeOut(200);
    }else if($('.feed-d-wr').css('display') == 'none'){
        $('.feed-d-wr').fadeIn(200);
        $('.fe-la').fadeIn(200);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
});
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$("#f-sub").click(function () {
    var fCheck = false;
    var femail = $('#f-email').val();
    var fname = $('#f-name').val();
    var fmes = $('#f-mes').val();
    if(!isEmail(femail) && !fmes){
        $("#f-mes").css({'border':'none'});
        $("#f-email").css({'border':'none'});
        $(".fb-msg").remove();
        $(".feed-c").prepend('<div class="fb-msg"></div>');
        if (readCookie('language') == 'de'){
            $(".fb-msg").append('<span>Bitte gebe eine gültige E-Mail-Adresse ein</span>');
            $(".fb-msg").append('<span>Anscheinend hast du dein Feedback vergessen</span>');
        } else if(readCookie('language') == 'en'){
            $(".fb-msg").append('<span>Please enter a valid email address</span>');
            $(".fb-msg").append('<span>It seems you forgot your feedback</span>');
        } else if(readCookie('language') == 'fr'){
            $(".fb-msg").append("<span>S'il vous plaît, mettez une adresse email valide</span>");
            $(".fb-msg").append('<span>Il semble que vous ayez oublié vos commentaires</span>');
        }
        $("#f-email").css({'border':'1px solid rgb(255 116 116)'});
        $("#f-mes").css({'border':'1px solid rgb(255 116 116)'});
    }else if(isEmail(femail) && !fmes){
        $("#f-mes").css({'border':'none'});
        $("#f-email").css({'border':'none'});
        $(".fb-msg").remove();
        $(".feed-c").prepend('<div class="fb-msg"></div>');
        if (readCookie('language') == 'de'){
            $(".fb-msg").append('<span>Anscheinend hast du dein Feedback vergessen</span>');
        } else if(readCookie('language') == 'en'){
            $(".fb-msg").append('<span>It seems you forgot your feedback</span>');
        } else if(readCookie('language') == 'fr'){
            $(".fb-msg").append('<span>Il semble que vous ayez oublié vos commentaires</span>');
        }
        $("#f-mes").css({'border':'1px solid rgb(255 116 116)'});
    }else if(!isEmail(femail) && fmes){
        $("#f-mes").css({'border':'none'});
        $("#f-email").css({'border':'none'});
        $(".fb-msg").remove();
        $(".feed-c").prepend('<div class="fb-msg"></div>');
        if (readCookie('language') == 'de'){
            $(".fb-msg").append('<span>Bitte gebe eine gültige E-Mail-Adresse ein</span>');
        } else if(readCookie('language') == 'en'){
            $(".fb-msg").append('<span>Please enter a valid email address</span>');
        } else if(readCookie('language') == 'fr'){
            $(".fb-msg").append("<span>S'il vous plaît, mettez une adresse email valide</span>");
        }
        $("#f-email").css({'border':'1px solid rgb(255 116 116)'});
    }else{
        $(".fb-msg").remove();
        $("#f-mes").css({'border':'none'});
        $("#f-email").css({'border':'none'});
        fCheck = true;
    }
    var fTe = $('#f-fill').val();
    if(fCheck == true){
        $.ajax({
            url: 'fe-bu.php',
            type: 'POST',
            data: {
                "f-email": femail,
                "f-name": fname,
                "f-mes": fmes,
                "f-fill": fTe
            },
            success: function() {
                $(".fb-done").remove();
                $(".feed-c").prepend('<div class="fb-done"></div>');
                if (readCookie('language') == 'de'){
                    $(".fb-done").append('<span>Danke für deine Rückmeldung!</span>');
                } else if(readCookie('language') == 'en'){
                    $(".fb-done").append('<span>Thank you for your feedback!</span>');
                } else if(readCookie('language') == 'fr'){
                    $(".fb-done").append('<span>Merci pour votre avis!</span>');
                }
                $('#f-email').val("");
                $('#f-name').val("");
                $('#f-mes').val("");
            }               
        });
    }
});
$("#b-sub").click(function () {
    var bCheck = false;
    var bemail = $('#b-email').val();
    var bname = $('#b-name').val();
    var burl = $('#b-url').val();
    var berr = $('#b-error').val();
    var bmes = $('#b-mes').val();
    if(!isEmail(bemail) && !bmes){
        $("#b-mes").css({'border':'none'});
        $("#b-email").css({'border':'none'});
        $(".fb-msg").remove();
        $(".bug-c").prepend('<div class="fb-msg"></div>');
        if (readCookie('language') == 'de'){
            $(".fb-msg").append('<span>Bitte gebe eine gültige E-Mail-Adresse ein</span>');
            $(".fb-msg").append('<span>Bitte erzähle uns mehr über die Bugs! 🐛</span>');
        } else if(readCookie('language') == 'en'){
            $(".fb-msg").append('<span>Please enter a valid email address</span>');
            $(".fb-msg").append('<span>Please tell us more about the bugs! 🐛</span>');
        } else if(readCookie('language') == 'fr'){
            $(".fb-msg").append("<span>S'il vous plaît, mettez une adresse email valide</span>");
            $(".fb-msg").append('<span>Veuillez nous en dire plus sur les bugs! 🐛</span>');
        }
        $("#b-email").css({'border':'1px solid rgb(255 116 116)'});
        $("#b-mes").css({'border':'1px solid rgb(255 116 116)'});
    }else if(isEmail(bemail) && !bmes){
        $("#b-mes").css({'border':'none'});
        $("#b-email").css({'border':'none'});
        $(".fb-msg").remove();
        $(".bug-c").prepend('<div class="fb-msg"></div>');
        if (readCookie('language') == 'de'){
            $(".fb-msg").append('<span>Bitte erzähle uns mehr über die Bugs! 🐛</span>');
        } else if(readCookie('language') == 'en'){
            $(".fb-msg").append('<span>Please tell us more about the bugs! 🐛</span>');
        } else if(readCookie('language') == 'fr'){
            $(".fb-msg").append('<span>Veuillez nous en dire plus sur les bugs! 🐛</span>');
        }
        $("#b-mes").css({'border':'1px solid rgb(255 116 116)'});
    }else if(!isEmail(bemail) && bmes){
        $("#b-mes").css({'border':'none'});
        $("#b-email").css({'border':'none'});
        $(".fb-msg").remove();
        $(".bug-c").prepend('<div class="fb-msg"></div>');
        if (readCookie('language') == 'de'){
            $(".fb-msg").append('<span>Bitte gebe eine gültige E-Mail-Adresse ein</span>');
        } else if(readCookie('language') == 'en'){
            $(".fb-msg").append('<span>Please enter a valid email address</span>');
        } else if(readCookie('language') == 'fr'){
            $(".fb-msg").append("<span>S'il vous plaît, mettez une adresse email valide</span>");
        }
        $("#b-email").css({'border':'1px solid rgb(255 116 116)'});
    }else{
        $(".fb-msg").remove();
        $("#b-mes").css({'border':'none'});
        $("#b-email").css({'border':'none'});
        bCheck = true;
    }
    var bTe = $('#b-fill').val();
    if(bCheck == true){
        $.ajax({
            url: 'fe-bu.php',
            type: 'POST',
            data: {
                "b-email": bemail,
                "b-name": bname,
                "b-url": burl,
                "b-error": berr,
                "b-mes": bmes,
                "b-fill": bTe
            },
            success: function() {
                $(".fb-done").remove();
                $(".bug-c").prepend('<div class="fb-done"></div>');
                if (readCookie('language') == 'de'){
                    $(".fb-done").append('<span>Vielen Dank für deine Berichterstattung! 🐛</span>');
                } else if(readCookie('language') == 'en'){
                    $(".fb-done").append('<span>Thank you for your reporting! 🐛</span>');
                } else if(readCookie('language') == 'fr'){
                    $(".fb-done").append('<span>Merci pour votre signalement! 🐛</span>');
                }
                $('#b-email').val("");
                $('#b-name').val("");
                $('#b-url').val("");
                $('#b-error').val("");
                $('#b-mes').val("");
            }               
        });
    }
});

$("#feedclose").click(function () {
    $('.feed-d-wr').fadeOut(200);
    $('.fe-la').fadeOut(200);
});
$("#bugclose").click(function () {
    $('.bug-d-wr').fadeOut(200);
    $('.bu-la').fadeOut(200);
});
if (readCookie('theme') == 'light'){
    $("#tg-i-c").prop( "checked", false );
} else if (readCookie('theme') == 'dark'){
    $("#tg-i-c").prop( "checked", true );
}
$('#t-tg').click(function () {
    if (readCookie('theme') == 'light'){
        document.cookie = `theme=dark; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        $.getScript("src/scripts/theme.js");
        $("#tg-i-c").prop( "checked", false );
    } else if (readCookie('theme') == 'dark'){
        document.cookie = `theme=light; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        $.getScript("src/scripts/theme.js");
        $("#tg-i-c").prop( "checked", true );
    }
});
$('#fl-de').click(function () {
    document.cookie = `language=de; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    location.reload();
});
$('#fl-gb').click(function () {
    document.cookie = `language=en; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    location.reload();
});
$('#fl-fr').click(function () {
    document.cookie = `language=fr; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    location.reload();
});

$('.fe-sm-sm').click(function () {
    $('.feedback').fadeOut(200);
    $('.fe-vo').fadeOut(200);
    $('.feba-t').fadeOut(200);
    setTimeout(function() { 
        if (readCookie('theme') == 'light'){
            $('.feba-t').css({'background-color':'#ffffff','box-shadow':'0px 0px 2px rgb(0 0 0 / 40%)','padding':'6px','padding-left':'8px','padding-right':'8px','border-radius':'20px'});
        } else if (readCookie('theme') == 'dark'){
            $('.feba-t').css({'background-color':'#2b2c2e','box-shadow':'0px 0px 5px rgb(0 0 0 / 40%)','padding':'6px','padding-left':'8px','padding-right':'8px','border-radius':'20px'});
        }
        $('.feedback-t').css({'margin-bottom':'4px'});
        if (readCookie('language') == 'de'){
            $('.feedback,.feba-t').html('<div>Danke für deine Rückmeldung! ❤️</div>');
        } else if(readCookie('language') == 'en'){
            $('.feedback,.feba-t').html('<div>Thank you for the feedback! ❤️</div>');
        } else if(readCookie('language') == 'fr'){
            $('.feedback,.feba-t').html('<div>Merci pour votre avis! ❤️</div>');
        }
        $('.feedback,.feba-t').fadeIn(200);
        setTimeout(function(){
            $('.feedback,.feba-t').fadeOut(200);
        },2000);
        setTimeout(function() { 
            $('.feedback,.feba-t').fadeOut(400);
            if (readCookie('language') == 'de'){
                $('.feedback,.feba-t').html('<div><span class="mr-fe">Mehr feedback</span></div>');
            } else if(readCookie('language') == 'en'){
                $('.feedback,.feba-t').html('<div><span class="mr-fe">More feedback</span></div>');
            } else if(readCookie('language') == 'fr'){
                $('.feedback,.feba-t').html('<div><span class="mr-fe">Plus de commentaires</span></div>');
            }
            $('.feedback,.feba-t').fadeIn(200);
            conFL();
        }, 2500);
    }, 500);
});

$('.fe-sm-sa').click(function () {
    $('.feedback').fadeOut(200);
    $('.fe-vo').fadeOut(200);
    $('.feba-t').fadeOut(200);
    setTimeout(function() { 
        if (readCookie('theme') == 'light'){
            $('.feba-t').css({'background-color':'#ffffff','box-shadow':'0px 0px 2px rgb(0 0 0 / 40%)','padding':'6px','padding-left':'8px','padding-right':'8px','border-radius':'20px'});
        } else if (readCookie('theme') == 'dark'){
            $('.feba-t').css({'background-color':'#2b2c2e','box-shadow':'0px 0px 5px rgb(0 0 0 / 40%)','padding':'6px','padding-left':'8px','padding-right':'8px','border-radius':'20px'});
        }
        $('.feedback-t').css({'margin-bottom':'4px'});
        if (readCookie('language') == 'de'){
            $('.feedback,.feba-t').html('<div>Danke für deine Rückmeldung! ❤️</div>');
        } else if(readCookie('language') == 'en'){
            $('.feedback,.feba-t').html('<div>Thank you for the feedback! ❤️</div>');
        } else if(readCookie('language') == 'fr'){
            $('.feedback,.feba-t').html('<div>Merci pour votre avis! ❤️</div>');
        }
        $('.feedback,.feba-t').fadeIn(200);
        setTimeout(function(){
            $('.feedback,.feba-t').fadeOut(200);
        },2000);
        setTimeout(function() { 
            $('.feedback,.feba-t').fadeOut(400);
            if (readCookie('language') == 'de'){
                $('.feedback,.feba-t').html('<div><span class="mr-fe">Mehr feedback</span></div>');
            } else if(readCookie('language') == 'en'){
                $('.feedback,.feba-t').html('<div><span class="mr-fe">More feedback</span></div>');
            } else if(readCookie('language') == 'fr'){
                $('.feedback,.feba-t').html('<div><span class="mr-fe">Plus de commentaires</span></div>');
            }
            $('.feedback,.feba-t').fadeIn(200);
            conFL();
        }, 2500);
    }, 500);
});

function conFL(){
    $(".mr-fe").click(function () {
        if($('.feed-d-wr').css('display') == 'block'){
            $('.feed-d-wr').fadeOut(200);
            $('.fe-la').fadeOut(200);
        }else if($('.feed-d-wr').css('display') == 'none'){
            $('.feed-d-wr').fadeIn(200);
            $('.fe-la').fadeIn(200);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    });
}

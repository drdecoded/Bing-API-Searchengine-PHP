'use strict';
function clD(x){
    if(x == 1){
        $('.hd-na').hide();
        $('.hd-na-n').hide();
        $('.hd-na-n-mo').hide();
        $('.hd-wel-wr').hide();
        $(".hd-b").animate({ scrollTop: 0 }, "fast");
    }else if(x == 2){
        $('.hd-na').fadeIn(200);
    }
}
$('#hd-sea,#hd-sea-m').click(function () {
    clD(1);
    $('.hd-btn-me').fadeOut(500);
    $('.hd-n-back').fadeIn(500);
    $('#hd-in-sea').fadeIn(500);
    if (readCookie('theme') == 'light'){
        $('#hd-sea').css({'background-color': '#93dfff'});
    } else if(readCookie('theme') == 'dark'){
        $('#hd-sea').css({'background-color': '#005679'});
    }
    $('#hd-ext').css({'background-color': ''});
    $('#hd-su').css({'background-color': ''});
    $('#hd-tut').css({'background-color': ''});
    $('#hd-set').css({'background-color': ''});
    $('#hd-sh').css({'background-color': ''});
    $('#hd-qw').css({'background-color': ''});
    $('#hd-qw-se').css({'background-color': ''});
    $('#hd-qw-cou').css({'background-color': ''});
    $('#hd-abo').css({'background-color': ''});
    $('#hd-faq').css({'background-color': ''});
});
$('#hd-su,#hd-su-m').click(function () {
    clD(1);
    $('.hd-btn-me').fadeOut(500);
    $('.hd-n-back').fadeIn(500);
    $('#hd-in-su').fadeIn(500);
    if (readCookie('theme') == 'light'){
        $('#hd-su').css({'background-color': '#93dfff'});
    } else if(readCookie('theme') == 'dark'){
        $('#hd-su').css({'background-color': '#005679'});
    }
    $('#hd-sea').css({'background-color': ''});
    $('#hd-ext').css({'background-color': ''});
    $('#hd-tut').css({'background-color': ''});
    $('#hd-set').css({'background-color': ''});
    $('#hd-sh').css({'background-color': ''});
    $('#hd-qw').css({'background-color': ''});
    $('#hd-qw-se').css({'background-color': ''});
    $('#hd-qw-cou').css({'background-color': ''});
    $('#hd-abo').css({'background-color': ''});
    $('#hd-faq').css({'background-color': ''});
});
$('#hd-ext,#hd-ext-m').click(function () {
    clD(1);
    $('.hd-btn-me').fadeOut(500);
    $('.hd-n-back').fadeIn(500);
    $('#hd-in-ext').fadeIn(500);
    if (readCookie('theme') == 'light'){
        $('#hd-ext').css({'background-color': '#93dfff'});
    } else if(readCookie('theme') == 'dark'){
        $('#hd-ext').css({'background-color': '#005679'});
    }
    $('#hd-sea').css({'background-color': ''});
    $('#hd-su').css({'background-color': ''});
    $('#hd-tut').css({'background-color': ''});
    $('#hd-set').css({'background-color': ''});
    $('#hd-sh').css({'background-color': ''});
    $('#hd-qw').css({'background-color': ''});
    $('#hd-qw-se').css({'background-color': ''});
    $('#hd-qw-cou').css({'background-color': ''});
    $('#hd-abo').css({'background-color': ''});
    $('#hd-faq').css({'background-color': ''});
}); 
$('#hd-tut,#hd-tut-m').click(function () {
    clD(1);
    $('.hd-btn-me').fadeOut(500);
    $('.hd-n-back').fadeIn(500);
    $('#hd-in-tut').fadeIn(500);
    if (readCookie('theme') == 'light'){
        $('#hd-tut').css({'background-color': '#93dfff'});
    } else if(readCookie('theme') == 'dark'){
        $('#hd-tut').css({'background-color': '#005679'});
    }
    $('#hd-sea').css({'background-color': ''});
    $('#hd-ext').css({'background-color': ''});
    $('#hd-su').css({'background-color': ''});
    $('#hd-set').css({'background-color': ''});
    $('#hd-sh').css({'background-color': ''});
    $('#hd-qw').css({'background-color': ''});
    $('#hd-qw-se').css({'background-color': ''});
    $('#hd-qw-cou').css({'background-color': ''});
    $('#hd-abo').css({'background-color': ''});
    $('#hd-faq').css({'background-color': ''});
});
$('#hd-set,#hd-set-m').click(function () {
    clD(1);
    $('.hd-btn-me').fadeOut(500);
    $('.hd-n-back').fadeIn(500);
    $('#hd-in-set').fadeIn(500);
    if (readCookie('theme') == 'light'){
        $('#hd-set').css({'background-color': '#93dfff'});
    } else if(readCookie('theme') == 'dark'){
        $('#hd-set').css({'background-color': '#005679'});
    }
    $('#hd-sea').css({'background-color': ''});
    $('#hd-ext').css({'background-color': ''});
    $('#hd-su').css({'background-color': ''});
    $('#hd-tut').css({'background-color': ''});
    $('#hd-sh').css({'background-color': ''});
    $('#hd-qw').css({'background-color': ''});
    $('#hd-qw-se').css({'background-color': ''});
    $('#hd-qw-cou').css({'background-color': ''});
    $('#hd-abo').css({'background-color': ''});
    $('#hd-faq').css({'background-color': ''});
});
$('#hd-sh,#hd-sh-m').click(function () {
    clD(1);
    $('.hd-btn-me').fadeOut(500);
    $('.hd-n-back').fadeIn(500);
    $('#hd-in-sh').fadeIn(500);
    if (readCookie('theme') == 'light'){
        $('#hd-sh').css({'background-color': '#93dfff'});
    } else if(readCookie('theme') == 'dark'){
        $('#hd-sh').css({'background-color': '#005679'});
    }
    $('#hd-sea').css({'background-color': ''});
    $('#hd-ext').css({'background-color': ''});
    $('#hd-su').css({'background-color': ''});
    $('#hd-tut').css({'background-color': ''});
    $('#hd-set').css({'background-color': ''});
    $('#hd-qw').css({'background-color': ''});
    $('#hd-qw-se').css({'background-color': ''});
    $('#hd-qw-cou').css({'background-color': ''});
    $('#hd-abo').css({'background-color': ''});
    $('#hd-faq').css({'background-color': ''});
});
$('#hd-qw,#hd-qw-m').click(function () {
    clD(1);
    $('.hd-n-back').fadeIn(500);
    $('#hd-in-qw').fadeIn(500);
    $('.hd-btn-me').fadeIn(500);
    if (readCookie('theme') == 'light'){
        $('#hd-qw').css({'background-color': '#93dfff'});
    } else if(readCookie('theme') == 'dark'){
        $('#hd-qw').css({'background-color': '#005679'});
    }
    $('#hd-sea').css({'background-color': ''});
    $('#hd-ext').css({'background-color': ''});
    $('#hd-su').css({'background-color': ''});
    $('#hd-tut').css({'background-color': ''});
    $('#hd-set').css({'background-color': ''});
    $('#hd-sh').css({'background-color': ''});
    $('#hd-qw-se').css({'background-color': ''});
    $('#hd-qw-cou').css({'background-color': ''});
    $('#hd-abo').css({'background-color': ''});
    $('#hd-faq').css({'background-color': ''});
});
$('#hd-abo,#hd-abo-m').click(function () {
    clD(1);
    $('.hd-btn-me').fadeOut(500);
    $('.hd-n-back').fadeIn(500);
    $('#hd-in-abo').fadeIn(500);
    if (readCookie('theme') == 'light'){
        $('#hd-abo').css({'background-color': '#93dfff'});
    } else if(readCookie('theme') == 'dark'){
        $('#hd-abo').css({'background-color': '#005679'});
    }
    $('#hd-sea').css({'background-color': ''});
    $('#hd-ext').css({'background-color': ''});
    $('#hd-su').css({'background-color': ''});
    $('#hd-tut').css({'background-color': ''});
    $('#hd-set').css({'background-color': ''});
    $('#hd-sh').css({'background-color': ''});
    $('#hd-qw').css({'background-color': ''});
    $('#hd-qw-se').css({'background-color': ''});
    $('#hd-qw-cou').css({'background-color': ''});
    $('#hd-faq').css({'background-color': ''});
});
$('#hd-faq,#hd-faq-m').click(function () {
    clD(1);
    $('.hd-btn-me').fadeOut(500);
    $('.hd-n-back').fadeIn(500);
    $('#hd-in-faq').fadeIn(500);
    if (readCookie('theme') == 'light'){
        $('#hd-faq').css({'background-color': '#93dfff'});
    } else if(readCookie('theme') == 'dark'){
        $('#hd-faq').css({'background-color': '#005679'});
    }
    $('#hd-sea').css({'background-color': ''});
    $('#hd-ext').css({'background-color': ''});
    $('#hd-su').css({'background-color': ''});
    $('#hd-tut').css({'background-color': ''});
    $('#hd-set').css({'background-color': ''});
    $('#hd-sh').css({'background-color': ''});
    $('#hd-qw').css({'background-color': ''});
    $('#hd-qw-se').css({'background-color': ''});
    $('#hd-qw-cou').css({'background-color': ''});
    $('#hd-abo').css({'background-color': ''});
});
$('#hd-qw-se,#hd-qw-se-m').click(function () {
    clD(1);
    $('.hd-n-back').fadeIn(500);
    $('#hd-in-qw-se').fadeIn(500);
    if (readCookie('theme') == 'light'){
        $('#hd-qw-se').css({'background-color': '#93dfff'});
    } else if(readCookie('theme') == 'dark'){
        $('#hd-qw-se').css({'background-color': '#005679'});
    }
    $('#hd-sea').css({'background-color': ''});
    $('#hd-ext').css({'background-color': ''});
    $('#hd-su').css({'background-color': ''});
    $('#hd-tut').css({'background-color': ''});
    $('#hd-set').css({'background-color': ''});
    $('#hd-sh').css({'background-color': ''});
    $('#hd-qw-cou').css({'background-color': ''});
    $('#hd-abo').css({'background-color': ''});
});
$('#hd-qw-cou,#hd-qw-cou-m').click(function () {
    clD(1);
    $('.hd-n-back').fadeIn(500);
    $('#hd-in-faq').fadeIn(500);
    if (readCookie('theme') == 'light'){
        $('#hd-qw-cou').css({'background-color': '#93dfff'});
    } else if(readCookie('theme') == 'dark'){
        $('#hd-qw-cou').css({'background-color': '#005679'});
    }
    $('#hd-sea').css({'background-color': ''});
    $('#hd-ext').css({'background-color': ''});
    $('#hd-su').css({'background-color': ''});
    $('#hd-tut').css({'background-color': ''});
    $('#hd-set').css({'background-color': ''});
    $('#hd-sh').css({'background-color': ''});
    $('#hd-qw-se').css({'background-color': ''});
    $('#hd-abo').css({'background-color': ''});
});


$('#hd-m-bt-ba').click(function () {
    clD(2);
    $('.hd-btn-me').fadeOut(500);
    $('.hd-na-n').hide();
    $('.hd-n-back').hide();
    $('.hd-na-n-mo').hide();
    $('#hd-sea').css({'background-color': ''});
    $('#hd-ext').css({'background-color': ''});
    $('#hd-su').css({'background-color': ''});
    $('#hd-tut').css({'background-color': ''});
    $('#hd-set').css({'background-color': ''});
    $('#hd-sh').css({'background-color': ''});
    $('#hd-qw').css({'background-color': ''});
    $('#hd-qw-se').css({'background-color': ''});
    $('#hd-qw-cou').css({'background-color': ''});
    $('#hd-abo').css({'background-color': ''});
    $('#hd-faq').css({'background-color': ''});
});



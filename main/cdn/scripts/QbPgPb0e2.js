'use strict';
//if (readCookie('quby-v') == '0'){
//    $('.quby-has-something-to-tell-you').remove();
//}

if (readCookie('language') == 'de'){
    $('#quby-in').attr("placeholder", "Rede mit Quby...");
} else if(readCookie('language') == 'fr'){
    $('#quby-in').attr("placeholder", "Parlez à Quby...");
} else{
    $('#quby-in').attr("placeholder", "Talk to Quby...");
}
var wuCh = false;
var quCh = false;
function qCBoH(){
    if($(window).width() < 992 && $('.quby-box').is(':visible')){
        $('body').css('overflow','hidden');
    }
}
$('#qubywakeup').click(function () {
    $('.quby-has-something-to-tell-you').hide();
    $('callquby').css('height',450);
    if(wuCh){
        return;
    }
    wuCh = true;
    $('.quby-box').slideToggle(function(){
        if(!quCh){
            $.ajax({
                type: "POST",
                url: "../redire.php",
                data: {"QRD":"1"},
                success: function(data){
                    tIn = data;
                    tDi = "quby-welcome";
                    typeWriter();
                    quCh = true;
                }
            });
        }
    });
    $('.give-quby-his-pos').toggle(400);
    setInterval(function () {wuCh = false;}, 1000);
    if ($('.quby-box').is(':visible')) {
        $('.q-set').hide();
    }
    qCBoH();
    $('.q-main').animate({
        scrollTop: $ (".q-main") .offset().top + $(".q-main")[0].scrollHeight
    }, 200);
});
$('#qubyclose').click(function () {
    if($(window).width() < 992){
        $('body').css('overflow','');
    }
    $('.quby-box').slideToggle();
    $('.give-quby-his-pos').fadeToggle(900);
    $('callquby').css('height','');
    $('.quby-has-something-to-tell-you').remove();
    $('.q-main').clearQueue();
});
var qCon = $('.quby-box');
$('body').mouseup(function(e) 
{
    if (!qCon.is(e.target) && qCon.has(e.target).length === 0) 
    {
        wuCh = true;
        $(qCon).fadeOut(200,function(){
            $('callquby').css('height','');
            $('.give-quby-his-pos').fadeIn(function(){
                wuCh = false;
            });
        });
        $('.q-main').clearQueue();
        qCBoH();
    }
});
var setCh = false;
$('#q-sbtn').click(function () {
    if(setCh){
        return;
    }
    setCh = true;
    if ($('.quby-talk').is(':visible')) {
        $('.quby-talk').hide();
    }
    $('.q-set').toggle("slide", function(){
        setCh = false;
        if ($('.quby-talk').is(':hidden') && $('.q-set').is(':hidden')) {
            $('.quby-talk').fadeIn(200);
            $('.q-main').animate({
                scrollTop: $ (".q-main") .offset().top + $(".q-main")[0].scrollHeight
            }, 100);
        }
    });
});
var mfA = false;
$('.quby-box').on('keyup',function(e) {
    if($('#quby-in').val()){
        $('.quby-in-d > span').css({'visibility':'visible'});
    }else{
        $('.quby-in-d > span').css({'visibility':'hidden'});
    }
    if($('#quby-in').val() == "@suche"){
        document.cookie = `quby-f=search; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
        $('#quby-in').val('');
        $('.func-name').text('Suche');
        $(".quby-func").css('visibility', 'visible');
    }
});
$('#func-close').click(function () {
    document.cookie = `quby-f=normal; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    $(".quby-func").css('visibility', 'hidden');
});
$('#quby-in-delete').click(function () {
    $('#quby-in').val('');
    $('.quby-in-d > span').css({'visibility':'hidden'});
});
var qKCh = false;
$('.quby-box').on('keypress',function(e) {
    if(!$('#quby-in').val().trim()){
        qKCh = false;
    }else{
        qKCh = true;
    }
    if(qKCh){
        if(e.which == 13 && $('#quby-in').val() && tCo == true && $('#quby-in').val() != " ") {
            var QIN = $('#quby-in').val();
            var QINC = $('#quby-in').val();
            $.ajax({
                type: "POST",
                url: "../redire.php",
                data: {"QIN":QIN},
                success: function(data){
                    $(".quby-talk").append(data);
                    $('#quby-in').val('');
                    $('.q-main').animate({
                        scrollTop: $ (".q-main") .offset().top + $(".q-main")[0].scrollHeight
                    }, 200);
                    if(!mfA){
                        mfA = true;
                        $.ajax({
                            type: "POST",
                            url: "../redire.php",
                            data: {"QRI":"1","QINC":QINC},
                            beforeSend: function(){
                                setTimeout(function(){
                                    $('.quby-talk').append('<div class="quby-load"><div class="quby-turn"><div class="quby-potr"><div class="quby-pimg"></div></div><div class="quby-bub"><div class="quby-dolo"><div class="qDo1"></div><div class="qDo2"></div><div class="qDo3"></div></div></div></div></div>');
                                },100);
                            },
                            success: function(data){
                                setTimeout(function(){
                                    $('.quby-load').remove();
                                    $(".quby-talk").append(data);
                                    $('.q-main').animate({
                                        scrollTop: $ (".q-main") .offset().top + $(".q-main")[0].scrollHeight
                                    }, 200);
                                    mfA = false;
                                },3000);
                            }
                        });
                    }
                }
            });
        }
    }
});
$('#q-sendin').click(function () {
    if(!$('#quby-in').val().trim()){
        qKCh = false;
    }else{
        qKCh = true;
    }
    if(qKCh){
        if($('#quby-in').val() && tCo == true && $('#quby-in').val() != " ") {
            var QIN = $('#quby-in').val();
            var QINC = $('#quby-in').val();
            $.ajax({
                type: "POST",
                url: "../redire.php",
                data: {"QIN":QIN},
                success: function(data){
                    $(".quby-talk").append(data);
                    $('#quby-in').val('');
                    $('.q-main').animate({
                        scrollTop: $ (".q-main") .offset().top + $(".q-main")[0].scrollHeight
                    }, 200);
                    if(!mfA){
                        mfA = true;
                        $.ajax({
                            type: "POST",
                            url: "../redire.php",
                            data: {"QRI":"1","QINC":QINC},
                            beforeSend: function(){
                                setTimeout(function(){
                                    $('.quby-talk').append('<div class="quby-load"><div class="quby-turn"><div class="quby-potr"><div class="quby-pimg"></div></div><div class="quby-bub"><div class="quby-dolo"><div class="qDo1"></div><div class="qDo2"></div><div class="qDo3"></div></div></div></div></div>');
                                },100);
                            },
                            success: function(data){
                                setTimeout(function(){
                                    $('.quby-load').remove();
                                    $(".quby-talk").append(data);
                                    $('.q-main').animate({
                                        scrollTop: $ (".q-main") .offset().top + $(".q-main")[0].scrollHeight
                                    }, 200);
                                    mfA = false;
                                },3000);
                            }
                        });
                    }
                }
            });
        }
    }
});
var hqwCh = false;
$('#how-quby-works').click(function () {
    qCBoH();
    $('.q-main').animate({
        scrollTop: $ (".q-main") .offset().top + $(".q-main")[0].scrollHeight
    }, 1000);
    if(hqwCh){
        return;
    }
    if(!hqwCh){
        hqwCh = true;
        $.ajax({
            type: "POST",
            url: "../redire.php",
            data: {"QRI":"2"},
            beforeSend: function(){
                setTimeout(function(){
                    $('.quby-talk').append('<div class="quby-load"><div class="quby-turn"><div class="quby-potr"><div class="quby-pimg"></div></div><div class="quby-bub"><div class="quby-dolo"><div class="qDo1"></div><div class="qDo2"></div><div class="qDo3"></div></div></div></div></div>');
                },100);
            },
            success: function(data){
                setTimeout(function(){
                    $('.quby-load').remove();
                    $(".quby-talk").append(data);
                    $('.q-main').animate({
                        scrollTop: $ (".q-main") .offset().top + $(".q-main")[0].scrollHeight
                    }, 200);
                },3000);
            }
        });
    }
});
var tI = 0;
var tS = 50;
var tIn;
var tDi;
var tCo = false;
function typeWriter() {
  if (tI < tIn.length) {
    document.getElementById(tDi).innerHTML += tIn.charAt(tI);
    tI++;
    setTimeout(typeWriter, tS);
  }
  if(tI == tIn.length){
    $('.quby-menu > div').slideDown();
    qCBoH();
    return tCo = true;
  }
}
$('.quby-box').hover(function() {
    if($(window).width() > 991){
        $('body').css({'overflow':'hidden'});
    }
}, function() {
    if($(window).width() > 991){
        $('body').css({'overflow':''});
    }
});
if (readCookie('quby-v') == null){
    document.cookie = `quby-v=no; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
} else if(readCookie('quby-v') == 'no'){
    document.cookie = `quby-v=yes; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
}

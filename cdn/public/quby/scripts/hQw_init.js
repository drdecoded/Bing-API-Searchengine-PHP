'use strict';
$('.qt-hqw').fadeIn(400); $('.qt-hqw2').fadeIn(1000);
var tId = 0;
var tInd = '@suche';
var tSd = 150;
var qiNti = '';
var qscHqwCh = false;
var qApCh = false;
function typeInput(){
    if (tId < tInd.length) {
        qiNti += tInd.charAt(tId);
        $('#quby-in').val(qiNti);
        tId++;
        setTimeout(typeInput, tSd);
    }
    if(tId == tInd.length){
        setTimeout(function() {
            document.cookie = `quby-f=search; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
            $('#quby-in').val('');
            $('.quby-in-d > span').css({'visibility':'hidden'});
            $('.func-name').text('Suche');
            $('.quby-func').css('visibility', 'visible');
        }, 500);
    }
}
function quScBo(){
    $('.q-main').animate({
        scrollTop: $ (".q-main") .offset().top + $(".q-main")[0].scrollHeight
    }, 200);
}
$('#qubysearch').click(function () {
    if(qscHqwCh == false){
        typeInput();
        qscHqwCh = true;
    }
    if(qApCh == false){
        qApCh = true;
        setTimeout(function() {
            $(".quby-talk").append('<div class="quby-turn"><div class="quby-potr" style="visibility:hidden"><div class="quby-pimg"></div></div><div class="quby-bub qt-hqw3" style="display:none"><span>Du kannst die Suchfunktion jederzeit beenden, indem du ganz oben im Chatfenster neben "<b>Suche</b>" auf das "<b>×</b>" klickst!</span></div></div>');
            $('.qt-hqw3').fadeIn(200);
            quScBo();
        }, 3000);
        setTimeout(function() {
            $(".quby-talk").append('<div class="quby-turn"><div class="quby-hwq1-wr"><div class="quby-hqw1 qt-hqw4" style="display:none"><span>Möchstest du noch mehr erfahren?</span></div></div></div>');
            $('.qt-hqw4').fadeIn(200);
            $(".quby-talk").append('<div class="quby-turn"><div class="quby-hwq2-wr"><div id="hqw-dec-yes" class="quby-hqw2 qt-hqw5" style="display:none"><span>Ja</span></div><div id="hqw-dec-no" class="quby-hqw2 qt-hqw5" style="display:none"><span>Nein</span></div></div></div>');
            $('.qt-hqw5').fadeIn(400);
            quScBo();
            $(".quby-talk script").insertAfter($(".quby-talk"));
        }, 5000);
    }
});
var hqwDecCh = false;
$('.quby-talk').on('click','#hqw-dec-yes', function () {
    if(!hqwDecCh){
        hqwDecCh = true;
        setTimeout(function() {
            $('.quby-talk').append('<div class="quby-load"><div class="quby-turn"><div class="quby-potr"><div class="quby-pimg"></div></div><div class="quby-bub"><div class="quby-dolo"><div class="qDo1"></div><div class="qDo2"></div><div class="qDo3"></div></div></div></div></div>');
            quScBo();
            setTimeout(function(){
                $('.quby-load').remove();
                $(".quby-talk").append('<div class="quby-turn"><div class="quby-potr"><div class="quby-pimg"></div></div><div class="quby-bub qt-hqw6" style="display:none"><span>Gerne!</span></div></div>');
                $('.qt-hqw6').fadeIn(400);
                quScBo();
                setTimeout(function() {
                    document.cookie = `quby-f=search; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
                    $('#quby-in').val('');
                    $('.quby-in-d > span').css({'visibility':'hidden'});
                    $('.func-name').text('Suche');
                    $('.quby-func').css('visibility', 'visible');
                    $(".quby-talk").append('<div class="quby-turn"><div class="quby-potr" style="visibility:hidden"><div class="quby-pimg"></div></div><div class="quby-bub qt-hqw8" style="display:none"><span>Probiere meine Suchfunktion aus, indem du einen beliebigen Begriff in das Eingabefeld tippst und absendest!</span></div></div>');
                    $('.qt-hqw8').css({'margin-top':'4px'});
                    $('.qt-hqw8').fadeIn(400);
                    quScBo();
                }, 400);
            },2000);
        }, 200);
    }
});
$('.quby-talk').on('click','#hqw-dec-no', function () {
    if(!hqwDecCh){
        hqwDecCh = true;
        setTimeout(function() {
            $('.quby-talk').append('<div class="quby-load"><div class="quby-turn"><div class="quby-potr"><div class="quby-pimg"></div></div><div class="quby-bub"><div class="quby-dolo"><div class="qDo1"></div><div class="qDo2"></div><div class="qDo3"></div></div></div></div></div>');
            quScBo();
            setTimeout(function(){
                $('.quby-load').remove();
                $(".quby-talk").append('<div class="quby-turn"><div class="quby-potr"><div class="quby-pimg"></div></div><div class="quby-bub qt-hqw7" style="display:none"><span>Eine ausführliche Beschreibung aller Funktionen findest du hier: <a href=""><i>HIER</i></a></span></div></div>');
                $('.qt-hqw7').fadeIn(400);
                quScBo();
            },2000);
        }, 200);
    }
});


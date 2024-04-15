'use strict';
function stopTwC(){
    var console = {};
    console.log = function(){};
};
if (readCookie('language') == 'de'){
    translateQH('de-qh', 'data-lang');
    $('#qh-se,#qh-se-mo').attr("placeholder", "Suche nach etwas...");
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
    translateQH('fr-qh', 'data-lang');
    $('#qh-se,#qh-se-mo').attr("placeholder", "Chercher quelque chose...");
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
    translateQH('en-qh', 'data-lang');
    $('#qh-se,#qh-se-mo').attr("placeholder", "Search for something...");
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
$('#fl-de,#fl-de-mo').click(function () {
    document.cookie = `language=de; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    location.reload();
});
$('#fl-gb,#fl-gb-mo').click(function () {
    document.cookie = `language=en; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    location.reload();
});
$('#fl-fr,#fl-fr-mo').click(function () {
    document.cookie = `language=fr; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/;SameSite=Lax`;
    location.reload();
});
$(document).ready(function(){
    window.scrollTo({top: 0,behavior:'smooth'});
    if($(window).width() > 1300)
    $('.h-mi').css('height', $(window).height()-200);
    if($(window).width() < 1300)
    $('.h-mi').css('height', 'fit-content');
    $("#h-ts").click(function () {
        if($(".h-na-o").css('display') == 'flex'){
            $(".h-na-o").fadeOut(300);
            $('#h-ts').children("img.down").hide();
            $('#h-ts').children("img.up").show();
        }else if($(".h-na-o").css('display') == 'none'){
            $(".h-na-o").fadeIn(300).css("display", "flex");
            $('#h-ts').children("img.up").hide();
            $('#h-ts').children("img.down").show();
            $('#h-ts').children("img.down").css({display:"unset"});
        }
    });
    $("#h-fi").click(function () {
        if($(".h-na-fi").css('display') == 'flex'){
            $(".h-na-fi").fadeOut(300);
            $('#h-fi').children("img.down").hide();
            $('#h-fi').children("img.up").show();
        }else if($(".h-na-fi").css('display') == 'none'){
            $(".h-na-fi").fadeIn(300).css("display", "flex");
            $('#h-fi').children("img.up").hide();
            $('#h-fi').children("img.down").show();
            $('#h-fi').children("img.down").css({display:"unset"});
        }
    });
    $("#h-dev").click(function () {
        if($(".h-na-dev").css('display') == 'flex'){
            $(".h-na-dev").fadeOut(300);
            $('#h-dev').children("img.down").hide();
            $('#h-dev').children("img.up").show();
        }else if($(".h-na-dev").css('display') == 'none'){
            $(".h-na-dev").fadeIn(300).css("display", "flex");
            $('#h-dev').children("img.up").hide();
            $('#h-dev').children("img.down").show();
            $('#h-dev').children("img.down").css({display:"unset"});
        }
    });
    $("#h-vi").click(function () {
        if($(".h-na-vi").css('display') == 'flex'){
            $(".h-na-vi").fadeOut(300);
            $('#h-vi').children("img.down").hide();
            $('#h-vi').children("img.up").show();
        }else if($(".h-na-vi").css('display') == 'none'){
            $(".h-na-vi").fadeIn(300).css("display", "flex");
            $('#h-vi').children("img.up").hide();
            $('#h-vi').children("img.down").show();
            $('#h-vi').children("img.down").css({display:"unset"});
        }
    });
    $("#h-more").click(function () {
        if($(".h-na-more").css('display') == 'flex'){
            $(".h-na-more").fadeOut(300);
            $('#h-more').children("img.down").hide();
            $('#h-more').children("img.up").show();
        }else if($(".h-na-more").css('display') == 'none'){
            $(".h-na-more").fadeIn(300).css("display", "flex");
            $('#h-more').children("img.up").hide();
            $('#h-more').children("img.down").show();
            $('#h-more').children("img.down").css({display:"unset"});
        }
    });
});

$(".h-nav-m").click(function () {
    if ($(window).width() > 767){
        if($(".h-nav-mo").css('display') == 'block'){
            $(".h-nav-mo").fadeOut(200);
        }else if($(".h-nav-mo").css('display') == 'none'){
            $(".h-nav-mo").fadeIn(100);
            $(".h-nm-me").animate({right:0, opacity:"show"}, 600);
            $("body").css({overflow:"hidden"});
        }
    }
    else{
        if($(".h-nav-mo").css('display') == 'block'){
            $(".h-nav-mo").fadeOut(200);
        }else if($(".h-nav-mo").css('display') == 'none'){
            $(".h-nav-mo").fadeIn(200);
            $("body").css({overflow:"hidden"});
        }
    }
});
var hCon1 = $('.h-nm-me');
$(document).mouseup(function(e) 
{
    if (!hCon1.is(e.target) && hCon1.has(e.target).length === 0) 
        {
            $(".h-nav-mo").fadeOut(200);
            $(".h-nm-me").css({"right":"-40%"});
            $("body").css({overflow:""});
            $(".h-na-o").fadeOut(200);
            $(".h-na-fi").fadeOut(200);
            $(".h-na-dev").fadeOut(200);
            $(".h-na-more").fadeOut(200);
            $('#h-more,#h-ts,#h-fi,#h-dev').children("img.down").hide();
            $('#h-more,#h-ts,#h-fi,#h-dev').children("img.up").show();
        }
});
$("#hmclose").click(function () {
    $(".h-nav-mo").fadeOut(200);
    $(".h-nm-me").css({"right":"-40%"});
    $("body").css({overflow:""});
    $(".h-na-o").fadeOut(200);
    $(".h-na-fi").fadeOut(200);
    $(".h-na-dev").fadeOut(200);
    $(".h-na-more").fadeOut(200);
    $('#h-more,#h-ts,#h-fi,#h-dev').children("img.down").hide();
    $('#h-more,#h-ts,#h-fi,#h-dev').children("img.up").show();
});
var qhUrld = "http://192.168.0.183/qoolar/hub/search/qse.php";
$("#qh-se,#qh-se-mo").keyup(function(e){
    if($(window).width() < 1300){
        if (e.which <= 90 && e.which >= 48 || e.which == 8 || $.inArray(e.keyCode, [0,164,169,170,171,173,186,187,188,189,190,191,192,194,219,222,223,229]) != -1){
            var query = $(this).val();
            $.ajax({
                type: "POST",
                url: qhUrld,
                data: {"query":query},
                success: function(data){
                    if (!query.trim()){
                    $(".h-sb-sb").fadeOut(100);
                    } else {
                    $(".h-sb-sb").fadeIn(100);
                    $(".h-sb-w").html(data);
                    };
                }
            });
        };
    };
    if($(window).width() > 1300){
        if (e.which <= 90 && e.which >= 48 || e.which == 8 || $.inArray(e.keyCode, [0,164,169,170,171,173,186,187,188,189,190,191,192,194,219,222,223,229]) != -1){
            var query = $(this).val();
            $.ajax({
                type: "POST",
                url: qhUrld,
                data: {"query":query},
                success: function(data){
                    if (!query.trim()){
                    $(".h-sb-sb-d").fadeOut(100);
                    } else {
                    $(".h-sb-sb-d").fadeIn(100);
                    $(".h-sb-w-d").html(data);
                    };
                }
            });
        };
    };
});
$("#qh-sea-bt-mo").click(function () {
    var href2 = $('.h-sb-w > div').children().attr('href');
    if(href2){
        location.href = href2;
    }
});
$("#qh-sea-bt").click(function () {
    var href = $('.h-sb-w-d > div').children().attr('href');
    if(href){
        location.href = href;
    }
});
$("#h-st").click(function () {
    var href = $('#h-st').children().attr('href');
    if(href){
        location.href = href;
    }
});
$("#h-twg").click(function () {
    var href = $('#h-twg').children().attr('href');
    if(href){
        location.href = href;
    }
});
$("#h-qs").click(function () {
    var href = $('#h-qs').children().attr('href');
    if(href){
        location.href = href;
    }
}); 
$("#h-hde").click(function () {
    var href = $('#h-hde').children().attr('href');
    if(href){
        location.href = href;
    }
});
$("#fa-q-o").click(function () {
    $("#fa-q-o-a").fadeToggle(200);
    $('#fa-q-o').children("img.up,img.down").toggle();
});
$("#fa-q-o-q").click(function () {
    $("#fa-q-o-a-q").fadeToggle(200);
    $('#fa-q-o-q').children("img.up,img.down").toggle();
});
$("#hd-sea-m").click(function () {
    $(".hd-ut-wr").children().removeClass("hd-ut-tl-sh");
    $(".hd-nav-wr").children().removeClass("hd-na-cl-h");
    $("#hd-sea-m").addClass("hd-na-cl-h");
    $("#hd-an-o").addClass("hd-ut-tl-sh");
});
$("#hd-ext-m").click(function () {
    $(".hd-ut-wr").children().removeClass("hd-ut-tl-sh");
    $(".hd-nav-wr").children().removeClass("hd-na-cl-h");
    $("#hd-ext-m").addClass("hd-na-cl-h");
    $("#hd-an-o-q").addClass("hd-ut-tl-sh");
});
$("#hd-set-m").click(function () {
    $(".hd-ut-wr").children().removeClass("hd-ut-tl-sh");
    $(".hd-nav-wr").children().removeClass("hd-na-cl-h");
    $("#hd-set-m").addClass("hd-na-cl-h");
    $("#hd-an-o-w").addClass("hd-ut-tl-sh");
});
$("#hd-tut-m").click(function () {
    $(".hd-ut-wr").children().removeClass("hd-ut-tl-sh");
    $(".hd-nav-wr").children().removeClass("hd-na-cl-h");
    $("#hd-tut-m").addClass("hd-na-cl-h");
    $("#hd-an-o-e").addClass("hd-ut-tl-sh");
});
$("#hd-sh-m").click(function () {
    $(".hd-ut-wr").children().removeClass("hd-ut-tl-sh");
    $(".hd-nav-wr").children().removeClass("hd-na-cl-h");
    $("#hd-sh-m").addClass("hd-na-cl-h");
    $("#hd-an-o-r").addClass("hd-ut-tl-sh");
});
$("#hd-qw-m").click(function () {
    $(".hd-ut-wr").children().removeClass("hd-ut-tl-sh");
    $(".hd-nav-wr").children().removeClass("hd-na-cl-h");
    $("#hd-qw-m").addClass("hd-na-cl-h");
    $("#hd-an-o-t").addClass("hd-ut-tl-sh");
});
var fCon = $('.feed-d-wr'),
    bCon = $('.bug-d-wr');
$(document).mouseup(function(e) 
{
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
            url: 'http://192.168.0.183/qoolar/hub/fe-bu.php',
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
            url: 'http://192.168.0.183/qoolar/hub/fe-bu.php',
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
function TranslateQH() { 
	this.init =  function(attribute, dataLang){
		this.attribute = attribute;
		this.dataLang = dataLang;	
	}
	this.process = function(){
		var _self = this;
		var xrhFile = new XMLHttpRequest();
		xrhFile.open("POST", "http://192.168.0.183/qoolar/hub/language/"+this.dataLang+".json", false);
		xrhFile.onreadystatechange = function ()
		{
			if(xrhFile.readyState === 4)
			{
				if(xrhFile.status === 200 || xrhFile.status == 0)
				{
					var LngObject = JSON.parse(xrhFile.responseText);
					var allDom = document.getElementsByTagName("*");
					for(var i =0; i < allDom.length; i++){
						var elem = allDom[i];
						var key = elem.getAttribute(_self.attribute);
						if(key != null) {
							elem.innerHTML = LngObject[key]  ;
						}
					}
				
				}
			}
		}
		xrhFile.send();
    }
}
function translateQH(dataLang, tagAttr){
    var translate = new TranslateQH();
    translate.init(tagAttr, dataLang);
    translate.process();
}

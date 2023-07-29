'use strict';
var getLang = navigator.language || navigator.userLanguage; 
var userLang = getLang.slice(0, 2);
var checkCookie = readCookie("visitor");
if (checkCookie == null){
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
};
function urlParam()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function checkBrU() { 
    if($(window).width() > 1300){
        if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
        {
            $('.ex-ch').hide();
            $('.ex-fr').hide();
            $('.ex-ed').hide();
        }
        else if(navigator.userAgent.indexOf("Edg") != -1 )
        {
            $('.ex-ch').hide();
            $('.ex-fr').hide();
            $('.ex-ed').show();
        }
        else if(navigator.userAgent.indexOf("Chrome") != -1 )
        {
            $('.ex-ch').show();
            $('.ex-fr').hide();
            $('.ex-ed').hide();
        }
        else if(navigator.userAgent.indexOf("Safari") != -1)
        {
            $('.ex-ch').hide();
            $('.ex-fr').hide();
            $('.ex-ed').hide();
        }
        else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
        {
            $('.ex-ch').hide();
            $('.ex-fr').show();
            $('.ex-ed').hide();
        }
        else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
        {
            $('.ex-ch').hide();
            $('.ex-fr').hide();
            $('.ex-ed').hide();
        }  
        else 
        {
            $('.ex-ch').hide();
            $('.ex-fr').hide();
            $('.ex-ed').hide();
        }
    } else {
        $('.ex-ch').hide();
        $('.ex-fr').hide();
        $('.ex-ed').hide();
    }
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function Translate() { 
	this.init =  function(attribute, dataLang){
		this.attribute = attribute;
		this.dataLang = dataLang;	
	}
	this.process = function(){
		var _self = this;
		var xrhFile = new XMLHttpRequest();
		xrhFile.open("POST", "../language/"+this.dataLang+".json", false);
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
function translate(dataLang, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, dataLang);
    translate.process();
}
<?php
    if(!empty(htmlspecialchars(!empty($_COOKIE['language'])))){
        $QLANG = htmlspecialchars($_COOKIE['language']);
    }else{
        if(!empty($_SERVER['HTTP_ACCEPT_LANGUAGE'])){
            $userLang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
            $QLANG = $userLang;
        }
    }
    if($QLANG == "de"){
        echo('<div class="quby-turn"><div class="quby-potr"><div class="quby-pimg"></div></div><div class="quby-bub qt-hqw" style="display:none">
        <span>Du kannst mich mit verschiedenen Funktionen bedienen!</span></div></div>'); 
        echo('<div class="quby-turn"><div class="quby-potr" style="visibility:hidden"><div class="quby-pimg"></div></div><div class="quby-bub qt-hqw2" style="display:none">
        <span>Tippe <span id="qubysearch" class="quby-search"><b>@suche</b></span> manuell in das Eingabefeld oder drücke auf das hervorgehobene Feld um die Suchfunktion zu aktivieren.</span></div>
        </div>');
        echo('<script src="http://192.168.0.183/qoolar/cdn/public/quby/scripts/hQw_init.js"></script>');
    }else if($QLANG == "fr"){
    
    }else{
    
    }
    
?>
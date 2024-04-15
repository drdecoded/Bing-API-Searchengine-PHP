<?php

// TRY TO USE A MODERN AI MODEL

if(!empty(htmlspecialchars(!empty($_COOKIE['language'])))){
    $QLANG = htmlspecialchars($_COOKIE['language']);
}else{
    if(!empty($_SERVER['HTTP_ACCEPT_LANGUAGE'])){
        $userLang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
        $QLANG = $userLang;
    }
}

if(!empty(htmlspecialchars(!empty($_COOKIE['quby-v'])))){
    $QVISITOR = htmlspecialchars($_COOKIE['quby-v']);
}

if(!empty($QLANG) && $QLANG == "de"){
    if(!empty($QVISITOR) && $QVISITOR == "no"){
        echo('Hallo! Mein Name ist Quby und ich begleite dich auf deiner Reise!');
    }else{
        $getRAND = rand(0,10);
        if($getRAND == 0){
            echo('Wusstest du, dass der tiefste Ort der Erde der Marianengraben im Pazifischen Ozean ist? Er ist 11.034 m (36.201 Fuß) tief. Das sind fast 7 Meilen!');
        }
        if($getRAND == 1){
            echo('Wusstest du, dass es Sonnenuntergänge nur gibt, weil die Erdatmosphäre wie ein Prisma für das Licht wirkt? In der Wissenschaft wird dieses Phänomen “Streuung” genannt.');
        }
        if($getRAND == 2){
            echo('Wusstest du, dass Wissenschaftler Im Jahr 2019 das älteste bekannte Kunstwerk der Welt auf der indonesischen Insel Sulawesi entdeckten? Es wurde vor 44.000 Jahren geschaffen.');
        }
        if($getRAND == 3){
            echo('Wusstest du, dass es fast 5 Milliarden Internetnutzer auf der Welt gibt? Aktuell bewohnen rund 8 Milliarden Menschen unseren Planeten!');
        }
        if($getRAND == 4){
            echo('Wusstest du, dass Eulen keine Augäpfel haben?');
        }
        if($getRAND == 5){
            echo('Wusstest du, dass im Jahr 2021 nach den Berechnungsvorschriften der EU Richtlinie zur Förderung erneuerbarer Energien (2009/28/EC) 19,2 Prozent des deutschen Endenergieverbrauchs aus erneuerbaren Energien gedeckt wurden?');
        }
        if($getRAND == 6){
            echo('Wusstest du, dass im Jahr 2021 eine Energiemenge von 468 Milliarden Kilowattstunden (Mrd. kWh) aus erneuerbaren Energieträgern genutzt wurde?');
        }
        if($getRAND == 7){
            echo('Wusstest du, dass im Jahr 2021 insgesamt 49,3 Mrd. kWh Strom aus PV-Anlagen erzeugt wurden?');
        }
        if($getRAND == 8){
            echo('Wusstest du, dass Sonnenenergie erstmals im 7. Jahrhundert v. Chr. genutzt wurde, als man erkannte, dass man mithilfe einer Lupe ein Feuer entzünden kann?');
        }
        if($getRAND == 9){
            echo('Wusstest du, dass aktuell 2,2 Millionen Photovoltaikanlagen mit einer Leistung von 59 Gigawatt in Deutschland installiert sind? 2021 erzeugten sie 48,4 Terawattstunden Strom.');
        }
        if($getRAND == 10){
            echo('Wusstest du, dass in den ersten 5 Monaten des Jahres 2022, Photovoltaik-Anlagen mit einer Leistung von 2,65 GW installiert wurden?');
        }
    }  
}else if(!empty($QLANG) && $QLANG == "fr"){
    if(!empty($QVISITOR) && $QVISITOR == "no"){
        echo('Salut! Je m\'appelle Quby et je vous suivrai dans votre voyage !');
    }
}else{
    if(!empty($QVISITOR) && $QVISITOR == "no"){
        echo('Hi! My name is Quby and I will follow you on your journey!');
    }
}
?>
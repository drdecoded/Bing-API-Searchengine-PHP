<?php 

echo('search'); 
// $QLANG = THE USER SELECTED LANGUAGE OR THE SERVER SEND USER LANGUAGE
if(!empty(htmlspecialchars(!empty($_COOKIE['language'])))){
    $QLANG = htmlspecialchars($_COOKIE['language']);
}else{
    if(!empty($_SERVER['HTTP_ACCEPT_LANGUAGE'])){
        $userLang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
        $QLANG = $userLang;
    }
}
if($QLANG == "de"){
    
}else if($QLANG == "fr"){
   
}else{
   
};

?>

<div class="quby-turn">
    <div class="quby-potr"><div class="quby-pimg"></div></div>
    <div class="quby-bub qt1" style="display:none"><span><?php echo $QINC; ?></span></div>
</div>
<div class="quby-turn">
    <div class="quby-potr" style="visibility:hidden"><div class="quby-pimg"></div></div>
    <div class="quby-bub qt2" style="display:none"><span><?php echo $QINC; ?></span></div>
</div>
<script>$('.qt1').fadeIn(200); $('.qt2').fadeIn(800);</script>
<?php
    // REDIRE.PHP GETS JS RELATED POST PARAMETERS AND LEADS QUBY WHERE HE HAS TO GO THROUGH
    // $QRD PARAMETER IF THE USER OPENS QUBY FIRST TIME VISITING THE PAGE
    // LEADING TO WELCOME.PHP
    if(!empty(htmlspecialchars(!empty($_POST['QRD'])))){
        $QRD = htmlspecialchars($_POST['QRD'], ENT_QUOTES, 'UTF-8');
    }
    if(!empty($QRD) && $QRD == "1"){
        require_once('quby/talk/welcome.php');
        $QRD == 0;
    }

    // POST PARAMETER $QRI IF USER CLICKS ON QUBYS GIVEN OPTIONS LIKE "HOW QUBY WORKS"
    // LEADS TO QUBYINPUT.PHP REDIRECTION FILE WHERE THE INPUT OF THE USER IS GETTING PROCESSED
    if(!empty(htmlspecialchars(!empty($_POST['QRI'])))){
        $QRI = htmlspecialchars($_POST['QRI'], ENT_QUOTES, 'UTF-8');
    }
    if(!empty($QRI) && $QRI == "1"){
        require_once('quby/talk/qubyinput.php');
    }
    if(!empty($QRI) && $QRI == "2"){
        require_once('quby/talk/howqubyworks.php');
    }

    // USERINPUT TAKEOVER TO GIVE BACK THE INPUT AS SPEECHBUBBLE IN THE CHAT
    if(!empty(htmlspecialchars(!empty($_POST['QIN'])))){
        $QIN = htmlspecialchars($_POST['QIN'], ENT_QUOTES, 'UTF-8');
        echo('<div class="u-turn"><div class="u-bub" style="display:none"><span>'.$QIN.'</span></div></div>');
        echo("<script>$('.u-bub').fadeIn(300);</script>");
    }
?>
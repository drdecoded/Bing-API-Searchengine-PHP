<?php
// $QINC = USER INPUT
if(!empty(htmlspecialchars(!empty($_POST['QINC'])))){
    $QINC = htmlspecialchars($_POST['QINC'], ENT_QUOTES, 'UTF-8');
}
// $QFUNC = THE USER SELECTED FUNCTION FOR QUBY
if(!empty(htmlspecialchars(!empty($_COOKIE['quby-f'])))){
    $QFUNC = htmlspecialchars($_COOKIE['quby-f']);
}
if(!empty($QFUNC) && $QFUNC == "search"){
    require_once('quby/talk/functions/search.php');
}
if(!empty($QFUNC) && $QFUNC == "normal"){

}

?>

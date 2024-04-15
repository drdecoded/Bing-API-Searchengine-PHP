<?php

if(!empty($_GET['r'])){ 
    $ulV1 = $_GET['r']-1;
}
else{
    $ulV1 = 0;
}
if(!empty($_GET['r'])){
    $ulV2 = $_GET['r']+1;
}
else{
    $ulV2 = 1;
}
if(!empty($_GET['q'])){
    $ulVq = $_GET['q'];
}

$ulFP1 = '<div class="r-ul-wr">';
$ulFP2 = '<ul class="r-ul">';
$ulFP3 = '<li><a href="news?q='.$ulVq.'&r='.$ulV1.'">‹</a></li>';
$ulFP4 = '<li><a href="news?q='.$ulVq.'&r=1">1</a></li>';
$ulFP5 = '<li><a href="news?q='.$ulVq.'&r=2">2</a></li>';
$ulFP6 = '<li><a href="news?q='.$ulVq.'&r=3">3</a></li>';
$ulFP7 = '<li><a href="news?q='.$ulVq.'&r=4">4</a></li>';
$ulFP8 = '<li><a href="news?q='.$ulVq.'&r=5">5</a></li>';
$ulFP9 = '<li><a href="news?q='.$ulVq.'&r=6">6</a></li>';
$ulFP10 = '<li><a href="news?q='.$ulVq.'&r=7">7</a></li>';
$ulFP11 = '<li><a href="news?q='.$ulVq.'&r=8">8</a></li>';
$ulFP12 = '<li><a href="news?q='.$ulVq.'&r=9">9</a></li>';
$ulFP13 = '<li><a href="news?q='.$ulVq.'&r=10">10</a></li>';
$ulFP14 = '<li><a href="news?q='.$ulVq.'&r=11">11</a></li>';
$ulFP15 = '<li><a href="news?q='.$ulVq.'&r='.$ulV2.'">›</a></li>';
$ulFP16 = '</ul>';
$ulUL1 = '<ul class="m-r-ul">';
$ulUL2 = '<li><a href="news?q='.$ulVq.'&r='.$ulV1.'"><span class="li-b">‹</span></a></li>';
$ulUL3 = '<li><a href="news?q='.$ulVq.'&r=1"><span>Page </span>1</a></li>';
$ulUL4 = '<li><a href="news?q='.$ulVq.'&r=2"><span>Page </span>2</a></li>';
$ulUL5 = '<li><a href="news?q='.$ulVq.'&r=3"><span>Page </span>3</a></li>';
$ulUL6 = '<li><a href="news?q='.$ulVq.'&r=4"><span>Page </span>4</a></li>';
$ulUL7 = '<li><a href="news?q='.$ulVq.'&r=5"><span>Page </span>5</a></li>';
$ulUL8 = '<li><a href="news?q='.$ulVq.'&r=6"><span>Page </span>6</a></li>';
$ulUL9 = '<li><a href="news?q='.$ulVq.'&r=7"><span>Page </span>7</a></li>';
$ulUL10 = '<li><a href="news?q='.$ulVq.'&r=8"><span>Page </span>8</a></li>';
$ulUL11 = '<li><a href="news?q='.$ulVq.'&r=9"><span>Page </span>9</a></li>';
$ulUL12 = '<li><a href="news?q='.$ulVq.'&r=10"><span>Page </span>10</a></li>';
$ulUL13 = '<li><a href="news?q='.$ulVq.'&r=11"><span>Page </span>11</a></li>';
$ulUL14 = '<li><a href="news?q='.$ulVq.'&r='.$ulV2.'"><span class="li-b">›</span></a></li>';
$ulUL15 = '</ul>';
$ulFP17 = '</div>';



if(isset($_GET['r']) && $_GET['r'] == '1'){
    $offset = '&offset=0';
    $allulFP = $ulFP1.$ulFP2.$ulFP4.$ulFP5.$ulFP6.$ulFP7.$ulFP8.$ulFP9.$ulFP15.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL3.$ulUL14.$ulUL15;
}
else if(isset($_GET['r']) && $_GET['r'] == '2'){
    $offset = '&offset=10';
    $allulFP = $ulFP1.$ulFP2.$ulFP3.$ulFP4.$ulFP5.$ulFP6.$ulFP7.$ulFP8.$ulFP9.$ulFP15.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL2.$ulUL4.$ulUL14.$ulUL15;
}
else if(isset($_GET['r']) && $_GET['r'] == '3'){
    $offset = '&offset=20';
    $allulFP = $ulFP1.$ulFP2.$ulFP3.$ulFP4.$ulFP5.$ulFP6.$ulFP7.$ulFP8.$ulFP9.$ulFP15.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL2.$ulUL5.$ulUL14.$ulUL15;
}
else if(isset($_GET['r']) && $_GET['r'] == '4'){
    $offset = '&offset=30';
    $allulFP = $ulFP1.$ulFP2.$ulFP3.$ulFP4.$ulFP5.$ulFP6.$ulFP7.$ulFP8.$ulFP9.$ulFP15.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL2.$ulUL6.$ulUL14.$ulUL15;
}
else if(isset($_GET['r']) && $_GET['r'] == '5'){
    $offset = '&offset=40';
    $allulFP = $ulFP1.$ulFP2.$ulFP3.$ulFP4.$ulFP5.$ulFP6.$ulFP7.$ulFP8.$ulFP9.$ulFP15.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL2.$ulUL7.$ulUL14.$ulUL15;
}
else if(isset($_GET['r']) && $_GET['r'] == '6'){
    $offset = '&offset=50';
    $allulFP = $ulFP1.$ulFP2.$ulFP3.$ulFP6.$ulFP7.$ulFP8.$ulFP9.$ulFP10.$ulFP11.$ulFP15.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL2.$ulUL8.$ulUL14.$ulUL15;
}
else if(isset($_GET['r']) && $_GET['r'] == '7'){
    $offset = '&offset=60';
    $allulFP = $ulFP1.$ulFP2.$ulFP3.$ulFP6.$ulFP7.$ulFP8.$ulFP9.$ulFP10.$ulFP11.$ulFP15.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL2.$ulUL9.$ulUL14.$ulUL15;
}
else if(isset($_GET['r']) && $_GET['r'] == '8'){
    $offset = '&offset=70';
    $allulFP = $ulFP1.$ulFP2.$ulFP3.$ulFP8.$ulFP9.$ulFP10.$ulFP11.$ulFP12.$ulFP13.$ulFP15.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL2.$ulUL10.$ulUL14.$ulUL15;
}
else if(isset($_GET['r']) && $_GET['r'] == '9'){
    $offset = '&offset=80';
    $allulFP = $ulFP1.$ulFP2.$ulFP3.$ulFP8.$ulFP9.$ulFP10.$ulFP11.$ulFP12.$ulFP13.$ulFP15.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL2.$ulUL11.$ulUL14.$ulUL15;
}
else if(isset($_GET['r']) && $_GET['r'] == '10'){
    $offset = '&offset=90';
    $allulFP = $ulFP1.$ulFP2.$ulFP3.$ulFP9.$ulFP10.$ulFP11.$ulFP12.$ulFP13.$ulFP14.$ulFP15.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL2.$ulUL12.$ulUL14.$ulUL15;
}
else if(isset($_GET['r']) && $_GET['r'] == '11'){
    $offset = '&offset=100';
    $allulFP = $ulFP1.$ulFP2.$ulFP3.$ulFP9.$ulFP10.$ulFP11.$ulFP12.$ulFP13.$ulFP14.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL2.$ulUL13.$ulUL15;
}
else if(isset($_GET['r']) && $_GET['r'] == '0'){
    $offset = '&offset=0';
    $allulFP = $ulFP1.$ulFP2.$ulFP4.$ulFP5.$ulFP6.$ulFP7.$ulFP8.$ulFP9.$ulFP15.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL3.$ulUL14.$ulUL15;
}
else if(empty($_GET['r'])){
    $offset = '&offset=0';
    $allulFP = $ulFP1.$ulFP2.$ulFP4.$ulFP5.$ulFP6.$ulFP7.$ulFP8.$ulFP9.$ulFP15.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL3.$ulUL14.$ulUL15;
}
else{
    $offset = '&offset=100';
    $allulFP = $ulFP1.$ulFP2.$ulFP3.$ulFP9.$ulFP10.$ulFP11.$ulFP12.$ulFP13.$ulFP14.$ulFP16.$ulFP17;
    $alluUL = $ulUL1.$ulUL2.$ulUL13.$ulUL15;
}

?>

<?php
$xImgLoad = htmlspecialchars($_POST['imgLoad'], ENT_QUOTES, 'UTF-8');
$xQuery = htmlspecialchars($_POST['query'], ENT_QUOTES, 'UTF-8');
$xcRfE = htmlspecialchars($_POST['cRfE'], ENT_QUOTES, 'UTF-8');

if(!empty($xImgLoad) && $xImgLoad == 0){
    $offset = 0;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 1){
    $offset = 25;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 2){
    $offset = 50;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 3){
    $offset = 75;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 4){
    $offset = 100;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 5){
    $offset = 125;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 6){
    $offset = 150;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 7){
    $offset = 175;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 8){
    $offset = 200;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 9){
    $offset = 225;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 10){
    $offset = 250;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 11){
    $offset = 275;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 12){
    $offset = 300;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 13){
    $offset = 325;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 14){
    $offset = 350;
    $count = 25;
};
if(!empty($xImgLoad) && $xImgLoad == 15){
    $offset = 375;
    $count = 25;
};

//echo $result;
$checkFor = '';
if(!empty($xcRfE) && $xcRfE == '0'){
    $checkFor = false;
}
if(!empty($xcRfE) && $xcRfE == '1'){
    $checkFor = true;
}
if(empty($json['value'][0]['name']) && $checkFor == false){
    echo('<div class="nos-wr">');
    echo('<div class="nos-img"><img src="src/public/icon-sad-bl.png"></div>');
    echo('<div class="nos-f"><span class="nos-hl">Sorry, no results were found matching your search query.</span>');
    echo('<span>Make sure your search query is spelled correctly.</span>');
    echo('<span>Changes to the original search query can result in a search hit!</span>');
    echo('</div>');
    echo('</div>');
}
if(empty($json['value'][0]['name']) && $checkFor == true){
    echo('<div class="nos-wr">');
    echo('<div class="nos-img"><img src="src/public/icon-sad-bl.png"></div>');
    echo('<div id ="nos-cfi" class="nos-f"><span class="nos-hl">No more search results. :-(</span>');
    echo('</div>');
    echo('</div>');
}
if(!empty($json['value'][0]['name'])){
    for ($x = 0; $x < count($json['value']); $x++) {
        $obj = $json['value'][$x]['thumbnailUrl'];
        $objCU = $json['value'][$x]['contentUrl'];
        $obj2rl = $json['value'][$x]['hostPageUrl'];
        $obj2 = $json['value'][$x]['hostPageUrl'];
        $obj2 = explode('//', $obj2, 2);
        $obj2C = explode('/', $obj2[1],2);
        $obj2 = $obj2C[0];
        $obj3full = $json['value'][$x]['name'];
        $obj3 = $json['value'][$x]['name'];
        $obj3 = strlen($obj3) > 54 ? substr($obj3,0,54)." ..." : $obj3;
        $obj4 = $json['value'][$x]['datePublished'];
        $obj5 = $json['value'][$x]['width'];
        $obj6 = $json['value'][$x]['height'];
        $obj6 = $obj5.' × '.$obj6;
        $obj7 = $json['value'][$x]['encodingFormat'];
        $date1 = new DateTime(date("Y-m-d H:i:s"));
        $date2 = new DateTime($obj4);
        $diff = $date2->diff($date1);
        echo('<div class="img-wr-wr">');
        echo('<div id="wr" class="img-wr">');
        echo('<div class="img-thumb">');
        echo('<a href="'.$obj2rl.'"><img src="'.$obj.'"></a>');
        echo('</div>');
        echo('<div class="img-pro">');
        echo('<a href="'.$obj2rl.'"><span>'.$obj2.'</span></a>');
        echo('</div>');
        echo('<div class="img-name">');
        echo('<a class="img-name-link" href="'.$obj2rl.'"><span>'.$obj3.'</span></a>');
        echo('</div>');
        if($diff->format('%y') == '0' && $diff->format('%m') == '0' && $diff->format('%d') == '0' && $diff->format('%h') == '0'){
            echo('<div class="img-date"><span">');
            echo $diff->format('%i minutes ago');
        } elseif ($diff->format('%y') == '0' && $diff->format('%m') == '0' && $diff->format('%d') == '0' && $diff->format('%h') >= '1'){
            echo('<div class="img-date"><span">');
            echo $diff->format('%h hours ago');
        } elseif ($diff->format('%y') == '0' && $diff->format('%m') == '0' && $diff->format('%d') >= '1'){
            echo('<div class="img-date"><span">');
            echo $diff->format('%d days ago');
        } elseif ($diff->format('%y') == '0' && $diff->format('%m') >= '1'){
            echo('<div class="img-dates"><span">');
            //echo $diff->format('%m months ago');
        } else {
            echo('<div class="img-dates"><span">');
            //echo $diff->format('%y years ago');
        }
        echo('</span></div>');
        echo('<div class="img-res">');
        echo('<a href="'.$obj2rl.'"><span>'.$obj6.'</span><span> '.$obj7.'</span></a>');
        echo('</div>');
        echo('<div class="img-cu">');
        echo('<div class="img-cu-url"><span>'.$objCU.'</span></div>');
        echo('<div class="img-cu-res"><span>'.$obj6.'</span></div>');
        echo('<div class="img-cu-format"><span>'.$obj7.'</span></div>');
        echo('<div class="img-cu-name"><span>'.$obj3full.'</span></div>');
        echo('<div class="img-cu-pro"><span>'.$obj2.'</span></div>');
        echo('<div clasS="img-cu-cturl"><span>'.$obj2rl.'</span></div>');
        echo('</div>');
        echo('</div>');
        echo('</div>');
    }
}

?>
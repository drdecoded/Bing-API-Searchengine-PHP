<?php
    $maxlifetime = 80000*30*12;
    $secure = true; // if you only want to receive the cookie over HTTPS
    $httponly = true; // prevent JavaScript access to session cookie
    $samesite = 'lax';
        session_set_cookie_params([
            'lifetime' => $maxlifetime,
            'path' => '/',
            'domain' => $_SERVER['HTTP_HOST'],
            'secure' => $secure,
            'httponly' => $httponly,
            'samesite' => $samesite
        ]);
    session_start();
// $endpoint = 'https://api.bing.microsoft.com/v7.0/videos/search'; // checkcURLparam benötigt den endpoint außerhalb bzw. immer oberhalb -> flexibilität für andere Suchen
// $query = '?q=gio';
// $url = $endpoint.$query;
// $key = "";
// //echo $url;

// $curl = curl_init(); 
//      curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//     curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
//     curl_setopt($curl, CURLOPT_URL, $url);
//     curl_setopt($curl, CURLOPT_HTTPHEADER, array(
//         "Ocp-Apim-Subscription-Key: $key\r\n",
//         'method: GET',
//         'Content-Type: application/json',
//      ));
//     $output = curl_exec($curl); 
        
//     curl_close($curl);

//     file_put_contents('videoMINECRAFT.json', $output);
    
    $output = file_get_contents('jsonfiles/videoMINECRAFT.json');
    $result = json_encode(json_decode($output), JSON_PRETTY_PRINT); // <- json into pretty readable output
    $json = json_decode($output, true);

    //echo $result;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="src/styles/video.css">
    <link rel="stylesheet" href="src/styles/header.css">
    <link rel="stylesheet" href="src/styles/header-dark.css">
    <script src="src/scripts/KgIzY5mf.js"></script>
    <script src="src/scripts/R5sLeO3D.js"></script>
    <title>Document</title>
</head>
<?php if(!empty(htmlspecialchars(!empty($_COOKIE["theme"])))){$tC = htmlspecialchars($_COOKIE["theme"]);}else{$tC='light';};if($tC == 'dark'){echo ('<body class="dark">');}else{echo ('<body>');};?>
<?php require('header.php'); ?>
    <div class="select-nav">
        <?php require_once("elements/regionselect.php"); ?>
        <?php require_once("elements/timeselect.php"); ?>
        <?php require_once("elements/durationselect.php"); ?>
        <?php require_once("elements/resolutionselect.php"); ?>
        <div class="filter-reset"><button id="fil-reset" class="filter-res"><span data-lang="btn-re">Zurücksetzen</span></button></div>
    </div>

    <div class="main">
        <div class="vid-md">
        <?php
            if(empty($json['value'][0]['name'])){
                echo('<div class="nos-wr">');
                echo('<div class="nos-img"><img src="src/public/icon-sad-bl.png"></div>');
                echo('<div class="nos-f"><span class="nos-hl">Sorry, no results were found matching your search query.</span>');
                echo('<span>Make sure your search query is spelled correctly.</span>');
                echo('<span>Changes to the original search query can result in a search hit!</span>');
                echo('</div>');
                echo('</div>');
            }
            if(!empty($json['value'][0]['name'])){
                for ($x = 0; $x < count($json['value']); $x++) {
                    $obj0 = $json['value'][$x]['contentUrl'];
                    $obj = $json['value'][$x]['contentUrl'];
                    $obj = preg_split("#//#", $obj);
                    if(!empty($obj[0]) && str_contains($obj[0],'http')){
                        //$obj[0] .= '//';
                        $obj[0] = '<span class="ht-line">'.$obj[0].'//</span>';
                        if(!empty($obj[1])){
                            $obj[1] = preg_replace("#/#", ' › ',$obj[1]);
                            $objCase2 = explode('›', $obj[1], 2);
                            if(!empty($objCase2[1])){
                            $objCase2 = $objCase2[0].'<span class="sURL-ms">›'.$objCase2[1].'</span>';
                            }else{
                                $objCase2 = '<span>'.$objCase2[0].'</span>';
                            }
                            $obj = $obj[0].$objCase2;
                        }else{
                            $obj = $obj[0];
                        }
                    }else{
                        if(!empty($obj[0]) && empty($obj[1])){
                            $obj = $obj[0];
                        }
                        if(!empty($obj[1]) && str_contains($obj[1],'/')){
                            $obj[1] = preg_replace('#/#', ' › ',$obj[1]);
                            $objCase2 = explode('›', $obj[1], 2);
                            if(!empty($objCase2[1])){
                            $objCase2 = $objCase2[0].'<span class="sURL-ms">›'.$objCase2[1].'</span>';
                            }else{
                                $objCase2 = '<span>'.$objCase2[0].'</span>';
                            }
                            $obj = $obj[0].$objCase2;
                        }
                    }
                    $obj2 = $json['value'][$x]['name'];
                    $obj3 = $json['value'][$x]['description'];
                    $obj3 = strlen($obj3) > 54 ? substr($obj3,0,54)." ..." : $obj3;
                    $obj4 = $json['value'][$x]['creator']['name'];
                    $obj5 = $json['value'][$x]['datePublished'];
                    $date1 = new DateTime(date("Y-m-d H:i:s"));
                                    $date2 = new DateTime($obj5);
                                    $diff = $date2->diff($date1);
                    $obj6 = $json['value'][$x]['motionThumbnailUrl'];
                    $obj7 = $json['value'][$x]['duration'];
                    $obj8 = $json['value'][$x]['viewCount'];
                    $obj8 = number_format($obj8, 0, ',', '.');
                    $obj9 = $json['value'][$x]['publisher'][0]['name'];
                    $obj10 = $json['value'][$x]['thumbnailUrl'];
                    if(str_contains($obj7,"H")){
                        $obj7 = str_replace("PT","",$obj7);
                        $obj7 = str_replace("H",":",$obj7);
                        $obj7 = str_replace("M",":",$obj7);
                        $obj7 = str_replace("S","",$obj7);
                        $obj7 = explode(":", $obj7);
                        if(strlen($obj7[0])==1){
                            $obj7[0] = '0'.$obj7[0];
                        }
                        if(strlen($obj7[1])==0){
                            $obj7[1] = '00'.$obj7[1];
                        }
                        if(strlen($obj7[1])==1){
                            $obj7[1] = '0'.$obj7[1];
                        }
                        if(strlen($obj7[2])==0){
                            $obj7[2] = '00'.$obj7[2];
                        }
                        if(strlen($obj7[2])==1){
                            $obj7[2] = '0'.$obj7[2];
                        }
                        $obj7 = $obj7[0].':'.$obj7[1].':'.$obj7[2];
                    } elseif (!str_contains($obj7,"H") && str_contains($obj7,"M")){
                        $obj7 = str_replace("PT","",$obj7);
                        $obj7 = str_replace("M",":",$obj7);
                        $obj7 = str_replace("S","",$obj7);
                        $obj7 = explode(":", $obj7);
                        if(strlen($obj7[0])==1){
                            $obj7[0] = '0'.$obj7[0];
                        }
                        if(strlen($obj7[1])==0){
                            $obj7[1] = '00'.$obj7[1];
                        }
                        if(strlen($obj7[1])==1){
                            $obj7[1] = '0'.$obj7[1];
                        }
                        $obj7 = $obj7[0].':'.$obj7[1];
                    } elseif (!str_contains($obj7, "M") && !str_contains($obj7,"H")){
                        $obj7 = str_replace("PT","",$obj7);
                        $obj7 = str_replace("S","",$obj7);
                        if(strlen($obj7) == 1){
                            $obj7 = '00:0'.$obj7;
                        }
                        if(strlen($obj7) == 2){
                            $obj7 = '00:'.$obj7;
                        }
                    }
                    
                    echo('<div class="vid-wr">');
                    echo('<div class="vid-thumb">');
                    echo('<a href="'.$obj0.'" class="vid-play-dur">'.$obj7.'</a><a href="'.$obj0.'"><img class="vid-play-thumb" src="'.$obj10.'"><img class="vid-play-btn" src="src/public/play-btn-48.png"><video class="vid-play" preload="none" muted playsinline webkit-playsinline loop><source src="'.$obj6.'"></video></a>');
                    echo('</div>');
                    echo('<div class="vid-deta">');
                    echo('<div class="vid-ct-pro">');
                    echo('<span>'.$obj.'</span>');
                    echo('</div>');
                    echo('<div class="vid-titel">');
                    echo('<a href="'.$obj0.'"><span>'.$obj2.'</span></a>');
                    echo('</div>');
                    echo('<div class="vid-desc">');
                    echo('<span>'.$obj3.'</span>');
                    echo('</div>');
                    echo('<div class="vid-creator">');
                    echo('<span>'.$obj4.'</span>');
                    echo('</div>');
                    echo('<div class="vid-pub">');
                    echo('<span>'.$obj9.'</span>');
                    echo('</div>');
                    echo('<div class="vid-date">');
                    if($diff->format('%y') == '0' && $diff->format('%m') == '0' && $diff->format('%d') == '0' && $diff->format('%h') == '0'){
                    echo $diff->format('› %i minutes ago');
                    } elseif ($diff->format('%y') == '0' && $diff->format('%m') == '0' && $diff->format('%d') == '0' && $diff->format('%h') >= '1'){
                    echo $diff->format('› %h hours ago');
                    } elseif ($diff->format('%y') == '0' && $diff->format('%m') == '0' && $diff->format('%d') >= '1'){
                    echo $diff->format('› %d days ago');
                    } elseif ($diff->format('%y') == '0' && $diff->format('%m') >= '1'){
                    echo $diff->format('› %m months ago');
                    } else {
                    echo $diff->format('› %y years ago');
                    }
                    echo('</div>');
                    echo('<div class="vid-vc">');
                    echo('<span>Aufrufe: '.$obj8.'</span>');
                    echo('</div>');
                    echo('</div>');
                    echo('</div>');
                }
            }
        ?>
        </div>
        <div class="m-ru-x-wr">
        <?php
            if(!empty($json['value'][0]['name'])){
                require('elements/search-p.php'); echo $allulFP; echo $alluUL;
            }
        ?>
        </div>
    </div>
    <style>
        .vid-btn{
            border-color: #67d4ffcc;
            border-bottom-width: 3px;
        }
        .dark .vid-btn{
            border-color: rgb(177, 177, 177);
        }
    </style>
    <script src="src/scripts/header.js"></script>
    <script src="src/scripts/videosite.js"></script>
    <script src="src/scripts/script_b.js"></script>
</body>
</html>
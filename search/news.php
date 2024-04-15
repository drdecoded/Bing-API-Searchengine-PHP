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
    
    $output = file_get_contents('jsonfiles/newsHEUTE.json');
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
    <link rel="stylesheet" href="src/styles/news.css">
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
    </div>
    <div class="main">
        <div class="news-md">
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
                    $obj0 = $json['value'][$x]['url'];
                    $obj1 = $json['value'][$x]['url'];
                    $obj1 = preg_split("#//#", $obj1);
                    if(!empty($obj1[0]) && str_contains($obj1[0],'http')){
                        //$obj[0] .= '//';
                        $obj1[0] = '<span class="ht-line">'.$obj1[0].'//</span>';
                        if(!empty($obj1[1])){
                            $obj1[1] = preg_replace("#/#", ' › ',$obj1[1]);
                            $objCase2 = explode('›', $obj1[1], 2);
                            if(!empty($objCase2[1])){
                            $objCase2 = $objCase2[0].'<span class="sURL-ms">›'.$objCase2[1].'</span>';
                            }else{
                                $objCase2 = '<span>'.$objCase2[0].'</span>';
                            }
                            $obj1 = $obj1[0].$objCase2;
                        }else{
                            $obj1 = $obj1[0];
                        }
                    }else{
                        if(!empty($obj1[0]) && empty($obj1[1])){
                            $obj1 = $obj1[0];
                        }
                        if(!empty($obj1[1]) && str_contains($obj1[1],'/')){
                            $obj1[1] = preg_replace('#/#', ' › ',$obj1[1]);
                            $objCase2 = explode('›', $obj1[1], 2);
                            if(!empty($objCase2[1])){
                            $objCase2 = $objCase2[0].'<span class="sURL-ms">›'.$objCase2[1].'</span>';
                            }else{
                                $objCase2 = '<span>'.$objCase2[0].'</span>';
                            }
                            $obj1 = $obj1[0].$objCase2;
                        }
                    }
                    $obj1 = strlen($obj1) > 140 ? substr($obj1,0,140)." ..." : $obj1;
                    $obj2 = $json['value'][$x]['name'];
                    $obj3 = $json['value'][$x]['description'];
                    $obj3 = strlen($obj3) > 250 ? substr($obj3,0,250)." ..." : $obj3;
                    if(!empty($json['value'][$x]['category'])){
                        $obj4 = $json['value'][$x]['category'];
                    }
                    $obj5 = $json['value'][$x]['datePublished'];
                    $date1 = new DateTime(date("Y-m-d H:i:s"));
                                    $date2 = new DateTime($obj5);
                                    $diff = $date2->diff($date1);
                    $obj6 = $json['value'][$x]['provider'][0]['name'];
                    $obj7 = $json['value'][$x]['image']['thumbnail']['contentUrl'];
                    
                    
                    echo('<div class="news-wr">');
                    echo('<div class="news-deta">');
                    echo('<div class="news-ct-pro">');
                    echo('<span>'.$obj1.'</span>');
                    echo('</div>');
                    echo('<div class="news-titel">');
                    echo('<a href="'.$obj0.'"><span>'.$obj2.'</span></a>');
                    echo('</div>');
                    echo('<div class="news-desc">');
                    echo('<span>'.$obj3.'</span>');
                    echo('</div>');
                    echo('<div class="news-d-wr">');
                    echo('<div class="news-category">');
                    echo('<span>'.$obj4.'</span>');
                    echo('</div>');
                    echo('<div class="news-pub">');
                    echo('<span>'.$obj6.'</span>');
                    echo('</div>');
                    echo('<div class="news-date">');
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
                    echo('</div>');
                    echo('</div>');
                    echo('</div>');
                }
            }
        ?>
        </div>
        <div class="r-sel-wr">
        <?php
            if(!empty($json['value'][0]['name'])){
                require('elements/search-p.php'); echo $allulFP; echo $alluUL;
            }
        ?>
        </div>
    </div>
    <style>
        .news-btn{
            border-color: #67d4ffcc;
            border-bottom-width: 3px;
        }
        .dark .news-btn{
            border-color: rgb(177, 177, 177);
        }
    </style>
    <script src="src/scripts/header.js"></script>
    <script src="src/scripts/script_b.js"></script>
</body>
</html>
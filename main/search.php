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
    if (isset($_SESSION['email'])) {
        require 'sqlconftReKf.php';
        $db_connection = new Database();
        $connect = $db_connection->dbConnection();
        $emailTo = $_SESSION["email"];
        $query2 = "SELECT qcounter FROM magicLogin WHERE email =:email";
        $statement2 = $connect->prepare($query2);
        $statement2->execute(
            array(
                'email'     =>   $emailTo
            )
        );
        $dbcountersum = $statement2->fetchColumn();
        if(!empty($_SESSION['qcounter'])){
            $insCountersum = $_SESSION['qcounter'];
            $emailTo = $_SESSION["email"];
            $query3 = "UPDATE magicLogin SET qcounter='.$insCountersum.' WHERE email =:email";
            $statement3 = $connect->prepare($query3);
            $statement3->execute(
                array(
                    'email'     =>   $emailTo
                )
            );
        }
    }
    $db_connection = null;
    if(!empty($_SESSION['qcounter'])){
        $countersum = $_SESSION['qcounter'];
        $_SESSION["qcounter"]++;
    } elseif (empty($_SESSION["qcounter"])) {
        $_SESSION["qcounter"] = 1;
        $countersum = 1;
    }

?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="src/styles/searchresult.css">
    <link rel="stylesheet" href="src/styles/header.css">
    <link rel="stylesheet" href="src/styles/header-dark.css">
    <link rel="stylesheet" href="src/styles/footer.css">
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
    <div class="main-wrap">
        <div id="main-div" class="main-div">
            <div id="md-le" class="md-le">
                <div class="main-search">
                <?php
                    if(empty($json['webPages']['value'][0]['name'])){
                        echo('<div class="nos-wr">');
                        echo('<div class="nos-img"><img src="src/public/icon-sad-bl.png"></div>');
                        echo('<div class="nos-f"><span class="nos-hl">Sorry, no results were found matching your search query.</span>');
                        echo('<span>Make sure your search query is spelled correctly.</span>');
                        echo('<span>Changes to the original search query can result in a search hit!</span>');
                        echo('</div>');
                        echo('</div>');
                    }
                    if(!empty($json2['entities']['value'][0]['description'])){
                        echo('<div class="sr-ent-top">');
                        $objE1 = $json2['entities']['value'][0]['name'];
                        if(!empty($json2['entities']['value'][0]['image']['hostPageUrl'])){
                        $objE0 = $json2['entities']['value'][0]['image']['hostPageUrl'];
                        $objE7 = $json2['entities']['value'][0]['image']['name'];
                        }
                        $objE2 = $json2['entities']['value'][0]['description'];
                        $objE2 = strlen($objE2) > 500 ? substr($objE2,0,500)."..." : $objE2;
                        $objE3 = $json2['entities']['value'][0]['contractualRules'][1]['url'];
                        $objE4 = $json2['entities']['value'][0]['contractualRules'][1]['text'];
                        $objE5 = $json2['entities']['value'][0]['contractualRules'][0]['license']['name'];
                        $objE6 = $json2['entities']['value'][0]['contractualRules'][0]['license']['url'];
                        
                        echo('<div class="et-result">');
                        echo('<div class="et-result-hl">');
                            echo('<a href="'.$objE3.'"><span>'.$objE1.'</span></a>');
                        echo('</div>');
                        if(!empty($objE0)){
                        echo('<div class="et-result-img">');
                            echo('<a href="'.$objE3.'"><img src="'.$objE0.'" alt="'.$objE7.'"></a><br>');
                        echo('</div>');
                        }
                        echo('<div class="et-result-desc">');
                            echo('<a href="'.$objE3.'"><span>'.$objE2.'</span></a>');
                        echo('</div>');
                        echo('<div class="et-result-ownerhl">');
                        if(str_contains($objE4, 'Wikipedia')){
                            echo('<img src="https://upload.wikimedia.org/wikipedia/commons/archive/1/14/20180610081028%21OOjs_UI_icon_logo-wikipedia.svg" alt="Wikipedia-Logo">');
                        }
                        echo('<a href="'.$objE3.'"><span>'.$objE4.'</span></a>');
                        echo('</div>');
                        echo('<hr class="hr-dv">');
                        echo('<div class="et-result-conwr">');
                            echo('<div class="et-result-conwr-button"><span class="origin">Quelle: </span><a href="'.$objE3.'"><span>'.$objE4.'</span></a></div>');
                        echo('</div>');
                        echo('<div class="et-result-lic">');
                            echo('<span class="lic-link">Text unter: </span><a href="'.$objE6.'"><span>'.$objE5.'</span></a>');
                            echo('<div class="feedback-t"><div class="feba-t">Feedback</div><div class="fe-vo"><img class="fe-sm-sm" src="src/public/icon-fe-sm-bl.png"><img class="fe-sm-sa" src="src/public/icon-fe-sa-bl.png"></div></div>');
                        echo('</div>');
                        echo('</div>');
                        echo('</div>');
                        
                    };
                    if(!empty($json['webPages']['value'][0]['name'])){
                        for ($x = 0; $x < count($json['webPages']['value']); $x++) {
                            if(!empty($json['webPages']['value'][$x]['displayUrl'])){
                                $obj = $json['webPages']['value'][$x]['displayUrl'];
                            }
                            if(!empty($json['webPages']['value'][$x]['name'])){
                                $obj2 = $json['webPages']['value'][$x]['name'];
                            }
                            if(!empty($json['webPages']['value'][$x]['snippet'])){
                                $obj3 = $json['webPages']['value'][$x]['snippet'];
                            }
                            if(!empty($json['webPages']['value'][$x]['snippet'])){
                                $obj3 = strlen($obj3) > 220 ? substr($obj3,0,230)." ..." : $obj3;
                            }
                            if(!empty($json['webPages']['value'][$x]['name'])){
                                $obj4 = $json['webPages']['value'][$x]['url'];
                            }
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
                            echo('<div id="mainsearchwrap-'.$x.'" class="ms-Wrap">');
                            echo('<div id="searchresultURL-'.$x.'" class="search-result-URL"><a class="sr-URL-link" href="'.$obj4.'"><span>'.$obj.'</span></a></div>');
                            echo('<div id="searchresultname-'.$x.'" class="search-result-name"><a class="srn-link" href="'.$obj4.'">'.$obj2.'</a></div>');
                            echo('<div id="searchresultsnippet-'.$x.'" class="search-result-snippet"><span class="sr-snippet-link">'.$obj3.'</span></div>');
                            if($x == 0 && !empty($json['webPages']['value'][0]['deepLinks'])){
                                echo('<div class="deeplinks-or">');
                                for ($yi = 0; $yi < count($json['webPages']['value'][0]['deepLinks']); $yi++) {
                                    $objDLr0 = $json['webPages']['value'][0]['deepLinks'][$yi]['name'];
                                    $objDLr0 = strlen($objDLr0) > 30 ? substr($objDLr0,0,30)." ..." : $objDLr0;
                                    $objDLr1 = $json['webPages']['value'][0]['deepLinks'][$yi]['url'];
                                    $objDLr2 = $json['webPages']['value'][0]['deepLinks'][$yi]['snippet'];
                                    $objDLr2 = strlen($objDLr2) > 60 ? substr($objDLr2,0,60)." ..." : $objDLr2;
                                    echo('<div class="dl-on-wr">');
                                    echo('<div class="dl-on-link"><span><a href="'.$objDLr1.'">'.$objDLr0.'</a></span></div>');
                                    echo('<div class="dl-on-snip"><span class="dl-on-sp">› </span><span>'.$objDLr2.'</span></div>');
                                    echo('</div>');
                                }
                                echo('</div>');
                            }
                            if($x == 0 && !empty($json['news']['value'][0]['url'])){
                                echo('<div class="news-related">');
                                echo('<span class="news-hr">News</span>');
                                echo('<div class="news-content">');
                                for($yj = 0; $yj < count($json['news']['value']); $yj++){
                                    if(!empty($json['news']['value'][$yj]['image']['contentUrl'])){
                                        $objNo0 = $json['news']['value'][$yj]['image']['contentUrl'];
                                    }
                                    if(empty($json['news']['value'][$yj]['image']['contentUrl'])){
                                        $objNo0 = 'src/public/icon-nof-bl.png';
                                    }
                                    $objNo1 = $json['news']['value'][$yj]['provider'][0]['name'];
                                    $objNo2 = $json['news']['value'][$yj]['name'];
                                    $objNo2 = strlen($objNo2) > 100 ? substr($objNo2,0,100)."..." : $objNo2;
                                    $objNo3 = $json['news']['value'][$yj]['datePublished'];
                                    if(str_contains($objNo1,"via MSN.com")){
                                        $objNo1 = explode("via", $objNo1);
                                        $objNo1 = '<span class="vmsn-v">'.$objNo1[0].'</span><span class="vmsn">via'.$objNo1[1].'</span>';
                                    }
                                    $objNo4 = $json['news']['value'][$yj]['url'];
                                    $date1 = new DateTime(date("Y-m-d H:i:s"));
                                    $date2 = new DateTime($objNo3);
                                    $diff = $date2->diff($date1);
                                    if($yj == 0 || $yj == 1 || $yj == 2){
                                        echo('<div class="news-w main-n">');
                                        echo('<div class="news-thumb">');
                                        echo('<a href="'.$objNo4.'"><img src="'.$objNo0.'"></a>');
                                        echo('</div>');
                                        if(str_contains($objNo1,"via MSN.com")){
                                            echo('<div class="news-pub">');
                                            echo('<a href="'.$objNo4.'">'.$objNo1.'</a>');
                                            echo('</div>');
                                        } else {
                                            echo('<div class="news-pub">');
                                            echo('<a href="'.$objNo4.'"><span>'.$objNo1.'</span></a>');
                                            echo('</div>');
                                        }
                                        echo('<div class="news-name">');
                                        echo('<a href="'.$objNo4.'"><span>'.$objNo2.'</span></a>');
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
                                    } else {
                                        echo('<div class="news-w">');
                                        echo('<div class="news-thumb">');
                                        echo('<a href="'.$objNo4.'"><img src="'.$objNo0.'"></a>');
                                        echo('</div>');
                                        echo('<div class="news-pub">');
                                        echo('<a href="'.$objNo4.'"><span>'.$objNo1.'</span></a>');
                                        echo('</div>');
                                        echo('<div class="news-name">');
                                        echo('<a href="'.$objNo4.'"><span>'.$objNo2.'</span></a>');
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
                                    }
                                }
                                echo('<div class="news-more"><div class="news-more-con"><a href="/news?q="'.(!empty($_GET['q'])).'"><img class="nw-mc" src="src/public/icon-m-news-bl.png"><span>More news?</span></a></div></div>');
                                echo('</div>');
                                echo('<div id="n-next" class="news-next slider-btn2">›</div>');
                                echo('<div id="n-back" class="news-back slider-btn2">‹</div>');
                                echo('</div>');
                            }
                            if($x == 1 && !empty($json['webPages']['value'][1]['deepLinks'])){
                                echo('<div class="deeplinks">');
                                for ($y = 0; $y < count($json['webPages']['value'][1]['deepLinks']); $y++) {
                                    $objDL0 = $json['webPages']['value'][1]['deepLinks'][$y]['name'];
                                    $objDL1 = $json['webPages']['value'][1]['deepLinks'][$y]['url'];
                                    if($y < count($json['webPages']['value'][1]['deepLinks'])-1){
                                        echo('<span><a href="'.$objDL1.'">'.$objDL0.'</a><span class="deli-s"> · </span></span>');
                                    }
                                    else{
                                        echo('<span><a href="'.$objDL1.'">'.$objDL0.'</a></span>');
                                    }
                                }
                                echo('</div>');
                            }
                            if($x == 2 && !empty($json['videos']['value'][0]['name'])){
                                echo('<div class="vid-related">');
                                echo('<span class="vid-hr">Videos</span>');
                                echo('<div class="vid-content">');
                                for ($z = 0; $z < count($json['videos']['value']); $z++){
                                    if(!empty($json['videos']['value'][$z]['thumbnailUrl'])){
                                        $objVi0 = $json['videos']['value'][$z]['thumbnailUrl'];
                                    }
                                    if(empty($json['videos']['value'][$z]['thumbnailUrl'])){
                                        $objVi0 = 'src/public/icon-nof-bl.png';
                                    }
                                    $objVi1 = $json['videos']['value'][$z]['publisher'][0]['name'];
                                    $objVi2 = $json['videos']['value'][$z]['name'];
                                    $objVi3 = $json['videos']['value'][$z]['datePublished'];
                                    $objVi4 = $json['videos']['value'][$z]['contentUrl'];
                                    $objVi5 = $json['videos']['value'][$z]['duration'];
                                    if(str_contains($objVi5,"H")){
                                        $objVi5 = str_replace("PT","",$objVi5);
                                        $objVi5 = str_replace("H",":",$objVi5);
                                        $objVi5 = str_replace("M",":",$objVi5);
                                        $objVi5 = str_replace("S","",$objVi5);
                                        $objVi5 = explode(":", $objVi5);
                                        if(strlen($objVi5[0])==1){
                                            $objVi5[0] = '0'.$objVi5[0];
                                        }
                                        if(strlen($objVi5[1])==0){
                                            $objVi5[1] = '00'.$objVi5[1];
                                        }
                                        if(strlen($objVi5[1])==1){
                                            $objVi5[1] = '0'.$objVi5[1];
                                        }
                                        if(strlen($objVi5[2])==0){
                                            $objVi5[2] = '00'.$objVi5[2];
                                        }
                                        if(strlen($objVi5[2])==1){
                                            $objVi5[2] = '0'.$objVi5[2];
                                        }
                                        $objVi5 = $objVi5[0].':'.$objVi5[1].':'.$objVi5[2];
                                    } elseif (!str_contains($objVi5,"H") && str_contains($objVi5,"M")){
                                        $objVi5 = str_replace("PT","",$objVi5);
                                        $objVi5 = str_replace("M",":",$objVi5);
                                        $objVi5 = str_replace("S","",$objVi5);
                                        $objVi5 = explode(":", $objVi5);
                                        if(strlen($objVi5[0])==1){
                                            $objVi5[0] = '0'.$objVi5[0];
                                        }
                                        if(strlen($objVi5[1])==0){
                                            $objVi5[1] = '00'.$objVi5[1];
                                        }
                                        if(strlen($objVi5[1])==1){
                                            $objVi5[1] = '0'.$objVi5[1];
                                        }
                                        $objVi5 = $objVi5[0].':'.$objVi5[1];
                                    } elseif (!str_contains($objVi5, "M") && !str_contains($objVi5,"H")){
                                        $objVi5 = str_replace("PT","",$objVi5);
                                        $objVi5 = str_replace("S","",$objVi5);
                                        if(strlen($objVi5) == 1){
                                            $objVi5 = '00:0'.$objVi5;
                                        }
                                        if(strlen($objVi5) == 2){
                                            $objVi5 = '00:'.$objVi5;
                                        }
                                    }

                                    $date1 = new DateTime(date("Y-m-d H:i:s"));
                                    $date2 = new DateTime($objVi3);
                                    $diff = $date2->diff($date1);
                                        if($z == 0 || $z == 1 || $z == 2){
                                            echo('<div class="vr-w main">');
                                            echo('<div class="vr-thumb">');
                                            echo('<a href="'.$objVi4.'"><img src="'.$objVi0.'"></a>');
                                            echo('</div>');
                                            echo('<div class="vr-dur">');
                                            echo('<a href="'.$objVi4.'">'.$objVi5.'</a>');
                                            echo('</div>');
                                            echo('<div class="vr-play">');
                                            echo('<a href="'.$objVi4.'"><img src="src/public/play-btn-48.png"><a>');
                                            echo('</div>');
                                            echo('<div class="vr-pub">');
                                            echo('<a href="'.$objVi4.'"><span>'.$objVi1.'</span></a>');
                                            echo('</div>');
                                            echo('<div class="vr-name">');
                                            echo('<a href="'.$objVi4.'"><span>'.$objVi2.'</span></a>');
                                            echo('</div>');
                                            echo('<div class="vr-date">');
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
                                        } else{
                                            echo('<div class="vr-w">');
                                            echo('<div class="vr-thumb">');
                                            echo('<a href="'.$objVi4.'"><img src="'.$objVi0.'"></a>');
                                            echo('</div>');
                                            echo('<div class="vr-dur">');
                                            echo('<a href="'.$objVi4.'">'.$objVi5.'</a>');
                                            echo('</div>');
                                            echo('<div class="vr-play">');
                                            echo('<a href="'.$objVi4.'"><img src="src/public/play-btn-48.png"><a>');
                                            echo('</div>');
                                            echo('<div class="vr-pub">');
                                            echo('<a href="'.$objVi4.'"><span>'.$objVi1.'</span></a>');
                                            echo('</div>');
                                            echo('<div class="vr-name">');
                                            echo('<a href="'.$objVi4.'"><span>'.$objVi2.'</span></a>');
                                            echo('</div>');
                                            echo('<div class="vr-date">');
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
                                        }
                                    
                                }
                                echo('<div class="vr-more"><div class="vr-more-con"><a href="/videos?q="'.(!empty($_GET['q'])).'"><img class="vr-mc" src="src/public/icon-m-play-bl.png"><span>More videos?</span></a></div></div>');
                                echo('</div>');
                                echo('<div id="next" class="vid-next slider-btn">›</div>');
                                echo('<div id="back" class="vid-back slider-btn">‹</div>');
                                echo('</div>');
                            };
                            echo('</div>');
                            // BREAK MOBILE NEWS AND VIDEOS DIV
                            if($x == 0 && !empty($json['news']['value'][0]['url'])){
                                echo('<div class="news-d-hr"><span class="news-hr">News</span></div>');
                                echo('<div class="news-related-m">');
                                echo('<div class="news-content">');
                                for($yj = 0; $yj < count($json['news']['value']); $yj++){
                                    if(!empty($json['news']['value'][$yj]['image']['contentUrl'])){
                                        $objNo0 = $json['news']['value'][$yj]['image']['contentUrl'];
                                    }
                                    if(empty($json['news']['value'][$yj]['image']['contentUrl'])){
                                        $objNo0 = 'src/public/icon-nof-bl.png';
                                    }
                                    $objNo1 = $json['news']['value'][$yj]['provider'][0]['name'];
                                    $objNo2 = $json['news']['value'][$yj]['name'];
                                    $objNo2 = strlen($objNo2) > 100 ? substr($objNo2,0,100)."..." : $objNo2;
                                    $objNo3 = $json['news']['value'][$yj]['datePublished'];
                                    if(str_contains($objNo1,"via MSN.com")){
                                        $objNo1 = explode("via", $objNo1);
                                        $objNo1 = '<span class="vmsn-v">'.$objNo1[0].'</span><span class="vmsn">via'.$objNo1[1].'</span>';
                                    }
                                    $objNo4 = $json['news']['value'][$yj]['url'];
                                    $date1 = new DateTime(date("Y-m-d H:i:s"));
                                    $date2 = new DateTime($objNo3);
                                    $diff = $date2->diff($date1);
                                        echo('<div class="news-w-m">');
                                        echo('<div class="news-thumb">');
                                        echo('<a href="'.$objNo4.'"><img src="'.$objNo0.'"></a>');
                                        echo('</div>');
                                        if(str_contains($objNo1,"via MSN.com")){
                                            echo('<div class="news-pub">');
                                            echo('<a href="'.$objNo4.'">'.$objNo1.'</a>');
                                            echo('</div>');
                                        } else {
                                            echo('<div class="news-pub">');
                                            echo('<a href="'.$objNo4.'"><span>'.$objNo1.'</span></a>');
                                            echo('</div>');
                                        }
                                        echo('<div class="news-name">');
                                        echo('<a href="'.$objNo4.'"><span>'.$objNo2.'</span></a>');
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
                                }
                                echo('<div class="news-more-m"><div class="news-more-con"><a href="/news?q="'.(!empty($_GET['q'])).'"><img class="nw-mc" src="src/public/icon-m-news-bl.png"><span>More news?</span></a></div></div>');
                                echo('</div>');
                                echo('</div>');
                            }
                            if($x == 2 && !empty($json['videos']['value'][0]['name'])){
                                echo('<div class="vid-d-hr"><span class="vid-hr">Videos</span></div>');
                                echo('<div class="vid-related-m">');
                                echo('<div class="vid-content">');
                                for ($z = 0; $z < count($json['videos']['value']); $z++){
                                    if(!empty($json['videos']['value'][$z]['thumbnailUrl'])){
                                        $objVi0 = $json['videos']['value'][$z]['thumbnailUrl'];
                                    }
                                    if(empty($json['videos']['value'][$z]['thumbnailUrl'])){
                                        $objVi0 = 'src/public/icon-nof-bl.png';
                                    }
                                    $objVi1 = $json['videos']['value'][$z]['publisher'][0]['name'];
                                    $objVi2 = $json['videos']['value'][$z]['name'];
                                    $objVi3 = $json['videos']['value'][$z]['datePublished'];
                                    $objVi4 = $json['videos']['value'][$z]['contentUrl'];
                                    $objVi5 = $json['videos']['value'][$z]['duration'];
                                    if(str_contains($objVi5,"H")){
                                        $objVi5 = str_replace("PT","",$objVi5);
                                        $objVi5 = str_replace("H",":",$objVi5);
                                        $objVi5 = str_replace("M",":",$objVi5);
                                        $objVi5 = str_replace("S","",$objVi5);
                                        $objVi5 = explode(":", $objVi5);
                                        if(strlen($objVi5[0])==1){
                                            $objVi5[0] = '0'.$objVi5[0];
                                        }
                                        if(strlen($objVi5[1])==0){
                                            $objVi5[1] = '00'.$objVi5[1];
                                        }
                                        if(strlen($objVi5[1])==1){
                                            $objVi5[1] = '0'.$objVi5[1];
                                        }
                                        if(strlen($objVi5[2])==0){
                                            $objVi5[2] = '00'.$objVi5[2];
                                        }
                                        if(strlen($objVi5[2])==1){
                                            $objVi5[2] = '0'.$objVi5[2];
                                        }
                                        $objVi5 = $objVi5[0].':'.$objVi5[1].':'.$objVi5[2];
                                    } elseif (!str_contains($objVi5,"H") && str_contains($objVi5,"M")){
                                        $objVi5 = str_replace("PT","",$objVi5);
                                        $objVi5 = str_replace("M",":",$objVi5);
                                        $objVi5 = str_replace("S","",$objVi5);
                                        $objVi5 = explode(":", $objVi5);
                                        if(strlen($objVi5[0])==1){
                                            $objVi5[0] = '0'.$objVi5[0];
                                        }
                                        if(strlen($objVi5[1])==0){
                                            $objVi5[1] = '00'.$objVi5[1];
                                        }
                                        if(strlen($objVi5[1])==1){
                                            $objVi5[1] = '0'.$objVi5[1];
                                        }
                                        $objVi5 = $objVi5[0].':'.$objVi5[1];
                                    } elseif (!str_contains($objVi5, "M") && !str_contains($objVi5,"H")){
                                        $objVi5 = str_replace("PT","",$objVi5);
                                        $objVi5 = str_replace("S","",$objVi5);
                                        if(strlen($objVi5) == 1){
                                            $objVi5 = '00:0'.$objVi5;
                                        }
                                        if(strlen($objVi5) == 2){
                                            $objVi5 = '00:'.$objVi5;
                                        }
                                    }

                                    $date1 = new DateTime(date("Y-m-d H:i:s"));
                                    $date2 = new DateTime($objVi3);
                                    $diff = $date2->diff($date1);
                                            echo('<div class="vr-w-m">');
                                            echo('<div class="vr-thumb">');
                                            echo('<a href="'.$objVi4.'"><img src="'.$objVi0.'"></a>');
                                            echo('</div>');
                                            echo('<div class="vr-dur">');
                                            echo('<a href="'.$objVi4.'">'.$objVi5.'</a>');
                                            echo('</div>');
                                            echo('<div class="vr-play">');
                                            echo('<a href="'.$objVi4.'"><img src="src/public/play-btn-48.png"><a>');
                                            echo('</div>');
                                            echo('<div class="vr-pub">');
                                            echo('<a href="'.$objVi4.'"><span>'.$objVi1.'</span></a>');
                                            echo('</div>');
                                            echo('<div class="vr-name">');
                                            echo('<a href="'.$objVi4.'"><span>'.$objVi2.'</span></a>');
                                            echo('</div>');
                                            echo('<div class="vr-date">');
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
                                }
                                echo('<div class="vr-more-m"><div class="vr-more-con"><a href="/videos?q="'.(!empty($_GET['q'])).'"><img class="vr-mc" src="src/public/icon-m-play-bl.png"><span>More videos?</span></a></div></div>');
                                echo('</div>');
                                echo('</div>');
                            };
                        }
                    };
                ?>

                </div>
            </div>
            <div id="md-ri" class="md-ri">
                    
                        <?php
                            if(!empty($json2['entities']['value'][0]['description'])){
                                echo('<div class="sr-ent">');
                                $objE1 = $json2['entities']['value'][0]['name'];
                                if(!empty($json2['entities']['value'][0]['image']['hostPageUrl'])){
                                $objE0 = $json2['entities']['value'][0]['image']['hostPageUrl'];
                                $objE7 = $json2['entities']['value'][0]['image']['name'];
                                }
                                $objE2 = $json2['entities']['value'][0]['description'];
                                $objE2 = strlen($objE2) > 500 ? substr($objE2,0,500)."..." : $objE2;
                                $objE3 = $json2['entities']['value'][0]['contractualRules'][1]['url'];
                                $objE4 = $json2['entities']['value'][0]['contractualRules'][1]['text'];
                                $objE5 = $json2['entities']['value'][0]['contractualRules'][0]['license']['name'];
                                $objE6 = $json2['entities']['value'][0]['contractualRules'][0]['license']['url'];
                                
                                echo('<div class="et-result">');
                                echo('<div class="et-result-hl">');
                                    echo('<a href="'.$objE3.'"><span>'.$objE1.'</span></a>');
                                echo('</div>');
                                if(!empty($objE0)){
                                echo('<div class="et-result-img">');
                                    echo('<a href="'.$objE3.'"><img src="'.$objE0.'" alt="'.$objE7.'"></a><br>');
                                echo('</div>');
                                }
                                echo('<div class="et-result-desc">');
                                    echo('<a href="'.$objE3.'"><span>'.$objE2.'</span></a>');
                                echo('</div>');
                                echo('<div class="et-result-ownerhl">');
                                if(str_contains($objE4, 'Wikipedia')){
                                    echo('<img src="https://upload.wikimedia.org/wikipedia/commons/archive/1/14/20180610081028%21OOjs_UI_icon_logo-wikipedia.svg" alt="Wikipedia-Logo">');
                                }
                                echo('<a href="'.$objE3.'"><span>'.$objE4.'</span></a>');
                                echo('</div>');
                                echo('<hr class="hr-dv">');
                                echo('<div class="et-result-conwr">');
                                    echo('<div class="et-result-conwr-button"><span class="origin">Quelle: </span><a href="'.$objE3.'"><span>'.$objE4.'</span></a></div>');
                                echo('</div>');
                                echo('<div class="et-result-lic">');
                                    echo('<span class="lic-link">Text unter: </span><a href="'.$objE6.'"><span>'.$objE5.'</span></a>');
                                echo('</div>');
                                echo('</div>');
                                echo('</div>');
                                echo('<div class="fe-vo-wr"><div class="feedback">Feedback</div><div class="fe-vo"><img class="fe-sm-sm" src="src/public/icon-fe-sm-bl.png"><img class="fe-sm-sa" src="src/public/icon-fe-sa-bl.png"></div></div>');
                            };
                        ?>
                        

                        
            </div>
        </div>
    </div>
    <div class="related">
        <?php
            if(!empty($json['relatedSearches']['value'][0]['text'])){
                echo('<span class="rel-hl">Related Searches</span>');
                echo('<div class="relatedSearches">');
                for ($x = 0; $x < count($json['relatedSearches']['value']); $x++) {
                    $query2 = "deutschland";
                    //$query2 = ($_REQUEST['query']);
                    $query2 = implode('|',explode('#',preg_quote($query2)));
                    $obj5 = $json['relatedSearches']['value'][$x]['displayText'];
                    $obj5 = preg_replace("/($query2)/i","<b>$0</b>",$obj5);
                    $obj6 = $json['relatedSearches']['value'][$x]['webSearchUrl'];
                    $obj6 = str_replace("https://www.bing.com","",$obj6);
                    echo('<div class="related-s-result"><a href="'.$obj6.'"><img class="nl-se" src="src/public/icon-sea-bl.png"><span>'.$obj5.'</span></a></div>');
                }
            echo('</div>');
            };
            if(!empty($json['webPages']['value'][0]['name'])){
                require('elements/search-p.php'); echo $allulFP; echo $alluUL;
            }
        ?>
    </div>

    <?php require('footer.php'); ?>
    <style>
        .home-btn{
            border-color: #67d4ffcc;
            border-bottom-width: 3px;
        }
        .dark .home-btn{
            border-color: rgb(177, 177, 177);
        }
    </style>

    

</body>

<script src="src/scripts/slider.js"></script>
<script src="src/scripts/header.js"></script>
<script src="src/scripts/welcometoqoolar.js"></script>
<script src="src/scripts/script_b.js"></script>

</html>
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
    //file_put_contents('searchRUSSLAND.json', $output);
    //file_put_contents('entityDEUTSCHLAND.json', $output2);
    //$output2 = file_get_contents('jsonfiles/entityWIKIPEDIA.json');
    $output = file_get_contents('jsonfiles/imageLOGO.json');
    $result = json_encode(json_decode($output), JSON_PRETTY_PRINT); // <- json into pretty readable output
    //$json2 = json_decode($output2, true);
    $json = json_decode($output, true);

    //echo $result;

    


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1, maximum-scale=1">
    <title>Document</title>
    <link rel="stylesheet" href="src/styles/images.css">
    <link rel="stylesheet" href="src/styles/header-dark.css">
    <link rel="stylesheet" href="src/styles/header.css">
    <script src="src/scripts/KgIzY5mf.js"></script>
    <script src="src/scripts/R5sLeO3D.js"></script>
</head>
<?php if(!empty(htmlspecialchars(!empty($_COOKIE["theme"])))){$tC = htmlspecialchars($_COOKIE["theme"]);}else{$tC='light';};if($tC == 'dark'){echo ('<body class="dark">');}else{echo ('<body>');};?>
<?php require('header.php'); ?>
    <div class="select-nav">
        <?php require_once("elements/regionselect.php"); ?>
        <?php require_once("elements/timeselect.php"); ?>
        <?php require_once("elements/colorselect.php"); ?>
        <?php require_once("elements/layoutselect.php"); ?>
        <?php require_once("elements/licenseselect.php"); ?>
        <?php require_once("elements/sizeselect.php"); ?>
        <?php require_once("elements/typeselect.php"); ?>
        <div class="filter-reset"><button id="fil-reset" class="filter-res"><span data-lang="btn-re">Zurücksetzen</span></button></div>
    </div>

    <div id="img-main" class="img-m">
    <div class="img-l-wr">
    <div id="img-w" class="img-w">
    </div>
    <div class="a-loads"></div>
    </div>
    <div class="img-p"><div class="img-p-w">    
    <div id="next" class="img-btn-next slider-btn">›</div>
    <div id="back" class="img-btn-back slider-btn">‹</div>
    <div id="close" class="img-btn-close close-btn">×</div>
    </div>
    </div>

    </div>
    <style>
        .img-btn{
            border-color: #67d4ffcc;
            border-bottom-width: 3px;
        }
        .dark .img-btn{
            border-color: rgb(177, 177, 177);
        }
    </style>
<script src="src/scripts/header.js"></script>
<script src="src/scripts/imagescroll.js"></script>
<script src="src/scripts/script_b.js"></script>
</body>
</html>



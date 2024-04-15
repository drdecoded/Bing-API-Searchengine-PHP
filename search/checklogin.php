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
ob_start();
require 'sqlconftReKf.php';
$db_connection = new Database();
$connect = $db_connection->dbConnection();
if (isset($_GET["token"])) {
        $token = $_GET["token"];
        //Pick the Details
        $stmt = $connect->prepare("SELECT * FROM magicLogin WHERE token='" . $token . "'");
        $stmt->execute();
        $users = $stmt->fetch(PDO::FETCH_ASSOC);
        $email = isset($users['email']) ? $users['email'] : NULL;
        $_SESSION['email'] = $email;
        $_SESSION['magicRequest'] = 'false';
        $_SESSION['magicFailed'] = 'false';

        //Invalidate the Login Token
        $UpdateToken = "UPDATE magicLogin SET token=NULL WHERE token='" . $token . "'";
        $UpdateToken = $connect->prepare($UpdateToken);
        $UpdateToken->execute();

        if (isset($_SESSION['email'])) {
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
                $insCountersum = $_SESSION['qcounter'] + $dbcountersum;
                $_SESSION['qcounter'] = $insCountersum;
                $emailTo = $_SESSION["email"];
                $query3 = "UPDATE magicLogin SET qcounter='.$insCountersum.' WHERE email =:email";
                $statement3 = $connect->prepare($query3);
                $statement3->execute(
                    array(
                        'email'     =>   $emailTo
                    )
                );
            }
            header('location: searchde.php');
        }
        $db_connection = null;
        
    } else {
        $_SESSION['magicFailed'] = 'true';
        header('location: searchde.php');
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Check</title>
</head>

<body>

</body>

</html>
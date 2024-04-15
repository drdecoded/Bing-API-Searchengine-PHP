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
require 'sqlconftReKf.php';
$db_connection = new Database();
$connect = $db_connection->dbConnection();
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
session_destroy();
header('Location:searchde.php');
?>
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

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';


if (isset($_SESSION['email'])) {
    header('location: search.php');
}
//Generate Token
$token = bin2hex(random_bytes(24));
$ServerURL = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] ;
if (isset($_POST['login'])) {

    $emailTo = $_POST["email"];

    $query = "SELECT * FROM magicLogin WHERE email =:email";
    $statement = $connect->prepare($query);
    $statement->execute(
        array(
            'email'     =>   $emailTo
        )
    );
    $count = $statement->rowCount();
    if ($count > 0) {

        //If the Email is Present
        // Insert Token into User Table
        $UpdateToken = "UPDATE magicLogin SET token='" . $token . "' WHERE email='" . $emailTo . "'";
        $UpdateToken = $connect->prepare($UpdateToken);
        $UpdateToken->execute();
        SendEmail();
    } else {
        // Insert User &  Token into User Table
        $AddNew = "INSERT INTO magicLogin (email, token, date_created) VALUES (?,?,now())";
        $AddNew = $connect->prepare($AddNew);
        $AddNew->execute([$emailTo, $token]);
        SendEmail();
    }
}

function SendEmail()
{
    //PHPMailer Object
    $mail = new PHPMailer(true); //Argument true in constructor enables exceptions

    global $smtpUsername;
    global $smtpPassword;
    global $smtpHost;
    global $smtpPort;
    global $emailFrom;
    global $emailFromName;
    global $emailTo;
    global $token;
    global $ServerURL;
    $emailToName = $emailTo;

    $mail->isSMTP();
    $mail->SMTPDebug = 0; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
    $mail->Host = $smtpHost; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
    $mail->Port = $smtpPort; // TLS only
    $mail->SMTPSecure = 'ssl'; // ssl is deprecated
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->setFrom($emailFrom, $emailFromName);
    $mail->addAddress($emailTo, $emailToName);
    $mail->Subject = 'Here is your magic login url'; // '. $token .'
    $mail->msgHTML("Hey, <br><br> Here is the Magic Login URL <br><br> <a href='$ServerURL/autosu/checklogin.php?token=$token' target='_blank'>Click here to Open in New Tab</a><br><br>Or Copy paste below link in New Tab<br><br><b>$ServerURL/autosu/checklogin.php?token=$token</b><br><br><b>This link will expire in 60 minutes<br><br>Note: If you didn't requested login url.You can ignore this email.<br><br>Thank you."); //$mail->msgHTML(file_get_contents('contents.html'), __DIR__); //Read an HTML message body from an external file, convert referenced images to embedded,
    $mail->AltBody = 'Here is your magic login url';
    // $mail->addAttachment('src/public/phpmailer_mini.png'); //Attach an image file
    if (!$mail->send()) {
        //echo "Mailer Error: " . $mail->ErrorInfo;
        echo '<div class="lg-ch-m-f"><span>Something went wrong! Please try again later!</span></div>';
    } else {
        //$_SESSION['magicRequest'] === 'true';
        echo '<div class="lg-ch-m-s"><span>Check your mailbox!</span></div>';
        //header('location: searchde.php');
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-lang="log-t">Send me a Magic Link!</title>
    <link rel="stylesheet" href="src/styles/login.css">
    <link rel="stylesheet" href="src/styles/header-dark.css">
    <script src="src/scripts/KgIzY5mf.js"></script>
    <script src="src/scripts/R5sLeO3D.js"></script>
</head>

<body>
    <div class="lg-main-d">
        <div class="lg-main-md">
        <div class="lg-back"><button onclick="window.history.back()"><span class="lg-arr-t">‹</span> <span class="lg-b-txt" data-lang="log-bt-b">Back</span></button></div>
            <div class="lg-m-logo"><img class="lo-log" src="src/public/logo-sm-bl.png"></div>
            <div class="lg-hl-wr">
                <div class="lg-hl-img"><img class="lo-mg" src="src/public/icon-magic-bl.png"></div><div class="lg-hl"><span data-lang="log-sma">Send me a magic link</span></div>
            </div>
            <form method="post">
                <div class="lg-txt"><span data-lang="log-ee">Enter your E-Mail to log in or sign up!</span></div>
                <div class="lg-in">
                    <input class="lg-in-e" type="email" name="email" class="email" placeholder="Enter your E-Mail..." data-lang="log-pl" autocomplete="off" autofocus="on" required>
                    <input class="lg-in-s" type="submit" class="login" name="login" value="Send" />
                </div>
                </div>
            </form>
        </div>
    </div>
</body>
<script src="src/scripts/header.js"></script>
</html>
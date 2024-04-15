<?php
require 'sqlconftReKf.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
SendEmail();
function SendEmail()
{
    if(!empty(htmlspecialchars(!empty($_POST["b-email"])))){
        $bMail = htmlspecialchars($_POST["b-email"]);
    }
    if(!empty(htmlspecialchars(!empty($_POST["b-name"])))){
        $bName = htmlspecialchars($_POST["b-name"]);
    }
    if(!empty(htmlspecialchars(!empty($_POST["b-url"])))){
        $bURL = htmlspecialchars($_POST["b-url"]);
    }
    if(!empty(htmlspecialchars(!empty($_POST["b-error"])))){
        $bErr = htmlspecialchars($_POST["b-error"]);
    }
    if(!empty(htmlspecialchars(!empty($_POST["b-mes"])))){
        $bMes = htmlspecialchars($_POST["b-mes"]);
    }
    if(!empty(htmlspecialchars(!empty($_POST["f-email"])))){
        $fMail = htmlspecialchars($_POST["f-email"]);
    }
    if(!empty(htmlspecialchars(!empty($_POST["f-name"])))){
        $fName = htmlspecialchars($_POST["f-name"]);
    }
    if(!empty(htmlspecialchars(!empty($_POST["f-mes"])))){
        $fMes = htmlspecialchars($_POST["f-mes"]);
    }
    //PHPMailer Object
    if(empty(htmlspecialchars($_POST["f-fill"])) && empty(htmlspecialchars($_POST["b-fill"]))){
        $mail = new PHPMailer(true); //Argument true in constructor enables exceptions

        global $smtpUsername2;
        global $smtpPassword2;
        global $smtpHost2;
        global $smtpPort2;
        global $emailFrom;
        $emailFrom = "";
        global $emailFromName;
        global $emailTo;
        $emailTo = "";
        global $token;
        global $ServerURL;
        $emailToName = $emailTo;

        $mail->isSMTP();
        $mail->SMTPDebug = 0; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
        $mail->Host = $smtpHost2; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
        $mail->Port = $smtpPort2; // TLS only
        $mail->SMTPSecure = 'tls'; // ssl is deprecated
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUsername2;
        $mail->Password = $smtpPassword2;
        $mail->setFrom($emailFrom, $emailFromName);
        $mail->addAddress($emailTo, $emailToName);
        $mecA = 'Form submit!';
        if(!empty($bMes)){
            $mesC = 'Bugreport';
            if(!empty($bMail)){
                $bMail = "<br>E-Mail: $bMail<br>";
                $mecA .= $bMail;
            }
            if(!empty($bName)){
                $bName = "<br>Name: $bName<br>";
                $mecA .= $bName;
            }
            if(!empty($bURL)){
                $bURL = "<br>URL: $bURL<br>";
                $mecA .= $bURL;
            }
            if(!empty($bErr)){
                $bErr = "<br>Error Message: $bErr<br>";
                $mecA .= $bErr;
            }
            if(!empty($bMes)){
                $bMes = "<br>Message: $bMes<br>";
                $mecA .= $bMes;
            }
        } elseif(!empty($fMes)){
            $mesC = 'Feedback';
            if(!empty($fMail)){
                $fMail = "<br>E-Mail: $fMail<br>";
                $mecA .= $fMail;
            }
            if(!empty($fName)){
                $fName = "<br>Name: $fName<br>";
                $mecA .= $fName;
            }
            if(!empty($fMes)){
                $fMes = "<br>Message: $fMes<br>";
                $mecA .= $fMes;
            }
        } else{
            $mesC = 'Undefinded';
            $mecA = 'not valid';
        }
        $mail->Subject = $mesC; // '. $token .'
        $mail->msgHTML($mecA); //$mail->msgHTML(file_get_contents('contents.html'), __DIR__); //Read an HTML message body from an external file, convert referenced images to embedded,
        $mail->AltBody = 'Here is your magic login url';
        // $mail->addAttachment('src/public/phpmailer_mini.png'); //Attach an image file
        if (!$mail->send()) {
            //echo "Mailer Error: " . $mail->ErrorInfo;
        } else {
            //$_SESSION['magicRequest'] === 'true';
            //header('location: searchde.php');
        }
    }
}
?>


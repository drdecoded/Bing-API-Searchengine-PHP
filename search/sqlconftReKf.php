<?php
$smtpUsername = ''; #SMTP Username
$smtpPassword = ''; #SMTP Password
$emailFrom = ''; #Set from Email Address
$emailFromName = ''; #Set from Address Name
$smtpHost = ''; #SMTP HOST - Currently Set to Gmail
$smtpPort = 465; #SMTP Port

$smtpUsername2 = ''; #SMTP Username
$smtpPassword2 = ''; #SMTP Password
$emailFrom2 = ''; #Set from Email Address
$emailFromName2 = ''; #Set from Address Name
$smtpHost2 = ''; #SMTP HOST - Currently Set to Gmail
$smtpPort2 = 587; #SMTP Port

class Database {
    
    private $db_host = '';
    private $db_name = '';
    private $db_username = '';
    private $db_password = '';

    public function dbConnection(){
        
        try {
            $connect = new PDO('mysql:host='.$this->db_host.';dbname='.$this->db_name,$this->db_username,$this->db_password);
            $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $connect;
        }
        catch (PDOException $e){
            //echo "Connection error ".$e->getMessage(); 
            header('location: searchde.php');
            exit;
        }
        
        
    }
}
?>
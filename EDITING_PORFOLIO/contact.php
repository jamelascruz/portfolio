<?php
// database connection code
if(isset($_POST['name']))
{
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','contact_form');

// get the post records

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];

// database insert SQL code
$sql = "INSERT INTO `data` (`name`, `email`, `msg`) VALUES ('$name', '$email','$msg')";

// insert in database 
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo '<script type="text/javascript">';
	echo ' alert ("Thanks for submitting")';
	echo '</script>';
}
}
else
{
	echo '<script type="text/javascript">';
	echo 'alert ("Are you a genuine visitor?")';
	echo '</script>';
	
	
}
?>
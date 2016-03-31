<html>
<head>
<title>Chat Log</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div id="main">
<h1>Chat Log</h1>
<div id="login">
<hr/>
<form action="" method="post">
<label>Message :</label>
<input type="text" name="stu_name" id="name" required="required" placeholder="Please Enter Message"/><br /><br />
<input type="submit" value=" Submit " name="submit"/><br />
</form>
</div>

<?php

if(isset($_POST["submit"])){
/** mysql hostname **/
$hostname = 'localhost';

/** mysql username **/
$username = 'root';

/** mysql password **/
$password = 'root';

try {
  $dbh = new PDO("mysql:host=$hostname;dbname=Chat", $username, $password);
  /** echo message saying that we have a connection **/
  echo 'connected to database';

/*** INSERT data ***/
  $count = $dbh->exec("INSERT INTO chatLogTwo(message) VALUES ('".$_POST["stu_name"]."')");
    /*** echo the number of affected rows ***/
    echo $count;

    /*** The SQL SELECT statement ***/
       $sql = "SELECT * FROM chatLogTwo";
       foreach ($dbh->query($sql) as $row)
           {
           print $row['time'] .' - '. $row['message'] . '<br />';
           }


    /*** close the database connection ***/
    $dbh = null;
    }

catch(PDOException $e)
  {
    echo $e->getMessage();
  }

}
//best outside the if statement so user isn't stuck on a white blank page.
header("location: landing_page.php");
exit;


 ?>
 </body>
 </html>

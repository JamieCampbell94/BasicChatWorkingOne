<?php
$data = file_get_contents('php://input'); // Get any data sent to this file - special constant
$json = json_decode($data, true); // Convert JSON to PHP array
//print_r($json);
$jothandle = fopen("jots.txt","a");   // open the file and create a handle reference to open file
$write = fwrite($jothandle,$json['randomText']); // Write the data to the handle reference
if($write) {
  //
  // If successful send 200
  header("HTTP/1.1 200 OK");
} else {
  // Error 500
  header("HTTP/1.0 500 Internal Server Error");
}

?>

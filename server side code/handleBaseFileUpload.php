<?php
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   if (isset($_FILES['files'])) {
        $errors = [];
	$path = 'BaseFiles/';
	$fileCount = count($_FILES['files']['tmp_name']);
	for ($i = 0; $i < $fileCount; $i++) {
    		$file_name = $_FILES['files']['name'][$i];
		$file_tmp = $_FILES['files']['tmp_name'][$i];
		$file_type = $_FILES['files']['type'][$i];
		$file_size = $_FILES['files']['size'][$i];
		$file_ext = strtolower(end(explode('.', $_FILES['files']['name'][$i])));

		$file = $path . $file_name;
		move_uploaded_file($file_tmp, $file);
		print_r("$file_name Uploaded Successfully ! \n");
	}

    }

}

?>

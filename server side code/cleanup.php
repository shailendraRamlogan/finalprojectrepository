<?php
$basefiles = glob('BaseFiles/*'); // get all file names
foreach($basefiles as $file){ // iterate files
  if(is_file($file))
    unlink($file); // delete file
}

$sourcefiles = glob('SourceFiles/*'); // get all file names
foreach($sourcefiles as $file){ // iterate files
  if(is_file($file))
    unlink($file); // delete file
}

?>

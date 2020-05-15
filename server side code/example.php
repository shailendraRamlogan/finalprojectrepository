<?php
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$data = json_decode(file_get_contents("php://input"), TRUE);
include("moss.php");
$userid = $data['userid']; // Enter your MOSS userid
$moss = new MOSS($userid);
$moss->setLanguage($data['language']);
if($data['language'] == "python"){
$moss->addSourceByWildcard('SourceFiles/*.py');
$moss->addBaseByWildcard('BaseFiles/*.py');
}
if($data['language'] == "java"){
$moss->addSourceByWildcard('SourceFiles/*.java');
$moss->addBaseByWildcard('BaseFiles/*.java');
}
if($data['language'] == "c++"){
$moss->addSourceByWildcard('SourceFiles/*.cpp');
$moss->addBaseByWildcard('BaseFiles/*.cpp');
}
if($data['language'] == "c"){
$moss->addSourceByWildcard('SourceFiles/*.c');
$moss->addBaseByWildcard('BaseFiles/*.c');
}
if($data['language'] == "c#"){
$moss->addSourceByWildcard('SourceFiles/*.cs');
$moss->addBaseByWildcard('BaseFiles/*.cs');
}
if($data['language'] == "visualbasic"){
$moss->addSourceByWildcard('SourceFiles/*.vb');
$moss->addBaseByWildcard('BaseFiles/*.vb');
}
if($data['language'] == "javascript"){
$moss->addSourceByWildcard('SourceFiles/*.js');
$moss->addBaseByWildcard('BaseFiles/*.js');
}
if($data['language'] == "fortran"){
$moss->addSourceByWildcard('SourceFiles/*.f90');
$moss->addBaseByWildcard('BaseFiles/*.f90');
}
if($data['language'] == "ml"){
$moss->addSourceByWildcard('SourceFiles/*.ml');
$moss->addBaseByWildcard('BaseFiles/*.ml');
}
if($data['language'] == "haskell"){
$moss->addSourceByWildcard('SourceFiles/*.hs');
$moss->addBaseByWildcard('BaseFiles/*.hs');
}
if($data['language'] == "lisp"){
$moss->addSourceByWildcard('SourceFiles/*.lsp');
$moss->addBaseByWildcard('BaseFiles/*.lsp');
}
if($data['language'] == "scheme"){
$moss->addSourceByWildcard('SourceFiles/*.scm');
$moss->addBaseByWildcard('BaseFiles/*.scm');
}
if($data['language'] == "pascal"){
$moss->addSourceByWildcard('SourceFiles/*.pas');
$moss->addBaseByWildcard('BaseFiles/*.pas');
}
if($data['language'] == "modula2"){
$moss->addSourceByWildcard('SourceFiles/*.mod');
$moss->addBaseByWildcard('BaseFiles/*.mod');
}
if($data['language'] == "perl"){
$moss->addSourceByWildcard('SourceFiles/*.pl');
$moss->addBaseByWildcard('BaseFiles/*.pl');
}
if($data['language'] == "ada"){
$moss->addSourceByWildcard('SourceFiles/*.ada');
$moss->addBaseByWildcard('BaseFiles/*.ada');
}
if($data['language'] == "tcl"){
$moss->addSourceByWildcard('SourceFiles/*.TCL');
$moss->addBaseByWildcard('BaseFiles/*.TCL');
}
if($data['language'] == "mathlab"){
$moss->addSourceByWildcard('SourceFiles/*.M');
$moss->addBaseByWildcard('BaseFiles/*.M');
}
if($data['language'] == "vhdl"){
$moss->addSourceByWildcard('SourceFiles/*.VHDL');
$moss->addBaseByWildcard('BaseFiles/*.VHDL');
}
if($data['language'] == "verilog"){
$moss->addSourceByWildcard('SourceFiles/*.V');
$moss->addBaseByWildcard('BaseFiles/*.V');
}
if($data['language'] == "spice"){
$moss->addSourceByWildcard('SourceFiles/*.sp');
$moss->addBaseByWildcard('BaseFiles/*.sp');
}
if($data['language'] == "hcl2"){
$moss->addSourceByWildcard('SourceFiles/*.hcl');
$moss->addBaseByWildcard('BaseFiles/*.hcl');
}




$moss->setCommentString($data['comment']);
$moss->setIngoreLimit((int)$data['thresh']);
$moss->setResultLimit((int)$data['match']);
if($data['dirMode'] == "on"){
$moss->setDirectoryMode(true);
}
if($data[''] == "on"){
$moss->setExperimentalServer(true);
}
print_r($moss->send());
shell_exec('php cleanup.php');
?>

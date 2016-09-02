<?php 
header('Content-Type: application/json');
require_once('../src/flipvariable.php');

use Rohmanhm\FlipVariable;

if (isset($_GET['a']) && isset($_GET['b']) ) {

	$a = $_GET['a'];
	$b = $_GET['b'];
	$result = FlipVariable::anyType($a,$b);

	echo json_encode($result);
}


 ?>
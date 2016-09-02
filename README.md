# FLIP VARIABLE WITHOUT THIRD VARIABLE

## How to run test

In your directory, open terminal and open

`php  -S localhost:8000 -t test`

Open in your browser `http://localhost:8000`

## How to use

You can use like that:

```php
<?php
	require_once('../src/flipvariable.php');
	
	use Rohmanhm\FlipVariable;
	$a = 3;
	$b = 1;
	$c = FlipVariable::anyType($a,$b); // For any type of variable
	$d = FlipVariable::justNumber($a,$b); // For integer type of variable

	echo $c; // Output ['1', '3']
	echo $d; // Output ['1', '3']
?>
```
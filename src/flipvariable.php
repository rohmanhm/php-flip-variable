<?php 

/*==============================================
|				FLIP VARIABLE
*===============================================
*	Creator : Muhammad Habib Rohman
*	Email 	: mhrohman@live.com
*
*/
namespace Rohmanhm;

class FlipVariable
{

	/**
	 * This way is work for string type
	 */
	static function anyType($a, $b)
	{
		return [$b, $a];
	}

	/**
	 * Just work for integer
	 */
	static function justNumber($a, $b)
	{
		// Check if variable is not an integer
		if (gettype($a) != 'integer' && gettype($b) != 'integer') {
			return false;
		}

		$a = $a + $b; // 1 + 3 = 4
		$b = $a - $b; // 4 - 3 = 1
		$a = $a - $b; // 4 - 1 = 3
		
		return [$a, $b];
	}

}

 ?>
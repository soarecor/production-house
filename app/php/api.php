
	<?php

		$db = new PDO('mysql:host=localhost:8889;dbname=cakes;charset=utf8', 'root', 'root');
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

		// var_dump( $db );

		try {
			$query = $db->query( "SELECT * FROM `cakes`");
			$result = $query->fetchAll();
			echo json_encode( $result );
			//echo "<br>Done";
		} catch(PDOException $ex) {
			echo "An Error occured! <br>";
			echo $ex->getMessage();
		}
	?>

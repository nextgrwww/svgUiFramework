<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Simple SVG Form</title>
	<style>
		[element_type=submit]{
			cursor: pointer;
		}
	</style>
</head>
<body>
	<?php // include("form_1200_plain.svg"); ?>
	<script src="functions.js"></script>
	<?php include("testform_1200.svg"); ?>
	<?php include("testform_992.svg"); ?>
	<?php include("testform_768.svg"); ?>
	<?php include("testform_576.svg"); ?>
	<script>
		formToSvg("testform1200");
		// validateNSubmit("testform1200");
	</script>
	<?php var_dump($_POST); ?>
</body>
</html>
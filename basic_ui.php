<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Simple SVG Form</title>
</head>
<body>
	<?php // include("form_1200_plain.svg"); ?>
	<?php var_dump($_POST); ?>
	<svg>
		<foreignObject x="10" y="10" width="800" height="900">
			<form method="post" action="">
				<svg>
					<foreignObject x="10" y="10" width="600px" height="50px">
						<input type="text" name="test_input" style="width: 100%; height: 100%;" />
					</foreignObject>
					<foreignObject x="10" y="120" width="600px" height="50px">
						<button type="submit" style="width: 100%; height: 100%;"> Submit Form </button>
					</foreignObject>
				</svg>
			</form>
		<foreignObject>
	</svg>
</body>
</html>
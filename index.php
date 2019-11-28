<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
	<style>
		body {
			background-color: #100E17 !important;
			font-family: 'Open Sans', sans-serif;
		}
		.container {
			display: flex;
		}
		.card {
			display: flex;
			height: 280px;
			width: 200px;
			background-color: #17141D !important;
			border-radius: 10px;
			box-shadow: -1rem 0 3rem #000;
			transition: 0.4s ease-out;
			position: relative;
			left: 0;
		}
		.card:not(:first-child) {
			margin-left: -50px;
		}
		.card:hover {
			transform: translateY(-20px);
			transition: 0.4s ease-out;
		}
		.card:hover ~ .card {
			position: relative;
			left: 50px;
			transition: 0.4s ease-out;
		}
		.title {
			color: white;
			font-weight: 300;
			position: absolute;
			left: 20px;
			top: 15px;
		}
		.bar {
			position: absolute;
			top: 100px;
			left: 20px;
			height: 5px;
			width: 150px;
		}
		.emptybar {
			background-color: #2E3033 !important;
			width: 100%;
			height: 100%;
		}
		.filledbar {
			position: absolute;
			top: 0px;
			z-index: 3;
			width: 0px;
			height: 100%;
			background: rgb(0, 154, 217) !important;
			background: linear-gradient(90deg, rgba(0, 154, 217, 1) 0%, rgba(217, 147, 0, 1) 65%, rgba(255, 186, 0, 1) 100%) !important;
			transition: 0.6s ease-out;
		}
		.card:hover .filledbar {
			width: 120px;
			transition: 0.4s ease-out;
		}
		.circle {
			position: absolute;
			top: 150px;
			left: calc(50% - 60px);
		}
		.stroke {
			stroke: white;
			stroke-dasharray: 360;
			stroke-dashoffset: 360;
			transition: 0.6s ease-out
		}
		.svg {
			fill: #17141D !important;
			stroke-width: 2px;
		}
		.card:hover .stroke {
			stroke-dashoffset: 100;
			transition: 0.6s ease-out;
		}
	</style>
	<link rel="stylesheet" href="http://localhost/bootstrap.css">
</head>
<body>

	<div class="container" style="margin-top: 40px">
		<div class="row">
			<?php 
				$no = 1;
				$a = glob("./*", GLOB_ONLYDIR); // Has only Folder
				foreach ($a as $file) {
			?>

					<a href="<?= basename($file) ?>">
						<div class="card">
							<h5 class="title"><?= $no++ ?>. <?= basename($file) ?></h5>
							<div class="bar">
								<div class="emptybar"></div>
								<div class="filledbar"></div>
							</div>
							<div class="circle">
								<svg version="1.1" xmlns="htt[://www.w3.org/2000/svg">
									<circle class="stroke" cx="60" cy="60" r="50"/>
								</svg>
							</div>
						</div>
					</a>

			<?php
				}
			 ?>
		</div>
	</div>

	<script src="http://localhost/jquery-3.3.1.min.js"></script>
	<script src="http://localhost/bootstrap.min.js"></script>
</body>
</html>

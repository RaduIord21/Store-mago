<?php

global $sqlInstance;
include 'config.php';


$product = $sqlInstance->getObjectList("SELECT * FROM product");

echo json_encode($product);


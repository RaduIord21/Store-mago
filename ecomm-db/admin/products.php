<?php

global $sqlInstance;
include '../config.php';


$sqlInstance->insertData('product',[
    'description' => $_POST['description'],
    'name' => $_POST['name'],
    'image_url' => $_POST['image_url'],
    'price' => $_POST['price']
]);

echo json_encode('ok');


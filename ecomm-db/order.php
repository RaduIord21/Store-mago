<?php

global $sqlInstance;
include 'config.php';

$data = getRequestData();

$existingClient = getOrCreateUser($data['email']);

$sqlInstance->insertData('order',[
    'owner' => $existingClient['id'],
    'total' => 0
]);
$orderId = $sqlInstance->getLastInsertId();

$items = [];
$orderTotal = 0;
foreach ($data['items'] as $itemData) {

    $product = $sqlInstance->getArray('SELECT * FROM product WHERE id=:id', [
        'id' => $itemData['id']
    ]);

    if (!empty($product)) {
        $sqlInstance->insertData('order_item',[
            'order' => $orderId,
            'name' => $product['name'],
            'count' => $itemData['count'],
            'price' => $product['price']
        ]);
        $orderTotal += $product['price'] * $itemData['count'];
    }
}

$sqlInstance->updateData('order', ['total' => $orderTotal], 'id=?', [$orderId]);

function getOrCreateUser($email) {
    global $sqlInstance;
    $user = $sqlInstance->getArray('SELECT * FROM user WHERE email=:email', [
        'email' => $email
    ]);

    if (empty($user)) {
        $sqlInstance->insertData('user',[
            'email' => $email,
            'password' => getRandomPass()
        ]);

        $user = $sqlInstance->getArray('SELECT * FROM user WHERE email=:email', [
            'email' => $email
        ]);
    }
    return $user;
}


function getRandomPass() {
    $pass = '';
    $str = ['0','1','2','3','4','5','6','7','8','9','1','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
    for ($i = 0; $i < 6; $i++) {
        shuffle($str);
        $pass .= $str[0];
    }

    return $pass;
}

function getRequestData() {
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_SERVER["CONTENT_TYPE"]) && $_SERVER["CONTENT_TYPE"] === "application/json") {
        $jsonData = file_get_contents("php://input");
    
        $data = json_decode($jsonData, true);
    
        if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
            http_response_code(400); // Bad Request
            echo json_encode(["error" => "Invalid JSON data"]);
        }else {
            return $data;
        }
    
    } else {
        http_response_code(405); // Method Not Allowed
        echo json_encode(["error" => "Invalid request method"]);
    }
    exit();
}

echo json_encode($sqlInstance->getArray("SELECT * FROM `order` WHERE id=?", [$orderId]));


<?php

global $sqlInstance;
include '../config.php';

if (empty($_SESSION['loggedin'])) {
    header('Location: login.html');
    exit();
}

$products = $sqlInstance->getObjectList("SELECT * FROM product WHERE id=:id",[
    'id' => $_GET['id']
]);

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    if(empty($products)) {
        $sqlInstance->insertData('product',[
            'name' => $_POST['name'],
            'description' => $_POST['description'],
            'price' => $_POST['price'],
            'stock' => $_POST['stock'],
            'image_url' => $_POST['image_url']
        ]);
    }else {
        $sqlInstance->updateData('product',[
            'name' => $_POST['name'],
            'description' => $_POST['description'],
            'price' => $_POST['price'],
            'stock' => $_POST['stock'],
            'image_url' => $_POST['image_url']
        ], 'id=?', [$_GET['id']]);

    }

    header('Location: dashboard.php');
    exit();
} 

if(empty($products)) {
    $product = new stdClass();
    $product->name = '';
    $product->description = '';
    $product->stock = 0;
    $product->price = 0;
    $product->image_url = '';
} else {
    $product = $products[0];
}

?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produse</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        img {
            max-width: 100px;
            max-height: 100px;
            border-radius: 5px;
        }
    </style>
</head>
<body>

<h1>Product edit</h1>
<form method="POST" action="product-edit.php?id=<?php echo $_GET['id'];?>">
<table>
    <thead>
        <tr>
            <th>Imagine</th>
            <th>Nume</th>
            <th>Descriere</th>
            <th>Price (RON)</th>
            <th>Stoc</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        
        <tr>
            <td><input type="text" name="image_url" value="<?php echo $product->image_url;?>" /></td>
            <td><input type="text" name="name" value="<?php echo $product->name;?>"/></td>
            <td><input type="text" name="description"  value="<?php echo $product->description;?>"/></td>
            <td><input type="text" name="price"  value="<?php echo $product->price;?>"/></td>
            <td><input type="text" name="stock"  value="<?php echo $product->stock;?>"/></td>
            <td><input type="submit" value="Submit"/></td>
        </tr>
    </tbody>
</table>
    </form>
</body>
</html>




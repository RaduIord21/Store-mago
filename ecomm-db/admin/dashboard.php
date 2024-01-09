<?php

global $sqlInstance;
include '../config.php';

if (empty($_SESSION['loggedin'])) {
    header('Location: login.html');
    exit();
}


$products = $sqlInstance->getObjectList("SELECT * FROM product");

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

<h1>Produse</h1>

<a href="product-edit.php?id=-1">Add new</a>
<a href="logout.php" style="float:right">logout</a>
<br />
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
        <?php foreach($products as $product) { ?>
        <tr>
            <td><img src="<?php echo $product->image_url; ?>" alt=""></td>
            <td><?php echo $product->name; ?></td>
            <td><?php echo $product->description; ?></td>
            <td><?php echo $product->price; ?></td>
            <td><?php echo $product->stock; ?></td>
            <td><a href="product-edit.php?id=<?php echo $product->id;?>">edit</a></td>
        </tr>
        <?php } ?>
    </tbody>
</table>

</body>
</html>




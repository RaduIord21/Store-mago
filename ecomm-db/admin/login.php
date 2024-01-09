<?php

global $sqlInstance;
include '../config.php';


$user = $sqlInstance->getObjectList("SELECT * FROM user WHERE email=:email", [
    'email' => $_POST['email']
]);

if (!empty($user) && $user[0]->password == $_POST['password']) {
    $_SESSION['loggedin'] = 1;
} else {
    $title = 'Eroare';
    $message = 'No such user or invalid password. <a href="login.html">continue</a>';
    include 'message.php';
    exit();
}

header('Location: dashboard.php');


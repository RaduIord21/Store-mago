<?php

global $sqlInstance;
include '../config.php';


$_SESSION['loggedin'] = 0;
header('Location: login.html');


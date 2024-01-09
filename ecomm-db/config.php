<?php

    ini_set( 'display_errors', TRUE );
    error_reporting( E_ALL );

    define('DB_HOST','127.0.0.1');
    define('DB_NAME','ecomm');
    define('DB_USER','root');
    define('DB_PASS','italia');
    define('DB_PORT',3306);

    session_start();

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
    header("Access-Control-Expose-Headers: Content-Length, X-JSON");

    

    if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
        exit();
    }

    require_once('class.MySqlPDO.php');

    try {

        $sqlInstance = MySqlPDO::getInstance();
        $sqlInstance->connect(DB_NAME,DB_USER,DB_PASS,DB_HOST,DB_PORT);

    } catch (Exception $ex) {

        echo 'Failed to connect to database';
        exit();
    }

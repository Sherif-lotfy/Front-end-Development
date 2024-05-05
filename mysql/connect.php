<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $dbname = "nashwa";
    

    $connectdb = mysqli_connect($host , $user , $password , $dbname);
    if($connectdb){
        echo "connected";
    }

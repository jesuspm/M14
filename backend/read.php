<?php
    include "config.php";

    $response = array();

    $sqll = "SELECT * FROM `formulario`";

    if($sql = mysql_query($con, $sqll));{
        while($row = mysqli_fetch_object($sql)){
            $response[] = $row;
        }   
    }
    echo json_encode($response);
    
?>
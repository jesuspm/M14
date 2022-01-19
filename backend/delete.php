<?php
    include "config.php";
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $response = array();

    $id = $data["id"];
    
    $consultaSQL = "DELETE FROM `formulario` WHERE `id`=$id";

    $sql = mysqli_query($con, $consultaSQL);
    if($sql){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }
    echo json_encode($response);
?>

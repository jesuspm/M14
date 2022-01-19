<?php
    include "config.php";
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $response = array();

    $titulo = $data["titulo"];
    $genero = $data["genero"];
    $temporadas = $data["temporadas"];

    $consultaSQL = "INSERT INTO `formulario`(`titulo_serie`, `genero`, `temporada`) VALUES ('$titulo','$genero',$temporadas)";

    $sql = mysqli_query($con, $consultaSQL);
    if($sql){
        $response["message"] = "OK";
    }else{
        $response["message"] = "KO";
    }
    echo json_encode($response);
?>

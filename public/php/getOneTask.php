<?php

include_once "./data.php";

try {
    $pdo = new PDO("mysql:host={$server}; dbname={$dabaBase}", $user, $pass);

    //Preparacion
    $sql = "SELECT * FROM crud WHERE id=(?)";
    $sentencia = $pdo->prepare($sql);

    //Obtenemos las varaibles
    $id = json_decode(file_get_contents("php://input"), true)["id"];

    //Ejecutar Sentencia
    $sentencia->execute([
        $id
    ]);

    $data = $sentencia->fetchAll();

    //Mandamos los datos de SQL a JS
    echo json_encode($data);
} catch (PDOException $e) {
    echo json_encode($e);
} finally {
    $pdo = null;   //Cerramos el flujo de datos
}

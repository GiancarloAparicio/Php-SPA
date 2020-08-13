<?php

include_once "./data.php";

try {
    $pdo = new PDO("mysql:host={$server}; dbname={$dabaBase}", $user, $pass);

    //Preparacion
    $sql = "SELECT * FROM crud WHERE title LIKE ?";
    $sentencia = $pdo->prepare($sql);

    //Obtenemos la variable
    $search = $_POST["search"];

    //Ejecutar Sentencia
    $sentencia->execute([
        "{$search}%"
    ]);

    //Array
    $data = $sentencia->fetchAll();

    //Mandamos los datos de SQL a JS
    echo json_encode($data);
} catch (PDOException $e) {
    echo json_encode($e);
} finally {
    $pdo = null;   //Cerramos el flujo de datos
}

<?php

//Variables de Usuario
$server="127.0.0.1";
$dabaBase="php";
$user="User";
$pass="0000";

try{
    $pdo= new PDO(  "mysql:host={$server}; dbname={$dabaBase}",$user, $pass );
    
    //Preparacion
    $sql="SELECT * FROM crud"; 
    $sentencia= $pdo->prepare( $sql );

    
    //Ejecutar Sentencia
    $sentencia->execute();
    $data=$sentencia->fetchAll();

    //Mandamos los datos de SQL a JS
    echo json_encode($data);

    }catch(PDOException $e){
        echo json_encode($e);
    }finally{
        $pdo=null;   //Cerramos el flujo de datos
    }
?>
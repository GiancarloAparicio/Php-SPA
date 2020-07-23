<?php

include_once "./data.php";

try{

    $pdo= new PDO(  "mysql:host={$server}; dbname={$dabaBase}",$user, $pass );
    
    //Preparacion sentencia SQL
    $sql="DELETE FROM crud WHERE id=(?)"; 
    $sentencia= $pdo->prepare($sql);

    //Obtenemos los datos enviado desde JS
    $id = json_decode(file_get_contents("php://input"), true)["id"];

    //Ejecutar Sentencia
    $band=$sentencia->execute([
    $id
    ]);

    //Enviamos un mensaje si la sentencia se ejecuto con exito o no
    if($band){
        $res=[
            "message"=>"Task successfully removed",
            "message_type"=> "warning",
            "element"=> "#alert"
        ];
    }else{
        $res=[
            "message"=>"Failed to delete task",
            "message_type"=> "danger",
            "element"=> "#alert"
        ];

    }

   echo json_encode($res);
   
}catch(PDOException $e){
    echo json_encode("Error");
}finally{
    $pdo=null;   //Cerramos el flujo de datos
}

?>
<?php

include_once "./data.php";


try{

    $pdo= new PDO(  "mysql:host={$server}; dbname={$dabaBase}",$user, $pass );

    
    //Preparacion sentencia SQL
    $sql="UPDATE crud SET title=(?),description=(?) WHERE id=(?)"; 
    $sentencia= $pdo->prepare($sql);

    //Obtenemos los datos enviado desde JS
    $title= json_decode(file_get_contents("php://input"), true)["title"];
    $description= json_decode(file_get_contents("php://input"), true)["description"];
    $id = json_decode(file_get_contents("php://input"), true)["id"];

    //Ejecutar Sentencia
    $band=$sentencia->execute([
        $title,
        $description,
        $id
    ]);

    //Enviamos un mensaje si la sentencia se ejecuto con exito o no
    if($band){
        $res=[
            "message"=>"Task updated successfully",
            "message_type"=> "info",
            "element"=> "#alert"
        ];
    }else{
        $res=[
            "message"=>"Failed to updated task",
            "message_type"=> "danger",
            "element"=> "#alert"
        ];

    }

   echo json_encode($res);

   
}catch(PDOException $res){
    echo json_encode("Error");
}finally{
    $pdo=null;   //Cerramos el flujo de datos
}

?>
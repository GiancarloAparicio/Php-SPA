<?php


//Variables de Usuario
$server="127.0.0.1";
$dabaBase="php";
$user="User";
$pass="0000";


try{
    $pdo= new PDO(  "mysql:host={$server}; dbname={$dabaBase}",$user, $pass );
    
    //Preparacion
    $sql="INSERT INTO crud(title,description) values (?,?)"; 
    $sentencia= $pdo->prepare( $sql );

    //Obtenemos variables
    $task=$_POST["title"];
    $description=$_POST["description"];
    
   
    //Ejecutar Sentencia
    $band=$sentencia->execute([
     $task,
     $description
    ]);

    //Enviamos un mensaje si la sentencia se ejcuto con exito
    if($band){
        $res=[
            "message"=>"Task save successfully",
            "message_type"=> "success",
            "element"=> "#alert"
        ];
    }else{
        $res=[
            "message"=>"Failed to saving task",
            "message_type"=> "danger",
            "element"=> "#alert"
        ];

    }

    echo json_encode($res);

    }catch(PDOException $e){
        echo json_encode($e);
    }finally{
        $pdo=null;   //Cerramos el flujo de datos
    }
?>
import renderStatus from "../includes/renderStatus";
import readTask from "./readTask";

//No eliminar
import { async } from "../generatorRunTime";



const createTask = () => {

    //Formulario con los datos de la tarea
    let $save_task = document.querySelector("#save_task");

    $save_task.addEventListener("submit", async(e) => {

        //Preparamos los datos del Formulario para enviarlo
        let data = new FormData($save_task);
        e.preventDefault();


        //Enviamos los datos
        let options = {
            method: "POST",
            body: data
        };

        let res = await fetch("./php/saveTask.php", options);
        let respuesta = await res.json();


        //Renderisamos el Mensaje de la peticion
        renderStatus(respuesta);

        //Actualizamos la tabla
        await readTask();

        //Reseteamos el formulario
        $save_task.reset();



    });

}

export default createTask;
import renderStatus from "../includes/renderStatus";
import readTask from "./readTask";

//No eliminar
import { async } from "../generatorRunTime";


const deleteTask = () => {

    let $buttonDelete = document.querySelectorAll(".deleteButton");


    //Le damos un evento a todo los botones de elimnar
    $buttonDelete.forEach(element => {
        element.addEventListener("click", async(e) => {

            let data = {
                id: element.attributes.key.nodeValue
            };

            //Enviamos el ID a elimnar al backend
            let options = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            let res = await fetch("./php/deleteTask.php", options);
            let respuesta = await res.json();

            //Renderisamos el Mensaje de la peticion
            renderStatus(respuesta);

            //Actualizamos las tablas
            readTask();
        })
    });

};

export default deleteTask;
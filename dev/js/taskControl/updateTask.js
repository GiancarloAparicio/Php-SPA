import renderStatus from "../includes/renderStatus";
import readTask from "./readTask";

//No eliminar
import { async } from "../generatorRunTime";


const updateTask = () => {
    let $editButton = document.querySelectorAll(".editButton");

    //Pedimos datos a SQL para poder mostrarlos
    $editButton.forEach(element => {

        element.addEventListener("click", async() => {

            let data = {
                id: element.attributes.key.nodeValue
            };


            //Guardamos el id de la tarea
            localStorage.setItem("id", data.id);

            let options = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            //Enviamos el ID a actualizar al backend
            let res = await fetch("./php/getOneTask.php", options);
            let respuesta = await res.json();

            //Mostramos la respuesta para poder actualizarla
            document.querySelector("#updateTitle").value = respuesta[0].title;
            document.querySelector("#updateDescription").value = respuesta[0].description;

        });
    })
}


export const getOneTask = () => {
    let $form = document.querySelector("#update_task");

    $form.addEventListener("submit", async(e) => {
        e.preventDefault();

        //Preparamos los datos del Formulario para enviarlo
        let data = {
            title: document.querySelector("#updateTitle").value,
            description: document.querySelector("#updateDescription").value,
            id: localStorage.getItem("id")
        };

        let options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let $title = document.querySelector("#updateTitle");
        let $description = document.querySelector("#updateDescription");


        if (validate($title) && validate($description)) {
            //Enviamos los datos
            let res = await fetch("./php/updateTask.php", options);
            let respuesta = await res.json();

            //Reiniciamos el formulario
            $form.reset();

            //Mostramos el mensaje
            renderStatus(respuesta);

            //Actualizamos la tabla
            readTask();

            //Redirecionamos a Home
            window.location.hash = "#home";
        }

    })
}

export const validate = (element) => {

    if (element.value === "" || element.value === null) {
        (element.classList.contains("is-invalid")) ?
        "" : element.classList.toggle("is-invalid");
        return false

    } else {
        (element.classList.contains("is-invalid")) ?
        element.classList.toggle("is-invalid"): "";

        return true;
    }

}

export default updateTask;
import updateTask from "../taskControl/updateTask";
import renderStatus from "../includes/renderStatus";

const getOneTask = () => {
    let $form = document.querySelector("#update_task");

    $form.addEventListener("submit", async(e) => {
        e.preventDefault();

        //Preparamos los datos del Formulario para enviarlo
        let data = {
            title: document.querySelector("#updateTitle").value,
            description: document.querySelector("#updateDescription").value,
            id: updateTask()
        };

        let options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };


        //Enviamos los datos
        let res = await fetch("./php/updateTask.php", options);
        let respuesta = await res.json();

        //Reiniciamos el formulario
        $form.reset();

        //Mostramos el mensaje
        renderStatus(respuesta);

        //Redirecionamos a Home
        window.location.hash = "#home";

    })
}

export default getOneTask;
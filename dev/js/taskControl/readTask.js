import deleteTask from "./deleteTask";
import updateTask from "./updateTask";

//Importante no eliminar
import { async } from "../generatorRunTime";


const readTask = async() => {
    let options = {
        method: "GET"
    };

    let res = await fetch("./php/getTable.php", options);
    let data = await res.json();

    renderTask(data, "#table");
    renderTask(data, "#modal");

};


export const renderTask = (props, element) => {
    let $tableTask = document.querySelector(element);

    //Reinicia la tabla para actualizarlas
    $tableTask.innerHTML = "";

    //Cuerpo de la tabla
    if (props.length) {
        props.forEach(element => {
            $tableTask.innerHTML += `
            <tr>
                <td class="text-wrap">${element.id}</td>
                <td class="text-wrap">${element.title}</td>
                <td class="text-wrap">${element.description}</td>
                <td>
                    <a class="mx-auto btn btn-secondary editButton" 
                       key="${element.id}" 
                       href="#updateTask">
                        <i> ${icons.edit} </i>
                    </a>
                
                    <button class="mx-auto btn btn-danger deleteButton"  key="${element.id}">
                        <i> ${icons.delete} </i>
                    </button>
                </td>
            </tr>
            `;
        });

    } else {
        $tableTask.innerHTML = `
        <tr>
            <td colspan="4" class="text-center">
            Empty to do list
            </td>
        </tr>
        `;
    }
    //Añadimos la funcionalidad de eliminar
    deleteTask();
    //Añadimos la funcionalidad de actualizar
    updateTask();

}

let icons = {
    edit: `
        <svg class="bi bi-bookmark-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.5 2a.5.5 0 0 0-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 0 1 1 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 0 1 4.5 1h4a.5.5 0 0 1 0 1h-4zm9-1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V1.5a.5.5 0 0 1 .5-.5z"/>
        <path fill-rule="evenodd" d="M13 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
        </svg>
    `,
    delete: `
        <svg class="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
        </svg>
    `
}




export default readTask;
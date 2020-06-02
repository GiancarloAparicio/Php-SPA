import createTask from "./taskControl/createTask";
import readTask from "./taskControl/readTask";
import { getOneTask } from "./taskControl/updateTask"
import searchTask from "./includes/searchTask";

import router from "./router";

//No eliminar
import { async } from "./generatorRunTime";


//Iniciamos la ejecucion del programa
const start = async() => {
    router();

    createTask();
    await readTask();
}

getOneTask();
searchTask();
start();
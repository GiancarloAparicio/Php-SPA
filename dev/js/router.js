//Evento Router
const router = () => {
    window.location.hash = "#home";
    window.addEventListener("hashchange", (e) => {
        hashchange(window.location.hash);
    });
}

//Manejar el evento del router
const hashchange = (props) => {
    let $home = document.querySelector("#home");
    let $uptadeTask = document.querySelector("#updateTask");
    let $notFound = document.querySelector("#notFound");
    //Para manipular el modal cuando redirecione a update
    let $body = document.querySelector("body");

    switch (props) {
        case ("#home"):
            {
                ($home.classList.contains("d-none")) ?
                $home.classList.toggle("d-none") : "";

                ($uptadeTask.classList.contains("d-none")) ?
                "" : $uptadeTask.classList.toggle("d-none");

                ($notFound.classList.contains("d-none")) ?
                "" : $notFound.classList.toggle("d-none");

                break;
            }
        case ("#updateTask"):
            {
                ($home.classList.contains("d-none")) ?
                "" : $home.classList.toggle("d-none");

                ($uptadeTask.classList.contains("d-none")) ?
                $uptadeTask.classList.toggle("d-none") : "";

                ($notFound.classList.contains("d-none")) ?
                "" : $notFound.classList.toggle("d-none");

                ($body.classList.contains(".modal-open")) ?
                "" : document.querySelector("#modal-close").click();
                break;
            }
        default:
            {
                ($home.classList.contains("d-none")) ?
                "" : $home.classList.toggle("d-none");

                ($uptadeTask.classList.contains("d-none")) ?
                "" : $uptadeTask.classList.toggle("d-none");

                ($notFound.classList.contains("d-none")) ?
                $notFound.classList.toggle("d-none") : "";
            }
    }
}

export default router;
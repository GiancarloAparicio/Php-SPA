const renderStatus = (props) => {

    //Obtenemos el elemento  donde se renderizara el Mensaje
    let $message = document.querySelector(props.element);

    //Cuerpo del mensaje
    $message.innerHTML = `
    <div class="alert alert-${props.message_type} mt-4" role="alert">
        <strong>${props.message}</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    `;

}

export default renderStatus;
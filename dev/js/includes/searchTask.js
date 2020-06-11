import {renderTask} from '../taskControl/readTask';

//No eliminar
import {async} from '../generatorRunTime';

const searchTask = () => {
	let $search = document.querySelector('#searchTask');
	let $close = document.querySelector('#modal-close');
	$close.addEventListener('click', () => {
		$search.reset();
	});

	$search.addEventListener('submit', async (e) => {
		//Preparamos los datos del Formulario para enviarlo
		let data = new FormData($search);
		e.preventDefault();

		if (data.get('search')) {
			//Enviamos los datos
			let options = {
				method: 'POST',
				body: data,
			};

			let res = await fetch('./php/searchTask.php', options);
			let respuesta = await res.json();

			//Renderizamos el resultado en el modal
			renderTask(respuesta, '#modal');
		} else {
			renderTask({}, '#modal');
		}
	});
};

export default searchTask;

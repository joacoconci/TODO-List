/* eslint-disable react/prop-types */
const Tareas = ({ setTareas, tareas, tarea, setTarea, eliminarTarea }) => {
	const { titulo, fechaAlta, descripcion, estado, id, fechaCompletada } = tarea;

	const editar = () => {
		setTarea(tarea);
	};
	const getDate = () => {
		const today = new Date();
		const month = today.getMonth() + 1;
		const year = today.getFullYear();
		const date = today.getDate();
		return `${date}/${month}/${year}`;
	};

	const handleEliminar = () => {
		let aliminar = confirm(`Desea eliminar la tarea: ${titulo}`);

		if (aliminar === true) {
			alert(`Tarea ${titulo} eliminada`);
			eliminarTarea(id);
		}
	};

	const objetoTarea = {
		titulo,
		descripcion,
		id,
		fechaAlta,
	};
	const handleCompletar = () => {
		if (id) {
			objetoTarea.estado = true;
			objetoTarea.fechaCompletada = getDate();
			const tareaCompletada = tareas.map((tareaState) =>
				tareaState.id === tarea.id ? objetoTarea : tareaState
			);
			setTareas(tareaCompletada);
			setTarea({});
		}
	};

	const handleIncompleta = () => {
		if (id) {
			objetoTarea.estado = false;
			objetoTarea.fechaCompletada = "";

			const tareaIncompleta = tareas.map((tareaState) =>
				tareaState.id === tarea.id ? objetoTarea : tareaState
			);
			setTareas(tareaIncompleta);
			setTarea({});
		}
	};
	return (
		<div className="mx-5 my-10 grid gap-5 bg-white shadow-md  px-5 py-10 rounded-lg">
			<p className="font-bold  text-gray-700 uppercase  ">
				Tarea: {""}
				<span className="font-normal normal-case">{titulo}</span>
			</p>

			<p className=" font-bold text-gray-700 uppercase ">
				Fecha Alta: {""}
				<span className="font-normal normal-case">{fechaAlta}</span>
			</p>

			<p className="font-bold text-gray-700 uppercase ">
				Descripcion: {""}
				<span className="font-normal normal-case">{descripcion}</span>
			</p>

			{estado ? (
				<>
					<p className="font-bold text-gray-700 uppercase ">
						Fecha Completada: {""}
						<span className="font-normal normal-case">{fechaCompletada}</span>
					</p>
				</>
			) : (
				""
			)}

			<p className="font-bold text-gray-700 uppercase ">
				Estado: {""}
				{estado ? (
					<>
						<span className="font-normal normal-case">Completa</span>
					</>
				) : (
					<span className="font-normal normal-case">Incompleta</span>
				)}
			</p>

			<div className="grid md:flex gap-2 mt-3">
				<button
					onClick={editar}
					type="button"
					className="  py-2 px-6 font-bold uppercase text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-center  ">
					Editar
				</button>
				<button
					onClick={handleEliminar}
					type="button"
					className="py-2 px-6 font-bold uppercase text-white bg-red-600  hover:bg-red-700 rounded-md text-center">
					Eliminar
				</button>

				{estado ? (
					<>
						<button
							onClick={handleIncompleta}
							type="button"
							className="py-2 px-6 font-bold uppercase text-white bg-orange-600  hover:bg-orange-700 rounded-md text-center">
							Volver Incompleta
						</button>
					</>
				) : (
					<>
						<button
							onClick={handleCompletar}
							type="button"
							className="py-2 px-6 font-bold uppercase text-white bg-green-600  hover:bg-green-700 rounded-md text-center">
							Completar
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Tareas;

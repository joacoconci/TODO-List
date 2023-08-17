/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ tareas, setTareas, tarea, setTarea }) => {
	const [titulo, setTitulo] = useState("");
	// const [fecha, setFecha] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(tarea).length) {
			setTitulo(tarea.titulo);
			setDescripcion(tarea.descripcion);
		}
	}, [tarea]);

	const crearId = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	};

	const getDate = () => {
		const today = new Date();
		const month = today.getMonth() + 1;
		const year = today.getFullYear();
		const date = today.getDate();
		return `${date}/${month}/${year}`;
	};

	const registrarTarea = (e) => {
		e.preventDefault();
		if ([titulo, descripcion].includes("")) {
			return setError(true);
		}
		setError(false);

		const objetoTarea = {
			titulo,
			descripcion,
		};

		if (tarea.id) {
			objetoTarea.id = tarea.id;
			objetoTarea.fechaAlta = tarea.fechaAlta;
			objetoTarea.estado = tarea.estado;
			const tareaActualizada = tareas.map((tareaState) =>
				tareaState.id === tarea.id ? objetoTarea : tareaState
			);
			setTareas(tareaActualizada);
			setTarea({});
		} else {
			objetoTarea.id = crearId();
			objetoTarea.fechaAlta = getDate();
			objetoTarea.estado = false;
			setTareas([...tareas, objetoTarea]);
		}

		setTitulo("");
		setDescripcion("");
	};

	return (
		<div className="  md:w-1/2 lg:w-2/5 mx-3 ">
			<h2 className="font-black text-3xl text-center mb-5 underline  ">
				Agregar Tarea
			</h2>

			<form
				onSubmit={registrarTarea}
				className="grid gap-5 mb-10 bg-gray-300 shadow-md rounded-lg py-10 px-5">
				{error && (
					<Error>
						<p>Todos los campos son obligatiorios</p>
					</Error>
				)}
				<div>
					<label
						className=" block text-gray-700 font-bold uppercase"
						htmlFor="titulo">
						Tarea
					</label>
					<input
						id="titulo"
						type="text"
						value={titulo}
						onChange={(e) => setTitulo(e.target.value)}
						placeholder="Nombre de la tarea"
						className="text-center border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
					/>
				</div>

				<div>
					<label
						className=" block text-gray-700 font-bold uppercase"
						htmlFor="descripcion">
						Descripcion
					</label>
					<textarea
						value={descripcion}
						id="descripcion"
						type="text"
						onChange={(e) => setDescripcion(e.target.value)}
						placeholder="Describe la tarea"
						className="text-center border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
					/>
				</div>
				<input
					type="submit"
					className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer"
					value={tarea.id ? "Editar Tarea" : "Crear Tarea"}
				/>
			</form>
		</div>
	);
};

export default Formulario;

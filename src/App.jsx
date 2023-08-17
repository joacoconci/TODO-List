import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";
import { useState, useEffect } from "react";
function App() {
	const tareasLS = JSON.parse(localStorage.getItem("tareas")) ?? [];
	const [tareas, setTareas] = useState(tareasLS);
	const [tarea, setTarea] = useState({});

	useEffect(() => {
		localStorage.setItem("tareas", JSON.stringify(tareas));
	}, [tareas]);
	const eliminarTarea = (id) => {
		const tareaActualizada = tareas.filter((tarea) => tarea.id !== id);
		setTareas(tareaActualizada);
	};

	return (
		<div className=" container mx-auto  mt-5 ">
			<Header />
			<div className="gap-10 mt-12 md:flex">
				<Formulario
					tareas={tareas}
					setTareas={setTareas}
					tarea={tarea}
					setTarea={setTarea}
				/>
				<ListaTareas
					tareas={tareas}
					setTarea={setTarea}
					eliminarTarea={eliminarTarea}
					setTareas={setTareas}
				/>
			</div>
		</div>
	);
}

export default App;

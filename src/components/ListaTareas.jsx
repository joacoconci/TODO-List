/* eslint-disable react/prop-types */
import Tareas from "./Tareas";
const ListaTareas = ({ tareas, setTareas, setTarea, eliminarTarea }) => {
	return (
		<div className="md:w-1/2   lg:w-3/5 md:h-screen pb-10  md:overflow-y-scroll ">
			<h2 className="font-black text-3xl text-center mb-5 underline  ">
				Listado Tareas
			</h2>
			{tareas.map((tarea) => (
				<Tareas
					tarea={tarea}
					setTarea={setTarea}
					key={tarea.id}
					eliminarTarea={eliminarTarea}
					setTareas={setTareas}
					tareas={tareas}
				/>
			))}
		</div>
	);
};

export default ListaTareas;

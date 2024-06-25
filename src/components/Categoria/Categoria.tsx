import { useEffect, useState } from "react"
import { Task } from "../../types/Task"
import CategoriaSelector from "../CategoriaSelector/CategoriaSelector";
import CategoriaTareas from "../CategoriaTareas/CategoriaTareas";
import { TaskService } from "../../Services/TaskServices";

const Categoria = () => {
const [tasks, setTasks]=useState<Task[]>([]);
const [selectedCategory, setSelectedCategory]= useState<string>('');//estado para la categoria seleccionada

useEffect(()=>{
  const fetchTasks = async()=>{
    const taskData = await TaskService.getAllTasks();
    setTasks(taskData);
  };
  fetchTasks();
}, []);

//filtra las tareas por la categoria seleccionada
const filteredTasks = selectedCategory
? tasks.filter(task=> task.estado.toUpperCase()=== selectedCategory.toLocaleUpperCase())
: tasks;


  return (
    <div className="container mt-5">
       <CategoriaSelector onSelectedCategory={setSelectedCategory}/>{/* Pasa la funcion para manejar la seleccion de categoria */}
       <CategoriaTareas tasks={filteredTasks} selectedCategory={selectedCategory}/>{/* Pasa las tareas filtradas al componente CategoriasTareas */}

    </div>
  )
}

export default Categoria
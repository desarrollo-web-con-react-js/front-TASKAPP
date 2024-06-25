import { useEffect, useState } from "react";
import { TaskService } from "../Services/TaskServices";
import CarouselHome from "../components/CarouselHome/CarouselHome"
import CategoriaSelector from "../components/CategoriaSelector/CategoriaSelector"
import CategoriaTareas from "../components/CategoriaTareas/CategoriaTareas"
import { Task } from "../types/Task";

const LandingPage = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]); // Estado para almacenar tareas filtradas
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Estado para la categoría seleccionada
  
  useEffect (() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks (tasksData);
    };

    fetchTasks();
  }, []);
  // Efecto para filtrar las tareas cuando se selecciona una categoría
  useEffect (() => {
    if (selectedCategory) {
      const filtered = tasks.filter(task => task.estado.toUpperCase()=== selectedCategory.toUpperCase())
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks (tasks); // si no hay categoría seleccionada, mostrar todas las tareas
    }
  }, [selectedCategory, tasks]);

  return (
    <>
       <CarouselHome/>
       <CategoriaSelector onSelectedCategory={setSelectedCategory}/>
       <CategoriaTareas tasks={filteredTasks.length>0 ? filteredTasks : tasks} selectedCategory={selectedCategory}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

    </>
  )
}

export default LandingPage
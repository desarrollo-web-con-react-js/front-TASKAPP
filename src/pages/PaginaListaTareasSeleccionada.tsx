import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Task } from '../types/Task';
import { TaskService } from '../Services/TaskServices';


const PaginaListaTareasSeleccionada = () => {
  const { categoria } = useParams<{ categoria: string }>(); // Asegura que 'categoria' no sea undefined al Obtener el parámetro de ruta "categoria"
  const [tareas, setTareas] = useState<Task[]>([]);

 // Obtener las tareas correspondientes a la categoría seleccionada
 useEffect(() => {
    const obtenerTareasPorCategoria = async () => {
      try {
        if (categoria) {
          const tasks = await TaskService.getTasksInCategory(categoria);
          console.log("categoria");
          setTareas(tasks);
        }
      } catch (error) {
        console.error('Error al obtener tareas por categoría:', error);
      }
    };
  
    obtenerTareasPorCategoria();
  }, [categoria]); // categoría es la única dependencia necesaria en este caso

  if (!categoria) {
    return <div>Error: Categoría no especificada.</div>;
    console.log("categoria");
  }

  return (
   <section className="container-fluid mt-5" id="categorias" style={{ minHeight: '100vh'}}>
      <section className="text-center mb-5">

        <h3 className="display-6">{categoria && categoria.toUpperCase()}</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-4">
          { tareas.map(task => (
              //id
              <div className="col" key={task.id}>
                <div className="card h-100">
                  {/*imagen*/}
                  <img style={{minHeight:'300px', maxHeight:'300px',objectFit: 'cover', objectPosition: 'center',}} className="card-img-top img-fluid" src={task.imagen} alt={task.titulo}/>
                  <div className="card-body p-4">
                    <div className="text-center">

                      {/*body de la tarjeta */}
                      <h5 className="fw-bolder">{task.titulo}</h5>
                      <span>{`Tiempo:${task.tiempo}`} hs</span><br/>
                      <span>{`Responsable: ${task.responsable}`}</span>
                    </div>
                  </div>

                  {/*Boton de ver mas, que nos redirige al detalle de la tarea*/}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                    <div className="text-center d-flex gap-2 align-items-center justify-content-center">
                      <Link to={`/detalle/${task.id}`} className="btn btn-outline-primary mt-auto w-100">Ver más</Link>
                    </div>
                  </div>
                </div>

              </div>
            ))


          }

        </div>
        </section>
    
    </section>


  );
};

export default PaginaListaTareasSeleccionada;

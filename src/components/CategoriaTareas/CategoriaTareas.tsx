import { Task } from "../../types/Task";
import { Link } from "react-router-dom";


const CategoriaTareas = ({tasks}:{tasks:Task[]}) => {
  const categorias = ['POR HACER','EN PRODUCCIÓN','POR TESTEAR','COMPLETADA'];
  return (
    <section className="container-fluid mt-5" id="categorias">

      {categorias.map((categoria,index)=>(

        <section className="text-center mb-5" key={index}>

        <h3 className="display-6">{categoria}</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-4">
          { tasks.filter(tasks => tasks.estado.toUpperCase() === categoria.toUpperCase())//Filtra las tareas por categoria
            .map(task => (
              //id
              <div className="col" key={task.id}>
                <div className="card h-100">
                  {/*imagen*/}
                  <img style={{minHeight:'300px', maxHeight:'300px',objectFit: 'cover', objectPosition: 'center',}} className="card-img-top img-fluid" src={task.imagen} alt={task.titulo}/>
                  <div className="card-body p-4">
                    <div className="text-center">

                      {/*body de la tarjeta */}
                      <h5 className="fw-bolder">{task.titulo}</h5>
                      <span>{`Tiempo:${task.tiempo}`}</span><br/>
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
      ))}
    </section>
  )
}

export default CategoriaTareas
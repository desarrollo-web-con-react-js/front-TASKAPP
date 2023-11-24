import {BsBookmarkCheck, BsCheck, BsGear, BsPencilSquare} from 'react-icons/bs'

interface CategoriasSelectorProps{
  onSelectedCategory: (catergoria:string)=>void;
}
const CategoriaSelector: React.FC<CategoriasSelectorProps> = ({onSelectedCategory}) => {
const categorias=[
  {nombre:'POR HACER', icono:<BsCheck/>},
  {nombre:'EN PRODUCCIÓN', icono:<BsGear/>},
  {nombre:'POR TESTEAR', icono:<BsPencilSquare/>},
  {nombre:'COMPLETADA', icono:<BsBookmarkCheck/>},    
];

  return (
   <section className="container mt-3" id="selector-categorias">
   <p className="fs-3">Seleccione una categoria</p>
   <div className="row gap-4 justify-content-center">
    {categorias.map((categoria,index)=>(
      <div className="col-12 col-sm-6 col-md" key={index}>
        <button
          onClick={()=> onSelectedCategory(categoria.nombre)}
          className="border border-1 boreder-black d-flex gap-1 align-items-center rounded p-1 text-decoration-none justify-content-center w-100"
          style={{cursor:'pointer'}}
        >{categoria.icono} {categoria.nombre}</button>

      </div>
    ))}
   </div>

   </section>
  )
}

export default CategoriaSelector
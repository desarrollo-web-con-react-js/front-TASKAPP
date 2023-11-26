import { Navigate, Route, Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import DetalleTareaPage from "../pages/DetalleTareaPage"
import NotFoundPage from "../pages/NotFoundPage"
import PaginaListaTareasSeleccionada from "../pages/PaginaListaTareasSeleccionada"
import Login from "../pages/Login"


const AppRoutes: React.FC = () => {
  return (
    <Routes>
       
        <Route path="/" element={< LandingPage/>}/>
        <Route path="/detalle/:taskId" element={< DetalleTareaPage/>}/>

        <Route path="/tasks/:categoria" element={<PaginaListaTareasSeleccionada/>}/>

        <Route path="/login" element={<Login />} />

        <Route path="/404" element={<NotFoundPage/>} />
        <Route path="*" element={<Navigate to ="/404"/>} />
    </Routes>
  )
}

export default AppRoutes
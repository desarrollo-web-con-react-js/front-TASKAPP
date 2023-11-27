import { Navigate, Route, Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import DetalleTareaPage from "../pages/DetalleTareaPage"
import NotFoundPage from "../pages/NotFoundPage"
import PaginaListaTareasSeleccionada from "../pages/PaginaListaTareasSeleccionada"
import Login from "../pages/Login"
import NavBar from "../components/NavBar/NavBar"
import { useState } from "react"


const AppRoutes: React.FC = () => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
       
       <Route path="/" element={< LandingPage/>}/>
       <Route path="/detalle/:taskId" element={< DetalleTareaPage/>}/>

       <Route path="/tasks/:categoria" element={<PaginaListaTareasSeleccionada/>}/>

       <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />

       <Route path="/404" element={<NotFoundPage/>} />
       <Route path="*" element={<Navigate to ="/404"/>} />
   </Routes>
    </>
  
  )
}

export default AppRoutes
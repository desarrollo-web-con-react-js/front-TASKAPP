import { Navigate, Route, Routes } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import DetalleTareaPage from "../pages/DetalleTareaPage"
import NotFoundPage from "../pages/NotFoundPage"


const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={< LandingPage/>}/>
        <Route path="/detalle/:taskId" element={< DetalleTareaPage/>}/>
        <Route path="/404" element={<NotFoundPage/>} />
        <Route path="*" element={<Navigate to ="/404"/>} />
    </Routes>
  )
}

export default AppRoutes
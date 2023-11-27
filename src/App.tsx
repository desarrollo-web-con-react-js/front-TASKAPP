import Footer from "./components/Footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./routes/AppRoutes"
import {BrowserRouter as Router} from "react-router-dom"

//Notificaciones al usuario
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Router>
          <AppRoutes/>
          <Footer/>
    </Router>
        
    </>
  )
}

export default App
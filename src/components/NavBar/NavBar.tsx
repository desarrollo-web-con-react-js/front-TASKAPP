import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Task } from '../../types/Task';
import { TaskService } from '../../Services/TaskServices';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ModalAgregarTarea from '../ModalAgregarTarea/ModalAgregarTarea';

interface NavBarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ isLoggedIn, setIsLoggedIn }) => {

const navigate=useNavigate();
const [showModal, setShowModal]=useState(false);
const [selectedCategory, setSelectedCategory] = useState(""); // Nuevo estado para la categoría seleccionada

const handleShowModal= () =>{
  setShowModal(true);
};
const handleCloseModal = () =>{
   setShowModal(false);
};  

const handleLogout = () => {
  // Lógica de cierre de sesión aquí
  setIsLoggedIn(false);
  navigate('/login');
};


//Agregar nueva tarea
const createTask = async (newTask: Task) => {
try {
  const result = await TaskService.createTask(newTask);
  console.log('Nueva tarea agregada:', result.id);
  navigate(`/detalle/${result.id}`); //Ir al detalle de la tarea creada

  // Muestra una notificación de éxito utilizando react-toastify
  toast.success('Tarea creada correctamente', {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 2000, // Cerrar automáticamente después de 2 segundos
});
}catch (error){
    // Muestra una notificación de error si la creación de la tarea falla
    toast.error('Error al crear la tarea', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    console.error('Error al crear la tarea:', error);
  }
};

// Nueva función para manejar la selección de categoría
const handleCategorySelect = (categoria: string) => {
  setSelectedCategory(categoria);
  navigate(`/tasks/${categoria}`); // Navegar a la página con la categoría seleccionada
  console.log("categoria: ", selectedCategory);
};

//Redirige a la página de inicio de sesión
const handleNavigateToLogin = () => {
    navigate('/login');
};


   return (
   <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tasks App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link onClick={()=>navigate('/')}>Inicio</Nav.Link>
          
            <NavDropdown title="Tareas" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleCategorySelect('Por hacer')}>Por hacer</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategorySelect('En producción')}>En Producción</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategorySelect('Por testear')}>Por Testear</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleCategorySelect('Completada')}>Completada</NavDropdown.Item>
            </NavDropdown>

            {/*-------------------Agregar una nueva tarea ----------------------------------*/}
            <Nav.Link onClick={handleShowModal} style={{ display: isLoggedIn ? 'block' : 'none' }}>Agregar tarea</Nav.Link>

          </Nav>
         <Nav className='d-none d-md-flex ms-auto'>
          
            <Nav.Link href='#usuario' onClick={handleNavigateToLogin} style={{ display: isLoggedIn ? 'none' : 'block' }}>
                Login
            </Nav.Link>
            <Nav.Link onClick={handleLogout} style={{ display: isLoggedIn ? 'block' : 'none' }}>Cerrar sesión</Nav.Link>

         </Nav> 

         <div className="d-md-none">
            <ul className='navbar-nav me-auto-mb-2 mb-md-0'>
                <li className='nav-item'>
                    <a className='nav-link' href='#ticket'>Ticket</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='#perfil'>Perfil</a>
                </li>
            </ul>
         </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>   

    <ModalAgregarTarea showModal={showModal} handleClose={handleCloseModal} createTask={createTask}/>
   </>
  )
}

export default NavBar
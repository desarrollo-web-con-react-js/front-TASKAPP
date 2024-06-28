import { Container, Row, Col } from "react-bootstrap";
const AcercaDe = () => {
  return (
    <>
      <div className="d-flex flex-column w-100 ">
        <Row className="d-block w-100 bg-primary py-5 px-3 mx-0">
          <Col className="text-center py-5">
            <h1 className="text-white">Acerca de  </h1>
          </Col>
        </Row>
        <Container>
        <Row className="mt-3 justify-content-center">
          <Col lg={4} xs={12} className="p-0">
            <img
              src="https://img.freepik.com/vector-gratis/prueba-optimizacion-aplicaciones-disenador-ux-desarrollador-interfaz-telefono-inteligente-ilustracion-concepto-aplicacion-telefono-movil-programacion-personaje-dibujos-animados-femenino_335657-2012.jpg"
              alt="Tasks App"
               className="img-fluid"
            />
          </Col>
          <Col lg={8} xs={12} className="mt-5">
             <h2>Tasks App</h2>
            <p className="me-5">
              Tasks App es una aplicación web que permite ver listas de acciones
              realizadas durante el desarrollo de un proyecto web clasificadas
              según su estado. Se crean tareas que pueden cambiar de estado
              dependiendo de su progreso, hasta completarse o eliminarse.
              Proyecto integrador desarrollado como parte final del curso
              Desarrollador Web con React JS del trayecto formativo Programación
              de la Universidad Tecnológica Nacional en el marco de Argentina
              Programa 4.0 (2023){" "}
            </p>
          </Col>
        </Row>
        </Container>
       
      </div>
    </>
  );
};

export default AcercaDe;

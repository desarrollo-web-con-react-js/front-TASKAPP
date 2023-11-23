import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <Container fluid className="min-vh-100 d-flex flex-column">
        <Row className="flex-grow-1 justify-content-center align-items-center">
          <Col className="text-center">
            <h1>¡Oops... página no encontrada!</h1>
            <Link to="/">
              <Button variant="primary">Volver al Inicio</Button>
            </Link>
          </Col>
        </Row>
       
      </Container>
    </>
  );
}

export default NotFoundPage;

import { useFormik } from 'formik';
import { Button, Container, Form } from 'react-bootstrap';
import * as Yup from "yup";

import {LoginService} from '../Services/LoginService';
import { useNavigate } from 'react-router-dom';
import React from 'react';


const schema = Yup.object().shape({
    email:Yup.string().email('Email inválido').required(),
    password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required(),
})

interface MyFormValues {
    email: string;
    password: string;
}

interface LoginProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  }

const Login: React.FC<LoginProps> = ({ setIsLoggedIn })=> {

    const navigate=useNavigate();
    const [error, setError] = React.useState<string | null>(null);

  
    const submitForm = async (values: MyFormValues) => {
        try {
            const isValidUser = await LoginService.authenticateUser(values.email, values.password);
    
            if (isValidUser) {
                setIsLoggedIn(true);
                handleReset(values);
                navigate('/');
            } else {
                console.log('Autenticación fallida');
                setError('Email o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error en la autenticación:', error);
        }
    };

    const {handleSubmit, handleChange, handleReset, errors, values} = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        onSubmit: submitForm,
        validationSchema: schema,
        
    });


    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
        
       
    };

    

	return (
		<>
        <Container >
            <div className="row d-flex justify-content-center mt-5">
                 <div className="col-xl-4 col-sd-12 col-md-8 text-center">
                        <h2 className="">Inicia tu sesión</h2>

                 </div>
            </div>
            <div className="row d-flex  justify-content-center mt-5">
                
                 <div className="col-xl-4  col-sd-12 col-md-8 align-self-center">
                    <Form onSubmit={handleLoginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Correo electrónico" name='email' value={values.email} onChange={handleChange}/>
                            <Form.Text className="text-muted">
                            Nunca compartiremos su correo electrónico con nadie más.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' value={values.password}  onChange={handleChange}/>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit">
                                Ingresar
                            </Button>
                        </div>
                        <br/>
                        {errors.email && <div className="text-danger">Email inválido</div>}
                        {errors.password && <div className="text-danger">La contraseña debe tener al menors 8 carácteres</div>}
                        {error && <div className="text-danger">{error}</div>}
                    </Form>
                 </div>
            </div>
            <div className="row justify-content-center mt-5 text-center">
                <div className="col-xl-4">
                    <p>¿No tienes una cuenta? Regístrate</p>
                </div>
            </div>
            <div className="row vh-100" ></div>
         
        </Container>
         
		</>
	);
}

export default Login
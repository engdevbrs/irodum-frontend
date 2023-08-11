import React, { useState } from 'react'
import Axios  from 'axios';
import { Alert, Button, Card, Container, Form, Row } from 'react-bootstrap'
import olvidarpass from '../assets/olvidar.png'
import { useEffect } from 'react';

const RequestRecoverPassword = () => {

    

    const [emailValid, setEmailValid] = useState(true);
    const[ userValid, setUserValid ]=useState(false);
    const[ userNotRegistered, setUserNotRegistered ]=useState(false);
    const [emailValidMsge, setEmailValidMsge] = useState('Por favor, ingrese su correo electrónico.');

    const checkEmail = (email) =>{
        setUserValid(false)
        setUserNotRegistered(false)
        const regEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if(email.length > 0){
            if(!regEmail.test(email)){
                setEmailValidMsge('Correo electrónico no válido.')
                setEmailValid(true)
                return true
            }else{
                setEmailValidMsge('')
                setEmailValid(false)
                return false
            }
        }else{
            setEmailValidMsge('Por favor, ingrese su correo electrónico.')
            setEmailValid(true)
            return true
        }
    }

    const recoverPass = (mailValue) =>{
        Axios.post("http://services.irodum.com:3001/api/recover-password", {mailValue})
          .then((result) => {
              if(result.status === 200){
                setUserValid(true)
                setUserNotRegistered(false)
                setEmailValid(true)
              }else if(result.status === 204){
                setEmailValid(true)
                setUserValid(false)
                setUserNotRegistered(true)
              }
          }).catch(error => {
          });
    }
    
    useEffect(() =>{
        document.getElementById("menuHolder").scrollIntoView();
    },[])

  return (
    
    <>
        <Container className='mt-5 mb-5 p-5'>
            <Row id='recoverpw' lg={1} className='d-flex justify-content-center'>
                <Card className='d-flex align-items-center shadow p-2' style={{ width: '30rem', border: 'none'}}>
                <Card.Img className='mt-4' variant="top" src={olvidarpass} style={{ width: '8rem' }}/>
                <Card.Body>
                    <Card.Title className='text-center'>¿Olvidaste tu contraseña?</Card.Title>
                    <Card.Text className='text-center'>
                        Está bien, ésto pasa!. <br/> Ingresa el email con el cual te registraste y 
                        luego haz click en el botón <strong>Recuperar contraseña</strong> para continuar con el proceso de recuperación.
                    </Card.Text>
                    <div className='form-floating mb-3'>
                        <input type="email" className='form-control' id='clientEmail' name='clientEmail' placeholder='correo@gmail.com'
                        onChange={e => checkEmail(e.target.value)} required/>
                        <label  htmlFor='clientEmail'>Correo electrónico<span className='mb-1' style={{color: 'red'}}>*</span></label>
                        {
                            emailValid === true ? <Form.Text className='mb-1'>
                            <span className='mb-1' style={{color: 'red'}}>{emailValidMsge}</span></Form.Text> : emailValidMsge
                        }
                    </div>
                    {
                        userValid === true ? 
                        <Alert key='success' variant='success' style={{ fontSize: '15px' }}>
                            <i className="far fa-check-circle" style={{fontSize:'20px'}}></i>
                            <span>{' '}Le hemos enviado un mensaje al correo electrónico ingresado, por favor, revise su bandeja de entrada y 
                                siga las instrucciones para recuperar su contraseña.
                            </span>
                        </Alert> : userNotRegistered ? 
                        <Alert key='danger' variant='danger' style={{ fontSize: '15px' }}>
                            <i className="far fa-times-circle" style={{fontSize:'20px'}}></i>
                            <span>{' '}No encontramos a ningún usuario con los datos ingresados, asegurese de haber escrito bien su email.
                            </span>
                        </Alert> : <></>
                    }
                    <div className='d-flex justify-content-center'>
                        <Button className='mt-3' variant="primary" disabled={emailValid} onClick={e => recoverPass(document.getElementById('clientEmail').value)}>Recuperar contraseña</Button>
                    </div>
                </Card.Body>
                </Card>
            </Row>
        </Container>
    </>
  )
}

export default RequestRecoverPassword
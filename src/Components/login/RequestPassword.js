import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios  from 'axios';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import brokenlink from '../assets/broken-link.png'
import { useEffect } from 'react';
import loadingpass from '../assets/loadingpass.gif'

const RecoverPassword = () => {

    const { id, token } = useParams();

    const [disabledButton, setDisabledButton] = useState(true);
    const [ loading, setLoading ] = useState(true)
    const [ response, setResponse ] = useState([]);
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const recoverPass = (mailValue) =>{
        Axios.post("http://54.174.104.208:3001/api/recover-password", {mailValue})
          .then((result) => {
              if(result.status === 200){

              }else if(result.status === 204){

              }
          }).catch(error => {
          });
    }

    const handleChange1=(event)=>{
        setValue1(event.target.value);
    }
    
    const handleChange2=(event)=>{
        setValue2(event.target.value);
    }

    const deniedAccess = () => {
        return(
        <div className="container mt-5 mb-5" hidden={loading}>
            <div className="denied" style={{height: '60vh'}}>
                <div className="wrapper mb-4">
                    <img src={brokenlink} alt="imagen de confirmación" style={{width: '8rem'}}/>
                </div>
                <div className="mt-1 congrats">
                    SU ENLACE HA EXPIRADO
                </div>
                <div className="d-grid mt-2">
                    <a className="btn btn-danger btn-md" href="/solicitud-recuperar-clave">Solicitar nueva recuperación</a>
                </div>
            </div>
        </div>)
    }

    const allowAccess = () => {
        return (
            <>
            <Container className='form mt-5 mb-5'>
                <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 col-xs-12'>
                    <Form className='formulario shadow p-3 rounded'>
                        <h3 className='mb-4 mt-1'>Usuario</h3>
                        <Row>
                            <Col className='form-floating mb-3'>
                                <input type='email' className='form-control' id='email' name='email' placeholder='correo@gmail.com'
                                value={response.data} disabled/>
                                <label htmlFor='email'>Correo electrónico</label>
                            </Col>
                        </Row>
                        <h3 className='mb-2 mt-1'>Contraseña</h3>
                        <Row>
                            <Col className="form-floating mb-3">
                                <input type="password" className="form-control" id='pass' name='pass' placeholder="Especialidad"
                                 onChange={(e) =>  handleChange1(e)}/>
                                <label htmlFor="pass">Contraseña</label>
                                <p className='mt-1' style={{fontWeight:"bold"}}>Todas las marcas de verificación deben volverse verdes, la contraseña debe tener:</p>
                                <p><i style={{color: value1.length >= "8" ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                    </i><Form.Text> Al menos, 8 carácteres.</Form.Text></p>
                                <p><i style={{color: value1.match(/[A-Z]/) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                    </i><Form.Text> Al menos, una letra mayúscula.</Form.Text></p>
                                <p><i style={{color:value1.match(/[0-9]/) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                    </i><Form.Text> Al menos, un número.</Form.Text></p>
                                <p><i style={{color:value1.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                    </i><Form.Text>  Al menos, un carácter especial.</Form.Text></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="form-floating mb-3">
                                <input type="password" className="form-control" id="confirmpass" placeholder="Especialidad"
                                onChange={handleChange2}/>
                                <label htmlFor="confirmpass">Confirmar contraseña</label>
                                <p className='mt-2'><i style={{color:((value1 === value2) && (value1 !=="")) ? "green" : "red",fontSize:"20px"}} 
                                className="fa fa-check-circle" aria-hidden="true"></i><Form.Text>  Ambas contraseñas son iguales?</Form.Text></p>
                            </Col>
                        </Row>
                        <Row>
                            <Button size='md' disabled={ disabledButton }>Cambiar contraseña</Button>
                        </Row>
                    </Form>
                </div>
            </Container>
          </>
        )
    }

    useEffect(() => {

        Axios.get(`http://54.174.104.208:3001/resetear-password/${id}/${token}`)
        .then((result) => {
            setTimeout(() =>{
                setLoading(false);
                setResponse(result)
            },1000)
            clearTimeout()
        }).catch(error => {
            setTimeout(() =>{
                setLoading(false);
                setResponse(error.response.status)
            },1000)
            clearTimeout()
        });

        if(value1.length >= "8" && value1.match(/[A-Z]/) && value1.match(/[0-9]/) &&
        value1.match(/[a-z]/) && value1.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) && ((value1 === value2) && (value1 !==""))){
            setDisabledButton(false);
        }else{
            setDisabledButton(true);
        }

    }, [value1, value2, disabledButton]);

  return (
    <>
    <div id='denied' className="container mt-5 mb-5" hidden={!loading}>
        <div className="denied" style={{height: '60vh'}}>
            <div className="wrapper text-center">
                <img src={loadingpass} alt="imagen de confirmación" style={{width: '15rem'}}/>
            </div>
                <div className="success-account mb-3">
                Validando enlace...
            </div>
        </div>
    </div>
  {
    response.status !== 200 ? deniedAccess()
    : allowAccess()
  }
  </>
  )
}

export default RecoverPassword
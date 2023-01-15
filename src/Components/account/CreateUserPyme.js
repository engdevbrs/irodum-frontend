import React, { useEffect, useState } from 'react';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useStepperContextPyme } from '../contexts/StepperContextPyme.js'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateNewUserPyme = () => {

    const { userDataPyme, setUserDataPyme } = useStepperContextPyme();
    const [disabledButton, setDisabledButton] = useState(true);

    const TermsConditions = document.getElementById('nextButton');
    TermsConditions.disabled = disabledButton;

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDataPyme({ ...userDataPyme, [name]: value });

    };


    const handleChange1=(event)=>{
        setValue1(event.target.value);
    }
    
    const handleChange2=(event)=>{
        setValue2(event.target.value);
    }
   
    const handleSubmit = (event) =>{
        if(value1.length >= "8" && value1.match(/[A-Z]/) && value1.match(/[0-9]/) &&
        value1.match(/[a-z]/) && value1.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) && ((value1 === value2) && (value1 !==""))){     

            Object.defineProperty(event, 'continue', {
                value: true,
                writable: true
            });
        }
    }

    useEffect(() =>{
        if(value1.length >= "8" && value1.match(/[A-Z]/) && value1.match(/[0-9]/) &&
        value1.match(/[a-z]/) && value1.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) && ((value1 === value2) && (value1 !==""))){
            setDisabledButton(false);
        }else{
            setDisabledButton(true);
        }
        document.addEventListener('handleEventPyme', handleSubmit);
        return () => {
            document.removeEventListener('handleEventPyme', handleSubmit);
        }
    },[value1,value2,disabledButton]);

    return (
        <>
        <Container className='form mt-5 mb-5'>
            <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 col-xs-12'>
                <Form className='formulario shadow p-3 rounded'>
                    <h3 className='mb-4 mt-1'>Usuario</h3>
                    <Row>
                        <Col className='form-floating mb-3'>
                            <input type='email' className='form-control' id='email' name='email' placeholder='correo@gmail.com'
                            value={userDataPyme['email'] || ''} disabled readOnly/>
                            <label htmlFor='email'>Correo electrónico</label>
                        </Col>
                    </Row>
                    <h3 className='mb-2 mt-1'>Contraseña</h3>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="password" className="form-control" id='pass' name='pass' placeholder="Especialidad"
                            value={userDataPyme["pass"] || ""} onChange={(e) => {handleChange(e); handleChange1(e)}}/>
                            <label htmlFor="pass">Contraseña</label>
                            <p className='mt-1' style={{fontWeight:"bold"}}>Todas las marcas de verificación deben volverse verdes, la contraseña debe tener:</p>
                            <p><i style={{color: value1.length >= "8" ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                </i><Form.Text> Al menos, 8 carácteres.</Form.Text></p>
                            <p><i style={{color: value1.match(/[A-Z]/) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                </i><Form.Text> Al menos, una letra mayúscula.</Form.Text></p>
                            <p><i style={{color:value1.match(/[0-9]/) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                </i><Form.Text> Al menos, un número.</Form.Text></p>
                            <p><i style={{color:value1.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                </i><Form.Text>  Al menos, un carácter especial. <span>{' '}</span> 
                                            <OverlayTrigger
                                                key='bottom'
                                                placement='bottom'
                                                overlay={
                                                    <Tooltip >
                                                    Algunos ejemplos de carácteres especiales son: <br/>
                                                    <ul style={{ listStyle: 'none', textAlign: 'start' }}>
                                                        <li>.</li>
                                                        <li>,</li>
                                                        <li>#</li>
                                                        <li>!</li>
                                                        <li>@</li>
                                                        <li>$</li>
                                                        <li>/</li>
                                                        <li>*</li>
                                                        <li>&</li>
                                                        <li>-</li>
                                                    </ul>
                                                    </Tooltip>
                                                }
                                                ><i className='fas fa-question-circle' style={{fontSize:'18px',cursor:'pointer', color: '#384451'}}></i>
                                                </OverlayTrigger></Form.Text></p>
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
                </Form>
            </div>
        </Container>
      </>
    )
}

export default CreateNewUserPyme

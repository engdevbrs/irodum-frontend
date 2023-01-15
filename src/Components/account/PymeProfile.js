import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useStepperContextPyme } from '../contexts/StepperContextPyme.js'

const PymeProfile = () => {

    const { userDataPyme, setUserDataPyme } = useStepperContextPyme();
    const [disabledButton, setDisabledButton] = useState(false);
    const nextButton = document.getElementById('nextButton');
    nextButton.disabled = disabledButton;

    const [expValid, setExpValid] = useState(false);
    const [resumeValid, setResumeValid] = useState(false);

    const [expValidMsge, setExpValidMsge] = useState([]);
    const [resumeValidMsge, setResumeValidMsge] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDataPyme({ ...userDataPyme, [name]: value });
        if(e.target.name === 'yearsExperience'){
            checkExperience(e.target.value)
        }else if(e.target.name === 'resume'){
            checkDescriptWork(e.target.value)
        }
    };


    const checkExperience = (exp) =>{
        const reghouseNumber = new RegExp('^[0-9]+$');
        if(exp === ''){
            setExpValidMsge('Por favor, ingrese su experiencia laboral.')
            setExpValid(true)
            return true
        }else if(exp !== '' && !reghouseNumber.test(exp)){
            setExpValidMsge('Por favor, ingrese solo números.')
            setExpValid(true)
            return true
        }else if(exp !== '' && reghouseNumber.test(exp)){
            setExpValidMsge('')
            setExpValid(false)
            return false
        }
    }

    const checkDescriptWork = (descriptWork) =>{
        const regdescriptWork = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?~´]/);
        if(descriptWork !== '' && descriptWork !== null && descriptWork !== undefined){

            if(!regdescriptWork.test(descriptWork) && descriptWork.length < 50){
                setResumeValid(true)
                setResumeValidMsge('Por favor, ingrese un mínimo de 50 letras.')
                return true
            }else if(!regdescriptWork.test(descriptWork)){
                setResumeValid(false)
                setResumeValidMsge('')
                return false
            }else{
                setResumeValid(true)
                setResumeValidMsge('Por favor, ingrese sólo letras o números.')
                return true
            }
        }else{
            setResumeValid(true)
            setResumeValidMsge('Por favor, ingrese un breve resumen sobre su emprendimiento.')
            return true
        }
    }


    const handleSubmit = (event) =>{
        const resume = checkDescriptWork(document.getElementById('resume').value);
        const experience = checkExperience(document.getElementById('yearsExperience').value);
        let validation = resume === false && experience === false;

        if(!validation){
            Object.defineProperty(event, 'continue', {
                value: false,
                writable: true
            });
        }
        else{
            Object.defineProperty(event, 'continue', {
                value: true,
                writable: true
            });
        }
    }

    useEffect(() => {      
        document.addEventListener('handleEventPyme', handleSubmit);
        return () => {
            document.removeEventListener('handleEventPyme', handleSubmit);
        }
    },[]);
    
    return (
        <>
        <Container className='form mt-5 mb-5'>
            <div className='col-xl-4 col-lg-5 col-md-6 col-sm-10 col-10'>
                <Form id='formulario' className='formulario shadow p-3 rounded'>
                    <h3 className='mb-3 mt-1'>Perfil laboral</h3>
                    <Row>
                    <Form.Text className='mb-2'><span className='mb-1' style={{color: 'red', fontWeight: '600'}}>Algunos campos son obligatorios</span></Form.Text>
                    </Row>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="text" className="form-control" id='yearsExperience' name='yearsExperience' min={0}  
                            value={userDataPyme["yearsExperience"] || ""} onChange={handleChange} required/>
                            <label htmlFor="yearsExperience">Años en el rubro</label>
                            {
                                expValid === true ? <Form.Text className='mb-1'>
                                    <span className='mb-1' style={{color: 'red'}}>{expValidMsge}</span></Form.Text> : expValidMsge
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-floating">
                            <textarea className="form-control" placeholder="Dejar un comentario aquí" id="resume" name='resume' style={{height: '100px'}}
                            value={userDataPyme["resume"] || ""} onChange={handleChange} ></textarea>
                            <label htmlFor="resume">¿En qué consiste su servicio?</label>
                            {
                                resumeValid === true ? <Form.Text className='mb-1'>
                                    <span className='mb-1' style={{color: 'red'}}>{resumeValidMsge}</span></Form.Text> : resumeValidMsge
                            }
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
      </>
    )
}

export default PymeProfile

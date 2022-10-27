import React, { Component, useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useStepperContext } from '../contexts/StepperContext.js'

const WorkProfile = () => {

    const { userData, setUserData } = useStepperContext();
    const [switchCharge, setSwitchCharge] = useState((userData.role !== '' && userData.role !== undefined) === true ? true : false);
    const [disabledButton, setDisabledButton] = useState(false);
    const nextButton = document.getElementById('nextButton');
    nextButton.disabled = disabledButton;

    const [areaValid, setAreaValid] = useState(false);
    const [roleValid, setRoleValid] = useState(false);
    const [expValid, setExpValid] = useState(false);
    const [resumeValid, setResumeValid] = useState(false);

    const [areaValidMsge, setAreaValidMsge] = useState([]);
    const [roleValidMsge, setRoleValidMsge] = useState([]);
    const [expValidMsge, setExpValidMsge] = useState([]);
    const [resumeValidMsge, setResumeValidMsge] = useState([]);

    const jobs = ["Carpintero/a","Lechero/a","Frutero/a","Cerrajero/a","Cocinero/a","Deshollinador/ora","Lavandero/a","Artesano/a",
    "Pescador/ra","Escultor/ra","Tornero/a","Albañil","Editor/ra","Barrendero/a","Fontanero/a o plomero/a",
    "Obrero/a","Panadero/a","Locutor/ra","Barbero/a","Soldador/ra","Escritor/ra","Leñador/ra",
    "Pintor/ra","Vendedor/ra","Peletero/a","Sastrero/ra","Repartidor/ra","Impresor/ra","Pastor/ra ganadero/ra",
    "Cajero/a","Agricultor/ra","Vigilante","Exterminador/ra","Carnicero/a","Animador/ra","Peluquero/a",
    "Mecánico/a","Niñero/a","Conductor/ra","Soldador/ra"].sort();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        if(e.target.name === 'area'){
            checkArea(e.target.value)
        }else if(e.target.name === 'role'){
            checkRole(e.target.value)
        }else if(e.target.name === 'yearsExperience'){
            checkExperience(e.target)
        }
    };

    const checkArea = (area) =>{
        if(area !== ''){
            setAreaValidMsge('')
            setAreaValid(false)
            return false
        }else{
            setAreaValidMsge('Por favor, seleccione su Especialidad.')
            setAreaValid(true)
            return true
        }
    }

    const checkRole = (role) =>{
        if(switchCharge){
            if(role === ''){
                setRoleValidMsge('Por favor, ingrese su cargo actual.')
                setRoleValid(true)
                return true
            }else{
                setRoleValidMsge('')
                setRoleValid(false)
                return false
            }
        }
    }

    const checkExperience = (exp) =>{
        if(exp === ''){
            setExpValidMsge('Por favor, ingrese su experiencia laboral.')
            setExpValid(true)
            return true
        }else{
            setExpValidMsge('')
            setExpValid(false)
            return false
        }
    }

    const clearSwitch = () =>{
        if(userData.role !== '' && userData.role !== undefined){
            userData.role = ''
        }
    }

    const handleSubmit = (event) =>{
        const area = checkArea(document.getElementById('area').value);
        const experience = checkExperience(document.getElementById('yearsExperience').value);
        let validation = null;
        if(switchCharge){
            const role = checkRole(document.getElementById('role').value)
            validation = area === false && experience === false && role === false;
        }else{
            validation = area === false && experience === false;
        }
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
        if(switchCharge === false && userData.role !== undefined){
            delete userData.role;
        }
    }

    useEffect(() => {      
        document.addEventListener('handleEvent', handleSubmit);
        return () => {
            document.removeEventListener('handleEvent', handleSubmit);
        }
    },[switchCharge]);
    
    return (
        <>
        <Container className='form mt-5 mb-5'>
            <div className='col-xl-4 col-lg-6 col-md-10 col-sm-10 col-xs-12'>
                <Form id='formulario' className='formulario shadow p-3 rounded'>
                    <h3 className='mb-4 mt-1'>Perfil laboral</h3>
                    <Row>
                        <Form.Text className='mb-2'><span className='mb-1' style={{color: 'red'}}><strong>Algunos campos son obligatorios</strong></span></Form.Text>
                        <Col className="form-floating mb-3">
                            <select id='area' className="form-select" name='area'
                            value={userData["area"] || ""} onChange={handleChange}>
                            <option disabled selected value="">Seleccionar especialidad</option>
                            {
                                jobs.map((jobs,key) =>{
                                    return(
                                        <>
                                            <option key={key} value={jobs}>{jobs}</option>
                                        </>
                                    )
                                })
                            }
                            </select>
                            <label htmlFor="area" className="form-label">Especialidad</label>
                            {
                                areaValid === true ? <Form.Text className='mb-1'>
                                    <span className='mb-1' style={{color: 'red'}}>{areaValidMsge}</span></Form.Text> : areaValidMsge
                            }
                        </Col>
                    </Row>
                    <Row className="row m-1">
                        <Col className="form-check form-switch mb-3">
                            <input className="form-check-input" type="checkbox" id='switch' name='switch'  
                            onChange={(e) => {setSwitchCharge(!switchCharge); clearSwitch()}}
                            checked={ switchCharge === true }/>
                            <label className="form-check-label">¿Tienes trabajo actualmente?</label>
                        </Col>
                    </Row>
                    <Row>
                        {
                            switchCharge === true ? 
                            <Col className="form-floating mb-3">
                                <input type="text" className="form-control" id='role' name='role' placeholder="Nombre" 
                                value={userData["role"] || ""} onChange={handleChange} />
                                <label htmlFor="role">Cargo</label>
                                {
                                roleValid === true ? <Form.Text className='mb-1'>
                                    <span className='mb-1' style={{color: 'red'}}>{roleValidMsge}</span></Form.Text> : roleValidMsge
                            }
                            </Col> : null
                        }
                    </Row>
                    <Row>
                        <Col className="form-floating mb-3">
                            <input type="number" className="form-control" id='yearsExperience' name='yearsExperience' min={0}  
                            value={userData["yearsExperience"] || ""} onChange={handleChange} required/>
                            <label htmlFor="yearsExperience">Años de experiencia</label>
                            {
                                expValid === true ? <Form.Text className='mb-1'>
                                    <span className='mb-1' style={{color: 'red'}}>{expValidMsge}</span></Form.Text> : expValidMsge
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-floating">
                            <textarea className="form-control" placeholder="Dejar un comentario aquí" id="resume" name='resume' style={{height: '100px'}}
                            value={userData["resume"] || ""} onChange={handleChange} ></textarea>
                            <label htmlFor="resume">Descripción laboral</label>
                            <Form.Text>Éste campo es opcional</Form.Text>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
      </>
    )
}

export default WorkProfile

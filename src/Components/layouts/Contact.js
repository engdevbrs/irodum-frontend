import React, { useEffect, useState } from 'react'
import Axios  from 'axios'
import { Alert, Form } from 'react-bootstrap';

const Contact = () => {

    

    const [nombreValid, setNombreValid] = useState(false);
    const [cellphoneValid, setCellphoneValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [descriptWorkValid, setDescriptWorkValid] = useState(false);
    const[ emailSent, setEmailSent ]=useState(false);
    const[ emailNotSent, setEmailNotSent ]=useState(false);

    const [nombreValidMsge, setNombreValidMsge] = useState([]);
    const [cellphoneValidMsge, setCellphoneValidMsge] = useState([]);
    const [emailValidMsge, setEmailValidMsge] = useState([]);
    const [descriptWorkValidMsge, setDescriptWorkValidMsge] = useState([]);

    const sendEmail = (e) => {
        e.preventDefault()
        const nameChecked = checkName(document.getElementById('name').value)
        const emailChecked = checkEmail(document.getElementById('email').value)
        const descriptworkChecked = checkDescriptWork(document.getElementById('message').value)
        if((nameChecked && emailChecked && descriptworkChecked) === true){
            const emailContactObject = {
                clienteName: document.getElementById('name').value,
                email: document.getElementById('email').value,
                cell: document.getElementById('phone').value,
                message: document.getElementById('message').value
            }
            Axios.post('http://54.174.104.208:3001/api/contact-email',emailContactObject)
            .then((result) => {
                if(result.status === 200){
                    setEmailNotSent(false)
                    setEmailSent(true)
                    document.getElementById('name').value = "";
                    document.getElementById('email').value = "";
                    document.getElementById('phone').value = "";
                    document.getElementById('message').value = "";
                }
            }).catch(error => {
                setEmailNotSent(true)
                setEmailSent(false)
            });
        }
    }

    const checkName = (name) =>{
        const regName = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/g);
        if(name.length > 0){
            if(!regName.test(name)){
                setNombreValidMsge('Por favor, sólo ingrese letras.')
                setNombreValid(true)
                return false
            }else{
                setNombreValidMsge('')
                setNombreValid(false)
                return true
            }
        }else{
            setNombreValidMsge('Por favor, ingrese su nombre completo.')
            setNombreValid(true)
            return false
        }
    }

    const checkEmail = (email) =>{
        const regEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if(email.length > 0){
            if(!regEmail.test(email)){
                setEmailValidMsge('Correo electrónico no válido.')
                setEmailValid(true)
                return false
            }else{
                setEmailValidMsge('')
                setEmailValid(false)
                return true
            }
        }else{
            setEmailValidMsge('Por favor, ingrese su correo electrónico.')
            setEmailValid(true)
            return false
        }
    }

    const checkCellphone = (cell) =>{
        const regCell = new RegExp('^[0-9]+$');
        if(cell.length === 8 && regCell.test(cell)){
            setCellphoneValidMsge('')
            setCellphoneValid(false)
            return true
        }else if(cell.length < 8 && regCell.test(cell)){
            setCellphoneValidMsge('Ingrese los 8 números de su número de celular.')
            setCellphoneValid(true)
            return false
        }else if(cell.length < 8 && !regCell.test(cell)){
            setCellphoneValidMsge('Ingrese sólo números.')
            setCellphoneValid(true)
            return false
        }
    }

    const checkDescriptWork = (descriptWork) =>{
        const regdescriptWork = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?~´]/);
        if(descriptWork !== '' && descriptWork !== null && descriptWork !== undefined){
            if(!regdescriptWork.test(descriptWork)){
                setDescriptWorkValid(false)
                setDescriptWorkValidMsge('')
                return true
            }else{
                setDescriptWorkValid(true)
                setDescriptWorkValidMsge('Por favor, ingrese sólo letras o números.')
                return false
            }
        }else{
            setDescriptWorkValid(true)
            setDescriptWorkValidMsge('Por favor, ingrese una breve descripción de su mensaje.')
            return false
        }
    }

    useEffect(() => {
        document.getElementById("menuHolder").scrollIntoView();      
    },[]);

  return (
    <div>
        <section className="py-5">
                <div className="container px-3">
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-gradient text-white rounded-3 mb-3" style={{ backgroundColor: "#2b3d64"}}><i className="fas fa-envelope"></i></div>
                            <h1 className="fw-bolder">¿Tienes alguna duda?</h1>
                            <p className="lead fw-normal text-muted mb-0">Estaremos encantados de ayudarte.</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <form className='emailForm'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." onChange={e => checkName(e.target.value)}/>
                                        <label htmlFor="name">Nombre completo<span className='mb-2' style={{color: 'red'}}> *</span></label>
                                        {
                                            nombreValid === true ? <Form.Text className='mb-1'>
                                            <span className='mb-1' style={{color: 'red'}}>{nombreValidMsge}</span></Form.Text> : nombreValidMsge
                                        }
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" placeholder="name@example.com" onChange={e => checkEmail(e.target.value)}/>
                                        <label htmlFor="email">Correo electrónico<span className='mb-2' style={{color: 'red'}}> *</span></label>
                                        {
                                            emailValid === true ? <Form.Text className='mb-1'>
                                            <span className='mb-1' style={{color: 'red'}}>{emailValidMsge}</span></Form.Text> : emailValidMsge
                                        }
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" maxLength={8} onChange={e => checkCellphone(e.target.value)}/>
                                        <label htmlFor="phone">Número de teléfono</label>
                                        <Form.Text hidden={cellphoneValid}>Éste campo es opcional</Form.Text>
                                        {
                                            cellphoneValid === true ? <Form.Text className='mb-1'>
                                            <span className='mb-1' style={{color: 'red'}}>{cellphoneValidMsge}</span></Form.Text> : cellphoneValidMsge
                                        }
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} 
                                        onChange={e => checkDescriptWork(e.target.value)}></textarea>
                                        <label htmlFor="message">Mensaje<span className='mb-2' style={{color: 'red'}}> *</span></label>
                                        {
                                            descriptWorkValid === true ? <Form.Text className='mb-1'>
                                            <span className='mb-1' style={{color: 'red'}}>{descriptWorkValidMsge}</span></Form.Text> : descriptWorkValidMsge
                                        }
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg" onClick={(e) => sendEmail(e)} 
                                        disabled={nombreValid || emailValid || descriptWorkValid === true ? true : false}>Enviar</button>
                                    </div>
                                    <div className='mt-3'>
                                    {
                                        emailSent === true ? 
                                        <Alert key='success' variant='success' style={{ fontSize: '15px' }}>
                                            <i className="far fa-check-circle" style={{fontSize:'20px'}}></i>
                                            <span>{' '}Gracias por contactarse con nosotros, le responderemos a la brevedad.
                                            </span>
                                        </Alert> : emailNotSent ? 
                                        <Alert key='danger' variant='danger' style={{ fontSize: '15px' }}>
                                            <i className="far fa-times-circle" style={{fontSize:'20px'}}></i>
                                            <span>{' '}Servicio no disponible, póngase en contacto nuevamente o intente más tarde.
                                            </span>
                                        </Alert> : <></>
                                    }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Contact
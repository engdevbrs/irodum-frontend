import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';

const Contact = () => {

    const [nombreValid, setNombreValid] = useState(false);
    const [cellphoneValid, setCellphoneValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [descriptWorkValid, setDescriptWorkValid] = useState(false);

    const [nombreValidMsge, setNombreValidMsge] = useState([]);
    const [cellphoneValidMsge, setCellphoneValidMsge] = useState([]);
    const [emailValidMsge, setEmailValidMsge] = useState([]);
    const [descriptWorkValidMsge, setDescriptWorkValidMsge] = useState([]);

    const sendEmail = (e) => {
        e.preventDefault()
        const nameChecked = checkName(document.getElementById('name').value)
        const emailChecked = checkEmail(document.getElementById('email').value)
        const cellphoneChecked = checkCellphone(document.getElementById('phone').value)
        const descriptworkChecked = checkDescriptWork(document.getElementById('message').value)
        if((nameChecked && emailChecked && cellphoneChecked && descriptworkChecked) === true){
            console.log("se envia email");
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
            setCellphoneValidMsge('Número de celular no válido.')
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

    },[]);

  return (
    <div>
        <section className="py-5">
                <div className="container px-3">
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                            <h1 className="fw-bolder">¿Tienes alguna duda?</h1>
                            <p className="lead fw-normal text-muted mb-0">Estaremos encantados de ayudarte.</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <form className='emailForm'>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." onChange={e => checkName(e.target.value)}/>
                                        <label htmlFor="name">Nombre completo</label>
                                        {
                                            nombreValid === true ? <Form.Text className='mb-1'>
                                            <span className='mb-1' style={{color: 'red'}}>{nombreValidMsge}</span></Form.Text> : nombreValidMsge
                                        }
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" placeholder="name@example.com" onChange={e => checkEmail(e.target.value)}/>
                                        <label htmlFor="email">Correo electrónico</label>
                                        {
                                            emailValid === true ? <Form.Text className='mb-1'>
                                            <span className='mb-1' style={{color: 'red'}}>{emailValidMsge}</span></Form.Text> : emailValidMsge
                                        }
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" maxLength={8} onChange={e => checkCellphone(e.target.value)}/>
                                        <label htmlFor="phone">Número de teléfono</label>
                                        {
                                            cellphoneValid === true ? <Form.Text className='mb-1'>
                                            <span className='mb-1' style={{color: 'red'}}>{cellphoneValidMsge}</span></Form.Text> : cellphoneValidMsge
                                        }
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} 
                                        onChange={e => checkDescriptWork(e.target.value)}></textarea>
                                        <label htmlFor="message">Mensaje</label>
                                        {
                                            descriptWorkValid === true ? <Form.Text className='mb-1'>
                                            <span className='mb-1' style={{color: 'red'}}>{descriptWorkValidMsge}</span></Form.Text> : descriptWorkValidMsge
                                        }
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg" onClick={(e) => sendEmail(e)} 
                                        disabled={nombreValid || emailValid || cellphoneValid || descriptWorkValid === true ? true : false}>Enviar</button>
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
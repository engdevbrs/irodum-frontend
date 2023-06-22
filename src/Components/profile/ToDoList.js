import React, { useEffect, useState } from 'react'
import { Alert, Button, Card,  Col, Container, FloatingLabel, Form, Modal, Nav, Row, Tab, Table, Tabs } from 'react-bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Axios  from 'axios'
import { Link } from 'react-router-dom'
import accesDenied from '../assets/access-denied.png'
import loadingprofilegf from '../assets/loading-profile-requests.svg'
import norequests from '../assets/no-requests.png'
import norequestsconfirmeds from '../assets/no-requests-confirmeds.png'
import whatsapp from '../assets/whatsapp.png'
import email from '../assets/email.png'


const ToDoList = () => {

    const MySwal = withReactContent(Swal)
    const [showModal, setShowModal] = useState(false);
    const [showModalContact, setShowModalContact] = useState(false);
    const [show, setShow] = useState(false);

    const [ response, setResponse ] = useState([])
    const [ userInfo, setUserInfo ] = useState([])
    const [ projectsData, setProjectsData ] = useState([])
    const [ projectsDataConfirmed, setProjectsDataConfirmed ] = useState([])
    const [ projectsDataRejected, setProjectsDataRejected ] = useState([])
    const [ tabIndex, setTabIndex ] = useState([])
    const [ idRequestConfirm, setIdRequestConfirm ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ modalData, setModalData ] = useState([])
    const [ showFormEmail, setShowFormEmail ] = useState(false)
    const [ showWspConfirm, setShowWspConfirm ] = useState(false)
    const [ enableConfirm, setEnableConfirm ] = useState(false)
    
    const handleClose = () => {
        setShow(false)
        setEnableConfirm(false)
    };

    const confirmUserProject = (e) =>{
        e.preventDefault();
        const token = localStorage.getItem('accessToken');
        const requestConfirmObject = {
            idRequest: idRequestConfirm,
            estado: 'confirmado',
            startDate: document.getElementById('dateRequestConfirm').value
        }
        MySwal.fire({
            title: 'Estás seguro de confirmar ésta solicitud ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Confirmar`,
            denyButtonText: `Cancelar`,
            }).then((result) => {
                if(result.isConfirmed){
                    Axios.put("http://54.174.104.208:3001/api/user/request-confirm", requestConfirmObject , 
                    {
                        headers: {
                        'authorization': `${token}`
                        }
                    }
                    ).then((result) => {
                        if(result.status === 200){
                            getProjects(userInfo.idEmployed)
                            Swal.fire('La solicitud fue confirmada con éxito!', '', 'success')
                            setShow(false)
                            setEnableConfirm(false)
                        }
                    }).catch(error => {
                        setShow(false)
                        setEnableConfirm(false)
                        Swal.fire('No pudimos confirmar la solicitud.', '', 'warning')
                    });
                }
            })
    }

    const rejectUserProject = (idRequestReject) =>{
        const token = localStorage.getItem('accessToken');
        const requestRejectObject = {
            idRequest: idRequestReject,
            estado: 'rechazado',
        }
        MySwal.fire({
            title: '¿Estás seguro de rechazar ésta solicitud?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Rechazar`,
            denyButtonText: `Cancelar`,
            }).then((result) => {
                if(result.isConfirmed){
                    Axios.put("http://54.174.104.208:3001/api/user/request-reject", requestRejectObject , 
                    {
                        headers: {
                        'authorization': `${token}`
                        }
                    }
                    ).then((result) => {
                        if(result.status === 200){
                            getProjects(userInfo.idEmployed)
                            Swal.fire('La solicitud fue rechazada', '', 'success')
                        }
                    }).catch(error => {
                        Swal.fire('No pudimos rechazar la solicitud.', '', 'warning')
                    });
                }
            })
    }

    const agreementUserProject = (buttonName) =>{
        const token = localStorage.getItem('accessToken');
        if(buttonName === 'wspbutton'){
            const wspContactObject = {
                idRequest: modalData.idRequest,
                estado: 'pendiente',
                actionbutton: 'wspbutton'
            }
            Axios.put("http://54.174.104.208:3001/api/update/agreement", wspContactObject, 
            {
                headers: {
                'authorization': `${token}`
                }
            }
            ).then((result) => {
                if(result.status === 200){
                    setShowModalContact(false)
                    getProjects(userInfo.idEmployed)
                    Swal.fire('La solicitud pasó a pendiente de confirmación', '', 'success')
                }
            }).catch(error => {
                Swal.fire('No pudimos acordar la solicitud.', '', 'warning')
            });
        }else if(buttonName === 'emailbutton'){
            const txtarea = document.getElementById('msgetextarea').value
            const emailContactObject = {
                idRequest: modalData.idRequest,
                estado: 'pendiente',
                actionbutton: 'emailbutton',
                message: txtarea,
                nameWorker: userInfo.employedClass === "independiente" ? userInfo.nameEmployed : userInfo.razonSocial,
                emailWorker: modalData.emailEmployed,
                nameClient: modalData.customerName,
                emailClient: modalData.emailCustomer,
                requestInfo: modalData.descripcionTrabajo
            }
            Axios.put("http://54.174.104.208:3001/api/update/agreement",emailContactObject, 
            {
                headers: {
                'authorization': `${token}`
                }
            }
            ).then((result) => {
                if(result.status === 200){
                    setShowModalContact(false)
                    getProjects(userInfo.idEmployed)
                    Swal.fire('La solicitud pasó a pendiente de confirmación', '', 'success')
                }
            }).catch(error => {
                Swal.fire('No pudimos acordar la solicitud.', '', 'warning')
            });
        }
    }

    const getProjects = (id) => {
        Axios.get("http://54.174.104.208:3001/api/user/user-requests/"+ id)
          .then((result) => {
              if(result.status === 200){
                let notconfirmed = (result.data).filter(function(params) {
                    return params.estado === 'pendiente' || params.estado === 'acordar';
                })
                let confirmed = (result.data).filter(function(params) {
                    return params.estado === 'confirmado';
                })
                let rejected = (result.data).filter(function(params) {
                    return params.estado === 'rechazado';
                })
                setProjectsData(notconfirmed)
                setProjectsDataConfirmed(confirmed)
                setProjectsDataRejected(rejected)
              }
          }).catch(error => {
                setProjectsData([])
          });
    }

    const MyModalContact = (props) =>{
        setModalData(props.info[0])
        return(
            <>
            <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showModalContact}
            backdrop="static"
            keyboard={false}
            onHide={() => {setShowModalContact(false); setShowFormEmail(false); setShowWspConfirm(false)}}
            >
            <Modal.Header closeButton={ (showFormEmail || showWspConfirm) === true ? false : true }>
                <Modal.Title id="contained-modal-title-vcenter">
                Método de contacto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert key='warning' variant='warning'>
                    <p className="mb-0" style={{fontSize: '14px'}}>
                        <i className='fas fa-exclamation-triangle' style={{fontSize: '18px'}}></i>
                        {' '}Por favor, elija bien su método de contacto. <br/><br/>
                        Al seleccionar el método de Whatsapp, se le preguntará si se contactó con su cliente,
                        ésta confirmación es de suma importancia para que pueda continuar con el proceso de su solicitud de trabajo.
                        </p>
                </Alert>
                <Row className='d-grid d-sm-flex justify-content-sm-center'>
                <Col className="mb-4 text-center">
                    <h6>Chat de Whatsapp</h6>
                    <a href={`https://wa.me/${props.info[0].cellphoneCustomer}`} target='_blank' rel="noreferrer">
                        <img src={whatsapp} alt="imagen de wsp" onClick={() => setShowWspConfirm(true)} style={{width: '32px'}}/>
                    </a>
                </Col>
                <Col className="mb-4 text-center">
                    <h6>Correo Electrónico</h6>
                    <img src={email} alt="imagen de email" onClick={() => {setShowFormEmail(!showFormEmail); setShowWspConfirm(false)}} style={{width: '32px', cursor: 'pointer'}}/>
                </Col>
                </Row>
                {
                    showFormEmail === true ? 
                    <>
                        <Form className='emailForm shadow-lg p-2 rounded-2'>
                        <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            <strong>De:</strong> 
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue='soporte@irodum.com' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            <strong>Para:</strong> 
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={props.info[0].emailCustomer} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            <strong>CC:</strong> 
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={props.info[0].emailEmployed} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-2" controlId="formPlaintextAsunto">
                            <Form.Label column sm="2">
                            <strong>Asunto:</strong> 
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={'Coordinación trabajo solicitado'} />
                            </Col>
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Mensaje">
                            <Form.Control
                            id='msgetextarea'
                            className="mb-2"
                            as="textarea"
                            placeholder="dejar un comentario aqui"
                            style={{ height: '150px' }}
                            />
                        </FloatingLabel>
                        <div className='d-grid gap-2'>
                            <Button variant='success' className='btn btn-success' name='emailbutton' onClick={(e) => agreementUserProject(e.currentTarget.name)} size='sm'>Enviar Correo</Button>
                            <Button variant='danger' className='btn btn-danger' onClick={(e) => setShowFormEmail(false)} size='sm'>Cancelar</Button>
                        </div>
                        </Form>
                    </> : <></>
                }
                {
                    showFormEmail === false && showWspConfirm === true ? 
                    <>
                    <h6 className='text-center'>¿Se contactó con el cliente?</h6>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Button className="btn-primary" name='wspbutton' size="sm" onClick={(e) => agreementUserProject(e.currentTarget.name)}>Si me contacté</Button>
                        <Button className="btn-danger" onClick={() => {setShowWspConfirm(false); setShowModalContact(false)}} size="sm" >No me contacté</Button>
                    </div>
                    </> : 
                    <></>
                }
            </Modal.Body>
            </Modal>
            </>
        )
    }

    const getAccess = async (token) =>{
        const ispyme = JSON.parse(localStorage.getItem('ispyme'));
        await Axios.post(ispyme ? "http://54.174.104.208:3001/api/user-info-pyme" : "http://54.174.104.208:3001/api/user-info",{
            'authorization' : `${token}`
        })
          .then((result) => {
              if(result.status === 200){
                    setResponse(result.status)
                    setUserInfo(result.data[0])
                    getProjects(result.data[0].idEmployed)
              }
          }).catch(error => {
                setResponse(error.response.status)
                clearTimeout()
          });
    }

    const deniedAccess = () => {
        if(response === 403 || response === 500){
            setTimeout(() => {
                localStorage.removeItem("accessToken");
                return document.location.href="/login"; 
            }, 5000);
        }
        return(
        <div className="container mt-5 mb-5" hidden={loading}>
            <div className="denied" style={{height: '60vh'}}>
                <div className="wrapper mb-4">
                    <img src={accesDenied} alt="imagen de confirmación" style={{width: '10rem'}}/>
                </div>
                <div className="mt-1 congrats">
                    {
                        response === 403 ? 'SU SESIÓN HA EXPIRADO' : 'ACCESO DENEGADO'
                }
                </div>
                <div className="d-grid mt-2">
                    <a className="btn btn-danger btn-md" href="/login">Iniciar Sesión</a>
                </div>
            </div>
        </div>)
    }

    const allowAccess = () =>{
        let maxDate = new Date()
        maxDate.setFullYear(maxDate.getFullYear()+1)
        const ispyme = JSON.parse(localStorage.getItem('ispyme'));
        return(
            <div hidden={loading}>
                <div>
                <Col>
                    <Nav aria-label="breadcrumb" className="bg-light p-3 mb-4">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to={'/'} >Inicio</Link></li>
                            <li className="breadcrumb-item"><Link to={ispyme ? '/perfil-pyme' : '/perfil'} >Mi Perfil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Solicitudes</li>
                        </ol>
                    </Nav>
                </Col>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-lg-6">
                            <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{"visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp"}}>
                            <h3><span>Solicitudes</span></h3>
                            <p>En ésta sección podrás visualizar y controlar tus solicitudes de trabajo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='p-3'>
                    <div className="row d-flex text-end">
                        <div><strong style={{fontSize:'16px', color: '#384451'}}>Ayuda</strong>{' '}<i className='fas fa-question-circle'
                            onClick= {() => setShowModal(true)} 
                            style={{fontSize:'20px',cursor:'pointer', color: '#384451'}}>
                        </i></div>
                    </div>
                    <Container className='shadow-lg rounded-2 mt-3 mb-5 p-2' style={{minHeight: '60vh'}} fluid>
                        <Modal
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={showModal}
                            onHide={() => setShowModal(false)}
                            >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                ¿Cómo aceptar una solicitud de trabajo?
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>Acordar Trabajo</h5>
                                <ol>
                                    <li className='mb-1'>
                                        Click en el botón Acordar Trabajo.
                                    </li>
                                    <li className='mb-1'>
                                        Elegir el método de contacto (whatsapp o email).
                                    </li>
                                    <li className='mb-1'>
                                        Escribir mensaje a cliente para solicitar más información.
                                    </li>
                                    <li className='mb-1'>
                                        Coordinar visita previa al trabajo si es necesario. 
                                    </li>
                                    <li>
                                        Una vez te contactes con tu cliente, tu solicitud pasará a pendiente, dónde podrás confirmar o rechazar la solicitud.
                                    </li>
                                </ol>
                                <h5>Confirmar Trabajo</h5>
                                <ol>
                                    <li className='mb-1'>
                                        Click en el botón Confirmar (Éste botón aparecerá luego de acordar el trabajo).
                                    </li>
                                    <li className='mb-1'>
                                        Seleccionar la fecha de comienzo acordada previamente con su cliente.
                                    </li>
                                    <li className='mb-1'>
                                        Click en el botón Aceptar para completar la solicitud laboral.
                                    </li>
                                    <li className='mb-1'>
                                        Su solicitud aparecerá en la pestaña "solicitudes Confirmadas", donde podrá ver la fecha de comienzo del trabajo y los datos de su cliente. 
                                    </li>
                                    <li>
                                        Esperar la fecha para darle inicio a su trabajo.
                                    </li>
                                </ol>
                                <h5>Rechazar Solicitud</h5>
                                <ol>
                                    <li className='mb-1'>
                                        Click en el botón Rechazar (Éste botón aparecerá luego de acordar el trabajo).
                                    </li>
                                    <li className='mb-1'>
                                        Se va a desplegar un mensaje de alerta en el cuál se le preguntará si está seguro de su decisión.
                                    </li>
                                    <li className='mb-1'>
                                        Click en el botón Aceptar para rechazar la solicitud laboral.
                                    </li>
                                    <li className='mb-1'>
                                        La solicitud rechazada aparecerá en la pestaña "solicitudes Rechazadas". 
                                    </li>
                                </ol>
                            </Modal.Body>
                        </Modal>
                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                            <Modal.Title>Confirmación de Trabajo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>    
                                <Alert key='secondary' variant='secondary'>
                                    <p className="mb-0" style={{fontSize: '14px'}}>
                                        <i className='fas fa-exclamation-triangle' style={{fontSize: '18px'}}></i>
                                        {' '}Por favor, elija la fecha acordada con su cliente. <br/><br/>
                                        El plazo máximo para realizar el trabajo es hasta un año a partir de hoy.<br/>
                                        {/* Luego de seleccionar la fecha de inicio de su trabajo, ésta solicitud
                                        pasará a solicitudes confirmadas. */}
                                    </p>
                                </Alert>
                                <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Fecha de inicio</Form.Label>
                                    <Form.Control id='dateRequestConfirm' type="date" placeholder="name@example.com" 
                                    min={new Date().toISOString().split('T')[0]}
                                    max={maxDate.toISOString().split('T')[0]} onChange={() =>setEnableConfirm(true)}/>
                                </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="success" disabled={!enableConfirm} onClick={e=> confirmUserProject(e)}>
                                Confirmar
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                                Cancelar
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <Tabs defaultActiveKey="requests" id="justify-tab-example">
                            <Tab  eventKey="requests" title="Pendientes">
                            {
                            projectsData.length > 0 ? 
                            <> 
                            {
                            <Table striped bordered hover responsive='md' className='mt-3'>
                                <thead>
                                    <tr>
                                        <th>Cliente</th>
                                        <th>Rut</th>
                                        <th>Dirección</th>
                                        <th>Celular</th>
                                        <th>Resumen del trabajo</th>
                                        <th className='text-center'>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    projectsData.map((values,key) =>{
                                        let direccion = null
                                        if(values.calle !== ''){
                                            if(values.pasaje !== ''){
                                                direccion = values.calle+' '+values.NumeroCasa+', Pasaje '+values.pasaje+', '+values.comuna
                                            }else{
                                                direccion = values.calle+' '+values.NumeroCasa+','+values.comuna
                                            }
                                        }else{
                                            direccion = values.dptoDirec+', Piso '+values.NumeroPiso+', Departamento '+values.NumeroDepto+', '+values.comuna
                                        }
                                        return(
                                            <>
                                                <tr key={key}>
                                                    <td>{values.customerName+' '+values.lastNameCustomer}</td>
                                                    <td>{values.rutCustomer}</td>
                                                    <td>{direccion}</td>
                                                    <td>{values.cellphoneCustomer}</td>
                                                    <td>{values.descripcionTrabajo}</td>
                                                    <td>
                                                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                                            {
                                                                values.estado === 'acordar' ? 
                                                                <div className='d-flex justify-content-center align-items-center'>
                                                                    <Button id={values.idRequest} tabIndex={values.idRequest} variant='secondary' className='btn btn-secondary me-1' onClick= {(e) => {setShowModalContact(true); setTabIndex(e.currentTarget.tabIndex)}} size='sm'>Acordar Trabajo</Button>
                                                                </div>
                                                                 : <><Button variant='primary' className='btn btn-primary' size='sm' onClick={() => {setShow(true); setIdRequestConfirm(values.idRequest)}} >Aceptar</Button>
                                                                 <Button variant='danger' className='btn btn-danger' size='sm' onClick={() => rejectUserProject(values.idRequest)}>Rechazar</Button></>
                                                            }
                                                        </div>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                                {
                                    showModalContact === true ? <MyModalContact
                                    info={projectsData.filter(element =>{
                                        return element.idRequest === tabIndex
                                    })} 
                                    show={showModalContact} onHide={() => setShowModalContact(false)} /> : <></>
                                }
                                </tbody>
                            </Table>
                            }
                            </>
                            : 
                            <>
                                <Card className='d-flex align-items-center rounded-0 justify-content-center text-center' style={{height: '60vh'}}>
                                    <h5><strong>Por el momento no tienes solicitudes</strong></h5>
                                    <div className="mt-4">
                                    <img variant="top" src={norequests} 
                                        alt={'project'} style={{height: '180px', width: 'auto'}}/>
                                    </div> 
                                </Card>
                            </>
                            }
                            </Tab>
                            <Tab eventKey="requests-confirmeds" title="Confirmadas">
                            {
                            projectsDataConfirmed.length > 0 ? 
                            <>
                            {
                                <Table striped bordered hover responsive='md' className='mt-3'>
                                <thead>
                                    <tr>
                                        <th>Cliente</th>
                                        <th>Rut</th>
                                        <th>Dirección</th>
                                        <th>Teléfono</th>
                                        <th>Descripción del trabajo</th>
                                        <th>Comienzo del trabajo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    projectsDataConfirmed.map((values,key) =>{
                                        let direccion = null
                                        if(values.calle !== ''){
                                            if(values.pasaje !== ''){
                                                direccion = values.calle+' '+values.NumeroCasa+', Pasaje '+values.pasaje+', '+values.comuna
                                            }else{
                                                direccion = values.calle+' '+values.NumeroCasa+','+values.comuna
                                            }
                                        }else{
                                            direccion = values.dptoDirec+', Piso '+values.NumeroPiso+', Departamento '+values.NumeroDepto+', '+values.comuna
                                        }
                                        return(
                                            <>
                                                <tr key={key}>
                                                    <td>{values.customerName+' '+values.lastNameCustomer}</td>
                                                    <td>{values.rutCustomer}</td>
                                                    <td>{direccion}</td>
                                                    <td>{values.cellphoneCustomer}</td>
                                                    <td>{values.descripcionTrabajo}</td>
                                                    <td>{values.startDate}</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                                </tbody>
                                </Table>
                            }
                            </>
                            : 
                            <>
                            <Card className='d-flex align-items-center rounded-0 justify-content-center text-center' style={{height: '60vh'}}>
                                    <h5><strong>Por el momento no tienes solicitudes confirmadas</strong></h5>
                                    <div className="mt-4">
                                    <img variant="top" src={norequestsconfirmeds} 
                                        alt={'project'} style={{height: '180px', width: 'auto'}}/>
                                    </div> 
                                </Card>
                            </>
                            }
                            </Tab>
                            <Tab eventKey="requests-rejecteds" title="Rechazadas">
                            {
                            projectsDataRejected.length > 0 ? 
                            <>
                            {
                                <Table striped bordered hover responsive='md' className='mt-3'>
                                <thead>
                                    <tr>
                                        <th>Cliente</th>
                                        <th>Rut</th>
                                        <th>Dirección</th>
                                        <th>Teléfono</th>
                                        <th>Descripción del trabajo</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    projectsDataRejected.map((values,key) =>{
                                        let direccion = null
                                        if(values.calle !== ''){
                                            if(values.pasaje !== ''){
                                                direccion = values.calle+' '+values.NumeroCasa+', Pasaje '+values.pasaje+', '+values.comuna
                                            }else{
                                                direccion = values.calle+' '+values.NumeroCasa+','+values.comuna
                                            }
                                        }else{
                                            direccion = values.dptoDirec+', Piso '+values.NumeroPiso+', Departamento '+values.NumeroDepto+', '+values.comuna
                                        }
                                        return(
                                            <>
                                                <tr key={key}>
                                                    <td>{values.customerName+' '+values.lastNameCustomer}</td>
                                                    <td>{values.rutCustomer}</td>
                                                    <td>{direccion}</td>
                                                    <td>{values.cellphoneCustomer}</td>
                                                    <td>{values.descripcionTrabajo}</td>
                                                    <td>Rechazada</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                                </tbody>
                                </Table>
                            }
                            </>
                            : 
                            <>
                                <Card className='d-flex align-items-center justify-content-center text-center rounded-0' style={{height: '60vh'}}>
                                    <h5><strong>Por el momento no haz rechazado ningúna solicitud</strong></h5>
                                    <div className="mt-4">
                                    <img variant="top" src={norequestsconfirmeds} 
                                        alt={'project'} style={{height: '180px', width: 'auto'}}/>
                                    </div> 
                                </Card>
                            </>
                            }
                            </Tab>
                        </Tabs>
                    </Container>
                </section>
            </div>
        )
    }

    useEffect(() =>{
        document.getElementById('menuHolder').scrollIntoView();
        setTimeout(() =>{
            setLoading(false);
        },1720)
        const getToken = localStorage.getItem('accessToken');
        if(getToken === null){
            setLoading(false);
            setResponse(500);
        }else{
            getAccess(getToken)
        }
    },[])

  return (
    <>
        <div id='denied' className="container mt-5 mb-5" hidden={!loading}>
            <div className="denied" style={{height: '60vh'}}>
                <div className="wrapper text-center">
                    <img src={loadingprofilegf} alt="imagen de confirmación" style={{width: '8rem'}}/>
                </div>
                    <div className="success-account mb-3">
                    Obteniendo sus solicitudes...
                </div>
            </div>
        </div>
      {
        response !== 200 ? deniedAccess()
        : allowAccess()
      }
    </>
  )
}

export default ToDoList
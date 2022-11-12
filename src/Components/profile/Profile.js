import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Axios  from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/Profile.css'
import { Button, Card, Container, Form, ListGroup, Nav, ProgressBar, Tab, Tabs } from 'react-bootstrap'
import web from '../assets/web.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import whatsapp from '../assets/whatsapp.png'
import accesDenied from '../assets/access-denied.png'
import loadingprofilegf from '../assets/loading-profile.gif'
import perfil from '../assets/perfil.png'
import uploadPhoto from '../assets/upload-photo.png'
import Projects from './Projects'
import Comments from './Comments'
import Ratings from './Ratings'

const Profile = () => {

    const MySwal = withReactContent(Swal)
    const navigate = useNavigate()
    const [ dataUser, setDataUser ] = useState([])
    const [ response, setResponse ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ inputs , setInputs ] = useState(false)
    const [ validationCell, setValidationCell ] = useState(false)
    const [ cancelButton, setCancelButton ] = useState(false)
    const [ colorCard, setColorCard ] = useState("#ffffff")
    const [ savePhoto, setSavePhoto ] = useState(false)
    const [ getPhoto, setGetPhoto ] = useState(false)
    const [ enableSave, setEnableSave ] = useState(false)
    const [ updateProgress, setUpdateProgress ] = useState(0)
    const [ hiddenProgress, showProgress ] = useState(true)
    const [ratingScore, setRatingScore] = useState(0);
    const [commentsWorker, setCommentsWorker] = useState([])
    
    const handleChangePhoto = () =>{
        const token = localStorage.getItem('accessToken');
        let imagefile = document.getElementById('formFile');
        const formData = new FormData();
        formData.append('formFile',imagefile.files[0])
        MySwal.fire({
            title: 'Estás seguro de cambiar tu foto de perfil?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Cambiar`,
            denyButtonText: `Cancelar`,
            }).then((result) => {
                if(result.isConfirmed){
                    showProgress(false)
                    Axios.put("http://54.174.104.208:3001/api/images",
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data;',
                            'Authorization': `${token}`
                        },
                        onUploadProgress: function(progressEvent) {
                            let percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                            setUpdateProgress(percentCompleted)
                        }
                    }).then((result) => {
                        if(result.status === 200){
                            const token = localStorage.getItem('accessToken');
                            setCancelButton(true);
                            setSavePhoto(false)
                            deletePrevUserPhoto()
                            Swal.fire('Su foto ha sido actualizada con éxito!', '', 'success')
                            showProgress(true)
                            getAccess(token)
                            document.getElementById('photoUser').src = "http://54.174.104.208:3001" + result.data.imagePath
                        }
                    }).catch(error => {
                        Swal.fire('No pudimos cambiar tu foto de perfil', '', 'warning')
                    });
                }
                setCancelButton(true)
                setSavePhoto(true)
            })
    }
    

    const deletePrevUserPhoto = () =>{
        Axios.delete('http://54.174.104.208:3001/api/images/delete/' + getPhoto)
          .then((result) => {
              if(result.status === 200){
                console.log(result);
              }
          }).catch(error => {
                console.log(error);
          });
    }

    const handleButton = (e) =>{
        setCancelButton(true);
        setSavePhoto(false);
        if(e.textContent === "Actualizar Datos"){
            const token = localStorage.getItem('accessToken');
            let inputValues = document.querySelectorAll('input');
            let inputsArray =Array.from(inputValues);
            let newArrayValues = []
            inputsArray.forEach(elements => { 
                if(elements.name !== 'formFile'){
                    newArrayValues.push({name: elements.name, value: elements.value});
                }
            });

            MySwal.fire({
                title: '¿Estás seguro de actualizar tus datos?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `Actualizar`,
                denyButtonText: `Cancelar`,
              }).then((result) => {
                if (result.isConfirmed) {
                    Axios.put("http://54.174.104.208:3001/api/update-user", {newArrayValues ,'authorization' : `${token}`})
                    .then((result) => {
                        if(result.status === 200){
                            Swal.fire('Actualización exitosa!', '', 'success')
                            setInputs(false)
                            setCancelButton(false)
                            getAccess(token)
                            
                        }
                    }).catch(error => {
                        Swal.fire('Los cambios no fueron guardados', '', 'danger')
                        setInputs(false)
                        setCancelButton(false)
                    });
                }
                setCancelButton(true)
              })
        }else if(e.textContent === "Cancelar"){
            setCancelButton(false)
            setValidationCell(false)
        }
    }

    const getAccess = (token) =>{
        Axios.post("http://54.174.104.208:3001/api/user-info", {
            'authorization' : `${token}`
        })
          .then((result) => {
              if(result.status === 200){
                    setResponse(result.status)
                    setLoading(false)
                    setDataUser(result.data)
                    localStorage.setItem('userPhoto', "http://54.174.104.208:3001/api/images/" + result.data[0].userPhoto)
                    setGetPhoto(result.data[0].userPhoto)
                    Axios.get("http://54.174.104.208:3001/api/worker/ratings/" + result.data[0].id)
                    .then((result) => {
                        if(result.status === 200){
                            setRatingScore(result.data)
                        }
                    }).catch(error => {
                        setResponse(error.response.status)
                    });
                    Axios.get("http://54.174.104.208:3001/api/worker/evaluations/" + result.data[0].id)
                    .then((result) => {
                        if(result.status === 200){
                                setCommentsWorker(result.data)
                        }
                    }).catch(error => {
                        setResponse(error.response.status)
                    });
              }
          }).catch(error => {
                setResponse(error.response.status)
                setLoading(false)
                clearTimeout()
          });
    }

    const onchangeCell = (e) =>{
        if (e.value.length === 8) {
            setValidationCell(false);
        }else{
            setValidationCell(true);
        }
    }

    const open_file = () =>{
        setCancelButton(true);
        setSavePhoto(true)
        setEnableSave(true)
        document.getElementById("formFile").click();
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
        return(
        <>
            <div hidden={loading}>
                <Col>
                    <Nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to={'/'} >Inicio</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Mi Perfil</li>
                            <li className="breadcrumb-item"><Link to={'/mis-proyectos'} >Mis Proyectos</Link></li>
                        </ol>
                    </Nav>
                </Col>
            </div>
            {
                dataUser.map((element,key) =>{
                    return(
                        <>
                            <Container className='profile-container shadow-lg rounded-4 mt-3 mb-5 p-4' style={element.userColor !== undefined ? { 'backgroundColor': element.userColor} : {'backgroundColor': {colorCard}}}>
                                <Row className='mt-3 mb-3'>
                                    <Col lg={4} >
                                        <Card className='perfil shadow mb-4' key={key}>
                                        <input className="form-control" type="file" id="formFile" name='formFile' accept="image/*" onChange={(e) => setEnableSave(!enableSave)} hidden/>
                                        <img id='upload' className='upload mt-2' src={uploadPhoto} style={{ width: '5rem' }} alt="" hidden={inputs} onClick={open_file} />
                                        <img id='userPhoto' className='userphoto mt-2' variant="top" src={(element.userPhoto !== undefined && element.userPhoto !== null && element.userPhoto !== "") ? localStorage.getItem('userPhoto') : perfil} alt={'foto perfil'} style={{ width: '12rem'}} />
                                        <Card.Body>
                                            <Card.Title><strong>{element.nameUser + " " + element.lastnamesUser}</strong></Card.Title>
                                            <h6 style={{color: 'grey'}}>
                                            {element.workareaUser}
                                            </h6>
                                            <div className="mb-2" hidden={hiddenProgress}>
                                                <ProgressBar className='profprogress' now={updateProgress} label={`${updateProgress}%`}/>
                                            </div>
                                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                                {
                                                    savePhoto !== true ? <><Button variant={inputs === true ? 'success' : 'primary'} onClick={(e) => {handleButton(e.target); setInputs(true)}} 
                                                    disabled={validationCell !== true ? false : true}>
                                                        { inputs === true ? 'Actualizar Datos' : 'Editar Perfil' }
                                                    </Button>
                                                    {
                                                        cancelButton === true ? <Button variant="danger" onClick={(e) => {handleButton(e.target); setInputs(false)}} >Cancelar</Button> : <></>
                                                    }</> : <><Button variant={inputs === true ? 'success' : 'primary'} onClick={() => {handleChangePhoto()}} 
                                                    disabled={enableSave}>
                                                        { savePhoto === true ? 'Guardar Foto' : 'Editar Perfil' }
                                                    </Button>
                                                    {
                                                        cancelButton === true ? <Button variant="danger" onClick={(e) => {handleButton(e.target); setInputs(false); setEnableSave(false)}} >Cancelar</Button> : <></>
                                                    }
                                                    </> 
                                                }
                                            </div>
                                            {
                                                enableSave === true ? <Form.Text><span style={{color: 'red',fontWeight:'bold' }}>Debes seleccionar una imagen para tu perfil</span></Form.Text> : <></>
                                            }
                                        </Card.Body>
                                        </Card>
                                        <Card className='contactos shadow mb-4 mb-lg-0'>
                                            <ListGroup className='social-media p-2' variant="flush">
                                                <ListGroup.Item>{
                                                inputs === true ? <><div><img src={web} alt=''/></div><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingWebsite' defaultValue={element.webSite !== undefined ? element.webSite : ''} name='website' placeholder='floatingWebsite' />
                                                    <label htmlFor='floatingWebsite'>Ingrese su sitio web</label>
                                                </div></> : 
                                                <><img src={web} alt=''/><a href={element.webSite !== undefined ? 'http://'+element.webSite : '#'} target="_blank" rel="noopener noreferrer">{element.webSite !== undefined ? element.webSite : 'Sitio Web'}</a>
                                                </>
                                                }</ListGroup.Item>
                                                <ListGroup.Item>{
                                                inputs === true ? <><img src={instagram} alt=''/><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingInstagram' name='instagram' defaultValue={element.instagramSite !== undefined ? element.instagramSite : '#'} placeholder='floatingInstagram'/>
                                                    <label htmlFor='floatingInstagram'>Perfil de instagram</label>
                                                </div></> : 
                                                <><img src={instagram} alt=''/><a href={element.instagramSite !== undefined ? element.instagramSite : '#'} target="_blank" rel="noopener noreferrer">Instagram</a>
                                                </>}</ListGroup.Item>
                                                <ListGroup.Item>{
                                                inputs === true ? <><img src={facebook} alt=''/><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingFacebook' defaultValue={element.facebookSite !== undefined ? element.facebookSite : '#'} name='facebook' placeholder='floatingFacebook'/>
                                                    <label htmlFor='floatingFacebook'>Perfil de facebook</label>
                                                </div></> : 
                                                <><img src={facebook} alt=''/><a href={element.facebookSite !== undefined ? element.facebookSite : '#'} target="_blank" rel="noopener noreferrer">Facebook</a>
                                                </>}</ListGroup.Item>
                                                <ListGroup.Item>{
                                                inputs === true ? <><img src={twitter} alt=''/><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingTwitter' defaultValue={element.twitterSite !== undefined ? element.twitterSite : '#'} name='twitter' placeholder='floatingTwitter'/>
                                                    <label htmlFor='floatingTwitter'>Perfil de twitter</label>
                                                </div></> : 
                                                <><img src={twitter} alt=''/><a href={element.twitterSite !== undefined ? element.twitterSite : '#'} target="_blank" rel="noopener noreferrer">Twitter</a>
                                                </>}</ListGroup.Item>
                                                <ListGroup.Item>{
                                                inputs === true ? <><img src={whatsapp} alt=''/><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingWhatsapp' defaultValue={element.whatsappSite !== undefined ? element.whatsappSite : ''} placeholder='floatingWhatsapp'/>
                                                    <label htmlFor='floatingWhatsapp'>WhatsApp Web</label>
                                                    </div></> : 
                                                    <><img src={whatsapp} alt=''/><a href={element.whatsappSite !== undefined ? element.whatsappSite : '#'} target="_blank" rel="noopener noreferrer">WhatsApp Web</a></>}</ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                    </Col>
                                    <Col lg={8} className=''>
                                        <Card className='info mb-4 shadow'>
                                            <Card.Body>
                                            <Row>
                                                <Col sm={3}>
                                                <p className="mb-0">Nombre completo</p>
                                                </Col>
                                                <Col sm={9}>
                                                <p className="text-muted mb-0">{element.nameUser + " " + element.lastnamesUser}</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row >
                                                <Col sm={3}>
                                                <p className="mb-0">Email</p>
                                                </Col>
                                                <Col sm={9}>
                                                    <p className="text-muted mb-0">{element.email}</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row >
                                                <Col sm={3}>
                                                <p className="mb-0">Número de contacto</p>
                                                </Col>
                                                <Col sm={9}>
                                                {inputs === true ? <div className='form-floating col-12'>
                                                    <input type='number' className='form-control' onChange={(e) => onchangeCell(e.target)} id='floatingCell' name='cell' 
                                                    defaultValue={element.cellphone !== undefined ? element.cellphone : ''} maxLength={9} placeholder='floatingCell' required/>
                                                    <label htmlFor='cell'>Nuevo celular</label>
                                                    {
                                                        validationCell !== true ? '' : 
                                                        <Form.Text style={{color: 'red'}}>Ingrese sólo 8 números</Form.Text>
                                                    }
                                                </div> : <p className="text-muted mb-0">{element.cellphone}</p>}
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row >
                                                <Col sm={3}>
                                                <p className="mb-0">Lugar de residencia</p>
                                                </Col>
                                                <Col sm={9}>
                                                <p className="text-muted mb-0">{element.regionUser + ", " + element.cityUser + ", " + element.communeUser}</p>
                                                </Col>
                                            </Row>
                                            {
                                               inputs === true ? <><hr/>
                                               <Row className="mb-3">
                                                    <Col sm={3}>
                                                        <label for="colorInput" className="form-label">Elija el color de su tarjeta</label>
                                                    </Col>
                                                    <Col sm={9}>
                                                        <Form.Text><p style={{color: '#349568'}}>Procure usar tonos claros</p></Form.Text>
                                                        <input type="color" className="form-control form-control-color" id="colorInput" name='colorInput' onChange={(e) => setColorCard(e.target.value)} defaultValue={element.userColor !== undefined ? element.userColor : colorCard} title="Elija su color favorito"/>
                                                    </Col>
                                               </Row></> : <></>
                                            }
                                            </Card.Body>
                                        </Card>
                                        <Tabs defaultActiveKey="home" id="justify-tab-example">
                                            <Tab className='tabprof' eventKey="home" title="Rating">
                                                <Ratings data={ratingScore} />
                                            </Tab>  
                                            <Tab className='tabprof' eventKey="proyects" title="Proyectos">
                                                <Projects />
                                            </Tab>
                                            <Tab className='tabprof' eventKey="comments" title="Comentarios">
                                                <Comments data={commentsWorker}/>
                                            </Tab> 
                                        </Tabs>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    )
                })
            }
        </>)
    }

    useEffect(() =>{
        
        document.getElementById('menuHolder').scrollIntoView();
        setTimeout(() =>{
            const getToken = localStorage.getItem('accessToken');
            if(getToken === null){
                setLoading(false);
                setResponse(500);
            }else{
                getAccess(getToken);
            }
        },1720)
    },[])

    return (
      <>
        <div id='denied' className="container mt-5 mb-5" hidden={!loading}>
            <div className="denied" style={{height: '60vh'}}>
                <div className="wrapper text-center">
                    <img src={loadingprofilegf} alt="imagen de confirmación" style={{width: '15rem'}}/>
                </div>
                    <div className="success-account mb-3">
                    Obteniendo información de su perfil...
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

export default Profile
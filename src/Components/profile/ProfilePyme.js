import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Axios  from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/Profile.css'
import { Button, Card, Container, Form, ListGroup, Modal, Nav, ProgressBar, Tab, Table, Tabs } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import web from '../assets/web.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import accesDenied from '../assets/access-denied.png'
import loadingprofilegf from '../assets/loading-profile.gif'
import perfil from '../assets/perfil.png'
import uploadPhoto from '../assets/upload-photo.png'
import Projects from './Projects'
import Comments from './Comments'
import Ratings from './Ratings'
import Specialities from './Specialities'

const ProfilePyme = () => {

    const MySwal = withReactContent(Swal)
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
    const [ updateProgressSpec, setUpdateProgressSpec ] = useState(0)
    const [ hiddenProgress, showProgress ] = useState(true)
    const [ hiddenProgressSpec, showProgressSpec ] = useState(true)
    const [ratingScore, setRatingScore] = useState(0);
    const [commentsWorker, setCommentsWorker] = useState([])
    const [especialitiesWorker, setEspecialitiesWorker] = useState([])
    const [ descriptSpeciality, setDescriptSpeciality ] = useState(true)
    const [ specialityForm, setSpecialityForm ] = useState(false)
    const [ descriptSpecialityMsge, setDescriptSpecialityMsge ] = useState([])
    const [ specialityFormMsge, setSpecialityFormMsge ] = useState([])
    const [showModalSpeciality, setShowModalSpeciality] = useState(false);

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
                    Axios.put("54.174.104.208:3001/api/images-pyme",
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
                            setCancelButton(false);
                            setSavePhoto(false)
                            deletePrevUserPhoto()
                            Swal.fire('Su foto ha sido actualizada con éxito!', '', 'success')
                            showProgress(true)
                            getAccess(token)
                            document.getElementById('photoUser').src = "54.174.104.208:3001" + result.data.imagePath
                        }
                    }).catch(error => {
                        Swal.fire('No pudimos cambiar tu foto de perfil', '', 'warning')
                    });
                }
                setCancelButton(true)
                setSavePhoto(true)
            })
    }

    const uploadSpeciality = (e) =>{

        e.preventDefault();

        let arrayValues = [];
        const token = localStorage.getItem('accessToken');
        const specialityFormFile = new FormData();
        const formValues = document.getElementsByClassName('SpecialityForm')[0].elements;

        specialityFormFile.append('specialityFormFile',document.getElementById('specialityFormFile').files[0]);

        [...formValues].forEach((elements) =>{
            if(elements.type !== "file"){
                arrayValues.push(elements.value)
            }
        })
        specialityFormFile.append('authorization', token)
        specialityFormFile.append('params', JSON.stringify(arrayValues))

        MySwal.fire({
            title: '¿Estás seguro de agregar ésta certificación?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Agregar`,
            denyButtonText: `Cancelar`,
            }).then((result) => {
                if(result.isConfirmed){
                    showProgressSpec(false)
                    Axios.post('54.174.104.208:3001/api/upload/speciality',specialityFormFile, config)
                    .then((result) => {
                        if(result.status === 200){
                            Swal.fire({
                                title: '<strong>Certificación Guardada</strong>',
                                icon: 'success',
                                html:`<span>Su certificación fue almacenada con éxito..
                                    <p className="mt-1">Ésta será visible para todas las personas que visiten su perfil.</p>
                                </span>`,
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'Aceptar'
                              }).then((result) => {
                                if(result.isConfirmed){
                                    //document.getElementById('SpecialityForm').reset()
                                    handleCloseSpeciality()
                                }
                            })
                            Axios.get("54.174.104.208:3001/api/download/speciality/" + dataUser[0].id)
                                .then((result) => {
                                    if(result.status === 200){
                                        setEspecialitiesWorker(result.data)
                                    }
                                }).catch(error => {
                                    setEspecialitiesWorker([])
                                });
                        }
                    }).catch(error => {
                        showProgressSpec(true)
                        setResponse(error.response.status)
                        Swal.fire({
                            icon: 'error',
                                html:`<p className="mt-1">Lo sentimos, su certificación no pudo ser guardada, intente de nuevo o más tarde...</p>`,
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'Aceptar'
                          }).then((result) => {
                            if(result.isConfirmed){
                                handleCloseSpeciality()
                            }
                        })
                    });
                }
            })
    }

    let config = {
        onUploadProgress: function(progressEvent) {
          let percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
          setUpdateProgressSpec(percentCompleted)
        }
    };

    const deletePrevUserPhoto = () =>{
        Axios.delete('54.174.104.208:3001/api/images/delete/' + getPhoto)
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
                    Axios.put("54.174.104.208:3001/api/update-pyme", {newArrayValues ,'authorization' : `${token}`})
                    .then((result) => {
                        if(result.status === 200){
                            Swal.fire({
                                    icon: 'success',
                                    html:`<p className="mt-1">Su perfil fue actualizado correctamente.</p>`,
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: 'Aceptar'
                              })
                            setInputs(false)
                            setCancelButton(false)
                            getAccess(token)
                            
                        }
                    }).catch(error => {
                        Swal.fire({
                            icon: 'error',
                                html:`<p className="mt-1">Lo sentimos, no pudimos guardar los cambios...</p>`,
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'Aceptar'
                          })
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
        Axios.post("54.174.104.208:3001/api/user-info-pyme", {
            'authorization' : `${token}`
        }).then((result) => {
              if(result.status === 200){
                    setResponse(result.status)
                    setLoading(false)
                    setDataUser(result.data)
                    localStorage.setItem('userPhoto', "54.174.104.208:3001/api/images/" + result.data[0].userPhoto)
                    setGetPhoto(result.data[0].userPhoto)
                    Axios.get("54.174.104.208:3001/api/worker/ratings/" + result.data[0].iduser_pyme)
                        .then((result) => {
                            if(result.status === 200){
                                setRatingScore(result.data)
                            }
                        }).catch(error => {
                            setRatingScore([])
                        });
                    Axios.get("54.174.104.208:3001/api/worker/evaluations/" + result.data[0].iduser_pyme)
                        .then((result) => {
                            if(result.status === 200){
                                    setCommentsWorker(result.data)
                            }
                        }).catch(error => {
                            setCommentsWorker([])
                        });
                    Axios.get("54.174.104.208:3001/api/download/speciality-pyme/" + result.data[0].iduser_pyme)
                        .then((result) => {
                            if(result.status === 200){
                                setEspecialitiesWorker(result.data)
                            }
                        }).catch(error => {
                            setEspecialitiesWorker([])
                        });
              }
          }).catch(error => {
                setResponse(error.response.status)
                setLoading(false)
                clearTimeout()
          });
    }

    const handleCloseSpeciality = () => {

        setShowModalSpeciality(false)
        setDescriptSpeciality(true)
        setUpdateProgressSpec(0)
        showProgressSpec(true)
    }

    const handleShowSpeciality = () => setShowModalSpeciality(true);

    const checkSpecialityFormFile = (descriptSp) =>{        
        if(descriptSp.value !== ""){
            if(descriptSp.files[0].type === "image/jpeg" || descriptSp.files[0].type === "image/jpg" 
                || descriptSp.files[0].type === "image/png" || descriptSp.files[0].type === "application/pdf"){
                    setSpecialityFormMsge('')
                    setSpecialityForm(false)
                    return false
            }else{
                setSpecialityFormMsge('Por favor, ingrese una imagen JPEG, JPG o PNG o un archivo PDF.')
                setSpecialityForm(true)
                return true
            }
        }
    }

    const checkDescriptSpeciality = (descriptSp) =>{

        let descriptWork = descriptSp.value
        const regdescriptWork = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?~´]/);

        if(descriptWork !== '' && descriptWork !== null && descriptWork !== undefined){
            if(!regdescriptWork.test(descriptWork)){
                if(descriptWork.length < 20){
                    setDescriptSpecialityMsge('Por favor, ingrese al menos 20 letras para describir su certificación.')
                    setDescriptSpeciality(true)
                    return true
                }else{
                    setDescriptSpecialityMsge('')
                    setDescriptSpeciality(false)
                    return false
                }
            }else{
                setDescriptSpecialityMsge('Por favor, ingrese sólo letras o números.')
                setDescriptSpeciality(true)
                return true
            }
        }else{
            setDescriptSpecialityMsge('Por favor, ingrese una breve descripción de su certificación.')
            setDescriptSpeciality(true)
            return true
        }
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
                    <Nav aria-label="breadcrumb" className="bg-light p-3 mb-4">
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
                    let sumaTotal = null;
                    if(ratingScore.length > 0){
                        ratingScore.forEach(element => {
                            let ratingParse = JSON.parse(element.aptitudRating)
                            let sumaRating = (ratingParse.cuidadoso + ratingParse.honestidad + ratingParse.precio + ratingParse.puntualidad + ratingParse.responsabilidad) / 5;
                            sumaTotal = (sumaTotal + sumaRating);
                        });
                    }
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
                                            <Card.Title><strong>{element.razonSocial}</strong></Card.Title>
                                            <h6 style={{color: 'grey'}}>
                                            {element.workareaUser}
                                            </h6>
                                            <div className='d-flex align-items-center justify-content-center'>
                                            <Rating
                                                initialValue={ratingScore.length > 0 ? (sumaTotal / ratingScore.length).toFixed(1) : 0}
                                                size={32}
                                                fillColor='orange'
                                                emptyColor='gray'
                                                allowFraction={true}
                                                readonly={true}
                                            /><span style={{fontSize: '16px', fontWeight: '600'}}>({ratingScore.length > 0 ? (sumaTotal / ratingScore.length).toFixed(1) : 0})</span>
                                            </div>
                                            <span style={{fontSize: '16px', fontWeight: '600'}}>({ratingScore.length} evaluaciones)</span>
                                            <div className="mb-2" hidden={hiddenProgress}>
                                                <ProgressBar className='profprogress' now={updateProgress} label={`${updateProgress}%`}/>
                                            </div>
                                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2">
                                                {
                                                    savePhoto !== true ? <><Button variant={inputs === true ? 'success' : 'primary'} onClick={(e) => {handleButton(e.target); setInputs(true)}} 
                                                    disabled={validationCell !== true ? false : true}>
                                                        { inputs === true ? 'Actualizar Datos' : 'Editar Perfil' }
                                                    </Button>
                                                    {
                                                        cancelButton === true ? <Button variant="danger" onClick={(e) => {handleButton(e.target); setInputs(false)}} >Cancelar</Button> : <></>
                                                    }</> : <><Button variant={inputs === true ? 'success' : 'primary'} onClick={() => {handleChangePhoto()}} 
                                                    disabled={enableSave}>
                                                        { savePhoto === true ? 'Subir Logo' : 'Editar Perfil' }
                                                    </Button>
                                                    {
                                                        cancelButton === true ? <Button variant="danger" onClick={(e) => {handleButton(e.target); setInputs(false); setEnableSave(false)}} >Cancelar</Button> : <></>
                                                    }
                                                    </> 
                                                }
                                            </div>
                                            {
                                                enableSave === true ? <Form.Text><span style={{color: 'red',fontWeight:'bold' }}>Debes seleccionar tu logo empresarial</span></Form.Text> : <></>
                                            }
                                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2">
                                                <Button className='specButton' onClick={handleShowSpeciality}>Agregar Certificación
                                                </Button>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                        <Card className='contactos shadow mb-4 mb-lg-0'>
                                            <ListGroup className='social-media p-2' variant="flush">
                                                <ListGroup.Item>{
                                                inputs === true ? <><div><img src={web} alt=''/></div><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingWebsite' defaultValue={element.webSite !== undefined ? element.webSite : ''} name='website' placeholder='floatingWebsite' />
                                                    <label htmlFor='floatingWebsite'>Ingrese su sitio web</label>
                                                </div></> : 
                                                <><img src={web} alt=''/><a href={element.webSite !== undefined ? ''+element.webSite : '#'} target="_blank" rel="noopener noreferrer">{element.webSite !== undefined ? element.webSite : 'Sitio Web'}</a>
                                                </>
                                                }</ListGroup.Item>
                                                <ListGroup.Item>{
                                                inputs === true ? <><img src={instagram} alt=''/><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingInstagram' name='instagram' defaultValue={element.instagramSite !== undefined ? element.instagramSite : '#'} placeholder='floatingInstagram'/>
                                                    <label htmlFor='floatingInstagram'>URL perfil de instagram</label>
                                                </div></> : 
                                                <><img src={instagram} alt=''/><a href={element.instagramSite !== undefined ? element.instagramSite : '#'} target="_blank" rel="noopener noreferrer">Instagram</a>
                                                </>}</ListGroup.Item>
                                                <ListGroup.Item>{
                                                inputs === true ? <><img src={facebook} alt=''/><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingFacebook' defaultValue={element.facebookSite !== undefined ? element.facebookSite : '#'} name='facebook' placeholder='floatingFacebook'/>
                                                    <label htmlFor='floatingFacebook'>URL perfil de facebook</label>
                                                </div></> : 
                                                <><img src={facebook} alt=''/><a href={element.facebookSite !== undefined ? element.facebookSite : '#'} target="_blank" rel="noopener noreferrer">Facebook</a>
                                                </>}</ListGroup.Item>
                                                <ListGroup.Item>{
                                                inputs === true ? <><img src={twitter} alt=''/><div className='form-floating col-10'>
                                                    <input type="text" className='form-control' id='floatingTwitter' defaultValue={element.twitterSite !== undefined ? element.twitterSite : '#'} name='twitter' placeholder='floatingTwitter'/>
                                                    <label htmlFor='floatingTwitter'>URL perfil de twitter</label>
                                                </div></> : 
                                                <><img src={twitter} alt=''/><a href={element.twitterSite !== undefined ? element.twitterSite : '#'} target="_blank" rel="noopener noreferrer">Twitter</a>
                                                </>}</ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                    </Col>
                                    <Col lg={8} className=''>
                                    <Card className='info mb-4 shadow'>
                                        <Card.Body>
                                        <h5 className="mb-4">Información empresarial</h5>
                                        <Row>
                                            <Col sm={3}>
                                            <p className="mb-0">Actividad económica o Giro</p>
                                            </Col>
                                            <Col sm={9}>
                                            <p className="text-muted mb-0">{element.economicActivity}</p>
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
                                                defaultValue={element.cellphone !== undefined ? element.cellphone : ''} max={9} placeholder='floatingCell' required/>
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
                                        <hr/>
                                        <Row >
                                            <Col sm={3}>
                                            <p className="mb-0">Años de servicio</p>
                                            </Col>
                                            <Col sm={9}>
                                            {inputs === true ? <div className='form-floating col-12'>
                                                <input type='number' className='form-control' id='floatingExp' name='exp' 
                                                defaultValue={element.experienceYears !== undefined ? element.experienceYears : ''} max={2} placeholder='floatingExp' required/>
                                                <label htmlFor='exp'>Años de servicio</label>
                                            </div> : <p className="text-muted mb-0">{element.experienceYears}</p>}
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
                                    {
                                    especialitiesWorker.length > 0 ?
                                    <Card className='info mb-4 shadow'>
                                        <Card.Body>
                                            <h5 className="mb-2">Certificaciones</h5>
                                            <hr/>
                                            <Table className="text-left" responsive>
                                            <thead>
                                                <tr>
                                                    <th style={{fontWeight: '600'}}>Descripción</th>
                                                    <th style={{fontWeight: '600'}}>Archivo</th>
                                                    <th style={{fontWeight: '600'}} className="text-center">Acción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                
                                                especialitiesWorker.map(value =>{
                                                    let descriptSpec = JSON.parse(value.especialityDescript)
                                                    let specialityToString = Buffer.from(value.especialityDoc)
                                                    let speciality = JSON.parse(specialityToString)
                                                    let arrayEspecialities = []
                                                    let objectEspeciality = {
                                                        idEspeciality: null,
                                                        descript: null,
                                                        image: null,
                                                        fileType: null
                                                    }

                                                    objectEspeciality.idEspeciality = value.idworkerEspeciality
                                                    objectEspeciality.descript = descriptSpec[0]
                                                    objectEspeciality.image = speciality[0]
                                                    objectEspeciality.fileType = value.fileType
                                                    arrayEspecialities.push(objectEspeciality)

                                                        return(
                                                            <>
                                                                <tr>
                                                                <Specialities data={arrayEspecialities} id={element.id}/>  
                                                                </tr>                                                          
                                                            </>
                                                        )
                                                })
                                            }
                                            </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                    : <></>
                                    }
                                        
                                        <Tabs defaultActiveKey="home" id="justify-tab-example">
                                            <Tab className='tabprof' eventKey="home" title="Rating">
                                                <Ratings data={ratingScore} />
                                            </Tab>  
                                            <Tab className='tabprof' eventKey="proyects" title="Proyectos">
                                                <Projects />
                                            </Tab>
                                            <Tab className='tabprof' eventKey="comments" title={`Comentarios (${commentsWorker.length})`}>
                                                <Comments data={commentsWorker}/>
                                            </Tab> 
                                        </Tabs>
                                    </Col>
                                </Row>
                                <Modal className='modalSpeciality' show={showModalSpeciality} onHide={handleCloseSpeciality} size="lg" centered style={{padding: '0px'}}>
                                <Modal.Header closeButton>
                                <Modal.Title>Agregue certificaciones a su perfil empresarial</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Form id='SpecialityForm' className='SpecialityForm'>
                                    <Row>
                                        <div className='container'>
                                            <div className="card p-4 mb-3">
                                                <div className="mb-3">
                                                    <label htmlFor="specialityFormFile" className="form-label">¿Tienes algún comprobante del certificado?</label>
                                                    <input id={'specialityFormFile'} className="form-control specialityFormFile" type="file" onChange={e => checkSpecialityFormFile(e.target)} />
                                                    {
                                                        specialityForm === true ? 
                                                        <span style={{color : 'red', fontSize: '14px'}}>{specialityFormMsge}</span> : <Form.Text> Este campo es opcional.</Form.Text>
                                                    }
                                                </div>
                                                <div className='mb-3'>
                                                    <label >Describa su certificación<span className='mb-2' style={{color: 'red'}}> *</span></label>
                                                    <textarea id={'descriptSpeciality'} className='descriptSpeciality form-control' name='descriptSpeciality' style={{ height: '100px' }}
                                                    placeholder='Comentario sobre el Trabajador' maxLength={250} onChange={e => checkDescriptSpeciality(e.target)}></textarea>
                                                    {
                                                        descriptSpeciality === true ? 
                                                        <span style={{color : 'red', fontSize: '14px'}}>{descriptSpecialityMsge}</span> : <></>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="mb-2" hidden={hiddenProgressSpec}>
                                        <ProgressBar className='profprogress' now={updateProgressSpec} label={`${updateProgressSpec}%`}/>
                                    </div>
                                </Form>
                                </Modal.Body>
                                <Modal.Footer className='d-flex justify-content-end align-items-center'>
                                <Button className='btn-request' disabled={descriptSpeciality === false && specialityForm === false ? false : true} onClick={uploadSpeciality}>
                                    Agregar certificación
                                </Button>
                                <Button variant="danger" onClick={handleCloseSpeciality}>
                                    Cerrar
                                </Button>
                                </Modal.Footer>
                            </Modal>
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

export default ProfilePyme
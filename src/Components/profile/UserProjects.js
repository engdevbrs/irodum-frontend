import React, { useEffect, useState } from 'react'
import { Button, Card,  Col, Container, Form, Nav, ProgressBar, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Axios  from 'axios'
import '../css/UserProjects.css'
import { Link } from 'react-router-dom'
import accesDenied from '../assets/access-denied.png'
import loadingprofilegf from '../assets/loading-profile-projects.gif'
import loadingprofileprojects from '../assets/loading-projects.gif'
import emptywork from '../assets/emptywork.png'



const UserProjects = () => {

    const MySwal = withReactContent(Swal)
    const [ response, setResponse ] = useState([])
    const [ projectsData, setProjectsData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ emptyName, setEmptyName ] = useState(true)
    const [ emptyDate, setEmptyDate ] = useState(true)
    const [ emptyImage, setEmptyImage ] = useState(true)
    const [ emptyWorkResume, setEmptyWorkResume ] = useState(true)
    const [ emptyCellClient, setEmptyCellClient ] = useState(true)
    const [ shortResume, setShortResume ] = useState(true)
    const [ incorrectTypeImage, setIncorrectTypeImage ] = useState(true)
    const [ incorrectSizeImage, setIncorrectSizeImage ] = useState(true)
    const [ updateProgress, setUpdateProgress ] = useState(0)
    const [ hiddenProgress, showProgress ] = useState(true)
    const [cellphoneValid, setCellphoneValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [cellphoneValidMsge, setCellphoneValidMsge] = useState([]);
    const [emailValidMsge, setEmailValidMsge] = useState([]);

    const deleteUserProject = (e) =>{
        const token = localStorage.getItem('accessToken');
        MySwal.fire({
            title: 'Estás seguro de eliminar éste proyecto?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Eliminar`,
            denyButtonText: `Cancelar`,
            }).then((result) => {
                if(result.isConfirmed){
                    Axios.delete("http://54.174.104.208:3001/api/image/delete-project" + parseInt(e[1].value,10), 
                    {
                        headers: {
                        'authorization': `${token}`
                        }
                    }
                    ).then((result) => {
                        if(result.status === 200){
                            getProjects(token)
                            Swal.fire('Su proyecto ha sido eliminado con éxito!', '', 'success')
                        }
                    }).catch(error => {
                        Swal.fire('No pudimos eliminar éste proyecto', '', 'warning')
                    });
                }
            })
    }

    const uploadProject = () => {

        const token = localStorage.getItem('accessToken');
        const clientname = document.getElementById('clientname').value
        const workdate = document.getElementById('workdate').value
        const workresume = document.getElementById('workresume').value
        const photofile = document.getElementById('photofile').files[0]
        const clientePhone = document.getElementById('clientPhone').value
        const clientEmail = document.getElementById('clientEmail').value

        const uploadInfo = {
            name: clientname,
            workresume: workresume,
            date: workdate,
            phone: clientePhone,
            email: clientEmail
        }
        const formFile = new FormData()
        formFile.append('photofile', photofile)
        formFile.append('params', JSON.stringify(uploadInfo))
        formFile.append('token',token)
        MySwal.fire({
            title: 'Estás seguro de subir éste proyecto?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Subir`,
            denyButtonText: `Cancelar`,
            }).then((result) => {
                if(result.isConfirmed){
                    showProgress(false)
                    clearFormUpload()
                    Axios.post("http://54.174.104.208:3001/api/image/upload-project",formFile,config)
                    .then((result) => {
                        if(result.status === 200){
                            setResponse(result.status)
                            getProjects(token)
                            Swal.fire('Su foto ha sido actualizada con éxito!', '', 'success')
                            showProgress(true)
                            setUpdateProgress(0)
                        }
                    }).catch(error => {
                        Swal.fire('No pudimos subir éste proyecto', '', 'warning')
                    });
                }
            })
    }

    const checkEmail = (email) =>{
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
            setEmailValidMsge('')
            setEmailValid(false)
            return false
        }
    }

    const checkCellphone = (cell) =>{
        const regCell = new RegExp('^[0-9]+$');
        if(cell.length === 0){
            setEmptyCellClient(true)
            setCellphoneValidMsge('')
            setCellphoneValid(false)
        }else if(cell.length === 8 && regCell.test(cell)){
            setCellphoneValidMsge('')
            setCellphoneValid(false)
            setEmptyCellClient(false)
            return false
        }else if(cell.length < 8 && cell.length > 0 && regCell.test(cell)){
            setCellphoneValidMsge('Ingrese los 8 números de su número de celular.')
            setEmptyCellClient(false)
            setCellphoneValid(true)
            return true
        }else if(cell.length <= 8 && cell.length > 0  && !regCell.test(cell)){
            setCellphoneValidMsge('Número de celular no válido.')
            setEmptyCellClient(false)
            setCellphoneValid(true)
            return true
        }
    }

    let config = {
        onUploadProgress: function(progressEvent) {
          let percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
          setUpdateProgress(percentCompleted)
        }
    };

    const clearFormUpload = () => {
        document.getElementById('clientname').value = ""
        document.getElementById('workdate').value = ""
        document.getElementById('workresume').value = ""
        document.getElementById('photofile').value = ""
        document.getElementById('clientPhone').value = ""
        document.getElementById('clientEmail').value = ""
        showProgress(true)
        setUpdateProgress(0)
    }
    
    const getProjects = () => {
        const token = localStorage.getItem('accessToken');
        Axios.get("http://54.174.104.208:3001/api/image/user-projects",{
            headers: {
                'authorization': `${token}`
                }
        })
          .then((result) => {
              if(result.status === 200){
                setProjectsData(result.data)
              }
          }).catch(error => {
                setProjectsData(error.response.status)
          });
    }

    const getAccess = async (token) =>{
        await Axios.post("http://54.174.104.208:3001/api/user-info", {
            'authorization' : `${token}`
        })
          .then((result) => {
              if(result.status === 200){
                    setResponse(result.status)
                    setLoading(false)
              }
          }).catch(error => {
                setResponse(error.response.status)
                setLoading(false)
                clearTimeout()
          });
    }

    const onchangeName = (e) =>{
        if(e !== ""){
            setEmptyName(false);
        }else{
            setEmptyName(true);
        }
    }

    const onchangeDateWork = (e) =>{
        if(e !== ""){
            setEmptyDate(false)
        }else{
            setEmptyDate(true);
        }
    }

    const onchangeWorkResume = (e) =>{
        if(e !== ""){
            setEmptyWorkResume(false)
            if(e.length > 50){
                setShortResume(false)
            }else{
                setShortResume(true)
            }
        }else{
            setEmptyWorkResume(true)
            setShortResume(true)
        }
    }

    const onchangeWorkImage = (e) =>{
        let imgsize = e.files[0].size;
        imgsize =  parseFloat(imgsize/1048576)
        if(e.value !== ""){
            setEmptyImage(false)
            if(e.files[0].type === "image/jpeg" || e.files[0].type === "image/jpg" || e.files[0].type === "image/png"){
                setIncorrectTypeImage(false)
                if(imgsize > 1 ){
                    setIncorrectSizeImage(true)
                }else{
                    setIncorrectSizeImage(false)
                }
            }
        }else{
            setEmptyImage(true)
            setIncorrectTypeImage(true)
        }
        
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
                    <Nav aria-label="breadcrumb" className="bg-light p-3 mb-4">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to={'/'} >Inicio</Link></li>
                            <li className="breadcrumb-item"><Link to={'/perfil'} >Mi Perfil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Mis Proyectos</li>
                        </ol>
                    </Nav>
                </Col>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-lg-6">
                            <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{"visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp"}}>
                            <h3><span> Proyectos</span></h3>
                            <p>En ésta sección podrás agregar o eliminar algunos de tus proyectos.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='p-3'>
                    <Container className='shadow-lg rounded-3 mt-3 mb-5 p-2' fluid>
                        <Row xs={1} md={1}>
                            <Col md={5} lg={4} className='mb-2' >
                                <Card className='projects-user shadow rounded-3 p-2'>
                                <h5><strong>Subir trabajos realizados</strong></h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Trabajo realizado a: </Form.Label>
                                    <Form.Control id='clientname' name='clientname' size="md" type="text" placeholder="Ej: Antonio Pérez Jara" onChange={e => onchangeName(e.target.value)}
                                    disabled={projectsData.length >= 8 ? true : false}/>
                                    { emptyName === true ? <Form.Text style={{color:'red'}}>Éste campo es obligatorio</Form.Text> : '' }
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Cuándo realizó éste trabajo?</Form.Label>
                                    <Form.Control id='workdate' name='workdate' size="md" type="date" placeholder="Large text" onChange={e => onchangeDateWork(e.target.value)}
                                    disabled={projectsData.length >= 8 ? true : false}/>
                                    { emptyDate === true ? <Form.Text style={{color:'red'}}>Éste campo es obligatorio</Form.Text> : ''}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Celular del cliente</Form.Label>
                                    <Form.Control id='clientPhone' name='clientPhone' placeholder='Ej: 12345678' size="md" maxLength='8' onChange={e => checkCellphone(e.target.value)}
                                    disabled={projectsData.length >= 8 ? true : false}/>
                                    { emptyCellClient === true ? <Form.Text style={{color:'red'}}>Éste campo es obligatorio</Form.Text> : ''}
                                    {
                                        cellphoneValid === true ? <Form.Text className='mb-1'>
                                        <span className='mb-1' style={{color: 'red'}}>{cellphoneValidMsge}</span></Form.Text> : cellphoneValidMsge
                                    }
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email del cliente</Form.Label>
                                    <Form.Control id='clientEmail' name='clientEmail' size="md" placeholder='correo@gmail.com' onChange={e => checkEmail(e.target.value)}
                                    disabled={projectsData.length >= 8 ? true : false}/>
                                    {
                                        emailValid === true ? <Form.Text className='mb-1'>
                                        <span className='mb-1' style={{color: 'red'}}>{emailValidMsge}</span></Form.Text> : emailValidMsge
                                    }
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Breve descripción de éste trabajo</Form.Label>
                                    <Form.Control id='workresume' name='workresume' as="textarea" rows={3} placeholder="Escriba aquí.." onChange={e => onchangeWorkResume(e.target.value)}
                                    disabled={projectsData.length >= 8 ? true : false}/>
                                    {emptyWorkResume === true ? <Form.Text style={{color:'red'}}>Éste campo es obligatorio</Form.Text> 
                                    : shortResume === true ? <Form.Text style={{color:'red'}}>Necesita un mínimo de 50 caráctares.</Form.Text> : ''}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Seleccione una fotografía</Form.Label>
                                    <Form.Control id='photofile' name='photofile' type="file" size="md" accept='image/*' onChange={e => onchangeWorkImage(e.target)} 
                                    disabled={projectsData.length >= 8 ? true : false}/>
                                    {emptyImage === true ? <Form.Text style={{color:'red'}}>Éste campo es obligatorio</Form.Text> 
                                    : incorrectTypeImage === true ? <Form.Text style={{color:'red'}}>El archivo debe ser: .JPG .JPEG .PNG</Form.Text> : 
                                    incorrectSizeImage === true ? <Form.Text style={{color:'red'}}>El archivo debe pesar menos de 1 Mb o 1.000 Kb.</Form.Text> : ''}

                                </Form.Group>
                                {projectsData.length >= 8 ? <Form.Text style={{color:'red'}}><strong>Llegaste a tu límite de proyectos subidos</strong></Form.Text> : <></> }
                                <div className="mb-2" hidden={hiddenProgress}>
                                    <ProgressBar className='profprogress' now={updateProgress} label={`${updateProgress}%`}/>
                                </div>
                                <div className="d-grid gap-2 mb-1">
                                    <Button className='buttonproject' 
                                        disabled={(emptyName || emptyDate || emptyImage || emptyCellClient || emptyWorkResume || shortResume || incorrectTypeImage || incorrectSizeImage || emailValid || cellphoneValid || projectsData.length >= 8) === true ? true : false}
                                        onClick={e => uploadProject(e)}
                                        >Subir Trabajo</Button>
                                    <Button variant="danger">Cancelar
                                    </Button>
                                </div>
                                </Card>
                            </Col>
                            <Col md={7} lg={8} className='mb-2'>
                                <div id='loadingprojects' className="container mt-5 mb-5" hidden={!loading}>
                                    <div className="loadingprojects" style={{height: '60vh'}}>
                                        <div className="wrapper text-center">
                                            <img src={loadingprofileprojects} alt="imagen de confirmación" style={{width: '15rem'}}/>
                                        </div>
                                            <div className="success-account mb-3">
                                            Obteniendo sus proyectos...
                                        </div>
                                    </div>
                                </div>
                                <Card className='projects-user shadow rounded-3 p-2'>
                                    {
                                    projectsData.length > 0 ? <><h5 className='mx-1'><strong>Trabajos subidos</strong></h5> 
                                    <Row xs={1} md={1} lg={2} xl={3} className='projectsphoto mx-1'>
                                    {
                                     projectsData.length > 0 ? projectsData.map(value =>{
                                            let dateFormatted = null
                                            if(value.workDate){
                                                dateFormatted = new Date(value.workDate)
                                            }
                                            return(
                                                <>
                                                <Col className='mb-2'>
                                                    <Card className='cardproject rounded-3'>
                                                        <Card.Header style={{ color: 'rgb(226 226 226)', backgroundColor: '#202A34' , fontSize: '14px'}}>
                                                            <Row>
                                                                <Col className='col-12 text-start'>Realizado a {value.clientName}</Col>
                                                                <Col className='col-12 text-start'>{"El dia " + dateFormatted.toLocaleDateString()}</Col>
                                                            </Row> 
                                                        </Card.Header>
                                                            <img src={'http://54.174.104.208:3001/' + value.imageName} 
                                                            alt={'project'} style={{height: '200px'}}/>
                                                        <i className='deletephoto fas fa-trash' value={value.id_img} key={value.id_img} onClick={e => deleteUserProject(e.target.attributes)}></i>
                                                        <Card.Body>
                                                            <Card.Title>Descripción del trabajo</Card.Title>
                                                            <Card.Text>{value.workResume}</Card.Text>
                                                        </Card.Body>
                                                        <Card.Footer style={{ color: 'rgb(226 226 226)', backgroundColor: '#202A34' , fontSize: '14px'}}>
                                                        <Row>
                                                            <Col className='col-6 text-start'>Celular: {value.clientCell}</Col>
                                                            <Col className='col-6 text-end'>{value.clientEmail !== "" ? "Email: " + value.clientEmail : ""}</Col>
                                                        </Row>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                                </>
                                            )
                                        }) : <></>
                                    }
                                    </Row>
                                    </>
                                    : 
                                    <>
                                    <h5><strong>No haz subido ningún proyecto</strong></h5>
                                    <Card className='noprojectsphoto d-flex align-items-center justify-content-center'>
                                            <div className="mt-2">
                                            <img variant="top" src={emptywork} 
                                                alt={'project'} style={{height: '250px', width: 'auto'}}/>
                                            </div> 
                                        </Card>
                                    </>
                                    }
                                    
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }

    useEffect(() =>{
        document.getElementById('menuHolder').scrollIntoView();
        setTimeout(() =>{
            const getToken = localStorage.getItem('accessToken');
            if(getToken === null){
                setLoading(false);
                setResponse(500);
            }else{
                getAccess(getToken)
            }
        },1720)
        getProjects()
    },[])

  return (
    <>
        <div id='denied' className="container mt-5 mb-5" hidden={!loading}>
            <div className="denied" style={{height: '60vh'}}>
                <div className="wrapper text-center">
                    <img src={loadingprofilegf} alt="imagen de confirmación" style={{width: '15rem'}}/>
                </div>
                    <div className="success-account mb-3">
                    Obteniendo sus proyectos...
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

export default UserProjects
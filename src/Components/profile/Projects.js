import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Modal, Row } from 'react-bootstrap'
import Axios  from 'axios'
import '../css/Projects.css'
import emptywork from '../assets/emptywork.png'

const Projects = () => {

  const [ projectsData, setProjectsData ] = useState([])
  const [imgfullscreen, setImgFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getProjects = () => {

    const token = localStorage.getItem('accessToken');
    Axios.get("http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/image/user-projects",{
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

  useEffect(() =>{
    getProjects()
  },[])

  return (
    <>
    <Container className={projectsData.length > 0 ? '' : 'projects-container'}>
    {
    projectsData.length > 0 ? 
    <Row xs={1} md={1} lg={1} xl={2} className="projects-card p-2" style={{backgroundColor: '#F8F9FA'}}>
    {
      projectsData.map(value =>{
        let dateFormatted = null
        if(value.workDate){
            dateFormatted = new Date(value.workDate)
        }
        return(
            <>
            <Col>
              <Card className='mt-2 rounded-3'>
                  <Card.Header style={{ color: 'rgb(226 226 226)', backgroundColor: '#202A34' , fontSize: '14px'}}>
                  <Row>
                      <Col className='col-6 text-start'>Realizado a {value.clientName}</Col>
                      <Col className='col-6 text-end'>{"El dia " + dateFormatted.toLocaleDateString()}</Col>
                  </Row> 
                </Card.Header>
                <img src={'http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/' + value.imageName} 
                    alt={'project'} style={{height: '200px',cursor: 'pointer'}} onClick={() =>{setImgFullscreen('http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/' + value.imageName); handleShow()}}/>
                <Card.Body>
                    <Card.Title>Descripción del trabajo</Card.Title>
                    <Card.Text>{value.workResume}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ color: 'rgb(226 226 226)', backgroundColor: '#202A34' , fontSize: '14px' }}>
                <Row>
                    <Col className='col-12 text-start'>Celular: {value.clientCell}</Col>
                    <Col className='col-12 text-start'>{value.clientEmail !== "" ? "Email: " + value.clientEmail : ""}</Col>
                </Row>
                </Card.Footer>
              </Card>
            </Col>
            </>
        )
      })
    }
    <Modal show={show} size="lg" onHide={handleClose} centered>
          <Modal.Header closeButton>
          </Modal.Header>
          <img className='img-fluid' src={imgfullscreen} alt={imgfullscreen} />
    </Modal>
    </Row>
     : <>
        <Card className='shadow rounded-0 d-flex align-items-center justify-content-center text-center' style={{height: '50vh'}}>
          <h5 className='mt-2'><strong>Actualmente no haz subido ningún trabajo</strong></h5>
          <div>
          <img className='mt-4' src={emptywork} 
              alt={'project'} style={{height: '200px', width: 'auto'}}/>
          </div> 
      </Card>
      </>
    }
      
    </Container>
    </>
  )
}

export default Projects
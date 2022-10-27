import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Axios  from 'axios'
import '../css/Projects.css'
import emptywork from '../assets/emptywork.png'

const Projects = () => {
  const [ projectsData, setProjectsData ] = useState([])

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

  useEffect(() =>{
    getProjects()
  },[])

  return (
    <>
    <Container className='projects-container' fluid>
    <Row className="emptyprojects" style={{backgroundColor: '#F8F9FA'}} hidden={projectsData.length > 0 ? true : false}>
      <Card className='shadow d-flex align-items-center justify-content-center text-center'>
          <h5><strong>Actualmente no haz subido ningún trabajo</strong></h5>
          <div>
          <img variant="top" src={emptywork} 
              alt={'project'} style={{height: '250px', width: 'auto'}}/>
          </div> 
      </Card>
    </Row>
    <Row xs={1} md={1} lg={1} xl={2} className="projects-card p-2" style={{backgroundColor: '#F8F9FA'}} hidden={projectsData.length > 0 ? false : true}>
    {
    projectsData.length > 0 ? projectsData.map(value =>{
          let dateFormatted = null
          if(value.workDate){
              dateFormatted = new Date(value.workDate)
          }
          return(
              <>
              <Col>
                <Card className='mt-2'>
                  <div className="d-flex align-items-center justify-content-center">
                      <Card.Img variant="top" src={'http://54.174.104.208:3001/' + value.imageName} 
                      alt={'project'} style={{height: '200px'}}/>
                  </div>
                  <Card.Body>
                      <Card.Title>Descripción del trabajo</Card.Title>
                      <Card.Text>{value.workResume}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <Row>
                      <Col className='col-8 text-start'><small className="text-muted">Realizado a {value.clientName}</small></Col>
                      <Col className='col-4 text-end'><small className="text-muted">{"El dia " + dateFormatted.toLocaleDateString()}</small></Col>
                  </Row>
                  </Card.Footer>
                </Card>
              </Col>
              </>
          )
        }) : <></>
    }
      </Row>
    </Container>
    </>
  )
}

export default Projects
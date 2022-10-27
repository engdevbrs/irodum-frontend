import React from 'react'
import { Col, Container, Form, Row, Toast } from 'react-bootstrap'
import '../css/Comments.css'

const Comments = () => {
  return (
    <>
    <Container className="comments-container " fluid>
    <Row xs={1} md={1} lg={1} xl={2} className="comments" style={{backgroundColor: '#F8F9FA'}}>
      {Array.from({ length: 10 }).map((_, idx) => (
        <Toast className='m-4'>
            <Toast.Header closeButton={false}>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Boris Rioseco</strong>
                <small>Hace 2 meses</small>
            </Toast.Header>
            <Toast.Body>
                Hola mundo, aqui dejaremos los comentarios
                <hr />
                <Form.Text>Calificó con: </Form.Text>
            </Toast.Body>
        </Toast>
      ))}
      </Row>
    </Container>
    </>
  )
}

export default Comments
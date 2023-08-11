import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import '../css/Comments.css'
import comment from '../assets/comment.png'

const Comments = ({data}) => {

  const [imgfullscreen, setImgFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
    <Container className={data.length > 0 ? '' : 'comments-container'}>
      {
        data.length > 0 ? 
        <>
        <Row xs={1} md={1} lg={1} xl={1} className="comments p-4" style={{backgroundColor: '#F8F9FA'}}>
        {
          data.map((value, key) =>{
            let commentToString = Buffer.from(value.evidencesComment)
            let comment = JSON.parse(commentToString)
            let sumaRating = value.totalRating;
            return(
              <>
              <Card className='shadow-lg mb-5' style={{ padding: '0px'}}>
                <Card.Header style={{ color: 'rgb(226 226 226)', backgroundColor: '#202A34' }}>
                    <Row xs={1} sm={1} md={2}>
                      <Col className='text-xl-start'>
                        Evaluado por: {value.customerName + " " + value.lastNameCustomer}
                      </Col>
                      <Col className='text-xl-end'>
                        El día: {value.dateComment}
                      </Col>
                    </Row> 
                </Card.Header>
                <Card.Body>
                <Row>
                    <p className='text-start p-2'><strong>Comentario: </strong>{value.workerComment}</p>
                    {
                      comment.length > 0 ? <><p className='text-start p-2'><strong>Evidencias del trabajo</strong></p></> : <></>
                    }
                {
                  comment.map((image,idx) =>{
                    return(
                      <>
                        <div className="col-lg-3 col-md-4 col-6">
                          <img key={idx} className='img-fluid img-thumbnail' src={'http://services.irodum.com:3001/' + image.originalname} 
                                alt={'project'} id={`${image.originalname}`} style={{cursor: 'pointer'}} onClick={() =>{setImgFullscreen('http://services.irodum.com:3001/' + image.originalname); handleShow()}}/>
                        </div>
                      </>
                    )
                  })
                }
                </Row>
                </Card.Body>
                <Card.Footer style={{ color: 'rgb(226 226 226)', backgroundColor: '#202A34',display: 'flex',justifyContent: 'center' }}>
                      <div className='d-flex align-items-center'>
                        <span className='me-1'>Evaluó con:</span>
                        <Rating
                            initialValue={parseFloat(sumaRating).toFixed(1)}
                            size={22}
                            fillColor='orange'
                            emptyColor='gray'
                            allowFraction={true}
                            readonly={true}
                            style={{ marginRight: '3px', display: 'flex',justifyItems: 'center' }}
                        />
                        <span className='me-1'>({parseFloat(sumaRating).toFixed(1)})</span>
                      </div>
                </Card.Footer>
              </Card>
              </>
            )
          })
        }
        <Modal show={show} size="md" onHide={handleClose} centered>
          <Modal.Header closeButton>
          </Modal.Header>
          <img className='img-fluid' src={imgfullscreen} alt={imgfullscreen} />
        </Modal>
        </Row>
        </> : 
        <>
        <Card className='shadow rounded-0 d-flex align-items-center justify-content-center text-center' style={{height: '50vh'}}>
            <h5 className='mt-2'><strong>Ningún comentario recibido</strong></h5>
            <div>
            <img className='mt-4' src={comment} 
                alt={'project'} style={{height: '200px', width: 'auto', padding: '15px'}}/>
            </div> 
        </Card>
        </>
      }
    </Container>
    </>
  )
}

export default Comments
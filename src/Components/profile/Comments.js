import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../css/Comments.css'
import comment from '../assets/comment.png'

const Comments = ({data}) => {
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
            let ratingParse = JSON.parse(value.aptitudRating)
            let sumaRating = (ratingParse.cuidadoso + ratingParse.honestidad + ratingParse.precio + ratingParse.puntualidad + ratingParse.responsabilidad) / 5;
            return(
              <>
              <Card className='shadow-lg mb-5' style={{ padding: '0px'}}>
                <Card.Header style={{ color: 'rgb(226 226 226)', backgroundColor: '#202A34' }}>
                    <Row xs={1} sm={1} md={2}>
                      <Col className='text-xl-start'>
                        Comentario realizado por: {value.workerName + " " + value.workerLastName}
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
                      comment.length > 0 ? <><p className='text-start p-2'><strong>Evidencias del trabajo</strong></p><hr/></> : <></>
                    }
                    
                {
                  comment.map(image =>{
                    return(
                      <>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-2">
                        <img className='img-comment shadow rounded' src={'http://54.174.104.208:3001/' + image.originalname} 
                              alt={'project'}/>
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
                            initialValue={sumaRating}
                            size={22}
                            fillColor='orange'
                            emptyColor='gray'
                            allowFraction={true}
                            readonly={true}
                            style={{ marginRight: '3px', display: 'flex',justifyItems: 'center' }}
                        />
                        <span className='me-1'>({sumaRating})</span>
                      </div>
                </Card.Footer>
              </Card>
              </>
            )
          })
        }
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
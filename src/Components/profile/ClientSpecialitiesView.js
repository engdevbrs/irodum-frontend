import React from 'react'
import { Col, Row } from 'react-bootstrap'

const SpecialitiesClient = ({data}) => {

  return (
    <>
            {
                data.map(values =>{
                    return(
                        <>
                        <Row>
                            <Col sm={6} xs={6}>
                                <span className='text-muted'>{values.descript}</span>
                            </Col>
                            <Col sm={6} xs={6}>
                                <p className="text-muted text-center mb-2"><a href={"http://54.174.104.208:3001/" + values.image.originalname} 
                                target="_blank" rel="noreferrer" style={{ color: 'blue' }} >Ver certificación</a></p>
                            </Col>
                            </Row>
                        </>
                    )
                })
            }
    </>
    )
}

export default SpecialitiesClient
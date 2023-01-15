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
                            <Col sm={6}>
                                <span className='text-muted'>{values.descript}</span>
                            </Col>
                            <Col sm={6}>
                                <p className="text-muted mb-2"><a href={"54.174.104.208:3001/" + values.image.originalname} 
                                target="_blank" rel="noreferrer" style={{ color: 'blue' }} >{values.image.originalname}</a></p>
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
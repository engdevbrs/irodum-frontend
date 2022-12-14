import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../css/Categories.css';
import construccion from '../assets/construccion.png'
import agricultor from '../assets/agricultor.png'
import cocinero from '../assets/cocinero.png'
import limpieza from '../assets/limpieza.png'
import belleza from '../assets/belleza.png'
import mantencion from '../assets/mantencion.png'

const Categories = () => {
  return (
    <>
    <section className="mt-5">
    <Container>
        <Row>
            <div className="col-lg-10 col-md-8 col-sm-8 categories-view">
            <h2 className="fw-bolder mb-2" style={{color: '#5f738f'}}>En Irodum tenemos diferentes categorías de trabajo</h2>
            <h4 className="mb-3" style={{color: '#5f738f'}}>Estas son las más populares</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 mt-3">
            </div>
            <div className="col-12 mt-3 categories-button">
                <a className="btn btn-outline-primary mb-3" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <i className="fas fa-arrow-left"></i>
                </a>
                <a className="btn btn-outline-primary mb-3 " href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
            <div className="col-12 mt-3">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div id='categories' className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row text-center">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                                    <img className='img-categories' alt="100%x280" src={construccion} style={{width: '350px'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title mt-3">Construcción</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                                    <img className='img-categories' alt="100%x280" src={agricultor} style={{width: '350px'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title mt-3">Agricultura</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <img className='img-categories' alt="100%x280" src={limpieza} style={{width: '350px'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title mt-3">Limpieza</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row text-center">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                                    <img className='img-categories' alt="100%x280" src={mantencion} style={{width: '350px'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title mt-3">Mantenimiento</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                                    <img className='img-categories' alt="100%x280" src={cocinero} style={{width: '350px'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title mt-3">Cocina</h5>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <img className='img-categories' alt="100%x280" src={belleza} style={{width: '350px'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title mt-3">Belleza</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Row>
    </Container>
  </section>
  </>
  )
}

export default Categories
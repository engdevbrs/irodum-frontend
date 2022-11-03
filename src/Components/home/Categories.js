import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../css/Categories.css';
import construccion from '../assets/construccion.jpg'
import electricista from '../assets/electricista.jpg'
import artesano from '../assets/artesano.jpg'
import agricultor from '../assets/agricultor.jpeg'
import cocinero from '../assets/cocinero.jpg'
import limpieza from '../assets/limpieza.jpg'
import comercio from '../assets/comercio.jpg'
import belleza from '../assets/belleza.jpg'
import mantencion from '../assets/mantencion.png'

const Categories = () => {
  return (
    <>
    <section className="mt-5 mb-5">
    <Container>
        <Row>
            <div className="col-lg-10 col-md-8 col-sm-8">
                <h3 className="mb-3" style={{color: '#5f738f'}}>¿Qué categoría buscas?</h3>
                <h5 className="mb-3" style={{color: '#5f738f'}}>Estas son las categorías más populares</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 text-right">
                <a className="btn btn-outline-dark mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i className="fas fa-arrow-left"></i>
                </a>
                <a className="btn btn-outline-dark mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
            <div className="col-12">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                    <div id='categories' className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={construccion}/>
                                        <div className="card-body">
                                            <h4 className="card-title">Construcción</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={electricista}/>
                                        <div className="card-body">
                                            <h4 className="card-title">Electricidad</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={artesano} />
                                        <div className="card-body">
                                            <h4 className="card-title">Artesania</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={agricultor} />
                                        <div className="card-body">
                                            <h4 className="card-title">Agricultura</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={cocinero} />
                                        <div className="card-body">
                                            <h4 className="card-title">Cocina</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={limpieza} />
                                        <div className="card-body">
                                            <h4 className="card-title">Limpieza</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={comercio} />
                                        <div className="card-body">
                                            <h4 className="card-title">Comercio</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={belleza} />
                                        <div className="card-body">
                                            <h4 className="card-title">Belleza</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={mantencion} />
                                        <div className="card-body">
                                            <h4 className="card-title">Mantenimiento</h4>
                                        </div>
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
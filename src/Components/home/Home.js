import React from 'react'
import '../css/Home.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpg';
import united from '../assets/united.png';
import tools from '../assets/tools.png';
import worker from '../assets/worker.png';
import working from '../assets/working.png';
import ingeniero from '../assets/ingeniero.png';
import benefits from '../assets/benefits.png';
import vidalaboral from '../assets/vida-laboral.png';
import curriculum from '../assets/curriculum.png';
import { Carousel, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Categories from './Categories';

const Home = () => {

  return (
    <>
      <header className="bg-dark py-5">
          <Container className="px-5">
              <Row className="gx-5 align-items-center justify-content-center">
                <Col className="col-lg-8 col-xl-7 col-xxl-6">
                    <div className="my-5 text-center text-xl-start">
                        <h1 className="display-5 fw-bolder text-white mb-2">Una nueva forma de encontar oportunidades</h1>
                        <p className="lead fw-normal text-white-50 mb-4">Registro rápido y sencillo, crea tu perfil de trabajador y presenta a la comunidad tus habilidades de manera gratuita!</p>
                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                            <Link to={'/crear-cuenta'} className="btn btn-primary btn-lg px-4 me-sm-3">Comenzar</Link>
                            <Link to={'/sobre-nosotros'} className="btn btn-outline-light btn-lg px-4">Aprender Más</Link>
                        </div>
                    </div>
                </Col>
                <Col className="col-xl-5 col-xxl-6 d-none d-xl-block">
                      <Carousel controls={false} indicators={false}>
                      <Carousel.Item>
                      <img className="img-fluid rounded-3 my-5" src={slide1} alt="..."/>
                      </Carousel.Item>
                      <Carousel.Item>
                      <img className="img-fluid rounded-3 my-5" src={slide2} alt="..."/>
                      </Carousel.Item>
                      <Carousel.Item>
                      <img className="img-fluid rounded-3 my-5" src={slide3} alt="..."/>
                      </Carousel.Item>
                      </Carousel>
                </Col>
              </Row>
          </Container>
      </header>
      <Container className="mt-5">
        <Row lg={2} className='information row row-cols-1 row-cols-md-2 g-4'>
        <Col>
        <h2 className="our-fundation fw-bolder mt-2" style={{color: '#5f738f'}}>Irodum.com</h2>
        <p className="fw-normal text-muted"><strong>E</strong>s una plataforma que tiene por objetivo crear una comunidad
              con personas que ofrezcan sus conocimientos técnicos sobre un oficio en particular, para que usuarios de cualquier parte de Chile puedan
              acceder a su perfil laboral, la cuál tendrá una serie de información útil para el futuro cliente, esta será de ayuda
              para que cuando las personas requieran de una asistencia tengan una idea de con quién está tratando y a quién le está solicitando los servicios.
                    </p>
        </Col>
        <Col className="information-card">
          <img src={working} alt="..." style={{width: '20rem'}}/>
        </Col>
        </Row>
      </Container>
      <Categories />
      <Container className="mb-5">
        <div className='d-flex justify-content-center'>
          <hr style={{width: '70%', height: '2px'}} />
        </div>
      </Container>
      <Container className="benefits mt-4">
          <Row >
              <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0" style={{color: '#5f738f'}}>Potencia tus ofertas laborales</h2></div>
              <div className="col-lg-8">
                  <div className="row row-cols-1 row-cols-md-2">
                      <div className="col mb-4 h-100">
                          <div className="feature bg-gradient text-white rounded-3 mb-3"><img src={ingeniero} alt="" width={64}/></div>
                          <h2 className="h5" style={{color: '#202A34'}}>Como Trabajador</h2>
                          <p className="fw-normal text-muted">Tendrás la posibilidad de generar nuevas opciones de trabajo.</p>
                      </div>
                      <div className="col mb-4 h-100">
                          <div className="feature bg-gradient text-white rounded-3 mb-3"><img src={benefits} alt="" width={64}/></div>
                          <h2 className="h5" style={{color: '#202A34'}}>Beneficios</h2>
                          <ul className='fw-normal text-muted' style={{ listStyle: "none", padding: '0px' }}>
                            <li>Visibilidad a nivel nacional.</li>
                            <li>Aumento de tus ingresos.</li>
                            <li>Ayudar a las personas con tus trabajos.</li>
                            <li>Hacer crecer tu experiencia laboral.</li>
                          </ul>
                      </div>
                      <div className="col mb-5 mb-md-0 h-100">
                          <div className="feature bg-gradient text-white rounded-3 mb-3"><img src={vidalaboral} alt="" width={64}/></div>
                          <h2 className="h5" style={{color: '#202A34'}}>Estabilidad</h2>
                          <p className="fw-normal text-muted">Probabilidades de ser contactado por empresas que requieran tus servicios,
                          y en lo posible ser contratado.</p>
                      </div>
                      <div className="col h-100">
                          <div className="feature bg-gradient text-white rounded-3 mb-3"><img src={curriculum} alt="" width={64}/></div>
                          <h2 className="h5">Marca Personal</h2>
                          <p className="fw-normal text-muted">Podrás crear un perfil con tu fotografía, tus datos personales y laborales, 
                          así como tambien algunos proyectos realizados, los cuales podrán ser visualizados por cualquier persona que visite su perfil.</p>
                      </div>
                  </div>
              </div>
          </Row>
      </Container>
      <Container className="mt-5 mb-5">
        <div className='d-flex justify-content-center'>
          <hr style={{width: '70%', height: '2px'}} />
        </div>
      </Container>
      <Container className="mt-4">
        <Row xs={1} className='mb-5'>
        <Col className='col-lg-4 col-md-6 col-sm-12 mt-3'>
          <Card className="card-features shadow h-100 p-3">
          <Card.Img variant="top" src={ tools } alt="..." style={{width: '64px'}}/>
            <Card.Body>
            <Card.Title style={{color: '#202A34'}}>Variedad de servicios</Card.Title>
              <Card.Text className='fw-normal text-muted'>Nuestro objetivo es poseer una gran variedad de oficios y trabajadores, la cuál solvente la necesidad temporal del cliente.
              </Card.Text>
            </Card.Body>
            <Card.Body >
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-lg-4 col-md-6 col-sm-12 mt-3'>
          <Card className="card-features shadow h-100 p-3">
            <Card.Img variant="top" src={ worker } alt="..." style={{width: '64px'}}/>
            <Card.Body>
            <Card.Title style={{color: '#202A34'}}>Fácil comunicación</Card.Title>
              <Card.Text className='fw-normal text-muted'>Encontrar trabajadores independientes que cumplan un oficio en particular desde cualquier parte de Chile,
              con el fin de tomar contacto de forma sencilla y rápida.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='col-lg-4 col-md-6 col-sm-12 mt-3'>
          <Card className="card-features shadow h-100 p-3">
            <Card.Img variant="top" src={ united } alt="..." style={{width: '64px'}}/>
            <Card.Body>
              <Card.Title style={{color: '#202A34'}}>Comunidad</Card.Title>
              <Card.Text className='fw-normal text-muted'>Es ideal generar una comunidad entre nosotros, en la que tanto la persona que necesita de un servicio 
              y la que ofrece el servicio, creen un ambiente seguro y de confianza, de tal modo que ésta pueda servir a distintos usuarios a elegir bien a un trabajador.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

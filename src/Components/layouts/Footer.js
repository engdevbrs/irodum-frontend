import React, { Component } from 'react'
import '../css/footer.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import logotipo from '../assets/logotipo.png'

const Footer = () => {
    return (
      <>
        <footer className="w-100 py-4 flex-shrink-0">
            <div className="container py-4">
                <div className="row gy-4 gx-4">
                    <div className="col-12 logotipo">
                        <Link to="/"><img src={logotipo} alt='logotipo' style={{'width': '16rem'}}/></Link>                    
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <h5 className="text-white mb-3">Enlaces rápidos</h5>
                        <ul className="list-unstyled text-muted">
                            <li><Link to={'/'} >Inicio</Link></li>
                            <li><Link to={'/trabajadores'} >Trabajadores</Link></li>
                            <li><Link to={'/crear-cuenta'} >Crear cuenta</Link></li>
                            <li><Link to={'/login'} >Iniciar sesión</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <h5 className="text-white mb-3">Ayuda</h5>
                        <ul className="list-unstyled text-muted">
                            <li><Link to={'/preguntas-frecuentes'} href="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
                            <li><Link to={'/sobre-nosotros'} href="/sobre-nosotros">Sobre nosotros</Link></li>
                            <li><Link to={'#'}>Términos y condiciones</Link></li>
                            <li><Link to={'#'}>Comentarios</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <h5 className="text-white mb-3">Boletín</h5>
                        <p className="small text-muted">Si no te quieres perder novedades o noticias, no dudes en suscribirte a nuestro boletín informativo.</p>
                        <form action="#">
                            <div className="input-group mb-3">
                                <input className="form-control" type="text" placeholder="Correo electrónico" aria-label="Correo electrónico" aria-describedby="button-addon2"/>
                                <button className="btn btn-primary" id="button-addon2" type="button">Enviar</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="col-12 text-center">
                            <a class="fs-5 px-2 link-dark" href="#!"><img src={twitter} alt='twitter' style={{'width': '24px'}}/></a>
                            <a class="fs-5 px-2 link-dark" href="#!"><img src={facebook} alt='facebook' style={{'width': '24px'}}/></a>
                            <a class="fs-5 px-2 link-dark" href="#!"><img src={instagram} alt='instagram' style={{'width': '24px'}}/></a>                    
                        </div>
                        <div className="col-12 mt-2 text-center">       
                            <span style={{color: 'white'}}>Copyright &copy; Todos los derechos reservados</span>              
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </>
    )
}

export default Footer
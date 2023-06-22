import React from 'react'
import '../css/footer.css';
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
                            <li><Link to={'/solicitud-recuperar-clave'} >Recuperar contraseña</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <h5 className="text-white mb-3">Ayuda</h5>
                        <ul className="list-unstyled text-muted">
                            <li><Link to={'/preguntas-frecuentes'} >Preguntas frecuentes</Link></li>
                            <li><Link to={'/sobre-nosotros'} >Sobre nosotros</Link></li>
                            <li><Link to={'/contacto'}>Contáctanos</Link></li>
                            <li><Link to={'/terminos-y-condiciones'}>Términos y condiciones</Link></li>
                            <li><Link to={'#'}>Comentarios</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4">
                    <div className="col-12 text-center">
                            <a className="fs-5 px-2 link-dark" href="#!"><img src={twitter} alt='twitter' style={{'width': '24px'}}/></a>
                            <a className="fs-5 px-2 link-dark" href="#!"><img src={facebook} alt='facebook' style={{'width': '24px'}}/></a>
                            <a className="fs-5 px-2 link-dark" href="https://www.instagram.com/irodum/" target='_blank' rel="noreferrer"><img src={instagram} alt='instagram' style={{'width': '24px'}}/></a>                    
                        </div>
                        <div className="col-12 mt-2 text-center">       
                            <span style={{color: 'rgb(180 180 180)'}}>Copyright &copy; Todos los derechos reservados</span>              
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </>
    )
}

export default Footer
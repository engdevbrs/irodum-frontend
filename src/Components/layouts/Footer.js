import React, { Component } from 'react'
import '../css/footer.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <>
        <footer className="w-100 py-4 flex-shrink-0">
            <div className="container-fluid py-4">
                <div className="row gy-4 gx-4">
                    <div className="col-lg-4 col-md-6">
                    <img src={Logo} alt="" style={{ width: '70px' }}/>
                    <div className='mt-2'>
                        <p className="small text-muted">Una página web creada para los emprendedores/as de Chile.</p>
                        <p className="small text-muted mb-0">Copyright &copy; Todos los derechos reservados.</p>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Enlaces rápidos</h5>
                        <ul className="list-unstyled text-muted">
                            <li><Link to={'/'} >Inicio</Link></li>
                            <li><Link to={'/trabajadores'} >Trabajadores</Link></li>
                            <li><Link to={'/crear-cuenta'} >Crear cuenta</Link></li>
                            <li><Link to={'/login'} >Iniciar sesión</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-white mb-3">Ayuda</h5>
                        <ul className="list-unstyled text-muted">
                            <li><Link to={'/preguntas-frecuentes'} href="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
                            <li><Link to={'/sobre-nosotros'} href="/sobre-nosotros">Sobre nosotros</Link></li>
                            <li><Link to={'#'}>Términos y condiciones</Link></li>
                            <li><Link to={'#'}>Comentarios</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-3">Boletín</h5>
                        <p className="small text-muted">Si no te quieres perder novedades o noticias, no dudes en suscribirte a nuestro boletín informativo.</p>
                        <form action="#">
                            <div className="input-group mb-3">
                                <input className="form-control" type="text" placeholder="Correo electrónico" aria-label="Correo electrónico" aria-describedby="button-addon2"/>
                                <button className="btn btn-primary" id="button-addon2" type="button">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
      </>
    )
}

export default Footer
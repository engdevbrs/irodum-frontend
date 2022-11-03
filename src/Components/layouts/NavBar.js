import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom';
import perfil from '../assets/perfil.png'
import { useLoginContext } from "../contexts/AuthContext";
import '../css/NavBar.css'
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Menu = () =>{

  const navigate = useNavigate()
  const { userData, setUserData } = useLoginContext()
  const [ userPhoto, setUserPhoto] = useState([])
  const [ userName, setUserName] = useState([])
  const [ projectsData, setProjectsData ] = useState([])
  const [ isLoggedIn, setLoggedIn] = useState(false)
  const [show, setShow] = useState(false);

  const menuToggle = () => {
    let menuHolder = document.getElementById('menuHolder');

    if(menuHolder.className === "drawMenu"){
      menuHolder.className = ""
    }
    else{
      menuHolder.className = "drawMenu"
    }
  }

  const logOut = () =>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userPhoto')
    setLoggedIn(false)
  }

  const requestNavigate = () =>{
    navigate('/mis-solicitudes')
  }

  useEffect(() =>{
    if(userData.token !== undefined || localStorage.getItem('accessToken')){
        const token = localStorage.getItem('accessToken');
        Axios.post("http://54.174.104.208:3001/api/user-info", {
            'authorization' : `${userData.token || token}`
        })
          .then((result) => {
              if(result.status === 200){
                setLoggedIn(true)
                setUserPhoto(result.data[0].userPhoto)
                setUserName(result.data[0].nameUser)
                Axios.get("http://54.174.104.208:3001/api/user/user-requests",{
                  headers: {
                      'authorization': `${token}`
                      }
                })
                .then((response) => {
                    if(response.status === 200){
                      setProjectsData(response.data)
                      response.data.length > 0 ? setShow(true) : setShow(false)
                    }
                }).catch(error => {
                      setProjectsData([])
                });
              }else{
                localStorage.removeItem('accessToken')
                localStorage.removeItem('userPhoto')
                setLoggedIn(false)
                setUserPhoto("")
              }
          }).catch(error => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('userPhoto')
            setUserPhoto("")
            setLoggedIn(false)
          });

    }
  },[userData.token, isLoggedIn, userPhoto])

  return (
      <>
        <div id="menuHolder">
          <div role="navigation" id="mainNavigation">
            <div className="flexMain">
              <div className="flex2">
                <button className="whiteLink siteLink"  onClick={() => menuToggle()}><i className="fas fa-bars me-2"></i> MENÚ</button>
              </div>
                {
                  (localStorage.getItem('accessToken') || isLoggedIn) ?  <>
                  <ul className="navbar-nav d-flex flex-row align-items-center me-3">         
                    <li className="nav-item me-3 me-md-3 me-lg-4 dropdown" onClick={() => requestNavigate()} style={{cursor: 'pointer'}}>
                      <i className='fas fa-file-alt mt-1' style={{fontSize:'24px','color': '#5f738f'}}></i>
                        <span className="position-absolute start-80 translate-middle badge rounded-pill bg-danger mt-1">
                        {projectsData.length}
                        </span>        
                    </li>
                    <li className="nav-item me-0 me-lg-0 dropdown">
                      <div className="nav-link dropdown-toggle" id="navbarDropdown1" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false" style={{color: 'grey'}}>
                        <img id="photoUser" src={(userPhoto !== null && userPhoto !== undefined && userPhoto !== "" && userPhoto.length > 0)  ? 
                        'http://54.174.104.208:3001/api/images/'+ userPhoto : perfil} className="rounded-circle" height="35" width="35"
                          alt=""/>
                      </div>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown1">
                        <li><Link to={'/perfil'} className="dropdown-item" >Mi Perfil</Link></li>
                        <li><Link to={'/mis-solicitudes'} className="dropdown-item" >{projectsData.length > 0 ? 
                        <div>Nuevas solicitudes{' '}<span className="badge rounded-pill bg-danger">
                          {projectsData.length}
                        </span>
                        </div> : 'Mis Solicitudes'}</Link></li>
                        <li><Link to={'/mis-proyectos'} className="dropdown-item" >Mis Proyectos</Link></li>
                        <li>
                          <hr className="dropdown-divider"/>
                        </li>
                        <li>
                          <a className="dropdown-item" onClick={() => logOut()} href="/"><i className="fa fa-sign-out me-2"></i>Cerrar Sesión</a>
                        </li>
                      </ul>
                    </li>
                </ul>
                </> : <><Link to={'/crear-cuenta'} className="signin-item2 p-2"><i className="fas fa-user-plus me-2" style={{color: 'white'}}></i>Crear Cuenta</Link>
                      <Link to={'/login'} className="signin-item p-2"><i className="fas fa-sign-in me-2" style={{color: 'white'}}></i>Iniciar Sesión</Link></>
                }
            </div>
          </div>
          <div id="menuDrawer">
            <div className="p-4 border-bottom">
              <div className='row'>
                <div className="col text-end ">
                  <i className="fas fa-times" onClick={() => menuToggle()}></i>
                </div>
              </div>
            </div>
            <div className="menu-pages">
              <Link to={'/'} className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-home me-3"></i>Inicio</Link>
              <Link to={'/trabajadores'}  className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-hard-hat me-3"></i>Trabajadores</Link>
              <Link to={'/sobre-nosotros'}  className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-exclamation-circle me-3"></i>Sobre Nosotros</Link>
              <Link to={'/preguntas-frecuentes'} className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-question-circle me-3"></i>Preguntas Frecuentes</Link>
              <Link to={'/contacto'} className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-address-book me-3"></i>Contacto</Link>
            </div>
          </div>
        </div>
        <section>
          <Outlet></Outlet>
        </section>
        <ToastContainer className="p-3" >
        <Toast onClose={() => setShow(false)} show={show} style={{backgroundColor:'#A53232', color: '#dfe3ec'}}>
          <Toast.Header style={{backgroundColor:'#7A3838',color: '#dfe3ec'}}>
            <strong className="me-auto">Hola, {userName}</strong>
          </Toast.Header>
          <Toast.Body>Tienes {projectsData.length} peticiones de trabajo, revisa tu bandeja de solicitudes.</Toast.Body>
        </Toast>
      </ToastContainer>
        <Footer/>
      </>
  )
}

export default Menu;
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom';
import perfil from '../assets/perfil.png'
import { useLoginContext } from "../contexts/AuthContext";
import { useHomeContext } from '../contexts/WorkerContext';
import '../css/NavBar.css'
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Constants from '../../Constants/Constants';


const Menu = () =>{

  const navigate = useNavigate()
  const { jobs } = Constants;
  const { worksearcher, setWorksearcher } = useHomeContext();
  const { userData } = useLoginContext()
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

  const searchingWorker = (e) =>{
    e.preventDefault();
    const oficio = document.getElementById('worksearcher').value
    setWorksearcher({...worksearcher ,oficio })
    document.getElementById('worksearcher').value = ""
    return navigate('/trabajadores');
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

    let inputField = document.getElementById('worksearcher');
    let ulField = document.getElementById('sugerencias');
    inputField.addEventListener('input', changeAutoComplete);
    ulField.addEventListener('click', selectItem);
  
    function changeAutoComplete({ target }) {
      let data = target.value;
      ulField.innerHTML = ``;
      if (data.length) {
        let autoCompleteValues = autoComplete(data);
        autoCompleteValues.forEach(value => { addItem(value); });
      }
    }
  
    function autoComplete(inputValue) {
      let destination = jobs;
      return destination.filter(
        (value) => value.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  
    function addItem(value) {
      ulField.innerHTML = ulField.innerHTML + `<li>${value}</li>`;
    }
  
    function selectItem({ target }) {
      if (target.tagName === 'LI') {
        inputField.value = target.textContent;
        ulField.innerHTML = ``;
      }
    }

    if(userData.token !== undefined || localStorage.getItem('accessToken')){
        const token = localStorage.getItem('accessToken');
        const ispyme = JSON.parse(localStorage.getItem('ispyme'));
        Axios.post(ispyme ? "54.174.104.208:3001/api/user-info-pyme" : "54.174.104.208:3001/api/user-info", {
            'authorization' : `${userData.token || token}`
        })
          .then((result) => {
              if(result.status === 200){
                setLoggedIn(true)
                setUserPhoto(result.data[0].userPhoto)
                setUserName(ispyme ? result.data[0].razonSocial: result.data[0].nameUser)
                Axios.get("54.174.104.208:3001/api/user/user-requests",{
                  headers: {
                      'authorization': `${token}`
                      }
                })
                .then((response) => {
                    if(response.status === 200){
                      let notconfirmed = (response.data).filter(function(params) {
                        return params.estado === 'pendiente' || params.estado === 'acordar';
                      })
                      setProjectsData(notconfirmed)
                      notconfirmed.length > 0 ? setShow(true) : setShow(false)
                    }
                }).catch(error => {
                      setProjectsData([])
                });
              }else{
                localStorage.removeItem('accessToken')
                localStorage.removeItem('userPhoto')
                localStorage.removeItem('ispyme')
                setLoggedIn(false)
                setUserPhoto("")
              }
          }).catch(error => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('userPhoto')
            localStorage.removeItem('ispyme')
            setUserPhoto("")
            setLoggedIn(false)
          });
    }

  },[userData.token, isLoggedIn, userPhoto,worksearcher])

  return (
      <>
        <div id="menuHolder">
          <div role="navigation" id="mainNavigation">
            <div className="flexMain">
              <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                <button className="whiteLink siteLink"  onClick={() => menuToggle()}><i className="fas fa-bars me-2"></i> MENÚ</button>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center align-items-center">
                <div className="row height d-flex justify-content-center align-items-center" style={{ width: "100%"}}>
                  <div className="form worksearcher-form" style={{ width: '100%', padding: '0px' }}>
                    <input type="text" id='worksearcher' className="worksearcher" placeholder="Ej: Carpintero" />
                    <span className="left-pan"><i className="fas fa-search" style={{cursor: 'pointer'}} onClick={e => searchingWorker(e)}></i></span>
                  </div>
                  <div id='sugerencias' className="sugerencias"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-3 d-flex justify-content-end">
              {
                (localStorage.getItem('accessToken') || isLoggedIn) ?  <>
                <ul className="navbar-nav d-flex flex-row align-items-center me-1">         
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
                      '54.174.104.208:3001/api/images/'+ userPhoto : perfil} className="rounded-circle" height="35" width="35"
                        alt=""/>
                    </div>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown1">
                      <li><Link to={JSON.parse(localStorage.getItem('ispyme')) ? '/perfil-pyme' : '/perfil'} className="dropdown-item" >Mi Perfil</Link></li>
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
                        <a className="dropdown-item" onClick={() => logOut()} href="/login"><i className="fa fa-sign-out me-2"></i>Cerrar Sesión</a>
                      </li>
                    </ul>
                  </li>
              </ul>
              </> : <><Link to={'/login'} className="signin-item p-2"><i className="fas fa-sign-in me-2" style={{color: 'white'}}></i>Entrar</Link></>
              }
              </div>
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
              <Link to={'/pymes'}  className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-briefcase me-3"></i>Pymes</Link>
              <Link to={'/sobre-nosotros'}  className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-exclamation-circle me-3"></i>Sobre Nosotros</Link>
              <Link to={'/preguntas-frecuentes'} className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-question-circle me-3"></i>Preguntas Frecuentes</Link>
              <Link to={'/contacto'} className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-address-book me-3"></i>Contacto</Link>
              <Link to={'/crear-cuenta'} className="nav-menu-item" onClick={() => menuToggle()}><i className="fas fa-user-plus me-3"></i>Crear Cuenta</Link>
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
          <Toast.Body>Tienes {projectsData.length} peticiones de trabajo, revisa tu bandeja de solicitudes 
          haciendo click <Link to={'/mis-solicitudes'} style={{ color: '#dfe3ec' }} onClick={() => setShow(false)}><strong>AQUÍ</strong>.</Link>
          </Toast.Body>
        </Toast>
        </ToastContainer>
        <Footer/>
      </>
  )
}

export default Menu;
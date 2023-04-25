import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Nav, Offcanvas, Row } from 'react-bootstrap';
import Axios from 'axios'
import { FaFilter } from "react-icons/fa";
import '../css/Workers.css';
import noworkersfounded from '../assets/search-empty.png'
import pyme from '../assets/empresa.png'
import worker from '../assets/obrero.png'
import all from '../assets/all.jpg'
import Constants from '../../Constants/Constants';
import { useHomeContext } from '../contexts/WorkerContext';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

const Workers = () => {

  const { worksearcher, setWorksearcher } = useHomeContext()
  const { jobs, economicActivities } = Constants;
  const [show, setShow] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [usuarios, setUsuarios ] = useState([]);
  const [usuariosFiltered, setUsuariosFiltered ] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [comunas, setComunas] = useState([]);

  const [regionValue, setRegionValue] = useState([]);
  const [cityValue, setCityValue] = useState([]);
  const [comunneValue, setComunneValue] = useState([]);
  const [areaValue, setAreaValue] = useState([]);
  const [economicActivity, setEconomicActivity] = useState([]);
  const [valueFromSearcher, setValueFromSearcher ] = useState([]);

  const [hiddenIndependent, setHiddenIndependent] = useState(true);
  const [hiddenPymes, setHiddenPymes] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const  filterWorkers = () => {
      let region = document.getElementById('region').value
      let city = document.getElementById('city').value
      let comunne = document.getElementById('comunne').value
      let area = document.getElementById('area').value
      let giro = document.getElementById('giro').value
      let filterer = ""
      if(hiddenIndependent === false){
        filterer = usuarios.filter(function(params) {
          if(region === "" && area !== ""){
            return params.workArea === area
          }else if(region !== "" && city !== "" && comunne !== "" && area === ""){
            return params.regionEmployed === region && params.cityEmployed === city &&  params.communeEmployed === comunne
          }else if(region !== "" && city !== "" && area === ""){
            return params.regionEmployed === region && params.cityEmployed === city
          }else if(region !== "" && area === ""){
            return params.regionEmployed === region
          }else if(region !== "" && city !== "" && comunne !== "" && area !== ""){
            return params.regionEmployed === region && params.cityEmployed === city &&  params.communeEmployed === comunne && params.workArea === area
          }else if(region !== "" && city !== "" && area !== ""){
            return params.regionEmployed === region && params.cityEmployed === city && params.workArea === area
          }else if(region !== "" && area !== ""){
            return params.regionEmployed === region && params.workArea === area
          }
        })
      }else if(hiddenPymes === false){
        filterer = usuarios.filter(function(params) {
          if(region === "" && giro !== ""){
            return params.chargeEmployed === giro
          }else if(region !== "" && city !== "" && comunne !== "" && giro === ""){
            return params.regionEmployed === region && params.cityEmployed === city &&  params.communeEmployed === comunne
          }else if(region !== "" && city !== "" && giro === ""){
            return params.regionEmployed === region && params.cityEmployed === city
          }else if(region !== "" && giro === ""){
            return params.regionEmployed === region
          }else if(region !== "" && city !== "" && comunne !== "" && giro !== ""){
            return params.regionEmployed === region && params.cityEmployed === city &&  params.communeEmployed === comunne && params.chargeEmployed === giro
          }else if(region !== "" && city !== "" && giro !== ""){
            return params.regionEmployed === region && params.cityEmployed === city && params.chargeEmployed === giro
          }else if(region !== "" && giro !== ""){
            return params.regionEmployed === region && params.chargeEmployed === giro
          }
        })
      }else if(hiddenIndependent === true && hiddenPymes === true){
        filterer = usuarios.filter(function(params) {
          if(region !== "" && city === "" && comunne === ""){
            return params.regionEmployed === region
          }else if(region !== "" && city !== "" && comunne === ""){
            return params.regionEmployed === region && params.cityEmployed === city
          }else if(region !== "" && city !== "" && comunne !== ""){
            return params.regionEmployed === region && params.cityEmployed === city  && params.communeEmployed === comunne
          }else if(region === "" && city === "" && comunne === ""){
            return usuarios
          }
        })
      }
      handleClose()
      setFiltered(true)
      setUsuariosFiltered(filterer)
  }

  const  clearFilters = () => {
    if(worksearcher !== ''){
      Axios.get("http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/usuarios").then((res)=>{
        setFiltered(false)
        setUsuarios(res.data[0])
        setWorksearcher("")
        handleClose()
      });
    }else{
      setRegionValue('')
      setCityValue('')
      setComunneValue('')
      setAreaValue('')
      handleClose()
      setFiltered(false)
    }
  };


  const filterPymes = () =>{
    
    let filteredByPymes = usuarios.filter(function(params) {
      return params.employedClass === "pyme"
    })
    setUsuariosFiltered(filteredByPymes)
    setFiltered(true)
    console.log(filteredByPymes);
  }

  const filterIndependent = () =>{
    
    let filteredByIndependent = usuarios.filter(function(params) {
      return params.employedClass === "independiente"
    })
    setUsuariosFiltered(filteredByIndependent)
    setFiltered(true)
    setValueFromSearcher([])
    console.log(filteredByIndependent);
  }

  const handleRegionChange = (e) => {
    const ciudadIndex = document.getElementById('region').value;
    const ciudadesIndex = localidades.find(element => {
        return element.region === ciudadIndex;
    });
    setCiudades(ciudadesIndex.ciudad);
    setComunas([]);
  }

  const handleCityChange = (e) => {
      const cityName = document.getElementById('city').value;
      let comunasData = null;
      if(cityName !== null && cityName !== undefined && cityName !== ''){

        comunasData = ciudades.find(element => {
          return element[0] === cityName;
        });

        setComunas(comunasData[1].comunas);
      }else if(cityName === ''){
        setComunas([]);
      }
  }
  
  useEffect(() => {
      document.getElementById("menuHolder").scrollIntoView();
      Axios.get("http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/usuarios").then((res)=>{
        if(worksearcher !== ''){
          let filtererFromHome = (res.data[0]).filter(function(params) {
            return params.workArea === worksearcher.oficio
          })
          setUsuarios(res.data[0])
          setUsuariosFiltered(filtererFromHome)
          setFiltered(true)
          setValueFromSearcher(worksearcher.oficio)
          setWorksearcher("")
          setHiddenPymes(true); 
          setHiddenIndependent(false)
        }else{
          setUsuarios(res.data[0]);
        }
      });
      Axios.get("http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/localidades").then((res)=>{
            setLocalidades(res.data);
      });  
  },[worksearcher])

  return (
    <>
      <section className='section-workers'>
      <div>
          <Col>
              <Nav aria-label="breadcrumb" className="bg-light p-3">
                  <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item"><Link to={'/'} >Inicio</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Trabajadores</li>
                  </ol>
              </Nav>
          </Col>
      </div>
      <Container className='mt-4 mb-4'>
        <Row lg={1} md={1} sm={1} xs={1} className='worker-view'>                
        <div className="container p-3">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-lg-6">
              <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{"visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp"}}>
                <h3>Nuestra gran <span> Comunidad</span></h3>
                <p>A continuación le mostraremos a nuestros colaboradores y sus servicios laborales.</p>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <Col className='d-flex justify-content-end mt-3 mb-3'>
        <strong style={{fontSize:'16px', color: '#384451'}}>Búsqueda avanzada{' '}</strong>
          <p onClick={handleShow} className="me-2" style={{color:'#5f738f'}}>
          <FaFilter cursor={'pointer'} size={26} />
          </p>
        </Col>
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton closeVariant='white'>
          <Offcanvas.Title>Filtrar Trabajadores</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
              <h6 className='mb-2 mt-2'>Localidad del trabajador</h6>
              <div>
                  <Form.Select id='region' name='region'  defaultValue={'' || regionValue}
                  onChange={(e) => {handleRegionChange(e); setRegionValue(e.target.value)}}>
                  <option disabled selected="" value="">Seleccionar región</option>
                  {
                      localidades.map((locations,key) => {
                          return(
                              <>
                              <option key={key} value={locations.region}>{locations.region}</option>
                              </>
                          )
                      })
                  }
                  </Form.Select>
                  <label htmlFor='region' className='form-label'>Región</label>
              </div>
              <div>
                  <Form.Select id='city'name='city' 
                   defaultValue={'' || cityValue} onChange={(e) => {handleCityChange(e); setCityValue(e.target.value)}}>
                  <option disabled selected="" value="">Seleccionar provincia</option>
                  {
                      ciudades.map((cities,key) => {
                          return(
                              <>
                              <option key={key} value={cities[0]}>{cities[0]}</option>
                              </>
                          )
                      })
                  }
                  </Form.Select>
                  <label htmlFor='city' className='form-label'>Provincia</label>
              </div>
              <div>
                  <Form.Select id='comunne' name='comunne'
                  defaultValue={'' || comunneValue} onChange={(e) => setComunneValue(e.target.value)}>
                  <option selected="" value="">Seleccionar comuna</option>
                  {
                      comunas.map((comunnes,key) => {
                          return(
                              <>
                              <option key={key} value={comunnes}>{comunnes}</option>
                              </>
                          )
                      })
                  }
                  </Form.Select>
                  <label htmlFor='comunne' className='form-label'>Comuna</label>
              </div>
              <h6 className='mb-2' hidden={hiddenIndependent}>Especialidad del trabajador</h6>
              <div>
              <Form.Select id='area' name='area' hidden={hiddenIndependent} defaultValue={filtered ? valueFromSearcher : '' || areaValue } onChange={(e) => setAreaValue(e.target.value)}>
                  <option disabled selected value="">Seleccionar especialidad</option>
                  {
                      jobs.map((jobs,key) =>{
                          return(
                              <>
                                  <option key={key} value={jobs}>{jobs}</option>
                              </>
                          )
                      })
                  }
                </Form.Select>
              </div>
              <h6 className='mb-2' hidden={hiddenPymes}>Actividad económica o Giro</h6>
              <div>
              <Form.Select id='giro' name='giro' hidden={hiddenPymes} defaultValue={'' || economicActivity } onChange={(e) => setEconomicActivity(e.target.value)}>
                  <option disabled selected value="">Seleccionar actividad económica o giro</option>
                  {
                      economicActivities.map((activities,key) =>{
                          return(
                              <>
                                  <option key={key} value={activities.name}>{activities.name}</option>
                              </>
                          )
                      })
                  }
                </Form.Select>
              </div>
              <div className="d-grid gap-2 mt-3">
                  <Button className="btn-filtrar px-4" size="sm" onClick={filterWorkers} >Buscar trabajador</Button>
                  <Button className="btn-clear px-4" size="sm" onClick={e => clearFilters()} >Limpiar búsqueda</Button>
              </div>
        </Offcanvas.Body>
      </Offcanvas>
        <div>
          <div className="row d-flex justify-content-center">
            <div className="cardtipo col-lg-6 mb-3 mb-lg-0">
              <div className="hover hover-1 text-white rounded" style={{cursor: 'pointer' }} onClick={() => {filterPymes(); setHiddenPymes(false); setHiddenIndependent(true)}}><img src={pyme} alt="" />
                <div className="hover-overlay"></div>
                <div className="hover-1-content" >
                  <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light"></span>PYMES</h3>
                  <p className="hover-1-description font-weight-light mb-0">Ver sólo pequeñas y medianas empresas.</p>
                </div>
              </div>
            </div>
            <div className="cardtipo col-lg-6 mb-3">
              <div className="hover hover-1 text-white rounded" style={{cursor: 'pointer' }} onClick={() => {filterIndependent(); setHiddenPymes(true); setHiddenIndependent(false)}}><img src={worker} alt=""/>
                <div className="hover-overlay"></div>
                <div className="hover-1-content" >
                  <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light"></span>Independientes</h3>
                  <p className="hover-1-description font-weight-light mb-0">Ver trabajadores independientes.</p>
                </div>
              </div>
            </div>
            <div className="cardtipo col-lg-6 mb-3">
              <div className="hover hover-1 text-white rounded" style={{cursor: 'pointer' }} onClick={() => {clearFilters(); setHiddenPymes(true); setHiddenIndependent(true)}}><img src={all} alt=""/>
                <div className="hover-overlay"></div>
                <div className="hover-1-content" >
                  <h3 className="hover-1-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light"></span>Todo</h3>
                  <p className="hover-1-description font-weight-light mb-0">Ver PYMES e independientes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row shadow-lg rounded-3 p-2">
        {
          filtered === true && usuariosFiltered.length === 0 ? 
          <div id='denied' className="container mt-5 mb-5 text-center" hidden={usuariosFiltered.length > 1 ? true : false}>
            <div className="denied" style={{height: '60vh'}}>
            <h6>Lo sentimos, no encontramos ningún trabajador con sus requerimientos.</h6>
                <div className="wrapper text-center mt-3">
                    <img src={noworkersfounded} alt="imagen de confirmación" style={{width: '12rem'}}/>
                </div>
                <div className="d-grid gap-2 mt-5">
                  <Button className="btn btn-danger px-4" onClick={e => clearFilters()} >Ver a todos los trabajadores</Button>
              </div>
            </div>
          </div> : ''
        }
        <Pagination data={filtered === true ? usuariosFiltered : usuarios} />
        </div>
        </div>
        </Row>
      </Container>
      </section>
    </>
  );
}

export default Workers;
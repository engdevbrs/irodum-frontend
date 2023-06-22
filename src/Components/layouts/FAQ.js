import React, { useEffect } from 'react'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import { Link } from 'react-router-dom'

const FAQ = () => {

    useEffect(() => {
        document.getElementById("menuHolder").scrollIntoView();      
    },[]);

  return (
    <>
        <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Preguntas frecuentes</h1>
                        <p className="lead fw-normal text-muted mb-0" style={{color: '#5f738f'}}>¿Cómo podemos ayudarte?</p>
                    </div>
                    <div className="row gx-5">
                        <div className="col-xl-8">
                            <h3 className="fw-bolder mb-3" style={{color: '#5f738f'}}>Como cliente</h3>
                            <div className="accordion mb-5" id="accordionExample">
                            <div className="accordion-item">
                                <h3 className="accordion-header" id="headingFour"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">¿Cuáles servicios puedo encontrar?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseFour" aria-labelledby="headingFour" data-bs-parent="#accordionExample" >
                                        <div className="accordion-body">
                                            <p>En este marketplace de trabajadores estarán disponibles la mayoría de oficios que puedes requerir en tu vida 
                                                diaria.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingOne"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">¿Cómo encontrar a un trabajador?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                                        <div className="accordion-body">
                                            <p>Primero debes dirigirte a la sección de trabajadores disponible en el menú superior izquierdo.
                                                En esa ventana podrás ver todos los trabajadores registrados en nuestra aplicación web. 
                                                Si quieres realizar una búsqueda más especializada, puedes hacer click en el botón para filtrar información
                                                e ingresar los parámetros que estimes necesario.
                                                Con eso podrás ver a los candidatos disponibles en el caso de que exista alguno.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">¿Cómo elegir a un trabajador?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                                        <div className="accordion-body">
                                            <p>Una vez encuentres a los trabajadores que cumplen con tus necesidades, debes hacer click en su tarjeta de presentación
                                                y presionar el botón <strong>ver perfil</strong>, verás información detallada sobre el trabajador,
                                                calificaciones en el caso de que haya sido calificado, comentarios, rating y si el trabajador ha subido 
                                                proyectos realizados también podrás visualizarlos.
                                                <br/>
                                                Te recomendamos siempre validar los datos dispuestos en los perfiles de trabajadores.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">¿Cómo contactar a un trabajador?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
                                        <div className="accordion-body">
                                            <p>Una vez estés en el perfil del trabajador podrás visualizar dos botones laterales derecho y centrados, en donde si haces 
                                                click en el superior, vas a poder realizar una solicitud de trabajo, la cuál llegará a la bandeja de solicitudes del trabajador
                                                y además un correo con copia al cliente que envió la solicitud y al trabajador.
                                                Esta acción da pie al primer contacto y a la puesta en marcha para que se coordinen y puedan llegar a un acuerdo
                                                de trabajo lo antes posible.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingEight"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">¿Qué hago despues de enviar la solicitud de trabajo?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseEight" aria-labelledby="headingEight" data-bs-parent="#accordionExample" >
                                        <div className="accordion-body">
                                            <p>La solicitud será enviada inmediatamente al trabajador, este podrá responderla mediante correo electrónico o un mensaje rápido 
                                                ( Whatsapp). Por lo tanto, te recomendamos que luego de enviar la solicitud estés pendiente al correo como tambien a tu Whatsapp.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingNine"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">¿Debo abonar dinero al trabajador antes de comenzar el trabajo?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseNine" aria-labelledby="headingNine" data-bs-parent="#accordionExample" >
                                        <div className="accordion-body">
                                            <p>Por favor, evite estafas, pague o abone al trabajador una vez comience o termine el trabajo, nunca antes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="fw-bolder mb-3" style={{color: '#5f738f'}}>Post servicio</h3>
                            <div className="accordion mb-5" id="accordionExample2">
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingOne"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="false" aria-controls="collapseOne2">¿Cómo se paga al trabajador?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseOne2" aria-labelledby="headingOne" data-bs-parent="#accordionExample2" >
                                        <div className="accordion-body">
                                            <p>El método de pago tiene que ser acordado entre el cliente y el trabajador,
                                                nosotros jamás les pediremos un depósito previo o posterior al trabajo,
                                                ni tampoco nos quedamos con un porcentaje, nuestro fin es sólo generar la conexión entre ambas partes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">¿Qué hacer después de finalizado el trabajo?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseTwo2" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2" >
                                        <div className="accordion-body">
                                            <p>No es necesario hacer nada más por ambas partes, pero lo ideal es que el cliente realice una evaluación al trabajo para que
                                                futuros clientes tengan referencia sobre el trabajador y la calidad de sus servicios.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="fw-bolder mb-3" style={{color: '#5f738f'}}>Como trabajador</h3>
                            <div className="accordion mb-5" id="accordionExample">
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingFive"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">¿Debo pagar comisión por trabajo realizado?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseFive" aria-labelledby="headingFive" data-bs-parent="#accordionExample" >
                                        <div className="accordion-body">
                                            <p>No, nosotros nunca pediremos una comisión por trabajo realizado, ni tampoco solicitaremos aportes voluntarios a cuentas externas.<br/>
                                                Nuestra misión es brindar una mayor visibilidad y que puedas tener más oportunidades laborales sin quitar dinero de tu trabajo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingSix"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">¿Qué puedo hacer en mi cuenta?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseSix" aria-labelledby="headingSix" data-bs-parent="#accordionExample" >
                                        <div className="accordion-body">
                                            <p>Tu cuenta es personal y única. <br/>
                                                Con tu cuenta podrás.
                                                <ol classNameName='mt-2'>
                                                    <li>Controlar y visualizar tus solicitudes de trabajo.</li>
                                                    <li>Subir una foto de perfil tuya.</li>
                                                    <li>Subir algunos proyectos realizados, para que tus clientes vean ejemplos de como trabajas.</li>
                                                    <li>Agregar alguna especialidad y/o certificaciones.</li>
                                                    <li>Agregar tus redes sociales.</li>
                                                    <li>Agregar tu color favorito, para que tu tarjeta de trabajador se vea de forma especial.</li>
                                                </ol>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card border-0 bg-light mt-xl-5">
                                <div className="card-body p-4 py-lg-5">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="text-center">
                                            <div className="h6 fw-bolder">Tienes más preguntas?</div>
                                            <p className="text-muted mb-3">
                                                Contáctanos haciendo click <Link to="/contacto">aquí</Link>
                                            </p>
                                            <div className="h6 fw-bolder">Síguenos</div>
                                            <a className="fs-5 px-2 link-dark" href="#!"><img src={twitter} alt='twitter' style={{'width': '22px'}}/></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><img src={facebook} alt='facebook' style={{'width': '22px'}}/></a>
                                            <a className="fs-5 px-2 link-dark" href="https://www.instagram.com/irodum/" target="_blank" rel="noreferrer"><img src={instagram} alt='instagram' style={{'width': '22px'}}/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default FAQ
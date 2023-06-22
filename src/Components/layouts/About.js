import React, { useEffect } from 'react'
import meta from '../assets/meta.png'
import fundation from '../assets/fundation.png'

const About = () => {

    useEffect(() => {
        document.getElementById("menuHolder").scrollIntoView();      

    },[]);

    return (
    <>
    <header className="py-5">
        <div className="container px-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-xxl-6">
                    <div className="text-center my-5">
                        <h1 className="fw-bolder mb-3">Nuestra misión es crear un marketplace de oficios y aumentar las oportunidades laborales.</h1>
                        <p className="fw-normal text-muted mb-4">"Crear una comunidad de trabajos cotidianos que ayuden a las personas a solucionar sus problemas con agilidad,
                            proporcionando un valor añadido a través de altos conocimientos técnicos ofrecidos por nuestros colaboradores"</p>
                        <a className="btn btn-primary btn-lg" href="#scroll-target">Leer nuestra historia</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section className="py-5 bg-light">
        <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-6 text-center"><img id='scroll-target' className="img-fluid rounded mb-5 mb-lg-0" src={fundation} style={{width: '18rem'}} alt="..."/></div>
                <div className="col-lg-6">
                    <h2 className="our-fundation fw-bolder">Sobre nuestra Aplicación</h2>
                    <p className="fw-normal text-muted mb-0">Nuestra idea nace en tiempos de pandemia, luego de que gran cantidad de personas quedaran sin trabajo.
                    Muchos nos vimos en la necesidad de buscar una fuente de ingreso alternativa para solventar nuestras necesidades económicas. De esta necesidad nace <strong>Irodum</strong>, para darles a todas aquellas personas la posibilidad
                    de pertenecer a una comunidad de trabajadores con el fin de brindarles el espacio y oportunidades necesarias para lograr una vida fructífera.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="py-5">
        <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-6 order-first order-lg-last text-center"><img className="img-fluid rounded mb-5 mb-lg-0" src={meta} style={{width: '15rem'}} alt="..."/></div>
                <div className="col-lg-6">
                    <h2 className="fw-bolder">Nuestra misión</h2>
                    <p className="fw-normal text-muted mb-0">El propósito de esta herramienta es crear una posibilidad extra de trabajo para las personas, que les permita
                    expandir su cartera de clientes ya sea a nivel comunal, como también nacional.</p>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default About
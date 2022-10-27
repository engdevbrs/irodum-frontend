import React from 'react'
import borisProfile from '../assets/boris-profile.jpeg'
import fabianProfile from '../assets/fabian-profile.jpg'
import meta from '../assets/meta.png'
import fundation from '../assets/fundation.png'

const About = () => {
  return (
    <>
    <header class="py-5">
        <div class="container px-5">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xxl-6">
                    <div class="text-center my-5">
                        <h1 class="fw-bolder mb-3">Nuestra misión es brindar la posibilidad de encontrar y buscar trabajos de oficios</h1>
                        <p class="fw-normal text-muted mb-4">"Crear una comunidad de trabajos cotidianos que ayuden a las personas a solucionar sus problemas con agilidad,
                         proporcionando un valor añadido a través de altos conocimientos técnicos ofrecidos por nuestros colaboradores"</p>
                        <a class="btn btn-primary btn-lg" href="#scroll-target">Leer nuestra historia</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section class="py-5 bg-light">
        <div class="container px-5 my-5">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-6 text-center"><img id='scroll-target' class="img-fluid rounded mb-5 mb-lg-0" src={fundation} style={{width: '18rem'}} alt="..."/></div>
                <div class="col-lg-6">
                    <h2 class="our-fundation fw-bolder">Nuestra Aplicación</h2>
                    <p class="fw-normal text-muted mb-0">Nuestra idea nace en tiempos de pandemia, luego de que gran cantidad de personas quedaran sin trabajo.
                    Muchos nos vimos en la necesidad de buscar una fuente de ingreso alternativa para solventar nuestras necesidades económicas, que, en ocasiones
                    no se pudo lograr por la falta de oportunidades. De esta necesidad nace <strong>Irodum</strong>, para darles a todas aquellas personas la oportunidad
                    de pertenecer a una comunidad de trabajadores, que sean buscados y contactados por diferentes clientes.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5">
        <div class="container px-5 my-5">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-6 order-first order-lg-last text-center"><img class="img-fluid rounded mb-5 mb-lg-0" src={meta} style={{width: '15rem'}} alt="..."/></div>
                <div class="col-lg-6">
                    <h2 class="fw-bolder">Nuestro Objetivo</h2>
                    <p class="fw-normal text-muted mb-0">El propósito de esta herramienta es crear una posibilidad extra para las personas y que les permita
                    tener una visibilidad y alcance a una gran cantidad de personas que requieran de sus servicios y habilidades.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5 bg-light">
        <div class="container px-5 my-5">
            <div class="text-center">
                <h2 class="fw-bolder">Nuestro Equipo</h2>
                <p class="lead fw-normal text-muted mb-5">Dedicados a las oportunidades</p>
            </div>
            <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                <div class="col mb-5 mb-5 mb-xl-0">
                    <div class="text-center">
                        <img class="img-fluid rounded-circle mb-4 px-4" src={fabianProfile} alt="..."/>
                        <h5 class="fw-bolder">Fabián Rioseco E</h5>
                        <div class="fst-italic text-muted">Fundador</div>
                    </div>
                </div>
                <div class="col mb-5 mb-5 mb-xl-0">
                    <div class="text-center">
                        <img class="img-fluid rounded-circle mb-4 px-4" src={borisProfile} alt="..."/>
                        <h5 class="fw-bolder">Boris Rioseco E</h5>
                        <div class="fst-italic text-muted">CO-Fundador y Desarrollador de la aplicación.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
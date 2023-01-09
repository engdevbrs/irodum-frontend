import React from 'react'
import { Link } from 'react-router-dom'
import '../css/AccountType.css'

const AccountType = () => {
  return (
    <>
        <header className="py-5">
            <div className="container px-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xxl-6">
                        <div className="text-center my-5">
                            <h1 className="fw-bolder mb-3">¡Te damos la más cordial bienvenida!</h1>
                            <p className="fw-normal text-muted mb-4">Estamos muy emocionados por tu interés en contar con nosotros,
                        esperamos tengas una grata experiencia y le puedas sacar el máximo provecho a ésta herramienta.</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="pt-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5 d-flex justify-content-center">
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-4"><i className="fas fa-restroom"></i></div>
                                <h5 className="fw-bold">Trabajador independiente</h5>
                                <p className="mb-3">Si deseas registrarte como trabajador independiente haz click en el botón que está a continuación.</p>
                                <Link className="btn btn-primary" to={"/crear-cuenta-independiente"} >Registrarme</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-4"><i className="fas fa-building"></i></div>
                                <h5 className="fw-bold">Pequeña y Mediana Empresa</h5>
                                <p className="mb-3">Si deseas registrarte como PYME y ofrecer tus servicios haz click en el botón que está a continuación.</p>
                                <Link className="btn btn-primary" to={"/crear-cuenta-pyme"} >Registrarme</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AccountType
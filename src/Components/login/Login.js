import React, { useEffect, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginPic from '../assets/login-pic.jpg';
import Axios  from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../contexts/AuthContext';

const Login = () =>  {

    const[ warnCredentials, setwarnCredentials ]=useState([]);
    const { userData, setUserData } = useLoginContext();

    const[ eye, seteye]=useState(true);
    const[ userPass, setPass]=useState("password");
    const[ userName,setUserName ]=useState("");

    const navigate = useNavigate();

    const submitForm = (e) =>{
        e.preventDefault();
        Axios.post("http://services.irodum.com:3001/api/login", {userName,userPass})
          .then((result) => {
              if(result.status === 200){
                  localStorage.setItem("accessToken", result.data.accessToken);
                  setwarnCredentials(false)
                  setUserData({...userData, ['token']: result.data.accessToken });
                  if(result.data.userType === "independiente"){
                        localStorage.setItem("ispyme", false);
                    return navigate('/perfil');
                  }else{
                        localStorage.setItem("ispyme", true);
                    return navigate('/perfil-pyme');
                  }
              }
          }).catch(error => {
                setwarnCredentials(true)
          });
    }; 

    useEffect(() => {
        document.getElementById("menuHolder").scrollIntoView();      

    },[]);

    return(
    <>
        <div className="loginContainer mt-5 mb-5">
            <Card>
                <div className='form'>
                    <Col className="left-side">
                        <img src={LoginPic} alt="login pic" />
                    </Col>
                    <Col className="right-side">
                        <div className="register">
                            <p>No eres miembro? <Link to="/crear-cuenta">Registrate ahora</Link></p>
                        </div>
                        <div className="hello">
                            <h2>Hola otra vez!</h2>
                            <h4>Bienvenido de vuelta, te hemos extrañado! </h4>
                        </div>
                        <Form onSubmit={(e) => submitForm(e)}>
                            <div className="input_text">
                                <input type="text" placeholder="Ingresa tu email" name="email" onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className="input_text">
                                <input type={eye !== false ? 'password' : 'text'} placeholder="Igresa tu contraseña" name="password" onChange={(e) => setPass(e.target.value)} />
                                <i onClick={() => seteye(!eye)} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                            </div>
                            <div>{
                            warnCredentials === true ? <Form.Text style={{color: 'red'}}>Usuario y/o Contraseñas inválidas</Form.Text> : ''
                            }
                            </div>
                            <div className="recovery mt-2">
                                <p><Link to="/solicitud-recuperar-clave">Recuperar contraseña</Link></p>
                            </div>
                            <div className="btnLogin d-grid">
                            <Button size="lg" type='submit'>
                                Iniciar sesión
                            </Button>
                            </div>
                        </Form>
                    </Col>
                </div>
            </Card>
        </div>
    </>
    );
}

export default Login
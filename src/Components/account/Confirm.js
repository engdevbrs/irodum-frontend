import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../css/CreateUser.css';
import finalcheck from '../assets/final-check.png'
import finalerror from '../assets/final-error.png'
import loadingrequestgf from '../assets/loading-request.gif'
import { useStepperContext } from '../contexts/StepperContext';

const Confirm = () => {
  const { userData, setUserData } = useStepperContext();
  const [ result, setResult] = useState([]);
  const [ loadingrequest, setLoadingRequest] = useState(true); 

  //3.92.68.154 AWS LOCAL
  const handleCreate =  async () => {
    Axios.post("http://54.174.104.208:3001/api/create-user", userData)
      .then((result) => {
          if(result.status === 200){
              setResult(result.status);
              setLoadingRequest(false);
              Axios.post("http://54.174.104.208:3001/api/welcomeMail", userData)
              .then((response) => {
                if(response.status === 200){
                  console.log(response);
                }
              }).catch(error => {
                  console.log(error);
              });
              clearTimeout();
          }
      }).catch(error => {
          setResult(error.response);
          setLoadingRequest(false);
          clearTimeout();
      });
  }

  useEffect(() =>{
    setTimeout(() => {
      handleCreate();
    }, 2500);
  },[]);


  return (
    <>
    <div className="container mt-5 mb-5" hidden={!loadingrequest}>
        <div className="final">
            <div className="wrapper text-center">
              <img src={loadingrequestgf} alt="imagen de confirmación" style={{width: '15rem'}}/>
            </div>
            <div className="success-account mb-3">
              Estamos verificando tus datos...
            </div>
        </div>
    </div>
    {
      result !== 200 ? <div className="container mt-5 mb-5" hidden={loadingrequest}>
                                  <div className="final d-flex justify-content-center" style={{height: '50vh'}}>
                                    <div className="wrapper mb-4">
                                      <img src={finalerror} alt="imagen de confirmación" style={{width: '10rem'}}/>
                                    </div>
                                    <div className="mt-3 congrats">
                                      UPS! Lo sentimos, su cuenta no pudo ser creada
                                    </div>
                                    <div className="success-account mb-3">
                                      Verifique sus datos y vuelva a intentar.
                                    </div>
                                  </div>
                                </div> : <div className="container mt-5 mb-5" hidden={loadingrequest}>
                                          <div className="final">
                                            <div className="wrapper mb-4">
                                              <img src={finalcheck} alt="imagen de confirmación" style={{width: '10rem'}}/>
                                            </div>
                                            <div className="mt-3 congrats">
                                              Felicidades!
                                            </div>
                                            <div className="success-account mb-3">
                                              Tu cuenta ha sido creada con éxito.
                                            </div>
                                          </div>
                                        </div>
    }
    </>
  )
}

export default Confirm
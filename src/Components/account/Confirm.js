import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../css/CreateUser.css';
import finalcheck from '../assets/final-check.png'
import finalerror from '../assets/final-error.png'
import loadingrequestgf from '../assets/loading-request.gif'
import { useStepperContext } from '../contexts/StepperContext';
import { useStepperContextPyme } from '../contexts/StepperContextPyme.js'

const Confirm = () => {
  const { userData } = useStepperContext();
  const { userDataPyme  } = useStepperContextPyme();
  const [ result, setResult] = useState([]);
  const [ loadingrequest, setLoadingRequest] = useState(true); 

  const handleCreate =  async () => {
      Axios.post("http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/create-user", userData === "" || userData === undefined ? userDataPyme : userData)
      .then((result) => {
          if(result.status === 200){
              setResult(result.status);
              setLoadingRequest(false);
              Axios.post("http://ec2-54-174-104-208.compute-1.amazonaws.com:3001/api/welcomeMail", userData === "" || userData === undefined ? userDataPyme : userData)
              .then((response) => {
                if(response.status === 200){
                  setResult(response.status);
                }
              }).catch(error => {
                setResult(error.response.status);
              });
              clearTimeout();
          }
      }).catch(error => {
          setResult(error.response.status);
          setLoadingRequest(false);
          clearTimeout();
      });
  }

  useEffect(() =>{
    document.getElementById("menuHolder").scrollIntoView();
    setTimeout(() => {
      handleCreate();
    }, 2500);
  },[]);


  return (
    <>
    <div className="container mt-5 mb-5" hidden={!loadingrequest}>
        <div className="final d-flex justify-content-center" style={{height: '50vh'}}>
            <div className="wrapper text-center">
              <img src={loadingrequestgf} alt="imagen de confirmación" style={{width: '10rem'}}/>
            </div>
            <div className="success-account mb-3">
              Estamos verificando sus datos...
            </div>
        </div>
    </div>
    {
      result !== 200 ? <div className="container mt-5 mb-5" hidden={loadingrequest}>
                          <div className="final d-flex justify-content-center" style={{height: '50vh'}}>
                            <div className="wrapper mb-4">
                              <img src={finalerror} alt="imagen de confirmación" style={{width: '6rem'}}/>
                            </div>
                            <div className="mt-3 congrats">
                              UPS! Lo sentimos, su cuenta no pudo ser creada
                            </div>
                            <div className="success-account mb-3">
                              Verifique sus datos y vuelva a intentar de nuevo o más tarde.
                            </div>
                          </div>
                        </div> : 
                        <div className="container mt-5 mb-5" hidden={loadingrequest}>
                          <div className="final d-flex justify-content-center" style={{height: '50vh'}}>
                            <div className="wrapper mb-4">
                              <img src={finalcheck} alt="imagen de confirmación" style={{width: '6rem'}}/>
                            </div>
                            <div className="mt-3 congrats">
                              Felicidades!
                            </div>
                            <div className="success-account mb-3">
                              Su cuenta ha sido creada con éxito.
                            </div>
                          </div>
                        </div>
    }
    </>
  )
}

export default Confirm
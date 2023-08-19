import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../css/CreateUser.css';
import finalcheck from '../assets/final-check.png'
import finalerror from '../assets/final-error.png'
import loadingrequestgf from '../assets/loading-request.svg'
import { useStepperContext } from '../contexts/StepperContext';
import { useStepperContextPyme } from '../contexts/StepperContextPyme.js'
import { Link } from 'react-router-dom';

const Confirm = () => {
  const { userData } = useStepperContext();
  const { userDataPyme  } = useStepperContextPyme();
  const [ result, setResult] = useState([]);
  const [ resultEmail, setResultEmail] = useState([]);
  const [ loadingrequest, setLoadingRequest] = useState(true); 

  const handleCreate =  async () => {
      Axios.post("https://www.services.irodum.com/api/create-user", userData === "" || userData === undefined ? userDataPyme : userData)
      .then((result) => {
          if(result.status === 200){
              setResult(result.status);
              document.getElementById("nextButton").style.display = "block";
              setLoadingRequest(false);
              Axios.post("https://www.services.irodum.com/api/welcomeMail", userData === "" || userData === undefined ? userDataPyme : userData)
              .then((response) => {
                if(response.status === 200){
                  setResultEmail(response.status);
                }
              }).catch(error => {
                setResultEmail(error.response.status);
              });
              clearTimeout();
          }else{
            
          }
      }).catch(error => {
          setResult(error.response.status);
          setLoadingRequest(false);
          clearTimeout();
      });
  }

  useEffect(() =>{
    document.getElementById("menuHolder").scrollIntoView();
    document.getElementById("nextButton").style.display = "none";
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
                            <div className="mb-3">
                              <Link to={'/crear-cuenta'} className="btn btn-danger btn-sm px-4 me-sm-3">Reintentar</Link>
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
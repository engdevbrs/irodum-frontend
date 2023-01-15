import { useState } from "react";
import  { useNavigate } from 'react-router-dom'
import StepperPyme from "./StepperPyme";
import { UseContextProviderPyme} from "../contexts/StepperContextPyme";
import PersonalnformationPyme from "./PersonalnformationPyme";
import StepperControlPyme from "./StepperControlPyme";
import PymeProfile from "./PymeProfile";
import CreateNewUserPyme from "./CreateUserPyme";
import TermsConditions from "./TermsAndConditions";
import Confirm from "./Confirm";

function CreateAccount() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    "Información PYME",
    "Detalle PYME",
    "Crear usuario",
    "Términos y condiciones",
    "Finalizado"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 0:
        return <PersonalnformationPyme />;
      case 1:
       return <PymeProfile />;
      case 2:
        return <CreateNewUserPyme />;
      case 3:
        return <TermsConditions />;
      case 4:
        return <Confirm />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    if(direction === "Iniciar sesión"){
      return navigate('/login');
    }else if(direction === "stop"){
      setCurrentStep(newStep);
    }else{
      (direction === "next") ? newStep++ : newStep--;
    newStep >= 0 && newStep < steps.length  && setCurrentStep(newStep);
    }
  };

  return (
    <div className="rounded bg-white pb-2 shadow-xl">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <StepperPyme steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProviderPyme>
            {
          displayStep(currentStep)
          }
          </UseContextProviderPyme>
        </div>
      </div>

      {/* navigation button */}
          <StepperControlPyme
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
    </div>
  );
}

export default CreateAccount;
import { useState } from "react";
import  { useNavigate } from 'react-router-dom'
import Stepper from "./Stepper";
import { UseContextProvider} from "../contexts/StepperContext";
import PersonalInformation from "./Personalnformation";
import StepperControl from "./StepperControl";
import WorkProfile from "./WorkProfile";
import CreateNewUser from "./CreateUser";
import TermsConditions from "./TermsAndConditions";
import Confirm from "./Confirm";

function CreateAccount() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    "Información personal",
    "Detalle laboral",
    "Crear usuario",
    "Términos y condiciones",
    "Finalizado"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 0:
        return <PersonalInformation />;
      case 1:
       return <WorkProfile />;
      case 2:
        return <CreateNewUser />;
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
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>
            {
          displayStep(currentStep)
          }
          </UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
          <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
    </div>
  );
}

export default CreateAccount;
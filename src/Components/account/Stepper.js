import React, { useState, useEffect, useRef } from "react";
import '../css/CreateUser.css';


const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        if(newSteps[3].completed === true){
          newSteps[count] = {
            ...newSteps[count],
            highlighted: true,
            selected: true,
            completed: true,
          }
        }
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "selectdisplay1"
            : "d-flex align-items-center"
        }
      >
        <div className="selectdisplay">
          <div
            className={`selectionstep ${
              step.selected
                ? "selectedstep"
                : "Notselectedstep"
            }`}
          >
            {step.completed ? (
              <span className="text-white">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`stepdescript fw-normal text-muted ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`stepcomplete ${
            step.completed ? "stepcompleted" : "stepNotcompleted"
          }`}
        ></div>
      </div>
    );
  });

  return (
    <div id="steps" className="steps">
      {stepsDisplay}
    </div>
  );
};
export default Stepper;
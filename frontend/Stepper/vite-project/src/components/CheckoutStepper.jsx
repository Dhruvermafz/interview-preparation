import React, { useState } from "react";

const CheckoutStepper = ({ stepConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  if (!stepConfig.length) {
    return <></>;
  }
  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if(prevStep === stepConfig.length) {
        setIsComplete(true)
        return prevStep
      } else {
        return prevStep + 1
      }

    })
  };

  const ActiveComponent = stepConfig[currentStep - 1]?.Component;
  return (
    <>
      <div className="stepper">
        {stepConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
      </div>
      <button className="btn" onClick={handleNext}>
        {currentStep === stepConfig.length ? "Finish" : "Next"}
      </button>
    </>
  );
};

export default CheckoutStepper;

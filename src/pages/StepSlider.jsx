import { useState } from "react";

const msg = ["first step: start", "second step:sec", "thisrd step: third"];

function StepSlider() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <p className={step >= 1 ? "active" : ""}>1</p>
            <p className={step >= 2 ? "active" : ""}>2</p>
            <p className={step >= 3 ? "active" : ""}>3</p>
          </div>
          <div className="steps-msg">
            Step {step} is : {msg[step - 1]}
          </div>
          <div className="steps-btn">
            <button className="btn" onClick={handlePrev}>
              Prev
            </button>
            <button className="btn" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StepSlider;

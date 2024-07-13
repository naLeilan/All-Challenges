import { useState } from "react";

const msg = ["first step: start", "second step:sec", "thisrd step: third"];

function StepSlider() {
  const [step, setStep] = useState(1);

  return (
    <div className="steps">
      <div className="numbers">
        <p className={step >= 1 ? "active" : ""}>1</p>
        <p className="nums">2</p>
        <p className="nums">3</p>
      </div>
      <div className="steps-msg">
        Step {step} is : {msg[step - 1]}
      </div>
      <div className="steps-btn">
        <button className="btn">Prev</button>
        <button className="btn">Next</button>
      </div>
    </div>
  );
}

export default StepSlider;

import { useState } from "react";

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStepPrev() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleStepNext() {
    setStep((s) => s + 1);
  }

  function handleCountPrev() {
    if (count > 1) setCount((c) => c - 1);
  }

  function handleCountNext() {
    setCount((c) => c + 1);
  }

  return (
    <div className="datecount">
      <h4>Date Counter</h4>
      <div className="step">
        <button className="btn" onClick={handleStepPrev}>
          -
        </button>
        <p>Step:{step} </p>
        <button className="btn" onClick={handleStepNext}>
          +
        </button>
      </div>
      <div className="count">
        <button className="btn" onClick={handleCountPrev}>
          -
        </button>
        <p>Count:{count} </p>
        <button className="btn" onClick={handleCountNext}>
          +
        </button>
      </div>
      <p>Today is ...</p>
    </div>
  );
}

export default DateCounter;

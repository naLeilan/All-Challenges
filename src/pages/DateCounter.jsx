import { useState } from "react";

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepPrev() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleStepNext() {
    setStep((s) => s + 1);
  }

  function handleCountPrev() {
    setCount((c) => c - step);
  }

  function handleCountNext() {
    setCount((c) => c + step);
  }

  return (
    <div className="datecount">
      <h4>Date Counter</h4>
      <div className="step">
        <button className="btn" onClick={handleStepPrev}>
          &#45;
        </button>
        <p>Step:{step} </p>
        <button className="btn" onClick={handleStepNext}>
          &#43;
        </button>
      </div>
      <div className="count">
        <button className="btn" onClick={handleCountPrev}>
          &#45;
        </button>
        <p>Count:{count} </p>
        <button className="btn" onClick={handleCountNext}>
          &#43;
        </button>
      </div>
      <div className="msg">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}

export default DateCounter;

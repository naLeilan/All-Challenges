const msg = ["first step: start", "second step:sec", "thisrd step: third"];

function StepSlider() {
  const step = 1;

  return (
    <div className="app">
      <div className="num">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div className="msg">
        Step {step} is : {msg[step - 1]}
      </div>
      <div className="btn">
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default StepSlider;

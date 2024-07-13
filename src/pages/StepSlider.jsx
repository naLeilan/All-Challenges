const msg = ["first step: start", "second step:sec", "thisrd step: third"];

function StepSlider() {
  const step = 1;

  return (
    <div className="stepslider">
      <div className="stepslider-num">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div className="stepslider-msg">
        Step {step} is : {msg[step - 1]}
      </div>
      <div className="stepslider-btn">
        <button className="btn">Prev</button>
        <button className="btn">Next</button>
      </div>
    </div>
  );
}

export default StepSlider;

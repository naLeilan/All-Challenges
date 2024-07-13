function DateCounter() {
  return (
    <div className="datecount">
      <h4>Date Counter</h4>
      <div className="step">
        <button className="btn">-</button>
        <p>Step:</p>
        <button className="btn">+</button>
      </div>
      <div className="count">
        <button className="btn">-</button>
        <p>Count:</p>
        <button className="btn">+</button>
      </div>
      <p>Today is ...</p>
    </div>
  );
}

export default DateCounter;

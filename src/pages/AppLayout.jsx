import { Link } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app">
      <h2>Simple React Code Challenges</h2>
      <div className="links">
        <Link to="/stepslider">Step Slider</Link>
        <Link to="/animals">Animal List</Link>
        <Link to="/packing">Packing List</Link>
      </div>
    </div>
  );
}

export default AppLayout;

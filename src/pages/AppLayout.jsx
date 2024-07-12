import { Link } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <h2>Simple React Code Challenges</h2>
      <Link to="/stepslider">Step Slider</Link>
      <Link to="/animals">Animal List</Link>
    </div>
  );
}

export default AppLayout;

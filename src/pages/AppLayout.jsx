import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StepSlider from "./StepSlider";

function AppLayout() {
  return (
    <Router>
      <div>
        <Link to="/stepslider">
          <button>Step Slider</button>
        </Link>
        <switch>
          <Route path="/stepslider" component={StepSlider} />
        </switch>
      </div>
    </Router>
  );
}

export default AppLayout;

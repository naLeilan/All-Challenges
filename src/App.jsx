import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import StepSlider from "./pages/StepSlider";

function App() {
  return (
    <Router>
      <div>
        <Link to="/stepslider">
          <button>Step Slider</button>
        </Link>
        <Routes>
          <Route path="/stepslider" component={StepSlider} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

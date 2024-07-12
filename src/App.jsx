import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import StepSlider from "./pages/StepSlider";
import AnimalsList from "./pages/Animals";
import PackingList from "./pages/PackingList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />} />
        <Route path="stepslider" element={<StepSlider />} />
        <Route path="animals" element={<AnimalsList />} />
        <Route path="packing" element={<PackingList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

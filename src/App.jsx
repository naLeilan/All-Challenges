import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import StepSlider from "./pages/StepSlider";
import AnimalsList from "./pages/Animals";
import PackingList from "./pages/PackingList";
import DateCounter from "./pages/DateCounter";
import BachgroundColor from "./pages/BachgroundColor";
import LinearSearch from "./pages/LinearSearch";
import BinarySearch from "./pages/BinarySearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />} />
        <Route path="stepslider" element={<StepSlider />} />
        <Route path="animals" element={<AnimalsList />} />
        <Route path="packing" element={<PackingList />} />
        <Route path="backgroundcolor" element={<BachgroundColor />} />
        <Route path="datecounter" element={<DateCounter />} />
        <Route path="linearsearch" element={<LinearSearch />} />
        <Route path="binarysearch" element={<BinarySearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

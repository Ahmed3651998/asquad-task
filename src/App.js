import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import CaseStudies from "./pages/CaseStudies.js";
import CaseStudiesInner from "./pages/CaseStudiesInner.js";
import Pricing from "./pages/Pricing.js";
import NewNav from "./pages/NewNav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Pricing" element={<Pricing/>}></Route>
        <Route path="/CaseStudies" element={<CaseStudies/>}></Route>
        <Route path="/CaseStudiesInner" element={<CaseStudiesInner/>}></Route>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/NewNav" element={<NewNav/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
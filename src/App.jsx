import React from "react";
import Start from "./Background/Start";
import { BrowserRouter, Routes, Route, MemoryRouter } from "react-router-dom";
import Cppfront from "./Languages/CPP/Cppfront";
import JavaFront from "./Languages/JAVA/JavaFront";
import PythontFront from "./Languages/Python/PythontFront";
import Map from "./Languages/CPP/Map";

// Cppfront
function App() {
  return (
    <MemoryRouter>
      {/* <Start/> */}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/cpp" element={<Cppfront />} />
        <Route path="/java" element={<JavaFront />} />
        <Route path="/python" element={<PythontFront />} />
        <Route path="/cpp/map" element={<Map />} />
      </Routes>
    </MemoryRouter>

    //  <Start
  );
}

export default App;

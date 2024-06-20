import React from "react";
import Start from "./Background/Start";
import { BrowserRouter, Routes, Route, MemoryRouter } from "react-router-dom";
import Cppfront from "./Languages/CPP/Cppfront";
import JavaFront from "./Languages/JAVA/JavaFront";
import PythontFront from "./Languages/Python/PythontFront";
import Map from "./Languages/CPP/Map";
import Queue from "./Languages/CPP/Queue";
import Array from "./Languages/CPP/Array";
import Set from "./Languages/CPP/Set";

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
        <Route path="/cpp/queue" element={<Queue />} />
        <Route path="/cpp/array" element={<Array /> } />
        <Route path="/cpp/set" element={<Set />} />
      </Routes>
    </MemoryRouter>

    //  <Start
  );
}

export default App;

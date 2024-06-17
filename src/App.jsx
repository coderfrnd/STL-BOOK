import React from 'react';
import Start from './Background/Start';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cppfront from './Languages/CPP/Cppfront';
import JavaFront from './Languages/JAVA/JavaFront';
import PythontFront from './Languages/Python/PythontFront';

// Cppfront
function App() {
  return (
    <BrowserRouter>
    {/* <Start/> */}
    <Routes>
      <Route path="/" element={<Start/>} />
          <Route path="/cpp" element={<Cppfront/>} />
          <Route path="/java" element={<JavaFront/>} />
          <Route path="/python" element={<PythontFront/>} />
        </Routes>
    </BrowserRouter>
   
  //  <Start
  );
}

export default App;

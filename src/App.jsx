import React from 'react';
import Start from './Background/Start';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter,Routes,Route,MemoryRouter } from 'react-router-dom';
>>>>>>> 7c3390b9a6ca46d51e35551734f65f9b4cdd9bea
import Cppfront from './Languages/CPP/Cppfront';
import JavaFront from './Languages/JAVA/JavaFront';
import PythontFront from './Languages/Python/PythontFront';

// Cppfront
function App() {
  return (
    <MemoryRouter>
    {/* <Start/> */}
    <Routes>
      <Route path="/" element={<Start/>} />
          <Route path="/cpp" element={<Cppfront/>} />
          <Route path="/java" element={<JavaFront/>} />
          <Route path="/python" element={<PythontFront/>} />
        </Routes>
    </MemoryRouter>
   
  //  <Start
  );
}

export default App;

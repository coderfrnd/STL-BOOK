// App.jsx

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setOffsetX(event.clientX);
    setOffsetY(event.clientY);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setLeft(left + event.clientX - offsetX);
      setTop(top + event.clientY - offsetY);
      setOffsetX(event.clientX);
      setOffsetY(event.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="w-64 h-64 bg-blue-500 absolute border border-gray-800"
      style={{ left: `${left}px`, top: `${top}px` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <h1 className="text-white text-lg p-2">Drag me!</h1>
    </div>
  );
};

export default App;

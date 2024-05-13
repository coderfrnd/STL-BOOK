import React, { useState } from 'react';

const DraggableComponent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setOffsetX(event.clientX - event.target.getBoundingClientRect().left);
    setOffsetY(event.clientY - event.target.getBoundingClientRect().top);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setLeft(event.clientX - offsetX);
      setTop(event.clientY - offsetY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="absolute w-32 h-32 bg-blue-500 cursor-move"
      style={{ left: `${left}px`, top: `${top}px` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      Drag me!
    </div>
  );
};

export default DraggableComponent;

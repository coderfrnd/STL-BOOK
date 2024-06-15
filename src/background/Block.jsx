import React from 'react';
import { Link } from 'react-router-dom';
const Block = ({ label }) => {
  return (
    <>
      <button className="button font-bold rounded-xl p-4 w-[50%] my-3 bg-[#9AE9FA]">
        <Link to={`/${label.toLowerCase()}`}>
        {label}
        </Link>
        
      </button>
    </>
  );
};

export default Block;

import React from 'react';

const Block = ({ label }) => {
  return (
    <>
      <button className="button font-bold rounded-xl p-4 w-[50%] my-3">
        {label}
      </button>
    </>
  );
};

export default Block;

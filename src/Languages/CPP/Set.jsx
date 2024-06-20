import React from "react";

function Set() {
  return (
    <div>
      <div className="pt-2 m-0 flex justify-center">
        <button className="flex justify-center items-center button rounded-2xl p-2 w-20 bg-blue-900 text-white">
          Set
        </button>
      </div>

      <div className='px-2 pt-1 h-64 overflow-auto'>
        <div className='text-sm font-bold'>Initialization:</div>
        <div className='text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white'>-{`set<value_type> set_name;`}</div>

        <div className='text-sm font-bold'>Inserting values:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-set_name.insert(value);</div>

        <div className='text-sm font-bold'>Accessing Values:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-set_name.find(value);</div>

        <div className='text-sm font-bold'>Methods:</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.begin() : </b> returns an iterator to the first element</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.end() : </b> returns an iterator to the past-the-end element</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.size() : </b> returns the number of elements</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.max_size() : </b> returns the maximum possible number of elements</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.insert() : </b> adds an element to the set</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.clear() : </b> removes all elements from the set</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.find() : </b> searches the set for the given value</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.erase() : </b> removes an element from the set by value</div>

      </div>
    </div>
  );
}

export default Set;

import React from "react";

function Array() {
  return (
    <div>
      <div className="pt-2 m-0 flex justify-center">
        <button className="flex justify-center items-center button rounded-2xl p-2 w-20 bg-blue-900 text-white">
          Array
        </button>
      </div>

      <div className="px-2 pt-1 h-64 overflow-auto">
        <div className="text-sm font-bold">Initilization:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">
          -data_type array_name[Size_of_array];
        </div>

        <div className="text-sm font-bold">Inserting values:</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white">
          -{`int arr[5] = {1, 2, 3, 4, 5};`}
        </div>
        
        <div className="text-xs ml-3 mb-0 bg-blue-950 rounded-t-md pl-1 text-white">
            -{`for (int i = 0; i < N; i++) {`}
        </div>
        <div className="text-xs ml-3 mb-0 bg-blue-950 rounded-b-md pl-5 text-white">
            {`    arr[i] = value;}`}
        </div>

        <div className='text-sm font-bold'>Accessing Values:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-array_name[index];</div>


        <div className='text-sm font-bold'>Methods:</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>sizeof(array_name) : </b> returns the total size in bytes</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>sizeof(array_name)/sizeof(array_name[0]) : </b> returns the number of elements in array</div>

        <div className="text-sm font-bold">2-D Array:</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white">
          -{`int arr[a][b];`}
        </div>
      </div>
    </div>
  );
}

export default Array;

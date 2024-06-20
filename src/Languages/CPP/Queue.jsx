import React from "react";

function Queue() {
  return (
    <div>
      <div className="pt-2 m-0 flex justify-center">
        <button className="flex justify-center items-center button rounded-2xl p-2 w-20 bg-blue-900 text-white">
          Queue
        </button>
      </div>

      <div className="px-2 pt-1 h-64 overflow-auto">
        <div className="text-sm font-bold">Initilization:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">
          -{`queue<data_type> queue_name;`}
        </div>

        <div className="text-sm font-bold">Accessing Values:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">
          -queue_name[index];
        </div>

        <div className="text-sm font-bold">Methods:</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.push() : </b> Inserts an element at the back of the queue.</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.pop() : </b> Removes an element from the front of the queue.</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.front() : </b>Returns the first element of the queue.</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.back() : </b> Returns the last element of the queue.</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.size() : </b> Returns the number of elements in the queue.</div>


      </div>
    </div>
  );
}

export default Queue;
import React from 'react'

function Vector() {
  return (
    <div>
      <div className='pt-2 m-0 flex justify-center'>
        <button className='flex justify-center items-center button rounded-2xl p-2 w-20 bg-blue-900 text-white'>Vector</button>
      </div>
      <div className='px-2 pt-1 h-64 overflow-auto'>
        <div className='text-sm font-bold'>Initialization:</div>
        <div className='text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white'>-{`vector<value_type> vec_name;`}</div>
        <div className='text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white'>-{`vector<value_type> vec_name(size);`}</div>
        <div className='text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white'>-{`vector<value_type> vec_name(size, initial_value);`}</div>

        <div className='text-sm font-bold'>Inserting values:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-vec_name.push_back(value);</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-vec_name.insert(position, value);</div>

        <div className='text-sm font-bold'>Accessing Values:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-vec_name[index];</div>

        <div className='text-sm font-bold'>Removing Values:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-vec_name.pop_back();</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-vec_name.erase(position);</div>

        <div className='text-sm font-bold'>Methods:</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.push_back(value) : </b> adds an element to the end of the vector</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.pop_back() : </b> removes the last element from the vector</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.insert(position, value) : </b> inserts an element at the specified position</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.erase(position) : </b> removes the element at the specified position</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.size() : </b> returns the number of elements in the vector</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.empty() : </b> checks if the vector is empty</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.clear() : </b> removes all elements from the vector</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.resize(new_size) : </b> changes the size of the vector</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.at(index) : </b> returns the element at the specified position</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.front() : </b> returns the first element of the vector</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.back() : </b> returns the last element of the vector</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.swap(other_vector) : </b> swaps the contents with another vector</div>
      </div>
    </div>
  )
}

export default Vector

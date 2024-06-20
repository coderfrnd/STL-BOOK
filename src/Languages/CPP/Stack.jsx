import React from 'react'

function Stack() {
  return (
    <div>
      <div className='pt-2 m-0 flex justify-center'>
        <button className='flex justify-center items-center button rounded-2xl p-2 w-20 bg-blue-900 text-white'>Stack</button>
      </div>
      <div className='px-2 pt-1 h-64 overflow-auto'>
        <div className='text-sm font-bold'>Initialization:</div>
        <div className='text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white'>-{`stack<value_type> stack_name;`}</div>

        <div className='text-sm font-bold'>Inserting values:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-stack_name.push(value);</div>

        <div className='text-sm font-bold'>Accessing Values:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-stack_name.top();</div>

        <div className='text-sm font-bold'>Removing Values:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-stack_name.pop();</div>

        <div className='text-sm font-bold'>Methods:</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.push(value) : </b> adds an element to the top of the stack</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.pop() : </b> removes the top element from the stack</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.top() : </b> returns the top element of the stack</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.size() : </b> returns the number of elements in the stack</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.empty() : </b> checks if the stack is empty</div>
      </div>
    </div>
  )
}

export default Stack

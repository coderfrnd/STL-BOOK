import React from 'react'

function String() {
  return (
    <div>
      <div className='pt-2 m-0 flex justify-center'>
        <button className='flex justify-center items-center button rounded-2xl p-2 w-20 bg-blue-900 text-white'>String</button>
      </div>
      <div className='px-2 pt-1 h-64 overflow-auto'>
        <div className='text-sm font-bold'>Initialization:</div>
        <div className='text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white'>-{`string str_name;`}</div>
        <div className='text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white'>-{`string str_name = "Hello";`}</div>

        <div className='text-sm font-bold'>Inserting values:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-str_name = "Hello";</div>

        <div className='text-sm font-bold'>Accessing Values:</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-char ch = str_name[index];</div>
        <div className="text-xs ml-3 bg-blue-950 rounded-md pl-1 text-white">-string substr = str_name.substr(start_index, length);</div>

        <div className='text-sm font-bold'>Methods:</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.length() : </b> returns the length of the string</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.size() : </b> returns the length of the string (same as length())</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.empty() : </b> checks if the string is empty</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.substr(start_index, length) : </b> returns a substring</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.find(substring) : </b> returns the index of the first occurrence of substring</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.replace(start_index, length, new_substring) : </b> replaces part of the string</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.append(str) : </b> appends a string</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.erase(start_index, length) : </b> removes part of the string</div>
        <div className="text-xs ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.clear() : </b> clears the string</div>
      </div>
    </div>
  )
}

export default String

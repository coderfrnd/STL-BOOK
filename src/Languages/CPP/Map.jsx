import React from 'react'

function Map() {
  return (
    <div>
        <div className='p-2 m-0 flex justify-center'>
            <button className='flex justify-center items-center button rounded-2xl p-2 w-20 bg-[#9AE9FA]'>Map</button>
        </div>
        <div className='p-2'>
            <div className='text-sm font-bold'>Initilization:</div>
            <div className='text-sm ml-3 bg-blue-950 rounded-md pl-1 text-white'>-{`map<key_type, value_type> map_name;`}</div>
            
            <div className='text-sm font-bold'>Inserting values:</div>
            <div className="text-sm ml-3 bg-blue-950 rounded-md pl-1 text-white">-map_name[key] = value;</div>

            <div className='text-sm font-bold'>Accessing Values:</div>
            <div className="text-sm ml-3 bg-blue-950 rounded-md pl-1 text-white">-map_name[key];</div>
        </div>
    </div>
  )
}

export default Map
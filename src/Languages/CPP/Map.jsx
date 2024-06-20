import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Map() {
  return (
    <div>
      <div className='flex justify-center'>
      <div className='pt-2 m-0 flex justify-center w-[60%]'>
            <button className='flex justify-center items-center button rounded-2xl p-2 w-20 bg-blue-900 text-white text-lg'>Map</button>
            
        </div>
        <div className=''>
        <Link to='/cpp'>
            <div className='text-3xl mt-3'>
            <FontAwesomeIcon icon={faHome} />
            </div>
               
            </Link>
        </div>
      </div>
       
        <div className='px-2 pt-1 h-64 overflow-auto'>
            <div className='text-lg font-bold'>Initialization:</div>
            <div className='text-lg ml-3 bg-blue-950 rounded-md pl-1 text-white'>-{`map<key_type, value_type> map_name;`}</div>
            
            <div className='text-lg font-bold'>Inserting values:</div>
            <div className="text-lg ml-3 bg-blue-950 rounded-md pl-1 text-white">-map_name[key] = value;</div>

            <div className='text-lg font-bold'>Accessing Values:</div>
            <div className="text-lg ml-3 bg-blue-950 rounded-md pl-1 text-white">-map_name[key];</div>

            <div className='text-lg font-bold'>Methods:</div>
            <div className="text-lg ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.begin() : </b> returns first element of map</div>
            <div className="text-lg ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.end() : </b> returns last element of map</div>
            <div className="text-lg ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.size() : </b> returns no. of elements in map</div>
            <div className="text-lg ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.max_size() : </b> returns max no. of elements map can hold</div>
            <div className="text-lg ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.insert() : </b> adds an element (key-value pair) to the map</div>
            <div className="text-lg ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.clear() : </b> removes all the elements from map</div>
            <div className="text-lg ml-3 mb-0.5 bg-blue-950 rounded-md pl-1 text-white"><b>.find() : </b> searches the map for the given key</div>
        </div>
    </div>
  );
}

export default Map;

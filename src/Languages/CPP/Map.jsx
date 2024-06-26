import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faArrowRight,faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Subpart from './Component/subpart';
{/* <Subpart */}
function Map() {
  return (
    <div>
      <div className='flex justify-center'>
      <div className='w-[15%] flex justify-center'>
          <Link to='/'>
            <div className='text-3xl mt-3  bg-[#9AE9FA] w-[100%]'>
              <FontAwesomeIcon icon={faHome} />
            </div>
          </Link>
        </div>
        <div className='pt-2 m-0 flex justify-center w-[55%]'>
          <button className='flex justify-center items-center button rounded-2xl p-2 w-20 bg-[#9AE9FA] text-black text-lg'>Map</button>
        </div>
        
        <div className='w-[15%] flex justify-center  '>
          <Link to='/cpp'>
            <div className='text-3xl mt-3  bg-[#9AE9FA] w-[100%]'>
              <FontAwesomeIcon icon={faArrowCircleLeft} />
            </div>
          </Link>
        </div>
      </div>
      <div className='px-2 pt-1 h-64 overflow-auto text-black'>
        <div className='text-lg font-bold'>Initialization:</div>
        <Subpart content="-{`map<key_type, value_type> map_name;`}" />
        
        <div className='text-lg font-bold'>Inserting values:</div>
        <Subpart content="-map_name[key] = value;" />

        <div className='text-lg font-bold'>Accessing Values:</div>
        <Subpart content="-map_name[key];" />

        <div className='text-lg font-bold '>Methods:</div>
        <div className='space-y-2'>
        <Subpart content=".begin() : returns first element of map" />
        <Subpart content=".end() : returns last element of map" />
        <Subpart content=".size() : returns no. of elements in map" />
        <Subpart content=".max_size() : returns max no. of elements map can hold" />
        <Subpart content=".insert() : adds an element (key-value pair) to the map" />
        <Subpart content=".clear() : removes all the elements from map" />
        <Subpart content=".find() : searches the map for the given key" />
        </div>
        
      </div>
    </div>
  );
}

export default Map;
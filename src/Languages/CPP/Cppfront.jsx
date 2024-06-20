import React from "react";
import Btn from "./Btn";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
const Cppfront = () => {
  return (
    <div className="h-[100%] w-[100%]">

    
    <div className="bg-blue-50 pt-2">
      <div className="m-0 p-0">
        <div className="flex items-center justify-center">
          <Link to="/cpp/map">
            <Btn lable={"Map"} />
          </Link>
        </div>

        <div className="flex justify-between">
          <Link to="/cpp/queue">
            <Btn lable={"Queue"} />
          </Link>
          <Link to="/cpp/array">
            <Btn lable={"Array"} />
          </Link>
        </div>

        <div className="flex justify-between">
          <Link to="/cpp/set">
            <Btn lable={"Set"} />
          </Link>
          <Btn lable={"Loop"} />
        </div>

        <div className="flex justify-between">
          <Btn lable={"Stack"} />
          <Btn lable={"String"} />
        </div>

        <div className="flex items-center justify-center">
          <Btn lable={"Vector"} />
        </div>
      </div>

      {/* <div className="p-0 m-0 w-[100%] h-[30%] ">
        <Link to="/">
        <button className="bg-blue-500 rounded-md text-white text-xs p-1 w-[100%] h-[100%]">Back</button>
        </Link>
       
      </div> */}
      
    </div>
    <div className="mt-2 h-[18%] w-[100%]">
    <Link to="/">
    <button className="  bg-blue-500 h-[100%] w-[100%] rounded-b-2xl font-bold">
       BACK

      </button>
      </Link>
    </div>
   
    </div>
  );
};

export default Cppfront;

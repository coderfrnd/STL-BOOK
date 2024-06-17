import React from "react";
import Btn from "./Btn";
// import { Link } from 'react-router-dom';
const Cppfront = () => {
  return (
    <div className="bg-blue-50">
      <div className="m-0 p-0">
        <div className="flex items-center justify-center">
          <Btn lable={"Map"} />
        </div>

        <div className="flex justify-between">
          <Btn lable={"Queue"} />
          <Btn lable={"Array  "} />
        </div>

        <div className="flex justify-between">
          <Btn lable={"Set"} />
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

      <div className="p-0 m-0">
        <button className="bg-blue-500 rounded-md text-white text-xs p-1">Back</button>
      </div>
    </div>
  );
};

export default Cppfront;

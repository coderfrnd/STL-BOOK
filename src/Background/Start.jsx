import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Block from "./Block";
import Front_Btn from "./Front_Btn";
import Front_Page from "../Languages/CPP/Front_Page";
import Cppfront from "../Languages/CPP/Cppfront";

const Start = () => {
  return (
    <>
      <div className=" font-inter">
        <div className="front h-full w-full flex flex-col">
          <div className="upper-btn flex justify-center items-center">
            <Front_Btn label="Programing Book" />
          </div>
          <div className="border border-black"></div>
          <Link to="/cpp" className="">
            <div className="languages flex flex-col m-1 justify-center items-center">
              <Block label="C++" />
            </div>
          </Link>
          <Link to="java">
            <div className="languages flex flex-col m-1 justify-center items-center">
              <Block label="PYTHON" />
            </div>
          </Link>
          <Link to="python">
            <div className="languages flex flex-col m-1 justify-center items-center">
              <Block label="JAVA" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Start;

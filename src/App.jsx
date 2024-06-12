<<<<<<< HEAD
import { useState } from 'react'

import './App.css'
import Bg from './Background/Bg'


function App() {
  

  return (
    <div className=''>
      
      <Bg/>
     
    </div>
  )
}

export default App
=======
import { useState } from "react";

import "./App.css";
import Check from "./background/Check";

function App() {
  return (
    <div className="">
      <div className="front h-full w-full flex flex-col">
        <div className="upper-btn flex justify-center items-center">
          <button className="button font-bold rounded-b-2xl p-4">Programming-Book</button>
        </div>
        <div className="border border-black">
          
        </div>

        <div className="languages flex flex-col m-1 justify-center items-center">
          <button className="button font-bold rounded-xl p-4 w-[50%] my-2">C++</button>
          <button className="button font-bold rounded-xl p-4 w-[50%] my-2">Java</button>
          <button className="button font-bold rounded-xl p-4 w-[50%] my-2">Python</button>
        
        </div>

      </div>
    </div>
  );
}

export default App;
>>>>>>> keshav

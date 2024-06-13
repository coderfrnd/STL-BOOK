
import "./App.css";
import Block from "./Background/Block";
import Front_Btn from "./Background/Front_Btn";

function App() {
  return (
    <div className=" font-inter">
      <div className="front h-full w-full flex flex-col">
        <div className="upper-btn flex justify-center items-center">
         <Front_Btn label='Programing Book'/>
        </div>
        <div className="border border-black">
          
        </div>

        <div className="languages flex flex-col m-1 justify-center items-center">
          <Block label='C++'/>
          <Block label='PYTHON'/>
          <Block label='JAVA'/>
        
        </div>

      </div>
    </div>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DraggableComponent from './background/dragable.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='h-[250px] w-[250px] bg-black text-white'>
 <React.StrictMode>
  <DraggableComponent>
 <App />
  </DraggableComponent>
    {/* <App /> */}
  </React.StrictMode>
  </div>
 
)

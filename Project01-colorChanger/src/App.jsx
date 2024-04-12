import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('red')

  return (
    <div 
    className='flex h-screen w-screen duration-200 justify-center'
    style={{backgroundColor: color}}>
      <div  
        className='fixed flex flex-wrap justify-center bottom-12 gap-2 shadow-2xl rounded-full bg-white px-3 py-2'>
          <button onClick={()=>setColor('red')}
            className='text-white rounded-full bg-red-600 outline-none shadow-xl'>
              Red
          </button>
          <button onClick={()=>{setColor('green')}}
            className='text-white rounded-full bg-green-500 outline-none shadow-xl'>
              Green
          </button>
          <button onClick={()=>{setColor('blue')}}
            className='text-white rounded-full bg-blue-600 outline-none shadow-xl'>
              Blue
          </button>
          <button onClick={()=>{setColor('yellow')}}
            className='text-white rounded-full bg-yellow-300 outline-none shadow-xl'>
              Yellow
          </button>

      </div>

    </div>
  )
    // <div className="w-screen h-screen flex duration-200"
    // style={{backgroundColor: color}}
    // >
    //   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    //     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    //       <button
    //       onClick={() => setColor("red")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "red"}}
    //       >Red</button>
    //       <button
    //       onClick={() => setColor("green")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "green"}}
    //       >Green</button>
    //       <button
    //       onClick={() => setColor("blue")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "blue"}}
    //       >Blue</button>
    //       <button
    //       onClick={() => setColor("olive")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "olive"}}
    //       >Olive</button>
    //     </div>
    //   </div>
    // </div>

}

export default App

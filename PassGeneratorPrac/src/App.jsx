import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numsAllowed, setnumAllowed] = useState(false)
  const [charsAllowed, setcharsAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numsAllowed) str+= '1234567890'
    if (charsAllowed) str+= '~!@#$%^&*()_+{}[]?'
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numsAllowed,charsAllowed,setPassword])
  
  let passwordRef = useRef(null)
  const clipboardFn = useCallback(()=>{
    passwordRef.current?.select(password)
    window.navigator.clipboard.writeText(password)
  },[password,passwordRef])
  useEffect(()=>{
    passGenerator()
  },[length,numsAllowed,charsAllowed,passGenerator])
  return (
    <>
      <div 
        className='w-full max-w-md mx-auto px-4 py-5 bg-slate-800 text-white  rounded-lg'>
        <div
          className='flex rounded-lg overflow-hidden drop-shadow-lg mb-4'>
            <input type="text"size={50}
              placeholder='Password' 
              className='px-3 py-2 overflow-hidden'/>
            <button
              onClick={()=>{clipboardFn()}}
              className='px-3 bg-blue-600'>Copy</button>
          </div>
          <div className='flex gap-3'>
            <div
              className='flex items-center gap-1'>
                <input type="range" 
                  id="lengthRange"
                  value={length}
                  minLength={6}
                  maxLength={20}
                  onChange={(e)=>{setLength(e.target.value)}}
                  />
                <label htmlFor="lengthRange">Length ({length})</label>
              </div>
              <div
              className='flex items-center gap-1'>
                <input type="checkbox"
                  checked = {numsAllowed}
                  onStateChange = {()=>{
                    setnumAllowed((prev) => !prev)
                  }}
                  />
                <label htmlFor="checkbox">Number</label>
              </div>
              <div
              className='flex items-center gap-1'>
                <input type="checkbox"
                  checked = {charsAllowed}
                  onStateChange = {()=>{
                    setcharsAllowed((prev) => !prev)
                  }}
                  />
                <label htmlFor="checkbox">Characters</label>
              </div>
          </div>
      </div>

    </>
  )
}

export default App

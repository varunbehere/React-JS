import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumsAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) str += '0123456789';
    if (charsAllowed) str += '[]{}!@#$%^&*()_+~`-=';

    for (let i = 0; i < length; i++) { // Changed from 1 to 0
      let char = Math.floor(Math.random() * str.length); // Removed + 1
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charsAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charsAllowed, passwordGenerator]); // Removed password dependency

  const passwordRef = useRef(null);
  const clipboardfn = useCallback(() => {
    passwordRef.current?.select(password);
    window.navigator.clipboard.writeText(password);
  }, [password, passwordRef]);

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-5 my-3 py-5 text-white bg-slate-600'>
        <div className='flex shadow-lg rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            placeholder='Password'
            className='p-2 text-black'
            size={40}
            readOnly
            ref={passwordRef}
          />
          <button onClick={clipboardfn} className='px-4 bg-blue-600 shrink-0'>Copy</button>
        </div>
        <div className='flex rounded-lg gap-x-3'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              value={length}
              id='inputRange'
              min={6}
              max={20}
              onChange={(e) => { setLength(e.target.value) }}
              className='cursor-pointer'
            />
            <label htmlFor="inputRange">Length ({length})</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id='checkforNum'
              checked={numAllowed} // Changed from defaultChecked to checked
              onChange={() => {
                setNumsAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="checkforNum">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id='checkforChars'
              checked={charsAllowed} // Changed from defaultChecked to checked
              onChange={() => {
                setCharsAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="checkforChars">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

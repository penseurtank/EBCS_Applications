/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  // useRef hook

  const passwordRef = useRef(null);
  const paswordGenrator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str = str + '0123456789';
    if (charAllowed) str = str + '!@#$%^&*()_~+=-';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    password.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    paswordGenrator();
  }, [length, numberAllowed, charAllowed, paswordGenrator])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 shadow-xl rounded-xl px-6 py-8 text-orange-400 space-y-6">
        <h1 className="text-center text-white text-3xl font-bold">Password Generator</h1>

        {/* Password display + copy */}
        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-orange-600 bg-white"
            placeholder="Your password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold transition">
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          {/* Length Slider */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold">Length:</label>
            <span className="text-white text-sm">{length}</span>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full ml-4 accent-orange-500"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(prev => !prev)}
                className="accent-orange-500"
              />
              Include Numbers
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
                className="accent-orange-500"
              />
              Include Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App

import { useEffect, useState } from 'react'
import axios from 'axios'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/all.scss'
import './App.css'

console.log(import.meta.env.VITE_APP_PATH);

function App() {
  const [count, setCount] = useState(0)

  useEffect(() =>{
    (async() =>{
      const res = await axios.get('https://randomuser.me/api')
      console.log(res);
    })()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

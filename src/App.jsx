import { useState } from 'react'
import './App.css'
import './style.css';
import { FaMoon } from 'react-icons/fa';

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <div className= { `container ${darkMode && 'dark'}`}>
        <button className='button' onClick={() => setDarkMode(!darkMode)} ><FaMoon/></button>
        
      </div>
    </>
  )
}

export default App

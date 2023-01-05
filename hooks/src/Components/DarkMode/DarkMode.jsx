import React, {useState} from 'react'
import '../DarkMode/DarkMode.css'

const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(false);


  return (
    <div className='main-dark-page'>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        {/* <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span> */}
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        {/* <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span> */}
      </div>
      <div>
        <h1> its {darkMode ? "Dark" : "Light"} Mode </h1>
      </div>
    </div>

    </div>
  )
}

export default DarkMode

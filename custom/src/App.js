import React, { useState, useEffect } from "react";
import './App.css';
import useFetch from './useFetch/useFetch';
import Nav from './Nav/Nav';
import DarkToLight from './DarkToLight/DarkToLight';
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";

function App() {

  const { data: joke, loading, error, refetch } = useFetch(
    "https://v2.jokeapi.dev/joke/Any"
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <div className="App">
      <Nav/>

      <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles /> 
        {/* <div>
          <Main theme={themes[theme]} setTheme={setTheme} />
          <div>
            
          </div>
        </div> */}
      </>
    </ThemeProvider>






      {/* <DarkToLight/> */}

      <div>
     <h2>Custom - Hooks in React.js</h2> <hr />
     
     <h1>
        {joke?.setup} : {joke?.delivery}
      </h1>

      <button onClick={refetch}> Refetch</button>

     </div> <hr />
       
    </div>
  );
}

export default App;

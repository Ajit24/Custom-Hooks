import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppHeader from './AppHeader';
import Home from './Home';
import Contact from './Contact';
import Aboutus from './Aboutus';
import Empdetails from './Empdetails';
import EmployeeListing from './EmployeeListing';
import { useState } from 'react';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import Error from './Error';
import Chat from './Chat';

function App() {
  const[title,titleupdate]=useState("ACT")
  
  return (
    <div className="container">
      <BrowserRouter>
        <AppHeader title={title}></AppHeader>

        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<Aboutus/>}></Route>
          <Route path='/employee' element={<EmployeeListing/>}></Route>
          <Route path='/addemployee' element={<AddEmployee/>}></Route>

          <Route path='/empdetails/:id/:name' element={<Empdetails/>}></Route>
          <Route path='/empdetails/:id' element={<Empdetails/>}></Route>
          <Route path='/editemployee/:empid' element={<EditEmployee/>}></Route>
          <Route path='*' element={<Error/>}></Route>
          

        </Routes>

      </BrowserRouter>
      <Chat/>
    </div>
  );
}

export default App;

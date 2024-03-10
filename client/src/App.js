import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Homepages from './Pages/Homepages';
import  Contact  from './Pages/Contact';
import Login from './Pages/Login';
import AboutUs from './Pages/AboutUs';
import RegistrationForm from './Pages/UserRegistration';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/login" element={<Login/>}/>
           <Route path ='/Contact' element={<Contact/>}/>
           <Route path='/About' element={<AboutUs/>}/>
           <Route path ='/UserRegistration' element={<RegistrationForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Homepages from './Pages/Homepages';
import { Contact } from './Pages/Contact';
import Login from './Pages/Login';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/login" element={<Login/>}/>
           <Route path ='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


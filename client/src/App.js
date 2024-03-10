import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Homepages from './Pages/Homepages';
import LoginUser from './Pages/Login';
import { Contact } from './Pages/Contact';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path='/userLogin' element={<LoginUser/>}/>
           <Route path ='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


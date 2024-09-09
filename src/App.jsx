import React, { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Edit from './pages/Edit';
import Create from './pages/Create';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  const [id,setId]=useState(0)
  return (
    <div>
     
      <BrowserRouter>
      <div>
        <Navbar/>
      
      </div>
      <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route  path= '/user' element={<User setId={setId}/>}/>
        <Route path= '/edit/:id' element={<Edit id={id}/>}/>
        <Route path= '/create' element={<Create/>}/>
      </Routes>
       

      
      <div>
        <Footer/>
      </div>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
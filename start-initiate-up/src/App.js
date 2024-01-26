import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Homepage from './components/homepage/homepage';
import Loginbar from './components/googlebar/loginbar';
import Signup from './components/signupbar/signup';
import Details from './components/details/details';
// import React, { useState } from 'react';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
  //  <>
  //  <Navbar/>
  //   <Loginbar />
  //   <Signup />
  //  </>
  <Router>
  {/* <div onMouseMove={handleMouseMove}>
 {showButton && <button>Click me</button> }
</div> */}

<Navbar/>
<Routes>
 <Route path="/" element={<Homepage />} />
 <Route path="/loginbar" element={<Loginbar />} />
 <Route path="/signup" element={<Signup />} />
 <Route path="/details" element={<Details />} />
 {/* <Route path="/aboutme" element={<Aboutme />} />
 <Route path="/research" element={<Research />} />
 <Route path="/academic" element={<Academic />} /> */}

</Routes>

</Router>
  );
}

export default App;

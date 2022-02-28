//jshint esversion:6

import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Easy from './Easy.jsx';
import Hard from './Hard.jsx';
import Difficulty from './Difficulty.jsx';
import Instructions from './Instructions.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/difficulty" element={<Difficulty />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/hard" element={<Hard />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

import React, { useState } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Art from './pages/Art';
import Code from './pages/Code';
import UIUX from './pages/UIUX';
import About from './pages/About';
import CV from './pages/CV';

function App(props) {
  const [isMin, setIsMin] = useState(false);

  return (
    <BrowserRouter>
      <div className="bugbox">
        <img className="bug" src="/01111.png"/>
      </div>
      <div className="screen">
        <Navbar
          isMin={isMin}
          onToggle={() => setIsMin(prev => !prev)}
        />
        <div className={`
          contents
          ${isMin ? "min" : "max"}
        `}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/art" element={<Art />} />
              <Route path="/cs" element={<Code />} />
              <Route path="/uiux" element={<UIUX />} />
              <Route path="/about" element={<About/>} />
              <Route path="/cv" element={<CV/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Art from './pages/Art';
import CS from './pages/CS';
import UIUX from './pages/UIUX';
import About from './pages/About';
import BrainRef from './pages/BrainRef';

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
              <Route path="/cs" element={<CS />} />
              {/*<Route path="/uiux" element={<UIUX />} />*/}
              <Route path="/about" element={<About/>} />
              <Route path="/brain-ref" element={<BrainRef/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

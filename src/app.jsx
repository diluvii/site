import React from 'react';
import {
  HashRouter, Routes, Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Art from './pages/Art';
import Code from './pages/Code';
import About from './pages/About';

function App(props) {
  return (
    <HashRouter>
      <div className="screen">
        <Navbar />
        <div className="contents">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/art" element={<Art />} />
              <Route path="/cs" element={<Code />} />
              <Route path="/about" element={<About/>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

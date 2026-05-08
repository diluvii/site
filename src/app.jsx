import React from 'react';
import {
  HashRouter, Routes, Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Art from './pages/Art';
import Code from './pages/Code';
import About from './pages/About';
import Notes from './pages/Notes';
import CV from './pages/CV';

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
              <Route path="/notes" element={<Notes/>} />
              <Route path="/cv" element={<CV/>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

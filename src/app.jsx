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

// notes pages
import Notes15503 from './pages/15503';

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
              <Route path="/notes/15503" element={<Notes15503/>} />
              <Route path="/cv" element={<CV/>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

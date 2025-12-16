import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Art from './pages/Art';
import Code from './pages/Code';
import About from './pages/About';

function App(props) {
  return (
    <BrowserRouter>
      <div className="screen">
        <Navbar />
        <div className="contents">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/art" element={<Art />} />
              <Route path="/code" element={<Code />} />
              {/*<Route path="/about" element={<About/>} />*/}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

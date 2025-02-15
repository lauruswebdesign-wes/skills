import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Curriculum from './pages/Curriculum';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/curriculum" element={ <Curriculum/> } />
      </Routes>
    </div>
  )
}

export default App

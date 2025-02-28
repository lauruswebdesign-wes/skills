import React from 'react';
import { Routes, Route } from "react-router-dom";
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Web from './pages/Web';
import Information from './pages/Information';
import Animation from './pages/Animation';
import './fonts.css';
import Video from './pages/Video';
import Business from './pages/Business';
import Medical from './pages/Medical';
import SkillsPage from './pages/SkillsPage';

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/skills/:department" element={<SkillsPage />} />
        </Route>
      </Routes>
   
  );
};

export default App;

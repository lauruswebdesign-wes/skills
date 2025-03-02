import React from 'react';
import { Routes, Route } from "react-router-dom";
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import './fonts.css';
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

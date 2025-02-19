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

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="web" element={<Web />} />
          <Route path="information" element={<Information />} />
          <Route path="animation" element={<Animation />} />
          <Route path="video" element={<Video/>} />
          <Route path="business" element={<Business />} />
          <Route path="medical" element={<Medical />} />
        </Route>
      </Routes>
   
  );
};

export default App;

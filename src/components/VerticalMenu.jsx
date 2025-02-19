import React from 'react';
import { Link } from 'react-router-dom';

const VerticalMenu = () => {
  return (
    <nav className="bg-primary w-[175px] h-screen fixed left-0 top-0 flex flex-col justify-center text-center">
      <ul className="p-4">
        <li><Link to="/web" className="text-white block py-2">Web</Link></li>
        <li><Link to="/information" className="text-white block py-2">Information</Link></li>
        <li><Link to="/animation" className="text-white block py-2">Animation</Link></li>
        <li><Link to="/video" className="text-white block py-2">Video</Link></li>
        <li><Link to="/business" className="text-white block py-2">Business</Link></li>
        <li><Link to="/medical" className="text-white block py-2">Medical</Link></li>
      </ul>
    </nav>
  );
};

export default VerticalMenu;

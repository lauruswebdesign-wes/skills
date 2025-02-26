import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'; // Import Home icon from react-icons

const VerticalMenu = () => {
  return (
    <nav className="bg-primary w-[175px] h-screen fixed left-0 top-0 flex flex-col justify-center items-center text-center p-4">
      {/* Home Icon Link */}
      <Link to="/" className="text-white mb-4 p-2 hover:bg-white hover:text-primary rounded-full transition">
        <AiFillHome size={32} />
      </Link>

      {/* Navigation Links */}
      <ul className="w-full">
        <li><Link to="/skills/web" className="text-white block py-2">Web</Link></li>
        <li><Link to="/skills/information" className="text-white block py-2">Information</Link></li>
        <li><Link to="/skills/animation" className="text-white block py-2">Animation</Link></li>
        <li><Link to="/skills/video" className="text-white block py-2">Video</Link></li>
        <li><Link to="/skills/business" className="text-white block py-2">Business</Link></li>
        <li><Link to="/skills/medical" className="text-white block py-2">Medical</Link></li>
      </ul>
    </nav>
  );
};

export default VerticalMenu;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'; // Import Home icon from react-icons

const VerticalMenu = () => {
  const location = useLocation(); // Get the current path

  // Define menu items
  const menuItems = [
    { path: "/skills/web", label: "Web" },
    { path: "/skills/information", label: "Information" },
    { path: "/skills/animation", label: "Animation" },
    { path: "/skills/video", label: "Video" },
    { path: "/skills/business", label: "Business" },
    { path: "/skills/medical", label: "Medical" },
  ];

  return (
    <nav className="bg-primary w-[175px] h-screen fixed left-0 top-0 flex flex-col justify-center items-center text-center p-4">
      {/* Home Icon Link */}
      <Link to="/" className="text-white mb-4 p-2 hover:bg-white hover:text-primary rounded-full transition">
        <AiFillHome size={32} />
      </Link>

      {/* Navigation Links */}
      <ul className="w-full">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block py-2 ${
                location.pathname === item.path ? "text-[#f99b1c] font-bold" : "text-white"
              } transition-colors`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default VerticalMenu;

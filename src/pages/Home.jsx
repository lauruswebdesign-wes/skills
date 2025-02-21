import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaLaptopCode, FaFilm, FaBusinessTime, FaHeartbeat, FaInfoCircle } from 'react-icons/fa';

const departments = [
  { name: "Web", path: "/web", icon: <FaGlobe size={40} /> },
  { name: "Information", path: "/information", icon: <FaInfoCircle size={40} /> },
  { name: "Animation", path: "/animation", icon: <FaLaptopCode size={40} /> },
  { name: "Video", path: "/video", icon: <FaFilm size={40} /> },
  { name: "Business", path: "/business", icon: <FaBusinessTime size={40} /> },
  { name: "Medical", path: "/medical", icon: <FaHeartbeat size={40} /> },
];

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-6 justify-items-center">
      {departments.map((dept, index) => (
        <Link 
          key={index} 
          to={dept.path} 
          className="w-[260px] h-[150px] flex flex-col items-center justify-center 
             bg-primary text-white rounded-[10px] shadow-md hover:shadow-lg 
             transition-transform transform hover:scale-105 duration-200"
        >
          {dept.icon}
          <h2 className="mt-2 text-lg font-semibold">{dept.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Home;

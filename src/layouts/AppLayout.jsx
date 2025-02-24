import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VerticalMenu from '../components/VerticalMenu';

const AppLayout = () => {
  const location = useLocation(); // Get the current route

  // Adjust width: w-4xl for Home, w-6xl for other pages
  const containerWidth = location.pathname === "/" ? "w-4xl" : "w-6xl";

  return (
    <div className='bg-site-bg flex flex-col min-h-screen justify-between'>
      <Header className="bg-primary" />
      <div className="flex">
        <VerticalMenu />
        <main className="flex-1 flex justify-center p-4">
          <div className={`${containerWidth} mx-auto p-6`}>
            <Outlet />
          </div>
        </main>
      </div>
      <Footer className="bg-primary mt-auto" />
    </div>
  );
};

export default AppLayout;

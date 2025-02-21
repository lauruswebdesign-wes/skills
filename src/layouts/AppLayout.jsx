import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VerticalMenu from '../components/VerticalMenu';

const AppLayout = () => {
  return (
    <div className='bg-site-bg flex flex-col min-h-screen justify-between'>
      <Header className="bg-primary" />
      <div className="flex">
        <VerticalMenu />
        {/* Center the main content and set a max width */}
        <main className="flex-1 flex justify-center p-4">
          <div className="w-6xl mx-auto p-6"> {/* This ensures all pages have the same width */}
            <Outlet />
          </div>
        </main>
      </div>
      <Footer className="bg-primary mt-auto" />
    </div>
  );
};

export default AppLayout;

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
        {/* Add margin to prevent content from being hidden behind the menu */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
      <Footer className="bg-primary mt-auto" />
    </div>
  );
};

export default AppLayout;

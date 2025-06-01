// MainLayout.jsx
import React from 'react';
import Header from './Header'; // مسیرش رو درست کن

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;

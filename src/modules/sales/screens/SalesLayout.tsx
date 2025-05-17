// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SalesLayout = () => {
  return (
    <div>
      <h1>SalesLayouts</h1>
      <hr />
      <Outlet />
    </div>
  );
};

export default SalesLayout;
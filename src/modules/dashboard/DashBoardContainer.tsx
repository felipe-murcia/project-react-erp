// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      <p>Esta es la página principal del dashboard.</p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
};

export default DashboardHome;
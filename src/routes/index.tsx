import { Suspense } from 'react';
import React from 'react';
import DashboardHome from '../modules/dashboard/DashBoardContainer';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AppLayout from '../app/layouts/AppLayout';
import NotFoundPage from '../modules/NotFoundPage';
import AuthLayout from '../app/layouts/AuthLayout';
import LoginPage from '../modules/auth/pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [ // Las rutas de los módulos van como hijos del AppLayout
      { index: true, element: <DashboardHome /> },
      {
        path: 'sales/*', // El path base para el módulo de ventas
        element: (
          <Suspense fallback={<div>Cargando Módulo de Ventas...</div>}>
            {/* Este componente ahora renderiza las rutas definidas DENTRO de SalesModuleRouter */}
            {React.createElement(React.lazy(() => import('../modules/sales/routes/SalesModuleRouter')))}
          </Suspense>
        ),
      },
    ],
  },
    {
        path: '/auth',
        element: <AuthLayout />, // Layout para login, registro, etc.
        children: [
        { path: 'login', element: <LoginPage /> },
        { path: '*', element: <Navigate to="/auth/login" replace /> }, // Redirige cualquier ruta no válida en /auth a login
        ],
    },
   { path: '*', element: <NotFoundPage /> },
]);
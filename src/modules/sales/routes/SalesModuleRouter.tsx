// src/modules/sales/SalesModuleRouter.jsx
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../../../routes/ProtectedRoute'; // Usar el ProtectedRoute global
import { SalesRoute } from './SalesRoute';

const SalesLayout = React.lazy(() => import('../screens/SalesLayout')); // Layout específico del módulo

const SalesModuleRouter = () => {
  
  return (
    <Suspense fallback={<div>Cargando página de ventas...</div>}>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute permissionsRequired={['view_sales_module']} rolesRequired={['admin',"sales_manager","user"]}>
              <Suspense fallback={<div>Cargando layout de ventas...</div>}>
                <SalesLayout />
              </Suspense>
            </ProtectedRoute>
          }
        >
          {SalesRoute.map((route, index) => (
            <Route key={index} index={route.index} path={route.path} element={<route.element />} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default SalesModuleRouter;
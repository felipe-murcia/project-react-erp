// src/modules/sales/SalesModuleRouter.jsx
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../../../routes/ProtectedRoute'; // Usar el ProtectedRoute global

// Páginas del módulo de ventas (con lazy loading)
// const CreateOrderPage = React.lazy(() => import('./pages/CreateOrderPage'));
// const OrderListPage = React.lazy(() => import('./pages/OrderListPage'));
// const OrderDetailPage = React.lazy(() => import('./pages/OrderDetailPage'));
// const SalesDashboardPage = React.lazy(() => import('./pages/SalesDashboardPage'));
// const SalesModuleLayout = React.lazy(() => import('./components/SalesModuleLayout')); // Layout específico del módulo

const SalesModuleLayout = React.lazy(() => import('../SalesContainer'));

const SalesModuleRouter = () => {
  return (
    <Suspense fallback={<div>Cargando página de ventas...</div>}>
      <Routes>
        <Route
          element={ // Layout específico para el módulo de ventas si es necesario
            <ProtectedRoute permissionsRequired={['view_sales_module']}>
              <Suspense fallback={<div>Cargando layout de ventas...</div>}>
                <SalesModuleLayout />
              </Suspense>
            </ProtectedRoute>
          }
        >
          <Route index element={<SalesModuleLayout />} /> {/* p.ej. /sales/ */}
          <Route path="orders" element={<SalesModuleLayout />} /> {/* p.ej. /sales/orders */}
          <Route path="orders/new" element={<SalesModuleLayout />} /> {/* p.ej. /sales/orders/new */}
          <Route path="orders/:orderId" element={<SalesModuleLayout />} /> {/* p.ej. /sales/orders/123 */}
          {/* Más rutas específicas del módulo de ventas */}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default SalesModuleRouter;
// src/app/layouts/AppLayout.jsx
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// ...otros imports

const AppLayout = () => {
  // Lógica para obtener datos del usuario, permisos, etc.
  // const { user } = useAuth();

  return (
    <div className="app-layout">
      <div>Header</div>
      <div className="app-layout-body">
        <div> Sidebar </div>{/* El sidebar podría ser dinámico según el módulo/permisos */}
        <main className="app-content">
          <Suspense fallback={<div>Cargando contenido del módulo...</div>}>
             {/* Aquí es donde se renderizarán las rutas anidadas definidas en router.js */}
             {/* y posteriormente los ModuleRouter */}
            <Outlet />
          </Suspense>
        </main>
      </div>
      {/* GlobalFooter, etc. */}
    </div>
  );
};

export default AppLayout;
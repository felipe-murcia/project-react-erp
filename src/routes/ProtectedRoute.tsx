import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../core/auth/useAuth'; // Hook de autenticación tipado
import type { UserRole, UserPermission } from '../types/auth';

interface ProtectedRouteProps {
  children?: React.ReactNode; // Para envolver un componente específico
  rolesRequired?: UserRole[];
  permissionsRequired?: UserPermission[];
  // Si es una ruta de layout que solo usa Outlet, no se necesitan children explícitos.
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  rolesRequired,
  permissionsRequired,
}) => {
  const { isAuthenticated, user, hasRole, hasPermission, isLoading } = useAuth();
  const location = useLocation();
  
  console.log("isAuthenticated:", isAuthenticated);
  if (isLoading) {
    // Muestra un spinner o similar mientras se verifica la autenticación
    return <div>Verificando autenticación...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // Verificación de Roles
  if (rolesRequired && rolesRequired.length > 0) {
    if (!hasRole(rolesRequired)) {
      return <Navigate to="/unauthorized" state={{ from: location, required: rolesRequired }} replace />;
    }
  }

  // Verificación de Permisos Específicos
  if (permissionsRequired && permissionsRequired.length > 0) {
    if (!hasPermission(permissionsRequired)) {
      return <Navigate to="/unauthorized" state={{ from: location, required: permissionsRequired }} replace />;
    }
  }

  // Si se pasan `children`, se renderizan.
  // Si no, se renderiza <Outlet /> para rutas de layout anidadas.
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
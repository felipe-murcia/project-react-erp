// src/core/auth/AuthProvider.tsx
import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import type { UserProfile, UserRole, UserPermission } from '../../types/auth';
import { getCurrentUser, apiLogin, apiLogout } from './authService'; // Funciones de API simuladas

export const useAuth = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Para manejar la carga inicial del usuario

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    try {
      const currentUser = await getCurrentUser(); // Llama a tu API para obtener el usuario
      setUser(currentUser);
    } catch (error) {
      console.error("No hay sesión activa o error al obtener usuario:", error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const login = async (credentials: Record<string, unknown>): Promise<void> => {
    setIsLoading(true);
    try {
      const loggedInUser = await apiLogin("admin", "admin"); // Simula el login, reemplaza con credentials
      setUser(loggedInUser);
    } catch (error) {
      setUser(null);
      throw error; // Re-lanza el error para que el componente de login lo maneje
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await apiLogout(); // Llama a tu API para invalidar la sesión
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      // Aún así, limpia el usuario del frontend
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const hasRole = useCallback((rolesToCheck: UserRole[]): boolean => {
    if (!user || !user.roles) return false;
    return rolesToCheck.some(role => user.roles.includes(role));
  }, [user]);

  const hasPermission = useCallback((permissionsToCheck: UserPermission[]): boolean => {
    if (!user || !user.permissions) return false;
    return permissionsToCheck.some(permission => user.permissions.includes(permission));
  }, [user]);


  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    hasRole,
    hasPermission,
  };
};

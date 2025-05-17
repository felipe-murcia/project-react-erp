// Servicio falso para autenticación
// src/core/auth/authService.tsx

import { UserProfile } from "@/src/types/auth";

let fakeUser: UserProfile | null = null;

export async function getCurrentUser(): Promise<UserProfile | null> {
  // Simula una llamada a una API para obtener el usuario actual
  return null;
  // Si deseas simular un usuario autenticado, descomenta la siguiente línea:
  return {
      id: "1",
      username: "admin",
      email: "admin@example.com",
      roles: "admin",
      permissions: ["view_dashboard", "manage_users"],
  }
}

export const apiLogin = (username: string, password: string): Promise<UserProfile> => {
  // Simula una llamada a una API de login
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        fakeUser = { id: "1", username: "admin", email: "admin@example.com", roles: "admin", permissions: ["view_dashboard", "manage_users"] };
        resolve(fakeUser);
      } else {
        reject(new Error("Credenciales inválidas"));
      }
    }, 500);
  });
}

export const apiLogout = async (): Promise<void> => {
  // Simula una llamada a una API de logout
  return new Promise((resolve) => {
    setTimeout(() => {
      fakeUser = null;
      resolve();
    }, 200);
  });
}
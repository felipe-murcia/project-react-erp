// src/types/auth.ts
export type UserRole = 'admin' | 'sales_manager' | 'inventory_clerk' | 'viewer' | 'user'; // Ejemplo de roles
export type UserPermission =
  | 'view_dashboard'
  | 'view_sales_module'
  | 'manage_users'
  | 'create_order'
  | 'approve_order'
  | 'view_inventory'
  | 'edit_product'; // Ejemplo de permisos

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  roles: UserRole;
  permissions: UserPermission[]; // Los permisos podrían derivarse de los roles en el backend
}

export interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: Record<string, unknown>) => Promise<void>;
  logout: () => Promise<void>;
  hasRole: (roles: UserRole[]) => boolean;
  hasPermission: (permissions: UserPermission[]) => boolean;
}
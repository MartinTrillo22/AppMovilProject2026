import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Usuario, LoginData, RegistroData } from '../../domain/Auth';
import { login, registro, updateUsuario } from '../../infrastructure/service/AuthApi';

interface AuthContextType {
  user: Usuario | null;
  loginUser: (data: LoginData) => Promise<Usuario>;
  registroUser: (data: RegistroData) => Promise<Usuario>;
  updateUser: (data: any) => Promise<Usuario>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Usuario | null>({
    id: 2,
    fullName: "Pedro Trillo",
    email: "pedro@gmail.com",
    role: "User",
    phone: "987654320",
    isActive: true
  });

  const loginUser = async (data: LoginData): Promise<Usuario> => {
    const loggedUser = await login(data);
    setUser(loggedUser);
    return loggedUser;
  };

  const registroUser = async (data: RegistroData): Promise<Usuario> => {
    const registeredUser = await registro(data);
    setUser(registeredUser);
    return registeredUser;
  };

  const updateUser = async (data: any): Promise<Usuario> => {
    const updatedUser = await updateUsuario(user?.id || data.id, data);
    setUser(updatedUser);
    return updatedUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, registroUser, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;

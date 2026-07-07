import { create, isAxiosError } from 'axios';
import { Platform } from 'react-native';
import { LoginData, RegistroData, Usuario } from '../../domain/Auth';

export { LoginData, RegistroData, Usuario };

const API_URL_FROM_ENV = process.env.EXPO_PUBLIC_API_URL;

const FALLBACK_BASE_URL =
  Platform.OS === 'android' ? 'http://192.168.18.16:5168' : 'http://localhost:5168';

export const BASE_URL = API_URL_FROM_ENV || FALLBACK_BASE_URL;

export const barberiaApi = create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getApiErrorMessage = (error: unknown): string => {
  if (!isAxiosError(error)) {
    return 'Ocurrio un error inesperado. Intenta nuevamente.';
  }

  if (error.code === 'ECONNABORTED') {
    return 'La conexion tardo demasiado. Verifica que la API este activa y accesible.';
  }

  if (!error.response) {
    return 'No se pudo conectar con el servidor. Revisa tu IP, el puerto y tu red WiFi.';
  }

  if (error.response.status === 401) {
    return 'El correo o la contrasena son incorrectos.';
  }

  if (error.response.status >= 500) {
    return 'El servidor respondio con error. Intenta nuevamente en unos minutos.';
  }

  return 'No fue posible iniciar sesion con los datos proporcionados.';
};

export const login = async (data: LoginData): Promise<Usuario> => {
  const response = await barberiaApi.post<Usuario>('/login', data);
  return response.data;
};

export const registro = async (data: RegistroData): Promise<Usuario> => {
  const response = await barberiaApi.post<Usuario>('/registro', data);
  return response.data;
};

export const updateUsuario = async (id: number, data: any): Promise<Usuario> => {
  const response = await barberiaApi.put<Usuario>(`/usuarios/${id}`, data);
  return response.data;
};


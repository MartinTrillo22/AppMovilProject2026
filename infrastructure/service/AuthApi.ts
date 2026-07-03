import axios from 'axios';
import { Platform } from 'react-native';
import { LoginData, RegistroData, Usuario } from '../../domain/Auth';

export { LoginData, RegistroData, Usuario };

const BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:5168' : 'http://localhost:5168';

export const barberiaApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (data: LoginData): Promise<Usuario> => {
  const response = await barberiaApi.post<Usuario>('/login', data);
  return response.data;
};

export const registro = async (data: RegistroData): Promise<Usuario> => {
  const response = await barberiaApi.post<Usuario>('/registro', data);
  return response.data;
};

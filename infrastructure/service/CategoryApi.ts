import { barberiaApi } from './AuthApi';
import { CategoriaServicio } from '../../domain/Category';

export const getCategorias = async (): Promise<CategoriaServicio[]> => {
  const response = await barberiaApi.get<CategoriaServicio[]>('/categorias');
  return response.data;
};

export const getCategoriaById = async (id: number): Promise<CategoriaServicio> => {
  const response = await barberiaApi.get<CategoriaServicio>(`/categorias/${id}`);
  return response.data;
};

export const createCategoria = async (categoria: CategoriaServicio): Promise<CategoriaServicio> => {
  const response = await barberiaApi.post<CategoriaServicio>('/categorias', categoria);
  return response.data;
};

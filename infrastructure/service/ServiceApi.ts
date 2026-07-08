import { Servicio } from '../../domain/Service';
import { barberiaApi } from './AuthApi';

export const getServicios = async (categoryId?: number): Promise<Servicio[]> => {
  const response = await barberiaApi.get<Servicio[]>('/servicios', {
    params: categoryId ? { categoryId } : undefined,
  });
  return response.data;
};

export const getServicioById = async (id: number): Promise<Servicio> => {
  const response = await barberiaApi.get<Servicio>(`/servicios/${id}`);
  return response.data;
};

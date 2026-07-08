export interface Servicio {
  id: number;
  name?: string;
  nombre?: string;
  description?: string;
  descripcion?: string;
  price?: number;
  precio?: number;
  durationMinutes?: number;
  duracionMinutos?: number;
  imageUrl?: string;
  categoryId: number;
}

export const getServiceName = (service: Servicio) =>
  service.name || service.nombre || `Servicio ${service.id}`;

export const getServiceDescription = (service: Servicio) =>
  service.description || service.descripcion || 'Servicio de barberia';

export const getServicePrice = (service: Servicio) =>
  service.price ?? service.precio;

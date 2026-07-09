export interface Servicio {
  id: number;
  name?: string;
  description?: string;
  price?: number;
  durationMinutes?: number;
  imageUrl?: string;
  categoryId: number;
}

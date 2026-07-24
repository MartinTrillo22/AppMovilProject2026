export interface Servicio {
  id: number;
  name: string;
  description?: string;
  price: number;
  duration: number;
  imageUrl?: string;
  categoryId: number;
  isActive: boolean;
}

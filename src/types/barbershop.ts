export type UserRole = 'customer' | 'barber' | 'admin';

export type ServiceCategory = 'cut' | 'beard' | 'eyebrows';

export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export type PaymentStatus = 'pending' | 'paid' | 'refunded';

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: UserRole;
  avatarUrl?: string;
  password?: string;
  active?: boolean;
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  price: number;
  durationMinutes: number;
  imageUrl?: string;
  featured?: boolean;
  active?: boolean;
}

export interface Appointment {
  id: string;
  userId: string;
  serviceId: string;
  barberId?: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  paymentStatus: PaymentStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BarberShopCategory {
  id: ServiceCategory;
  label: string;
  description: string;
}
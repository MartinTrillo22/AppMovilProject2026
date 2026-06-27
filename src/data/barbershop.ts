import type { Appointment, BarberShopCategory, Service, User } from '../types/barbershop';

export const mockUsers: User[] = [
  {
    id: 'user-001',
    fullName: 'Administrador Barber Shop',
    email: 'admin@gmail.com',
    phone: '+51 999 000 111',
    role: 'admin',
    password: '123456',
    active: true,
  },
  {
    id: 'user-002',
    fullName: 'Miguel Torres',
    email: 'miguel@example.com',
    phone: '+51 999 000 222',
    role: 'customer',
    password: '123456',
    active: true,
  },
  {
    id: 'user-003',
    fullName: 'Carlos Rojas',
    email: 'carlos@example.com',
    phone: '+51 999 000 333',
    role: 'barber',
    active: true,
  },
];

export const mockCategories: BarberShopCategory[] = [
  {
    id: 'cut',
    label: 'Cortes',
    description: 'Servicios de corte y estilizado del cabello.',
  },
  {
    id: 'beard',
    label: 'Barba',
    description: 'Perfilado, diseño y mantenimiento de barba.',
  },
  {
    id: 'eyebrows',
    label: 'Cejas',
    description: 'Diseño y limpieza de cejas.',
  },
];

export const mockServices: Service[] = [
  {
    id: 'service-cut-001',
    name: 'Moicano',
    category: 'cut',
    description: 'Corte moderno con laterales rebajados y volumen superior.',
    price: 25,
    durationMinutes: 40,
    featured: true,
    active: true,
  },
  {
    id: 'service-cut-002',
    name: 'Corte Social',
    category: 'cut',
    description: 'Estilo clásico y prolijo para uso diario o eventos.',
    price: 20,
    durationMinutes: 30,
    active: true,
  },
  {
    id: 'service-cut-003',
    name: 'Corte Brasileño',
    category: 'cut',
    description: 'Desvanecido suave con terminaciones limpias.',
    price: 28,
    durationMinutes: 45,
    active: true,
  },
  {
    id: 'service-cut-004',
    name: 'Degradado',
    category: 'cut',
    description: 'Fade limpio y preciso, con acabado profesional.',
    price: 30,
    durationMinutes: 45,
    featured: true,
    active: true,
  },
  {
    id: 'service-beard-001',
    name: 'Barba de Chivo',
    category: 'beard',
    description: 'Perfilado y forma para barba tipo chivo.',
    price: 18,
    durationMinutes: 20,
    active: true,
  },
  {
    id: 'service-beard-002',
    name: 'Bigote',
    category: 'beard',
    description: 'Recorte y definición del bigote.',
    price: 12,
    durationMinutes: 15,
    active: true,
  },
  {
    id: 'service-beard-003',
    name: 'Barba Diseñada',
    category: 'beard',
    description: 'Diseño personalizado según rostro y estilo.',
    price: 22,
    durationMinutes: 30,
    featured: true,
    active: true,
  },
  {
    id: 'service-beard-004',
    name: 'Barba Completa',
    category: 'beard',
    description: 'Mantenimiento completo y perfilado general.',
    price: 25,
    durationMinutes: 35,
    active: true,
  },
  {
    id: 'service-eyebrows-001',
    name: 'Diseño C/Pinza',
    category: 'eyebrows',
    description: 'Diseño limpio de cejas con pinza.',
    price: 10,
    durationMinutes: 15,
    active: true,
  },
  {
    id: 'service-eyebrows-002',
    name: 'Diseño C/Gillette',
    category: 'eyebrows',
    description: 'Perfilado de cejas con acabado más definido.',
    price: 12,
    durationMinutes: 15,
    active: true,
  },
  {
    id: 'service-eyebrows-003',
    name: 'Diseño de Henna',
    category: 'eyebrows',
    description: 'Técnica estética para resaltar la forma de la ceja.',
    price: 20,
    durationMinutes: 25,
    featured: true,
    active: true,
  },
  {
    id: 'service-eyebrows-004',
    name: 'Diseño con Línea',
    category: 'eyebrows',
    description: 'Definición de cejas con línea marcada.',
    price: 15,
    durationMinutes: 20,
    active: true,
  },
];

export const mockAppointments: Appointment[] = [
  {
    id: 'appt-001',
    userId: 'user-002',
    serviceId: 'service-cut-004',
    barberId: 'user-003',
    date: '2026-06-27',
    time: '09:00',
    status: 'confirmed',
    paymentStatus: 'paid',
    notes: 'Cliente prefiere fade bajo.',
    createdAt: '2026-06-25T10:00:00Z',
    updatedAt: '2026-06-25T10:10:00Z',
  },
  {
    id: 'appt-002',
    userId: 'user-002',
    serviceId: 'service-beard-003',
    barberId: 'user-003',
    date: '2026-06-28',
    time: '11:30',
    status: 'pending',
    paymentStatus: 'pending',
    createdAt: '2026-06-25T11:00:00Z',
    updatedAt: '2026-06-25T11:00:00Z',
  },
];

export const mockCredentials = {
  admin: {
    email: 'admin@gmail.com',
    password: '123456',
  },
  customer: {
    email: 'miguel@example.com',
    password: '123456',
  },
};

export const getMockServicesByCategory = (category: Service['category']) =>
  mockServices.filter((service) => service.category === category);

export const getMockUserByEmail = (email: string) =>
  mockUsers.find((user) => user.email.toLowerCase() === email.toLowerCase());

export const getMockAppointmentById = (appointmentId: string) =>
  mockAppointments.find((appointment) => appointment.id === appointmentId);
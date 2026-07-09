export interface LoginData {
  email: string;
  password: string;
}

export interface RegistroData {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface Usuario {
  id: number;
  fullName: string;
  email: string;
  role: string;
  phone: string;
  isActive: boolean;
}

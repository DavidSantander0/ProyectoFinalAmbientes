export interface Cliente {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  direccion?: string; // opcional
}
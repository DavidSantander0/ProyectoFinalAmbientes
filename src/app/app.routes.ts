import { Routes } from '@angular/router';
import { Listado } from './clientes/listado';
import { FormularioComponent } from './clientes/formulario';
import { Detalle } from './clientes/detalle';

export const routes: Routes = [
  { path: 'clientes', component: Listado },
  { path: 'clientes/nuevo', component: FormularioComponent },
  { path: 'clientes/editar/:id', component: FormularioComponent },
  { path: 'clientes/:id', component: Detalle },
  { path: '**', redirectTo: 'clientes' }
];
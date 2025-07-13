import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './cliente.service';
import { Cliente } from './cliente.model';
import { RouterModule, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-listado',
  standalone: true,
  templateUrl: './listado.html',
  styleUrls: ['./listado.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class Listado {
  servicio = inject(ClientesService);
  router = inject(Router);
  displayedColumns = ['id', 'nombre', 'correo', 'acciones'];
  clientes: Cliente[] = [];
  ngOnInit() {
    this.servicio.listar().subscribe(data => {
      this.clientes = data;
    });
  }

  eliminar(id: number) {
    this.servicio.eliminar(id).subscribe(() => {
      this.clientes = this.clientes.filter(c => c.id !== id);
    });
  }

  navegarA(id: number, tipo: 'ver' | 'editar') {
    const ruta = tipo === 'ver' ? ['/clientes', id] : ['/clientes/editar', id];
    this.router.navigate(ruta);
  }

  nuevo() {
    this.router.navigate(['/clientes/nuevo']);
  }
}
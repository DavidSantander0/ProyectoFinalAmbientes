import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ClientesService } from './cliente.service';
import { Cliente } from './cliente.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class FormularioComponent {
  fb = inject(FormBuilder);
  servicio = inject(ClientesService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  form = this.fb.group({
    id: [0],
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', Validators.required],
    direccion: ['']
  });

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = parseInt(idParam, 10);
      this.servicio.obtener(id).subscribe((data: Cliente) => {
        this.form.patchValue(data);
      });
    }
  }

  guardar() {
    if (this.form.valid) {
      const cliente: Cliente = {
        id: this.form.value.id ?? 0,
        nombre: this.form.value.nombre!,
        correo: this.form.value.correo!,
        telefono: this.form.value.telefono!,
        direccion: this.form.value.direccion ?? ''
      };

      const op = cliente.id && cliente.id > 0
        ? this.servicio.actualizar(cliente)
        : this.servicio.crear(cliente);

      op.subscribe(() => this.router.navigate(['/clientes']));
    }
  }
}
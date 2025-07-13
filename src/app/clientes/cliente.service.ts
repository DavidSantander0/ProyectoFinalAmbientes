import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientesService {
  private url = 'http://localhost:3000/clientes'; // puedes cambiar la URL según el backend

  constructor(private http: HttpClient) {}

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  obtener(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  crear(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }

  actualizar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`, cliente);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
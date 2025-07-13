# Módulo de Clientes - Angular Standalone

Este repositorio contiene el módulo **Clientes** desarrollado con Angular 20 usando componentes Standalone y Angular Material. 
Se integra con un backend simulado usando `json-server`, y está listo para correr dentro de un contenedor Docker junto a otros módulos.

##  Características

- Listado de clientes en tabla responsive
- CRUD completo (crear, editar, ver, eliminar)
- Rutas limpias: `/clientes`, `/clientes/nuevo`, `/clientes/editar/:id`, `/clientes/:id`
- Interfaz visual con Angular Material

## Cómo levantar el proyecto

### 1. Clona el repositorio

git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
### 2. Instala dependencias
npm install
### 3. Levanta el servidor simulado
json-server --watch db.json --port 3000
### 4. 4. Levanta el frontend
ng serve
### 5. Accede a la app
Angular: [Localhost](http://localhost:4200/clientes)
BackendSimulado: http://localhost:3000/clientes
### Importante: Este repositorio solo incluye el módulo clientes. Para levantar toda la infraestructura, el equipo debe configurar el Dockerfile y docker-compose.yml de forma global.

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // 👈 importa tu componente

export const routes: Routes = [
  { path: '', component: LoginComponent } // 👈 esta es la ruta principal
];

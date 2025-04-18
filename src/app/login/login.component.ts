import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule] 
})
export class LoginComponent {
  // Variables para los formularios
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';
  correoLogin: string = '';
  contrasenaLogin: string = '';

  // Referencias al DOM
  @ViewChild('container') container!: ElementRef;
  @ViewChild('overlayBtn') overlayBtn!: ElementRef;

  constructor(private renderer: Renderer2) {}

  // Función para alternar entre login y registro
  togglePanels(): void {
    const containerEl = this.container.nativeElement;
    const overlayBtnEl = this.overlayBtn.nativeElement;

    // Alternar la clase 'right-panel-active'
    this.renderer.addClass(containerEl, 'right-panel-active');
    if (containerEl.classList.contains('right-panel-active')) {
      this.renderer.removeClass(containerEl, 'right-panel-active');
    } else {
      this.renderer.addClass(containerEl, 'right-panel-active');
    }

    // Animación del botón
    this.renderer.removeClass(overlayBtnEl, 'btnScaled');
    window.requestAnimationFrame(() => {
      this.renderer.addClass(overlayBtnEl, 'btnScaled');
    });
  }

  // Funciones para manejar el registro e inicio de sesión
  onRegister(): void {
    console.log('Registro:', this.nombre, this.correo, this.contrasena);
    alert('Registro exitoso!');
  }

  onLogin(): void {
    console.log('Inicio de sesión:', this.correoLogin, this.contrasenaLogin);
    if (this.correoLogin === 'usuario' && this.contrasenaLogin === 'contraseña') {
      alert('Inicio de sesión exitoso!');
    } else {
      alert('Credenciales incorrectas.');
    }
  }
}
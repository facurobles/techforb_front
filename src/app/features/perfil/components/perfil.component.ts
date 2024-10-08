import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioActualizar } from '../models/usuario-actualizar';
import { UsuarioService } from '../services/actualizar-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  ngOnInit(): void {
    this.formulario = this.iniciarFormulario();

    this.nombre = this.cookieService.get('nombre') + ' ';
    this.apellido = this.cookieService.get('apellido');
    this.email = this.cookieService.get('email');

    const nac = this.cookieService.get('nacimiento');
    this.nacimiento = this.formateadorFecha(nac);
    console.log(nac)
    console.log(this.nacimiento)
    console.log(new Date(this.cookieService.get('nacimiento')))
  }

  formulario!: FormGroup;

  mensajesErrorBackend: String[] = [];

  banderaMensaje!: boolean;


  constructor(private cookieService: CookieService, private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  nombre!: string;
  apellido!: string;
  email!: string;
  nacimiento!: string;

  iniciarFormulario(): FormGroup {
    return this.formBuilder.group({
      email: [this.cookieService.get('email'), [Validators.required, Validators.email]],
      nacimiento: [new Date(this.cookieService.get('nacimiento')), [Validators.required]],
      nombre: [this.cookieService.get('nombre'), [Validators.required]],
      apellido: [this.cookieService.get('apellido'), [Validators.required]]
    })
  }

  formateadorFecha(fecha: string): string {
    const date = new Date(fecha);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');  // getMonth() devuelve el mes (0-11), por eso sumamos 1
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}/${month}/${year}`
  }

  borrarUsuario() {
    this.usuarioService.borrarUsuario(this.cookieService.get('email')).subscribe(data => {
      this.mensajesErrorBackend = Object.values(data);
      this.banderaMensaje = false;
      this.cookieService.delete('token', '/')

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    }, error => {
      this.banderaMensaje = false
      //implementacion provisoria, manejar el mensaje desde el backend en caso de token vencido
      if (this.mensajesErrorBackend.length > 0) {
        this.mensajesErrorBackend = Object.values(error.error);
      } else {
        this.mensajesErrorBackend = ["error: Se vencio tu sesion"];
        this.cookieService.delete('token', '/')
      }


      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);
    })
  }


  actualizar() {
    const usuario: UsuarioActualizar = new UsuarioActualizar(
      this.formulario.get('email')?.value,
      this.formulario.get('nombre')?.value,
      this.formulario.get('apellido')?.value,
      this.formulario.get('nacimiento')?.value)

    this.usuarioService.actualizarUsuario(usuario, this.cookieService.get('email')).subscribe(data => {
      this.mensajesErrorBackend = Object.values(data);
      this.banderaMensaje = true;

      console.log("se actualizo con éxito el usuario")

      this.cookieService.set('nombre', this.formulario.get('nombre')?.value)
      this.cookieService.set('apellido', this.formulario.get('apellido')?.value)

      const date = new Date(this.formulario.get('nacimiento')?.value);
      this.cookieService.set('nacimiento', date.toString())

      //si se actualizo el email lo mando a loguearse de nuevo
      if (this.cookieService.get('email') != this.formulario.get('email')?.value) {
        this.cookieService.delete('token', '/');
        this.mensajesErrorBackend = ["Email actualizado con éxito.", "Redirigiendo al login..."];
      } else {
        this.cookieService.set('email', this.formulario.get('email')?.value)
      }

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    }, error => {
      this.banderaMensaje = false
      //implementacion provisoria, manejar el mensaje desde el backend en caso de token vencido
      if (this.mensajesErrorBackend.length > 0) {
        this.mensajesErrorBackend = Object.values(error.error);
      } else {
        this.mensajesErrorBackend = ["error: Se vencio tu sesion"];
        this.cookieService.delete('token', '/')
      }


      setTimeout(() => {
        window.location.reload();
      }, 2000);

    })

  }

}

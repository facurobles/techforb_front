import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioActualizar } from '../models/usuario-actualizar';
import { ActualizarUsuarioService } from '../services/actualizar-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  ngOnInit(): void {
    this.formulario = this.iniciarFormulario();

    this.nombre = this.cookieService.get('nombre') + ' ';
    this.apellido = this.cookieService.get('apellido');
    const nac = this.cookieService.get('nacimiento');
    const date = new Date(parseInt(nac));
    const dateFormateada = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    this.nacimiento = dateFormateada;
    // console.log(new Date(parseInt(nac)))
    this.email = this.cookieService.get('email');
  }

  formulario!: FormGroup;

  mensajesErrorBackend: String[] = [];


  constructor(private cookieService:CookieService, private formBuilder: FormBuilder, private actualizarUsuarioService:ActualizarUsuarioService, private router : Router){}

  nombre! : string;
  apellido! : string;
  email! : string;
  nacimiento! : string;

  iniciarFormulario(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nacimiento: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]]
    })
  }

  enviar(){
    const usuario: UsuarioActualizar = new UsuarioActualizar(
      this.formulario.get('email')?.value,
      this.formulario.get('nombre')?.value,
      this.formulario.get('apellido')?.value,
      this.formulario.get('nacimiento')?.value)

    this.actualizarUsuarioService.actualizarUsuario(usuario, this.formulario.get('email')?.value).subscribe(data=>{
      this.mensajesErrorBackend = Object.values(data);
      
      console.log("se actualizo con éxito el usuario")

      const arrayToken = data.jwt.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      // console.log(arrayToken)
      // console.log(tokenPayload)

      //despues de decifrar los datos del token los guardo en las cookies usando el servicio externo ngxcookies
      this.cookieService.set('token', data.jwt, 1, '/')
      this.cookieService.set('nombre', tokenPayload.nombre)
      this.cookieService.set('apellido', tokenPayload.apellido)
      this.cookieService.set('nacimiento', tokenPayload.nacimiento)
      this.cookieService.set('email', tokenPayload.email)

      setTimeout(() => {
        this.router.navigate(['/perfil']);
      }, 2000);

    }, error => {
      this.mensajesErrorBackend = Object.values(error.error);
    })

  }

}

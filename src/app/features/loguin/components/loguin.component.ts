import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioLogin } from '../models/usuarioLogin';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent implements OnInit {

  formulario!: FormGroup;

  urlIconoOjo = '../../../../assets/logoVisible.png';

  tipo = 'password';

  mensajesErrorBackend: String[] = [];

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router, private cookieService: CookieService) { 
  }

  ngOnInit(): void {
    this.formulario = this.iniciarFormulario();
    this.cookieService.delete('token', '/')

  }

  iniciarFormulario(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }


  mostrarContrasenia() {
    this.tipo == 'text' ? this.tipo = 'password' : this.tipo = 'text';
    console.log(this.tipo)

    this.tipo == 'text' ? this.urlIconoOjo = '../../../../assets/logoOculto.png' : this.urlIconoOjo = '../../../../assets/logoVisible.png';
  }


  enviar() {
    const usuario: UsuarioLogin = new UsuarioLogin(this.formulario.get('email')?.value, this.formulario.get('password')?.value)

    this.loginService.loginUsuario(usuario).subscribe(data => {
      console.log('Esta es la respuesta cuando el logueo es exitoso ' + data.jwt)
      
      const arrayToken = data.jwt.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      // console.log(arrayToken)
      // console.log(tokenPayload)

      //despues de decifrar los datos del token los guardo en las cookies usando el servicio externo ngxcookies
      this.cookieService.set('token', data.jwt, 1, '/')
      this.cookieService.set('nombre', tokenPayload.nombre)
      this.cookieService.set('apellido', tokenPayload.apellido)
      this.cookieService.set('email', tokenPayload.email)
      const date = new Date(tokenPayload.nacimiento)
      this.cookieService.set('nacimiento', date.toString())

      
      this.router.navigate(['/main'])

    }, error => {
      this.mensajesErrorBackend = Object.values(error.error);
    })

  }
}

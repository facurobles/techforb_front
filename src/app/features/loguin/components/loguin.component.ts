import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioLogin } from '../models/usuarioLogin';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent implements OnInit{
  
  formulario!: FormGroup;

  urlIconoOjo = '../../../../assets/logoVisible.png';

  tipo = 'password';

  mensajeErrorBackend : String ="";
  
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router : Router){}
  
  ngOnInit(): void {
    this.formulario = this.iniciarFormulario();
  }

  iniciarFormulario(): FormGroup{
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  
  mostrarContrasenia(){
    this.tipo == 'text'? this.tipo = 'password' : this.tipo = 'text';
    console.log(this.tipo)
    
    this.tipo == 'text'? this.urlIconoOjo = '../../../../assets/logoOculto.png' : this.urlIconoOjo = '../../../../assets/logoVisible.png';
  }
  
  
  enviar(){
    const usuario : UsuarioLogin = new UsuarioLogin(this.formulario.get('email')?.value, this.formulario.get('password')?.value)
  
      this.loginService.loginUsuario(usuario).subscribe(data => {
        console.log('Esta es la respuesta cuando me logueo' + data)
        this.router.navigate(['/dashboard'])

      }, error => {
        this.mensajeErrorBackend = error.error +', Intente de nuevo.';
        console.log('Esta es la respuesta del backend cuando falla el logueo' + error.error)
      })
   
  }
}

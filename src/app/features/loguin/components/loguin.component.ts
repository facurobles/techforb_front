import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent implements OnInit{
  
  formulario!: FormGroup;

  urlIconoOjo = '../../../../assets/logoVisible.png';

  tipo = 'password';
  
  constructor(private formBuilder: FormBuilder, private loginService: LoginService){}
  
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
    const usuario : Usuario = new Usuario(this.formulario.get('email')?.value, this.formulario.get('password')?.value)
  
    try {
      this.loginService.loginUsuario(usuario).subscribe(data => {
        console.log('Esta es la respuesta cuando me logueo' + data)
      })
    } catch (error) {
      console.log('Esta es la respuesta cuando falla el logueo' + error)
    }
  }
}

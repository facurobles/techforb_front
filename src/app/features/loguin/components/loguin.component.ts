import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent implements OnInit{
  
  formulario!: FormGroup;

  urlIconoOjo = '../../../../assets/logoVisible.png';

  tipo = 'password';
  
  constructor(private formBuilder: FormBuilder){}
  
  ngOnInit(): void {
    this.formulario = this.iniciarFormulario();
  }

  iniciarFormulario(): FormGroup{
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required]]
    })
  }

  enviar(){

  }

  mostrarContrasenia(){
    this.tipo == 'text'? this.tipo = 'password' : this.tipo = 'text';
    console.log(this.tipo)

    this.tipo == 'text'? this.urlIconoOjo = '../../../../assets/logoOculto.png' : this.urlIconoOjo = '../../../../assets/logoVisible.png';
  }

}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioRegistrar } from '../models/usuario-registrar';
import { RegistrarUsuarioService } from '../services/registrar-usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {


  formulario!: FormGroup;

  urlIconoOjo = '../../../../assets/logoVisible.png';
  urlIconoOjo2 = '../../../../assets/logoVisible.png';

  tipo = 'password';
  tipo2 = 'password';

  mensajesErrorBackend: String[] = [];

  constructor(private formBuilder : FormBuilder, private registrarUsuarioService: RegistrarUsuarioService, private router: Router) { }

  
  ngOnInit(): void {
    this.formulario = this.iniciarFormulario();
  }

  iniciarFormulario(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repetirPassword: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      nacimiento: ['', [Validators.required]],
    }, { validators: this.validarContraseña }
    )
  }


  //  validador para campo repetirContraseña
  public validarContraseña(control: AbstractControl): ValidationErrors | null {

    const password = control.get('password')?.value
    const repetirPassword = control.get('repetirPassword')?.value

    if (repetirPassword != '') {
      if (password == repetirPassword) {
        return null;
      } else {
        return { validarContraseña: true };
      }
    }
    return null;

  }


  mostrarContrasenia() {
    this.tipo == 'text' ? this.tipo = 'password' : this.tipo = 'text';
    console.log(this.tipo)

    this.tipo == 'text' ? this.urlIconoOjo = '../../../../assets/logoOculto.png' : this.urlIconoOjo = '../../../../assets/logoVisible.png';
  }
  mostrarContrasenia2() {
    this.tipo2 == 'text' ? this.tipo2 = 'password' : this.tipo2 = 'text';
    console.log(this.tipo2)

    this.tipo2 == 'text' ? this.urlIconoOjo2 = '../../../../assets/logoOculto.png' : this.urlIconoOjo2 = '../../../../assets/logoVisible.png';
  }


  enviar() {
    const usuario: UsuarioRegistrar = new UsuarioRegistrar(
      this.formulario.get('email')?.value,
      this.formulario.get('password')?.value,
      this.formulario.get('nombre')?.value,
      this.formulario.get('apellido')?.value,
      this.formulario.get('nacimiento')?.value)

    this.registrarUsuarioService.registrarUsuario(usuario).subscribe(data => {
      this.mensajesErrorBackend = Object.values(data);

      console.log("se registrro con éxito el usuario")

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);

    }, error => {
      this.mensajesErrorBackend = Object.values(error.error);
    })

  }
}

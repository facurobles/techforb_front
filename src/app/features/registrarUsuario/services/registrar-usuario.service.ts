import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendUrlService } from 'src/app/core/services/backend-url.service';
import { UsuarioRegistrar } from '../models/usuario-registrar';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {

  constructor(private http : HttpClient, private backendUrlService : BackendUrlService) { }

  public registrarUsuario(usuario : UsuarioRegistrar) : Observable<string>{  
    const url = this.backendUrlService.getRegistrarUrl();   
    return this.http.post<string>(url,usuario);
  }

}

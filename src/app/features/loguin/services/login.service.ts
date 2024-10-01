import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendUrlService } from 'src/app/core/services/backend-url.service';
import { UsuarioLogin } from '../models/usuarioLogin';
import { Observable } from 'rxjs';
import { UsuarioRegistrar } from '../../registrarUsuario/models/usuario-registrar';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient, private backendUrlService : BackendUrlService) { }

  public loginUsuario(usuario : UsuarioLogin) : Observable<string>{  
    const url = this.backendUrlService.getLoginUrl();   
    return this.http.post<string>(url,usuario);
  }
  
  public registrarUsuario(usuario : UsuarioRegistrar) : Observable<string>{  
    const url = this.backendUrlService.getRegistrarUrl();   
    return this.http.post<string>(url,usuario);
  }
}

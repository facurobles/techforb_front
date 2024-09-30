import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendUrlService } from 'src/app/core/services/backend-url.service';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient, private backendUrlService : BackendUrlService) { }

  public loginUsuario(usuario : Usuario) : Observable<string>{  
    const url = this.backendUrlService.getLoginUrl();   
    return this.http.post<string>(url,usuario);
  }
  
  public registrarUsuario(usuario : Usuario) : Observable<string>{  
    const url = this.backendUrlService.getRegistrarUrl();   
    return this.http.post<string>(url,usuario);
  }
}

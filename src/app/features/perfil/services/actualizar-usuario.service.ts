import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendUrlService } from 'src/app/core/services/backend-url.service';
import { UsuarioActualizar } from '../models/usuario-actualizar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient, private backendUrlService : BackendUrlService) { }

  public actualizarUsuario(usuario : UsuarioActualizar, email : string) : Observable<any>{  
    const url = this.backendUrlService.getActualizarUsuarioUrl(email);   
    return this.http.put<any>(url,usuario);
  }
  
  public borrarUsuario(email : string) : Observable<any>{  
    const url = this.backendUrlService.getBorrarUsuarioUrl(email);   
    return this.http.delete<any>(url);
  }

}

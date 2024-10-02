import { Injectable } from '@angular/core';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class BackendUrlService {

  private url : string = environment.apiUrlDevelop
  //private url : string = environment.apiUrlProd

  constructor() { }

  public getLoginUrl():string{
    return this.url + 'autenticacion/login'
  }
  
  public getRegistrarUrl():string{
    return this.url + 'autenticacion/register'
  }
  
  public getActualizarUsuarioUrl(email : string):string{
    return `${this.url}usuario/actualizar/${email}`;
  }

}

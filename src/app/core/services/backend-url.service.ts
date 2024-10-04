import { Injectable } from '@angular/core';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class BackendUrlService {

  //private url : string = environment.apiUrlDevelop
  private url : string = environment.apiUrlProd

  constructor() { }

  /**ENDPOINTS USUARIO*/
  public getLoginUrl():string{
    return this.url + 'autenticacion/login'
  }
  
  public getRegistrarUrl():string{
    return this.url + 'autenticacion/register'
  }
  
  public getActualizarUsuarioUrl(email : string):string{
    return `${this.url}usuario/actualizar/${email}`;
  }
  
  public getBorrarUsuarioUrl(email : string):string{
    return `${this.url}usuario/borrar/${email}`;
  }


  /**ENDPOINTS PLANTA*/
  public getCrearPlantaUrl():string{
    return `${this.url}planta/crear`;
  }

  public getEliminarPlantaUrl(id: Number):string{
    return `${this.url}planta/eliminar/${id}`;
  }
    
  public getActualizarPlantaUrl(id: Number):string{
    return `${this.url}planta/actualizar/${id}`;
  }
  
  public getMetricasPlantasUrl():string{
    return `${this.url}planta/obtenerMetricas`;
  }
  
  public getTodasPlantasUrl():string{
    return `${this.url}planta/todas`;
  }

  /*ENDPOINTS TOKEN*/

  public getValidarTokenUrl():string{
    return `${this.url}autenticacion/validarToken`;
  }

}

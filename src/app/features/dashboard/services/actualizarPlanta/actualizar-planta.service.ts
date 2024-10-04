import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendUrlService } from 'src/app/core/services/backend-url.service';
import { PlantaDtoModel } from '../../models/planta-dto-model';

@Injectable({
  providedIn: 'root'
})
export class ActualizarPlantaService {

  constructor(private http : HttpClient, private backendUrlService : BackendUrlService) { }

  public actualizarPlanta(id: number, planta : PlantaDtoModel) : Observable<any>{  
    const url = this.backendUrlService.getActualizarPlantaUrl(id);   
    return this.http.put<any>(url,planta);
  }
}

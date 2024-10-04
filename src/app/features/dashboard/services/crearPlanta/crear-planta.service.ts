import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendUrlService } from 'src/app/core/services/backend-url.service';
import { PlantaDtoModel } from '../../models/planta-dto-model';

@Injectable({
  providedIn: 'root'
})
export class CrearPlantaService {
  
  constructor(private http : HttpClient, private backendUrlService : BackendUrlService) { }

  public crearPlanta(planta : PlantaDtoModel) : Observable<any>{  
    const url = this.backendUrlService.getCrearPlantaUrl();   
    return this.http.post<any>(url,planta);
  }
}

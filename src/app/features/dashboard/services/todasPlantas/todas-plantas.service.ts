import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendUrlService } from 'src/app/core/services/backend-url.service';
import { PlantaModel } from '../../models/planta-model';

@Injectable({
  providedIn: 'root'
})
export class TodasPlantasService {

  constructor(private http : HttpClient, private backendUrlService : BackendUrlService) { }

  public todasPlantas() : Observable<PlantaModel[]>{  
    const url = this.backendUrlService.getTodasPlantasUrl();   
    return this.http.get<PlantaModel[]>(url);
  }
}

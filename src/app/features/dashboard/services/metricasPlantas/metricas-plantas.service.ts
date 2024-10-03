import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendUrlService } from 'src/app/core/services/backend-url.service';
import { PlantaModel } from '../../models/planta-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetricasPlantasService {

  constructor(private http : HttpClient, private backendUrlService : BackendUrlService) { }

  public obtenerMetricasPlantas() : Observable<any>{  
    const url = this.backendUrlService.getMetricasPlantasUrl();   
    return this.http.get<any>(url);
  }

}

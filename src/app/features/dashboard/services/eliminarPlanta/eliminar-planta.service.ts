import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendUrlService } from 'src/app/core/services/backend-url.service';

@Injectable({
  providedIn: 'root'
})
export class EliminarPlantaService {

  constructor(private http : HttpClient, private backendUrlService : BackendUrlService) { }

  public eliminarPlanta(id : Number) : Observable<any>{  
    const url = this.backendUrlService.getEliminarPlantaUrl(id);   
    return this.http.delete<any>(url);
  }
}

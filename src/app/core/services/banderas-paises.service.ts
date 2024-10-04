import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanderasPaisesService {

  constructor(private httpClient:HttpClient) { }

  public obtenerBaderasPaises():Observable<any>{
    return this.httpClient.get<any>("https://flagcdn.com/es/codes.json")
  }

}

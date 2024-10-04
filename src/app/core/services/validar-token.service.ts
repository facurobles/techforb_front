import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenDto } from '../models/token-dto';
import { BackendUrlService } from './backend-url.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenService {

  constructor(private httpClient : HttpClient, private backendUrlService: BackendUrlService) { }

  public validarToken(tokenDto: TokenDto):Observable<any>{
    const url = this.backendUrlService.getValidarTokenUrl();
    return this.httpClient.post<any>(url, tokenDto);
  }

}

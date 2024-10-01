import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { BackendUrlService } from '../services/backend-url.service';

@Injectable()
export class AutenticacionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService, private backendUrlService: BackendUrlService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.cookieService.get('token');

    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned);
    }

    console.log("se dejo pasar la peticion al endpoint: " + request.url)
    return next.handle(request);
  }
}


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ValidarTokenService } from '../services/validar-token.service';
import { TokenDto } from '../models/token-dto';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router, private validarTokenService: ValidarTokenService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = this.cookieService.get('token');


/**verifico si existe token en las cookies, si no existe redirige al login
 * si existe, verifico que sea valido al endpoint que hice en el back para validar token
 * si es valido retorno true y dejo pasar, si no false y redirige a login y elimina el token invalido de las cookies 
 */

    if (token) {
      const tokenDto: TokenDto = new TokenDto(token);

      return new Promise((resolve) => {
        this.validarTokenService.validarToken(tokenDto).subscribe(data => {
          console.log('el guard me dejo pasar a la ruta ' + this.router.url);
          console.log(Object.values(data));
          resolve(true);
        }, error => {
          console.log("El token no es valido, se redirige al login.")
          console.log(Object.values(error.error));
          this.cookieService.delete('token', '/');
          this.router.navigate(['login']);
          resolve(false);
        });
      });

    } else {
      console.log('se redirigió al logueo por falta de token');
      this.router.navigate(['login']);
      return false;
    }

  }

}

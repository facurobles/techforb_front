import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  constructor(private router : Router, private cookieService: CookieService){
    console.log(this.router.url)
    console.log(this.cookieService.get('token'))

  }

  estaActivo(ruta : string):boolean{
    return this.router.url === ruta;
  }

  nombre:string =  this.cookieService.get('nombre')
  apellido:string =  this.cookieService.get('apellido')
  nacimiento:string =  this.cookieService.get('nacimiento')

  cerrarSesion(){
    this.cookieService.delete('token', '/')
    window.location.reload()
  }

}

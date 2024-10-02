import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private cookieService: CookieService){}

  nombre:string =  this.cookieService.get('nombre')
  apellido:string =  this.cookieService.get('apellido')
  nacimiento:string =  this.cookieService.get('nacimiento')

}

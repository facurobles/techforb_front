import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  constructor(private cookieService:CookieService){}

  nombre! : string;
  apellido! : string;

  ngOnInit(): void {
    this.nombre = this.cookieService.get('nombre') + ' ';
    this.apellido = this.cookieService.get('apellido');
  }



}

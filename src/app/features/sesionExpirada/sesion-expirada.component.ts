import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion-expirada',
  templateUrl: './sesion-expirada.component.html',
  styleUrls: ['./sesion-expirada.component.css']
})
export class SesionExpiradaComponent implements OnInit{
  

  constructor(private router: Router){}

  contador : number = 5;
  
  ngOnInit(): void {

    setTimeout(() => {
      setInterval(() => {
        this.contador -= 1;
        if(this.contador === 0){
          this.router.navigate(['login']) //VER SI VA CON BARRA O SIN PROBAR
        }
      }, 1000);
    }, 2000);
  
  }

}

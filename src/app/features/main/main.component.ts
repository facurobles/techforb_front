import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


  banderaMenu :boolean = false;

  cambiarBanderaMenu(estado:boolean){
    this.banderaMenu = estado;
  }

}

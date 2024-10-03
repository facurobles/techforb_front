import { Component, OnInit } from '@angular/core';
import { CrearPlantaService } from '../services/crearPlanta/crear-planta.service';
import { MetricasPlantasService } from '../services/metricasPlantas/metricas-plantas.service';
import { TodasPlantasService } from '../services/todasPlantas/todas-plantas.service';
import { PlantaModel } from '../models/planta-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  ngOnInit(): void {
    this.obtenerMetricasPlantas();
    this.traerTodasPlantas();
  }

  constructor(private todasPlantasService: TodasPlantasService, private metricasPlantasService:MetricasPlantasService, private crearPlantaService: CrearPlantaService){}
  
  lecturas!: Number;
  alertasMedias!: Number;
  alertasRojas!: Number;
  sensoresDeshabilitados!: Number;
  plantas! : PlantaModel[];

  obtenerMetricasPlantas(){
    try {
      this.metricasPlantasService.obtenerMetricasPlantas().subscribe(data=>{
        this.lecturas = data.lecturas;
        this.alertasMedias = data.alertasMedias;
        this.alertasRojas = data.alertasRojas;
        this.sensoresDeshabilitados = data.sensoresDeshabilitados;
      })
    } catch (error) {
      
    }
  }

  traerTodasPlantas(){
    this.todasPlantasService.todasPlantas().subscribe(data=>{
      this.plantas = data;
      console.log(this.plantas)
    })
  }

  crearNuevaPlanta(){
    // this.crearPlantaService.crearPlanta(planta)
  }

  bandera : boolean = false;
  indice!: Number;
  banderaOpciones(value: boolean, indice? : Number, event?: MouseEvent) {
    if (event){
      event.stopPropagation();
    }
    
    if(indice){
      this.indice = indice;
      console.log(indice)
    }

    this.bandera = value;
    
  }

}

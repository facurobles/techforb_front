import { Component, OnInit } from '@angular/core';
import { CrearPlantaService } from '../services/crearPlanta/crear-planta.service';
import { MetricasPlantasService } from '../services/metricasPlantas/metricas-plantas.service';
import { TodasPlantasService } from '../services/todasPlantas/todas-plantas.service';
import { PlantaModel } from '../models/planta-model';
import { EliminarPlantaService } from '../services/eliminarPlanta/eliminar-planta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlantaDtoModel } from '../models/planta-dto-model';
import * as items from '../models/items.json'; 
import * as indicadores from '../models/indicadores.json'; 
import * as paises from '../../../core/paises/paises.json'; 
import { BanderasPaisesService } from 'src/app/core/services/banderas-paises.service';
import { CookieService } from 'ngx-cookie-service';
import { ActualizarPlantaService } from '../services/actualizarPlanta/actualizar-planta.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  ngOnInit(): void {
    this.obtenerMetricasPlantas();
    this.traerTodasPlantas();
    this.formularioCrear = this.iniciarFormularioCrear();
  }

  constructor(private banderasPaisesService:BanderasPaisesService, private actualizarPlantaService: ActualizarPlantaService, private formBuilder: FormBuilder, private eliminarPlantaService: EliminarPlantaService, private todasPlantasService: TodasPlantasService, private metricasPlantasService:MetricasPlantasService, private crearPlantaService: CrearPlantaService){}
  
  lecturas!: Number;
  alertasMedias!: Number;
  alertasRojas!: Number;
  sensoresDeshabilitados!: Number;
  plantas! : PlantaModel[];
  respuestaBackend!: String[] | undefined;
  formularioCrear!: FormGroup;
  formularioEditar!: FormGroup;
  banderaModalCrear: boolean = false;
  banderaModalEditar: boolean = false;
  idPlantaEditar!: number;

  items = (items as any).default;
  indicadores = (indicadores as any).default;

  paisesFormateados: { codigo: string, nombre: string | unknown }[] = [];

  

  iniciarFormularioCrear(): FormGroup {
    return this.formBuilder.group({
      nombrePlanta: ['', [Validators.required]],
      pais: ['', [Validators.required]]
    })
  }
  
  iniciarFormularioEditar(nombre:string, pais: string, lecturas: number, sensores: number, alertasMedias: number, alertasRojas: number): FormGroup {
    return this.formBuilder.group({
      nombrePlantaEditar: [nombre, [Validators.required]],
      paisEditar: [pais, [Validators.required]],
      lecturasEditar: [lecturas, [Validators.required, Validators.min(0)]],
      sensoresDeshablitadosEditar: [sensores, [Validators.required, Validators.min(0)]],
      alertasMediasEditar: [alertasMedias, [Validators.required, Validators.min(0)]],
      alertasRojasEditar: [alertasRojas, [Validators.required, Validators.min(0)]],
    })
  }


  obtenerMetricasPlantas(){
      this.metricasPlantasService.obtenerMetricasPlantas().subscribe(data=>{
        this.lecturas = data.lecturas;
        this.alertasMedias = data.alertasMedias;
        this.alertasRojas = data.alertasRojas;
        this.sensoresDeshabilitados = data.sensoresDeshabilitados;
      }, error =>{
        console.log(error.error)
        this.respuestaBackend = ["No se pudo obtener los datos. Recargue la página."]
      })
  }

  traerTodasPlantas(){
      this.todasPlantasService.todasPlantas().subscribe(data=>{
        this.plantas = data;
        console.log(this.plantas)
        this.cargarPaises()
      }, error =>{
        console.log(error.error)
      })
      
  }

  crearNuevaPlanta(){
    const planta = new PlantaDtoModel(this.formularioCrear.get('pais')?.value, this.formularioCrear.get('nombrePlanta')?.value, 0, 0, 0, 0)

    this.crearPlantaService.crearPlanta(planta).subscribe(data=>{
      this.respuestaBackend = Object.values(data)
    }, error =>{
      this.respuestaBackend = Object.values(error.error)
    })

    setTimeout(() => {
      this.respuestaBackend = undefined;
      window.location.reload()
    }, 3000);
  }

  guardarPlantaSeleccionada(planta : PlantaModel){
    this.formularioEditar = this.iniciarFormularioEditar(planta.nombre, planta.pais, planta.lecturas, planta.sensoresDeshabilitados, planta.alertasMedias, planta.alertasRojas);
    this.idPlantaEditar = planta.id;
  }

  editarPlanta(){
    const planta = new PlantaDtoModel(
      this.formularioEditar.get('paisEditar')?.value,
      this.formularioEditar.get('nombrePlantaEditar')?.value,
      this.formularioEditar.get('alertasMediasEditar')?.value,
      this.formularioEditar.get('lecturasEditar')?.value,
      this.formularioEditar.get('alertasRojasEditar')?.value,
      this.formularioEditar.get('sensoresDeshablitadosEditar')?.value)

      console.log(planta)
    this.actualizarPlantaService.actualizarPlanta(this.idPlantaEditar, planta).subscribe(data=>{
      this.respuestaBackend = Object.values(data)
    }, error =>{
      this.respuestaBackend = Object.values(error.error)
    })

    setTimeout(() => {
      this.respuestaBackend = undefined;
      window.location.reload()
    }, 3000);
  }


  eliminarPlanta(id:Number){
      this.eliminarPlantaService.eliminarPlanta(id).subscribe(data=>{
        this.respuestaBackend = Object.values(data)
      }, error => {
        this.respuestaBackend = Object.values(error.error)
      })
      setTimeout(() => {
        this.respuestaBackend = undefined;
        window.location.reload()
      }, 3000);
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
    /*la logica que se me ocurrio para mostrar u ocultar los iconos de editar y elminar segun donde se haga click
    funciona unsando una bandera, un indice y un evento para detener la propagacion y  que no se ejecute el metodo
    dos veces cuando se haga click afuera de la tabla y se oculten todos los iconos.
    De esta forma se van a mostrar los iconos solo de la fila en la que se esta haciendo click y se van a ocultar los 3 puntos.*/
  }


  cambiarBanderaModalCrear(estado:boolean){
    this.banderaModalCrear = estado;
  }
  cambiarBanderaModalEditar(estado:boolean){
    this.banderaModalEditar = estado;
  }

  cargarPaises() {
    this.paisesFormateados = Object.entries(paises).map(([codigo, nombre]) => ({
      codigo: codigo,
      nombre: nombre
    }));
    console.log(this.paisesFormateados)
    this.cargarCodigoPaises()
  }


  codigoPaises: string[] = [];
  
  cargarCodigoPaises(){
    console.log('plantas' + this.plantas)
    for (let pais of this.paisesFormateados){
      for(let planta of this.plantas){
        if(pais.nombre === planta.pais){
          planta.codigo = pais.codigo
        }
      }
    }
    console.log(this.codigoPaises)
  }



}

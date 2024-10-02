import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoguinComponent } from './features/loguin/components/loguin.component';
import { DashboardComponent } from './features/dashboard/components/dashboard.component';
import { RegistrarUsuarioComponent } from './features/registrarUsuario/components/registrar-usuario.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';
import { MainComponent } from './features/main/main.component';
import { MonitoreoComponent } from './features/monitoreo/monitoreo.component';
import { SensoresComponent } from './features/sensores/sensores.component';
import { PlantaComponent } from './features/planta/planta.component';
import { PerfilComponent } from './features/perfil/components/perfil.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoguinComponent},
  {path: 'registrarUsuario', component: RegistrarUsuarioComponent},
  {path: 'main', component: MainComponent, canActivate: [AutenticacionGuard], children : [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AutenticacionGuard]},
    {path: 'monitoreo', component: MonitoreoComponent, canActivate: [AutenticacionGuard]},
    {path: 'sensores', component: SensoresComponent, canActivate: [AutenticacionGuard]},
    {path: 'planta', component: PlantaComponent, canActivate: [AutenticacionGuard]},
    {path: 'perfil', component: PerfilComponent, canActivate: [AutenticacionGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

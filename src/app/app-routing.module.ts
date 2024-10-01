import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoguinComponent } from './features/loguin/components/loguin.component';
import { DashboardComponent } from './features/dashboard/components/dashboard.component';
import { RegistrarUsuarioComponent } from './features/registrarUsuario/components/registrar-usuario.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoguinComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AutenticacionGuard]},
  {path: 'registrarUsuario', component: RegistrarUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

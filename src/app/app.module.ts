import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoguinModule } from './features/loguin/loguin.module';
import { DashboardComponent } from './features/dashboard/components/dashboard.component';
import { RegistrarUsuarioModule } from './features/registrarUsuario/registrar-usuario.module';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacionInterceptor } from './core/interceptors/autenticacion.interceptor';
import { SideNavComponent } from './features/sideNav/side-nav.component';
import { NavBarComponent } from './features/navBar/nav-bar.component';
import { MainComponent } from './features/main/main.component';
import { MonitoreoComponent } from './features/monitoreo/monitoreo.component';
import { SensoresComponent } from './features/sensores/sensores.component';
import { PlantaComponent } from './features/planta/planta.component';
import { PerfilComponent } from './features/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideNavComponent,
    NavBarComponent,
    MainComponent,
    MonitoreoComponent,
    SensoresComponent,
    PlantaComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoguinModule,
    BrowserAnimationsModule,
    RegistrarUsuarioModule,
  ],
  providers: [CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: AutenticacionInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { PerfilModule } from './features/perfil/perfil.module';
import { DashboardModule } from './features/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavBarComponent,
    MainComponent,
    MonitoreoComponent,
    SensoresComponent,
    PlantaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoguinModule,
    BrowserAnimationsModule,
    RegistrarUsuarioModule,
    PerfilModule,
    DashboardModule
  ],
  providers: [CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: AutenticacionInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

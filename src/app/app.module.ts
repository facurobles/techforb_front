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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
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

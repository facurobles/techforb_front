import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoguinModule } from './features/loguin/loguin.module';
import { DashboardComponent } from './features/dashboard/components/dashboard.component';
import { RegistrarUsuarioModule } from './features/registrarUsuario/registrar-usuario.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

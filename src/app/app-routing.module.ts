import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoguinComponent } from './features/loguin/components/loguin.component';

const routes: Routes = [
  {path: '', redirectTo: 'loguin', pathMatch: 'full'},
  {path: 'loguin', component: LoguinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoguinComponent } from './components/loguin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoguinComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ]
})
export class LoguinModule { }

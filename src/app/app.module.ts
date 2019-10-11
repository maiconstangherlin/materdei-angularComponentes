import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MzInputModule, 
         MzDatepickerModule,
         MzRadioButtonModule } from 'ngx-materialize'
import { MaterialDesignComponent } from './material-design/material-design.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,    
    MzInputModule, MzDatepickerModule, MzRadioButtonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

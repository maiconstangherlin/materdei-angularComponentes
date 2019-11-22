import { FormularioComponent } from './original/formulario.component';
import { ListaComponent } from './original/lista.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MzInputModule, 
         MzDatepickerModule,
         MzRadioButtonModule,
         MzButtonModule,
         MzSelectModule,
         MzCollapsibleModule,
         MzTextareaModule,
         MzCollectionModule  } from 'ngx-materialize';

@NgModule({
  declarations: [
    AppComponent,
    
    ListaComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,    
    MzInputModule, 
    MzDatepickerModule, 
    MzRadioButtonModule, 
    MzButtonModule, 
    MzSelectModule,
    MzCollapsibleModule,
    MzTextareaModule,
    MzCollectionModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

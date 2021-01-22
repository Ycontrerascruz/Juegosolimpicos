import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ HttpClientModule} from '@angular/common/http';
import{NgxPaginationModule} from 'ngx-pagination';
 
import { AdministradorComponent } from './administrador/administrador.component';
import { LoginComponent } from './login/login.component';
import { CoordinadorComponent } from './coordinador/coordinador.component';
import { AdministradordosComponent } from './administradordos/administradordos.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    LoginComponent,
    CoordinadorComponent,
    AdministradordosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

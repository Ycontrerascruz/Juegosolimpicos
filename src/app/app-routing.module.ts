import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordinadorComponent } from './coordinador/coordinador.component';
import { LoginComponent } from './login/login.component';
import {AdministradorComponent} from './administrador/administrador.component';
import {AdministradordosComponent} from './administradordos/administradordos.component'


const routes: Routes = [
  {
    path:'coordinador',
    component:CoordinadorComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'administrador',
    component:AdministradorComponent,
  },
  {
    path:'administradordos',
    component:AdministradordosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

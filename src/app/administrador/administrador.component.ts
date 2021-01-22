import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  public page:number;
  conversion:any;
   rta:[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json').subscribe(data=>{
     this.conversion=data;
     this.rta=this.conversion;
     console.log('prueba',this.rta);
   });    
  }

  paginador=1;

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-administradordos',
  templateUrl: './administradordos.component.html',
  styleUrls: ['./administradordos.component.css']
})
export class AdministradordosComponent implements OnInit {
  
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



}

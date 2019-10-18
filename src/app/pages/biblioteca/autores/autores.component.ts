import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  public titulo = "formulario de autores";
  public nombre : string;
  public apellido : string;
  public fecha: string;
  public nacionalidad : string;
  constructor() { }

  ngOnInit() {
  }
  saveform (){
  alert (this.nombre)
  }

}

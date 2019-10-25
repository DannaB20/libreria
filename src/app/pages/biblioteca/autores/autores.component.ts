import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

public autoForm:FormGroup;
  
  constructor( protected fb:FormBuilder) { }

  ngOnInit() {
  }

  createForm(){

this.autoForm=this.fb.group({

  codigo:'',
  nombre:'',
  fechaNac:''
});

}
  saveform (){
  
  }

}

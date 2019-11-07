import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

public autoresForm:FormGroup;
public titulo="formulario de Autores";

  constructor( protected fb:FormBuilder) { }

  ngOnInit() {

  }
  createForm(){
    this.autoresForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      bd_year: ['', Validators.required],
      death_year: ['', Validators.required],
      bd_place: ['', Validators.required]

      }) 
    }

 



 

}

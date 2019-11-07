import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

public areasForm:FormGroup;
public titulo="formulario de Areas";

  constructor( protected fb:FormBuilder) { }

  ngOnInit() {

  }
  createForm(){
    this.areasForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required]

      }) 
    }

 



 

}

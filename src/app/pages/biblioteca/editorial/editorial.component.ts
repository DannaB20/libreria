import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {

public editorialForm:FormGroup;
public titulo="formulario de Editorial";

  constructor( protected fb:FormBuilder) { }

  ngOnInit() {

  }
  createForm(){
    this.editorialForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      country: ['', Validators.required]

      }) 
    }

 



 

}


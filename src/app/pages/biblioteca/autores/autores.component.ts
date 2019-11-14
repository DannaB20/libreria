import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutoresService } from 'src/app/service/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

autor:any;
public autoresForm:FormGroup;
public titulo="formulario de Autores";

  constructor( protected fb:FormBuilder , protected service:AutoresService) {
    this.createForm()
   }

  ngOnInit() {
    this.service.getAutores().subscribe( data => {
      this.autor=data
    });
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

 

    Saveform(){
      this.service.postAutores(this.autoresForm.value).subscribe(data=>alert('listo'))
    }

 

}

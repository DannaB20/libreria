import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AreasService } from 'src/app/service/areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {


areas:any;
public areasForm:FormGroup;
public titulo="formulario de Areas";

  constructor( protected fb:FormBuilder, protected service:AreasService) { 
    this.createForm()
  }
  

  ngOnInit() {
    this.service.getAreas().subscribe( data => {
      this.areas=data
    });
  }

  createForm(){
    this.areasForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required]

      }) 
    }

 


    Saveform(){
      this.service.postAreas(this.areasForm.value).subscribe(data=>alert('listo'))
    }
 

}

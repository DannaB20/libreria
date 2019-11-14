import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditorialService } from 'src/app/service/editorial.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {
  editoriales:any;

public editorialForm:FormGroup;
public titulo="formulario de Editorial";

constructor( protected fb:FormBuilder , protected service:EditorialService) {
  this.createForm()
 }

ngOnInit() {
  this.service.getEditorial().subscribe( data => {
    this.editoriales=data
  });
}
  createForm(){
    this.editorialForm = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      country: ['', Validators.required]

      }) 
    }

 


    Saveform(){
      this.service.postEditorial(this.editorialForm.value).subscribe(data=>alert('listo'))
    }

 

 

}


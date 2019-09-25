import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudentFormComponent } from './estudent-form/estudent-form.component';
import { EstudentTableComponent } from './estudent-table/estudent-table.component';
import { EstudiantesComponent } from './estudiantes.component';


@NgModule({
  declarations: [EstudentFormComponent, EstudentTableComponent, EstudiantesComponent],
  imports: [
    CommonModule,
    EstudiantesRoutingModule
  ]
})
export class EstudiantesModule { }

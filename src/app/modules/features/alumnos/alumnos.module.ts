import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';
import { AlumnosComponent } from 'src/app/components/alumnos/alumnos.component';
import { AddAlumnoModalComponent } from 'src/app/components/modals/add-alumno-modal/add-alumno-modal.component';
import { EditAlumnoModalComponent } from 'src/app/components/modals/edit-alumno-modal/edit-alumno-modal.component';
import { DeleteAlumnoModalComponent } from 'src/app/components/modals/delete-alumno-modal/delete-alumno-modal.component';
import { ToolbarsModule } from 'src/app/shared/toolbars/toolbars.module';
import { NameOutputPipe } from 'src/app/pipes/name-output.pipe';



@NgModule({
  declarations: [
    NameOutputPipe,
    AlumnosComponent,
    AddAlumnoModalComponent,
    EditAlumnoModalComponent,
    DeleteAlumnoModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ToolbarsModule
  ],
  exports: [
    AlumnosComponent,
    AddAlumnoModalComponent,
    EditAlumnoModalComponent,
    DeleteAlumnoModalComponent
  ]
})
export class AlumnosModule { }
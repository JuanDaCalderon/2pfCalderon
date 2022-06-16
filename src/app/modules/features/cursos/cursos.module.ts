import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCursoModalComponent } from 'src/app/components/modals/add-curso-modal/add-curso-modal.component';
import { CursosComponent } from 'src/app/components/cursos/cursos.component';
import { DeleteCursoModalComponent } from 'src/app/components/modals/delete-curso-modal/delete-curso-modal.component';
import { EditCursoModalComponent } from 'src/app/components/modals/edit-curso-modal/edit-curso-modal.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarsModule } from 'src/app/shared/toolbars/toolbars.module';



@NgModule({
  declarations: [
    CursosComponent,
    AddCursoModalComponent,
    DeleteCursoModalComponent,
    EditCursoModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ToolbarsModule
  ],
  exports: [
    CursosComponent,
    AddCursoModalComponent,
    DeleteCursoModalComponent,
    EditCursoModalComponent
  ]
})
export class CursosModule { }
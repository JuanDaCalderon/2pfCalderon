import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClaseModalComponent } from 'src/app/components/modals/add-clase-modal/add-clase-modal.component';
import { ClasesComponent } from 'src/app/components/clases/clases.component';
import { DeleteClaseModalComponent } from 'src/app/components/modals/delete-clase-modal/delete-clase-modal.component';
import { EditClaseModalComponent } from 'src/app/components/modals/edit-clase-modal/edit-clase-modal.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarsModule } from 'src/app/shared/toolbars/toolbars.module';



@NgModule({
  declarations: [
    ClasesComponent,
    EditClaseModalComponent,
    DeleteClaseModalComponent,
    AddClaseModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ToolbarsModule
  ],
  exports: [
    ClasesComponent,
    EditClaseModalComponent,
    DeleteClaseModalComponent,
    AddClaseModalComponent
  ]
})
export class ClasesModule { }

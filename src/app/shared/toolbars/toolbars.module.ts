import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderToolbarComponent } from 'src/app/components/header-toolbar/header-toolbar.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    HeaderToolbarComponent,
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderToolbarComponent,
    MenuComponent
  ]
})
export class ToolbarsModule { }

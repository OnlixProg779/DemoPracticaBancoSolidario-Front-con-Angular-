import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSchemaRoutingModule } from './client-schema-routing.module';
import { ClientCreateComponent } from './components/Client/client-create/client-create.component';
import { ClientListComponent } from './components/Client/client-list/client-list.component';
import { ClientFormComponent } from './components/Client/client-form/client-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersClientFormComponent } from './components/Client/filters-client-form/filters-client-form.component';



@NgModule({
  declarations: [
    ClientCreateComponent,
    ClientListComponent,
    ClientFormComponent,
    FiltersClientFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientSchemaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientSchemaModule { }

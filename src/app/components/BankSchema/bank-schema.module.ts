import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankSchemaRoutingModule } from './bank-schema-routing.module';

import { BillFormComponent } from './components/Bill/bill-form/bill-form.component';
import { TypeBillFormComponent } from './components/TypeBill/type-bill-form/type-bill-form.component';
import { BillCreateComponent } from './components/Bill/bill-create/bill-create.component';
import { TypeBillCreateComponent } from './components/TypeBill/type-bill-create/type-bill-create.component';
import { BillListComponent } from './components/Bill/bill-list/bill-list.component';
import { TypeBillListComponent } from './components/TypeBill/type-bill-list/type-bill-list.component';
import { BillPatchComponent } from './components/Bill/bill-patch/bill-patch.component';
import { TypeBillPatchComponent } from './components/TypeBill/type-bill-patch/type-bill-patch.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BillFormComponent,
    TypeBillFormComponent,
    BillCreateComponent,
    TypeBillCreateComponent,
    BillListComponent,
    TypeBillListComponent,
    BillPatchComponent,
    TypeBillPatchComponent,
  ],
  imports: [
    CommonModule,
    BankSchemaRoutingModule,
    SharedModule
  ]
})
export class BankSchemaModule { }

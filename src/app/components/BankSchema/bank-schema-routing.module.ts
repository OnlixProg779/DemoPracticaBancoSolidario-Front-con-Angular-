import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillCreateComponent } from './components/Bill/bill-create/bill-create.component';
import { BillListComponent } from './components/Bill/bill-list/bill-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create-account/:id',
        component: BillCreateComponent,
        data: {
          title: "Crear De Ahorro",
          breadcrumb: "Cuenta Ahorro - Interes Nominal"
        }
      },
      {
        path: 'list-bills',
        component: BillListComponent,
        data: {
          title: "Lista de Cuentas",
          breadcrumb: "Cuenta Ahorros - Listado"
        }
      },

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BankSchemaRoutingModule { }

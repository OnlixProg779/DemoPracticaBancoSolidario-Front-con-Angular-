import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCreateComponent } from './components/Client/client-create/client-create.component';
import { ClientListComponent } from './components/Client/client-list/client-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-client',
        component: ClientListComponent,
        data: {
          title: "Client List",
          breadcrumb: "Client List"
        }
      },
      {
        path: 'create-client',
        component: ClientCreateComponent,
        data: {
          title: "Client List",
          breadcrumb: "Client List"
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
export class ClientSchemaRoutingModule { }

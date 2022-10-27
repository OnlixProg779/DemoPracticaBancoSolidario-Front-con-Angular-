import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'list-client',
      //   component: ListClientComponent,
      //   data: {
      //     title: "Client List",
      //     breadcrumb: "Client List"
      //   }
      // },

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

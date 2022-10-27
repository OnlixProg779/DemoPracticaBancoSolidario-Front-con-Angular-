import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'clients',
    loadChildren: () => import('../../components/ClientSchema/client-schema.module').then(m => m.ClientSchemaModule),
    data: {
      breadcrumb: "Client"
    }
  },
  {
    path: 'bank',
    loadChildren: () => import('../../components/BankSchema/bank-schema.module').then(m => m.BankSchemaModule),
    data: {
      breadcrumb: "Bank"
    }
  },

];
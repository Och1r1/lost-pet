import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    children: [
      {
        path: '',
        loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
      },
      {
        path: ':petId',
        loadChildren: () => import('./list/list-detail/list-detail.module').then( m => m.ListDetailPageModule)
      },
      {
        path: 'form',
        loadChildren: () => import('./list/form/form.module').then( m => m.FormPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
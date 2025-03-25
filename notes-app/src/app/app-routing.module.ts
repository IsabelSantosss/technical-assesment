import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [ 
  {
    path: 'notes',
    loadComponent: () => import('./my-notes-page/my-notes-page.component').then((c) => c.MyNotesPageComponent)
  },
  {
    path: '**',
    redirectTo: 'notes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

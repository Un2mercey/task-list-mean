import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './../pages/not-found/not-found.component';
import { ListsViewComponent } from './../pages/lists-view/lists-view.component';
import { NewListComponent } from './../pages/new-list/new-list.component';
import { NewTaskComponent } from './../pages/new-task/new-task.component';


const routes: Routes = [
  { path: '',   pathMatch: 'full',  redirectTo: 'lists-view' },
  { path: 'new-list', component: NewListComponent },
  { path: 'lists-view', component: ListsViewComponent },
  { path: 'lists-view/:listId', component: ListsViewComponent },
  { path: 'lists-view/:listId/new-task', component: NewTaskComponent },
  { path: '404',  component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

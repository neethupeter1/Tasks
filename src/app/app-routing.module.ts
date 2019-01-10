import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'task1', loadChildren: './task1/task1.module#Task1Module'},
  { path: 'task2', loadChildren: './task2/task2.module#Task2Module'},
  { path: 'task3', loadChildren: './task3/task3.module#Task3Module'},
  {path: 'observable', loadChildren: './observable/observable.module#ObservableModule'}
  // { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Task3Component } from './task3.component';

const task3Routes: Routes = [
    { path: '', component: Task3Component }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(task3Routes)
    ],
    exports: [RouterModule]
  })
  export class Task3RoutingModule { }
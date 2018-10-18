import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Task2Component } from './task2.component';


const task2Routes: Routes = [
    { path: '', component: Task2Component }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(task2Routes)
    ],
    exports: [RouterModule]
  })
  export class Task2RoutingModule { }
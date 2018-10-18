import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Task1Component } from './task1.component';


const task1Routes: Routes = [
    { path: '', component: Task1Component }
];

@NgModule({
    imports: [
        RouterModule.forChild(task1Routes)
    ],
    exports: [RouterModule]
})

export class Task1RoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1Component } from './task1.component';
import { Task1RoutingModule } from './task1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Task1RoutingModule
  ],
  declarations: [Task1Component]
})
export class Task1Module { }

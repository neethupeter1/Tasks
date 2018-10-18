import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task2Component } from './task2.component';
import { Task2RoutingModule } from './task2-routing.module';
import { LoadImagesService } from '../services/load-images.service';

@NgModule({
    imports: [
      CommonModule,
      Task2RoutingModule
    ],
    declarations: [Task2Component],
    providers: [LoadImagesService]
  })
  export class Task2Module { }
  
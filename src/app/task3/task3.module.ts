import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task3Component } from './task3.component';
import { Task3RoutingModule } from './task3-routing.module';
import { LoadImagesService } from '../services/load-images.service';
import { ImageControlComponent } from './image-control/image-control.component';



@NgModule({
    imports: [
      CommonModule,
      Task3RoutingModule
    ],
    declarations: [Task3Component, 
                    ImageControlComponent
                  ],
    providers: [LoadImagesService]
  })
  export class Task3Module { }
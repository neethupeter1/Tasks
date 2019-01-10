import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ObservableComponent} from './observable.component';



const observableRoutes: Routes = [
  { path: '', component: ObservableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(observableRoutes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }


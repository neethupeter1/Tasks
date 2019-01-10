import { Component, OnInit } from '@angular/core';
import { LoadImagesService } from '../services/load-images.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  public numbers: any = [];

  toggleLoop: Boolean = false;
  

  constructor( private _LoadImagesService: LoadImagesService) { }

  ngOnInit() {
    this.numbers = [];

  }


  disp1() {
    this.toggleLoop = !this.toggleLoop;
    for (let i = 0; i <101; i++ ) {
      if( i % 5 == 0 && i% 3 == 0) {
        this.numbers.push("Eagle Creek");
      }  else if(i % 3 == 0) {
        this.numbers.push("Eagle "); 
      } else if(i % 5 == 0) {
        this.numbers.push(" Creek"); 
      } else {
        this.numbers.push(i); 
      } 
    }
  }

  
  onActivate() {
    this._LoadImagesService.$authCheck.next(this.numbers);
    console.log(this.numbers);
  }
}

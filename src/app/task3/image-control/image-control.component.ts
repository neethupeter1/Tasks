import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-control',
  templateUrl: './image-control.component.html',
  styleUrls: ['./image-control.component.css']
})
export class ImageControlComponent implements OnInit {

  // @ViewChild('imageView') imageView;
  // @Input('imgSrc') imgSrc: string;
  // @Input()
  // set rotate(rotate: boolean) {

  // }
  // get rotate(): boolean {
  //   return false;
  // }

//   to communicate child -> parent
// voted is a variable and emit an event with type of string
  @Output () voted : EventEmitter <string> = new EventEmitter();

  @Input () consumeData : string;

  dataOne : string = "@Output => pass data from child to parent";
  consume : any = [];
  constructor() { }

  ngOnInit() {
      // console.log(this.consumeData);
      this.consume=this.consumeData;
  }

  sendData() {
    //   variable.emit(data that wants to push to parent);
      this.voted.emit(this.dataOne);
  }

  // consumeBtn() {
  //   this.consume = this.consumeData;
  // }
}

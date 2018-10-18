import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadImagesService } from '../services/load-images.service';
import { ImageControlComponent } from '../task3/image-control/image-control.component';


@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit, OnDestroy {

  @ViewChild('imageView') imageView: ElementRef;
  @ViewChild('canvasView') canvasView: ElementRef;



  public imageSrc: string;
  private subscriptions: Subscription;
  private content : any = [];
  
  parentChild : string = "@Input => date from parent to child";
  


  constructor(private loadImagesService: LoadImagesService) { }

  ngOnInit() {
  }

  onFileChange(event) {
    this.subscriptions = this.loadImagesService.loadImage(event.target.files).subscribe((res) => {
      this.imageSrc = res;
    });
  }
  
  onRotate() {
    const img: HTMLImageElement = this.imageView.nativeElement;
    const canvas: HTMLCanvasElement = this.canvasView.nativeElement;

    if(this.imageSrc) {
      const cContext: CanvasRenderingContext2D = canvas.getContext('2d');
      //rotate 90 degree
      const cw = img.height, ch = img.width, cx = 0, cy = img.height * (-1);

      // rotate image
      canvas.setAttribute('width', cw.toString());
      canvas.setAttribute('height', ch.toString());
      cContext.rotate(90 * Math.PI / 180);
      cContext.drawImage(img, cx, cy);
      this.imageSrc = canvas.toDataURL();
    }
  }

// define the function and pull the data from child inside the function
  data: string;
  onVoted(data) {
    console.log(data);
    this.content = data;
    console.log(this.content);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}

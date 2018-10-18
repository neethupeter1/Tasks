import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadImagesService } from '../services/load-images.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit, OnDestroy {

  public images: Array<string>;
  private subscriptions: Subscription;

  constructor(private loadImagesService: LoadImagesService) { }

  ngOnInit() {
    this.images = [];
  }

  onFileChange(event) {
    this.subscriptions = this.loadImagesService.loadImage(event.target.files).subscribe((res) => {
      this.images.push(res);
    });
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

}

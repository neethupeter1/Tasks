import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadImagesService } from '../services/load-images.service';
import { Subscription, Observable, Observer} from 'rxjs';



@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit, OnDestroy {

  public images: Array<string>;
  private subscriptions: Subscription;

  constructor(private loadImagesService: LoadImagesService) { }

  nextValue : string;
  ngOnInit() {
    this.images = [];
    
    

// create/define an observable
    const myNums = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First data');
      },3000);
      setTimeout(() => {
        observer.next('Second data');
      },5000);
      setTimeout(() => {
        observer.error('This does not work');
      },7000);
      setTimeout(() => {
        observer.complete();
      },9000);
    });

    // subscribing an observable 
    myNums.subscribe(
      (data:string) => {
        console.log(data);
        this.nextValue = data;
        console.log(this.nextValue); },
      (error:string) => {console.log(error);},
      () => {console.log('Completed');});

  }

  // Subjectbtn(numbers:any) {
  //   console.log("hi");
  //   this.loadImagesService.$authCheck.subscribe(
  //     (data:any) => {
  //       console.log(data);
  //       console.log("hi");
  //     }
  //   );
  // }

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


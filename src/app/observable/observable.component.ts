import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, observable, interval } from "rxjs";
import { map } from 'rxjs/operators';
// import { push } from 'rxjs';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  numberObsSubscription : Subscription;
  arr1: any = [];
  arrRes: any = [];
  constructor() { }

  ngOnInit() {

    const myNums = interval(1000)
      .pipe(map(
        (data:number) => {
      return data * 2;
        }
    ));
    this.numberObsSubscription = myNums.subscribe((number: number) => {
      console.log(number);
      this.arrRes = this.arr1.push(number);
      console.log(this.arrRes);
    }
    );
  }



// one way of creating observables
  mapDate = Observable.create((observer: any) => {
    observer.next('Hello')
}).pipe(map((val: any) => val.toUpperCase()))
  .subscribe((x: any) => this.addItem(x));


// second way of creating observable
mapDate1 = new Observable (function(observer) {
  observer.next('hello world')
}).pipe(map((val:any) => val.toUpperCase()))
  .subscribe((x:any) =>this.addItem(x));



  addItem(val: any):void {
    console.log(val);
};


ngOnDestroy() {
  this.numberObsSubscription.unsubscribe();
}

}


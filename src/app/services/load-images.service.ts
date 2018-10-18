import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadImagesService {

  constructor() { }

  loadImage(images: Array<File>): Observable<any> {
    let i = 0;
    const reader = new FileReader();
    return Observable.create((observer: Observer<any>) => {
      if(images) {
        reader.onload = () => {
          observer.next(reader.result);
        };
        reader.onloadend = () => {
          i++;
          if(images.length > i) {
            reader.readAsDataURL(images[i]);
          } else {
            observer.complete();
          }
        };
        reader.onerror = (err) => {
          observer.error(err);
        };
        reader.readAsDataURL(images[i]);
      }
    });
  }
}

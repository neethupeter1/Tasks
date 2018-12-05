import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : any = {};
  
  constructor(private _router : Router) { }

  ngOnInit() {
 
  }

  enter() {
    if(this.user) {
      this._router.navigate(['/task1']);
      console.log(this.user);
    }
   
  }
}

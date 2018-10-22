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
   console.log(this.user);
  }
}

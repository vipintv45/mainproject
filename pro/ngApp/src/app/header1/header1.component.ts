import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  constructor(public _auth:AuthService,private _router:Router) { }
title :String = "header"
  ngOnInit(): void {
  }
  logoutUser()
  {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

}

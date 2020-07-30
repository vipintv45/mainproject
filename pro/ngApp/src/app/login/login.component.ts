import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserDetails={ username:"",password:""};
  constructor(private _auth:AuthService,private router: Router) { }
  loginUser(){
    this._auth.login(this.loginUserDetails)
    .subscribe(
      res=>{  
              console.log(res["token"])
             localStorage.setItem('token',res["token"])
              console.log("the role is below displayed ")
              console.log(localStorage.getItem('token'))
              this.router.navigate(['/'])
              }, 
      err=>console.log(err)
    )
    console.log(this.loginUserDetails)
  }
  ngOnInit(): void {
  }

}

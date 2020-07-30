import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { } 


  login(data){
    
    return this.http.post("http://localhost:3000/login",{"login":data})
   
    
  }

  loggedIn() 
  {
    if(localStorage.getItem('token')=="user")
    {
      return true
    }
    else if(localStorage.getItem('token')=="admin")
    {
      return true
    }

    else {return false}
  }
  loggedinUser() 
  {
    if(localStorage.getItem('token')=="user")
    {
      return true
    }
    else {return false}
 }
 loggedinAdmin()
  {
    if(localStorage.getItem('token')=="admin")
    {
      return true
    }
    else {return false} 
 }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArealistService {

  constructor(private http:HttpClient) { }
  getArea(){
    
    return this.http.get("http://localhost:3000/arealist");
  }



}

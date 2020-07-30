import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { surveyModel } from './addsdata/suveydata';
@Injectable({
  providedIn: 'root'
})
export class SurveyService {
 private smodel:surveyModel;
  constructor(private http:HttpClient) { } 
 newsuvey(data){
  console.log("new survey");
  console.log(data.name);
  return this.http.post("http://localhost:3000/addsurvey",{"survey":data})
  .subscribe(dat=>{console.log(dat)})
   }

   getsurvey(){
    
    return this.http.get("http://localhost:3000/surveylist");
  }

  editsurvey(x){
    return this.http.post("http://localhost:3000/editsdata",{"survey":x})
    .subscribe(dat=>{console.log(dat)}) 
  } 
  deletesurvey(x){
    console.log("inside service")
    console.log(x)
    return this.http.post("http://localhost:3000/deletesdata",{"survey":x})
    .subscribe(dat=>{console.log(dat)}) 
  }

  setter(x){
    this.smodel=x;
  }
  hi(){
    return this.smodel;
  }

}

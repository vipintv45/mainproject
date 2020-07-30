import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { enumeratorModel } from './enumerator/enumeratormodel';

@Injectable({
  providedIn: 'root'
})
export class EnumeratorService {
  private enumodel:enumeratorModel;

  constructor(private http:HttpClient) { }
  getEnum(){
    
    return this.http.get("http://localhost:3000/enumeratorlist");
  }

  newEnum(data){
    console.log("new enum");
    console.log(data.name);
    return this.http.post("http://localhost:3000/addenum",{"enumerator":data})
    .subscribe(dat=>{console.log(dat)})
    
  }
  delenum(x){
    console.log("inside service")
    console.log(x)
    return this.http.post("http://localhost:3000/deleteenum",{"data":x})
    .subscribe(dat=>{console.log(dat)}) 
  }
 
  editenum(x){
    return this.http.post("http://localhost:3000/editenum",{"enumerator":x})
    .subscribe(dat=>{console.log(dat)}) 
  }





  setter(x){
    this.enumodel=x;
  }
 hi(){return this.enumodel}

}

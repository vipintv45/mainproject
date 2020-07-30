import { Component, OnInit } from '@angular/core';
import { enumeratorModel } from './enumeratormodel';
import { EnumeratorService } from '../enumerator.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-enumerator',
  templateUrl: './enumerator.component.html',
  styleUrls: ['./enumerator.component.css']
})
export class EnumeratorComponent implements OnInit {
  enum:enumeratorModel[];

  constructor(private eservice:EnumeratorService,private router: Router) { }

  addenum()
  {
       this.router.navigate(['/addenumerator'])
  }
editenum(data)
{  
  this.eservice.setter(data);
  this.router.navigate(['/editenumerator'])
}
  deleteenum(data){
   
this.eservice.delenum(data) 
location.reload();
  }



  ngOnInit(): void { 
    this.eservice.getEnum()
    .subscribe((data)=>{
      this.enum =JSON.parse(JSON.stringify(data))
     
  })

  

}

show:boolean = false;
showbtn(){
this.show =!this.show;
}


}


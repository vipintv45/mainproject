import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnumeratorService } from '../enumerator.service';
import { enumeratorModel } from '../enumerator/enumeratormodel';

@Component({
  selector: 'app-editenumerator',
  templateUrl: './editenumerator.component.html',
  styleUrls: ['./editenumerator.component.css']
})
export class EditenumeratorComponent implements OnInit {

  constructor(private router: Router, private eservice:EnumeratorService) { }
  enum1=new enumeratorModel(null,null,null,null,null);
  ngOnInit(): void {
    this.enum1=this.eservice.hi();
  }
  Editenum(){
    this.eservice.editenum(this.enum1);
    alert("Editted")
    this.router.navigate(['/enumerator'])
  }
} 

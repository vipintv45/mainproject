import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnumeratorService } from '../enumerator.service';
import { enumeratorModel } from '../enumerator/enumeratormodel';

@Component({
  selector: 'app-addenumerator',
  templateUrl: './addenumerator.component.html',
  styleUrls: ['./addenumerator.component.css']
})
export class AddenumeratorComponent implements OnInit {

  constructor(private router: Router, private eservice:EnumeratorService) { }
 enum1=new enumeratorModel(null,null,null,null,null);
  ngOnInit(): void {
  }
  Addenum(){
    console.log(this.enum1);
    this.eservice.newEnum(this.enum1)
    alert("sucess")
    this.router.navigate(['/enumerator'])

  }

}

import { Component, OnInit } from '@angular/core';
import { ArealistService } from '../arealist.service';
import { areaModel } from './areamodel'



@Component({
  selector: 'app-arealist',
  templateUrl: './arealist.component.html',
  styleUrls: ['./arealist.component.css']
})




export class ArealistComponent implements OnInit {
  area:areaModel[];
  constructor(private areaser:ArealistService) { }
  ngOnInit(): void {
   // let p = {areaname:"",areacode:""};
  this.areaser.getArea()
  .subscribe((data)=>{
    this.area =JSON.parse(JSON.stringify(data))
    console.log("below array")
    console.log(this.area)
    console.log("above array")

  })
  }

}

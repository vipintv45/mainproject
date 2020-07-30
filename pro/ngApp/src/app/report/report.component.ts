import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { surveyModel } from '../addsdata/suveydata'
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit { 
  sur:surveyModel[];
  constructor(private ser:SurveyService,private router: Router) { }

  ngOnInit(): void { 
    this.ser.getsurvey()
    .subscribe((data)=>{
      this.sur =JSON.parse(JSON.stringify(data))})
  }
  delete(i){ 
    this.ser.deletesurvey(i);
    location.reload();
    console.log(i)
  }
  show:boolean = false;
  showbtn(){
  this.show =!this.show;
  } 


}

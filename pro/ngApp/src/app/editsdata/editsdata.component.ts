import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { surveyModel } from '../addsdata/suveydata';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-editsdata',
  templateUrl: './editsdata.component.html',
  styleUrls: ['./editsdata.component.css']
})
export class EditsdataComponent implements OnInit {
  s = new surveyModel(null,null,null,null,null,null,null)
  constructor(private router: Router,private sservice:SurveyService) { }

  ngOnInit(): void {
    this.s = this.sservice.hi()
  }
test(){
  this.sservice.editsurvey(this.s)
  alert("sucessfull edited")
  this.router.navigate(['/survey/viewdata'])
} 

}

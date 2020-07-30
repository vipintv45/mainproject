import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { surveyModel } from './suveydata';
import { SurveyService } from '../survey.service';
@Component({
  selector: 'app-addsdata',
  templateUrl: './addsdata.component.html',
  styleUrls: ['./addsdata.component.css']
})
export class AddsdataComponent implements OnInit {

  constructor(private router: Router, private sservice:SurveyService) { }
  s = new surveyModel(null,null,null,null,null,null,null)
  ngOnInit(): void { 
  }
  test()
  {
    this.sservice.newsuvey(this.s);
    alert("sucess")
    this.router.navigate(['/survey/viewdata'])
  }

}

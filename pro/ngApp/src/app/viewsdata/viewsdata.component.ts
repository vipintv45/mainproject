import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { surveyModel } from '../addsdata/suveydata'


@Component({
  selector: 'app-viewsdata',
  templateUrl: './viewsdata.component.html',
  styleUrls: ['./viewsdata.component.css']
})
export class ViewsdataComponent implements OnInit {
  
  sur:surveyModel[];
  constructor(private ser:SurveyService,private router: Router) { }

  ngOnInit(): void { 
    
    this.ser.getsurvey()
    .subscribe((data)=>{
      this.sur =JSON.parse(JSON.stringify(data))
  }
    )}

    editenum(i){
      this.ser.setter(i);
      console.log("edit")
      this.router.navigate(['/editsdata'])
    }
   

}
